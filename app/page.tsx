import Link from 'next/link';
import Image from 'next/image';
import { signatureBowls, reviews, businessInfo } from '@/lib/data';

export default function Home() {
  const featuredBowls = signatureBowls.filter(bowl => bowl.featured);
  const bowlImages = [
    '/images/andreas-rasmussen-ZwzZ5F_pIBU-unsplash.jpg',
    '/images/miu-sua-_aQZnmZTuvo-unsplash.jpg',
    '/images/miu-sua-pO9851jklaE-unsplash.jpg',
    '/images/jonathan-borba-Gkc_xM3VY34-unsplash.jpg',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/andreas-rasmussen-ZwzZ5F_pIBU-unsplash.jpg"
            alt="Fresh poke bowl"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/20 via-transparent to-[var(--primary-orange)]/20 opacity-60"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--primary-orange)]/20 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[var(--primary-green)]/20 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            {/* Glass rating badge */}
            <div className="inline-flex items-center liquid-glass px-5 py-3 rounded-full mb-6">
              <span className="text-[var(--primary-orange)] font-bold text-lg">{businessInfo.rating}</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="ml-3 text-white/90 font-medium">{businessInfo.reviewCount}+ Reviews</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Fresh Hawaiian{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)]">
                Poke Bowls
              </span>{' '}
              in Galloway, NJ
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Bold flavors. Fresh ingredients. Built your way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={businessInfo.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-dark)] hover:from-[var(--primary-orange-light)] hover:to-[var(--primary-orange)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 glow-orange"
              >
                Order Online
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center liquid-glass hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Floating glass card on right side - desktop only */}
          <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2">
            <div className="liquid-glass rounded-3xl p-8 float">
              <div className="text-center">
                <div className="text-6xl mb-4">🥗</div>
                <p className="text-white font-bold text-xl">Fresh Daily</p>
                <p className="text-white/70">Made with Aloha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 gradient-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/jonathan-borba-Gkc_xM3VY34-unsplash.jpg"
                  alt="Fresh poke bowl with chopsticks"
                  fill
                  className="object-cover"
                />
                {/* Glass overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              {/* Floating glass card */}
              <div className="absolute -bottom-6 -right-6 liquid-glass rounded-2xl p-6 hidden md:block float">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <span className="text-3xl">🌺</span>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--text-dark)]">Made Fresh Daily</p>
                    <p className="text-sm text-[var(--text-light)]">With Aloha Spirit</p>
                  </div>
                </div>
              </div>
              {/* Additional floating element */}
              <div className="absolute -top-4 -left-4 glass-green rounded-xl p-4 hidden md:block float" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🐟</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block glass-orange text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-6">
                Bringing Aloha to South Jersey
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                At Po-Kay Bowls, we bring the vibrant flavors of Hawaiian-inspired poke to South Jersey. Every bowl is handcrafted using fresh ingredients, bold sauces, and customizable options so you can build a meal that fits your cravings.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Whether you&apos;re stopping in for a quick lunch, a healthy dinner, or catering for a group, Po-Kay Bowls is your go-to spot for fresh poke bowls in Galloway, NJ.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🐟', text: 'Fresh Fish Daily' },
                  { icon: '🥑', text: 'Premium Ingredients' },
                  { icon: '✨', text: 'Fully Customizable' },
                  { icon: '💚', text: 'Veggie Options' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 frosted-card rounded-xl p-3 hover:shadow-lg transition-all duration-300">
                    <div className="bg-[var(--accent-mint)] rounded-full p-2">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span className="font-medium text-[var(--text-dark)]">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-[var(--primary-green)] font-semibold hover:text-[var(--primary-green-dark)] transition-colors group"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bowls Section */}
      <section className="py-20 bg-[var(--accent-cream)] relative overflow-hidden">
        {/* Background decorative blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary-green)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--primary-orange)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block glass-orange text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Our Menu</span>
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
                className="group relative"
              >
                <div className="frosted-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={bowlImages[index % bowlImages.length]}
                      alt={bowl.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* Glass price tag */}
                    <div className="absolute top-3 right-3 liquid-glass px-3 py-1 rounded-full">
                      <span className="text-white font-bold">${bowl.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">{bowl.name}</h3>
                    <p className="text-sm text-[var(--text-light)] line-clamp-3">{bowl.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-green-dark)] hover:from-[var(--primary-green-dark)] hover:to-[var(--primary-green)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 glow-green"
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-mint)]/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block glass-orange text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-3 liquid-glass px-6 py-3 rounded-full">
              <span className="text-3xl font-bold text-[var(--primary-orange)]">{businessInfo.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[var(--text-dark)] font-medium">on Google ({businessInfo.reviewCount}+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="frosted-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
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
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-[var(--primary-green)]">{review.name}</span>
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center text-[var(--primary-green)] font-semibold hover:text-[var(--primary-green-dark)] transition-colors group"
            >
              Read More Reviews
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[var(--primary-orange)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block glass text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Location</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Visit Us Today
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ), title: 'Address', content: [businessInfo.address, `${businessInfo.city}, ${businessInfo.state} ${businessInfo.zip}`] },
                  { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), title: 'Hours', content: [businessInfo.hours] },
                  { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ), title: 'Phone', content: [businessInfo.phone], isLink: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <div className="bg-white/10 rounded-full p-3">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      {item.content.map((line, j) => (
                        item.isLink ? (
                          <a key={j} href={`tel:${line.replace(/[^0-9]/g, '')}`} className="text-white/80 hover:text-[var(--primary-orange)] transition-colors block">
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-white/80">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
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
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-dark)] hover:from-[var(--primary-orange-dark)] hover:to-[var(--primary-orange)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Order Online
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="liquid-glass rounded-2xl overflow-hidden p-2">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-74.5!3d39.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMwJzAwLjAiTiA3NMKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Po-Kay Bowls Location"
                    className="w-full rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/miu-sua-pO9851jklaE-unsplash.jpg"
            alt="Poke bowl"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/30 to-[var(--primary-orange)]/30"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="liquid-glass-dark rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Try the Best Poke in South Jersey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Order online for pickup or delivery, or visit us in Galloway today!
            </p>
            <a
              href={businessInfo.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-dark)] hover:from-[var(--primary-orange-light)] hover:to-[var(--primary-orange)] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 pulse-glow"
            >
              Order Now
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
