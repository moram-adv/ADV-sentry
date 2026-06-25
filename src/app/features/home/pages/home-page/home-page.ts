import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AdminPortalDataService } from '../../../../core/services/admin-portal-data.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  private readonly portalData = inject(AdminPortalDataService);

  protected readonly metrics = this.portalData.getHomeMetrics();
  protected readonly recentLocations = this.portalData.getRecentLocations();
  protected readonly recentTemplates = this.portalData.getRecentTemplates();
}
