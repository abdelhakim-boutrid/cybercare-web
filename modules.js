export const modulesData = [
  {
    id: "phishing",
    title: "Phishing & Emails",
    icon: "MailWarning",
    description: "Identifier les emails frauduleux ciblant l'hôpital.",
    lesson: `
      ## Le Phishing en milieu hospitalier
      
      Le phishing (hameçonnage) est la cause n°1 des cyberattaques. Les pirates se font passer pour des directeurs, des supports IT ou des organismes de santé.
      
      **Signes d'alerte :**
      * **Urgence :** "Votre compte expire dans 2h !"
      * **Expéditeur étrange :** support@hopita1-paris.com (notez le chiffre 1).
      * **Pièces jointes inattendues :** Factures ou rapports non sollicités.
      
      **Règle d'or :** En cas de doute, appelez l'expéditeur via le numéro interne, ne répondez jamais au mail.
    `,
    questions: [
      {
        question: "Vous recevez un email du 'Service IT' demandant votre mot de passe pour une mise à jour. Que faites-vous ?",
        options: ["Je le donne", "J'ignore", "Je signale au vrai service IT", "Je change mon mot de passe via le lien"],
        answer: 2,
        explanation: "Le support IT ne demandera JAMAIS votre mot de passe par email."
      },
      {
        question: "Quel élément indique souvent une tentative de phishing ?",
        options: ["Un ton calme", "Des fautes d'orthographe et un sentiment d'urgence", "Une signature officielle", "Un lien https"],
        answer: 1,
        explanation: "L'urgence vise à vous faire paniquer pour contourner votre réflexion."
      },
      {
        question: "Un lien semble suspect. Comment vérifier sa destination ?",
        options: ["Je clique dessus", "Je passe ma souris dessus sans cliquer", "Je le copie dans Google", "Je le transfère à un collègue"],
        answer: 1,
        explanation: "Le survol permet de voir l'URL réelle en bas du navigateur."
      },
      {
        question: "Le phishing cible uniquement les emails ?",
        options: ["Vrai", "Faux"],
        answer: 1,
        explanation: "Non, cela peut aussi se faire par téléphone (vishing) ou SMS."
      },
      {
        question: "Une pièce jointe nommée 'facture_urgente.exe' est-elle sûre ?",
        options: ["Oui", "Non, c'est probablement un virus", "Seulement si elle vient du directeur", "Je l'ouvre sur mon téléphone"],
        answer: 1,
        explanation: "Les extensions .exe, .bat, .scr sont des exécutables souvent malveillants."
      }
    ]
  },
  {
    id: "smishing",
    title: "SMS & Smishing",
    icon: "MessageSquareWarning",
    description: "Les arnaques par SMS sur les téléphones professionnels.",
    lesson: `
      ## Le Smishing (SMS Phishing)
      
      Les attaquants utilisent les SMS car nous sommes moins méfiants sur mobile.
      
      **Exemples courants :**
      * "Colis en attente de livraison" (alors que vous n'attendez rien).
      * "Compte CPF : vos droits expirent".
      * "Code de validation demandé" par un tiers.
      
      **Action :** Ne cliquez jamais sur les liens raccourcis (bit.ly, tinyurl) reçus par SMS d'inconnus.
    `,
    questions: [
      {
        question: "Qu'est-ce que le Smishing ?",
        options: ["Un virus sur PC", "Du phishing par SMS", "Une panne réseau", "Un logiciel médical"],
        answer: 1,
        explanation: "C'est la contraction de SMS et Phishing."
      },
      {
        question: "Un SMS vous demande de confirmer un code reçu pour valider un compte WhatsApp. Vous n'avez rien demandé.",
        options: ["Je renvoie le code", "Je supprime le message", "Je réponds STOP", "J'appelle le numéro"],
        answer: 1,
        explanation: "C'est une tentative de vol de compte. Ne partagez jamais vos codes."
      },
      {
        question: "Les téléphones professionnels de l'hôpital sont-ils immunisés ?",
        options: ["Oui, ils sont sécurisés", "Non, l'utilisateur reste la faille", "Oui, Apple/Google protègent tout", "Seulement si le wifi est coupé"],
        answer: 1,
        explanation: "La sécurité technique ne protège pas contre une erreur humaine (clic sur un lien)."
      },
      {
        question: "Un SMS indique 'URGENT: Rappel planning garde'. Le lien est bizarre.",
        options: ["Je clique", "Je vérifie mon planning sur le logiciel officiel", "Je transfère le SMS", "J'éteins le téléphone"],
        answer: 1,
        explanation: "Passez toujours par les canaux officiels connus (logiciel RH/Planning)."
      },
      {
        question: "Le smishing peut-il installer des logiciels espions ?",
        options: ["Oui, via des liens malveillants", "Non, impossible sur mobile", "Seulement sur Android", "Seulement sur iPhone"],
        answer: 0,
        explanation: "Oui, cliquer sur un lien peut télécharger un malware."
      }
    ]
  },
  {
    id: "passwords",
    title: "Mots de passe",
    icon: "LockKeyhole",
    description: "Créer et gérer des mots de passe robustes.",
    lesson: `
      ## Hygiène des mots de passe
      
      Le mot de passe est la clé de la chambre forte des données patients.
      
      **Bonnes pratiques :**
      * **Longueur :** Minimum 12 caractères.
      * **Complexité :** Majuscules, minuscules, chiffres, symboles.
      * **Unicité :** Jamais le même mot de passe pour le pro et le perso.
      * **Méthode :** Utilisez une phrase secrète (ex: "J'aimeMangerDesPommesA14h!") ou un gestionnaire de mots de passe.
    `,
    questions: [
      {
        question: "Quelle est la meilleure méthode pour un mot de passe fort ?",
        options: ["Date de naissance", "Nom de l'hôpital", "123456", "Une phrase longue et complexe"],
        answer: 3,
        explanation: "La longueur est le facteur le plus critique contre les attaques par force brute."
      },
      {
        question: "Où noter ses mots de passe ?",
        options: ["Sur un post-it sous le clavier", "Dans un carnet dans le tiroir", "Dans un gestionnaire de mots de passe sécurisé", "Dans un fichier Word"],
        answer: 2,
        explanation: "Un gestionnaire (KeePass, Bitwarden) est la seule solution sécurisée."
      },
      {
        question: "À quelle fréquence changer de mot de passe ?",
        options: ["Tous les jours", "En cas de suspicion de compromission ou demande du système", "Jamais", "Tous les 5 ans"],
        answer: 1,
        explanation: "Le changement forcé trop fréquent encourage les mots de passe faibles. Changez-le s'il y a un doute."
      },
      {
        question: "Puis-je utiliser le même mot de passe pour Facebook et mon mail pro ?",
        options: ["Oui, c'est plus simple", "Non, jamais", "Seulement si le mot de passe est fort", "Oui si je change une lettre"],
        answer: 1,
        explanation: "Si Facebook est piraté, les hackers tenteront ce mot de passe sur votre mail pro."
      },
      {
        question: "Que faire si je vois un collègue taper son mot de passe ?",
        options: ["Je le retiens", "Je regarde ailleurs", "Je le note", "Je lui dis"],
        answer: 1,
        explanation: "Respectez la confidentialité et l'intimité numérique."
      }
    ]
  },
  {
    id: "files",
    title: "Fichiers suspects",
    icon: "FileWarning",
    description: "Gérer les pièces jointes et clés USB.",
    lesson: `
      ## Supports amovibles et fichiers
      
      Les clés USB trouvées ou personnelles sont un vecteur majeur d'infection dans les hôpitaux.
      
      **Règles :**
      * Ne branchez **JAMAIS** une clé USB inconnue (trouvée sur le parking, en salle d'attente).
      * N'utilisez pas votre clé USB personnelle pour transférer des dossiers patients.
      * Méfiez-vous des fichiers à double extension (ex: rapport.pdf.exe).
    `,
    questions: [
      {
        question: "Vous trouvez une clé USB 'Salaires 2024' sur le parking. Que faites-vous ?",
        options: ["Je regarde ce qu'il y a dessus", "Je la donne au service IT sans la brancher", "Je la jette", "Je cherche le propriétaire en l'ouvrant"],
        answer: 1,
        explanation: "C'est une technique classique ('USB Drop'). La clé contient un virus qui s'active au branchement."
      },
      {
        question: "Puis-je charger mon téléphone sur le port USB de l'ordinateur de l'hôpital ?",
        options: ["Oui, pas de souci", "Non, cela peut transmettre des données", "Oui, si c'est un iPhone", "Oui, si l'ordi est verrouillé"],
        answer: 1,
        explanation: "Le téléphone est vu comme un disque dur. Il peut transmettre des malwares au réseau hospitalier."
      },
      {
        question: "Quelle extension de fichier est généralement sûre (statique) ?",
        options: [".exe", ".txt", ".bat", ".js"],
        answer: 1,
        explanation: ".txt est du texte brut. Les autres sont des scripts ou programmes."
      },
      {
        question: "Comment transférer un fichier lourd de manière sécurisée ?",
        options: ["WeTransfer gratuit", "Clé USB perso", "Outil validé par l'hôpital", "Mail perso"],
        answer: 2,
        explanation: "Utilisez uniquement les outils approuvés pour garantir la confidentialité des données de santé (HDS)."
      },
      {
        question: "Un fichier Word demande d'activer les 'Macros' pour être lu.",
        options: ["J'active", "Je refuse et je signale", "J'essaie sur un autre PC", "Je demande à un collègue"],
        answer: 1,
        explanation: "Les macros sont souvent utilisées pour télécharger des virus (Emotet, etc.)."
      }
    ]
  },
  {
    id: "ransomware",
    title: "Ransomware",
    icon: "ShieldAlert",
    description: "Réagir face à une demande de rançon.",
    lesson: `
      ## Le Ransomware (Rançongiciel)
      
      Un logiciel malveillant chiffre (bloque) toutes les données de l'hôpital et demande une rançon pour les débloquer. Cela paralyse les urgences et les blocs opératoires.
      
      **Que faire si mon écran affiche une demande de rançon ?**
      1.  **Débranchez** immédiatement le câble réseau (ou coupez le Wi-Fi).
      2.  **N'éteignez pas** l'ordinateur (la mémoire vive contient des preuves).
      3.  **Alertez** immédiatement le service informatique.
      4.  **Ne payez jamais** la rançon.
    `,
    questions: [
      {
        question: "Que fait un ransomware ?",
        options: ["Il vole l'écran", "Il chiffre les données et demande de l'argent", "Il ralentit internet", "Il envoie des pubs"],
        answer: 1,
        explanation: "Il rend les fichiers illisibles sans la clé de déchiffrement."
      },
      {
        question: "Premier réflexe en cas d'infection visible ?",
        options: ["Payer", "Pleurer", "Déconnecter du réseau (câble/wifi)", "Redémarrer"],
        answer: 2,
        explanation: "Il faut empêcher le virus de se propager aux autres ordinateurs de l'hôpital."
      },
      {
        question: "Pourquoi ne faut-il pas éteindre le PC ?",
        options: ["Pour finir son travail", "Pour laisser l'antivirus travailler", "Pour conserver les traces en mémoire vive", "Pour que l'écran reste allumé"],
        answer: 2,
        explanation: "Les experts en cybersécurité peuvent parfois récupérer la clé de déchiffrement dans la RAM."
      },
      {
        question: "Faut-il payer la rançon ?",
        options: ["Oui, pour aller vite", "Non, jamais", "Seulement si c'est pas cher", "Oui, si l'assurance rembourse"],
        answer: 1,
        explanation: "Payer finance le crime et ne garantit pas la récupération des données."
      },
      {
        question: "Qui prévenir en priorité ?",
        options: ["La police", "Le service IT / SSI", "Les patients", "La presse"],
        answer: 1,
        explanation: "Le service informatique doit isoler l'incident au plus vite."
      }
    ]
  }
];