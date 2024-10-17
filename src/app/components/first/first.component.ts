import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Messages} from "../../messages";
import {MessageDetailsComponent} from "../message-details/message-details.component";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailsComponent
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})


export class FirstComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<Messages> = [];

  protected readonly structuredClone = structuredClone;

  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message
    });
    console.log(this.messages);

  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
