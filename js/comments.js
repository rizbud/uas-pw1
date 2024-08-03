const comments = [
  {
    name: "Rizki Budi Prasetyo (230401010019)",
    comment: "Terima kasih untuk materinya, Pak. Sangat bermanfaat.",
    createdAt: "19 Juli 2024",
  },
  {
    name: "Itang Asep Sopiandi (230401010045)",
    comment: "Dari nol sampai bisa. Terima kasih banyak, Pak.",
    createdAt: "20 Juli 2024",
  },
  {
    name: "Freddy EDL Maramis (230401010201)",
    comment: "Materi yang disampaikan sangat mudah dipahami.",
    createdAt: "21 Juli 2024",
  },
  {
    name: "Farhan (230401010027)",
    comment: "Terima kasih banyak, Pak. Sangat bermanfaat.",
    createdAt: "22 Juli 2024",
  },
];

const commentList = document.getElementById("commentList"); // Mengambil elemen dengan ID commentList

// Menambahkan setiap comments ke dalam elemen commentList
comments.forEach((comment) => {
  const commentElement = document.createElement("div"); // Membuat elemen div untuk setiap comment
  commentElement.classList.add("card", "mb-3"); // Menambahkan class card dan mb-3 ke dalam elemen commentElement

  // Mengisi elemen commentElement dengan HTML
  commentElement.innerHTML = `
  <div class="card-body">
    <div class="d-flex justify-content-between">
      <h5 class="card-title">${comment.name}</h5>
      <small class="text-muted">${comment.createdAt}</small>
    </div>
    <p class="card-text text-muted">${comment.comment}</p>
  </div>
`;

  // Menambahkan elemen commentElement ke dalam elemen commentList dengan prepend agar comment terbaru berada di atas
  commentList.prepend(commentElement);
});
