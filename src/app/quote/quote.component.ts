import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
   new Quote (1, 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing— George Bernhard Shaw','Experiments are necessary for the experiences that create growth and new opportunities'),
   new Quote (2, ' You must be the change you wish to see in the world — Gandhi','Live for what’s worth dying for, and leverage technology to create the world you wish to see.'),
   new Quote (3, 'He who fears he will suffer, already suffers because he fears — Michel De Montaigne','FOMO creates suffering, yet those who suffer, have FOMO.'),
   new Quote (4, 'Life is really simple, but we insist on making it complicated — Confucius','Life is really simple, but social media has made it complicated.'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
