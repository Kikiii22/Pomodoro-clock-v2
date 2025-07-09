import { Component, OnInit } from '@angular/core';
import { PomodoroService } from '../pomodoro-service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.css']
})
export class TimerComponent implements OnInit {
  display: string = '25:00';

  constructor(private service: PomodoroService) {}

  ngOnInit() {
    this.service.timeUpdated.subscribe(t => this.display = t);
  }
}
