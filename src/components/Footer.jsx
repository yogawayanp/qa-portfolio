import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4">
        <a href="#" className="text-xl font-extrabold text-primary tracking-tighter opacity-50 hover:opacity-100 transition-opacity">
          Yoga<span className="text-accent">QA</span>
        </a>
        <p className="text-secondary text-sm text-center">
          © {new Date().getFullYear()} Yoga Wayan Pratama. Quality Assurance Engineer Portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
