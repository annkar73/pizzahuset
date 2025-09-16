export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl pt-8 font-bold mt-4 mb-6">Kontakt</h1>

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



      <div className="mt-6 pt-6 border-t border-gray-300 pt-1 text-left text-sm print:text-[10px]">
        här ska jag lägga en kartbild
      </div>


    </div>
  );
}
