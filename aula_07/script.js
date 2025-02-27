document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list")

    const files = [
        { name: "📊 Slides - Aula 7", url: "./Fev-26.pptx", icon: "fas fa-file-powerpoint" },
        { name: "📝 Documentos - Aula 7", url: "", icon: "fas fa-file-word" }
    ]

    files.forEach(file => {
        const li = document.createElement("li")
        li.innerHTML = `<i class="${file.icon}"></i> <a href="${file.url}" download>${file.name}</a>`
        fileList.appendChild(li)
    })
})
