
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <img
            src="/assets/H1 header.svg"
            alt="La Boussole - Application de contrôle parental"
            className="w-full"
          />
          <p className="text-gray-600 text-lg">
            Vous avez parfois l'impression de perdre le fil face aux usages numériques de votre enfant ?
          </p>
          <Button 
            className="bg-sky-500 hover:bg-sky-700 text-white rounded-full px-6 py-6 text-sm"
          >
            Reprenez le dessus avec La Boussole
          </Button>
        </div>
        <div className="">
          <img 
            src="/assets/enfant-jouant-ensemble.png"
            alt="Parent et enfant utilisant la technologie ensemble" 
            className="w-full max-w-md mx-auto absolute right-0 bottom-0 z-10"
          />
          <img 
            src="/assets/yellow.png"
            alt="Mockup de l'application La Boussole" 
            className="w-full max-w-md right-0 bottom-0 absolute z-1"
       
          />
        </div>
      </div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

export default HeroSection;
