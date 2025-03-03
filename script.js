

template



Overlay bzw. Dialog erstellen
<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        
    }

    .d_none {
        display: none;

<style>
<script>

    function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    }

</script>

// /*html*/
<div onclick="toggleOverlay()" id=overlay class = overlay >Click me</div>






---------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Render Doors</title>
    <style>
        .doors {
            display: inline-block;
            width: 50px;
            height: 50px;
            margin: 5px;
            background-color: lightblue;
            text-align: center;
            line-height: 50px;
            border: 1px solid black;
        }
    </style>
</head>
<body>

  


  // call with Giuliano

// css : use wrap



let images = [

"./img/door1.jpg",

];



    <script>
        function renderDoors() {
            for (let i = 1; images.lenght +1 ; i++) {  
                document.getElementById('content').innerHTML += /*html*/ `
                <div id="door${i+1}" onclick="openDoor(${i + 1})"   class='doors'>

            `}

            function openDoors(1) {
                console.log('Door ${i+1} was clicked');
                document.getElementById(
                `door${i+1}`
                ).style.backgroundImage = 'url('./img/cst{i).jpg')';
            }
        }
    </script>

</body>
</html>
