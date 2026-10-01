import React, { useEffect } from 'react';
import { CENTRAL_FAQS, KNOWLEDGE_ARTICLES } from '../../data/trustMediaData';
import companyLogoImg from '../../assets/images/KNSK_Logo.jpg';

export const SeoSchemaMarkup: React.FC = () => {
  useEffect(() => {
    // 1. Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'SecurityService',
      name: 'K.N.S.K Security Co., Ltd.',
      alternateName: ['ក្រុមហ៊ុន ខេ. អិន. អេស. ខេ ស៊ីឃ្យូរ៉ូធី ខូអិលធីឌី', 'KNSK Security', 'KNSK 安保有限公司'],
      url: 'https://www.knsk-security.com',
      logo: companyLogoImg,
      description: 'Licensed private security service provider authorized by Ministry of Interior Letter #2186 across all 25 provinces in Cambodia.',
      foundingDate: '2015-09-07',
      founder: {
        '@type': 'Person',
        name: 'SOME SOENG',
      },
      telephone: '+855964838666',
      email: 'soengknsk@gmail.com',
      sameAs: [
        'https://www.facebook.com/share/1BrYBJpnQk/',
        'https://wa.me/855964838666?s=t',
        'https://t.me/KNSK_security'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#31A22, Street 08, Group 21, Tuol Roka Village, Chak Angre Kraom Commune',
        addressLocality: 'Mean Chey District',
        addressRegion: 'Phnom Penh',
        addressCountry: 'KH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 11.5123,
        longitude: 104.9288,
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'K.N.S.K Security Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial & Industrial Security Guarding',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'VIP Close Protection & Escort',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cash in Transit (CIT) Armored Escort',
            },
          },
        ],
      },
    };

    // 2. FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: CENTRAL_FAQS.slice(0, 8).map((f) => ({
        '@type': 'Question',
        name: f.question.en,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer.en,
        },
      })),
    };

    // Inject scripts into document head dynamically
    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.id = 'knsk-org-schema';
    scriptOrg.text = JSON.stringify(orgSchema);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'knsk-faq-schema';
    scriptFaq.text = JSON.stringify(faqSchema);

    document.head.appendChild(scriptOrg);
    document.head.appendChild(scriptFaq);

    return () => {
      const elOrg = document.getElementById('knsk-org-schema');
      const elFaq = document.getElementById('knsk-faq-schema');
      if (elOrg) elOrg.remove();
      if (elFaq) elFaq.remove();
    };
  }, []);

  return null;
};
