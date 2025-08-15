import data from "../data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 md:py-16 md:h-screen flex flex-col justify-end h-full">
      {/* Top Section - Title */}
      <div className="flex-1 flex items-end justify-center md:justify-start mx-4 md:mx-15 mr-44 ml-10 mx-6">
        <h2 className="text-lg md:text-4xl font-semibold leading-snug max-w-4xl mx-auto md:mx-0 text-center text-left">
          Starting a new project or looking for a new partner?{" "}
          <span className="underline text-[#008000]">Let’s talk</span> &gt;{" "}
          <span>info@lynx3pl.com</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-white my-6 w-full md:hidden"></div>

      {/* Bottom Section - Footer Links */}
      <div className="basis-1/4 px-2 md:px-6 md:ml-10 mx-8 md:pt-10">
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 
            text-[0.5em] md:text-sm 
            text-left md:text-left 
            gap-2 md:gap-0
          "
        >
          {data.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm md:text-lg font-bold mb-3">{section.title}</h3>
              <ul className="md:space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
