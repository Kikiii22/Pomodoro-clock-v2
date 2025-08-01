import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  totalSec: number = 0;
  session = 25;
  break = 5;
  musicPlaying: boolean = true;
  intervalId: any;
  running = false;
  originalTime: number = 0;
  timeUpdated = new EventEmitter<string>();
  timerDone = new EventEmitter<void>();
  musicStudy = new Audio('pausemusic.mp3');
  musicPause = new Audio('music.mp3');
  bell = new Audio('bell.wav');
  currentMode: 'session' | 'break' = 'session';

  emitTime() {
    const minutes = Math.floor(this.totalSec / 60).toString().padStart(2, '0');
    const seconds = (this.totalSec % 60).toString().padStart(2, '0');
    this.timeUpdated.emit(`${minutes}:${seconds}`);
  }

  constructor() {
    this.musicStudy.loop = true;
    this.musicPause.loop = true;
  }

  setSession(length: number) {
    this.originalTime = length * 60;
    this.totalSec = this.originalTime;
    this.emitTime();
  }

  setBreak(length: number) {
    this.break = length;
  }

  stopMusic() {
    this.musicStudy.pause();
    this.musicPause.pause();
  }

  start() {
    if (this.running) {
      return;
    }
    this.running = true;
    this.playMusic();
    this.musicPlaying = true;
    this.intervalId = setInterval(() => {
      if (this.totalSec > 0) {
        this.totalSec--;
        this.emitTime();
      } else {
        this.stop();
        this.timerDone.emit();
        this.bell.play();
        this.switchMode();
        setTimeout(() => {
          this.start();
        }, 2000);

      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.running = false;
    this.stopMusic();
  }

  reset() {
    this.stop();
    this.totalSec = this.originalTime;
    this.emitTime();
  }

  playMusic() {
    if (this.currentMode == 'session') {
      this.musicStudy.play();
      this.musicPlaying = true;
    } else {
      this.musicPause.play();
    }
  }
  private switchMode() {
    if (this.currentMode === 'session') {
      this.currentMode = 'break';
      this.totalSec = this.break * 60;
    } else {
      this.currentMode = 'session';
      this.totalSec = this.session * 60;
    }
    this.originalTime = this.totalSec;
    this.emitTime();
  }

  muteMusic() {
    if (this.musicPlaying) {
      this.stopMusic();
      this.musicPlaying = false;
    } else if (!this.musicPlaying) {
      this.playMusic();
      this.musicPlaying = true;
    }
  }
}
