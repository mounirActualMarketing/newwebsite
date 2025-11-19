'use client';

import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import type { FormData, FormErrors } from '@/app/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    interest: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    studyMethod: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const interestOptions = [
    { value: 'career', label: 'Career Development' },
    { value: 'education', label: 'Education' },
    { value: 'travel', label: 'Travel' },
    { value: 'business', label: 'Business' },
    { value: 'personal', label: 'Personal Growth' },
  ];

  const countryOptions = [
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'QA', label: 'Qatar' },
    { value: 'BH', label: 'Bahrain' },
  ];

  const studyMethodOptions = [
    { value: 'online', label: 'Online' },
    { value: 'in-person', label: 'In-Person' },
    { value: 'blended', label: 'Blended (Online + In-Person)' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.interest) newErrors.interest = 'Please select your interest';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Please select your country';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.studyMethod) newErrors.studyMethod = 'Please select your study method';
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you soon.');
      // Reset form
      setFormData({
        interest: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        studyMethod: '',
        privacyAccepted: false,
      });
    }
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-bg-soft flex flex-col lg:flex-row items-start gap-8 md:gap-12">
      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <span className="text-base md:text-xl font-bold text-primary-blue font-heading">Contact Us</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong capitalize font-heading">
          Let's Get In Touch
        </h2>
        <p className="text-base md:text-lg text-text-sub leading-relaxed max-w-[432px]">
          Speak to a member of our experienced team about how to begin your journey with Wall
          Street English.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[664px] bg-white rounded-t-3xl px-4 md:px-8 py-6 md:py-8 pb-16 md:pb-22 flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Interest */}
          <Select
            label="Why are you interested in English?"
            placeholder="Select your answer"
            options={interestOptions}
            value={formData.interest}
            onChange={(value) => setFormData({ ...formData, interest: value })}
            error={errors.interest}
            required
          />

          {/* First Name & Last Name */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="flex-1">
              <Input
                label="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                error={errors.firstName}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                error={errors.lastName}
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="flex-1">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="e.g., 05X-XXXX-XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
                required
              />
            </div>
          </div>

          {/* Country & City */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="flex-1">
              <Select
                label="Country"
                placeholder="Select your country"
                options={countryOptions}
                value={formData.country}
                onChange={(value) => setFormData({ ...formData, country: value })}
                error={errors.country}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                label="City"
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                error={errors.city}
                required
              />
            </div>
          </div>

          {/* Study Method */}
          <Select
            label="How do you want to study?"
            placeholder="Select your answer"
            options={studyMethodOptions}
            value={formData.studyMethod}
            onChange={(value) => setFormData({ ...formData, studyMethod: value })}
            error={errors.studyMethod}
            required
          />

          {/* Privacy Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={formData.privacyAccepted}
              onChange={(e) =>
                setFormData({ ...formData, privacyAccepted: e.target.checked })
              }
              className="mt-1 w-5 h-5 rounded border-stroke-sub"
            />
            <label htmlFor="privacy" className="text-sm text-text-sub leading-relaxed">
              I have read and accept the Privacy Policy. I consent to my details being shared
              with the relevant Wall Street English local partner to contact me with further
              information.*
            </label>
          </div>
          {errors.privacyAccepted && (
            <span className="text-sm text-primary-red -mt-4">{errors.privacyAccepted}</span>
          )}

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="base">
            Book a Call
          </Button>
        </form>
      </div>
    </div>
  );
}


