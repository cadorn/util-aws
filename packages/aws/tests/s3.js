
function dump(obj) { print(require('test/jsdump').jsDump.parse(obj)) };


var ASSERT = require("test/assert");
var UTIL = require("util");
var FILE = require("file");

var AUTH = require("auth");
var S3 = require("s3");
var KEYCHAIN = require("keychain", "github.com/cadorn/util-os/raw/master/osx");


exports.testPut = function () {

    var bucket = "_automated_tests_";
    var path = "testDir/testFile.txt";
    var file = FILE.Path(module.path).dirname().join("_files").join("testFile.txt");

    var credentials = AUTH.Credentials(
        KEYCHAIN.getPassword("test", "test-aws-access-key-id"),
        KEYCHAIN.getPassword("test", "test-aws-secret-access-key")
    )
    
    ASSERT.isTrue(S3.put(credentials, bucket, path, file));

};


if (require.main === module.id)
    require("os").exit(require("test/runner").run(exports));
