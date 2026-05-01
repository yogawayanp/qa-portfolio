import React from 'react';

const QASamples = () => {
  return (
    <section id="qa-samples" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">QA Documentation & Samples</h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-secondary max-w-2xl mx-auto text-lg font-light">
            Examples of my testing documentation, bug reports, and structured test cases.
          </p>
        </div>

        {/* 1. QA Documentation Samples */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-primary tracking-tight">Documentation Portfolio</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Test Case Sample', desc: 'Comprehensive test case document covering positive and negative scenarios.' },
              { title: 'Bug Report Sample', desc: 'Detailed bug report with steps to reproduce, severity, and priority.' },
              { title: 'API Testing Sample', desc: 'Postman collection for validating endpoints, responses, and status codes.' },
              { title: 'UAT Scenario Sample', desc: 'End-to-end user scenarios designed for client acceptance testing.' },
              { title: 'Test Execution Report', desc: 'Summary of test execution results, pass/fail rates, and metrics.' }
            ].map((doc, idx) => (
              <div key={idx} className="bg-background rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300 group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm border border-slate-100 mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{doc.title}</h4>
                <p className="text-secondary text-sm mb-5 h-10">{doc.desc}</p>
                <a href="#" className="inline-flex items-center text-accent text-sm font-semibold hover:text-blue-800 transition-colors">
                  View Sample
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Sample Bug Report */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-primary tracking-tight">Sample Bug Report</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft border border-slate-200 overflow-hidden font-sans">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                <h4 className="text-lg font-semibold text-primary">Login button does not respond after entering valid credentials</h4>
              </div>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 text-xs font-bold rounded-md uppercase tracking-wide">Severity: High</span>
                <span className="px-2.5 py-1 bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold rounded-md uppercase tracking-wide">Priority: High</span>
              </div>
            </div>
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Environment</h5>
                  <div className="bg-background px-4 py-2.5 rounded-lg border border-border inline-block">
                    <p className="text-primary text-sm font-medium">Android 13, App Version 1.0.5, Production</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Steps to Reproduce</h5>
                  <ol className="list-decimal list-inside text-primary space-y-2 text-sm font-medium bg-background px-5 py-4 rounded-lg border border-border">
                    <li className="pl-1">Open the application</li>
                    <li className="pl-1">Go to Login page</li>
                    <li className="pl-1">Enter valid email and password</li>
                    <li className="pl-1">Tap Login button</li>
                  </ol>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Expected Result</h5>
                  <div className="flex items-start gap-3 bg-emerald-50/50 px-5 py-4 rounded-lg border border-emerald-100">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-emerald-800 text-sm font-medium">User should be redirected to the Home page</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Actual Result</h5>
                  <div className="flex items-start gap-3 bg-red-50/50 px-5 py-4 rounded-lg border border-red-100">
                    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800 text-sm font-medium">Login button does not respond and user stays on the Login page</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Evidence</h5>
                  <div className="w-full h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 gap-2 hover:bg-slate-100 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Screenshot Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Sample Test Case Table */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-primary tracking-tight">Sample Test Cases</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-soft">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted">
                <tr>
                  {['Test Case ID', 'Feature', 'Scenario', 'Expected Result', 'Status'].map((head, i) => (
                    <th key={i} scope="col" className="px-6 py-4 text-left text-xs font-bold text-secondary uppercase tracking-wider">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border">
                {[
                  { id: 'TC001', feature: 'Login', scenario: 'Login with valid credentials', result: 'User is redirected to home page', status: 'Passed' },
                  { id: 'TC002', feature: 'Login', scenario: 'Login with invalid password', result: 'Error message is displayed', status: 'Passed' },
                  { id: 'TC003', feature: 'Checkout', scenario: 'Purchase product successfully', result: 'Order is created successfully', status: 'Passed' }
                ].map((tc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-primary">{tc.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary">{tc.feature}</td>
                    <td className="px-6 py-4 text-sm text-secondary">{tc.scenario}</td>
                    <td className="px-6 py-4 text-sm text-secondary">{tc.result}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {tc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. API Testing Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-primary tracking-tight">API Testing with Postman</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-2xl border border-border">
              <h4 className="text-lg font-bold text-primary mb-6">Core Validations</h4>
              <ul className="space-y-4">
                {['Validate request method', 'Validate status code', 'Validate response body', 'Validate error response', 'Validate authentication token', 'Validate response time'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-secondary font-medium text-sm">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#0D1117] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="bg-[#161B22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs font-medium tracking-wide">login-test.js</span>
                <div className="w-12"></div>
              </div>
              <div className="p-6 text-sm font-mono leading-relaxed">
                <div className="mb-4 text-slate-300">
                  <span className="text-[#79C0FF]">Endpoint:</span> <span className="text-[#7EE787]">POST</span> /login
                </div>
                <div className="mb-4 text-slate-300">
                  <span className="text-[#79C0FF]">Expected Status Code:</span> <span className="text-[#D2A8FF]">200 OK</span>
                </div>
                <div>
                  <span className="text-[#79C0FF]">Validation Script:</span>
                  <pre className="mt-3 text-slate-300 overflow-x-auto">
                    <code>
<span className="text-[#FF7B72]">pm</span>.<span className="text-[#D2A8FF]">test</span>(<span className="text-[#A5D6FF]">"Status code is 200"</span>, <span className="text-[#FF7B72]">function</span> () {'{'}
    <span className="text-[#FF7B72]">pm</span>.response.<span className="text-[#79C0FF]">to</span>.<span className="text-[#79C0FF]">have</span>.<span className="text-[#D2A8FF]">status</span>(<span className="text-[#79C0FF]">200</span>);
{'}'});

<span className="text-[#FF7B72]">pm</span>.<span className="text-[#D2A8FF]">test</span>(<span className="text-[#A5D6FF]">"Token is present"</span>, <span className="text-[#FF7B72]">function</span> () {'{'}
    <span className="text-[#FF7B72]">var</span> jsonData = <span className="text-[#FF7B72]">pm</span>.response.<span className="text-[#D2A8FF]">json</span>();
    <span className="text-[#FF7B72]">pm</span>.<span className="text-[#D2A8FF]">expect</span>(jsonData).<span className="text-[#79C0FF]">to</span>.<span className="text-[#79C0FF]">have</span>.<span className="text-[#D2A8FF]">property</span>(<span className="text-[#A5D6FF]">'token'</span>);
{'}'});
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QASamples;
