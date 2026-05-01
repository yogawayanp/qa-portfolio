import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="gradient-mesh relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        <div className="lg:w-1/2 flex flex-col space-y-8 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 border border-slate-200 rounded-full mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Available for Work</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-4 tracking-tighter">
              Quality <br/>
              Assurance <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Engineer.</span>
            </h1>
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-6">
              Yoga Wayan Pratama
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Manual Testing', 'API Testing', 'Mobile Testing', 'UAT', 'Bug Reporting'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white shadow-sm text-secondary text-xs font-semibold rounded-md border border-slate-200 hover:border-accent/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-secondary leading-relaxed text-lg max-w-xl">
            I specialize in testing web, mobile, and CMS applications. I create structured test cases, identify bugs with precision, and validate software quality to ensure teams deliver reliable, polished products.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-card-hover hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-white text-primary border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-0.5">
              Contact Me
            </a>
            <a href="#" className="px-6 py-3.5 flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors">
              Download CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:w-5/12 w-full mt-12 lg:mt-0 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent blur-3xl rounded-full translate-x-10 translate-y-10"></div>
          
          <div className="glass rounded-2xl shadow-xl p-8 relative overflow-hidden group hover:border-accent/40 transition-colors duration-500 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full -mr-16 -mt-16 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary tracking-tight">Core Expertise</h4>
                    <p className="text-secondary text-sm">Quality Assurance</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                  <span className="text-accent font-bold text-xs">QA</span>
                </div>
              </div>
              
              <ul className="space-y-5">
                {[
                  '2+ Years Professional Experience',
                  'Web, Mobile, and CMS Testing',
                  'Manual & API Testing Strategies',
                  'Transitioning to Test Automation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-primary font-medium text-sm sm:text-base group/item">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-accent group-hover/item:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
