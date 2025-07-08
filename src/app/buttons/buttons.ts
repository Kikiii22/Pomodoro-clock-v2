import {Component, Output} from '@angular/core';
import {PomodoroService} from '../pomodoro-service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Buttons {
  constructor(private service:PomodoroService) {}

  start() {
    this.service.start();
  }

  stop() {
    this.service.stop();
  }

  reset() {
    this.service.reset();
  }
}
