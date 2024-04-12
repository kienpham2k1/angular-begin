import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.scss'
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = []
  results: HousingLocation[] = []
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  searchHousingLocations(searchText: string) {
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        ));
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
