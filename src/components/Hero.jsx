import { motion } from "framer-motion";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden scroll-mt-24"
      style={{ backgroundImage: `url(${hero})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">


        {/* Welcome */}

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[8px] text-yellow-500 text-sm md:text-base mb-4"
        >
          Welcome To
        </motion.p>



        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Experience
          <br />
          Fine Dining
        </motion.h1>



        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl text-gray-300 text-lg md:text-xl mt-8 leading-9"
        >
          Discover unforgettable flavors crafted by world-class chefs in a
          luxurious atmosphere where every meal becomes a memorable experience.
        </motion.p>





        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12"
        >


          {/* View Menu */}

          <a
            href="#menu"
            className="
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            px-10
            py-4
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
            shadow-yellow-500/30
            "
          >
            View Menu
          </a>



          {/* Reserve Now */}

          <a
            href="#reservation"
            className="
            border-2
            border-yellow-500
            text-white
            hover:bg-yellow-500
            hover:text-black
            font-semibold
            px-10
            py-4
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            "
          >
            Reserve Now
          </a>


        </motion.div>





        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12"
        >

          <div>
            <h2 className="text-yellow-500 text-4xl font-bold">
              15+
            </h2>

            <p className="text-gray-300 mt-2">
              Years Experience
            </p>
          </div>



          <div>
            <h2 className="text-yellow-500 text-4xl font-bold">
              50K+
            </h2>

            <p className="text-gray-300 mt-2">
              Happy Customers
            </p>
          </div>



          <div>
            <h2 className="text-yellow-500 text-4xl font-bold">
              120+
            </h2>

            <p className="text-gray-300 mt-2">
              Premium Dishes
            </p>
          </div>


        </motion.div>






        {/* Scroll Down Button */}

        <a
          href="#menu"
          className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        >

          <p className="text-gray-300 text-sm mb-2 tracking-wider">
            Scroll Down
          </p>


          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">

            <div className="w-1.5 h-3 bg-yellow-500 rounded-full mt-2 animate-bounce"></div>

          </div>


        </a>


      </div>


    </section>
  );
}

export default Hero;