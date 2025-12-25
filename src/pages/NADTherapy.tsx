import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHero from '@/components/TreatmentHero';
import TreatmentContent from '@/components/TreatmentContent';
import TreatmentFAQ from '@/components/TreatmentFAQ';
import TreatmentCTA from '@/components/TreatmentCTA';
import nadImage from '@/assets/nad-vial.png';

const NADTherapy = () => {
  const content = {
    whatIs: {
      title: "What is NAD+ Therapy?",
      content: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell of your body that's essential for hundreds of metabolic processes. It plays a crucial role in energy production, DNA repair, cellular signaling, and gene expression. NAD+ levels naturally decline with age, and supplementation can help restore optimal cellular function.",
      list: [
        "Essential coenzyme in all living cells",
        "Critical for mitochondrial function",
        "Involved in 500+ enzymatic reactions",
        "Declines 50% by age 50"
      ]
    },
    howItWorks: {
      title: "How NAD+ Therapy Works",
      content: "NAD+ therapy works at the cellular level to support your body's fundamental processes:",
      list: [
        "Powers mitochondria for ATP (energy) production",
        "Activates sirtuins—proteins involved in longevity and DNA repair",
        "Supports PARP enzymes for DNA damage repair",
        "Regulates circadian rhythm and sleep-wake cycles",
        "Enhances neurotransmitter synthesis and brain function"
      ]
    },
    benefits: [
      "Increased cellular energy and reduced fatigue",
      "Enhanced mental clarity and focus",
      "Improved athletic performance and recovery",
      "Support for healthy aging at the cellular level",
      "Better metabolic function and weight management",
      "Neuroprotective benefits for brain health"
    ],
    whoIsItFor: {
      title: "Who Is NAD+ Therapy For?",
      content: "NAD+ supplementation may benefit adults experiencing age-related decline in energy and cellular function, as well as those seeking optimization of health and longevity:",
      list: [
        "Adults over 35 experiencing fatigue and low energy",
        "Those seeking cognitive enhancement and mental clarity",
        "Athletes looking to improve performance and recovery",
        "Individuals interested in longevity and healthy aging",
        "Those recovering from illness or chronic conditions"
      ]
    },
    dosage: {
      title: "Dosage & Administration",
      content: "NAD+ can be administered through various methods depending on your goals and preferences. Your healthcare provider will recommend the best approach:",
      list: [
        "Subcutaneous injection: 50-100mg daily or several times weekly",
        "IV infusion: 250-500mg per session (clinic-based)",
        "Oral NAD+ precursors (NMN/NR): 250-500mg daily",
        "Nasal spray: 100-200mg daily for rapid absorption",
        "Treatment protocols typically run 4-12 weeks initially"
      ]
    },
    sideEffects: [
      "Mild nausea (especially with IV infusion)",
      "Flushing and warmth",
      "Headache",
      "Chest tightness (transient during IV)",
      "Muscle cramping",
      "Injection site reactions",
      "Fatigue immediately post-treatment",
      "Insomnia if taken too late in day"
    ],
    clinicalInfo: "Research has demonstrated that NAD+ levels decline significantly with age and are associated with various age-related conditions. Studies in both animal models and humans show that restoring NAD+ levels can improve mitochondrial function, enhance DNA repair mechanisms, and activate longevity-associated pathways including sirtuins. Clinical trials are ongoing to further establish therapeutic applications."
  };

  const faqs = [
    {
      question: "What's the difference between NAD+ and NAD+ precursors like NMN or NR?",
      answer: "Direct NAD+ (via injection or IV) provides the active coenzyme immediately to your cells. NAD+ precursors like NMN (Nicotinamide Mononucleotide) or NR (Nicotinamide Riboside) must be converted to NAD+ in your body. Both approaches can be effective, with direct NAD+ providing faster results and precursors offering convenience for daily oral supplementation."
    },
    {
      question: "How quickly will I feel results from NAD+ therapy?",
      answer: "Many patients report improved energy and mental clarity within 1-2 days of IV infusion or after 1-2 weeks of injection therapy. The initial effects often include increased alertness and better sleep quality. Full benefits for cellular health and longevity develop over weeks to months of consistent treatment."
    },
    {
      question: "Is NAD+ therapy safe?",
      answer: "NAD+ is a naturally occurring molecule in your body, making supplementation generally safe when administered appropriately. Side effects are typically mild and transient. However, it's important to work with a qualified healthcare provider who can determine appropriate dosing and monitor your response to treatment."
    },
    {
      question: "Can NAD+ help with addiction recovery?",
      answer: "NAD+ IV therapy has been used in some addiction treatment protocols, with reports of reduced withdrawal symptoms and cravings. While promising, this application should only be pursued under specialized medical supervision as part of a comprehensive treatment program. More research is needed to fully establish its role in addiction medicine."
    },
    {
      question: "How often do I need NAD+ treatments?",
      answer: "Treatment frequency depends on the method and your goals. IV infusions are typically done weekly or bi-weekly initially, then monthly for maintenance. Subcutaneous injections are often 2-3 times weekly. Oral precursors are taken daily. Your provider will recommend a protocol based on your specific needs and response."
    },
    {
      question: "Can I combine NAD+ with other therapies?",
      answer: "Yes, NAD+ therapy often complements other treatments well. It's commonly combined with peptide therapies, hormone optimization, and IV vitamin infusions for synergistic benefits. Always inform your healthcare provider of all treatments you're receiving to ensure safety and optimal outcomes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>NAD+ Therapy | Energy & Longevity Treatment | MediCare</title>
        <meta name="description" content="NAD+ therapy for cellular energy, mental clarity, and healthy aging. Injectable and IV NAD+ treatments with personalized protocols. Start your anti-aging journey today." />
        <meta property="og:title" content="NAD+ Therapy | MediCare" />
        <meta property="og:description" content="Restore cellular energy and support healthy aging with NAD+ therapy. Personalized treatment plans available." />
      </Helmet>

      <Header />
      
      <main>
        <TreatmentHero
          title="NAD+ Therapy"
          subtitle="Cellular Energy & Longevity"
          description="Restore your cellular energy and support healthy aging with NAD+ therapy. Experience improved mental clarity, enhanced energy, and optimized cellular function."
          image={nadImage}
          price="$249"
          category="Longevity"
          badges={['Anti-Aging', 'Cellular Health', 'Free Shipping']}
        />
        
        <TreatmentContent {...content} />
        
        <TreatmentFAQ 
          title="NAD+ Therapy FAQ" 
          faqs={faqs} 
        />
        
        <TreatmentCTA 
          title="Energize Your Cells, Extend Your Vitality"
          subtitle="Discover how NAD+ therapy can help you feel more energetic, think more clearly, and age more gracefully."
        />
      </main>

      <Footer />
    </>
  );
};

export default NADTherapy;
