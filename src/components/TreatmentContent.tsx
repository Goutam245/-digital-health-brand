import { CheckCircle, AlertCircle, Clock, Users, Pill, FileText } from 'lucide-react';

interface ContentSection {
  title: string;
  content: string;
  list?: string[];
}

interface TreatmentContentProps {
  whatIs: ContentSection;
  howItWorks: ContentSection;
  benefits: string[];
  whoIsItFor: ContentSection;
  dosage: ContentSection;
  sideEffects: string[];
  clinicalInfo?: string;
}

const TreatmentContent = ({
  whatIs,
  howItWorks,
  benefits,
  whoIsItFor,
  dosage,
  sideEffects,
  clinicalInfo
}: TreatmentContentProps) => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What Is Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-h2 font-heading font-bold text-navy">{whatIs.title}</h2>
            </div>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              {whatIs.content}
            </p>
            {whatIs.list && (
              <ul className="grid sm:grid-cols-2 gap-3">
                {whatIs.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <span className="text-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* How It Works */}
          <div className="space-y-6 p-8 rounded-2xl bg-soft-gray">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-h2 font-heading font-bold text-navy">{howItWorks.title}</h2>
            </div>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              {howItWorks.content}
            </p>
            {howItWorks.list && (
              <ol className="space-y-4">
                {howItWorks.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-small flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-body text-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="text-h2 font-heading font-bold text-navy">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-sage/10 border border-sage/20">
                  <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-body text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Is It For */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-sky" />
              </div>
              <h2 className="text-h2 font-heading font-bold text-navy">{whoIsItFor.title}</h2>
            </div>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              {whoIsItFor.content}
            </p>
            {whoIsItFor.list && (
              <ul className="space-y-3">
                {whoIsItFor.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dosage & Usage */}
          <div className="space-y-6 p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Pill className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-h2 font-heading font-bold text-navy">{dosage.title}</h2>
            </div>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              {dosage.content}
            </p>
            {dosage.list && (
              <ul className="space-y-3">
                {dosage.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Side Effects */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-coral" />
              </div>
              <h2 className="text-h2 font-heading font-bold text-navy">Potential Side Effects</h2>
            </div>
            <p className="text-body text-muted-foreground">
              Like all medications, this treatment may cause side effects in some patients. Common side effects include:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {sideEffects.map((effect, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0" />
                  <span className="text-body text-foreground">{effect}</span>
                </li>
              ))}
            </ul>
            <p className="text-small text-muted-foreground italic">
              If you experience severe or persistent side effects, contact your healthcare provider immediately.
            </p>
          </div>

          {/* Clinical Info */}
          {clinicalInfo && (
            <div className="p-8 rounded-2xl bg-navy text-primary-foreground">
              <h2 className="text-h3 font-heading font-bold mb-4">Clinical Information</h2>
              <p className="text-body leading-relaxed opacity-90">
                {clinicalInfo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentContent;
