
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Mieux comprendre.<br />
            Mieux accompagner.<br />
            <span className="relative">
              Moins de <span className="text-green-600">conflits</span>
              <span className="absolute w-full h-2 bg-green-200 opacity-40 bottom-1 left-0 -z-10"></span>
            </span>.
          </h1>
          <p className="text-gray-600 text-lg">
            Vous avez parfois l'impression de perdre le fil face aux usages numériques de votre enfant ?
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-6 text-sm"
          >
            Découvrir la console avec La Boussole
          </Button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Parent et enfant utilisant la technologie ensemble" 
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

export default HeroSection;
