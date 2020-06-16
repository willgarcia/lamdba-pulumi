# lamdba-pulumi

1. Create a new stack:

```bash
pulumi stack init [you-first-name]
```

2. Set the AWS region:

```bash
pulumi config set aws:region us-east-1
```

3. Restore NPM modules via `npm install` or `yarn install`.

4. Configure the function with custom parameters

The parameter `myFirstname` will be used to name the function as well as other components created along it:

```bash
pulumi config set myFirstname [your-first-name]
```

5. Run pulumi up to preview and deploy changes:

```bash
pulumi up
```

Go the web console, and find all the AWS services that you have created with Pulumi.

6. Open a new terminal

Show the logs of the AWS function with:

```bash
pulumi logs -f
```

7. Update the function code

The function will be triggered every time we put a file in the newly created S3 bucket.

Update the function code to show in the AWS lambda logs the name of the new file created in s3.

Follow this guide: <https://www.pulumi.com/docs/guides/crosswalk/aws/lambda/#easy-lambda-log-consumption>

8. Create a file in the your s3 bucket

You can upload a file throught the AWS web console (or command line with `aws s3 cp`).

9. What do you see in the pulumi logs?

10. Go to the AWS console, try to locate where the logs of the AWS lambda are.

11. What would we need to do if this code was written in Terraform?

12. What would be a good real use case for this s3 triggers? Is there any other types of triggers available?

12. What can/must be improved in this infrastructure code?
