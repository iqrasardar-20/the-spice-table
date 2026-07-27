import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export default function Gallery() {
  return (
    <section className="bg-[#0F0F0F] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 mb-3">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-white">
            Our Restaurant Gallery
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Discover the elegance of our restaurant, beautifully crafted dishes,
            and unforgettable dining experiences.
          </p>

        </div>

        {/* Images */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl group relative"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 duration-500 flex items-center justify-center">

                <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 duration-500">
                  The Spice Table
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}