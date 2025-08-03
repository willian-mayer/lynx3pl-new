import { useState } from "react";
import formData from "../data/form.json";

export default function Form() {
  const { contactInfo, interests } = formData;

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

  return (
    <section
      className="
        px-4 md:px-6 
        pt-24 md:pt-0 
        h-screen 
        md:flex md:items-center md:justify-center
      "
    >
      <div className="w-full max-w-6xl overflow-y-auto md:overflow-visible md:h-auto h-full">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Columna 1 y 2 combinadas → Formulario */}
          <form onSubmit={handleSubmit} className="grid col-span-2 gap-6">
            {/* Name */}
            <h1 className="font-bold text-4xl">Contact Us</h1>
            {/* Full Name */}
            {/* Full Name */}
<label className="flex flex-col md:flex-row md:items-start md:gap-4 text-md font-medium">
  <span className="whitespace-nowrap w-full md:w-40 mt-2 md:mt-0">Full Name</span>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    value={formValues.name}
    onChange={handleChange}
    className="w-full border px-3 py-2 mt-1 md:mt-0 rounded"
  />
</label>

{/* Email */}
<label className="flex flex-col md:flex-row md:items-start md:gap-4 text-md font-medium">
  <span className="whitespace-nowrap w-full md:w-40 mt-2 md:mt-0">Email</span>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    value={formValues.email}
    onChange={handleChange}
    className="w-full border px-3 py-2 mt-1 md:mt-0 rounded"
  />
</label>

{/* I'm interested in */}
<div>
  <h2 className="text-lg font-bold mb-2">I'm interested in</h2>
  <div className="grid grid-cols-2 gap-3">
    {interests.map((interest, idx) => (
      <label
        key={idx}
        className="text-md font-semibold flex items-center gap-2"
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

{/* Message */}
<label className="flex flex-col md:flex-row md:items-start md:gap-4 text-md font-medium">
  <span className="whitespace-nowrap w-full md:w-40 mt-2 md:mt-0">Your Message</span>
  <textarea
    name="message"
    rows={4}
    value={formValues.message}
    onChange={handleChange}
    className="w-full border px-3 py-2 mt-1 md:mt-0 rounded"
  />
</label>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Columna 3 → Contact Info + Mapa */}
          <div className="flex flex-col gap-6 justify-end">
            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((line, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-2xl font-extrabold text-black" // Primer item
                      : "text-lg font-normal text-black" // Resto
                  }
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Mapa */}
            <div className="pb-10 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
                width="100%"
                height="200"
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
