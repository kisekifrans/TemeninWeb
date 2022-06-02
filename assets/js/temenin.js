const dropdowns = document.querySelectorAll('.dropdown'); 

// Melakukan loop pada semua eleme dropdown
dropdowns.forEach(dropdown => {
    // Mengambil inner elemen pada dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        // Menambah select yang telah di klik kedalam elemen select
        select.classList.toggle('select-clicked'); 
        // Menambah rotate styles yang telah dibuat pada css kedalam elemen caret 
        caret.classList.toggle('caret-rotate'); 
        // Menambah open styles pada elemen menu
        menu.classList.toggle('menu-open'); 
    });

    options.forEach(options => {
        // Menambah klik pada elemen option 
        option.addEventListener('click', () => {
            //Mengganti selected innertext menjadi clicked option innertext
            selected.innerText = option.innerText;
            //Menambahkan clicked select kedalam elemen select
            select.classList.remove('select-clicked');
            //Menambah rotate styles kedalam elemen caret
            caret.classList.remove('caret-rotate');
            //Menambah open styles ke dalam elemen menu
            menu.classList.remove('menu-open');
            //Menghapus active class dari emua elemen option
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Menambahkan active class kedalam elemen clicked option 
            option.classList.add('active');
        });
    });
});