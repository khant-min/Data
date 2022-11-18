<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $name = 'John';
        $age = 23;
        echo 'My name is ' .$name. '<br>';
        echo 'I am ' .$age. ' years old. <br>';

    // String functions...

        $pharase = 'Giffrace Acedamy <br/>';
        echo strtolower($pharase);
        echo strtoupper('dog');
        //// strings to lower and upper

        echo strlen('hello');
        //// length of a string
        echo $name[0];
        echo $name[0] = 'D';
        echo $name;
        echo str_replace('Giffrace', 'Panda', $pharase);
        /// replaceing a string (1st parm => want to change, 2nd parm changing string, 3rd changing variable)
        $pharase = 'Code Acedamy';
        echo substr($pharase, 6, 8);
        //// filtering a string (1st parm => changing variable, 2nd parm => execute length, 3rd parm => showing length)
        echo '<hr>';
        echo gettype('hello');
        echo gettype(23);
        echo gettype(23.23);

    /// Number functions...
        echo 3 ** 3;
        echo pow(3 ,5);
        /// power
        echo sqrt(144);
        /// square root
        echo '<br>';
        echo abs(100);
        echo abs(-100);
        /// abs func prints absolute value
        echo 4^4;
        echo max(2, 23);
        echo min(2, 23);
        echo round(4.7);
        echo ceil(3.4);
        echo floor(3.4);
    ?>

</body>
</html>
