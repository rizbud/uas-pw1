document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm"); // Mengambil elemen dengan ID commentForm
  const commentList = document.getElementById("commentList"); // Mengambil elemen dengan ID commentList
  const nameInput = document.getElementById("name"); // Mengambil elemen dengan ID name
  const commentInput = document.getElementById("comment"); // Mengambil elemen dengan ID comment

  // Menambahkan event submit pada form commentForm
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman saat form di-submit

    const name = nameInput.value.trim(); // Mengambil value dari input name dan menghapus spasi di awal dan akhir
    const comment = commentInput.value.trim(); // Mengambil value dari input comment dan menghapus spasi di awal dan akhir

    // Jika name dan comment tidak kosong
    if (name && comment) {
      addComment(name, comment); // Memanggil fungsi addComment dengan parameter name dan comment
      nameInput.value = ""; // Mengosongkan input name
      commentInput.value = ""; // Mengosongkan input comment
    }
  });

  // Fungsi escapeHTML untuk menghindari serangan XSS (Cross-Site Scripting) attack
  function escapeHTML(str) {
    // Mengganti karakter-karakter tertentu dengan HTML entities
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[tag] || tag)
    );
  }

  // Fungsi addComment untuk menambahkan comment ke dalam elemen commentList
  function addComment(name, comment) {
    const commentElement = document.createElement("div"); // Membuat elemen div untuk setiap comment
    commentElement.classList.add("card", "mb-3"); // Menambahkan class card dan mb-3 ke dalam elemen commentElement

    // Mengisi elemen commentElement dengan HTML
    commentElement.innerHTML = `
  <div class="card-body">
    <div class="d-flex justify-content-between">
      <h5 class="card-title">${escapeHTML(name)}</h5>
      <small class="text-muted">Baru saja</small>
    </div>
    <p class="card-text text-muted">${escapeHTML(comment)}</p>
  </div>
`;

    // Menambahkan elemen commentElement ke dalam elemen commentList dengan prepend agar comment terbaru berada di atas
    commentList.prepend(commentElement);
  }
});
