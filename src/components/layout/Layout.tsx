import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollIndicator from '../ui/ScrollIndicator';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
      <ScrollIndicator />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;