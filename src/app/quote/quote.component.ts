import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
   new Quote (1, 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing— George Bernhard Shaw','Experiments are necessary for the experiences that create growth and new opportunities',new Date(2019,3,14)),
   new Quote (2, ' You must be the change you wish to see in the world — Gandhi','Live for what’s worth dying for, and leverage technology to create the world you wish to see.',new Date(2019,6,9)),
   new Quote (3, 'He who fears he will suffer, already suffers because he fears — Michel De Montaigne','FOMO creates suffering, yet those who suffer, have FOMO.',new Date(2019,1,12)),
   new Quote (4, 'Life is really simple, but we insist on making it complicated — Confucius','Life is really simple, but social media has made it complicated.',new Date(2019,0,18)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
   }
 }
 deleteQuote(isComplete,index){
   if(isComplete) {
     let toDelete = confirm ('are you sure you want to delete this quote?')

     if(toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
 
 addNewQuote(Quote) {
  let QuoteLength = this.quotes.length;
  Quote.id = QuoteLength+1;
  Quote.completeDate = new Date(Quote.completeDate)
  this.quotes.push(Quote)
 }
 


  constructor() { }

  ngOnInit() {
  }

}