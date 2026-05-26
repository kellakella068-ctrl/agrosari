
import farm from "../assets/images/potoayam.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Tentang Kami
          </h2>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={farm}
              alt="Peternakan Ayam Petelur"
              className="w-full h-full object-cover hover:scale-110 duration-500"
            />

          </div>

          {/* TEXT */}
          <div>

            <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Produsen Telur Berkualitas Sejak 1985
            </h3>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              Agrosari Farm adalah perusahaan peternakan ayam petelur
              yang berkomitmen menyediakan telur berkualitas tinggi
              untuk kebutuhan masyarakat dan industri.
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Dengan pengalaman puluhan tahun, kami mengutamakan
              kualitas, kebersihan, serta distribusi cepat dan aman
              untuk menjaga kepuasan pelanggan.
            </p>

            {/* BOX INFO */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">

                <h4 className="text-4xl font-bold text-green-600 mb-2">
                  35+
                </h4>

                <p className="text-gray-600 font-medium">
                  Tahun Pengalaman
                </p>

              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">

                <h4 className="text-4xl font-bold text-green-600 mb-2">
                  1000+
                </h4>

                <p className="text-gray-600 font-medium">
                  Pelanggan
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;