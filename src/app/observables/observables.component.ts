import { Component, OnInit } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    
    const obs = new Observable(obj => obj.next(Math.random()));
    console.log("Observable");
    obs.subscribe(d => console.log(d));
    obs.subscribe(d => console.log(d));

    const sub = new Subject();
    console.log("subject");
    sub.subscribe(d => console.log(d));
    sub.subscribe(d => console.log(d));
    sub.next(Math.random());

    const bsub = new BehaviorSubject(12);

    console.log("behaviour subject");
    bsub.subscribe(d=>console.log(d));

    bsub.next(200);
    console.log("behaviour subject2");
    bsub.subscribe(d=>console.log(d));

  }
}
