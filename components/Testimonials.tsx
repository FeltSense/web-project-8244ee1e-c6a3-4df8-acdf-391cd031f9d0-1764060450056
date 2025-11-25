export default function Testimonials() {
  const testimonials = [
    { name: 'John D.', text: 'Excellent service! Highly recommended.', role: 'CEO' },
    { name: 'Sarah M.', text: 'Professional and reliable. Great experience.', role: 'Designer' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}