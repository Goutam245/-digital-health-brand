import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedTreatments from '@/components/FeaturedTreatments';
import ProductsGrid from '@/components/ProductsGrid';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MediCare - Premium Telehealth & Digital Pharmacy | Affordable Medications Delivered</title>
        <meta
          name="description"
          content="Get affordable prescriptions delivered to your door. No insurance required. FDA-approved medications with free shipping. Start your online consultation today."
        />
        <meta name="keywords" content="telehealth, online pharmacy, prescription delivery, affordable medications, GLP-1, weight loss, hormone therapy" />
        <link rel="canonical" href="https://medicare.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MediCare - Premium Telehealth & Digital Pharmacy" />
        <meta property="og:description" content="Get affordable prescriptions delivered to your door. No insurance required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medicare.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MediCare - Premium Telehealth & Digital Pharmacy" />
        <meta name="twitter:description" content="Get affordable prescriptions delivered to your door. No insurance required." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "MediCare",
            "description": "Premium telehealth and digital pharmacy offering affordable medications with free delivery.",
            "url": "https://medicare.com",
            "telephone": "1-800-MEDICARE",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "priceRange": "$$",
            "medicalSpecialty": ["Pharmacy", "Telehealth"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <FeaturedTreatments />
          <ProductsGrid />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
