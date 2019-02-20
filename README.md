# Angular Bootstrap Switch (ngx-bootstrap-switch)

This is a Angular 4 Component to add a switch like input. It's basically an Angular 4 port for this: [Bootstrap-Switch](http://www.bootstrap-switch.org/).
Compatibility with angular 4.x - 7.x

See [Demo](https://falget.github.io/ngx-bootstrap-switch/)

---

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
<ngx-switch [status]="value"
            [onText]="onText"
            [offText]="offText"
            [onColor]="onColor"
            [offColor]="offColor"
            [size]="size"
            [disabled]="disabled"
            (statusChange)="onFlagChange($event)">
</ngx-switch>
```
All the attributes are optional.

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [status] | `boolean` | false | no | The current status of the switch (`true`,`false`). This is a two way binding |
| [onText] | `string` |  `On` | no | The text to show on the ON label of the switch |
| [offText] | `string` | `Off` | no | The text to show on the OFF label of the switch |
| [onColor] | `string` | `green` | no | The color of the ON label of the switch (`blue`,`default`,`gray`,`green`,`red`,`sky-blue`,`yellow`) |
| [offColor] | `string` |  `red` | no | The color of the OFF label of the switch (`blue`,`default`,`gray`,`green`,`red`,`sky-blue`,`yellow`) |
| [size] | `string` | `normal` | no | The size of the switch (`mini`,`small`,`normal`,`large`) |
| [disabled] | `boolean` | false | no | Boolean value to enable/disabled the switch |

### Outputs

| Output  | Description |
| ------------- | ------------- |
| (statusChange)  | Event fired on status change |