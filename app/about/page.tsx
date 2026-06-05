
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function AboutPage() {    
    return (
        <main className="container-custom">
        <Navbar />

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            {/* LEFT SIDE */}
            <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Crafted with Passion. Shared with Purpose.
                </h2>

                <p className="text-lg mb-8 max-w-md text-gray-700">
                    Handcrafted Haven connects talented artisans with people who appreciate 
                    unique, handmade creations and sustainable craftsmanship.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button><a href="/shop">Shop Now</a></button>

                    <button>Become a Seller</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                    src="/images/about1.jpg"
                    alt="Handcrafted bags"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
            <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold mb-4">
                    Our Values
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Handcrafted Haven was created to support independent artisans and celebrate creativity 
                    through handmade products. Our platform gives creators a space to share their stories, 
                    connect with customers, and build sustainable businesses.
                </p>
                <div className="grid gap-8 md:grid-cols-3 mt-12">
                    {/* CARD 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                        <div className="text-5xl mb-4">
                            🎨
                        </div>
                        <h4 className="text-2xl font-semibold mb-4">
                            Support Artisans
                        </h4>

                        <p className="text-gray-600 leading-relaxed">
                            Empowering independent creators and small handmade businesses around the world.
                        </p>
                    </div>
                    {/* CARD 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                        <div className="text-5xl mb-4">
                            🌿
                        </div>
                        <h4 className="text-2xl font-semibold mb-4">
                            Sustainable Shopping
                        </h4>

                        <p className="text-gray-600 leading-relaxed">
                            Encouraging thoughtful purchasing and environmentally conscious craftsmanship.
                        </p>
                    </div>
                    {/* CARD 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                        <div className="text-5xl mb-4">
                            🤝
                        </div>
                        <h4 className="text-2xl font-semibold mb-4">
                            Community Connection
                        </h4>
    
                    <p className="text-gray-600 leading-relaxed">
                        Building meaningful relationships between artisans and customers through storytelling.
                    </p>
                </div>
            </div>
        </div>
    </section>
       

        {/* FOOTER */}
        <Footer />
    </main>
    );
}