import React from 'react';

const AutomationPortfolio = () => {
  const automationProjects = [
    {
      title: 'OpenClaw AI Assistant Automation',
      type: 'Cloud & Integration Automation',
      description: 'Comprehensive automation suite for the OpenClaw AI Assistant on Tencent Cloud, validating rapid cloud deployment and multi-platform IM integration.',
      objective: 'To ensure the "second-level deployment" flow is reliable and that the AI assistant maintains 24/7 connectivity across WhatsApp, Discord, and Slack.',
      scope: 'Deployment Flow, WebSocket Stability, Multi-Platform Message Sync, Tencent Cloud Lighthouse Resource Monitoring.',
      scenarios: [
        'Automated Cloud Instance Provisioning & Deployment',
        'WebSocket Handshake & Persistent Connection Testing',
        'Cross-Platform Message Delivery (WhatsApp/Discord/Slack)',
        'Environment Isolation & Data Privacy Validation'
      ],
      validations: [
        'Deployment Time Benchmarking (< 60s)',
        'WebSocket Latency & Reconnection Logic',
        'Successful API Handshakes with IM Providers'
      ],
      howToRun: 'node automation/openclaw_test.js',
      language: 'JavaScript / Node.js',
      framework: 'Puppeteer & Custom WebSocket Client',
      tools: ['Puppeteer', 'Tencent Cloud CLI', 'Jest', 'Allure'],
      github: 'https://github.com/tencentcloud/intl-openclaw',
      demo: 'https://www.tencentcloud.com/act/pro/intl-openclaw'
    },
    {
      title: 'E-Commerce Web Automation',
      type: 'Web UI Automation',
      description: 'Automated end-to-end testing suite for a modern e-commerce web application covering critical user journeys from login to checkout.',
      objective: 'To reduce manual regression testing time by 80% and ensure core functionalities are defect-free before production deployments.',
      scope: 'Frontend UI interactions, Cross-browser compatibility, and E2E User Flows.',
      scenarios: [
        'User Registration & Login Authentication',
        'Product Search and Category Filtering',
        'Add/Remove Items from Shopping Cart',
        'End-to-End Guest Checkout Process'
      ],
      validations: [
        'UI Element Visibility & State',
        'Data Persistence in Cart',
        'Successful Order Generation & Confirmation'
      ],
      howToRun: 'npm run test:e2e',
      language: 'JavaScript / Node.js',
      framework: 'Playwright',
      tools: ['Playwright', 'Allure Report', 'GitHub Actions'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Banking App Automation',
      type: 'Mobile Native Automation',
      description: 'A robust mobile test automation framework designed for native Android and iOS banking applications.',
      objective: 'To validate the stability of mobile financial transactions across various devices and OS versions.',
      scope: 'Native App UI, Gestures (Swipe/Scroll), Biometric Login Mocking.',
      scenarios: [
        'Biometric & PIN Authentication',
        'Fund Transfer & Balance Validation',
        'Transaction History Verification',
        'Handling Push Notifications'
      ],
      validations: [
        'Screen Transition Assertions',
        'Mathematical Accuracy of Transfers',
        'Element Interactions (Touch/Swipe)'
      ],
      howToRun: 'mvn clean test -Dsuite=mobile',
      language: 'Java',
      framework: 'Appium',
      tools: ['Appium', 'TestNG', 'Maven', 'BrowserStack'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Payment Gateway API Automation',
      type: 'API Automation Testing',
      description: 'Comprehensive API testing suite validating RESTful endpoints for a payment gateway service, including security and data integrity checks.',
      objective: 'To ensure backend services handle valid, invalid, and edge-case payloads correctly while maintaining high performance.',
      scope: 'REST API Endpoints, JSON Schema Validation, Authorization Headers.',
      scenarios: [
        'JWT Token Generation & Expiry',
        'Process Payment with Valid/Invalid Cards',
        'Refund Processing Logic',
        'Rate Limiting & Error Code Validation'
      ],
      validations: [
        'HTTP Status Codes (200, 400, 401, 500)',
        'Response Body JSON Schema',
        'Response Time & Performance'
      ],
      howToRun: 'newman run payment_api.json -e env.json',
      language: 'JavaScript',
      framework: 'Postman / Newman',
      tools: ['Postman', 'Newman', 'Chai Assertions'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="automation" className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">Automation Portfolio</h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-secondary max-w-2xl mx-auto text-lg font-light">
            A showcase of my technical proficiency in building robust, scalable automated testing frameworks across Web, Mobile, and API platforms.
          </p>
        </div>

        <div className="space-y-12">
          {automationProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 group">
              
              {/* Card Header */}
              <div className="border-b border-slate-100 bg-slate-50/50 p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary tracking-tight mb-1">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-accent text-xs font-bold uppercase tracking-wider">{project.type}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span className="text-secondary text-xs font-semibold">{project.language} • {project.framework}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-glow flex items-center gap-2 hover:-translate-y-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Deploy Now
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2 hover:-translate-y-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Column 1: Overview */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-primary text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Project Objective</h4>
                    <p className="text-primary text-sm leading-relaxed border-l-2 border-accent pl-3">{project.objective}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Scope of Automation</h4>
                    <p className="text-primary text-sm leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">{project.scope}</p>
                  </div>
                </div>

                {/* Column 2: Scenarios & Validations */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Test Scenarios Covered
                    </h4>
                    <ul className="space-y-2">
                      {project.scenarios.map((scenario, idx) => (
                        <li key={idx} className="flex items-start text-sm text-primary">
                          <span className="text-accent mr-2 mt-0.5">•</span>
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Key Validations
                    </h4>
                    <ul className="space-y-2">
                      {project.validations.map((validation, idx) => (
                        <li key={idx} className="flex items-start text-sm text-primary">
                          <span className="text-accent mr-2 mt-0.5">•</span>
                          {validation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: Tech Stack & Execution */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Tech Stack Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="px-2.5 py-1.5 bg-white text-primary text-xs font-semibold rounded-md border border-slate-200 shadow-sm flex items-center gap-1.5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">How to Run Automation</h4>
                    <div className="bg-[#0D1117] rounded-lg p-3 border border-slate-800 flex items-center gap-3 group/code cursor-text">
                      <span className="text-[#3FB950] font-mono text-sm">$</span>
                      <code className="text-[#E6EDF3] font-mono text-sm flex-grow">{project.howToRun}</code>
                      <button className="text-slate-500 hover:text-white transition-colors p-1 rounded-md opacity-0 group-hover/code:opacity-100" title="Copy command">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationPortfolio;
