import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Équipe d’Experts',
    description: 'Des développeurs qualifiés avec des années d’expérience dans les technologies web modernes',
  },
  {
    icon: Award,
    title: 'Qualité Garantie',
    description: 'Engagés à fournir des solutions de haute qualité qui dépassent les attentes',
  },
  {
    icon: Zap,
    title: 'Livraison Rapide',
    description: 'Un processus de développement agile garantissant une réalisation dans les délais',
  },
];

const values = [
  'Code propre et maintenable',
  'Design responsive et accessible',
  'Bonnes pratiques de sécurité',
  'Architecture évolutive',
  'Support & maintenance continue',
  'Communication claire',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            À propos de Concorde.Tech
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Nous sommes une équipe passionnée de développeurs dédiée à créer des expériences web exceptionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Pourquoi Nous Choisir</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Chez Concorde.Tech, nous combinons expertise technique et innovation créative pour livrer
              des solutions web performantes. Notre équipe reste à la pointe des tendances technologiques
              afin de garantir que votre projet exploite les meilleurs outils et pratiques disponibles.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10">
                      <feature.icon size={24} className="text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Ce Que Nous Livrons</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Chaque projet que nous réalisons repose sur la qualité, la performance et
              l’expérience utilisateur. Voici ce que vous pouvez attendre en travaillant avec nous :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
