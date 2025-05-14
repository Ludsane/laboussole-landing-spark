
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
          title="Mieux comprendre pour mieux accompagner"
          description="Vous voulez savoir ce qui capte vraiment l’attention de vos enfants sans avoir à espionner ni à tout interdire ?"
          description2="On vous aide à y voir plus clair, à votre rythme, sans stress."
          description3="👉 Suivi clair, contrôle ajusté."
          buttonText="Explorer le tableau de bord"
          buttonLink="#"
          icon={<LayoutDashboard className="w-4 h-4" />}
          image="/assets/mere-enfant.png"
        />
        
        <Feature 
          number={2}
          title="Des réponses, quand vous en avez besoin"
          description="Vous vous demandez &quot;C’est grave s’il regarde ça ?&quot;, &quot;Je réagis comment ?&quot;, &quot;Par où commencer ?&quot;"
          description2="On est là pour vous guider avec des conseils simples et adaptés à votre quotidien."
          description3="👉 Des réponses claires, quand vous en avez besoin."
          buttonText="Discuter avec le chatbot"
          buttonLink="#"
          icon={<MessageCircle className="w-4 h-4" />}
          image="/assets/mock2.png"
          reverse
        />
        
        <Feature 
          number={3}
          title="Être alerté quand ça compte"
          description="Et si vous pouviez être prévenu dès qu’un contenu pose vraiment problème ?"
          description2="Pour protéger, en comprenant."
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
