import {Component} from '@angular/core';
import {PomodoroService} from '../pomodoro-service';

@Component({
  selector: 'app-mode-selection',
  templateUrl: './mode-selection.html',
  styleUrl: './mode-selection.css'
})
export class ModeSelection {
  sessionLength = 25;
  breakLength = 5;

  constructor(private service: PomodoroService) {
    this.service.setSession(this.sessionLength);
    this.service.setBreak(this.breakLength);
  }

  increase(type: 'session' | 'break') {
    if (type === 'session' && this.sessionLength < 60) {
      this.sessionLength++;
      this.service.setSession(this.sessionLength);
    } else if (type === 'break' && this.breakLength < 60) {
      this.breakLength++;
      this.service.setBreak(this.breakLength);
    }
  }

  decrease(type: 'session' | 'break') {
    if (type === 'session' && this.sessionLength > 1) {
      this.sessionLength--;
      this.service.setSession(this.sessionLength);
    } else if (type === 'break' && this.breakLength > 1) {
      this.breakLength--;
      this.service.setBreak(this.breakLength);
    }
  }
}
