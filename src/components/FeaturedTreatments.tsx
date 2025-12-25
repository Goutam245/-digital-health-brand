import { ArrowRight } from 'lucide-react';
import glp1Image from '@/assets/glp1-treatment.png';
import sermorelinImage from '@/assets/sermorelin-vial.png';
import nadImage from '@/assets/nad-vial.png';

const FeaturedTreatments = () => {
  const treatments = [
    {
      title: 'Personalized GLP-1 Treatments',
      subtitle: 'for weight loss',
      gradient: 'bg-gradient-teal',
      badge: null,
      image: glp1Image,
    },
    {
      title: 'Sermorelin',
      subtitle: 'for muscle support',
      gradient: 'bg-gradient-warm',
      badge: 'Rx only',
      image: sermorelinImage,
    },
    {
      title: 'NAD+',
      subtitle: 'for energy and longevity',
      gradient: 'bg-gradient-blue',
      badge: 'Rx only',
      image: nadImage,
    },
  ];

  return (
    <section id="treatments" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-navy mb-4">Featured Treatments</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular treatments, carefully curated to help you achieve your health goals
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className={`group relative overflow-hidden rounded-3xl ${treatment.gradient} p-8 min-h-[420px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-large animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Product image */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="max-h-56 object-contain drop-shadow-xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="text-h4 text-primary-foreground mb-1">{treatment.title}</h3>
                  <p className="text-body text-primary-foreground/80">{treatment.subtitle}</p>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-primary-foreground font-heading font-semibold text-small uppercase tracking-wide group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {treatment.badge && (
                    <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-primary-foreground text-small font-heading">
                      {treatment.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
