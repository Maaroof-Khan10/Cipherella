// Encrypts plain text using a Vigenère-like cipher with a given keyword
function encrypt(text, key) {
    const OFFSET = 32;  // ASCII offset for printable characters
    const CHAR_RANGE = 95;  // Number of printable characters

    let encrypted = "";

    for (let i = 0; i < text.length; i++) {
        const a = text.charCodeAt(i) - OFFSET;
        const b = key.charCodeAt(i % key.length) - OFFSET;

        const c = (a + b) % CHAR_RANGE + OFFSET;
        encrypted += String.fromCharCode(c);
    }

    return encrypted;
}

// Decrypts cipher text using the same Vigenère-like cipher with a given keyword
function decrypt(text, key) {
    const OFFSET = 32;
    const CHAR_RANGE = 95;

    let decrypted = "";

    for (let i = 0; i < text.length; i++) {
        const a = text.charCodeAt(i) - OFFSET;
        const b = key.charCodeAt(i % key.length) - OFFSET;

        const c = (a - b + CHAR_RANGE) % CHAR_RANGE + OFFSET;
        decrypted += String.fromCharCode(c);
    }

    return decrypted;
}

// Encrypts binary data (e.g., a file) using the same encryption method
function encryptBinary(binaryData, key) {
    const encrypted = new Uint8Array(binaryData.length);

    for (let i = 0; i < binaryData.length; i++) {
        const dataByte = binaryData[i];
        const keyByte = key.charCodeAt(i % key.length);
        encrypted[i] = (dataByte + keyByte) % 256;
    }

    return encrypted;
}

// Decrypts binary data using the same decryption method
function decryptBinary(binaryData, key) {
    const decrypted = new Uint8Array(binaryData.length);

    for (let i = 0; i < binaryData.length; i++) {
        const dataByte = binaryData[i];
        const keyByte = key.charCodeAt(i % key.length);
        decrypted[i] = (dataByte - keyByte + 256) % 256;
    }

    return decrypted;
}

// Handles text input and triggers encryption or decryption based on the action
function getInputValue(action) {
    const inputElement = document.getElementById("input");
    const keywordElement = document.getElementById("keyword");
    const resultDiv = document.getElementById("result");
    const backButton = document.getElementById("backButton");

    const text = inputElement.value;
    const keyword = keywordElement.value;

    if (text && keyword) {
        inputElement.classList.add("hidden");
        keywordElement.classList.add("hidden");
        document.querySelectorAll('button').forEach(button => button.classList.add("hidden"));

        resultDiv.innerHTML = `<div class="encrypting"></div>`;

        setTimeout(() => {
            let result;
            if (action === 0) {  // Encrypt
                result = encrypt(text, keyword);
                resultDiv.innerHTML = `<p>Encrypted Text:</p><p>${result}</p>`;
            } else {  // Decrypt
                result = decrypt(text, keyword);
                resultDiv.innerHTML = `<p>Decrypted Text:</p><p>${result}</p>`;
            }

            backButton.classList.remove("hidden");
        }, 1000);
    }
}

// Handles the "back" button functionality to show the input form again
function goBack() {
    const inputElement = document.getElementById("input");
    const keywordElement = document.getElementById("keyword");
    const resultDiv = document.getElementById("result");
    const backButton = document.getElementById("backButton");

    inputElement.classList.remove("hidden");
    keywordElement.classList.remove("hidden");
    document.querySelectorAll('button').forEach(button => button.classList.remove("hidden"));

    resultDiv.innerHTML = '';
    backButton.classList.add("hidden");
}

// Handles file encryption
function encryptFile() {
    const fileInput = document.getElementById("fileInput");
    const keyInput = document.getElementById("keyInput");
    const key = keyInput.value;

    if (fileInput.files.length !== 0 && key !== "") {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = new Uint8Array(event.target.result);
            const encryptedContent = encryptBinary(fileContent, key);
            downloadFile(encryptedContent, "encrypted_" + file.name);
        }
        reader.readAsArrayBuffer(file);
    }
}

// Handles file decryption
function decryptFile() {
    const fileInput = document.getElementById("fileInput");
    const keyInput = document.getElementById("keyInput");
    const key = keyInput.value;

    if (fileInput.files.length !== 0 && key !== "") {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = new Uint8Array(event.target.result);
            const decryptedContent = decryptBinary(fileContent, key);
            downloadFile(decryptedContent, "decrypted_" + file.name);
        }
        reader.readAsArrayBuffer(file);
    }
}

// Downloads a file from binary data
function downloadFile(binaryContent, fileName) {
    const blob = new Blob([binaryContent], { type: 'application/octet-stream' });
    const downloadLink = document.getElementById("downloadLink");

    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.style.display = "inline-block";

    downloadLink.click();
}

// Manages tab switching
function showTab(tabNumber) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    document.getElementById('content' + tabNumber).classList.add('active-content');
    document.getElementById('tab' + tabNumber).classList.add('active-tab');
}

// Initialize default tab
showTab(1);