import Link from 'next/link';
import { signatureBowls, reviews, businessInfo } from '@/lib/data';

export default function Home() {
  const featuredBowls = signatureBowls.filter(bowl => bowl.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--accent-mint)] via-white to-[var(--accent-cream)] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--primary-green)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--primary-orange)]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-[var(--primary-orange)] font-semibold">{businessInfo.rating}</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-[var(--text-light)]">{businessInfo.reviewCount}+ Reviews</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-dark)] mb-6 leading-tight">
                Fresh Hawaiian{' '}
                <span className="text-[var(--primary-green)]">Poke Bowls</span>{' '}
                in Galloway, NJ
              </h1>

              <p className="text-xl md:text-2xl text-[var(--text-light)] mb-8">
                Bold flavors. Fresh ingredients. Built your way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={businessInfo.orderOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Order Online
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[var(--primary-green)] border-2 border-[var(--primary-green)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg"
                >
                  View Menu
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/20 to-[var(--primary-orange)]/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] rounded-full w-[500px] h-[500px] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🥗</div>
                  <p className="text-2xl font-bold">Fresh Daily</p>
                  <p className="text-lg opacity-80">Made with Aloha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[var(--accent-mint)] to-[var(--accent-cream)] rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-4xl mb-2">🐟</div>
                    <h4 className="font-semibold text-[var(--text-dark)]">Fresh Fish</h4>
                    <p className="text-sm text-[var(--text-light)]">Daily sourced</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-4xl mb-2">🥑</div>
                    <h4 className="font-semibold text-[var(--text-dark)]">Premium</h4>
                    <p className="text-sm text-[var(--text-light)]">Ingredients</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-4xl mb-2">🌺</div>
                    <h4 className="font-semibold text-[var(--text-dark)]">Hawaiian</h4>
                    <p className="text-sm text-[var(--text-light)]">Inspired</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-4xl mb-2">✨</div>
                    <h4 className="font-semibold text-[var(--text-dark)]">Customizable</h4>
                    <p className="text-sm text-[var(--text-light)]">Your way</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-6">
                Bringing Aloha to South Jersey
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                At Po-Kay Bowls, we bring the vibrant flavors of Hawaiian-inspired poke to South Jersey. Every bowl is handcrafted using fresh ingredients, bold sauces, and customizable options so you can build a meal that fits your cravings.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Whether you&apos;re stopping in for a quick lunch, a healthy dinner, or catering for a group, Po-Kay Bowls is your go-to spot for fresh poke bowls in Galloway, NJ.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[var(--primary-green)] font-semibold hover:text-[var(--primary-green-dark)] transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bowls Section */}
      <section className="py-20 bg-[var(--accent-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              Signature Bowls
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Discover our most popular creations, crafted with the freshest ingredients and bold Hawaiian-inspired flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBowls.map((bowl, index) => (
              <div
                key={bowl.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`h-48 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[var(--primary-orange)] to-[var(--primary-orange-dark)]' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                  'bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)]'
                } flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {index % 4 === 0 ? '🍣' : index % 4 === 1 ? '🌋' : index % 4 === 2 ? '🍍' : '🥥'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-dark)]">{bowl.name}</h3>
                    <span className="text-[var(--primary-orange)] font-bold">${bowl.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-[var(--text-light)] line-clamp-3">{bowl.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Full Menu
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-[var(--primary-orange)]">{businessInfo.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[var(--text-light)]">on Google ({businessInfo.reviewCount}+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="bg-[var(--accent-mint)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--text-dark)] mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[var(--primary-green)]">{review.name}</span>
                  <span className="text-sm text-[var(--text-muted)]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center text-[var(--primary-green)] font-semibold hover:text-[var(--primary-green-dark)] transition-colors"
            >
              Read More Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Location</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Visit Us Today
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-white/80">{businessInfo.address}</p>
                    <p className="text-white/80">{businessInfo.city}, {businessInfo.state} {businessInfo.zip}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-white/80">{businessInfo.hours}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="text-white/80 hover:text-[var(--primary-orange)] transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  Get Directions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </a>
                <a
                  href={businessInfo.orderOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
                >
                  Order Online
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-74.5!3d39.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMwJzAwLjAiTiA3NMKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Po-Kay Bowls Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--accent-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Ready to Try the Best Poke in South Jersey?
          </h2>
          <p className="text-lg text-[var(--text-light)] mb-8">
            Order online for pickup or delivery, or visit us in Galloway today!
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
