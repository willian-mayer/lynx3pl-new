import data from "../data/warehousing.json";

export default function Warehousing() {
  const { title, items } = data[0];

  return (
    <section className="bg-white h-screen px-4 md:px-10 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 w-full max-w-7xl h-full">

        {/* Columna central que ocupa 5/7 en lg */}
        <div className="col-span-1 lg:col-span-5 lg:col-start-2 flex flex-col h-full">
          {/* Título */}
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-end md:pr-10 mb-4">
            {title}
          </h2>

          {/* Imagen */}
          <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden shadow-md rounded-md mb-4">
            <img
              src="/warehousing/image.jpg"
              alt="Warehousing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lista de ítems con scroll interno en TODAS las pantallas */}
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 18rem)" }}>
            <div className="space-y-6 pr-2 pb-6">
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
          </div>
        </div>

      </div>
    </section>
  );
}
