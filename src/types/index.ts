export interface FocusArea {
  id: string;
  title: string;
  titleBn: string;
  category: 'Human Welfare' | 'Health & Relief' | 'Empowerment & Inclusion' | 'Future & Sustainability';
  tagline: string;
  description: string;
  keyInitiatives: string[];
  impactMetric: string;
  impactLabel: string;
  icon: string;
}

export type NoticeCategory =
  | 'All'
  | 'Official Notice'
  | 'Scholarship & Grants'
  | 'Emergency Relief'
  | 'Health Camps'
  | 'Tender & Procurement'
  | 'Annual General Meeting'
  | 'Volunteer Call';

export interface NoticeItem {
  id: string;
  noticeNumber: string;
  title: string;
  titleBn: string;
  category: NoticeCategory;
  publishedDate: string;
  isPinned?: boolean;
  summary: string;
  content: string[];
  issuedBy: string;
  attachmentName?: string;
}

export interface MemberRecord {
  id: string;
  certificateNo: string;
  fullName: string;
  email: string;
  phone: string;
  nidOrBirthCert: string;
  bloodGroup: string;
  district: string;
  occupation: string;
  primaryInterest: string;
  joinedDate: string;
  expiryDate: string;
  paymentMethod: 'bKash' | 'Nagad' | 'Rocket' | 'Bank Card';
  transactionId: string;
  amount: number; // 250 Taka
  status: 'Active' | 'Pending Verification';
  membershipTier: 'General Associate Member';
}

export interface DonationRecord {
  donorName: string;
  email: string;
  phone: string;
  amount: number;
  cause: string;
  paymentMethod: string;
  transactionId: string;
  date: string;
  receiptNumber: string;
}

export type VolunteerExpertise =
  | 'Medical & Healthcare (Doctor / Nurse / Paramedic)'
  | 'Education & Tutoring (Teacher / Academic / Student)'
  | 'IT, Web & Cybersecurity'
  | 'Legal Aid & Human Rights'
  | 'Media, Journalism & Photography'
  | 'Emergency Disaster Relief & Logistics'
  | 'Psychosocial Counseling & Social Work'
  | 'Vocational & Artisan Training'
  | 'Environmental Science & Forestry'
  | 'Youth Coordination & Field Operations'
  | 'General Community Support';

export interface VolunteerRecord {
  id: string;
  volunteerId: string;
  fullName: string;
  email: string;
  phone: string;
  district: string;
  bloodGroup: string;
  expertiseArea: VolunteerExpertise;
  skillsDescription: string;
  selectedFocusAreas: string[];
  availability: 'Weekends Only' | 'Weekdays / Flexible' | 'Emergency Rapid Deployment' | 'Full-Time Project Volunteer';
  motivation: string;
  registeredDate: string;
  status: 'Active Volunteer Corps' | 'Pending Orientation';
}
