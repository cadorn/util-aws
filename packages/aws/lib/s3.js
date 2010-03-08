
function dump(obj) { print(require('test/jsdump').jsDump.parse(obj)) };


var OS = require("os");
var FILE = require("file");
var UTIL = require("util");


exports.put = function(credentials, bucket, path, file, options) {
    
    options = options || {};
    
    var command = [];
    command.push("export AWS_ACCESS_KEY_ID=" + credentials.getAccessKeyId() + ";");
    command.push("export AWS_SECRET_ACCESS_KEY=" + credentials.getSecretAccessKey() + ";");
    command.push(FILE.Path(module.path).join("./../../bin/aws").valueOf());
    command.push("put");
    if(UTIL.has(options, "x-amz-acl")) {
        if(options["x-amz-acl"]=="private" ||
           options["x-amz-acl"]=="public-read" ||
           options["x-amz-acl"]=="public-read-write" ||
           options["x-amz-acl"]=="authenticated-read") {
    
            command.push("\"x-amz-acl: "+ options["x-amz-acl"]  +"\"");
        } else {
            throw "Invalid x-amz-acl";
        }
    }
    if(UTIL.has(options, "Content-Type")) {
        command.push("\"Content-Type: "+ options["Content-Type"]  +"\"");
    }
    if(path.charAt(0)=="/") path = path.substr(1);
    command.push(bucket + "/" + path + " " + file);
    command = command.join(" ");

    var result = runCommand(command);
    if(result.status!=0) {
        throw "aws command error: " + result.stderr + " : " + result.stdout;
    }
    
    return true;
}



function runCommand(command) {
    var process = OS.popen(command);
    var result = process.communicate();
    return {
        status: result.status,
        stdout: result.stdout.read(),
        stderr: result.stderr.read()
    }
};

