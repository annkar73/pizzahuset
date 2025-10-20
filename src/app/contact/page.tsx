import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl pt-8 font-bold mt-4 mb-6">Kontakt och hitta hit</h1>

      {/* Grid för kontaktinfo + karta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Kontaktkort */}
        <div className="bg-white shadow-xl rounded-xl p-6 text-left md:col-span-1 flex flex-col justify-evenly">
          <div className="space-y-4">
            {/* Adress */}
            <div className="flex items-start gap-3">
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
            <div className="flex items-start gap-3">
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
            <div className="flex items-start gap-3">
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
            <div className="flex items-center gap-3 pt-2">
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
        </div>

        {/* Karta */}
        <div className="rounded-xl overflow-hidden shadow-xl md:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.8426659155696!2d18.598!3d60.058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f25b2e6xxxxxx%3A0x123456789abcdef!2sUppsalav%C3%A4gen%204C%2C%20Hallstavik!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Klicka på kartan för vägbeskrivning i Google Maps
      </p>
    </div>
  );
}
