import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  currency?: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "premium" | "secondary";
  isHighlighted?: boolean;
  promotion?: string;
}

const PricingCard = ({ 
  title, 
  price, 
  currency = "€", 
  features, 
  buttonText, 
  buttonVariant = "default",
  promotion,
  isHighlighted = false 
}: PricingCardProps) => {
  const getButtonClass = () => {
    switch (buttonVariant) {
      case "outline":
        return "bg-transparent text-sky-500 border border-sky-500 hover:bg-blue-50";
      case "premium":
        return "bg-sky-500 text-white hover:bg-sky-700";
      case "secondary":
        return "bg-green-600 text-white hover:bg-green-700";
      default:
        return "bg-sky-500 text-white hover:bg-sky-700";
    }
  };

  return (
    <div className={`rounded-xl p-6 ${isHighlighted ? 'bg-green-100 border-2 border-green-200' : 'bg-white border border-gray-200'}`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mt-4 flex justify-center items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          <span className="ml-1 text-xl text-gray-500">{currency}</span>
        </div>
      </div>

      {promotion && (
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">{promotion}</span>
        </div>
      )}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={`w-full rounded-full ${getButtonClass()}`}>
        {buttonText}
      </Button>
    </div>
  );
};

const PricingSection = () => {

const [isYearly, setIsYearly] = useState(false);

const freePrice = "0";
const premiumPrice = isYearly ? "60" : "6";
const solidarityPrice = isYearly ? "20" : "2,5";

const toggleBilling = () => {
  setIsYearly(!isYearly);
};

  return (
  <section className="py-20 px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Un modèle simple, juste et accessible à tous !</h2>

        <div className="inline-flex items-center space-x-4 mb-10">
          <span className={`text-gray-600 cursor-pointer ${!isYearly ? 'font-semibold text-sky-600' : ''}`} onClick={() => setIsYearly(false)}>Par mois</span>
          <button
            onClick={toggleBilling}
            className="relative inline-flex items-center h-6 rounded-full w-12 bg-gray-300 focus:outline-none"
          >
            <span
              className={`transform transition-transform duration-200 inline-block w-6 h-6 rounded-full bg-white shadow ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
          <span className={`text-gray-600 cursor-pointer ${isYearly ? 'font-semibold text-sky-600' : ''}`} onClick={() => setIsYearly(true)}>Par an</span>
        </div>
      </div>


      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <PricingCard 
          title="Version gratuite" 
          price={freePrice}
          features={[
            "Suivi du temps d'écran et des contenus regardés",
            "3 questions par semaine au chatbot",
            "Alertes des contenus inappropriés en fin de journée"
          ]}
          buttonText="Essayer gratuitement"
          buttonVariant="outline"
        />

        <PricingCard 
          title="Version Premium" 
          price={premiumPrice}
          promotion="Economisez 12€ avec l'abonnement annuel !"
          features={[
            "Dashboard avancé",
            "Chatbot illimité",
            "Alertes contenus inappropriés en temps réel"
          ]}
          buttonText="Essayez 30 jours"
          buttonVariant="premium"
          isHighlighted
        />

        <PricingCard 
          title="Offre Solidaire" 
          price={solidarityPrice}
          features={[
            "Un accès complet à prix réduit pour les familles aux revenus modestes",
            "Car protéger ses enfants ne devrait jamais être une question de moyens"
          ]}
          buttonText="Découvrir l'offre solidaire"
          buttonVariant="secondary"
        />
      </div>
    </section>
  );
};

export default PricingSection;
