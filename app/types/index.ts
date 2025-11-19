export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Center {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  image: string;
  mapPosition: { x: number; y: number };
}

export interface FormData {
  interest: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  studyMethod: string;
  privacyAccepted: boolean;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface NavItem {
  label: string;
  href?: string;
  items?: Array<{ label: string; href: string }>;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}


