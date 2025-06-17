import services from "../data/services.json";

export default function Services() {
  return (
    <div className="snap-start flex items-center justify-center px-4 md:px-8 xl:px-20 h-full">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 text-center">

        {/* Imagen hero */}
        <div className="w-full h-[60vh] overflow-hidden rounded-lg shadow-md">
          <img
            src="/services/services.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Letras */}
        <div
          className="bg-white w-full flex flex-wrap justify-center items-center gap-4 py-4 px-4 z-10 relative rounded-lg"
        >
          {services.map((service, index) => (
            <a
              key={index}
              href={service.route}
              className="text-base md:text-lg lg:text-xl font-medium text-gray-800 transition-transform duration-300 hover:scale-125 hover:text-blue-600"
            >
              {service.title}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
