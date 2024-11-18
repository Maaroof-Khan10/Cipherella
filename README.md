# **Cipherella | Text and File Encryption Tool**

Welcome to **Cipherella** – a sleek, web-based tool that empowers you to easily encrypt and decrypt your sensitive data, whether it's text or files, with a simple click of a button. Whether you're a developer, student, or privacy-conscious user, Cipherella is here to help you keep your data safe and sound.

## **🚀 Key Features**

- **🔒 Encrypt and Decrypt Text**: Quickly encrypt or decrypt your messages with a powerful Vigenère-like cipher using any keyword of your choice. It’s simple and effective.
- **📂 Encrypt and Decrypt Files**: Upload any file, choose your encryption key, and Cipherella does the rest – encrypting or decrypting your file with ease.
- **💻 Easy-to-Use Interface**: Cipherella’s sleek, minimalistic design ensures that encryption is as easy as typing a few lines of text or selecting a file.
- **🌐 Cross-Browser, Cross-Platform**: Works smoothly across all modern browsers and devices. No software installation needed – just open it in your browser!

## **🛠️ Technologies Used**

Cipherella is powered by a combination of modern web technologies, making it fast, responsive, and intuitive:

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**: 
  - [Font Awesome](https://fontawesome.com/) for sleek icons
  - Google Fonts (Mukta, Oswald) for stylish typography
- **APIs**: 
  - **FileReader API** for file handling
  - **Blob API** for file downloads

## **🔧 Installation and Setup**

Getting Cipherella up and running locally is a breeze. Just follow these easy steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Maaroof-Khan10/Cipherella.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Cipherella
   ```

3. **Open the Project in Your Browser**:
   - Open the `index.html` file directly in your browser (just double-click or right-click and choose "Open with").

And voila! Cipherella will be up and running on your machine in seconds.

## **⚙️ How to Use**

### **Encrypt/Decrypt Text**:
1. **Enter your text** into the input field.
2. **Choose a keyword** that will be used for encryption/decryption.
3. Hit **Encrypt** to transform your text into an encrypted message, or hit **Decrypt** to reverse the process.
4. The result will be displayed in real-time – simple as that!

### **Encrypt/Decrypt Files**:
1. **Upload a file** of any type using the file input field.
2. **Enter a keyword** for encryption or decryption.
3. Choose **Encrypt File** to encrypt your file or **Decrypt File** to reverse it.
4. Once done, a download link will appear for you to grab your newly encrypted or decrypted file!

### **Tab Navigation**:
- **Text Encryption/Decryption**: This tab is dedicated to working with plain text.
- **File Encryption/Decryption**: Here, you can upload and process files.

### **Back Button**:
- After an operation, you can always click the **Back** button to return to the input form and start over with new text or a different file.

## **🎨 UI Design**

Cipherella’s interface is designed with the user in mind:
- **Dark Mode**: Because who doesn’t love a sleek dark interface?
- **Smooth Animations**: From glowing effects to spinning icons, Cipherella makes encryption visually engaging.
- **Responsive Layout**: Works beautifully across desktop, tablet, and mobile browsers.

## **📂 Code Structure**

### **HTML**
The `index.html` file lays out the essential structure for the app, including:
- A **header** with navigation tabs
- **Forms** for text input and file upload
- **Results section** to display the encrypted or decrypted output

### **CSS**
The `style.css` file handles the aesthetic appeal:
- A modern **dark theme** that’s easy on the eyes
- Interactive **hover and focus effects** for buttons and inputs
- Animations to make the process of encryption and decryption visually satisfying

### **JavaScript**
The `script.js` file brings the magic to life:
- **Text Encryption/Decryption**: Uses a Vigenère-like cipher to scramble your messages.
- **File Encryption/Decryption**: Handles binary data encryption and decryption with the same cipher.
- **Interactive UI**: Manages tab switching, dynamic content updates, and file downloads.

## **📥 File Handling**

Cipherella isn’t just for text – it handles **binary files** too:
- When you upload a file, Cipherella reads the file using the **FileReader API**, encrypts or decrypts its binary data, and then creates a downloadable file for you using the **Blob API**.

## **🤝 Contributing**

Want to make Cipherella even better? I’d love your help!

1. **Fork the repository** to your own GitHub account.
2. **Create a new branch**: `git checkout -b feature-branch`
3. **Make your changes** and commit them: `git commit -am 'Add new feature'`
4. **Push your branch**: `git push origin feature-branch`
5. **Submit a pull request** with a detailed description of what you’ve done.

If you have any questions, feel free to open an issue or reach out!

## **📫 Contact**

Have a question or suggestion? Reach out to me:

**Email**: [Maaroof Khan](mailto:maaroofkhan2004@gmail.com)

---
