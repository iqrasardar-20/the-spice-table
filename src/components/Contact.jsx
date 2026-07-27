import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
     
  return (
   <section id="contact" className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 mb-3">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have questions or want to reserve a table? Our team is always ready
            to assist you.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-12">


          {/* Contact Info */}

          <div className="space-y-8">


            <div className="flex items-center gap-5">
              <div className="bg-yellow-500 text-black p-4 rounded-full">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold">
                  Phone
                </h3>
                <p className="text-gray-400">
                  +1 234 567 890
                </p>
              </div>
            </div>


            <div className="flex items-center gap-5">

              <div className="bg-yellow-500 text-black p-4 rounded-full">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold">
                  Email
                </h3>

                <p className="text-gray-400">
                  info@thespicetable.com
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5">

              <div className="bg-yellow-500 text-black p-4 rounded-full">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Downtown, New York City
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5">

              <div className="bg-yellow-500 text-black p-4 rounded-full">
                <FaClock />
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold">
                  Opening Hours
                </h3>

                <p className="text-gray-400">
                  Mon - Sun: 12 PM - 11 PM
                </p>

              </div>

            </div>


          </div>



          {/* Form */}

          <form className="bg-[#1A1A1A] p-8 rounded-3xl space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            />


            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>


            <button
  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-full transition duration-300"
>
  Send Message
</button>


          </form>


        </div>

      </div>

    </section>
  );
}