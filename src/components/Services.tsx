import services from "../data/services.json";

export default function Services() {
  return (
    <section className="h-screen flex flex-col md:block">
      {/* Imagen superior */}
      <div className="h-[75vh] md:h-[80%] w-full overflow-hidden">
        <img
          src="/services/services.jpg"
          alt="Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto inferior */}
      <div
        className="bg-white text-black flex flex-col sm:items-center sm:justify-center
                   md:flex-row md:justify-evenly md:items-center
                   h-[25vh] md:h-[20%] p-4 md:px-24 md:py-6 gap-4"
      >
        {services.map((service, index) => (
          <a
            key={index}
            href={service.route}
            className="text-2xl sm:text-3xl md:text-4xl font-bold hover:text-blue-600 transition-all text-center"
          >
            {service.title}
          </a>
        ))}
      </div>
    </section>
  );
}
