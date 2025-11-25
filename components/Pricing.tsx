export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Pre-Order Now</h2>
        <p className="text-gray-600 mb-8">Get early access to our premium services</p>
        <div className="p-8 bg-gray-900 text-white rounded-2xl">
          <div className="text-5xl font-bold mb-4">$29</div>
          <p className="text-gray-300 mb-6">One-time pre-order price</p>
          <a href="https://buy.stripe.com/test_xxx" target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Pre-Order Now
          </a>
        </div>
      </div>
    </section>
  );
}