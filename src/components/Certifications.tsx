import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      date: '2023',
      icon: Award
    },
    {
      name: 'Azure Fabric Data Analytics Engineer',
      issuer: 'Microsoft',
      date: '2023',
      icon: Award
    }
  ];

  const learning = [
    {
      name: 'Google Cloud Platform - BigQuery',
      status: 'In Progress',
      completion: '70%'
    },
    {
      name: 'Advanced Data Engineering with Python',
      status: 'In Progress',
      completion: '85%'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Learning</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <div className="text-sm text-gray-600">
                    <p>Issuer: {cert.issuer}</p>
                    <p>Issued: {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Current Learning
            </h3>
            <div className="space-y-6">
              {learning.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{item.status}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: item.completion }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;