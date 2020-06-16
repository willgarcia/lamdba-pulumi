# Fargate

## Prerequisites

* Docker

## Running the App

1. Create a new stack:

```bash
pulumi stack init [your-firstname]
```

2. Configure an AWS region

```bash
pulumi config set aws:region us-west-2
```

3. Restore NPM modules via `npm install` or `yarn install`.

4. Deploy all resources

```bash
pulumi up
```

5. Access the newly created endpoint

```bash
$ pulumi stack output
Current stack outputs (1)
    OUTPUT                  VALUE
    hostname                http://***.elb.us-west-2.amazonaws.com

$ curl $(pulumi stack output hostname)
<html>
    <head><meta charset="UTF-8">
    <title>Hello, Pulumi!</title></head>
<body>
    <p>Hello, S3!</p>
    <p>Made with ❤️ with <a href="https://pulumi.com">Pulumi</a></p>
</body></html>
```

6. Show the Docker logs with the `pulumi logs` command. 

```bash
$ pulumi logs --follow
Collecting logs for stack container-quickstart-dev since 2018-05-22T14:25:46.000-07:00.
2018-05-22T15:33:22.057-07:00[                  pulumi-nginx] 172.31.13.248 - - [22/May/2018:22:33:22 +0000] "GET / HTTP/1.1" 200 189 "-" "curl/7.54.0" "-"
```

## Clean up

To clean up resources, run `pulumi destroy` and answer the confirmation question at the prompt.
