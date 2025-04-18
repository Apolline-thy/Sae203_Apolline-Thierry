Cardinalités Lopping :

Cardinalités entre Favoris et Movie :
Un favori peut être associé à 1 film minimum et 1 film maximum.
Un film peut être associé à 0 favoris minimum (si aucun profil n'a mis ce film en favoris) et à plusieurs favoris maximum.

Cardinalités entre Profile et Favoris :
Un profil peut avoir 0 favoris minimum (si le profil n'a ajouté aucun film en favoris) et plusieurs favoris maximum.
Un favori peut être associé à 0 profils minimum (si ce favori n'a pas été mis en favoris par un profil) et plusieurs profils maximum (si plusieurs profils mettent ce film en favoris).

Cardinalités entre Movie et Category :
Un film est associé à une seule catégorie — il doit appartenir à une catégorie au minimum et à une seule catégorie au maximum.
Une catégorie peut ne contenir aucun film (si aucun n’a encore été ajouté à cette catégorie), mais elle peut également regrouper un nombre illimité de films.

Itération 4 :
J'ai effectué une jointure entre les tables Movie et Category via les colonnes id_Category et Movie_id_Category en utilisant la syntaxe suivante : LEFT JOIN Category ON Movie.id_category = Category.id. Cette jointure m'a permis de regrouper les films par catégories. Sans cette jointure, la fonctionnalité de regroupement n'aurait pas fonctionné correctement.

Itération 5 :
J'ai ajouté une nouvelle table Profile contenant les attributs suivants : name, id, avatar et date_naissance. Cela permet de gérer les informations des utilisateurs ou des profils de manière centralisée dans la base de données.

Itération 7 :
J'ai réalisé une nouvelle jointure entre les tables Movie et Category en utilisant la colonne id_Category pour lier les deux tables via la syntaxe LEFT JOIN Category ON Movie.id_category = Category.id. Cette jointure reste indispensable pour obtenir des informations sur la catégorie des films.

Itération 9 :
J'ai créé la table Favoris afin de permettre la gestion des films favoris en fonction des profils des utilisateurs. De plus, j'ai intégré à cette étape la jointure LEFT JOIN Category ON Movie.id_category = Category.id, afin de maintenir la relation entre les films et leurs catégories.

Itération 11 :
J'ai ajouté un nouvel attribut featured dans la table Movie. Cet attribut permet de déterminer si un film doit être mis en avant ou non sur la plateforme. Sa valeur est de 1 pour un film mis en avant et de 0 pour un film qui ne l'est pas. Cela permet de gérer la visibilité des films sur l'interface utilisateur.
