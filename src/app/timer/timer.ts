import {Component, OnInit} from '@angular/core';
import {PomodoroService} from '../pomodoro-service';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class Timer implements OnInit{

  constructor(private service: PomodoroService) {

  }

  display :string="25:00"

  ngOnInit(): void {
    this.service.setTime(25,'focus')
    this.service.timeUpdated.subscribe(time => this.display = time);


  }
}
