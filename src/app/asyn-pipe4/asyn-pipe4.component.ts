import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-asyn-pipe4',
  templateUrl: './asyn-pipe4.component.html',
  styleUrls: ['./asyn-pipe4.component.css']
})
export class AsynPipe4Component {
  observable: Observable<number>;

  constructor() {
    this.observable = this.getObservable();
  }

  getObservable() {
    return interval(1000).pipe(take(10), map((v) => v * v));
  }

  ngOnInit() {
  }
}
