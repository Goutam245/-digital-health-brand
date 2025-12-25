import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface TreatmentFAQProps {
  title?: string;
  faqs: FAQItem[];
}

const TreatmentFAQ = ({ title = "Frequently Asked Questions", faqs }: TreatmentFAQProps) => {
  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 font-heading font-bold text-navy text-center mb-12">
            {title}
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-subtle"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-navy hover:text-primary py-6 text-body-large">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-body leading-relaxed pb-6">
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

export default TreatmentFAQ;
