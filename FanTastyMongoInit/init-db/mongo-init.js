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
algueHijikiSechee_id = ObjectId()
sauceSoja_id = ObjectId()
katsuobushi_id = ObjectId()
rizJaponais_id = ObjectId()
haricotRouge_id = ObjectId()


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
        "nom": "p??te miso",
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
        "nom": "cr??me ??paisse",
        "image": "http://img.url"
    },
    {
        "_id": extraitVanille_id,
        "nom": "extrait de vanille",
        "image": "http://img.url"
    },
    {
        "_id": biere_id,
        "nom": "bi??re",
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
        "_id": haricotRouge_id,
        "nom": "sauce soja",
        "image": "http://img.url"
    },
    {
        "_id": algueHijikiSechee_id,
        "nom": "Algue hijiki s??ch??e",
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
        "nom": "huile v??g??tale",
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
        "nom": "f??cule de pomme de terre katakuriko",
        "image": "http://img.url"
    },
    {
        "_id": bettes_id,
        "nom": "bette",
        "image": "http://img.url"
    },
    {
        "_id": celeri_id,
        "nom": "c??leri",
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
        "nom": "beurre de cacahu??te",
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
        "nom": "cr??me foutt??e",
        "image": "http://img.url"
    },
    {
        "_id": coteDePorc_id,
        "nom": "c??te de porc",
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
        "auteur": "Timoth??e",
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
                "unite": "pi??ce"
            },
            {
                "_id": pateMiso_id,
                "quantite": 1,
                "unite": "cuill??re ?? soupe"
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
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": algueNori_id,
                "quantite": 1,
                "unite": "feuille"
            },
            {
                "_id": oignonFrais_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
        "photo": "naruto/ramen.jpg",
        "etapePreparation": [
            "Faire cuire les nouilles comme indiqu?? sur l???emballage et r??server dans un grand bol",
            "En parall??le, faire bouillir 600g d???eau et y faire fondre le bouillon",
            "D??layer la p??te miso avec un peu de bouillon chaud",
            "Ajouter la p??te miso au bouillon",
            "Reprendre les nouilles r??serv??es dans un grand bol",
            "Ajouter la feuille d???algue nori coup??e en 3",
            "Ajouter les tranches de porc chashu",
            "Ajouter les pousses de bambou",
            "Ajouter l???oeuf coup?? en 2",
            "Ajouter le narutomaki",
            "Ajouter le vert d???oignon",
            "Recouvrir de bouillon tr??s chaud",
            "Parsemer d???huile de s??same",
            "Itadakimasu !"
        ]
    },
    {
        "nom": "Bi??re au beurre",
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
                "unite": "cuill??re ?? caf??",
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
        "photo": "harrypotter/harry-potter-biere.jpg",
        "etapePreparation": [
            "Dans une casserole ?? feu moyen, ajoutez le beurre et le sucre.",
            "Lorsque le beurre est fondu, fouettez 2 cuill??res ?? soupe de cr??me ??paisse. Portez ?? ??bullition et laissez cuire pendant 4 minutes, en remuant de temps en temps, jusqu????? ce que la couleur s???assombrisse un peu.",
            "??teignez le feu et fouettez soigneusement le reste de la cr??me, et l???extrait de vanille.",
            "Ajoutez la bi??re ?? votre m??lange et rallumez le feu.",
            "Quand la bi??re commence ?? bouillir, ??teignez le feu et versez la boisson dans des verres. Si vous aimez r??duire l???alcool au minimum dans votre bi??reaubeurre, vous pouvez laissez bouillir pendant 3 minutes suppl??mentaires."
        ]
    },
    {
        "nom": "Gaufres Mickey",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/mickey-waffles.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Okaka Onigiri",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le plat pr??f??r?? de Sasuke",
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
                "unite": "cuill??re ?? soupe"
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
        "photo": "naruto/boruto-bento.jpg",
        "etapePreparation": [
            "Mettez le katsuobushi dans un bol moyen.",
            "Assaisonner de saucec soja.",
            "Mettez le riz cuit ?? la vapeur dans le bol et m??langez bien avec le katsuobushi.",
            "Mouillez-vous les mains dans l'eau pour que le riz ne colle pas.",
            "Placez la moiti?? du riz sur vos mains. Former le riz en rond ou en triangle, en appuyant l??g??rement avec vos deux paumes."
        ]
    },
    {
        "nom": "Salade d'algues hijiki",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Danzo",
        "ingredients": [
            {
                "_id": algueHijikiSechee_id,
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
                "unite": "pi??ce"
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
            "passoire"
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
        "photo": "naruto/Dipping-Noodles-naruto.jpg",
        "etapePreparation": [
            "Mettez les hijiki dans un bol et recouvrez-les d'eau froide. Faites tremper 30 minutes",
            "Pendant ce temps, mettez les morceaux d'aburaage dans une passoire au-dessus d'un ??vier et versez de l'eau bouillante dessus. ??gouttez, coupez les morceaux finement et r??servez.",
            "Portez une casserole d'eau ?? ??bullition, ajoutez les edamame et faites cuire 5 minutes. Retirez les edamame, rincez-les sous l'eau froide et retirez les f??ves des cosses. R??servez les edamame ??coss??s.",
            "Mettez le konnyaku dans la m??me casserole d'eau bouillante et faites cuire 3 minutes. Retirez-le de la casserole, coupez-le en tranches fines et r??servez.",
            "Faites chauffer l'huile dans une casserole ?? feu moyen. Ajoutez la carotte et faites cuire jusqu'?? ce qu'elle soit tendre. Ajoutez les hijiki, l'aburaage et le konnyaku, puis m??langez bien.",
            "Ajoutez le dashi et portez ?? ??bullition. Ajoutez le mirin et la sauce soja, puis m??langez. R??duisez ?? feu moyen-doux et faites cuire pendant 30 minutes.",
            "Apr??s 30 minutes, ajoutez les edamame et m??langez. Continuez la cuisson ?? d??couvert jusqu'?? ce que la sauce ait r??duit et que vous puissiez voir le fond de la casserole. Servez et d??gustez."
        ]
    },
    {
        "nom": "Zenzai",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Hinata",
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
        "photo": "naruto/itachi-bento.jpeg",
        "etapePreparation": [
            "Laver bien les haricots adzuki",
            "Placer dans une casserole en recouvrant largement d'eau. Amenez ?? ??bullition, coupez le feu et ??gouttez les haricots.",
            "Remettez les haricots dans la casserole avec 1,25 l d'eau.",
            "Amenez ?? nouveau ?? ??bullition, puis baissez le feu et laissez mijoter jusqu'?? ce que les haricots soient tendres et s'??crasent facilement sous la cuill??re (50 min - 1 heure environ, le temps peu varier selon l'??ge et la qualit?? des haricots).",
            "Ajoutez le sucre et continuez ?? cuire quelques minutes.",
            "Ajoutez de l'eau si besoin pour avoir la consistance d'une soupe.",
            "Passez les mochis sous le grill (ou sur un grill en fonte) en les retournant r??guli??rement.",
            "Ils vont gonfler et se boursoufler.",
            "Quand ils sont bien dor??s et gonfl??s, retirez du grill.",
            "Placez un mochi dans chaque bol, et versez dessus la soupe de haricots chaude."

        ]
    },
    {
        "nom": "Poulet frit japonais karaage",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Jiraiya",
        "ingredients": [
            {
                "_id": cuisseDePoulet_id,
                "quantite": 300,
                "unite": "gramme"
            },
            {
                "_id": sake_id,
                "quantite": 1,
                "unite": "cuilli??re ?? soupe"
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
            "po??le",
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
        "photo": "naruto/naruto-bento.jfif",
        "etapePreparation": [
            "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
            "Dans un saladier, m??langez le gingembre avec l'ail, la sauce soja et le sak?? de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
            "??gouttez tout exc??s de liquide et ajoutez le katakuriko. M??langez jusqu'?? ce que le poulet soit compl??tement enrob??.",
            "Faites chauffer de l'huile dans une po??le jusqu'?? ce qu'elle atteigne une temp??rature d'environ 180??C. Testez la temp??rature en mettant un peu de farine dans l'huile : si elle gr??sille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux ?? la fois, jusqu'?? ce qu'ils soient bien dor??s. Quand ils sont pr??ts, retirez-les de la po??le et laissez-les s??cher sur une grille.",
            "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

        ]
    },
    {
        "nom": "G??teau Le Monstrueux Livre des Monstres",
        "auteur": "Estefania",
        "univers": "HarryPotter",
        "description": "La friandise ensorcel??e pr??f??r??e des sorciers",
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
                "unite": "pinc??e"
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
        "photo": "harrypotter/harry-potter-birthdaycake.png",
        "etapePreparation": [
            "Temp??rer le chocolat ou le faire fondre au bain-marie et le retirer du feu quand environ la moiti??  est fondue, continuer de m??langer pour laisser fondre le chocolat doucement.",
            "A l'aide d'un pinceau, passer une couche de chocolat ?? l'int??rieur des moules. Retirer l'exc??dent de chocolat sur le moule. ",
            "Laisser prendre au frais 5 minutes environ pour que le chocolat durcisse.",
            "Renouveler l'op??ration.",
            "M??langer le beurre de cacahou??te, le sucre, la vanille et le sel dans un petit bol.",
            "Garnir l'int??rieur des coques en chocolat et les \"fermer\" avec une couche de chocolat. Bien lisser le moule avec une spatule pour retirer l'exc??dent de chocolat.",
            "Bien laisser durcir et d??mouler les chocolats. Conserver dans une boite en carton ou une boite herm??tique."

        ]
    },
    {
        "nom": "Pretzels baguette magique",
        "auteur": "Claire",
        "univers": "HarryPotter",
        "description": "La potion qui te change de t??te",
        "ingredients": [
            {
                "_id": bettes_id,
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
                "unite": "pi??ce"
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
        "photo": "harrypotter/harry-potter-pretzels.jpg",
        "etapePreparation": [
            "Bien laver les ingr??dients et les couper en morceaux.",
            "Passer ?? l'extracteur de jus",
            "ou Passer au blender avec un peu d'eau ou d'eau de coco pour obtenir un smoothie vert et filtrer pour obtenir un jus lisse.",
            "Transvaser dans des petites bouteilles, fioles ou tubes ?? essais, fermer et placer au frais ou dans un r??cipient remplir de glace. ",
            "A r??aliser le jour m??me, au plus pr??s de l'arriv??e des convives."
        ]
    },
    {
        "nom": "BB-8 Droid Quesadillas",
        "auteur": "Timoth??e",
        "univers": "Disney",
        "description": "Le d??lice de l'univers",
        "ingredients": [
            {
                "_id": lait_id,
                "quantite": 4,
                "unite": "tasse"
            },
            {
                "_id": vanille_id,
                "quantite": 1,
                "unite": "cuilli??re ?? caf??"
            },
            {
                "_id": chocolatBlanc_id,
                "quantite": 8,
                "unite": "carr??"
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
            "v??rine"
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
        "photo": "disney/disney-bb8-quesadillas.jpg",
        "etapePreparation": [
            "M??langer le lait, la vanille, le colorant alimentaire et le chocolat blanc dans une casserole moyenne.",
            "Cuire ?? feu moyen-doux, en remuant souvent, jusqu'?? ce que le chocolat chaud blanc mijote et fonde.",
            "Ne le laissez pas bouillir.",
            "Retirer du feu et servir imm??diatement, garni de cr??me fouett??e."
        ]
    },
    {
        "nom": "Pyro-c??telettes de chimaerok ?? la Dirge",
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Elle te restaure 1962 points de vie et tu seras bien nourri",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-captain-america-pie.jpg",
        "etapePreparation": [
            "Pr??parez vos c??telettes en les rin??ant ?? l???eau et placez-les dans un plat.",
            "Saupoudrez les deux c??t??s avec du sel et du poivre et laissez-les de c??t?? pendant que vous pr??parez la sauce.",
            "Commencez par versez le confit d???oranges dans un bol (de pr??f??rence ignifug??).",
            "Ajoutez la sauce de soja et le piment rouge.",
            "Saupoudrez de gingembre.",
            "Enfin, ajoutez deux cuill??res ?? soupe de Sriracha. M??langez le tout jusqu????? ce que vous avez une belle concoction ?? vous d??boucher les sinus.",
            "Faites chauffer un peu d???huile dans une po??le et ajoutez les c??telettes. Faites cuire ?? feu vif jusqu????? ce qu???elles commencent ?? dorer.",
            "Baissez alors le feu et versez environ la moiti?? de votre sauce sur les c??telettes. Faites cuire ?? couvert ?? feu moyen-doux pendant environ 10 minutes, puis retournez les c??telettes et enduisez de nouveau avec la sauce.",
            "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
        ]
    },
    {
        "nom": "Lorem Ipsum a",
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-avengers-blue-cookie.jpg",
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
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-baby-groot-sandwich.png",
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
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-batman-salad.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Beignets ?? la citrouille",
        "auteur": "Simon",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-butterbeer-doughnuts.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Balai volant cake pops",
        "auteur": "Danielle",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-cake-pops.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Cr??mes Canari ?? la Weasley.",
        "auteur": "Thomas",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-canary-creams.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Beignets Hulk",
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-hulk-donuts.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Smoothie fa??on Hulk",
        "auteur": "Audrey",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-hulk-smoothie.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Boulettes de viande Ant Man",
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-boulettes-viande.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Salade de fruits Hedwige",
        "auteur": "L??na",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-fruit-salad.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Sucettes le Vif d\'Or",
        "auteur": "Timoth??e",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-golden-snitch-pops.png",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "P??tisseries Beuglantes",
        "auteur": "Guillaume",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-pasties.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Iron Man bento",
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-lunchbox.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Sasuke bento",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "naruto/sasuke-bento.jpeg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Narutomaki",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "naruto/Narutomaki.jpeg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Porc shogayaki",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "naruto/viande-naruto.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Beignets La Princesse et la Grenouille",
        "auteur": "Estefania",
        "univers": "Disney",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "disney/disney-princess-and-the-frog-beignets.png",
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
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-vision-muffins.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Fraises Spiderman",
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-spiderman-strawberries.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Smoothie Marvel",
        "auteur": "Timoth??e",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-smoothie.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Pancakes ?? la bi??re au beurre",
        "auteur": "Cyriak",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-pancakes.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "G??teaux Choixpeau",
        "auteur": "Audrey",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-wizardhat-cakes.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Cupcakes chaudron",
        "auteur": "Ben",
        "univers": "HarryPotter",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "harrypotter/harry-potter-muffin.jpeg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Cookies Avengers",
        "auteur": "Estefania",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-cookies.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Pizza Capitaine America",
        "auteur": "Lionel",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-pizza-captain-america.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Tacos fa??on Hulk",
        "auteur": "Sylvain",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-hulk-tacos.jpg",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Sandwich Baby Groot",
        "auteur": "Stevie",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-baby-groot-sandwich.png",
        "etapePreparation": [
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        ]
    },
    {
        "nom": "Cookies Avengers",
        "auteur": "Estefania",
        "univers": "marvel",
        "description": "Lorem Ipsum is simply dummy text of the printin",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "marvel/marvel-avengers-blue-cookie.jpg",
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
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Elle te restaure 1962 points de vie et tu seras bien nourri",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "disney/disney-frozen-cupcakes.jpg",
        "etapePreparation": [
            "Pr??parez vos c??telettes en les rin??ant ?? l???eau et placez-les dans un plat.",
            "Saupoudrez les deux c??t??s avec du sel et du poivre et laissez-les de c??t?? pendant que vous pr??parez la sauce.",
            "Commencez par versez le confit d???oranges dans un bol (de pr??f??rence ignifug??).",
            "Ajoutez la sauce de soja et le piment rouge.",
            "Saupoudrez de gingembre.",
            "Enfin, ajoutez deux cuill??res ?? soupe de Sriracha. M??langez le tout jusqu????? ce que vous avez une belle concoction ?? vous d??boucher les sinus.",
            "Faites chauffer un peu d???huile dans une po??le et ajoutez les c??telettes. Faites cuire ?? feu vif jusqu????? ce qu???elles commencent ?? dorer.",
            "Baissez alors le feu et versez environ la moiti?? de votre sauce sur les c??telettes. Faites cuire ?? couvert ?? feu moyen-doux pendant environ 10 minutes, puis retournez les c??telettes et enduisez de nouveau avec la sauce.",
            "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
        ]
    },
    {
        "nom": "Lorem Ipsum zd",
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Elle te restaure 1962 points de vie et tu seras bien nourri",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "disney/disney-frozen-cupcakes.jpg",
        "etapePreparation": [
            "Pr??parez vos c??telettes en les rin??ant ?? l???eau et placez-les dans un plat.",
            "Saupoudrez les deux c??t??s avec du sel et du poivre et laissez-les de c??t?? pendant que vous pr??parez la sauce.",
            "Commencez par versez le confit d???oranges dans un bol (de pr??f??rence ignifug??).",
            "Ajoutez la sauce de soja et le piment rouge.",
            "Saupoudrez de gingembre.",
            "Enfin, ajoutez deux cuill??res ?? soupe de Sriracha. M??langez le tout jusqu????? ce que vous avez une belle concoction ?? vous d??boucher les sinus.",
            "Faites chauffer un peu d???huile dans une po??le et ajoutez les c??telettes. Faites cuire ?? feu vif jusqu????? ce qu???elles commencent ?? dorer.",
            "Baissez alors le feu et versez environ la moiti?? de votre sauce sur les c??telettes. Faites cuire ?? couvert ?? feu moyen-doux pendant environ 10 minutes, puis retournez les c??telettes et enduisez de nouveau avec la sauce.",
            "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
        ]
    },
    {
        "nom": "Lorem Ipsum ze",
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Elle te restaure 1962 points de vie et tu seras bien nourri",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "disney/disney-frozen-cupcakes.jpg",
        "etapePreparation": [
            "Pr??parez vos c??telettes en les rin??ant ?? l???eau et placez-les dans un plat.",
            "Saupoudrez les deux c??t??s avec du sel et du poivre et laissez-les de c??t?? pendant que vous pr??parez la sauce.",
            "Commencez par versez le confit d???oranges dans un bol (de pr??f??rence ignifug??).",
            "Ajoutez la sauce de soja et le piment rouge.",
            "Saupoudrez de gingembre.",
            "Enfin, ajoutez deux cuill??res ?? soupe de Sriracha. M??langez le tout jusqu????? ce que vous avez une belle concoction ?? vous d??boucher les sinus.",
            "Faites chauffer un peu d???huile dans une po??le et ajoutez les c??telettes. Faites cuire ?? feu vif jusqu????? ce qu???elles commencent ?? dorer.",
            "Baissez alors le feu et versez environ la moiti?? de votre sauce sur les c??telettes. Faites cuire ?? couvert ?? feu moyen-doux pendant environ 10 minutes, puis retournez les c??telettes et enduisez de nouveau avec la sauce.",
            "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
        ]
    },
    {
        "nom": "Lorem Ipsum zf",
        "auteur": "Timoth??e",
        "univers": "WorldOfWarcraft",
        "description": "Elle te restaure 1962 points de vie et tu seras bien nourri",
        "ingredients": [
            {
                "_id": coteDePorc_id,
                "quantite": 4,
                "unite": "pi??ce"
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
                "unite": "cuill??re ?? soupe"
            },
            {
                "_id": gingembre_id,
                "quantite": 2,
                "unite": "cuill??re ?? caf??"
            },
            {
                "_id": sauceSriracha_id,
                "quantite": 2,
                "unite": "cuill??re ?? soupe"
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
            "po??le"
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
        "photo": "disney/disney-frozen-cupcakes.jpg",
        "etapePreparation": [
            "Pr??parez vos c??telettes en les rin??ant ?? l???eau et placez-les dans un plat.",
            "Saupoudrez les deux c??t??s avec du sel et du poivre et laissez-les de c??t?? pendant que vous pr??parez la sauce.",
            "Commencez par versez le confit d???oranges dans un bol (de pr??f??rence ignifug??).",
            "Ajoutez la sauce de soja et le piment rouge.",
            "Saupoudrez de gingembre.",
            "Enfin, ajoutez deux cuill??res ?? soupe de Sriracha. M??langez le tout jusqu????? ce que vous avez une belle concoction ?? vous d??boucher les sinus.",
            "Faites chauffer un peu d???huile dans une po??le et ajoutez les c??telettes. Faites cuire ?? feu vif jusqu????? ce qu???elles commencent ?? dorer.",
            "Baissez alors le feu et versez environ la moiti?? de votre sauce sur les c??telettes. Faites cuire ?? couvert ?? feu moyen-doux pendant environ 10 minutes, puis retournez les c??telettes et enduisez de nouveau avec la sauce.",
            "Couvrez et laissez cuire 10 minutes de plus. Ajoutez plus de sauce pour des sensations fortes"
        ]
    },
    {
        "nom": "Gohan takikomi",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Jiraiya",
        "ingredients": [
            {
                "_id": cuisseDePoulet_id,
                "quantite": 300,
                "unite": "gramme"
            },
            {
                "_id": sake_id,
                "quantite": 1,
                "unite": "cuilli??re ?? soupe"
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
            "po??le",
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
        "photo": "naruto/naruto-salade.jpeg",
        "etapePreparation": [
            "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
            "Dans un saladier, m??langez le gingembre avec l'ail, la sauce soja et le sak?? de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
            "??gouttez tout exc??s de liquide et ajoutez le katakuriko. M??langez jusqu'?? ce que le poulet soit compl??tement enrob??.",
            "Faites chauffer de l'huile dans une po??le jusqu'?? ce qu'elle atteigne une temp??rature d'environ 180??C. Testez la temp??rature en mettant un peu de farine dans l'huile : si elle gr??sille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux ?? la fois, jusqu'?? ce qu'ils soient bien dor??s. Quand ils sont pr??ts, retirez-les de la po??le et laissez-les s??cher sur une grille.",
            "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

        ]
    },
    {
        "nom": "Mochis tricolores",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Jiraiya",
        "ingredients": [
            {
                "_id": cuisseDePoulet_id,
                "quantite": 300,
                "unite": "gramme"
            },
            {
                "_id": sake_id,
                "quantite": 1,
                "unite": "cuilli??re ?? soupe"
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
            "po??le",
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
        "photo": "naruto/naruto-dango-mochi.jpg",
        "etapePreparation": [
            "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
            "Dans un saladier, m??langez le gingembre avec l'ail, la sauce soja et le sak?? de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
            "??gouttez tout exc??s de liquide et ajoutez le katakuriko. M??langez jusqu'?? ce que le poulet soit compl??tement enrob??.",
            "Faites chauffer de l'huile dans une po??le jusqu'?? ce qu'elle atteigne une temp??rature d'environ 180??C. Testez la temp??rature en mettant un peu de farine dans l'huile : si elle gr??sille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux ?? la fois, jusqu'?? ce qu'ils soient bien dor??s. Quand ils sont pr??ts, retirez-les de la po??le et laissez-les s??cher sur une grille.",
            "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

        ]
    },
    {
        "nom": "Onigiri fa??on Naruto",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Jiraiya",
        "ingredients": [
            {
                "_id": cuisseDePoulet_id,
                "quantite": 300,
                "unite": "gramme"
            },
            {
                "_id": sake_id,
                "quantite": 1,
                "unite": "cuilli??re ?? soupe"
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
            "po??le",
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
        "photo": "naruto/naruto-onigiri.jpg",
        "etapePreparation": [
            "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
            "Dans un saladier, m??langez le gingembre avec l'ail, la sauce soja et le sak?? de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
            "??gouttez tout exc??s de liquide et ajoutez le katakuriko. M??langez jusqu'?? ce que le poulet soit compl??tement enrob??.",
            "Faites chauffer de l'huile dans une po??le jusqu'?? ce qu'elle atteigne une temp??rature d'environ 180??C. Testez la temp??rature en mettant un peu de farine dans l'huile : si elle gr??sille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux ?? la fois, jusqu'?? ce qu'ils soient bien dor??s. Quand ils sont pr??ts, retirez-les de la po??le et laissez-les s??cher sur une grille.",
            "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

        ]
    },
    {
        "nom": "Yakiniku",
        "auteur": "Timoth??e",
        "univers": "Naruto",
        "description": "Le favori de Jiraiya",
        "ingredients": [
            {
                "_id": cuisseDePoulet_id,
                "quantite": 300,
                "unite": "gramme"
            },
            {
                "_id": sake_id,
                "quantite": 1,
                "unite": "cuilli??re ?? soupe"
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
            "po??le",
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
        "photo": "naruto/naruto-yakiniku.jpeg",
        "etapePreparation": [
            "Coupez le poulet en petits morceaux (laissez la peau pour plus de croustillant).",
            "Dans un saladier, m??langez le gingembre avec l'ail, la sauce soja et le sak?? de cuisson. Ajoutez le poulet, enrobez-le bien et laissez mariner 30 minutes.",
            "??gouttez tout exc??s de liquide et ajoutez le katakuriko. M??langez jusqu'?? ce que le poulet soit compl??tement enrob??.",
            "Faites chauffer de l'huile dans une po??le jusqu'?? ce qu'elle atteigne une temp??rature d'environ 180??C. Testez la temp??rature en mettant un peu de farine dans l'huile : si elle gr??sille en tombant, l'huile est assez chaude. Faites frire 3 ou 4 morceaux ?? la fois, jusqu'?? ce qu'ils soient bien dor??s. Quand ils sont pr??ts, retirez-les de la po??le et laissez-les s??cher sur une grille.",
            "Servez froid ou chaud, avec quelques quartiers de citron et un filet de mayonnaise japonaise."

        ]
    },
    {
        "nom": "G??teau la Belle au bois dormant",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-sleeping-beauty-cake.jpeg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Sandwich ?? la cr??me glac??e C-3PO",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-c3po-ice-cream-sandwich.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Petit d??jeuner fa??on Raiponce",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-breakfast-rapunzel.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Cookies Cendrillon",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-cinderella-cookies.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Tarte Baby Yoda",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-baby-yoda-pie.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Smoothie Mike Wazowski",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-monsters-inc-green-smoothie.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Cr??me glac??e Mickey",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-mickey-cookie-dough.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Cookies Raiponce",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/cookies-rapunzel.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    },
    {
        "nom": "Snacks La Petite Sir??ne",
        "auteur": "Estefania",
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
                "unite": "pi??ce",
                "quantite": 4
            },
            {
                "_id": lait_id,
                "unite": "centilitre",
                "quantite": 50
            },
            {
                "_id": sel_id,
                "unite": "pinc??e",
                "quantite": 1
            },
            {
                "_id": sucre_id,
                "unite": "cuill??re ?? soupe",
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
        "photo": "disney/disney-little-mermaid-clam-shells.jpg",
        "etapePreparation": [
            "Mettez la farine dans un saladier avec le sel et le sucre.",
            "Faites un puits au milieu et versez-y les ??ufs.",
            "Commencez ?? m??langer doucement. Quand le m??lange devient ??pais, ajoutez le lait froid petit ?? petit.",
            "Quand tout le lait est m??lang??, la p??te doit ??tre assez fluide. Si elle vous para??t trop ??paisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, m??langez bien.",
            "Faites cuire les cr??pes dans une po??le chaude (par pr??caution l??g??rement huil??e si votre po??le ?? cr??pes n'est pas anti-adh??sive). Versez une petite louche de p??te dans la po??le, faites un mouvement de rotation pour r??partir la p??te sur toute la surface. Posez sur le feu et quand le tour de la cr??pe se colore en roux clair, il est temps de la retourner.",
            "Laissez cuire environ une minute de ce c??t?? et la cr??pe est pr??te.",
            "R??p??tez jusqu'?? ??puisement de la p??te."
        ]
    }
])