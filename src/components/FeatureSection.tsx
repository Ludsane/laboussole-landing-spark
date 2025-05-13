
import { LayoutDashboard, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  number: number;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  icon: JSX.Element;
  image?: string;
  reverse?: boolean;
}

const Feature = ({ number, title, description, buttonText, buttonLink, icon, image, reverse }: FeatureProps) => {
  return (
    <div className={`feature-circle py-16 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-semibold">
            {number}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
        {buttonText && (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            {icon}
            <span className="ml-2">{buttonText}</span>
          </Button>
        )}
      </div>
      <div className="md:w-1/2">
        {image && <img src={image || "/placeholder.svg"} alt={title} className="w-full max-w-sm mx-auto rounded-lg shadow-md" />}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <Feature 
          number={1}
          title="Paramétrage & Dashboard"
          description="Configurez les usages (sites, jeux, types de contenu) et la durée journalière. Contrôlez en un coup d'œil ce que votre enfant regarde. Suivi clair, contrôle ajusté."
          buttonText="Explorer le tableau de bord"
          buttonLink="#"
          icon={<LayoutDashboard className="w-4 h-4" />}
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        />
        
        <Feature 
          number={2}
          title="Chatbot interactif"
          description="Posez vos questions, recevez des conseils personnalisés et gratuits. Notre assistant est là pour vous orienter avec bienveillance. Des réponses claires, quand vous en avez besoin."
          buttonText="Discuter avec le chatbot"
          buttonLink="#"
          icon={<MessageCircle className="w-4 h-4" />}
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          reverse
        />
        
        <Feature 
          number={3}
          title="Alertes de contenus inappropriés"
          description="Recevez des alertes claires en valeur de fréquence et type de contenu problématique (suicide, violence, harcèlement...). 11 sujets de conseils pour accompagner votre enfant rapidement."
          buttonText="Voir comment ça marche"
          buttonLink="#"
          icon={<Bell className="w-4 h-4" />}
          image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
