import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHero from '@/components/TreatmentHero';
import TreatmentContent from '@/components/TreatmentContent';
import TreatmentFAQ from '@/components/TreatmentFAQ';
import TreatmentCTA from '@/components/TreatmentCTA';
import glp1Image from '@/assets/glp1-treatment.png';

const WeightLoss = () => {
  const content = {
    whatIs: {
      title: "What is GLP-1 Treatment?",
      content: "GLP-1 (Glucagon-Like Peptide-1) receptor agonists are a class of FDA-approved medications originally developed for type 2 diabetes that have shown remarkable effectiveness for weight loss. These medications work by mimicking the natural GLP-1 hormone that your body produces after eating, helping regulate appetite and blood sugar levels.",
      list: [
        "Semaglutide (Wegovy, Ozempic)",
        "Tirzepatide (Mounjaro, Zepbound)",
        "Liraglutide (Saxenda)",
        "Compounded GLP-1 formulations"
      ]
    },
    howItWorks: {
      title: "How GLP-1 Medications Work",
      content: "GLP-1 medications target multiple pathways in your body to help you lose weight safely and effectively:",
      list: [
        "Slow gastric emptying, helping you feel full longer after meals",
        "Reduce appetite signals in the brain, decreasing food cravings",
        "Improve insulin sensitivity and regulate blood sugar levels",
        "Support sustainable weight loss of 15-20% of body weight in clinical trials"
      ]
    },
    benefits: [
      "Clinically proven weight loss results",
      "Once-weekly injection convenience",
      "Reduces cardiovascular risk factors",
      "Improves metabolic health markers",
      "Sustainable long-term weight management",
      "May reduce inflammation and fatty liver"
    ],
    whoIsItFor: {
      title: "Who Is GLP-1 Treatment For?",
      content: "GLP-1 medications may be appropriate for adults who meet certain criteria and are committed to making lifestyle changes alongside medication therapy:",
      list: [
        "Adults with BMI of 30 or higher (obesity)",
        "Adults with BMI of 27+ with weight-related conditions (hypertension, type 2 diabetes, high cholesterol)",
        "Individuals who have tried diet and exercise without sufficient results",
        "Those seeking a medically supervised weight loss approach"
      ]
    },
    dosage: {
      title: "Dosage & Administration",
      content: "GLP-1 medications are typically administered as a once-weekly subcutaneous injection. Your healthcare provider will create a personalized dosing schedule that gradually increases to minimize side effects:",
      list: [
        "Starting dose is low to allow your body to adjust",
        "Dose increases gradually every 4 weeks",
        "Full therapeutic dose reached after 16-20 weeks",
        "Injection sites include abdomen, thigh, or upper arm",
        "Rotate injection sites with each dose"
      ]
    },
    sideEffects: [
      "Nausea (usually temporary)",
      "Vomiting",
      "Diarrhea",
      "Constipation",
      "Abdominal pain",
      "Headache",
      "Fatigue",
      "Injection site reactions"
    ],
    clinicalInfo: "In the STEP clinical trial program, participants taking semaglutide 2.4mg weekly lost an average of 14.9% of their body weight over 68 weeks compared to 2.4% with placebo. The SELECT cardiovascular outcomes trial demonstrated a 20% reduction in major adverse cardiovascular events in patients with obesity and established cardiovascular disease."
  };

  const faqs = [
    {
      question: "How much weight can I expect to lose with GLP-1 treatment?",
      answer: "Clinical trials have shown average weight loss of 15-20% of body weight over 12-18 months with GLP-1 medications combined with lifestyle changes. Individual results vary based on starting weight, adherence to the medication, and lifestyle modifications."
    },
    {
      question: "Are GLP-1 medications safe for long-term use?",
      answer: "GLP-1 medications have been studied extensively and are FDA-approved for long-term use in weight management. Semaglutide and liraglutide have been used safely for over a decade in diabetes management. Your healthcare provider will monitor your progress and any potential side effects."
    },
    {
      question: "Will I regain weight if I stop taking GLP-1 medication?",
      answer: "Studies show that some weight regain is common after discontinuing GLP-1 medications, which is why lifestyle changes are essential during treatment. Many patients benefit from long-term maintenance therapy or a structured transition plan when appropriate."
    },
    {
      question: "Can I take GLP-1 medication if I have diabetes?",
      answer: "Yes, GLP-1 medications were originally developed for type 2 diabetes and may provide dual benefits for weight loss and blood sugar control. Your healthcare provider will adjust your diabetes medications as needed and monitor your progress closely."
    },
    {
      question: "How soon will I see results from GLP-1 treatment?",
      answer: "Most patients notice reduced appetite within the first 1-2 weeks. Visible weight loss typically begins within 4-8 weeks as you reach therapeutic dosing. Maximum weight loss effects are usually seen by 12-18 months of consistent use."
    },
    {
      question: "What if I miss a dose of my GLP-1 medication?",
      answer: "If you miss a dose and it's within 5 days of your scheduled injection, take it as soon as you remember. If more than 5 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Never take two doses at once."
    }
  ];

  return (
    <>
      <Helmet>
        <title>GLP-1 Weight Loss Treatment | Semaglutide & Tirzepatide | MediCare</title>
        <meta name="description" content="FDA-approved GLP-1 weight loss medications including Semaglutide and Tirzepatide. Lose 15-20% body weight with our medically supervised weight loss program. Start your consultation today." />
        <meta property="og:title" content="GLP-1 Weight Loss Treatment | MediCare" />
        <meta property="og:description" content="Clinically proven weight loss with GLP-1 medications. Personalized treatment plans delivered to your door." />
      </Helmet>

      <Header />
      
      <main>
        <TreatmentHero
          title="GLP-1 Weight Loss"
          subtitle="Personalized Treatment"
          description="Achieve sustainable weight loss with FDA-approved GLP-1 medications. Our medically supervised program helps you lose 15-20% of your body weight with personalized dosing and ongoing support."
          image={glp1Image}
          price="$299"
          category="Weight Loss"
          badges={['FDA Approved', 'Clinically Proven', 'Free Shipping']}
        />
        
        <TreatmentContent {...content} />
        
        <TreatmentFAQ 
          title="GLP-1 Weight Loss FAQ" 
          faqs={faqs} 
        />
        
        <TreatmentCTA 
          title="Start Your Weight Loss Journey"
          subtitle="Complete a quick online consultation and get your personalized GLP-1 treatment plan within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
};

export default WeightLoss;
