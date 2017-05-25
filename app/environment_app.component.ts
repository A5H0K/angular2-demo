import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app',
   templateUrl: './app/test.html'
})

/*@View({
  template: '<strong><h2>My First Angular 2 App created by {{name}}</h2></strong>'
})*/

export class AppComponent {
	firstName='Ashok';
	lastName = 'Balakrishnan';
}