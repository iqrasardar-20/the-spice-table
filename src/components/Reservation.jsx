import reservationBg from "../assets/images/restaurant.jpg";

export default function Reservation() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{ backgroundImage: `url(${reservationBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Reserve Your Table
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Experience Fine Dining
          <br />
          Like Never Before
        </h2>

        <p className="text-gray-300 mt-8 text-lg leading-8">
          Book your table today and enjoy a luxurious dining experience
          with handcrafted dishes, elegant ambience, and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 hover:scale-105">
            Book a Table
          </button>

          <button className="border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-semibold px-10 py-4 rounded-full transition duration-300 hover:scale-105">
            Call Now
          </button>

        </div>

      </div>
    </section>
  );
}
