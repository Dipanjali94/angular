import { Component, OnInit } from '@angular/core';
import { SearchCharactersService } from '../search-characters.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-characters',
  templateUrl: './show-characters.component.html',
  styleUrls: ['./show-characters.component.css']
})
export class ShowCharactersComponent implements OnInit {
  searchResults: Observable<any> | undefined;

  constructor(private searchService: SearchCharactersService) { }
  searchValue: string = '';

  ngOnInit(): void {
  }

  onInputChange(event:any) {
    this.searchValue = event.target.value;
  }

  onSearch() {
    console.log(this.searchValue);
   this.searchService.getSearchedCharacters(this.searchValue)
   .subscribe((response) => {
     this.searchResults = response.data.results.map((res: any) => {
       return res.name
     });
   });
  }
}
