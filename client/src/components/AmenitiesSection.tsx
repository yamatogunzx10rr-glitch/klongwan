import { UtensilsCrossed, Waves, Leaf, Users } from 'lucide-react';

interface Amenity {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const amenities: Amenity[] = [
  {
    id: 1,
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: 'Fine Dining',
    description: 'Experience world-class cuisine at our signature restaurants and bars',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/fine-dining-6HekfnbdcFSYmggshjZC3E.webp',
  },
  {
    id: 2,
    icon: <Waves className="w-8 h-8" />,
    title: 'Water Activities',
    description: 'Enjoy snorkeling, diving, sailing, and other thrilling water sports',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/water-activities-V5yGEBwZ5oiKexfjMUsk9e.webp',
  },
  {
    id: 3,
    icon: <Leaf className="w-8 h-8" />,
    title: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind with our premium spa treatments',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/spa-wellness-isKwNeuvZen3iLauoDenpm.webp',
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    title: 'Events & Meetings',
    description: 'Host your special events in our elegant and versatile venues',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/hero-beach-resort-7GZNNqVraoLue3zWMEGyh7.webp',
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            World-Class Facilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Exceptional Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fine dining to water sports, discover everything our luxury resort has to offer
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-primary">
                    {amenity.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
                  <button className="mt-4 text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
