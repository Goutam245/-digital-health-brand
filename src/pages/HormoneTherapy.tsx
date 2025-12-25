import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHero from '@/components/TreatmentHero';
import TreatmentContent from '@/components/TreatmentContent';
import TreatmentFAQ from '@/components/TreatmentFAQ';
import TreatmentCTA from '@/components/TreatmentCTA';

const HormoneTherapy = () => {
  const content = {
    whatIs: {
      title: "What is Hormone Replacement Therapy?",
      content: "Hormone Replacement Therapy (HRT) involves supplementing hormones that your body no longer produces in adequate amounts. As we age, hormone levels naturally decline, leading to various symptoms that can significantly impact quality of life. HRT aims to restore hormonal balance and alleviate these symptoms while supporting overall health.",
      list: [
        "Bioidentical hormone options available",
        "Personalized based on lab testing",
        "Addresses estrogen, progesterone, testosterone",
        "Thyroid optimization included when needed"
      ]
    },
    howItWorks: {
      title: "How Hormone Therapy Works",
      content: "Hormone therapy replaces declining hormones to restore your body to optimal function. Treatment is highly individualized based on your symptoms, lab values, and health goals:",
      list: [
        "Comprehensive hormone panel and health assessment",
        "Customized prescription based on your unique needs",
        "Regular monitoring and dose adjustments",
        "Multiple delivery methods: creams, pellets, injections, patches",
        "Ongoing support from your healthcare provider"
      ]
    },
    benefits: [
      "Relief from hot flashes and night sweats",
      "Improved mood and reduced anxiety",
      "Better sleep quality",
      "Increased energy and reduced fatigue",
      "Enhanced libido and sexual function",
      "Improved bone density and muscle mass",
      "Better cognitive function and memory",
      "Healthier skin and hair"
    ],
    whoIsItFor: {
      title: "Who Is Hormone Therapy For?",
      content: "Hormone therapy may be appropriate for both women and men experiencing symptoms of hormonal imbalance or decline:",
      list: [
        "Women in perimenopause or menopause (typically 40-55+)",
        "Women with premature ovarian insufficiency",
        "Men with low testosterone (typically 40+)",
        "Those with symptoms despite 'normal' lab ranges",
        "Individuals seeking to optimize hormonal health proactively"
      ]
    },
    dosage: {
      title: "Treatment Options & Delivery Methods",
      content: "We offer multiple delivery methods to suit your lifestyle and preferences. Your healthcare provider will recommend the best approach based on your needs:",
      list: [
        "Topical creams: Applied daily, steady hormone release",
        "Hormone pellets: Inserted every 3-6 months, consistent levels",
        "Injectable hormones: Weekly or bi-weekly administration",
        "Transdermal patches: Changed 1-2 times weekly",
        "Oral medications: Daily pills (less common due to liver effects)"
      ]
    },
    sideEffects: [
      "Breast tenderness",
      "Bloating and water retention",
      "Mood changes during adjustment",
      "Headaches",
      "Spotting or bleeding (women)",
      "Acne (testosterone therapy)",
      "Hair changes",
      "Application site reactions"
    ],
    clinicalInfo: "The Women's Health Initiative and subsequent studies have provided important insights into hormone therapy. Current evidence supports that HRT, when started within 10 years of menopause onset, provides cardiovascular and bone benefits with an acceptable safety profile. Bioidentical hormones, which are molecularly identical to those produced by the human body, are increasingly preferred for their favorable side effect profiles."
  };

  const faqs = [
    {
      question: "What's the difference between bioidentical and synthetic hormones?",
      answer: "Bioidentical hormones are molecularly identical to the hormones your body naturally produces, while synthetic hormones have a slightly different molecular structure. Bioidentical hormones are often preferred because they may be metabolized more efficiently and have fewer side effects. However, both types can be effective, and your provider will recommend the best option for your situation."
    },
    {
      question: "Is hormone therapy safe?",
      answer: "For appropriate candidates, hormone therapy is generally safe when properly monitored. The key is individualized treatment—working with a qualified provider who conducts thorough testing, starts with appropriate doses, and monitors your progress regularly. Risks and benefits vary based on age, health status, type of hormones used, and delivery method."
    },
    {
      question: "How soon will I feel better on hormone therapy?",
      answer: "Many patients notice improvements within 2-4 weeks, particularly in symptoms like hot flashes, sleep quality, and energy levels. However, it can take 3-6 months to experience the full benefits as your body adjusts and doses are optimized. Patience and consistent communication with your provider are important."
    },
    {
      question: "Will I need to be on hormone therapy forever?",
      answer: "Treatment duration is individualized. Some patients use HRT for a few years during the menopausal transition, while others continue long-term for ongoing symptom relief and health benefits. Your provider will help you make informed decisions based on your symptoms, health status, and personal preferences."
    },
    {
      question: "Can hormone therapy help with weight gain during menopause?",
      answer: "Hormonal changes contribute to the metabolic shifts that often cause weight gain during menopause. While HRT isn't a weight loss treatment, restoring hormonal balance can support better body composition, reduce belly fat accumulation, maintain muscle mass, and improve energy for physical activity. Combined with lifestyle changes, many patients find weight management easier."
    },
    {
      question: "Do men need hormone therapy too?",
      answer: "Yes, men experience age-related testosterone decline (sometimes called andropause or hypogonadism) that can cause fatigue, decreased muscle mass, weight gain, low libido, mood changes, and cognitive issues. Testosterone replacement therapy (TRT) can effectively address these symptoms when properly diagnosed and monitored."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hormone Replacement Therapy | Bioidentical HRT | MediCare</title>
        <meta name="description" content="Personalized hormone replacement therapy for women and men. Bioidentical hormones for menopause, low testosterone, and hormonal imbalance. Expert care and ongoing monitoring." />
        <meta property="og:title" content="Hormone Replacement Therapy | MediCare" />
        <meta property="og:description" content="Restore hormonal balance with personalized HRT. Relief from menopause symptoms and low testosterone." />
      </Helmet>

      <Header />
      
      <main>
        <TreatmentHero
          title="Hormone Therapy"
          subtitle="Personalized Hormone Optimization"
          description="Restore your hormonal balance with personalized hormone replacement therapy. Experience relief from symptoms of menopause, low testosterone, and hormonal imbalance with expert medical guidance."
          image="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=600&fit=crop"
          price="$175"
          category="Hormone Health"
          badges={['Bioidentical Options', 'Lab Monitoring', 'Free Shipping']}
        />
        
        <TreatmentContent {...content} />
        
        <TreatmentFAQ 
          title="Hormone Therapy FAQ" 
          faqs={faqs} 
        />
        
        <TreatmentCTA 
          title="Restore Your Hormonal Balance"
          subtitle="Start with comprehensive lab testing and a personalized consultation to create your hormone optimization plan."
        />
      </main>

      <Footer />
    </>
  );
};

export default HormoneTherapy;
