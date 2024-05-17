"# PokeBrawl" 
PokeBrawl est une application codée en React

Le but de l'application est de pouvoir combattre des pokemons mais en tant que dresseur cette fois-ci.

Ordre du dev et features :

Intégrer la font

Accueil :
    Créer un composant Titre et un composant header
        header prends en props {trigger} qui determinera si il y aura une flèche retour dans le composant
        Titre prendra en props {taille et Texte}

    Intégrer la vidéo
        lui mettre les paramètres autoplaymute
        et la faire jouer en boucle

    Créer un composant bouton
        prendra en props { Texte } qui sera le contenu du bouton

    Intégrer l'image du dresseur en arrière plan

    Et préparer les zones de texte pour les stats du profil

Faire un composant navigation qui prends en props le contenu affiché, et la destination {contenu, destination}

Création profil:
    Mettre un composant header en trigger true
    Mettre le texte
    Faire un composant pour l'input du nom de profil
    Mettre un composant bouton
    Intégrer l'image du professeur chen

Créer un composant permettant de stocker les données du profil

Créer un autre composant pour changer un texte si le profil est définit

Combat :
    Créer un composant pour afficher les stats (pv, dps) du profil et celle du pokemon actuel

    Créer un composant pour afficher les potions

    Intégrer deux boutons
    Créer un composant pour gérer l'attaque (retrait pv du pokemon)
    Créer un composant pour gérer les soins 
    (ajout de 10pv au joueur)


    Créer un composant Partie
        si les pv du pokemon OU ceux du joueur tombent à zéro alors on navigue sur l'écran succès

Succès :
    Intégrer composant Titre
    Intégrer Image Coffre
    Créer composant pour incrémenter le nombre de pokemons battus
    Créer un composant pour afficher les gains du combat qui prendra en props les pv Initiaux du pokemon et calculera le gain d'xp en fonction
    les pc seront générés aléatoirement
    Intégrer un bouton pour retourner à l'accueil