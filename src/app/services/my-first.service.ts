import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: "james",
      email: "james@gmail.com",
      message: "hello james"
    });
    this.insert({
      name: "ken",
      email: "kenito@gmail.com",
      message: "hello jane"
    });
    this.insert({
      name: "david",
      email: "dave@gmail.com",
      message: "hello dave"
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message)
  }

  getAllMessages():any {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }

}
