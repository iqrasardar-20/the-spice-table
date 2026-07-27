import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">


        {/* Logo / About */}

        <div>

          <h2 className="text-3xl font-bold">
            <span className="text-yellow-500">
              The
            </span>{" "}
            Spice Table
          </h2>


          <p className="text-gray-400 mt-5 leading-7">
            A luxury dining experience where passion, flavors, and
            unforgettable moments come together.
          </p>



          <div className="flex gap-4 mt-6">


            <a
              href="#"
              className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-white duration-300"
            >
              <FaFacebookF />
            </a>


            <a
              href="#"
              className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-white duration-300"
            >
              <FaInstagram />
            </a>


            <a
              href="#"
              className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-white duration-300"
            >
              <FaTwitter />
            </a>


          </div>


        </div>





        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-5 text-yellow-500">
            Quick Links
          </h3>


          <ul className="space-y-3 text-gray-400">


            <li>
              <a href="#home" className="hover:text-yellow-500 duration-300">
                Home
              </a>
            </li>


            <li>
              <a href="#about" className="hover:text-yellow-500 duration-300">
                About
              </a>
            </li>


            <li>
              <a href="#menu" className="hover:text-yellow-500 duration-300">
                Menu
              </a>
            </li>


            <li>
              <a href="#gallery" className="hover:text-yellow-500 duration-300">
                Gallery
              </a>
            </li>


            <li>
              <a href="#reservation" className="hover:text-yellow-500 duration-300">
                Reservation
              </a>
            </li>


            <li>
              <a href="#contact" className="hover:text-yellow-500 duration-300">
                Contact
              </a>
            </li>


          </ul>


        </div>





        {/* Opening Hours */}

        <div>

          <h3 className="text-xl font-bold mb-5 text-yellow-500">
            Opening Hours
          </h3>


          <p className="text-gray-400 mb-3">
            Monday - Friday
            <br />
            12:00 PM - 11:00 PM
          </p>


          <p className="text-gray-400">
            Saturday - Sunday
            <br />
            11:00 AM - 12:00 AM
          </p>


        </div>





        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5 text-yellow-500">
            Contact
          </h3>


          <p className="text-gray-400 flex gap-3 items-center mb-4">
            <FaMapMarkerAlt className="text-yellow-500"/>
            New York City
          </p>


          <p className="text-gray-400 flex gap-3 items-center mb-4">
            <FaPhone className="text-yellow-500"/>
            +1 234 567 890
          </p>


          <p className="text-gray-400 flex gap-3 items-center">
            <FaEnvelope className="text-yellow-500"/>
            info@thespicetable.com
          </p>


        </div>



      </div>





      {/* Bottom */}

      <div className="border-t border-gray-800 mt-14 pt-6 text-center">

        <p className="text-gray-500">
          © 2026 The Spice Table. All Rights Reserved.
        </p>


      </div>


    </footer>
  );
}