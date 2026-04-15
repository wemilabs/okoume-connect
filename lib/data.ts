import {
  Award,
  CircleCheckBig,
  Lightbulb,
  type LucideIcon,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

type ServiceItem = {
  id: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  imageAlt: string;
  imageSrc: string;
  title: string;
  description: string;
  features: ReadonlyArray<string>;
};

type AdvantageItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type WhoWeAreHighlightItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClassName: string;
};

type WhoWeAreFocusItem = {
  id: string;
  badgeClassName: string;
  borderClassName: string;
  description: string;
  headline: string;
  imageAlt: string;
  imageSrc: string;
  overlayClassName: string;
  title: string;
};

type ContactCardItem = {
  id: string;
  icon: LucideIcon;
  iconBackgroundClassName: string;
  iconColorClassName: string;
  title: string;
  value: string;
  hoverBorderClassName: string;
};

export const services: ReadonlyArray<ServiceItem> = [
  {
    id: "intermediation-commerciale-financiere",
    icon: Network,
    imageAlt: "Service 1",
    imageSrc:
      "https://images.pexels.com/photos/5466271/pexels-photo-5466271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Intermédiation Commerciale et Financière",
    description:
      "Facilitation des relations entre entreprises et identification des bons partenaires",
    features: [
      "Ouverture de nouveaux marchés",
      "Structuration de dossiers financiers",
      "Connexions stratégiques",
    ],
  },
  {
    id: "conseils-accompagnement",
    icon: Target,
    imageAlt: "Service 2",
    imageSrc:
      "https://images.unsplash.com/photo-1640531005376-4bd5aacd57c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85",
    title: "Conseils & Accompagnement",
    description:
      "Appui stratégique et opérationnel pour structurer votre activité",
    features: [
      "Conseil stratégique",
      "Accompagnement opérationnel",
      "Optimisation des performances",
    ],
  },
  {
    id: "apporteur-affaires",
    icon: TrendingUp,
    imageAlt: "Service 3",
    imageSrc:
      "https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85",
    title: "Apporteur d'Affaires",
    description:
      "Détection d'opportunités qualifiées et mise en relation des acteurs",
    features: [
      "Opportunités qualifiées",
      "Mise en relation pertinente",
      "Création de valeur",
    ],
  },
];

export const advantages: ReadonlyArray<AdvantageItem> = [
  {
    id: "clients-qualifies",
    icon: CircleCheckBig,
    title: "Clients Qualifiés",
    description:
      "Des clients motivés, informés et préparés. Pas de perte de temps, uniquement des dossiers sérieux.",
  },

  {
    id: "connaissance-terrain",
    icon: MapPin,
    title: "Connaissance du Terrain",
    description:
      "Maîtrise parfaite des réalités locales gabonaises et des besoins des PME, TPE et institutions.",
  },
  {
    id: "accompagnement-complet",
    icon: Users,
    title: "Accompagnement Complet",
    description:
      "Préparation, sécurisation et suivi du dossier. Pas qu'une simple mise en contact.",
  },
  {
    id: "solutions-financement",
    icon: Sparkles,
    title: "Solutions de Financement",
    description:
      "Soutien en cas de difficultés de trésorerie avec des pistes de financement adaptées.",
  },
  {
    id: "approche-professionnelle",
    icon: Shield,
    title: "Approche Professionnelle",
    description:
      "Neutre, transparente et efficace. Connexion solide sans promesses irréalistes.",
  },
  {
    id: "valeur-ajoutee-mutuelle",
    icon: Award,
    title: "Valeur Ajoutée Mutuelle",
    description:
      "Bénéfices concrets pour clients et partenaires : opportunités, accompagnement et résultats.",
  },
];

export const whoWeAreHighlights: ReadonlyArray<WhoWeAreHighlightItem> = [
  {
    id: "connexion",
    icon: Network,
    title: "connexion",
    description: "Créer des liens stratégiques et ciblés",
    gradientClassName: "bg-linear-to-br from-[#0078D4] to-[#0066b8]",
  },
  {
    id: "clarte",
    icon: Lightbulb,
    title: "clarté",
    description: "Fournir des solutions claires et structurées",
    gradientClassName: "bg-linear-to-br from-[#6CB947] to-[#5da839]",
  },
  {
    id: "performance",
    icon: TrendingUp,
    title: "performance",
    description: "Optimiser vos résultats et succès",
    gradientClassName: "bg-linear-to-br from-[#0078D4] to-[#0066b8]",
  },
];

export const whoWeAreFocusCards: ReadonlyArray<WhoWeAreFocusItem> = [
  {
    id: "mission",
    badgeClassName: "bg-[#0078D4]",
    borderClassName: "border-[#0078D4]",
    description:
      "Connecter les besoins aux solutions en facilitant l'accès aux bons partenaires et opportunités.",
    headline: "Réduire la distance entre l'intention et la réalisation",
    imageAlt: "Notre Mission",
    imageSrc:
      "https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85",
    overlayClassName: "bg-[#0078D4]/20",
    title: "notre mission",
  },
  {
    id: "vision",
    badgeClassName: "bg-[#6CB947]",
    borderClassName: "border-[#6CB947]",
    description:
      "Pour la mise en relation professionnelle et la facilitation des démarches commerciales et financières.",
    headline: "Devenir l'acteur de référence au Gabon 🇬🇦",
    imageAlt: "Notre Vision",
    imageSrc:
      "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTc3NDAzMjE5Nnww&ixlib=rb-4.1.0&q=85",
    overlayClassName: "bg-[#6CB947]/20",
    title: "notre vision",
  },
];

export const contactCards: ReadonlyArray<ContactCardItem> = [
  {
    id: "email",
    icon: Mail,
    iconBackgroundClassName: "bg-[#0078D4]/10",
    iconColorClassName: "text-[#0078D4]",
    title: "Email",
    value: "contact@okoumeconnect.ga",
    hoverBorderClassName: "hover:border-[#0078D4]",
  },
  {
    id: "telephone",
    icon: Phone,
    iconBackgroundClassName: "bg-[#6CB947]/10",
    iconColorClassName: "text-[#6CB947]",
    title: "Téléphone",
    value: "+241 76 51 51 94",
    hoverBorderClassName: "hover:border-[#6CB947]",
  },
  {
    id: "localisation",
    icon: MapPin,
    iconBackgroundClassName: "bg-[#0078D4]/10",
    iconColorClassName: "text-[#0078D4]",
    title: "Localisation",
    value: "Libreville, Gabon",
    hoverBorderClassName: "hover:border-[#0078D4]",
  },
];
