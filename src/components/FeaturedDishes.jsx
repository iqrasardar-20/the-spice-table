import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import steak from "../assets/images/steak.jpg";
import pasta from "../assets/images/pasta.jpg";
import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import dessert from "../assets/images/dessert.jpg";
import drink from "../assets/images/drink.jpg";

const dishes = [
  {
    id: 1,
    name: "Grilled Steak",
    image: steak,
    price: "$32",
    description: "Juicy premium steak served with fresh herbs.",
  },
  {
    id: 2,
    name: "Creamy Pasta",
    image: pasta,
    price: "$24",
    description: "Rich creamy pasta topped with parmesan cheese.",
  },
  {
    id: 3,
    name: "Italian Pizza",
    image: pizza,
    price: "$28",
    description: "Stone baked pizza with fresh mozzarella.",
  },
  {
    id: 4,
    name: "Classic Burger",
    image: burger,
    price: "$20",
    description: "Loaded beef burger with crispy fries.",
  },
  {
    id: 5,
    name: "Chocolate Dessert",
    image: dessert,
    price: "$16",
    description: "Delicious chocolate lava cake with ice cream.",
  },
  {
    id: 6,
    name: "Signature Mocktail",
    image: drink,
    price: "$12",
    description: "Refreshing handcrafted tropical mocktail.",
  },
];

function FeaturedDishes() {
  return (
    <section className="bg-[#111111] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Featured <span className="text-yellow-500">Dishes</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Explore our chef's handpicked signature dishes made with the finest
          ingredients and unforgettable flavors.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {dishes.map((dish, index) => (

            <motion.div

              key={dish.id}

              initial={{ opacity:0, y:60 }}

              whileInView={{ opacity:1, y:0 }}

              transition={{ duration:.6, delay:index*0.15 }}

              viewport={{ once:true }}

              className="bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition duration-500 group"

            >

              {/* Image */}

              <div className="overflow-hidden">

                <img

                  src={dish.image}

                  alt={dish.name}

                  className="w-full h-72 object-cover group-hover:scale-110 duration-700"

                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-semibold text-white">

                    {dish.name}

                  </h3>

                  <span className="text-yellow-500 font-bold text-xl">

                    {dish.price}

                  </span>

                </div>

                <p className="text-gray-400 mt-4 leading-7">

                  {dish.description}

                </p>

                {/* Rating */}

                <div className="flex gap-1 mt-5">

                  {[...Array(5)].map((_, i) => (

                    <FaStar

                      key={i}

                      className="text-yellow-500"

                    />

                  ))}

                </div>

                {/* Button */}

                <button className="mt-7 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-semibold transition duration-300 hover:scale-105">

                  Order Now

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedDishes;