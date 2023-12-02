function readFile() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            output.innerText = e.target.result;
        };

        reader.readAsText(file);
    } else {
        output.innerText = 'Please select a text file.';
    }
}

