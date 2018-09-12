import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-asyn-pipe3',
  templateUrl: './asyn-pipe3.component.html',
  styleUrls: ['./asyn-pipe3.component.css']
})
export class AsynPipe3Component implements OnInit, OnDestroy {
  observableData: number;
  subscription: Subscription = null;

  constructor() {
    this.subscribeObservable();
  }

  getObservable() {
    return interval(1000).pipe(take(10), map((v) => v * v));
  }

  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe( v => this.observableData = v);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
  }
}
