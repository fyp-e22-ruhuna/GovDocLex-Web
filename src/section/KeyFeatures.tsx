import React from "react";
import KeyFeaturesCard from "../components/Cards/KeyFeaturesCard";
import { FiGlobe } from "react-icons/fi";

const KeyFeaturesSection: React.FC = () => {
  return (
    <section
    className="py-10"
    style={{
      background: 'radial-gradient(circle, black 0%, #065f46 50%, black 100%)',
    }}
  >
      <div className="max-w-[1440px] mx-auto px-4 ">
        <button className="bg-[#1AD3FF1A] text-[#1AD3FF] text-sm font-medium px-4 py-1.5 rounded-full">
           Key Features
        </button>
        <h2 className="text-5xl font-semibold  text-white mb-6 ">
          Beyond Extraction: Smart Analysis for Legal Documents
        </h2>

        <div className="  items-center  flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 p-4  ">
            <KeyFeaturesCard
              title="Automated Document Extraction"
              description="Precisely extracts structured data from unstructured government documents"
              icon={<FiGlobe />}
            />
            <KeyFeaturesCard
              title="AI-Powered Legal Reasoning"
              description="Uses advanced AI reasoning to interpret extracted legal content, drawing logical connections and insights to support informed decision-making"
              icon={<FiGlobe />}
            />
            <KeyFeaturesCard
              title="Sri Lanka-Optimized"
              description="Custom-trained on local government document structures"
              icon={<FiGlobe />}
            />
            <KeyFeaturesCard
              title="Interactive Knowledge Graph"
              description="Visualizes relationships between ministries, laws, and policies"
              icon={<FiGlobe />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
