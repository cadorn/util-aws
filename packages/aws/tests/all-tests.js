
exports.testS3 = require("./s3");

if (require.main === module.id) {
    require("os").exit(require("test/runner").run(exports));
}