import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import formData from "../data/form.json";

export default function Form() {
  const { contactInfo, interests } = formData;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    interests: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((i) => i !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  if (!isDesktop) {
    // 📱 Mobile: diseño original intacto
    return (
      <section
        className="
          px-4 md:px-6 
          pt-18 md:pt-0 
          h-screen 
          md:flex md:items-center md:justify-center
        "
      >
        <div className="w-full max-w-6xl overflow-y-auto md:overflow-visible md:h-auto h-full">
          <div className="grid md:grid-cols-3">
            {/* Formulario completo */}
            <form onSubmit={handleSubmit} className="grid col-span-2 gap-1">
              <h1 className="font-bold text-lg text-center">Contact Us</h1>

              <label className="flex md:flex-row md:items-start md:gap-4 text-md font-medium pb-2">
                <span className="whitespace-nowrap md:w-40 mt-1 pr-2">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full border px-3 h-8 rounded"
                />
              </label>

              <label className="flex md:flex-row md:items-start md:gap-4 text-md font-medium">
                <span className="whitespace-nowrap md:w-40 mt-1 pr-1">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-1 h-8 rounded"
                />
              </label>

              {/* Interests */}
              <div>
                <h2 className="text-md font-medium mb-2">I'm interested in</h2>
                <div className="grid grid-cols-2 gap-1">
                  {interests.map((interest, idx) => (
                    <label
                      key={idx}
                      className="text-xs font-semibold flex items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        value={interest}
                        checked={formValues.interests.includes(interest)}
                        onChange={handleCheckboxChange}
                        className="accent-green-600"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex md:flex-row md:items-start md:gap-4 text-md font-medium mt-2">
                <span className="whitespace-nowrap w-full md:w-40">
                  Your Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full border px-3 mt-1 rounded border-green-600"
                />
              </label>

              <div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-2 py-1 my-1 ml-42 rounded text-xs"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Contact Info + Mapa */}
            <div className="flex justify-end">
              <div>
                {contactInfo.map((line, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-sm font-extrabold text-black"
                        : "text-xs font-normal text-black"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="border border-black ml-6 mb-6 w-47">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
                  width="100%"
                  height="auto"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border border-black rounded w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 💻 Desktop: diseño en 3 columnas
  return (
    <section className="px-6 pt-0 h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-4">
        {/* Columna izquierda (2 columnas) */}
        <div className="col-span-1 space-y-4">
          <h1 className="font-bold text-lg">Contact Us</h1>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40 mt-1">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full border px-3 h-8 rounded"
            />
          </label>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40 mt-1">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full border px-3 h-8 rounded"
            />
          </label>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40">Your Message</span>
            <textarea
              name="message"
              rows={4}
              value={formValues.message}
              onChange={handleChange}
              className="w-full border px-3 rounded border-green-600"
            />
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white px-2 py-1 rounded text-xs"
          >
            Submit
          </button>

          {/* Contact Info + Mapa */}
          <div className="flex gap-6 mt-6">
            <div>
              {contactInfo.map((line, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-sm font-extrabold text-black"
                      : "text-xs font-normal text-black"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="border border-black w-47">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border border-black rounded w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div>
          <h2 className="text-md font-medium mb-2">I'm interested in</h2>
          <div className="flex flex-col gap-1">
            {interests.map((interest, idx) => (
              <label
                key={idx}
                className="text-xs font-semibold flex items-center gap-1"
              >
                <input
                  type="checkbox"
                  value={interest}
                  checked={formValues.interests.includes(interest)}
                  onChange={handleCheckboxChange}
                  className="accent-green-600"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
