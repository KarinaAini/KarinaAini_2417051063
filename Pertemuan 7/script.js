// Event Handler
// const tombol = document.getElementById('tombol');
// tombol.onclick = function() {
//     alert('Tombol sudah di klik!');
// }

// const form = document.getElementById('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const nama = document.getElementById('nama').value;
//     alert('Nama yang sudah dimasukkan: ' + nama);
// });

// Manipulasi HTML
// function ubah(){
//     document.getElementById('judul').textContent = 'Judul sudah diubah!';

//     document.getElementById('paragraf').innerHTML = 
//     'Paragraf telah diubah! menggunakan <strong>innerHTML</strong>';
// }

// function ubahStyle(){
//     const element = document.getElementById('judul');
//     element.style.color = 'red';
//     element.style.fontSize = '24px';
// }

// Falidasi Form
function cekAngka(){
    let x = document.getElementById('angka').value;
    let hasil;
    if (isNaN(x) || x < 1 || x > 10) {
        hasil = 'Input tidak valid!';
    }else{
        hasil = 'Input valid!';
    }
    document.getElementById('hasil').textContent = hasil;
}