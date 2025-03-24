import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/6302287735" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:aashishaik526@gmail.com" // Replace with your email
        className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaEnvelope size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:+916302287735" // Replace with your phone number
        className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
