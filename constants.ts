import { Code, Smartphone, BarChart3, Share2, Palette, Zap } from 'lucide-react';
import { Service, Review, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, high-performance websites built with cutting-edge technologies like React and Next.js.',
    icon: Code,
    fullDescription: 'We build digital platforms that define industry standards. Our web development process focuses on performance, scalability, and pixel-perfect implementation. Using modern frameworks like React and Next.js, we create responsive, accessible, and high-converting websites tailored to your brand’s unique needs.',
    features: [
      'Custom React.js & Next.js Development',
      'Headless CMS Integration',
      'High-Performance E-commerce',
      'Progressive Web Apps (PWA)',
      'API Design & Integration'
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: Smartphone,
    fullDescription: 'Transform your ideas into powerful mobile experiences. We specialize in building intuitive, high-performance mobile applications for iOS and Android using React Native and Flutter. Our apps are designed to engage users and drive retention through smooth interactions and robust functionality.',
    features: [
      'iOS & Android Cross-Platform Development',
      'Native Performance Optimization',
      'Intuitive UI/UX for Mobile',
      'Secure Authentication & Data Storage',
      'App Store Deployment & Management'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase brand visibility and drive conversions.',
    icon: BarChart3,
    fullDescription: 'Grow your reach with precision-targeted digital campaigns. Our marketing team combines data analytics with creative strategy to maximize your ROI. From PPC to email marketing, we craft campaigns that resonate with your audience and turn leads into loyal customers.',
    features: [
      'Comprehensive Digital Strategy',
      'PPC Campaign Management',
      'Conversion Rate Optimization (CRO)',
      'Email Marketing Automation',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Curating your brand voice and engaging with your audience across all major platforms.',
    icon: Share2,
    fullDescription: 'Build a community around your brand. We manage your social media presence with curated content, community engagement, and strategic growth planning. We help you tell your story authentically across platforms like Instagram, LinkedIn, and Twitter.',
    features: [
      'Content Creation & Curation',
      'Community Management',
      'Influencer Partnerships',
      'Social Media Advertising',
      'Trend Analysis & Strategy'
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    description: 'Intuitive and visually stunning interfaces designed for user retention and satisfaction.',
    icon: Palette,
    fullDescription: 'Design that works as good as it looks. Our design philosophy centers on the user. We create intuitive, accessible, and aesthetically pleasing interfaces that guide users effortlessly through your digital product. We blend brand identity with usability best practices.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Interaction Design',
      'Usability Testing'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Performance',
    description: 'Optimizing for search engines and speed to ensure your digital foundation is solid.',
    icon: Zap,
    fullDescription: 'Visibility is everything. We optimize your digital assets to rank higher on search engines and load faster for users. Our holistic approach to SEO covers technical, on-page, and off-page strategies to drive organic traffic and improve user experience.',
    features: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'Core Web Vitals Optimization',
      'Content Optimization',
      'Local SEO & Listings'
    ]
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    text: 'Exceptional quality and strategy-driven execution. They completely revitalized our online presence.',
    author: 'James Sterling',
    company: 'Sterling Finance',
  },
  {
    id: '2',
    text: 'Cornerstone Web elevated our brand presence beyond what we imagined possible.',
    author: 'Elena Vance',
    company: 'Vance Interiors',
  },
  {
    id: '3',
    text: 'A premium agency with elite standards. The attention to detail is unmatched.',
    author: 'Marcus Thorne',
    company: 'Thorne Logistics',
  },
  {
    id: '4',
    text: 'Professional, timely, and incredibly talented. A true partner in our growth.',
    author: 'Sarah Jenkins',
    company: 'Aura Beauty',
  },
  {
    id: '5',
    text: 'Their technical expertise combined with their design sense is rare to find.',
    author: 'David Chen',
    company: 'Nexus Tech',
  },
];

export const TRUSTED_BRANDS = [
  "NOVA", "HORIZON", "VELOCITY", "APEX", "ZENITH", "PRIME", "ELEVATE"
];