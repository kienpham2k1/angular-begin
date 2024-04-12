import { HousingLocation } from './housing-location';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingListComponent } from './housing-list/housing-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HousingListComponent, NgIf],
})
export class AppComponent {
  title = 'myApp';
  housingLocationList: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  selectedLocation: HousingLocation | undefined;
  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
