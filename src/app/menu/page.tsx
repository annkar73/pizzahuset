// src/app/menu/page.tsx
import { menu } from "../../data/menu";

export default function MenuPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center text-red-800">Vår meny</h1>

      {menu.map((category) => (
        <div
          key={category.title}
          className="bg-white shadow-md rounded-xl p-6 
                     w-full max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            {category.title}
          </h2>

          {category.basePrice && (
            <p className="text-sm font-semibold text-gray-600 mb-2">
              Alla pizzor: {category.basePrice} kr
              {category.familyPrice &&
                ` | Familjepizza: ${category.familyPrice} kr`}
            </p>
          )}

          {category.panPrices && (
            <p className="text-sm font-semibold text-gray-600 mb-2">
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
                {/* Namn + ingredienser */}
                <div className="md:flex md:gap-2 md:items-baseline">
                  <p className="font-bold text-gray-900">{item.name}</p>
                  {item.ingredients && (
                    <p className="text-sm text-gray-600">{item.ingredients}</p>
                  )}
                </div>

                {/* Pris (om det finns) */}
                {item.price && (
                  <div className="text-right font-bold text-gray-900">
                    {item.price} kr
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
