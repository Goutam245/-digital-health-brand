import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHero from '@/components/TreatmentHero';
import TreatmentContent from '@/components/TreatmentContent';
import TreatmentFAQ from '@/components/TreatmentFAQ';
import TreatmentCTA from '@/components/TreatmentCTA';
import sermorelinImage from '@/assets/sermorelin-vial.png';

const Sermorelin = () => {
  const content = {
    whatIs: {
      title: "What is Sermorelin?",
      content: "Sermorelin is a synthetic peptide consisting of the first 29 amino acids of the naturally occurring growth hormone-releasing hormone (GHRH). Unlike synthetic human growth hormone (HGH), Sermorelin stimulates your pituitary gland to produce and release its own growth hormone naturally, maintaining the body's normal feedback mechanisms.",
      list: [
        "Growth Hormone Releasing Peptide (GHRP)",
        "FDA-approved for diagnostic use",
        "Bioidentical to natural GHRH fragment",
        "Preserves pituitary function"
      ]
    },
    howItWorks: {
      title: "How Sermorelin Works",
      content: "Sermorelin works by stimulating your pituitary gland to produce more growth hormone through your body's natural pathways:",
      list: [
        "Binds to GHRH receptors in the pituitary gland",
        "Stimulates natural production of growth hormone",
        "Promotes IGF-1 (Insulin-like Growth Factor) release from the liver",
        "Maintains natural pulsatile GH secretion patterns",
        "Supports cellular regeneration and metabolism"
      ]
    },
    benefits: [
      "Improved muscle mass and strength",
      "Enhanced fat metabolism and body composition",
      "Better sleep quality and recovery",
      "Increased energy and stamina",
      "Improved skin elasticity and appearance",
      "Enhanced cognitive function and mental clarity"
    ],
    whoIsItFor: {
      title: "Who Is Sermorelin For?",
      content: "Sermorelin therapy may be appropriate for adults experiencing symptoms of growth hormone decline, typically beginning in the 30s and accelerating with age:",
      list: [
        "Adults over 30 with symptoms of GH deficiency",
        "Those experiencing unexplained fatigue and low energy",
        "Individuals with difficulty maintaining muscle mass despite exercise",
        "Those seeking improved body composition and metabolism",
        "Adults looking for anti-aging and regenerative benefits"
      ]
    },
    dosage: {
      title: "Dosage & Administration",
      content: "Sermorelin is typically administered via subcutaneous injection at bedtime to align with the body's natural growth hormone release cycle:",
      list: [
        "Standard dosing: 200-300mcg daily at bedtime",
        "Administered via small insulin syringe subcutaneously",
        "Best taken on an empty stomach (at least 2 hours after eating)",
        "Cycling protocols may be recommended (5 days on, 2 days off)",
        "Results typically noticed within 3-6 months of consistent use"
      ]
    },
    sideEffects: [
      "Injection site reactions (redness, swelling)",
      "Headache",
      "Flushing",
      "Dizziness",
      "Hyperactivity",
      "Sleepiness",
      "Joint pain",
      "Changes in taste"
    ],
    clinicalInfo: "Clinical studies have demonstrated that Sermorelin effectively increases growth hormone levels in adults with age-related GH decline. Research shows improvements in body composition, including increased lean body mass and decreased fat mass, as well as improvements in energy, sleep quality, and overall quality of life markers."
  };

  const faqs = [
    {
      question: "What's the difference between Sermorelin and HGH?",
      answer: "While both increase growth hormone levels, they work very differently. HGH is direct synthetic growth hormone injection, which can suppress your pituitary gland over time. Sermorelin stimulates your body to produce its own GH naturally, preserving pituitary function and maintaining normal feedback mechanisms. Sermorelin is also more affordable and has a better safety profile for long-term use."
    },
    {
      question: "How long does it take to see results from Sermorelin?",
      answer: "Most patients notice improved sleep quality within 2-4 weeks. Energy improvements typically occur by weeks 4-8. Body composition changes, improved skin, and other benefits usually become noticeable at 3-6 months of consistent use. Full benefits may take 6-12 months to achieve."
    },
    {
      question: "Is Sermorelin safe for long-term use?",
      answer: "Sermorelin has an excellent safety profile because it works with your body's natural systems rather than replacing them. It doesn't suppress pituitary function like direct HGH administration. However, regular monitoring with your healthcare provider is recommended to ensure optimal dosing and assess your response to treatment."
    },
    {
      question: "Can I take Sermorelin with other medications?",
      answer: "Sermorelin may interact with certain medications, particularly corticosteroids, thyroid medications, and insulin. Always disclose all medications and supplements to your healthcare provider before starting Sermorelin therapy. Your provider will assess any potential interactions."
    },
    {
      question: "Do I need to fast before taking Sermorelin?",
      answer: "Yes, for optimal absorption and effectiveness, Sermorelin should be taken on an empty stomach, ideally at least 2 hours after your last meal. This is why bedtime administration is recommended. Avoid eating for 30 minutes after injection if possible."
    },
    {
      question: "Will I need to take Sermorelin forever?",
      answer: "Treatment duration varies by individual goals and response. Some patients use Sermorelin cyclically (several months on, then a break), while others benefit from ongoing maintenance therapy. Your healthcare provider will help determine the best approach based on your lab results and response to treatment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sermorelin Therapy | Growth Hormone Peptide Treatment | MediCare</title>
        <meta name="description" content="Sermorelin peptide therapy for anti-aging, muscle support, and improved vitality. Natural growth hormone optimization with personalized treatment plans. Start your consultation." />
        <meta property="og:title" content="Sermorelin Therapy | MediCare" />
        <meta property="og:description" content="Optimize your growth hormone naturally with Sermorelin therapy. Improve energy, body composition, and vitality." />
      </Helmet>

      <Header />
      
      <main>
        <TreatmentHero
          title="Sermorelin Therapy"
          subtitle="Growth Hormone Optimization"
          description="Naturally boost your growth hormone levels with Sermorelin peptide therapy. Experience improved energy, better sleep, enhanced muscle mass, and overall vitality."
          image={sermorelinImage}
          price="$199"
          category="Peptide Therapy"
          badges={['Prescription Required', 'Lab Monitoring', 'Free Shipping']}
        />
        
        <TreatmentContent {...content} />
        
        <TreatmentFAQ 
          title="Sermorelin Therapy FAQ" 
          faqs={faqs} 
        />
        
        <TreatmentCTA 
          title="Optimize Your Growth Hormone Naturally"
          subtitle="Start with a comprehensive consultation and lab work to determine if Sermorelin therapy is right for you."
        />
      </main>

      <Footer />
    </>
  );
};

export default Sermorelin;
