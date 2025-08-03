import data from "../data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:py-16 md:h-screen flex flex-col ">
      {/* Top Section - Title */}
      <div className="flex-1 flex items-end justify-center md:justify-start mx-24">
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          Starting a new project or looking for a new partner? Let’s talk &gt;{" "}
          <span className="underline">info@lynx3pl.com</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-white my-6 "></div>

      {/* Bottom Section - Footer Links */}
      <div className="basis-1/4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          {data.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2">
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
