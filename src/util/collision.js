const fs = require('node:fs');

function collision(name) {
    try {
        if (fs.existsSync(name)) return true;
    } catch (e) {
        return false;
    }
}

module.exports = collision;
