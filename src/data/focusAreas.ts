import { FocusArea } from '../types';

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'education-research-scholarships',
    title: 'Education, Research and Scholarships',
    titleBn: 'শিক্ষা, গবেষণা ও বৃত্তি কার্যক্রম',
    category: 'Human Welfare',
    tagline: 'Fostering academic excellence and breaking generational poverty cycles.',
    description: 'Providing merit-cum-need scholarships to underprivileged students from rural and char areas across Bangladesh, funding community research on social policy, and establishing smart literacy centers.',
    keyInitiatives: [
      'Afzal Higher Secondary & University Merit Scholarships',
      'Char & Remote Coastal Area Book Donation & School Supply Drives',
      'Applied Social Research Grants on Grassroots Poverty Reduction',
      'Free STEM & English Tutoring Hubs for Low-Income Youth'
    ],
    impactMetric: '4,280+',
    impactLabel: 'Students Funded',
    icon: 'GraduationCap'
  },
  {
    id: 'medical-healthcare-assistance',
    title: 'Medical and Healthcare Assistance',
    titleBn: 'চিকিৎসা ও স্বাস্থ্যসেবা সহায়তা',
    category: 'Health & Relief',
    tagline: 'Ensuring essential clinical treatment and preventative care reach everyone.',
    description: 'Operating free mobile medical units, subsidized prescription medicine supply, maternal-child health checkups, and specialized surgical emergency support for critical illnesses.',
    keyInitiatives: [
      'Bi-Weekly Free Rural Medical Camps with Registered Physicians',
      'Emergency Surgical Fund for Cancer, Heart & Kidney Patients',
      'Maternal & Neonatal Nutrition Assistance Program',
      'Free Cataract Surgery & Eyeglass Distribution Drives'
    ],
    impactMetric: '38,500+',
    impactLabel: 'Patients Treated',
    icon: 'Stethoscope'
  },
  {
    id: 'poverty-relief',
    title: 'Poverty Relief',
    titleBn: 'দারিদ্র্য বিমোচন ও খাদ্য সহায়তা',
    category: 'Health & Relief',
    tagline: 'Direct, humane alleviation of chronic hunger and economic deprivation.',
    description: 'Emergency ration supplies, seasonal winter clothing distributions, flood and natural disaster relief, and income-generating asset grants such as sewing machines and livestock.',
    keyInitiatives: [
      'Monthly Household Nutrition Baskets for Ultra-Poor Families',
      'Winter Blanket & Warm Clothing Distribution in Northern Districts',
      'Flash Flood and Cyclone Rapid Food Relief Deployments',
      'Livelihood Asset Grants (Rickshaw Vans, Sewing Units, Seed Capital)'
    ],
    impactMetric: '62,000+',
    impactLabel: 'Ration Kits Delivered',
    icon: 'HandHeart'
  },
  {
    id: 'assistance-vulnerable-persons',
    title: 'Assistance to Vulnerable Persons',
    titleBn: 'অসহায় ও প্রান্তিক মানুষের সহায়তা',
    category: 'Human Welfare',
    tagline: 'A protective safety net for persons with disabilities, widows, and victims of distress.',
    description: 'Specialized assistance programs designed for persons with physical and neurological disabilities, deserted women, single mothers, and climate-displaced families.',
    keyInitiatives: [
      'Wheelchairs, Hearing Aids & Assistive Devices Distribution',
      'Legal Aid & Psycho-Social Counseling for Distressed Women',
      'Widow Stipends & Monthly Living Subsidy Grants',
      'Accessibility Audits for Community Infrastructure'
    ],
    impactMetric: '3,840+',
    impactLabel: 'Individuals Protected',
    icon: 'ShieldCheck'
  },
  {
    id: 'old-age-home-orphanage',
    title: 'Old Age Home and Orphanage Initiatives',
    titleBn: 'বৃদ্ধাশ্রম ও এতিমখানা উদ্যোগ',
    category: 'Human Welfare',
    tagline: 'Dignified shelter, compassionate care, and holistic upbringing.',
    description: 'Establishing humane residential senior care shelters where abandoned elderly live with medical monitoring and respect, alongside orphanages ensuring nutritious food, education, and moral guidance.',
    keyInitiatives: [
      'Afzal Senior Sanctuary: Residential Care & Healthcare for Abandoned Elders',
      'Orphan Education & Foster Mentorship Program',
      'Recreational & Mental Wellness Programs for Senior Citizens',
      'Transition Career Guidance for Youth Leaving Orphanages'
    ],
    impactMetric: '420+',
    impactLabel: 'Residents & Orphans Sheltered',
    icon: 'Home'
  },
  {
    id: 'charitable-public-utility',
    title: 'Charitable and General Public Utility',
    titleBn: 'দাতব্য ও সর্বসাধারণের কল্যাণমূলক সেবা',
    category: 'Human Welfare',
    tagline: 'Civic infrastructure improving daily health, sanitation, and safety.',
    description: 'Installing deep tube-wells for arsenic-free safe drinking water, constructing hygienic community toilets in slums, repairing vulnerable village bridges, and establishing street solar illumination.',
    keyInitiatives: [
      'Arsenic-Free Deep Tube Wells & Solar Water Filtration Systems',
      'Public Hygiene & Sanitation Complexes in Rural Marketplaces',
      'Bamboo & Concrete Footbridge Repairs in Remote Char Villages',
      'Public Funeral & Burial Support for Unidentified / Destitute Deceased'
    ],
    impactMetric: '185+',
    impactLabel: 'Water Wells & Works Built',
    icon: 'Building2'
  },
  {
    id: 'fundraising-property-endowments',
    title: 'Fundraising, Property and Endowments',
    titleBn: 'তহবিল সংগ্রহ, ওয়াকফ ও স্থায়ী সম্পদ ব্যবস্থাপনা',
    category: 'Future & Sustainability',
    tagline: 'Perpetual charity (Sadaqah Jariyah) and transparent capital governance.',
    description: 'Mobilizing community donations, managing charitable Waqf and real estate endowments, ensuring full statutory compliance, zero leakage, and long-term financial self-reliance.',
    keyInitiatives: [
      'Endowment (Waqf) Asset Management for Perpetual Charity',
      'Fully Audited Public Financial Ledger & Annual Reports',
      'Zakat & Sadaqah Distribution Advisory Desk',
      'Micro-Donation Drives & Diaspora Remittance Philanthropy'
    ],
    impactMetric: '100%',
    impactLabel: 'Transparent Accounting',
    icon: 'Landmark'
  },
  {
    id: 'citizen-journalism',
    title: 'Citizen Journalism',
    titleBn: 'নাগরিক সাংবাদিকতা ও তৃণমূল কণ্ঠস্বর',
    category: 'Empowerment & Inclusion',
    tagline: 'Amplifying the unheard stories of grassroots Bangladesh with integrity.',
    description: 'Training youth and rural community members in ethical reporting, mobile storytelling, and grassroots investigative journalism to highlight local issues, corruption, and humanitarian crises.',
    keyInitiatives: [
      'Grassroots Media Literacy & Ethics Training Bootcamps',
      'The Village Voice: Community Spotlight & Fact-Checking Initiative',
      'Climate Emergency Storytelling from Coastal Disaster Zones',
      'Safety and Digital Rights Workshops for Grassroots Reporters'
    ],
    impactMetric: '650+',
    impactLabel: 'Local Reporters Trained',
    icon: 'Newspaper'
  },
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness',
    titleBn: 'পরিবেশ সচেতনতা ও জলবায়ু সুরক্ষা',
    category: 'Future & Sustainability',
    tagline: 'Restoring ecosystems, combating plastic pollution, and building climate resilience.',
    description: 'Nationwide mangrove and native tree plantation campaigns, plastic cleanup in rivers and canals, renewable solar awareness, and youth climate leadership conferences.',
    keyInitiatives: [
      'Green Bangladesh 100,000 Mangrove & Fruit Tree Plantation',
      'River Clean-up & Single-Use Plastic Reduction Campaigns',
      'School Climate Action Clubs & Biodiversity Walks',
      'Eco-Friendly Farming & Composting Training for Smallholders'
    ],
    impactMetric: '120,000+',
    impactLabel: 'Saplings Planted',
    icon: 'Leaf'
  },
  {
    id: 'digital-learning-security',
    title: 'Digital Learning and Security',
    titleBn: 'ডিজিটাল শিক্ষা ও সাইবার নিরাপত্তা',
    category: 'Future & Sustainability',
    tagline: 'Democratizing technological literacy while safeguarding online spaces.',
    description: 'Providing computer training labs in semi-urban areas, coding workshops for girls, cybersecurity awareness against financial scams, and ethical AI understanding.',
    keyInitiatives: [
      'Rural Digital Labs: Basic Computing, Typing & Internet Literacy',
      'Cyber-Safety Workshops for School Students & Women against Harassment',
      'Mobile Financial Services (bKash/Nagad) Anti-Fraud Awareness Campaigns',
      'Freelancing & Digital Skill Foundations for Unemployed Graduates'
    ],
    impactMetric: '8,400+',
    impactLabel: 'Youth Digitally Skilled',
    icon: 'Laptop'
  },
  {
    id: 'transgender-initiatives',
    title: 'Third gender or Transgender Initiatives',
    titleBn: 'তৃতীয় লিঙ্গ ও হিজড়া জনগোষ্ঠীর উন্নয়ন',
    category: 'Empowerment & Inclusion',
    tagline: 'Equal human dignity, vocational independence, and societal integration.',
    description: 'Creating vocational training centers, tailoring, beauty salon and small business mentorship, psychological health support, and anti-stigma community dialogues for the Hijra and transgender community.',
    keyInitiatives: [
      'Aalor Dishari: Tailoring, Handicrafts & Culinary Vocational Academy',
      'Micro-Grant Seed Capital for Transgender-Led Small Businesses',
      'Sensitization Workshops with Local Employers & Landlords',
      'Free Healthcare, Identity Documentation & Legal Rights Support'
    ],
    impactMetric: '1,150+',
    impactLabel: 'Members Empowered',
    icon: 'Users'
  },
  {
    id: 'national-international-cooperation',
    title: 'National and International co-operation',
    titleBn: 'জাতীয় ও আন্তর্জাতিক সহযোগিতা',
    category: 'Empowerment & Inclusion',
    tagline: 'Building cross-sector alliances to amplify social impact.',
    description: 'Partnering with government welfare ministries, INGOs, diaspora Bangladeshis in North America, UK, Europe and Middle East, and universities for joint social development projects.',
    keyInitiatives: [
      'Global Diaspora Philanthropy Liaison Office',
      'Collaborative Research with Academic Institutions & Think Tanks',
      'Joint Emergency Response Alliances with National Red Crescent & NGOs',
      'SDG (Sustainable Development Goals) Progress Monitoring Forums'
    ],
    impactMetric: '24+',
    impactLabel: 'Strategic Partners',
    icon: 'Globe'
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    titleBn: 'স্বেচ্ছাসেবক নেটওয়ার্ক ও নেতৃত্ব বিকাশ',
    category: 'Empowerment & Inclusion',
    tagline: 'Harnessing the immense passion of Bangladeshi youth for nation-building.',
    description: 'Mobilizing an active network of over 5,000 student and professional volunteers across 64 districts for disaster mitigation, blood donation, health camps, and community teaching.',
    keyInitiatives: [
      'Afzal Volunteer Corps: 64 District Rapid Response Units',
      'National Blood Donation Hotline & Emergency Donor Database',
      'Annual Youth Leadership & Social Impact Summer Camp',
      'Volunteer Certification & Community Impact Awards'
    ],
    impactMetric: '5,200+',
    impactLabel: 'Active Volunteers',
    icon: 'HeartHandshake'
  },
  {
    id: 'advocacy-awareness-against-drugs',
    title: 'Advocacy and awareness against drugs',
    titleBn: 'মাদকমুক্ত সমাজ গঠন ও পুনর্বাসন সচেতনতা',
    category: 'Health & Relief',
    tagline: 'Protecting youth from narcotics through awareness and rehabilitation paths.',
    description: 'School, college and madrasha anti-drug campaigns, family counseling for affected households, sports and cultural alternatives for youth, and referrals to certified rehabilitation centers.',
    keyInitiatives: [
      'Youth Against Narcotics: Campus Seminars & Street Theatres',
      'Confidential Family Guidance & Substance Abuse Consultation Desk',
      'Community Sports Tournaments (Football & Cricket) to Engage Youth',
      'Vocational Rehabilitation Bridges for Recovering Individuals'
    ],
    impactMetric: '45,000+',
    impactLabel: 'Youth Reached',
    icon: 'ShieldAlert'
  },
  {
    id: 'beyond-borders',
    title: 'Beyond Borders',
    titleBn: 'সীমানা পেরিয়ে বৈশ্বিক মানবিক সহায়তা',
    category: 'Future & Sustainability',
    tagline: 'Universal human solidarity in times of extreme humanitarian catastrophe.',
    description: 'Extending compassion to refugees, displaced populations, and international crisis zones through recognized international relief corridors and humanitarian aid missions.',
    keyInitiatives: [
      'Rohingya Displaced Population Child Education & Winter Clothes Support',
      'Solidarity Aid for Global Disaster & Conflict-Affected Civilian Victims',
      'Cross-Border Climate Resilience Exchange in South Asia',
      'Medical Supplies Shipping in Partnership with Global Health Charities'
    ],
    impactMetric: '15,000+',
    impactLabel: 'Refugees & Displaced Aided',
    icon: 'Compass'
  },
  {
    id: 'social-enterprise-development',
    title: 'Social Enterprise Development',
    titleBn: 'সামাজিক ব্যবসা ও উদ্যোক্তা উন্নয়ন',
    category: 'Future & Sustainability',
    tagline: 'Creating self-sustaining enterprises that solve social problems.',
    description: 'Incubating micro-enterprises run by rural artisans, women cooperatives, and marginalized groups so they earn recurring dignified livelihoods rather than relying on hand-to-mouth charity.',
    keyInitiatives: [
      'Rural Women Nakshi Kantha & Jute Handicrafts Fair-Trade Cooperative',
      'Organic Village Honey & Cold-Pressed Mustard Oil Collective',
      'Micro-Franchise Seed Funding for Low-Income Women Entrepreneurs',
      'Direct-to-Market Supply Chains Eliminating Exploitative Middlemen'
    ],
    impactMetric: '920+',
    impactLabel: 'Micro-Businesses Launched',
    icon: 'Briefcase'
  }
];
