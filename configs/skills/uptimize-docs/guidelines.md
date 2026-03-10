# Guidelines

This sections provides essential guidelines and best practices in UPTIMIZE.

- ### [Gen AI Guidelines](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/)

---

# Access Policy Management - Egress & Ingress

## 1. Introduction
The **Access Policy Management** provides a centralized way to control data flows between services using **egress** (outbound) and **ingress** (inbound) policies.  

- **Egress Policy:** Controls outbound connections from your platform to external destinations (e.g., Snowflake, AppService).  
- **Ingress Policy:** Controls inbound connections from external sources into your platform.  

This feature ensures secure, auditable, and standardized access control for data movement while simplifying the request and approval process.

Currently, this functionality supports **Snowflake** and **AppService**, with additional platforms planned in future releases.

---

## 2. Feature Workflow
The policy lifecycle follows two main processes:

1. **Request & Creation Flow:**

- The user starts the process to create a new policy.
- The user submits a request with the necessary details.
- The system marks the request as pending.
- The system notifies the relevant stakeholders (SDOs and use-case owners).
- The request goes through a review process:
  - The endpoints and policy will be reviewed by the at least two SDOs.
- Based on the review:
  - **If approved:**
    1. The request is marked as approved.
    2. The operations team and use-case owners are informed.
    3. The resources are set up as requested.
    4. The request is marked as provisioned.
    5. The use-case team is notified about the successful setup.
  - **If rejected:**
    1. The request is marked as rejected.
    2. The use-case team is notified about the rejection.
- The process ends after either provisioning or rejection notification.


#### State Diagram - Request Flow

![Request Flow](assets/foundry/request_flow.png)

2. **Decommission Flow:**

- The use-case admin starts the process to remove the policy.
- The system marks the policy as scheduled for removal.
- Both the operations team and the use-case owners are notified.
- The operations team carries out the removal of the policy.
- Once removed, the system marks the policy as decommissioned.
- The use-case owners get a confirmation that the policy has been removed.
   
#### State Diagram - Decommission Flow

![Decommission Flow](assets/foundry/decommissioned_flow.png)
---

## 3. Step-by-Step: Creating Egress/Ingress Policy in Application UI

Follow these steps in the application UI:

### A. Access the Access Policy Module
1. Open [Unified Network Requests Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.b18de3ab-7c80-41a6-a94b-fed60d1f05fa)
2. CLick on **Create Access Request**.

![Create Access Request](assets/foundry/create_access_request.png)


### B. Create a New Policy
#### Guide Outline
- Read the **Guide Outline** screen 
- Click **Select Use Case**  

![Guide Outline](assets/foundry/guide_outline.png)


#### Select Use Case

- Fill in the required details:  
   - **Select Use Case** (e.g., AppServiceSnowflakeTrial) 
   - **Select Platform** (e.g., AppService/Snowflake)  
   - **Reason for Access** 
   - Click on **Select Policy**  

![Select Use Case](assets/foundry/select_use_case.png)

#### Select Policy
- Fill in the required details:  
   - Select if you will **Create New Policy** or **Select Existing Policy**
   - If select **Create New Policy**
      - Policy Type (e.g., Egress/Ingress) 
      - Policy Name (e.g., Snowflake_account_read_policy) 
      - Policy Description (e.g., Need to create policy to be able to access xyz) 
   - If select **Select Existing Policy**
     - Pick from the list of existing policies
     - Click Submit to finalize your request.
  - NOTE: You cannot modify:
    - The policy name or description.
    - The endpoint list (no additions or deletions allowed). 
   - Click on **Add Endpoints** 

![Select Policy](assets/foundry/select_policy.png)

#### Add Endpoints

In the final step, you will define the endpoint details that the access policy should govern,
You have four types of endpoint options to choose from:

- Hostname -- e.g., example.com
- IP Address -- e.g., 192.168.1.1
- CIDR Range -- e.g., 192.168.1.0/24
- Existing Endpoint -- reuse a previously defined and approved endpoint
- Click **Submit** to finalize your request 

Each endpoint entry must include:

- Endpoint Value (e.g., domain name, IP address, or CIDR block)
- Port (the destination port number associated with this endpoint)

![Add Endpoints](assets/foundry/add_endpoints.png)


### D. Track Policy State
- Open [Unified Network Requests Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.b18de3ab-7c80-41a6-a94b-fed60d1f05fa)
- To view **open requests**: Go to the **Personal tab**, click on **Open Requests**, and you will see the list of pending requests.
- To view **all requests**: Go to the **Personal tab**, click on **All Requests**, and you will see the complete list of requests.

![Track Policy State](assets/foundry/Open_Requests.png)


### E. Edit Policy
- Open [Unified Network Requests Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.b18de3ab-7c80-41a6-a94b-fed60d1f05fa)
- Go to the **Personal tab**, click on **Open Requests**, and you will see the list of **pending requests**.
- Click on **Edit button** and update your policy

![Edit Policy](assets/foundry/Edit_Requests.png)


---

## 4. Current Scope & Future Enhancements

- **Supported Platforms (Current):**  
  - **Snowflake**  
  - **AppService**  

- **Planned Platforms:**  
  - AWS  
  - Others as per roadmap  

---

---

# Gen AI Guideline - Overview

## Scope

The scope of this guideline is a comprehensive guide to assist developers in generating GenAI use cases to ensure standardization, compliance and improved operational efficiency with faster time to market. 

## LLM Development Process Flow

![LLM Process flow](/assets/genai-guideline/mermaid_llm_development_process.png)

Developing generative AI (GenAI) use cases requires a systematic and iterative approach to ensure high-quality, secure, and effective solutions. The flowchart outlines a comprehensive process that incorporates best practices in AI development, from initial requirements gathering to final deployment and monitoring.


1. **Collect and prioritize requirements**
   - Begin by gathering and prioritizing project requirements

2. **Solution Design**
   - This phase consists of three critical steps:
     a. Define objective
     b. System Architecture (refer to Architecture chapter)
     c. Security Consideration

3. **Create Evaluation Dataset**
   - Work with domain experts to develop a robust evaluation dataset
   - Refer to Quality chapter for guidelines

4. **Implementation and Optimization**
   - Develop and refine the GenAI solution
   - Consult Best practices chapter for guidance

5. **Evaluate LLM application**
   - Assess the performance of the Large Language Model application
   - Refer back to Quality chapter for evaluation standards

6. **Acceptability Check**
   - Determine if the application meets the required standards
   - If not acceptable, loop back to the implementation stage

7. **Deploy and Monitor**
   - Once approved, deploy the application and establish monitoring protocols

**Continuous Improvement**

- The process includes a feedback loop where user input can trigger a return to the evaluation dataset creation stage
- This ensures the GenAI solution evolves with user needs and expectations

By following this structured approach, development teams can create GenAI solutions that are not only technically sound but also aligned with user requirements and quality standards. The emphasis on iterative development and continuous feedback helps in creating more robust and effective AI applications.

## Content

| Link                                                                                                  | Description                            |
|-------------------------------------------------------------------------------------------------------|----------------------------------------|
| [Gen AI Guideline - Architecture](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_architecture) | Guidelines on the architecture of Gen AI applications |
| [Gen AI Guideline - Quality](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality)           | Guidance on ensuring the quality of Gen AI applications |
| [Gen AI Guideline - Best practices](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_best_practices) | Best practices for developing Gen AI applications |

## Code Assistant

MCoder is a code assistant tool designed to help developers write, debug, and optimize code efficiently. It leverages machine learning models to provide intelligent code suggestions, detect potential issues, and offer solutions in real-time. For more information, visit the MCoder documentation at: https://docs.uptimize.merckgroup.com/aiml/mcoder/

## Existing Guidelines:

