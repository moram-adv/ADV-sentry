import { Component, inject } from '@angular/core';

import { AdminPortalDataService } from '../../../../core/services/admin-portal-data.service';
import { LocationCard } from '../../../../shared/components/location-card/location-card';

@Component({
  selector: 'app-location-page',
  imports: [LocationCard],
  templateUrl: './location-page.html',
  styleUrl: './location-page.scss'
})
export class LocationPage {
  private readonly portalData = inject(AdminPortalDataService);

  protected readonly locations = this.portalData.getLocations();
  protected readonly templates = this.portalData.getTemplates();
}
