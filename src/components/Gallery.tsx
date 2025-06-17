import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { desc, images } = galleryData[0];

  return (
    <section className="bg-white min-h-screen px-4 py-8 lg:py-0">
      <div className="max-w-7xl mx-auto h-full">
        {/* Pantallas grandes (lg en adelante): Grid 3x3 ajustado */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-4 h-full px-20 py-4">
          {/* Imágenes 1, 2, 3 en columna 1 */}
          <img
            src={images[0].imgUrl}
            alt="Gallery 1"
            className="w-full h-full max-h-[180px] object-cover rounded-xl row-start-1 col-start-1"
          />
          <img
            src={images[1].imgUrl}
            alt="Gallery 2"
            className="w-full h-full max-h-[180px] object-cover rounded-xl row-start-2 col-start-1"
          />
          <img
            src={images[2].imgUrl}
            alt="Gallery 3"
            className="w-full h-full max-h-[180px] object-cover rounded-xl row-start-3 col-start-1"
          />

          {/* Imágenes 4 y 5 en columnas 2 y 3, filas 1-2 */}
          <img
            src={images[3].imgUrl}
            alt="Gallery 4"
            className="w-full h-full max-h-[376px] object-cover rounded-xl row-span-2 col-start-2"
          />
          <img
            src={images[4].imgUrl}
            alt="Gallery 5"
            className="w-full h-full max-h-[376px] object-cover rounded-xl row-span-2 col-start-3"
          />

          {/* Texto en fila 3, columnas 2 y 3 */}
          <div className="row-start-3 col-start-2 col-span-2 flex items-center justify-center p-4 bg-gray-100 rounded-xl text-center max-h-[140px] overflow-hidden">
            <p className="text-sm font-medium text-gray-800 leading-tight">
              {desc}
            </p>
          </div>
        </div>

        {/* Pantallas pequeñas (hasta md): Stack vertical */}
{/* Pantallas pequeñas (hasta md): Stack vertical con scroll interno */}
<div className="lg:hidden h-screen overflow-y-auto snap-none px-4 py-8 flex flex-col gap-4 items-center hide-scrollbar">
  {images.map((img, index) => (
    <img
      key={index}
      src={img.imgUrl}
      alt={`Gallery ${index + 1}`}
      className="w-full max-w-md object-cover rounded-xl"
    />
  ))}
  <p className="text-center text-base font-medium text-gray-800 mt-4 px-2">{desc}</p>
</div>

      </div>
    </section>
  );
}
