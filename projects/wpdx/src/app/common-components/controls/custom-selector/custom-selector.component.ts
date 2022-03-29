import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.less']
})
export class CustomSelectorComponent {

  @Input() title: string;
  @Input() value: string;
  @Input() options: {value: string; display: string}[] = [];
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  get _value() {
    return this.value;
  }

  set _value(value) {
    this.value = value;
    this.valueChange.emit(value);
  }

}
