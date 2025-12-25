import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've been using MediCare for 6 months now and the experience has been incredible. Affordable prices and quick delivery every time.",
      name: 'Sarah Johnson',
      role: 'Weight Loss Program',
      rating: 5,
      avatar: 'S',
    },
    {
      quote: "The online consultation was so easy and convenient. I got my prescription approved within hours and received my medication in 2 days.",
      name: 'Michael Chen',
      role: 'Hormone Therapy',
      rating: 5,
      avatar: 'M',
    },
    {
      quote: "Finally found a pharmacy that actually cares about patients. The customer service team is always helpful and responsive.",
      name: 'Emily Rodriguez',
      role: 'Skincare Treatment',
      rating: 5,
      avatar: 'E',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Quote className="absolute top-20 left-10 w-32 h-32 text-primary/5 transform -rotate-12" />
        <Quote className="absolute bottom-20 right-10 w-24 h-24 text-secondary/10 transform rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-heading font-medium text-small rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-h2 text-navy mb-4">What Our Patients Say</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust MediCare for their healthcare needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl border border-border p-8 shadow-soft hover:shadow-card-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy">{testimonial.name}</h4>
                  <p className="text-small text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
