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



if (!isDesktop) {
  // 📱 Mobile: diseño con grid 2 columnas después de name y email
  return (
    <section
      className="px-4 md:px-6 pt-18 md:pt-0 h-screen md:flex md:items-center md:justify-center"
    >
      <div className="w-full max-w-6xl overflow-y-auto md:overflow-visible md:h-auto h-full">
        <h1 className="text-center font-bold text-xl mb-3">Contact Us</h1>
        <div className="grid gap-2">
          {/* Full Name */}
          <label className="flex text-md font-medium pb-2 mx-5">
            <span className="whitespace-nowrap mt-1 pr-4 text-md font-bold">Full Name</span>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full border px-3 h-6 rounded"
            />
          </label>

          {/* Email */}
          <label className="flex text-md font-medium mx-5">
            <span className="whitespace-nowrap mt-1 pr-[14px] text-md font-bold">Your Email</span>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full border px-3 py-1 h-6 rounded"
            />
          </label>

          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-2 gap-4 ml-5">
            {/* Columna izquierda: Interests */}
            <div>
              <h2 className="text-md font-bold mb-2">I'm interested in:</h2>
              <div className="flex flex-col gap-3">
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

            {/* Columna derecha: Message + Botón + Info + Mapa */}
            <div className="flex flex-col gap-2">
              {/* Message */}
              <label className="flex flex-col text-md font-medium pr-8">
                <span className="whitespace-nowrap font-bold">Your Message</span>
                <textarea
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full border h-30 px-5 mt-1 rounded border-green-600"
                />
              </label>

              {/* Botón */}
              <button
                type="submit"
                className="bg-green-600 text-white px-2 py-1 rounded text-xs self-start"
              >
                Submit
              </button>

              {/* Info Empresa */}
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

              {/* Google Maps */}
              <div className="border-3 border-black rounded mr-6 h-30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
                  width="100%"
                  height="auto"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-28"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
              <h2 className="text-center font-bold mt-3">Lynx3PL, Inc. </h2>

      </div>
    </section>
  );
}


  // 💻 Desktop: diseño en 3 columnas
  return (
    <section className="px-90 pt-0 h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-4">
        {/* Columna izquierda (2 columnas) */}
        <div className="col-span-1 space-y-4">
          <h1 className="font-bold text-3xl">Contact Us</h1>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40 mt-1">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder=""
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
              placeholder=""
              value={formValues.email}
              onChange={handleChange}
              className="w-full border px-3 h-8 rounded"
            />
          </label>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40">Your Message</span>
            <textarea
              name="message"
              rows={10}
              value={formValues.message}
              onChange={handleChange}
              className="w-full border px-3 h-50 rounded border-green-600"
            />
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white px-2 py-1 rounded text-xs ml-58"
          >
            Submit
          </button>

          {/* Contact Info + Mapa */}
          <div className="flex gap-6">
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
                className="border border-solid border-black rounded w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col items-end">
          <h2 className="text-xl font-bold mb-2 mr-6 ">I'm interested in:</h2>
          <div className="flex flex-col gap-1">
            {interests.map((interest, idx) => (
              <label
                key={idx}
                className="text-md font-semibold flex items-center gap-1"
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
