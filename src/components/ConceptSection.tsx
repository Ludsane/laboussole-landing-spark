
const ConceptSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3">
          <img 
            src="/placeholder.svg" 
            alt="Child with digital device" 
            className="w-full max-w-sm mx-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            L'écran est partout. Plutôt que de le subir, nous vous aidons à en faire un allié.
          </h2>
          <p className="text-gray-600">
            Ici, pas de jugement ni de panique. Juste des outils conçus pour :
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span> 
              <span>Vous aider au quotidien.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Être alerté quand c'est nécessaire.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Développer de meilleures habitudes numériques.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
