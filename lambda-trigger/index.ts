import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const myFirstname = config.require("myFirstname");
const docsBucket = new aws.s3.Bucket(`twtraining${myFirstname}`);

docsBucket.onObjectCreated(`${myFirstname}Handler`, new aws.lambda.CallbackFunction(`${myFirstname}Handler`, {
    memorySize: 128 /*MB*/,
    callback: (e: any) => {
        console.log("Hello");
    },
}));

exports.s3Url = docsBucket.arn;
