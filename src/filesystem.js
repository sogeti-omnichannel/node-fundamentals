const fs = require('fs');

// Read all files in the current directory and log the result.
fs.readdir('./fsadfsad', (error, files) => {
    if (error) return console.error(error);

    return console.log(files);
});
