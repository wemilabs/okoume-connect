import Image from "next/image";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#0078D4] px-10 py-4 mb-6 rounded-md">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
              nos services
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des solutions complètes pour accélérer votre développement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(
            ({
              id,
              icon: Icon,
              imageAlt,
              imageSrc,
              title,
              description,
              features,
            }) => (
              <div
                key={id}
                className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-8 border-[#6CB947] group rounded-md"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="size-12 bg-[#6CB947] rounded-md flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                  </p>
                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li key={`${id}-${feature}`} className="flex items-start">
                        <div className="size-2 bg-[#6CB947] rounded-full mt-2 mr-3 shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
