export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl pt-8 font-bold mb-4">Kontakt</h1>
      <p>Observera avvikande öppettider under vinterhalvåret. 2025 innebär det att öppettiderna ändras från 27 oktober.</p>

            {/* Contact info */}
      <div className="mt-6 pt-6 border-t border-gray-300 pt-1 text-left text-base md:text-lg print:text-[10px]">
        <p className="font-bold text-2xl md:text-3xl text-red-800 pb-4">Pizzahuset i Hallstavik</p>
        <p><span className="font-semibold text-green-800">Adress:</span> Uppsalavägen 4C, Hallstavik</p>
        <p><span className="font-semibold text-green-800">Öppettider:</span> Mån-Sön 11:00-21:00 | vintertid: 11:00-20:00</p> 

        <p><span className="font-semibold text-green-800">Telefon:</span> 0175-234 51</p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-300 pt-1 text-left text-sm print:text-[10px]">
        här ska jag lägga en kartbild
      </div>


    </div>
  );
}
