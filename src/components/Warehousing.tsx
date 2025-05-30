import data from "../data/warehousing.json";

export default function Warehousing() {
  const { title, items } = data[0];

  return (
    <section className="bg-white px-4 md:px-16 py-8 flex flex-col lg:h-screen">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        {title}
      </h2>

      {/* Imagen */}
      <div className="w-full mb-6 lg:mb-0 lg:h-[40%] overflow-hidden rounded-xl shadow-md">
        <img
          src="/warehousing/image.jpg"
          alt="Warehousing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lista de ítems */}
      <div className="w-full mx-auto space-y-6 mt-6 overflow-y-auto px-2 lg:h-[60%]">
        {items.map((item, index) => (
          <div key={index} className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
