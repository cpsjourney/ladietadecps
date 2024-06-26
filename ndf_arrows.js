
//DICHIARAZIONI INIZIALI ESSENZIALI
//LUNEDI
var titolocontenuto_leftarrow_1 = document.getElementById('left_1');
var titolocontenuto_colazione_1 = document.getElementById('colazione_1');
var titolocontenuto_rightarrow_1 = document.getElementById('right_1');
var contenuto_default_1 = document.getElementById('cl1');

//MARTEDI
var titolocontenuto_leftarrow_2 = document.getElementById('left_2');
var titolocontenuto_colazione_2 = document.getElementById('colazione_2');
var titolocontenuto_rightarrow_2 = document.getElementById('right_2');
var contenuto_default_2 = document.getElementById('cl2');

//MERCOLEDI
var titolocontenuto_leftarrow_3 = document.getElementById('left_3');
var titolocontenuto_colazione_3 = document.getElementById('colazione_3');
var titolocontenuto_rightarrow_3 = document.getElementById('right_3');
var contenuto_default_3 = document.getElementById('cl3');

//GIOVEDI
var titolocontenuto_leftarrow_4 = document.getElementById('left_4');
var titolocontenuto_colazione_4 = document.getElementById('colazione_4');
var titolocontenuto_rightarrow_4 = document.getElementById('right_4');
var contenuto_default_4 = document.getElementById('cl4');

//VENERDI
var titolocontenuto_leftarrow_5 = document.getElementById('left_5');
var titolocontenuto_colazione_5 = document.getElementById('colazione_5');
var titolocontenuto_rightarrow_5 = document.getElementById('right_5');
var contenuto_default_5 = document.getElementById('cl5');

//SABATO
var titolocontenuto_leftarrow_6 = document.getElementById('left_6');
var titolocontenuto_colazione_6 = document.getElementById('colazione_6');
var titolocontenuto_rightarrow_6 = document.getElementById('right_6');
var contenuto_default_6 = document.getElementById('cl6');

//DOMENICA
var titolocontenuto_leftarrow_7 = document.getElementById('left_7');
var titolocontenuto_colazione_7 = document.getElementById('colazione_7');
var titolocontenuto_rightarrow_7 = document.getElementById('right_7');
var contenuto_default_7 = document.getElementById('cl7');
var giornodellasettimana_ecc = document.getElementById('giornodellasettimana_ecc');
var divtitolocontenuto_ecc = document.getElementById('divtitolocontenuto_ecc');


