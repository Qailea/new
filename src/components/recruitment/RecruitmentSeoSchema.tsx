import React from 'react';
import { AVAILABLE_POSITIONS, RECRUITMENT_FAQS } from '../../data/recruitmentData';
import knskLogo from '../../assets/images/KNSK_Logo.jpg';

export const RecruitmentSeoSchema: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    'name': 'K.N.S.K Security Co., Ltd.',
    'alternateName': 'KNSK Security',
    'url': 'https://knsk-security.com',
    'logo': knskLogo,
    'description': 'Premier MOI Licensed Security Service Provider in Cambodia with Professional Guards and 25 Provincial Coverage.',
    'telephone': '+855964838666',
    'email': 'soengknsk@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sen Sok District',
      'addressLocality': 'Phnom Penh',
      'addressCountry': 'KH'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://knsk-security.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Careers & Recruitment',
        'item': 'https://knsk-security.com/careers'
      }
    ]
  };

  const jobPostingsSchema = AVAILABLE_POSITIONS.slice(0, 3).map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': job.titleEn,
    'description': job.summaryEn + ' Requirements: ' + job.requirementsEn.join('. '),
    'identifier': {
      '@type': 'PropertyValue',
      'name': 'K.N.S.K Security Co., Ltd.',
      'value': job.id
    },
    'datePosted': '2026-08-01',
    'employmentType': job.typeEn.includes('Full') ? 'FULL_TIME' : 'OTHER',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': 'K.N.S.K Security Co., Ltd.',
      'sameAs': 'https://knsk-security.com'
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Phnom Penh',
        'addressCountry': 'KH'
      }
    },
    'baseSalary': {
      '@type': 'MonetaryAmount',
      'currency': 'USD',
      'value': {
        '@type': 'QuantitativeValue',
        'unitText': 'MONTH',
        'value': job.salaryEn
      }
    }
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': RECRUITMENT_FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.questionEn,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answerEn
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          organizationSchema,
          breadcrumbSchema,
          faqSchema,
          ...jobPostingsSchema
        ])
      }}
    />
  );
};
