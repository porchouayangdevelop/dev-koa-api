const sharp = require('sharp');
const path = require('path');
const {v4 }  =require ('uuid');

class Resize {
    constructor(folder) {
        this.folder = folder;
    }
    async save(buffer) {
        const filename = Resize.filename();
        const filepath = path.join(this.folder, filename);

        await sharp(buffer)
            .resize(200, 200, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .toFile(filepath);
        return filename;
    }
    static filename() {
        return `${v4()}.jpg`;
    }
    filepath(filename) {
        return path.resolve(this.folder, filename);
    }
}
module.exports = Resize;