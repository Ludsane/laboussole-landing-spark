
import { LayoutDashboard, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  number: number;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  buttonText?: string;
  buttonLink?: string;
  icon: JSX.Element;
  image?: string;
  reverse?: boolean;
}

const Feature = ({ number, title, description, description2, description3, buttonText, buttonLink, icon, image, reverse }: FeatureProps) => {
  return (
    <div className={`feature-circle flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-semibold">
            {number}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
        {description2 && <p className="text-gray-600">{description2}</p>}
        {description3 && <p className="text-gray-600 font-bold">{description3}</p>}
        {buttonText && (
          <Button className="bg-sky-500 hover:bg-sky-700 text-white rounded-full">
            {icon}
            <span className="ml-2">{buttonText}</span>
          </Button>
        )}
      </div>
      <div className="md:w-1/2">
        {image && <img src={image || "/placeholder.svg"} alt={title} className="w-xl" />}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-10 px-6  ">
      <div className="max-w-7xl mx-auto ">
        <Feature 
          number={1}
          title="Paramétrage & Dashboard"
          description="Configurez les usages selon l’âge, le type de contenu, et la durée souhaitée."
          description2="Consultez en un coup d’œil ce que votre enfant regarde."
          description3="👉 Suivi clair, contrôle ajusté."
          buttonText="Explorer le tableau de bord"
          buttonLink="#"
          icon={<LayoutDashboard className="w-4 h-4" />}
          image="/assets/mock1.png"
        />
        
        <Feature 
          number={2}
          title="Chatbot interactif"
          description="Posez vos question, recevez des conseils personnalisés et guidés."
          description2="Notre assistant est là pour vous orienter avec bienveillance."
          description3="👉 Des réponses claires, quand vous en avez besoin."
          buttonText="Discuter avec le chatbot"
          buttonLink="#"
          icon={<MessageCircle className="w-4 h-4" />}
          image="/assets/mock2.png"
          reverse
        />
        
        <Feature 
          number={3}
          title="Alertes de contenus inappropriés"
          description="Recevez des alertes (dans un délai de 5 minutes) si un contenu problématique est visionné : violence, désinformation, etc."
          description2="Et suivez les conseils pour accompagner votre enfant après coup."
          description3="👉 Agir au bon moment, sans stress."
          buttonText="Voir comment ça marche"
          buttonLink="#"
          icon={<Bell className="w-4 h-4" />}
          image="/assets/garcon-adorable.png"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
