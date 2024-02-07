<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        .navbar                                                   {overflow: hidden; background-color: #333; font-family: Arial, Helvetica, sans-serif;}
        .navbar a                                                 {float: left; font-size: 16px; color: white; text-align: center; padding: 14px 16px; text-decoration: none;}
        .dropdown                                                 {float: left; overflow: hidden;}
        .dropdown .dropbtn                                        {cursor: pointer; font-size: 16px; border: none; outline: none; color: white; padding: 14px 16px; background-color: inherit; font-family: inherit; margin: 0;}
        .navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {background-color: red;}
        .dropdown-content                                         {display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;}
        .dropdown-content a                                       {float: none; color: black; padding: 12px 16px; text-decoration: none; display: block; text-align: left;}
        .dropdown-content a:hover                                 {background-color: #ddd;}
        .show                                                     {display: block;}
    </style>

</head>

<body>

    <div class="navbar">

        <a href="#home">Home</a>
        <a href="#news">News</a>

        <div class="dropdown">

            <button class="dropbtn" onclick="myFunction()">
                Desplegable <i class="fa fa-caret-down"></i>
            </button>

            <div class="dropdown-content" id="myDropdown">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>

        </div> 

    </div>

    <h3>Menú desplegable dentro de una barra de navegación.</h3>

    <p>Haga clic en el enlace "Desplegable" para ver el menú desplegable.</p>

    <script>

        // Cuando el usuario hace clic en el botón, alternar entre ocultar y mostrar el contenido desplegable.
        function myFunction() 
        {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        function myFunction2() 
        {
            document.getElementById("myDropdown2").classList.toggle("show");
        }

        // Cierra el menú desplegable si el usuario hace clic fuera de él.
        window.onclick = function(e) 
        {
            if (!e.target.matches('.dropbtn')) 
            {
                var myDropdown = document.getElementById("myDropdown");

                if (myDropdown.classList.contains('show')) 
                {
                    myDropdown.classList.remove('show');
                }

                
                var myDropdown = document.getElementById("myDropdown2");
                
                if (myDropdown.classList.contains('show')) 
                {
                    myDropdown.classList.remove('show');
                }
            }
        }
        
    </script>

</body>

</html>