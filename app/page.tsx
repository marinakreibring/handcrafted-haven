import Image from "next/image";

export default function Home() {
  return (
    <main className="px-8 py-8 min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between mb-16">
    
        <h1 className="text-2xl font-bold">
          Handcrafted Haven
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Artisans</a>
          <a href="#">About</a>

          <button>Sign In</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Discover Unique Handmade Treasures
          </h2>

          <p className="text-lg mb-8 max-w-md">
            Support talented artisans and explore handcrafted products
            made with care, creativity, and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button>Shop Now</button>

            <button>Become a Seller</button>
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
    </main>
  );
}