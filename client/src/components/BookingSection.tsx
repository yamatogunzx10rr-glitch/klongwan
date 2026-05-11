import { Calendar, Users, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Plan Your Perfect Getaway
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check availability and book your luxurious stay at Swiss Resort
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-4">
            {/* Check-in Date */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Check-in
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            {/* Check-out Date */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Check-out
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            {/* Rooms */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Rooms
              </label>
              <select
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors duration-300"
              >
                Check Availability
              </button>
            </div>
          </form>

          {/* Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">22+</p>
              <p className="text-muted-foreground">Luxury Rooms</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">5★</p>
              <p className="text-muted-foreground">Guest Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Concierge Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
