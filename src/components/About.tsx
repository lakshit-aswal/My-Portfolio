import React from 'react';
import { Code2, Database, Cloud, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Azure Data Factory', category: 'ETL' },
    { name: 'Databricks', category: 'Processing' },
    { name: 'Azure SQL', category: 'Databases' },
    { name: 'Spark SQL', category: 'Query' },
    { name: 'Python', category: 'Programming' },
    { name: 'BigQuery', category: 'Cloud' },
    { name: 'Azure Durable Functions', category: 'Serverless' },
    { name: 'Azure Synapse', category: 'Analytics' }
  ];

  const highlights = [
    {
      icon: Database,
      title: 'Technical Expertise',
      description: 'Proficient in Azure Data Factory, Databricks, and Azure SQL for seamless data management',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Code2,
      title: 'Custom Solutions',
      description: 'Expert in developing UDFs for XML/JSON validation and automated workflows',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Skilled in designing secure cloud architectures and data solutions',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Implementation of private endpoints and robust data security measures',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Hi, I'm Lakshit</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A Data Engineer with a Passion for Transforming Data into Actionable Insights!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-gray-600 mb-6">
              I am a certified Azure Data Engineer Associate with 3 years of experience designing and implementing robust data solutions. 
              My expertise lies in building and optimizing scalable data pipelines, transforming complex datasets, 
              and ensuring seamless data integration for enterprise systems.
            </p>
            <p className="text-gray-600 mb-8">
              I believe in simplifying complex problems, ensuring data quality, and delivering solutions 
              that align with business objectives. My goal is to turn data into a strategic asset for organizations.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className={`p-6 ${item.bgColor} rounded-lg hover:shadow-md transition-shadow`}>
                <item.icon className={`w-8 h-8 ${item.iconColor} mb-4`} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Current Learning Journey</h3>
          <p className="text-gray-600">
            I'm currently exploring Google Cloud Platform and gaining hands-on experience with BigQuery 
            to broaden my expertise in cloud-based data solutions. This continuous learning approach 
            helps me stay at the forefront of data engineering technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
