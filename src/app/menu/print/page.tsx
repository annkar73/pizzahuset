"use client";

import { menu } from "../../../data/menu";

export default function PrintMenuPage() {
  return (
    <div className="p-2 pt-4 max-w-[100%] mx-auto print:p-0">
      {/* Rubrik */}
      <h1 className="text-2xl font-bold text-center text-red-800  mt-6  mb-1 print:text-lg">
        Pizzahuset i Hallstavik - Vår meny
      </h1>
      <p className="text-sm text-center text-green-800 font-semibold mb-2 print:text-[12px]">
        Alla pizzor med tomatsås och mozzarellaost
      </p>
      <p className="text-sm text-center text-grey-800 font-semibold mb-4 underline print:text-[12px]">
        Barnpizzor -10 kronor
      </p>

      {/* Utskriftsknapp */}
      <div className="mb-2 text-center print:hidden">
        <button
          className="px-3 py-1 bg-red-800 text-white rounded hover:bg-red-700 text-sm"
          onClick={() => window.print()}
        >
          Spara / Skriv ut menyn
        </button>
      </div>

      {menu.map((category) => (
        <div key={category.title} className="mb-2 break-inside-avoid">
          <h2 className="text-lg font-semibold text-green-800 mb-1 print:text-base">
            {category.title}
          </h2>

          {category.basePrice && (
            <p className="text-sm font-bold text-gray-700 mb-1 print:text-[10px]">
              Alla pizzor: {category.basePrice} kr
              {category.familyPrice &&
                ` | Familjepizza: ${category.familyPrice} kr`}
            </p>
          )}

          {category.panPrices && (
            <p className="text-sm font-bold text-gray-700 mb-1 print:text-[10px]">
              S: {category.panPrices.S} kr | M: {category.panPrices.M} kr | L:{" "}
              {category.panPrices.L} kr
            </p>
          )}

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 print:grid-cols-2 print:gap-x-2 print:gap-y-1">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-baseline py-0.5 border-b border-gray-300 print:py-0.5 print:border-b-gray-300"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 print:text-[9px] leading-tight">
                    {item.name}
                  </span>
                  {item.ingredients && (
                    <span className="text-gray-600 text-xs print:text-[8px] leading-tight">
                      {item.ingredients}
                    </span>
                  )}
                </div>
                {item.price && (
                  <span className="font-semibold text-gray-900 print:text-[9px] min-w-[55px] pl-2 text-right">
                    {item.price} kr
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Kontaktinfo längst ner */}
      <div className="mt-6 pt-6 pt-1 text-center text-sm print:text-[10px]">
        <p className="font-bold text-lg underline">Pizzahuset i Hallstavik</p>
        <p>
          <span className="font-semibold font-green-800">Adress:</span>{" "}
          Uppsalavägen 4C, Hallstavik
        </p>
        <p>
          <span className="font-semibold">Öppet alla dagar</span>
          <br></br> Sommar 11:00-21:00 | Vinter 11:00-20:00
        </p>

        <p>
          <span className="font-semibold">Telefon:</span> 0175-234 51
        </p>
      </div>
    </div>
  );
}
