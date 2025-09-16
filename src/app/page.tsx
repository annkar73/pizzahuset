export default function HomePage() {
  return (
    <div className="align-center justify-center text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Välkommen till Pizzahuset!</h1>
      <p>Här hittar du våra öppettider, kontaktinformation och meny.</p>

                  {/* Contact info */}
      <div className="mt-6 pt-6 border-t border-gray-300 pt-1 text-left text-base md:text-lg print:text-[10px]">
        <p><span className="font-semibold text-green-800">Adress:</span> Uppsalavägen 4C, Hallstavik</p>
        <p><span className="font-semibold text-green-800">Öppettider:</span> Mån-Sön 11:00-21:00 | vintertid: 11:00-20:00</p> 

        <p><span className="font-semibold text-green-800">Telefon:</span> 0175-234 51</p>
      </div>

            <p>Observera avvikande öppettider under vinterhalvåret. 2025 innebär det att öppettiderna ändras från 27 oktober.</p>
      <div className="mt-6 pt-6 border-t border-gray-300 pt-1 text-left text-sm print:text-[10px]"></div>

    </div>
  );
}
