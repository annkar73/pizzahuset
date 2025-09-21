export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pb-4 mt-auto">
      {/* Övre rad med kontaktinfo */}
      <div className="w-full mx-auto p-2 mb-2 text-center bg-red-800 text-white font-semibold">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-2 space-y-1 md:space-y-0">
          <span>Pizzahuset i Hallstavik</span>
          <span className="hidden md:inline">|</span>
          <span>Uppsalavägen 4C</span>
          <span className="hidden md:inline">|</span>
          <span>0175-234 51</span>
          <span className="hidden md:inline">|</span>
          <span>Öppet alla dagar:</span>
          <span className="hidden md:inline">|</span>
          <span>Sommar 11:00 – 21:00</span>
          <span className="hidden md:inline">|</span>
          <span>Vinter 11:00 – 20:00</span>
        </div>
      </div>

      {/* Nedre rad med copyright */}
      <div className="max-w-4xl mx-auto text-center text-sm">
        © 2025 Pizzahuset i Hallstavik - Alla rättigheter reserverade
      </div>
    </footer>
  );
}
