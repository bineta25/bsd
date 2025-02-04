{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function redirigerWhatsApp(nomProduit, prix) \{\
    const message = `Bonjour, je suis int\'e9ress\'e9(e) par le produit suivant : $\{nomProduit\} ($\{prix\}\'80). Pouvez-vous m'aider \'e0 finaliser ma commande ?`;\
    const numeroWhatsApp = "221706429780"; // Remplace par ton num\'e9ro de t\'e9l\'e9phone\
    const urlWhatsApp = `https://wa.me/$\{numeroWhatsApp\}?text=$\{encodeURIComponent(message)\}`;\
    window.open(urlWhatsApp, '_blank');\
\}}