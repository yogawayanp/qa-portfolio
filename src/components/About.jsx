import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-32 animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-4">About Me</h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary font-medium leading-relaxed">
              A dedicated Quality Assurance Engineer focused on software reliability, precision, and delivering seamless user experiences.
            </p>
          </div>
          
          <div className="md:w-2/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="prose prose-lg prose-slate max-w-none text-secondary">
              <p className="mb-8 leading-relaxed text-lg font-light text-primary/80">
                With over <strong className="font-semibold text-primary">2 years of professional experience</strong> at Nusantara Beta Studio, my expertise spans across various platforms including mobile (Android/iOS), complex web applications, and CMS architectures. 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                  <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Documentation
                  </h3>
                  <p className="text-sm">I excel at translating Product Requirement Documents (PRD) and Figma/Miro designs into highly structured, comprehensive test cases.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                  <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technical Scope
                  </h3>
                  <p className="text-sm">My technical skill set includes API testing using Postman, detailed bug tracking via Jira/ClickUp, and I am actively expanding into Selenium and Appium automation.</p>
                </div>
              </div>

              <p className="leading-relaxed text-lg font-light text-primary/80 border-l-4 border-accent/30 pl-6 py-2">
                Beyond execution, I am a strong team player who actively collaborates in sprint planning, UAT, design reviews, client communications, and the product release process to ensure every deployment meets the highest quality standards.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
