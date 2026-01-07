import { Metadata } from 'next';
import { signatureBowls, buildYourOwn, sideOrders, beverages, businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Menu | Po-Kay Bowls - Fresh Poke Bowls in Galloway, NJ',
  description: 'Explore our full menu of handcrafted poke bowls, crispy sides, and refreshing beverages. Every item is made fresh with bold island-inspired flavors.',
};

export default function MenuPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Our Menu</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
            Fresh Poke Bowls & More
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Explore our full menu of handcrafted poke bowls, crispy sides, and refreshing beverages. Every item is made fresh and packed with bold island-inspired flavors.
          </p>
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
        </div>
      </section>

      {/* Signature Bowls Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Handcrafted</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              Signature Bowls
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Our chef-crafted signature bowls feature the perfect combination of fresh ingredients and bold flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureBowls.map((bowl, index) => (
              <div
                key={bowl.name}
                className="bg-[var(--accent-cream)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-40 ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-[var(--primary-orange)] to-[var(--primary-orange-dark)]' :
                  index % 6 === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' :
                  index % 6 === 2 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                  index % 6 === 3 ? 'bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)]' :
                  index % 6 === 4 ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                  'bg-gradient-to-br from-blue-400 to-blue-500'
                } flex items-center justify-center relative`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {index % 6 === 0 ? '🍣' :
                     index % 6 === 1 ? '🌋' :
                     index % 6 === 2 ? '🍍' :
                     index % 6 === 3 ? '🥥' :
                     index % 6 === 4 ? '🐟' :
                     '🥢'}
                  </span>
                  {bowl.featured && (
                    <span className="absolute top-3 right-3 bg-white text-[var(--primary-orange)] text-xs font-bold px-3 py-1 rounded-full shadow">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[var(--text-dark)]">{bowl.name}</h3>
                    <span className="text-[var(--primary-orange)] font-bold text-lg">${bowl.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-[var(--text-light)]">{bowl.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--accent-mint)] to-[var(--accent-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Customize</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-6">
                Build Your Own Bowl
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                {buildYourOwn.description} Create your perfect poke bowl with our fresh bases, premium proteins, crisp toppings, and signature sauces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                  <p className="text-[var(--text-muted)] text-sm mb-1">Small Bowl</p>
                  <p className="text-3xl font-bold text-[var(--primary-green)]">${buildYourOwn.small.price.toFixed(2)}</p>
                  <p className="text-[var(--text-light)]">{buildYourOwn.small.size}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                  <p className="text-[var(--text-muted)] text-sm mb-1">Large Bowl</p>
                  <p className="text-3xl font-bold text-[var(--primary-green)]">${buildYourOwn.large.price.toFixed(2)}</p>
                  <p className="text-[var(--text-light)]">{buildYourOwn.large.size}</p>
                </div>
              </div>
              <a
                href={businessInfo.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Building
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">What&apos;s Included</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[var(--accent-mint)] rounded-full p-3">
                      <span className="text-2xl">🍚</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Choose Your Base</p>
                      <p className="text-sm text-[var(--text-light)]">White rice, brown rice, salad, or mixed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[var(--accent-mint)] rounded-full p-3">
                      <span className="text-2xl">🐟</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Pick Your Protein</p>
                      <p className="text-sm text-[var(--text-light)]">Tuna, salmon, shrimp, chicken & more</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[var(--accent-mint)] rounded-full p-3">
                      <span className="text-2xl">🥬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Add Your Toppings</p>
                      <p className="text-sm text-[var(--text-light)]">Fresh vegetables, fruits & crunchies</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[var(--accent-mint)] rounded-full p-3">
                      <span className="text-2xl">🥢</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Finish with Sauce</p>
                      <p className="text-sm text-[var(--text-light)]">Signature sauces & spicy options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Orders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Extras</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              Side Orders
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Complete your meal with our delicious sides and appetizers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sideOrders.map((side) => (
              <div
                key={side.name}
                className="bg-[var(--accent-cream)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[var(--text-dark)] flex-1">{side.name}</h3>
                  <span className="text-[var(--primary-orange)] font-bold ml-2">${side.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-20 bg-[var(--accent-mint)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Drinks</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-4">
              Beverages
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Refresh yourself with our selection of beverages, from fresh juices to smoothies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beverages.map((beverage) => (
              <div
                key={beverage.name}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-dark)]">{beverage.name}</h3>
                  <span className="text-[var(--primary-orange)] font-bold">${beverage.price.toFixed(2)}</span>
                </div>
                {beverage.description && (
                  <p className="text-sm text-[var(--text-light)]">{beverage.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Skip the line and order online for quick pickup or delivery!
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
