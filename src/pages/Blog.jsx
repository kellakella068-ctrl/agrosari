const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Tips Memilih Telur
            </h3>

            <p>
              Cara memilih telur berkualitas.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Nutrisi Ayam
            </h3>

            <p>
              Nutrisi terbaik untuk ayam petelur.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Distribusi Modern
            </h3>

            <p>
              Sistem distribusi cepat dan aman.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Blog;