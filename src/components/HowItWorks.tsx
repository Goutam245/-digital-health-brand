import { Search, Video, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '1',
      title: 'Choose Your Treatment',
      description: 'Browse our selection of FDA-approved medications and find the right treatment for your needs.',
      color: 'from-primary to-teal-light',
    },
    {
      icon: Video,
      number: '2',
      title: 'Consult Online',
      description: 'Connect with a licensed healthcare provider through our secure telehealth platform.',
      color: 'from-secondary to-mint',
    },
    {
      icon: Package,
      number: '3',
      title: 'Get Delivered',
      description: 'Receive your prescribed medication directly at your door with free, discreet shipping.',
      color: 'from-sky to-cyan-400',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-heading font-medium text-small rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-h2 text-navy mb-4">How It Works</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Getting the care you need is easier than ever. Follow these three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-sky/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-sky opacity-50" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="relative inline-block mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-medium transform hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-card rounded-full border-2 border-border flex items-center justify-center shadow-soft">
                    <span className="font-heading font-bold text-small text-navy">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h4 text-navy mb-3">{step.title}</h3>
                <p className="text-body text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
