import { ArrowRight, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { advantages } from "@/lib/data";

export function Advantages() {
  return (
    <section id="advantages" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#6CB947] px-10 py-4 mb-6 rounded-md">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
              Pourquoi Choisir OKOUMÉ CONNECT ?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="bg-white border-l-8 border-[#0078D4] p-8 hover:shadow-xl transition-all duration-300 group rounded-md"
            >
              <div className="size-16 bg-[#6CB947] rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-0 overflow-hidden bg-white shadow-2xl">
          <div className="bg-linear-to-br from-[#0078D4] to-[#0066b8] p-12 lg:p-16 text-white flex flex-col justify-center rounded-l-md">
            <h3 className="text-4xl font-black mb-6 uppercase">
              Prêt à Transformer
              <br />
              Votre Business ? 🇬🇦
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez les entreprises qui nous font confiance pour développer
              leurs activités au Gabon
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CircleCheckBig className="text-[#6CB947] mr-2" size={20} />
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="text-[#6CB947] mr-2" size={20} />
                <span>Résultats concrets garantis</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="text-[#6CB947] mr-2" size={20} />
                <span>Expertise locale reconnue</span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-[#6CB947] hover:bg-[#5da839] text-white px-10 py-7 text-lg font-bold uppercase w-fit"
            >
              Démarrer Maintenant
              <ArrowRight className="ml-2 size-6" />
            </button>
          </div>
          <div className="h-full min-h-[400px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1640531005099-e44dde94945a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85"
              alt="Advantages"
              className="w-full h-full object-cover rounded-r-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
