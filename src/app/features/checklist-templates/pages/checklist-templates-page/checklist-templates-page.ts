import { Component, inject } from '@angular/core';

import { AdminPortalDataService } from '../../../../core/services/admin-portal-data.service';

@Component({
  selector: 'app-checklist-templates-page',
  templateUrl: './checklist-templates-page.html',
  styleUrl: './checklist-templates-page.scss'
})
export class ChecklistTemplatesPage {
  private readonly portalData = inject(AdminPortalDataService);

  protected readonly templates = this.portalData.getTemplates();
}
