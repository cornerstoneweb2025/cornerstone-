import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  features: string[];
}

export interface Review {
  id: string;
  text: string;
  author: string;
  company: string;
}

export interface NavItem {
  label: string;
  href: string;
}