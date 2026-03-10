# UPTIMIZE AWS App Service

In the dynamic environment of Merck, where innovation thrives, a new chapter in data collaboration has begun with the UPTIMIZE App Service. Picture a bustling workshop filled with data scientists, engineers, and visionaries, each eager to transform raw data into impactful narratives.

The UPTIMIZE App Service serves as a dynamic platform that hosts container-based web applications and acts as a launchpad for sharing these creations with a broader audience. With the seamless integration of the UPTIMIZE governance model, each application is purposefully crafted, linked to specific use cases, and protected by tailored permissions.

This framework revolutionizes team collaboration, ensuring that data is accessible to those who need it while upholding the highest security standards. Within this vibrant ecosystem, the UPTIMIZE App Service empowers Merck's data practitioners to unleash their potential and drive meaningful change

## When to Use UPTIMIZE AWS App Service?

You should consider using the UPTIMIZE AWS App Service when:

-	You need to deploy container-based web applications that require secure access to data and analytics.
- You want to develop applications using popular open-source frameworks such as Streamlit, Plotly Dash, R Shiny, and FastAPI.
-	You need to integrate with Foundry for data access, leveraging OAuth2 for secure user authentication.
- You aim to build applications that require interaction with AWS resources (e.g., S3, Lambda) while adhering to compliance and security protocols.

## Skills Required for UPTIMIZE AWS App Service

To effectively utilize the UPTIMIZE AWS App Service, the following skills are beneficial:

- Programming Skills: Proficiency in languages such as Python or JavaScript for application development.
-	Framework Knowledge: Familiarity with open-source frameworks like Streamlit, Plotly Dash, or FastAPI.-	Cloud Services: Understanding of AWS services, particularly in relation to container management and deployment
-	Data Handling: Experience in data manipulation and integration, especially with Foundry and other data sources.
- Security Awareness: Knowledge of security best practices, including OAuth2 and permission models.


## Who is this For?

The UPTIMIZE AWS App Service is designed for:

-	Technical Data Practitioners: Data scientists, data engineers, and software engineers who need to develop and share data-driven applications.

-	Business Analysts: Professionals looking to create interactive dashboards and analytics tools for operational use.

-	Project Owners: Individuals responsible for managing and overseeing data-centric projects within Merck KGaA.

-	Collaborative Teams: Groups aiming to foster innovation and collaboration through shared.

## Explore UPTIMIZE App Service at a Glance -- Your Quick Guide to What's Inside !

**Introduction to UPTIMIZE App Service** Provides a summary of the App Service, its purpose, and how it facilitates hosting container-based web applications for data practitioners.

**Target Users and Security Model:** Describes the intended users (data scientists, engineers, etc.) and explains the security model, including user roles and access permissions linked to Foundry use cases.

### New Features and Updates

**Recent Enhancements:** Lists the latest updates and improvements made to the App Service, highlighting significant changes and new functionalities.

**What's New in the App Service:** Details specific new features or integrations that have been added recently, such as API integrations and configuration updates.

### Usage and Best Practices

**Guidelines for Effective Use:** Offers best practices and recommendations for utilizing the App Service efficiently, including tips for app development and deployment.

**Demo and Technical Deep Dive:** Provides practical demonstrations and in-depth technical insights into the workings of the App Service, including architecture and integration details.

## Integration Capabilities

**Factory Integration Overview:** Explains how the App Service integrates with factory accounts to build custom data solutions, including examples of potential use cases.

**Third Party APIs and Special Settings:** Discusses the ability to integrate external APIs and outlines special settings that can be enabled upon request for specific applications.

## Data Management

**Vector Database Integration:** Provides an overview of the integration with the Qdrant vector database, including its purpose and how to access it.

**Introduction to AppService Databases:** Covers database management within the App Service, including troubleshooting common issues and restoring data from backupsapplications and resources.



Please browse through the below pages to learn more about the UPTIMIZE AWS App Service.

---

# Introduction to the UPTIMIZE App Service

## What is the UPTIMIZE App Service?

