document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list");

    const files = [
        { name: "📊 Slides - Aula 3", url: "./fev-10.pptx", icon: "fas fa-file-powerpoint" },
        { name: "📝 Documentos - Aula 3", url: "./fev-10-licao-casa.docx", icon: "fas fa-file-word" }
    ];

    files.forEach(file => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${file.icon}"></i> <a href="${file.url}" download>${file.name}</a>`;
        fileList.appendChild(li);
    });
});
