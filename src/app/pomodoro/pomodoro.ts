import { Component } from '@angular/core';
import {PomodoroService} from '../pomodoro-service';
import {ModeSelection} from '../mode-selection/mode-selection';
import {Timer} from '../timer/timer';
import {Buttons} from '../buttons/buttons';

@Component({
  selector: 'app-pomodoro',
  imports: [
    ModeSelection,
    Timer,
    Buttons
  ],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.css'
})
export class Pomodoro {
 constructor(private service: PomodoroService) {}

 currentmode:'focus' | 'short' | 'long'='focus'
  setMode(mode: 'focus' | 'short' | 'long') {
    if (mode === 'focus') {
      this.service.setTime(25,mode);
      this.currentmode = mode;
    }
    else if (mode === 'short') {
      this.service.setTime(5,mode);
      this.currentmode = mode;
    }
    else if (mode === 'long'){
      this.service.setTime(15,mode);
      this.currentmode = mode;
    }

  }
}
