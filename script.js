document.addEventListener("DOMContentLoaded", function () {
    const directoryList = document.getElementById("directory-list")

    const directories = [
        { name: "📅 05 de fevereiro", url: "aula_02/" },
        { name: "📅 10 de fevereiro", url: "aula_03/" },
        { name: "📅 12 de fevereiro", url: "aula_04/" },
        { name: "📅 19 de fevereiro", url: "aula_05/" },
        { name: "📅 24 de fevereiro", url: "aula_06/" },
        { name: "📅 26 de fevereiro", url: "aula_07/" },
        { name: "📅 03 de março", url: "aula_08/" },
        { name: "📅 05 de março", url: "aula_09/" },
        { name: "📅 10 de março", url: "aula_10/" },
    ]

    directories.forEach(dir => {
        const li = document.createElement("li")
        li.innerHTML = `<a href="${dir.url}">${dir.name}</a>`
        directoryList.appendChild(li)
    })
})
