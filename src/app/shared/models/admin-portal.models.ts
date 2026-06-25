export interface PortalLocation {
  readonly id: number;
  readonly name: string;
  readonly client: string;
  readonly address: string;
  readonly city: string;
  readonly status: 'Active' | 'Draft' | 'Review';
  readonly contactName: string;
  readonly contactPhone: string;
  readonly assignedTemplate: string;
  readonly lastModified: string;
}

export interface ChecklistItem {
  readonly label: string;
  readonly rule: 'Required' | 'Photo required' | 'Escalate on fail';
}

export interface ChecklistTemplate {
  readonly id: number;
  readonly name: string;
  readonly category: string;
  readonly itemCount: number;
  readonly lastModified: string;
  readonly items: readonly ChecklistItem[];
}

export interface HomeMetric {
  readonly label: string;
  readonly value: string;
  readonly tone: 'blue' | 'gold' | 'green';
}
