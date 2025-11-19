# Wall Street English Homepage - Implementation Plan

## Project Overview
Convert Figma design to a fully functional Next.js homepage with organized components, interactive features, and Tailwind CSS styling.

---

## 1. Project Setup & Configuration

### Dependencies to Install
```bash
npm install lucide-react
```

### Font Configuration
- Update `app/layout.tsx` to include Google Fonts:
  - **Inter** - Replacement for Arial/Avenir
  - **Plus Jakarta Sans** - Replacement for Avenir Next Cyr
  
### Tailwind Configuration
Update `tailwind.config.ts` with custom colors:

```typescript
colors: {
  primary: {
    DEFAULT: '#013359',
    red: '#F12B3E',
    cyan: '#4DD4F5',
    blue: '#0082A9',
  },
  accent: {
    orange: '#FF8648',
    'orange-light': '#FFEADF',
    'orange-dark': '#FFD2BB',
  },
  text: {
    strong: '#011829',
    sub: '#4B5D6B',
    soft: '#B9BAC3',
    disabled: '#D1D1D7',
  },
  bg: {
    soft: '#F1F1F1',
    white: '#FFFFFF',
  },
  stroke: {
    soft: '#E7E8EB',
    sub: '#D1D1D7',
  }
}
```

---

## 2. Component Structure

### Directory Structure
```
app/
├── components/
│   ├── navigation/
│   │   ├── TopBar.tsx
│   │   └── MainNav.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── CoursesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── CentersSection.tsx
│   │   ├── ActivitiesSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CollaborationsSection.tsx
│   │   └── ContactForm.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   └── Footer.tsx
├── types/
│   └── index.ts
├── layout.tsx
└── page.tsx
```

---

## 3. Component Breakdown

### Navigation Components

#### `TopBar.tsx`
- **Purpose**: Dark blue top navigation bar
- **Features**:
  - "Start Learning" CTA button (cyan background)
  - Language selector dropdown (English)
  - Student Login link
- **State**: Language dropdown open/close
- **Styling**: `bg-[#013359]`, fixed height 72px, padding x-24

#### `MainNav.tsx`
- **Purpose**: Main white navigation with logo and menu
- **Features**:
  - Logo (left aligned)
  - Navigation items with dropdown indicators:
    - How You Learn (dropdown)
    - English Courses (dropdown)
    - Corporate
    - Centers
    - Resources (dropdown)
    - Franchise
- **State**: Active dropdown tracking
- **Styling**: White background, sticky/fixed positioning

---

### Section Components

#### `Hero.tsx`
- **Purpose**: Main hero section with background image
- **Features**:
  - Background image with gradient overlay
  - Reviews badge (4.7 ★ on Reviews.io)
  - Main heading: "Learn English. Dream of more. Go further with English"
  - Feature list with checkmarks:
    - 12 Weeks Learning
    - Proven Methodology
    - Native-speaking teachers
    - Flexible scheduling
  - Two CTAs: "Start Learning" (red), "Our Programs" (outlined)
  - Company logos carousel at bottom
- **State**: None (static content)
- **Styling**: Full width, min-height 800px, background image with overlay

#### `StatsSection.tsx`
- **Purpose**: Display key statistics
- **Features**:
  - Left: Headline text
  - Right: 3 stats with dividers
    - "3 m+ learners worldwide have joined our programme"
    - "97% of students report increased speaking confidence"
    - "85% course completion rate across KSA"
- **Styling**: White background, horizontal layout, padding 112px top/bottom

#### `ValuesSection.tsx`
- **Purpose**: Showcase company values
- **Features**:
  - Left side (peach background):
    - "Our Values" badge
    - Heading: "A real-life English learning journey."
    - Description text
    - Feature list with progress indicators
    - CTA button
  - Right side: Image with play button overlay
- **State**: None
- **Styling**: Split layout, `bg-[#FFEADF]` for left side

#### `MethodologySection.tsx`
- **Purpose**: Explain learning methodology
- **Features**:
  - Left side: Image with play button
  - Right side:
    - "Our Methodology" badge
    - Heading: "From First Words to Full Fluency"
    - Tab navigation: The Method / The Modules / Learning Journey
    - Tab content (switches based on active tab)
    - Feature list with icons
- **State**: `activeTab` to track selected tab
- **Styling**: Split layout, white background

#### `CoursesSection.tsx`
- **Purpose**: Display course offerings
- **Features**:
  - Section header with navigation arrows
  - Horizontal scrollable course cards:
    - Adult English Course
    - Business English Course
    - IELTS Preparation
    - Online English Course
    - Community card (different style)
  - Each card: Image, title, description, CTA
- **State**: Carousel position/scroll state
- **Styling**: Gray background `bg-[#F1F1F1]`, cards with white background

#### `TestimonialsSection.tsx`
- **Purpose**: Student testimonials
- **Features**:
  - Left: Text content + navigation arrows
  - Right: Video thumbnail with play button
- **State**: Carousel navigation (if multiple testimonials)
- **Styling**: White background, split layout

