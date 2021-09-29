---
page_type: sample
languages:
- typescript
products:
- aks
description: "Demo application for the 'AKS autoscaling with custom metrics' learn module"
urlFragment: "aks-scaling-advanced-demo"
---

# Official Microsoft Sample

<!--
Guidelines on README format: https://review.docs.microsoft.com/help/onboard/admin/samples/concepts/readme-template?branch=master

Guidance on onboarding samples to docs.microsoft.com/samples: https://review.docs.microsoft.com/help/onboard/admin/samples/process/onboarding?branch=master

Taxonomies for products and languages: https://review.docs.microsoft.com/new-hope/information-architecture/metadata/taxonomies?branch=master
-->

This is the base demonstration for the "AKS autoscaling with custom metrics" learn module.

## Summary

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Official Microsoft Sample](#official-microsoft-sample)
  - [Summary](#summary)
  - [Contents](#contents)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the sample](#running-the-sample)
  - [Running the image](#running-the-image)
  - [Deploying to Kubernetes](#deploying-to-kubernetes)
  - [Key concepts](#key-concepts)
  - [Contributing](#contributing)

<!-- /code_chunk_output -->

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `src`             | Sample source code.                        |
| `.gitignore`      | Define what to ignore at commit time.      |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `README.md`       | This README file.                          |
| `LICENSE`         | The license for the sample.                |
| `Dockerfile`      | Docker image file                          |

## Prerequisites

This sample is built using [Node.js](https://nodejs.org) and [TypeScript](https://www.typescriptlang.org/), therefore they are needed as prerequisites to run this example.

## Setup

After cloning the repository, install all dependencies by issuing `npm install` in the root directory.

## Running the sample

1. Build the code using `npm run build`
2. Run the sample using `npm start`

## Running the image

Assuming you already have [Docker](https://docs.docker.com/get-docker/) installed, just run `docker build -t image-name .` on the root directory.

To execute it, run: `docker run -p <local-port>:3000 image-name`

You can also opt to run it from the remote source using `docker run -p <local-port>:80 mcr.microsoft.com/mslearn/samples/contoso-renderer`

## Deploying to Kubernetes

Inside the [Kubernetes](./kubernetes) directory, you'll have all necessary resources to deploy the application to an AKS cluster using the [HTTP Application Routing Addon](https://docs.microsoft.com/azure/aks/http-application-routing?WT.mc_id=cloudnative-19716-ludossan).

1. Update the [Ingress.yaml](./kubernetes/ingress.yaml) file and update your specific DNS zone to the one you have in your AKS cluster, this information can be found in the DNS zone resource inside the resource group of your cluster
2. Use `Kubectl apply -f <filename>` to all the files in the directory to create the workloads

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
