import { FaStar } from "react-icons/fa";

import customer1 from "../assets/images/customer1.jpg";
import customer2 from "../assets/images/customer2.jpg";
import customer3 from "../assets/images/customer3.jpg";

const testimonials = [
  {
    image: customer1,
    name: "Emily & Daniel Carter",
    role: "Anniversary Guests",
    review:
      "The atmosphere was incredibly romantic, and every dish was beautifully presented. We couldn't have chosen a better place to celebrate our anniversary.",
  },
  {
    image: customer2,
    name: "The Johnson Family",
    role: "Family Guests",
    review:
      "Everything was amazing! The food was delicious, the staff was incredibly welcoming, and our entire family enjoyed a memorable evening together.",
  },
  {
    image: customer3,
    name: "Michael Thompson",
    role: "Business Client",
    review:
      "We hosted an important business dinner here, and the service was exceptional. The elegant ambience made a lasting impression on our guests.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0F0F0F] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 mb-3">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white">
            What Our Guests Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Our guests are at the heart of everything we do. Here's what they
            have to say about their dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-[#1A1A1A] rounded-3xl p-8 shadow-lg hover:shadow-yellow-500/20 transition duration-500"
            >

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                />

                <div>

                  <h4 className="text-white font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-yellow-500 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;