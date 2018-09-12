import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyn-pipe',
  templateUrl: './asyn-pipe.component.html',
  styleUrls: ['./asyn-pipe.component.css']
})
export class AsynPipeComponent implements OnInit {
  promiseData: any;

  constructor() {
    this.getPromise().then(v => this.promiseData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise zavrsen!'), 3000);
    });
  }

  ngOnInit() {
  }
}
