<?php
session_start(); // Démarrer la session

// Étape 4 : Réinitialisation de la session
if (isset($_GET['reset'])) {
    session_destroy();
    session_start();
    header("Location: exercice.php");
    exit();
}

// Étape 3 : Gestion des priorités entre GET, SESSION et POST
if (isset($_GET['first_name']) && !empty($_GET['first_name'])) {
    $name = htmlspecialchars($_GET['first_name']);
} elseif (isset($_SESSION['first_name']) && !empty($_SESSION['first_name'])) {
    $name = htmlspecialchars($_SESSION['first_name']);
} elseif (isset($_POST['first_name']) && !empty($_POST['first_name'])) {
    $name = htmlspecialchars($_POST['first_name']);
    $_SESSION['first_name'] = $name; // Sauvegarde en session
} else {
    $name = "anonyme";
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice PHP Super-globales</title>
</head>
<body>
    <h1>Bonjour <?php echo $name; ?> !</h1>
    
    <form action="exercice.php" method="post">
        <p>Votre nom : <input type="text" name="first_name" /></p>
        <p><input type="submit" value="OK"></p>
    </form>
    
    <a href="exercice.php?reset=true">Reset</a>
</body>
</html>
