import React from 'react';
import { Database, LineChart, Shield, Sparkles, Workflow, Gauge, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Finance Transformation Project',
      description: 'Led the development of an enterprise-scale data pipeline for global finance data, implementing a robust Delta Lake architecture with multi-layer data processing.',
      icon: LineChart,
      iconColor: 'text-blue-600',
      tech: ['Databricks', 'Delta Lake', 'Spark SQL', 'Azure Data Factory', 'Azure DevOps'],
      highlights: [
        'Engineered scalable data pipelines for SAP modules using Databricks',
        'Implemented Delta Lake architecture with bronze, silver, and gold layers',
        'Optimized Spark SQL queries for improved performance',
        'Reduced resource usage by 25% through job optimization',
        'Streamlined CI/CD processes with Azure DevOps'
      ],
      metrics: {
        performance: '25% resource optimization',
        quality: '99.9% data accuracy',
        impact: 'Significant cost savings'
      }
    },
    {
      title: 'Salesforce Data Migration Suite',
      description: 'Spearheaded a comprehensive data migration project, integrating Salesforce data with Azure SQL while ensuring data integrity and compliance.',
      icon: Workflow,
      iconColor: 'text-green-600',
      tech: ['Azure Data Factory', 'Azure SQL', 'REST API', 'JSON', 'Salesforce'],
      highlights: [
        'Led end-to-end Salesforce data migration to Azure SQL',
        'Implemented robust JSON data processing workflows',
        'Designed multi-source data integration pipelines',
        'Reduced processing time by 40%',
        'Automated data ingestion workflows'
      ],
      metrics: {
        efficiency: '40% faster processing',
        automation: '90% reduction in manual tasks',
        coverage: '100% data consistency'
      }
    },
    {
      title: 'Enterprise Quality Assurance System',
      description: 'Developed a comprehensive data validation and quality assurance system, handling complex data formats and implementing automated error handling.',
      icon: Shield,
      iconColor: 'text-purple-600',
      tech: ['PySpark', 'Azure Functions', 'Azure Synapse', 'XML/JSON', 'SendGrid'],
      highlights: [
        'Built robust validation framework with 95%+ accuracy',
        'Implemented automated error handling and reporting',
        'Developed reusable data transformation functions',
        'Reduced processing time by 30%',
        'Streamlined data reconciliation processes'
      ],
      metrics: {
        accuracy: '95% validation rate',
        optimization: '30% faster processing',
        reliability: '99% error detection'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-blue-600" />
                    Impact Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                        <div className="font-semibold text-blue-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 flex justify-end">
                <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                  <span>View Details</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;