import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-20 pb-0 px-0 overflow-hidden bg-white"
    >
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        <div className="relative bg-linear-to-br from-[#0078D4] to-[#0066b8] text-white px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-5 py-2 bg-[#6CB947] rounded-full mb-6">
              <span className="text-sm font-bold text-white uppercase tracking-wide">
                Partenaire Stratégique 🇬🇦
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase">
              connectons <br />
              <span className="text-[#6CB947]">vos besoins</span>
              <br />
              aux solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-10 leading-relaxed font-light">
              Intermédiation commerciale et financière
              <br />
              au Gabon
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                variant="green-cta"
                size="green-cta"
                className="h-auto font-bold uppercase shadow sm:w-fit sm:px-10"
              >
                contactez-nous
              </Button>

              <Button
                type="button"
                variant="outline"
                className="h-auto border border-white bg-transparent p-4 font-bold uppercase text-white shadow-sm hover:bg-white hover:text-[#0078D4] sm:w-auto sm:px-10"
              >
                nos services
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center text-white/90 mb-2">
                <Phone className="w-5 h-5 mr-3" aria-hidden="true" />
                <span className="font-semibold">+241 76 51 51 94</span>
              </div>
              <div className="flex items-center text-white/90">
                <Mail className="w-5 h-5 mr-3" aria-hidden="true" />
                <span className="font-semibold">www.okoumeconnect.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1616804947838-6646ae0e423d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85"
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
            width={1000}
            height={1000}
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#0078D4]/30" />
        </div>
      </div>
    </section>
  );
}
