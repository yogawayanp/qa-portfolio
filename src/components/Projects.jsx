import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'IGRS - Indonesia Game Rating System',
      type: 'Web / System Testing',
      description: 'Created and executed testing strategies, identified bugs, reported issues with clear reproduction steps, and provided feedback through ClickUp to improve product quality and team communication.',
      tags: ['Manual Testing', 'Bug Reporting', 'ClickUp', 'Test Case']
    },
    {
      title: 'Rumah Oasis - Mineral Water Purchase Application',
      type: 'Web / Mobile Testing',
      description: 'Performed functional testing, validated transaction flow and user experience, and reported bugs with detailed reproduction steps and environment details.',
      tags: ['Functional Testing', 'UAT', 'User Flow', 'Bug Report']
    },
    {
      title: 'Mestindo - Agriculture App & CMS',
      type: 'Mobile App and CMS Testing',
      description: 'Tested application and CMS features for agriculture product purchasing and ensured the system met user needs and project specifications.',
      tags: ['CMS Testing', 'Functional Testing', 'Regression Testing', 'Bug Reporting']
    },
    {
      title: 'Howel and Co - Hampers Web & CMS',
      type: 'Web and CMS Testing',
      description: 'Tested the purchasing flow, admin features, and collaborated with the team to improve application quality.',
      tags: ['Web Testing', 'CMS Testing', 'Bug Reporting', 'User Flow']
    },
    {
      title: 'Hub.id - Business Matchmaking Web & CMS',
      type: 'Web and CMS Testing',
      description: 'Participated in sprint planning and design review with clients, tested functional flows, and ensured the system supported business matchmaking processes.',
      tags: ['Sprint Planning', 'Design Review', 'Functional Testing', 'Client Communication']
    },
    {
      title: 'OpenClaw - AI Assistant Platform',
      type: 'Integration & Automation Testing',
      description: 'Automated the deployment and integration testing of the OpenClaw AI Assistant platform on Tencent Cloud Lighthouse, ensuring seamless connectivity across WhatsApp, Discord, and Slack.',
      tags: ['Puppeteer', 'WebSocket Testing', 'Tencent Cloud', 'API Integration']
    },
    {
      title: 'JD Sport',
      type: 'Android and iOS Testing',
      description: 'Tested mobile applications in development and production environments, tested features using Firebase Remote Config, and created test cases based on design and PRD.',
      tags: ['Mobile Testing', 'Android', 'iOS', 'Firebase Remote Config', 'Production Testing']
    },
    {
      title: 'HR-App',
      type: 'Mobile App and CMS Testing',
      description: 'Tested internal attendance application on Android, iOS, and CMS, participated in weekly progress updates, and supported UAT with internal stakeholders.',
      tags: ['Android Testing', 'iOS Testing', 'CMS Testing', 'UAT']
    },
    {
      title: 'Persita',
      type: 'Mobile App and CMS Testing',
      description: 'Performed testing in development and production environments, tested Android, iOS, and CMS features, and created test cases for UAT and validation.',
      tags: ['Android Testing', 'iOS Testing', 'CMS Testing', 'UAT']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">Featured Projects</h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-secondary max-w-2xl mx-auto text-lg font-light">
            A selection of key projects where I have contributed to quality assurance, testing strategies, and product reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl border border-border p-6 flex flex-col h-full hover:shadow-card-hover hover:border-accent/40 transition-all duration-300 group">
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors"></div>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="mt-auto pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-muted text-secondary text-xs font-semibold rounded-md border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
