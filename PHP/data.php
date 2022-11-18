<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <form action="data.php" method='get'>
        Name: <input type="text" name='name'> <br>
        Age: <input type="number" name='age'>
        <input type="submit">
    </form>
    <br>
    Your name is <?php //echo $_GET['name']  ?> <br>
    Your age is <?php // echo $_GET['age']  ?> <hr > -->


   <!-- <form action="data.php" method='get'>
        Color: <input type="text" name='color'><br>
        Plural noun: <input type="text" name='pluralNoun'><br>
        Celebrity: <input type="text" name='celebrity'><br>
        <input type="submit"> -->
    </form>

    <?php   
        // $color = $_GET['color'];
        // $pluralNoun = $_GET['pluralNoun'];
        // $celebrity = $_GET['celebrity'];

        // echo 'roses are '.$color.'<br>';
        // echo $pluralNoun.' are blue <br>';
        // echo 'I love '.$celebrity.'<br>';   -->
    ?>
<!-- 
    <form action="data.php" method='post'>
        <input type="password" name='password'>
        <input type="submit">
    </form> -->
    <?php // echo $_POST['password'] ?>

    <form action="data.php" method='post'>
        Apples: <input type="checkbox" name='fruits[]' value='apples'>
        Oranges: <input type="checkbox" name='fruits[]' value='oranges'>
        Pears: <input type="checkbox" name='fruits[]' value='pears'>
        <input type="submit">
    </form>

    <?php 
        // Arrays 
        //  $freinds = array('mg mg', 'ko ko');
        //  echo count($freinds)
        $fruits = $_POST['fruits'];
        echo $fruits;
        // echo gettype($fruits);
    ?>
</body>
</html>