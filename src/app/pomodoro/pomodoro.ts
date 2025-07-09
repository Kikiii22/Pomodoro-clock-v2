import {Component} from '@angular/core';
import {ModeSelection} from '../mode-selection/mode-selection';
import {Buttons} from '../buttons/buttons';
import {TimerComponent} from '../timer/timer';

@Component({
  selector: 'app-pomodoro',
  imports: [
    ModeSelection,
    Buttons,
    TimerComponent
  ],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.css'
})
export class Pomodoro {
}
