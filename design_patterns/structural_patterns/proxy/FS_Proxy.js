class FS_Proxy {

    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile(path, format, callback) {
        if (!path.match(/.md$|.md$/)) {
            return callback(new Error(`can only read Markdown files.`));
        }
        this.fs.readFile(path, format, (error, contents) => {
            if (error) {
                console.error(error);
                return callback(error);
            }
            return callback(null, contents);
        });
    }

}

module.exports = FS_Proxy;
