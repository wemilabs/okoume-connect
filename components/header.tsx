import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Image
              src="https://customer-assets.emergentagent.com/job_company-web-deploy/artifacts/2c1howqw_85fd2c5e-d600-445f-b3dd-dc8606a27238.jpeg"
              alt="OKOUME CONNECT"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Avantages
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-4 py-2 bg-[#6CB947] hover:bg-[#5da839] text-white"
              type="button"
            >
              Nous contacter
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
