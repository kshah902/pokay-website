import { Metadata } from 'next';
import { businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Visit Us | Po-Kay Bowls - Fresh Poke Bowls in Galloway, NJ',
  description: 'Visit Po-Kay Bowls at 68 West Jimmie Leeds Road, Galloway, NJ 08205. Open daily 11 AM - 9 PM. Get directions, hours, and contact information.',
};

export default function VisitPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Location</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
            Visit Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Come experience the best poke bowls in South Jersey. We can&apos;t wait to serve you!
          </p>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-8">
                Find Us
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--accent-mint)] rounded-full p-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-1">Address</h3>
                    <p className="text-lg text-[var(--text-light)]">{businessInfo.address}</p>
                    <p className="text-lg text-[var(--text-light)]">{businessInfo.city}, {businessInfo.state} {businessInfo.zip}</p>
                    <a
                      href={businessInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[var(--primary-green)] font-semibold mt-2 hover:text-[var(--primary-green-dark)] transition-colors"
                    >
                      Get Directions
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--accent-mint)] rounded-full p-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-1">Hours</h3>
                    <p className="text-lg text-[var(--text-light)]">Open Daily</p>
                    <p className="text-lg font-semibold text-[var(--primary-green)]">11:00 AM - 9:00 PM</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--accent-mint)] rounded-full p-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="text-lg text-[var(--primary-green)] font-semibold hover:text-[var(--primary-green-dark)] transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href={businessInfo.orderOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Order Online
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Directions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-74.5!3d39.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMwJzAwLjAiTiA3NMKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Po-Kay Bowls Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-20 bg-[var(--accent-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              Why Visit Po-Kay Bowls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🐟</div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Fresh Ingredients</h3>
              <p className="text-sm text-[var(--text-light)]">Made daily with the freshest fish and produce</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Fully Customizable</h3>
              <p className="text-sm text-[var(--text-light)]">Build your perfect bowl, your way</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Vegetarian Options</h3>
              <p className="text-sm text-[var(--text-light)]">Great options for plant-based diets</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Fast, Friendly Service</h3>
              <p className="text-sm text-[var(--text-light)]">Quick service with a smile</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can&apos;t Make It In?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Order online for pickup or delivery and enjoy our fresh poke bowls wherever you are!
          </p>
          <a
            href={businessInfo.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Order Now
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
