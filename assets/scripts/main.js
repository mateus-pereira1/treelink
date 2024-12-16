let lista = document.querySelectorAll(".lista");

lista.forEach(item =>{
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.2)'
        item.style.transform = 'font-size(1.2rem)'
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)'
        item.style.transform = 'font-size(1)'
    });
});


