"use client";
import { useState } from "react";
import { menu } from "../../data/menu";
import Link from "next/link";

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-10 pb-8 pt-10" >
      <h1 className="text-4xl font-bold text-center text-red-800">Vår meny</h1>
      <p className="text-xl font-bold text-center text-green-800">alla pizzor med mozzarellaost och äkta skinka</p>

<div className="text-center mb-6">
  <span>Se komplett meny med möjlighet att spara eller skriva ut </span>
  <Link
    href="/menu/print"
    className="inline-block bg-green-800 text-white text-sm font-semibold px-3 py-1.5 rounded hover:bg-green-700 transition-colors align-baseline"
  >
    här
  </Link>

  <p className="mt-6 font-semibold text-red-800 underline">Barnpizzor -10 kronor</p>
</div>
      {menu.map((category) => {
        const isOpen = openCategories.includes(category.title);
        return (
          <div
            key={category.title}
            className="bg-white shadow-md rounded-xl p-6
                       w-full max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-green-800">
                {category.title}
              </h2>
              <button
                onClick={() => toggleCategory(category.title)}
                className="text-sm font-bold text-red-800"
              >
                {isOpen ? "Stäng" : "Öppna"}
              </button>
            </div>

            {/* Animated content */}
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {category.basePrice && (
                <p className="text-sm font-bold text-gray-600 mb-2">
                  Alla pizzor: {category.basePrice} kr
                  {category.familyPrice &&
                    ` | Familjepizza: ${category.familyPrice} kr`}
                </p>
              )}

              {category.panPrices && (
                <p className="text-sm font-bold text-gray-600 mb-2">
                  S: {category.panPrices.S} kr | M: {category.panPrices.M} kr | L:{" "}
                  {category.panPrices.L} kr
                </p>
              )}

              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-gray-200 pb-2"
                  >
                    <div className="md:flex md:gap-2 md:items-baseline">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      {item.ingredients && (
                        <p className="text-sm text-gray-600">{item.ingredients}</p>
                      )}
                    </div>
                    {item.price && (
                      <div className="text-right font-bold text-gray-900">
                        {item.price} kr
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
