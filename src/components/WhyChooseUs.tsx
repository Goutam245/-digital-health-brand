import { Award, DollarSign, Zap, Lock } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Licensed Pharmacists',
      description: 'Our team of certified pharmacists ensures your medications are safe and effective.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Save up to 80% compared to traditional pharmacies. No hidden fees, ever.',
      color: 'bg-secondary/20 text-secondary-foreground',
    },
    {
      icon: Zap,
      title: 'Fast Shipping',
      description: 'Get your medications delivered in as little as 2 business days, free of charge.',
      color: 'bg-amber/20 text-amber-600',
    },
    {
      icon: Lock,
      title: 'Private & Secure',
      description: 'Your health information is protected with bank-level encryption and HIPAA compliance.',
      color: 'bg-sky/20 text-sky-600',
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground font-heading font-medium text-small rounded-full mb-4">
            Why MediCare
          </span>
          <h2 className="text-h2 text-navy mb-4">Why Choose Us</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best healthcare experience possible
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">{benefit.title}</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