#### `PricingSection.tsx`
- **Purpose**: Display pricing tiers
- **Features**:
  - Section header
  - 3 columns side-by-side:
    - **Online**: Gray background, feature list, CTA
    - **Full Access**: Blue background (#0082A9), "MOST POPULAR" badge, feature list, white CTA
    - **Private**: Gray background, feature list, CTA
  - Feature comparison with checkmarks
  - "Learn More" links
- **State**: None
- **Styling**: Equal width columns, distinct backgrounds

#### `CentersSection.tsx`
- **Purpose**: Show physical locations
- **Features**:
  - Section header
  - Background map image with location pins
  - 3 center cards overlaid on map:
    - Center name
    - Address with icon
    - Phone number with icon
    - "Book Visit" button
- **State**: Selected/hovered pin highlights card
- **Styling**: Relative positioning for map + absolute for cards

#### `ActivitiesSection.tsx`
- **Purpose**: Community activities showcase
- **Features**:
  - Section header: "More than a course — it's a community"
  - Full-width image/video
  - Centered play button overlay
- **State**: None (or video player state)
- **Styling**: Full bleed image

#### `FAQSection.tsx`
- **Purpose**: Frequently asked questions
- **Features**:
  - Section header with intro text
  - Accordion list of questions:
    - "How do I know which course level is right for me?" (expanded by default)
    - "How long does it take to complete a course?"
    - "Are your teachers native speakers?"
    - "Can I study online or in-person?"
    - "How much does it cost?"
    - "Is Wall Street English recognized in Saudi Arabia?"
  - Expand/collapse icons
- **State**: Array of open/closed states for each FAQ
- **Styling**: White background, bordered items

#### `CollaborationsSection.tsx`
- **Purpose**: Partner/client logos
- **Features**:
  - Section header
  - Grid of company logos
- **Styling**: Gray background `bg-[#F1F1F1]`

#### `ContactForm.tsx`
- **Purpose**: Lead generation form
- **Features**:
  - Left: Section intro text
  - Right: Form with fields:
    - Why are you interested in English? (select)
    - First Name* (text input)
    - Last Name* (text input)
    - Email* (email input)
    - Phone Number* (tel input)
    - Country* (select)
    - City* (text input)
    - How do you want to study?* (select)
    - Privacy policy checkbox*
    - "Book a Call" submit button
  - Field validation
  - Required field indicators (*)
- **State**: Form values, validation errors, submission state
- **Styling**: Split layout, white form card on gray background

---

### Reusable UI Components

#### `Button.tsx`
**Props**:
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'base' | 'large'
- `children`: ReactNode
- `onClick`: () => void
- `type`: 'button' | 'submit'

**Variants**:
- Primary: `bg-[#F12B3E]` red button with white text
- Secondary: `bg-[#4DD4F5]` cyan button
- Outline: Border with transparent background

#### `Card.tsx`
**Props**:
- `image`: string
- `title`: string
- `description`: string
- `buttonText`: string
- `onButtonClick`: () => void

**Styling**: White background, rounded corners, shadow

#### `Accordion.tsx`
**Props**:
- `title`: string
- `content`: string
- `isOpen`: boolean
- `onToggle`: () => void

**Features**: Smooth height animation on expand/collapse

#### `Dropdown.tsx`
**Props**:
- `trigger`: ReactNode
- `items`: Array<{label: string, href: string}>
- `isOpen`: boolean
- `onToggle`: () => void

**Features**: Positioned absolutely, click outside to close

#### `Input.tsx`
**Props**:
- `label`: string
- `required`: boolean
- `placeholder`: string
- `type`: string
- `value`: string
- `onChange`: (value: string) => void
- `error`: string | undefined

**Features**: Error state styling, required indicator

#### `Select.tsx`
**Props**:
- `label`: string
- `required`: boolean
- `placeholder`: string
- `options`: Array<{value: string, label: string}>
- `value`: string
- `onChange`: (value: string) => void
- `error`: string | undefined

**Features**: Custom styled dropdown with chevron icon

---

### Footer Component

#### `Footer.tsx`
- **Purpose**: Site footer with multiple sections
- **Features**:
  - Top section with logo, review badges
  - Company description
  - Headquarters address
  - Newsletter signup form (email input + subscribe button)
  - Social media links (Twitter, LinkedIn, Facebook, Instagram)
  - Contact info (email, phone)
  - Copyright notice
- **State**: Newsletter email input
- **Styling**: Dark blue background `bg-[#013359]`, white text

---

## 4. Interactive Features Implementation

### Navigation Interactions
- **Dropdowns**: useState hook to manage which dropdown is open
- **Mobile menu**: Hamburger menu for responsive design (if needed)
- **Smooth scroll**: Anchor links scroll to sections

### Tab System (Methodology)
- useState to track active tab index
- Conditional rendering of tab content
- Active tab styling (underline indicator)

### Carousel/Slider (Courses, Testimonials)
- useRef for scroll container
- Scroll to next/previous card on arrow click
- Optional: Auto-scroll with interval

### Accordion (FAQ)
- Array state to track open items
- Toggle function to open/close
- CSS transition for smooth height animation
- Only one open at a time OR multiple open (decide based on UX)

### Form Handling (Contact Form)
- **State management**:
  - Form values object
  - Errors object
  - Submission state (idle, submitting, success, error)
- **Validation**:
  - Required field check
  - Email format validation
  - Phone number format validation
  - Privacy checkbox must be checked
- **Submit handler**:
  - Prevent default
  - Validate all fields
  - Show errors if any
  - Console.log form data (or send to API later)
  - Show success message

### Map Pins (Centers)
- onClick handler for each pin
- Highlight/scroll to corresponding center card
- Visual feedback on hover

---

## 5. Data Types & Interfaces

### `types/index.ts`

```typescript
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
```

---

## 6. Mock Data

Create mock data arrays for development:

```typescript
// Mock courses
const courses: Course[] = [
  {
    id: '1',
    title: 'Adult English Course',
    description: 'Improve your English skills with a proven method...',
    image: '/images/courses/adult.jpg',
    buttonText: 'Start Learning',
  },
  // ... more courses
];

// Mock FAQs
const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I know which course level is right for me?',
    answer: 'We offer a free English assessment...',
  },
  // ... more FAQs
];

// Mock centers
const centers: Center[] = [
  {
    id: '1',
    name: 'Abha - Men',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: '/images/centers/abha.jpg',
    mapPosition: { x: 465, y: 458 },
  },
  // ... more centers
];
```

---

## 7. Responsive Design Strategy

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mobile Considerations
- Stack horizontal layouts vertically on mobile
- Hamburger menu for navigation
- Single column for pricing tables
- Adjust font sizes
- Full-width buttons on mobile
- Touch-friendly targets (min 44x44px)

---

## 8. Accessibility Requirements

- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus visible styles
- Alt text for all images
- Form labels properly associated
- Skip to main content link
- Color contrast meets WCAG AA standards

---

## 9. Performance Considerations

- Use `next/image` for automatic optimization
- Lazy load images below the fold
- Minimize JavaScript bundle size
- CSS-only animations where possible
- Debounce form validation
- Optimize font loading (font-display: swap)

---

## 10. Implementation Steps

### Phase 1: Foundation (Setup)
1. ✅ Install dependencies
2. ✅ Configure Tailwind with custom colors
3. ✅ Add Google Fonts to layout
4. ✅ Create directory structure
5. ✅ Create types file

### Phase 2: Reusable UI Components
6. ✅ Build Button component
7. ✅ Build Input component
8. ✅ Build Select component
9. ✅ Build Dropdown component
10. ✅ Build Accordion component
11. ✅ Build Card component

### Phase 3: Navigation
12. ✅ Build TopBar component
13. ✅ Build MainNav component with dropdowns

### Phase 4: Main Sections (Top to Bottom)
14. ✅ Build Hero section
15. ✅ Build StatsSection
16. ✅ Build ValuesSection
17. ✅ Build MethodologySection with tabs
18. ✅ Build CoursesSection with carousel
19. ✅ Build TestimonialsSection
20. ✅ Build PricingSection
21. ✅ Build CentersSection with map
22. ✅ Build ActivitiesSection
23. ✅ Build FAQSection with accordion
24. ✅ Build CollaborationsSection
25. ✅ Build ContactForm with validation

### Phase 5: Footer
26. ✅ Build Footer component

### Phase 6: Integration
27. ✅ Integrate all components into page.tsx
28. ✅ Test all interactive features
29. ✅ Add responsive styles
30. ✅ Test on mobile devices

### Phase 7: Polish
31. ✅ Add transitions and animations
32. ✅ Optimize images
33. ✅ Test accessibility
34. ✅ Final QA

---

## 11. Testing Checklist

- [ ] All dropdowns open/close correctly
- [ ] Tabs switch content properly
- [ ] Carousels navigate through items
- [ ] Form validation works for all fields
- [ ] Form shows errors correctly
- [ ] Form submits successfully
- [ ] FAQ accordion expands/collapses
- [ ] All buttons are clickable
- [ ] Navigation links work (when implemented)
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] Images load correctly
- [ ] Fonts render correctly
- [ ] Colors match Figma design
- [ ] Spacing matches Figma design

---

## 12. Future Enhancements

- Connect form to actual API endpoint
- Add form submission success/error messages
- Implement actual video players
- Add smooth scroll animations on scroll
- Add loading states
- Implement i18n for multiple languages
- Add analytics tracking
- Add SEO metadata
- Implement actual authentication for Student Login
- Connect to CMS for content management

---

## Notes

- All placeholder images should be replaced with actual images from Figma
- Color values are approximations based on Figma design
- Font weights may need adjustment to match Figma exactly
- Some animations/transitions can be added for polish
- Consider adding Framer Motion for advanced animations
- Test thoroughly on all browsers (Chrome, Firefox, Safari, Edge)

---

**Last Updated**: November 19, 2025
**Project**: Wall Street English Website
**Developer**: [Your Name]


