---
title: 'launching bruno cli'
date: '3 April 2023'
description: 'launching bruno cli'
---
Hello everyone!

I am excited to announce the release of Bruno CLI, a new addition to Bruno. The CLI allows you to run API collections from the command line interface, making it easier to test and automate your APIs.

![bruno cli](/images/bruno-cli.png)


## Installation
To install the Bruno CLI, use the node package manager of your choice, such as NPM:
```bash
npm install -g @usebruno/cli
```

## Getting started
Navigate to the directory where your API collection resides, and then run:
```bash
bru run
```
This command will run all the requests in your collection. You can also run a single request by specifying its filename:

```bash
bru run request.bru
```

Or run all requests in a folder:
```bash
bru run folder
```

If you need to use an environment, you can specify it with the --env option:
```bash
bru run folder --env Local
```

## Support
If you encounter any issues or have any feedback or suggestions, please raise them on our [GitHub repository](https://github.com/usebruno/bruno)