| Guideline | Link |
|-----------|------|
| Uptimize - Architecture Governance | [Link](https://docs.uptimize.merckgroup.com/UPTIMIZE/getting-started/architecture/architecture-governance/) |
| ACE - Community of Practice - GenAI LLM | [Link](https://wiki-nregprod.merckgroup.com/display/AKB/GenAI+-+LLM) |


## Terms and Conditions (PII Data and Confidential Information)

For guidelines on handling personal and confidential information, please refer to the my GPT-Suite Terms and Conditions. You can review these terms at [this link](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).

## Feedback

In the rapidly evolving landscape of Generative AI, this guideline aims to consolidate the most current information and best practices. If you notice any missing or outdated information, we welcome your feedback to help us improve this guideline. Please share your insights at [UPTIMIZE Feature Forum](https://merckgroup.canny.io/uptimize-ai-ml-services?category=genai-guideline&selectedCategory=genai-guideline).

---

# Gen AI Guideline - Architecture
*UPTIMIZE offers a comprehensive suite of tools for developing your own Gen AI applications. Based on business requirements, the general recommendation is to opt for the simplest solution that fully meets all business needs. The solution should be as simple as possible, yet only as complex as required.*

<br/>

## Overview - UPTIMIZE Gen AI Offerings
![Architecture Overview](/assets/genai-guideline//genai_architecture_overview.png)

UPTIMIZE's GenAI components are tightly integrated. Both **myGPT Suite** and **UPTIMIZE Foundry AIP** are state-of-the-art, no-/low-code components of the UPTIMIZE ecosystem. They are designed to work together: you can prototype quickly, scale responsibly, and choose the right layer for data, governance, and user experience. For more flexibility on custom developments the **AI-ML Services** provide a governed expert toolkit.


---

### myGPT Suite
*easy to moderate in usage, no-code*, low organizational overhead

[myGPT Suite](https://mygpt-suite.uptimize.merckgroup.com) serves as the primary Gen AI chat-based solution at UPTIMIZE. It supports various models, including text and image generation, as well as file analysis and creation. myGPT Suite allows users to effortlessly create both private and shared assistants that can interact with different models, websites and documents. While it is user-friendly and providing a well- known and adpated interface, its behavior cannot be finely tuned, and the user experience is fixed as designed and cannot be modified.

It offers wide a range of advanced features that enable further customization. By supporting the use of use case specific vector databases, integrating custom APIs, and utilizing tools, it can serve as a familiar user interface for end users while managing complex workflow logic beneath the surface, such as within an UPTIMIZE AWS Factory Account.

Features for building feature-rich asssistants in myGPT Suite:

#### Bring your own File
Assistants allow to upload files, connect to web sites or even UPTIMIZE Foundry data sets to work on them with custom use case specific system prompts.

#### Bring your own Collection
Assistants allow the integration of custom vector databases used with the LLM framework of myGPT Suite.

#### Bring your own Action
Assistants allow the integration of APIs (externally and self-hosted) to retrieve information, process information and even trigger actions like creating tickets or sending notifications.

#### Bring your own Tool
Assistants allow the integration of APIs from external and self-managed tools (e.g., a customized Gen AI use case) to leverage the well-known myGPT Suite interface and user authorization.

#### Bring your own Tool vs. Bring your own Action
While both the "Bring Your Own Actions" feature and the "Bring Your Own Tool" feature involve API integration with myGPT Suite, they have a fundamental distinction. With the "Bring Your Own Actions" feature, the orchestration and model are fully managed by myGPT Suite, which offers limited options for customization. In contrast, the "Bring Your Own Tool" feature permits the orchestration to be entirely handled by the tool itself, enabling custom functionality while utilizing the well-known myGPT Suite interface. As a result, the "Bring Your Own Tool" feature cannot be combined with other assistant features. 

<br>

*Additionally, all Assistants can also be configured to include UPTIMIZE Traces, for complete insights in the usage of the configured assistant, including e.g., user feedback on responses. (available soon)*

<br/><br/>

### UPTIMIZE Foundry AIP
*easy to moderate in usage, no-code/low-code*, low to medium organizational overhead

[UPTIMIZE Foundry](https://palantir.mcloud.merckgroup.com) offers AIP a Gen AI toolkit, which supports a wide range of generative AI use cases. Seamlessly integrated into UPTIMIZE Foundry, AIP enables the rapid development of Gen AI applications and the easy enhancement of existing use cases with advanced AI features. This integration is particularly advantageous when the entire use case, including its data, is already stored within UPTIMIZE Foundry, allowing for streamlined development on a single platform.

Prime use cases consist of integration of agents in business workflows to e.g. summarize available information from related object types, analyze documents, find and treat risks etc. 

AIP supports all levels of agentic autonomy:

 | Level | Description |
 |---|---|
 | Level 0 - Manual| Humans do all labor. |
 | Level 1 - Assistance | Humans prompt, chatbots reply. |
 | Level 2 - Advisory | Humans decide. Agents suggest.|
 | Level 3 - Advisory | Human oversight. Agents handle most scenarios. |
 | Level 4 - Full Autonomy | Humans set strategy. Agents handle all scenarios. |

<br>

As a rule of thumb, business value increases with increased autonomy. AIP is designed to handle fully autonomous decision making up to writebacks.

The following modules are available:


#### [AIP Logic](https://palantir.mcloud.merckgroup.com/docs/foundry/logic/overview/)
No-Code tool for LLM-Powered functions that offers an easy-to-use platform for developing LLM powered functionality, enabling the straightforward creation of complex logic blocks. With prompt adaptation seamlessly integrated with UPTIMIZE Foundry's data and ontologies, along with intuitive chain-of-thought debugging, this environment facilitates the rapid development of generative AI features. Users can efficiently build and refine Gen AI capabilities without the need for extensive coding, leveraging UPTIMIZE Foundry's robust and secure infrastructure for streamlined and effective AI solution creation.

#### [AIP Agent Studio](https://palantir.mcloud.merckgroup.com/docs/foundry/agent-studio/overview/)
Create reusable agents on specific data and tools (chat focused).

#### [Automate AIP Integration](https://palantir.mcloud.merckgroup.com/docs/foundry/logic/aip-logic-integration-automate)
AIP Logic can now be automated such that Ontology edits can be automatically applied or staged for human review. These automations can be triggered on existing objects or when new objects are created.

#### [OSDK AIP Integration](https://palantir.mcloud.merckgroup.com/docs/foundry/ontology-sdk-react-applications/overview)
Build an fully fledged web-app accessing the ontology now also including AIP integration.

#### [AIP Evals](https://palantir.mcloud.merckgroup.com/docs/foundry/aip-evals/overview/)
A testing environment to evaluate the performance of your AIP Logic, AIP Agent or code-authored functions.

#### [AIP Observability](https://palantir.mcloud.merckgroup.com/docs/foundry/aip-observability/overview/)
Overview over AIP workflow executions, helping users to understand performance of agents, functions, language models, automation, Actions and Ontology.

#### [AIP Model Catalog](https://palantir.mcloud.merckgroup.com/docs/foundry/model-catalog/overview/)
Helps with discover and orientation of all LLM models provided by Palantir.
 
#### [AIP Assist](https://palantir.mcloud.merckgroup.com/docs/foundry/assist/overview/)
LLM-powered support tool designed to help users navigate and understand the Foundry platform.


<br/><br/>

### UPTIMIZE AI-ML Services
*moderate to complex in usage, code based, medium to high organizational overhead*

For building highly customized Gen AI use cases within UPTIMIZE using UPTIMIZE App Service or UPTIMIZE AWS Factory Accounts it is highly recommended to use the respective UPTIMIZE offerings to ensure compliance and security in the use of Gen AI tooling. These APIs and services are reachable from the Merck network including the [UPTIMIZE App Service](https://docs.UPTIMIZE.merckgroup.com/appservice), the [UPTIMIZE AWS Factory Accounts](https://docs.UPTIMIZE.merckgroup.com/factory), the [UPTIMIZE AWS Labs](https://docs.UPTIMIZE.merckgroup.com/lab/) and [UPTIMIZE Foundry](https://docs.UPTIMIZE.merckgroup.com/foundry).
<br/>
**It is highly recommended to be used (e.g. the LLM APIs) when integrating vendor provided Gen AI solutions as it provides a secure and governed access to the most common models.**

<br/>

*The following AI-ML Services are available:*

#### Uptimze Vector Database 
The [Uptimze Vector Database](https://docs.UPTIMIZE.merckgroup.com/aiml/vector_database) integrates Qdrant, as a centrally managed vector database, to efficiently store and retrieve high-dimensional vectors for large language models.

#### UPTIMIZE Traces
[UPTIMIZE LLM Traces](https://docs.UPTIMIZE.merckgroup.com/aiml/llm-traces), powered by Langfuse, enables developers to trace, evaluate, and monitor LLM applications with detailed insights like user feedback and token consumption, while offering features like prompt version control and secure access.

#### UPTIMIZE OpenAI API
The [Uptimze OpenAI API](https://docs.UPTIMIZE.merckgroup.com/aiml/aiml_apis/openai_api) acts as a controlled and secure proxy for the Azure OpenAI API.

#### UPTIMIZE Bedrock API
The [Uptimze Bedrock API](https://docs.UPTIMIZE.merckgroup.com/aiml/aiml_apis/bedrock_api) functions as a controlled and secure proxy for the AWS Bedrock API.

#### Nomic Embeddings API
The [Nomic Embedding API](https://docs.UPTIMIZE.merckgroup.com/aiml/aiml_apis/nomic_embedding_api) offers open-source, high-quality text embeddings based on a long-context BERT model for various NLP applications.

#### Tavily API
The [Tavily API](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/aiml_apis/tavily_api) offers controlled access to the web search API from Tavily.

#### MLFlow
The [MLFlow](https://docs.uptimize.merckgroup.com/aiml/mlflow) offers controlled access to the MLFlow tooling.

#### Mathpix API
The [Mathpix API](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/mathpix) offers the capability to process both printed and handwritten content in STEM documents, encompassing mathematics, text, tables, and chemistry diagrams, from images, stroke data, or PDF files.

#### Mistral OCR API
The [Mistral OCR API](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/mistral_ocr) Mistral OCR is a state-of-the-art Optical Character Recognition (OCR) model that brings intelligent document understanding.

#### UPTIMIZE Deepseek API
The [Uptimze Deepseek API](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/deepseek) acts as a controlled and secure proxy for the Deepseek model.


<br/><br/><br/>


## Tooling Guidance
The following graph gives a condensed overview on for what use case what UPTIMIZE offerings may fit best.

![Tooling Guidance](/assets/genai-guideline/tooling_guidance.png)

---

### Chat-based Interfaces using myGPT Suite
myGPT Suite, with its versatile extensions, serves as a foundational architecture for various chat-based Generative AI applications aiming at personal and team workflow productivity. Below are some key use cases and solutions provided by myGPT Suite:

**Q&A with a fixed set of files (e.g., PDFs)**
<br/>
Utilize the myGPT Suite Assistant along with the "Bring Your Own Files" feature. This allows users to upload multiple files and set a system prompt, enabling the assistant to answer questions based on these files.
<br/><br/>

**Ad-Hoc questions on a dataset, e.g., stored as CSV**
<br/>
The myGPT Suite Data Analyst can handle various queries regarding the data file, including the ability to visualize data using charts.
<br/><br/>

**Chatbot for a custom set of files that regularly change or need a custom ingestion**
<br/>
If suitable, using a knowledge folder in a myGPT Suite Assistant. Otherwise, implement an ingestion pipeline using UPTIMIZE Foundry or UPTIMIZE AWS Factory to incorporate the content of files into a vector database provided by UPTIMIZE AI-ML services. This vector database can then be linked to a private or shared myGPT Suite Assistant via the "Bring Your Own Collection" feature.
<br/><br/>

**Assistant for analyzing data from an API and executing actions**
<br/>
The myGPT Suite "Bring Your Own Action" feature enables the creation of a myGPT Suite assistant that retrieves data from an API (whether self-hosted or third-party), analyzes it, and performs actions by calling another API (e.g., creating a ticket).
<br/>
<br/>

**Easy-to-Use chat interface for an existing Gen AI solution**
<br/>
By using the myGPT Suite "Bring Your Own Tool" feature, you can create a myGPT Suite assistant that interacts with an API of an existing Gen AI tool, leveraging its Gen AI capabilities. In this scenario, myGPT Suite functions solely as a user interface.

---

### AI enabled Workflows using Uptimize Foundry AIP
**UPTIMIZE Foundry AIP Logic** empowers users to effortlessly leverage existing ontologies and create feature-rich automations that seamlessly integrate into existing use cases. With its intuitive interface, AIP Logic functions can accept both ontology objects--such as "machine incidents" and all kind of other string inputs like the description of a current machine incident. By visually chaining different blocks using a variety of available tools, users can build complex operations with ease. For example, you can utilize a Large Language Model (LLM) to search for similar machine incidents in the respective data set and query which currently available technicians resolved them in the past. 
<br/> 
AIP Logic can trigger actions and functions, such as sending an email (using the UPTIMIZE Notification Service) to a technician to address an incident. Automating AIP Logic is straightforward and can be achieved with just a few clicks -- for instance, setting the logic to run automatically whenever a new incident is added to the backing data set of the object "machine incidents".
<br/>
Moreover, AIP Logic provides user-friendly and detailed debugging options, offering deep insights into the workflow's execution process. This ensures transparency and simplifies troubleshooting, enhancing the overall efficiency.
For more details about the various concepts and options available in AIP Logic, please visit this [overview](https://www.palantir.com/docs/foundry/logic/overview).


<br/><br/><br/>


## Architecture Guiding Questions
When selecting the appropriate platform or architecture for a Gen AI use case, similar considerations apply as with other Data & AI use cases. Factors to consider include the required skill set, ranging from low/no-code to full-stack cloud and software engineering, seamless and efficient connectivity to required data and user access management.

Here are some considerations when choosing the right architecture:


### UI
**1. Chatbot like interface**
*The user interacts with a LLM model via an chat-like interface.*

- **myGPT Suite:** Provides no-code access through a company-wide familiar user interface, enhanced with various integrated features. It allows for the creation of both private and shared assistants.

- **Foundry AIP:** With AIP Agent studio feature chatbots can be build and integrated in the Foundry Ecosystem, as well as connected to myGPT Suite (available soon). It is particularly strong when working on assets of the Foundry ecosystem.

- **UPTIMIZE App Service:** Utilizes UPTIMIZE Gen AI APIs with Streamlit or React-FastAPI templates to create customized LLM chats. This requires coding and specific Gen AI skills but offers easy access management.

- **UPTIMIZE AWS Factory Account:** Employs UPTIMIZE Gen AI APIs to develop highly customized interfaces, requiring advanced cloud, software engineering and Gen AI skills. This option involves a significant organizational overhead.

**2. Backend/Application usage**
*The Gen AI capabilities are used by the application itself by e.g., predefined prompts.* 

- **myGPT Suite:** Making the easy to create myGPT Suite assistants available as API and use it in all kind of applications.

- **Foundry AIP:** AIP Logic allows the integration of powerful, complex no/low-code Gen AI features into UPTIMIZE Foundry applications.

- **UPTIMIZE App Service:** Not recommended unless the application itself runs on the App Service. If so, integration with the UPTIMIZE Gen AI APIs is possible, requiring coding and Gen AI skills. Limited scaling possibilities for production releases. 

- **UPTIMIZE AWS Factory Account:** Utilizes UPTIMIZE Gen AI APIs to create highly customized APIs for use in various applications. Applications can also be developed and operated within the account. Requires advanced cloud, software engineering and Gen AI skills, with significant organizational overhead.



### Data
*Important considerations for the data used in Gen AI applications must also in general include the systems where the data resides (connectivity), frequency of data changes, and whether ingestion is necessary.*

**1. Using model knowledge**
*Select a model and utilize its trained knowledge.*

- All UPTIMIZE offerings support a selection of up-to-date models. For specific custom models, UPTIMIZE AWS Factory Accounts are recommended. However, it is strongly advised to consult with the UPTIMIZE Gen AI team for clarification.

**2. Custom data (RAG approaches)**
*LLM models interacting with custom data to, for example, analyze datasets or answer questions related to custom documents.*

- **myGPT Suite:** Offers multiple options for custom data. Supports assistants with custom files (various formats), websites, or predefined vector stores. Adding new sources is a manual process but fully supported by the UI. No specific knowledge of embeddings or chunking is needed. Uploading data files for detailed LLM-powered analysis is supported.

- **Foundry AIP:** Convenient for use with Foundry data, allowing powerful analysis of large datasets. Custom sources must be uploaded or connected to Foundry, with automated source updates possible. Full UI support is provided.

- **UPTIMIZE App Service:** Utilizes UPTIMIZE Gen AI APIs to work with custom datasets from UPTIMIZE Foundry sources. Custom document mechanisms require implementation (coding skills needed). Vector DB and embeddings can be used from the UPTIMIZE Gen AI Services offering, requiring detailed knowledge and skills.

- **UPTIMIZE AWS Factory Account:** Offers full flexibility using UPTIMIZE Gen AI Services to develop highly customized pipelines and apps for various data sources. Requires advanced cloud/software engineering and Gen AI skills, with significant organizational overhead.

**3. Fine-tuned models**
*Fine tune a model for specific use cases*

- Experts only. Consider consulting the [UPTIMIZE AI-ML Team](mailto:gpt-api@merckgroup.com) team to determine the best approach. Achieving appropriate results requires very high levels of skill and expertise in this area. UPTIMIZE AWS Labs as well as UPTIMIZE AWS Factory Accounts leveraging Sagemaker can be used.


### Output
**1. Text** 
*The Gen AI output is in text form*

 - Text output is supported by all UPTIMIZE Gen AI offerings.

**2. Images**
*The Gen AI output is an image*

- **myGPT Suite** and the **UPTIMIZE Gen AI APIs** are supporting models with image capabilities. 

**3. Code**
*The Gen AI output is executable code*

- **myGPT Suite** and the **UPTIMIZE Gen AI APIs** can be used to generate code. **myGPT Suite** also supports the execution of python code. **Foundry AIP Assist** supports integrated development in Foundry. For local development **[MCoder](https://docs.UPTIMIZE.merckgroup.com/aiml/mcoder)** is the recommended tool.
<br/><br/>
*Note: developing solutions that execute LLM generated code from user queries has to be set up extra cautious as this implies a threat to the hosting systems. Using predefined services like [AWS Bedrock code interpretation](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-code-interpretation.html) is highly recommended. For local development of LLM executed code [Autogen Code Executor](https://microsoft.github.io/autogen/0.2/docs/tutorial/code-executors/) is also providing additional features as well as a safe environment.*


<br/><br/><br/>


## Functionality & Technology Mapping 

| **Functionality**                                                                | **Technologies/Products**                 | **Tasks**                                           |
|----------------------------------------------------------------------------------|-------------------------------------------|-----------------------------------------------------|
| **F1**:<br> - No Code<br> - Interact with LLM<br> - Grounding Limited Documents  | myGPT Suite Private Session                     | <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F2 (In addition to F1)**:<br> - Custom Instructions<br> - Tweak some LLM Parameters<br> - Grounding with Websites | myGPT Suite Private Assistant                   |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F3 (In addition to F2)**:<br> - Collaboration<br> - Access control             | myGPT Suite Shared Assistant                    | <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F4 (In addition to F3)**:<br> - Grounding with large Document collections or Database | UPTIMIZE Foundry AIP Agent Studio<br><br>myGPT Suite BYO Collection + custom ingestion pipeline<br><br>UPTIMIZE AWS Factory/App Service + UPTIMIZE AI-ML Services |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span> |
| **F5 (In addition to F4)**:<br> - Customised operations with LLMs<br> - Text2SQL<br> - Web Agents<br> - Call APIs | myGPT Suite BYO Actions/Tools<br><br>UPTIMIZE Foundry AIP<br><br>UPTIMIZE AWS Factory + UPTIMIZE AI-ML Services |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F6 (In addition to F5)**:<br> - Customized Interface (UI/UX)                   | UPTIMIZE Foundry AIP<br>UPTIMIZE App Service + UPTIMIZE AI-ML Services<br>UPTIMIZE AWS Factory + UPTIMIZE AI-ML Services |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F7 (F3 - F6) with Tracing**                                                    | UPTIMIZE LLM Traces                                |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F8 IDE Embedded Coding Assistance**                                            | MCoder                              |  <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F9 F5 + Integrated into custom applications e.g., SNOW, RPA**                  | UPTIMIZE AI-ML APIs    | <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |
| **F10 Specialized Tasks**                                                        |                                           |                                                     |
| **F10.1 Translation**                                                            | myGPT Suite<br>UPTIMIZE AI-ML APIs                    |   <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span> |
| **F10.2 Voice 2 Text**                                                           | myGPT Suite<br>UPTIMIZE AWS Factory Account (AWS Textract) |  <span style="background-color: #96d7d2; padding: 2px;">`Speech Recognition`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span> |
| **F10.3 OCR & Document Extraction**                                              | UPTIMIZE AI-ML APIs             |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span> |
| **F11 Fine-tune SLMs**                                                           | UPTIMIZE AWS Lab SageMaker                         |  <span style="background-color: #96d7d2; padding: 2px;">`Extraction`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Classification`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Generation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Conversation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Summarization`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Document Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Image Understanding`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Translation`</span>, <span style="background-color: #96d7d2; padding: 2px;">`Code Improvisation`</span> |


<br/><br/><br/>


## Architecture Blueprints
*Example architectures to illustrate the interaction within the UPTIMIZE eco system and to be adapted to actual use cases.*

### Custom chatbot in myGPT Suite or UPTIMIZE App Service using UPTIMIZE AWS Factory Account or UPTIMIZE Foundry for ingestion
*Custom ingestion pipeline developed in either UPTIMIZE AWS Factory Account, using Lambda functions with Step Functions Orchestration or UPTIMIZE Foundry. Leveraging myGPT Suite to provide a chat interface using the Bring your own Collection feature. UPTIMIZE App Service as an fully customizable UI alternative using Streamlit. A full Uptimize Foundry solution as alternative options leveraging the Gen AI features of Uptimize Foundry AIP as well as the app building capabilities.*

![CustomRag](/assets/genai-guideline/custom_rag.png)

### Full Development of custom application on the UPTIMIZE AWS Factory Account
*Full UPTIMIZE AWS Factory development. Custom application deployed using ECS, Merck SSO login, Lambda function to collect external data including chunking and embedding. Vector DB and GPT API from UPTIMIZE Gen AI APIs, extension with UPTIMIZE Traces possible via same VPC endpoint.*

![Full UPTIMIZE AWS Factory Account](/assets/genai-guideline/full_factory.png)


<br/><br/><br/>


## App Service Gen AI Guide - Choosing the Template
In case a custom use case UI needs to be developed, the UPTIMIZE App Service comes with templates allowing the development of fully customized UIs based on either Streamlit or React. 
<br/>
*Note: For enterprise application using the well established UI of myGPT Suite is the recommendation. Either directly or using the Bring your own Tool feature.*

---

### **Advantages of Streamlit for LLM Chatbots**  
1. **Rapid Development**:  
   - Build a functional chatbot UI in minutes with minimal code (Python only).  
   - Prebuilt components like `st.chat_message`, `st.chat_input`, and session state (`st.session_state`) simplify chat history management.  
2. **Seamless LLM Integration**:  
   - Directly integrate Python-based LLM libraries (e.g., LangChain, OpenAI, Hugging Face) without API boilerplate.  
   - Ideal for prototyping RAG pipelines, fine-tuning demos, or AI assistant UIs.  
3. **State Management for Simple Workflows**:  
   - Use `st.session_state` to persist conversation history or user context across interactions.  
4. **Low Overhead for Internal Tools**:  
   - Perfect for internal team tools (e.g., document QA bots) where polished UI/UX is secondary.  

---

### **Limitations of Streamlit for LLM Chatbots**  
1. **Performance with Real-Time Interactions**:  
   - Streamlit's __rerun-on-action__ model reloads the entire script on each user input, causing delays for high-frequency interactions (e.g., streaming token-by-token LLM responses).  
   - Workarounds for streaming (e.g., `st.write_stream`) exist but are less efficient than React/Angular's WebSocket integrations.  
2. **Scalability Issues**:  
   - Concurrent users or heavy LLM inference tasks strain Streamlit's server-side execution.  
   - Not suitable for public-facing chatbots with high traffic.  
3. **Limited UI Customization**:  
   - Basic chat interfaces lack features like typing indicators, rich media support, or advanced message threading.  
   - Customizing animations or interactive elements (e.g., buttons in messages) is cumbersome.  
4. **Statelessness Challenges**:  
   - Managing complex conversational states (e.g., multi-turn context, user authentication) requires manual effort vs. React/Angular's state management libraries (Redux, NgRx).  

---

### **React/Angular Strengths for LLM Chatbots**  
1. **Real-Time Streaming**:  
   - Handle token-by-token LLM output streaming efficiently via WebSocket or Server-Sent Events (SSE).  
2. **Dynamic UI/UX**:  
   - Build polished interfaces with typing indicators, markdown rendering, file uploads, and custom interactive components.  
3. **Scalability**:  
   - Decouple frontend (client-side) from backend (LLM APIs), enabling horizontal scaling for high-traffic apps.  
4. **State Management**:  
   - Robust tools like React Context, Zustand, or NgRx simplify managing complex chat states, user sessions, and authentication.  
5. **Ecosystem Support**:  
   - Leverage chatbot-specific libraries (e.g., React Chat Toolkit, Botpress) and npm packages for analytics, monitoring, or A/B testing.  

---

### **When to Use Streamlit for LLM Chatbots**  
✅ **Good For**:  
- Prototyping LLM workflows (e.g., testing prompts, model outputs).  
- Internal tools where speed > UI polish (e.g., team-specific QA bots).  
- Simple chatbots with static responses or low user concurrency.  
- Teams with Python/ML expertise but limited frontend skills.  

---

### **When to Use React/Angular for LLM Chatbots**  
✅ **Good For**:  
- Public-facing chatbots requiring ChatGPT-like interfaces.  
- Apps needing advanced features: user auth.  
- High-traffic use cases (e.g., customer support bots) with scalability demands.  
- Custom, branded UIs with animations, embedded media, or complex interactivity.  

---

### **Example Workflow Comparison**  
| **Task**               | **Streamlit**                                  | **React/Angular**                                  |  
|-------------------------|-----------------------------------------------|--------------------------------------------------|  
| **Chat Interface**      | Built-in `st.chat_message` with basic history. | Customizable using libraries like `react-chat-window` or `ng-chat`. |  
| **Streaming Responses** | Limited support via `st.write_stream`.         | Real-time streaming via WebSocket/SSE.            |  
| **State Management**    | Manual `st.session_state` updates.             | Context API (React) or NgRx (Angular) for scalable state. |  
| **Deployment**          | Easy via Uptimize app service and streamlit template.    | Requires separate backend (FastAPI/Flask) |  

---

### **Final Recommendation**  
- **Choose Streamlit** if:  
  - You need a quick MVP to test an LLM idea.  
  - Your team prioritizes Python and lacks frontend resources.  
  - The chatbot is for internal use with limited scalability needs.  

- **Choose React/Angular** if:  
  - You're building more customizable, complex UI chatbot.  
  - Real-time streaming, custom UI, or scalability are critical.  
  - Your team has frontend expertise and can manage a decoupled architecture.  

Streamlit accelerates LLM experimentation, but React/Angular unlocks enterprise-grade capabilities for chatbots.


<br/><br/><br/>


## Gen AI outside of Uptimize
For further Gen AI offerings also outside of UPTIMIZE please check the [AI & Gen AI Technology Capability Map](https://docs.uptimize.merckgroup.com/assets/architecture-docs/AI-GenAI_Capability_Map-v1-0_vf.pdf)

---

# Gen AI Guideline - Quality

## UPTIMIZE LLM Traces (Langfuse) for Monitoring and Evaluation

For monitoring and evaluation, UPTIMIZE provides [LLM Traces](https://docs.uptimize.merckgroup.com/aiml/llm-traces/), a tool developed by [Langfuse](https://langfuse.com/) for comprehensive monitoring and evaluation of Large Language Models (LLMs).

UPTIMIZE LLM Traces can support the following process stages:

- **Monitoring (Development + Production)**:
    - **Cost, Quality, Latency**: Keep track of operational expenses to ensure efficient use of resources, monitor the quality of outputs to maintain high performance standards, and track response times to ensure timely and efficient interactions.

- **Debugging**:
    - **Tracing**: Utilize detailed tracing logs to identify and resolve issues quickly.

- **Evaluation**:
    - **Metrics**: Log and analyze evaluation metrics to improve system performance and accuracy.

- **Prompt Engineering**:
    - **Prompt Management**: Organize and manage prompts systematically to enhance model interactions and outcomes.

For detailed guidance, refer to the [UPTIMIZE LLM Traces documentation](https://docs.uptimize.merckgroup.com/aiml/llm-traces/).

### Monitoring

To effectively monitor and evaluate the performance of your LLMs, it is recommended to monitor the following metrics. Consider the list is not exhaustive and might vary from use case.

| Metric                  | Description                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Trace Id                | A unique identifier for the trace.                                     |
| Session Id              | A unique identifier for each user session, useful for grouping and analyzing user interactions.                                        |
| Mean cosine similarity  | Measures the average cosine similarity between all the retrieved documents.                    |
| Retrieved Chunk Id      | Identifies the specific data chunk retrieved during a query, useful for debugging and optimizing data retrieval processes.             |
| User Id (Pseudonymized) | A pseudonymized identifier for users, ensuring privacy while allowing for user-specific monitoring and analysis.                       |
| Latency                 | Monitors the time delay between when a query is submitted to the model and when it returns the response. Helps identify bottlenecks.   |
| Input                   | Logs the input provided to the model, useful for debugging and performance analysis.                                                   |
| Output                  | Logs the output generated by the model, enabling result evaluation and consistency checks.                                              |
| Costs                   | Tracks the computational and financial costs associated with running the LLMs, including resource usage and cost-efficiency optimization.|
| Model drift             | Measures the difference in model performance over time.       |
| Evaluation Metrics          | See: [Evaluation Metrics](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#metrics-for-evaluating-llms) |

## Dataset

It is recommended to use the dataset in UPTIMIZE LLM Traces to evaluate your system. You can create multiple datasets containing inputs and expected outputs, as well as perform and log different runs on each dataset. Detailed instructions on creating and using datasets can be found in the UPTIMIZE documentation: [Datasets](https://docs.uptimize.merckgroup.com/aiml/llm-traces/LLMTraces-Datasets/).

Process Diagram from Langfuse:
![Langfuse Dataset](/assets/genai-guideline/langfuse-dataset-example-workflow.png)

>**Note:** A domain expert should be involved in the creation of both manual and synthetic datasets. Their expertise is crucial for defining what is technically acceptable and understanding user needs.

### Dataset Structure and Example

A dataset should consist of the User Input, the Context, and the Expected Output. The Expected Output should be the correct response of the LLM based on the User Input and the Context provided. The User Input should cover the full range of possible scenarios (edge cases, invalid data provided, invalid formats, and ambiguous queries) and personas (frustrated customer, new user, experienced user, etc.).

Below is an example dataset consisting of one item:

| User Input  | Context  | Expected Output |
|-------------|----------|-----------------|
| What are the key differences between UPTIMIZE Foundry and Snowflake in terms of data storage? | 8a7b33a6-821f-448c-85a7-0e95a5d78061\n\neleventyNavigation: key: Snowflake-Foundry Integration parent: Automated Data Ingestion order: 1 layout: layout.njk title: Snowflake-Foundry Integration permalink: snowflake/data-ingestion/data-ingestion-automated/foundry/ Data Export from UPTIMIZE Foundry to Snowflake Why should I import UPTIMIZE Foundry data to Snowflake ? Foundry, at its core, is a data lake solution while Snowflake is a data warehouse. A data warehouse typically stores data in a predetermined structure with a schema while a data lake does not have a predetermined schema. Also, whereas a data warehouse usually stores structured data, a data lake stores structured and unstructured data. This means that a data lake (Foundry) offers better flexibility around data storage and manipulation, while Snowflake offers greater performances and scalability. In case you are only interested in connecting your UPTIMIZE Foundry Dataset to accelerate the performance of a Tableau or PowerBI dashboard, we offer the dedicated accelerator service. You can read all about it in here Prerequisites Here's the list of things you need to have to start the accelerator 1. A Foundry use case, with at least one Foundry project linked to it 2. A Snowflake extension object tied to this same use case (Read how to get one here) 3. A dataset located in a project of the Foundry use case 4. Owner permission on the Foundry use case.| Foundry, at its core, is a data lake solution while Snowflake is a data warehouse. A data warehouse typically stores data in a predetermined structure with a schema, whereas a data lake does not have a predetermined schema. Additionally, a data warehouse usually stores structured data, while a data lake can store both structured and unstructured data. This means that Foundry offers better flexibility around data storage and manipulation, while Snowflake provides greater performance and scalability. |

The dataset can also be used to evaluate the retriever by comparing the retrieved results to the context provided in the dataset (see: [RAG-related Metrics](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#rag-related-metrics)).

### Generating Datasets

There are two methods for generating evaluation data: synthetic generation and manual creation. Synthetic datasets are typically not as high quality as real datasets, but they serve as a good starting point and reduce dependence on domain experts.

The number of examples is depending on the complexity of the task. It has been [reported](https://hamel.dev/blog/posts/llm-judge/#how-many-examples-do-you-need) that starting with 30 examples is effective, and more examples should be added until no new failures occur.

#### Synthetic Datasets
When creating a synthetic evaluation dataset, the test cases are generated by the LLM based on the provided documents. The following code snippet demonstrates how to generate a synthetic test set for Retrieval-Augmented Generation (RAG) using the RAGAS library:

The following code demonstrates how to generate a synthetic test set for Retrieval-Augmented Generation (RAG) using the RAGAS library:
```python
from ragas.testset import TestsetGenerator

generator = TestsetGenerator(llm=generator_llm)
dataset = generator.generate_with_langchain_docs(docs, testset_size=10)
```
with DeepEval:
```python
from deepeval.synthesizer import Synthesizer

synthesizer = Synthesizer()
synthesizer.generate_goldens_from_docs(
    document_paths=['example.txt', 'example.docx', 'example.pdf'],
)
```

#### Manual Datasets
For each document in your knowledge base, create at least five diverse question-answer examples. Try to cover the entire range of question types that could be asked of the system.

## Evaluation

### Pass/Fail Judgement

Starting with a simple binary pass/fail metric involving domain experts is often most effective. Many teams struggle by using overcomplicated evaluation methods, leading to confusion and inefficiency. Common pitfalls include:

- Using too many metrics, resulting in unmanageable data.
- Relying on arbitrary scoring systems, where differences between scores are unclear.
- Ignoring the insights of domain experts who understand the subject matter.
- Employing unvalidated metrics that do not reflect user or business priorities.

To avoid these issues, it's crucial to involve a Principal Domain Expert early in the process. This individual helps define technical acceptability, uncover expectations, ensure consistent judgment, and foster a sense of ownership in the AI's development. Engaging them ensures evaluations align with critical standards and enhances overall satisfaction with the AI system.

You can also perform the evaluation using an LLM. To achieve this, iteratively adapt the instruction prompt to align with the domain expert's judgment. For more information, see the [source](https://hamel.dev/blog/posts/llm-judge/).

One option is to use the GEval metric from the [DeepEval](https://docs.confident-ai.com/docs/metrics-llm-evals) library and tailor the evaluation steps accordingly:

```python
from deepeval.metrics import GEval
from deepeval.test_case import LLMTestCaseParams

def calculate_correctness_score(
    model: str, input: str, actual_output: str, expected_output: str
) -> tuple[float, str]:
    metric = GEval(
        name="Correctness",
        evaluation_steps=[
            "Check whether the facts in 'actual output' contradict any facts in 'expected output'",
            "You should also heavily penalize omission of detail",
            "Vague language, or contradicting OPINIONS, are OK",
        ],
        evaluation_params=[
            LLMTestCaseParams.INPUT,
            LLMTestCaseParams.ACTUAL_OUTPUT,
            LLMTestCaseParams.EXPECTED_OUTPUT,
        ],
        model=model,
        strict_mode=True,
    )
```



More advanced metrics are discussed in subsequent sections.


### Metrics for Evaluating LLMs

| Metric | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">General Purpose</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">Natural Language Comparison</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">Agents/Tool Use</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">RAG</div> |  | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">LLM-based</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">Non LLM Based</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">Reference-free</div> | <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">Reference-based</div> |
|--------|:-:|:-:|:-:|:-:|---|:-:|:-:|:-:|:-:|
| [Faithfulness*](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#generation-related-metrics) | | | | ✓ | | ✓ | | ✓ | |
| [Answer Relevancy*](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#generation-related-metrics) | | | | ✓ | | ✓ | | ✓ | |
| [Contextual Recall*](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#retrieval-related-metrics) | | | | ✓ | | ✓ |  | | ✓ |
| [Contextual Precision*](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#retrieval-related-metrics) | | | | ✓ | | ✓ |  |  | ✓ |
| [Keyword Presence](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#rule-based-metrics) | ✓ | | | |  |  | ✓ | | |
| [BLEU](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#bleu-score) | | ✓ | | |  |  | ✓ | | ✓ |
| [ROUGE](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#rouge) | | ✓ | | |  |  | ✓ | | ✓ |
| [Levenshtein Similarity Ratio](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#levenshtein-similarity-ratio) | | ✓ | | |  |  | ✓ | | ✓ |
| [Semantic Similarity](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#semantic-similarity-metrics) | | ✓ | | ✓ | |  | ✓ |  | ✓ |
| [G-Eval*](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/#prompt-based-evaluators) | | ✓ | | |  | ✓ | | | |

When evaluating a RAG chatbot and the pass/fail judgement does not provide sufficient insights, focus on the metrics marked with an asterisk (*).

### Machine translation

### BLEU Score

[BLEU](https://en.wikipedia.org/wiki/BLEU) (Bilingual Evaluation Understudy) is a metric used to evaluate the quality of machine-translated text. It computes the precision by comparing the generated text with reference translations. The score is calculated for individual segments and then averaged over the entire corpus. A perfect BLEU score is rare, as it would indicate an exact match with a reference translation.

##### ROUGE

[ROUGE](https://en.wikipedia.org/wiki/ROUGE_(metric)) (Recall-Oriented Understudy for Gisting Evaluation) measures recall in generated text. It's commonly used for evaluating text quality and in machine translation tasks, particularly for summarization. ROUGE-N and ROUGE-L are popular variants:

- ROUGE-N: Measures the overlap of n-grams between the generated and reference texts.
- ROUGE-L: Evaluates the longest common subsequence between the generated and reference texts.


### Natural Language Comparison
#### Levenshtein Similarity Ratio

The [Levenshtein similarity](https://en.wikipedia.org/wiki/Levenshtein_distance) metric measures the similarity between two sequences based on the Levenshtein Distance. It calculates the minimum number of single-character edits required to change one string into another. The similarity ratio is derived from this distance and the total length of both sequences.

#### Semantic Similarity Metrics

These metrics use contextualized embeddings to measure similarity between texts. Examples include [BERTScore](https://arxiv.org/abs/1904.09675), MoverScore, and Sentence Mover Similarity (SMS). While fast and simple to compute, they may have limitations in correlation with human evaluations and adaptability to various tasks.

### General

#### Rule-based Metrics

These are custom metrics tailored for specific domains or tasks:

- [Keyword Presence](https://learn.microsoft.com/en-us/ai/playbook/technology-guidance/generative-ai/working-with-llms/evaluation/list-of-eval-metrics#rule-based-metrics): Checks for the presence of specific keywords or phrases from the input.


#### Prompt-based Evaluators

These use LLMs to evaluate generated text:

- [G-Eval](https://github.com/nlpyang/geval): A framework for evaluating LLM summarization prompts.


### RAG-related Metrics

RAG applications should have independent tests in place for both the Retrieval and Generation steps. It is not advised to test only the performance of the entire pipeline. Testing the retrieval step can be done by asking users for questions/keywords and the documents they expect to find. Performance can then be measured using a top-k method. The minimum monitoring in place for an application could be plotting the average semantic similarity of test cases over time. This should catch any drift in changes and act as an indicator if using a different model is impacting performance.

#### Generation-related Metrics

These metrics are specific to the Retrieval-Augmented Generation (RAG) pattern:

- [Faithfulness](https://docs.confident-ai.com/docs/metrics-faithfulness): Measures factual consistency of the generated answer against the given context. It is calculated from answer and retrieved context.
- [Answer Relevancy](https://docs.confident-ai.com/docs/metrics-answer-relevancy): Focuses on assessing how pertinent the generated answer is to the given prompt.

#### Retrieval-related Metrics (LLM as judge)

These metrics evaluate the performance of the retrieval model in RAG:

- [Contextual Recall](https://docs.confident-ai.com/docs/metrics-contextual-recall): Context Recall measures how many of the relevant documents (or pieces of information) were successfully retrieved. 
- [Contextual Precision](https://docs.confident-ai.com/docs/metrics-contextual-precision): Context Precision is a metric that measures the proportion of relevant chunks in the retrieved contexts. 

#### Retrieval-related Metrics

The quality of your RAG's output is dependent on the quality of retrieved documents, which in turn can be considered along a few factors.

- Precision@k: Measures the proportion of relevant documents in the top-k retrieved documents. Useful for understanding the accuracy of the top results.
- Recall@k: Measures the proportion of all relevant documents that are retrieved in the top-k results. This helps assess how well the system captures all possible relevant documents.
- Mean Average Precision (MAP): Provides a single-figure measure of quality across recall levels, emphasizing precision.
- Normalized Discounted Cumulative Gain (NDCG): Evaluates the ranking quality of the retrieved documents, taking into account the position of relevant documents.

The details to the retrieval metrics can be found here: https://www.pinecone.io/learn/offline-evaluation/#Metrics-in-Information-Retrieval


###  Frameworks for Evaluating LLMs

To ensure the quality and effectiveness of Large Language Models (LLMs), several evaluation frameworks are available.

<!-- Add recommendation -->

| Tool                                                                 | Description                                                                                         |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [ARES](https://github.com/stanford-futuredata/ARES)                 | A framework specifically designed for evaluating Retrieval-Augmented Generation (RAG) models.        |
| [DeepEval*](https://github.com/confident-ai/deepeval)               | Provides comprehensive quality assessment of LLM-generated responses, incorporating metrics from RAGAS and G-Eval.    |
| [MLflow LLM Evaluation](https://mlflow.org/docs/latest/llms/llm-evaluate/index.html) | An integrated solution for LLM evaluation within the MLflow ecosystem.                               |
| [OpenAI Evals](https://github.com/openai/evals)                     | A framework for evaluating large language models (LLMs) or systems built using LLMs.                 |
| [RAGAS](https://docs.ragas.io/en/stable/)                           | A comprehensive framework for evaluating LLMs, including metrics with and without ground truth.      |
| [RGB](https://github.com/chen700564/RGB)                            | An implementation for benchmarking Large Language Models in Retrieval-Augmented Generation.          |
| [TruLens](https://www.trulens.org/getting_started/)                 | A tool for evaluation and tracking of LLMs, focusing on metrics like hallucination detection and model drift. |
| [Uptrain](https://github.com/uptrain-ai/uptrain)                    | An open-source tool for retraining and improving LLMs based on feedback and performance metrics.     |                                            |

The **DeepEval** framework is recommended for use due to its wide array of metrics and comprehensive documentation, which can aid in conducting a thorough assessment of the quality and performance of LLMs.

## Visualization of Embedding Vectors

To evaluate your embedding model, it can be helpful to visualize the embedding vectors to observe the distances between text chunks and their proximity to the query. For example, if you have a document base with eight different categories, you should detect eight clusters in the visualization. Additionally, you can check whether your embedding model is language-independent and reflects only the semantic content. For more details, refer to this [source](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-generate-embeddings#evaluate-embedding-models).

- [TSNE (t-Distributed Stochastic Neighbor Embedding)](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding): A non-linear dimensionality reduction technique particularly well-suited for embedding high-dimensional data for visualization in a low-dimensional space (e.g., 2D or 3D).
- [UMAP (Uniform Manifold Approximation and Projection)](https://umap-learn.readthedocs.io/en/latest/): A scalable and efficient method for dimensionality reduction and visualization capable of preserving both local and global structure of high-dimensional data.
- [PaCMAP](https://github.com/YingfanWang/PaCMAP): Claims to be faster and to preserve better global and local structures.

## User Feedback

There should be a simple way for users to provide feedback, e.g., via the Streamlit feedback package. The feedback, along with information on the query and output, can be stored in a trace with LLM-traces (use a session ID for better assignment to the interactions).

### Explicit Feedback
Explicit feedback involves directly prompting the user to give feedback on the quality of the generated answers. Tools like Streamlit can be used to gather and analyze this feedback.

##### Example with [streamlit](https://docs.streamlit.io/develop/api-reference/widgets/st.feedback):
```python
import streamlit as st

sentiment_mapping = ["one", "two", "three", "four", "five"]
selected = st.feedback("stars")
if selected is not None:
    st.markdown(f"You selected {sentiment_mapping[selected]} star(s).")
```
##### Example with [streamlit-feedback](https://github.com/trubrics/streamlit-feedback) - allows optional user explanation:
```python
from streamlit_feedback import streamlit_feedback
feedback = streamlit_feedback(
    feedback_type="thumbs",
    optional_text_label="[Optional] Please provide an explanation",
)
```

### Implicit Feedback

Implicit feedback measures the user's behavior to infer the quality of the generated answers. This can include tracking user interactions, time spent on pages, and other behavioral metrics.

### Analyzing Feedback

Proposal for analyzing user feedback logged into UPTIMIZE LLM traces:

1. Log all traces into UPTIMIZE LLM traces
2. Create pipeline to frequently download traces into a Foundry dataset <!-- Add code snippet -->
3. Analyze feedback <!-- Add code examples -->
4. Calculate additional metrics for traces with user feedback (e.g., RAGAS metrics without ground truth)
5. Create Dashboard ([Contour](https://www.palantir.com/docs/foundry/contour/overview/), [Workshop](https://www.palantir.com/docs/foundry/workshop/overview/))


## Additional Sources

| Title | Source |
|-------|--------|
| [Challenges in Evaluating AI Systems](https://www.anthropic.com/news/evaluating-ai-systems) | anthropic.com |
| [Creating a LLM-as-a-Judge That Drives Business Results](https://hamel.dev/blog/posts/llm-judge/#step-5-build-your-llm-as-a-judge-iteratively) | hamel.dev |
| [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | hamel.dev |
| [RAG Evaluation: Don't Let Customers Tell You First](https://www.pinecone.io/learn/series/vector-databases-in-production-for-busy-engineers/rag-evaluation/) | pinecone.io |
| [LLM App Evaluation](https://arize.com/llm-evaluation) | arize.com |
| [G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment](https://arxiv.org/abs/2303.16634) | arxiv.org |

---

# Generative AI (GenAI) Guideline - Best practices


## Introduction
This guideline provides a comprehensive overview of best practices and strategies for developing and optimizing Generative AI applications, with a focus on Retrieval-Augmented Generation (RAG) techniques.



## LLM Application Optimization Strategy
When developing an LLM application, optimizing the workflow is crucial for achieving the best results. The initial step should always be prompt engineering. Here is a detailed and structured optimization flow to guide you:

1. **Start with Prompt Engineering**
   - Define the goal of your LLM application and identify the key prompts required to achieve this goal.
   - Experiment with different prompt formulations to find the most effective ones.
   - Make use of the [Langfuse Prompt Management](https://docs.uptimize.merckgroup.com/aiml/llm-traces/Prompt-Management/) functionality within UPTIMIZE to log, track, and refine your prompts systematically.
   - Example: If your goal is to generate summaries, craft prompts that explicitly request a summary, such as "Provide a concise summary of the following text."
   - How to write effective prompts: [Prompt Engineering Training](https://mdigital.sharepoint.com/sites/mygptusercommunity857/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fmygptusercommunity857%2FShared%20Documents%2FPrompt%20Engineering%20Training%2007092023&viewid=d2197021%2Db258%2D4c5a%2Da17e%2Dd7332e96c0a2&OR=Teams%2DHL&CT=1730905525661&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDEwMDMyNDkxNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D)
   - OpenAI: [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering#strategy-provide-reference-text)
   - Anthropic: [Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

2. **Utilize Few-Shot Prompting**
   - Include a few examples within the prompt to guide the model on how to respond.
   - Few-shot prompting can improve the model's understanding and performance.
   - Example: Provide two to three examples of the desired output type before the actual input query to set the context.
   - Anthropic: [Few-Shot prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting)

3. **Utilize X of Thought Prompting (XoT)**
   - XoT techniques encourage the model to generate intermediate steps or a sequence of thoughts leading to the final answer.
   - A comprehensive overview of various XoT techniques, including Chain of Thought (CoT), Tree of Thought (ToT), and Graph of Thought (GoT), can be found in this [article](https://wandb.ai/sauravmaheshkar/prompting-techniques/reports/Chain-of-thought-tree-of-thought-and-graph-of-thought-Prompting-techniques-explained---Vmlldzo4MzQwNjMx).
   - CoT helps the model reason through the problem, improving accuracy and coherence.
   - Example: For complex problem-solving, ask the model to "break down the problem into smaller steps and explain each step."
   - Anthropic: [CoT Prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought)

4. **Incorporate Retrieval Augmented Generation (RAG)**
   - Use RAG to include external knowledge that the LLM might not possess inherently.
   - Dynamically add examples to the context using RAG, is a process also known as dynamic few-shot learning.
   - Retrieve relevant documents or data points from external sources and integrate them into the model's response process.
   - Example: Query a knowledge base to fetch related documents that support the model's response.

5. **Optimize Retrieval: Pre and Post Processing**
   - **Pre-Retrieval Optimization:** Refine the search queries or criteria to improve the quality of retrieved documents.
     - Example: Use summarization techniques to condense lengthy documents, making them more manageable for the LLM.
   - **Post-Retrieval Optimization:** Enhance the retrieved content's relevance and coherence before feeding it to the model.
     - Example 1: Use reranking algorithms to prioritize the most relevant documents. Alternatively, 
     - Example 2: Integrate relevant metadata from the payload if it's not included in the chunk to potentially improve system performance.

6. **Consider Fine-Tuning as a Final Step**
   - Fine-tune the LLM with domain-specific data to improve performance on specialized tasks.
   - Ensure the fine-tuning dataset is high quality and representative of the tasks the application will perform.
   - Example: Fine-tune the model on a dataset of medical articles if the application focuses on healthcare.

By following these steps, you can significantly enhance the performance and accuracy of your LLM application.

![RAG optimization flow](/assets/genai-guideline/RAG_optimization-flow.png)

## Retrieval-Augmented Generation (RAG)

### RAG Applications
For details on evaluating RAG applications with appropriate metrics, refer to the [Quality](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality) chapter.


### Retrieval
There are two main types of retrieval: semantic and lexical-based. It is recommended to start using semantic search, as it usually provides better results by understanding the meaning and context of the words. Additionally, semantic search is already included in the current sample Streamlit app.


#### Lexical Search
Lexical search, also known as keyword or exact match search, relies on matching the exact terms in the search query with the words found in the documents. This method does not take into account the meaning or context of the words, only their exact occurrence and form.

**Pros:**
- Finds exact keywords.
- Results in a limited list of documents that contain the words. The similarity measure can be 0.
- Users typically test for exact keyword matching when testing performance.
- Simple, cheap, and fast.

**Cons:**
- Language dependency.
- Doesn't capture meaning.
- Preprocessing of the documents like [Lemmatization](https://www.nltk.org/api/nltk.stem.wordnet.html) or [Stemming](https://www.nltk.org/howto/stem.html) is recommended to improve lexical search results.

**Common Models:**
- **[BM25](https://en.wikipedia.org/wiki/Okapi_BM25)**: A popular probabilistic model that ranks documents based on the frequency and distribution of terms, adjusting for document length. BM25 is generally considered superior to TF-IDF because of its advanced scoring algorithm and consideration of multiple document factors, which enhances retrieval performance.
- **[TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)**: Term Frequency-Inverse Document Frequency. A statistical measure used to evaluate how important a word is to a document in a given corpus, while taking into account the general frequency of the word across all documents in the collection.

#### Semantic / Vector Search
Semantic search improves upon lexical search by considering the meaning and context of the words in both the query and the documents. This method uses embeddings (dense vector representations) to find documents with similar meanings, even if they don't contain the exact search terms.

**Pros:**
- Finds documents with similar meanings, e.g., finds "cleaning apparatus" when searching for "dishwasher."
- Less sensitive to typos.
- Less dependent on language.

**Cons:**
- Not effective for locating specific, unique identifiers or keywords unless those are well-integrated into the context of the document, e.g., finding a table column in a document describing an internal database structure.
- Low-information or few-word queries don't perform well.
- Generally, non-zero similarity scores for all documents.

**Common Models:**
- **Embedder-based Models (e.g., `BERT`, `RoBERTa`, [`text-embedding-3-large`](https://openai.com/index/new-embedding-models-and-api-updates/), `nomic-embed-text-v1`)**: Use pre-trained language models to convert text into dense vectors that capture contextual meaning.


**Best Practices for Choosing the Best Embedding Model**

Start by using a small embedding model, such as `text-embedding-3-small`, to evaluate its performance. If needed, you can then move to a larger model like `text-embedding-3-large` or `nomic-embed-text-v1`. Note that the use of `text-embedding-ada-002` is no longer recommended; instead, switch to the `text-embedding-3-small` model.


#### Hybrid Search
Hybrid search effectively combines semantic and lexical search methods to leverage the advantages of both. There are three primary techniques to integrate these results:

- **Linear Combination**: The relevance score is calculated using the formula: `alpha * lexical_score + (1 - alpha) * semantic_score`. You can adjust the `alpha` value based on the importance of lexical matching in your specific use case; an `alpha` value of 0.3 is often cited as providing a good balance between the two methods. It's important to ensure that both the lexical score and semantic score are normalized before calculation. However, according to [Qdrant](https://qdrant.tech/articles/hybrid-search/#why-not-a-linear-combination), linear combination might not be ideal as the problem is not linearly separable.

- **Reciprocal Rank Fusion (RRF)**: This method boosts results that appear closer to the top across multiple queries by considering their positions within each query. Learn more about it in this [research paper](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf). For an implementation example, refer to [Qdrant's documentation](https://qdrant.tech/documentation/concepts/hybrid-queries/).

- **Reranking**: See the [Reranking](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_best_practices/#reranking) section for a detailed explanation of this method.

### Chunking

Chunking is the process of breaking down large pieces of text into smaller, manageable segments, which is crucial for efficient indexing and retrieval in NLP applications. To visualize your chunking method, you can use the chunk visualizer provided by Hugging Face at [this link](https://huggingface.co/spaces/m-ric/chunk_visualizer) (note: use public data only).

#### Considerations

When implementing chunking strategies for Large Language Model (LLM) applications, several key factors should be considered, as outlined in the article [Chunking Strategies for LLM Applications](https://www.pinecone.io/learn/chunking-strategies/) by Pinecone:

1. Determine Content Nature: Are you indexing long documents like articles or books, or shorter content such as tweets or messages? This will influence your model and chunking strategy.

2. Select Embedding Model: Identify the embedding model (e.g., sentence-transformer, text-embedding-3-small) and determine optimal chunk sizes for its performance.

3. Assess Query Expectations: Consider whether user queries will be short and specific or lengthy and complex, and adjust chunking accordingly for effective query-embedding correlation.

4. Define Application Utilization: Determine how retrieved results will be used (e.g., semantic search, question answering) and adjust chunk sizes to suit any specific application needs or constraints, such as LLM token limits.

#### Fixed-size chunking
- Split documents into fixed-size token chunks
  - Common chunk sizes: 512, 1024 tokens
  - Langchain: [`TextSplitter`](https://python.langchain.com/api_reference/text_splitters/base/langchain_text_splitters.base.TextSplitter.html#textsplitter) (Note: Langchain TextSplitter measures length by default in characters, not tokens.)
- Advantages:
  - Easy and Simple
- Disadvantages:
  - Often leads to truncation within sentences
  - Compromises semantic integrity of the content


#### Recursive chunking
  - Recursive chunking divides the input text into smaller chunks in a hierarchical and iterative manner using a set of separators.
  - Langchain: [`RecursiveCharacterTextSplitter`](https://python.langchain.com/api_reference/text_splitters/character/langchain_text_splitters.character.RecursiveCharacterTextSplitter.html#recursivecharactertextsplitter)

#### Semantic Chunking

- [Semantic Chunking](https://github.com/FullStackRetrieval-com/RetrievalTutorials/blob/main/tutorials/LevelsOfTextSplitting/5_Levels_Of_Text_Splitting.ipynb) involves dividing text into meaningful units based on the content's semantics rather than arbitrary sizes or simple delimiters. This approach can improve the coherence and relevance of retrieved information by ensuring that each chunk maintains its semantic integrity.

#### Decoupling Chunks Used for Retrieval vs. Chunks Used for Generation: 
- [Small-to-big retrieval](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb) is a form of modular recursive RAG, where you link smaller grounding data chunks to larger "parent" data chunks. When a small chunk is retrieved at runtime, the larger linked chunk can be retrieved if needed.
  - Advantage: Provides broader context for Large Language Models (LLMs) to process
  - Langchain: [`ParentDocumentRetriever`](https://python.langchain.com/api_reference/langchain/retrievers/langchain.retrievers.parent_document_retriever.ParentDocumentRetriever.html#parentdocumentretriever)
  - LlamaIndex: [Decoupling Chunks Used for Retrieval vs. Chunks Used for Synthesis](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/#decoupling-chunks-used-for-retrieval-vs-chunks-used-for-synthesis)


#### Chunk overlap
- Overlap chunks by a certain percentage to maintain context across chunks. For example, if using 256-token chunks, you might overlap by 50 tokens to ensure continuity.

#### Chunk size

| Aspect       | Larger Chunks                          | Smaller Chunks                 |
|--------------|----------------------------------------|--------------------------------|
| Advantages   | - Capture more context from the document | - Contain less noise           |
| Disadvantages| - Generate more noise in the processed data  <br> - Require longer processing time  <br> - Result in higher computational costs | - May not fully convey the necessary context | 



#### Ongoing Challenges
- Striking a balance between:
  - Semantic completeness
  - Optimal context length

#### Metadata Attachments 
-  Chunks can be enriched with metadata information such as page number, file name, author,category or timestamp. 
-  Retrieval can be filtered based on this metadata, limiting the scope of the retrieval.
-  Assigning different weights to document timestamps during retrieval can achieve time-aware RAG.
- Using Qdrant, storing additional information alongside vectors is referred to as [payload](https://qdrant.tech/documentation/concepts/payload/).

#### Similarity Metric

Choosing the right metric depends on the data's characteristics and the RAG use case. **Cosine similarity is commonly preferred** for text due to its robustness and effectiveness in high-dimensional spaces.

- **Cosine similarity**: Measures similarity by the angle between vectors. (Equivalent to the dot product if vectors are normalized to 1, which is the case for [OpenAI embeddings](https://platform.openai.com/docs/guides/embeddings#which-distance-function-should-i-use)).
  - **Pros**: Robust to magnitude variations; effective for high-dimensional, sparse data.
  - **Cons**: Computationally expensive for large datasets.
- **Dot product**: Uses the sum of products of vector entries.
  - **Pros**: Simple and efficient.
  - **Cons**: Biased by varying vector magnitudes.

### UPTIMIZE Vector Database
The Qdrant database is the standard choice for storing vector embeddings. For detailed documentation about using the Qdrant database within UPTIMIZE, visit [this link](https://docs.uptimize.merckgroup.com/aiml/vector_database/).

#### Best Practices
- **Sparse Vectors**: For configurations using sparse vectors like TF-IDF, refer to Qdrant's [Sparse Vectors configuration guide](https://qdrant.tech/documentation/concepts/vectors/).
- **Querying Metadata**: To retrieve all metadata values, use the [scroll method](https://qdrant.tech/documentation/concepts/points/#scroll-points) to navigate through all points.
- **Qdrant + UPTIMIZE App Service**: Ensure you use the correct URL when utilizing the app service. Consult the UPTIMIZE Qdrant [documentation](https://docs.uptimize.merckgroup.com/aiml/vector_database/) for guidance.
- **Filtering Keys**: For [filtering](https://qdrant.tech/documentation/concepts/filtering/) keys containing whitespace, enclose the key in double quotes:

```python
FieldCondition(
    key='"originating site"',
    match=MatchAny(any=site_list),
),
```

- **Payload Error**: If you encounter an error message such as: `Payload error: JSON payload (95879532 bytes) is larger than allowed (limit: 33554432 bytes)`, you need to split your upload into smaller requests to meet the size limits.
- **Payload Indexing**: To enhance retrieval performance when applying filters, refer to the [payload indexing guide](https://qdrant.tech/documentation/concepts/indexing/#payload-index) for best practices.
- **Vector Indexing:** A vector index is a data structure built on vectors using a specific mathematical model. It allows to efficiently query multiple vectors that are similar to a target vector. Learn more in the [vector indexing guide](https://qdrant.tech/documentation/concepts/indexing/#vector-index).
- **Search API:** [Custom parameters](https://qdrant.tech/documentation/concepts/search/#search-api) can be defined to customize search behavior, allowing for a balance between accuracy in the approximate nearest neighbor (ANN) search and latency.

#### Update Qdrant Collection

This guide outlines the process of updating multiple data points within a Qdrant collection without replacing the entire dataset. This approach is ideal for scenarios where you need to update selected documents or chunks of data efficiently.

* Step 1: Define the Points for Update
    Identify the points you wish to update by applying a filter condition.

```python
filter_cond = models.Filter(
        must=[
            models.FieldCondition(
                key="KEY",
                match=models.MatchAny(any=["VALUE"]),
            )
        ]
    )
```

* Step 2:
    Extract the points that you want to update via .scroll

```python
results, _ = client.scroll(
        collection_name=collection_name,
        scroll_filter=filter_cond,
        with_payload=True, # OPTIONAL
        with_vectors=False #OPTIONAL
    )
```

* Step 3:
    Get the points ID for each extracted point to update in a batch call.

```python
points_id = [point.id for point in results]
```

* Step 4 (MODIFY PAYLOAD):

    If you just want to update the payload in the collection you must define the arguments that you want to update.
    For instance if your payload is:

```python
{"key1": "val1", "key2": "val2"}
```

    If you want to modify the "key1" you can define:

```python
args = {"key1":"modified_val1"}
```

```python
client.set_payload(
    collection_name=collection_name,
    payload=args,
    points=points_id,
)
```

* Step 4 (OVERWRITE PAYLOAD):

```python
client.overwrite_payload(
    collection_name=collection_name,
    payload={
        "key1": "val1",
        "key2": "val2",
    },
    points=points_id,
)
```


* Step 4 (VECTOR):
    Evaluating the batch update (WIP)

```python
for point in results:
        vector = llm_embedding.embed_query("NEW TEXT FOR THE POINT VECTOR")

        qdrant_client.update_vectors(
            collection_name=collection_name,
            points=[
                models.PointVectors(
                    id=point.id,
                    vector=vector,
                ),
            ],
        )
```

* Step 4 (POINTS):

    Qdrant supports batch loading of points. Batching allows you to minimize the overhead of creating a network connection. The Qdrant API supports two ways of creating batches - record-oriented and column-oriented.

    * record-oriented
  
```python
client.upsert(
    collection_name="{collection_name}",
    points=models.Batch(
        ids=points_id, # [point id1, point id2, etc]
        payloads=[
            {"key1": "val1"},
            {"key2": "val2"},
            {"keyN": "valN"},
        ],
        vectors=[
            embedding1,
            embedding2,
            embedding3,
        ],
    ),
)
```

* column-oriented

```python
client.upsert(
collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            payload={
                "key1": "val1",
            },
            vector=embedding1,
        ),
        models.PointStruct(
            id=2,
            payload={
                "keyN": "valN",
            },
            vector=embedding2,
        ),
        models.PointStruct(
            id=pointID,
            payload={
                "key2": "val2",
            },
            vector=embedding3,
        ),
    ],
)
```


<details>
<summary><b>Hands-On for beginners</b></summary>
This example demonstrates how a Qdrant collection operates. To simplify the process and avoid
the need for a Qdrant collection token, it runs using in-memory capabilities, meaning the
collection will reside on your computer. This setup allows you to quickly explore its functionalities,
including its calls and responses.

Please note that this is a hands-on example, remember to follow best practices when building
your own collection.

```python
# Import the necessary libraries:
from qdrant_client import QdrantClient
from qdrant_client import models
from qdrant_client.http.models import Filter, FieldCondition, MatchValue

from langchain_openai.embeddings.azure import AzureOpenAIEmbeddings
from langchain.schema.document import Document
from openai import AzureOpenAI
import os

# Import additional models for collection and vector configuration:
from qdrant_client.models import Distance, VectorParams, HnswConfigDiff, PointStruct

# ------------------------------------------------------------------------------
# 1. SETTING UP ENVIRONMENT VARIABLES AND THE AZURE OPENAI CLIENT
# ------------------------------------------------------------------------------

# Define environment variables for the Azure OpenAI endpoint and credentials.
# For development & productive use cases remember to manage your credentials properly.
# DO NOT PASTE or HARDCODE your tokens in the code itself in your projects.

os.environ["AZURE_OPENAI_ENDPOINT"] = "https://api.nlp.dev.uptimize.merckgroup.com"
os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2024-02-01"
os.environ["AZURE_OPENAI_API_KEY"] = "your personal token"

# Initialize the Azure OpenAI client.
openai_client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    api_version=os.environ["OPENAI_API_VERSION"],
    api_key=os.environ["AZURE_OPENAI_API_KEY"],
)

# Create an embedding generator instance using Langchain's AzureOpenAIEmbeddings.
# This instance is configured to use the "text-embedding-3-small1" deployment.
embedding_model_name = "text-embedding-3-small1"
llm_embedding = AzureOpenAIEmbeddings(deployment=embedding_model_name)

# ------------------------------------------------------------------------------
# 2. INITIALIZING THE QDRANT CLIENT IN IN-MEMORY MODE
# ------------------------------------------------------------------------------

# When you pass ":memory:" as the host, Qdrant will run in-memory.
client = QdrantClient(":memory:")

# ------------------------------------------------------------------------------
# 3. COLLECTION CREATION
# ------------------------------------------------------------------------------

# Define a collection name.
collection_name = "my_collection_playground"

# Create a new collection with the specified vector configuration.
# - 'size' defines the dimension of the embedding vectors (1536 for text-embedding-ada-002).
# - 'distance' specifies the similarity metric (COSINE).
# - 'on_disk=True' is passed here as an example of configuration. 
#   Note: In memory mode, this won't persist data between sessions.
client.create_collection(
    collection_name=collection_name,
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE, on_disk=True),
    hnsw_config=HnswConfigDiff(on_disk=True)
)

# Check the collection count (initially should be zero).
print("Initial count:", client.count(collection_name=collection_name))

# ------------------------------------------------------------------------------
# 4. INSERTING DOCUMENTS INTO THE COLLECTION
# ------------------------------------------------------------------------------

# Define two text samples.
text = "This is an example of a document with some metadata. Go to the link if you want to know more"
text2 = "This is an example of a document talking about AI and large language models"

# Create two Document objects from Langchain, attaching metadata to each.
document = Document(
    page_content=text,
    metadata={
        "text": text,
        "source": "SHAREPOINT FILE",
        "access": "Global",
        "link": "https://docs.uptimize.merckgroup.com/aiml/vector_database/",
    }
)

document2 = Document(
    page_content=text2,
    metadata={
        "text": text2,
        "source": "MERCK KGaA",
        "access": "Global",
        "link": "https://docs.uptimize.merckgroup.com/aiml/vector_database/",
    }
)

# --- Method 1: Upsert a Point Individually ---
# Get embeddings for the first document.
resp = openai_client.embeddings.create(model=embedding_model_name, input=text)
embedding = resp.data[0].embedding

# Create a point structure that includes:
# - a unique id (0)
# - the embedding vector
# - payload (combination of text content and metadata)
points = [
    PointStruct(
        id=0,
        vector=embedding,
        payload={
            **document.metadata,
        },
    )
]

# Upsert the point into the collection.
client.upsert(collection_name=collection_name, points=points)

# --- Method 2: Upload Using Collection-Wide Helper ---
# Get embeddings for the second document.
resp = openai_client.embeddings.create(model=embedding_model_name, input=text2)
embedding2 = resp.data[0].embedding

# Upload the second document. This helper method allows you to insert vectors,
# payloads, and explicit ids in one call.
client.upload_collection(
    collection_name=collection_name,
    vectors=[embedding2],
    payload=[document2.metadata],
    ids=[1]
)

# Verify that two documents have been inserted.
print("Count after insertion:", client.count(collection_name=collection_name))

# ------------------------------------------------------------------------------
# 5. QUERYING THE COLLECTION WITH A SEARCH
# ------------------------------------------------------------------------------

# Define a query text.
query_text = "Where can I find more info about AI?"

# Get the embedding for the query text.
query_resp = openai_client.embeddings.create(model=embedding_model_name, input=query_text)
query_embedding = query_resp.data[0].embedding

# Search the collection for similar vectors.
# 'limit=1' returns up to 1 results (if available).
search_results = client.search(
    collection_name=collection_name,
    query_vector=query_embedding,
    limit=1
)

# Print the search results.
for result in search_results:
    print("Document ID:", result.id)
    print("Score (the higher, the more similar):", result.score)
    print("Payload:", result.payload)
    print("-" * 40)

# ==============================================================================
# Section 5.2: Search with Filtering
# ==============================================================================

# Define a filter condition.
# In this example, we filter for documents where the "source" field equals "MERCK KGaA".
filter_cond = Filter(
    must=[
        FieldCondition(
            key="source",
            match=MatchValue(value="MERCK KGaA")
        )
    ]
)

# Define your query text.
query_text = "Where is the information about AI?"

# Generate an embedding for the query text.
query_resp = openai_client.embeddings.create(model=embedding_model_name, input=query_text)
query_embedding = query_resp.data[0].embedding

# Execute the search with the filter applied.
search_results = client.search(
    collection_name=collection_name,
    query_vector=query_embedding,
    query_filter=filter_cond,  # Apply the filter condition here.
    limit=5            # Limit the number of results.
)

# Display the search results.
print("\n=== Filtered Search Results ===")
for result in search_results:
    print("Document ID:", result.id)
    print("Score:", result.score)
    print("Payload:", result.payload)
    print("-" * 40)



# ------------------------------------------------------------------------------
# Section 6: List All Collections
# ------------------------------------------------------------------------------
print("\n=== List All Collections ===")
collections = client.get_collections()
for coll in collections.collections:
    print("Collection Name:", coll.name)
print("-" * 40)

# ------------------------------------------------------------------------------
# Section 7: Retrieve a Specific Point by ID
# ------------------------------------------------------------------------------
print("\n=== Retrieve Document with ID 1 ===")
retrieved_point = client.retrieve(collection_name=collection_name, ids=[1])
print("Retrieved Point:", retrieved_point)
print("-" * 40)


# ------------------------------------------------------------------------------
# Assumptions:
# - The Qdrant client is already created and available as `client`
# - The collection name is stored in `collection_name`
# - The embedding model instance is available as `llm_embedding`
# - The embedding size is 1536 (as per your text-embedding-ada-002-v2 model)
#
# For the batch upsert examples below, we define some dummy embeddings.
# In your actual code, these should be replaced with real embeddings.
embedding1 = [0.1] * 1536
embedding2 = [0.2] * 1536
embedding3 = [0.3] * 1536

# ==============================================================================
# Section 8.1: Define a Filter Condition to Identify Points to Update
# ==============================================================================
filter_cond = models.Filter(
    must=[
        models.FieldCondition(
            key="source",
            match=models.MatchAny(any=["MERCK KGaA"]),
        )
    ]
)

# ==============================================================================
# Section 8.2: Extract Points Using .scroll
# ==============================================================================
results, _ = client.scroll(
    collection_name=collection_name,
    scroll_filter=filter_cond,
    with_payload=True,  # OPTIONAL: Include payload in the results.
    with_vectors=True  # OPTIONAL: Exclude vectors to reduce bandwidth.
)
print("Extracted points:")
for point in results:
    print(f"Point ID: {point.id}, Payload: {point.payload}")

print("POINT VECTOR:", results[0].vector)
# ==============================================================================
# Section 8.3: Extract the Points' IDs for a Batch Update (OPTIONAL)
# ==============================================================================
points_id = [point.id for point in results]
print("Points IDs to update:", points_id)

# ==============================================================================
# Section 8.3.1: Update the Payload (Partial Update)
# ==============================================================================
# If you only want to update selected fields in the payload, use `set_payload`.
args = {"source": "Merck KGaA - Germany"}
client.set_payload(
    collection_name=collection_name,
    payload=args,
    points=points_id,
)
print("Partial payload update (set_payload) completed.")

filter_cond = models.Filter(
    must=[
        models.FieldCondition(
            key="source",
            match=models.MatchAny(any=["Merck KGaA - Germany"]),
        )
    ]
)
results, _ = client.scroll(
    collection_name=collection_name,
    scroll_filter=filter_cond,
    with_payload=True,  # OPTIONAL: Include payload in the results.
    with_vectors=False  # OPTIONAL: Exclude vectors to reduce bandwidth.
)
print("Extracted points:")
for point in results:
    print(f"Point ID: {point.id}, Payload: {point.payload}")

# ==============================================================================
# Section 8.3.2: Update the Payload (Overwrite Entire Payload)
# ==============================================================================
# To completely replace the payload of the selected points:
client.overwrite_payload(
    collection_name=collection_name,
    payload={
        "source": "val1",
        "access": "val2",
        "link": "val2",
    },
    points=points_id,
)
print("Payload overwrite update (overwrite_payload) completed.")

# ==============================================================================
# Section 8.5: Update the Vectors for Points (If Needed)
# ==============================================================================
# For each point, generate a new vector (e.g., because the text has changed)
for point in results:
    # Generate a new embedding for the new text.
    new_vector = llm_embedding.embed_query("NEW TEXT FOR THE POINT VECTOR")
    client.update_vectors(
        collection_name=collection_name,
        points=[
            models.PointVectors(
                id=point.id,
                vector=new_vector,
            ),
        ],
    )
    print(f"Updated vector for point ID: {point.id}")

# ==============================================================================
# Section 8.5.1: Record-Oriented Batch Upsert of Points
# ==============================================================================
# This approach uses a batch object with aligned lists of IDs, payloads, and vectors.
# Note: The number of payloads and vectors must match the length of `points_id`.
client.upsert(
    collection_name=collection_name,
    points=models.Batch(
        ids=points_id,  # List of point IDs to update.
        payloads=[
            {"source": "val1"},
            {"source": "val2"},
            {"source": "valN"},
        ],
        vectors=[
            embedding1,
            embedding2,
            embedding3,
        ],
    ),
)
print("Record-oriented batch upsert completed.")

# ==============================================================================
# Section 8.5.2: Column-Oriented Batch Upsert of Points
# ==============================================================================
# Here, each point is defined separately.
# We use a conditional check to ensure we have enough points in `points_id`.
client.upsert(
    collection_name=collection_name,
    points=[
        models.PointStruct(
            id=points_id[0] if len(points_id) > 0 else 1,
            payload={"source": "val1"},
            vector=embedding1,
        ),
        models.PointStruct(
            id=points_id[1] if len(points_id) > 1 else 2,
            payload={"access": "valN"},
            vector=embedding2,
        ),
    ],
)
print("Column-oriented batch upsert completed.")
```
</details>
</br>

#### Quantization of VectorDB collections

Quantization is a technique that reduces the storage size of vectors by approximating them, which can significantly enhance search performance and decrease memory usage.


**Scalar Quantization**: By default, Qdrant uses 32-bit floating-point numbers to represent vector components. Scalar quantization reduces this to 8 bits, optimizing for both storage and processing efficiency.

  
```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    quantization_config=models.ScalarQuantization(
        scalar=models.ScalarQuantizationConfig(
            type=models.ScalarType.INT8,
            quantile=0.99,
            always_ram=True,
        ),
    ),
)
```

In addition to Scalar Quantization, there are other methods: **Binary Quantization**, which is the fastest, and **Product Quantization**, which is the most memory-efficient. However, Scalar Quantization is often the preferred choice for general use cases due to its minimal impact on accuracy.

For more information, refer to the [Qdrant documentation](https://qdrant.tech/documentation/guides/quantization/).

### Multilanguage
There are several ways every RAG application is impacted by language.

#### Retrieval
Embeddings (e.g., ada3) and vectorizers (e.g., tfidf) are language-dependent. The same sentence in a different language will not result in the same vector representation and can have a varying influence on retrieval results. The best strategy will depend on your documents.

A simple way to make the search less dependent on language could be to translate every input query to English and, for example, search only using the English query or search using both the English and the original language query and combine the results before filtering for the top hits. For completeness, one could translate all documents to English to perform the search.

#### Generation
The quality of the output of an LLM is language-dependent. Typically, English performs best. Either the lower performance in other languages is accepted, or (if cost and latency allow) translating the English output back into the original language can be considered.

### Reranking

Rerankers use more precise and time-intensive methods to reorder documents effectively, enhancing the similarity between the query and the top-ranked documents. crucial The recommended rerankers are:
  
| Model                                                                               | Comments                                                                                                                                    |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [Cohere Rerank 3.5](https://cohere.com/blog/rerank-3pt5)                            |  Latest state-of-the-art multilingual model. Relatively fast due to API call rather than local hosting.      |                                                                                                                                      
| [Amazon Rerank 1.0](https://aws.amazon.com/de/about-aws/whats-new/2024/12/amazon-bedrock-rerank-api-accuracy-rag-applications/?nc1=h_ls)                            |  A rerank model by Amazon.      |                                                                                                                                      |
| [BAAI/bge-reranker-large](https://huggingface.co/BAAI/bge-reranker-large)           | Reported to have good results but can be slow as it requires local deployment.                                                              |

### Templates / Blueprints

The following three examples from the [UPTIMIZE App Service](https://docs.uptimize.merckgroup.com/appservice/introduction-app-service/) can guide the creation of a proof of concept (POC) for an RAG chatbot. It is recommended to use these examples with caution and always refer to the latest versions available in the UPTIMIZE App Service.

<details>
<summary><b>Code Example: GPT API</b></summary>

```python
import os

import streamlit as st
from utils import (
    create_openai_client,
    setup_environment,
    show_code
)

st.header("Chat with GPT models via the API!")
st.markdown(
    """The current version of the GPT API is a preview version. Please make sure that you have read and understood the following things before using the API:

- The GPT API is not yet deployed for production usage. The production API setup is work in progress.
- The GPT API is not intended for use in regulated environments.
- The GPT API is not intended for use for public facing products.
- The GPT API is not intended for use with secret data.
- In case you want to process data containing Personal Identifiable Information (PII), 
    the same terms and conditions apply as mentioned in section 5 for usage of [myGPT Suite](https://evarooms.merckgroup.com/Topic/MerckData/mygpt/terms-conditions).
- When using the GPT API it is the use case team's responsibility to ensure that the use of the 
    API follows [Microsoft's code of conduct](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct).
"""
)
st.markdown(
    "### [UPTIMIZE GPT API docs](https://docs.uptimize.merckgroup.com/aiml/gpt_api/)"
)

# load environment variables like API keys
setup_environment()
# gracefully handle missing environment variables like NLP API key
if "APP_SERVICE_NLP_API_KEY" not in os.environ or "APP_SERVICE_NLP_API_URL" not in os.environ:
    st.error(
        "APP_SERVICE_NLP_API_URL environment variable not present. Please connect to NLP API using the "
        "Configuration UI.",
        icon="🚨",
    )
    show_code(file_path=os.path.realpath(__file__))
    st.stop()

llm = "gpt-35-turbo-0613"
openai_client = create_openai_client(api_version="2024-02-01")

with st.sidebar:
    history_size = st.slider(
        label="Number of previous messages to consider",
        min_value=1,
        max_value=15,
        value=5,
        step=1,
        help="The maximum number of previous chat messages the LLM would consider for its response.",
    )
    temperature = st.slider(
        label="Temperature",
        min_value=0.0,
        max_value=1.0,
        value=0.1,
        step=0.1,
        help=(
            "Lower values for temperature result in more consistent outputs, "
            "while higher values lead to more diverse and creative results."
        ),
    )
    system_prompt = st.text_area(
        label="System Prompt",
        value="You are a helpful assistant.",
        help="This prompt will be used to set the initial context for the LLM and define the instructions for the LLM.",
    )

# Initialize chat history
if "chat_messages" not in st.session_state:
    st.session_state.chat_messages = []

chat_container = st.container(height=500)
input_container = st.container()

# Display chat messages from history on app rerun
# https://docs.streamlit.io/get-started/fundamentals/main-concepts#data-flow
# Streamlit reruns the whole script upon any user interaction, like chatting
# Therefore, information that needs to be kept across reruns, must be stored in session_state
for message in st.session_state.chat_messages:
    with chat_container.chat_message(message["role"]):
        st.markdown(message["content"])

# Accept user input
if prompt := input_container.chat_input("What is up?"):
    st.session_state.chat_messages.append({"role": "user", "content": prompt})
    with chat_container.chat_message("user"):
        st.markdown(prompt)

    with chat_container.chat_message("assistant"):
        stream = openai_client.chat.completions.create(
            model=llm,
            messages=[{"role": "system", "content": system_prompt}]
            + st.session_state.chat_messages[-history_size:],
            temperature=temperature,
            stream=True,
        )
        # streaming the incremental response is only available in streamlit version >= 1.34
        response = st.write_stream(stream)
    st.session_state.chat_messages.append({"role": "assistant", "content": response})

show_code(file_path=os.path.realpath(__file__))

```

</details>

<br>

<details>
<summary><b>Code Example: Retrieval Augmented Generation</b></summary>

```python
import io
import json
import os
from typing import List
from urllib.parse import urljoin

import pandas as pd
import requests
import streamlit as st
from langchain.docstore.document import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from qdrant_client import QdrantClient
from qdrant_client.http.models.models import ScoredPoint
from qdrant_client.models import Distance, PointStruct, VectorParams
from utils import (
    batched,
    create_embeddings_batch,
    create_openai_client,
    setup_environment,
    show_code,
)

st.header("RAG - Chat with your documents example")
st.caption(
    (
        "This demo application is not yet conversational. The chatbot will always only consider the "
        "last message in the conversation and have no memory of earlier questions. In LangChain, this is "
        "implemented by a prompt that asks the LLM to condense all previous questions and answers into a "
        "new question to perform the retrieval with and answer. Another option would be to look at "
        "[this example](https://chatimpact.apps.p.uptimize.merckgroup.com/Document_Conversation) "
        "if you want to implement conversation memory"
    )
)

# load environment variables like API keys
setup_environment()
# gracefully handle missing environment variables like NLP API key
if "APP_SERVICE_NLP_API_KEY" not in os.environ or "APP_SERVICE_NLP_API_URL" not in os.environ:
    st.error(
        "APP_SERVICE_NLP_API_URL environment variable not present. Please connect to NLP API using the "
        "Configuration UI.",
        icon="🚨",
    )
    show_code(file_path=os.path.realpath(__file__))
    st.stop()

def extract_text_with_textract(file_name: str, file: io.BytesIO) -> str:
    """Query AWS Textract API to extract text from a pdf file.

    Args:
        file_name (str): Name of the file.
        file (io.BytesIO): File content (Streamlit UploadedFile object).

    Returns:
        str: Text extracted from the file.
    """
    # Configuration for extracting text using AWS Textract
    payload = {"out_type": "text", "task": "LINES"}
    headers = {"x-api-key": os.getenv("APP_SERVICE_NLP_API_KEY", "")}

    # Prepare the files parameter for the requests call
    files = [("file", (file_name, file, "application/pdf"))]

    response = requests.request(
        "POST", textract_url, headers=headers, data=payload, files=files
    )
    response.raise_for_status()

    # Parse the JSON response to get the extracted text
    return json.loads(response.text)["text"]


def parse_documents(documents: List[io.BytesIO]) -> List[Document]:
    """Process the uploaded PDF documents, extract the text, and parse as LangChain Documents.

    Args:
        documents (List[io.BytesIO]): List of uploaded documents.

    Returns:
        List[Document]: List of LangChain Document objects.
    """
    parsed_documents = []
    for doc in documents:
        parsed_documents.append(
            Document(
                page_content=extract_text_with_textract(doc.name, doc),
                metadata={"document_name": doc.name},
            )
        )
    return parsed_documents


def create_retriever(document_list: List[Document]) -> QdrantClient:
    """Create a Qdrant vector database and add the text embeddings to the database.

    Args:
        document_list (List[Document]): List of LangChain Document objects.

    Returns:
        QdrantClient: Qdrant vector database client.
    """
    vectordb_client = QdrantClient(":memory:")
    # 1536 is the default vector size for OpenAI's text-embedding-ada-002 model
    vectordb_client.create_collection(
        collection_name=collection_name,
        vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
    )

    batch_size = 16
    for batch_id, documents_batch in enumerate(batched(document_list, batch_size)):
        embeddings = create_embeddings_batch(
            openai_client, [document.page_content for document in documents_batch]
        )
        points = [
            PointStruct(
                id=batch_id * batch_size + i,
                vector=embedding.tolist(),
                payload={
                    "text": document.page_content,
                    **document.metadata,
                },
            )
            for i, (document, embedding) in enumerate(zip(documents_batch, embeddings))
        ]
        vectordb_client.upsert(collection_name=collection_name, points=points)
    return vectordb_client


def process_uploaded_documents():
    """Convert the uploaded PDF files into text and create a local vectorstore and set both as session variables."""
    with st.status("Processing the documents...", expanded=True) as status:
        st.write("Extracting the document text...")
        # Step 2: Parse the text of each document using AWS Textract and convert into Langchain Document objects
        parsed_documents = parse_documents(st.session_state.source_docs)
        st.write("Text extraction complete")
        # Step 3: Split the parsed documents into chunks
        # The ideal chunk size depends on the context size of the LLM
        # and on the use case itself. Do you need keywords as relevant context for questions
        # or do you need full pages of a manual e.g.?
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=2000, chunk_overlap=200
        )
        all_doc_chunks = []
        for doc in parsed_documents:
            # split each document separately to collect metadata
            doc_chunks = text_splitter.split_documents([doc])
            for i, doc_chunk in enumerate(doc_chunks):
                doc_chunk.metadata["chunk"] = i
                doc_chunk.metadata["n_chunks"] = len(doc_chunks)
                all_doc_chunks.append(doc_chunk)

        st.write(f"Splitted documents into {len(all_doc_chunks)} total chunks.")

        st.write("Computing embeddings and performing indexing...")
        # Step 4: Create the embedding of each chunk and store it in the vectorstore.
        st.session_state.retriever = create_retriever(all_doc_chunks)
        st.write("Indexing complete")
        status.update(
            label="Document processing complete", state="complete", expanded=False
        )


def llm_response(prompt: str) -> str:
    """Get a chat response from the LLM given a prompt.

    Args:
        prompt (str): Prompt for the LLM.

    Returns:
        str: Response from the LLM.
    """
    instruction = (
        "You are an assistant for question-answering tasks. "
        "Use the following pieces of retrieved context to answer the question. "
        "If you don't know the answer, just say that you don't know. "
        "Use three sentences maximum and keep the answer concise."
    )
    response = openai_client.chat.completions.create(
        model=llm,
        messages=[
            {"role": "system", "content": instruction},
            {"role": "user", "content": prompt},
        ],
        temperature=st.session_state.selected_temperature,
    )
    return response.choices[0].message.content


def query_llm(query: str, scored_points: List[ScoredPoint]) -> str:
    """Ask a question to the LLM with relevant parts of the uploaded documents as context.

    Args:
        query (str): Question to be asked.
        scored_points (List[ScoredPoint]): List of ScoredPoint objects (context objects retrieved).

    Returns:
        str: Response from the LLM.
    """
    context_formatted = "\n\n".join(
        [
            "document={}, chunk={}/{}\n{}".format(
                pt.payload["document_name"],
                pt.payload["chunk"],
                pt.payload["n_chunks"],
                pt.payload["text"],
            )
            for pt in scored_points
        ]
    )
    prompt = "Context: " + context_formatted + "\n\n" + "Question: " + query
    return llm_response(prompt)


textract_url = urljoin(os.environ["APP_SERVICE_NLP_API_URL"], "awsTextract")
embedding_model = "text-embedding-ada-002-v2"
llm = "gpt-35-turbo-16k"
collection_name = "rag-template"
openai_client = create_openai_client(api_version="2024-02-01")

# Step 1: Set up the sidebar with configuration elements
with st.sidebar:
    st.session_state.source_docs = st.file_uploader(
        label="Upload Documents", type="pdf", accept_multiple_files=True
    )
    st.button("Submit Documents", on_click=process_uploaded_documents)

    st.session_state.selected_retrieval_top_k = st.slider(
        label="Chunks to retrieve for context",
        min_value=1,
        max_value=5,
        value=4,
        help="Number of chunks to retrieve as additional context to a query",
    )

    st.session_state.selected_temperature = st.slider(
        label="Temperature",
        min_value=0.0,
        max_value=1.0,
        value=0.1,
        step=0.1,
        help="Lower values for temperature result in more consistent outputs, while higher values "
        "generate more diverse and creative results. Select a temperature value based on the "
        "desired trade-off between coherence and creativity for your specific application. "
        "Setting temperature to 0 will make the outputs mostly deterministic, but a small "
        "amount of variability will remain.",
    )

    st.session_state.clear_chat_history_button = st.button("Clear Chat History")

if (
    "rag_chat_messages" not in st.session_state
    or st.session_state.clear_chat_history_button
):
    st.session_state.rag_chat_messages = [
        {"role": "assistant", "content": "How may I help you?"}
    ]

# Display messages
for message in st.session_state.rag_chat_messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])

if query := st.chat_input():
    if "retriever" not in st.session_state:
        st.error(
            "No documents uploaded. Please upload documents using the upload button above, before asking a question."
        )
    else:
        st.chat_message("human").write(query)
        st.session_state.rag_chat_messages.append(
            {"role": "user", "content": query}
        )
        # Step 5: Retrieval: Get the text chunks with the highest relevance to the user question.
        query_vector = create_embeddings_batch(openai_client, [query])[0]
        scored_points = st.session_state.retriever.search(
            collection_name=collection_name,
            query_vector=query_vector,
            limit=st.session_state.selected_retrieval_top_k,
        )
        with st.chat_message("ai"):
            with st.expander("Relevant document chunks"):
                st.write("Double click on a cell to expand it!")
                st.dataframe(
                    pd.DataFrame(
                        [
                            {**point.payload, "similarity": point.score}
                            for point in scored_points
                        ]
                    )
                )
            # Step 6: Use the LLM to generate an answer using the retrieved chunks and the user question.
            response = query_llm(query, scored_points)
            st.write(response)
        st.session_state.rag_chat_messages.append(
            {"role": "assistant", "content": response}
        )

show_code(file_path=os.path.realpath(__file__))


```

</details>

<br>

<details>
<summary><b>Code Example: utils</b></summary>

```python

import json
import os
import uuid
from itertools import islice
from pathlib import Path
from typing import List

import certifi
import numpy as np
import streamlit as st
from langfuse.openai import AzureOpenAI
from requests.structures import CaseInsensitiveDict

APP_SERVICE_FOUNDRY_ACCESS_TOKEN_HEADER = "X-Foundry-AccessToken"
APP_SERVICE_SNOWFLAKE_ACCESS_TOKEN_HEADER = "X-Snowflake-AccessToken"

PROJECT_ROOT = Path(__file__).resolve().parent.parent


def create_embeddings_batch(
    client: AzureOpenAI,
    texts: List[str],
    embedding_model_name: str = "text-embedding-3-small",
) -> np.ndarray:
    resp = client.embeddings.create(model=embedding_model_name, input=texts)
    return np.stack([e.embedding for e in resp.data], axis=0)


# copied from: https://docs.python.org/3.12/library/itertools.html#itertools.batched
def batched(iterable, n):
    # batched('ABCDEFG', 3) --> ABC DEF G
    if n < 1:
        raise ValueError("n must be at least one")
    it = iter(iterable)
    while batch := tuple(islice(it, n)):
        yield batch


def get_streamlit_request_headers():
    """Helper function that returns streamlit request headers.

    This implementation works starting with streamlit>=1.14.0

    Returns:
        :py:class:`~requests.structures.CaseInsensitiveDict`:
            case-insensitive dict with request headers
    """
    from streamlit.web.server.websocket_headers import _get_websocket_headers

    return CaseInsensitiveDict(_get_websocket_headers())


def show_code(file_path):
    with open(file_path, "r") as f:
        own_code = f.read()

    with st.expander("Show Source Code of this page"):
        st.code(own_code, language="python")


def app_is_running_on_app_service() -> bool:
    return True if "APP_SERVICE_TS" in os.environ else False


def setup_environment() -> None:
    """Sets up the necessary environment variables for the application.

    This function should be called before the application initializes. It configures
     environment variables for running the application.
    For local development it ensures that:
    - The application configuration is loaded from 'config.json'
    - The requests and httpx libraries are configured to use the Merck SSL certificates
    When running in the app service in ensures that:
    - If the user provides a runtime configuration through the app service console, then
      each configured json entry is exposed as environment variables.
    """
    if not app_is_running_on_app_service():
        path_config = PROJECT_ROOT / "config.json"
        try:
            os.environ["APP_SERVICE_CONFIG"] = Path(path_config).read_text()
        except FileNotFoundError as e:
            raise FileNotFoundError(
                "Missing config.json. Please duplicate the config-template.json file and fill with your own credentials."
            ) from e

        # local development requires certificate / ssl setup
        cacert_path = _create_cacert_bundle_with_merck_additions()
        # The httpx library used by openai uses SSL_CERT_FILE environment variable:
        # https://www.python-httpx.org/compatibility/#ssl-configuration
        os.environ["SSL_CERT_FILE"] = cacert_path
        # The requests library uses the REQUESTS_CA_BUNDLE environment variable:
        # https://requests.readthedocs.io/en/latest/user/advanced/#ssl-cert-verification
        os.environ["REQUESTS_CA_BUNDLE"] = cacert_path

    # In appservice, APP_SERVICE_CONFIG is present when the user provides a runtime
    # configuration through the app service console
    if "APP_SERVICE_CONFIG" in os.environ:
        config = json.loads(os.environ["APP_SERVICE_CONFIG"])
        os.environ.update(config)


@st.cache_resource
def create_openai_client(
    api_version: str = "2024-02-01", model: str = "gpt-4o-mini-na"
) -> AzureOpenAI:
    """Wrap client creation into singleton to avoid re-creation of the client on re-runs.
    If you want to adjust the api key or endpoint, control it via the
    APP_SERVICE_NLP_API_URL and APP_SERVICE_NLP_API_KEY environment variables.

    Args:
        api_version (str, optional): API version. Defaults to "2024-02-01".

    Returns:
        AzureOpenAI: Azure OpenAI client.
    """
    # HACK: The default APP_SERVICE_NLP_API_URL injected into a deployed apps environment
    # ends with a trailing slash '/'. The AzureOpenAI client does not resolve this and incorrectly
    # sets up the URLs for the API calls. As a workaround, we need to remove the trailing slash if present.
    azure_endpoint = str(os.getenv("APP_SERVICE_NLP_API_URL", "")).rstrip("/")
    api_key = os.getenv("APP_SERVICE_NLP_API_KEY", "")
    if not api_key_is_valid_uuid(api_key):
        raise ValueError(
            "APP_SERVICE_NLP_API_KEY environment variable invalid. Please look at the "
            "'Configure the app' section in the README.md for a step-by-step guide"
        )

    return AzureOpenAI(
        azure_endpoint=azure_endpoint,
        api_version=api_version,
        api_key=api_key,
    )

```

</details>

## Multimodal Data in RAG Systems

Multimodal Retrieval-Augmented Generation (RAG) systems enhance Large Language Models (LLMs) by integrating diverse data types. This section explores two approaches for implementing multimodal RAG.

### Option 1: Unified Multimodal Embeddings

Use multimodal embeddings to embed different types of data (text, images, audio) in a single vector space.

##### Implementation:
1. Encode images and text using a multimodal model
2. Store embeddings in a vector database
3. Use the same model to encode user queries for retrieval

#### Recommended Models:
- Image + text:
  - [CLIP (OpenAI)](https://huggingface.co/openai/clip-vit-base-patch32)
  - [LLaVA](https://github.com/haotian-liu/LLaVA) 
- Image + text + audio:
  - [ImageBind (Facebook Research)](https://github.com/facebookresearch/ImageBind)
  
### Option 2: Image-to-Text Conversion

Convert visual or audio data into textual representations and use this text with traditional text-based RAG systems.

#### Implementation:
1. Generate text summaries or captions for images and transcribe audio data using a transcription model.
2. Encode these textual representations and store their embeddings in a vector database.
3. Perform text-based retrieval

#### Recommended Models:
- Image-to-text:
  - [KOSMOS-2 (Microsoft)](https://huggingface.co/microsoft/kosmos-2-patch14-224)
  - [GIT (GenerativeImage2Text) (Microsoft)](https://huggingface.co/microsoft/git-base)
  - [BLIP (Salesforce) - large and base versions](https://huggingface.co/Salesforce/blip-image-captioning-large)
  - [Pix2Struct (Google)](https://huggingface.co/google/pix2struct-large)
  - [VIT-GPT2 Image Captioning](https://huggingface.co/nlpconnect/vit-gpt2-image-captioning)
- Audio-to-text:
  - [whisper (OpenAI)](https://github.com/openai/whisper) Available via UPTIMIZE OpenAI API
  - [AWS Transcripe API](https://docs.aws.amazon.com/transcribe/)  Available via UPTIMIZE AWS ML Services


## LLM Model / Parameter

To select the appropriate model and optimal parameters, an evaluation pipeline is essential for assessing their impacts.

### Choosing the Appropriate LLM (Also Applicable for myGPT Suite)

- For low latency and moderately complex tasks, opt for a small or medium-sized model.
- For highly complex tasks or when high accuracy is crucial, choose a large model.
- If there are cost constraints or limited resources, consider a smaller model.


Model recommendations:

- **Small Model:** `mistral-7b-instruct`
- **Medium Models:** `claude-3-haiku`, `gpt-4o-mini`
- **Large Models:** `claude-3-5-sonnet`, `gpt-4o`
- **Reasoning Models:** `o1-mini`, `o3-mini`

The use of reasoning models should be carefully considered due to their higher costs. Below is a table highlighting when reasoning models excel and when they may fall short, adapted from [Sebastian Raschka's blog](https://sebastianraschka.com/blog/2025/understanding-reasoning-llms.html#when-should-we-use-reasoning-models):

| Good at                                                      | Bad at                                   |
|--------------------------------------------------------------|------------------------------------------|
| + Deductive or inductive reasoning (e.g., riddles, math proofs) | - Fast and cheap responses (more inference time) |
| + Chain-of-thought reasoning (breaking down multi-step problems) | - Knowledge-based tasks (hallucination)  |
| + Complex decision-making tasks                              | - Simple tasks ("overthinking")          |
| + Better generalization to novel problems                    |                                          |

Explore best practices for using reasoning models, with a focus on OpenAI models. Visit the [Reasoning Best Practices](https://platform.openai.com/docs/guides/reasoning-best-practices) for more information.


### Parameter

- **Temperature**: Controls the randomness and creativity of the model's output by determining how often less likely tokens are chosen. Setting the temperature to `0` results in more deterministic behavior.
- **top_k**: Limits the sampling pool to the top `k` highest probability tokens from the vocabulary.
- **top_p**: Uses nucleus sampling to consider only tokens within the top `p` probability mass, such as 0.1, which includes tokens within the top 10% probability mass. It is advised to adjust either this or the temperature, but not both simultaneously.
- **Seed**: Specifies a value for attempting deterministic sampling, making repeated requests with the same seed and parameters more likely to yield the same results. While determinism is not guaranteed, the `system_fingerprint` response parameter can be used to track backend changes.

### Reproducible outputs
- Chat completions are non-deterministic by default, meaning model outputs may vary between requests.
- To achieve (mostly) deterministic outputs across API calls:
  - Set the seed parameter to a consistent integer value for repeated requests.
  - Ensure all other parameters (such as prompt and temperature) are identical across requests.
```python
response = openai.chat.completions.create(
            model=GPT_MODEL,
            messages=messages,
            seed=123,
            max_tokens=200,
            temperature=0,
        )
```

- The system_fingerprint response field helps you track these changes; differing values indicate potential variations in output due to system updates.
- For more information, refer to the [OpenAI documentation on reproducible outputs](https://platform.openai.com/docs/advanced-usage#reproducible-outputs).

<ld-notice headline="Warning!" mode="warning">
It has been reported that even with the same seed and fingerprint, the outputs may still vary. One potential reason for this is related to the <a href="https://152334h.github.io/blog/non-determinism-in-gpt-4/">MoE architecture</a>. If reproducibility is a top priority, consider using a different model. For instance, the Mistral 7b model has been noted for producing deterministic outputs.
</ld-notice>


## Document Processing and Structured Data Handling

### Document Reading
When working on GenAI projects, the ability to efficiently read and extract content from different document formats is crucial. This section covers various tools that can help you convert diverse document types, such as scanned images, PDFs, and PowerPoint presentations, into formats that are easily processed by language models and other AI systems.

For documents containing workflows, pictures, or other complex elements, additional steps may be necessary to convert them into a machine-readable format, such as plain text or mermaid diagrams.

| No | Tool | Comment | License | Formats |
|----|------|---------|---------|---------|
| 1 | [Mathpix](https://mathpix.com/) | Effective for converting images of handwritten math notes to LaTeX or structured text. Reported to work well for data containing tables and European documents. Does not work well for Japanese documents. | Proprietary | `jpg`, `png`, `pdf` |
| 2 | [Pypdf](https://github.com/py-pdf/pypdf) | Python library for PDF generation, manipulation, and processing tasks. Reported to work well for Chinese documents better than PyMuPDF. | [Open Source](https://github.com/py-pdf/pypdf?tab=License-1-ov-file#readme) | `pdf` |
| 3 | [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/index.html) | Library for directly accessing PDF files and converting them into Markdown format. Reported to work better for Japanese documents than Mathpix. | [AGPL-3.0 license](https://github.com/pymupdf/PyMuPDF?tab=AGPL-3.0-1-ov-file#readme) | `pdf` |
| 4 | [AWS Textract](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/aws_ml_services/#3.-aws-textract-api) | Service for automatic text extraction from scanned documents, PDFs, and forms, using OCR. | Proprietary | `pdf`, `png`, `jpeg` |
| 5 | [UnstructuredPowerPointLoader](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.powerpoint.UnstructuredPowerPointLoader.html) | Tool from the LangChain package that can be used to load and process PowerPoint files. | [Apache-2.0 license](https://github.com/Unstructured-IO/unstructured?tab=Apache-2.0-1-ov-file#readme) | `pptx` |
| 6 | [Docling](https://github.com/DS4SD/docling) | IBM's open-source toolkit for converting unstructured documents into JSON and Markdown. Facilitates generative AI applications by preparing data for models. | [MIT License](https://github.com/DS4SD/docling?tab=MIT-1-ov-file#readme) | `pdf`, `docx`, `pptx`, `xlsx`, `images`, `html`, `asciidoc` |

>**Best practice:**  Markdown (GitHub Flavored) is recommended as the primary file format for LLMs because it can be rendered in Streamlit and Langfuse and is well understood by LLMs. (This recommendation does not apply to myGPT Suite Assistants, as their processing is done automatically in the background.)


### Providing Tabular Data to LLM
Depending on the application, XML or JSON-like formats can perform better than CSV format, see [here](https://arxiv.org/pdf/2402.17944v2#page=9) . When chunking a table, make sure to include the table column names in the chunks. Be cautious with Excel files and tables converted to PDFs, as they likely require specialized handling.
  
### Querying Tabular Data Using LLMs

Including the entire table in an LLM query might be infeasible due to cost, latency, or context length limitations. In such cases, using an agent to translate the user question into a SQL or Python statement can be a viable solution.

Before implementing a custom solution, consider the existing tools available for analyzing tables in the UPTIMIZE space:

1. **myGPT Suite Data Analyst**: Generates the necessary Python code, which is then executed by the Data Analyst (Preview) to provide relevant responses. [Learn more](https://merckgroup.canny.io/changelog/data-analyst-preview-csv-xslx-files-and-so-much-more)
2. **AI Analyst (App Service)**: Supports CSV, XLS, and Foundry Datasets. [Access the service](https://text2sql-agent.apps.p.uptimize.merckgroup.com/)

<ld-notice headline="Danger: Executing LLM generated code can be dangerous" mode="warning"> 
Executing LLM-generated code poses a security risk to your host environment. Use it with caution.
</ld-notice>

When you need to execute LLM-generated code, follow the best practices outlined in the [architecture chapter](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_architecture).

## Agentic Designs

Agents gather and process data from various sources, such as sensors, databases and digital interfaces. This involves extracting meaningful features, recognizing objects or identifying relevant entities in the environment.

A large language model acts as the orchestrator, or reasoning engine, that understands tasks, generates solutions and coordinates specialized models for specific functions like content creation, vision processing or recommendation systems. This step uses techniques like retrieval-augmented generation (RAG) to access proprietary data sources and deliver accurate, relevant outputs.

Four main patterns of Agentic workflows exist according to [deeplearning.ai](https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/):

1. **Reflection**: The LLM examines its own work to come up with ways to improve it.
2. **Tool Use**: The LLM is given tools such as web search, code execution, or any other function to help it gather information, take action, or process data.
3. **Planning**: The LLM comes up with, and executes, a multistep plan to achieve a goal (for example, writing an outline for an essay, then doing online research, then writing a draft, and so on).
4. **Multi-agent collaboration**: More than one AI agent work together, splitting up tasks and discussing and debating ideas, to come up with better solutions than a single agent would. For more on multi-agent systems, see the article [Multi-agent Systems](https://langchain-ai.github.io/langgraph/concepts/multi_agent/) from LangGraph.

### 1. Reflection
The concept of reflection can be understood as a self-evaluation mechanism. It involves instructing the LLM to review its previous actions and decisions, taking into account any feedback from tools. This introspective process allows the agent to gauge the effectiveness of its choices, which in turn informs future steps such as adjusting strategies, exploring alternative solutions, or assessing overall performance.

In the following example, a workflow is designed to create an essay on a given topic. The workflow consists of two nodes: the first node (generation_node) produces the initial essay based on the provided topic, while the second node (reflection_node) reviews the generated essay and provides a critique.

Please click to expand and view the code examples.

<details>
<summary><b>Code Example: Reflection</b></summary>

```python
# Import necessary modules.

import os
from typing import Annotated, TypedDict

from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage
from langchain_openai.chat_models import AzureChatOpenAI
from langgraph.graph import END, START, StateGraph, add_messages
from langgraph.graph.state import CompiledStateGraph

MODEL = "gpt-4o"
TEMP = 0.0
GENERATION_SYSTEM_PROMPT = "You are an essay assistant tasked with writing excellent 5-paragraph essays. Generate the best essay possible for the user's request. If the user provides critique, respond with a revised version of your previous attempts."
REFLECTION_SYSTEM_PROMPT = "You are a teacher grading an essay submission. Generate critique and recommendations for the user's submission. Provide detailed recommendations, including requests for length, depth, style, etc."

# This class defines the state structure for the agent, which tracks messages.

class AgentState(TypedDict):
    """Agent state to track the messages"""

    messages: Annotated[list[BaseMessage], add_messages]

# These functions handle environment variable validation and create an instance of the language model.

def validate_environment_variable(key: str) -> None:
    """Check if an environment variable exists"""
    if key not in os.environ:
        raise ValueError(f"Environment variable {key} not found")


def get_llm(model: str, temp: float) -> AzureChatOpenAI:
    """Get the language model instance"""
    return AzureChatOpenAI(model=model, temperature=temp)

# These functions define the behavior of different nodes in the graph, including the decision to continue, essay generation, and reflection.

def should_continue(state: AgentState) -> str | END:
    """Check if the conversation should continue. End after 3 iterations"""
    if len(state["messages"]) > 6:
        # End after 3 iterations
        return END
    return "reflection_node"


def generation_node(state: AgentState) -> dict[str, list[BaseMessage]]:
    """Generate the essay"""
    llm = get_llm(MODEL, TEMP)
    response = llm.invoke(state["messages"])
    return {"messages": [response]}


def reflection_node(state: AgentState) -> dict[str, list[BaseMessage]]:
    """Provide feedback on the essay"""
    llm = get_llm(MODEL, TEMP)
    essay = [
        SystemMessage(REFLECTION_SYSTEM_PROMPT),
        HumanMessage(state["messages"][-1].content),
    ]
    response = llm.invoke(essay).content
    return {"messages": [HumanMessage(response)]}


def get_graph_instance() -> CompiledStateGraph:
    """Get the compiled state graph instance"""
    graph_instance = StateGraph(AgentState)
    graph_instance.add_node(generation_node)
    graph_instance.add_node(reflection_node)
    graph_instance.add_edge(START, "generation_node")
    graph_instance.add_conditional_edges("generation_node", should_continue)
    graph_instance.add_edge("reflection_node", "generation_node")
    return graph_instance.compile()

# This is the main function that orchestrates the essay writing process, including environment validation and graph invocation.

def write_essay(input: str) -> dict[str, list[BaseMessage]]:
    # Check environment variables
    validate_environment_variable("AZURE_OPENAI_ENDPOINT")
    validate_environment_variable("OPENAI_API_TYPE")
    validate_environment_variable("OPENAI_API_VERSION")
    validate_environment_variable("AZURE_OPENAI_API_KEY")

    # Get the graph instance
    graph = get_graph_instance()

    return graph.invoke(
        {"messages": [SystemMessage(GENERATION_SYSTEM_PROMPT), HumanMessage(input)]}
    )


if __name__ == "__main__":
    user_input = "Generate an essay on OpenAI with proper headings."
    response = write_essay(user_input)

    for message in response["messages"]:
        message.pretty_print()
```
</details>
</br>

Below is the visual representation of how the workflow looks like 

![Best Practices - Reflection](/assets/genai-guideline/best_practices_reflection.png)

Langgraph documentation: [Reflection](https://langchain-ai.github.io/langgraph/tutorials/reflection/reflection/#generate)
### 2. Tool use
Tool Use refers to equipping LLMs with external functionalities--such as web search, code execution, or data processing--to enhance their capabilities beyond text generation. This integration enables LLMs to interact with the external world, perform complex tasks, and provide more accurate and contextually relevant responses.

In the following example, two tools are created (weather_api and multiply_num) and made accessible to the Language Learning Model (LLM). The LLM decides which tool(s) to use based on the input question. If both tools are required to answer the question, they are invoked in parallel.

<details>
<summary><b>Code Example: Tool use</b></summary>

```python
#  Import necessary modules.
import os
from typing import Annotated, Literal, TypedDict

from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage
from langchain_core.tools import tool
from langchain_openai.chat_models.azure import AzureChatOpenAI
from langgraph.graph import END, START, StateGraph, add_messages
from langgraph.graph.state import CompiledStateGraph
from langgraph.prebuilt import ToolNode, tools_condition

# Constants are defined for the model, temperature, and system prompt for the chatbot.


MODEL = "gpt-4o"
TEMP = 0.0
SYSTEM_PROMPT = """You are having conversation with human. You have access to weather API to get the weather information and a tool to multiply two numbers."""

# This class defines the state structure for the agent, which tracks messages.

class AgentState(TypedDict):
    """Agent state to track the messages"""

    messages: Annotated[list[BaseMessage], add_messages]

# These functions handle creating an instance of the language model and validating environment variables.

def get_llm(model: str, temp: float) -> AzureChatOpenAI:
    """Get the language model instance"""
    return AzureChatOpenAI(model=model, temperature=temp)


def validate_environment_variable(key: str) -> None:
    """Check if an environment variable exists"""
    if key not in os.environ:
        raise ValueError(f"Environment variable {key} not found")

# These functions define tools that the chatbot can use: one for multiplication and another for weather information.

@tool
def multiply_num(num_a: float, num_b: float) -> float:
    """Multiplies two numbers.

    Args:
        num_a (float): The first number to multiply.
        num_b (float): The second number to multiply.

    Returns:
        float: The product of num_a and num_b.
    """
    return num_a * num_b


@tool
def weather_api(city: Literal["BLR", "FKF"]) -> str:
    """
    Returns the weather information for specified cities.

    Args:
        city (Literal["BLR", "FKF"]): City code. Supported values are:
            - "BLR": Bangalore
            - "FKF": Frankfurt

    Returns:
        str: A string containing weather description and temperature for the specified city.
            If the city is not supported, returns "Weather information is not available."
    """
    if city == "BLR":
        return "Weather is cold with temperature 19 degree celsius."
    elif city == "FKF":
        return "Weather is snowy with temperature -10 degree celsius."
    return "Weather information is not available."

# This function defines the behavior of the chatbot node, which uses the language model to generate responses.

def chatbot_node(state: AgentState) -> dict[str, list[BaseMessage]]:
    """Chatbot node to interact with the user"""
    llm = get_llm(MODEL, TEMP).bind_tools([weather_api, multiply_num])
    response = llm.invoke(state["messages"])
    return {"messages": [response]}

# This function creates and compiles the state graph, defining the flow between different nodes and incorporating the tools.

def get_graph_instance() -> CompiledStateGraph:
    """Get the compiled state graph instance"""
    graph_instance = StateGraph(AgentState)

    graph_instance.add_node(chatbot_node)
    graph_instance.add_node("tools", ToolNode([weather_api, multiply_num]))

    graph_instance.add_edge(START, "chatbot_node")
    graph_instance.add_conditional_edges("chatbot_node", tools_condition)
    graph_instance.add_edge("tools", "chatbot_node")
    graph_instance.add_edge("chatbot_node", END)

    return graph_instance.compile()


def get_response(query: str) -> dict[str, list[BaseMessage]]:
    # Check environment variables
    validate_environment_variable("AZURE_OPENAI_ENDPOINT")
    validate_environment_variable("OPENAI_API_TYPE")
    validate_environment_variable("OPENAI_API_VERSION")
    validate_environment_variable("AZURE_OPENAI_API_KEY")

    # Get the graph instance
    graph = get_graph_instance()

    return graph.invoke(
        {"messages": [SystemMessage(SYSTEM_PROMPT), HumanMessage(query)]}
    )


if __name__ == "__main__":
    # query = "What is LLM?"
    # query = "What is current temperature in Bangalore?"
    # query = "What is current temperature in Frankfurt?"
    # query = "What is current temperature in USA?"
    # query = "What is 3 times 10?"
    query = "What is current temperature in Bangalore?.What is 3 times 10?"

    response = get_response(query)
    for message in response["messages"]:
        message.pretty_print()
```
</details>
</br>

Below is the visual representation of how the workflow looks like 

![Best Practices - Tool Use](/assets/genai-guideline/best_practices_tool_use.png)

### 3. Planning

In agentic approach, Planning enables Large Language Models (LLMs) to devise and execute multi-step strategies to accomplish complex tasks. This approach enhances the model's ability to handle intricate objectives by breaking them down into manageable steps, ensuring systematic progression toward the desired outcome

**Example**:

Below code implements an LLM that automatically generates essays on given topics. It's designed to create well-structured, informative essays by LLM and web search capabilities.

__Main Components:__

- Outline Generation: The system first creates a comprehensive outline for the essay.
- Section Writing: It then writes detailed content for each section of the outline.

__Web Search Integration:__

To ensure up-to-date and relevant information, the system incorporates a web search functionality using the Bing Search API.

__Parallel Processing:__

The essay sections are written concurrently, improving efficiency in essay generation.

__Graph-based Architecture:__

The system uses a graph-based approach (with LangGraph) to manage the flow of operations, including:
- A subgraph for processing individual essay sections
- A main graph for coordinating the overall essay generation process

__Input and Output:__

- Input: The system takes an essay topic as input.
- Output: It produces a structured essay, which is saved as a Markdown file.

<details>
<summary><b>Code Example: Planning</b></summary>

```python
import operator
import os
from typing import Annotated, Any, List, TypedDict

from langchain_community.document_loaders.url import UnstructuredURLLoader
from langchain_community.utilities import BingSearchAPIWrapper
from langchain_core.documents.base import Document
from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.tools import tool
from langchain_openai.chat_models.azure import AzureChatOpenAI
from langgraph.constants import Send
from langgraph.graph import END, START, StateGraph, add_messages
from langgraph.graph.state import CompiledStateGraph
from langgraph.prebuilt import ToolNode, tools_condition
from pydantic import BaseModel, Field

# Constants for the language model and temperature
MODEL = "gpt-4o-mini"
TEMP = 0.0

# System prompts for outline generation and section writing
OUTLINE_SYSTEM_PROMPT = """You are an expert essay structuring assistant.  Your primary task is to create clear, well-organized outlines for essays on any given topic. Follow the below steps:

1. Begin with a brief analysis of the topic to ensure a thorough understanding.

2. Create a structured outline with the following components:
   a. Introduction: Provide a hook, background information, and a clear thesis statement.
   b. Body Sections: Develop 3-5 main sections, each with:
      - A clear, concise section title
      - A brief description of the content to be covered in this section (1-2 sentences)
   c. Conclusion: Summarize main points and restate the thesis in a new light.

3. Adapt the outline's complexity and depth to suit various academic levels (high school to postgraduate).

Remember to maintain objectivity and balance in your approach to the topic. Your goal is to create a comprehensive framework that will guide the essay writer through a well-structured, informative, and engaging composition."""

SECTION_SYSTEM_PROMPT = """You are a highly skilled essay section writer. You will be given with section title and the description about the section and your task is to write content to the section in one paragraph. Here's what you need to do:

1. Analyze the provided section title and description carefully.
2. Utilize the web search tool to gather relevant, up-to-date information from credible sources.
3. Synthesize the information into a coherent, engaging, and informative section that aligns with the overall essay structure.
4. Ensure your writing is clear, concise, and tailored to the appropriate audience and academic level(high school to postgraduate).
5. Keep the given title as heading in the response

Remember to balance depth and breadth in your writing, focusing on the most pertinent information for the given section. Your goal is to produce high-quality, original content that seamlessly integrates into the larger essay structure."""

# Pydantic models for data structures
class Section(BaseModel):
    title: str = Field(description="Title name")
    description: str = Field(
        description="Description about topic which should be covered"
    )


class Outline(BaseModel):
    outline: List[Section] = Field(description="List of sections")

# TypedDict for agent states
class AgentState(TypedDict):
    topic: str
    outline: Outline
    outline_content: Annotated[list[str], operator.add]


class SectionState(TypedDict):
    messages: Annotated[List[BaseMessage], add_messages]
    outline_content: list[str]


@tool
def web_search(search_query: str) -> Document:
    """
    Perform a web search using Bing Search API and retrieve the content of the first result.

    This function uses the Bing Search API to search for the given query, takes the first
    result, and loads the content of the webpage associated with that result.

    Args:
        search_query (str): The search query to be used for the web search.

    Returns:
        Document: A Document object containing the content of the first search result's webpage.
    """
    print(search_query)
    search = BingSearchAPIWrapper()  # type: ignore
    result = search.results(search_query, 1)
    hrefs = [i.get("link") for i in result]
    page_contents = UnstructuredURLLoader(hrefs).load()
    return page_contents[0]


def validate_environment_variable(key: str) -> None:
    """Check if an environment variable exists"""
    if key not in os.environ:
        raise ValueError(f"Environment variable {key} not found")


def get_llm(model: str, temp: float) -> AzureChatOpenAI:
    """Get the language model instance"""
    return AzureChatOpenAI(model=model, temperature=temp)


# ==============SubGraph==============

# SubGraph functions
def process_section_content(state: SectionState) -> dict[str, list[BaseMessage]]:
    """Process the section content. Uses the web search tool to gather relevant information."""
    llm = get_llm(MODEL, TEMP).bind_tools([web_search])
    response = llm.invoke(state["messages"])
    return {"messages": [response]}


def extract_section_content(state: SectionState) -> dict[str, list]:
    """Extract the section content from the response."""
    return {"outline_content": [state["messages"][-1].content]}


def get_section_graph_instance() -> CompiledStateGraph:
    """Create a graph instance for processing the section content."""
    graph_instance = StateGraph(SectionState)
    graph_instance.add_node(process_section_content)
    graph_instance.add_node(extract_section_content)
    graph_instance.add_node("tools", ToolNode([web_search]))
    graph_instance.add_edge(START, "process_section_content")
    graph_instance.add_conditional_edges("process_section_content", tools_condition)
    graph_instance.add_edge("tools", "process_section_content")
    graph_instance.add_edge("process_section_content", "extract_section_content")
    graph_instance.add_edge("extract_section_content", END)
    return graph_instance.compile()


# ==============MainGraph==============
# MainGraph functions
def generate_essay_outline(state: AgentState) -> dict[str, Any]:
    """Generate the essay outline based on the given topic."""
    llm = get_llm(MODEL, TEMP).with_structured_output(Outline)
    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", OUTLINE_SYSTEM_PROMPT),
            ("human", "Topic: {topic}"),
        ]
    )
    chain = prompt | llm
    response = chain.invoke({"topic": state["topic"]})
    return {"outline": response}


def start_parallel_sections(state: AgentState) -> List[Send]:
    """Start writing sections in parallel."""

    # Kick off section writing in parallel via Send() API
    return [
        Send(
            "write_secession_node",
            {
                "messages": [
                    SystemMessage(SECTION_SYSTEM_PROMPT),
                    HumanMessage(f"Title:{s.title}\nDescription:{s.description}"),
                ],
            },
        )
        for s in state["outline"].outline
    ]


def create_main_graph() -> CompiledStateGraph:
    """Create the main graph for generating an essay"""
    graph_instance = StateGraph(AgentState)

    graph_instance.add_node(generate_essay_outline)
    graph_instance.add_node("write_secession_node", get_section_graph_instance())
    graph_instance.add_edge(START, "generate_essay_outline")
    graph_instance.add_conditional_edges(
        "generate_essay_outline", start_parallel_sections, ["write_secession_node"]
    )

    graph_instance.add_edge("write_secession_node", END)

    return graph_instance.compile()


def generate_essay(topic: str) -> dict[str, Any]:
    # Check environment variables
    validate_environment_variable("AZURE_OPENAI_ENDPOINT")
    validate_environment_variable("OPENAI_API_TYPE")
    validate_environment_variable("OPENAI_API_VERSION")
    validate_environment_variable("AZURE_OPENAI_API_KEY")
    validate_environment_variable("BING_SUBSCRIPTION_KEY")
    validate_environment_variable("BING_SEARCH_URL")

    # graph instance
    graph = create_main_graph()

    return graph.invoke({"topic": topic})


if __name__ == "__main__":
    # Example usage of the essay generation
    essay_topic = "Write a essay on openai's newest model by name 'OpenAI o3'"
    response = generate_essay(essay_topic)
    with open("output.md", "w") as f:
        f.write("\n\n".join(response["outline_content"]))
```
</details>
</br>

Below is the visual representation of workflow

![Best Practices - Reflection](/assets/genai-guideline/best_practices_planning.png)


### 4. Multi-agent collaboration

Multi-agent collaboration refers to the cooperative interaction between multiple agents to solve complex problems or achieve common goals. These agents work together in a shared state, combining their individual outcomes to complete tasks that may be difficult or impossible for a single agent to handle alone.

The example mentioned earlier (Planning example) can be viewed as a multi-agent approach. In this flow, one node is responsible for creating the article outline, while a sub-graph of nodes takes on the task of writing content for each individual section.

For more details please refer [langgraph documentation](https://langchain-ai.github.io/langgraph/how-tos/#multi-agent) 
### Libraries

| Framework   | Link                                                                                         | Description                                                                                                                                                               |
|-------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Langchain LangGraph | [LangGraph](https://langchain-ai.github.io/langgraph/)                                       | A library for building stateful, multi-actor applications with LLMs, enabling workflows with benefits like cycles, controllability, and persistence, and fine-grained control over application flow and state. |                                    |

>**Note:**  Within Merck, the library with the most experience is LangGraph. Other libraries include   [OpenAI Swarm](https://github.com/openai/swarm), [Microsoft Autogen](https://github.com/microsoft/autogen), [LlamaIndex Workflows](https://docs.llamaindex.ai/en/stable/module_guides/workflow/) and  [Crewai](https://docs.crewai.com/introduction).

### Function Calling

Function Calling enables interaction with external systems or data by defining a set of accessible functions as tools. The model can use these tools as needed, based on conversation history, and you can execute the functions on the application side to return results to the model. 

Although the example provided is for OpenAI models, function calling is also supported by other models such as those from Anthropic and Mistral AI.

```python
from openai import OpenAI

client = OpenAI()

tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string"},
                    "unit": {"type": "string", "enum": ["c", "f"]},
                },
                "required": ["location", "unit"],
                "additionalProperties": False,
            },
        },
    }
]

completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "What's the weather like in Paris today?"}],
    tools=tools,
)

print(completion.choices[0].message.tool_calls)
```

## Observability

### Monitoring
Use UPTIMIZE LLM Traces to instrument your application. Tracing is not just helpful to monitor your productive app, but also invaluable during development, as it allows you to debug the prompts that get send to the LLM. During development this is especially helpful if you use libraries such as LangChain that hide the underlying prompts. For detailed guidance, refer to the [tracing documentation](https://docs.uptimize.merckgroup.com/aiml/llm-traces/).

For tracing user feedback, consult the documentation in the [Quality](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_quality/) section of this guideline.

### Prompt Management
Make use of the [Langfuse Prompt Management](https://docs.uptimize.merckgroup.com/aiml/llm-traces/Prompt-Management/) functionality within UPTIMIZE to log, track, and refine your prompts systematically.

## Additional Sources

| Title | Source |
|-------|--------|
| [Levels of Complexity: RAG Applications](https://jxnl.github.io/blog/writing/2024/02/28/levels-of-complexity-rag-applications/#level-4-evaluations) | jxnl.github.io |
| [What We've Learned From A Year of Building with LLMs](https://applied-llms.org/) | applied-llms.org |
| [Advanced RAG on Hugging Face documentation using LangChain](https://huggingface.co/learn/cookbook/advanced_rag) | huggingface.co |
| [Sentence Embeddings: Introduction to Sentence Embeddings](https://osanseviero.github.io/hackerllama/blog/posts/sentence_embeddings/) | osanseviero.github.io |