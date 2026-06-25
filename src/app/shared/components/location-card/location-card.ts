import { Component, input } from '@angular/core';

import { PortalLocation } from '../../models/admin-portal.models';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.html',
  styleUrl: './location-card.scss'
})
export class LocationCard {
  readonly location = input.required<PortalLocation>();
}
