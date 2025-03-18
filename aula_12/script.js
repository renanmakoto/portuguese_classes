document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list")

    const files = [
        { name: "📊 Slides - Aula 12", url: "./mar-17.pptx", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 12", url: "./mar-17.pdf", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 12", url: "./mar-17-1.pdf", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 12", url: "./mar-17-2.pdf", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 12", url: "./mar-17.docx", icon: "fas fa-file-powerpoint" },
    ]

    files.forEach(file => {
        const li = document.createElement("li")
        li.innerHTML = `<i class="${file.icon}"></i> <a href="${file.url}" download>${file.name}</a>`
        fileList.appendChild(li)
    })
})
