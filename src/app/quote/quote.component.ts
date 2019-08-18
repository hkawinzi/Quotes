import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    { id:1, name: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing— George Bernhard Shaw', description:'Experiments are necessary for the experiences that create growth and new opportunities.'},
    {id:2, name: ' You must be the change you wish to see in the world — Gandhi',description:'Live for what’s worth dying for, and leverage technology to create the world you wish to see.'},
    {id:3, name: 'He who fears he will suffer, already suffers because he fears — Michel De Montaigne',description:'FOMO creates suffering, yet those who suffer, have FOMO.'},
    {id:4, name: 'Life is really simple, but we insist on making it complicated — Confucius',description:'Life is really simple, but social media has made it complicated.'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
