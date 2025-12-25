import { ArrowRight, Shield, Truck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TreatmentCTAProps {
  title?: string;
  subtitle?: string;
}

const TreatmentCTA = ({ 
  title = "Ready to Get Started?",
  subtitle = "Complete your online consultation in minutes and get your treatment delivered to your door."
}: TreatmentCTAProps) => {
  const features = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Truck, text: 'Free Discreet Shipping' },
    { icon: CreditCard, text: 'Flexible Payment Options' },
  ];

  return (
    <section className="section-padding bg-gradient-teal">
      <div className="container-custom text-center">
        <h2 className="text-h2 font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-body-large text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="font-heading text-body-large bg-card text-primary hover:bg-card/90 group"
        >
          Start Your Consultation
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
              <feature.icon className="w-5 h-5" />
              <span className="font-heading font-medium text-small">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentCTA;