The [UPTIMIZE App Service](https://console.apps.p.uptimize.merckgroup.com/) provides a convenient and easy to use hosting service for container-based web applications. 
The target users of the App Service are technical data practitioners (e.g. data scientists, data engineers or software engineers) who want to share a data & analytics app with their Merck-wide audience in a secure and compliant way. The App Service is fully integrated into the UPTIMIZE governance and operating model as each app is tighly coupled to a use case and it's permission model maintained in Foundry. First-class support as well as example apps are currently provided for the following open source frameworks: 

* Streamlit
* Plotly Dash
* R Shiny
* FastAPI (Backend) + React (UI)

## Foundry Integration

The running apps have network connectivity as well as an OAuth2 Integration to Foundry - after the users logs in with Single-Sign-On (SSO) each request arriving at the App Service container port contains the Foundry Token of the logged in user. The developer can utilize the token to make requests for data or writeback data to Foundry on behalf of the end-user.

## Security Model

Apps are linked to Foundry use cases and the respective use case projects. Users can create apps for use cases where they have on of the following roles, as defined in the use case portal:

* Owner
* Product Owner
* Technical Owner

Users are logged into the app with Foundry SSO. The permissions of the user (Token Resources in the below picture) is the intersection of the users permissions and the app permissions.

![Permissions](https://docs.uptimize.merckgroup.com/assets/app-service-permissions.png)

In practice, this means that you can only access resources (e.g. datasets) - on behalf of the end-user - in the enabled use case projects. All other requests will fail.

Apps can communicate with a number of AWS resources (e.g. S3, Lambda) deployed in factory accounts through VPC Endpoints. IAM Trust Policies make sure principles of least-priviliges are followed.

### Developer roles

- **Owner:** Can update & change App configurations and settings as well as deleting the App. 
- **Contributor:** Can only access Azure DevOps, modify code and trigger pipelines.

Both roles can be assigned by the **Owner** of the App in the App Service UI.

## What distinguishes the App Service from other offerings in UPTIMIZE Foundry?

Foundry offers a wide range of solutions to share your analytical work:

* [Reports](https://palantir.mcloud.merckgroup.com/workspace/documentation/product/reports/overview#reports)
  * Create documents and dashboards to share your analytical work

* [Slate](https://palantir.mcloud.merckgroup.com/workspace/documentation/product/slate/overview)
  * Build interactive visualizations and dashboards
* [Workshop](https://palantir.mcloud.merckgroup.com/workspace/documentation/product/workshop/overview)
  * Build interactive applications for operational users

The UPTIMIZE ecosystem also includes Tableau as visual storytelling and dashboarding tool.

![Information](https://docs.uptimize.merckgroup.com/assets/app-service-comparison.png)

The App Service is an additional offering that allows for very flexible deployment of end-user facing apps - mainly for hosting popular open source frameworks.

---

# What's New

## 12.12.2024

* Support for creating an OIDC trust relationship to GitHub repositories in the merckgroup organization

## 08.11.2023

* Configuration updates do not require the app to be in a running state anymore
* Inject additional headers with more user information (requires app update)
  * `X-Appservice-Firstname`
  * `X-Appservice-Lastname`
  * `X-Appservice-Muid`
  * `X-Appservice-Email`
* Add App analytics
  * Display anonymous user activity (daily/monthly active users)
* Snowflake integration
  * Select if you want to create a Snowflake or a Foundry app
* Streamlit app template update
  * integrate new features in the template (snowflake, additional userinfo from headers)
* [BayBe API](https://docs.uptimize.merckgroup.com/appservice/third-party-apis/#BayBe) integration 
* Enhanced [Foundry Security Settings](https://docs.uptimize.merckgroup.com/appservice/special-settings/)

## 15.08.2023

* Configure ephemeral storage size for ECS deployment in the management console.

## 21.06.2023

* Deploying an app to [multiple environments](https://docs.uptimize.merckgroup.com/appservice/best-practices-app-service/#multiple-environments) is supported now.

## 15.05.2023

* GPT API Samples added to streamlit example app.

## 02.02.2023

* NLP API Prod Integration is live.

## 03.01.2023

* NLP API Integration is live.

## 23.12.2022

* App state is now read from DynamoDB. You should not see throttling exceptions anymore when many people visit the app service at the same time.
* NLP API Integration is deployed in Preview mode.

## 09.12.2022

* Added the feature to add a runtime configuration to the app. Users can pass configuration to the app from the UI. This configuration will be exposed as environment variable `APP_SERVICE_CONFIG`.

---

# Demo - Walkthrough of the App Service


## How to create your own App 
<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/workbenches/app-service-demo1.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>

## How to update and manage an existing App

<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/workbenches/app-service-demo2.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>

## Technical deep dive and Q&A (Recording of Ensemble Knowledge Sharing Session)

You can find the recording [here](https://mdigital.sharepoint.com/:v:/r/sites/Ensemble-CommunityFolder/Shared%20Documents/General/Recordings/20220810_Ensemble%20Knowledge%20Sharing%20Session%20_Intro%20to%20UPTIMIZE%20App%20Service.mp4?csf=1&web=1&e=L7cZOh&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D).

## Deep-Dive MANA Tool (Recording of Data Science Garage 09.12.2022)

Max Schön explains in detail how he built the MANA tool on the app service. 
This is a great resource to learn some ticks and trips for streamlit apps.
You can find the recording [here](https://mdigital-my.sharepoint.com/:v:/r/personal/m277289_one_merckgroup_com/Documents/Recordings/Data%20Science%20Garage_%20Deep-Dive%20MANA%20Tool-20221209_140238-Besprechungsaufzeichnung.mp4?csf=1&web=1&e=eaHp2T).

---

# Best Practices and Guidelines

## Data Access

With the App Service you can access all your data in UPTIMIZE Foundry. Please use the **Foundry DevTools library** to read and write data. For a reference how to use the Foundry DevTools library please head to this [page](https://docs.uptimize.merckgroup.com/lab/data/how-to-read-and-write-data/). Additionally, in our **Streamlit example App** (screenshot below) you can also find some code on how to read & write Foundry data. The other example apps also contain sample code to interact with Foundry.

If you like to leverage own solutions to request data from Foundry, the App Service Load Balancer will automatically insert the Foundry user token into the http request header `x-foundry-accesstoken`. You can extract the token from the incoming http request and use it to perform requests to Foundry. For Dash and Streamlit, the **Foundry DevTools library** will automatically extract the User Foundry Token from the header.

![streamlit-example](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/streamlit-example.png)


## Quota Request Process

We have put some user based quotas in place to ensure good performance and cost efficiency of the App Service. Per user we allow **5 Apps** by default and we also have a fixed limit on compute and memory across a user´s Apps.

### How to Request Quotas?
Please use the link to raise a quota access request: [AppService User Quota Request Form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.d7a8d0cd-49cc-49a9-b1b6-6aec4986614f)
The below screenshot shows the quota request form. As a user, you can request your quota request increase.

![Quota Request Form](https://docs.uptimize.merckgroup.com/assets/quota-request-form.png)

- **Request Type:**
  * The request type is the type of the quota you want to increase, either AppService Apps or DBaaS Databases. Please select any one option.
  * Once you have selected the option, "What is the required number of AppService Apps/DBaaS Databases that needs to be increased" option will be visible. Here, please select the number of apps you want to increase.


- **Reason for the Request:** Provide an appropriate reason for the request and submit. Once submitted, you will receive a notification on successful submission.

### Action from the SDOs
Whenever a quota request is submitted by the user, if the quota for the AppService Apps is more than or equal to 10 or for the DBaaS Databases is more than or equal to 2, then this will go for the user's sector SDO's approval.

As a sector SDO, you will receive a notification on quota approval that needs to be reviewed and approved. Once approved by SDOs, then the request should be approved by the AppService Admin team.

The screenshot below provides the user quota information for the approver, including the total current quota and the requested quota details.

![Quota Details](https://docs.uptimize.merckgroup.com/assets/quota-details.png)

## Runtime Configuration

Users can set a runtime configuration using the App Service UI, for example to store secrets or other configuration options. This configuration will be exposed as environment variable `APP_SERVICE_CONFIG` to the app. Internally, the value of the configuration is stored in a secret in AWS Secrets Manager. If the runtime configuration is not used, the environment variable will not be present.

## Technical Limitations

At the moment the App Service can only access Foundry API endpoints, a limited of set of AWS services for resources deployed in the Factory account and the NLP & BayBe API. Calls to the internet or any other APIs (e.g. on-premise) are not supported, but can be proxied through a custom lambda function deployed in a factory account.

## Multiple Environments

Owners can grant apps the permission to push to other apps. This is useful for apps that should have multiple environments, for example `app1-dev` and `app1-prod`. 
An Owner of both apps can go to the configuration of `app1-dev` and allow `app1-prod` to push to the `app1-dev` ECR repository.
Once this is setup, the repository of `app1-dev` should not be used anymore and the pipeline of `app1-prod` can be adjusted to contain multiple stages:

* Building the Docker Image
* Pushing the Docker Image to `app1-dev`
* Manual Validation (Confirm Production Deployment)
* Pushing the Docker Image to `app1-prod` 

This is an example pipeline that can be copy & pasted into the `azure-pipelines.yml` of `app1-prod`. 

**Make sure to replace placeholders <ENTER_app1-dev_ID_HERE> and <ENTER_app1-prod_REPOSITORY_NAME_HERE> with real values in the yaml below.**
- **<ENTER_app1-dev_ID_HERE>: git repository name of `app1-dev` without the leading app name, e.g. app-szqavribsnsqcql4**
- **<ENTER_app1-prod_REPOSITORY_NAME_HERE>: full git respository name of `app1-prod`, e.g. app1-prod-app-lrxipp4qmtznvmc0**

```yaml
# App Service Multi-Environment Pipeline

trigger:
  branches:
    include:
    - '*' 
    - refs/tags/*

pool:
  vmImage: 'ubuntu-22.04'

variables:
  isMain: $[eq(variables['Build.SourceBranch'], 'refs/heads/main')]

resources:
  repositories:
    - repository: templates
      name: 'factory-appservice-nreg-ec1/factory-appservice-nreg-ec1' # <project>/<repo>  
      type: git
      ref: refs/heads/master

stages:
  - stage: BuildAndPushDev
    jobs:
      - job: CIAndDevDeployment
        steps:
          # Uncomment the following line in case you need to login to the private artifacts pypi repository
          # e.g. for consuming packages like BayBe
          # the template will expose env. variable PIP_EXTRA_INDEX_URL which can be used in the docker build
          #- template: pipeline-templates/artifacts-login.yml@templates          
          
          - template: pipeline-templates/aws-login.yml@templates # this template will expose APP_ID & APP_DESTINATION_ID as variable.
            parameters:
              AppDestinationId: '<ENTER_app1-dev_ID_HERE>'
          
          - template: pipeline-templates/docker-login.yml@templates # this template will expose AWS_ACCOUNT_ID as variable.
          
          - bash: |
              docker build \
                --pull \
                --cache-from $(AWS_ACCOUNT_ID).dkr.ecr.eu-central-1.amazonaws.com/$(APP_ID):main \
                -t $(AWS_ACCOUNT_ID).dkr.ecr.eu-central-1.amazonaws.com/$(APP_ID):main \
                -t docker-image:snapshot \
                .
            displayName: Build
            env:
              DOCKER_BUILDKIT: '1'
              BUILDKIT_PROGRESS: 'plain'
          
          - bash: |
              docker tag docker-image:snapshot $(AWS_ACCOUNT_ID).dkr.ecr.eu-central-1.amazonaws.com/$(APP_DESTINATION_ID):main
              docker push $(AWS_ACCOUNT_ID).dkr.ecr.eu-central-1.amazonaws.com/$(APP_DESTINATION_ID):main              
            displayName: PushContainer (main only)
            condition: and(succeeded(), eq(variables.isMain, 'true'))
            
          - bash: |
              docker image save docker-image:snapshot -o $(Build.ArtifactStagingDirectory)/docker-image.tar             
            displayName: SaveDockerTar
            condition: and(succeeded(), eq(variables.isMain, 'true'))
          
          - publish: $(Build.ArtifactStagingDirectory)
            artifact: docker-images
            displayName: SaveDockerToArtifacts
            condition: and(succeeded(), eq(variables.isMain, 'true'))

  - stage: WaitForValidation
    condition: and(succeeded(), eq(variables.isMain, true))
    jobs:    
      - job: waitForValidation
        displayName: Deploy to production?
        pool: server
        timeoutInMinutes: 4320 # job times out in 3 days
        steps:
        - task: ManualValidation@0
          timeoutInMinutes: 1440 # task times out in 1 day
          inputs:
            notifyUsers: |
              [factory-appservice-apps-p-nreg-ec1]\<ENTER_app1-prod_REPOSITORY_NAME_HERE>
            instructions: 'Please validate and confirm if you want to deploy to production'
            onTimeout: 'reject'

  - stage: PushProd
    condition: and(succeeded(), eq(variables.isMain, true))
    jobs:
      - job: ProdDeployment
        steps:
          - template: pipeline-templates/aws-login.yml@templates # this template will expose APP_ID & APP_DESTINATION_ID as variable.

          - template: pipeline-templates/docker-login.yml@templates # this template will expose AWS_ACCOUNT_ID as variable.
          
          - download: current
            artifact: docker-images
            displayName: LoadDockerFromArtifacts
          
          - bash: |
              docker load --input $(Pipeline.Workspace)/docker-images/docker-image.tar
            displayName: LoadDockerTar

          - bash: |
              docker tag docker-image:snapshot $AWS_ACCOUNT_ID.dkr.ecr.eu-central-1.amazonaws.com/$(APP_ID):main
              docker push $AWS_ACCOUNT_ID.dkr.ecr.eu-central-1.amazonaws.com/$(APP_ID):main
            displayName: PushContainer (main only)
            condition: and(succeeded(), eq(variables.isMain, 'true'))
```

This setup can also be used to deploy a template app to multiple other template deployments. This is useful for classrooms training where each participant should have one app but the initial app should be sourced from a central repository.

## Tips and Tricks

**Determining whether code runs on AppService:** 

Sometimes it is useful to have distinct behaviour depending on whether code runs on the AppService or in another environment.
Below is a utility function that can be used to determine whether the code is executed on the AppService.
```python
import os

def runs_on_app_service() -> bool:
    """Check if running on app service.

    Returns:
        bool: True if running on app service.
    """
    return "APP_SERVICE_TS" in os.environ
```

## GitHub Integration

To integrate GitHub with the UPTIMIZE App Service, you can use GitHub Actions to automate your workflows. Below are examples of how to set up GitHub Action Pipelines in a merckgroup repository to ...
- build a Docker image and push it to Elastic Container Repository (ECR) where an automated process will deploy it to the UPTIMIZE App Service.
- update the Runtime Configuration of an App Service app from secrets stored in GitHub Secrets.

You will need to add the name of your repository to the app settings in the Console before the token exchange for AWS Credentials will work.

See this repository for reusable template GitHub workflows: [merckgroup/appservice-workflows](https://github.com/merckgroup/appservice-workflows)

### Docker Build and Push to App Service
See the following diagram for a high level overview of the authentication process achieved by the configuration below:
![OIDC Authentication Process](assets/appservice/appservice-github-oidc-process.png)

```yaml
name: Deploy to App Service

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy-appservice:
    uses: merckgroup/appservice-workflows/.github/workflows/deploy_appservice.yml@main
    with:
        # set these variables in your repository settings
        # See: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#creating-configuration-variables-for-a-repository 
        app-id: {% raw %}${{ vars.APPSERVICE_APP_ID }}{% endraw %}  # example: 'app-tbzjap3ulr3gvxtz'
        app-name: {% raw %}${{ vars.APPSERVICE_APP_NAME }}{% endraw %}  # example: 'my-app'
```

### Update Runtime Configuration from GitHub Secrets

The following example **overrides** your App Service App's Runtime Configuration with secrets stored in a GitHub repoisitory's secrets store. You can **either** hand-pick specific secrets to update **or** dump all secrets into the Runtime Configuration. This approach replicates the behavior of the App Service UI where you can also enter secrets as JSON and expose them into your apps environment via the `APP_SERVICE_CONFIG` environment variable.
See the [Runtime Configuration Section](#runtime-configuration).

**Note**: The base64 step is necessary, as GitHub currently does not allow propagating secrets into another step or job. In order to use our template, we bypass this via Base64 encoding twice. See this [GitHub Discussion](https://github.com/orgs/community/discussions/25225#discussioncomment-6776295) for more details.

#### Option 1: Hand-pick the secrets you want to update

```yaml
name: Update MyApp Runtime Configuration

on:
  workflow_dispatch:

jobs:
  build-secrets:
    runs-on: ubuntu-latest
    outputs:
      secrets_json: {% raw %}${{ steps.build-json.outputs.secrets_json }}{% endraw %}
    steps:
      - name: Build and encode secrets JSON
        id: build-json
        env:
          API_KEY_FOUNDRY: {% raw %}${{ secrets.API_KEY_FOUNDRY }}{% endraw %}
          API_KEY_NLP: {% raw %}${{ secrets.API_KEY_NLP }}{% endraw %}
        run: |
          SECRETS_JSON=$(jq -nc \
            '{
              "API_KEY_FOUNDRY": env.API_KEY_FOUNDRY,
              "API_KEY_NLP": env.API_KEY_NLP
            }')
          echo "secrets_json=$(echo "$SECRETS_JSON" | base64 -w0 | base64 -w0)" >> $GITHUB_OUTPUT

  call-update-secrets:
    needs: build-secrets
    uses: merckgroup/appservice-workflows/.github/workflows/update_secrets.yml@main
    with:
      app-id: {% raw %}${{ vars.APPSERVICE_APP_ID }}{% endraw %}  # example: 'app-tbzjap3ulr3gvxtz'
      app-name: {% raw %}${{ vars.APPSERVICE_APP_NAME }}{% endraw %}  # example: 'my-app'
    secrets:
      secrets_json_encoded: {% raw %}${{ needs.build-secrets.outputs.secrets_json }}{% endraw %}
```

#### Option 2: Push all secrets from the repository's secrets store

```yaml
name: Update MyApp Runtime Configuration

on:
  workflow_dispatch:

jobs:
  build-secrets:
    runs-on: ubuntu-latest
    outputs:
      secrets_json: {% raw %}${{ steps.build-json.outputs.secrets_json }}{% endraw %}
    steps:
      - name: Build and encode secrets JSON
        id: build-json
        env:
          SECRETS_JSON: {% raw %}${{ toJson(secrets) }}{% endraw %}  # dump all repo secrets into a json string
        run: |
          echo "secrets_json=$(echo "$SECRETS_JSON" | base64 -w0 | base64 -w0)" >> $GITHUB_OUTPUT

  call-update-secrets:
    needs: build-secrets
    uses: merckgroup/appservice-workflows/.github/workflows/update_secrets.yml@main
    with:
      app-id: {% raw %}${{ vars.APPSERVICE_APP_ID }}{% endraw %}  # example: 'app-tbzjap3ulr3gvxtz'
      app-name: {% raw %}${{ vars.APPSERVICE_APP_NAME }}{% endraw %}  # example: 'my-app'
    secrets:
      secrets_json_encoded: {% raw %}${{ needs.build-secrets.outputs.secrets_json }}{% endraw %}
```

## Self-Hosted GitHub Actions Runners for Internal API Access

#### Overview

> **⚠️ Advanced Feature**: This is an advanced integration requiring GitHub Enterprise licensing and technical expertise. For basic GitHub integration with AppService, see the [AppService GitHub Integration](#github-integration) section first.

#### Demo
[See here](https://mdigital.sharepoint.com/:v:/s/UPTIMIZEAWSAPP_Services/EY-aY-xPPkVLljahcZ0AIhQBC20_e1rScxSpqQD_AGAknA?e=kX3WsC) for an introduction and demonstration.

#### Problem & Use Cases

Standard GitHub- or Azure-hosted runners cannot access internal Merck networks, limiting automation capabilities for:

- **Integration testing** of applications that consume Foundry data, UPTIMIZE AI-ML Services or MyGPT APIs
- **End-to-end testing** of AppService applications before deployment

##### Compute Options
- **XS**: 2 vCPU, 4GB RAM - for lightweight testing
- **S**: 4 vCPU, 8GB RAM - for standard workloads
- **M**: 4 vCPU, 16GB RAM - for memory-intensive tasks

#### User Workflow

![User Workflow Diagram](assets/appservice/appservice-github-selfhosted-runners-process.png)

##### 1. Request Access
Submit an access request through the [GitHub repository](https://github.com/merckgroup/selfhosted-aws-runners/issues/new?template=access-request.yml) with your **UPTIMIZE Use Case ID**.

##### 2. Add to Your Workflow
Include the runner in your existing GitHub Actions workflow [see here for a basic GitHub Actions documentation](https://docs.github.com/en/actions/get-started/quickstart):

```yaml
jobs:
  add-runner:
    uses: merckgroup/selfhosted-aws-runners/.github/workflows/runner_attach_workflow.yml@main
    with:
      RunnerComputeType: "XS"  # (OPTIONAL)
      RunnerArchitecture: "x64" # (OPTIONAL) one of ["arm64", "x64"]
      UseCaseID: "your-use-case-id"  # (REQUIRED)

  your-tests:
    needs: add-runner
    runs-on: {% raw %}${{ needs.add-runner.outputs.runner_id }}{% endraw %}
    steps:
      - name: Run integration tests
        run: python test_foundry_integration.py
```

##### 3. Access Internal APIs
Your workflow can now securely access:
- Foundry datasets and APIs
- UPTIMIZE AI-ML Services (Qdrant, Langfuse, LLMs, MLFlow, etc.)
- Langfuse
- Qdrant
- MyGPT APIs

#### Prerequisites

- **Access to the GitHub merckgroup organistaion** (you must be a member of the organization)
- **UPTIMIZE Use Case ID** for access approval. This is solely used for cost tracking and auditing.
- **Basic GitHub Actions knowledge** - familiarity with workflows and CI/CD concepts
- **Internal API credentials** (Foundry tokens, AI-ML Services keys, MyGPT API keys, etc.)

#### How It Works

The solution provides **just-in-time** self-hosted runners that:

1. **Spin up on-demand** when your GitHub workflow needs them
2. **Connect to internal networks** with proper security and access controls
3. **Execute your tests/jobs** with access to Foundry, UPTIMIZE AI-ML Services, MyGPT APIs, and other internal services
4. **Auto-terminate** after job completion (typically within 15 seconds to 5 minutes)

#### Resources

- **Complete documentation**: [GitHub Repository](https://github.com/merckgroup/selfhosted-aws-runners)
- **Working examples**: See the `workflows/EXAMPLE_user_workflow.yml` in the repository
- **Technical setup**: Full Terraform infrastructure and configuration details in the repo README

#### When NOT to Use Self-Hosted Runners

**Don't use self-hosted runners for workloads that don't require internal API access.** Please stick to the default GitHub-hosted runners for:

- Standard unit tests that don't access internal APIs
- Code quality checks (linting, formatting)
- General CI/CD tasks that only use external/public services

For a concrete example of appropriate vs. inappropriate use cases, visit the working example referenced above.

#### Support & Limitations

- Runners auto-terminate after inactivity (no more GitHub jobs running)
- Designed for integration testing, not production workloads
- For feature requests or issues, please open a new issue in the [GitHub repository](https://github.com/merckgroup/selfhosted-aws-runners/issues)

#### FAQ

- **Q: Why do I receive timeouts when trying to reach UPTIMIZE Qdrant?**
  - A: Similar to the usage of Qdrant in Foundry or AppService, you need to use port 443 instead of 6333 to access Qdrant, and add the prefix "uptimize_nlp" to the QdrantClient, as described in the Vector Database documentation of the AI-ML Services. For conditional logic that correctly handles the different environments, you can use the `runs_on_app_service()` utility function provided above and extend it with a check for whether the code is running on a GitHub CI pipeline:
```python
def is_running_in_ci() -> bool:
  """Check if the code is running in a CI environment."""
  return os.getenv("GITHUB_ACTIONS", "false").lower() == "true"
```

- **Q: Can the runner only access the Foundry Use Case whose ID I provide in the request?**
  - A: No, the Use Case ID is just used for allowlisting and for cost tracking. It is not used for any scoped access to Foundry. For this, you need to bring your own Foundry Credentials/Tokens as secrets to the GitHub repository and connect via those.

---

# Factory Integration

## Introduction and intended use

Factory accounts are used to build custom data & analytics solutions in UPTIMIZE, using the full flexibility of available AWS services.
Oftentimes, these use cases also require the deployment of custom frontends - leveraging the app service to minimize the administrative and operational burden is desirable. The app service - factory integration allows data practitioners to do exactly that, in a secure and self-service way.

Here are some examples what could be build with the factory integration:

* Submitting **batch jobs** to a factory accounts batch job queue and using **Lambda Functions** to manage these jobs from the frontend.
* Using a **S3 Bucket** as storage backend for your application.
* Using a **DynamoDB** table as persistence layer for your app.

## Architecture

![Architecture](https://docs.uptimize.merckgroup.com/docs-assets/app-service/factory-integration-architecture.png)

1. If the owner of an app enables the factory integration by selecting an AWS Account in the app configuration, the app service automatically creates a task role for the app container. This task role allows the running container to assume roles in the enabled factory accounts (i.e. Resource: `arn:aws:iam::987654321:role/*`). Note, that this, without step 2, does not allow to execute any actions on the factory account.

2. After the app and the task role (i.e. `TaskRole`) is created, the factory admin can create a factory role (for example `FactoryRole`) in the Factory Account. This role needs to be created with a **Trust Relationship** to the task role: the target factory account creates an IAM Trust policy allowing the task role of the app service app to assume the well-defined task role (i.e. `arn:aws:iam::123456789:role/TaskRole1P06WU2CW86XD`) in the factory account.

3. The app service app can then **assume** the role via STS (e.g. using `boto3`) resulting in temporary credentials that can be used to trigger actions in the target factory account. The allowed actions are controlled by the policies attached to the factory role in the factory account. I.e. the app service cannot use this mechanism to perform operations in the factory account that have not been explicitly whitelisted.

## Example Integration

The following Python snippet calls a Lambda function deployed in a Factory account. The code first retrieves the `FactoryRole` using the sts-boto3 client. To improve performance, this call is cached for 1 hour using the `@cached` decorator from the `cachetools` package. Note that `boto3` is able to retrieve the credentials of the task role automatically from the [environment](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) of the container.

Afterwards, the credentials are used to construct an instance of a `boto3.client("lambda")` client. This client is used to invoke a lambda function and print the response.


```python
from cachetools import TTLCache, cached
import boto3
import time

@cached(cache=TTLCache(maxsize=1, ttl=3600))
def assume_role_in_factory_account(role_arn: str) -> dict:
    sts = boto3.client("sts", endpoint_url="https://sts.eu-central-1.amazonaws.com")
    response = sts.assume_role(
        RoleArn=role_arn,
        RoleSessionName=f"fromAppService-{int(time.time() * 1000)}",
        DurationSeconds=3600,
    )
    credentials = response["Credentials"]
    expiration = credentials['Expiration'].isoformat()
    print(f"Retrieved credentials for {role_arn=} {expiration=}")
    return {
        "aws_access_key_id": credentials["AccessKeyId"],
        "aws_secret_access_key": credentials["SecretAccessKey"],
        "aws_session_token": credentials["SessionToken"],
    }

def get_lambda_client(role_arn: str):
    return boto3.client("lambda", **assume_role_in_factory_account(role_arn=role_arn))

if __name__ == '__main__':
    lambda_client = get_lambda_client(role_arn='arn:aws:iam::123456789:role/TaskRole1P06WU2CW86XD')
    response = lambda_client.invoke(
        FunctionName="arn:aws:lambda:eu-central-1:987654321:function:LambdaFunctionInFactoryAccount",
        Payload=score_request.json().encode("UTF-8"),
    )
    if response["StatusCode"] == 200:
        print(json.loads(response["Payload"].read().decode("UTF-8")))

```

The following factory role is created as a pre-requisite in the factory account. The required `TaskRoleArn` of the app can be copied from the **Change app configuration** dialog within the app service UI:

```yaml
FactoryRole:
  Type: AWS::IAM::Role
  Properties:
    AssumeRolePolicyDocument:
      Statement:
      - Effect: Allow
        Principal:
          AWS: 'arn:aws:iam::123456789:role/TaskRole1P06WU2CW86XD'
        Action: 'sts:AssumeRole'
    Policies:
      - PolicyName: AllowLambaInvoke
        PolicyDocument:
          Statement:
          - Effect: Allow
            Action:
              - 'lambda:InvokeFunction'
            Resource: 
              - 'arn:aws:lambda:eu-central-1:987654321:function:LambdaFunctionInFactoryAccount'
```


## List of enabled AWS Services / Endpoints

* STS
* S3
* Lambda
* DynamoDB
* API Gateway
* Athena
* Secrets Manager

If your use case architecture requires other AWS Service Endpoints, please create an Item in the UPTIMIZE [AWS Team Board](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_boards/board/t/UPTIMIZE-AWS%20Team/Issues) and the team will review your request.

---

# Technical Deep Dive

## Request Flow Diagram


[![](https://mermaid.ink/img/pako:eNrtVU1v3CAQ_SuIUyttIyVVDuWQys2HFGkTRbHaXnwhZpZF8QLlo0oa5b8Xg2Mb4_bcQ_ewWs17M7w3zCwvuFUMMMEWfniQLVwIyg09NBKFj6bGiVZoKh36asGU0ep7XW2_lPFbLuRTGf6mfLu_M-rpeaWU1mXwSnnJzBr7lzdQXZTAzh4dwLSP3Civj1o1WDHQOmT4w7vjT8cbdHLyMXydnr5P4K1ygIzge4fULjol6EoY69B93xbrEq0HPpydJc8kx1IwoNE5QTOTMRKQyTxB1zZWQ9S7Pcggnjpgn9fUzLNiilQuT0tZEy8cNbSt18hEb32t8kgay3aKc2BIyEQfCL3l1G2C6upmuyg6YIFVtH55fkFYT4p6torbUUmZOBd1D1YraSHXk7dhzph8jYTzHg3T4xSiWiNvKV-QFxeYV5w1fxqB8oLzeQgDn89JdjsRrcH8hF6cCzUSS2mHzmnXvQlD1d31YFzr3PNsPGcuYuFcPkg2lZgM5KQkO5v_rO1pAQKe9ucPJ6ytWu0f0t_PuG_2X1q4vy_b__te3jfe4LCsBypYeFdeenaDQ1MO0GASfjLYUd-5BjfyNVC9ZqFVl0w4ZTDZ0c7CBocuqvpZtpg44-GNNLxNIwti0k16wOI79vobS9ZG0w?type=png)](https://mermaid.live/edit#pako:eNrtVU1v3CAQ_SuIUyttIyVVDuWQys2HFGkTRbHaXnwhZpZF8QLlo0oa5b8Xg2Mb4_bcQ_ewWs17M7w3zCwvuFUMMMEWfniQLVwIyg09NBKFj6bGiVZoKh36asGU0ep7XW2_lPFbLuRTGf6mfLu_M-rpeaWU1mXwSnnJzBr7lzdQXZTAzh4dwLSP3Civj1o1WDHQOmT4w7vjT8cbdHLyMXydnr5P4K1ygIzge4fULjol6EoY69B93xbrEq0HPpydJc8kx1IwoNE5QTOTMRKQyTxB1zZWQ9S7Pcggnjpgn9fUzLNiilQuT0tZEy8cNbSt18hEb32t8kgay3aKc2BIyEQfCL3l1G2C6upmuyg6YIFVtH55fkFYT4p6torbUUmZOBd1D1YraSHXk7dhzph8jYTzHg3T4xSiWiNvKV-QFxeYV5w1fxqB8oLzeQgDn89JdjsRrcH8hF6cCzUSS2mHzmnXvQlD1d31YFzr3PNsPGcuYuFcPkg2lZgM5KQkO5v_rO1pAQKe9ucPJ6ytWu0f0t_PuG_2X1q4vy_b__te3jfe4LCsBypYeFdeenaDQ1MO0GASfjLYUd-5BjfyNVC9ZqFVl0w4ZTDZ0c7CBocuqvpZtpg44-GNNLxNIwti0k16wOI79vobS9ZG0w)

---

# Third Party APIs

## Introduction and intended use

We are integrating external APIs into the App Service. When deploying or updating an App, you can select which APIs you want to integrate into the App Service.
Therefore we inject headers into the requests to the container to connect to those APIs. We also make sure to create the correct network configuration to make sure 
those endpoints can be reached.

## NLP

Can can either connect to the `dev` or the `prod` NLP API. If enabled, we inject the header `APP_SERVICE_NLP_API_KEY` which can 
be used to connect to the API. Besides access to LLMs, this also offers the possibility to request an instance of the Qdrant Vector
Database. Please checkout the [NLP API](/aiml/) documentation for further information.

## BayBE

If enabled, we inject the headers `APP_SERVICE_BAYBE_API_URL` and `APP_SERVICE_BAYBE_API_KEY` which can be used to connect to the API. 
Please checkout the [BayBE API](/baybe/) documentation for further information.

---

# Special Settings

## Introduction and intended use

We offer special settings for special apps. Those settings can only be enabled on request and only for specific apps. Please raise a SNOW ticket on <a target='_blank' href='https://mhub.service-now.com/esc'><b>IT4YOU</b></a> to the Global UPTIMIZE Ops team if you need access to those features.

## Unconstrained access to all Foundry projects

When you create a Foundry App, you select which projects, that are associated to your selected use case, can be used by the App. In special cases, it can be necessary, that the app should be able to reach all existing projects in Foundry. Please keep in mind, that the user that is logged in into the app must have the permission to access the projects as well.

## Organization Level Consent

If enabled, users to not have to consent to the app permissions on the first login anymore. Some special apps require this setting, but in general we want
users to manually consent to the permissions and we only rarely make exceptions here.

## Azure Entra ID Authentication

Applications can be configured to use Azure Entra ID for authentication. Once your app is enabled on the platform side to use this special setting, app owners can select Azure Entra ID from the backend dropdown menu.

![Azure Entra ID option](https://docs.uptimize.merckgroup.com/assets/appservice/backend-options-entraid.png)

> **Note:** With this option being enabled, all Merck users will be able to authenticate to your app and the app will be public to Merck internals, so you have to take care of the authorization part in your app logic/implementation.

## Public internet access (Egress Firewall)

Some apps may require internet access to read data from public APIs for example. Currently, this functionality is not available by default for any app. To enable this feature, you must first obtain approval from your Sector Data Office (SDO). Once approved, an IT4YOU (SNOW) ticket must be raised, including the approval documentation and the specified endpoints.

Once this is configured for your app, you should be able to see the whitelisted endpoints under the "Enable access to external APIs" checkbox, you need to select the needed endpoint to be enabled for your app firewall rule. Below an example, subdomains under httpbin.org will be accessible from your app.
![Egress Firewall Configuration](https://docs.uptimize.merckgroup.com/assets/appservice/per-app-firewall-setting.png)

## Bring-your-own-Foundry-TPA for OAuth

Some applications may require more fine-grained access to certain Foundry resources and ontology objects and -functions. Especially for calling ontology functions (like AIP logic) on the logged-in user's behalf, the default Third Party App (TPA) setup will not provide tokens capable of doing so.

In such cases, you will need to open an IT4You ticket for the App Service Team to review your request. Once it's reviewed and deemed valid your application will be enabled for the functionality.

After the approval, create a Foundry Issue, asking for an OSDK-enabled Developer Console TPA with a confidential OAuth client (including client_id and client_secret), where you can configure the necessary resource scopes. This TPA can then be used to replace the default App Service TPA for OAuth to generate Foundry User Access Tokens with the required capabilities for calling Ontology functions. Please note that in this case the project selection in the App Service UI has no effect.

**Note**: When using OSDK enabled TPAs, the classic compass based APIs that Foundry DevTools uses will not work anymore. This means, that for accessing Foundry datasets with the user tokens generated by the OSDK TPA, you will need to use the public Foundry API endpoints under [FoundryContext.public_client_v2](https://github.com/emdgroup/foundry-dev-tools/blob/e09e4ff52cc59e5e77509bfedc3f487cbdc25681/libs/foundry-dev-tools/src/foundry_dev_tools/config/context.py#L190) released in `Foundry DevTools version 2.1.21`.

Once you have access to the `Special Settings`, you can enter your TPAs `Client ID` and `Client Secret` and optionally custom `OAuth Scopes` in the respective fields in the App Service app configuration.

For information on how to configure necessary resource scopes for your OSDK enabled Developer Console TPA, you can check out the [Developer Console](https://docs.uptimize.merckgroup.com/foundry/beta/beta-applications/dev-console/) section of the UPTIMIZE Foundry documentation.

## Federating App Service Identities to external services

Each app deployed on the App Service has a unique identity that can be used to authenticate with external systems.

### Overview

Apps can obtain an OIDC-compliant JWT token from [AWS STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_outbound.html) using the `GetWebIdentityToken` API. External systems can verify these tokens to establish trust relationships with your app.

### Token Structure

The JWT token contains:
- **Issuer (`iss`)**: The STS OIDC token issuer URL for your environment
- **Subject (`sub`)**: Your app's ECS task role ARN
- **Audience (`aud`)**: Configurable audience value (specified in API call)
- **Claims**: Additional metadata including AWS account, tags, and principal information

Example token payload:
```json
{
  "aud": "testAudience",
  "sub": "arn:aws:iam::938973458821:role/app-nuavz2j32til6mxv-ECSTaskRole-Q6zvA9ehYTax",
  "https://sts.amazonaws.com/": {
    "org_id": "o-on4r1a68tf",
    "aws_account": "938973458821",
    "ou_path": [
      "o-on4r1a68tf/r-6or0/ou-6or0-pbr8bs7r/"
    ],
    "original_session_exp": "2026-01-20T21:13:04Z",
    "source_region": "eu-central-1",
    "principal_id": "arn:aws:iam::938973458821:role/app-nuavz2j32til6mxv-ECSTaskRole-Q6zvA9ehYTax",
    "principal_tags": {
      "u:use-case": "a1cf36b7-0765-4bde-a104-5f1f68b5849a",
      "port": "8080",
      "name": "vnc",
      "owners": "M276304",
      "contributors": "-"
    }
  },
  "iss": "https://a1558243-1537-4e36-a7e4-a659f6a02c8e.tokens.sts.global.api.aws",
  "exp": 1768922583,
  "iat": 1768922283,
  "jti": "b0d6c45e-a1db-4196-ad3c-e9e8ab3a09d8"
}
```

### Getting Token Information

Click the **(i)** button next to your app in the App Service UI to view:
- **App ID**: Unique identifier for your app
- **Token Issuer URL (iss)**: The issuer claim for token verification
- **Token Subject (sub)**: Your app's task role ARN (subject claim)

### Usage

```python
import boto3

sts = boto3.client('sts')
response = sts.get_web_identity_token(
    Audience=['your-audience'],
    SigningAlgorithm='RS256',
    DurationSeconds=300
)
token = response['WebIdentityToken']
```

External systems can verify tokens using the issuer's JWKS endpoint and validate the `sub` and `iss` claims match your app's identity. 
The Streamlit sample app includes a complete working example on the **STS OIDC** page that demonstrates how to obtain and decode JWT tokens.

---

# Introduction to AppService Databases

A Databases module (sometimes goes by name DBaaS), is a module, that implements
capability of persistent storage for applications built with UPTIMIZE AppService.
It is being implemented as a separate AppService account to ensure high level
of isolation from primary AWS account, and built with data isolation in mind.
It is based on PostgreSQL Database Engine, which is a core for whole system.

This module:
- gives an ability to create databases easily, in one click, without need to
  handle complex technical details of starting up a database on AWS
- grants capability for data storage, easy to connect to
  database, whenever it is needed, with as much application as it is needed
- allow easy access and injestion of data through ability to connect to the
  database via direct connection within Merck network

Non-goals of module:
- build a big data storage and processing system
- build a storage, capable of handling high volumes of incoming traffic

---

# How to use AppService Databases

This document explains, how to use AppService Databases module for end users.
It is covering few major parts of usage of the system: create database, connect
to it using Merck computer, and connect an application to the database. First,
we will start with high level explanation of what is happening, and then go on
with specific examples with code examples on how to use it.

## High level ideas

*AppService Databases* uses the AWS capabilities to all they can bring us in
order to ensure capabilities. The database management is implemented through
CloudFormation mechanism, to ensure ability to roll back and ensure follow on
in changes. The authentication to databases is implemented through IAM
capabilities, which ensures ability to keep ability to connect to specific
databases in a safe manner by generating short term tokens.

So, essentially first when you want to use the database, you need to create
one. This is done through AppService Management Console "Databases" tab. If
you don't have one, please contact the administrator of the system so they can
grant the access to it to you.

Then, in order to connect to the database, we need to generate one-time tokens
in order to connect to it. The same kind of token is going to be used both for
personal connectivity, and for application connectivity, but the way we will be
getting one will differ (see how to do it in the next example). The only
important thing is that the _connectivity token will always be valid for 15
minutes_. This should not pose a problem for applications, as those usually
keep a long-living connection to the database (except for few exceptions, like
Django ORM, which will be covered too), while allowing to safeguard connection
using personal credentials.

## How to create a database

The process of creation a database is extremely simple: all you need to do is
to navigate to the "Databases" tab in Factory Management Console, and click
"Create Database" button, as it is highlighted on a screenshot. You will need
to wait for up to 30 seconds in order for changes to be applied, and a new
database will appear. If it does not, try refreshing the page.  If it does not
help after few attempts,  or you see "FAILED" in status column, please contact
system administrator.

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-create-db-highlight.png)

The name of database is generated at random, but always start with `db_`
prefix.

Note: As of the moment the document is being written, the only databases you
will be able to see, are databases that you created.

## How to connect to a database from Merck computer

After you created a database, you might want to connect to it directly to
upload the data. In order to do that, you will need to press the "Get
Credentials" button on a database you'd like to connect to , as it is
highlighted on a screenshot. It will generate a personal connectivity token to
the database. *Note: it is going to be valid for 15 minutes*

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-get-credentials.png)

Then, after a brief time to wait for correct accesses to be created, the next
popup will be presented, with all data you will need to connect. You can use
same credentials both to connect to the database directly via `psql` or DBeaver
client, or use it to connect a locally running database, as long as you are
using Merck computer or are connected to the VPN.

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-credentials.png)

## How to connect an application on AppService

Whenever you want to connect an actual application to the database, you need to
execute few steps first:
1. grant an application access to the database
2. fetch connectivity token on database
3. connect to the database

### Granting access to application

In order to grant an application an access to database, first you need to open
"Details" view of a database by clicking on it's name.

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-db-details-placement.png)

Then, click "Connect Application":

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-db-details-connect.png)

After it, choose your application in a dialog box, and click "Connect".

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-connect-app.png)

In brief moment (about 15-30 seconds), it should appear in the table after
refresh.

### Generating connectivity token in application

In order to connect to the database within application, first you will need to
generate a short-term connectivity token. In order to do that, you will need
these things prepared first:
- install an AWS library within your application (e.g. `boto3` for Python, or
  `aws-sdk` for node.js)
- install a PostgreSQL driver in order to connect to the database (e.g. for
  Python, it is `psycopg2-binary`, or `node-postgres` for node.js)
- get the information you can find in the "Applications" table on the line
  that corresponds to specific application you connect, as you can see on a
  screenshot: the UserName and the IAM Role.

![Create Database Placement](https://docs.uptimize.merckgroup.com/assets/appservice/appservice-dbaas-db-details-conn-details.png)

Then, there are few steps you will need to execute in order to generate the
token. The example here is in Python, although it is going to look mostly the
same in any of languages that have an official AWS SDK and a PostgreSQL
connector:

```python
import boto3

host = ...     # Use hostname in the top block
port = 5432    # Default port, though check it on the database page
iam_role = ... # Here you put the IAM Role from the table
user = ...     # Here you put a User Name from the table
database = ... # Name of a database, e.g. "db_asdfASDF'

# Note: this should have this specific value
# The value should be common, because AWS operates in eu-central region
# If this value is incorrect, you won't be able to connect to the database
region = 'eu-central-1'

# Because the AppService Databases is located in a separate account,
# we need to first assume role to gain possibility to generate a correct
# token.
sts = boto3.client(
    'sts', endpoint_url='https://sts.eu-central-1.amazonaws.com')
credentials = sts.assume_role(
    RoleArn=iam_role,
    RoleSessionName='connectivityTest1',
)['Credentials']

# Then, we need to initialize the AWS RDS client with credentials
# in the Databases AWS account
rds = boto3.client(
    'rds',
    aws_access_key_id=credentials['AccessKeyId'],
    aws_secret_access_key=credentials['SecretAccessKey'],
    aws_session_token=credentials['SessionToken'],
)

# Then we generate token
token = rds.generate_db_auth_token(
    DBHostname=host,
    Port=port,
    DBUsername=user,
    Region=region,
)
```

### Connecting to the database

Connecting to specific applications might vary from tools you are going to use,
but, commonly, the only thing you need to do is pass the `token` we generated
in the previous section into the `password` field, like this (if you are using
raw connector:

```python
import psycopg2 as pg

with pg.connect(host=host, port=port, user=user, password=token, dbname=database) as conn:
    with conn.cursor() as cursor:
        cursor.execute('SELECT NOW();')
        result = cursor.fetchall()
        print(result)
```

Although, the same limitation is being imposed as it is on the personal token
to connect to the database from user machine directly: the token is valid for
15 minutes since creation, and after the time passes, it will stop being valid.
This introduces complications to applications, which do not keep connection
alive for long timeframes, like Django. You will need to specific workaround
for specific tool you are going to be using, like this solution for Django
framework:
[link](https://stackoverflow.com/questions/57865837/how-to-do-rds-iam-authentication-with-django).

# Important notes on database usage

We are using the top-notch storage solution that AWS provides, which gives
extreme scalability capabilities. Yet still it has it's own limitations, so
there is a need to keep some things in mind in order to make usage of the
system as smooth as it is possible:
- There are daily backups of the database overall, so it is possible to restore
  data overall. Although, the process is complex and requires administrator
  help, so if it is possible: try not to remove data, but copy it to another
  table to ensure it's safety.
- Sometimes, it is better to write simpler queries and perform filtering or
  operations on the application layer, as it will can make result calculation
  much faster. Especially if there is some complex logic.

Thanks a lot for reading up to this point, I hope you found this document
useful. Good luck using AppService Databases. :)

---

# Administrator Guide on AppService Databases

This document will explain most common issues and how to deal with those.

## How to grant user capability to use Databases module

In order to grant user capability to use Databases module, you will need to
change the variable `REACT_APP_FEATURE_FLAG_ADMINS` in [management-console env](https://dev.azure.com/Uptimize/factory-appservice-nreg-ec1/_git/factory-appservice-nreg-ec1?path=/management-console/frontend/.env).

You need to append a Merck account name (e.g. anthony.stark@merckgroup.com) to
the variable in the end of line, by prepending a comma before it so it looks
like a comma-separated list. After that, a new version Uptimize App Service
Management Console has to be deployed.

## Debugging FAILED status when creating database

In order to debug the problem, you will need to go open CloudFormation section
in AWS in corresponding account of AppService, then look for failed jobs.
There, in logs should be information on what's gone wrong.

If there is not, then you will need to check logs inside of
`ec1-da-<x>-processpharmx-nreg-\*` logs for Service Broker lambda. This should
give better understanding on the underlying issue.

## Restoring database data in case of failure

The DBaaS is having daily backups being made each day. You should be able to
restore specific data doing a restore from backup.

How to do it:
1. Log in into corresponding DBaaS account
2. Go to RDS, then to Databases
3. Choose `ec1-rds-aurora`
4. On top right corner choose `Actions -> Restore to point in time`
5. The dialog of database creation will open, make sure you fill all required
   params
6. Connect to it from Merck machine using root credentials from SecretsManager
7. Dump all the data you might need from that database