//BLOCCO DEL LUNEDI
titolocontenuto_leftarrow_1.onclick = function() {

    if (titolocontenuto_colazione_1.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_1.innerHTML = "CENA";
        contenuto_default_1.innerHTML = `
            - BROCCOLI 150g | kcal: 52, prot: 5g, carbo: 10g, fibre: 5g<br>
            - PETTO DI POLLO 200g | kcal: 330, prot: 62g, grassi: 7g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 1 YOGURT 125g | kcal: 90, prot: 5g, carbo: 10g, grassi: 3g<br>
            (_TOT_ KCAL: 862, PROT: 72g, CARBO: 20g, GRASSI: 55g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "CENA") {
        titolocontenuto_colazione_1.innerHTML = "MERENDA";
        contenuto_default_1.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "MERENDA") {
        titolocontenuto_colazione_1.innerHTML = "PRANZO";
        contenuto_default_1.innerHTML = `
            - PASTA (in bianco) 130g | kcal: 460, prot: 12g, carbo: 90g, grassi: 1g, fibre: 2g<br>
            - CECI 70g | kcal: 82, prot: 4g, carbo: 13g, grassi: 1g<br>
            - 2 MELE 300g | kcal: 120, prot: 1g, carbo: 30g, fibre: 5g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 862, PROT: 27g, CARBO: 183g, GRASSI: 2g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "PRANZO") {
        titolocontenuto_colazione_1.innerHTML = "COLAZIONE";
        contenuto_default_1.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 BISCOTTI (tremarie) 45g | kcal: 230, prot: 3g, carbo: 30g, grassi: 10g, fibre: 1g<br>
            - 2 BANANE 200g | kcal: 180, prot: 2g, carbo: 44g<br>
            - 1 YOGURT DA BERE 500ml | kcal: 300, prot: 17g, carbo: 23g, grassi 15g<br>
            (_TOT_ KCAL: 797, PROT: 43g, CARBO: 97g, GRASSI: 25g, FIBRE: 1g)
        `;
    }
}
titolocontenuto_rightarrow_1.onclick = function() {

    if (titolocontenuto_colazione_1.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_1.innerHTML = "PRANZO";
        contenuto_default_1.innerHTML = `
            - PASTA (in bianco) 130g | kcal: 460, prot: 12g, carbo: 90g, grassi: 1g, fibre: 2g<br>
            - CECI 70g | kcal: 82, prot: 4g, carbo: 13g, grassi: 1g<br>
            - 2 MELE 300g | kcal: 120, prot: 1g, carbo: 30g, fibre: 5g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 862, PROT: 27g, CARBO: 183g, GRASSI: 2g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "PRANZO") {
        titolocontenuto_colazione_1.innerHTML = "MERENDA";
        contenuto_default_1.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "MERENDA") {
        titolocontenuto_colazione_1.innerHTML = "CENA";
        contenuto_default_1.innerHTML = `
            - BROCCOLI 150g | kcal: 52, prot: 5g, carbo: 10g, fibre: 5g<br>
            - PETTO DI POLLO 200g | kcal: 330, prot: 62g, grassi: 7g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 1 YOGURT 125g | kcal: 90, prot: 5g, carbo: 10g, grassi: 3g<br>
            (_TOT_ KCAL: 862, PROT: 72g, CARBO: 20g, GRASSI: 55g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_1.innerHTML === "CENA") {
        titolocontenuto_colazione_1.innerHTML = "COLAZIONE";
        contenuto_default_1.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 BISCOTTI (tremarie) 45g | kcal: 230, prot: 3g, carbo: 30g, grassi: 10g, fibre: 1g<br>
            - 2 BANANE 200g | kcal: 180, prot: 2g, carbo: 44g<br>
            - 1 YOGURT DA BERE 500ml | kcal: 300, prot: 17g, carbo: 23g, grassi 15g<br>
            (_TOT_ KCAL: 797, PROT: 43g, CARBO: 97g, GRASSI: 25g, FIBRE: 1g)
        `;
    }
}


