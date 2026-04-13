# UPTIMIZE AI-ML Services

## What is UPTIMIZE AI-ML Services
UPTIMIZE AI-ML Services offer state-of-the-art products and services to both consumers and (citizen-) developers to enable self-serve adoption of AI & Machine Learning at scale and speed. Our comprehensive suite of AI and ML products help you build, deploy, and scale intelligent applications. From powerful APIs to specialized tools and platforms, we provide everything you need to succeed in your AI-ML journey.
##
![Overview](/assets/nlp/offerings_overview.png)


## AI-ML APIs

[AI-ML APIs](aiml/aiml_apis/) offer access to models from leading providers such as OpenAI, Anthropic, Mistral, and more. These APIs empower you to integrate advanced AI functionalities into your applications, enabling tasks such as natural language processing, document processing, speech recognition, and more.

---

## VectorDB

[VectorDB](aiml/vector_database/) is a product of crucial importance in the context of large language models (LLMs) due to their ability to efficiently store and retrieve high-dimensional vectors representing complex data. LLMs rely on vectors to encode and represent words, phrases, and documents, which enables them to perform tasks such as language understanding, translation, and summarization. By leveraging vector databases, LLMs can quickly retrieve relevant vector embeddings, compare similarities between vectors, and perform complex operations such as nearest neighbor search and clustering. This enables LLMs to effectively process and understand natural language, making them invaluable for a wide range of applications in natural language processing, information retrieval, and knowledge representation.


---

## Plugins

[MCoder](aiml/ai-coding-assistants/) is a coding assistant plugin which integrates into IDEs for streamlining the development process with features such as code generation, refactoring, and debugging assistance. The tool leverages the Continue open-source code assistant plugin with support of UPTIMIZE AI-ML LLM APIs. Key features include a robust code generation capability that automatically creates boilerplate code, class structures, and functions based on the given context. It offers contextual code assistance, allowing the tool to understand your code and suggest relevant completions, variable names, and methods. MCoder also provides intelligent refactoring support, enabling users to rename variables, functions, and restructure code blocks with ease. Additionally, it features in-line debugging assistance, which helps identify potential issues in your code and suggests appropriate fixes. Additionally, MCoder offers multi-language support, accommodating various programming languages such as Python, JavaScript, TypeScript, Java, SQL, and more.

---

## LLM Traces

[LLM Traces](aiml/llm-traces/), powered by Langfuse, is a foundational technology for developers for tracing, evaluation, and monitoring of applications which leverage large language models under the hood. With LLM Traces, developers of LLM applications can track and trace fine-grained details such as API calls, models used, latencies, execution chains, tool calls, token consumption, costs, and many more. It also allows creating and managing evaluation datasets whether they are generated with expert inputs or bootstrapped with LLMs. Prompt version control is also a very useful feature to understand the evolution of system instructions and their releases to production. All these and many more features will be available within LLM Traces to help you build and deploy LLM applications with a higher level of transparency. LLM Traces runs as a self-hosted service within UPTIMIZE and provides users a secure way to access it.

---

## MLFlow

[MLFlow](aiml/mlflow/) is an open-source platform designed for managing the end-to-end machine learning lifecycle. The UPTIMIZE MLflow service provides a comprehensive suite of features that enhance your machine learning projects. It allows for experiment tracking, enabling you to log essential details such as parameters, code versions, metrics, and artifacts while executing machine learning code. Additionally, MLflow ensures reproducibility by packaging your ML code in a standardized format, which facilitates consistent redeployment and sharing. The platform also includes a model registry, where you can store, annotate, version, and manage your models in a centralized repository, ensuring easy access and organization. Furthermore, MLflow simplifies model deployment by allowing you to deploy models as APIs for real-time inference. Finally, it integrates with UPTIMIZE security controls and user management, providing robust enterprise security for your machine learning applications.

---

# AI-ML Profiler
## Using AI-ML Profiler
UPTIMIZE [AI-ML Profiler](https://api.nlp.dev.uptimize.merckgroup.com/) is a convenient platform to browse our comprehensive range of AI-ML Products, explore successful applications built with AI-ML Services, and conduct experimental real-time testing of APIs without the need to request API tokens. Additionally, the AI-ML Profiler also provides access to informative videos on AI-ML Services, insights into the team behind the technology, and release notes of the latest updates and features currently in development or planned for the future.

<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp-api/profiler.mov" type="video/mp4">
  Your browser does not support HTML video.
</video>

---

# UPTIMIZE AI-ML APIs

## What is UPTIMIZE AI-ML API
UPTIMIZE AI-ML API environment offers possibility for data practitioners to containerize and publish the AI-ML models trained, fine-tuned and/or tested on the UPTIMIZE Lab environment. The API environment leverages AWS Elastic Container Service (ECS) for container orchestration, AzureDevOps for CI/CD and other AWS services for scalability, security, and monitoring. UPTIMIZE AI-ML Profiler is a user-friendly interface for cataloguing and rapid testing the AI-ML APIs which are available for use case consumption.
## Catalog of AI-ML APIs 
Accelerate innovation with our catalog of AI-ML APIs, which provides you ready-to-use, enterprise-grade AI capabilities that integrate seamlessly into your applications and workflows.
##
![Catalog](/assets/nlp/catalog_overview.png)

## Creating new AI-ML APIs
As shown in the below diagram, data practitioners can leverage the existing process for deploying new APIs. Once AI-ML models are ready for deployment after testing and code-freeze, UPTIMIZE AI-ML team will setup AzureDevOps repository, CI/CD pipeline, permissions and execute infrastructure provisioning needed for deployment of APIs. This is a one-time operation to setup foundational AWS components needed for APIs to be functional. Once an API or set of APIs for use cases has been deployed, the respective API owner(s) will have necessary permissions and rights to further revise, fine-tune, retrain, and re-deploy the models.

![Creating API](/assets/nlp/create_api.png)

## Requesting access to AI-ML APIs
APIs are accessible based on token authentication. Tokens are usually granted on use-case basis rather than user-basis. Owner(s) of APIs will get default token as a part of API development and deployment exercise. In case, you need access to APIs which are already deployed within UPTIMIZE AI-ML environment, you can use the UPTIMIZE AI-ML API [Token request form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). For APIs in the development environment, there is a token quota limit of 2K calls per day. For production environment, there is a token quota limit of 10K calls per day, which is extensible based on the use case request.
##
![Flow](/assets/nlp/get_started.png)

## Monitoring consumption of AI-ML APIs
To monitor your consumption of AI-ML APIs, log in to Foundry, navigate to your AI-ML request, and click on "View Usage Details". Here you will find valuable information such as your remaining daily quota, default daily quota, the batch processing quota, the expiry date of your quota, the last hit timestamp, the total number of hits, and the specific endpoints you can access. Please note that all timestamps are displayed in UTC. This feature is designed to help you manage your usage more effectively and ensure that you stay within your allocated quotas. UPTIMIZE AI-ML team monitors your usage of APIs. In case of anomalies or overuse of APIs, the API owner(s) will be contacted for resolution.

---

# Building UPTIMIZE AI-ML API

## Introduction to Building UPTIMIZE AI-ML APIs

The diversity of tools, architectural patterns, and deployment practices is vast and varied. While this diversity allows great flexibility, it can also lead to challenges in maintaining consistency and uniformity across projects. To address these challenges, especially when creating UPTIMIZE AI-ML APIs, we recommend a set of tools and a specific project and Dockerfile structure. It's important to note that the selection of these tools and structures is not born out of necessity but rather out of a desire to foster uniformity and best practices within our development processes.

### Why FastAPI?

FastAPI is the recommended web framework for several compelling reasons. Its design is inherently fast, making it an ideal candidate for high-performance applications. FastAPI's dependency on standard Python type hints not only encourages cleaner code but also significantly improves route and parameter handling. This results in more readable and maintainable codebases.

### Project and Dockerfile Structure: A Rational Approach

The suggested project structure and Dockerfile setup are designed with both simplicity and functionality in mind. This structure ensures that each component of the API - from endpoints to configuration - has a clear, logical place in the project hierarchy. This not only aids in the development process by making navigation and understanding of the project straightforward but also simplifies maintenance tasks.

Similarly, the provided Dockerfile structure is optimized for efficiency. By dividing the Dockerfile into a building stage and a running stage, we leverage the benefits of multi-stage builds. This approach minimizes the final image size, reducing the time it takes to build and deploy containers. Moreover, by containerizing our applications, we embrace the principle of "Build once, run anywhere," enabling consistent development and deployment environments that are crucial for the reliability of AI-ML APIs.

## How to Create a Containerized FastAPI Application

This section instructs you on creating a production-ready API using FastAPI, a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. The API will be containerized using Docker for consistent development and deployment environments.

### Define Your Project Structure

Basic structure:

```
dockerfile
readme.md
main.py
requirements.txt
azure-pipelines.yaml
```

### Develop Your Application

In the below example, a simple service is developed using FastAPI.
You can re-use this code to build your own service.

```python
# main.py
from fastapi import FastAPI


app = FastAPI()


@app.get("/health/", status_code=200)
async def health():
    """
    Default healthcheck function for LoadBalancer. DO NOT REMOVE.
    """
    return


@app.post("/my-service-name")
async def example():
    """ Implement your service endpoint(s). """
    return {"Hello": "World"}

```

State your dependencies, for example, on a `requirements.txt` file.

```
# requirements.txt
fastapi==0.111.0
uvicorn[standard]==0.21.1
```

### Containerizing Your Application with Docker

You can use the example `dockerfile` below or create one yourself.

```dockerfile
# dockerfile 
FROM python:3.9

WORKDIR ./
COPY requirements.txt ./

RUN pip3 install -r requirements.txt

CMD ["uvicorn", "main:app","--host","0.0.0.0","--workers","1","--timeout-keep-alive","120"]
```

This file instructs Docker on how to build the container image for your application.

Your `dockerfile` should build an efficient, secure container for running your FastAPI server.

Here are the main steps that your dockerfile should follow:

1. Use a base image, preferably with Python already installed.
2. Copy the project files to the image, including:
  - Project requirements: for example, the file `requirements.txt`
  - The application files: for example `main.py`

3. Install the necessary libraries for the project: for example with `pip install -r requirements.txt`.
4. Run `uvicorn`: `CMD ["uvicorn", "main:app","--host","0.0.0.0", --port, "8000","--workers","1","--timeout-keep-alive","120"]`

### Authentication
The authentication layer is handled on the infrastructure side, so you do not need to implement any code to authenticate API Keys.
The authentication layer will automatically be added when the service is deployed.

### Running Your Application

Finally, build and run your Docker container.

```
docker build -t myapp .
docker run -p 8000:8000 myapp
```

If you've followed the examples above so far, your FastAPI application should now be running inside a Docker container and should be accessible at `POST http://localhost:8000/my-service-name`. 
The health check can be accessed at `GET http://localhost:8000/health/`.

### Deploy your application

For more information on how to deploy your application, check the chapter *Deployment of UPTIMIZE AI-ML API*.

### Collecting logs

After your application is successfully deployed, its logs should be accessible at: 

`curl --request POST \
--url https://api.nlp.dev.uptimize.merckgroup.com/service-name/logs/unix-timestamp-start-milliseconds/unix-timestamp-start-milliseconds \
--header 'api-key: {api-key}' \
 `

Where: 
- `service-name` is the name of the service running your application, 
- `unix-timestamp-start-milliseconds` is the unix timestamp in milliseconds from when the returned logs start
and `unix-timestamp-end-milliseconds` is the unix timestamp in milliseconds from when the returned logs end.

---

# Deployment of UPTIMIZE AI-ML API

## Introduction to Deployment

The successful deployment of UPTIMIZE AI-ML APIs is a key step in ensuring that the services provided are reliable, scalable, and accessible to end-users. This document outlines the necessary steps to deploy these APIs, focusing on leveraging Azure DevOps Pipelines for a smooth Continuous Integration and Continuous Deployment (CI/CD) process.

## Creating an Azure Pipeline Configuration

To automate the deployment process, you will need to add an `azure-pipelines.yml` file to the root of your project repository.
This YAML file defines the build and deployment pipeline in Azure DevOps, automating tasks such as building the Docker container,
adding the authentication layer and pushing it to a container registry, and deploying it to a service.

Below is a general template to guide you in creating the `azure-pipelines.yml` for deploying the UPTIMIZE NLP API.
This file can be found below.
Just make sure you replace **<MY_SERVICE_NAME>** in the file with the correct service name for the app.
If dockerfile file path is not in the project root, please edit the **dockerfilePath** parameter accordingly, having the
leftmost forward slash as the project root path.

```yml
trigger:
  - main

pool:
  vmImage: ubuntu-latest

resources:
  repositories:
    - repository: templates
      type: git
      name: factory-nlp-nreg-ec1/api_nlp_core_templates
      ref: "refs/heads/main"

variables:
  - group: ${{variables['Build.SourceBranchName'] }}

steps:
  - template: ./pipeline-task/new_api.yml@templates
    parameters:
      dockerfilePath: "/dockerfile"
      serviceName: "<MY_SERVICE_NAME>"
```

This template details the essential steps, including building the Docker container, pushing it to Amazon ECR (Elastic Container Registry), and deploying the new image to an ECS (Elastic Container Service) service.

## Repository Creation Request

Prior to setting up the CI/CD pipeline, a new repository is required. Please reach out to us at `gpt-api@merckgroup.com` with the following details:

- The name of your project
- A brief description of the API
- Any specific repository settings you may require

We will facilitate the creation of the repository into which you will upload your project.

## Proceeding with Deployment Configuration

Once your repository is set up and you have added the `azure-pipelines.yml` file to it, do not attempt to run the pipeline yourself. Instead, inform us that your repository is prepared for deployment by sending an email to `gpt-api@merckgroup.com`. 
Please include the following information in the email:

- The repository name and URL
- Any specific instructions or details about the deployment environment or conditions

We will proceed to configure the necessary AWS services and provide you with the appropriate permissions to initiate and manage the pipeline. This ensures that the deployment process aligns with organizational policies and infrastructure configurations, avoiding deployment issues and service disruptions.

---

# UPTIMIZE OpenAI API
The UPTIMIZE OpenAI API provides a proxy to the [Azure OpenAI API](https://learn.microsoft.com/en-GB/azure/cognitive-services/openai/overview), 
meaning that every API request 
against the Azure OpenAI API works exactly the same when sent against the UPTIMIZE OpenAI API, just with another API key.
This allows software packages like [openai](https://github.com/openai/openai-python) or 
[langchain](https://github.com/hwchase17/langchain) to be used transparently by only changing
the API URL and the API key.

## What's new
- Availability of reasoning models as a preview on development environment, o1-mini and o3-mini, deployed with Global Standard policy

## Read this first!
Please make sure that you have read and understood the following things before using the API:
- The OpenAI API is not intended for use in regulated environments.
- The OpenAI API is not intended for use for public facing products.
- The OpenAI API is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions). 
- When using the OpenAI API it is the use case team's responsibility to ensure that the use of the API follows [Microsoft's code of conduct](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct).

## Environments
This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher workloads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Register your use case and apply for an AI-ML API key
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select '/openai' and accept the terms and conditions.

## Setup your local environment
Depending on what frameworks you want to use you have to adjust a few things in your code or environment.

## Code Examples

Please click to expand and view the code examples.

<details>
<summary><b>OpenAI Package (Version >= 1.0.0)</b></summary>

```python
import openai
from openai import AzureOpenAI

api_key = get_nlp_api_key() # never store your API key in your code

client = AzureOpenAI(
    azure_endpoint=f"https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-10-21" # Pass Based on Model Version
)

response = client.chat.completions.create(
    model="<chat model name - refer table below>",
    messages=[{"role": "user", "content": "Once upon a time"}],
    max_tokens=5 
    #max_completion_tokens=5 , #for GPT-5 model,Change from max_tokens to max_completion_tokens
)
print(response)

response_embedding = client.embeddings.create(
    model="<embedding model name - refer table below>",
    input="Once upon a time",
)
print(response_embedding)
```
</details>
</br>
<details>
<summary><b>Vision Capability with GPT-4o & GPT-5</b></summary>

```python
from openai import AzureOpenAI

# Setting up Important variables
api_key = get_nlp_api_key() # never store your API key in your code
model = "gpt-4o"
#model = "gpt-5"

# Setting Up your Image
# To pass an image to your API, you have 2 options either encoding your local image as a base64 image or providing a url to an online image.

# Setting Up AzureOpenAI Client
client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-10-21" # Pass Based on Model Version
)

# Option 1 : Local Image
import base64
IMAGE_PATH = "path/to/image.jpg"
# Open the image file and encode it as a base64 string
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")
base64_image = encode_image(IMAGE_PATH)

# Pass the encoded image to gpt-4o
response = client.chat.completions.create(
    model=model,
    messages = [
    {
        "role": "user",
        "content": [
        {
            "type": "text",
            "text": "What's in this image?"
        },
        {
            "type": "image_url",
            "image_url": {
            "url": f"data:image/webp;base64,{base64_image}"
            }
        }
        ]
    }
    ],
    max_tokens = 300,
    #max_completion_tokens=300 , #for GPT-5 model,Change from max_tokens to max_completion_tokens
)

print(response.choices[0].message.content)


# Option 2 : Image URL 
# An Image for a 2 overlapping Rectanlges, check the url to get an intutation about it.
url = "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_538/MTczOTQ5NDQyMzQ3NTc0NTc5/compound-shapes-how-to-find-the-area-of-a-l-shape.webp"

# Calling the client with a prompt asking for solving a simple math homework while passing the image url - calculating the area of a 2 overlapping rectangles.
response = client.chat.completions.create(
    model=model,
    messages=[
        {"role": "system", "content": "You are a helpful assistant that responds in Markdown. Help me with my math homework!"},
        {"role": "user", "content": [
            {"type": "text", "text": "What's the area of the shape in this image?"},
            {"type": "image_url", 
            "image_url": {
                "url": url}
            }
        ]}
    ],
    temperature=0.0,
)

print(response.choices[0].message.content)
```
</details>
</br>
<details>
<summary><b>Audio File Transcription with OpenAI Whisper</b></summary>

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-10-21" # Pass Based on Model Version
)

# Transcribe the audio
audio_path = "path/to/audio_file.mp3"  # mp3, wav and m4a files are supported
transcription = client.audio.transcriptions.create(
    model="whisper",
    file=open(audio_path, "rb"),
)

print(transcription)
```
</details>

</br>
<details>
<summary><b>Langchain package</b></summary>

```python
pip install langchain-openai langchain

from langchain_openai import AzureOpenAI
from langchain_openai.chat_models import AzureChatOpenAI
from langchain.schema import HumanMessage
from langchain_openai.embeddings.azure import AzureOpenAIEmbeddings
import os

os.environ["AZURE_OPENAI_ENDPOINT"] = "https://api.nlp.{env}.uptimize.merckgroup.com"
os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2024-05-13" # Pass Based on Model Version
os.environ["AZURE_OPENAI_API_KEY"] = get_nlp_api_key() # never store your API key in your code

llm_chat = AzureChatOpenAI(deployment_name="<chat model - refer table below>", model_name="<chat model - refer table below>", max_tokens=5) #max_completion_tokens=500 , #for GPT-5 model,Change from max_tokens to max_completion_tokens

response_chat = llm_chat.invoke([HumanMessage(content="Once upon a time")])
print(response_chat)

# Azure OpenAI currently supports input arrays (chunk_size) up to 16:
# https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference#embeddings 
llm_embedding = AzureOpenAIEmbeddings(deployment="<embedding model - refer table below>", chunk_size=16)
response_embedding = llm_embedding.embed_query("Once upon a time")
print(response_embedding)
```
</details>

## Available APIs

We currently block requests to fine-tuning and training data endpoints. 
If you feel that your use case requires a fine-tuned OpenAI model, get in touch with us. 

## Available models

### Important Notes:
-   The "o" series models (reasoning models) are not designated for Batch-processing.
-   For GPT-5 Model Series, By default, the reasoning_effort parameter is set to minimal. We recommend leaving this setting as is unless your use case requires a different value. To change it (for example, to medium), include the following in your API request: "reasoning_effort": "medium" .
-   Additional models have been deployed in North America region which covers US & Canada, the naming convention for these models will be original_model_name appended by -na, with an exception for text-embedding-3-small which will be eventually be made available in both **EU & NA (North America)**. For instance, **gpt-4o-mini (this will use default region - EU based models) and gpt-4o-mini-na (this will use North America region - US & Canada based models)**.
-   For models deployed with the Global Standard policy, it involves processing the data across multiple regions. For region sensitive data, its best to use a model that processes data within a single region.

Hence please consider data privacy whenever using non EU models.


The following models are currently available:


| Model name | Model Type | Model Version | Price ($ / 1k token) prompt/completion | Max Request | Region | TPM | RPM | Environment Availability |
| --- | --- | --- | --- | --- | -- | -- | -- | -- |
| gpt-51 | Chat | 2025-11-13 | 0.00138 / 0.011 | Input-272K / Output-128k (tokens) | EU | 3M | 3K | Dev & Prod |
| gpt-5 | Chat | 2025-08-07 | 0.00138 / 0.011 | Input-272K / Output-128k (tokens) | EU | 3M | 3K | Dev & Prod |
| gpt-5-mini | Chat | 2025-08-07 | 0.000275 / 0.0022 | Input-272K / Output-128k (tokens) | EU | 3M | 3K | Dev & Prod |
| gpt-41-gs | Chat | 2025-04-14 | 0.002 / 0.008 | Input-1M / Output-32k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 5M | 5K | Dev & Prod |
| gpt-41-mini-gs | Chat | 2025-04-14 | 0.0004 / 0.0016 | Input-1M / Output-32k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 5M | 5K | Dev & Prod |
| o1-mini | Chat | 2024-09-12 | 0.003 / 0.0012 | Input-128k / Output-65k (tokens) | EU | 950K | 95 | Dev & Prod |
| o1-mini-na | Chat | 2024-09-12 | 0.003 / 0.0012 | Input-128k / Output-65k (tokens) | NA | 1M | 100 | Dev & Prod |
| o1-mini-gs | Chat | 2024-09-12 | 0.003 / 0.0012 | Input-128k / Output-65k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 41M | 4.1K | Dev & Prod |
| o3-mini-gs | Chat | 2025-01-31 | 0.0011 / 0.0044 | Input-200k / Output-100k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 40M | 4K | Dev & Prod |
| o4-mini-gs | Chat | 2025-04-16 | 0.0011 / 0.0044 | Input-200k / Output-100k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 9.7M | 9.7K | Dev & Prod |
| gpt-4o-mini | Chat | 2024-07-18 | 0.000165 / 0.00066 | Input-128k / Output-4k (tokens) | EU | 1M | 10k | Dev & Prod |
| gpt-4o-mini-na | Chat | 2024-07-18 | 0.000165 / 0.00066 | Input-128k / Output-4k (tokens) | NA | 2M | 20k | Dev & Prod |
| gpt-4o-2024-11-20-gs | Chat | 2024-11-20 | 0.005 / 0.015 | Input-128k / Output-4k (tokens) | [EU-Global-Standard](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types#global-standard) | 18.5M | 18.5K | Dev & Prod |
| gpt-4o | Chat | 2024-05-13 | 0.005 / 0.015 | Input-128k / Output-4k (tokens) | EU | 200K | 1200 | Dev & Prod |
| gpt-4o-na | Chat | 2024-05-13 | 0.005 / 0.015 | Input-128k / Output-4k (tokens) | NA | 16.3M | 98K | Dev & Prod |
| gpt-4-turbo | Chat | turbo-2024-04-09 | 0.01 / 0.03 | Input-128k / Output-4k (tokens) | EU | 177k | 1062 | Dev & Prod |
| gpt-35-turbo-instruct-0914 | Completion | 0914 | 0.0015 / 0.002 | 4k (tokens) | EU | 120k | 720 | Dev & Prod |
| gpt-35-turbo-instruct-0914-na | Completion | 0914 | 0.0015 / 0.002 | 4k (tokens) | NA | 120k | 720 | Dev & Prod |
| text-embedding-3-small | Embedding | - | 0.00002 | 8k (tokens) | NA | 900k | 5400 | Dev & Prod |
| text-embedding-3-large | Embedding | - | 0.00013 | 8k (tokens) | EU | 640k | 3840 | Dev & Prod |
| text-embedding-3-large-na | Embedding | - | 0.00013 | 8k (tokens) | NA | 730k | 4380 | Dev & Prod |
| text-embedding-ada-002-v2 | Embedding | - | 0.0001 | 8k (tokens) | EU | 500k | 3000 | Dev & Prod |
| text-embedding-ada-002-v2-na | Embedding | - | 0.0001 | 8k (tokens) | NA | 478k | 2868 | Dev & Prod |
| whisper | Transcription | - | 0.006/minute | 25 MB (audio file size) | EU | - | 6 | Dev & Prod |
| whisper-na | Transcription | - | 0.006/minute | 25 MB (audio file size) | NA | - | 3 | Dev & Prod |

<sup>1</sup>Will be made available in EU once available


**The following models have been deprecated or due for deprecation soon:**

| Model name | Model Type | Price ($ / 1k token) prompt/completion | Max Request | Region | TPM | RPM | Comment |
| --- | --- | --- | --- | -- | -- | -- | -- |
| gpt-35-turbo-16k | Chat | 0.003 / 0.004 | 16k (tokens) | EU | 278k | 1668 | Deprecation on 12th Sept 2024 |
| gpt-35-turbo-16k-na | Chat | 0.003 / 0.004 | 16k (tokens) | NA | 520k | 3120 | Deprecation on 12th Sept 2024 |
| gpt-35-turbo-0613 | Chat | 0.0015 / 0.002 | 4k (tokens) | EU | 180k | 1080 | Deprecation on 12th Sept 2024|
| gpt-35-turbo-1106| Chat | 0.001 / 0.002 | 4k (tokens) | EU | 410k | 2460 | Deprecation on 6th Nov. 2024|


Please click [here](https://openai.com/api/pricing/) to understand the calculation for image based inputs.

Please note, that you can use chat models for all tasks that require completion models. Just instruct the chat model as you would instruct a completion model with a `user` or `system` message and parse the ouptut from the `assistant` message generated by the chat model.

Before issueing larger workloads you can estimate the number of tokens and hence the cost of your prompts with the [tiktoken](https://github.com/openai/tiktoken) package (c.f. [this notebook](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)).
 
## Quota Limit Changes
- For all the above mentioned models, in case you have a need for higher quota, send your API token, expected quota (no of API calls per day), and the end date to gpt-api@merckgroup.com
- Post the requested end date, the usage quota will be automatically reset to default values. The default quota for gpt-4-x models is 1000 calls per day whereas for the remaining models, the default quota is 10k calls per day. 


## Streaming
A new experimental streaming feature is available.
You can pass a '"stream": true' argument to your `AzureChatOpenAI` object and get the responses streamed back.
Example:
<details>
<summary>Click to view the code</summary>

```python
import os

from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.chat_models import AzureChatOpenAI
from langchain.schema import (
    HumanMessage,
)

os.environ["AZURE_OPENAI_API_BASE"] = "https://api.nlp.{env}.uptimize.merckgroup.com"
os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2024-05-13" # Pass Based on Model Version
os.environ["AZURE_OPENAI_API_KEY"] = "OPENAI_API_KEY"


chat = AzureChatOpenAI(streaming=True,deployment_id="<chat model - refer table above>",callbacks=[StreamingStdOutCallbackHandler()], temperature=0)
resp = chat([HumanMessage(content="Write me a song about sparkling water.")])

print(resp)
```
</details>

## Setup environment on the UPTIMIZE AppService
Running your GPT application on the UPTIMIZE AppService works exactly the same as running it on your local machine, with one difference.
The API key is provided in the environment variable `APP_SERVICE_NLP_API_KEY`.

The streamlit example app contains a sample chatbot (`4_🤖_GPT_API.py`) that demonstrates the basic use of the API.

The required code to setup the environment for calling the GPT API in AppService has been implemented in the `utils.py` file in the AppService repo, effectively reducing the time and effort to setup the same.

## Support

### Issues with SSL Certificate

For fixing issues with SSL certificate while using he AI-ML API please use the following code snippet as an example:
```python
import openai
import httpx

httpx_client = httpx.Client(http2=True, verify='path/to/the/certificate/file')

azure_client = openai.AzureOpenAI(
    api_key="##############################",
    api_version="##############################",
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    http_client=httpx_client
)
```

The certificate can be downloaded at: https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585

### Other issues

If you need any further support, please send an [email to us](mailto:gpt-api@merckgroup.com).

---

# UPTIMIZE OpenAI Responses API

The UPTIMIZE OpenAI Responses API provides a proxy to the Azure OpenAI Responses API. The Responses API is a new **stateful API** from Azure OpenAI that brings together the best capabilities from the chat completions and assistants API in one unified experience. It provides built-in conversation memory, advanced tool integration, and support for sophisticated reasoning models.

## What's New

The Responses API is a **stateful API** that unifies the best capabilities from Chat Completions and Assistants APIs into one streamlined experience:

### **Core Capabilities**
- **Built-in Memory**: Automatic conversation context retention using `previous_response_id` - no manual history management needed
- **Reasoning Models**: Full support for o3-mini, o4-mini, and O-series models with configurable reasoning effort
- **Stateful Design**: Eliminates the complexity of managing conversation state manually

### **Advanced Tools & Integration**
- **MCP Server Integration**: Connect to remote Model Context Protocol servers for extended tool capabilities
- **Code Interpreter**: Execute Python code in secure sandboxed environments for data analysis and computations
- **Function Calling**: Enhanced tool integration with automatic context preservation
- **File Processing**: Native support for PDF and image inputs with multiple upload methods

### **Production Features**
- **Streaming Support**: Real-time response streaming for better user experience
- **Background Tasks**: Async operations for long-running reasoning tasks
- **Approval Workflows**: Built-in approval mechanisms for MCP server calls
- **Flexible Authentication**: Support for API keys, OAuth, and custom headers

### **Developer Tools**
- **Codex CLI Integration**: Connect coding assistants like OpenAI Codex directly to UPTIMIZE endpoints for terminal-based AI coding support

### **Cost & Performance Benefits**
- **Reduced Token Usage**: Built-in memory eliminates redundant context passing
- **Prompt Caching**: Significant cost savings for repeated prompts
- **Efficient Multi-Turn Conversations**: Lower latency and costs compared to manual state management

## Why Use Responses API?

The Responses API is designed for building **production-grade AI applications** that require:

1. **Multi-Turn Conversations**: Automatic context retention eliminates manual history management
2. **Complex Workflows**: Native support for agents, research tasks, and multi-step reasoning
3. **Tool Integration**: Seamlessly connect to external tools, APIs, and MCP servers
4. **Cost Efficiency**: Built-in memory and caching reduce token usage by up to 50%
5. **Scalability**: Background tasks handle long-running operations without timeouts
6. **Security**: Approval workflows for sensitive operations with external services

**Best For**: AI assistants, research tools, coding agents, data analysis applications, and any use case requiring sophisticated conversation management.

## Read This First!

Please make sure that you have read and understood the following things before using the API:

⚠️ **Important Safety and Compliance Requirements:**

- The Responses API is **not intended for use in regulated environments**.
- The Responses API is **not intended for use for public facing products**.
- The Responses API is **not intended for use with secret data**.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of myGPT Suite.
- When using the Responses API it is the use case team's responsibility to ensure that the use of the API follows Microsoft's code of conduct.

## Environments

This API is available in both development (DEV) and production (PROD) environments:

- **DEV Environment**: Quota limited to 2k requests/day (non-extensible). Recommended for experimental purposes.
- **PROD Environment**: Quota limited to 10k requests/day (extensible on need basis). Recommended for production-like applications or higher workloads.

**Endpoint Structure:**
```
https://api.nlp.{env}.uptimize.merckgroup.com/openai/v1
```

Replace `{env}` with:
- `dev` for DEV environment
- `p` for PROD environment

## Register Your Use Case and Apply for an API Key

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select `/openai` and accept the terms and conditions.

## Setup Your Local Environment

### Prerequisites

Install or upgrade the OpenAI Python library:

```bash
pip install --upgrade openai
```

### Basic Setup

```python
from openai import OpenAI

# Initialize client
client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)
```

## Available Models

The following models are currently available for the Responses API:

| Model Name | Model Type | Price ($ / 1M tokens)<br>Input / Cached / Output | Max Context | Region | Environment Availability |
|------------|------------|---------------------------------------------------|-------------|---------|-------------------------|
| **GPT-5.1 Series** |
| gpt-51 | Chat + Reasoning | 1.38 / 0.14 / 11.0 | 272K tokens | EU | Dev & Prod |
| gpt-51-codex-gs | Chat + Reasoning | 1.25 / 0.125 / 10.0 | 272K tokens | EU-Global-Standard | Dev & Prod |
| gpt-51-codex-mini-gs | Chat + Reasoning | 0.25 / 0.025 / 2.0 | 272K tokens | EU-Global-Standard | Dev & Prod |
| **GPT-5 Series** |
| gpt-5 | Chat + Reasoning | 1.38 / 0.14 / 11.0 | 272K tokens | EU | Dev & Prod |
| gpt-5-mini | Chat + Reasoning | 0.28 / 0.03 / 2.2 | 272K tokens | EU | Dev & Prod |
| gpt-5-codex-gs | Chat + Reasoning | 1.25 / 0.125 / 10.0 | 272K tokens | EU-Global-Standard | Dev & Prod |
| **GPT-4.1 Series** |
| gpt-41-gs | Chat | 2.0 / 0.50 / 8.0 | 1M tokens | EU-Global-Standard | Dev & Prod |
| gpt-41-mini-gs | Chat | 0.40 / 0.10 / 1.60 | 1M tokens | EU-Global-Standard | Dev & Prod |
| gpt-41-nano-gs | Chat | 0.10 / 0.03 / 0.40 | 1M tokens | EU-Global-Standard | Dev & Prod |
| **GPT-4o Series** |
| gpt-4o | Chat | 2.75 / 1.375 / 11.0 | 128K tokens | EU | Dev & Prod |
| gpt-4o-na | Chat | 2.75 / 1.513 / 11.0 | 128K tokens | NA | Dev & Prod |
| gpt-4o-standard | Chat | 6.05 / - / 18.15 | 128K tokens | EU-Global-Standard | Dev & Prod |
| gpt-4o-mini | Chat | 0.165 / 0.091 / 0.66 | 128K tokens | EU | Dev & Prod |
| gpt-4o-mini-na | Chat | 0.165 / 0.083 / 0.66 | 128K tokens | NA | Dev & Prod |
| **Reasoning Models (O-Series)** |
| o3-mini-gs | Reasoning | 1.10 / 0.55 / 4.40 | 200K tokens | EU-Global-Standard | Dev & Prod |
| o4-mini-gs | Reasoning | 1.10 / - / 4.40 | 200K tokens | EU-Global-Standard | Dev & Prod |
| gpt-image-1-mini-gs | Image Gen | 2.5 / - / - | - | EU-Global-Standard | Dev & Prod |

**Important Notes:**

- **Reasoning Models**: The "o" series models (o3-mini, o4-mini) are specialized for complex reasoning tasks and are **not designated for Batch-processing**.
- **Global Standard Policy**: Models with `-gs` suffix process data across multiple regions. For region-sensitive data, use models without this suffix.
- **North America Models**: Models with `-na` suffix are deployed in North America (US & Canada). Consider data privacy when using non-EU models.
- **Cached Input Pricing**: Applies to prompt caching for supported models, significantly reducing costs for repeated prompts.

## Code Examples

### 1. Basic Text Generation

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response = client.responses.create(   
    model="gpt-5-mini",
    input="What is 7 + 7?"
)

print(response.output_text)
# Output: "7 + 7 equals 14."
```

</details>

### 2. Using Reasoning Effort (GPT-5 & O-Series Models)

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response = client.responses.create(   
    model="gpt-5-mini",
    input="What is 7 + 7? Tell me a quick story about space.",
    reasoning={"effort": "high"}  # Options: "low", "medium", "high"
)

print(response.output_text)
```

**Note**: For GPT-5 models, the default reasoning_effort is "low". You can adjust it to "medium" or "high" based on your use case complexity.

</details>

### 3. Built-in Memory: Chaining Responses

One of the most powerful features of the Responses API is **built-in conversation memory**.

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

# Initial request
response = client.responses.create(
    model="gpt-5",
    input="Hello, what is 7 + 7 * 2?"
)

response_id = response.id
print(response.output_text)
# Output: "7 + 7 * 2 equals 21 (following order of operations: 7*2=14, then 7+14=21)"

# Follow-up request - automatically maintains context
follow_up = client.responses.create(
    model="gpt-5",
    input="Let's divide this number by 7",
    previous_response_id=response_id  # Links to previous conversation
)

print(follow_up.output_text)
# Output: "21 divided by 7 equals 3."
```

**Key Benefits:**
- No need to manually pass conversation history
- Automatic context retention across turns
- Reduced token usage and costs
- Simplified conversation management

</details>

### 4. Image Input

#### 4A. Image from URL

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response = client.responses.create(
    model="gpt-5",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "What is in this image?"},
                {
                    "type": "input_image",
                    "image_url": "https://example.com/image.jpg"
                }
            ]
        }
    ]
)

print(response.output_text)
```

</details>

#### 4B. Image from Base64

<details>
<summary>Click to expand code example</summary>

```python
import base64
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

# Path to your image
image_path = "path/to/your/image.png"
base64_image = encode_image(image_path)

