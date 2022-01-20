db = db.getSiblingDB('FanTastyDB');

db.createCollection('Recettes');
db.createCollection('Ingredients');

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
    }
]);

db.Recettes.insertMany([
    {
        "nom": "Les Ramen Ichiraku",
        "auteur": "Timothée",
        "univers": "Naruto",
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
            "difficulte": "Moyen",
            "cout": "Moyen",
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
        "univers": "Harry Potter",
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
            "difficulte": "Facile",
            "cout": "Bon marché",
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
            "difficulte": "Facile",
            "cout": "Bon marché",
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