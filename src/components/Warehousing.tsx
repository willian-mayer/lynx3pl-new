import data from "../data/warehousing.json";

export default function Warehousing() {
  const { title, items } = data[0];

  return (
    <section className="bg-white min-h-screen px-4 md:px-6 py-4">
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-end px-2 md:px-0 mb-0 py-2">
          {title}
        </h2>

        {/* Imagen */}
        <div className="w-full h-44 md:h-52 lg:h-60 overflow-hidden shadow-md rounded-md mt-1 mb-0">
          <img
            src="/warehousing/image.jpg"
            alt="Warehousing"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Lista de ítems que ocupa el espacio restante */}
        <div className="flex-1 mt-1 overflow-hidden">
          <div className="h-full flex flex-col justify-start space-y-2 px-2 md:px-0 py-2">
            {items.map((item, index) => (
              <div key={index} className="text-center md:text-left">

                <h3 className="text-base md:text-md font-semibold text-black">
                  • {item.title}: {" "}
                  <span className="text-gray-700 font-normal text-md leading-snug">
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
