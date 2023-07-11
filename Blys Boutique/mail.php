<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
    $retour = mail('blysboutique@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From:blysboutique@gmail.com');
    if ($retour){
        echo '<p>Votre message a bien été envoyé.</p>';
    }
    ?>
</body>
</html>