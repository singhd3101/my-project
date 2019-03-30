var AWS = require('aws-sdk');
var s3 = new AWS.S3({accessKeyId:'AKIAJPUD4AU7L5VRTILQ', 
secretAccessKey:'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', region:'us-east-1'});
 
var params = {Bucket: 'studyawspollydt.com', Key: 'images/myimage1.jpg', ContentType: 'image/jpeg'};
s3.getSignedUrl('putObject', params, function (err, url) {
    console.log('Your generated pre-signed URL is', url);
});