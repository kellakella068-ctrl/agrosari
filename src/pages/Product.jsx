import egg from "../assets/images/egg.jpg";
import feed from "../assets/images/feed.jpg";
import delivery from "../assets/images/delivery.jpg";

const Product = () => {
  return (
    <section
      id="product"
      className="py-24 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-800 mb-5">
            Produk Kami
          </h2>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>

        </div>

        {/* CARD */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-500">

            <div className="h-64 overflow-hidden">

              <img
                src={egg}
                alt="Telur Premium"
                className="w-full h-full object-cover hover:scale-110 duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Telur Premium
              </h3>

              <p className="text-gray-600 leading-7">
                Telur ayam berkualitas tinggi dengan standar kebersihan terbaik.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-500">

            <div className="h-64 overflow-hidden">

              <img
                src={feed}
                alt="Pakan Ayam"
                className="w-full h-full object-cover hover:scale-110 duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Pakan Ayam
              </h3>

              <p className="text-gray-600 leading-7">
                Nutrisi terbaik untuk menjaga kualitas ayam petelur.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-500">

            <div className="h-64 overflow-hidden">

              <img
                src={delivery}
                alt="Distribusi"
                className="w-full h-full object-cover hover:scale-110 duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Distribusi
              </h3>

              <p className="text-gray-600 leading-7">
                Pengiriman cepat dan aman dengan sistem distribusi modern.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Product;