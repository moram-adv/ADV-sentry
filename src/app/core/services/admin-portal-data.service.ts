import { Injectable } from '@angular/core';

import {
  ChecklistTemplate,
  HomeMetric,
  PortalLocation
} from '../../shared/models/admin-portal.models';

@Injectable({ providedIn: 'root' })
export class AdminPortalDataService {
  private readonly locations: readonly PortalLocation[] = [
    {
      id: 1001,
      name: 'North Gate Corporate Tower',
      client: 'Apex Financial Services',
      address: '18 Residency Road',
      city: 'Bengaluru',
      status: 'Active',
      contactName: 'Rohan Mehta',
      contactPhone: '+91 98765 42010',
      assignedTemplate: 'Corporate Lobby Patrol',
      lastModified: 'Today, 09:40'
    },
    {
      id: 1002,
      name: 'Harbour Logistics Yard',
      client: 'BlueLine Freight',
      address: 'Dock 4, Industrial Wharf',
      city: 'Kochi',
      status: 'Review',
      contactName: 'Anita Joseph',
      contactPhone: '+91 98470 11920',
      assignedTemplate: 'Perimeter Security Sweep',
      lastModified: 'Yesterday, 17:15'
    },
    {
      id: 1003,
      name: 'Metro Retail Plaza',
      client: 'UrbanNest Retail',
      address: 'Plot 42, MG Road',
      city: 'Hyderabad',
      status: 'Draft',
      contactName: 'Vikram Rao',
      contactPhone: '+91 90080 33114',
      assignedTemplate: 'Mall Closing Inspection',
      lastModified: '24 Jun, 14:05'
    }
  ];

  private readonly templates: readonly ChecklistTemplate[] = [
    {
      id: 501,
      name: 'Corporate Lobby Patrol',
      category: 'Access Control',
      itemCount: 8,
      lastModified: 'Today, 08:55',
      items: [
        { label: 'Verify visitor log and badge returns', rule: 'Required' },
        { label: 'Inspect reception panic button visibility', rule: 'Photo required' },
        { label: 'Escalate unattended package observation', rule: 'Escalate on fail' }
      ]
    },
    {
      id: 502,
      name: 'Perimeter Security Sweep',
      category: 'Outdoor Patrol',
      itemCount: 11,
      lastModified: 'Yesterday, 16:20',
      items: [
        { label: 'Check boundary lighting and blind spots', rule: 'Required' },
        { label: 'Capture gate lock condition', rule: 'Photo required' },
        { label: 'Escalate fence breach or forced entry signs', rule: 'Escalate on fail' }
      ]
    },
    {
      id: 503,
      name: 'Mall Closing Inspection',
      category: 'Retail',
      itemCount: 9,
      lastModified: '23 Jun, 19:30',
      items: [
        { label: 'Confirm shutter closure by zone', rule: 'Required' },
        { label: 'Photograph cash office corridor', rule: 'Photo required' },
        { label: 'Escalate open service doors', rule: 'Escalate on fail' }
      ]
    }
  ];

  getHomeMetrics(): readonly HomeMetric[] {
    return [
      { label: 'Total locations', value: String(this.locations.length), tone: 'blue' },
      { label: 'Checklist templates', value: String(this.templates.length), tone: 'gold' },
      { label: 'Assigned templates', value: '3', tone: 'green' }
    ];
  }

  getLocations(): readonly PortalLocation[] {
    return this.locations;
  }

  getTemplates(): readonly ChecklistTemplate[] {
    return this.templates;
  }

  getRecentLocations(): readonly PortalLocation[] {
    return this.locations.slice(0, 3);
  }

  getRecentTemplates(): readonly ChecklistTemplate[] {
    return this.templates.slice(0, 3);
  }
}