response = client.responses.create(
    model="gpt-5",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "What is in this image?"},
                {
                    "type": "input_image",
                    "image_url": f"data:image/jpeg;base64,{base64_image}"
                }
            ]
        }
    ]
)

print(response.output_text)
```

</details>

### 5. PDF File Processing

#### 5A. PDF with Base64 Encoding

<details>
<summary>Click to expand code example</summary>

```python
import base64
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

with open("document.pdf", "rb") as f:
    data = f.read()

base64_string = base64.b64encode(data).decode("utf-8")

response = client.responses.create(
    model="gpt-5-mini",
    input=[
        {
            "role": "user",
            "content": [
                {
                    "type": "input_file",
                    "filename": "document.pdf",
                    "file_data": f"data:application/pdf;base64,{base64_string}"
                },
                {
                    "type": "input_text",
                    "text": "Summarize this PDF"
                }
            ]
        }
    ]
)

print(response.output_text)
```

</details>

#### 5B. PDF with File Upload (Files API)

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

# Step 1: Upload the PDF file
file = client.files.create(
    file=open("document.pdf", "rb"),
    purpose="assistants"  # Note: Use "assistants" as purpose
)

file_id = file.id
print(f"File uploaded with ID: {file_id}")

# Step 2: Use the file in a response
response = client.responses.create(
    model="gpt-41-gs",
    input=[
        {
            "role": "user",
            "content": [
                {
                    "type": "input_file",
                    "file_id": file_id
                },
                {
                    "type": "input_text",
                    "text": "Summarize this PDF"
                }
            ]
        }
    ]
)

print(response.output_text)
```

</details>

### 6. Streaming Responses

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response = client.responses.create(   
    model="gpt-5-mini",
    input="What is 20/5? Tell me a story about space.",
    stream=True
)

for event in response:
    if event.type == 'response.output_text.delta':
        print(event.delta, end='', flush=True)
```

</details>

### 7. Function Calling

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

# Step 1: Make initial request with function definition
response = client.responses.create(  
    model="gpt-5",
    tools=[  
        {  
            "type": "function",  
            "name": "get_weather",  
            "description": "Get the weather for a location",  
            "parameters": {  
                "type": "object",  
                "properties": {  
                    "location": {"type": "string"}
                },  
                "required": ["location"]
            }
        }  
    ],  
    input=[{"role": "user", "content": "What's the weather in Cairo, Egypt in Celsius?"}]
)

print(response.output_text)

# Step 2: Provide function output
input_data = []  
for output in response.output:  
    if output.type == "function_call":  
        if output.name == "get_weather":  
            input_data.append({  
                "type": "function_call_output",  
                "call_id": output.call_id,  
                "output": '{"temperature": "32 degrees Celsius"}'
            })

# Step 3: Get final response with function result
second_response = client.responses.create(  
    model="gpt-5-mini",  
    previous_response_id=response.id,  
    input=input_data  
)

print(second_response.output_text)
# Output: "The weather in Cairo, Egypt is currently 32 degrees Celsius."
```

</details>

### 8. MCP Server Integration

#### 8A. Without Approval Required

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response = client.responses.create(
    model="gpt-5-mini",
    tools=[
        {
            "type": "mcp",
            "server_label": "tavily",
            "server_url": "https://mcp.tavily.com/mcp/?tavilyApiKey=YOUR_TAVILY_KEY",
            "require_approval": "never"
        }
    ],
    input="Search for Azure OpenAI Pricing for gpt-5 model"
)

print(response.output_text)
```

</details>

#### 8B. With Approval Required

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

MCP_TOOLS = [
    {
        "server_label": "tavily-search",
        "type": "mcp",
        "server_url": "https://your-mcp-server.com/mcp",
        "headers": {
            "Authorization": "Bearer YOUR_MCP_TOKEN"
        },
        #"require_approval": "always" # Optional
    }
]

# Step 1: Make initial request
response = client.responses.create(
    model="gpt-5-mini",
    tools=MCP_TOOLS,
    input="What is Merck current share price as of today?"
)

# Get MCP approval ID
mcp_approval_id = None
for output in response.output:
    if output.type == "mcp_approval_request":
        mcp_approval_id = output.id
        break

print(f"MCP Approval ID: {mcp_approval_id}")

# Step 2: Send approval response
response_with_mcp_call = client.responses.create(
    model="gpt-5-mini",
    tools=MCP_TOOLS,
    input=[
        {
            "type": "mcp_approval_response",
            "approve": True,
            "approval_request_id": mcp_approval_id
        }
    ],
    previous_response_id=response.id
)
print(response_with_mcp_call.output)
#print(response_with_mcp_call.output_text)
```

</details>

## Response Management

### Retrieve a Response

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response_id = "resp_67cb61xxxxxxxxxxxx1"
retrieved_response = client.responses.retrieve(response_id)

print(retrieved_response.output_text)
```

</details>

### Delete a Response

<details>
<summary>Click to expand code example</summary>

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

response_id = "resp_67cb61xxxxxxxxxxxx1"
delete_response = client.responses.delete(response_id)

print(delete_response)
```

**Note**: By default, response data is retained for 30 days. Use this method to delete responses earlier if needed.

</details>

## Quota Limit Changes

For all the above-mentioned models, if you have a need for higher quota, please edit your respective exisitng request on Foundry and submit the same.

**Important**: Post the requested end date, the usage quota will be automatically reset to default values.

**Default Quotas:**
- DEV environment: 2,000 calls per day
- PROD environment: 10,000 calls per day (extensible)

## Best Practices

### 1. Model Selection

- Use **gpt-5-mini** or **gpt-4o-mini** for cost-effective general tasks
- Use **gpt-5** or **gpt-41-gs** for complex reasoning and analysis
- Use **o3-mini-gs** or **o4-mini-gs** for advanced reasoning tasks
- Use **-gs** (Global Standard) models for higher throughput
- Consider data residency requirements when choosing between EU, NA, and Global Standard models

### 2. Cost Optimization

- Leverage **prompt caching** for repeated prompts (supported models show cached input pricing)
- Use **streaming** for better user experience without additional cost
- Use **built-in memory** (`previous_response_id`) instead of sending full conversation history
- Choose appropriately sized models for your task complexity

### 3. Error Handling

Always implement proper error handling:

```python
from openai import OpenAI
import openai

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"}
)

try:
    response = client.responses.create(
        model="gpt-5-mini",
        input="Your prompt here"
    )
    print(response.output_text)
except openai.APIError as e:
    print(f"API Error: {e}")
except openai.RateLimitError as e:
    print(f"Rate limit exceeded: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

## Limitations and Known Issues

- **Web search tool** is not currently supported
- **Images cannot be uploaded as a file then referenced** (coming soon)
- **PDF purpose `user_data`** is not currently supported (use `assistants` as workaround)
- **The "o" series models** are not designated for batch processing

## Using Codex CLI with UPTIMIZE Responses API

[OpenAI Codex CLI](https://github.com/openai/codex) is a coding assistant that can be configured to work with UPTIMIZE endpoints. This allows you to use AI-powered coding assistance directly from your terminal or VS Code while keeping your data within your compliance boundary.

### Prerequisites

- **npm** or **homebrew** for installing Codex CLI
- **VS Code** (optional) for the Codex extension
- Active UPTIMIZE API key

### Installation

Install Codex CLI using one of the following methods:

<details>
<summary>Click to expand installation instructions</summary>

**Using npm:**
```bash
npm install -g @openai/codex
codex --version  # verify installation
```

**Using homebrew:**
```bash
brew install codex
codex --version  # verify installation
```

</details>

### Configuration

<details>
<summary>Click to expand configuration steps</summary>

**Step 1: Create Configuration Directory**

```bash
mkdir -p ~/.codex
cd ~/.codex
```

**Step 2: Create `config.toml` File**

Create or edit the `~/.codex/config.toml` file with the following content:

```toml
# Model configuration - choose from available UPTIMIZE models
model = "gpt-51-codex-gs"  # or "gpt-5-codex-gs", "gpt-5", "gpt-5-mini"
model_provider = "azure"
model_reasoning_effort = "medium"  # Options: "low", "medium", "high"

[model_providers.azure]
name = "UPTIMIZE Azure OpenAI"
base_url = "https://api.nlp.dev.uptimize.merckgroup.com/openai/v1"  # Use "p" for PROD
env_key = "UPTIMIZE_API_KEY"
wire_api = "responses"
```

**Important Notes:**
- Replace `dev` with `p` in the `base_url` for production environment
- The `env_key` must reference an environment variable name, not the API key directly
- Recommended models: `gpt-51-codex-gs`, `gpt-51-codex-mini-gs`, or `gpt-5-codex-gs`

**Step 3: Set Environment Variable**

```bash
# For macOS/Linux/WSL
export UPTIMIZE_API_KEY="your-api-key-here"

# To make it permanent, add to ~/.bashrc or ~/.zshrc:
echo 'export UPTIMIZE_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

**Step 4: Test Installation**

```bash
# Launch interactive mode
codex

# Or test with a prompt
codex "write a python function to calculate fibonacci numbers"
```

</details>

### Using Codex in VS Code

<details>
<summary>Click to expand VS Code setup</summary>

1. Install the [OpenAI Codex extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) in VS Code

2. Ensure your environment variable is set:
   ```bash
   export UPTIMIZE_API_KEY="your-api-key-here"
   ```

3. Launch VS Code from the same terminal session:
   ```bash
   code .
   ```

4. The Codex extension will use your `~/.codex/config.toml` configuration automatically

**Note**: Launching VS Code from an app launcher may prevent the extension from accessing your environment variables. Always launch from the terminal where you set `UPTIMIZE_API_KEY`.

</details>

### SSL Certificate Configuration

If you encounter SSL certificate issues, download the certificate and update your config:

<details>
<summary>Click to expand certificate setup</summary>

1. Download the certificate from [here](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585)

2. Save it to `~/.codex/uptimize_cert.pem`

3. Update your `config.toml`:
   ```toml
   [model_providers.azure]
   name = "UPTIMIZE Azure OpenAI"
   base_url = "https://api.nlp.dev.uptimize.merckgroup.com/openai/v1"
   env_key = "UPTIMIZE_API_KEY"
   wire_api = "responses"
   verify_ssl_cert = "~/.codex/uptimize_cert.pem"
   ```

</details>

### Learn More

For advanced Codex features including approval modes, persistent guidance with `AGENTS.md`, and CI/CD integration, refer to the [official Codex documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/codex).

## Support

### SSL Certificate Issues

If you encounter SSL certificate issues, use the following code:

```python
import openai
import httpx

httpx_client = httpx.Client(http2=True, verify='path/to/certificate/file')

client = openai.OpenAI(
    api_key="your-api-key",
    base_url="https://api.nlp.dev.uptimize.merckgroup.com/openai/v1",
    default_query={"api-version": "preview"},
    http_client=httpx_client
)
```

**Certificate Download**: [Download Certificate](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585)

### Other Issues

If you need any further support, please send an email to: **gpt-api@merckgroup.com**

## Additional Resources

