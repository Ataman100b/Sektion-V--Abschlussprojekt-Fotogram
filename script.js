

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