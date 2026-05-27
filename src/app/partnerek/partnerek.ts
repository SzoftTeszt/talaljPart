import { Component, inject } from '@angular/core';
import { Base } from '../base';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-partnerek',
  imports: [JsonPipe],
  templateUrl: './partnerek.html',
  styleUrl: './partnerek.css',
})
export class Partnerek {
  base=inject(Base)
  tarskeresok:any=[]

  constructor(){
    this.base.getAll().subscribe(
      (adatok)=> this.tarskeresok=adatok
    )
  }
}
