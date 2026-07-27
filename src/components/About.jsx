import chef from "../assets/images/chef.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={chef}
            alt="Chef"
            className="w-full h-[550px] object-cover hover:scale-105 duration-500"
          />
        </div>

        {/* Right Content */}
        <div>

          <p className="text-yellow-500 uppercase tracking-[6px] mb-3">
            About Us
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Luxury Dining
            <br />
            Crafted With Passion
          </h2>

          <p className="text-gray-300 leading-8 text-lg mb-8">
            Welcome to <span className="text-yellow-500 font-semibold">The Spice Table</span>,
            where culinary excellence meets unforgettable experiences.
            Every dish is prepared using premium ingredients by world-class chefs,
            delivering flavors that celebrate tradition with a modern touch.
          </p>

          {/* Features */}

          <div className="grid grid-cols-2 gap-5 mb-10">

            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">✔</span>
              <p>Fresh Ingredients</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">✔</span>
              <p>Master Chefs</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">✔</span>
              <p>Luxury Interior</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">✔</span>
              <p>Premium Service</p>
            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 text-center mb-10">

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                15+
              </h3>
              <p className="text-gray-400 mt-2">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                50K+
              </h3>
              <p className="text-gray-400 mt-2">
                Happy Guests
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                120+
              </h3>
              <p className="text-gray-400 mt-2">
                Dishes
              </p>
            </div>

          </div>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300">
            Discover More
          </button>

        </div>

      </div>
    </section>
  );
}