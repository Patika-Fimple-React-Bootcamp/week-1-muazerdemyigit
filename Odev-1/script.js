document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todoForm");
  const todoList = document.getElementById("todoList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const completed = document.getElementById("completed").checked;

    // Yeni liste elemanını oluştur
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Title:</strong> ${title} - <strong>Completed:</strong> ${
      completed ? "Yes" : "No"
    }`;

    // Listeye ekle
    todoList.appendChild(listItem);

    // Formu temizle
    form.reset();
  });

  // API'den verileri çek ve liste oluştur
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      const todoData = data
        .map(
          (item) =>
            `<li><strong>Title:</strong> ${
              item.title
            } - <strong>Completed:</strong> ${
              item.completed ? "Yes" : "No"
            }</li>`
        )
        .join("");
      todoList.innerHTML = todoData;
    });
});
