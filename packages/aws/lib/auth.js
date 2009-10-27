
var Credentials = exports.Credentials = function (accessKeyId, secretAccessKey) {
    if (!(this instanceof exports.Credentials))
        return new exports.Credentials(accessKeyId, secretAccessKey);
    
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
}

Credentials.prototype.getAccessKeyId = function() {
    return this.accessKeyId;
}

Credentials.prototype.getSecretAccessKey = function() {
    return this.secretAccessKey;
}