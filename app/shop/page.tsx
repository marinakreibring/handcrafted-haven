import { sql } from "@/app/lib/db";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCards from "@/components/ProductCard";


export default async function ShopPage() {  
    const products = await sql`
    SELECT *
    FROM products
    ORDER BY title
  `;  
    return (
        <main className="container-custom">
        <Navbar />

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            {/* LEFT SIDE */}
            <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Handcrafted Goods, <br /> Made with Love
                </h2>

                <p className="text-lg mb-8 max-w-md text-gray-700">
                    Discover unique handmade products created by talented artisans.
                    Every item is crafted with care and reflects the creativity,
                    skill, and passion of its maker.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button>Shop Now</button>

                    <button>Become a Seller</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                    src="/images/about3.jpg"
                    alt="Handcrafted jar"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />

            </div>
        </section>
        {/* PRODUCTS Section */}
        <section className="mb-24">
            <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold mb-4">
                    Handmade Treasures
                </h3>
        
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our collection of handcrafted goods made with care, 
                    creativity, and attention to detail. Every purchase directly 
                    supports independent artisans.
                </p>
        
                <ProductCards products={products as any} />
                        
            </div>
                
        </section>                       

        {/* FOOTER */}
        <Footer />
    </main>
    );
}