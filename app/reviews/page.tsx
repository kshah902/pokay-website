import { Metadata } from 'next';
import { reviews, businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Reviews | Po-Kay Bowls - Fresh Poke Bowls in Galloway, NJ',
  description: 'See what our customers are saying about Po-Kay Bowls. 4.9 star rating with 368+ Google reviews. The best poke bowls in South Jersey!',
};

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
            What Our Customers Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl font-bold text-[var(--primary-orange)]">{businessInfo.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-xl text-white/80">
            {businessInfo.reviewCount}+ Reviews on Google
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[var(--accent-mint)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[var(--primary-green)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-dark)]">{review.name}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--text-dark)] italic">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-20 bg-[var(--accent-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider">Share Your Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mt-2 mb-6">
            Enjoyed Your Visit?
          </h2>
          <p className="text-lg text-[var(--text-light)] mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Leave us a review on Google and let others know about your Po-Kay Bowls experience.
          </p>
          <a
            href={businessInfo.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Leave a Review
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-bold text-[var(--primary-orange)] mb-2">{businessInfo.rating}</p>
              <p className="text-xl text-white/80">Average Rating</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[var(--primary-orange)] mb-2">{businessInfo.reviewCount}+</p>
              <p className="text-xl text-white/80">Happy Customers</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[var(--primary-orange)] mb-2">5</p>
              <p className="text-xl text-white/80">Star Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Ready to Try the Best Poke in South Jersey?
          </h2>
          <p className="text-lg text-[var(--text-light)] mb-8">
            Join our happy customers and experience the freshest poke bowls in Galloway!
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
