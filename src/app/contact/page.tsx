export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl pt-8 font-bold mt-4 mb-6">Kontakt</h1>

      {/* contact info in card */}
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-md mx-auto mb-8 text-left">
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



      {/* Karta */}
      <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.8426659155696!2d18.598!3d60.058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f25b2e6xxxxxx%3A0x123456789abcdef!2sUppsalav%C3%A4gen%204C%2C%20Hallstavik!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Klicka på kartan för vägbeskrivning i Google Maps
      </p>


    </div>
  );
}
