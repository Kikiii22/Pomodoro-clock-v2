import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mode-selection',
  templateUrl: './mode-selection.html',
  styleUrl: './mode-selection.css'
})
export class ModeSelection {
  @Output() modeSelected=new EventEmitter<'focus'|'short'|'long'>();
  selected:'focus' | 'short' | 'long' ='focus';
  setMode(mode: 'focus' | 'short' | 'long')
  {
    this.selected=mode;
    this.modeSelected.emit(mode);
  }
}
