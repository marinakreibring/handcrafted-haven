"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  seller: string;
  description: string;
  image_url: string;
};

export default function ProductCards({
  products,
}: {
  products: Product[];
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {products.map((product) => {
        const isExpanded = expandedCard === product.id;

        return (
          <div
            key={product.id}
            className={`
              bg-white rounded-3xl overflow-hidden
              shadow-md hover:shadow-2xl
              transition-all duration-700
              ${
                isExpanded
                  ? "lg:col-span-2 scale-[1.015]"
                  : "hover:-translate-y-1"
              }
            `}
          >
            <div
              className={`
                grid overflow-hidden
                transition-all duration-700
                ${
                  isExpanded
                    ? "md:grid-cols-2"
                    : "grid-cols-1"
                }
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  relative w-full overflow-hidden
                  transition-all duration-700
                  ${
                    isExpanded
                      ? "h-[520px]"
                      : "h-72"
                  }
                `}
              >
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`
                    object-cover
                    transition-transform duration-700
                    ${
                      isExpanded
                        ? "scale-105"
                        : "hover:scale-110"
                    }
                  `}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    {product.title}
                  </h4>

                  <p className="text-amber-700 font-bold text-lg mb-2">
                    {product.price}
                  </p>

                  <p className="text-gray-500 mb-4">
                    {product.seller}
                  </p>

                  <div
                    className={`
                      overflow-hidden transition-all duration-700
                      ${
                        isExpanded
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pt-2">
                      <div className="mb-6">
                        <p className="font-semibold text-lg mb-2">
                          Product Details
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        <button>
                          Add to Cart
                        </button>

                        <button>
                          Contact Seller
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(product.id)}
                  className="w-full mt-6"
                >
                  {isExpanded
                    ? "Close Details"
                    : "View Details"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}