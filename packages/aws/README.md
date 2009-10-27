aws
===

  * Homepage: [http://timkay.com/aws/](http://timkay.com/aws/)
  * Supports: EC2, S3, SQS
  * Source: [http://github.com/timkay/aws](http://github.com/timkay/aws)
  * Version: **1.43**
  
Usage
=====

You can use the *aws* command line tool as described [here](http://timkay.com/aws/) if this package
is installed into your sea.


Modules
=======

s3
--

Put a file:

    var AUTH = require("auth");
    var S3 = require("s3");

    var credentials = AUTH.Credentials("<AccessKeyID>", "<SecretAccessKey>")
    var bucket = "_automated_tests_";
    var path = "path/within/bucket/to/file.txt";
    var file = "/path/on/file/system/to/file.txt";
    
    S3.put(credentials, bucket, path, file);
