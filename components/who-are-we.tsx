import Image from "next/image";
import { whoWeAreFocusCards, whoWeAreHighlights } from "@/lib/data";

export function WhoAreWe() {
  return (
    <section id="who-are-we" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block bg-[#6CB947] px-8 py-3 mb-6 rounded-md">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
              Qui Sommes-Nous ?
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            <strong className="text-[#0078D4]">OKOUMÉ CONNECT</strong> 🇬🇦 est
            une entreprise gabonaise spécialisée dans
            <strong> l'intermédiation commerciale et financière</strong>, le
            conseil stratégique et l'accompagnement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {whoWeAreHighlights.map(
            ({ id, icon: Icon, title, description, gradientClassName }) => (
              <div
                key={id}
                className={`${gradientClassName} p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300 rounded-md`}
              >
                <Icon className="absolute top-4 right-4 size-16 opacity-20" />
                <h3 className="text-2xl font-bold mb-3 uppercase relative z-10">
                  {title}
                </h3>
                <p className="text-white/90 relative z-10">{description}</p>
              </div>
            ),
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whoWeAreFocusCards.map(
            ({
              id,
              badgeClassName,
              borderClassName,
              description,
              headline,
              imageAlt,
              imageSrc,
              overlayClassName,
              title,
            }) => (
              <div
                key={id}
                className={`relative overflow-hidden bg-white border-4 ${borderClassName} group hover:shadow-2xl transition-all duration-300 rounded-md`}
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={300}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className={`absolute inset-0 ${overlayClassName}`} />
                </div>
                <div className="p-8">
                  <div
                    className={`${badgeClassName} inline-block px-6 py-2 mb-4 rounded-md`}
                  >
                    <h3 className="text-2xl font-black text-white uppercase">
                      {title}
                    </h3>
                  </div>
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    {headline}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
