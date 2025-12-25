import { Search, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroProducts from '@/assets/hero-products.png';

const Hero = () => {
  const trustBadges = [
    { icon: CheckCircle, text: 'Licensed Pharmacy' },
    { icon: Truck, text: 'Free Delivery' },
    { icon: Shield, text: 'FDA Approved' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
              <span className="font-heading text-small font-medium text-muted-foreground">
                Trusted by 50,000+ patients
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-h1 md:text-display text-navy">
                Your medications,{' '}
                <span className="text-primary">delivered</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-lg">
                Get affordable prescriptions delivered to your door. No insurance required. 
                No appointments needed. Start feeling better today.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <div className="flex items-center bg-card rounded-2xl shadow-medium border border-border/50 p-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Search className="w-5 h-5 text-muted-foreground ml-4" />
                <Input
                  type="text"
                  placeholder="Search for any medication..."
                  className="flex-1 border-0 bg-transparent font-body text-body focus-visible:ring-0 focus-visible:ring-offset-0 h-14"
                />
                <Button className="h-12 px-6 font-heading bg-primary hover:bg-primary/90 rounded-xl">
                  Search
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-secondary" />
                  <span className="font-heading text-small font-medium text-muted-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] animate-fade-up stagger-2">
            {/* Main product image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={heroProducts} 
                alt="Premium pharmaceutical products including pill bottles, medical vials, and pump bottles"
                className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />

              {/* Floating card */}
              <div className="absolute bottom-8 right-0 lg:right-8 bg-card px-5 py-4 rounded-xl shadow-large border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy">Fast Delivery</p>
                    <p className="text-small text-muted-foreground">2-Day shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
