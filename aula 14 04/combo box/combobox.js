<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio - aula 6</title>
</head>
<body>
    <p>Vamos Iniciar nossa Combo</p>
    <select onchange="combo(this.value)"> 
        <option value="1">Rio de Janeiro</option>
        <option>Curitiba</option>
        <option>São Paulo</option>
    </select>
</body>
<script>
    function combo(valor) {
       alert(valor);
    }
</script>
</html>
