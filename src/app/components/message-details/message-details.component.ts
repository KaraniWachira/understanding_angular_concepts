import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Messages} from "../../messages";

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})


export class MessageDetailsComponent {

  @Input()
  message: any = {}
  @Input()
  index: number = -1;


  @Output()
  // declare a variable
  delete: EventEmitter<number> = new EventEmitter();
  onDelete() {
    this.delete.emit(this.index);
  }
}
