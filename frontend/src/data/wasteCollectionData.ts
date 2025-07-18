export interface WasteCollectionEntry {
  id: string;
  date: string;
  society: string;
  location: string;
  driveType: string;
  houses: number;
  weight: number; // in kg
  vehicle: string;
  remarks: string;
}

export const wasteCollectionData: WasteCollectionEntry[] = [
  {
    id: '1',
    date: '2024-05-05',
    society: 'ATS One Hamlet',
    location: 'Sector 121, Noida',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 150.5,
    vehicle: 'Mini Truck',
    remarks: 'Good participation from residents. Several households started segregating waste properly.'
  },
  {
    id: '2',
    date: '2024-05-03',
    society: 'Eco Heights',
    location: 'Sector 137, Noida',
    driveType: 'Collection Center',
    houses: 85,
    weight: 320.0,
    vehicle: 'Large Truck',
    remarks: 'Higher plastic waste collection than expected. Need to organize awareness workshop.'
  },
  {
    id: '3',
    date: '2024-05-01',
    society: 'Pine Gardens',
    location: 'Sector 76, Noida',
    driveType: 'Door-to-Door',
    houses: 150,
    weight: 520.8,
    vehicle: 'Mini Truck',
    remarks: 'Organic waste segregation improving. Several residents inquired about home composting.'
  },
  {
    id: '4',
    date: '2024-04-28',
    society: 'Riverside',
    location: 'Sector 50, Gurgaon',
    driveType: 'Community Event',
    houses: 95,
    weight: 380.2,
    vehicle: 'Van',
    remarks: 'Community clean-up event with high participation. Educational session conducted on waste reduction.'
  },
  {
    id: '5',
    date: '2024-04-25',
    society: 'Harmony Hills',
    location: 'Sector 82, Noida',
    driveType: 'Door-to-Door',
    houses: 110,
    weight: 410.5,
    vehicle: 'Mini Truck',
    remarks: 'New collection route optimized. Time reduced by 30 minutes compared to previous collection.'
  },
  {
    id: '6',
    date: '2024-04-22',
    society: 'Green Valley',
    location: 'Sector 18, Gurgaon',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 430.0,
    vehicle: 'Mini Truck',
    remarks: 'E-waste collection drive organized simultaneously. Collected 15 kg of e-waste separately.'
  },
  {
    id: '7',
    date: '2024-04-20',
    society: 'Eco Heights',
    location: 'Sector 137, Noida',
    driveType: 'Collection Center',
    houses: 85,
    weight: 310.5,
    vehicle: 'Large Truck',
    remarks: 'Lower turnout due to holiday weekend. Will need to adjust schedule next time.'
  },
  {
    id: '8',
    date: '2024-04-18',
    society: 'Pine Gardens',
    location: 'Sector 76, Noida',
    driveType: 'Door-to-Door',
    houses: 150,
    weight: 500.0,
    vehicle: 'Mini Truck',
    remarks: 'Distributed educational pamphlets on proper waste segregation. Positive feedback from residents.'
  },
  {
    id: '9',
    date: '2024-04-15',
    society: 'Riverside',
    location: 'Sector 50, Gurgaon',
    driveType: 'Door-to-Door',
    houses: 95,
    weight: 360.5,
    vehicle: 'Mini Truck',
    remarks: 'New collection bins distributed to households. Training provided on proper bin usage.'
  },
  {
    id: '10',
    date: '2024-04-12',
    society: 'Harmony Hills',
    location: 'Sector 82, Noida',
    driveType: 'Community Event',
    houses: 110,
    weight: 425.0,
    vehicle: 'Large Truck',
    remarks: 'Special cleanup drive focusing on common areas. High volume of garden waste collected.'
  },
  {
    id: '11',
    date: '2024-03-30',
    society: 'ATS One Hamlet',
    location: 'Sector 121, Noida',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 445.2,
    vehicle: 'Mini Truck',
    remarks: 'Monthly collection drive with excellent resident cooperation.'
  },
  {
    id: '12',
    date: '2024-03-25',
    society: 'Green Valley',
    location: 'Sector 18, Gurgaon',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 398.7,
    vehicle: 'Mini Truck',
    remarks: 'Regular collection with focus on plastic waste segregation.'
  },
  {
    id: '13',
    date: '2024-03-20',
    society: 'Eco Heights',
    location: 'Sector 137, Noida',
    driveType: 'Collection Center',
    houses: 85,
    weight: 275.3,
    vehicle: 'Large Truck',
    remarks: 'Bi-weekly collection with improved participation rates.'
  },
  {
    id: '14',
    date: '2024-03-15',
    society: 'Pine Gardens',
    location: 'Sector 76, Noida',
    driveType: 'Door-to-Door',
    houses: 150,
    weight: 612.1,
    vehicle: 'Mini Truck',
    remarks: 'Large collection including garden waste from spring cleaning.'
  },
  {
    id: '15',
    date: '2024-03-10',
    society: 'Riverside',
    location: 'Sector 50, Gurgaon',
    driveType: 'Door-to-Door',
    houses: 95,
    weight: 342.8,
    vehicle: 'Van',
    remarks: 'Regular collection with educational pamphlet distribution.'
  },
  {
    id: '16',
    date: '2024-02-28',
    society: 'Harmony Hills',
    location: 'Sector 82, Noida',
    driveType: 'Door-to-Door',
    houses: 110,
    weight: 387.5,
    vehicle: 'Mini Truck',
    remarks: 'End of month collection with good segregation practices.'
  },
  {
    id: '17',
    date: '2024-02-25',
    society: 'ATS One Hamlet',
    location: 'Sector 121, Noida',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 423.6,
    vehicle: 'Mini Truck',
    remarks: 'Regular collection with increased organic waste due to festival season.'
  },
  {
    id: '18',
    date: '2024-02-20',
    society: 'Green Valley',
    location: 'Sector 18, Gurgaon',
    driveType: 'Door-to-Door',
    houses: 120,
    weight: 456.9,
    vehicle: 'Mini Truck',
    remarks: 'High collection volume due to post-festival cleanup.'
  },
  {
    id: '19',
    date: '2024-02-15',
    society: 'Eco Heights',
    location: 'Sector 137, Noida',
    driveType: 'Collection Center',
    houses: 85,
    weight: 298.4,
    vehicle: 'Large Truck',
    remarks: 'Regular bi-weekly collection with steady participation.'
  },
  {
    id: '20',
    date: '2024-02-10',
    society: 'Pine Gardens',
    location: 'Sector 76, Noida',
    driveType: 'Door-to-Door',
    houses: 150,
    weight: 534.7,
    vehicle: 'Mini Truck',
    remarks: 'Large collection including packaging waste from online shopping.'
  }
];
