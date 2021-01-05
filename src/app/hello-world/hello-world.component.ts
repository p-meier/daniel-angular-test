import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnChanges {

  @Input() label: any;
  test = "Public variable from HelloWorldComponent"

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('Input changed: ' + this.label);
  }

}
