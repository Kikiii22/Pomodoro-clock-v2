import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PomodoroService} from '../pomodoro-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-timer',
  imports: [
    FormsModule
  ],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class Timer implements OnInit {

  constructor(private service: PomodoroService) {
  }

  @Input() currentmode: 'focus' | 'short' | 'long' = 'focus';
  customMinutes: number = 25;
  display: string = "25:00"

  ngOnInit(): void {
    this.service.setTime(25, 'focus')
    this.service.timeUpdated.subscribe(time => this.display = time);
  }

  setCustomTime() {
    this.service.setTime(this.customMinutes, this.currentmode);

  }
}
