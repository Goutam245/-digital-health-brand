import { ArrowRight, Shield, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  const badges = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: CheckCircle, text: 'Licensed Pharmacy' },
  ];

  return (
    <section className="section-padding bg-gradient-teal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-h2 md:text-display text-primary-foreground">
              Ready to get started?
            </h2>
            <p className="text-body-lg text-primary-foreground/80 max-w-xl mx-auto">
              Join thousands of satisfied patients who have transformed their health with MediCare. 
              Your journey to better health begins here.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-heading font-semibold text-lg px-8 py-6 rounded-xl shadow-large group"
            >
              Browse Treatments
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-heading font-semibold text-lg px-8 py-6 rounded-xl"
            >
              Talk to a Pharmacist
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {badges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-primary-foreground/70">
                <badge.icon className="w-5 h-5" />
                <span className="font-heading text-small font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
