import { Component, inject } from '@angular/core';
import { Base } from '../base';
import { JsonPipe } from '@angular/common';
import { SearchPipe } from '../search-pipe';
import { SearchService } from '../search-service';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../sort-pipe';

@Component({
  selector: 'app-partnerek',
  imports: [JsonPipe, SearchPipe,SortPipe, FormsModule],
  templateUrl: './partnerek.html',
  styleUrl: './partnerek.css',
})
export class Partnerek {
  base=inject(Base)
  tarskeresok:any=[]
  searchService = inject(SearchService)

  keresendo=this.searchService.keresendo
  
  rendezes=[
    {text:"Nincs rendezés",key:"",sort:1 , value:0, selected:"true"},
    {text:"Életkor szerint növekvő",key:"age",sort:1 , value:1, selected:"false"},
    {text:"Életkor szerint csökkenő",key:"age",sort:-1 , value:2, selected:"false"}
  ]

  mitRendezek=0

  rendezunk(){
    console.log(this.mitRendezek)
  }

  constructor(){
    this.base.getAll().subscribe(
      (adatok)=> this.tarskeresok=adatok
    )
  }
}
