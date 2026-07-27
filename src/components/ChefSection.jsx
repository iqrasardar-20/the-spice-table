import chef1 from "../assets/images/chef1.jpg";
import chef2 from "../assets/images/chef2.jpg";
import chef3 from "../assets/images/chef3.jpg";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const chefs = [
  {
    image: chef1,
    name: "Marco Rossi",
    role: "Executive Chef",
    experience: "18 Years Experience",
    speciality: "Italian & Mediterranean Cuisine",
  },
  {
    image: chef2,
    name: "Sophia Bennett",
    role: "Pastry Chef",
    experience: "12 Years Experience",
    speciality: "Desserts & Artisan Bakery",
  },
  {
    image: chef3,
    name: "David Chen",
    role: "Sous Chef",
    experience: "10 Years Experience",
    speciality: "Asian Fusion & Seafood",
  },
];

function ChefSection() {
  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 mb-3">
            Meet Our Team
          </p>

          <h2 className="text-5xl font-bold text-white">
            Our Professional Chefs
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Passionate chefs dedicated to creating extraordinary dining
            experiences with creativity, precision and the finest ingredients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {chefs.map((chef, index) => (

            <div
              key={index}
              className="bg-[#1A1A1A] rounded-3xl overflow-hidden group shadow-lg hover:shadow-yellow-500/20 transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-[420px] object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-8 text-center">

                <h3 className="text-3xl font-bold text-white">
                  {chef.name}
                </h3>

                <p className="text-yellow-500 mt-2 font-medium">
                  {chef.role}
                </p>

                <p className="text-gray-400 mt-3">
                  {chef.experience}
                </p>

                <p className="text-gray-500 mt-3 leading-7">
                  {chef.speciality}
                </p>

                {/* Social Icons */}

                <div className="flex justify-center gap-4 mt-8">

                  <button className="w-11 h-11 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-white duration-300">
                    <FaFacebookF />
                  </button>

                  <button className="w-11 h-11 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-white duration-300">
                    <FaInstagram />
                  </button>

                  <button className="w-11 h-11 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-white duration-300">
                    <FaLinkedinIn />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ChefSection;