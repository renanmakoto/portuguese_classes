document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list")

    const files = [
        { name: "📊 Slides - Aula 11", url: "./mar-12.pptx", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 11", url: "./mar-12.pdf", icon: "fas fa-file-powerpoint" },
        { name: "📊 PDF - Aula 11", url: "./mar-12-1.pdf", icon: "fas fa-file-powerpoint" },
    ]

    files.forEach(file => {
        const li = document.createElement("li")
        li.innerHTML = `<i class="${file.icon}"></i> <a href="${file.url}" download>${file.name}</a>`
        fileList.appendChild(li)
    })
})
