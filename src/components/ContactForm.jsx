import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import contactImage from "../assets/images/hero-bg1.webp";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.update(loadingToast, {
        render: "Message sent successfully! We’ll be in touch.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      formRef.current.reset();
    } catch {
      toast.update(loadingToast, {
        render: "Failed to send message. Please try again.",
        type: "error",
        isLoading: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="w-11/12 mx-auto md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 h-screen items-center">

        {/* Image */}
        <div>
          <img
            src={contactImage}
            alt="Contact Peacemaker Hotels booking and customer support"
            loading="lazy"
            decoding="async"
            className="w-full object-cover rounded-lg md:h-screen shadow-lg"
          />
        </div>

        {/* Form */}
        <div className={`bg-white p-8 md:py-14 md:px-12 rounded-lg shadow-lg ${shake ? "animate-shake" : ""}`}>
          <h2 className="text-3xl font-bold text-blue-700 mb-5">
            Get in Touch
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex="-1" />

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full border rounded-md px-4 py-3 mb-3 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`w-full border rounded-md px-4 py-3 mb-3 ${
                    errors.email ? "border-red-500" : ""
                  }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                className="w-full border rounded-md px-4 py-3 mb-3"
              />
          
            </div>
            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className={`w-full border rounded-md px-4 py-3 mb-3 resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-3 rounded-md text-white font-semibold transition-all duration-300
                ${
                  !isFormValid || loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-95"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
