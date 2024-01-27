function checkSecretKey() {
    var secretKeyInput = document.getElementById('secret-key').value;
    
    // Provera da li je uneti tajni ključ tačan
    if (secretKeyInput === '10') {
        // Ako je tačan, preusmeri na /10.html
        window.location.href = '/zagonetka/10.html';
    } else {
        // Ako nije tačan, obavesti korisnika
        alert('Pogrešan tajni ključ. Pokušajte ponovo.');
    }
}

function checkSecretKey1() {
    var secretKeyInput = document.getElementById('secret-key1').value;
    
    // Provera da li je uneti tajni ključ tačan
    if (secretKeyInput === '25.10.2023') {
        // Ako je tačan, preusmeri na /10.html
        window.location.href = '/zagonetka/jej.html';
    } else {
        // Ako nije tačan, obavesti korisnika
        alert('Pogrešan tajni ključ. Pokušajte ponovo.');
    }
}



function showHint() {
    
    // Dodavanje pop-up dijaloga u telo dokumenta
    alert("Koj mesec biv kd smo official zaeno");
    
    // Zatvaranje pop-up dijaloga nakon 3 sekunde
    setTimeout(function() {
        hintPopup.remove();
    }, 3000);
}