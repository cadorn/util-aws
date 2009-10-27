
function dump(obj) { print(require('test/jsdump').jsDump.parse(obj)) };


var OS = require("os");
var FILE = require("file");


exports.put = function(credentials, bucket, path, file) {
    
    var command = [];
    command.push("export AWS_ACCESS_KEY_ID=" + credentials.getAccessKeyId() + ";");
    command.push("export AWS_SECRET_ACCESS_KEY=" + credentials.getSecretAccessKey() + ";");
    command.push(FILE.Path(module.path).join("./../../bin/aws").valueOf());
    command.push("put " + bucket + "/" + path + " " + file);
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

