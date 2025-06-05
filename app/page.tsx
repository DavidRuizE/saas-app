import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionList from "@/components/CompanionList";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
        <section className="home-section">
          <CompanionCard 
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neurol Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
            
          />
          <CompanionCard 
            id="456"
            name="Countsy the Number Wizard"
            topic="Derivatives and Integrals"
            subject="math"
            duration={30}
            color="#e5d0ff"
          />

          <CompanionCard 
            id="789"
            name="Verba the Vocabulary Builder"
            topic="language"
            subject="english literature"
            duration={45}
            color="#BDE7FF"
          />        
        </section>

        <section className="home-section">
          <CompanionList />
          <CTA />

        </section>
    </main>
  );
};

export default Page;
