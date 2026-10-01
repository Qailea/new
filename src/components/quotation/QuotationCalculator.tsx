import React from 'react';
import { QuotationRequestPage } from './QuotationRequestPage';

export const QuotationCalculator: React.FC<{ setActiveTab?: (tab: string) => void }> = (props) => {
  return <QuotationRequestPage {...props} />;
};

export default QuotationCalculator;
