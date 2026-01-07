import { Metadata } from 'next';
import Link from 'next/link';
import { businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us | Po-Kay Bowls - Fresh Poke Bowls in Galloway, NJ',
  description: 'Learn about Po-Kay Bowls, bringing fresh Hawaiian-inspired poke bowls to South Jersey with quality ingredients and bold flavors.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
            About Po-Kay Bowls
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Bringing the vibrant flavors of Hawaiian-inspired poke to South Jersey since day one.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-6">
                Fresh, Flavorful & Made with Aloha
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Po-Kay Bowls was created with one goal: to serve fresh, flavorful poke bowls that bring people together. Inspired by Hawaiian flavors and crafted with a local touch, our menu offers something for everyone.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-6">
                We believe great food starts with quality ingredients, thoughtful preparation, and a welcoming environment. From classic poke bowls to creative house specialties, every bowl is made with care.
              </p>
              <p className="text-lg text-[var(--text-light)]">
                Whether you&apos;re a poke enthusiast or trying it for the first time, we&apos;re here to make your experience memorable. Welcome to Po-Kay Bowls - your neighborhood spot for the freshest poke in South Jersey.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--accent-mint)] to-[var(--accent-cream)] rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-8xl mb-6">🌺</div>
                  <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Promise</h3>
                  <p className="text-[var(--text-light)]">
                    Every bowl is handcrafted with the freshest ingredients, bold flavors, and genuine aloha spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--accent-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--accent-mint)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🐟</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Fresh Daily</h3>
              <p className="text-[var(--text-light)]">
                We source the freshest fish and ingredients every day to ensure quality in every bowl.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--accent-mint)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Fully Customizable</h3>
              <p className="text-[var(--text-light)]">
                Build your perfect bowl with our wide selection of bases, proteins, toppings, and sauces.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--accent-mint)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🥗</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Healthy Options</h3>
              <p className="text-[var(--text-light)]">
                Great vegetarian-friendly options and nutritious ingredients for health-conscious diners.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--accent-mint)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Fast & Friendly</h3>
              <p className="text-[var(--text-light)]">
                Quick service without sacrificing quality, served with a smile by our welcoming team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly Serving Galloway & South Jersey
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Located at 68 West Jimmie Leeds Road, we&apos;re your local destination for fresh, delicious poke bowls. Stop by and experience the taste of Hawaii right here in New Jersey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Get Directions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--accent-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Ready to Try Our Poke Bowls?
          </h2>
          <p className="text-lg text-[var(--text-light)] mb-8">
            Check out our full menu and find your new favorite bowl!
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Our Menu
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
