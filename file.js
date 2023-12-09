const fileSelctor = document.getElementById('file-selector')

fileSelctor.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList)
})