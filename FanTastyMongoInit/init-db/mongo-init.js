db.auth('admin', 'admin');

db = db.getSiblingDB('FanTastyDB')

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [{ role: 'dbAdmin', db: 'FanTastyDB' }]
});

db.createCollection('Recettes');
db.createCollection('Ingredients');
db.createCollection('Utilisateurs');

nouille_id = ObjectId()
porcChashu_id = ObjectId()
oeufMollet_id = ObjectId()
pateMiso_id = ObjectId()
pousseDeBambou_id = ObjectId()
bouillonPorc_id = ObjectId()
huileSesame_id = ObjectId()
algueNori_id = ObjectId()
oignonFrais_id = ObjectId()
narutomaki_id = ObjectId()
farine_id = ObjectId()
lait_id = ObjectId()
sel_id = ObjectId()
sucre_id = ObjectId()
beurre_id = ObjectId()
sucreRoux_id = ObjectId()
cremeEpaisse_id = ObjectId()
extraitVanille_id = ObjectId()
biere_id = ObjectId()
oeuf_id = ObjectId()
poivre_id = ObjectId()
sauceSriracha_id = ObjectId()
pimentRouge_id = ObjectId()
confitDOrange_id = ObjectId()
coteDePorc_id = ObjectId()
cremeFouettee_id = ObjectId()
colorantAlimentaireBleu_id = ObjectId()
chocolatBlanc_id = ObjectId()
lait_id = ObjectId()
vanille_id = ObjectId()
beurreDeCacahouete_id = ObjectId()
chocolatDeCouverture_id = ObjectId()
pomme_id = ObjectId()
celeri_id = ObjectId()
bettes_id = ObjectId()
feculeDePommeDeTerreKatakuriko_id = ObjectId()
ail_id = ObjectId()
gingembre_id = ObjectId()
sake_id = ObjectId()
cuisseDePoulet_id = ObjectId()
eau_id = ObjectId()
huileVegetale_id = ObjectId()
carotte_id = ObjectId()
mirin_id = ObjectId()
dashiLiquide_id = ObjectId()
edamame_id = ObjectId()
tofuFritAburaage_id = ObjectId()
konnyaku_id = ObjectId()
tofuFritAburaage_id = ObjectId()
algueHijikiSechee_id = ObjectId()
sauceSoja_id = ObjectId()
katsuobushi_id = ObjectId()
rizJaponais_id = ObjectId()

db.Utilisateurs.insertMany([
    {
        "nom": "adminNom",
        "prenom": "adminPrenom",
        "email": "admin@admin.com",
        "motDePasse": "123",
    },
    {
        "nom": "utilisateurNom",
        "prenom": "utilisateurPrenom",
        "email": "utilisateur@utilisateur.com",
        "motDePasse": "123",
    }
])

