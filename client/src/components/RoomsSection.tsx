import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Spacious room with breathtaking ocean views and private balcony',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/luxury-room-view-hbjJQGVHQZxV2ttCysZpe8.webp',
    price: 450,
    rating: 4.8,
    amenities: ['King Bed', 'Ocean View', 'Balcony', 'Spa Bath'],
  },
  {
    id: 2,
    name: 'Suite Beachfront',
    description: 'Ultimate luxury with direct beach access and premium amenities',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/luxury-room-view-hbjJQGVHQZxV2ttCysZpe8.webp',
    price: 650,
    rating: 4.9,
    amenities: ['Beachfront', 'Living Area', 'Jacuzzi', 'Concierge'],
  },
  {
    id: 3,
    name: 'Villa Presidential',
    description: 'Exclusive villa with private pool and personalized service',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/luxury-room-view-hbjJQGVHQZxV2ttCysZpe8.webp',
    price: 1200,
    rating: 5.0,
    amenities: ['Private Pool', 'Chef Service', 'Butler', 'Infinity View'],
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Our Accommodations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Luxurious Rooms & Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of elegantly designed rooms, each offering stunning views and world-class amenities
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-full">
                  <p className="text-sm font-bold text-primary">${room.price}/night</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-primary">{room.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground">{room.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs px-3 py-1 bg-secondary text-primary rounded-full font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
