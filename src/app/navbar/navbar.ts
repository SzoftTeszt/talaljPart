import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search-service';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  searchService = inject(SearchService)

  keresendo=""

  keresunk(){
    this.searchService.setKeresendo(this.keresendo)
  }
}
