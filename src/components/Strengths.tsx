import strengthsData from "../data/strengths.json";
 
export default function Strengths() {
  const { title, description } = strengthsData[0];

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Imagen izquierda */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <img
          src="/logo-black.png"
          alt="Strengths Logo"
          className="max-w-[300px] w-full h-auto object-contain"
        />
      </div>

      {/* Texto derecha */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-12 md:py-0">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
