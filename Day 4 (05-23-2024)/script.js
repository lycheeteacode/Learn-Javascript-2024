// Fetch and Promise

// Cat:
// Kalau array atau sebelumnya menggunakan document.querySelectorAll tidak boleh langsung menggunakan event handler atau addEventListener namun harus di looping terlebih dahulu contohnya menggunakan forEach().
// Contoh:
// const modalButton = document.querySelectorAll('.modal_button');
//  modalButton.forEach(btn => {
// btn.addEventListener('click',function() {

// });
// });

// .innerHTML artinya menambahkan dengan tag HTML
// contohnya:
// // Seleksi container
// const containerList = document.querySelector('.container_list');
// // Seleksi bagian search
// const searchInput = document.querySelector('.search_input');
// // Gunakan Event Handler
// addEventListener('click', function () {
//     searchInput.innerHTML = landingHome;
//     // pilih apa yang ingin dituju
// })