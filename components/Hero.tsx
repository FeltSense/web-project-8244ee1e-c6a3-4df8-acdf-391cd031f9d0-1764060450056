'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Luxe Estate Properties</h1>
        <p className="text-xl text-gray-300 mb-8">Premium services tailored to your needs</p>
        <a href="#contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</a>
      </div>
    </section>
  );
}