db.Ingredients.insertMany([
    {
        "_id": nouille_id,
        "nom": "nouilles",
        "image": "http://img.url"
    },
    {
        "_id": porcChashu_id,
        "nom": "porc chashu",
        "image": "http://img.url"
    },
    {
        "_id": oeufMollet_id,
        "nom": "oeuf mollet",
        "image": "http://img.url"
    },
    {
        "_id": pateMiso_id,
        "nom": "pâte miso",
        "image": "http://img.url"
    },
    {
        "_id": pousseDeBambou_id,
        "nom": "pousses de bambou",
        "image": "http://img.url"
    },
    {
        "_id": bouillonPorc_id,
        "nom": "bouillon de porc",
        "image": "http://img.url"
    },
    {
        "_id": huileSesame_id,
        "nom": "huile de sesame",
        "image": "http://img.url"
    },
    {
        "_id": algueNori_id,
        "nom": "algues nori",
        "image": "http://img.url"
    },
    {
        "_id": oignonFrais_id,
        "nom": "oignon frais",
        "image": "http://img.url"
    },
    {
        "_id": narutomaki_id,
        "nom": "narutomaki",
        "image": "http://img.url"
    },
    {
        "_id": farine_id,
        "nom": "farine",
        "image": "http://img.url"
    },
    {
        "_id": lait_id,
        "nom": "lait",
        "image": "http://img.url"
    },
    {
        "_id": sel_id,
        "nom": "sel",
        "image": "http://img.url"
    },
    {
        "_id": sucre_id,
        "nom": "sucre",
        "image": "http://img.url"
    },
    {
        "_id": beurre_id,
        "nom": "beurre",
        "image": "http://img.url"
    },
    {
        "_id": sucreRoux_id,
        "nom": "sucre roux",
        "image": "http://img.url"
    },
    {
        "_id": cremeEpaisse_id,
        "nom": "crème épaisse",
        "image": "http://img.url"
    },
    {
        "_id": extraitVanille_id,
        "nom": "extrait de vanille",
        "image": "http://img.url"
    },
    {
        "_id": biere_id,
        "nom": "bière",
        "image": "http://img.url"
    },
    {
        "_id": oeuf_id,
        "nom": "oeuf",
        "image": "http://img.url"
    },
    {
        "_id": rizJaponais_id,
        "nom": "riz japonais",
        "image": "http://img.url"
    },
    {
        "_id": katsuobushi_id,
        "nom": "katsuobushi",
        "image": "http://img.url"
    },
    {
        "_id": sauceSoja_id,
        "nom": "sauce soja",
        "image": "http://img.url"
    },
    {
        "_id": algueHijikiSechee_id,
        "nom": "Algue hijiki séchée",
        "image": "http://img.url"
    },
    {
        "_id": tofuFritAburaage_id,
        "nom": "tofu frit aburaage",
        "image": "http://img.url"
    },
    {
        "_id": konnyaku_id,
        "nom": "konnyaku",
        "image": "http://img.url"
    },
    {
        "_id": tofuFritAburaage_id,
        "nom": "tofu frit aburaage",
        "image": "http://img.url"
    },
    {
        "_id": edamame_id,
        "nom": "edamame",
        "image": "http://img.url"
    },
    {
        "_id": dashiLiquide_id,
        "nom": "dashi liquide",
        "image": "http://img.url"
    },
    {
        "_id": mirin_id,
        "nom": "mirin",
        "image": "http://img.url"
    },
    {
        "_id": carotte_id,
        "nom": "carotte",
        "image": "http://img.url"
    },
    {
        "_id": huileVegetale_id,
        "nom": "huile végétale",
        "image": "http://img.url"
    },
    {
        "_id": eau_id,
        "nom": "eau",
        "image": "http://img.url"
    },
    {
        "_id": cuisseDePoulet_id,
        "nom": "cuisse de poulet",
        "image": "http://img.url"
    },
    {
        "_id": sake_id,
        "nom": "sake",
        "image": "http://img.url"
    },
    {
        "_id": gingembre_id,
        "nom": "gingembre",
        "image": "http://img.url"
    },
    {
        "_id": ail_id,
        "nom": "ail",
        "image": "http://img.url"
    },
    {
        "_id": feculeDePommeDeTerreKatakuriko_id,
        "nom": "fécule de pomme de terre katakuriko",
        "image": "http://img.url"
    },
    {
        "_id": bettes_id,
        "nom": "bette",
        "image": "http://img.url"
    },
    {
        "_id": celeri_id,
        "nom": "céleri",
        "image": "http://img.url"
    },
    {
        "_id": pomme_id,
        "nom": "pomme",
        "image": "http://img.url"
    },
    {
        "_id": chocolatDeCouverture_id,
        "nom": "chocolat de couverture",
        "image": "http://img.url"
    },
    {
        "_id": beurreDeCacahouete_id,
        "nom": "beurre de cacahuète",
        "image": "http://img.url"
    },
    {
        "_id": vanille_id,
        "nom": "vanille",
        "image": "http://img.url"
    },
    {
        "_id": lait_id,
        "nom": "lait",
        "image": "http://img.url"
    },
    {
        "_id": chocolatBlanc_id,
        "nom": "chocolat blanc",
        "image": "http://img.url"
    },
    {
        "_id": colorantAlimentaireBleu_id,
        "nom": "colorant alimentaire bleu",
        "image": "http://img.url"
    },
    {
        "_id": cremeFouettee_id,
        "nom": "crème fouttée",
        "image": "http://img.url"
    },
    {
        "_id": coteDePorc_id,
        "nom": "côte de porc",
        "image": "http://img.url"
    },
    {
        "_id": confitDOrange_id,
        "nom": "confit d'orange",
        "image": "http://img.url"
    },
    {
        "_id": pimentRouge_id,
        "nom": "piment rouge",
        "image": "http://img.url"
    },
    {
        "_id": sauceSriracha_id,
        "nom": "sauce sriracha",
        "image": "http://img.url"
    },
    {
        "_id": poivre_id,
        "nom": "poivre",
        "image": "http://img.url"
    }
    
]);

