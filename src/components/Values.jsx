import { FaBriefcase, FaCheckCircle, FaUserCircle, FaClock, FaStar, FaEye } from "react-icons/fa";

const coreValues = [
  {
    icon: <FaBriefcase size={32} className="text-blue-700" />,
    title: "Professionalism",
    description: "Delivering expert and reliable service at every step.",
  },
  {
    icon: <FaCheckCircle size={32} className="text-blue-700" />,
    title: "Reliability",
    description: "Ensuring smooth, stress-free travel for every client.",
  },
  {
    icon: <FaUserCircle size={32} className="text-blue-700" />,
    title: "Personalized Service",
    description: "Tailored travel solutions for each client’s needs.",
  },
  {
    icon: <FaClock size={32} className="text-blue-700" />,
    title: "Convenience",
    description: "Simplifying travel with end-to-end support.",
  },
  {
    icon: <FaStar size={32} className="text-blue-700" />,
    title: "Excellence",
    description: "Combining local expertise with global standards.",
  },
  {
    icon: <FaEye size={32} className="text-blue-700" />,
    title: "Transparency",
    description: "Clear pricing, verified partners, and honest communication.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Our Core Values</h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            What drives Pacemaker Concierge Service and sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
