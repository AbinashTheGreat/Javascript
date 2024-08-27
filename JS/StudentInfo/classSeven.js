const fs = require('fs');

// Function to read data from JSON file
function readJSONFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}

const data = readJSONFile('info.json');
console.log(data);