db.Recettes.insertMany([
    {
        "nom": "Les Ramen Ichiraku",
        "auteur": "Timothée",
        "univers": "Naruto",
        "description": "Yum yum ! Vive les ramens !",
        "ingredients": [
            {
                "_id": nouille_id,
                "quantite": 200,
                "unite": "gramme"
            },
            {
                "_id": porcChashu_id,
                "quantite": 3,
                "unite": "tranche"
            },
            {
                "_id": oeufMollet_id,
                "quantite": 1,
                "unite": "pièce"
            },
            {
                "_id": pateMiso_id,
                "quantite": 1,
                "unite": "cuillère à soupe"
            },
            {
                "_id": pousseDeBambou_id,
                "quantite": 50,
                "unite": "gramme"
            },
            {
                "_id": bouillonPorc_id,
                "quantite": 1,
                "unite": "cube"
            },
            {
                "_id": huileSesame_id,
                "quantite": 1,
                "unite": "cuillère à café"
            },
            {
                "_id": algueNori_id,
                "quantite": 1,
                "unite": "feuille"
            },
            {
                "_id": oignonFrais_id,
                "quantite": 2,
                "unite": "cuillère à soupe"
            },
            {
                "_id": narutomaki_id,
                "quantite": 2,
                "unite": "tranche"
            }
        ],
        "ustensiles": [
            "casserole",
            "fouet",
            "bol",
            "spatule"
        ],
        "nombrePersonnes": 1,
        "temps": {
            "tempsPreparation": "10mn",
            "tempsCuisson": "5h",
            "tempsTotal": "5h10mn"
        },
        "tags": {
            "typePlat": "Plat",
            "difficulte": 3,
            "cout": 3,
            "saison": "Toutes"
        },
        "photo": "url de la photo",
        "etapePreparation": [
            "Faire cuire les nouilles comme indiqué sur l’emballage et réserver dans un grand bol",
            "En parallèle, faire bouillir 600g d’eau et y faire fondre le bouillon",
            "Délayer la pâte miso avec un peu de bouillon chaud",
            "Ajouter la pâte miso au bouillon",
            "Reprendre les nouilles réservées dans un grand bol",
            "Ajouter la feuille d’algue nori coupée en 3",
            "Ajouter les tranches de porc chashu",
            "Ajouter les pousses de bambou",
            "Ajouter l’oeuf coupé en 2",
            "Ajouter le narutomaki",
            "Ajouter le vert d’oignon",
            "Recouvrir de bouillon très chaud",
            "Parsemer d’huile de sésame",
            "Itadakimasu !"
        ]
    },
    {
        "nom": "Bière au beurre",
        "auteur": "Estefania",
        "univers": "HarryPotter",
        "description": "Abracadabra, une recette magique !",
        "ingredients": [
            {
                "_id": sucreRoux_id,
                "unite": "gramme",
                "quantite": 200
            },
            {
                "_id": beurre_id,
                "unite": "gramme",
                "quantite": 25
            },
            {
                "_id": cremeEpaisse_id,
                "unite": "centilitre",
                "quantite": 60
            },
            {
                "_id": extraitVanille_id,
                "unite": "cuillère à café",
                "quantite": 0.25
            },
            {
                "_id": biere_id,
                "unite": "litre",
                "quantite": 1
            }
        ],
        "ustensiles": [
            "casserole",
            "fouet",
            "spatule"
        ],
        "temps": {
            "tempsPreparation": "5mn",
            "tempsCuisson": "15mn",
            "tempsTotal": "20mn"
        },
        "tags": {
            "typePlat": "Dessert",
            "difficulte": 2,
            "cout": 1,
            "saison": "Toutes"
        },
        "photo": "url de la photo",
        "etapePreparation": [
            "Dans une casserole à feu moyen, ajoutez le beurre et le sucre.",
            "Lorsque le beurre est fondu, fouettez 2 cuillères à soupe de crème épaisse. Portez à ébullition et laissez cuire pendant 4 minutes, en remuant de temps en temps, jusqu’à ce que la couleur s’assombrisse un peu.",
            "Éteignez le feu et fouettez soigneusement le reste de la crème, et l’extrait de vanille.",
            "Ajoutez la bière à votre mélange et rallumez le feu.",
            "Quand la bière commence à bouillir, éteignez le feu et versez la boisson dans des verres. Si vous aimez réduire l’alcool au minimum dans votre bièreaubeurre, vous pouvez laissez bouillir pendant 3 minutes supplémentaires."
        ]
    },
    {
        "nom": "Crêpes de Jafar",
        "auteur": "Audrey",
        "univers": "Disney",
        "description": "Sesame, ouvre-toi !",
        "ingredients": [
            {
                "_id": farine_id,
                "unite": "gramme",
                "quantite": 250
            },
            {
                "_id": oeuf_id,
                "unite": "pièce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pincée",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuillère à soupe",
                "quantite": 2
            },
            {
                "_id": beurre_id,
                "unite": "gramme",
                "quantite": 50
            }
        ],
        "ustensiles": [
            "poele",
            "fouet",
            "spatule",
            "saladier"
        ],
        "temps": {
            "tempsPreparation": "10mn",
            "tempsCuisson": "15mn",
            "tempsTotal": "25mn"
        },
        "tags": {
            "typePlat": "Dessert",
            "difficulte": 2,
            "cout": 1,
            "saison": "Toutes"
        },
        "photo": "url de la photo",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les œufs.",
            "Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.",
            "Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.",
            "Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce côté et la crêpe est prête.",
            "Répétez jusqu'à épuisement de la pâte."
        ]
    },
        {
            "nom": "Okaka Onigiri",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le plat préféré de Sasuke",
            "ingredients": [
                {
                    "_id": rizJaponais_id,
                    "quantite": 1,
                    "unite": "tasse"
                },
                {
                    "_id": katsuobushi_id,
                    "quantite": 0.25,
                    "unite": "tasse"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 1,
                    "unite": "cuillère à soupe"
                }
            ],
            "ustensiles": [
                "bol"
            ],
            "nombrePersonnes": 1,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "",
                "tempsTotal": ""
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez le katsuobushi dans un bol moyen.",
                "Assaisonner de saucec soja.",
                "Mettez le riz cuit à la vapeur dans le bol et mélangez bien avec le katsuobushi.",
                "Mouillez-vous les mains dans l'eau pour que le riz ne colle pas.",
                "Placez la moitié du riz sur vos mains. Former le riz en rond ou en triangle, en appuyant légèrement avec vos deux paumes."
            ]
        },
        {
            "nom": "Salade d'algues hijiki",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Danzo",
            "ingredients": [
                {
                    "_id": algueHijikiSéchée_id,
                    "quantite": 25,
                    "unite": "gramme"
                },
                {
                    "_id": tofuFritAburaage_id,
                    "quantite": 2,
                    "unite": "morceaux"
                },
                {
                    "_id": konnyaku_id,
                    "quantite": 100,
                    "unite": "gramme"
                },
                {
                    "_id": edamame_id,
                    "quantite": 125,
                    "unite": "gramme"
                },
                {
                    "_id": dashiLiquide_id,
                    "quantite": 480,
                    "unite": "millilitre"
                },
                {
                    "_id": mirin_id,
                    "quantite": 60,
                    "unite": "millilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 60,
                    "unite": "millilitre"
                },
                {
                    "_id": carotte_id,
                    "quantite": 1,
                    "unite": "pièce"
                },
                {
                    "_id": huileVegetale_id,
                    "quantite": 15,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "bol",
                "casserole",
                "passoire",
                ""
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "38mn",
                "tempsTotal": "1h08"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez les hijiki dans un bol et recouvrez-les d'eau froide. Faites tremper 30 minutes",
                "Pendant ce temps, mettez les morceaux d'aburaage dans une passoire au-dessus d'un évier et versez de l'eau bouillante dessus. Égouttez, coupez les morceaux finement et réservez.",
                "Portez une casserole d'eau à ébullition, ajoutez les edamame et faites cuire 5 minutes. Retirez les edamame, rincez-les sous l'eau froide et retirez les fèves des cosses. Réservez les edamame écossés.",
                "Mettez le konnyaku dans la même casserole d'eau bouillante et faites cuire 3 minutes. Retirez-le de la casserole, coupez-le en tranches fines et réservez.",
                "Faites chauffer l'huile dans une casserole à feu moyen. Ajoutez la carotte et faites cuire jusqu'à ce qu'elle soit tendre. Ajoutez les hijiki, l'aburaage et le konnyaku, puis mélangez bien.",
                "Ajoutez le dashi et portez à ébullition. Ajoutez le mirin et la sauce soja, puis mélangez. Réduisez à feu moyen-doux et faites cuire pendant 30 minutes.",
                "Après 30 minutes, ajoutez les edamame et mélangez. Continuez la cuisson à découvert jusqu'à ce que la sauce ait réduit et que vous puissiez voir le fond de la casserole. Servez et dégustez."
            ]
        },
        {
            "nom": "Zenzai",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Hinata",
            "ingredients": [
                {
                    "_id": haricotRouge_id,
                    "quantite": 200,
                    "unite": "gramme"
                },
                {
                    "_id": eau_id,
                    "quantite": 1.25,
                    "unite": "litre"
                },
                {
                    "_id": sucre_id,
                    "quantite": 150,
                    "unite": "gramme"
                }
            ],
            "ustensiles": [
                "bol",
                "casserole",
                "grill"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "1h",
                "tempsTotal": "1h"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Laver bien les haricots adzuki",
                "Placer dans une casserole en recouvrant largement d'eau. Amenez à ébullition, coupez le feu et égouttez les haricots.",
                "Remettez les haricots dans la casserole avec 1,25 l d'eau.",
                "Amenez à nouveau à ébullition, puis baissez le feu et laissez mijoter jusqu'à ce que les haricots soient tendres et s'écrasent facilement sous la cuillère (50 min - 1 heure environ, le temps peu varier selon l'âge et la qualité des haricots).",
                "Ajoutez le sucre et continuez à cuire quelques minutes.",
                "Ajoutez de l'eau si besoin pour avoir la consistance d'une soupe.",
                "Passez les mochis sous le grill (ou sur un grill en fonte) en les retournant régulièrement.",
                "Ils vont gonfler et se boursoufler.",
                "Quand ils sont bien dorés et gonflés, retirez du grill.",
                "Placez un mochi dans chaque bol, et versez dessus la soupe de haricots chaude."

            ]
        },
        {
            "nom": "Poulet frit japonais karaage",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Jiraiya",
            "ingredients": [
                {
                    "_id": cuisseDePoulet_id,
                    "quantite": 300,
                    "unite": "gramme"
                },
                {
                    "_id": sake_id,
                    "quantite": 1,
                    "unite": "cuillière à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 5,
                    "unite": "gramme"
                },
                {
                    "_id": ail_id,
                    "quantite": 2,
                    "unite": "gousse"
                },
                {
                    "_id": feculeDePommeDeTerreKatakuriko_id,
                    "quantite": 60,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "saladier",
                "poêle",
                "grille"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "",
                "tempsTotal": "30mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
                "Dans un saladier, mélangez le gingembre avec l'ail, la sauce soja et le saké de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
                "Égouttez tout excès de liquide et ajoutez le katakuriko. Mélangez jusqu'à ce que le poulet soit complètement enrobé.",
                "Faites chauffer de l'huile dans une poêle jusqu'à ce qu'elle atteigne une température d'environ 180°C. Testez la température en mettant un peu de farine dans l'huile : si elle grésille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux à la fois, jusqu'à ce qu'ils soient bien dorés. Quand ils sont prêts, retirez-les de la poêle et laissez-les sécher sur une grille.",
                "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

            ]
        },
        {
            "nom": "Chocogrenouilles",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "La friandise ensorcelée préférée des sorciers",
            "ingredients": [
                {
                    "_id": chocolatDeCouverture_id,
                    "quantite": 200,
                    "unite": "gramme"
                },
                {
                    "_id": beurreDeCacahouete_id,
                    "quantite": 70,
                    "unite": "gramme"
                },
                {
                    "_id": sucreRoux_id,
                    "quantite": 25,
                    "unite": "gramme"
                },
                {
                    "_id": vanille_id,
                    "quantite": 1,
                    "unite": "pincée"
                }
            ],
            "ustensiles": [
                "cul de poule",
                "moule en forme de grenouille",
                "pinceau",
                "bol",
                "spatule"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "",
                "tempsTotal": ""
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Tempérer le chocolat ou le faire fondre au bain-marie et le retirer du feu quand environ la moitié  est fondue, continuer de mélanger pour laisser fondre le chocolat doucement.",
                "A l'aide d'un pinceau, passer une couche de chocolat à l'intérieur des moules. Retirer l'excédent de chocolat sur le moule. ",
                "Laisser prendre au frais 5 minutes environ pour que le chocolat durcisse.",
                "Renouveler l'opération.",
                "Mélanger le beurre de cacahouète, le sucre, la vanille et le sel dans un petit bol.",
                "Garnir l'intérieur des coques en chocolat et les \"fermer\" avec une couche de chocolat. Bien lisser le moule avec une spatule pour retirer l'excédent de chocolat.",
                "Bien laisser durcir et démouler les chocolats. Conserver dans une boite en carton ou une boite hermétique."

            ]
        },
        {
            "nom": "Polyjuice potion",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "La potion qui te change de tête",
            "ingredients": [
                {
                    "_id": bette_id,
                    "quantite": 1,
                    "unite": "botte"
                },
                {
                    "_id": celeri_id,
                    "quantite": 5,
                    "unite": "branche"
                },
                {
                    "_id": pomme_id,
                    "quantite": 3,
                    "unite": "pièce"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 1,
                    "unite": "morceau"
                }
            ],
            "ustensiles": [
                "blender",
                "extracteur de jus"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "",
                "tempsTotal": ""
            },
            "tags": {
                "typePlat": "Boisson",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Bien laver les ingrédients et les couper en morceaux.",
                "Passer à l'extracteur de jus",
                "ou Passer au blender avec un peu d'eau ou d'eau de coco pour obtenir un smoothie vert et filtrer pour obtenir un jus lisse.",
                "Transvaser dans des petites bouteilles, fioles ou tubes à essais, fermer et placer au frais ou dans un récipient remplir de glace. ",
                "A réaliser le jour même, au plus près de l'arrivée des convives."
            ]
        },
        {
            "nom": "Bantha Cocoa",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Le délice de l'univers",
            "ingredients": [
                {
                    "_id": lait_id,
                    "quantite": 4,
                    "unite": "tasse"
                },
                {
                    "_id": vanille_id,
                    "quantite": 1,
                    "unite": "cuillière à café"
                },
                {
                    "_id": chocolatBlanc_id,
                    "quantite": 8,
                    "unite": "carré"
                },
                {
                    "_id": colorantAlimentaireBleu_id,
                    "quantite": 2,
                    "unite": "goutte"
                },
                {
                    "_id": cremeFouettee_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "casserole",
                "vérine"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "5",
                "tempsCuisson": "5",
                "tempsTotal": "10"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mélanger le lait, la vanille, le colorant alimentaire et le chocolat blanc dans une casserole moyenne.",
                "Cuire à feu moyen-doux, en remuant souvent, jusqu'à ce que le chocolat chaud blanc mijote et fonde.",
                "Ne le laissez pas bouillir.",
                "Retirer du feu et servir immédiatement, garni de crème fouettée."
            ]
        },
        {
            "nom": "Pyro-côtelettes de chimaerok à la Dirge",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Elle te restaure 1962 points de vie et tu seras bien nourri",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Préparez vos côtelettes en les rinçant à l’eau et placez-les dans un plat.",
                "Saupoudrez les deux côtés avec du sel et du poivre et laissez-les de côté pendant que vous préparez la sauce.",
                "Commencez par versez le confit d’oranges dans un bol (de préférence ignifugé).",
                "Ajoutez la sauce de soja et le piment rouge.",
                "Saupoudrez de gingembre.",
                "Enfin, ajoutez deux cuillères à soupe de Sriracha. Mélangez le tout jusqu’à ce que vous avez une belle concoction à vous déboucher les sinus.",
                "Faites chauffer un peu d’huile dans une poêle et ajoutez les côtelettes. Faites cuire à feu vif jusqu’à ce qu’elles commencent à dorer.",
                "Baissez alors le feu et versez environ la moitié de votre sauce sur les côtelettes. Faites cuire à couvert à feu moyen-doux pendant environ 10 minutes, puis retournez les côtelettes et enduisez de nouveau avec la sauce.",
                "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
            ]
        },
        {
            "nom": "Lorem Ipsum a",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum b",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum c",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum d",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum e",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum f",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum g",
            "auteur": "Timothée",
            "univers": "Disney",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum h",
            "auteur": "Timothée",
            "univers": "Disney",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum i",
            "auteur": "Timothée",
            "univers": "Disney",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum j",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum k",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum l",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum m",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum n",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum o",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum p",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum q",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum r",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum s",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum t",
            "auteur": "Timothée",
            "univers": "marvel",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum u",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum v",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum w",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum x",
            "auteur": "Timothée",
            "univers": "Star wars",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum y",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum z",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum za",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum zb",
            "auteur": "Timothée",
            "univers": "Harry potter",
        "description" : "Lorem Ipsum is simply dummy text of the printin",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            ]
        },
        {
            "nom": "Lorem Ipsum zc",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Elle te restaure 1962 points de vie et tu seras bien nourri",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Préparez vos côtelettes en les rinçant à l’eau et placez-les dans un plat.",
                "Saupoudrez les deux côtés avec du sel et du poivre et laissez-les de côté pendant que vous préparez la sauce.",
                "Commencez par versez le confit d’oranges dans un bol (de préférence ignifugé).",
                "Ajoutez la sauce de soja et le piment rouge.",
                "Saupoudrez de gingembre.",
                "Enfin, ajoutez deux cuillères à soupe de Sriracha. Mélangez le tout jusqu’à ce que vous avez une belle concoction à vous déboucher les sinus.",
                "Faites chauffer un peu d’huile dans une poêle et ajoutez les côtelettes. Faites cuire à feu vif jusqu’à ce qu’elles commencent à dorer.",
                "Baissez alors le feu et versez environ la moitié de votre sauce sur les côtelettes. Faites cuire à couvert à feu moyen-doux pendant environ 10 minutes, puis retournez les côtelettes et enduisez de nouveau avec la sauce.",
                "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
            ]
        },
        {
            "nom": "Lorem Ipsum zd",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Elle te restaure 1962 points de vie et tu seras bien nourri",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Préparez vos côtelettes en les rinçant à l’eau et placez-les dans un plat.",
                "Saupoudrez les deux côtés avec du sel et du poivre et laissez-les de côté pendant que vous préparez la sauce.",
                "Commencez par versez le confit d’oranges dans un bol (de préférence ignifugé).",
                "Ajoutez la sauce de soja et le piment rouge.",
                "Saupoudrez de gingembre.",
                "Enfin, ajoutez deux cuillères à soupe de Sriracha. Mélangez le tout jusqu’à ce que vous avez une belle concoction à vous déboucher les sinus.",
                "Faites chauffer un peu d’huile dans une poêle et ajoutez les côtelettes. Faites cuire à feu vif jusqu’à ce qu’elles commencent à dorer.",
                "Baissez alors le feu et versez environ la moitié de votre sauce sur les côtelettes. Faites cuire à couvert à feu moyen-doux pendant environ 10 minutes, puis retournez les côtelettes et enduisez de nouveau avec la sauce.",
                "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
            ]
        },
        {
            "nom": "Lorem Ipsum ze",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Elle te restaure 1962 points de vie et tu seras bien nourri",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Préparez vos côtelettes en les rinçant à l’eau et placez-les dans un plat.",
                "Saupoudrez les deux côtés avec du sel et du poivre et laissez-les de côté pendant que vous préparez la sauce.",
                "Commencez par versez le confit d’oranges dans un bol (de préférence ignifugé).",
                "Ajoutez la sauce de soja et le piment rouge.",
                "Saupoudrez de gingembre.",
                "Enfin, ajoutez deux cuillères à soupe de Sriracha. Mélangez le tout jusqu’à ce que vous avez une belle concoction à vous déboucher les sinus.",
                "Faites chauffer un peu d’huile dans une poêle et ajoutez les côtelettes. Faites cuire à feu vif jusqu’à ce qu’elles commencent à dorer.",
                "Baissez alors le feu et versez environ la moitié de votre sauce sur les côtelettes. Faites cuire à couvert à feu moyen-doux pendant environ 10 minutes, puis retournez les côtelettes et enduisez de nouveau avec la sauce.",
                "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
            ]
        },
        {
            "nom": "Lorem Ipsum zf",
            "auteur": "Timothée",
            "univers": "World of warcraft",
        "description" : "Elle te restaure 1962 points de vie et tu seras bien nourri",
            "ingredients": [
                {
                    "_id": coteDePorc_id,
                    "quantite": 4,
                    "unite": "pièce"
                },
                {
                    "_id": confitDOrange_id,
                    "quantite": 25,
                    "unite": "centilitre"
                },
                {
                    "_id": sauceSoja_id,
                    "quantite": 6,
                    "unite": "centilitre"
                },
                {
                    "_id": pimentRouge_id,
                    "quantite": 1,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 2,
                    "unite": "cuilliètre à café"
                },
                {
                    "_id": sauceSriracha_id,
                    "quantite": 2,
                    "unite": "cuilliètre à soupe"
                },
                {
                    "_id": sel_id,
                    "quantite": 0,
                    "unite": ""
                },
                {
                    "_id": poivre_id,
                    "quantite": 0,
                    "unite": ""
                }
            ],
            "ustensiles": [
                "plat",
                "bol",
                "poêle"
            ],
            "nombrePersonnes": 2,
            "temps": {
                "tempsPreparation": "",
                "tempsCuisson": "20mn",
                "tempsTotal": "20mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 1,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Préparez vos côtelettes en les rinçant à l’eau et placez-les dans un plat.",
                "Saupoudrez les deux côtés avec du sel et du poivre et laissez-les de côté pendant que vous préparez la sauce.",
                "Commencez par versez le confit d’oranges dans un bol (de préférence ignifugé).",
                "Ajoutez la sauce de soja et le piment rouge.",
                "Saupoudrez de gingembre.",
                "Enfin, ajoutez deux cuillères à soupe de Sriracha. Mélangez le tout jusqu’à ce que vous avez une belle concoction à vous déboucher les sinus.",
                "Faites chauffer un peu d’huile dans une poêle et ajoutez les côtelettes. Faites cuire à feu vif jusqu’à ce qu’elles commencent à dorer.",
                "Baissez alors le feu et versez environ la moitié de votre sauce sur les côtelettes. Faites cuire à couvert à feu moyen-doux pendant environ 10 minutes, puis retournez les côtelettes et enduisez de nouveau avec la sauce.",
                "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
            ]
        },
        {
            "nom": "Lorem Ipsum zg",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Jiraiya",
            "ingredients": [
                {
                    "_id": cuisseDePoulet_id,
                    "quantite": 300,
                    "unite": "gramme"
                },
                {
                    "_id": sake_id,
                    "quantite": 1,
                    "unite": "cuillière à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 5,
                    "unite": "gramme"
                },
                {
                    "_id": ail_id,
                    "quantite": 2,
                    "unite": "gousse"
                },
                {
                    "_id": feculeDePommeDeTerreKatakuriko_id,
                    "quantite": 60,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "saladier",
                "poêle",
                "grille"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "",
                "tempsTotal": "30mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
                "Dans un saladier, mélangez le gingembre avec l'ail, la sauce soja et le saké de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
                "Égouttez tout excès de liquide et ajoutez le katakuriko. Mélangez jusqu'à ce que le poulet soit complètement enrobé.",
                "Faites chauffer de l'huile dans une poêle jusqu'à ce qu'elle atteigne une température d'environ 180°C. Testez la température en mettant un peu de farine dans l'huile : si elle grésille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux à la fois, jusqu'à ce qu'ils soient bien dorés. Quand ils sont prêts, retirez-les de la poêle et laissez-les sécher sur une grille.",
                "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

            ]
        },
        {
            "nom": "Lorem Ipsum zh",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Jiraiya",
            "ingredients": [
                {
                    "_id": cuisseDePoulet_id,
                    "quantite": 300,
                    "unite": "gramme"
                },
                {
                    "_id": sake_id,
                    "quantite": 1,
                    "unite": "cuillière à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 5,
                    "unite": "gramme"
                },
                {
                    "_id": ail_id,
                    "quantite": 2,
                    "unite": "gousse"
                },
                {
                    "_id": feculeDePommeDeTerreKatakuriko_id,
                    "quantite": 60,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "saladier",
                "poêle",
                "grille"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "",
                "tempsTotal": "30mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
                "Dans un saladier, mélangez le gingembre avec l'ail, la sauce soja et le saké de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
                "Égouttez tout excès de liquide et ajoutez le katakuriko. Mélangez jusqu'à ce que le poulet soit complètement enrobé.",
                "Faites chauffer de l'huile dans une poêle jusqu'à ce qu'elle atteigne une température d'environ 180°C. Testez la température en mettant un peu de farine dans l'huile : si elle grésille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux à la fois, jusqu'à ce qu'ils soient bien dorés. Quand ils sont prêts, retirez-les de la poêle et laissez-les sécher sur une grille.",
                "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

            ]
        },
        {
            "nom": "Lorem Ipsum zi",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Jiraiya",
            "ingredients": [
                {
                    "_id": cuisseDePoulet_id,
                    "quantite": 300,
                    "unite": "gramme"
                },
                {
                    "_id": sake_id,
                    "quantite": 1,
                    "unite": "cuillière à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 5,
                    "unite": "gramme"
                },
                {
                    "_id": ail_id,
                    "quantite": 2,
                    "unite": "gousse"
                },
                {
                    "_id": feculeDePommeDeTerreKatakuriko_id,
                    "quantite": 60,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "saladier",
                "poêle",
                "grille"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "",
                "tempsTotal": "30mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
                "Dans un saladier, mélangez le gingembre avec l'ail, la sauce soja et le saké de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
                "Égouttez tout excès de liquide et ajoutez le katakuriko. Mélangez jusqu'à ce que le poulet soit complètement enrobé.",
                "Faites chauffer de l'huile dans une poêle jusqu'à ce qu'elle atteigne une température d'environ 180°C. Testez la température en mettant un peu de farine dans l'huile : si elle grésille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux à la fois, jusqu'à ce qu'ils soient bien dorés. Quand ils sont prêts, retirez-les de la poêle et laissez-les sécher sur une grille.",
                "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

            ]
        },
        {
            "nom": "Lorem Ipsum zj",
            "auteur": "Timothée",
            "univers": "Naruto",
        "description" : "Le favori de Jiraiya",
            "ingredients": [
                {
                    "_id": cuisseDePoulet_id,
                    "quantite": 300,
                    "unite": "gramme"
                },
                {
                    "_id": sake_id,
                    "quantite": 1,
                    "unite": "cuillière à soupe"
                },
                {
                    "_id": gingembre_id,
                    "quantite": 5,
                    "unite": "gramme"
                },
                {
                    "_id": ail_id,
                    "quantite": 2,
                    "unite": "gousse"
                },
                {
                    "_id": feculeDePommeDeTerreKatakuriko_id,
                    "quantite": 60,
                    "unite": "millilitre"
                }
            ],
            "ustensiles": [
                "saladier",
                "poêle",
                "grille"
            ],
            "nombrePersonnes": 4,
            "temps": {
                "tempsPreparation": "30mn",
                "tempsCuisson": "",
                "tempsTotal": "30mn"
            },
            "tags": {
                "typePlat": "Plat",
                "difficulte": 2,
                "cout": 2,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
                "Dans un saladier, mélangez le gingembre avec l'ail, la sauce soja et le saké de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
                "Égouttez tout excès de liquide et ajoutez le katakuriko. Mélangez jusqu'à ce que le poulet soit complètement enrobé.",
                "Faites chauffer de l'huile dans une poêle jusqu'à ce qu'elle atteigne une température d'environ 180°C. Testez la température en mettant un peu de farine dans l'huile : si elle grésille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux à la fois, jusqu'à ce qu'ils soient bien dorés. Quand ils sont prêts, retirez-les de la poêle et laissez-les sécher sur une grille.",
                "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

            ]
        },
        {
            "nom": "Lorem Ipsum zk",
            "auteur": "Audrey",
            "univers": "Disney",
        "description" : "Sesame, ouvre-toi !",
            "ingredients": [
                {
                    "_id": farine_id,
                    "unite": "gramme",
                    "quantite": 250
                },
                {
                    "_id": oeuf_id,
                    "unite": "pièce",
                    "quantite": 4
                },
                {
                    "_id": lait_id,
                    "unite": "centilitre",
                    "quantite": 50
                },
                {
                    "_id": sel_id,
                    "unite": "pincée",
                    "quantite": 1
                },
                {
                    "_id": sucre_id,
                    "unite": "cuillère à soupe",
                    "quantite": 2
                },
                {
                    "_id": beurre_id,
                    "unite": "gramme",
                    "quantite": 50
                }
            ],
            "ustensiles": [
                "poele",
                "fouet",
                "spatule",
                "saladier"
            ],
            "temps": {
                "tempsPreparation": "10mn",
                "tempsCuisson": "15mn",
                "tempsTotal": "25mn"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez la farine dans un saladier avec le sel et le sucre.",
                "Faites un puits au milieu et versez-y les œufs.",
                "Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.",
                "Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.",
                "Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.",
                "Laissez cuire environ une minute de ce côté et la crêpe est prête.",
                "Répétez jusqu'à épuisement de la pâte."
            ]
        },
        {
            "nom": "Lorem Ipsum zl",
            "auteur": "Audrey",
            "univers": "Disney",
        "description" : "Sesame, ouvre-toi !",
            "ingredients": [
                {
                    "_id": farine_id,
                    "unite": "gramme",
                    "quantite": 250
                },
                {
                    "_id": oeuf_id,
                    "unite": "pièce",
                    "quantite": 4
                },
                {
                    "_id": lait_id,
                    "unite": "centilitre",
                    "quantite": 50
                },
                {
                    "_id": sel_id,
                    "unite": "pincée",
                    "quantite": 1
                },
                {
                    "_id": sucre_id,
                    "unite": "cuillère à soupe",
                    "quantite": 2
                },
                {
                    "_id": beurre_id,
                    "unite": "gramme",
                    "quantite": 50
                }
            ],
            "ustensiles": [
                "poele",
                "fouet",
                "spatule",
                "saladier"
            ],
            "temps": {
                "tempsPreparation": "10mn",
                "tempsCuisson": "15mn",
                "tempsTotal": "25mn"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez la farine dans un saladier avec le sel et le sucre.",
                "Faites un puits au milieu et versez-y les œufs.",
                "Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.",
                "Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.",
                "Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.",
                "Laissez cuire environ une minute de ce côté et la crêpe est prête.",
                "Répétez jusqu'à épuisement de la pâte."
            ]
        },
        {
            "nom": "Lorem Ipsum zm",
            "auteur": "Audrey",
            "univers": "Disney",
        "description" : "Sesame, ouvre-toi !",
            "ingredients": [
                {
                    "_id": farine_id,
                    "unite": "gramme",
                    "quantite": 250
                },
                {
                    "_id": oeuf_id,
                    "unite": "pièce",
                    "quantite": 4
                },
                {
                    "_id": lait_id,
                    "unite": "centilitre",
                    "quantite": 50
                },
                {
                    "_id": sel_id,
                    "unite": "pincée",
                    "quantite": 1
                },
                {
                    "_id": sucre_id,
                    "unite": "cuillère à soupe",
                    "quantite": 2
                },
                {
                    "_id": beurre_id,
                    "unite": "gramme",
                    "quantite": 50
                }
            ],
            "ustensiles": [
                "poele",
                "fouet",
                "spatule",
                "saladier"
            ],
            "temps": {
                "tempsPreparation": "10mn",
                "tempsCuisson": "15mn",
                "tempsTotal": "25mn"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez la farine dans un saladier avec le sel et le sucre.",
                "Faites un puits au milieu et versez-y les œufs.",
                "Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.",
                "Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.",
                "Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.",
                "Laissez cuire environ une minute de ce côté et la crêpe est prête.",
                "Répétez jusqu'à épuisement de la pâte."
            ]
        },
        {
            "nom": "Lorem Ipsum zn",
            "auteur": "Audrey",
            "univers": "Disney",
        "description" : "Sesame, ouvre-toi !",
            "ingredients": [
                {
                    "_id": farine_id,
                    "unite": "gramme",
                    "quantite": 250
                },
                {
                    "_id": oeuf_id,
                    "unite": "pièce",
                    "quantite": 4
                },
                {
                    "_id": lait_id,
                    "unite": "centilitre",
                    "quantite": 50
                },
                {
                    "_id": sel_id,
                    "unite": "pincée",
                    "quantite": 1
                },
                {
                    "_id": sucre_id,
                    "unite": "cuillère à soupe",
                    "quantite": 2
                },
                {
                    "_id": beurre_id,
                    "unite": "gramme",
                    "quantite": 50
                }
            ],
            "ustensiles": [
                "poele",
                "fouet",
                "spatule",
                "saladier"
            ],
            "temps": {
                "tempsPreparation": "10mn",
                "tempsCuisson": "15mn",
                "tempsTotal": "25mn"
            },
            "tags": {
                "typePlat": "Dessert",
                "difficulte": 2,
                "cout": 1,
                "saison": "Toutes"
            },
            "photo": "url de la photo",
            "etapePreparation": [
                "Mettez la farine dans un saladier avec le sel et le sucre.",
                "Faites un puits au milieu et versez-y les œufs.",
                "Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.",
                "Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.",
                "Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.",
                "Laissez cuire environ une minute de ce côté et la crêpe est prête.",
                "Répétez jusqu'à épuisement de la pâte."
            ]
        }
])