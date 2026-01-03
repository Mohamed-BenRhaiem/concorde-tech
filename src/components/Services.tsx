import {
  Clock,
  TrendingUp,
  Fuel,
  Wrench,
  DollarSign,
  FileText,
} from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Gestion de Pointage',
    description:
      'Système complet de suivi du temps et des présences avec rapports automatisés et intégration biométrique.',
    link: 'https://www.youtube.com/watch?v=psqRdxOj0uA&t=16s',
  },
  {
    icon: TrendingUp,
    title: 'Gestion Commerciale',
    description:
      'Solution ERP pour gérer vos ventes, achats, stocks et relations clients avec tableaux de bord en temps réel.',
    link: 'https://www.youtube.com/watch?v=wkcorV-0gcU',
  },
  {
    icon: Fuel,
    title: "Gestion de Stations d'Essence",
    description:
      'Pilotage des stocks de carburant, suivi des transactions et gestion des pompes en temps réel.',
    link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
  },
  {
    icon: Wrench,
    title: 'GMAO',
    description:
      'Gestion de la maintenance assistée par ordinateur pour planifier, suivre et optimiser vos interventions.',
    link: 'https://www.youtube.com/watch?v=VIDEO_ID_4',
  },
  {
    icon: DollarSign,
    title: 'Gestion de Paie',
    description:
      'Automatisation des calculs de salaires, cotisations sociales et génération des bulletins de paie conformes.',
    link: 'https://www.youtube.com/watch?v=ZoZk7yHiZjY&t=18s',
  },
  {
    icon: FileText,
    title: 'Reporting & Analytics',
    description:
      'Tableaux de bord personnalisés et rapports détaillés pour piloter votre activité en toute transparence.',
    link: 'https://www.youtube.com/watch?v=VIDEO_ID_6',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos Modules
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Des solutions métiers complètes pour digitaliser et optimiser votre gestion d'entreprise
          </p>
        </div>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700
                         hover:border-cyan-500/50 hover:-translate-y-1 transition-all
                         hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* ICON */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-cyan-500/10 mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <service.icon size={28} className="text-cyan-400" />
              </div>

              {/* TITRE */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
