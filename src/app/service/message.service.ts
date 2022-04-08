import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  messageType = '';

  add(message: string) {
    if (message && message !== '') {
      this.messages.push(message);
    }
  }

  clear() {
    this.messages = [];
  }
}
