import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing— George Bernhard Shaw', 'He who fears he will suffer, already suffers because he fears — Michel De Montaigne', ' You must be the change you wish to see in the world — Gandhi','He who fears he will suffer, already suffers because he fears — Michel De Montaigne']
  }
}