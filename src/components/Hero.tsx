import React from 'react';
import { Database, Cloud, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-4 mb-6">
            <Database className="w-8 h-8 text-blue-600" />
            <Cloud className="w-8 h-8 text-teal-500" />
            <Sparkles className="w-8 h-8 text-purple-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Data Engineer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transforming raw data into actionable insights through modern cloud solutions
            and scalable data architectures.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;