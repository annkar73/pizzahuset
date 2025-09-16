import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero i full bredd */}
<section className="-mx-6 w-screen relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/pizzahero.jpg"
          alt="Pizzahuset i Hallstavik"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-grey/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Välkommen till Pizzahuset!
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 italic drop-shadow">
            Din lokala pizzeria i Hallstavik – goda pizzor och fräscha råvaror!
          </p>
        </div>
      </section>

      {/* Resten av innehållet i max-width container */}
      <main className="text-center mt-10 px-4">
        {/* Kontaktkort */}
        <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mb-8 border-l-4 border-b-4 border-r-4 border-green-700 text-left">
          <p className="text-sm md:text-lg pb-2">
            <span className="font-semibold text-green-800">📍 Adress:</span>
            <br />
            Uppsalavägen 4C, Hallstavik
          </p>
          <p className="text-sm md:text-lg">
            <span className="font-semibold text-green-800">🕒 Öppettider:</span>
            <br />
            Mån–Sön 11:00–21:00{" "}
            <span className="text-sm md:text-lg text-gray-500">
              (vintertid: 11:00–20:00)
            </span>
          </p>
          <p className="text-sm md:text-lg pt-2">
            <span className="font-semibold text-green-800">📞 Telefon:</span>
            <br />
            0175-234 51
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          <em>
            Observera avvikande öppettider under vinterhalvåret.
            <br />
            2025 innebär det att öppettiderna ändras från 27 oktober.
          </em>
        </p>

        {/* Länk till menyn */}
        <a
          href="/menu"
          className="inline-block bg-green-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-800 transition-colors"
        >
          🍕 Se vår meny
        </a>
      </main>
    </div>
  );
}
