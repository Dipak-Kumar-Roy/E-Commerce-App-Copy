import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { listData } from './shared/list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  list = listData.reverse();
  @ViewChild('searchbar')
  searchbar!: ElementRef;
  searchText = '';
  suggestions: string[] = [];
  toggleSearch: boolean = false;

  constructor(private http: HttpClient) {}

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
    this.suggestions = [];
  }

  onSearchInput() {
    if (this.searchText.length > 2) {
      this.fetchSuggestions().subscribe(suggestions => {
        this.suggestions = suggestions;
      });
    } else {
      this.suggestions = [];
    }
  }

  fetchSuggestions() {
    return this.http.get<string[]>('/api/suggestions', { params: { query: this.searchText } });
  }

  onSuggestionSelected(suggestion: string) {
    this.searchText = suggestion;
    this.suggestions = [];

  }
}







// export class NavbarComponent {
//   isSearching: boolean = false;
//   searchTerm: string = '';

//   toggleSearch() {
//     this.isSearching = !this.isSearching;
//     if (!this.isSearching) {
//       this.searchTerm = '';
//     }
//   }

//   closeSearch() {
//     this.isSearching = false;
//     this.searchTerm = '';
//   }

// }
