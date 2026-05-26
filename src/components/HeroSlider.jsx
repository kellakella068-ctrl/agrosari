import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
      speed={1200}
      className="h-screen"
    >

      {/* SLIDE 1 */}
      <SwiperSlide>

        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${slide1})`,
          }}
        >

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[6px] text-green-400 mb-4">
              AGROSARI FARM
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Supplier Telur <br />
              Berkualitas Tinggi
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-8 mb-8">
              Menyediakan telur ayam berkualitas dengan standar
              kebersihan dan distribusi terbaik untuk seluruh pelanggan.
            </p>

            <div className="flex gap-4">

              <button className="bg-green-600 hover:bg-green-700 duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl">
                Hubungi Kami
              </button>

              <button className="border border-white hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-xl text-lg font-semibold">
                Pelajari Lebih
              </button>

            </div>

          </div>

        </div>

      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>

        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${slide2})`,
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[6px] text-green-400 mb-4">
              NILAI PERUSAHAAN
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Integritas dan <br />
              Kualitas Terbaik
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-8">
              Kami berkomitmen menjaga kualitas produk dan pelayanan
              terbaik untuk seluruh pelanggan.
            </p>

          </div>

        </div>

      </SwiperSlide>

      {/* SLIDE 3 */}
      <SwiperSlide>

        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${slide3})`,
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[6px] text-green-400 mb-4">
              KOMITMEN KAMI
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Distribusi Cepat <br />
              dan Aman
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-8">
              Sistem distribusi modern dan efisien untuk menjaga
              kualitas produk tetap terbaik.
            </p>

          </div>

        </div>

      </SwiperSlide>

    </Swiper>
  );
};

export default HeroSlider;