import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    content: 'The Swiss Resort exceeded all my expectations. The service was impeccable, and the views were absolutely breathtaking. A truly unforgettable experience!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'Perfect for both relaxation and business. The facilities are world-class, and the staff goes above and beyond to make your stay memorable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Luxury Travel Consultant',
    content: 'I have stayed at many luxury resorts around the world, and Swiss Resort stands out for its attention to detail and exceptional service quality.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Guest Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Voices from Our Guests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what our satisfied guests have to say about their experience at Swiss Resort
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gray-50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
