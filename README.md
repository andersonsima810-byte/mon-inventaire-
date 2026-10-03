# GymPilot
SaaS de gestion pour salles de sport.

## Modules
- Tableau de bord
- Membres
- Abonnements configurables
- Présences
- Paiements / recettes
- Alertes d'expiration
- Journal d'activité
- Console plateforme
- Suspension des comptes
- Support administrateur séparé du journal opérationnel

## Sécurité
Les données GymPilot utilisent des tables tenant-aware et RLS. Les actions de support plateforme sont conservées dans un audit interne séparé du journal opérationnel client.

## Déploiement
Configurer NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY dans l'environnement Vercel.
