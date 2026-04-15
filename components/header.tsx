import Image from "next/image";
import Link from "next/link";
// import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Image
                src="https://customer-assets.emergentagent.com/job_company-web-deploy/artifacts/2c1howqw_85fd2c5e-d600-445f-b3dd-dc8606a27238.jpeg"
                alt="OKOUME CONNECT"
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#who-are-we"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Qui sommes-nous ?
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#advantages"
              className="text-gray-700 hover:text-[#0078D4] transition-colors font-medium"
            >
              Avantages
            </Link>
            <Button variant="green-cta" size="green-cta">
              Nous contacter
            </Button>

            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