//BLOCCO DEL MARTEDI
titolocontenuto_leftarrow_2.onclick = function() {

    if (titolocontenuto_colazione_2.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_2.innerHTML = "CENA";
        contenuto_default_2.innerHTML = `
            - MERLUZZO 200g | kcal: 160, prot: 34, grassi: 1g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 810, PROT: 60g, CARBO: 58g, GRASSI: 35g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "CENA") {
        titolocontenuto_colazione_2.innerHTML = "MERENDA";
        contenuto_default_2.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 948, PROT: 28g, CARBO: 75g, GRASSI: 59g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "MERENDA") {
        titolocontenuto_colazione_2.innerHTML = "PRANZO";
        contenuto_default_2.innerHTML = `
            - CANNELLONI 250g | kcal: 422, prot: 20g, carbo: 50g, grassi: 17g, fibre: 3g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 727, PROT: 34g, CARBO: 112g, GRASSI: 17g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "PRANZO") {
        titolocontenuto_colazione_2.innerHTML = "COLAZIONE";
        contenuto_default_2.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 1 PESCA 150g | kcal: 60, prot: 2g, carbo: 15g<br>
            (_TOT_ KCAL: 617, PROT: 19g, CARBO: 83g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}
titolocontenuto_rightarrow_2.onclick = function() {

    if (titolocontenuto_colazione_2.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_2.innerHTML = "PRANZO";
        contenuto_default_2.innerHTML = `
            - CANNELLONI 250g | kcal: 422, prot: 20g, carbo: 50g, grassi: 17g, fibre: 3g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 727, PROT: 34g, CARBO: 112g, GRASSI: 17g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "PRANZO") {
        titolocontenuto_colazione_2.innerHTML = "MERENDA";
        contenuto_default_2.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 948, PROT: 28g, CARBO: 75g, GRASSI: 59g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "MERENDA") {
        titolocontenuto_colazione_2.innerHTML = "CENA";
        contenuto_default_2.innerHTML = `
            - MERLUZZO 200g | kcal: 160, prot: 34, grassi: 1g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 810, PROT: 60g, CARBO: 58g, GRASSI: 35g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_2.innerHTML === "CENA") {
        titolocontenuto_colazione_2.innerHTML = "COLAZIONE";
        contenuto_default_2.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 1 PESCA 150g | kcal: 60, prot: 2g, carbo: 15g<br>
            (_TOT_ KCAL: 617, PROT: 19g, CARBO: 83g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}


//BLOCCO DEL MERCOLEDI
titolocontenuto_leftarrow_3.onclick = function() {

    if (titolocontenuto_colazione_3.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_3.innerHTML = "CENA";
        contenuto_default_3.innerHTML = `
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - PETTO DI POLLO 150g | kcal: 248, prot: 47g, grassi: 5g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 863, PROT: 60g, CARBO: 53g, GRASSI: 50g, FIBRE: 4g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "CENA") {
        titolocontenuto_colazione_3.innerHTML = "MERENDA";
        contenuto_default_3.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "MERENDA") {
        titolocontenuto_colazione_3.innerHTML = "PRANZO";
        contenuto_default_3.innerHTML = `
            - PASTA TONNO E OLIVE (200g pasta 100g tonno 50g olive) | kcal: 858, prot: 48g, carbo: 153g, grassi: 10g, fibre: 6g<br>
            - 2 MELE 300g | kcal: 120, prot: 1g, carbo: 30g, fibre: 5g<br>
            (_TOT_ KCAL: 978, PROT: 49g, CARBO: 183g, GRASSI: 10g, FIBRE: 11g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "PRANZO") {
        titolocontenuto_colazione_3.innerHTML = "COLAZIONE";
        contenuto_default_3.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 MUFFIN CIOCCOLATO 126g | kcal: 558, prot: 8g, carbo: 66g, grassi: 30g, fibre: 2g<br>
            - 100ml LATTE (no lattosio) | kcal: 43, prot: 4g, carbo: 5g, grassi: 1g<br>
            (_TOT_ KCAL: 688, PROT: 33g, CARBO: 71g, GRASSI: 31g, FIBRE: 2g)
        `;
        
    }
}
titolocontenuto_rightarrow_3.onclick = function() {

    if (titolocontenuto_colazione_3.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_3.innerHTML = "PRANZO";
        contenuto_default_3.innerHTML = `
            - PASTA TONNO E OLIVE (200g pasta 100g tonno 50g olive) | kcal: 858, prot: 48g, carbo: 153g, grassi: 10g, fibre: 6g<br>
            - 2 MELE 300g | kcal: 120, prot: 1g, carbo: 30g, fibre: 5g<br>
            (_TOT_ KCAL: 978, PROT: 49g, CARBO: 183g, GRASSI: 10g, FIBRE: 11g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "PRANZO") {
        titolocontenuto_colazione_3.innerHTML = "MERENDA";
        contenuto_default_3.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "MERENDA") {
        titolocontenuto_colazione_3.innerHTML = "CENA";
        contenuto_default_3.innerHTML = `
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - PETTO DI POLLO 150g | kcal: 248, prot: 47g, grassi: 5g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 863, PROT: 60g, CARBO: 53g, GRASSI: 50g, FIBRE: 4g)
        `;
    } else if (titolocontenuto_colazione_3.innerHTML === "CENA") {
        titolocontenuto_colazione_3.innerHTML = "COLAZIONE";
        contenuto_default_3.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 MUFFIN CIOCCOLATO 126g | kcal: 558, prot: 8g, carbo: 66g, grassi: 30g, fibre: 2g<br>
            - 100ml LATTE (no lattosio) | kcal: 43, prot: 4g, carbo: 5g, grassi: 1g<br>
            (_TOT_ KCAL: 688, PROT: 33g, CARBO: 71g, GRASSI: 31g, FIBRE: 2g)
        `;
    }
}


//BLOCCO DEL GIOVEDI
titolocontenuto_leftarrow_4.onclick = function() {

    if (titolocontenuto_colazione_4.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_4.innerHTML = "CENA";
        contenuto_default_4.innerHTML = `
            - PETTO DI POLLO 150g | kcal: 248, prot: 47g, grassi: 5g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            (_TOT_ KCAL: 828, PROT: 50g, CARBO: 52g, GRASSI: 50g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "CENA") {
        titolocontenuto_colazione_4.innerHTML = "MERENDA";
        contenuto_default_4.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "MERENDA") {
        titolocontenuto_colazione_4.innerHTML = "PRANZO";
        contenuto_default_4.innerHTML = `
            - PASTA TONNO E OLIVE (200g pasta 100g tonno 50g olive) | kcal: 858, prot: 48g, carbo: 153g, grassi: 10g, fibre: 6g<br>
            - 1 PACCO DI FESA DI TACCHINO 140g | kcal: 140, prot: 26, carbo: 4g, grassi: 2g<br>
            (_TOT_ KCAL: 998, PROT: 74g, CARBO: 157g, GRASSI: 12g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "PRANZO") {
        titolocontenuto_colazione_4.innerHTML = "COLAZIONE";
        contenuto_default_4.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            (_TOT_ KCAL: 647, PROT: 18g, CARBO: 90g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}
titolocontenuto_rightarrow_4.onclick = function() {

    if (titolocontenuto_colazione_4.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_4.innerHTML = "PRANZO";
        contenuto_default_4.innerHTML = `
            - PASTA TONNO E OLIVE (200g pasta 100g tonno 50g olive) | kcal: 858, prot: 48g, carbo: 153g, grassi: 10g, fibre: 6g<br>
            - 1 PACCO DI FESA DI TACCHINO 140g | kcal: 140, prot: 26, carbo: 4g, grassi: 2g<br>
            (_TOT_ KCAL: 998, PROT: 74g, CARBO: 157g, GRASSI: 12g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "PRANZO") {
        titolocontenuto_colazione_4.innerHTML = "MERENDA";
        contenuto_default_4.innerHTML = `
            - 1 YOGURT 125g (2% grassi) | kcal: 77, prot: 10g, carbo: 15g, grassi: 3g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 6 BISCOTTI (tremarie) 90g | kcal: 460, prot: 6g, carbo: 60g, grassi: 20g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 757, PROT: 43g, CARBO: 108g, GRASSI: 24g, FIBRE: 7g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "MERENDA") {
        titolocontenuto_colazione_4.innerHTML = "CENA";
        contenuto_default_4.innerHTML = `
            - PETTO DI POLLO 150g | kcal: 248, prot: 47g, grassi: 5g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 2 ARANCE 230g(no buccia) | kcal: 100, prot: 2g, carbo: 30g, fibre: 5g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            (_TOT_ KCAL: 828, PROT: 50g, CARBO: 52g, GRASSI: 50g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_4.innerHTML === "CENA") {
        titolocontenuto_colazione_4.innerHTML = "COLAZIONE";
        contenuto_default_4.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            (_TOT_ KCAL: 647, PROT: 18g, CARBO: 90g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}


//BLOCCO DEL VENERDI
titolocontenuto_leftarrow_5.onclick = function() {

    if (titolocontenuto_colazione_5.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_5.innerHTML = "CENA";
        contenuto_default_5.innerHTML = `
            - MERLUZZO 200g | kcal: 160, prot: 34, grassi: 1g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 810, PROT: 60g, CARBO: 58g, GRASSI: 35g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "CENA") {
        titolocontenuto_colazione_5.innerHTML = "MERENDA";
        contenuto_default_5.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 938, PROT: 27g, CARBO: 67g, GRASSI: 59g, FIBRE: 1g)
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "MERENDA") {
        titolocontenuto_colazione_5.innerHTML = "PRANZO";
        contenuto_default_5.innerHTML = `
            - TAGLIATELLE AL RAGU 250g | kcal: 402, prot: 15g, carbo: 50g, grassi: 17g, fibre: 9g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 707, PROT: 29g, CARBO: 112g, GRASSI: 17g, FIBRE: 15g) 
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "PRANZO") {
        titolocontenuto_colazione_5.innerHTML = "COLAZIONE";
        contenuto_default_5.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 2 PESCHE 150g | kcal: 120, prot: 4g, carbo: 30g<br>
            (_TOT_ KCAL: 677, PROT: 21g, CARBO: 98g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}
titolocontenuto_rightarrow_5.onclick = function() {

    if (titolocontenuto_colazione_5.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_5.innerHTML = "PRANZO";
        contenuto_default_5.innerHTML = `
            - TAGLIATELLE AL RAGU 250g | kcal: 402, prot: 15g, carbo: 50g, grassi: 17g, fibre: 9g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 707, PROT: 29g, CARBO: 112g, GRASSI: 17g, FIBRE: 15g) 
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "PRANZO") {
        titolocontenuto_colazione_5.innerHTML = "MERENDA";
        contenuto_default_5.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 938, PROT: 27g, CARBO: 67g, GRASSI: 59g, FIBRE: 1g)
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "MERENDA") {
        titolocontenuto_colazione_5.innerHTML = "CENA";
        contenuto_default_5.innerHTML = `
            - MERLUZZO 200g | kcal: 160, prot: 34, grassi: 1g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 810, PROT: 60g, CARBO: 58g, GRASSI: 35g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_5.innerHTML === "CENA") {
        titolocontenuto_colazione_5.innerHTML = "COLAZIONE";
        contenuto_default_5.innerHTML = `
            - 4 PANCAKE 160g (tremulini) | kcal: 472, prot: 10g, carbo: 58g, grassi: 23g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 85, prot: 7g, carbo: 10g, grassi: 2g<br>
            - 2 PESCHE 150g | kcal: 120, prot: 4g, carbo: 30g<br>
            (_TOT_ KCAL: 677, PROT: 21g, CARBO: 98g, GRASSI: 25g, FIBRE: 2g)
        `;
    }
}


//BLOCCO DEL SABATO
titolocontenuto_leftarrow_6.onclick = function() {

    if (titolocontenuto_colazione_6.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_6.innerHTML = "CENA";
        contenuto_default_6.innerHTML = `
            - PETTO DI POLLO 200g | kcal: 331, prot: 62g, grassi: 7g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 1 MELA 150g | kcal: 60, prot: 1g, carbo: 15g, fibre: 2g<br>
            (_TOT_ KCAL: 781, PROT: 63g, CARBO: 15g, GRASSI: 52g, FIBRE: 2g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "CENA") {
        titolocontenuto_colazione_6.innerHTML = "MERENDA";
        contenuto_default_6.innerHTML = `
            - 2 YOGURT 250g (2% grassi) | kcal: 154, prot: 20g, carbo: 30g, grassi: 6g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 5 BISCOTTI (tremarie) 75g | kcal: 385, prot: 5g, carbo: 50g, grassi: 17g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 749, PROT: 51g, CARBO: 105g, GRASSI: 24g, FIBRE: 2g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "MERENDA") {
        titolocontenuto_colazione_6.innerHTML = "PRANZO";
        contenuto_default_6.innerHTML = `
            - PASTA (in bianco) 170g | kcal: 596, prot: 15g, carbo: 118g, grassi: 1g, fibre: 4g<br>
            - CECI 70g | kcal: 82, prot: 4g, carbo: 13g, grassi: 1g<br>
            - 2 PESCHE 150g | kcal: 120, prot: 4g, carbo: 30g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 998, PROT: 33g, CARBO: 211g, GRASSI: 2g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "PRANZO") {
        titolocontenuto_colazione_6.innerHTML = "COLAZIONE";
        contenuto_default_6.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 MUFFIN CIOCCOLATO 126g | kcal: 558, prot: 8g, carbo: 66g, grassi: 30g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 86, prot: 8g, carbo: 10g, grassi: 2g<br>
            (_TOT_ KCAL: 731, PROT: 37g, CARBO: 76g, GRASSI: 32g, FIBRE: 2g)
        `;
    }
}
titolocontenuto_rightarrow_6.onclick = function() {

    if (titolocontenuto_colazione_6.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_6.innerHTML = "PRANZO";
        contenuto_default_6.innerHTML = `
            - PASTA (in bianco) 170g | kcal: 596, prot: 15g, carbo: 118g, grassi: 1g, fibre: 4g<br>
            - CECI 70g | kcal: 82, prot: 4g, carbo: 13g, grassi: 1g<br>
            - 2 PESCHE 150g | kcal: 120, prot: 4g, carbo: 30g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 998, PROT: 33g, CARBO: 211g, GRASSI: 2g, FIBRE: 6g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "PRANZO") {
        titolocontenuto_colazione_6.innerHTML = "MERENDA";
        contenuto_default_6.innerHTML = `
            - 2 YOGURT 250g (2% grassi) | kcal: 154, prot: 20g, carbo: 30g, grassi: 6g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 5 BISCOTTI (tremarie) 75g | kcal: 385, prot: 5g, carbo: 50g, grassi: 17g, fibre: 2g<br>
            - 1 INTEGRATORE PROT 1misurino | kcal: 120, prot: 25g, carbo: 3g, grassi: 1g<br>
            (_TOT_ KCAL: 749, PROT: 51g, CARBO: 105g, GRASSI: 24g, FIBRE: 2g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "MERENDA") {
        titolocontenuto_colazione_6.innerHTML = "CENA";
        contenuto_default_6.innerHTML = `
            - PETTO DI POLLO 200g | kcal: 331, prot: 62g, grassi: 7g<br>
            - 3 CUCCHIAI D'OLIO EVO | kcal: 390, grassi: 45g<br>
            - 1 MELA 150g | kcal: 60, prot: 1g, carbo: 15g, fibre: 2g<br>
            (_TOT_ KCAL: 781, PROT: 63g, CARBO: 15g, GRASSI: 52g, FIBRE: 2g)
        `;
    } else if (titolocontenuto_colazione_6.innerHTML === "CENA") {
        titolocontenuto_colazione_6.innerHTML = "COLAZIONE";
        contenuto_default_6.innerHTML = `
            - ALBUME D'UOVO 200g | kcal: 87, prot: 21g<br>
            - 3 MUFFIN CIOCCOLATO 126g | kcal: 558, prot: 8g, carbo: 66g, grassi: 30g, fibre: 2g<br>
            - 200ml LATTE (no lattosio) | kcal: 86, prot: 8g, carbo: 10g, grassi: 2g<br>
            (_TOT_ KCAL: 731, PROT: 37g, CARBO: 76g, GRASSI: 32g, FIBRE: 2g)
        `;
    }
}


//BLOCCO DELLA DOMENICA
titolocontenuto_leftarrow_7.onclick = function() {

    if (titolocontenuto_colazione_7.innerHTML === "COLAZIONE") {
        //riadattamento dei div dedicati alla cena
        giornodellasettimana_ecc.style.marginBottom = '63px';
        divtitolocontenuto_ecc.style.height = '30px';
        divtitolocontenuto_ecc.style.maxHeight = '30px';

        titolocontenuto_colazione_7.innerHTML = "CENA (questa o libera)";
        contenuto_default_7.innerHTML = `
            - FILETTO DI MANZO 200g | kcal: 127, prot: 40, grassi: 5g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 777, PROT: 66g, CARBO: 58g, GRASSI: 39g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "CENA (questa o libera)") {
        //riadattamento dei div dedicati alla cena
        giornodellasettimana_ecc.style.marginBottom = '70px';
        divtitolocontenuto_ecc.style.height = '20px';
        divtitolocontenuto_ecc.style.maxHeight = '20px';
        
        titolocontenuto_colazione_7.innerHTML = "MERENDA";
        contenuto_default_7.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 938, PROT: 27g, CARBO: 75g, GRASSI: 59g, FIBRE: 1g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "MERENDA") {
        titolocontenuto_colazione_7.innerHTML = "PRANZO";
        contenuto_default_7.innerHTML = `
            - CANNELLONI 250g | kcal: 422, prot: 20g, carbo: 50g, grassi: 17g, fibre: 3g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 727, PROT: 34g, CARBO: 112g, GRASSI: 17g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "PRANZO") {
        titolocontenuto_colazione_7.innerHTML = "COLAZIONE";
        contenuto_default_7.innerHTML = `
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1 YOGURT DA BERE 500ml | kcal: 300, prot: 17g, carbo: 23g, grassi 15g<br>
            - 1 MELA 150g | kcal: 60, prot: 1g, carbo: 15g, fibre: 2g<br>
            (_TOT_ KCAL: 668, PROT: 22g, CARBO: 78g, GRASSI: 28g, FIBRE: 3g)
        `;
    }
}
titolocontenuto_rightarrow_7.onclick = function() {

    if (titolocontenuto_colazione_7.innerHTML === "COLAZIONE") {
        titolocontenuto_colazione_7.innerHTML = "PRANZO";
        contenuto_default_7.innerHTML = `
            - CANNELLONI 250g | kcal: 422, prot: 20g, carbo: 50g, grassi: 17g, fibre: 3g<br>
            - SPINACI 100g | kcal: 25, prot: 3g, carbo: 3g, fibre: 2g<br>
            - 2 KIWI 180g | kcal: 80, prot: 1g, carbo: 9g, fibre: 2g<br>
            - PANE 100g | kcal: 200, prot: 10g, carbo: 50g, fibre: 2g<br>
            (_TOT_ KCAL: 727, PROT: 34g, CARBO: 112g, GRASSI: 17g, FIBRE: 9g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "PRANZO") {
        titolocontenuto_colazione_7.innerHTML = "MERENDA";
        contenuto_default_7.innerHTML = `
            - 1 AVOCADO 200g | kcal: 480, prot: 9g, carbo: 4g, grassi: 46g<br>
            - 1 BANANA 100g | kcal: 90, prot: 1g, carbo: 22g<br>
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1/2 INTEGRATORE PROT 1misurino | kcal: 60, prot: 13g, carbo: 1g<br>
            (_TOT_ KCAL: 938, PROT: 27g, CARBO: 75g, GRASSI: 59g, FIBRE: 1g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "MERENDA") {
        //riadattamento dei div dedicati alla cena
        giornodellasettimana_ecc.style.marginBottom = '63px';
        divtitolocontenuto_ecc.style.height = '30px';
        divtitolocontenuto_ecc.style.maxHeight = '30px';

        titolocontenuto_colazione_7.innerHTML = "CENA (questa o libera)";
        contenuto_default_7.innerHTML = `
            - FILETTO DI MANZO 200g | kcal: 127, prot: 40, grassi: 5g<br>
            - 1 CUCCHIAIO D'OLIO EVO | kcal: 130, grassi: 15g<br>
            - [SGARRO] 2 HAMBURGER MCDONALD | kcal: 520, prot: 26g, carbo: 58, grassi: 19g, fibre: 5g<br>
            (_TOT_ KCAL: 777, PROT: 66g, CARBO: 58g, GRASSI: 39g, FIBRE: 5g)
        `;
    } else if (titolocontenuto_colazione_7.innerHTML === "CENA (questa o libera)") {
        //riadattamento dei div dedicati alla cena
        giornodellasettimana_ecc.style.marginBottom = '70px';
        divtitolocontenuto_ecc.style.height = '20px';
        divtitolocontenuto_ecc.style.maxHeight = '20px';

        titolocontenuto_colazione_7.innerHTML = "COLAZIONE";
        contenuto_default_7.innerHTML = `
            - 4 BISCOTTI (tremarie) 60g | kcal: 308, prot: 4g, carbo: 40g, grassi: 13g, fibre: 1g<br>
            - 1 YOGURT DA BERE 500ml | kcal: 300, prot: 17g, carbo: 23g, grassi 15g<br>
            - 1 MELA 150g | kcal: 60, prot: 1g, carbo: 15g, fibre: 2g<br>
            (_TOT_ KCAL: 668, PROT: 22g, CARBO: 78g, GRASSI: 28g, FIBRE: 3g)
        `;
    }
}
