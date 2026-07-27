import reservationBg from "../assets/images/restaurant.jpg";

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="relative bg-cover bg-center py-32 scroll-mt-24"
      style={{ backgroundImage: `url(${reservationBg})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>


      <div className="relative z-10 max-w-6xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
            Reserve Your Table
          </p>


          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Experience Fine Dining
            <br />
            Like Never Before
          </h2>


          <p className="text-gray-300 mt-6 text-lg leading-8 max-w-3xl mx-auto">
            Book your table today and enjoy a luxurious dining experience
            with handcrafted dishes, elegant ambience, and exceptional service.
          </p>

        </div>



        {/* Booking Form */}

        <div className="bg-[#111111]/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">


          <div className="grid md:grid-cols-2 gap-6">


            <input
              type="text"
              placeholder="Your Name"
              className="bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <input
              type="date"
              className="bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <input
              type="time"
              className="bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <select
              className="bg-black text-gray-300 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            >

              <option>
                Number of Guests
              </option>

              <option>
                1 Person
              </option>

              <option>
                2 People
              </option>

              <option>
                4 People
              </option>

              <option>
                6+ People
              </option>

            </select>


            <input
              type="text"
              placeholder="Special Request"
              className="bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


          </div>



          {/* Confirm Button */}

          <a
            href="#contact"
            className="
            mt-8
            block
            text-center
            w-full
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            py-4
            rounded-full
            transition
            duration-300
            hover:scale-105
            "
          >
            Confirm Reservation
          </a>



        </div>


      </div>


    </section>
  );
}