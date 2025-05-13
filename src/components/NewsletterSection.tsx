
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    // Add subscription logic here
    setEmail("");
  };

  return (
    <section className="newsletter-bg py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="text-yellow-500 text-4xl">✨</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Restez informé·e des actus et nouveautés !
        </h2>
        <p className="text-gray-600 mb-8">
          Recevez les dernières infos sur notre app, nos conseils et nos prochaines fonctionnalités.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Entrez votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-4 py-6"
            required
          />
          <Button type="submit" className="bg-sky-500 hover:bg-sky-700 text-white rounded-full px-6">
            S'abonner
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
