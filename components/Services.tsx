export default function Services() {
  const services = [
    { title: 'Service One', description: 'Description of your first service offering.' },
    { title: 'Service Two', description: 'Description of your second service offering.' },
    { title: 'Service Three', description: 'Description of your third service offering.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}