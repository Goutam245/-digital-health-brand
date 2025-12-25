import { ArrowRight } from 'lucide-react';

const ProductsGrid = () => {
  const products = [
    {
      title: 'MIC+B12',
      subtitle: 'for mood and energy',
      color: 'from-amber-50 to-amber-100',
      accent: 'bg-amber-400',
    },
    {
      title: 'Hormone Therapy',
      subtitle: 'for women',
      color: 'from-rose-50 to-rose-100',
      accent: 'bg-rose-400',
    },
    {
      title: 'Glutathione',
      subtitle: 'for antioxidant support',
      color: 'from-violet-50 to-violet-100',
      accent: 'bg-violet-400',
    },
    {
      title: 'Skin Care',
      subtitle: 'with NAD+',
      color: 'from-cyan-50 to-cyan-100',
      accent: 'bg-cyan-400',
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-navy mb-4">More Treatments</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of treatments designed for your wellbeing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Area */}
              <div className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center p-6`}>
                <div className={`w-20 h-28 ${product.accent}/20 rounded-xl shadow-soft transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className={`absolute inset-2 ${product.accent}/30 rounded-lg`} />
                </div>
                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 w-8 h-8 ${product.accent}/10 rounded-full`} />
                <div className={`absolute bottom-4 left-4 w-6 h-6 ${product.accent}/15 rounded-full`} />
              </div>

              {/* Content */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-navy mb-1">{product.title}</h3>
                  <p className="text-small text-muted-foreground">{product.subtitle}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
