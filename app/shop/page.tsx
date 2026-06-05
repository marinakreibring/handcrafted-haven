
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function ShopPage() {    
    return (
        <main className="container-custom">
        <Navbar />

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            {/* LEFT SIDE */}
            <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    This is Our Shop
                </h2>

                <p className="text-lg mb-8 max-w-md text-gray-700">
                    This page is a placeholder for the shop section of the website. 
                    Here, you can browse and purchase unique handmade products from talented artisans around the world. 
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

        
       

        {/* FOOTER */}
        <Footer />
    </main>
    );
}