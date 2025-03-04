document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list")

    const files = [
        { name: "📊 Slides - Aula 8", url: "./mar-03.pptx", icon: "fas fa-file-powerpoint" },
        { name: "📝 Documentos - Aula 8", url: "./mar-03.pdf", icon: "fas fa-file-word" }
    ]

    files.forEach(file => {
        const li = document.createElement("li")
        li.innerHTML = `<i class="${file.icon}"></i> <a href="${file.url}" download>${file.name}</a>`
        fileList.appendChild(li)
    })
})
