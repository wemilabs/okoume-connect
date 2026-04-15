import { Mail } from "lucide-react";
import { contactCards } from "@/lib/data";

export function ContactUs() {
  return (
    <section id="contact-us" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prêt à Passer à l'Action ?
        </h2>
        <div className="h-1 w-20 bg-linear-to-r from-[#0078D4] to-[#6CB947] mx-auto mb-8" />
        <p className="text-xl text-gray-600 mb-12">
          Contactez-nous dès aujourd'hui et découvrons ensemble comment
          accélérer vos projets
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactCards.map(
            ({
              id,
              icon: Icon,
              iconBackgroundClassName,
              iconColorClassName,
              title,
              value,
              hoverBorderClassName,
            }) => (
              <div
                key={id}
                className={`rounded-xl bg-card text-card-foreground shadow border border-gray-200 ${hoverBorderClassName} transition-all hover:shadow-lg`}
              >
                <div className="p-6 pt-8 text-center">
                  <div
                    className={`size-14 ${iconBackgroundClassName} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`size-6 ${iconColorClassName}`} />
                  </div>
                  <h3 className="font-bold mb-2 text-gray-800">{title}</h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="bg-linear-to-br from-[#6CB947]/10 to-[#0078D4]/10 rounded-3xl p-8 border border-[#6CB947]/20">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Envoyez-nous un Message
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe vous répondra dans les plus brefs délais
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-10 rounded-md bg-linear-to-r from-[#0078D4] to-[#0066b8] hover:from-[#0066b8] hover:to-[#005599] text-white px-10 py-6 text-lg"
          >
            <Mail className="mr-2 size-5" />
            Contactez-Nous Maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
