document.addEventListener("DOMContentLoaded", function () {
    const directoryList = document.getElementById("directory-list");

    // List of available days (folders)
    const directories = [
        { name: "📅 05 de fevereiro", url: "dia2/" },
        { name: "📅 10 de fevereiro", url: "dia3/" },
        { name: "📅 12 de fevereiro", url: "dia4/" },
        { name: "📅 19 de fevereiro", url: "dia5/" },
        { name: "📅 24 de fevereiro", url: "dia6/" },
        { name: "📅 26 de fevereiro", url: "dia7/" },
    ];

    directories.forEach(dir => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${dir.url}">${dir.name}</a>`;
        directoryList.appendChild(li);
    });
});
