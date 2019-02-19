# Angular Bootstrap Switch (ngx-bootstrap-switch)

This is a Angular 2 Component to add a switch like input. It's basically an Angular 2 port for this: [Bootstrap-Switch](http://www.bootstrap-switch.org/).

### Installation

```sh
$ npm install --save ngx-bootstrap-switch
```
Install animations package:
```sh
$ npm install @angular/animations --save
```

Then, add it to your `app.module`
```ts
...
import { NgxBootstrapSwitchModule } from 'ngx-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ...
    NgxBootstrapSwitchModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    ...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

For styling purposes, you should add the Bootstrap stylesheet to your `index.html`
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

### Usage
In your component template you just need to add the <ngx-switch></ngx-switch> component with the bindings you want. Like this:
```html
<switch
    [status]="value"
    [onText]="onText"
    [offText]="offText"
    [onColor]="onColor"
    [offColor]="offColor"
    [size]="size"
    [disabled]="disabled"
    (statusChange)="onFlagChange($event)"></switch>
```
All the attributes are optional.

`status`:  The current status of the switch (true|false). This is a two way binding

`onText`:  The text to show on the ON label of the switch

`offText`:  The text to show on the OFF label of the switch

`onColor`:  The color of the ON label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`offColor`:  The color of the OFF label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`size`: The size of the switch ("mini"|"small"|"normal"|"large")

`disabled`: Boolean value to enable/disabled the switch

Events:

`statusChange`: Event fired on status change
