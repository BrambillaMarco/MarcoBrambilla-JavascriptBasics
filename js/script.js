document.addEventListener('DOMContentLoaded', function () {

    // Crea il container/contatore, assegnali una classe css e inizializza il valore a 0
    let counter = document.createElement('div');
    let counterContainer = document.createElement('div');
    counterContainer.className = 'count-container';
    counter.className = 'numero';

    counter.innerText = '0';

    // Crea il pulsante "+" e assegna una classe CSS
    let btnPlus = document.createElement('button');
    btnPlus.innerText = '+';
    btnPlus.className = 'btn-plus';

    // Crea il pulsante "-" e assegna una classe CSS
    let btnMinus = document.createElement('button');
    btnMinus.innerText = '-';
    btnMinus.className = 'btn-minus';
    

    // Aggiungi gli elementi al documento HTML
    document.body.appendChild(counterContainer);
    counterContainer.appendChild(counter);
    counterContainer.appendChild(btnPlus);
    counterContainer.appendChild(btnMinus);

    // Aggiungi un gestore di eventi al pulsante "+" per aumentare il contatore
    btnPlus.addEventListener('click', function () {
        let value = parseInt(counter.innerText) + 1;
        counter.innerText = value.toString();
    });

    // Aggiungi un gestore di eventi al pulsante "-" per diminuire il contatore
    btnMinus.addEventListener('click', function () {
        let value = parseInt(counter.innerText) - 1;
        counter.innerText = value.toString();
 });
});
