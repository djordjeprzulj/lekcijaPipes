import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyn-pipe2',
  templateUrl: './asyn-pipe2.component.html',
  styleUrls: ['./asyn-pipe2.component.css']
})
export class AsynPipe2Component {
  promise: Promise<any>;

  constructor() {
    this.promise = this.getPromise();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise zavrsen!'), 3000);
    });
  }
}