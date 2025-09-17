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
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
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
        {/* lunch card  */}
        <div className="bg-white shadow-md rounded-xl p-4 max-w-2xl mx-auto mb-6 border-4 border-red-800">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Dagens Lunch
        </h2>
        <h3 className="text-xl md:text-3xl text-red-800 font-semibold mb-4">
          måndag till fredag 11:00 - 14:00
          </h3>
        <h4 className="text-lg md:text-xl text-red-800 font-semibold mb-3">
          Valfri pizza från Prisgrupp 1 + dryck 33cl - 99 kr
        </h4>
        </div>


        <p className="text-sm md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Hos oss på Pizzahuset hittar du ett brett utbud av läckra pizzor,
          sallader, kebab och annat gott, allt tillagat med
          omsorgsfullt utvalda råvaror av högsta kvalitet. 
        </p>  
        <p className="text-sm md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Vi strävar efter att skapa en varm och välkomnande atmosfär där du
          kan njuta av din måltid i lugn och ro, med en praktisk ramp från gatunivå till uteservering och restaurang som garanterar tillgänglighet för alla.
        </p>
        {/* Kontaktkort */}
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-md mx-auto mb-8 text-left">
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
