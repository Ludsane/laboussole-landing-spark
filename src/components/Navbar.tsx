
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-10 lg:px-16 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary font-bold text-xl flex items-center">
          <img src="/assets/logo.svg" alt="Logo" className="h-8 mr-2" />
        </Link>
        
        <nav className="hidden md:flex space-x-6 text-m">
          <Link to="#" className="text-gray-600 hover:text-sky-500">Télécharger l'application</Link>
          <Link to="#" className="text-gray-600 hover:text-sky-500">Blog</Link>
          <Link to="#" className="text-gray-600 hover:text-sky-500">Qui sommes-nous ?</Link>
        </nav>
        
        <Button className="bg-sky-500 hover:bg-sky-700 text-white rounded-full px-5">
          Se connecter
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
