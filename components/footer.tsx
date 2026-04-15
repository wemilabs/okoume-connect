import { Mail, MapPin, Phone } from "lucide-react";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  "use cache";
  cacheLife("max");

  const currentYear = new Intl.DateTimeFormat("fr-GA", {
    year: "numeric",
    timeZone: "Africa/Libreville",
  }).format(new Date());

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-[#6CB947] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-white font-bold text-lg">
            <Phone className="w-6 h-6 mr-3" aria-hidden="true" />
            <span>+241 76 51 51 94</span>
          </div>
          <div className="flex items-center text-white font-bold text-lg">
            <Mail className="w-6 h-6 mr-3" aria-hidden="true" />
            <span>www.okoumeconnect.com</span>
          </div>
          <div className="flex items-center text-white font-bold text-lg">
            <MapPin className="w-6 h-6 mr-3" aria-hidden="true" />
            <span>Libreville, Gabon 🇬🇦</span>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="https://customer-assets.emergentagent.com/job_company-web-deploy/artifacts/2c1howqw_85fd2c5e-d600-445f-b3dd-dc8606a27238.jpeg"
                alt="OKOUME CONNECT"
                className="h-16 w-auto mb-6 bg-white rounded px-3 py-2"
                width={64}
                height={64}
              />
              <p className="text-gray-400 leading-relaxed max-w-md text-lg">
                Votre partenaire gabonais de confiance pour l'intermédiation
                commerciale et financière.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xl mb-6 text-white uppercase">
                Navigation
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Avantages
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-6 text-white uppercase">
                Nos services
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Intermédiation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Conseil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Accompagnement
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#6CB947] transition-colors text-lg"
                  >
                    Apporteur d'Affaires
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-lg">
            © <span>{currentYear}</span> OKOUMÉ CONNECT. Tous droits réservés. |
            Entreprise Gabonaise 🇬🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