- **Azure OpenAI Responses API Official Documentation**: [Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/responses)
- **OpenAI Python Library Documentation**: [OpenAI Python Docs](https://github.com/openai/openai-python)
- **Model Context Protocol (MCP) Documentation**: [MCP Introduction](https://modelcontextprotocol.io/introduction)

---

---

# Azure OpenAI Batch Processing API

The Azure OpenAI Batch Processing API allows you to process large volumes of requests efficiently and cost-effectively. This API is designed for high-throughput scenarios, enabling you to submit batch jobs that can handle up to 100,000 requests in a single file.

Key advantages include:
- **Cost Efficiency**: 50% cost reduction compared to standard pricing
- **Scale**: Process up to 100,000 requests per batch file
- **Separate Quota**: Dedicated enqueued token quota for batch jobs
- **24-hour Processing**: Target completion within 24 hours

## Important Notice

Please make sure that you have read and understood the following before using the API:

- This API is **not intended** for use in regulated environments
- This API is **not intended** for use in public-facing products
- This API is **not intended** for use with secret data
- For data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions)

## Environments

This API is available in the the following environments (DEV/PROD) environment with the following limitations:
- **(DEV)** - Quota limited to **10 requests/day** For POST Requests (Upload File & Create Batch Job) (non-extensible)
- **(DEV)** - Quota limited to **1000 requests/day** For GET Requests (Monitor Batch Job Status & Download Batch Output File) (non-extensible)
- **(PROD)** - Quota limited to **20 requests/day** For POST Requests (Upload File & Create Batch Job) (non-extensible)
- **(PROD)** - Quota limited to **10000 requests/day** For GET Requests (Monitor Batch Job Status & Download Batch Output File) (non-extensible)
- We strongly encourage users to use the DEV environment for experimental purposes only.


The API Features 4 Different Endpoints:

1 - Upload File Endpoint - POST Request 

2 - Create Batch Job Endpoint - POST Request

3 - Monitor Batch Job Endpoint - GET Request 

4 - Download Batch Job Output File Endpoint - GET Request 



## Getting Started

### Register Your Use Case and Apply for an API Key
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. All existing OpenAI API keys will work with the Batch Processing API, no need to create a new key.
3. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select '/openai' and accept the terms and conditions.
4. Batch processing endpoint is by default enabled for new OpenAI API keys.

## Pricing Details

| Processing Type | Cost Reduction |
|----------------|----------------|
| Batch Processing | 50% lower than standard global pricing |

## Rate Limits & Specifications

| Specification | Limit |
|---------------|-------|
| Max input file size	 | 200 MB |
| Maximum Requests per File | 100,000 |
| Uploaded/Generated Files Expires After | 14 Days |
| File Format | JSON Lines (.jsonl) |
| Completion Window | 24 hours |

---



## API Reference

### Endpoint

**Base URL**: `https://api.nlp.{env}.uptimize.merckgroup.com/openai_batch`

### Preparing Your Data For Batch Job
<details>
<summary><strong>Input File Preperation</strong></summary>

#### Input File Format

Your batch file must be in JSON Lines (.jsonl) format. Each line represents a single request & each line should have a unique custom_id.

It's recommended to follow the following naming convention while preparing/uploading your files: 

batch_input_ {File_Number}_ {deployment_name}_{Number_Of_Records_Per_File}.jsonl

###### Example: batch_input_2_sweden_gpt_4o_2000.jsonl

#### Standard Input Example
```json
{"custom_id": "task-0", "method": "POST", "url": "/chat/completions", "body": {"model": "YOUR-DEPLOYMENT-NAME", "messages": [{"role": "system", "content": "You are an AI assistant that helps people find information."}, {"role": "user", "content": "When was Microsoft founded?"}]}}
{"custom_id": "task-1", "method": "POST", "url": "/chat/completions", "body": {"model": "YOUR-DEPLOYMENT-NAME", "messages": [{"role": "system", "content": "You are an AI assistant that helps people find information."}, {"role": "user", "content": "When was the first XBOX released?"}]}}
```



#### Required Parameters

| Parameter      | Description                                                |
|----------------|------------------------------------------------------------|
| custom_id      | Unique identifier for each request (for matching results)  |
| method         | HTTP method (always "POST")                               |
| url            | API endpoint ("/chat/completions")                        |
| body           | Request payload including model and messages               |

</details>
---

### Supported Models
| Deployment Name               | Model Base | Model Version | Region | Price ($ / 1M token) <br/>prompt/completion |
|-------------------------------|------------|---------------|--------|---------------------------------------------|
| gpt-41-batch-sweden     | gpt-41 | 2025-04-14    | EU - Data Zone | 1 / 4                                       |
| gpt-41-mini-batch-sweden     | gpt-41-mini | 2025-04-14    | EU - Data Zone | 0.2 / 0.8                                   |
| o4-mini-batch-sweden     | o4-mini | 2025-04-16    | EU - Data Zone | 0.55 / 2.2                                  |
| gpt-4o-mini-batch-sweden     | gpt-4o-mini| 2024-07-18    | EU - Data Zone | 0.083 / 0.3                                 |
| gpt-4o-mini-batch-global      | gpt-4o-mini| 2024-07-18    | EU - Global | 0.075 / 0.3                                 |
| gpt-4o-batch-sweden          | gpt-4o     | 2024-08-06    | EU - Data Zone | 1.375 / 5.5                                 |
| gpt-4o-batch-global           | gpt-4o     | 2024-11-20    | EU - Global | 1.25 / 5                                    |
| o3-mini-batch-global          | o3-mini    | 2025-01-31    | EU - Global | 0.55 / 2.22                                 |

---




### Azure OpenAI Batch Processing Guide:

<details>
<summary><strong>1 - Set Up Azure OpenAI Client</strong></summary>

```python
import os
from openai import AzureOpenAI
import httpx

# Setup environment variables
os.environ["AZURE_OPENAI_ENDPOINT"] = "https://api.nlp.{env}.uptimize.merckgroup.com/openai_batch"
os.environ["AZURE_OPENAI_API_KEY"] = "your_nlp_api_key"

# Define custom HTTP client with headers
http_client = httpx.Client(headers={
    "azure-batch-processing": "True", # Enable Batch Processing
    "azure-batch-processing-region": "EU" # Batch Processing Region
})

# Initialize the AzureOpenAI client
client = AzureOpenAI(
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_version="2025-03-01-preview",
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    http_client=http_client
)
```
</details>



<details>
<summary><strong>2 - Upload a File for Batch Job</strong></summary>

```python
# Upload a File with Expiry Date After X Days - For Dev/Prod Set to 14 Days = 1209600 Seconds
# Count vs POST Request Quota
from datetime import datetime

file = client.files.create(
    file=open("batch_input_2_sweden_gpt_4o.jsonl", "rb"), 
    purpose="batch",
    extra_body={"expires_after":{"seconds": 1209600, "anchor": "created_at"}} # Expiry Date set to 14 Days, Do Not Change
)

print(file.model_dump_json(indent=2))
file_id = file.id
print(f"File expiration: {datetime.fromtimestamp(file.expires_at) if file.expires_at is not None else 'Not set'}")
```
</details>


<details>
<summary><strong>3 - Create a Batch Job</strong></summary>

```python
# Submit a batch job with the uploaded file.
# Submit a batch job with Expiry Date After X Days - For Dev/Prod Set to 14 Days = 1209600 Seconds
# Count vs POST Request Quota
batch_response = client.batches.create(
    input_file_id=file_id,
    endpoint="/chat/completions",
    completion_window="24h",
    extra_body={"output_expires_after":{"seconds": 1209600, "anchor": "created_at"}} # Expiry Date set to 14 Days, Do Not Change
)
# Save batch ID for later use
batch_id = batch_response.id
print(batch_response.model_dump_json(indent=2))
```
</details>


<details>
<summary><strong>4 - Monitor Batch Job Status (OPTIONAL) </strong></summary>

```python
# Track the progress of your batch job in real-time.
# Count vs GET Request Quota (Since it's a for loop, ensure to use it Wisely)
# Track Batch Job

import time
import datetime 

status = "validating"
while status not in ("completed", "failed", "canceled"):
    
    time.sleep(600) # Get Batch Job Status Every 10 Minutes
    batch_response = client.batches.retrieve(batch_id)
    
    status = batch_response.status
    print(f"{datetime.datetime.now()} Batch Id: {batch_id},  Status: {status}")

if batch_response.status == "failed":
    for error in batch_response.errors.data:  
        print(f"Error code {error.code} Message {error.message}")
```
</details>



<details>
<summary><strong>5 - Download Batch Job Output File</strong></summary>

```python
# Download Batch Job Output File
# Count vs GET Request Quota
import json

print(batch_id)
batch_response = client.batches.retrieve(batch_id)
output_file_id = batch_response.output_file_id

if not output_file_id:
    output_file_id = batch_response.error_file_id

if output_file_id:
    file_response = client.files.content(output_file_id)
    raw_responses = file_response.text.strip().split('\n')  

    # Use batch_id to create the output file name
    output_filename = f'output_{batch_id}.jsonl'

    # Open a file to save the formatted JSON responses
    with open(output_filename, 'w') as output_file:
        for raw_response in raw_responses:  
            json_response = json.loads(raw_response)  
            # Write the JSON object directly without indentation
            output_file.write(json.dumps(json_response) + '\n')
        print(f"Batch Output File has been saved to :  {output_filename}")
```
</details>


### Best Practices
- **File Size**: Submit large files rather than many small files for optimal performance
- **Files Expiry Date**: Ensure to set expiry_after to be 1209600 which is equivalent to 14 days this applies to both uploaded files & generated batch output files.
- **Custom IDs**: Use unique custom_id values to match results with inputs
- **Model Consistency**: Use the same model deployment name throughout your batch file
- **Monitoring**: Check status periodically but avoid excessive polling (recommended: 60+ second intervals)
- **Error Handling**: Always check for both output and error files
- **File Expiration**: Set appropriate expiration times for uploaded files

### Troubleshooting & Common Issues
- **Invalid JSON Lines**: Validate your JSONL format before submission
- **File Size Limit**: Maximum 100,000 requests per file
- **Authentication Errors**: Verify your API key and endpoint configuration
- **Model Mismatch**: Ensure model name matches the deployment name mentioned in the table above

### Error Handling
Both successful and failed jobs generate output files. Failed requests will be detailed in the error file for troubleshooting.

### Status Troubleshooting

| Status         | Description                            | Action                                |
|----------------|----------------------------------------|---------------------------------------|
| validating     | File is being validated                | Wait                                  |
| in_progress    | Requests are being processed           | Monitor progress                      |
| finalizing     | Results are being prepared             | Wait                                  |
| completed      | Job finished successfully               | Download results                      |
| failed         | Job failed                             | Check error file                      |
| canceled       | Job was canceled                       | Review partial results if any         |

### Feature Support

### Supported Features
- Chat completions
- Vision capabilities (image processing) - Based on Model capabilities

### Not Currently Supported
- Embedding models
- Fine-tuned models
- Input with image URLs

### Support
If you face technical challenges, please email your query to gpt-api@merckgroup.com.

---

# UPTIMIZE Bedrock API
The UPTIMIZE Bedrock API provides a proxy to the [AWS Bedrock API](https://aws.amazon.com/bedrock/), meaning that every API request against the AWS Bedrock API works exactly the same when sent against the UPTIMIZE Bedrock API, just with an API key for authorization.

## What's new
- Bedrock API has been updated to support OpenAI exchange format which enables users to utilize the API with OpenAI, AzureOpenAI and Langchain packages directly.

## Read this first!
Please make sure that you have read and understood the following things before using the API:
- The Bedrock API is not intended for use in regulated environments.
- The Bedrock API is not intended for use for public facing products.
- The Bedrock API is not intended for use with secret data.
- Different Bedrock models are deployed in different regions based on their availability within AWS. Please refer to the Available Models table below. 
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions). 


## Register your use case and apply for an AI-ML API key
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select '/bedrock' and accept the terms and conditions.

## Setup your local environment
Depending on what frameworks you want to use you have to adjust a few things in your code or environment.

## SSL Certificate

To avoid SSL based errors while calling the API from your local system, please download the certificate from [here](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585) and pass the location of the certificate as an environment variable as shown below:

```python
import os

os.environ["REQUESTS_CA_BUNDLE"] = "path/to/cacert.pem"
```

Please browse through the subpages for documentation on Bedrock [LLM Models](aiml/aiml_apis/bedrock_api/chat_and_embedding_models/) and [Rerank models](aiml/aiml_apis/bedrock_api/reranker_models/)

---

# Bedrock LLM Models
This page provides documentation and code examples for using various LLM Models available through the UPTIMIZE Bedrock API.

## Environments
This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher work loads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Code Examples
Please click to expand and view the code examples.

<details>
<summary><b>Invoking Bedrock with Requests (Native Bedrock Format)</b></summary>

The following code snippet shows how to call **Anthropic's Claude-V2** model from Bedrock.

```python
import requests
import json

api_key = get_nlp_api_key() # never store your API key in your code
bedrock_model_id = "anthropic.claude-v2"
api_url = f"https://api.nlp.{env}.uptimize.merckgroup.com/model/{bedrock_model_id}/invoke"

headers = {
    'Content-Type': 'application/json',
    "x-api-key": api_key
}

payload = {
    "prompt": "\n\nHuman: Explain about Transformers architecture. \n\nAssistant:", 
    "max_tokens_to_sample": 50
}

# Make the POST request
response = requests.post(
    api_url,
    headers=headers,
    data=json.dumps(payload)
)

# Print the response
print(response.json())

```

For utlizing other models provided by Bedrock, please change the `bedrock_model_id` with the required model ID as shown below in the **Available Models** table. The parameter names which is passed in payload is different for other model providers. They are mentioned as follows:
</details>
</br>

<details>
<summary><b>Amazon's Titan</b></summary>

```python
bedrock_model_id = "amazon.titan-embed-text-v1"
payload = {"inputText": "Explain about Transformers architecture"}
```
</details>

</br>
<details>
<summary><b>Cohere Embed</b></summary>

```python
bedrock_model_id = "cohere.embed-english-v3"
payload = {
    "texts": [
        "Artificial intelligence is transforming the world."
    ],
    "input_type": "search_document"
}
```
</details>
</br>

<details>
<summary><b>Mistral AI</b></summary>

```python
bedrock_model_id = "mistral.mixtral-8x7b-instruct-v0:1"
payload = {
    "prompt": "<s>[INST] Explain about Transformers architecture [INST]", 
    "max_tokens": 200
}
# The same is applicable for "mistral.mistral-7b-instruct-v0:2"
```
</details>

</br>
<details>
<summary><b>Claude 3 , 3.5 Series and 3.7 Model (Text Input)</b></summary>

The code snippet shown below works with all Claude 3 , 3.5 and 3.7 model variants.

```python
bedrock_model_id = "<claude 3 , 3.5 and 3.7 model variant name - refer table below>"

api_url = f"https://api.nlp.{env}.uptimize.merckgroup.com/model/{bedrock_model_id}/invoke"

payload = {
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 200,
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Recent development in the space of LLMs"
          }
        ]
      }
    ]
  }

# Make the POST request
response = requests.post(
    api_url,
    headers=headers,
    data=json.dumps(payload)
)

# Print the response
print(response.json())
```
</details>

</br>
<details>
<summary><b>Claude 3 , 3.5 Series and 3.7 Model (Image Input)</b></summary>

The code snippet shown below works with all Claude 3 , 3.5 and 3.7 model variants.

```python
import base64

with open("path/to/image.jpeg", "rb") as image_file:
    image_bytes = image_file.read()

encoded_image = base64.b64encode(image_bytes).decode("utf-8")

bedrock_model_id = "<claude 3 , 3.5 or 3.7 model variant name - refer table below>"

api_url = f"https://api.nlp.{env}.uptimize.merckgroup.com/model/{bedrock_model_id}/invoke"

payload = (
    {
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 100,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": "image/jpeg", # Input should be 'image/jpeg', 'image/png' or 'image/webp'
                            "data": encoded_image,
                        },
                    },
                    {"type": "text", "text": "What is in this image?"},
                ],
            }
        ],
    }
)

# Make the POST request
response = requests.post(
    api_url,
    headers=headers,
    data=json.dumps(payload)
)

# Print the response
print(response.json())
```
</details>

### Invoking Bedrock with Requests (OpenAI Format)

<details>
<summary><b>Chat Model Example</b></summary>

```python
bedrock_model_id = "<chat model name - refer table below>"

url = f"https://api.nlp.{env}.uptimize.merckgroup.com/model/{bedrock_model_id}/invoke"

payload = {
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user","content": "Explain about Transformers architecture"},
    ],
    "temperature": 0.1,
    "max_tokens": 10
}

headers = {
    'Content-Type': 'application/json',
    'x-api-key': get_nlp_api_key(),
    'openai-standard': 'True'
}

# Make the POST request
response = requests.post(
    api_url,
    headers=headers,
    data=json.dumps(payload)
)

# Print the response
print(response.json())
```
</details>

</br>
<details>
<summary><b>Embedding Model Example</b></summary>

```python
bedrock_model_id = "<embedding model name - refer table below>"

url = f"https://api.nlp.{env}.uptimize.merckgroup.com/model/{bedrock_model_id}/invoke"

payload = {"input": "Explain about Transformers architecture"}

# This Payload is specific for Cohere Models
payload_cohere = {
    "input": [
        "good morning from litellm",
        "this is another item",
        "test me if you can"
    ],
    "input_type": "search_document"
}

headers = {
    'Content-Type': 'application/json',
    'x-api-key': get_nlp_api_key(),
    'openai-standard': 'True'
}

# Make the POST request
response = requests.post(
    api_url,
    headers=headers,
    data=json.dumps(payload)
)

# Print the response
print(response.json())
```

</details>

### Invoking Bedrock with OpenAI and Langchain libraries

<details>
<summary><b>Invoking Bedrock with Azure OpenAI Client</b></summary>

```python
import openai
from openai import AzureOpenAI
import httpx

client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com/model",
    api_version="2024-02-01",
    api_key=get_nlp_api_key(),  # never store API key in code
    http_client = httpx.Client(verify="path/to/certificate", headers={"openai-standard": "True"})
)

response_chat = client.chat.completions.create(
    model="<chat model name - refer table below>",
    messages=[
        {"role": "system", "content":"You are a helpful assistant"},
        {"role": "user", "content": "Explain about Transformers architecture"}],
    max_tokens=10,
    temperature=0.1
)
print(response_chat)

response_embedding = client.embeddings.create(
    model="<embedding model name - refer table below>",
    input="Explain about Transformers architecture"
)
print(response_embedding)
```
</details>

</br>
<details>
<summary><b>Invoking Bedrock with Langchain Client</b></summary>

```python
import openai
import httpx
from langchain_openai.chat_models import AzureChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from langchain_openai.embeddings.azure import AzureOpenAIEmbeddings

llm_chat = AzureChatOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com/model",
    api_key=get_nlp_api_key(),  # never store API key in code
    api_version="2024-02-01",
    http_client = httpx.Client(verify="path/to/certificate", headers={"openai-standard": "True"})
)

response_chat = llm_chat.invoke(model="<chat model name - refer table below>",
                                input=[
                                    SystemMessage(content="You are a helpful assistant"),
                                    HumanMessage(content="Explain about Transformers architecture")],
                                max_tokens=10,
                                temperature=0.1
)
print(response_chat)

llm_embedding = AzureOpenAIEmbeddings(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com/model",
    api_key=get_nlp_api_key(),  # never store API key in code
    api_version="2024-02-01",
    http_client = httpx.Client(verify="path/to/certificate", headers={"openai-standard": "True"}),
    model="<embedding model name - refer table below>",
)

response_embedding = llm_embedding.embed_query("Explain about Transformers architecture")
print(response_embedding)
```
</details>

## Available Models

The following models are currently available in Bedrock:

| Model ID | API Usage | Max Tokens | Region | Environment |
| --- | --- | --- | --- | --- |
| anthropic.claude-instant-v1 | Chat | 100k | EU | dev/prod |
| anthropic.claude-v2 | Chat | 18k | EU | dev/prod |
| anthropic.claude-v2:1 | Chat | 200k | EU | dev/prod |
| amazon.titan-embed-text-v1 | Embedding | 8k | EU | dev/prod |
| amazon.titan-embed-text-v2:0 | Embedding | 8k | EU | dev/prod |
| cohere.embed-english-v3 | Embedding | 512 | EU | dev/prod |
| amazon.titan-text-express-v1 | Chat | 8k | EU | dev/prod |
| mistral.mistral-7b-instruct-v0:2 | Chat | 32k | US | dev/prod |
| mistral.mixtral-8x7b-instruct-v0:1 | Chat | 32k | US | dev/prod |
| anthropic.claude-3-haiku-20240307-v1:0 | Chat | 200k | EU | dev/prod |
| anthropic.claude-3-sonnet-20240229-v1:0 | Chat | 200k | EU | dev/prod |
| anthropic.claude-3-5-sonnet-20240620-v1:0 | Chat | 200k | US | dev/prod |
| anthropic.claude-3-7-sonnet-20250219-v1:0 | Chat | 200k | US/EU | dev/prod |
| us.anthropic.claude-sonnet-4-20250514-v1:0 | Chat | 500K | US | dev/prod |
| eu.anthropic.claude-sonnet-4-20250514-v1:0 | Chat | 200K | EU | dev/prod |
| anthropic.claude-sonnet-4-20250514-v1:0 | Chat | 500K/200k | US/EU (LB Enabled)| dev/prod  |
| eu.anthropic.claude-sonnet-4-5-20250929-v1:0 | Chat | 200K | EU | dev/prod |


- To view the pricing, please click [here](https://aws.amazon.com/bedrock/pricing/).
- All the above-mentioned models are accessible with existing API tokens which have access to the Bedrock models.

### Note on Claude 3.7 Sonnet Model
The Claude 3.7 Sonnet model is currently available in both the EU and US regions and it supports cross-region inference.

- API requests will route to the EU region by default. If you wish to specifically route to the US region, you must include the prefix `us.` in the model ID. 

  - **EU Region Request**:  
    `https://api.nlp.{env}.uptimize.merckgroup.com/model/anthropic.claude-3-7-sonnet-20250219-v1:0/invoke`  
    This request directs to the EU region by default.

  - **US Region Request**:  
    `https://api.nlp.{env}.uptimize.merckgroup.com/model/us.anthropic.claude-3-7-sonnet-20250219-v1:0/invoke`  
    This request routes to the US region.


### Note on Claude 4 Sonnet Model
The Claude 4 Sonnet model is currently available in the US and EU region and it supports cross-region inference.

  - **EU Region Request**:  
    `https://api.nlp.{env}.uptimize.merckgroup.com/model/eu.anthropic.claude-3-7-sonnet-20250219-v1:0/invoke`  
    This request directs to the EU region by default.

  - **US Region Request**:  
    `https://api.nlp.{env}.uptimize.merckgroup.com/model/us.anthropic.claude-sonnet-4-20250514-v1:0/invoke`  
    This request routes to the US region.
  
  - **Global Request**:  
    `https://api.nlp.{env}.uptimize.merckgroup.com/model/anthropic.claude-sonnet-4-20250514-v1:0/invoke`  
    This Load Balances requests Between EU & US Regions allowing More Flexible RPM/TPM, This is only supported for Bedrock with OpenAI (i.e set headers to openai-standard : true)

## Support

### Issues with SSL Certificate

For fixing issues with SSL certificate while using the AI-ML API please add the `verify` argument to the requests method as follows:
```python
requests.post(api_url, json=payload, headers=headers, verify='path/to/the/certificate/file')
```

The certificate can be downloaded at: https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585

When using Bedrock API, if you face technical challenges, please mail your query to gpt-api@merckgroup.com.

---

# Bedrock Reranker Models
This page provides documentation and code examples for using various Rerank Models available through the UPTIMIZE Bedrock API.

## Importance of Reranker Models
The reranker models enable developers to improve the relevance of responses in Retrieval-Augmented Generation (RAG) applications. The reranker models rank a set of retrieved documents based on their relevance to user's query, helping to prioritize the most relevant content to be passed to the large language models (LLMs) for response generation. This ensures the most useful information is sent to the model for response generation, optimizing the context window usage and potentially reducing costs. 

## Environments
This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher work loads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Code Examples

### Invoking Reranker models through UPTIMIZE Bedrock API

Current available models and their model IDs are:
- Cohere - cohere.rerank-v3-5:0
- Amazon - amazon.rerank-v1:0

```python
import requests
import json

reranker_model = <Enter reranker model ID> # e.g. cohere.rerank-v3-5:0
API_KEY = <Enter you API key here>

url = f"https://api.nlp.p.uptimize.merckgroup.com/model/{reranker_model}/invoke"

documents = [
      "Carson City is the capital city of the American state of Nevada.",
      "The Commonwealth of the Northern Mariana Islands is a group of islands in the Pacific Ocean. Its capital is Saipan.",
      "Washington, D.C. is the capital of the United States.",
      "Capital punishment has existed in the United States since before it was a country.",
      "1 + 1 = 2."
    ]

payload = json.dumps({
  "query": "What is the capital of the United States ??",
  "documents": documents,
  # "top_n": 3  # Can be specified to retrieve only the top n documents after reranking
})

headers = {
  'openai-standard': 'True',
  'x-api-key': API_KEY,
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

# Extracting the results
results = response.json()['results']

# Retrieving the input documents and arranging them with the reranked indices
documents_with_scores = [
    {
        "index": result['index'],
        "document": documents[result['index']],
        "relevance_score": result['relevance_score']
    }
    for result in results
]

documents_with_scores

```


To view the pricing, please click [here](https://aws.amazon.com/bedrock/pricing/).


## Support

### Issues with SSL Certificate

For fixing issues with SSL certificate while using the AI-ML API please add the `verify` argument to the requests method as follows:
```python
requests.post(api_url, json=payload, headers=headers, verify='path/to/the/certificate/file')
```

The certificate can be downloaded at: https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585

When using Bedrock API, if you face technical challenges, please mail your query to gpt-api@merckgroup.com.

---

# UPTIMIZE AWS ML Services
This document serves as an introduction to AWS Machine Learning services, providing guidance on accessing and utilizing APIs for various capabilities, including audio transcription, text extraction, and language translation. Detailed information on each service can be found in the respective subpages.

Please browse through the subpages for documentation : [AWS Textract](aiml/aiml_apis/aws_ml_services/aws_textract/) , [AWS Translate](aiml/aiml_apis/aws_ml_services/aws_translate/) and [AWS Transcribe](aiml/aiml_apis/aws_ml_services/aws_transcribe/)

## Read This First!

Please make sure that you have read and understood the following things before using this API:
- This API is not intended for use in regulated environments.
- This API is not intended for use for public facing products.
- This API API is not intended for use with secret data. 
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).

## Environments
These APIs are available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher workloads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Register your use case and apply for an AI-ML API key
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select 'awsTextract', 'awsTranscribe' and/or 'awsTranslate' depending on your requirements, and accept the terms and conditions.


## Setup Your Working Environment

Depending on your framework, you may need to adjust your code or environment settings.


## SSL Certificate
To avoid SSL based errors while calling the API from your local system, please download the certificate from [here](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585) and pass the location of the certificate as an environment variable as shown below:

```python
import os

os.environ["REQUESTS_CA_BUNDLE"] = "path/to/cacert.pem"
```

---

# AWS Textract API
The document provides a step by step guidance for using AWS API for extracting text.The AWSTextract is a proxy to Amazon Textract API which allows you to perform document text detection and analysis for your use cases.The service detects the document text in images or PDFs.

## API Version Availability

### Current Status
- **V1 Legacy endpoint** (`/awsTextract`): Available on both **Dev** and **Prod** environments
- **V2 Enhanced endpoint** (`/awsTextract/2`): Available on both **Dev** and **Prod** environments  
- **Async endpoint** (`/awsTextract/async`): Available on both **Dev** and **Prod** environments

### Version Comparison

| Feature | V1 (Legacy) | V2 (Enhanced) | Async |
|---------|-------------|---------------|------------|
| **Processing Type** | Synchronous | Synchronous | Asynchronous |
| **Document Size Limit** | 10 MB | 10 MB | 500 MB(PDF and TIFF files) & 10 MB (JPEG and PNG files) |
| **Page Limit** | ~3000 pages | ~3000 pages | 3000 pages |
| **Concurrent Processing** | Basic | Enhanced | S3-based |
| **Auto-cleanup** | No | No | Yes |
| **Job Management** | No | No | Yes |
| **Rate Limiting** | Basic | Enhanced | Advanced |
| **Best For** | Simple documents | Multi-page PDFs | Large documents |

## Pricing Details

**AWS Textract pricing** is based on the number of pages processed and the features used (such as table, form, or query extraction). Pricing may vary by AWS region.

### Key Points

- **Billed per page processed** for both synchronous and asynchronous operations
- **Features like table, form, and query extraction incur additional charges per page**

For detailed pricing information, visit the [AWS Textract Pricing page](https://aws.amazon.com/textract/pricing/).


**Note**: V1 Legacy endpoints will continue to be supported for backward compatibility.

##  AWS Textract Sync API

### Description

AWSTextract implements AWS Textract **synchronous operations**:
- [AnalyzeDocument](https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html) (Synchronous)
- [DetectDocumentText](https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html) (Synchronous)

**Processing Approach:**
- **Single images**: Processed immediately using AWS synchronous APIs
- **Multi-page PDFs**: Pages processed concurrently using intelligent batching and retry mechanisms
- **All operations**: Return results immediately (no polling required)

**Important**: This service uses AWS **synchronous** Textract operations, not AWS asynchronous operations. For very large documents (>3000 pages), consider AWS asynchronous Textract instead.

The following filetypes:
- PNG
- JPEG
- TIFF
- PDF

---
**NOTE**

*PDF pages will be automatically split and processed separately using concurrent processing.*

The result of PDF processing will have the following format:
```json
[
  "page_1": {},
  "page_2": {}
  ...
]
```

### Migration Recommendation
We strongly encourage migrating to the new `/awsTextract/2` endpoints for:
- Better performance and reliability
- Enhanced feature support
- Improved response formatting
- Future-proof compatibility

## Responsible Usage Guidelines

⚠️ **Important Usage Considerations**

Before using AWS Textract service, please be aware of the following limitations and current quotas:

### 1. Current Service Quotas (EU Frankfurt Region)
Our current AWS Textract quotas in the EU (Frankfurt) region:
- **AnalyzeDocument**: 5 transactions per second
- **Daily capacity**: Up to 432,000 jobs per day
- **Reference**: [AWS Textract Service Quotas](https://docs.aws.amazon.com/textract/latest/dg/limits.html)
## 2. Synchronous Operation Limits
Since we use AWS synchronous Textract operations, be aware of:
- **Document size limits:** Maximum 10 MB per document
- **Page limits:** Recommended for documents under 3000 pages
- **Processing timeout:** Large multi-page PDFs may timeout
- **Reference**: [AWS Textract Synchronous Limits](https://docs.aws.amazon.com/textract/latest/dg/sync.html)

### 3. Rate Limiting and Throttling
- You may experience rate limiting during high-volume usage
- **Reference**: [AWS Textract API Throttling](https://docs.aws.amazon.com/textract/latest/dg/limits.html#limits-throttling)
- Our API includes built-in retry mechanisms with exponential backoff
- For large file processing, consider spacing out your requests to stay within quota limits

### 3. Document Size and Page Limits
Be aware of document processing limitations:
- **Reference**: [AWS Textract Document Limits](https://docs.aws.amazon.com/textract/latest/dg/limits.html#limits-document)
- Maximum file size and page count restrictions apply
- Consider splitting very large documents when necessary

### 4. Processing Time Expectations
- **Single images**: Typically process within seconds
- **Multi-page PDFs**: Processing time increases with page count due to concurrent processing
- **Large documents**: May take several minutes depending on complexity and current load
- **High-volume processing**: May experience delays during peak usage periods due to quota limits
- **Very large PDFs**:  Consider breaking into smaller documents to avoid timeouts

### 5. Best Practices for Users
- **Monitor responses**: Watch for HTTP 429 (Rate Limited) responses
- **Plan for delays**: Factor in potential processing delays for time-sensitive applications
- **File optimization**: Use appropriate image resolution and file sizes to optimize processing speed

---

*Analyze Document* supports the following features, which can be extracted concurrently on a single API call:

| Task        | Description                                                                              | 
|-------------|------------------------------------------------------------------------------------------|
| TABLES      | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-tables.html) |
| FORMS       | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-kvp.html)    |
| QUERIES     | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/queryresponse.html)       |
| SIGNATURES  | For signature detection.                                                                 |
| LAYOUT      | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/layoutresponse.html)      |                                                                 |


## Request Syntax

<details>
<summary><strong> AnalyzeDocument - TABLES and SIGNATURES example </strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/2/analyze/document' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/file.pdf"' \
--form 'tasks="TABLES"' \
--form 'tasks="SIGNATURES"'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json

import httpx


base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

with open("path/to/file.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/2/analyze/document",
        data={"tasks": ["TABLES", "SIGNATURES"]},
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=9000
    )

print(json.dumps(json.loads(r.text), indent=4))

```
</details>

<details>
<summary><strong>AnalyzeDocument - QUERIES example</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/2/analyze/document' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/file.pdf"' \
--form 'tasks="QUERIES"' \
--form 'queries="{\"Queries\":[{\"Text\":\"CHAPTER 1\",\"Alias\":\"CHAPTER 1\"},{\"Text\":\"INFORMATION GRAPH\",\"Alias\":\"INFORMATION GRAPH\"}]}"'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json

import httpx


base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
with open("path/to/file.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/2/analyze/document",
        data={
            "tasks": "QUERIES",
            "queries": json.dumps(
                {
                    "Queries": [
                        {
                            "Text": "CHAPTER 1",
                            "Alias": "CHAPTER 1",
                        },
                        {
                            "Text": "INFORMATION GRAPH",
                            "Alias": "INFORMATION GRAPH"
                        },
                    ]
                }
            )
        },
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=9000
    )

print(json.dumps(json.loads(r.text), indent=4))

```
</details>

<details>
<summary><strong>DetectDocumentText</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/2/detect/document/text' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/file.pdf"'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json

import httpx


base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

with open("path/to/file.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/2/detect/document/text",
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=9000
    )

print(json.dumps(json.loads(r.text), indent=4))

```
</details>

<details>
<summary><strong>Legacy API Request</strong></summary>

Support for legacy API version is provided in both **Dev** and **Prod** environments.
The legacy API also uses **AWS synchronous Textract operations** with intelligent concurrency control.

Below is a Python code sample for the legacy version:

```python
import requests
# URL of the API endpoint
api_url = 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract'

# Request headers with the API key
headers = {
    'x-api-key': your-api-key-here
}

payload = {'out_type': 'text', 'task': 'LINES'}
files = [('file', ('file_name.pdf', open('file_name.pdf', 'rb'), 'application/pdf'))]

response = requests.post(api_url, headers=headers, data=payload, files=files)

# Check the response
if response.status_code == 200:
    json_response = response.json()
    print(response.json())
    
else:
    print(f'Error: {response.status_code} - {response.text}')
    
```

Below is a Python code sample for the legacy version with retry mechanism:

```python
import requests
import time
from typing import Optional

def legacy_textract_with_retry(
    file_path: str,
    api_key: str,
    task: str = 'LINES',
    out_type: str = 'text',
    base_url: str = 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract',
    max_retries: int = 3,
    timeout: int = 300
) -> Optional[dict]:
    """
    Call legacy AWS Textract API with retry mechanism.
    """
    headers = {'x-api-key': api_key}
    payload = {'out_type': out_type, 'task': task}
    
    for attempt in range(max_retries):
        try:
            with open(file_path, 'rb') as f:
                files = [('file', (file_path, f, 'application/pdf'))]
                response = requests.post(
                    base_url, 
                    headers=headers, 
                    data=payload, 
                    files=files,
                    timeout=timeout
                )
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 429:  # Rate limited
                wait_time = 2 ** attempt  # Exponential backoff
                print(f"Rate limited. Waiting {wait_time} seconds before retry...")
                time.sleep(wait_time)
                continue
            else:
                print(f'Error: {response.status_code} - {response.text}')
                return None
                
        except requests.exceptions.Timeout:
            print(f"Request timed out on attempt {attempt + 1}")
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)
                continue
        except Exception as e:
            print(f"Unexpected error: {e}")
            return None
    
    print("Max retries exceeded")
    return None

# Usage example
result = legacy_textract_with_retry(
    file_path='files/test.pdf',
    api_key='5388fd97-6c84-4a89-8660-dea490bf7658',
    task='LINES',
    out_type='text'
)

if result:
    print(result)
    
```
</details>

You can specify the task to be performed by the legacy API. The `task` parameter can be one of the following:
- `LINES`
- `TABLES`
- `FORMS`
- `LAYOUT`

Additionally, specify the out_type parameter to define the output format:

- `raw`: Get plain text output without additional formatting.
- `text`: Get formatted text output, including basic formatting such as line breaks.

Ensure the payload includes both task and out_type parameters as required.

## Migration Guide

When migrating from legacy (`/awsTextract`) to new API (`/awsTextract/2`):

### /analyze/document/
1. Update endpoint URLs to include `/2/analyze/document` in the path
2. Modify parameter names: `task` → `tasks` (note the plural form).For exploring different tasks, explore **"Task|Description"** section.
3. Update request format: The new API uses form data with multiple `tasks` fields.

### /detect/document/text
1. Update endpoint URLs to include `/2/detect/document/text` in the path
2. send the file data

# AWS Textract Async API

The AWS Textract Async API allows you to perform asynchronous document text detection and analysis for large documents and high-volume processing. This service is ideal for processing large documents that exceed synchronous operation limits.

## Description

AWS Textract Async implements AWS Textract **asynchronous operations**:
- [StartDocumentTextDetection](https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html) (Asynchronous)
- [StartDocumentAnalysis](https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html) (Asynchronous)  
- [StartExpenseAnalysis](https://docs.aws.amazon.com/textract/latest/dg/API_StartExpenseAnalysis.html) (Asynchronous)

**Processing Approach:**
- **Large documents**: Files are uploaded to S3 and processed asynchronously
- **Job-based processing**: Submit jobs and poll for completion status
- **Auto-cleanup**: S3 files and metadata are automatically deleted after successful processing
- **Resource management**: Built-in rate limiting and retry mechanisms

**Important**: This service uses AWS **asynchronous** Textract operations with S3 backend storage. Suitable for large documents (>10MB).

The following filetypes are supported:
- PNG
- JPEG
- TIFF
- PDF

---

**NOTE**
*Files are automatically uploaded to S3, processed asynchronously, and cleaned up after successful completion. Job metadata is stored for tracking and retrieval.*

## Available Endpoints

### Job Submission Endpoints

| Endpoint | Method | Description | TPS Limit |
|----------|--------|-------------|-----------|
| `/awsTextract/async/detect/text` | POST | Start asynchronous text detection job | 1 TPS |
| `/awsTextract/async/analyze` | POST | Start asynchronous document analysis job | 2 TPS |
| `/awsTextract/async/expense` | POST | Start asynchronous expense analysis job | 1 TPS |

### Job Management Endpoints

| Endpoint | Method | Description | TPS Limit |
|----------|--------|-------------|-----------|
| `/awsTextract/async/job/{job_id}/status` | GET | Get job status and completion information | 5 TPS |
| `/awsTextract/async/job/{job_id}/results` | GET | Retrieve job results (blocks or plain text, default is blocks) | 5 TPS |
| `/awsTextract/async/job/{job_id}/results?format=plain` | GET | Retrieve job results with plain text | 5 TPS |


### Endpoint Parameters

#### Job Submission Parameters
- **file**: Document file (PDF, PNG, JPEG, TIFF)
- **tasks**: Analysis tasks (TABLES, FORMS, QUERIES, SIGNATURES, LAYOUT)
- **queries**: JSON object for query-based analysis (when using QUERIES task)

#### Job Management Parameters
- **job_id**: AWS Textract job identifier
- **job_type**: Optional job type for better performance (TEXT_DETECTION, DOCUMENT_ANALYSIS, EXPENSE_ANALYSIS)
- **format**: Result format (blocks, plain) - for results endpoint
- **delete_s3_file**: Boolean to control S3 file deletion during cleanup


**Note**: All endpoints require `x-api-key` header for authentication.


### Migration Recommendation
The async API is recommended for:
- Documents larger than 10MB
- Multi-page PDFs with >100 pages
- Applications that can handle asynchronous processing

## Responsible Usage Guidelines

⚠️ **Important Usage Considerations**

Before using AWS Textract Async service, please be aware of the following:

### 1. Asynchronous Processing Model
- Jobs are submitted and processed asynchronously
- Results must be retrieved using job polling
- Processing time varies based on document size and complexity
- Auto-cleanup removes S3 files after successful processing

### 2. Current Service Quotas (EU Frankfurt Region)

Our current AWS Textract async quotas in the EU (Frankfurt) region:

| Operation Type | Operation | Frankfurt Limit |
|---------------|-----------|----------------|
| Asynchronous Start | StartDocumentAnalysis | 2 TPS |
| Asynchronous Start | StartDocumentTextDetection | 1 TPS |
| Asynchronous Start | StartExpenseAnalysis | 1 TPS |
| Asynchronous Get | GetDocumentAnalysis | 5 TPS |
| Asynchronous Get | GetDocumentTextDetection | 5 TPS |
| Asynchronous Get | GetExpenseAnalysis | 5 TPS |
| Concurrent Jobs | Maximum simultaneous jobs | 100 |

**Important Notes:**
- **TPS** = Transactions Per Second
- **Start operations** are rate-limited for job submission
- **Get operations** are rate-limited for status checking and result retrieval
- **Maximum 100 concurrent jobs** can run simultaneously
- **Reference**: [AWS Textract Async Service Quotas](https://docs.aws.amazon.com/textract/latest/dg/limits.html)

### 3. Document Size and Limits
- **Maximum file size**: 500 MB per document(PDF and TIFF files) and 10 MB per document(JPEG and PNG files)
- **Maximum pages**: 3000 pages per document
- **Supported formats**: PDF, PNG, JPEG, TIFF
- **Reference**: [AWS Textract Async Document Limits](https://docs.aws.amazon.com/textract/latest/dg/limits.html#limits-document)

### 4. Processing Time Expectations
- **Small documents**: 1-5 minutes
- **Large documents**: 5-30 minutes depending on size and complexity
- **Very large documents**: May take up to 1 hour
- **Job status**: Poll every 30-60 seconds for completion
- **Rate limiting**: Respect TPS limits to avoid throttling

### 5. Best Practices for Users
- **Job monitoring**: Implement proper polling mechanisms with rate limiting awareness
- **Error handling**: Handle job failures and timeouts
- **Concurrent jobs**: Monitor active job count to stay within 100 job limit

---

*Async Analyze Document* supports the following features:

| Task        | Description                                                                              |
|-------------|------------------------------------------------------------------------------------------|
| TABLES      | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-tables.html) |
| FORMS       | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-kvp.html)    |
| QUERIES     | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/queryresponse.html)       |
| SIGNATURES  | For signature detection.                                                                 |
| LAYOUT      | [AWS Reference](https://docs.aws.amazon.com/textract/latest/dg/layoutresponse.html)      |

## Request Syntax

<details>
<summary><strong>Start Text Detection Job</strong></summary>

- Bash
```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/async/detect/text' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/file.pdf"'

```
- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

# /// script
# dependencies = [
#   "httpx"
# ]
# ///
import json
import httpx
import time

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

# Start text detection job
with open("path/to/file.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/async/detect/text",
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=60
    )

job_response = json.loads(r.text)
job_id = job_response["job_id"]
print(f"Job started: {job_id}")

# Poll for completion
while True:
    status_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/status",
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    status = json.loads(status_r.text)
    
    if status["status"] in ["SUCCEEDED", "FAILED"]:
        break
    
    print(f"Job status: {status['status']}")
    time.sleep(30)  # Wait 30 seconds before next poll

# Get results if successful
if status["status"] == "SUCCEEDED":
    results_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/results?format=plain",
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    results = json.loads(results_r.text)
    print("Extracted text:", results["text"])


```
</details>

<details>
<summary><strong>Start Document Analysis Job</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/async/analyze' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/file.pdf"' \
--form 'tasks="TABLES"' \
--form 'tasks="FORMS"'

```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///
import json
import httpx
import time

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

# Start document analysis job
with open("path/to/file.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/async/analyze",
        data={"tasks": ["TABLES", "FORMS"]},
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=60
    )

job_response = json.loads(r.text)
job_id = job_response["job_id"]
print(f"Analysis job started: {job_id}")

# Poll for completion
while True:
    status_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/status",
        params={"job_type": "DOCUMENT_ANALYSIS"},
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    status = json.loads(status_r.text)
    
    if status["status"] in ["SUCCEEDED", "FAILED"]:
        break
    
    print(f"Job status: {status['status']}")
    time.sleep(30)

# Get results if successful
if status["status"] == "SUCCEEDED":
    results_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/results",
        params={"job_type": "DOCUMENT_ANALYSIS", "format": "blocks"},
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    results = json.loads(results_r.text)
    print(f"Found {len(results['Blocks'])} blocks")


```
</details>

<details>
<summary><strong>Start Document Analysis with Queries</strong></summary>

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///
import json
import httpx
import time

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

queries_data = {
    "Queries": [
        {
            "Text": "What is the total amount?",
            "Alias": "TOTAL_AMOUNT"
        },
        {
            "Text": "What is the invoice date?",
            "Alias": "INVOICE_DATE"
        }
    ]
}

# Start document analysis with queries
with open("path/to/invoice.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/async/analyze",
        data={
            "tasks": "QUERIES",
            "queries": json.dumps(queries_data)
        },
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=60
    )

job_response = json.loads(r.text)
job_id = job_response["job_id"]
print(f"Query analysis job started: {job_id}")

```
</details>

<details>
<summary><strong>Start Expense Analysis Job</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTextract/async/expense' \
--header 'Content-Type: multipart/form-data' \
--header 'x-api-key: <YOUR-API-KEY>' \
--form 'file=@"path/to/receipt.pdf"'


```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///
import json
import httpx
import time

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"

# Start expense analysis job
with open("path/to/receipt.pdf", "rb") as f:
    r = httpx.post(
        f"{base_url}/awsTextract/async/expense",
        files={"file": f},
        headers={"x-api-key": "<YOUR-API-KEY>"},
        timeout=60
    )

job_response = json.loads(r.text)
job_id = job_response["job_id"]
print(f"Expense analysis job started: {job_id}")

# Poll for completion
while True:
    status_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/status",
        params={"job_type": "EXPENSE_ANALYSIS"},
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    status = json.loads(status_r.text)
    
    if status["status"] in ["SUCCEEDED", "FAILED"]:
        break
    
    print(f"Job status: {status['status']}")
    time.sleep(30)

# Get results if successful
if status["status"] == "SUCCEEDED":
    results_r = httpx.get(
        f"{base_url}/awsTextract/async/job/{job_id}/results",
        params={"job_type": "EXPENSE_ANALYSIS"},
        headers={"x-api-key": "<YOUR-API-KEY>"}
    )
    results = json.loads(results_r.text)
    print(f"Found {len(results['ExpenseDocuments'])} expense documents")

```
</details>

---

# UPTIMIZE AWS Transcribe
The document provides a step by step guidance for using AWS API for transcribing audio.

# AWS Transcribe API

The AWS transcribe API allows you to transcribe audio files efficiently. This guide provides all necessary steps and code examples to help you get started.

## Step-by-Step Guide to Transcribe Audio Files

For best results, use a lossless format such as WAV with PCM 16-bit encoding or FLAC. [Refer here](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html) for more details. Users are recommended to convert other file formats to WAV or FLAC for compatibility.

### Step 1: Install Required Libraries

Ensure you have the necessary Python libraries installed. You can install them using:

```python
pip install requests pydub
```

### Step 2: Convert Audio File to Correct Format 

The audio file must be in PCM format, with a sample rate of 16000 Hz and mono channel. Use the following script to convert your audio file: 

<details>
<summary>Click to view the code</summary>

```python

from pydub import AudioSegment 

file_path = 'audio_file_name.wav'  # Change this to your input file path 

audio = AudioSegment.from_file(file_path, format="wav") 

# Setting PCM parameters 

audio = audio.set_frame_rate(16000).set_sample_width(2).set_channels(1) 


# Export the converted file 

converted_file_path = "converted_audio_file_name.wav"  # Change this to your desired output file path 

audio.export(converted_file_path, format="wav") 
```
</details>

### Step 3: Prepare the Transcription Request 

Use the following script to send the audio file to the transcription API and handle the streaming response: 

<details>
<summary>Click to view the code</summary>

```python

import requests 
# Define the API endpoint and parameters 

url = 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTranscribe/transcribe-streaming' 

params = { 

    'language_code': 'en-US', 

    'media_sample_rate_hz': '16000', 

    'media_encoding': 'pcm' 

} 

 

# Define the headers 

headers = { 

    'accept': 'text/event-stream', 

    'User-Agent': 'your-user-agent-here',  # Replace with your actual User-Agent  

    'x-api-key': 'your-api-key-here'  # Replace with your actual API key 

} 

 

# Use the converted file path 

with open('converted_audio_file_name.wav', 'rb') as f:  # Change this to the path of your converted file 

    files = {'file': ('converted_audio_file_name.wav', f, 'audio/wav')} 

 

    # Make the POST request 

    response = requests.post(url, headers=headers, params=params, files=files, stream=True) 

     # Print the response status code and headers 

    print(f'Status Code: {response.status_code}') 

    print('Response Headers:', response.headers) 

    # Handle the streaming response 

    try: 

        for line in response.iter_lines(): 

            if line: 

                # Decode the line and handle server-sent events (SSE) 

                decoded_line = line.decode('utf-8').strip() 

                if decoded_line.startswith("data:"): 

                    data = decoded_line.lstrip("data: ").strip() 

                    print('Transcription:', data) 

    except Exception as e: 

        print(f"An error occurred: {e}") 
```
</details>

### Detailed Explanation of the Steps 

#### Install Required Libraries: 

- requests 

- pydub: To handle audio file conversion. 

#### Convert Audio File: 

- Load the audio file using pydub. 

- Ensure it is converted to PCM format, with a sample rate of 16000 Hz and mono channel. 

- Save the converted file. 

#### Prepare the Transcribe Request: 

- Define the API endpoint and parameters. 

- Set the necessary headers, including the API key. 

- Open the converted audio file and prepare it for upload. 

- Make a POST request to the API, sending the audio file. 

- Handle the streaming response to print out the transcription data. 

#### Notes: 

- Ensure you replace `your-api-key-here` with your actual API key.

---

# UPTIMIZE AWS Translate
The document provides a step by step guidance for using AWS API for translating text.

# AWS Translate API

The AWS Translate API allows you to translate text efficiently between different languages. This guide provides all necessary steps and code examples to help you get started.

## Step-by-Step Guide to Translate Text

### Step 1: Install Required Libraries

Ensure you have the necessary Python libraries installed. You can install them using:

```python
pip install requests
```

### Step 2: Load or Set Your API Key

You can load your API key from a file or set it directly in the script.

### Step 3: Define the API Endpoint and Headers

```python
api_url = 'https://api.nlp.{env}.uptimize.merckgroup.com/awsTranslate'

# Request headers with the API key
headers = {
    'x-api-key': your-api-key-here,
    'Content-Type': 'application/json'
}
```
### Step 4: Sample input for translation and POST request
To view language codes supported by the AWS Translate API, please refer to the following link: [AWS Translate Language Codes](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html#what-is-languages-supported).

```python
input_data = {
    "text": "Jeder hat das Recht auf Bildung. Die Bildung ist unentgeltlich, zum mindesten der Grundschulunterricht und die grundlegende Bildung. Der Grundschulunterricht ist obligatorisch. Fach- und Berufsschulunterricht müssen allgemein verfügbar gemacht werden, und der Hochschulunterricht muß allen gleichermaßen entsprechend ihren Fähigkeiten offenstehen",
    "source_lang": "de",
    "target_lang": "en"
}

# Make the POST request to the API
response = requests.post(api_url, headers=headers, json=input_data)
```

### Detailed Explanation of the Steps

#### Install Required Libraries

- *requests*: To make HTTP requests to the API.

#### Set Up Environment Variables

- Set the `REQUESTS_CA_BUNDLE` environment variable to ensure that the requests library can find the CA bundle.

#### Load or Set Your API Key

- Load the API key from a file or set it directly in the environment.

#### Define the API Endpoint and Headers

- Define the URL of the API endpoint and set the request headers, including the API key.

#### Prepare the Translation Request

- Create a dictionary with the text to be translated, the source language, and the target language.

#### Make the POST Request to the API

- Send a POST request to the API endpoint with the input data and headers.

#### Handle the API Response

- Check the response status code and handle the response accordingly. Print the translated text if the request is successful.

#### Notes

- Ensure you replace `your-api-key-here` with your actual API key.
- Handle any exceptions or errors as needed to make the script more robust.

---

# UPTIMIZE AWS Factory - AI-ML API Endpoint Service Connection

Endpoint service connection plays a crucial role in optimizing UPTIMIZE AWS Factory accounts, particularly those utilizing private subnets, by facilitating secure and efficient access to AI-ML APIs. 
This connection ensures that data requests and responses do not need to traverse the public internet, thereby enhancing both security and performance. 
By keeping the data traffic within the UPTIMIZE AWS network, it minimizes the risk of exposure to potential threats and reduces latency, leading to faster processing times. 
Additionally, this approach aligns with best practices for data privacy and compliance, making it an ideal solution for organizations that handle sensitive information.

# AWS Private Endpoint Client Onboarding Steps

### 1. Whitelist Client AWS Factory

Use the Foundry form to request for [AWS Factory whitelisting](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da)


The **AWS Account ID** is necessary to fill in the form. It is a unique 12-digit number that identifies your AWS account. 
You need to have this request approved before you can proceed with the following steps.

---

### 2. Create Endpoint (To be performed at the client factory)

#### Steps to create the VPC Endpoint:

1. Open the **Amazon VPC Console**.
2. In the navigation pane, choose **Endpoints**.
3. Choose **Create endpoint**.
4. Optionally, specify a name to make it easier to find and manage the endpoint.
5. For **Type**, select **Endpoint services that use NLBs and GWLBs**.
6. For **Service name**, enter the appropriate name based on your environment and choose **Verify service**:
   - **AI-ML Development Environment**:  
     `com.amazonaws.vpce.eu-central-1.vpce-svc-03de264faa053cc87`
   - **AI-ML Production Environment**:  
     `com.amazonaws.vpce.eu-central-1.vpce-svc-00828377da4e3860a`
7. (Optional) Select **Enable Cross Region endpoint** if connecting from outside the `eu-central-1` region.
8. (Optional) Select your region from the dropdown list if it's different from `eu-central-1`.
9. For **VPC**, select the VPC in which to create the endpoint.
10. For **IP address type**, select the IP address type your VPC supports.
11. For **Subnets**, select the appropriate subnets (Availability Zones).
12. For **Security group**, select the appropriate security groups for the endpoint network interfaces.
13. Click **Create endpoint** and wait until the status turns green.
14. Make a note of your **Endpoint ID**.

---

### 3. Enable Private DNS Configurations

Once your endpoint is active:

1. Open the endpoint and go to **Actions**.
2. Select **Modify private DNS name**.
3. Enable the checkbox **"Enable for this endpoint"**.
4. Wait until the status changes to **Available**.

---

### 4. Use the AI-ML API

You're now ready to use the AI-ML API from your account. Use the following URLs:

- **Development:**  
  [https://api.nlp.dev.uptimize.merckgroup.com](https://api.nlp.dev.uptimize.merckgroup.com)
- **Production:**  
  [https://api.nlp.p.uptimize.merckgroup.com](https://api.nlp.p.uptimize.merckgroup.com/)

---

# Mathpix API

**Mathpix API** offers the capability to process both printed and handwritten content in STEM documents, encompassing mathematics, text, tables, and chemistry diagrams, from images, stroke data, or PDF files and much more.
It enables users to send an image or a document to the [MathpixOCR API](https://mathpix.com/convert). The output for images data can be in formats such as Mathpix Markdown, LaTeX, AsciiMath, HTML, or SMILES (for chemistry). For PDF files, the content is also accessible in docx or markdown.

The API supports multiple languages such as English, German, Hindi, Spanish, French, Chinese and many more. A comprehensive list of supported languages can be found [here](https://mathpix.com/docs/convert/supported_languages).

## **Read this first!**

 Please make sure that you have read and understood the following things before using the API:

- This API is not intended for use in regulated environments.
- This API is not intended for use for public facing products.
- This API is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).
- When using the Mathpix API, it is the use case team's responsibility to ensure that the use of the API follows [Mathpix API terms and conditions](https://mathpix.com/terms).

## Environments

This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **1000 pages, which is non-extensible**. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher work loads, please use PROD environment.

On the **PROD** environment, the quota needs to be pre-approved by the AI-ML Team. Please send an email to gpt-api@merckgroup.com along with the number of pages to be processed, sector, use case name, frequency, type and format of data (e.g. images, PDFs etc.) **before applying** for a PROD token.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## **Register your use case and apply for a NLP API key**

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for a Mathpix API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). Go to *Mathpix requests* tab and submit the form.

## Mathpix API Pricing Details
The Mathpix API is a paid service with charges levied number of pages processed by the API. These charges differ for different endpoints. Please review the pricing details available at the [Mathpix Portal](https://mathpix.com/pricing/api)

<!-- ***Since the current subscription is owned by Healthcare, there is a usage quota limit of 50 requests per day on the dev environment for evaluation purposes only. In case you find Mathpix API to be useful and you want to scale your usage, please get in touch with MDAO AI-ML Practice at gpt-api@merckgroup.com*** -->

## Code Examples

Here are sample codes using python requests module for different endpoints of Mathpix API. Make sure to use the NLP API base URL with /mathpix suffix (`https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/{endpoint}`)

**Please note that currently only the `/text` endpoint is available in the EU and would use the EU specific endpoint. However, data sent to the `/pdf` endpoint could be processed in the US. All necessary privacy checks have been conducted and data is only processed for QA purposes and never stored permanently. To prevent Mathpix QA team from accessing results, always add the *`improve_mathpix`* field to *`false`* in the request body.** 

**To delete PDF results from the Mathpix database, please see the *Delete processed document content* example below**

For more information, please read the [privacy](https://mathpix.com/docs/convert/privacy) and [image processing](https://docs.mathpix.com/?python#privacy) policy.


### Text
You can use the `/text` endpoint for OCR based retrieval of handwritten and printed equations, handwritten and printed text, tables, and diagrams to get digital formats like LaTeX, Asciimath, SMILES.

Please click to expand and view the code examples.

<details>
<summary><b>Mathematical formulas</b></summary>

```python
import os
import requests
import json

API_KEY = <NLP API KEY>
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/text"

files={"file": open(<image_file>,"rb")}
options={
        "formats": ["text", "data"],
        "data_options":{
            "include_asciimath": True
        },
        # Always set this field as False to prevent Mathpix QA team from access to images
        "metadata": {
            "improve_mathpix": False
        }
      }
headers={'APP_KEY': API_KEY}

r = requests.post(BASE_URL,
    files=files,
    data= {"options_json": json.dumps(options)},
    headers=headers)

r = json.loads(r.text)
print(r)
```

</details>

<details>
<summary><b>Chemical molecular diagrams</b></summary>

```python
import os
import requests
import json

API_KEY = <NLP API KEY>
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/text"

files={"file": open("<image_file>","rb")}
options={
        "formats": ["text", "data", "html"],
        "include_line_data": True,
        "include_smiles": True,
        "include_inchi": True,
        # Always set this field as False to prevent Mathpix QA team from access to images
        "metadata": {
            "improve_mathpix": False
        }
      }
headers={'APP_KEY': API_KEY}

r = requests.post(BASE_URL,
    files=files,
    data= {"options_json": json.dumps(options)},
    headers=headers)

r = json.loads(r.text)
smiles_resp = r['text']

## subsequently you can retrieve the smiles data using regex and further recreate the structure using libraries such as rdkit
# import re
## Use regular expressions to find the SMILES data
# smiles_match = re.search(r'<smiles.*?>(.*?)<\/smiles>', smiles_resp)

# if smiles_match:
#     smiles_data = smiles_match.group(1)  # Get the captured group
#     print(smiles_data)
# else:
#     print("SMILES data not found.")
```

</details>

<details>
<summary><b>Code</b></summary>

```python
import os
import requests
import json

API_KEY = <NLP API KEY>
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/text"

files={"file": open(file_path,"rb")}
options={
        "formats": ['text', 'data', 'html'],
        # Always set this field as False to prevent Mathpix QA team from access to images
        "metadata": {"improve_mathpix": False}
        }
headers={'APP_KEY': API_KEY}

r = requests.post(BASE_URL,
    files=files,
    data= {"options_json": json.dumps(options)},
    headers=headers)

r = json.loads(r.text)['text']
print(r)
```

</details>
<br>

For details regarding additional request parameters please refer to the [MathpixOCR documentation](https://docs.mathpix.com/?python#request-parameters).

---

### PDF
You can use the `/pdf` endpoint for OCR based processing PDFs, PPTXs, DOCXs and convert them to Markdown, LaTeX, DOCX and [more supported inputs](https://docs.mathpix.com/?python#process-a-pdf). This endpoint works asynchronously, since large PDF files can take several minutes to process. Since requests are asynchronous, you can check the processing status of a PDF using the PDF ID returned by the API. Once the PDF has been processed, you can convert it to your desired format.

Please click to expand and view the code examples.

<details>
<summary><b>Processing a PDF</b></summary>

```python
import os
import requests
import json

API_KEY = <NLP API KEY>
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/pdf"

# conversion formats available - docx, md, mmd, tex.zip
options = {"conversion_formats": 
           {
               "docx": True, 
               "md": True
            },
            # Always set this field as False to prevent Mathpix QA team from access to results
            "metadata": {"improve_mathpix": False}
        }
headers={"APP_KEY" : API_KEY}
files={"file": open(<PDF_file>,"rb")}

r = requests.post(BASE_URL,
    headers=headers,
    data={"options_json": json.dumps(options)},
    files=files)

pdf_id = json.loads(r.text)['pdf_id']
print(pdf_id)
```

</details>

<details>
<summary><b>Get processing status</b></summary>

```python
pdf_id = json.loads(r.text)['pdf_id']
url = f"{BASE_URL}/{pdf_id}"
response = requests.get(url, headers=headers)
json.loads(response.text)
```

</details>

Proceed with the next part only after the status shows "completed"

<details>
<summary><b>Download the processed document in various format</b></summary>

```python
pdf_id = json.loads(r.text)['pdf_id']
headers = {'APP_KEY': API_KEY}

# Get markdown response
url = f"{BASE_URL}/{pdf_id}.md"
response = requests.get(url, headers=headers)

## Print the extracted text
# print(response.text) 

# Open the file with UTF-8 encoding and save markdownfile
with open(pdf_id + ".md", "w", encoding='utf-8') as f:
    f.write(response.text)

# Get docx response
url = f"{BASE_URL}/{pdf_id}.docx"
response = requests.get(url, headers=headers)

# Write the docx response as binary
with open(pdf_id + ".docx", "wb") as f:
    f.write(response.content)

# get LaTeX zip file
# url = f"{BASE_URL}/{pdf_id}.tex"
# response = requests.get(url, headers=headers)
# with open(pdf_id + ".tex.zip", "wb") as f:
#    f.write(response.content)
```

</details>

<br>

**To delete all content related to a document sent to Mathpix, use the endpoint below. Please make sure to save the processed document locally as the deletion is irreversible and content for the document cannot be retrieved again!** For more information please [click here](https://docs.mathpix.com/#deleting-pdf-results).


<details>
<summary><b>Delete processed document content</b></summary>

```python
pdf_id = json.loads(r.text)['pdf_id'] # OR replace with PDF ID of the document you want to delete.
headers={"APP_KEY" : API_KEY}
url = "https://api.nlp.{env}.uptimize.merckgroup.com/mathpix/v3/pdf/" + pdf_id
response = requests.delete(url, headers=headers)
response.text
```
</details>
<br>

For details regarding additional request parameters, please refer to the [MathpixOCR documentation](https://docs.mathpix.com/?python#request-parameters-for-uploading-pdfs). 

Currently the streaming option is not yet enabled. In case you need streaming capability, contact gpt-api@merckgroup.com.

If you face technical challenges, please mail your query to gpt-api@merckgroup.com.

**Retrieving cropped pics from pdf data**
When processing some pdfs, mathpix will reference URLs that point to image crops with the following format:
```text
https://cdn.mathpix.com/cropped/2025_01_01_abcde123456789fghijkl-01.jpg?height=100&width=100&top_left_y=100&top_left_x=100
```

For retrieving cropped images, you can use the */cropped* endpoint and replace the original base URL with `https://api.nlp.dev.uptimize.merckgroup.com/mathpix/v3`, so the URL should look like:
```text
https://api.nlp.dev.uptimize.merckgroup.com/mathpix/v3/cropped/2025_01_01_abcde123456789fghijkl-01.jpg?height=100&width=100&top_left_y=100&top_left_x=100
```

Requests should look like:

```bash
# Example for dev environment
curl https://api.nlp.dev.uptimize.merckgroup.com/mathpix/v3/cropped/2025_01_01_abcde123456789fghijkl-01.jpg?height=100&width=100&top_left_y=100&top_left_x=100 \
--header 'app_key: <YOUR-APP-KEY>'
```

```python
# Example for dev environment
headers={"APP_KEY" : API_KEY}
original_url = "https://cdn.mathpix.com/cropped/2025_01_01_abcde123456789fghijkl-01.jpg?height=100&width=100&top_left_y=100&top_left_x=100"
new_url = original_url.replace("https://cdn.mathpix.com", "https://api.nlp.dev.uptimize.merckgroup.com/mathpix/v3")
response = requests.get(new_url, headers=headers)
```

---

# Mistral OCR 

Mistral OCR is a state-of-the-art Optical Character Recognition (OCR) model that brings intelligent document understanding to a whole new level. Designed for speed, precision, and multilingual versatility, Mistral OCR unlocks the potential of unstructured content with unmatched performance. This advanced OCR solution is capable of accurately processing both printed and handwritten text, making it an invaluable tool for a wide range of applications, from digitizing documents to extracting critical information from various formats.

## **Read this first!**

 Please make sure that you have read and understood the following things before using the API:

- This API is not intended for use in regulated environments.
- This API is not intended for use for public facing products.
- This API is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).
- When using the Mistral OCR API, it is the use case team's responsibility to ensure that the use of the API follows [Mistral API terms and conditions](https://mistral.ai/terms#terms-of-service).

## Environments
This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher workloads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Register your use case and apply for an AI-ML API key

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for a Mistral OCR API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

## Mistral OCR API Pricing Details
Pricing for Mistral OCR API is $3 per 1000 pages processed.


## PDF and Image Processing with `/ocr` Endpoint

### API Endpoint
- **URL**: `https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/ocr`

### Parameters for PDF Processing
The following parameters can be included in the data payload when making a request to the Mistral OCR API for PDF processing:

- **model**: The OCR model to be used. For example, `"mistral-document-ai-2512"`.

- **include_image_base64**: A boolean value (as a string) indicating whether to include images extracted from the PDF in the response in Base64 format.
  - Set to `"true"` to include images extracted from the PDF in the response.
  - Set to `"false"` to exclude images.

- **document**: A dictionary containing:
  - **type**: The type of document being to be processed. For PDF, use `"document_url"`.
  - **document_url**: The base64-encoded data of the PDF in the format `data:application/pdf;base64,{base64_image}`.

Please refer to rest of the parameters from the official [documentation](https://docs.mistral.ai/api/#tag/ocr/operation/ocr_v1_ocr_post).

### Sample Code

<details>
<summary><b>Example Code for PDF Processing with Mistral SDK</b></summary>

```python
import base64
import requests
import os
from mistralai import Mistral

def encode_pdf(pdf_path):
    """Encode the pdf to base64."""
    try:
        with open(pdf_path, "rb") as pdf_file:
            return base64.b64encode(pdf_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"Error: The file {pdf_path} was not found.")
        return None
    except Exception as e:  # Added general exception handling
        print(f"Error: {e}")
        return None

# Path to your pdf
pdf_path = "path/to/sample_file.pdf"

# Getting the base64 string
base64_pdf = encode_pdf(pdf_path)

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr"
api_key = get_nlp_api_key() # never store your API key in your code
client = Mistral(server_url=url, api_key=api_key)

response = client.ocr.process(
    model="mistral-document-ai-2512",
    document={
        "type": "document_url",
        "document_url": f"data:application/pdf;base64,{base64_pdf}" 
    },
    include_image_base64=True
)
```

</details>

<br>

<details>
<summary><b>Example Code for PDF Processing with Requests</b></summary>

```python
import requests
import json
import base64

# Encode the file as a base64 string
def encode_file(file_path):
    with open(file_path, "rb") as sample_file:
        return base64.b64encode(sample_file.read()).decode("utf-8")

base64_file = encode_file(FILE_PATH)

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/ocr"

api_key = get_nlp_api_key() # never store your API key in your code
headers = {
    'x-api-key': api_key
}

data = {
    "model": "mistral-document-ai-2512",
    "document":{
    "type": "document_url",
    "document_url": f"data:application/pdf;base64,{base64_file}"
    },
    "include_image_base64": "true"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
```

</details>


### Display OCR Response as Markdown

This section describes a function that formats and displays the OCR response from the Mistral OCR API using Markdown. The function extracts relevant information from the OCR response as discussed above and presents it in a structured format, including recognized text and images.

<details>
<summary><b>Example Code to display OCR Response from Mistral SDK as Markdown</b></summary>

```python
import json
from IPython.display import display, Markdown

def display_ocr_response_as_markdown_pdf(response):

    markdown_content = ""
    for page in ocr_response.pages:
        markdown_content += f"### Page {page.index}\n\n"
        markdown_content += page.markdown + "\n\n"
        if page.images:
            markdown_content += "#### Images:\n"
            for img in page.images:
                markdown_content += f"![Image ID: {img.id}]({img.image_base64})\n"

    # Display the combined Markdown
    display(Markdown(markdown_content))

display_ocr_response_as_markdown_pdf(response)
```

</details>

<br>

<details>
<summary><b>Example Code to display OCR Response from Requests as Markdown</b></summary>

```python
import json
from IPython.display import display, Markdown

def display_ocr_response_as_markdown_pdf(response):

    markdown_content = ""
    for page in response['pages']:
        markdown_content += f"### Page {page['index']}\n\n"
        markdown_content += page['markdown'] + "\n\n"
        if page['images']:
            markdown_content += "#### Images:\n"
            for img in page['images']:
                markdown_content += f"![Image ID: {img['id']}]({img['image_base64']})\n"

    # Display the combined Markdown
    display(Markdown(markdown_content))

display_ocr_response_as_markdown_pdf(response.json())
```

</details>

<br>

It provides a convenient way to visualize the results of OCR processing, making it easier to review recognized text and images. Ensure that the response passed to the function is properly formatted as expected by the function.


### Parameters for Image Processing
The following parameters can be included in the data payload when making a request to the API:

- **model**: The OCR model to be used. For example, `"mistral-document-ai-2512"`.
- **document**: A dictionary containing:
  - **type**: The type of document. For image processing, use `"image_url"`.
  - **image_url**: The base64-encoded image data in the format `data:image/png;base64,{base64_image}`.

Please refer to rest of the parameters from the official [documentation](https://docs.mistral.ai/api/#tag/ocr/operation/ocr_v1_ocr_post).

### Sample Code

<details>
<summary><b>Example Code for Image Processing with Mistral SDK</b></summary>

```python
import base64
import requests
import os
from mistralai import Mistral

def encode_image(image_path):
    """Encode the image to base64."""
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"Error: The file {image_path} was not found.")
        return None
    except Exception as e:  # Added general exception handling
        print(f"Error: {e}")
        return None

# Path to your image
image_path = "mistral_ocr_limit.png"

# Getting the base64 string
base64_image = encode_image(image_path)

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr"
#api_key = os.environ["MISTRAL_API_KEY"]
client = Mistral(server_url=url, api_key=api_key)

ocr_response = client.ocr.process(
    model="mistral-document-ai-2512",
    document={
        "type": "image_url",
        "image_url": f"data:image/jpeg;base64,{base64_image}" 
    }
)
```
</details>

<br>

<details>

<summary><b>Example Code for Image Processing with Requests</b></summary>

```python
import requests
import json
import base64

# Encode the file as a base64 string
def encode_file(file_path):
    with open(file_path, "rb") as sample_file:
        return base64.b64encode(sample_file.read()).decode("utf-8")

base64_file = encode_file(FILE_PATH)

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/ocr"

api_key = get_nlp_api_key() # never store your API key in your code
headers = {
    'x-api-key': api_key
}

data = {
    "model": "mistral-document-ai-2512",
    "document":{
    "type": "image_url",
    "image_url": f"data:image/png;base64,{base64_file}"
    },
    "include_image_base64": "true"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
```

</details>

## PDF and Image Processing with `/files` Endpoint

### API Endpoint
- **URL**: `https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/files`

`/files` endpoint enables user to pass the file directly as multipart payload without converting it to `base64`. However this endpoint does not return the images as `base64` in the response as seen in the `/ocr` endpoint. Please note the `/files` endpoint or the 'file upload' functionality is not compatible with Mistral SDK and can be use with `requests`.

### Sample Code for Processing PDF files

<details>
<summary><b>Example Code for PDF Processing</b></summary>

```python
import requests

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/files"

api_key = get_nlp_api_key() # never store your API key in your code
headers = {
    'x-api-key': api_key
}

data = {"purpose":"ocr"}
files = [('file', ('sample_file.pdf', open('path/to/sample_file.pdf', 'rb')))]

response = requests.post(url, headers=headers, data=data, files=files)
```

</details>

### Sample Code for Processing Image files

**Image file types supported are `png`, `jpeg` and `jpg`.**

<details>
<summary><b>Example Code for Image Processing</b></summary>

```python
import requests

url = "https://api.nlp.{env}.uptimize.merckgroup.com/mistral_ocr/v1/files"

api_key = get_nlp_api_key() # never store your API key in your code
headers = {
    'x-api-key': api_key
}

data = {"purpose":"ocr"}
files = [('file', ('sample_image.png', open('path/to/sample_image.png', 'rb')))]

response = requests.post(url, headers=headers, data=data, files=files)
```

</details>


## Mistral OCR Capabilities: Document Type Examples

This section highlights how Mistral OCR effectively processes various document types, showcasing the original input alongside the resulting output. These examples demonstrate the tool's versatility and accuracy across different formats commonly used in business and research.

### 1. Text Extraction with Table Content

Mistral OCR API excels at extracting structured data from tables, ensuring that the layout and content are preserved accurately in the output.

![Table Extraction Example](/assets/aiml/mistral-ocr/table-extraction.png)

### 2. Text Extraction with Figures

The Mistral OCR API can identify and extract figures from documents, maintaining both the visual elements and any associated captions or labels.

![Figure Extraction Example](/assets/aiml/mistral-ocr/figure-extraction.png)

### 3. Formula-Based Extraction

Mistral OCR accurately recognizes mathematical formulas and equations, formatting them in LaTeX-compatible syntax for seamless integration into technical documents.

![Formula Extraction Example](/assets/aiml/mistral-ocr/formula-based-pdf.png)

### 4. Handwritten Text Recognition

Mistral OCR is capable of processing handwritten content, converting handwritten notes and annotations into searchable and editable text.

![Handwritten Text Recognition Example](/assets/aiml/mistral-ocr/handwritten-recognition.png)

### 5. Receipt Processing

The tool effectively extracts critical  information from scanned receipts, including itemized lists, totals, dates, and vendor details.

![Receipt Processing Example](/assets/aiml/mistral-ocr/receipt-processing.png)


## Mistral OCR Limitations

**Please note that uploaded document files must not exceed 50 MB in size and should be no longer than 1,000 pages.**

For more information, please refer to the official Mistral OCR documentation: [Mistral OCR Documentation](https://docs.mistral.ai/capabilities/document/).

If you face technical challenges, please mail your query to gpt-api@merckgroup.com.

---

# Nomic Embedding API

The Nomic Embedding API provides access to state-of-the-art text embedding models that are open source and fully reproducible. Built on a long-context BERT model and finetuned with high-quality datasets, these embeddings are ideal for a wide range of NLP applications, including semantic search and clustering for data visualization. To know more about how the Nomic embeddings were trained and how it compares to other embedding model providers in the market, please click [here](https://blog.nomic.ai/posts/nomic-embed-text-v1).

## Read This First!

Before integrating the Nomic Embedding API into your applications, it's essential to understand that:

- The Nomic Embedding API is not intended for use in regulated environments.
- The Nomic Embedding API is not intended for use with secret data.
- The Nomic Embedding API is suitable for data in **English** only.

## Environments
This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher work loads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Register Your Use Case and Apply for an API Key

To get started, please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an NLP API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select 'nomic' and accept the terms and conditions.

## Setup Your Local Environment

### Python Environment

To call the Nomic Embedding API from Python, you can use the `requests` library. Here's how to set it up and make a request:
<details>
<summary>Click to view the code</summary>

```python
import requests

def get_embeddings(sentence):
    api_url = "https://api.nlp.{env}.uptimize.merckgroup.com/nomic/v1/embeddings"
    headers = {
        "Content-Type": "application/json",
        "accept": "application/json",
        "x-api-key": "<your-api-key>",
    }
    payload = {"input": sentence}
    return requests.post(api_url, json=payload, headers=headers).json()

sentence = "This is a sentence to encode."
embeddings = get_embeddings(sentence)
print(embeddings)
```
</details>

### Output

The output from the API will be a list of embeddings, one for each input sentence, like so:

```json
[{"index":0,"embedding":[0.01666274480521679,0.009127926081418991,...],"object":"embedding"}]
```

Each `embedding` is a high-dimensional vector representing the semantic content of the input sentence. The dimension size of the Nomic Embedding is 768.


## Task Specific Embeddings

Nomic Embedding API also supports computing embeddings for tasks like Classification, Clustering, Search and Retrieval. For computing such embeddings, the text prompt must include a task instruction prefix, instructing the model which task is being performed.

For example, if you are implementing a RAG application, you embed your documents as `search_document: <text here>` and embed your user queries as `search_query: <text here>`. 

**search_document**

Purpose: embed texts as documents from a dataset
This prefix is used for embedding texts as documents, for example as documents for a RAG index.

```python
sentence = 'search_document: TSNE is a dimensionality reduction algorithm created by Laurens van Der Maaten'
```

**search_query**

Purpose: embed texts as questions to answer
This prefix is used for embedding texts as questions that documents from a dataset could resolve, for example as queries to be answered by a RAG application.

```python
sentence = 'search_query: Who is Laurens van Der Maaten?'
```

**clustering**

Purpose: embed texts to group them into clusters
This prefix is used for embedding texts in order to group them into clusters, discover common topics, or remove semantic duplicates.

```python
sentence = 'clustering: the quick brown fox'
```

**classification**

Purpose: embed texts to classify them
This prefix is used for embedding texts into vectors that will be used as features for a classification model

```python
sentence = 'classification: the quick brown fox'
```

## Limitations and Quotas

- Please contact gpt-api@merckgroup.com if your usage exceeds the limit of your NLP API key.
- Please be considerate in the number of requests made in short periods, as excessive use may affect service availability.

## Support

### Issues with SSL Certificate

For fixing issues with SSL certificate while using the NLP API please add the `verify` argument to the requests method as follows:
```python
requests.post(api_url, json=payload, headers=headers, verify='path/to/the/certificate/file')
```

The certificate can be downloaded at: https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585

If you encounter any issues or have questions about using the Nomic Embedding API, please mail your query to gpt-api@merckgroup.com.

---

# Deepseek API

## Overview

AI reasoning is becoming more accessible at a rapid pace, transforming how developers and enterprises leverage cutting-edge intelligence. 

DeepSeek R1 has been instrumental in democratizing AI reasoning, enabling developers and enterprises to access advanced intelligence with minimal infrastructure. Its integration with Azure AI Foundry offers rapid experimentation, built-in evaluation tools, and seamless scalability for AI-powered applications.

DeepSeek V3-0324, released in March 2025, marks a significant advancement over its predecessor. It boasts enhanced reasoning capabilities, improved benchmark performances, and a larger context window.

One of the key advantages of using DeepSeek R1 or any other model on Azure AI Foundry is the speed at which developers can experiment, iterate, and integrate AI into their workflows. With built-in model evaluation tools, they can quickly compare outputs, benchmark performance, and scale AI-powered applications.

## Important Notice

Please make sure that you have read and understood the following before using the API:

- This API is **not intended** for use in regulated environments
- This API is **not intended** for use in public-facing products
- This API is **not intended** for use with secret data
- For data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions)

## Environments

This API is available in the development (DEV) environment with the following limitations:

- Quota limited to **2k requests/day** (non-extensible)
- We strongly encourage users to use the DEV environment for experimental purposes only

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

## Getting Started

### Register Your Use Case and Apply for an API Key

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc)
2. Apply for a Deepseek API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da)
In the list of required APIs select '/deepseek_api' then accept the terms and conditions."

## Available Models

The following models are available:

| Model ID | Environment |
| --- | --- |
| deepseek-r1-671b-api-gs |   dev |
| deepseek-v3-0324-moe-api-gs | dev |

## Pricing Details

| Model SKU | Input Pricing (USD per 1K Tokens) | Output Pricing (USD per 1K Tokens) |
|-----------|-----------------------------------|-----------------------------------|
| DeepSeek-R1-Global | $0.00135 | $0.0054 |
| DeepSeek-V3-0324-Global | $0.00114 | $0.00456 |

## Rate Limits

| Model SKU | TPM | RPM | Concurrent Requests |
|-----------|-----|-----|---------------------|
| DeepSeek-R1 | 5,000,000 | 5,000 | 300 |
| DeepSeek-V3-0324-Global | 5,000,000 | 5,000 | 300 |

## API Reference

### Endpoint

 **URL**: `https://api.nlp.dev.uptimize.merckgroup.com/deepseek_api/v1`

### Sample Codes

#### Python Requests Library

<details>
<summary><strong>Example: Calling the Deepseek Model with JSON Response</strong></summary>

```python
import requests
import json

url = 'https://api.nlp.{env}.uptimize.merckgroup.com/deepseek_api/v1'
headers = {
    'Content-Type': 'application/json',
    'api-key': '# Set your api_key'
}
data = {
    "model": "<Model ID - refer the 'Available Models' section above>",
    "messages": [
        {
            "role": "user",
            "content": "Explain the concept of quantum entanglement in simple terms."
        }
    ],
    "stream": False
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```
</details>

<details>
<summary><strong>Example: Calling the Deepseek Model with Streamed Response</strong></summary>

```python
import requests
import json

url = 'https://api.nlp.{env}.uptimize.merckgroup.com/deepseek_api/v1'
headers = {
    'Content-Type': 'application/json',
    'api-key': '# Set your api_key'
}
data = {
    "model": "<Model ID - refer the 'Available Models' section above>",
    "messages": [
        {
            "role": "user",
            "content": "Explain the concept of quantum entanglement in simple terms."
        }
    ],
    "stream": True
}

response = requests.post(url, headers=headers, json=data, stream=True)

for line in response.iter_lines():
    if line:
        print(line.decode('utf-8'))
```
</details>

#### Python OpenAI Library

<details>
<summary><strong>Example: Calling the Deepseek Model with JSON Response</strong></summary>

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="# Set your api_key",
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com/deepseek_api/v1",
    api_version="2023-05-15"
)

response = client.chat.completions.create(
    model="<Model ID - refer the 'Available Models' section above>",
    messages=[
        {"role": "user", "content": "Explain the concept of quantum entanglement in simple terms."}
    ]
)

print(response)
```
</details>

<details>
<summary><strong>Example: Calling the Deepseek Model with Streamed Response</strong></summary>

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="# Set your api_key",
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com/deepseek_api/v1",
    api_version="2023-05-15"
)

response = client.chat.completions.create(
    model="<Model ID - refer the 'Available Models' section above>",
    messages=[
        {"role": "user", "content": "Explain the concept of quantum entanglement in simple terms."}
    ],
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
```
</details>

## Support

If you face technical challenges, please email your query to gpt-api@merckgroup.com.

---

# Tavily API

Tavily API enables users to use the capabilities of the Tavily Search Engine to search and retrieve the most relevant information from online sources. Tavily is a search engine optimized for LLMs and autonomous AI agents. Unlike traditional search APIs which retrieve results based on a user query, Tavily API has the ability to aggregate up to 20 sites per request and uses AI to score, filter and rank the most relevant sources for the user query. Developers can integrate Tavily API into their RAG applications to search or retrieve precise information & analyze the results.

## Environments

This API is available in both development (DEV) and production (PROD) environments. On the **DEV** environment, the quota will be limited to **2k requests/day which is non-extensible**. On the **PROD** environment, the quota will be limited to **10k requests/day which is extensible** on the need basis. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher work loads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

Please browse through the subpages for documentation on Tavily [Search and Extract](aiml/aiml_apis/tavily_api/search_and_extract_api/) API and [Crawl](aiml/aiml_apis/tavily_api/crawl_api/) API.

---

# Tavily Search & Extract API

This page provides usage information & terms for the Search and Extract API endpoints offered by Tavily.

## **Read this first!**

### **Important Note**

The search queries could be routed to third-party web indexes which are not necessarily owned/managed by Tavily. Therefore, using the following types of information in Tavily is strictly prohibited.
- Information classified as Internal, Confidential or Secret
- Information subject to GxP purposes
- Information subject to NDA/CDA or other confidentiality obligations of third-parties
- Personal Identifiable Information (PII) or any other sensitive personal data
- Any other information that is not publicly available

While using Tavily API, you agree to comply with the above-mentioned restrictions. 

When using the Tavily API, it is the use case team's responsibility to ensure that the use of the API follows [Tavily API terms and conditions](https://www.tavily.com/terms).


The search and extract results can only be used for analysis purpose. Users are not allowed to copy, store, archive or create a database of search results.


The **Crawl** API of Tavily is pending Cyber Security approvals and will be released in the future.


## Register your use case and apply for an AI-ML API key

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select 'tavily' and accept the terms and conditions.

## Pricing
Tavily API follows a Price Per Credit model, where the number of API credits used depends upon the endpoint and some of its parameters. Currently, each credit costs **$0.0058**. To calculate the usage cost, simply multiply the Price Per Credit cost with the number of credits used by your request. 

| Service | Basic | Advanced | Notes |
|---------|-------|----------|-------|
| **Tavily Search** | 1 credit per request | 2 credits per request | - [search_depth](https://docs.tavily.com/documentation/api-reference/endpoint/search#body-search-depth) determines cost |
| **Tavily Extract** | 1 credit per 5 successful URL extractions | 2 credits per 5 successful URL extractions | - [extract_depth](https://docs.tavily.com/documentation/api-reference/endpoint/extract#body-extract-depth) determines cost <br>- No charge for failed extractions |

For more details about pricing, please refer to the [official documentation](https://docs.tavily.com/documentation/api-credits#api-credits-costs).


## Code Examples
The API can be accessed via the URL `https://api.nlp.{env}.uptimize.merckgroup.com/tavily/{endpoint}`.

### 1. Search

The search endpoint executes a search query using Tavily Search and retrieves the most relevant content for a natural language query.

**Best Practices:**
- For best results and efficient processing, keep the query under 400 characters. If required, break the query into sub-queries.
- Optimizing results with optional request parameters:
  - Set `auto_parameters=True` to allow Tavily to automatically configure parameters based on the query.
  - Limiting search results (`max_results`) to improve relevance.
  - Additonally using `search_depth='advanced'` retrieves more relevant content snippets. *Note that this uses more credits=higher costs.*
  - For having an LLM based summary of all retrieved results, use the `include_answer` parameter.
  - Setting `improve_raw_content=True` extracts raw content for each source for better content analysis, but this could result in content extracted from irrelevant sources as well as increase latency.

For more details about the request parameters, refer to the [Tavily Search API documentation](https://docs.tavily.com/documentation/api-reference/endpoint/search#body-query). To further optimize search performace, refer to the [Best Practices documentation](https://docs.tavily.com/documentation/best-practices/best-practices-search).

<details>
<summary><b>Click to expand and view the example for Search API</b></summary>

```python
import requests
import json

API_KEY = ""
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/tavily/search"

headers = {
    "x-api-key": API_KEY
}

# Modify the optional parameters as required.
data = {
    "query": "What is Artificial Intelligence",
    # "auto_parameters": False, # enable automatic configuration of search parameters based on the query's content and intent.
    # "topic": "general", # "general" is for broad searches, while "news" is for real-time updates.
    # "search_depth": "basic", # Options: "basic" (generic results), "advanced" (more tailored and relevant results).
    # "chunks_per_source": 3,  # The maximum number of content chunks to return per source. Only for 'advanced' depth
    # "max_results": 5, # max value supported is 20
    # "time_range": None, # The time range to filter results based on publication date.
    # "days": 7,  # Number of days back from the current date to include in the results. Only for 'news'
    # "include_answer": 'basic', # Whether to include an LLM-generated answer to the query.
    # "include_raw_content": True, # Whether to include the cleaned and parsed HTML content of each search result.
    # "include_images": False, 
    # "include_image_descriptions": False,
    # "include_favicon": False,
    # "include_domains": [],
    # "exclude_domains": [],
    # "country": None   # prioritize content from the selected country 
}

response = requests.post(url=BASE_URL, headers=headers, json=data)

response_json = json.loads(response.text)

print(response_json)
```

</details>
<hr>

### 2. Extract
The extract endpoint extracts the web page content from one or more URLs using Tavily Extract. The efficient extraction using this API is highly beneficial when integrated with RAG applications.

**Best Practices**
- The one step extraction process by setting `improve_raw_content=True` in Search API. However, this could result in raw content being extracted from irrelevant sources.
- The two step approach:
  - First retrieve relevant web pages using Search API.
  - Then use the Extract API to fetch the complete content of only the most relevant URLs.
- Use `extract_depth = "advanced"` to improve extraction capabilities. *Note that this uses more credits=higher costs.*

For more details about the request parameters, refer to the [Tavily Extract API documentation](https://docs.tavily.com/documentation/api-reference/endpoint/extract#body-urls). To further optimize extraction performace, refer to the [Best Practices documentation](https://docs.tavily.com/documentation/best-practices/best-practices-extract).

<details>
<summary><b>Click to expand and view the example for Extract API</b></summary>

```python
import requests
import json

API_KEY = ""
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/tavily/extract"

headers = {
    "x-api-key": API_KEY
}

# Modify the optional parameters as required.
data = {
    "urls": ['https://en.wikipedia.org/wiki/Artificial_intelligence'], # single URL or a list of URLs
    # "include_images": False,
    # "include_favicon": False,
    # "extract_depth": "basic", # advanced extraction retrieves more data, including tables and embedded content
    # "format": "text", # format of extracted content (text or markdown)
    # "timeout": None  # Max seconds to wait for the URL extraction before timeout (between 1 to 60).
}

response = requests.post(url=BASE_URL, headers=headers, json=data)

response_json = json.loads(response.text)

print(response_json)
```

</details>
<hr>

For any technical questions please reach out to gpt-api@merckgroup.com.

---

# Tavily Crawl API

This page provides usage information & terms for the Crawl API endpoint offered by Tavily.

## **Read this first!**

### **Important Note**

**It is strictly forbidden to crawl & scrape external third-party (e.g. non-Merck) websites using the Tavily crawl endpoint. Please ensure compliance with this guideline before using the Tavily crawl endpoint.**

Due to legal and copyright concerns, the API will only be able to crawl the below mentioned domains. If you want to crawl any other third-party website or domain, please reach out to the legal team ([Andreas Jauch](mailto:andreas.jauch@merckgroup.com)) with your use case. The AI-ML team can allow an external (i.e. non-Merck or even Merck business partner) domain only after approval from the legal team. 
- `emdmillipore.com`
- `emdgroup.com`
- `emdserono.com`
- `sigmaaldrich.com`
- `merck-family-foundation.com`
- `merckgroup.com`
- `milliporesigma.com`
- `m-ventures.com`

Furthermore, the crawl queries could be routed to third-party web indexes which are not necessarily owned/managed by Tavily. Therefore, using the following types of information in Tavily is strictly prohibited.
- Information classified as Internal, Confidential or Secret
- Information subject to GxP purposes
- Information subject to NDA/CDA or other confidentiality obligations of third-parties
- Personal Identifiable Information (PII) or any other sensitive personal data
- Any other information that is not publicly available

While using Tavily API, you agree to comply with the above-mentioned restrictions. 

When using the Tavily API, it is the use case team's responsibility to ensure that the use of the API follows [Tavily API terms and conditions](https://www.tavily.com/terms).

The crawl results can only be used for analysis purpose. Users are not allowed to copy, store, archive or create a database of search results.


## Register your use case and apply for an AI-ML API key

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select 'tavily' and accept the terms and conditions.

## Pricing
Tavily API follows a Price Per Credit model, where the number of API credits used depends upon the endpoint and some of its parameters. Currently, each credit costs **$0.0058**. To calculate the usage cost, simply multiply the Price Per Credit cost with the number of credits used by your request. 

| Service | Basic | Advanced | Notes |
|---------|-------|----------|-------|
| **Tavily Crawl** | 1 credit per 10 URLs mapped + Extraction cost| 1 credit per 5 URLs mapped + Extraction cost| - [instructions](https://docs.tavily.com/documentation/api-reference/endpoint/crawl#body-instructions) (smart crawl) determines cost <br>- Example for basic with 10 URLs:<br> 1 map credit + 2 extract credits = 3 credits <br> - No charge if URL mapping fails |

For more details about pricing, please refer to the [official documentation](https://docs.tavily.com/documentation/api-credits#api-credits-costs).


## Code Examples
The API can be accessed via the URL `https://api.nlp.{env}.uptimize.merckgroup.com/tavily/{endpoint}`.

### 1. Crawl
Tavily Crawl is a graph-based website traversal tool capable of exploring multiple paths simultaneously. It extracts full content from pages and also enables processing of paginated or nested content.

**Best Practices**
- Respect the site's robots.txt
- Start with `max_depth=1` as each level of depth increases crawl time exponentially.
- Set appropriate `max_breadth` according to site structure to ensure best performance.
- Use `select_paths` and `exclude_paths` to focus crawling.
- Use advanced `extract_depth` only when absolutely necessary.

For more details about the request parameters, refer to the [Tavily Crawl API documentation](https://docs.tavily.com/documentation/api-reference/endpoint/crawl#body-url). To effectively use the crawler and view example use cases, refer to the [Best Practices documentation](https://docs.tavily.com/documentation/best-practices/best-practices-crawl).

<details>
<summary><b>Click to expand and view the example for Crawl API</b></summary>

```python
import requests
import json

API_KEY = ""
BASE_URL = "https://api.nlp.{env}.uptimize.merckgroup.com/tavily/crawl"

headers = {
    "x-api-key": API_KEY
}

# Modify the optional parameters as required.
data = {
    "url": 'https://www.merckgroup.com/',
    # "max_depth": 1, # Max depth of the crawl. Defines how far from the base URL the crawler can explore.
    # "max_breadth": 20, # Limits number of links crawled from each page.
    # "limit": 50, # Total number of links the crawler will process before stopping.
    # "instructions": None, # Instructions for crawler to follow for crawling
    # "select_paths": [],
    # "exclude_paths": [],
    # "exclude_domains": [],
    # "categories": [], # Filter URLs for specific categories
    # "extract_depth": "basic",
    # "format": "markdown"
}

response = requests.post(url=BASE_URL, headers=headers, json=data)

response_json = json.loads(response.text)

print(response_json)
```

</details>
<hr>

For any technical questions please reach out to gpt-api@merckgroup.com.

---

# Guardrails API

The Guardrails API provides comprehensive AI safety and content moderation capabilities for your applications. Built on AWS Bedrock Guardrails, this service enables you to implement robust content filtering, PII detection, contextual grounding, and topic restrictions to ensure responsible AI usage.

## What are Guardrails?

Guardrails are AI safety mechanisms that monitor and filter both input prompts and model outputs to prevent harmful, inappropriate, or unwanted content. They act as protective barriers that ensure your AI applications operate within defined safety and compliance boundaries.

### Key Benefits

- **🛡️ Content Safety**: Automatically detect and block harmful content including hate speech, violence, sexual content, and inappropriate material
- **🔒 Privacy Protection**: Identify and handle personally identifiable information (PII) with configurable anonymization or blocking
- **📋 Topic Control**: Restrict conversations to approved topics and prevent discussions on sensitive subjects  
- **🎯 Contextual Accuracy**: Ensure AI responses are grounded in provided context and relevant to user queries
- **⚡ Real-time Processing**: Apply safety checks in real-time with minimal latency impact
- **🔧 Flexible Configuration**: Customize policies and thresholds to match your specific use case requirements
- **📊 Comprehensive Monitoring**: Track safety violations and usage patterns with detailed assessments

## Register your use case and apply for an AI-ML API key

Please follow these steps:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an AI-ML API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

## Environments

This API is currently available in the **development (DEV) environment only** with the following limitations:

- Available for experimental and testing purposes
- Production deployment is not yet available

**In the endpoint url, replace {env} with "dev" for using the DEV environment.**

## Pricing Details

**Guardrails pricing** is based on the number of input and output tokens processed through the guardrails policies. Pricing varies by AWS region and policy types used.

### Key Points

- **Billed per 1,000 tokens processed** for both input and output content
- **Different rates for different policy types** (content filters, PII detection, contextual grounding)
- **Image processing** incurs additional charges per image analyzed
- **No charges for guardrail creation or management** - only for content processing

For detailed pricing information, visit the [AWS Bedrock Guardrails Pricing page](https://aws.amazon.com/bedrock/pricing/).

## Access Control and Permissions

### User Roles

The Guardrails API implements role-based access control with two permission levels:

| Role | Permissions | Description |
|------|-------------|-------------|
| **CRUD** | Full access | Can  read, update, delete guardrails and create versions |
| **Apply-Only** | Limited access | Can only apply guardrails and retrieve guardrail details |

### Endpoint Access Requirements

| Endpoint | Required Role | Notes |
|----------|---------------|-------|
| `GET /guardrails/{guardrail_id}` | Apply-Only or CRUD | Retrieve guardrail configuration |
| `PUT /guardrails/{guardrail_id}` | CRUD | Update guardrail policies |
| `DELETE /guardrails/{guardrail_id}` | **CRUD only** | Permanently delete guardrail |
| `POST /guardrails/{guardrail_id}/versions` | CRUD | Create new version |
| `POST /guardrails/{guardrail_id}/apply` | Apply-Only or CRUD | Apply guardrail to content |
| `POST /guardrails/{guardrail_id}/apply-with-grounding` | Apply-Only or CRUD | Apply with contextual grounding |

**Important Notes**:
- Users with **Apply-Only** role can use guardrails but cannot modify or delete them
- Only users with **CRUD** role can delete guardrails to prevent accidental data loss
- Contact your administrator to request role changes or access to specific guardrails

## Constraints and Limitations

⚠️ **Important Usage Considerations**

### 1. Content Size Limits
- **Input content**: Maximum 25,000 characters per request
- **Output content**: Maximum 5,000 characters per request  
- **Grounding source**: Maximum 100,000 characters
- **Query text**: Maximum 1,000 characters
- **Images**: Maximum 4MB per image, up to 20 images per request

### 2. Supported Content Types
- **Text**: UTF-8 encoded text content
- **Images**: JPEG and PNG formats only
- **File formats**: Direct content processing (no file uploads)

### 3. Rate Limits and Quotas
- **API calls**: Subject to AWS Bedrock service quotas
- **Concurrent requests**: Limited by your AWS account limits
- **Regional availability**: Available in AWS regions where Bedrock Guardrails is supported

### 4. Processing Considerations
- **Latency**: Additional processing time for safety checks (typically 100-500ms)
- **Language support**: Optimized for English content, limited support for other languages
- **Context dependency**: Some policies require sufficient context for accurate detection

### 5. Policy Limitations
- **Content filters**: 6 predefined categories (cannot create custom content categories)
- **PII detection**: Limited to predefined PII types
- **Topic restrictions**: Require clear definitions and examples for accuracy
- **Contextual grounding**: Requires quality reference content for effectiveness

## Available APIs

The Guardrails API provides the following endpoints for comprehensive content safety management:

### Core Guardrail Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/guardrails/{guardrail_id}` | GET | Retrieve guardrail configuration and details |
| `/guardrails/{guardrail_id}` | PUT | Update guardrail policies and settings |
| `/guardrails/{guardrail_id}` | DELETE | Delete a guardrail permanently |
| `/guardrails/{guardrail_id}/versions` | POST | Create a new version of the guardrail |

### Content Processing

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/guardrails/{guardrail_id}/apply` | POST | Apply guardrail policies to content (text and images) |
| `/guardrails/{guardrail_id}/apply-with-grounding` | POST | Apply guardrail with contextual grounding support |

### System Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/guardrails/health` | GET | Health check endpoint for service monitoring |

---

## API Details

### Get Guardrail Details

Retrieve comprehensive information about a specific guardrail including its policies, configuration, and metadata.

**Endpoint**: `GET /guardrails/{guardrail_id}`

**Parameters**:
- `guardrail_id` (path): The unique identifier of the guardrail
- `version` (query): The guardrail version (default: "DRAFT")

**Response**: Returns guardrail configuration including all policies, settings, and metadata.

### Update Guardrail

Modify an existing guardrail's policies, settings, or configuration. Supports partial updates - only provided fields will be modified.

**Endpoint**: `PUT /guardrails/{guardrail_id}`
**Important Note**: The guardrail **name cannot be updated** after creation. Only the following fields can be modified:


**Updatable Fields**:
- Description
- Policies (content filters, PII detection, topic restrictions, etc.)
- Blocked input/output messaging

**Features**:
- **Content Filters**: Configure filtering for hate speech, violence, sexual content, insults, misconduct, and prompt attacks
- **PII Detection**: Set up detection and handling of personally identifiable information
- **Topic Restrictions**: Define allowed/blocked conversation topics
- **Word Filtering**: Block specific words or phrases
- **Contextual Grounding**: Ensure responses are grounded in provided context

### Check Guardrail Active Mappings

Check if a guardrail has active mappings to other users or use cases before attempting deletion.

**Endpoint**: `GET /guardrails/{guardrail_id}/check-active-mappings`

**Purpose**: This endpoint helps you verify whether a guardrail can be safely deleted by checking if it's currently being used by other users or use cases in the system.

**Response Fields**:
- `guardrail_id`: The guardrail identifier
- `is_in_use`: Boolean indicating if the guardrail is being used by others
- `use_case_count`: Number of other use cases using this guardrail
- `use_cases`: Array of use case names currently using the guardrail
- `can_delete`: Boolean indicating if the guardrail can be safely deleted
- `message`: Human-readable status message

**Example Response (In Use)**:
```json
{
  "guardrail_id": "abc123xyz",
  "is_in_use": true,
  "use_case_count": 3,
  "use_cases": ["Marketing Campaign", "Customer Support Bot", "Content Moderation"],
  "can_delete": false,
  "message": "This guardrail is being used by 3 other use case(s)"
}
```

**Example Response (Not In Use)**:
```json
{
  "guardrail_id": "abc123xyz",
  "is_in_use": false,
  "use_case_count": 0,
  "use_cases": [],
  "can_delete": true,
  "message": "This guardrail is not being used by other use cases and can be safely deleted"
}
```

**Best Practice**: Always check active mappings before attempting to delete a guardrail to understand the impact of deletion.

### Delete Guardrail

Permanently remove a guardrail and all its versions. This action cannot be undone.

**Endpoint**: `DELETE /guardrails/{guardrail_id}`

**Important**: Before deleting a guardrail, it's recommended to use the `GET /guardrails/{guardrail_id}/check-active-mappings` endpoint to verify that the guardrail is not being used by other users or use cases. This helps prevent accidental disruption of active applications.

### Create Guardrail Version

Create a new immutable version of a guardrail for production deployment and version control.

**Endpoint**: `POST /guardrails/{guardrail_id}/versions`

**Parameters**:
- `description` (query, optional): Description of the version changes

### Apply Guardrail

Process content through guardrail policies to detect and filter inappropriate material. Supports both text and image content.

**Endpoint**: `POST /guardrails/{guardrail_id}/apply`

**Features**:
- **Multimodal Support**: Process text and images in a single request
- **Real-time Processing**: Get immediate safety assessment results
- **Detailed Assessments**: Receive comprehensive analysis of policy violations
- **Flexible Actions**: Configure blocking, anonymization, or warning actions

**Content Types Supported**:
- Text content with UTF-8 encoding
- Images in JPEG/PNG format (base64 encoded)
- Mixed content blocks combining text and images

### Apply Guardrail with Contextual Grounding

Enhanced content processing that includes contextual grounding to ensure responses are relevant and factually grounded.

**Endpoint**: `POST /guardrails/{guardrail_id}/apply-with-grounding`

**Features**:
- **Grounding Verification**: Check if responses are supported by provided context
- **Relevance Scoring**: Assess how relevant responses are to the user query
- **Source Attribution**: Track which parts of the context support the response
- **Hallucination Detection**: Identify potentially fabricated information

**Use Cases**:
- RAG (Retrieval-Augmented Generation) applications
- Document-based Q&A systems
- Fact-checking and verification workflows
- Customer support with knowledge base grounding

## Policy Types Reference

This section provides a comprehensive reference of all available policy types and their configuration options. Use this guide to understand what policies you can configure in your guardrails.

### 1. Content Filters

Content filters detect and block harmful content in both text and images across predefined categories.

#### Available Content Filter Types

| Type | Description | Supported Modalities |
|------|-------------|---------------------|
| `HATE` | Hate speech, discriminatory language, and content promoting hatred | TEXT, IMAGE |
| `VIOLENCE` | Violent content, graphic descriptions, threats | TEXT, IMAGE |
| `SEXUAL` | Sexual content, explicit material, inappropriate imagery | TEXT, IMAGE |
| `INSULTS` | Insults, derogatory language, personal attacks | TEXT, IMAGE |
| `MISCONDUCT` | Unethical behavior, illegal activities, harmful instructions | TEXT, IMAGE |
| `PROMPT_ATTACK` | Prompt injection attempts, jailbreak attempts | TEXT |

#### Filter Strength Options

| Strength | Description | Use Case |
|----------|-------------|----------|
| `NONE` | No filtering applied | Disable specific filter |
| `LOW` | Minimal filtering, only extreme cases | Permissive applications |
| `MEDIUM` | Balanced filtering (default) | General purpose applications |
| `HIGH` | Strict filtering, maximum safety | High-risk or sensitive applications |

#### Content Filter Actions

| Action | Description |
|--------|-------------|
| `BLOCK` | Block the content entirely (default) |
| `NONE` | Allow the content to pass through |

#### Content Filter Modalities

| Modality | Description |
|----------|-------------|
| `TEXT` | Apply filter to text content |
| `IMAGE` | Apply filter to image content |

**AWS Documentation**: [Content Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters.html)

---

### 2. PII (Personally Identifiable Information) Detection

Detect and handle sensitive personal information to protect user privacy.

#### Available PII Entity Types

| Type | Description | Example |
|------|-------------|---------|
| `EMAIL` | Email addresses | user@example.com |
| `PHONE` | Phone numbers | +1-555-123-4567 |
| `CREDIT_DEBIT_CARD_NUMBER` | Credit/debit card numbers | 4111-1111-1111-1111 |
| `SSN` | Social Security Numbers | 123-45-6789 |
| `NAME` | Person names | John Doe |
| `ADDRESS` | Physical addresses | 123 Main St, City, State |
| `AGE` | Age information | 25 years old |
| `USERNAME` | Usernames | john_doe123 |
| `PASSWORD` | Passwords | P@ssw0rd123 |
| `DRIVER_ID` | Driver's license numbers | D1234567 |
| `LICENSE_PLATE` | Vehicle license plates | ABC-1234 |
| `VEHICLE_IDENTIFICATION_NUMBER` | VIN numbers | 1HGBH41JXMN109186 |

#### PII Actions

| Action | Description |
|--------|-------------|
| `BLOCK` | Block content containing PII |
| `ANONYMIZE` | Replace PII with placeholder (e.g., [EMAIL], [PHONE]) |
| `NONE` | Allow PII to pass through |

**AWS Documentation**: [Sensitive Information Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-pii.html)

---

### 3. Custom Regex Patterns

Define custom regular expressions to detect and handle specific patterns in content.

#### Configuration Options

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Unique name for the regex pattern | Yes |
| `description` | string | Description of what the pattern detects | Yes |
| `pattern` | string | Regular expression pattern | Yes |
| `action` | string | Action to take (BLOCK, ANONYMIZE, NONE) | Yes |
| `input_enabled` | boolean | Enable for input content | No (default: true) |
| `output_enabled` | boolean | Enable for output content | No (default: true) |

**AWS Documentation**: [Sensitive Information Filters - Regex](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-pii.html)

---

### 4. Topic Restrictions

Define topics that should be blocked or allowed in conversations.

#### Configuration Options

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Name of the topic | Yes |
| `definition` | string | Clear definition of the topic | Yes |
| `examples` | array | Example phrases related to the topic | No |
| `type` | string | "DENY" to block topic | No (default: "DENY") |

**AWS Documentation**: [Denied Topics](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-topics.html)

---

### 5. Word Filters

Block specific words or phrases (exact match).

#### Configuration

Simple array of strings representing words or phrases to block.

**AWS Documentation**: [Word Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-word-filters.html)

---

### 6. Contextual Grounding

Ensure AI responses are grounded in provided context and relevant to user queries.

#### Available Filter Types

| Type | Description |
|------|-------------|
| `GROUNDING` | Checks if response is supported by the provided context |
| `RELEVANCE` | Checks if response is relevant to the user's query |

#### Configuration Options

| Field | Type | Description | Range |
|-------|------|-------------|-------|
| `type` | string | Filter type (GROUNDING or RELEVANCE) | - |
| `threshold` | float | Confidence threshold | 0.0 - 1.0 |
| `action` | string | Action to take (BLOCK or NONE) | - |
| `enabled` | boolean | Enable/disable the filter | - |

#### Threshold Guidelines

- **0.0 - 0.3**: Very permissive, allows most content
- **0.4 - 0.6**: Balanced, moderate filtering
- **0.7 - 0.9**: Strict, high confidence required
- **0.95 - 1.0**: Very strict, near-perfect match required

**AWS Documentation**: [Contextual Grounding Checks](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding.html)

---

### Complete Policy Configuration Example

Here's a comprehensive example combining all policy types:

```json
{
  "name": "comprehensive-guardrail",
  "description": "Full-featured guardrail with all policy types",
  "policies": {
    "content_filters": [
      {
        "type": "HATE",
        "input_strength": "HIGH",
        "output_strength": "HIGH",
        "input_modalities": ["TEXT", "IMAGE"],
        "output_modalities": ["TEXT"],
        "input_action": "BLOCK",
        "output_action": "BLOCK"
      },
      {
        "type": "VIOLENCE",
        "input_strength": "MEDIUM",
        "output_strength": "HIGH"
      }
    ],
    "pii_entities": [
      {
        "type": "EMAIL",
        "action": "ANONYMIZE",
        "input_enabled": true,
        "output_enabled": true
      },
      {
        "type": "SSN",
        "action": "BLOCK"
      }
    ],
    "custom_regex": [
      {
        "name": "Employee-ID",
        "description": "Internal employee identifiers",
        "pattern": "EMP-[0-9]{6}",
        "action": "ANONYMIZE"
      }
    ],
    "topic_restrictions": [
      {
        "name": "Financial Advice",
        "definition": "Investment recommendations and financial advice",
        "examples": [
          "You should invest in stocks",
          "Buy this cryptocurrency"
        ],
        "type": "DENY"
      }
    ],
    "blocked_words": [
      "confidential",
      "internal-only",
      "classified"
    ],
    "contextual_grounding": {
      "filters": [
        {
          "type": "GROUNDING",
          "threshold": 0.75,
          "action": "BLOCK",
          "enabled": true
        },
        {
          "type": "RELEVANCE",
          "threshold": 0.70,
          "action": "BLOCK",
          "enabled": true
        }
      ]
    }
  },
  "blocked_input_messaging": "Sorry, I cannot process that request.",
  "blocked_outputs_messaging": "Sorry, I cannot provide that information."
}
```

### Additional Resources

For more detailed information about AWS Bedrock Guardrails policies and configurations, refer to the official AWS documentation:

- **Main Guardrails Documentation**: [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- **Content Filters**: [Configure Content Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters.html)
- **PII Detection**: [Sensitive Information Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-pii.html)
- **Topic Restrictions**: [Denied Topics](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-topics.html)
- **Word Filters**: [Word Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-word-filters.html)
- **Contextual Grounding**: [Contextual Grounding Checks](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding.html)

---

## Sample Code Snippets

### Get Guardrail Details

<details>
<summary><strong>Retrieve Guardrail Configuration</strong></summary>

- Bash

```bash
curl --request GET 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id' \
--header 'x-api-key: <YOUR-API-KEY>' \
--header 'Content-Type: application/json'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

response = httpx.get(
    f"{base_url}/guardrails/{guardrail_id}",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    params={"version": "DRAFT"}
)

if response.status_code == 200:
    guardrail_config = response.json()
    print(f"Guardrail Name: {guardrail_config['name']}")
    print(f"Status: {guardrail_config['status']}")
    print(json.dumps(guardrail_config, indent=2))
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>

### Update Guardrail Policies

<details>
<summary><strong>Update Content Filters and PII Detection</strong></summary>

- Bash

```bash
curl --request PUT 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id' \
--header 'x-api-key: <YOUR-API-KEY>' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Updated guardrail with enhanced policies",
  "policies": {
    "content_filters": [
      {
        "type": "HATE",
        "input_strength": "HIGH",
        "output_strength": "HIGH",
        "input_enabled": true,
        "output_enabled": true,
        "input_modalities": ["TEXT", "IMAGE"],
        "output_modalities": ["TEXT"]
      },
      {
        "type": "VIOLENCE",
        "input_strength": "MEDIUM",
        "output_strength": "HIGH",
        "input_enabled": true,
        "output_enabled": true
      }
    ],
    "pii_entities": [
      {
        "type": "EMAIL",
        "action": "ANONYMIZE",
        "input_enabled": true,
        "output_enabled": true
      },
      {
        "type": "PHONE",
        "action": "BLOCK",
        "input_enabled": true,
        "output_enabled": true
      }
    ]
  }
}'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

update_data = {
    "description": "Updated guardrail with enhanced policies",
    "policies": {
        "content_filters": [
            {
                "type": "HATE",
                "input_strength": "HIGH",
                "output_strength": "HIGH",
                "input_enabled": True,
                "output_enabled": True,
                "input_modalities": ["TEXT", "IMAGE"],
                "output_modalities": ["TEXT"]
            },
            {
                "type": "VIOLENCE", 
                "input_strength": "MEDIUM",
                "output_strength": "HIGH",
                "input_enabled": True,
                "output_enabled": True
            }
        ],
        "pii_entities": [
            {
                "type": "EMAIL",
                "action": "ANONYMIZE",
                "input_enabled": True,
                "output_enabled": True
            },
            {
                "type": "PHONE",
                "action": "BLOCK", 
                "input_enabled": True,
                "output_enabled": True
            }
        ],
        "topic_restrictions": [
            {
                "name": "Financial Advice",
                "definition": "Providing specific investment recommendations or financial advice",
                "examples": [
                    "You should invest in this stock",
                    "Buy cryptocurrency now",
                    "This is the best investment strategy"
                ],
                "type": "DENY"
            }
        ],
        "blocked_words": ["confidential", "internal-only", "classified"]
    }
}

response = httpx.put(
    f"{base_url}/guardrails/{guardrail_id}",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    json=update_data,
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Guardrail updated successfully: {result['guardrail_id']}")
    print(f"Version: {result['version']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>

### Apply Guardrail to Content

<details>
<summary><strong>Process Text Content</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id/apply' \
--header 'x-api-key: <YOUR-API-KEY>' \
--header 'Content-Type: application/json' \
--data '{
  "content": "This is the content I want to check for safety violations.",
  "source": "INPUT"
}'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

# Example 1: Simple text content
request_data = {
    "content": "This is the content I want to check for safety violations.",
    "source": "INPUT"
}

response = httpx.post(
    f"{base_url}/guardrails/{guardrail_id}/apply",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    json=request_data,
    params={"version": "DRAFT"},
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Action taken: {result['action']}")
    print(f"Filtered content: {result.get('filtered_content', 'No changes')}")
    
    if result.get('assessments'):
        print("Policy violations detected:")
        for assessment in result['assessments']:
            print(f"  - {assessment}")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>

<details>
<summary><strong>Process Multimodal Content (Text + Images)</strong></summary>

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import base64
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

# Read and encode image
image_path = "path/to/image.jpg"

try:
    with open(image_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode('utf-8')
    print("Successfully loaded image from:", image_path)
except FileNotFoundError:
    print("Error: Image file not found at", image_path)
    exit(1)

# Multimodal content request
request_data = {
    "content_blocks": [
        {
            "text": {
                "text": "Please analyze this image for any inappropriate content."
            }
        },
        {
            "image": {
                "format": "jpeg",
                "source": {
                    "bytes": image_data
                }
            }
        }
    ],
    "source": "INPUT"
}

print("\nTesting Image Content with Guardrails")
print("=" * 70)

try:
    response = httpx.post(
        f"{base_url}/guardrails/{guardrail_id}/apply",
        headers={"x-api-key": "<YOUR-API-KEY>"},
        json=request_data,
        params={"version": "DRAFT"},
        timeout=60
    )
    
    if response.status_code == 200:
        result = response.json()
        
        print("\nRequest successful")
        print("\nGUARDRAIL RESPONSE:")
        print("-" * 70)
        
        # Main action
        action = result.get('action', 'UNKNOWN')
        print("Action Taken:", action)
        
        # Processed outputs
        if result.get('outputs'):
            print("\nProcessed Outputs:")
            for i, output in enumerate(result['outputs'], 1):
                if output.get('text'):
                    print(f"  Text Block {i}: {output['text']['text']}")
                elif output.get('image'):
                    print(f"  Image Block {i}: {output['image']['format']} format")
        
        # Content filter assessments only
        if result.get('assessments'):
            print("\nContent Filter Assessments:")
            print("-" * 70)
            
            for idx, assessment in enumerate(result['assessments'], 1):
                print(f"\nAssessment {idx}:")
                
                # Content policy assessment
                if 'contentPolicy' in assessment:
                    content_policy = assessment['contentPolicy']
                    print("  Content Policy Filters:")
                    
                    if 'filters' in content_policy:
                        for filter_item in content_policy['filters']:
                            filter_type = filter_item.get('type', 'Unknown')
                            confidence = filter_item.get('confidence', 'Unknown')
                            action = filter_item.get('action', 'Unknown')
                            
                            print(f"    Filter Type: {filter_type}")
                            print(f"    Confidence: {confidence}")
                            print(f"    Action: {action}")
                            print()
        
        # Full JSON response
        print("=" * 70)
        print("Full JSON Response:")
        print("=" * 70)
        print(json.dumps(result, indent=2))
        
    else:
        print(f"\nError: {response.status_code}")
        print(f"Response: {response.text}")

except httpx.TimeoutException:
    print("\nRequest timed out. Image processing may take longer than expected.")
except httpx.RequestError as e:
    print(f"\nRequest error: {e}")
except Exception as e:
    print(f"\nUnexpected error: {e}")
    import traceback
    traceback.print_exc()

print("\n" + "=" * 70)
print("Test completed")
print("=" * 70)
```
</details>

### Check Guardrail Active Mappings

<details>
<summary><strong>Check if Guardrail is in Use Before Deletion</strong></summary>

- Bash

```bash
curl --request GET 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id/check-active-mappings' \
--header 'x-api-key: <YOUR-API-KEY>' \
--header 'Content-Type: application/json'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

response = httpx.get(
    f"{base_url}/guardrails/{guardrail_id}/check-active-mappings",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Guardrail ID: {result['guardrail_id']}")
    print(f"Is in use: {result['is_in_use']}")
    print(f"Use case count: {result['use_case_count']}")
    
    if result['is_in_use']:
        print(f"Used by: {', '.join(result['use_cases'])}")
        print(f"Can delete: {result['can_delete']}")
        print(f"\nWarning: {result['message']}")
    else:
        print(f"Status: {result['message']}")
        print("This guardrail can be safely deleted.")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>

### Apply Guardrail with Contextual Grounding

<details>
<summary><strong>Contextual Grounding for RAG Applications</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id/apply-with-grounding' \
--header 'x-api-key: <YOUR-API-KEY>' \
--header 'Content-Type: application/json' \
--data '{
  "content": "The company was founded in 1995 and has grown significantly.",
  "source": "OUTPUT",
  "grounding_source": "Our company history: Founded in 1995 by John Smith in California. Started with 5 employees and now has over 1000 employees worldwide.",
  "query": "When was the company founded?",
  "outputScope": "FULL"
}'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.dev.uptimize.merckgroup.com"
guardrail_id = "<YOUR-GUARDRAIL-ID>"
api_key = "<YOUR-API-KEY>"

print("\nTest contextual grounding")

request_data = {
    "content": "The company was founded in 1995 and has grown significantly since then.",
    "source": "OUTPUT",
    "grounding_source": "Our company history: Founded in 1995 by John Smith in California. Started with 5 employees and now has over 1000 employees worldwide.",
    "query": "When was the company founded and how has it grown?",
    "outputScope": "FULL"
}

response = httpx.post(
    f"{base_url}/guardrails/{guardrail_id}/apply-with-grounding",
    headers={"x-api-key": api_key},
    json=request_data,
    params={"version": "DRAFT"},
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Action taken: {result['action']}")
    print(f"Filtered content: {result.get('filtered_content', 'No changes')}")
    
    if result.get('assessments'):
        print("\nGrounding assessments:")
        for assessment in result['assessments']:
            if 'contextualGroundingPolicy' in assessment:
                cg_policy = assessment['contextualGroundingPolicy']
                if 'filters' in cg_policy:
                    for filter_result in cg_policy['filters']:
                        filter_type = filter_result.get('type')
                        score = filter_result.get('score')
                        threshold = filter_result.get('threshold')
                        action = filter_result.get('action')
                        detected = filter_result.get('detected')
                        
                        print(f"  {filter_type}:")
                        print(f"    Score: {score}")
                        print(f"    Threshold: {threshold}")
                        print(f"    Action: {action}")
                        print(f"    Detected: {detected}")
    
    if result.get('usage'):
        print(f"\nUsage metrics: {result['usage']}")
        cg_units = result['usage'].get('contextualGroundingPolicyUnits', 0)
        if cg_units > 0:
            print("SUCCESS: Contextual grounding is working")
        else:
            print("WARNING: Contextual grounding units still 0")
else:
    print(f"Error: {response.status_code}")
    print(response.text)

```
</details>

### Delete Guardrail

<details>
<summary><strong>Permanently Delete a Guardrail</strong></summary>

- Bash

```bash
curl --request DELETE 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id' \
--header 'x-api-key: <YOUR-API-KEY>'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

response = httpx.delete(
    f"{base_url}/guardrails/{guardrail_id}",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Success: {result['message']}")
    print(f"Deleted guardrail: {result['guardrail_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>

### Create Guardrail Version

<details>
<summary><strong>Create Production Version</strong></summary>

- Bash

```bash
curl --request POST 'https://api.nlp.{env}.uptimize.merckgroup.com/guardrails/your-guardrail-id/versions' \
--header 'x-api-key: <YOUR-API-KEY>' \
--data 'description=Production version with enhanced content filtering'
```

- Python

```python
# /// script
# dependencies = [
#   "httpx"
# ]
# ///

import json
import httpx

base_url = "https://api.nlp.{env}.uptimize.merckgroup.com"
guardrail_id = "your-guardrail-id"

response = httpx.post(
    f"{base_url}/guardrails/{guardrail_id}/versions",
    headers={"x-api-key": "<YOUR-API-KEY>"},
    params={"description": "Production version with enhanced content filtering"},
    timeout=30
)

if response.status_code == 200:
    result = response.json()
    print(f"Version created: {result['version']}")
    print(f"Guardrail ARN: {result['guardrailArn']}")
    print(f"Status: {result['status']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
</details>
<hr>

For any technical questions please reach out to gpt-api@merckgroup.com.

---

# AI Coding Assistants

In the past years, AI coding assistants have gained significant traction in the software development community. 
These tools leverage advanced machine learning models to assist developers in writing, debugging, and optimizing code. 
By integrating AI into the coding workflow, developers can enhance productivity, reduce errors, and streamline the development process.
UPTIMIZE aims to provide (experimental) access to a number of AI coding assistants to its users.

## UPTIMIZE MCoder <sup><i>Beta</i></sup>

UPTIMIZE MCoder is a coding assistant plugin which integrates into IDEs for streamlining the development process with features such as code generation, refactoring, and debugging assistance. The tool leverages the [Continue](https://docs.continue.dev/) open-source AI code assistant plugin with support of UPTIMIZE OpenAI API. 
This guide will walk you through the configuration steps required to integrate Continue with Visual Studio Code (VSCode) and Intellij based IDEs.


### Read This First!

Please make sure that you have read and understood the following things before using Uptimize MCoder:
- MCoder not intended for use in regulated environments.
- MCoder is not intended for use for public-facing products.
- MCoder is not intended for use with secret data.
- MCoder is at the beta stage. Therefore, do expect technical glitches which will be fixed in production-ready release. 
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).

### Register your use case and apply for an MCoder API key
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for an MCoder API key [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da). In the list of required APIs select '/mcoder' and accept the terms and conditions.

### Key Features of MCoder

-	**Code Generation:** Automatically generate boilerplate code, class structures, and functions based on context.

-	**Contextual Code Assistance:** Understands your code to suggest relevant completions, variable names, and methods.

-	**Refactoring Support:** Provides intelligent refactoring options, including renaming variables, functions, and restructuring code blocks.

-	**In-line Debugging Assistance:** Assists with debugging code by identifying potential issues and suggesting fixes.

-	**Multi-language Support:** Supports multiple programming languages such as Python, JavaScript, TypeScript, Java, SQL and more.
<br />
<br />


### Configuring UPTIMIZE MCoder in VSCode

#### Step 1: Install Continue Extension

1. Open **VS Code**.  
2. Go to the **Extensions** panel on the sidebar.  
3. Search for "**Continue**".  
4. Click the **Install** button to add the extension to your environment.  

---

#### Step 2: Configure Continue Dev Extension

1. Open the **Continue Chat** window from the left activity bar.  
2. Look for **Local Assistant** in the top right corner and click on the gear icon.  
3. Paste the following YAML file content and make sure to update the `apiKey` field with your MCoder API key.

##### YAML Config File

````yaml
name: Local Assistant
version: 1.0.0
schema: v1
models:
  - title: UPTIMIZE AI-ML API
    provider: azure
    model: gpt-4o
    apiBase: https://api.nlp.dev.uptimize.merckgroup.com
    apiVersion: '2024-02-01'
    engine: gpt-4o
    apiType: azure
    apiKey: {api-key}
    name: gpt-4o
    roles:
      - chat
      - edit
      - apply
  # You can add more OpenAI models mentioned here: https://docs.uptimize.merckgroup.com/nlp/openai_api/#important-notes%3A
  # Update the model, engine and name properties to match the model you want to use
  - title: UPTIMIZE AI-ML API
    provider: azure
    model: gpt-4o-mini
    apiBase: https://api.nlp.dev.uptimize.merckgroup.com
    apiVersion: '2024-02-01'
    engine: gpt-4o-mini
    apiType: azure
    apiKey: {api-key}
    name: gpt-4o-mini
    roles:
      - chat
      - edit
      - apply
  # Anthropic Claude models
  # Claude 3.7 Sonnet
  - title: UPTIMIZE AI-ML API
    provider: azure
    model: anthropic.claude-3-7-sonnet-20250219-v1:0
    apiBase: https://api.nlp.dev.uptimize.merckgroup.com/model
    apiKey: {Bedrock API KEY}
    name: Claude 3.7 Sonnet
    roles:
      - chat
      - edit
      - apply
    requestOptions:
      headers:
        'openai-standard': 'True'
  # Claude 3.5 Sonnet
  - title: UPTIMIZE AI-ML API
    provider: azure
    model: anthropic.claude-3-5-sonnet-20240620-v1:0
    apiBase: https://api.nlp.dev.uptimize.merckgroup.com/model
    apiKey: {Bedrock API KEY}
    name: Claude 3.5 Sonnet
    roles:
      - chat
      - edit
      - apply
    requestOptions:
      headers:
        'openai-standard': 'True'
  # Do not change any of the following values
  - title: UPTIMIZE AI-ML API
    provider: azure
    model: gpt-4o
    apiBase: https://api.nlp.dev.uptimize.merckgroup.com
    apiVersion: '2024-02-01'
    engine: gpt-4o
    apiType: azure
    apiKey: {api-key}
    name: Azure FIM
    roles:
      - autocomplete
````

4. Save the YAML file and restart VS Code.

---

### Configuring UPTIMIZE MCoder in JetBrains IDEs

1. Open your **JetBrains IDE**.  
2. Go to **Settings** and search for **Plugins**.  
3. Search for **Continue** and install the plugin.  
4. Restart the IDE.  
5. Open the **Continue Chat** window from the right activity bar.  
6. Look for **Local Assistant** in the top right corner and click on the gear icon.  
7. Paste the YAML file content mentioned in [Step 2.3](aiml/mcoder/#yaml-config-file) and update the `apiKey` field with your MCoder API key.  
8. Save the YAML file and restart the IDE.

---

### Terms and Conditions for Using MCoder (Beta)

#### 1. Beta Software Disclaimer  
MCoder is currently in beta; users may encounter bugs, incomplete features, or instability. Feedback is appreciated to help improve the plugin.

#### 2. Limited Support  
As MCoder is under active development, for any feedback and issues email us at [gpt-api@merckgroup.com](mailto:gpt-api@merckgroup.com).

#### 3. Changes & Upgrades  
The Continue.dev-based plugin underlying MCoder may release breaking changes. In such cases, we will apply the fix as early as possible.

#### 4. Decommissioning of Previous Methods  
The previous method of configuring with auto-sync is deprecated. Users are encouraged to migrate to the new YAML-based configuration method.

## Experimental Integrations to other Plugins or Tools

The following integrations are **experimental**. Please do your own due diligence before using the tools.
The fact that we document the configuration here does not make these tools officially approved.

### Claude Code

Claude Code is an AI-powered coding assistant developed by Anthropic, designed to integrate directly into developers' terminals or IDEs for seamless collaboration on large codebases.
It leverages natural language commands to understand codebases, execute routine tasks like writing and testing code, explain complex logic, and manage Git workflows such as reading issues, running tests, and submitting pull requests.

#### Point Claude Code to the AI/ML Services APIs

1. Install Claude Code

    - Follow the standard installation procedure provided at [Claude Code](https://www.anthropic.com/claude-code)

**Note:** 27/01/2026: The easiest way for Windows users is to install the **Claude Code for VS Code** Extension. If the latest version doesn't work, choose the last working version (2.1.20 just got fixed as of now).
If you want to install the native installer for Claude in **Windows PowerShell**, press Windows key, type "powershell" to open the terminal, then use the following commands instead of the one in Claude Code Docs to install your chosen version (for example 2.1.20):

```bash
& ([scriptblock]::Create((irm https://claude.ai/install.ps1))) 2.1.20
```
Do not forget to add Claude to your user PATH by setting this variable in your shell environment, so you'll be able to run `claude` in your terminal without providing the full path to claude.exe. 

```bash
[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";$env:USERPROFILE\.local\bin",
  "User"
)
```


2. Obtain AWS Bedrock API Key

    - A list of available Uptimize Bedrock APIs can be found under [Bedrock LLM Models](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/bedrock_api/chat_and_embedding_models/).

    - Request your API key from Uptimize NLP Service via [Token Request Form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

    - Request at least `/bedrock` Permissions.

3. Configure Environment Variables

Set these variables in your shell environment using your API key (and use either dev or prod URL as needed):

```bash
# Enable Bedrock integration
export CLAUDE_CODE_USE_BEDROCK=1

# Configure Uptimize API (use dev for development or p for production in URL as needed)
export ANTHROPIC_BEDROCK_BASE_URL="https://api.nlp.p.uptimize.merckgroup.com"

# API key authentication
export CLAUDE_CODE_SKIP_BEDROCK_AUTH=1
export ANTHROPIC_AUTH_TOKEN="your-api-key-here"

# Select models
export ANTHROPIC_MODEL="anthropic.claude-sonnet-4-20250514-v1:0"
export ANTHROPIC_SMALL_FAST_MODEL="us.anthropic.claude-3-5-haiku-20241022-v1:0"

# Disable Telemetry to Anthropic
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

```

4. SSL Configuration
- Follow the [SSL setup instructions](https://dc-onboarding.apps.p.uptimize.merckgroup.com/01-03_ssl-certificates.html) here.

5. Launch Claude Code
- Run `claude` in your terminal to get started.

#### Point Claude Code to the Foundry Anthropic Proxy API

1. Install Claude Code

    - Follow the standard installation procedure provided at [Claude Code](https://www.anthropic.com/claude-code)

**Note:** 27/01/2026: The easiest way for Windows users is to install the **Claude Code for VS Code** Extension. If the latest version doesn't work, choose the last working version (2.1.20 just got fixed as of now).
If you want to install the native installer for Claude in **Windows PowerShell**, press Windows key, type "powershell" to open the terminal, then use the following commands instead of the one in Claude Code Docs to install your chosen version (for example 2.1.20):

```bash
& ([scriptblock]::Create((irm https://claude.ai/install.ps1))) 2.1.20
```
Do not forget to add Claude to your user PATH by setting this variable in your shell environment, so you'll be able to run `claude` in your terminal without providing the full path to claude.exe. 

```bash
[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";$env:USERPROFILE\.local\bin",
  "User"
)
```

2. Obtain a personal Foundry token

    - Create a new token for your Foundry account [here](https://palantir.mcloud.merckgroup.com/workspace/settings/tokens) and copy it to the clipboard.

3. Configure Environment Variables

Set these variables in your shell environment using your Foundry token.

```bash
export ANTHROPIC_AUTH_TOKEN="your_foundry_token_here"
export ANTHROPIC_BASE_URL=https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic

export DISABLE_TELEMETRY=1
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1⏎
```

**Windows PowerShell**

```bash
[Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "your_foundry_token_here", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic", "User")
[Environment]::SetEnvironmentVariable("DISABLE_TELEMETRY", "1", "User")
[Environment]::SetEnvironmentVariable("CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "1", "User")
```

If you have `foundry-dev-tools` installed and only want to maintain one local token we recommend the following setup:

```bash
export ANTHROPIC_AUTH_TOKEN=$(/Users/<user>/miniforge3/envs/foundry-dev-tools/bin/python -c "from foundry_dev_tools import FoundryContext; ctx = FoundryContext(); print(ctx.token)")
export ANTHROPIC_BASE_URL=https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

Replace `/Users/<user>/miniforge3/envs/foundry-dev-tools/bin/python` with the path to the python interpreter in which environment `foundry-dev-tools` is installed.

**Expert Setting** 
If you are using oAuth2 to login to Foundry set the following entries into your `~/.claude/settings.json` file. Claude Code will trigger the apiKeyHelper every 30 minutes to ask for a new, short-lived access token:

```json
{
    "env": {
        "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
        "CLAUDE_CODE_API_KEY_HELPER_TTL_MS": "3000000",
        "ANTHROPIC_BASE_URL": "https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic"
    },
    "apiKeyHelper": "/Users/<user>/miniforge3/envs/foundry-dev-tools/bin/python -c 'from foundry_dev_tools import FoundryContext; ctx = FoundryContext(); print(ctx.token)'"
}
```

Replace `/Users/<user>/miniforge3/envs/jupyter/bin/python` with the path to the python interpreter in which environment `foundry-dev-tools` is installed.

4. SSL Configuration
- Follow the [SSL setup instructions](https://dc-onboarding.apps.p.uptimize.merckgroup.com/01-03_ssl-certificates.html) here.

5. Launch Claude Code
- Run `claude` in your terminal to get started.

**Note:** Claude Code is able to fetch web pages with the `WebFetch` tool, after the user grants the permission. Merck's AI Whitelist firewall will block the request to https://claude.ai/api/web/domain_info?domain= to avoid exposing potentialy sensitive information to Anthrophic.

To get the web search tool working, you can add 

```json
{
  "skipWebFetchPreflight": true
}
```

to your Claude Code Config file (usually `~/.claude/settings.json`). It is import that you carefully examine the websites Claude Code tries to retrieve.

### OpenCode

OpenCode is an open source coding agent for terminal-first workflows. It supports Anthropic-compatible providers and can be configured to route requests through UPTIMIZE Bedrock APIs or through the UPTIMIZE Foundry Anthropic proxy.

#### Install OpenCode (macOS and Windows)

1. Install OpenCode on **macOS**:

   - `curl -fsSL https://opencode.ai/install | bash`
   - or `brew install anomalyco/tap/opencode`

2. Install OpenCode on **Windows PowerShell**:

   - `choco install opencode`
   - or `scoop install opencode`
   - or `npm install -g opencode-ai`

3. Verify installation:

   - `opencode --version`

#### Configure OpenCode for UPTIMIZE Anthropic models

1. Create or update `~/.config/opencode/opencode.json` (Windows PowerShell: `$env:USERPROFILE\.config\opencode\opencode.json`).

2. Add providers for both UPTIMIZE routes (Bedrock and Foundry) so you can switch models without reworking the config.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "uptimize-bedrock": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Uptimize Bedrock",
      "options": {
        "baseURL": "{env:UPTIMIZE_API_BASE_URL}",
        "apiKey": "{env:UPTIMIZE_BEDROCK_API_KEY}",
        "headers": {
          "openai-standard": "True"
        }
      },
      "models": {
        "eu.anthropic.claude-sonnet-4-5-20250929-v1:0": {
          "name": "Claude Sonnet 4.5"
        },
        "eu.anthropic.claude-haiku-4-5-20251001-v1:0": {
          "name": "Claude Haiku 4.5"
        }
      }
    },
    "uptimize-foundry": {
      "npm": "@ai-sdk/anthropic",
      "name": "Uptimize Foundry",
      "options": {
        "baseURL": "{env:FOUNDRY_LMS_URL}/v1",
        "apiKey": "{env:FOUNDRY_AUTH_TOKEN}",
        "headers": {
          "Authorization": "Bearer {env:FOUNDRY_AUTH_TOKEN}"
        }
      },
      "models": {
        "claude-opus-4-6": {
          "name": "Claude Opus 4.6"
        },
        "claude-sonnet-4-5-20250929": {
          "name": "Claude Sonnet 4.5"
        },
        "claude-haiku-4-5-20251001": {
          "name": "Claude Haiku 4.5"
        }
      }
    }
  },
  "model": "uptimize-foundry/claude-sonnet-4-5-20250929",
  "small_model": "uptimize-foundry/claude-haiku-4-5-20251001"
}
```

3. Obtain the required tokens (you can configure both routes together).

    - For the UPTIMIZE Bedrock route:
      - A list of available Uptimize Bedrock APIs can be found under [Bedrock LLM Models](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/bedrock_api/chat_and_embedding_models/).
      - Request your API key from Uptimize NLP Service via [Token Request Form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).
      - Request at least `/bedrock` permissions.

    - For the UPTIMIZE Foundry route:
      - Create a new token for your Foundry account [here](https://palantir.mcloud.merckgroup.com/workspace/settings/tokens) and copy it to the clipboard.

4. Configure shell environment variables.

**macOS/Linux (bash/zsh)**

```bash
# Foundry route
export FOUNDRY_LMS_URL="https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic"
export FOUNDRY_AUTH_TOKEN="<your-foundry-token>"
# Bedrock route
export UPTIMIZE_API_BASE_URL="https://api.nlp.p.uptimize.merckgroup.com/model/"
export UPTIMIZE_BEDROCK_API_KEY="<your-uptimize-bedrock-api-key>"
```

**Windows PowerShell**

```powershell
# Foundry route
[Environment]::SetEnvironmentVariable("FOUNDRY_LMS_URL", "https://palantir.mcloud.merckgroup.com/language-model-service/api/proxy/anthropic", "User")
[Environment]::SetEnvironmentVariable("FOUNDRY_AUTH_TOKEN", "your_foundry_token_here", "User")
# Bedrock route
[Environment]::SetEnvironmentVariable("UPTIMIZE_API_BASE_URL", "https://api.nlp.p.uptimize.merckgroup.com/model/", "User")
[Environment]::SetEnvironmentVariable("UPTIMIZE_BEDROCK_API_KEY", "your_uptimize_bedrock_api_key", "User")
```

Restart your terminal after setting user-level environment variables.

5. SSL Configuration
- Follow the [SSL setup instructions](https://dc-onboarding.apps.p.uptimize.merckgroup.com/01-03_ssl-certificates.html) here.

6. Start OpenCode:

```bash
opencode
```

7. In OpenCode, run `/models` and pick models from one or both providers:

   - `uptimize-foundry/claude-opus-4-6`
   - `uptimize-foundry/claude-sonnet-4-5-20250929`
   - `uptimize-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0`

#### Notes and troubleshooting

- Keep secrets in shell variables or secret files. Do not hardcode API keys in `opencode.json`.
- Bedrock and Foundry are not mutually exclusive; if both token/env-var sets are present, both provider model lists are available in `/models`.
- If models do not appear, run `opencode auth list` and verify the selected provider IDs match your `opencode.json` keys.
- In current Uptimize shell setups, you may already have `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` and `DISABLE_TELEMETRY=1` exported for Claude Code.
- On Windows, `opencode.json` is typically stored under `$env:USERPROFILE\.config\opencode\opencode.json`.

### Cline

Cline is an open source AI coding agent that brings frontier AI models directly to your IDE. Unlike autocomplete tools, Cline is a true coding agent that can understand entire codebases, plan complex changes, and execute multi-step tasks autonomously. It can read files, make edits, run commands, and interact with your development environment to complete complex programming tasks.

#### Point Cline to the AI/ML Services APIs

1. **Install Cline Extension**

  - Open **VS Code**
  - Go to the **Extensions** panel in the sidebar
  - Search for "**Cline**"
  - Click **Install** to add the extension to your environment

2. **Obtain AWS Bedrock API Key**

  - A list of available Uptimize Bedrock APIs can be found under [Bedrock LLM Models](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/bedrock_api/chat_and_embedding_models/#available-models)
  - Request your API key from Uptimize NLP Service via [Token Request Form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da)
  - Request at least `/bedrock` permissions

3. **Configure Cline**

  - Click on the **Cline icon** in the VSCode sidebar
  - Select **'Use your own API key'** and configure the following settings:

4. **API Configuration**

  - **API Provider:** `OpenAI Compatible`
  - **Base URL:** `https://api.nlp.p.uptimize.merckgroup.com/model/` (use `.dev.` for development or `.p.` for production)
  - **OpenAI Compatible API Key:** `<Your AI/ML Service API Key>`
  - **Model ID:** `anthropic.claude-sonnet-4-20250514-v1:0`
      
Pick a model from the [available Bedrock options](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/bedrock_api/chat_and_embedding_models/#available-models)

5. **Add Custom Headers**

  Configure the following custom headers:
  - Header Name: `openai-standard` Value: `True`
  - Header Name: `api-key` Value: `{api-key}` 

⚠️ **Important:** Enter the placeholder `{api-key}` literally, do not enter your actual API key here.

6. **Disable Telemetry**

In the Cline settings, uncheck the checkbox `Allow error and usage reporting`.

7. **SSL Configuration**

  - Follow the [SSL setup instructions](https://dc-onboarding.apps.p.uptimize.merckgroup.com/01-03_ssl-certificates.html) to ensure proper certificate handling

### Codex 

You can use any IDE. Right now, steps are shown using VS CODE terminal.

1. **VS Code Terminal**:

  - Open **VS Code** Select the working folder: File → Open Folder → Select your working folder
  - Create a new terminal (View → Terminal → New Terminal -> cmd)
  - In the cmd, paste: npm install -g @openai/codex

2. **Installation Notes**:

  - npm install -g @openai/codex (Global Installation) (Config file also needs to be in C drive)
  - Installs Codex globally on your machine; permanent install; may need admin rights. If you do not have admin rights, go for local installation
  - npm install @openai/codex (Local Installation)
  - Installs Codex only in this project -- not global. local folder, no C drive needed, also for config file too - Local .

3. **Create Configuration File**:

  - In the C drive - Global installation, Local drive - Local installation
  - create configuration file directory & change directory to codex folder & create a config.toml file.
  - mkdir %USERPROFILE%\.codex   → creates folder named "codex" inside your C:\Users; For Local "Its the present working directory"
  - cd %USERPROFILE%\.codex      → goes inside the folder (If it's a global installation, keep it in C drive; for local, you can keep the file in the local folder.)  
  - notepad %USERPROFILE%\.codex\config.toml  → opens config file in Notepad in C drive. For local notepad config.toml

4. **config.toml**:


##### .toml Config File

````toml
In the opened Notepad config file, paste the below and Save & Close:

Model configuration - choose from available UPTIMIZE models
model = "gpt-5" # or "gpt-5-codex-gs", "gpt-5-mini"  refer available models - https://docs.uptimize.merckgroup.com/aiml/aiml_apis/openai_api/#available-models
model_provider = "azure"
model_reasoning_effort = "medium" # Options: "low", "medium", "high"
[model_providers.azure]
name = "UPTIMIZE Azure OpenAI"
base_url = "https://api.nlp.dev.uptimize.merckgroup.com/openai/v1"  # Use "p" for PROD
env_key = "UPTIMIZE_API_KEY"
wire_api = "responses"
  
````

5. **Set Token / env key**:

  - Run the command below (providing token) in cmd & close the terminal (or provide env key in the config file):
  - setx UPTIMIZE_API_KEY "Your token generated"
  - setx UPTIMIZE_API_KEY "ec............5b8"

6. **Run Example**:

  - Open a new terminal, go to cmd and paste:
  - npx codex "write a python function to calculate fibonacci numbers"

---

# UPTIMIZE Vector Database

Vector databases are of crucial importance in the context of large language models (LLMs) due to their ability to efficiently store and retrieve high-dimensional vectors representing complex data. LLMs rely on vectors to encode and represent words, phrases, and documents, which enables them to perform tasks such as language understanding, translation, and summarization.

By leveraging vector databases, LLMs can quickly retrieve relevant vector embeddings, compare similarities between vectors, and perform complex operations such as nearest neighbor search and clustering. This enables LLMs to effectively process and understand natural language, making them invaluable for a wide range of applications in natural language processing, information retrieval, and knowledge representation.

As part of the UPTIMIZE AI-ML offering, we have integrated [Qdrant](https://qdrant.tech/) Vector Database as part of our tech stack, enabling the users to harness its capabilities and utilize for their respective use-cases.

## Important Notes
- The UPTIMIZE Vector Database is ready to be used with confidential data.
- It is strongly advised to store the API key and Vector DB key securely. For example, you can use enterprise password manager applications with encryption (e.g. AWS Secrets Manager or AppService runtime configuration).
- Usage of **Personal Identifiable Information (PII)** follows the same instructions as when using myGPT Suite. See T&C [Section 5](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions). You are allowed to index contents which incidentally contains PII but you must not explicitly analyse or prompt in a way intended to retrieve or generate information which contains PII. We strongly recommend refraining from indexing PII as meta-data fields. PII embodied within text chunks may occur which is acceptable. If your use case requires deviating from earlier mentioned instructions, please reach out to the Data Privacy Office for guidance.
  
## Register your use case and apply for the Vector DB token
Please follow these steps:
1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).
2. Apply for the Vector DB token and collection namespace [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

## Environments
Vector Database is available in both development (DEV) and production (PROD) environments. We strongly encourage users to use DEV environment for experimental purposes. For production-like applications or higher workloads, please use PROD environment.

**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**

**Deletion of the collection is possible only in DEV environment using the CRUD token**

## Please keep in mind the following while filling the form
- The provided token grants only the necessary permissions for the user to operate with the collection name. The user must **explicitly create the collection** using the collection name provided in the confirmation email, along with use-case-specific configurations such as **vectors_config, hnsw_config, and quantization_config etc.,**. You can find an example code snippet for creating a collection [here.](https://qdrant.tech/documentation/concepts/collections/#create-a-collection)
- If the user who is requesting for the token does not have access to the specific use-case in Foundry, then the user won't be able to request for the token or be able to submit the form.
- If this is the first time the user is requesting for the collection namespace and authentication token, please select the CRUD role.
- For the CRUD role, the authentication token will be provided only once for the specific use-case and collection name (i.e. the first time when the user is requesting for the token for that specific collection name).
- For the Read role, the authentication token can be requested multiple times for the specific use-case and collection name.
- If you would like to create a collection with different name prefix, you may submit a new form but please keep in mind that once submitted, no changes in the requested role and collection name prefix can be made.
- A maximum of five collection namespaces can be created per use-case.

## Code Examples

**Using the Qdrant vector database incurs costs.** For early proof of concept purposes, we recommend using the Qdrant In-memory client to minimize expenses. Once you are ready to build and industrialize your application, you can transition to using the UPTIMIZE instance of the vector database. 

<details>
<summary><b>Qdrant Client (in-memory and local storage)</b></summary>

The example below demonstrates how to initialize Qdrant in-memory. In this scenario, your vectors are not persisted into the database (collection) but are stored in local temporary storage where your application is running.

```python
from qdrant_client import QdrantClient

client = QdrantClient(":memory:")
```

You can also persist the vectors in your device's local disk by providing a path as shown in the example given below.

```python
client = QdrantClient(path="path/to/db")  # Persists changes to disk
```
</details>
</br>

<details>
<summary><b>Qdrant Client (Cloud Instance by UPTIMIZE)</b></summary>

For avoiding SSL related issues, please run the below code examples in AWS Lab environment.

```python
# Import the required packages
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, HnswConfigDiff
from qdrant_client.models import PointStruct
import openai
from openai import AzureOpenAI
from datasets import load_dataset
import pandas as pd
from tqdm import tqdm


# Loading sample dataset from HuggingFace Datasets
dataset = load_dataset("ag_news", split="test")
df = pd.DataFrame(dataset)[0:500] # Taking first 500 records from dataset for quick execution


# Create a function with Nomic Embeddings for comupting embeddings
# Nomic Embeddings is an open-source embeddings model, recently made available as an API by UPTIMIZE NLP
# Please apply for an NLP API token to utilize the Nomic embeddings for your use-case 
# Or you may also edit your exisitng token request to include Nomic embeddings
# Embeddings can also be computed via models from other providers like OpenAI, Amazon, etc.
def get_embeddings(sentence):
    api_url = "https://api.nlp.{env}.uptimize.merckgroup.com/nomic/v1/embeddings"
    headers = {"x-api-key": nlp_api_key} # Please do not store API key directly in the code
    payload = {"input": sentence}
    return requests.post(api_url, json=payload, headers=headers).json()[0]['embedding']

vector_size = len(get_embeddings("dummy text to get size of the dimension value of embeddings"))


# Initializing Qdrant client with url and token received in the mail
url = "https://api.nlp.{env}.uptimize.merckgroup.com"
vec_api_key = "your vectordb token"  # never store the key in your code
qdrant_client = QdrantClient(
    url=url,
    api_key=vec_api_key
)


# Create collection with name recevied in the mail
collection_name = "<-- collection name received in mail -->"
qdrant_client.create_collection(
    collection_name=collection_name,
    vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE, on_disk=True),
    hnsw_config=HnswConfigDiff(on_disk=True)
)


# Upserting 500 records in batches of 100 records each
# You may experiment with these numbers but as best practice, please keep the batch size to a maxiumum of 1000 while upserting
for i in tqdm(range(0,500,100)):
    points = [PointStruct(
        id=idx, vector=get_embeddings(df['text'][idx]),
        payload={"text": df['text'][idx]})
        for idx in range(i,i+100)]
    qdrant_client.upsert(collection_name=collection_name, points=points)


# Get count of collection
qdrant_client.count(collection_name=collection_name)


# Delete collection
#client.delete_collection(collection_name=collection_name)


# Perform search operation on the upserted text
query_vector = get_embeddings("chemistry research")
qdrant_client.search(
    collection_name=collection_name,
    query_vector=query_vector,
    limit=5  # Return 5 closest points
)
```
</details>
</br>

<details>
<summary><b>Qdrant with Langchain (Cloud Instance with UPTIMIZE)</b></summary>

For avoiding SSL related issues, please run the below code examples in AWS Lab environment

```python
from langchain_openai.embeddings.azure import AzureOpenAIEmbeddings
from langchain_community.vectorstores import Qdrant
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, HnswConfigDiff

from datasets import load_dataset
import pandas as pd
import os


# Loading sample dataset from HuggingFace Datasets
dataset = load_dataset("ag_news", split="test")
df = pd.DataFrame(dataset)[0:500] # Taking first 500 records from dataset for quick execution


# Initialize AzureOpenAI parameters and variables for comupting embeddings
# Please feel free to utilize embeddings from other providers like HuggingFace, Amazon, etc.
os.environ["AZURE_OPENAI_ENDPOINT"] = "https://api.nlp.{env}.uptimize.merckgroup.com"
os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2023-09-01-preview"
os.environ["AZURE_OPENAI_API_KEY"] = "your NLP API token" # never store your API token in your code

# Initialize the AzureOpenaAIEmbeddings function from Langchain
llm_embedding = AzureOpenAIEmbeddings(deployment="text-embedding-ada-002-v2")


# Initializing Qdrant client with url and token received in the mail
url = "https://api.nlp.{env}.uptimize.merckgroup.com"
api_key = "your vectordb token" # never store the token in your code
qdrant_client = QdrantClient(
    url = url,
    api_key = api_key
)


# Create collection and pass embedding function with Qdrant client from Langchain
collection_name = "collection name received in mail"
qdrant_vectordb = Qdrant(
    client=qdrant_client, collection_name=collection_name, 
    embeddings=llm_embedding,
)

# Upsert the text into Qdrant
qdrant_vectordb.from_texts(
    df['text'],
    llm_embedding,
    url=url,
    api_key=api_key,
    collection_name=collection_name,
    on_disk=True,
    hnsw_config=HnswConfigDiff(on_disk=True)
)


# Get count of collection
qdrant_vectordb.client.count(collection_name=collection_name)


# Delete collection
#qdrant_vectordb.client.delete(collection_name=collection_name)


# Perform search operation on the upserted text 
query = "chemistry research"
qdrant_vectordb.similarity_search(query)
```
</details>
</br>

<details>
<summary><b>Qdrant in Foundry and AppService</b></summary>

For utilizing Qdrant Vector DB in AppService, the authentication token would not be automatically provisioned for AppService instance and the user would rather have to request for the token as shown above. Users are adviced to use AppService [runtime configuration](https://docs.uptimize.merckgroup.com/appservice/best-practices-app-service/#runtime-configuration) to store their respective authentication token. 

The user would need to use the following code snippet for initializing the Qdrant client in Foundry and AppService.

```python
from qdrant_client import QdrantClient

qdrant_client = QdrantClient(
    url="https://api.nlp.{env}.uptimize.merckgroup.com:443",
    api_key="your vectordb token",
    prefix="uptimize_nlp",
)
```

There are two modifications in the above code snippet
- Port 443 is added against the URL as that port is exposed with Foundry and AppService.
- "prefix" parameter has been added in the client function.
</details>

## Pagination
It is not recommeneded to retrieve large number of records (>100) from the Vector DB all at once as it may cause performance issues and eventually run into errors. Instead, pagination strategy can be applied here where the idea is to skip first results of the search and return only the result starting from some specified offset:

<details>
<summary>Click to view the code</summary>

```python
# Initializing Qdrant client with url and token received in the mail
url = "https://api.nlp.{env}.uptimize.merckgroup.com"
vec_api_key = "your vectordb token"  # never store the key in your code
qdrant_client = QdrantClient(
    url=url,
    api_key=vec_api_key
)

def get_embeddings(sentence):
    api_url = "https://api.nlp.{env}.uptimize.merckgroup.com/nomic/v1/embeddings"
    headers = {"x-api-key": nlp_api_key} # Please do not store API key directly in the code
    payload = {"input": sentence}
    return requests.post(api_url, json=payload, headers=headers).json()[0]['embedding']

collection_name = "collection name received in mail"
query_vector = get_embeddings("your search query")
qdrant_client.search(
    collection_name=collection_name,
    query_vector=query_vector,
    with_vectors=True,
    with_payload=True,
    limit=10,
    offset=100,
)
```

This is equivalent to retrieving the 11th page with 10 records per page.

</details>
</br>

**Large offset values may cause performance issues**

Vector-based retrieval in general and HNSW index in particular, are not designed to be paginated. It is impossible to retrieve Nth closest vector without retrieving the first N vectors first.

However, using the offset parameter saves the resources by reducing network traffic and the number of times the storage is accessed.

Using an offset parameter, will require to internally retrieve offset + limit points, but only access payload and vector from the storage those points which are going to be actually returned.

## Web UI

A web interface for exploring and monitoring collections is available [here](https://qdrantui2.apps.p.uptimize.merckgroup.com/).

You need to provide your API key through the key button on top of the screen.

The web UI is maintained by [Tobias Plötz](mailto:tobias.ploetz@merckgroup.com).

## Advanced Usage of Qdrant Vector Database
For learning about and utilizing the advanced operations of Qdrant, please click [here](https://qdrant.tech/documentation/examples/).

## Support

If you face technical challenges, please mail your query to gpt-api@merckgroup.com.

---

# UPTIMIZE LLM Traces


**LLM Traces**, powered by **Langfuse**, is a foundational technology for developers for tracing, evaluation, and monitoring of applications which leverage large language models under the hood. With LLM Traces, developers of LLM applications can track and trace fine-grained details such as API calls, models used, latencies, execution chains, tool calls, token consumption, costs, and many more. It also allows creating and managing evaluation datasets whether they are generated with expert inputs or bootstrapped with LLMs. Prompt version control is also a very useful feature to understand the evolution of system instructions and their releases to production. All these and many more features will be available within LLM Traces to help you build and deploy LLM applications with a higher level of transparency. LLM Traces runs as a self-hosted service within UPTIMIZE and provides users a secure way to access it.


## Steps to Create a New Project and Access LLM Traces

To gain access to LLM Traces, please follow the steps outlined below:

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc). 

2. Apply for the LLM Traces project by completing the request form [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

3. The requestor will receive confirmation regarding the creation of the project and assignment of admin access.

4. The project admin can add relevant members, viewers, or co-admins as needed. For more information, please refer to the [Langfuse RBAC policies](https://langfuse.com/docs/rbac#roles-and-scopes).

5. Access LLM Traces through the following URLs. For DEV environment [use](https://llm-traces.dev.uptimize.merckgroup.com), whereas for PROD environment [use](https://llm-traces.p.uptimize.merckgroup.com).
---

### How to Raise a Feature Request or Share Feedback?

As a user, you can use the [UPTIMIZE Feature Forum](https://merckgroup.canny.io/uptimize-llm-traces) to share feedback or request new features based on your experiences with LLM Traces. Below is a guide on how to use the feature forum to submit your requests and feedback.

<img src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/UPTIMIZEFeatureForum.png" alt="UPTIMIZE Feature Forum" width="600"/>


### Sample Code Snippet (Python) to Access LLM Traces

LLM Traces offers extensive documentation on tracing evaluations and monitoring for LLM applications. You can find the details [here](https://langfuse.com/docs/get-started).

#### Install the Required Packages

```bash
pip install langfuse openai
```
## Configuration
Create LLM Traces API Keys. Kindly refer [Link to LLM Traces login kit](https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/Langfuse_loginkit.pdf)

Set up your environment and configure LLM Traces as follows:

### Environment Variables

Ensure you set the required environment variables:  
The LLM Traces API is available in both development (DEV) and production (PROD) environments. We strongly recommend users to use DEV environment for experimental purposes. For production-like applications, please use PROD environment.  
**In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.**
```python
import os

os.environ["LANGFUSE_PUBLIC_KEY"] = "<Your_Langfuse_Public_Key>"
os.environ["LANGFUSE_SECRET_KEY"] = "<Your_Langfuse_Secret_Key>"
os.environ["LANGFUSE_HOST"] = "https://api.nlp.{env}.uptimize.merckgroup.com"
```

### API Key

Set up your API key for any external services you may be using (e.g., AzureOpenAI):

```python
UPTIMIZE_API_KEY = "<UPTIMIZE_API_Key>"
```

### Langfuse Configurations

Initialize the client using configuration for langfuse = Langfuse() when you need advanced control over LLM logging, such as customizing trace details, handling asynchronous requests, or implementing custom error handling. 
To start, initialize the client by providing your credentials. You can set the credentials either as environment variables or constructor arguments.
```python
# Create the Langfuse client
from langfuse import Langfuse

# Add additional header for llm-trace SDK
http_client = httpx.Client(headers={"llm-traces": "true"})

langfuse_client = Langfuse(
    secret_key=os.getenv("LANGFUSE_SECRET_KEY"),
    public_key=os.getenv("LANGFUSE_PUBLIC_KEY"),
    httpx_client=http_client,
    host=os.getenv("LANGFUSE_HOST")
)

# Verify the client setup
langfuse_client.auth_check()
```

<details>
<summary><b>AzureOpenAI Integration with LLM Traces (Langfuse): A Sample Code</b></summary>

```python
from langfuse.openai import AzureOpenAI
from langfuse import observe, Langfuse
import httpx

# Add additional header for llm-trace SDK
http_client = httpx.Client(headers={"llm-traces": "true"})

# Configure the Langfuse client
# These details will be available within the settings page of the project
langfuse_client = Langfuse(
    secret_key="sk-lf-<Your_Secret_Key>",
    public_key="pk-lf-<Your_Public_Key>",
    httpx_client=http_client,
    host="https://api.nlp.{env}.uptimize.merckgroup.com" #In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.
)

# Configure the AzureOpenAI client
client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com", #In the endpoint url, replace {env} with "dev" or "p" for using DEV or PROD respectively.
    api_key="<UPTIMIZE_API_KEY>",
    api_version="2024-05-14"
)

# Sample function to generate a story
@observe()
def story(prompt):
    return client.chat.completions.create(
        model="gpt-4o",     #Use any uptimize supported model
        max_tokens=100,
        messages=[
            {"role": "system", "content": "You are a great storyteller."},
            {"role": "user", "content": prompt}
        ]
    ).choices[0].message.content

@observe()
def main(prompt):
    return story(prompt)

input_prompt = "Once upon a time in a galaxy far, far away..."
main(input_prompt)
```
</details>

---


### Terms & Conditions

As a user or project admin of LLM Traces during this phase, you need to adhere to a set of terms and conditions including:

- Any traces or evaluations executed using the current release on DEV will not be migrated to the PROD environment by the product management team. It is responsibility of the user to migrate as per the need basis.
- We have received the ITK approval, here are some of the key things to keep in mind when using **PII with LLM Traces**:
  - **You are allowed to upload documents which may contain PII like author name, reviewer name, etc. You should not upload documents which contain list of names or similar personal identifiable information.**
    - **Allowed**: Uploading SOPs with author names, prompts asking "Please explain the process I need to follow when..."
    - **Not Allowed**: Uploading name lists, prompts asking "Who wrote the SOP?", uploading email lists, etc.
  - **The objective of prompts or tasks should not be to explicitly retrieve or analyze names or similar personally identifiable information.**
- Always use the [Feature Forum](https://merckgroup.canny.io/uptimize-llm-traces) to share your comments or report bugs. Do not send any feedback over Teams or Outlook.




---

---

# Introduction to LLM Traces

LLM Traces provides a powerful observability framework for tracking, managing, and analyzing traces within your large language model (LLM) workflows. By capturing traces and logging events, it offers deep insights into how applications perform and interact with users. This document will guide you through working with LLM traces, setting up integrations, and managing scoring, datasets, and prompt templates.


## Traces

A **trace** is a fundamental concept representing a single operation or request in your LLM system. Each trace contains its input, output, and metadata, such as user data, session info, and tags. It can also include multiple **observations** of events or spans within the trace.

### Creating a Trace

To create a trace, you can use the `@observe` decorator in Langfuse, which will automatically capture the duration, nesting, function name, input, and output of the trace.

```python
from langfuse import observe

@observe()
def story():
    return "{sample_text}"

@observe()
def main():
    return story()

main()
```

### Updating a Trace

Traces can be dynamically updated with metadata such as user ID, session ID, tags, and trace names.

```python
from langfuse import observe, Langfuse

# Add additional header for llm-trace SDK
http_client = httpx.Client(headers={"llm-traces": "true"})

langfuse_client = Langfuse(
    secret_key=os.getenv("LANGFUSE_SECRET_KEY"),
    public_key=os.getenv("LANGFUSE_PUBLIC_KEY"),
    httpx_client=http_client,
    host=os.getenv("LANGFUSE_HOST")
)

@observe()
def fn():
    langfuse_client.update_current_trace(
        user_id="{unique identifier to maintain audit trail}",
        session_id="{unique session ID to log traces in a session}",
        tags=["tag1", "tag2"]
    )
    print(langfuse_client.get_current_trace_url())  # Get trace URLs
 
fn()
```

### Best Practices for `user_id`, `session_id`, `tags`, and `trace_name`

- **user_id**: Ensure that the user ID is unique and consistent across sessions to maintain a clean audit trail.
- **session_id**: Use a unique session identifier to group a set of traces related to the same session.
- **tags**: Use tags to categorize traces by pipeline, module, or other relevant names, making it easier to search and differentiate them.
- **trace_name**: Consider setting meaningful trace names that represent the operation or request being tracked.

**Note:** Avoid using MUID/XUID or Merck email id as user_id in llm traces.

---

# Scores

LLM Traces allows for flexible scoring of both traces and individual observations, which can be done inside or outside the trace context.

### Simple Scoring

```python
langfuse_client.score_current_observation(
    name="feedback-on-span",
    value=1
)
```

### LLM as a Judge

You can run your own model-based evaluations on data in LLM traces (e.g., via the Python SDK) and then adding evaluation results as scores back to the traces. This approach allows you to run various evaluation libraries on your production data, giving you flexibility to discover which methods work best for your specific use case.

#### Key Steps in Building an External Evaluation Pipeline

This section provides an overview of building an external evaluation pipeline. The pipeline will run in your environment of choice. There are three key steps:

1. **Fetch Your Traces**: Retrieve your application traces from LLM Traces for evaluation.
2. **Run Your Evaluations**: Apply any custom evaluation logic you prefer.
3. **Save Your Results**: Attach the evaluations as scores back to the original traces.

The following tutorial demonstrates these steps, with the goal of evaluating 50 traces from the previous day, every day at 5 am. In this tutorial, we'll use the Deepeval framework to handle our evaluations. 

---

#### 1. Fetch Your Traces

Fetching traces from LLM traces is straightforward. The `fetch_traces()` function allows you to filter traces by tags, timestamps, and other parameters. You can also paginate through traces in batches to process them incrementally.

Here is how you can fetch the first batch of 10 traces:

```python
from langfuse import Langfuse
from datetime import datetime, timedelta

BATCH_SIZE = 10
TOTAL_TRACES = 50

langfuse = Langfuse(
    secret_key=os.getenv("LANGFUSE_SECRET_KEY"),
    public_key=os.getenv("LANGFUSE_PUBLIC_KEY"),
    httpx_client=http_client,
    host=os.getenv("LANGFUSE_HOST")
)

now = datetime.now()
five_am_today = datetime(now.year, now.month, now.day, 5, 0)
five_am_yesterday = five_am_today - timedelta(days=1)

traces_batch = langfuse.fetch_traces(page=1,
                                     limit=BATCH_SIZE,
                                     tags="ext_eval_pipelines",
                                     from_timestamp=five_am_yesterday,
                                     to_timestamp=datetime.now()
                                    ).data

print(f"Traces in first batch: {len(traces_batch)}")
```

This script fetches the first batch of traces tagged with `"ext_eval_pipelines"`. You can adjust the timestamps and tags as needed.

---

#### 2. Run Your Evaluations

Evaluations can be performed using various methods. LLM traces supports numeric, boolean, and categorical scores. Wrapping your custom evaluation logic in functions makes the process more modular and reusable.

##### 2.1. Categorical Evaluations

Let's start with a simple evaluation where we assess the tone of LLM outputs. We will define a prompt template that helps identify three main tones from the model output.

```python
template_tone_eval = """
You're an expert in human emotional intelligence. Identify the tones present in the following text.
Output a comma-separated list of three tones.

<possible_tones>
neutral, confident, joyful, optimistic, friendly, urgent, analytical, respectful
</possible_tones>

<text>
{text}
</text>
"""
client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-02-01"
)
test_tone_score = client.chat.completions.create(
    messages=[
        {"role": "user", "content": template_tone_eval.format(text=traces_batch[1].output)}
    ],
    model="<model>",  #Use any uptimize supported model
    temperature=0
).choices[0].message.content

print(f"Dominant tones: {test_tone_score}")
```

Wrap this in a function to make it easier to reuse:

```python
def tone_score(trace):
    return client.chat.completions.create(
        messages=[
            {"role": "user", "content": template_tone_eval.format(text=trace.output)}
        ],
        model="<model>", #Use any uptimize supported model
        temperature=0
    ).choices[0].message.content

tone_score(traces_batch[1])
```

##### 2.2. Numeric Evaluations

For a numeric evaluation, you can use an evaluation framework like Deepeval to calculate specific scores (e.g., joyfulness of a response). Here's an example of how to define a custom score using Deepeval:



```python
from deepeval.metrics import GEval
from deepeval.test_case import LLMTestCaseParams, LLMTestCase

!deepeval set-azure-openai --openai-endpoint="https://api.nlp.{env}.uptimize.merckgroup.com" \
    --openai-api-key="" \
    --deployment-name="gpt-4o" \  #Use any uptimize supported model deployment name
    --openai-api-version="2024-02-01" \
    --model-version="gpt-4o"  #Use any uptimize supported model version
    
def joyfulness_score(trace):
    joyfulness_metric = GEval(
        name="Joyfulness",
        criteria="Determine if the output is engaging and fun.",
        evaluation_params=[LLMTestCaseParams.ACTUAL_OUTPUT],
    )
    test_case = LLMTestCase(input=trace.input["args"], actual_output=trace.output)
    joyfulness_metric.measure(test_case)
    
    return {"score": joyfulness_metric.score, "reason": joyfulness_metric.reason}

joyfulness_score(traces_batch[1])
```

This function computes a score and provides reasoning for the score, which helps in interpreting the results.


---
#### 3. Pushing Scores to Langfuse

Once the evaluation functions are defined, you can push the scores back to the relevant traces in LLM traces. Here's how to add a tone evaluation score:

```python
langfuse.score(
    trace_id=traces_batch[1].id,
    name="tone",
    value=tone_score(traces_batch[1]),
    comment="Evaluation of tone"
)
```

For numeric scores, you can include both the score and the reasoning:

```python
joyfulness = joyfulness_score(traces_batch[1])
langfuse.score(
    trace_id=traces_batch[1].id,
    name="joyfulness",
    value=joyfulness["score"],
    comment=joyfulness["reason"]
)
```

---

#### 4. Putting Everything Together

Let's combine the fetching, evaluating, and scoring processes into a complete pipeline. The following script fetches 50 traces in batches of 10, evaluates each trace, and pushes the scores back to LLM traces (Langfuse).

```python
import math

for page_number in range(1, math.ceil(TOTAL_TRACES / BATCH_SIZE)):
    traces_batch = langfuse.fetch_traces(
        tags="ext_eval_pipelines",
        page=page_number,
        from_timestamp=five_am_yesterday,
        to_timestamp=five_am_today,
        limit=BATCH_SIZE
    ).data

    for trace in traces_batch:
        if trace.output is None:
            print(f"Trace {trace.name} had no output, skipping")
            continue

        langfuse.score(
            trace_id=trace.id,
            name="tone",
            value=tone_score(trace)
        )

        joyfulness = joyfulness_score(trace)
        langfuse.score(
            trace_id=trace.id,
            name="joyfulness",
            value=joyfulness["score"],
            comment=joyfulness["reason"]
        )

    print(f"Batch {page_number} processed")
```

This script processes the traces in batches and pushes the evaluation results back to LLM Traces.

---

By scheduling this pipeline to run daily , you can automate the evaluation of your LLM outputs and keep track of model performance using LLM Traces.



### Human in the Loop - Feedback

LLM Traces supports human feedback loops, allowing users to rate or comment on specific spans or entire traces:

```python
langfuse_client.score_current_trace(
    name="feedback-on-trace",
    value=1,
    comment="{Personalized response}"
)
```

---

---

## Datasets

LLM Traces enables you to create and manage datasets, which are critical for evaluating and benchmarking model performance. Each dataset can contain multiple items, and LLM Traces provides a range of tools for adding, managing, and running experiments on these datasets.

### Creating a Dataset

To create a new dataset, provide a unique name and optional metadata. You can also include a description to provide context about the dataset.

```python
langfuse.create_dataset(
    name="<dataset_name>",
    description="My first dataset",  # Optional
    metadata={                        # Optional metadata
        "author": "Alice",
        "date": "2022-01-01",
        "type": "benchmark"
    }
)
```

This creates a new dataset within your LLM Traces project. Be sure to use unique names to prevent conflicts.

### Creating Dataset Items

You can add individual items to your dataset by specifying the input and expected output. These items can then be used to run experiments and evaluate your model.

```python
langfuse.create_dataset_item(
    dataset_name="<dataset_name>",
    input={"text": "hello world"},  # Optional input
    expected_output={"text": "hello world"},  # Optional expected output
    metadata={"model": "__"}  # Optional metadata
)
```

You can add as many items as needed for evaluation purposes.

### Running Experiments on a Dataset

When running an experiment on a dataset, each dataset item is processed by your application, and an execution trace is generated and linked to the corresponding item. This allows you to track and compare different runs of your application on the same dataset.

```python
dataset = langfuse.get_dataset("<dataset_name>")

for item in dataset.items:
    # Make sure your application function is decorated with @observe decorator to automatically link the trace
    with item.observe(
        run_name="<run_name>",
        run_description="My first run",
        run_metadata={"model": " "},
    ) as trace_id:
        # Run your @observe() decorated application on the dataset item input
        output = my_llm_application.run(item.input)

        # Optionally, evaluate the output to compare different runs more easily
        langfuse.score(
            trace_id=trace_id,
            name="<example_eval>",
            value=my_eval_fn(item.input, output, item.expected_output),  # Any float value
            comment="This is a comment",  # Optional, useful to add reasoning
        )

# Flush the langfuse client to ensure all data is sent to the server at the end of the experiment run
langfuse.flush()
```

### Evaluating Outputs

LLM Traces supports evaluation during the experiment run by allowing you to score the output for each trace and observation. You can either:

1. **Use custom evaluation functions**: Implement your own evaluation logic and add scores based on the result.
2. **Leverage model-based evaluation**: Set up LLM Traces to automatically evaluate outputs based on pre-defined metrics or model judgments.

By comparing different runs of the same application on the dataset, you can gain valuable insights into model performance and improvement over time.

For more details, please refer [Langfuse Documentation](https://langfuse.com/docs/datasets/overview)
---

---

## Prompt Management

### Creating a Prompt Template from UI
Here is the video , how can you create prompt template

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/prompt_UI.mp4" type="video/mp4">
  
</video>

### Creating a Prompt Template through program

To create a new prompt template programmatically, use the `create_prompt` method. Define the structure of your prompt and include any necessary configurations.

```python
langfuse_client.create_prompt(
    name="story_summarization2",
    prompt="Extract the key information from this text and return it in JSON format. Use the following schema: {{json_schema}}",
    config={
        "model": "<model>",
        "temperature": 0,
        "json_schema": {
            "main_character": "string (name of protagonist)",
            "key_content": "string (1 sentence)",
            "keywords": "array of strings",
            "genre": "string (genre of story)",
            "critic_review_comment": "string (write similar to a new york times critic)",
            "critic_score": "number (between 0 bad and 10 exceptional)"
        }
    },
    labels=["production"]
)
```

This creates a structured prompt template that can be used across different contexts. Ensure that you set the correct labels (e.g., "production") for easy tracking.

### Retrieving a Prompt Template

LLM Traces allows you to retrieve prompt templates programmatically and insert variables dynamically:

```python
# Get the current production version of a text prompt
prompt = langfuse_client.get_prompt("Movie_critic")

# Insert variables into the prompt template
compiled_prompt = prompt.compile(movie="Dune 2")
```

In the above example, the `get_prompt` method retrieves the prompt, and `compile` is used to substitute specific variables like "movie" into the template.

### Logging the Generations with Templates

LLM Traces provides built-in support for logging generations using the `@observe` decorator. By setting the observation type to `"generation"`, you can capture the prompt and its resulting output in the LLM trace.

```python
from langfuse import Langfuse, observe

# Add additional header for llm-trace SDK
http_client = httpx.Client(headers={"llm-traces": "true"})

langfuse_client = Langfuse(
    secret_key=os.getenv("LANGFUSE_SECRET_KEY"),
    public_key=os.getenv("LANGFUSE_PUBLIC_KEY"),
    httpx_client=http_client,
    host=os.getenv("LANGFUSE_HOST")
)

@observe(as_type="generation")
def nested_generation():
    prompt = langfuse_client.get_prompt("Movie_critic")
 
    langfuse_client.update_current_observation(
        prompt=prompt,
    )

@observe()
def main():
    nested_generation()

main()
```

This automatically logs the prompt generation, including the prompt template and the final output, making it easy to monitor and evaluate the results in a trace.

### Using the Prompt with Azure OpenAI

You can use the retrieved and compiled prompt template to interact with Azure OpenAI, ensuring that both the prompt and the generations are logged properly.

```python
import json
from langfuse.openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key="<Your_API_Key>",
    api_version="2024-02-01"
)

def summarize_story(story):
    json_schema_str = ', '.join([f"'{key}': {value}" for key, value in prompt.config["json_schema"].items()])
    system_message = prompt.compile(json_schema=json_schema_str)

    messages = [
        {"role": "system", "content": system_message},
        {"role": "user", "content": story}
    ]

    res = client.chat.completions.create(
        model=prompt.config["model"],
        temperature=prompt.config["temperature"],
        messages=messages,
        response_format={"type": "json_object"},
        langfuse_prompt=prompt  # Capture used prompt version in trace
    )
    
    return res.choices[0].message.content

STORY = """
In a bustling city where the nighttime glittered with neon signs and the rush never calmed, lived a lonely cat named Whisper...
"""

summary = summarize_story(STORY)
print(summary)
```

In this code, the prompt template is compiled, the JSON schema is formatted as part of the system message, and the prompt is used in an Azure OpenAI LLM call. The generations are logged back into LLM Traces for further analysis.

For more detail, please refer [Langfuse Documentation](https://langfuse.com/docs/prompts/get-started)
---

---

## Working with User Interface

LLM Traces provides a user-friendly UI for visualizing traces, scores, and managing LLM integrations.

### Visualizing a Trace

LLM Traces's UI offers a graphical representation of traces, making it easy to explore events, spans, and observations.

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/Tracing.mp4" type="video/mp4">
</video>

### Visualizing a Score

To use annotation, you need to create a score configuration. You can create multiple score configurations for different types of scores. Score configurations are immutable. However, you can archive configs if you no longer want to use them in annotation. Archived configs can be restored at any time.

**To create a score configuration:**

- Navigate to Settings, locate the Score Configs table, and click **Add new score config**.
- Specify the name of the score configuration and the type of score you want to create. You can choose between Categorical, Numeric, and Boolean score types.
- Optionally, add a description to provide additional context for your team members.

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/Score_Corrected.mp4" type="video/mp4">
</video>

## Annotation Queues

Annotation queues help manage and prioritize your annotation tasks, especially for large-scale projects requiring human-in-the-loop evaluation. 

**Create annotation queues:**  
Set up queues to specify which traces/observations to annotate. They are fully mutable and can be edited even after tasks are created.

**Populate annotation queues:**  
Assign traces or observations to queues via the trace table view using the Actions > Add to queue button or the Annotate dropdown in the detail view.

**Process annotation tasks:**  
Navigate to the Annotate tab to view and process annotation queues.

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/Queue_Labeling.mp4" type="video/mp4">
</video>

---

## Setting up LLM API Key

To configure LLM Traces to work with your UPTIMIZE LLM API keys. To request UPTIMIZE API key [follow here](aiml/):

Here is the demo video:

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/updated_LLMKey.mp4" type="video/mp4">
  
</video>

---

## Playground

You can either start from scratch or jump into the playground from an existing prompt:

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/playground.mp4" type="video/mp4">
</video>

### Adding Custom Models

You can flexibly add your own model definitions to LLM Traces. This is especially useful for self-hosted or fine-tuned models which are not included in the list of LLM Traces (Langfuse) maintained models. The model information added in the video below is indicative. For models available in UPTIMIZE, [click here](aiml/aiml_apis/openai_api/).

<video width="600" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/nlp/llmtraces/Custom_model.mp4" type="video/mp4">
</video>


It is advisable to visit [Langfuse Documentation](https://langfuse.com/docs) for further and more detailed information.

---

# Advanced Integrations for Traces

## OpenAI SDK (Python)

To enable full logging and observability for OpenAI's Python SDK using LLM Traces, you can replace the OpenAI import with Langfuse's drop-in replacement. This works with both OpenAI and Azure OpenAI SDKs.

**Basic setup:**
Replace your standard OpenAI import:
```python
# Replace
- from openai import AzureOpenAI
+ from langfuse.openai import AzureOpenAI
```

LLM Traces automatically tracks:
- All prompts and completions (including async and streaming)
- Latencies
- API Errors
- Model usage (tokens and costs)

**How to set it up:**
1. **Install the SDKs:**
   ```bash
   pip install langfuse
   ```

2. **Set LLM Traces (Langfuse) credentials in environment variables:** 
   ```bash
   LANGFUSE_SECRET_KEY="sk-lf-..."
   LANGFUSE_PUBLIC_KEY="pk-lf-..."
   LANGFUSE_HOST="https://api.nlp.{env}.uptimize.merckgroup.com"  
   ```

3. **Use OpenAI SDK as usual:**
   No code changes are required after updating the import.

**Example:**
```python
client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-02-01"
)
client.chat.completions.create(
    model="gpt-4o",  #use any uptimize supported model
    messages=[{"role": "user", "content": "1 + 1 = "}],
    name="math-test",
    metadata={"testKey": "testValue"}
)
```

LLM Traces automatically groups multiple API calls into a single trace and tracks related metadata, session ID, user ID, and tags.

**Advanced usage:**
- **Trace grouping:** Combine multiple OpenAI calls into a single trace.
- **Custom properties:** Add `name`, `metadata`, `session_id`, `tags`, and more for better control.
  
```python
client = AzureOpenAI(
    azure_endpoint="https://api.nlp.{env}.uptimize.merckgroup.com",
    api_key=api_key,
    api_version="2024-02-01"
)

client.chat.completions.create(
    model="gpt-4o", #use any uptimize supported model
    messages=[{"role": "user", "content": "What's the capital of France?"}],
    name="capital-query",
    session_id="{Any Session id}",
    tags=["geography"]
)
```

**Error handling, queuing, and batching** are automatically managed by LLM Traces (Langfuse). For short-lived applications, you can manually flush pending events:
```python
openai.flush_langfuse()
```

LLM Traces makes observability easy with full support for OpenAI SDK, giving you insights into your application's usage and performance.
For more information, please refer to the [Langfuse documentation](https://langfuse.com/docs/integrations/openai/python/get-started).

---

---

# UPTIMIZE MLflow

An internally hosted version of the popular MLOps framework, MLflow, optimized to streamline the machine learning lifecycle within the UPTIMIZE environment. This service helps data scientists and engineers accelerate model development and deployment in a collaborative environment.

## What is MLflow?

MLflow is an open-source platform for managing the end-to-end machine learning lifecycle. The UPTIMIZE MLflow service provides:

- **Experiment Tracking**: Log parameters, code versions, metrics, and artifacts when running machine learning code
- **Reproducibility**: Package ML code in a format that allows for consistent redeployment and sharing
- **Model Registry**: Store, annotate, version, and manage models in a central repository
- **Model Deployment**: Deploy models as APIs for real-time inference
- **Enterprise Security**: Integrated with UPTIMIZE security controls and user management

## Available Documentation

### [MLflow Core Features](/aiml/mlflow/core/)

Essential MLflow capabilities, experiment tracking, model training and management, permissions, and access controls.

### [Automated Model Deployment via MLflow UI](/aiml/mlflow/automated-deployment/)

Deploy your MLflow models as REST APIs with automatic scaling, monitoring, and authentication.

### [Automated Model Deployment via APIs](/aiml/mlflow/automated-deployment-api/)

Programmatically manage model deployments using REST APIs for automation and integration with your CI/CD pipelines.

## Read This First!

Please make sure that you have read and understood the following things before using the service:

- Please refrain from using MLflow for tracing and observability of Generative AI based applications. Please utilize [LLM Traces](../llm-traces/) instead.
- MLflow is not intended for use in regulated environments.
- The MLflow is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).

## Getting Started

1. **Request Access**: Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc) and request an MLflow experiment through this [form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

2. **Access the Service**: Visit [https://mlflow.p.uptimize.merckgroup.com/](https://mlflow.p.uptimize.merckgroup.com/) and generate an access key for programmatic access.

3. **Install the Client**: Set up your environment with the compatible MLflow client version:
   ```bash
   pip install mlflow==3.4.0
   ```

4. **Explore Documentation**: Review the [Core Features](/aiml/mlflow/core/), [Deployment via UI](/aiml/mlflow/automated-deployment/), and [Deployment via API](/aiml/mlflow/automated-deployment-api/) guides to get started.

## Support and Resources

- For technical issues, contact the MLflow administration team
- For general information, refer to the [official MLflow documentation](https://mlflow.org/docs/latest/index.html)

---

# MLflow Core Features

An internally hosted version of the popular MLOps framework, **MLflow**, optimized to streamline the machine learning lifecycle and offers enhanced functionality for **experiment tracking**, **collaborative development**, and **model lifecycle management** with enterprise features for **security** and **scalability**. It provides an intuitive interface for managing machine learning models and experiment workflows, helping data scientists and engineers accelerate model development and deployment in a collaborative environment.

## Read This First!

Please make sure that you have read and understood the following things before using the API:

- Please refrain from using MLflow for tracing and observability of Generative AI based applications. Please utilize [LLM Traces](../llm-traces/) instead.
- MLflow is not intended for use in regulated environments.
- The MLflow is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).

## Important Notes
- The current MLflow server is configured to run with **version 3.4.0** and expects the client SDK/package to also have **version 3.X**:

```bash
pip install mlflow==3.4.0
```
- **Experiments** can only be created by **MDAO admins** of the MLflow product.
- Each use case can have **one or more experiments**.
- Teams can decide whether to combine **multiple experiment types** (classification, regression, etc.) within a single experiment separated by **tags** or separate them into individual experiments.
- Users must **log into MLflow** at least once before access can be granted to an experiment. *(We are exploring alternatives to streamline this process.)*
- **Model artifacts** cannot be accessed directly; they must be read using the **MLflow API**.
- The user with **MANAGE** role has the ability to add other users with **EDIT** and **READ** roles provided they have logged in to MLflow at least once. The name of the user who is supposed to have **MANAGE** must be specific in the MLflow Experiment request form.
- **Model and experiment permissions are independent of each other**: The person who creates a model in the registry automatically gets the "MANAGE" role for that model and can add other users to the model as needed. This means users can have access to a model without having access to the experiment details or runs that created it, allowing for clean separation between model development and model consumption.

## Steps to Request MLflow Experiment

1. Register your use case in the [UPTIMIZE Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).

2. Request an MLflow Experiment through this [form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da).

3. The requestor will receive confirmation regarding the creation of the Experiment and assignment of **MANAGE** role to the respective user.

4. Access MLflow at: [https://mlflow.p.uptimize.merckgroup.com/](https://mlflow.p.uptimize.merckgroup.com/)

## User Roles

- **MANAGE**: Full control, including the ability to **read, update, delete**, and **manage** experiments and models.
- **EDIT**: Ability to **read** and **update** experiments and models.
- **READ**: **Read-only** access to experiments and models.

## Instructions for New Users

1. **For first-time users**: Access MLflow by visiting:  
   [https://mlflow.p.uptimize.merckgroup.com/](https://mlflow.p.uptimize.merckgroup.com/)

2. After opening the link, please inform the **Manager** of the experiment about the same.

3. The **Manager** of the experiment must add the new user with the required role (**Edit** or **Read**) by:
   - Going to **"Manage Permissions" -> "Experiment Permissions"**.
   - Clicking on the vertical ellipsis next to the experiment name and adding the user with the desired role (**Edit** or **Read**).

4. The new user should be able to **see the experiment** the next time they log in.

## Logging into MLflow Programmatically

1. **Username**: Your **Merck email ID** (You can also make use of a service user ID for deploying models in production)

2. **Password**: Click **"Create Access Key"** on the MLflow login page to generate a password
   - Copy and save the key as it appears. **The key is not stored anywhere**.
   - **New access keys revoke the previous ones automatically**.

## Getting Started with MLflow

### Prerequisites

1. **Access to MLflow**: Ensure you have the appropriate permissions to access experiments and models in MLflow.
2. **Python Environment Setup**: Ensure the required packages are installed:
   ```bash
   pip install mlflow
   ```

### Setting Up the Environment

Before interacting with **MLflow**, set up the environment with your Merck email and access key:

```python
import os

# Set your Merck email and access key for authentication
os.environ["MLFLOW_TRACKING_USERNAME"] = "your-merck-mail-id"
os.environ["MLFLOW_TRACKING_PASSWORD"] = "access-key-created-from-home-page"
```
Set up the tracking URI and experiment in **MLflow**:

```python
import mlflow

tracking_uri = "https://api.nlp.p.uptimize.merckgroup.com/mlflow"
mlflow.set_tracking_uri(tracking_uri)

# Set the experiment in which the model will be tracked, mentioned in the mail from Foundry
mlflow.set_experiment("experiment_name")
```

## Working with Models

### Loading Dataset, Training Model, and Logging Metrics

Load the dataset, train a model, log parameters, metrics, and the model itself into **MLflow**:

**Note**: Although the below code example uses scikit-learn, **MLflow** supports multiple ML libraries, not just scikit-learn. This allows for easier management of models from different frameworks. For more details, refer to the [MLflow Native Library Support](https://mlflow.org/docs/latest/traditional-ml/index.html#native-library-support). Additionally, MLflow enables you to use custom PyFunc to log and load models from any framework. For more details, refer to the [PyFunc Components](https://mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/part2-pyfunc-components.html).

### Choosing Between PyFunc and Framework-Specific Flavors

When logging models in MLflow, you can choose between framework-specific flavors (like `mlflow.sklearn`, `mlflow.tensorflow`, etc.) or the generic `mlflow.pyfunc` approach:

| Approach | When to Use | Benefits |
|----------|-------------|----------|
| **Framework-Specific Flavors** <br> (`mlflow.sklearn`, `mlflow.pytorch`, etc.) | - Using standard ML libraries <br> - No custom preprocessing logic <br> - Working within one ecosystem | - Simpler implementation <br> - Framework-specific optimizations <br> - Better integration with framework tools |
| **PyFunc** <br> (`mlflow.pyfunc`) | - Custom preprocessing/postprocessing <br> - Mixed frameworks or custom models <br> - Need for unified prediction interface | - Framework-agnostic <br> - Supports custom inference logic <br> - Consistent interface across models |

**Best Practice**: Even when using framework-specific flavors, MLflow automatically adds PyFunc capabilities behind the scenes. This ensures your models can be loaded and used with a consistent interface regardless of the original framework.

### Logging Custom Code and Packages with PyFunc

When using PyFunc to log models with custom code or dependencies:

- **Custom Dependencies**: MLflow automatically captures your environment's dependencies, but you may need to explicitly define them for complex use cases.
- **Custom Code**: If your model requires custom preprocessing/postprocessing logic or uses custom packages, you'll need to ensure these are properly logged with your model.

For detailed guidance on managing custom dependencies and code with PyFunc models, refer to the [MLflow Dependencies Management documentation](https://mlflow.org/docs/latest/ml/model/dependencies/). This resource explains how to:

- Define custom Python dependencies
- Include custom code files
- Bundle external artifacts with your model

**Important**: Properly managing your model's dependencies is critical for ensuring it can be loaded and run consistently across different environments, especially when deploying as an API endpoint.

For more information on model flavors and their capabilities, refer to the [MLflow Models documentation](https://mlflow.org/docs/latest/ml/model/).

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from mlflow.models import infer_signature
import mlflow.sklearn

# Load the Iris dataset
data = load_iris()
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.2, random_state=42)

# Define RandomForest parameters
params = {
    "n_estimators": 100,
    "max_depth": 5,
    "random_state": 42
}

# Start MLFlow run
with mlflow.start_run() as run:
    # Initialize and train RandomForest model
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # Predict and calculate accuracy
    y_pred = model.predict(X_test)
    signature = infer_signature(X_test, y_pred)
    accuracy = accuracy_score(y_test, y_pred)

    # Log parameters, metrics, and model
    mlflow.log_params(params)
    mlflow.log_metric("accuracy", accuracy)
    mlflow.sklearn.log_model(sk_model=model, name="your-model_name", signature=signature)

    print(f"Model training complete. Accuracy: {accuracy}")
```

### Registering the Trained Model

**Important**: Model name in the registry is central to all UPTIMIZE users. If the user has created a model with a specific name, that name cannot be used by other users to create a new model of their own and instead would throw an error.

#### Naming Conventions

**Model names and aliases must follow these rules if the model needs to be deployed as an API endpoint in the future:**

- Use only lowercase letters, numbers, and dashes (-)
- Maximum length: 100 characters
- No spaces, uppercase letters, or special characters allowed

**Examples:**
- ✅ Valid: `wine-quality-classifier`, `model-v2`, `text-sentiment-analysis`, `fraud-detection-2024`
- ❌ Invalid: `Wine Quality Model`, `MODEL_V2`, `text@sentiment`, `model with spaces`, `text_sentiment_analysis`

> **Handling Models with Non-Compliant Names**: If you have existing models with names that don't follow these conventions (e.g., containing underscores or uppercase letters), you can still deploy them by creating a new model in the registry with a compliant name and attaching the actual model version to it via the UI without requiring you to retrain or re-log your model.

After logging the model, register it for version control in the **MLflow Model Registry**:

```python
# Register the trained model in the MLflow model registry
model_uri = f"runs:/{run.info.run_id}/your_model_name"
mv = mlflow.register_model(model_uri, "your_model_name")

# Print model registration details
print(f"Name: {mv.name}")
print(f"Version: {mv.version}")
```

### Loading Model from MLflow Model Registry

You can load a registered model either by specifying its **version** or by using an **alias**.

#### Load Model by Version
Load the model from the Model Registry by specifying its version number:

```python
# Load model through version
model = mlflow.sklearn.load_model(f"models:/your_model_name/version")
```

#### Load Model by Alias
Alternatively, you can load a model by using an alias (e.g., "champion"):

```python
# Load model through alias
model = mlflow.sklearn.load_model(f"models:/your_model_name@alias")
```

### Model Management and Permissions

#### Model Versioning and Metadata
- **Model Versioning**: Each time you register a model with the same name, **MLflow** increments the version number automatically.
- **Tags and Metadata**: Tags and additional metadata can be added to the model and experiments for easier identification.

#### Granting Model Access
After registration, the model becomes available for further evaluation and access. The user who trained and registered the model can load it themselves, or they can grant access to other team members to load the registered model.

**To grant access to other users:**
1. Navigate to: Home → Manage Permissions → Model Permissions
2. Click the vertical ellipsis next to the registered model → Edit → + Add

## Access and Deployment

- **Model artifacts** can be accessed from **Lab**, **Foundry**, and **AppService**.
- Access from **AWS Factory** is possible through **Private Endpoint Service**.
- **Automated Deployment of Models**: Models from MLflow Model Registry can be deployed as REST APIs using the UPTIMIZE MLflow Automated Deployment Framework.

### MLflow Model Deployment as APIs

For comprehensive information about deploying your MLflow models as production-ready APIs, including:
- Automated deployment configuration
- API endpoint management
- Authentication and security
- Monitoring and troubleshooting
- Best practices and examples

Please refer to the dedicated [MLflow Automated Deployment Framework](/aiml/mlflow/automated-deployment/) documentation.

## MLflow in Foundry Transform
To access UPTIMIZE MLflow API in a Foundry transform, you need Egress Policy + external transform. It is recommended to use source-based external transform. **All the necessary steps that are required to connect UPTIMIZE AI-ML APIs from Foundry can be found [here](https://docs.uptimize.merckgroup.com/foundry/specific-module-guidelines/UPTIMIZE-NLP-API/).**

Below is an example of using MLflow in a Foundry transform:

```python
import mlflow
import os
from transforms.api import Input, Output, transform
from transforms.external.systems import (
    ResolvedSource,
    Source,
    external_systems,
)

MLFLOW_USERNAME_KEY = "SecretKeyMlFlowUserName"
MLFLOW_PASSWORD_KEY = "SecretKeyMlFlowPassword"

TRACKING_URI = "https://api.nlp.p.uptimize.merckgroup.com/mlflow"
EXPERIMENT_NAME = "your_mlflow_experiment_name"

@external_systems(
    mlflow_api_source=Source(
        "ri.magritte..source.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    )
)
@transform(
    output_df=Output("your-output-data"),
    df=Input("your-input-data"),
)
def compute(
    df: Input,
    output_df: Output,
    mlflow_api_source: ResolvedSource,
):
    # Access your mlflow secrets stored in source
    username = mlflow_api_source.get_secret(MLFLOW_USERNAME_KEY)
    password = mlflow_api_source.get_secret(MLFLOW_PASSWORD_KEY)

    # Setup your mlflow configuration
    os.environ["MLFLOW_TRACKING_USERNAME"] = username
    os.environ["MLFLOW_TRACKING_PASSWORD"] = password
    mlflow.set_tracking_uri(TRACKING_URI)
    mlflow.set_experiment(EXPERIMENT_NAME)

    with mlflow.start_run(run_name="MLflow demo"):
        mlflow.log_params({"Demo": True})
        # Your model training and logging code here
        # ...

    output_df.write_dataframe(df.dataframe())
```

## Additional Resources

For further details about MLflow in general, users can refer to the [official MLflow documentation](https://mlflow.org/docs/latest/index.html/).

---

# MLflow Automated Deployment Framework

This framework enables automated deployment of MLflow models as RESTful APIs within the UPTIMIZE AI-ML API environment, providing a streamlined way to serve your trained models in production.

![Console](/assets/nlp/mlflow/deployment_console.png)

## Prerequisites

Before using the deployment framework, ensure you have:

- Completed the setup described in the [main MLflow documentation](/aiml/mlflow/core/)
- A registered model with an assigned alias (aliases are mandatory for deployment)
- Appropriate permissions (MANAGE or EDIT) for the model you want to deploy
- Access to the MLflow Console interface

### Naming Requirements

**Model names and aliases must follow these rules:**

- Use only lowercase letters, numbers, and dashes (-)
- Maximum length: 100 characters
- No spaces, uppercase letters, or special characters allowed

**Examples:**
- ✅ Valid: `wine-quality-classifier`, `model-v2`, `fraud-detection-2024`
- ❌ Invalid: `Wine Quality Model`, `MODEL_V2`, `model with spaces`, `text_sentiment_analysis`

**Important**: Model deployment requires your models to have aliases. If you haven't set up aliases for your models, please refer to the [model management section](/aiml/mlflow/core/#model-management-and-permissions) in the main documentation.

> **Handling Models with Non-Compliant Names**: If you have existing models with names that don't follow these conventions (e.g., containing underscores or uppercase letters), you can still deploy them by creating a new model in the registry with a compliant name and attaching the actual model version to it via the UI without requiring you to retrain or re-log your model.

## Pre-Deployment Validation

Before deploying your model as an API, it's highly recommended to perform a sanity check to ensure your model will work correctly in the deployment environment.

### Why Validate Before Deployment?

When you log a model with MLflow, it automatically captures and stores:
- **Dependencies**: `requirements.txt`, `conda.yaml`, and `python_env.yaml` files
- **Model artifacts**: The trained model and associated files
- **Input signatures**: Expected input data types and structure (if specified)

By recreating the environment using these captured dependencies and testing your model locally, you can catch potential issues before deployment.

### Validation Steps

#### 1. Include Input Signature During Model Logging

Always include an input signature when logging your model to enable automatic input type checking:

```python
from mlflow.models import infer_signature

# During model training/logging
signature = infer_signature(X_test, y_pred)
mlflow.sklearn.log_model(
    sk_model=model,
    name="your_model_name",
    signature=signature  # This enables input validation
)
```

#### 2. Recreate Environment from MLflow Dependencies

First, create a fresh environment using the dependency files that MLflow recorded. You can use any package manager based on your setup and convenience:

```bash
# MLflow automatically creates these dependency files when you log a model
# Download your model artifacts to access these files

# Using conda (if available)
conda env create -f conda.yaml
conda activate <environment_name>

# Using pip with requirements.txt
pip install -r requirements.txt

# Using other package managers with python_env.yaml
# (adapt based on your preferred package manager)
```

#### 3. Test with PyFunc Interface

After setting up the environment, test your model using MLflow's PyFunc interface:

```python
import mlflow.pyfunc

# Load your model using PyFunc
model_uri = "models:/your_model_name@alias"
loaded_model = mlflow.pyfunc.load_model(model_uri)

# Test with sample data
test_input = {
    'feature_1': 7.1,
    'feature_2': 0.28
}

# This should work without errors
prediction = loaded_model.predict([test_input])
print(f"Prediction: {prediction}")
```

### Validation Checklist

Before deploying, ensure:
- ✅ Environment recreated successfully using MLflow dependency files
- ✅ Model loads successfully with `mlflow.pyfunc.load_model()`
- ✅ Test predictions work with your expected input format
- ✅ Input signature was included during model logging
- ✅ No dependency or import errors occur
- ✅ Model predictions match your expectations
- ✅ For GPU based deployments, only models logged via pytorch and transformers packages are supported.

### Additional Resources

For detailed information about MLflow model components:
- [MLflow Models Guide](https://mlflow.org/docs/latest/ml/model/)
- [Dependency Management](https://mlflow.org/docs/latest/ml/model/dependencies/#how-mlflow-records-dependencies)
- [Model Signatures](https://mlflow.org/docs/latest/ml/model/signatures/)

**Pro Tip**: If your PyFunc validation works in the recreated environment, you can be confident that the API deployment will also work correctly.

## Deployment Process

> **Note: For GPU based deployments, only models logged via `pytorch` and `transformers` packages are supported.**

### Step 1: Access the Console
1. Click "Console" in the top-right corner of the MLflow interface
2. Navigate to "Models" to view available models and permissions
3. Locate the model you want to deploy (requires MANAGE or EDIT access)
4. Click the vertical ellipsis (⋮) next to your model to reveal the "Deploy" button

### Step 2: Configure Deployment

When you click "Deploy", configure the following options:

- **Source Model Alias**: Select the model version/alias to deploy (e.g., @champion - Version 1)
- **Deployment Type**: Choose between CPU or GPU deployment
  - **CPU**: Standard deployment for most models
  - **GPU**: Accelerated computing for deep learning and compute-intensive models
- **Container Instance Type**: 
  - **For CPU**: Choose CPU and memory resources (e.g., 1 CPU, 2048 MB, $1.36/day)
  - **For GPU**: Select from available GPU instances:
    - **g4dn.xlarge**: 4 CPU, 14336MB RAM, 16GB VRAM, $0.658/hour
    - **g5.xlarge**: 4 CPU, 14336MB RAM, 24GB VRAM, $1.258/hour
- **Enable Scale to Zero**: Automatically shuts down after 60 minutes of inactivity
- **Enable Tracing**: Captures API requests for monitoring and debugging (visible in the "Traces" section of the experiment connected to the logged model)

### Step 3: Deploy and Monitor
1. Click "Deploy" to confirm your configuration
2. You'll be redirected to the "Deployments" tab
3. Initial deployment takes approximately 10 minutes
4. Status will change from "Deploying" to "Running" when complete

## Managing Deployments

### Available Actions

| Action | Description |
|---------|-------------|
| **Stop/Start Container** | Pause or resume the deployment service |
| **View Events** | Monitor deployment lifecycle events and status changes |
| **View Logs** | Access container logs for troubleshooting deployment issues |
| **Generate API Key** | Generate authentication tokens for API access |
| **Generate Inference Code** | Create sample code for calling your model's API endpoint |
| **Update Deployment** | Modify container resources, tracing, or scale-to-zero settings |
| **Kill Deployment** | Permanently destroy the deployment and all associated resources |

### Role-Based Permissions

| Role    | Deploy | Start/Stop | Update | Generate API Key | Generate Inference Code | Kill | View Events | View Logs | Access Management* |
|---------|--------|------------|--------|---------------|------------------------|------|-------------|-----------|-------------------|
| MANAGE  | ✅      | ✅          | ✅      | ✅             | ✅                      | ✅    | ✅           | ✅         | ✅                 |
| EDIT    | ✅      | ✅          | ✅      | ✅             | ✅                      | ❌    | ✅           | ✅         | ❌                 |
| READ    | ❌      | ❌          | ❌      | ✅             | ✅                      | ❌    | ✅           | ✅         | ❌                 |

*Access Management includes: adding/removing team members, changing permission levels, transferring ownership, and deleting models. Only users with MANAGE permissions can perform these administrative actions.

### Model Version Updates

**Important**: When you promote a new version to an existing alias (e.g., promoting Version 2 to @champion), existing deployments continue running the previous version until manually updated.

To deploy the new version:
1. Use "Update Deployment" action on the existing deployment
2. The service will automatically switch to the new model version

## API Usage for Inferencing with Deployed Model

### Endpoint Structure
- **Base URL**: [https://api.nlp.p.uptimize.merckgroup.com](https://api.nlp.p.uptimize.merckgroup.com) (**Accessible from UPTIMIZE Foundry and AppService**)
- **Naming Convention**: `{model_name}_{alias}`
- **Endpoint**: `/{model_name}_{alias}/predict`

### Authentication
Generate an authentication token using "Generate API Key" in the Deployments tab. Each user can generate their own token for calling the API. If the token/secret is generated again, the previous one is invalidated.

### Example API Call

```python
import requests
import json

# API configuration
base_url = "https://api.nlp.p.uptimize.merckgroup.com"
model_name = "classification_model"
alias = "champion"
url = f"{base_url}/{model_name}-{alias}/predict"

# Request payload (structure depends on your model)
payload = {"inputs":{
    'feature_1': 7.1,
    'feature_2': 0.28,
    }}

headers = {
    'Content-Type': 'application/json',
    'authorization': 'YOUR_AUTH_TOKEN_HERE'
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

### Generate Inference Code Button

The MLflow deployment interface now includes an experimental "Generate Inference Code" button that automatically creates ready-to-use inference code based on your model's signature. This feature helps you:

- Quickly get started with making API calls to your deployed model
- Generate a properly structured payload based on your model's input signature
- Reduce the effort required to integrate with your deployed model

**How it works:**
1. Navigate to the Deployments tab and select your deployed model
2. Click the "Generate Inference Code" button
3. The system will generate sample code with the correct endpoint URL and payload structure
4. If your model has a signature, the payload will be pre-populated based on the signature
5. If no signature is found, an empty payload template will be provided

**Note**: This is an experimental feature designed to help you get started quickly. The generated code may need adjustments based on your specific use case and environment.

### Input Formats for API Inferencing

The MLflow deployment API supports several JSON input formats based on the standard MLflow serving format. Rather than providing specific examples that might be confusing with array-based inputs, here's a general overview:

#### Supported Input Formats

The API accepts these standard JSON input formats:

1. **Dataframe-split format**: A dictionary with "columns" and "data" fields (recommended for most uses)
2. **TensorFlow serving format**: Input data organized as "instances"
3. **Simple JSON format**: Direct key-value pairs
4. **Dataframe-records format**: A list of dictionaries, each representing one record (use with caution)

#### Format Selection Guidelines

Choosing the right format depends on your model's input requirements:

| Input Type | Recommended Format | Notes |
|------------|-------------------|-------|
| Tabular data | Dataframe-split | Most efficient and reliable for structured data |
| Array-based inputs (images, tensors) | TensorFlow serving | Preserves dimensional information properly |
| Simple inputs with few features | Simple JSON | Straightforward for basic use cases |
| Time series or sequential data | Dataframe-split | Maintains order and column structure |

**Important Notes on Formats:**
- **Dataframe-split** is generally the most reliable format for tabular data
- **Dataframe-records** should be used with caution as it can lead to data misinterpretation in certain cases (especially with numeric column names)
- For **array-based inputs**, ensure your array dimensions match what your model expects

Your input signature (if defined during model logging) will help validate the correct format and prevent errors.

For detailed information and specific examples of each format, please refer to the official [MLflow JSON Input Documentation](https://mlflow.org/docs/latest/ml/deployment/deploy-model-locally/#json-input).

> **Tip**: Test your chosen format with sample data during the pre-deployment validation phase using the PyFunc interface.

## Monitoring and Troubleshooting Deployments

### View Events Button

The "View Events" button provides access to high-level deployment lifecycle events that show status changes in your deployment. This is useful for:

- Tracking deployment progress (DEPLOYING → RUNNING)
- Monitoring operational status changes (RUNNING → STOPPED)
- Identifying when updates were applied

Each event includes:
- Timestamp
- Event type
- Deployment metadata

**When to use:** Check events when you need to understand what high-level operations have occurred with your deployment.

### View Logs Button

The "View Logs" button provides access to the actual container logs from your deployed model service. These logs are critical for debugging and include:

- Model loading information
- Python exception stack traces
- API request/response activity
- Health check status
- Container startup/shutdown events

**When to use:** Check logs when your deployment:
- Gets stuck during startup
- Returns unexpected errors during inference
- Shows unusual performance characteristics

The logs provide the most detailed level of information about what's happening inside your deployment container and are essential for resolving technical issues.

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Deployment stuck in "Deploying" | Check "View Logs" for Python exceptions or issues in loading the model |
| Authentication errors | Generate new token via "Generate API Key" |
| Inference errors | Verify payload structure matches model requirements |
| Service unavailable | Check "View Events" for status changes, restart if needed |

## Best Practices

- **Aliases**: Use descriptive aliases (e.g., @production, @staging, @champion)
- **Resources**: Choose container size based on model requirements
- **Security**: Rotate authentication tokens regularly
- **Testing**: Test thoroughly with staging aliases before production deployment
- **Monitoring**: Enable tracing for production deployments

## Getting Help

- Check "View Events" for deployment status history
- Check "View Logs" for detailed troubleshooting information
- Contact the MLflow administration team with logs when reporting technical issues
- Refer to the [main MLflow documentation](/aiml/mlflow/) for general usage questions

---

# MLflow Model Deployment via API

This guide documents the RESTful API endpoints available for programmatically managing MLflow model deployments. While the MLflow Console UI provides a graphical interface for most deployment operations, these APIs enable automation and integration with your CI/CD pipelines or custom applications.

## Prerequisites

Before using the API:

- You must have a registered model with proper permissions (MANAGE or EDIT)
- Your model must have a valid alias assigned
- You need your MLflow authentication credentials (username and token)
- For GPU based deployments, only models logged via pytorch and transformers packages are supported.

## API Authentication

All endpoints require HTTP Basic Authentication:

```
Username: Your Merck email or service account
Password: Your MLflow access token
```

To generate an access token, visit the [MLflow login page](https://mlflow.p.uptimize.merckgroup.com) and click "Create Access Key".

## Base URL

```
https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments
```

## Endpoints

### Create Deployment

Creates and initiates a new model deployment.

- **Endpoint:** `POST /api/public/deployments/`
- **Status:** 202 Accepted
- **Authentication:** Basic Auth
- **Content-Type:** application/json

**Request Body:**

```json
{
  "model_name": "iris_classifier",
  "model_alias": "production",
  "model_version": 1,
  "deploy_user": "your-office-mail-id",
  "deployment_type": "CPU",
  "cpu": 2.0,
  "memory_limit_mib": 4096,
  "enable_scale_down": true,
  "enable_tracing": true,
  "enable_autoscale": true
}
```

**Required Fields:**
- `model_name`: Model name (lowercase letters, numbers, dash only)
- `model_alias`: Model alias (same naming rules as model_name)
- `deploy_user`: Email address of the user deploying the model

**Optional Fields:**
- `model_version`: Model version number (defaults to 1)
- `deployment_type`: "CPU" or "GPU" (defaults to "CPU")
- `instance_type`: Required when `deployment_type` is "GPU". Available options:
  - `g4dn.xlarge`: 4 CPU, 14336MB RAM, 16GB VRAM
  - `g5.xlarge`: 4 CPU, 14336MB RAM, 24GB VRAM
- `cpu`: 0.25, 0.5, 1.0, 2.0, 4.0, 8.0, or 16.0 cores (defaults to 2.0, only applicable for CPU deployments)
- `memory_limit_mib`: Memory in MiB, must be valid combination with CPU (defaults to 2048, only applicable for CPU deployments)
- `enable_scale_down`: Auto-scale down during inactivity (defaults to true)
- `enable_tracing`: Enable request tracing for monitoring (defaults to true)
- `enable_autoscale`: Enable automatic scaling based on load (defaults to true)

**Example Request:**

```python
import requests
import json

url = "https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/"
auth = ("your-office-mail-id", "your-access-token")
headers = {"Content-Type": "application/json"}

payload = {
  "model_name": "iris-classifier",
  "model_alias": "production",
  "model_version": 1,
  "deploy_user": "your-office-mail-id",
  "cpu": 2.0,
  "memory_limit_mib": 4096
}

# For GPU deployment:
# payload = {
#   "model_name": "iris-classifier",
#   "model_alias": "production",
#   "model_version": 1,
#   "deploy_user": "your-office-mail-id",
#   "deployment_type": "GPU",
#   "instance_type": "g4dn.xlarge",
#   "cpu": 4.0,
#   "memory_limit_mib": 14336,
#   "enable_scale_down": True
# }

response = requests.post(url, auth=auth, headers=headers, json=payload)
print(response.status_code)
print(response.json())
```

**Example Response (202 Accepted):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "model_name": "iris-classifier",
  "model_alias": "production",
  "model_version": 1,
  "deploy_user": "your-office-mail-id",
  "deployment_type": "CPU",
  "cpu": 2.0,
  "memory_limit_mib": 4096,
  "price_per_day": 2.73,
  "service_name": "iris-classifier-production",
  "instance_type": null,
  "status": "DEPLOYING",
  "created_at": "2024-09-23T10:00:00Z",
  "updated_at": "2024-09-23T10:00:00Z",
  "enable_scale_down": true,
  "enable_autoscale": true,
  "enable_tracing": true,
  "experiment_name": "iris-experiments"
}
```

### Get Deployment

Retrieves detailed information about a specific deployment.

- **Endpoint:** `GET /api/public/deployments/{deployment_id}`
- **Status:** 200 OK
- **Authentication:** Basic Auth

**Parameters:**
- `deployment_id`: UUID of the deployment

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}"
auth = ("your-office-mail-id", "your-access-token")

response = requests.get(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (200 OK):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "model_name": "iris-classifier",
  "model_alias": "production",
  "model_version": 1,
  "deploy_user": "your-office-mail-id",
  "deployment_type": "CPU",
  "cpu": 2.0,
  "memory_limit_mib": 4096,
  "price_per_day": 2.73,
  "service_name": "iris-classifier-production",
  "instance_type": null,
  "status": "RUNNING",
  "created_at": "2024-09-23T10:00:00Z",
  "updated_at": "2024-09-23T10:30:00Z",
  "enable_scale_down": true,
  "enable_autoscale": true,
  "enable_tracing": true,
  "experiment_name": "iris-experiments"
}
```

### Delete Deployment

Destroys a deployment and cleans up all associated resources.

- **Endpoint:** `DELETE /api/public/deployments/{deployment_id}`
- **Status:** 202 Accepted
- **Authentication:** Basic Auth

**Parameters:**
- `deployment_id`: UUID of the deployment

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}"
auth = ("your-office-mail-id", "your-access-token")

response = requests.delete(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (202 Accepted):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "operation": "destroy",
  "status": "DESTROYING",
  "message": "Deployment destruction initiated successfully",
  "timestamp": "2024-09-23T11:45:00Z"
}
```

### Update Deployment

Updates the configuration of an existing deployment.

- **Endpoint:** `PATCH /api/public/deployments/{deployment_id}`
- **Status:** 202 Accepted
- **Authentication:** Basic Auth
- **Content-Type:** application/json

**Parameters:**
- `deployment_id`: UUID of the deployment

**Request Body:**

```json
{
  "cpu": 4.0,
  "memory_limit_mib": 8192,
  "enable_scale_down": false,
  "model_version": 2
}
```

**Fields that can be updated:**
- `cpu` and `memory_limit_mib`: Must be provided together as a valid combination
- `enable_scale_down`: Auto-scale down during inactivity
- `enable_tracing`: Enable request tracing for monitoring
- `enable_autoscale`: Enable automatic scaling based on load
- `model_version`: Update to a newer version of the same model

**Example Request:**

```python
import requests
import json

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}"
auth = ("your-office-mail-id", "your-access-token")
headers = {"Content-Type": "application/json"}

payload = {
  "cpu": 4.0,
  "memory_limit_mib": 8192,
  "model_version": 2
}

response = requests.patch(url, auth=auth, headers=headers, json=payload)
print(response.status_code)
print(response.json())
```

**Example Response (202 Accepted):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "model_name": "iris-classifier",
  "model_alias": "production",
  "model_version": 2,
  "deploy_user": "your-office-mail-id",
  "deployment_type": "CPU",
  "cpu": 4.0,
  "memory_limit_mib": 8192,
  "price_per_day": 5.45,
  "service_name": "iris-classifier-production",
  "instance_type": null,
  "status": "UPDATING",
  "created_at": "2024-09-23T10:00:00Z",
  "updated_at": "2024-09-23T11:15:00Z",
  "enable_scale_down": true,
  "enable_autoscale": true,
  "enable_tracing": true,
  "experiment_name": "iris-experiments"
}
```

### Start Deployment

Starts a deployment that is currently stopped.

- **Endpoint:** `POST /api/public/deployments/{deployment_id}/start`
- **Status:** 202 Accepted
- **Authentication:** Basic Auth

**Parameters:**
- `deployment_id`: UUID of the deployment

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}/start"
auth = ("your-office-mail-id", "your-access-token")

response = requests.post(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (202 Accepted):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "operation": "start",
  "status": "STARTING",
  "message": "Deployment start operation initiated successfully",
  "timestamp": "2024-09-23T11:00:00Z"
}
```

### Stop Deployment

Stops a deployment that is currently running.

- **Endpoint:** `POST /api/public/deployments/{deployment_id}/stop`
- **Status:** 202 Accepted
- **Authentication:** Basic Auth

**Parameters:**
- `deployment_id`: UUID of the deployment

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}/stop"
auth = ("your-office-mail-id", "your-access-token")

response = requests.post(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (202 Accepted):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "operation": "stop",
  "status": "STOPPING",
  "message": "Deployment stop operation initiated successfully",
  "timestamp": "2024-09-23T11:30:00Z"
}
```

### Get Deployment Status

Returns the current status of a deployment.

- **Endpoint:** `GET /api/public/deployments/{deployment_id}/status`
- **Status:** 200 OK
- **Authentication:** Basic Auth

**Parameters:**
- `deployment_id`: UUID of the deployment

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}/status"
auth = ("your-office-mail-id", "your-access-token")

response = requests.get(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (200 OK):**

```json
{
  "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "RUNNING",
  "last_updated": "2024-09-23T10:30:00Z",
  "message": "Deployment is healthy and serving requests"
}
```

### Get User Deployments

Returns all deployments created by a specific user.

- **Endpoint:** `GET /api/public/deployments/user/{username}`
- **Status:** 200 OK
- **Authentication:** Basic Auth

**Parameters:**
- `username`: Email address or username of the user

**Example Request:**

```python
import requests
import urllib.parse

username = "your-office-mail-id"
encoded_username = urllib.parse.quote(username)
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/user/{encoded_username}"
auth = ("your-office-mail-id", "your-access-token")

response = requests.get(url, auth=auth)
print(response.status_code)
print(response.json())
```

**Example Response (200 OK):**

```json
{
  "deployments": [
    {
      "deployment_id": "550e8400-e29b-41d4-a716-446655440000",
      "model_name": "iris-classifier",
      "model_alias": "production",
      "model_version": 1,
      "deploy_user": "your-office-mail-id",
      "deployment_type": "CPU",
      "cpu": 2.0,
      "memory_limit_mib": 4096,
      "price_per_day": 2.73,
      "service_name": "iris-classifier-production",
      "instance_type": null,
      "status": "RUNNING",
      "created_at": "2024-09-23T10:00:00Z",
      "updated_at": "2024-09-23T10:30:00Z",
      "enable_scale_down": true,
      "enable_autoscale": true,
      "enable_tracing": true,
      "experiment_name": "iris-experiments"
    },
    {
      "deployment_id": "660e8400-e29b-41d4-a716-446655440001",
      "model_name": "sentiment-analysis",
      "model_alias": "staging",
      "model_version": 3,
      "deploy_user": "your-office-mail-id",
      "deployment_type": "CPU",
      "cpu": 1.0,
      "memory_limit_mib": 2048,
      "price_per_day": 1.36,
      "service_name": "sentiment-analysis-staging",
      "instance_type": null,
      "status": "STOPPED",
      "created_at": "2024-09-20T14:00:00Z",
      "updated_at": "2024-09-20T16:30:00Z",
      "enable_scale_down": true,
      "enable_autoscale": false,
      "enable_tracing": true,
      "experiment_name": "nlp-experiments"
    }
  ],
  "total": 2,
  "user": "your-office-mail-id"
}
```

### Get Deployment Events

Retrieves the high-level deployment lifecycle events for auditing operations.

- **Endpoint:** `GET /api/public/deployments/{deployment_id}/events`
- **Status:** 200 OK
- **Authentication:** Basic Auth
- **Query Parameters:**
  - `start_time`: (Optional) ISO format datetime to filter events from
  - `end_time`: (Optional) ISO format datetime to filter events until

**Example Request:**

```python
import requests
from datetime import datetime, timedelta

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}/events"
auth = ("your-office-mail-id", "your-access-token")

# Optional: filter events from the last 24 hours
params = {
    "start_time": (datetime.utcnow() - timedelta(days=1)).isoformat(),
    "end_time": datetime.utcnow().isoformat()
}

response = requests.get(url, auth=auth, params=params)
print(response.status_code)
print(response.json())
```

### Get Service Container Logs

Retrieves the actual container logs from the deployed model service, useful for debugging model loading issues.

- **Endpoint:** `GET /api/public/deployments/{deployment_id}/logs`
- **Status:** 200 OK
- **Authentication:** Basic Auth
- **Query Parameters:**
  - `start_time`: (Optional) ISO format datetime to filter logs from
  - `end_time`: (Optional) ISO format datetime to filter logs until
  - `next_token`: (Optional) Pagination token for retrieving the next batch of logs
  - `limit`: (Optional) Maximum number of log events to return (1-1000, default: 100)

**Example Request:**

```python
import requests

deployment_id = "550e8400-e29b-41d4-a716-446655440000"
url = f"https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments/{deployment_id}/logs"
auth = ("your-office-mail-id", "your-access-token")

params = {
    "limit": 200  # Get up to 200 most recent log entries
}

response = requests.get(url, auth=auth, params=params)
print(response.status_code)
print(response.json())
```

## Error Responses

All API endpoints return standardized error responses with the following structure:

```json
{
  "error": "ERROR_CODE",
  "message": "Human-readable error message",
  "details": {
    "additional": "error details"
  },
  "timestamp": "2024-09-23T12:30:00Z"
}
```

### Common Error Codes

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 400 | INVALID_REQUEST | Request data violates business rules |
| 401 | UNAUTHORIZED | Authentication failed |
| 403 | FORBIDDEN | User lacks permission for the operation |
| 404 | DEPLOYMENT_NOT_FOUND | Deployment ID doesn't exist |
| 409 | DEPLOYMENT_EXISTS | Deployment with same model/alias already exists |
| 409 | INVALID_STATE_TRANSITION | Operation not allowed in current state |
| 422 | VALIDATION_ERROR | Request data fails validation |
| 500 | INTERNAL_ERROR | Server encountered an error |

## Resource Configurations

### CPU and Memory Combinations

When creating or updating CPU deployments, you must use valid CPU and memory combinations. The API enforces this to ensure deployments use supported instance types.

Here are some of the valid combinations:

| CPU (cores) | Memory (MiB) | Price ($/day) |
|-------------|-------------|---------------|
| 0.25 | 512 | 0.34 |
| 0.25 | 1024 | 0.40 |
| 0.5 | 1024 | 0.68 |
| 0.5 | 2048 | 0.80 |
| 1.0 | 2048 | 1.36 |
| 1.0 | 3072 | 1.49 |
| 2.0 | 4096 | 2.73 |
| 2.0 | 8192 | 3.22 |
| 4.0 | 8192 | 5.45 |
| 4.0 | 16384 | 6.43 |
| 8.0 | 16384 | 10.90 |
| 8.0 | 32768 | 12.86 |
| 16.0 | 32768 | 21.80 |
| 16.0 | 65536 | 25.73 |

For a complete list of supported combinations, refer to the API validation errors when an invalid combination is attempted.

### GPU Instance Types

For GPU deployments, the following instance types are available:

| Instance Type | CPU (cores) | Memory (MiB) | GPU Memory (VRAM) | Price ($/hour) |
|---------------|-------------|--------------|-------------------|----------------|
| g4dn.xlarge | 4 | 14336 | 16GB | $0.658 |
| g5.xlarge | 4 | 14336 | 24GB | $1.258 |

When using GPU deployments:
- You must specify both `deployment_type: "GPU"` and an `instance_type` from the table above
- The `cpu` and `memory_limit_mib` parameters are not used (they are predetermined by the instance type)
- Pricing is per hour rather than per day, as GPU resources are more expensive

## Deployment Lifecycle

Deployment status transitions follow this lifecycle:

1. **DEPLOYING**: Initial state when a deployment is created
2. **RUNNING**: Deployment is active and serving requests
3. **STOPPED**: Deployment is inactive but can be started again
4. **UPDATING**: Deployment is being modified (resources or model version)
5. **STARTING**: Transitioning from STOPPED to RUNNING
6. **STOPPING**: Transitioning from RUNNING to STOPPED
7. **DELETING**: Deployment is being destroyed
8. **FAILED**: Deployment encountered an error
9. **DELETED**: Deployment has been destroyed (terminal state)

## Best Practices

- **Error Handling**: Always implement proper error handling for API responses
- **Retry Logic**: For 5xx errors, implement exponential backoff retries
- **Polling**: For async operations (status=202), poll the status endpoint periodically
- **Authentication**: Store credentials securely and rotate access tokens regularly
- **Resources**: Choose appropriate CPU/memory combinations for your model's needs
- **Testing**: Test deployments in staging environments before production use

## Integration Examples

### CI/CD Pipeline Example

Here's a simplified example of how you might automate model deployment in a CI/CD pipeline:

```python
import requests
import json
import time
import os

# Configuration
base_url = "https://api.nlp.p.uptimize.merckgroup.com/api/public/deployments"
auth = (os.environ["MLFLOW_USERNAME"], os.environ["MLFLOW_TOKEN"])
headers = {"Content-Type": "application/json"}

# Deploy model
def deploy_model(model_name, model_alias, model_version):
    payload = {
        "model_name": model_name,
        "model_alias": model_alias,
        "model_version": model_version,
        "deploy_user": os.environ["MLFLOW_USERNAME"],
        "cpu": 2.0,
        "memory_limit_mib": 4096,
        "enable_scale_down": True,
        "enable_tracing": True
    }
    
    response = requests.post(f"{base_url}/", auth=auth, headers=headers, json=payload)
    
    if response.status_code == 202:
        deployment = response.json()
        print(f"Deployment initiated: {deployment['deployment_id']}")
        return deployment
    else:
        print(f"Deployment failed: {response.text}")
        return None

# Poll deployment status
def poll_until_running(deployment_id, timeout_seconds=2000):
    start_time = time.time()
    while time.time() - start_time < timeout_seconds:
        response = requests.get(
            f"{base_url}/{deployment_id}/status",
            auth=auth
        )
        
        if response.status_code == 200:
            status = response.json()
            print(f"Current status: {status['status']}")
            
            if status['status'] == "RUNNING":
                return True
            elif status['status'] == "FAILED":
                print(f"Deployment failed: {status['message']}")
                return False
        
        time.sleep(60)
    
    print("Deployment timed out")
    return False

# Execute deployment
model_name = "my-classifier"
model_alias = "production"
model_version = 3

deployment = deploy_model(model_name, model_alias, model_version)
if deployment:
    success = poll_until_running(deployment["deployment_id"])
    if success:
        print(f"Model {model_name}@{model_alias} v{model_version} deployed successfully!")
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**:
   - Ensure you're using your correct email and a valid access token
   - Check that your access token hasn't expired (generate a new one)

2. **Validation Errors**:
   - Ensure model_name and model_alias follow the required pattern (lowercase, no spaces)
   - Verify you're using valid CPU/memory combinations

3. **Permission Errors**:
   - Confirm you have MANAGE or EDIT permissions for the model
   - Check that you're authorized to perform the specific operation

4. **Model Not Found**:
   - Verify the model exists in the registry
   - Check that the model_alias exists for the specified model

5. **Deployment State Issues**:
   - Operations like start/stop are only valid in certain states
   - Check current deployment status before attempting operations

### Logs and Debugging

The API provides two endpoints for monitoring and troubleshooting deployments:

- **Events API (`GET /{deployment_id}/events`)**: Use for auditing deployment operations and tracking status changes
- **Logs API (`GET /{deployment_id}/logs`)**: Use for debugging model loading issues and checking container health

When debugging deployment issues:
1. Check container logs during deployment/updating to catch errors as they occur
2. Look for Python exceptions or error messages in the logs
3. Verify health check responses (look for "GET /health/ 200 OK" messages)
4. If needed, contact gpt-api@merckgroup.com with the deployment ID

---

# AI-ML Costing User Guide
Understanding and optimizing your AI-ML costs is essential for sustainable AI adoption. This guide explains how costs are calculated across different AI services and provides actionable strategies to reduce your spending while maintaining performance.

## Cost Components & How They're Calculated

### 1. **Base Cost** (`base_cost`)
**What it is**: Basic infrastructure costs (servers, networking, storage)

**How it's calculated**: 
- Total infrastructure costs are collected from AWS
- Costs are discounted and adjusted for savings
- Split equally among all projects (except those using Langfuse platform)
- **You pay**: Your fair share of shared infrastructure

### 2. **OpenAI Cost** (`openai_cost`)
**What it is**: Usage of Azure OpenAI models

**How it's calculated**:
- System tracks every API call you make to OpenAI
- Costs are calculated based on actual tokens used
- **You pay**: Exactly what you consumed in OpenAI services

### 3. **AWS GenAI Cost** (`aws_genAI_cost`)
**What it is**: Amazon Bedrock AI models (Claude, Titan, etc.)

**How it's calculated**:
- Direct usage tracking from AWS Bedrock logs
- **You pay**: Your actual usage of AWS AI models

### 4. **Traditional NLP API Cost** (`traditional_nlp_api_cost`)
**What it is**: Traditional AI services running on shared servers (apart from Textract, Translate, Azure OpenAI, AWS Bedrock, MLflow, Langfuse and VectorDB)

**How it's calculated**:
- Starts with total server(ECS/EC2) costs for running these services
- Removes infrastructure costs already allocated to OpenAI, Bedrock, Mistral, Mathpix, Textract and MLflow , Langfuse platforms
- Takes the remaining server cost and distributes it proportionally
- Your share = (Your API calls ÷ Total API calls) × Remaining server cost
- **You pay**: Your percentage of total API usage × remaining infrastructure cost

**Example**: If remaining server cost is $1,000 and you made 100 API calls out of 1,000 total calls, you pay $100 (10% of the cost)

### 5. **AWS Non-GenAI Cost** (`aws_non_genAI`)
**What it is**: AWS Translate and Textract services

**How it's calculated**:
- Total costs from AWS for these specific services
- Distributed proportionally based on your API calls
- **You pay**: Your percentage of total usage × total service cost

### 6. **VectorDB Cost** (`vectordb_cost`)
**What it is**: Vector database storage and operations (for AI embeddings)

**How it's calculated**:
- System collects total infrastructure costs for running vector databases
- Tracks the number of vectors you stored in your collections
- Applies cost adjustments based on optimization techniques:
  - **Quantization method**: Reduces storage size and costs (scalar, product, binary)
  - **Vector size**: Dimension of your embeddings (e.g., 1536 for OpenAI)
- Calculates "weighted vectors" = vectors × size × quantization discount
- Your share = (Your weighted vectors ÷ Total weighted vectors) × Total infrastructure cost
- **You pay**: Your percentage of weighted vectors × infrastructure cost

**Example**: If you have 10% of the total weighted vectors across all collections, you pay 10% of the VectorDB infrastructure cost

### 7. **LLM Traces Cost** (`langfuse_cost`)
**What it is**: AI monitoring and observability platform

**How it's calculated**:
- Pre-calculated daily costs from the platform
- License costs distributed flat to all use cases
- **You pay**: Platform usage + your share of license costs

### 8. **MLflow Cost** (`mlflow_cost`)
**What it is**: Machine learning experiment tracking platform

**How it's calculated**:
- Fixed monthly platform cost divided by total experiments
- **You pay**: Cost per experiment × number of your experiments

### 9. **Custom Imported Models Cost** (`customimported_cost`)
**What it is**: Custom AI models imported and deployed to the platform (e.g., Qwen multimodal models, SAM - Segment Anything Model)

**How it's calculated**:
- Total infrastructure costs for running custom imported models are collected from AWS
- System tracks your API requests to these models
- Costs are distributed proportionally based on actual usage
- Your share = (Your requests for a model ÷ Total requests for that model) × Model's infrastructure cost
- **You pay**: Your percentage of requests × infrastructure cost for each custom model you used

**Example**: If a custom "qwen" model costs $500/month and you made 50 requests out of 500 total requests, you pay $50 (10% of the cost)

**Supported models include**:
- Models deployed through Amazon Bedrock Custom Import Model
- SAM (Segment Anything Model) for image segmentation

### 10. **Non-AWS OCR Services Cost** (`non_aws_ocr_services`)
**What it is**: OCR (Optical Character Recognition) services not hosted on AWS - specifically Mistral OCR and Mathpix

**How it's calculated**:
- Fixed monthly infrastructure costs for running these OCR services
- System tracks your usage (pages processed and API requests)
- Costs are distributed proportionally based on actual usage patterns
- **You pay**: Your percentage of usage × monthly infrastructure cost

## Overall Cost Calculation Overview & Optimization Strategies

### Usage-Based Charging
- **AI-ML API Calls**: You pay for what you use
- **Data Processing**: Costs based on volume processed
- **Storage**: Charged for data stored over time

### Shared Cost Distribution
- **Infrastructure**: Split equally among all active projects
- **Platform Services**: Distributed based on usage patterns

### Cost Adjustments
- **Volume Discounts**: Applied automatically for AWS services
- **Upfront Cost**: Additional upfront costs included in allocation
- **License Costs**: Distributed fairly across users

### Cost Optimization Strategies:

- **Model Selection**: Choose smaller, more efficient models for simple tasks (can save 70-90% on costs)
    - Example: Use GPT-4o-mini instead of GPT-4o for document summarization, basic Q&A, simple classification tasks
    - Reserve larger, more capable models for complex reasoning, creative writing, or multi-step analysis
- **Batch Processing**: Use Uptimize Azure batch processing endpoint
    - Process multiple documents together instead of real-time individual processing
    - Significant cost savings (almost 50%) for large volume operations
    - Reference: https://docs.uptimize.merckgroup.com/aiml/aiml_apis/openai_api/openai_batch/
- **Prompt Caching**: Implement prompt caching techniques to reduce repeated processing costs
    - Cache system instructions, large documents, and tool definitions
    - Can reduce costs by 90% for cached content (10% of original price for cache hits)
    - Especially effective for RAG applications with large document contexts
- **Data Cleanup**: Remove old vectors and unused experiments regularly
- **Usage Monitoring**: Track which services cost you the most each month
- **Efficient Prompting**: 
    - Write shorter, more focused prompts to reduce token usage
    - Use structured outputs (JSON) instead of verbose natural language responses
    - Break complex tasks into smaller, targeted prompts
- **Smart Caching**: 
    - Avoid re-processing the same data multiple times
    - Implement application-level caching for frequently requested results
    - Use prompt caching for conversations with consistent context
- **Token Management**:
    - Monitor token usage patterns and optimize prompt length
    - Use token counting tools to estimate costs before processing
    - Implement token budgets for different use cases
- **Service Selection**: Choose the most cost-effective service for each use case
- **Data Lifecycle**: Implement policies for data retention and cleanup
- **Usage Forecasting**: Plan your AI usage based on budget constraints
- **Architecture Optimization**:
    - Design systems to minimize redundant API calls
    - Implement intelligent routing to use appropriate models for different tasks
    - Consider hybrid approaches combining multiple AI services efficiently
- **Vector Database Optimization**: Use quantization and storage techniques to significantly reduce costs
    - **Quantization Methods**: Compress vectors to reduce storage requirements
        - **Scalar Quantization**: Reduces vector storage costs by approximately 74% with minimal accuracy loss
        - **Product Quantization**: Reduces costs by approximately 94% - ideal for very large vector collections
        - **Binary Quantization**: Reduces costs by approximately 93% - best for similarity search at scale
    - **Offload to Disk (On-Disk Storage)**: Store vectors on disk instead of RAM to reduce memory costs
        - Uses memory-mapped files (mmap) for flexible memory usage
        - Suitable for large collections when using fast SSD storage
        - Trade-off: Slightly slower access than in-memory, but significantly lower infrastructure costs
        - Can be configured per collection using `on_disk: true` parameter
    - Choose appropriate vector dimensions for your use case (smaller dimensions = lower costs)
    - Regularly clean up unused collections and outdated vectors

## Frequently Asked Questions

### Q: Why am I charged for services I didn't directly use?
**A:** Some costs are for shared infrastructure that benefits all projects (servers, networking, basic platforms). These are split fairly among all users.

### Q: Can I see my costs in real-time?
**A:** No, real-time cost visibility is not available. The pipeline runs once monthly to calculate and distribute costs. Final cost allocation is only available after the monthly processing.

### Q: When will users be able to see their respective costs for their use cases?
**A:** Cost data gets uploaded on the 6th of every month. After that, it will be available for you to view in Foundry Use Case Portal.

### Q: What if I think there's an error in my costs?
**A:** Contact the AI-ML Services team with your specific concerns.

---

# Release Notes

Please browse through the below pages to read the quarterly UPTIMIZE AI-ML Release Notes.

---

# AI-ML Release Notes: November 2025

---

## [MLFlow Prod Release Automated Model Deployment](aiml/mlflow/)

We are pleased to announce the release of the Automated Deployment Framework within UPTIMIZE MLflow, a significant enhancement developed in-house over the past few months. This new framework streamlines the deployment of your trained models, bridging the gap between model development and deployment. With this release, we offer end-to-end MLOps with MLflow that is up to 80% more cost-efficient compared to commercial MLOps products in the market. Key features include one-click deployments, comprehensive API management, role-based access controls, deployment monitoring, auto-scaling, and enhanced security. This framework aims to accelerate your time-to-production, ensure consistent environments, and simplify operations for deploying models effectively.

---

## [AWS Guardrails (Preview Dev Release)](aiml/aiml_apis/guardrails/)

If you want to safeguard your applications, AWS Guardrails provides comprehensive AI safety and content moderation capabilities for any type of application. Built on AWS Bedrock Guardrails, you can enable robust content filtering, personally identifiable information (PII) detection, contextual grounding and topic restrictions to ensure responsible AI usage. Guardrails act as protective barriers, monitoring and filtering both input prompts and model outputs to prevent harmful or inappropriate content. The Guardrails API is now available in the development environment!

---

## [GPT‑5.1 Model Release](aiml/aiml_apis/openai_api/)
You can now access the GPT-5.1 model in the development and production environment via our AI-ML API offering. This model brings improved reasoning, stronger tool-use/function calling, better long‑context handling, enhanced code generation, while offering greater stability and lower latency for production-grade applications.

---

## [Claude Sonnet 4.5  (EU) Model Release](aiml/aiml_apis/bedrock_api/chat_and_embedding_models/)
The Claude Sonnet 4.5 model is now available for use in both development and production environments in the EU region. This model is designed to excel in coding capabilities and offers enhanced performance and improved reasoning. You can access the Claude Sonnet 4.5 model now as a part of our API services.

---

## [Tavily Extract Endpoint Release](aiml/aiml_apis/aiml_apis/tavily_api/)
The Tavily Extract endpoint allows you to extract web page content from one or more URLs. This API is particularly beneficial for integration with Retrieval-Augmented Generation (RAG) applications. The extraction process can be optimized by first using the Tavily Search endpoint to identify relevant web pages before fetching the complete content with the Tavily Extract endpoint. Please review the usage guidelines and restrictions in the UPTIMIZE user documentation before using the Tavily API.

---

## [Monitoring Consumption of AI-ML APIs](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da)
To help you manage your usage of AI-ML APIs effectively, you can now monitor your daily token consumption directly within Foundry. Navigate to your requested token within the AI-ML Request Form and click on "View Usage Details." Here you will find token level information, such as your remaining daily quota, default daily quota, batch processing quota, expiry date of your quota, last hit timestamp, total number of hits and the specific endpoints you can access. Please note that all timestamps are displayed in UTC.

---

Yours,  
AI-ML Services

---

# AI-ML Release Notes: September 2025

---

## Documentation Structure Update

We have made significant structural updates to our UPTIMIZE Documentation. This enhancement aims to provide clearer navigation and improved access to information regarding our AI-ML services. In case you have bookmarked the older links, please update them accordingly.

---

## Claude 4 Sonnet - EU Region

The Claude 4 Sonnet model is now available in the EU region. Please refer to the UPTIMIZE Documentation for the naming convention of EU-deployed models.

---

## Reasoning Parameters for GPT-5
The reasoning parameter for the GPT-5 model series has been enabled. By default, the `reasoning_effort` parameter is set to minimal. We recommend keeping this setting unless your use case requires a different value. To adjust it (for example, to medium), include the following in your API request:
"reasoning_effort": "medium"

---

Yours,  
AI-ML Services

---

# AI-ML Release Notes: July 2025

---

## Azure OpenAI Batch Processing Production Release

We are pleased to announce that Azure OpenAI Batch Processing is now available in the production environment! This powerful service allows for efficient handling of large-scale tasks, providing significant cost savings and high throughput for your data processing needs. We recommend utilizing this service for your large dataset processing to enhance productivity.

#### Key Features:
- **Cost Efficiency**: Achieve up to 50% reduction in costs compared to standard pricing, making large-scale tasks more economical.
- **Dedicated Resources**: Utilizes a separate pool of resources to ensure efficient processing without impacting other services.
- **Separate Quota**: Batch requests utilize an independent quota, ensuring that online workloads remain unaffected.
- **High Throughput**: Designed for processing large datasets in parallel, enhancing the time to results.
- **24-Hour Turnaround**: Targeted processing time is within 24 hours.

---

## Tavily Preview Release

We are excited to announce the preview release of Tavily, a search engine optimized for LLMs to search and retrieve the most relevant information from online sources. Unlike traditional search APIs which retrieve results based on a user query, Tavily API has the ability to aggregate up to 20 sites per request and uses AI to score, filter, and rank the most relevant sources for the user query. Developers can integrate Tavily API into their RAG applications to search or retrieve precise information & analyze the results. The current version of the Tavily API is a preview version and it is available only in the development environment. Production release is planned for **1st of August**. 

**NOTE**: Bing search API will be retired as of **11th of August**. Please ensure to refactor your application to replace Bing with Tavily search.

---

## AWS Textract Production Release

The production release of AWS Textract is now live! This upgrade brings powerful new features designed to enhance your document processing experience, including asynchronous operations that enable processing of large documents beyond the previous 10MB synchronous limit, and Version 2 of the AWS Textract Synchronous API which introduces two new endpoints offering improved performance and expanded capabilities for synchronous document analysis. We encourage all users to transition to the production environment to take advantage of these new features!

---

## Cohere Embed 3 Production Release

We are excited to introduce the production release of Cohere Embed 3, which will enhance your semantic search capabilities, allowing you to generate high-quality embeddings for various applications. It is now available in the production environment, and we encourage you to explore its features and capabilities!

---

## Foundry Connectivity Update

The process to connect with AI-ML APIs from Foundry has been updated, where users are required to create external sources with the AI-ML base URL, which can be used across multiple code repositories within the same use case. Please refer to our updated documentation for more information on this.

---

Yours,  
AI-ML Services

---

# AI-ML Release Notes: June 2025

---

## Azure OpenAI Batch Processing

Azure OpenAI Batch Processing is now available in the development environment! It is a powerful service designed to efficiently handle large-scale and high-volume tasks.

#### Key Features:
- **Cost Efficiency**: Achieve up to 50% reduction in costs compared to standard pricing, making large-scale tasks more economical.
- **Dedicated Resources**: Utilizes a separate pool of resources to ensure efficient processing without impacting other services.
- **Separate Quota**: Batch requests utilize an independent quota, ensuring that online workloads remain unaffected.
- **High Throughput**: Designed for processing large datasets in parallel, enhancing the time to results.
- **24-Hour Turnaround**: Targeted processing time is within 24 hours.

The tentative release date for Azure OpenAI Batch Processing in the production environment is **20th June**.

---

## Access to Latest LLMs

We are pleased to bring you the new generation models as a part of our API services!

1. **New OpenAI Models**
   - **Models**: GPT 4.1 and 4.1-mini
   - **Availability**: Both models are now accessible in Development and Production environments.

2. **New Bedrock Models**
   - **Model**: Claude 4 Sonnet
   - **Availability**: This model is available in both Development and Production environments.

3. **New Deepseek Models**
   - **Model**: Deepseek R1 and Deepseek V3-0324
   - **Availability**: Both models are now accessible in Development environment.
   - **Production Release**: Tentative scheduled for June 20th.

---

## MLFlow Production Release

We are thrilled to announce the production release of MLFlow, an internally hosted version of the popular MLOps framework, MLFlow! This upgrade is optimized to streamline the machine learning lifecycle and offers enhanced functionality for experiment tracking, collaborative development, and model lifecycle management, all while incorporating enterprise features for security and scalability.

**Call for Action**: We encourage all users to transition to the Production environment. The Development environment will continue to exist for current use cases; however, it is advised to move to the production environment as soon as possible to ensure stability and access to the latest features. Happy modeling!

---

## Call For Contribution - Merck Internal LLM Benchmark Dataset

We are excited to announce the initiative to create an Internal LLM Benchmark Dataset representing LLM use cases within Merck! This dataset will help evaluate the performance of LLMs for Merck-specific tasks and assist users in selecting the right model for their needs.

Contribute to this cross-sectorial initiative with your LLM use cases. Share your task types, sample datasets, expected outcomes, and evaluation criteria in the context of your use case. Your insights and contributions are invaluable in creating a benchmark dataset that truly reflects our needs at Merck. By sharing your experiences and use cases, you'll play a crucial role in shaping a resource that benefits everyone.

---

## AWS Textract Updates

Please note that AWS Textract has been upgraded in the development environment. The same changes will be rolled out to production tentatively on **20th June**. Please plan to refactor your application to ensure the change on production can be executed smoothly. The users of the Textract service will be contacted separately to coordinate the changes in the production environment.

---

## Whitelisting for Access to AI-ML Services

We have streamlined the process of whitelisting remote IPs and AWS factory accounts in case you need to access our services from your applications. Please note that access requests will be subject to architecture review to ensure the access is safe, secure, and as intended.

---

Yours,  
AI-ML Services

---

# AI-ML Release Notes: May 2025

---

## Reasoning Models from Azure OpenAI and Anthropic (Bedrock)

The reasoning models, o1-mini and o3-mini, have finally been released for production use and are now available via the UPTIMIZE AI-ML API services. The o1-mini model and o3-mini model are deployed with the Global Standard policy, which involves processing the data across multiple regions. For region-sensitive data, it's best to use a model that processes data within a single region.

Additionally, Claude 3.7 Sonnet, Anthropic's first hybrid reasoning model and claimed to be their most intelligent model to date, has now been released and is available to use via the UPTIMIZE Bedrock API as a preview version. It's state-of-the-art for coding and delivers significant improvements in content generation, data analysis, and planning. Claude 3.7 Sonnet uses cross-region inferencing (automatically selects the optimal AWS Region within the geography to process your inference request) as per the model availability and resources. For region-sensitive data, it's best to use a model that processes data within a single region.

---

## MCoder

MCoder, our AI code assist tool designed to boost the productivity of developers with features such as chatting within the IDE, editing, and applying changes to the code for optimization and adherence to best practices, has now been upgraded to harness the power of additional OpenAI (excluding o-series models) and Claude 3-series models (including 3.7 Sonnet), available within the UPTIMIZE AI-ML services. This enables users to choose between the models available within the UPTIMIZE AI-ML services that best suit their requirements. The capability of providing autocompletions currently supports selecting between the available OpenAI models only, while integration of Claude models for autocompletions is currently in progress. MCoder now also supports JetBrains IDEs in addition to VSCode. Please do visit MCoder's documentation to understand the steps required to integrate the additional models for utilizing the above-mentioned features.

**Note**: MCoder auto configuration syncing has been decommissioned. Users are requested to switch to manual YAML-based configuration to ensure continued functionality.

---

## Mistral OCR

We are thrilled to release the much-awaited Mistral OCR API that has claimed to set a new standard in document understanding. Mistral OCR excels in understanding complex document elements, including interleaved imagery, mathematical expressions, tables, and advanced layouts such as LaTeX formatting. The model enables deeper understanding of rich documents such as scientific papers with charts, graphs, equations, and figures. The output is returned in Markdown format, which is ideal for LLMs to process as context or advanced RAG systems taking multimodal documents (complex PDFs) as input.

This API is currently available in the development (DEV) environment only. We highly encourage all of you to please go through the documentation and try out the advanced capabilities brought by Mistral OCR.

---

Yours,  
AI-ML Services
