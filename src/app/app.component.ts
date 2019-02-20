import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public value: boolean = true;
  public onText: string = 'Yes';
  public offText: string = 'No';
  public onColor: string = 'blue';
  public offColor: string = 'red';
  public size: string = 'normal';
  public disabled: boolean = false;

  public colors: string[] = ['blue', 'default', 'gray', 'green', 'red', 'sky-blue', 'yellow'];
  public sizes: string[] = ['mini', 'small', 'normal', 'large'];

  constructor(
  ) { }

  ngOnInit() {
  }

  private onSwitchChange(event: any) {
    console.log(event);
  }
}
