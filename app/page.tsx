import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Handmade Ceramic Vase",
    price: "$45",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Knitted Wool Blanket",
    price: "$68",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Wooden Artisan Bowl",
    price: "$32",
    image: "/images/product3.jpg",
  },
];

export default function Home() {
  return (
    <main className="px-8 py-8 min-h-screen bg-[#faf7f2] text-[#2d2d2d]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between mb-16">

        <h1 className="text-2xl font-bold">
          Handcrafted Haven
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="hover:text-amber-700 transition">
            Home
          </a>

          <a href="#" className="hover:text-amber-700 transition">
            Shop
          </a>

          <a href="#" className="hover:text-amber-700 transition">
            Artisans
          </a>

          <a href="#" className="hover:text-amber-700 transition">
            About
          </a>

          <button className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-white transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-24">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Unique Handmade Treasures
          </h2>

          <p className="text-lg mb-8 max-w-md text-gray-700">
            Support talented artisans and explore handcrafted products
            made with care, creativity, and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition">
              Shop Now
            </button>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Become a Seller
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/hero.jpg"
            alt="Handcrafted pottery"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mb-24">

        <div className="mb-12 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Featured Products
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our community’s favorite handcrafted creations,
            carefully made by talented artisans from around the world.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              <div className="relative h-72 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h4 className="text-2xl font-semibold mb-2">
                  {product.name}
                </h4>

                <p className="text-amber-700 font-bold text-lg mb-4">
                  {product.price}
                </p>

                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-amber-700 transition">
                  View Product
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-8 text-center text-gray-600">
        <p>
          © 2026 Handcrafted Haven — Supporting artisans worldwide.
        </p>
      </footer>

    </main>
  );
}