export default function HomePage() {
  return (
    <div className="text-center mt-10 px-4 align-center justify-center">
      {/* welcome heading */}
      <h1 className="text-4xl font-bold text-red-800 mb-4">
        Välkommen till Pizzahuset!
      </h1>
      <p className="text-lg text-gray-700 mb-8 italic">
        Din lokala pizzeria i Hallstavik – goda pizzor, fräscha råvaror och alltid med ett leende!
      </p>

      {/* contact info in card */}
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mb-8 border-l-4 border-b-4 border-r-4 border-green-700 text-left">
        <p className="text-sm md:text-lg pb-2" >
          <span className="font-semibold text-green-800">📍 Adress:</span>{" "}
          <br></br>Uppsalavägen 4C, Hallstavik
        </p>
        <p className="text-sm md:text-lg">
          <span className="font-semibold text-green-800">🕒 Öppettider:</span>{" "}
          <br></br>Mån–Sön 11:00–21:00{" "}
          <span className="text-sm md:text-lg text-gray-500">(vintertid: 11:00–20:00)</span>
        </p>
        <p className="text-sm md:text-lg pt-2">
          <span className="font-semibold text-green-800">📞 Telefon:</span>{" "}
          <br></br>0175-234 51
        </p>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        <em>Observera avvikande öppettider under vinterhalvåret.<br />
        2025 innebär det att öppettiderna ändras från 27 oktober.</em>
      </p>

      {/* Länk till menyn */}
      <a
        href="/menu"
        className="inline-block bg-green-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-800 transition-colors"
      >
        🍕 Se vår meny
      </a>
    </div>
  );
}
