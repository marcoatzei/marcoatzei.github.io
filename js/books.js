document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("books-list");

    fetch("/../books.json")
        .then(res => res.json())
        .then(books => {

            books.sort((a, b) => {
                const da = new Date(a.endingDate.split("/").reverse().join("-"));
                const db = new Date(b.endingDate.split("/").reverse().join("-"));
                return db - da;
            });

            books.forEach(book => {
                const li = document.createElement("li");
                li.className = "book-item";

                li.innerHTML = 
                    <strong>${book.title}</strong><br>
                    <span class="author">${book.author}</span>
                    · <span class="year">${book.endingDate}</span>
                    ${book.editor ?  · <span>${book.editor}</span> : ""}
                    ${book.collana ?  · <span>${book.collana}</span> : ""}
                ;

                container.appendChild(li);
            });
        });
});
