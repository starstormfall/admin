interface AnnouncementData {
  id: number;
  status: 'active' | 'expired';
  preview: string;
  displayStart: string;
  displayEnd: string;
  announcementType: 'System Maintenance' | 'New Release';
  lastUpdatedTimestamp: string;
  lastUpdatedBy: string;
}

export const backendAnnouncementData: AnnouncementData[] = [
  {
    id: 0,
    status: 'active',
    preview: 'preview',
    displayStart: '1676894400',
    displayEnd: '1677153600',
    announcementType: 'System Maintenance',
    lastUpdatedTimestamp: '1677153600',
    lastUpdatedBy: 'somebody'
  },
  {
    id: 1,
    status: 'active',
    preview: 'preview',
    displayStart: '',
    displayEnd: '',
    announcementType: 'System Maintenance',
    lastUpdatedTimestamp: ' ',
    lastUpdatedBy: 'person a'
  },
  {
    id: 2,
    status: 'expired',
    preview: 'preview',
    displayStart: '',
    displayEnd: '',
    announcementType: 'New Release',
    lastUpdatedTimestamp: ' ',
    lastUpdatedBy: 'person b'
  }
];
