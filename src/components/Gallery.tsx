import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { desc, images } = galleryData[0];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl h-full flex flex-col justify-center">
        {/* Pantallas grandes: grid 3x3 */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-4 h-full px-6">
          {/* Columna 1: imágenes 1, 2, 3 */}
          <img
            src={images[0].imgUrl}
            alt="Gallery 1"
            className="w-full h-full object-fill rounded-xl row-start-1 col-start-1 max-h-[180px]"
          />
          <img
            src={images[1].imgUrl}
            alt="Gallery 2"
            className="w-full h-full object-fill rounded-xl row-start-2 col-start-1 max-h-[180px]"
          />
          <img
            src={images[2].imgUrl}
            alt="Gallery 3"
            className="w-full h-full object-fill rounded-xl row-start-3 col-start-1 max-h-[180px]"
          />

          {/* Columna 2-3: imágenes grandes */}
          <img
            src={images[3].imgUrl}
            alt="Gallery 4"
            className="w-full h-full object-fill rounded-xl row-span-2 col-start-2 max-h-[376px]"
          />
          <img
            src={images[4].imgUrl}
            alt="Gallery 5"
            className="w-full h-full object-fill rounded-xl row-span-2 col-start-3 max-h-[376px]"
          />

          {/* Texto final */}
          <div className="row-start-3 col-start-2 col-span-2 flex items-center justify-center p-4 bg-gray-800 rounded-xl text-center overflow-hidden">
            <p className="text-sm md:text-base font-medium text-white leading-tight">
              {desc}
            </p>
          </div>
        </div>

        {/* Pantallas pequeñas: stack vertical */}
        <div className="lg:hidden h-full overflow-y-auto flex flex-col items-center gap-4 px-4 py-6 hide-scrollbar">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.imgUrl}
              alt={`Gallery ${index + 1}`}
              className="w-full max-w-md object-fill rounded-xl"
            />
          ))}
          <p className="text-center text-base font-medium text-gray-800 mt-4 px-2">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
