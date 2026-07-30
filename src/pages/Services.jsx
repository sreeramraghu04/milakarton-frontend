import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    {
      title: "Living Room Concepts",
      desc: "Elegant and modern living environments designed for comfort and luxury.",
    },
    {
      title: "Kitchen Interior Design",
      desc: "Modular kitchens with smart layouts and premium finishes.",
    },
    {
      title: "Bedroom & Private Suites",
      desc: "Relaxing interiors with ambient lighting and calm aesthetics.",
    },
    {
      title: "Material Selection",
      desc: "Premium textures, finishes, and curated material palettes.",
    },
    {
      title: "Lighting Design",
      desc: "Modern lighting concepts to elevate luxury interiors.",
    },
    {
      title: "3D Interior Visualization",
      desc: "High-quality 3D interior concepts for realistic presentations.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Interior Design Services | Sevenplus Consultancy</title>
        <meta
          name="description"
          content="Explore our interior design services including living rooms, kitchens, bedrooms, lighting, and 3D visualization."
        />
        <link rel="canonical" href="https://sevenplusconsultancy.in/services" />
      </Helmet>

      <div className="bg-[#0c0c0c] text-white min-h-screen pt-28 md:pt-30 pb-20 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
          <p className="uppercase tracking-[6px] text-amber-400 mb-4">
            Our Services
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Luxury Interior Design Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-8">
            We create premium interior concepts with modern functionality, and
            timeless luxury.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {" "}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition duration-500 hover:-translate-y-2 hover:border-amber-400"
            >
              <h2 className="text-2xl font-semibold mb-4 text-amber-400">
                {service.title}
              </h2>
              <p className="text-gray-300 leading-7">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
