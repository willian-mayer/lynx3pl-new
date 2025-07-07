import data from "../data/warehousing.json";

export default function Warehousing() {
  const { title, items } = data[0];

  return (
    <section className="bg-white h-screen px-4 md:px-6 py-6 flex items-center justify-center">
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col justify-center mb-12 pt-2">
        {/* Título */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-end px-2 md:px-0 mb-6 py-2">
          {title}
        </h2>

        {/* Imagen: altura reducida para dar espacio al listado */}
        <div className="w-full h-32 md:h-40 lg:h-44 overflow-hidden shadow-md rounded-md mb-6">
          <img
            src="/warehousing/image.jpg"
            alt="Warehousing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lista de ítems: sin scroll, que muestre todo */}
        <div className="flex-1">
          <div className="flex flex-col justify-start space-y-3 px-2 md:px-0 py-2">
            {items.map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black">
                  • {item.title}:{" "}
                  <span className="text-gray-900 font-normal text-base md:text-lg leading-snug">
                    {item.desc}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
