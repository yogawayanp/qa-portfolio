import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Nusantara Beta Studio',
      role: 'Quality Assurance Engineer',
      period: 'August 2022 - March 2025',
      descriptions: [
        'Created and executed test cases based on PRD, Figma/Miro, user flow, and business requirements.',
        'Conducted functional testing, regression testing, UAT, mobile testing, web testing, and CMS testing in dev and prod environments.',
        'Reported bugs using ClickUp and Jira with detailed reproduction steps, actual/expected results, severity, and evidence.',
        'Participated in sprint planning, UAT, design review, weekly progress updates, and product discussions.'
      ]
    },
    {
      company: 'Nusantara Beta Studio',
      role: 'Quality Assurance Intern',
      period: 'May 2022 - August 2022',
      descriptions: [
        'Performed feature testing during sprints and created UAT scenarios.',
        'Created test cases based on design and PRD.',
        'Reported bugs clearly and provided product feedback through ClickUp.'
      ]
    },
    {
      company: 'Kementerian PUPR',
      role: 'System Analyst / Software Developer Intern',
      period: 'August 2019 - November 2019',
      descriptions: [
        'Analyzed system requirements for a letter monitoring information system.',
        'Designed and created database using MySQL, developed system using PHP.',
        'Performed coding, testing, debugging, and maintenance.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">Work Experience</h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 mb-16 last:mb-0 group">
              
              <div className="md:hidden absolute w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-accent left-[-9px] top-1.5 shadow-[0_0_0_4px_white] transition-colors duration-300"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative">
                
                {/* Desktop timeline line and dot */}
                <div className="hidden md:block absolute left-1/4 -ml-px w-[2px] h-full bg-slate-100 top-8 z-0"></div>
                
                <div className="md:w-1/4 md:text-right shrink-0 relative z-10 hidden md:block">
                  <div className="absolute right-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-accent shadow-[0_0_0_4px_white] translate-x-2.5 transition-colors duration-300"></div>
                  <span className="inline-block px-3 py-1 bg-muted text-secondary text-sm font-semibold rounded-full mt-0.5 mr-6">
                    {exp.period}
                  </span>
                </div>

                {/* Mobile Period */}
                <div className="md:hidden mb-2">
                  <span className="inline-block px-3 py-1 bg-muted text-secondary text-sm font-semibold rounded-full">
                    {exp.period}
                  </span>
                </div>

                <div className="md:w-3/4 bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 relative z-10">
                  <h3 className="text-2xl font-bold text-primary tracking-tight mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-accent mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-4">
                    {exp.descriptions.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-secondary/90 leading-relaxed text-sm sm:text-base">
                        <svg className="w-5 h-5 text-slate-300 mr-3 shrink-0 mt-0.5 group-hover:text-accent/50 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
