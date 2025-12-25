import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TreatmentHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price?: string;
  badges?: string[];
  category?: string;
}

const TreatmentHero = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  price,
  badges = ['FDA Approved', 'Licensed Pharmacy', 'Free Shipping'],
  category
}: TreatmentHeroProps) => {
  return (
    <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-cream via-card to-soft-gray">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8 text-small">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/treatments" className="hover:text-primary transition-colors">Treatments</Link></li>
            {category && (
              <>
                <li>/</li>
                <li><span className="text-foreground">{category}</span></li>
              </>
            )}
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Shield className="w-4 h-4" />
              <span className="font-heading font-medium text-small">Prescription Required</span>
            </div>

            <div>
              <p className="text-primary font-heading font-semibold text-body-large mb-2">{subtitle}</p>
              <h1 className="text-h1 font-heading font-bold text-navy leading-tight">{title}</h1>
            </div>

            <p className="text-body-large text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            {price && (
              <div className="flex items-baseline gap-2">
                <span className="text-h3 font-heading font-bold text-primary">{price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-heading text-body group">
                Start Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-heading text-body">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-sage/10 p-8 lg:p-12">
              <img 
                src={image} 
                alt={title}
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-card rounded-xl shadow-large px-4 py-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber" />
                <span className="font-heading font-semibold text-small">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentHero;
