const Contact = () => {

  const handleContact = () => {
    const phone = "6281234567890"; // ganti dengan nomor kamu
    const message = "Halo, saya ingin bertanya tentang peternakan ayam Anda.";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-lg mb-10">
          Hubungi kami untuk informasi lebih lanjut.
        </p>

        <button
          onClick={handleContact}
          className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 duration-300"
        >
          Hubungi Sekarang
        </button>

      </div>
    </section>
  );
};

export default Contact;