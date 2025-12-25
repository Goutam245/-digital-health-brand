import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Do I need insurance to use MediCare?',
      answer: 'No, you do not need insurance to use MediCare. We offer transparent, affordable pricing for all our medications and services. Our goal is to make healthcare accessible to everyone, regardless of insurance status.',
    },
    {
      question: 'How does the online consultation work?',
      answer: 'Our online consultations are simple and convenient. After you select a treatment, you\'ll fill out a health questionnaire. A licensed healthcare provider will review your information and, if appropriate, prescribe your medication. The entire process typically takes less than 24 hours.',
    },
    {
      question: 'What is your shipping policy?',
      answer: 'We offer free standard shipping on all orders, which typically arrives within 2-5 business days. Expedited shipping options are also available at checkout for faster delivery. All packages are shipped discreetly with no indication of the contents.',
    },
    {
      question: 'Are your medications FDA approved?',
      answer: 'Yes, all medications dispensed by MediCare are FDA-approved and sourced from licensed pharmaceutical manufacturers. We are a fully licensed pharmacy that adheres to all state and federal regulations.',
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply browse our treatments, select the one that fits your needs, complete a brief health assessment, and our medical team will review your information. Once approved, your medication will be shipped directly to your door.',
    },
    {
      question: 'What if I have questions about my medication?',
      answer: 'Our team of licensed pharmacists is available to answer any questions you may have about your medication. You can reach us through our secure messaging system, phone, or email. We\'re here to support you throughout your treatment.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground font-heading font-medium text-small rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-h2 text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-up stagger-2">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/50 border border-border rounded-xl px-6 data-[state=open]:bg-card data-[state=open]:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-navy hover:text-primary transition-colors py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
