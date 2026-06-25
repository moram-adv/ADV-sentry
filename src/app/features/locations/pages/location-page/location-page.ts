import { Component, signal } from '@angular/core';

type LocationView = 'list' | 'create' | 'taskLists';
type LocationStep = 'location' | 'information' | 'instructions' | 'contact' | 'tasks';

interface FixedLocation {
  readonly id: number;
  readonly identifier: string;
  readonly coordinates: string;
  readonly w3w: string;
  readonly coverageDate: string;
  readonly type: string;
}

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.html',
  styleUrl: './location-page.scss'
})
export class LocationPage {
  protected readonly view = signal<LocationView>('list');
  protected readonly activeStep = signal<LocationStep>('location');
  protected readonly locationSaved = signal(false);

  protected readonly fixedLocations: readonly FixedLocation[] = [
    {
      id: 471639,
      identifier: 'Bachman Lake Park',
      coordinates: '32.8567665, -96.8632025',
      w3w: 'clouds.mile.verge',
      coverageDate: '25 Jun 2026, 6:45 AM',
      type: 'Public Park'
    },
    {
      id: 471638,
      identifier: 'Green leaf bike shop',
      coordinates: '29.9073852, -95.5143531',
      w3w: 'exile.bucks.cubs',
      coverageDate: '25 Jun 2026, 6:45 AM',
      type: 'Retail'
    },
    {
      id: 471630,
      identifier: 'Shell Gas Station Parking Lot',
      coordinates: '29.7595259, -95.6259719',
      w3w: 'nurseries.fallback.photo',
      coverageDate: '25 Jun 2026, 6:45 AM',
      type: 'Parking Lot'
    },
    {
      id: 471629,
      identifier: 'Tacos Los Gorditos',
      coordinates: '29.6767485, -95.2912154',
      w3w: 'detect.earth.arts',
      coverageDate: '25 Jun 2026, 6:45 AM',
      type: 'Restaurant'
    },
    {
      id: 471628,
      identifier: 'Kroger Deli Parking Lot',
      coordinates: '29.6747992, -95.2910580',
      w3w: 'patrol.fled.usage',
      coverageDate: '25 Jun 2026, 6:45 AM',
      type: 'Parking Lot'
    }
  ];

  protected showCreate(): void {
    this.view.set('create');
    this.activeStep.set('location');
  }

  protected showList(): void {
    this.view.set('list');
  }

  protected showTaskLists(): void {
    this.view.set('taskLists');
    this.activeStep.set('tasks');
  }

  protected selectStep(step: LocationStep): void {
    this.activeStep.set(step);
  }

  protected saveLocation(): void {
    this.locationSaved.set(true);
    this.view.set('list');
  }
}
