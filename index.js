// index.js
const fs = require('fs').promises;

const displayMessage = async () => {
  try {
    const message = "Hello, this is a message from a Promise!";
    
    // Create a file
    await fs.writeFile('message.txt', message);

    console.log("File created successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the function
displayMessage();
