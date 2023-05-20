import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  imports: [ReactiveFormsModule]
})
export class SearchInputComponent {
  @ViewChild("search") searchField!: ElementRef;

  applySearch = new FormGroup({
    search: new FormControl(''),
  });

  focusInput(): void {
    this.searchField.nativeElement.focus();
  }

  handleSearch(): void {
    console.log(this.applySearch.value.search)
  }
}
