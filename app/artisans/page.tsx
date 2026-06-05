import { sql } from "@/app/lib/db"; 

import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ArtisanCards from "@/components/ArtisanCards";

export default async function ArtisansPage() {
  const artisans = await sql`
    SELECT * FROM artisans
    ORDER BY name
  `;

  return (
        <main className="container-custom">
        <Navbar />

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            {/* LEFT SIDE */}
            <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Meet Our Artisans
                </h2>

                <p className="text-lg mb-8 max-w-md text-gray-700">
                    Behind every handcrafted piece is a talented artisan with a unique story. 
                    Explore the creators who bring passion, creativity, and traditional craftsmanship 
                    to every product in our marketplace.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button><a href="/shop">Shop Now</a></button>

                    <button>Become a Seller</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                    src="/images/about2.jpg"
                    alt="Artisan at work"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>
        </section>

        {/* Artisans Section */}
        <section className="mb-24">
            <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold mb-4">
                    Our Artisans
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get to know the talented creators behind our handmade products. Each artisan has a unique story, 
                    a passion for their craft, and a commitment to quality and sustainability. 
                    We invite you to explore their work and connect with their stories.
                </p>

                <ArtisanCards artisans={artisans as any} />
                
            </div>
        
    </section>
       

        {/* FOOTER */}
        <Footer />
    </main>
    );
}