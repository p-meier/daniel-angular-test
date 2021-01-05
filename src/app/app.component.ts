import {Component, DoCheck, ViewChild} from '@angular/core';
import {HelloWorldComponent} from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{

  @ViewChild('helloWorldComponent') hwComp: HelloWorldComponent;

  label = {name: 'Daniel'};

  displayLabel() {
    alert('Label = ' + this.hwComp.test);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }


}
