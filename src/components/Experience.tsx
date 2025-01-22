import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Data Engineer Analyst',
      company: 'Accenture Solutions Pvt. Ltd.',
      period: '2023 - Present',
      responsibilities: [
        'Developed a robust data quality assurance system reducing 100% manual workload ',
        'Lead data pipeline development using Azure Data Factory and Azure Synapse',
        'Optimize data warehouse performance and implement data quality frameworks',
        'Mentor junior engineers and establish best practices'
      ]
    },
    {
      role: 'Data Engineer Associate',
      company: 'Accenture Solutions Pvt. Ltd.',
      period: '2022 - 2023',
      responsibilities: [
        'Delivered a data analytics system helping client with reducing cost to the company',
        'Developed ETL pipelines using Azure Data Factory and databricks',
        'Implemented data models, transforamtion scripts and optimization techniques',
        'Collaborated with data analytics team on pipeline deployment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 w-full md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1.5 mt-6"></div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1.5">
                    <div className="w-4 h-4 rounded-full bg-blue-600 mt-6"></div>
                  </div>
                  
                  <div className="flex-1 w-full md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;