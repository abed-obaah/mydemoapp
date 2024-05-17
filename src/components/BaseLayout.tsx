import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className='bg-white'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
