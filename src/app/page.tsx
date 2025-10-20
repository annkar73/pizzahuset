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
        {/* lunch card */}
        <div className="bg-white shadow-md rounded-xl p-4 max-w-2xl mx-auto mb-6 border-4 border-red-800">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Dagens Lunch
          </h2>
          <h3 className="text-xl md:text-3xl text-red-800 font-semibold mb-4">
            måndag till fredag 11:00 - 14:00
          </h3>
          <h4 className="text-lg md:text-xl text-red-800 font-semibold mb-3">
            Valfri pizza från Prisgrupp 1 (pizza 1-30) + dryck 33cl - 115 kr
          </h4>
        </div>

        {/* Länk till menyn */}
        <a
          href="/menu"
          className="inline-block bg-green-800 text-white font-semibold px-6 py-2 mb-4 rounded-lg shadow hover:bg-red-800 transition-colors"
        >
          🍕 Se vår meny
        </a>

        {/* Beskrivning */}
        <p className="text-sm md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Hos oss på Pizzahuset hittar du ett brett utbud av läckra pizzor,
          sallader, kebab och annat gott, allt tillagat med omsorgsfullt
          utvalda råvaror av högsta kvalitet.
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Vi strävar efter att skapa en varm och välkomnande atmosfär där du
          kan njuta av din måltid i lugn och ro, med en praktisk ramp från
          gatunivå till uteservering och restaurang som garanterar
          tillgänglighet för alla.
        </p>

        {/* Kontaktkort */}
        <div className="bg-white shadow-xl max-w-md rounded-xl p-6 text-left mx-auto">
          {/* Adress */}
          <div className="flex items-start gap-3 mb-3">
            <Image
              src="/images/pin.png"
              alt="Adress"
              width={24}
              height={24}
              className="mt-1"
            />
            <p className="text-sm md:text-lg">
              <span className="font-semibold text-green-800">Adress:</span>
              <br /> Uppsalavägen 4C, Hallstavik
            </p>
          </div>

          {/* Öppettider */}
          <div className="flex items-start gap-3 mb-3">
            <Image
              src="/images/clock.png"
              alt="Öppettider"
              width={24}
              height={24}
              className="mt-1"
            />
            <p className="text-sm md:text-lg">
              <span className="font-semibold text-green-800">Öppettider:</span>
              <br />
              Sommar: Mån–Sön 11:00–21:00
              <br />
              Vinter: Mån–Sön 11:00–20:00
            </p>
          </div>

          {/* Telefon */}
          <div className="flex items-start gap-3 mb-3">
            <Image
              src="/images/phone.png"
              alt="Telefon"
              width={24}
              height={24}
              className="mt-1"
            />
            <p className="text-sm md:text-lg">
              <span className="font-semibold text-green-800">Telefon:</span>
              <br /> 0175-234 51
            </p>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-3 pt-1">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            <a
              href="https://www.facebook.com/pizzahusetihallstavik"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-800 hover:text-red-700 text-sm md:text-lg"
            >
              Facebook
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
