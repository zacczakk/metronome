# UPTIMIZE 

---
## What is UPTIMIZE?

UPTIMIZE, Merck's vibrant Data & Analytics Ecosystem, lets you turn data into actionable insights for real business outcomes.

UPTIMIZE provides the necessary technologies, services, and processes to ingest, transform, and analyze data to create, visualize, and provide analytical insights. With UPTIMIZE, you can retrieve, combine, interact with, explore, and visualize data from various sources across our company.

UPTIMIZE is our global, vibrant, and constantly evolving Data & Analytics Ecosystem with a clear mission: enabling everyone at Merck to outperform and innovate through data.
Dive into the following key features to enhance your experience with UPTIMIZE:

**Foundry:** Explore innovative data development solutions.

**AWS Lab:** Experiment with cloud-based tools and technologies.

**AWS App Service:** Build and deploy applications using AWS services.

**AWS Factory:** Efficiently manage and process data resources.

**NLP API:** Utilize natural language processing for data analysis.

**Snowflake:** Leverage scalable data warehousing and analytics.

**DBT:** Implement data transformations for better quality.

**Baybe:** Access advanced analytics tools and resources.

**Data Central:** Centralize data management for easy access.

**Data Products:** Access a variety of data solutions to enhance your analytics.

**Tableau:** Visualize and interact with data through engaging dashboards.

**Prod Op Model:** Learn best practices for optimizing product performance.

---

##  Getting Started with UPTIMIZE

Initiating your journey with UPTIMIZE begins with the Release Train Overview, understanding the Architecture, and leveraging the Use Case Portal, along with other resources to fully engage with the data and analytics ecosystem.

<b> Release Train Overview: </b>Learn how UPTIMIZE is organized, including the key processes, roles, and timelines for delivering data and analytics solutions. This ensures that all teams are aligned and working toward common objectives.

<b> Architecture:</b> Understand the structure of UPTIMIZE, which connects various components like data sources and analytics tools. This architecture supports seamless data integration and emphasizes governance for maintaining data quality and compliance.

<b>Use Case Portal:</b> The Use Case Portal is your primary platform for managing data projects, allowing you to create new use cases, track ongoing projects, collaborate with colleagues, and access helpful resources.

Engaging with these components allows you to leverage UPTIMIZE for better decision-making and innovation. For more details, please refer to the following pages.

---

# UPTIMIZE Release Train Overview

"We enable everyone at Merck to outperform and innovate by providing a vibrant data and analytics ecosystem - UPTIMIZE."

UPTIMIZE is the vibrant data and analytics ecosystem at Merck. It is an integral, trusted part of every process, seamlessly connecting data, people and technology. It is driving Data and Digital outperformance.

For more details about how we operate and are organized, visit [UPTIMIZE Release Train Overview](https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_wiki/wikis/Uptimize-Agile-Release-Train.wiki/44/1.-UPTIMIZE-Overview)

---

# Glossary

Data & Analytics terms and definitions can be found [here](https://datacentral.uptimize.merckgroup.com/explorer/search?topicId=3e4e66aa-7777-49a9-91be-38cbdac9d592)

Below are additional technical acronyms: 

| **Domain**|**Term**|**Description**
|:----------|:-------|:-------------|
|Tech  |AD   |Active Directory
|Tech  |ARO  |Access Request Object
|Tech  |CI/CD|Continuous Integration & Deployment
|GxP   |CR   |Change Request
|GxP   |CS/DS  |Configuration & Design Specification
|Tech  |DTI  |Data Treasury Item
|GxP   |FIT  |Functional Infrastructure Testing
|GxP   |FRS    |Functional Requirement Specification
|Tech  |IaC  |Infrastructure as Code
|GxP   |IQP/IQR|Installation Qualification Protocol / Report
|GxP   |OQ     |Operational Qualification (traced to FRS)
|GxP   |PQ     |Performance Qualification (traced to URS)
|GxP   |QP/QR|Qualification Plan / Qualification Report
|Tech  |SSO  |Single Sign On
|GxP   |TCS  |Technical Configuration Specification
|Tech  |TPA  |Third-Party Application
|GxP   |TS   |Technical Specification
|GxP   |UAT    |User Acceptance Testing, same as PQ
|GxP   |URS    |User Requirements Specification
|GxP   |VMP  |Validation Master Plan
|GxP   |VP/VR|Validation Plan / Validation Report

---

### UPTIMIZE High-Level Architecture


# Introduction to UPTIMIZE Platform Products

The image below provides a high-level overview of the landscape of Platform Products within UPTIMIZE. It is divided into sections based on their placement in the diagram, with no arrows drawn to indicate connectivity, as integration within the ecosystem can be assumed. Each product serves a unique purpose, enabling data transformation, analytics, visualization, and AI-driven solutions.
For a more detailed explenation, please check out the more detailed description below.

![High_Level_Platform_overview](assets/architecture-docs/DnA_Core_Products_Extended_Offering-v1-1_vf.PNG)
Download latest version along with **GxP Overlay** [pdf](assets/architecture-docs/DnA_Core_Products_Extended_Offering-v1-1_vf.pdf) [pptx](assets/architecture-docs/DnA_Core_Products_Extended_Offering-v1-1_vf.pptx) (v1.1).

---

## User-Facing Analytics and Consumable AI Tools
This section focuses on tools designed for user interaction, analytics, and visualization, as well as consumable AI solutions.

- **Tableau**: A self-serve business intelligence tool for guided analytics and visualization, enabling users to transform data into actionable insights through interactive dashboards. Explore more about [UPTIMIZE Tableau](tableau).
- **Foundry**: Provides applications for data analytics, visualization, and building user-facing applications. It also supports use case-specific transformations and central data storage. Learn more about [Foundry](foundry).
- **App Service**: Enables self-hosting of container-based web applications, offering flexibility for individual use cases. Check out [App Service](appservice).
- **myGPT Suite**: Merck's internal AI-powered assistant for learning and experimentation, offering advanced generative AI capabilities through models like GPT-4.5 and Claude. Access [myGPT Suite](https://mygpt-suite.uptimize.merckgroup.com/).
- **Avatars (Synthesia)**: A platform for creating AI-powered videos by converting text into speech with virtual avatars, ideal for training, tutorials, and marketing content. Check out [Avatars](https://docs.uptimize.merckgroup.com/avatars/).

---

## Transformation and Storage Platforms
These tools facilitate data processing, storage, and transformation, enabling seamless integration into the UPTIMIZE ecosystem.

- **Foundry**: The de-facto default platform for transforming and storing data within UPTIMIZE. Foundry supports ingestion, transformation, and centralized storage, making it a core component of the ecosystem. Learn more about [Foundry](https://docs.uptimize.merckgroup.com/foundry/).
- **Snowflake**: A cloud-native data warehouse offering high-performance analytics, data security, and integration with tools like Tableau. Learn more about [Snowflake](snowflake).
- **AI-ML Services**: Provides an environment for containerizing and publishing AI-ML models, enabling rapid testing and cataloging through APIs. Discover [AI-ML Services](nlp).
- **AWS Factory**: A collaborative space for building and deploying data and digital solutions using AWS services, supporting machine learning lifecycles and custom environments. Explore [AWS Factory](factory).
- **AWS Lab**: A self-serve platform for scalable workbenches, ideal for ad-hoc analytics, exploratory data analysis, and machine learning model training. Learn more about [AWS Lab](lab).

---

## Data Ingestion
The ingestion layer ensures efficient and standardized data entry into the ecosystem.

- **Foundry**: The default platform for data ingestion into UPTIMIZE, leveraging its hundreds of connectors to create seamless connections from source systems. Foundry is critical for ingesting and transforming data for use cases. Learn more about [Foundry](foundry).
- **Harbor**: Serves as the gateway for ERP data pipelines, storing data in Iceberg format or similarly in Snowflake for use case-specific transformations. This feature is currently in development.

---

## Supporting Tools and Elements
These tools provide additional capabilities to enhance data accessibility, organization, and documentation.

- **Data Central**: Merck's search engine for data, enabling users to explore, curate, and share datasets. It acts as an enterprise data marketplace with embedded data governance. Learn more about [Data Central](data-central).
- **Minds**: Leverages Altair Graph Studio to create semantic ontologies, enabling clearer insights and connections across structured and unstructured data. This tool empowers users to unlock AI-driven enterprise capabilities.
- **Docs**: The central repository for all user documentation within the UPTIMIZE ecosystem, providing guidance and resources for every platform.

---

This overview highlights the diverse capabilities of UPTIMIZE products, ensuring seamless collaboration, innovation, and data-driven decision-making across Merck.


# Data & Analytics Architecture

Welcome to Merck Group's Data & Analytics Architecture overview. Here, we provide you with an in-depth look into our robust architecture framework, governance practices, and architecture review process. Discover how we leverage cutting-edge data and analytics solutions to drive innovation, enhance decision-making, and propel our digital transformation journey.

Discover more information on:
- the [Data & Analytics Architecture Overview](UPTIMIZE/getting-started/architecture/#d-a-architecture-overview) (on this page)
- [Architecture Governance](UPTIMIZE/getting-started/architecture/architecture-governance/), incl. guidance documents and architecture contacts
- the [Architecture Review Process](UPTIMIZE/getting-started/architecture/architecture-review/)


## <a name="d-a-architecture-overview"></a> Data & Analytics Architecture Overview

### Overall Data & Analytics Architecture

The overall central Data & Analytics landscape at Merck Group is depicted in the following overview.

![D-A-Ecosystem-Overview](assets/architecture-docs/DnA_Technology_Capability_Map-v1-4_vf.png)

In addition, an overall dashboard in the GEAR IT enterprise architecture tool was created for Data & Analytics ([LINK](https://gear.leanix.net/GEAR/dashboard/741537bf-381c-4af5-b363-eb9602aa6b86))

[Back to top](UPTIMIZE/getting-started/architecture/)

---

# Architecture Governance

This section includes information about the architecture governance for UPTIMIZE and the wider Data & Analytics ecosystem at Merck.

Following subsections are covered:

1) [Architecture Guidance Documents](UPTIMIZE/getting-started/architecture/architecture-governance/#architecture-guidance-documents)
2) [Architecture Contacts](UPTIMIZE/getting-started/architecture/architecture-governance/#architecture-contacts)

Contact for feedback and questions:  [D&A Architecture Core Team](mailto:R151337@merckgroup.com)


# <a name="architecture-guidance-docs"></a> Architecture Guidance Documents

![D-A-Architecture-Guidance-Overview](assets/architecture-docs/d-a-architecture-guidance-overview.png)

## Data & Analytics Technology Capability Map

**- Understand core D&A technology capabilities and related applications -**

In order to set the basis for data & analytics architecture discussions, the focus of the <i>Data & Analytics Technology Capability Map</i> is to agree on **definition and categorization of core data & analytics technology capabilities** (e.g. "Data Visualization & Dashboards", "Data Warehouse & OLAP Engine", etc...)

These capabilities are then used to map actual D&A systems and tools (e.g. Tableau to "Data Visualization & Dashboards" capability) and to discuss needed D&A capabilities for a use-case.

**Target audience:** all people involved in handling data & analytics use-cases and architecture.

Download latest version [pdf](assets/architecture-docs/DnA_Technology_Capability_Map-v1-4_vf.pdf) [pptx](assets/architecture-docs/DnA_Technology_Capability_Map-v1-4_vf.pptx) (v1.4)


## Data & Analytics Architecture Blueprints

**- Gain insights into architecture recommendations for D&A solutions -**

The D&A architecture blueprints are **default architecture recommendations** for data & analytics use-cases, covering different aspects of the D&A architecture. Individual use-cases and projects might decide to differ from these recommendations. In this case, the decision shall be discussed with the respective sector architecture team to receive approval for a controlled exception.

**Target audience:** people directly involved in designing and building D&A Solutions such as Data Engineers, Data Scientists & Platform Enablers.

Download latest version [pdf](assets/architecture-docs/DnA_Architecture_Blueprints-v1-3_vf.pdf) [pptx](assets/architecture-docs/DnA_Architecture_Blueprints-v1-3_vf.pptx) (v1.3)



## AI and Gen AI Technology Capability Map

**- Understand AI and Gen AI technology capabilities and related applications -**

To lay the ground for data & analytics architecture discussions, the focus of the <i>AI and Gen AI Technology Capability Maps</i> is to agree on **categorization of AI and Gen AI capabilities** (e.g. "Machine Learning", "Retrieval Augmented Generation" ...)

The Gen AI capabilities are then used to map systems and tools for Gen AI (e.g. myGPT Suite to "Knowledge Assistant" capability) and to discuss needed AI and Gen AI capabilities for a use-case.

**Target audience:** all people involved in handling AI and Gen AI use-cases and architecture.

Download latest version [pdf](assets/architecture-docs/AI-GenAI_Capability_Map-v1-1_vf.pdf) [pptx](assets/architecture-docs/AI-GenAI_Capability_Map-v1-1_vf.pptx) (v1.1)

## Gen AI Architecture Guidelines

**- Explore architecture options for Gen AI and Large-Language Model applications -**
The Gen AI Architecture Guidelines, as part of the [UPTIMIZE Gen AI Guidelines](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview), provide a comprehensive overview of the Gen AI offerings within UPTIMIZE, including guidance for selecting the best architecture options for use cases.

**Target audience:** people involved in designing and building IT solutions with embedded advanced artificial intelligence and Large-Language Models / Foundational Model capabilities.

Access [here](https://docs.uptimize.merckgroup.com/guidelines/gen_ai/gen_ai-guideline-overview/gen_ai-guideline_architecture)


[Back to top](UPTIMIZE/getting-started/architecture/architecture-governance/)

# <a name="architecture-contacts"></a> Architecture Contacts

## Data Architects for Sectors

Data architects are acting within approved application solutions space of UPTIMIZE. For introduction of new applications, the digital technology demand process applies: [Digital Technology Demand](https://evarooms.merckgroup.com/Organization/Group-Information-Services/Pages/IT%20for%20Business/Enterprise%20Architecture/2-Technology%20Demand/Technology%20Demand.aspx)

### Healthcare

- Sylvain Cecilio - _HDD, Lead Data Architect
- Joaquin Leivas - _Data Architect; Focus: GHO_
- Christian Engel - _Data Architect; Focus: Commercial_
- Stefan Bauer - _Digital, Data & IT Enterprise Architect; Focus: R&D_


### Life Science

- Carsten Goepp - _ACE; Lead D&A Architect, UPTIMIZE Sector Lead: Tableau & Snowflake_
- Haril Kumar Krishna Prasad - _ACE; UPTIMIZE Sector Lead: SAP Signavio (Process Space)_
- Mike Siefert - _ACE; Senior D&A Architect, UPTIMIZE Sector Lead: AI-ML_
- Moyosoreoluwa Bakare-Bolaji - _ACE, UPTIMIZE Sector Lead: Foundry_
- Ram Vemparala - _ACE; UPTIMIZE Sector Lead: FiveTran (Data Harbor)_
- Timo Hirt - _ACE; UPTIMIZE Sector Lead: AWS_

For more and detailed information about the LS Sector D&A Platform team please see [here](https://wiki-nregprod.merckgroup.com/spaces/AKB/pages/304715451/Platform+Services)


### Electronics

- Vladimir Stojanovic - _EL DDIT; Head of Architecture and Governance_


### Enabling Functions

- Rahul Panda - _EF Data Office; UPTIMIZE AWS & Snowflake Lead_
- Azmat Javed Arif - _EF Data Office; UPTIMIZE Foundry Lead_
- Patrick Dressel - _EF Data Office; SAP BW Lead_
- Rainer Schink - _EF Data Office; Visualization Lead_
- Rahul Panda - _EF Data & AI Office; Domain Architect for Data & Analytics (Focus on UPTIMIZE overall)_
- Gerald Uhlhaas - _EF Data & AI Office; Domain Architect for Data & Analytics (Focus on BW & UPTIMIZE Snowflake)_


##  Platform Architects
### Data & Analytics Ecosystem


- UPTIMIZE
  - Andrew McArdle - _MDAO; Lead Architect UPTIMIZE Foundry_
  - Advith Nagappa - _MDAO; Lead Architect UPTIMIZE AWS_
  - Ahmed Aladeeb - _MDAO; Lead Architect UPTIMIZE Sowflake_ 


- Data Visualization
  - Preetham Kumar Boda Vittal - _MDAO; MTableau_
  - Tom Issac - _MDAO; Qlik_ 
  - Jan Pflug - _DDIT; SAP Analytics Cloud_
  

- Data Replication and Data Integration
  - Himanshu Jain - _MDAO; SAP Data Replication_
  - Vamsidhar Reddy Thodime - _MDAO; Informatica Platforms_
  - Krishnan Kannan - _MDAO; Informatica Platforms_


- Process Mining
  - Pocha Sreenivasa Reddy - _MDAO; Process Mining Architect_


## AI Leads for Sectors
### Healthcare

- Rolf Roth
- Florens Focke


### Life Science

- Wolfgang Halter


### Electronics

- Gianni Klasse
- Grete Knechtel


### Enabling Functions

- Christian Hangsbach


## Topic-specific Lead Architects

- IT/OT Integration into UPTIMIZE
  - Keerthika N - _MDAO_

- AI & GenAI
  - Veit Hoehn - _MDAO_


## Agile Release Train - System Architects

- Platform and Data
  - Florian Grzonka - _MDAO_

- Analytics and AI
  - Saiprasad Hemadri - _MDAO_


## Overall Lead Architects Data & Analytics
 - Dominik Schneider - _MDAO; Domain Architect Data & Analytics_ 


[Back to top](UPTIMIZE/getting-started/architecture/architecture-governance/)

---

# Architecture Review

Do you seek support for Data & AI architecture topics? In general, please make sure to first coordinate with your [**sector Data & AI architecture teams**](/UPTIMIZE/getting-started/architecture/architecture-governance/#data-architects-for-sectors).

Get in touch with us in the **MDAO architecture team** for the following topics:
- [**General architecture assessment**](UPTIMIZE/getting-started/architecture/architecture-review/#data-analytics-products) of data, analytics & AI solutions with broad (cross-sector) implications and strategic sector initiatives
- Architecture review as part of provisioning of [**UPTIMIZE AWS / Snowflake accounts**](UPTIMIZE/getting-started/architecture/architecture-review/#mdao-arch-review-accounts) (initial review for DEV, subsequent review before moving to PROD)
- Assessment of newly needed **data, analytics & AI capabilities & tools** (please also make sure to fill a [GEAR digital technology demand](https://gear.leanix.net/GEAR/reports/techrequest/cefb5314-4af3-4dc3-a6cd-973868a62bc9) for requests to use new software tools within your business sector)


Review Templates:
- [Use-Case Architecture Review Template](assets/architecture-docs/DA_UseCase_ArchitectureReview_Template.pptx)
- [Code Review Template](assets/architecture-docs/Code_Review_Checklist_v1.docx)


## <a name="mdao-arch-review-general"></a> General architecture review by MDAO architecture team

For general architecture and tool assessment topics,

<b>&rarr;</b> Start by filling the form: [Request for MDAO Data & AI Architecture Review](https://mdigital.sharepoint.com/:l:/s/MDAODataAIArchitectureandExcellence/FC-3KfrypHZLoDtqb9oUHAMBQPYn_Cft18QQxxIS6fTtbg?nav=Yzk3NzdlMzYtYzVkYy00YTA2LWI4ZWMtMmM2YWMzZWMxMDdm)

Upon submission, we will see the request in our inbox and get in touch.

For any other inquiries, please reach out to [mdao-architecture-review@merckgroup.com](mailto:mdao-architecture-review@merckgroup.com)


## <a name="mdao-arch-review-accounts"></a> Review Process for UPTIMIZE AWS / Snowflake accounts


### Deliverables for UPTIMIZE AWS / Snowflake account (if applicable)
- Architecture Overview (recommended tool for architecture diagram: draw.io)
- Overview of Interfaces
- Data Flow, Information Architecture
- Data Pipeline Configuration, names as per naming conventions, ...
- Fill and attach provided [presentation template](https://mdigital.sharepoint.com/:p:/s/MerckArchitectureCommunity/EUlRXG5onJtEj6cMTU2uTzkBSPVLQ90VlLGKoLgT3jULIg?e=hhk5eq)
- For QA/PROD review: show that Code Review is passed and attach filled review form ([AWS Code Review template](assets/architecture-docs/Uptimize_AWS_Due_Diligence_Checklist_V1.2.docx)/[Snowflake Code Review template](assets/architecture-docs/Uptimize_Snowflake_Due_Diligence_Checklist_V0.2.docx))

### Process for Requesting Architecture Reviews for Provisioning of UPTIMIZE AWS / Snowflake accounts
- Request For Initial Review:
Fill in the required details in the AWS/Snowflake extension object form created from the Foundry use case, using the `Edit` option and request for Initial Architecture Review using  `Request Initial Review` option in the form. Please note that only the Business/Product/Technical Owner of the usecase will have the access for editing and submitting requests from the form.
- Sharing Required Documents:
You will be receiving a notification on the Review request with the SDAO and MDAO teams in the loop. The filled architecture review template and other necessary documents (please refer to the above Deliverables section) are to be shared on top of this mail notification with the SDAO and MDAO teams.
- SDAO Approval of Initial Review:
The SDAO team will first review this request to be valid on the sector level and provide their approval. If this not approved you will be notified regarding the same. 
- MDAO Approval of Initial Review:
Once request is approved by SDAO team, the MDAO Architecture team will get notified and will be in touch with you for conducting a detailed technical Initial architecture review meeting to verify your proposed solution aligns with UPTIMIZE standards. The team then approves or rejects your request in the extension object form based on the findings.
- DEV Provisioning:
The AWS Platform Operations team gets notified of the approval and will start provisioning your DEV account.
- Request for Final Review:
When you are ready to move to higher environment (QA/PROD) for productionizing your use case you need to request for a Final Architecture Review using `Request Final Review` option in the extension object form. You will get a notification to fill in the Due Deligence Checklist and share with MDAO Architecture team and AWS Platform team for review. 
- MDAO Approval of Final Review:
The teams will review the shared Due Diligence checklist. They can request for a meeting for detailed review if your architecture has changed. Post the review the team will approve or reject your request for movement.
- Request for QA/PROD Provisioning:
Once Final Review is approved you can go ahead to request QA/PROD account provisioning using the `Request QA Provisioning` or `Request PROD Provisioning` options in the extension form based on the earlier chosen environments for the use case. In case of three environment (DEV,QA,PROD) use case `Request PROD Provisioning` option is enabled after QA is provisioned. Please note that the PROD account is provisioned only after an internal approval by MDAO Architecture team, we do not request for any additional reviews during QA to PROD movement but will reach out in case of any queries or concerns.

For GxP use cases, please ensure to follow the required validation process steps before deploying to QA/PROD environments.

Please note both the AWS Extension Object form and the Snowflake Extension Object form are updated for the latest review process and please use the extension objet forms henceforth for architecture reviews part of AWS/Snowflake account provisioning.



The overall process is depicted here:

![D-A-Architecture-Review-Process](assets/architecture-docs/MDAO_Architecture_Review_Process.png)



## <a name="platform-products"></a> Review of Platform Changes of Data & Analytics Platform (Platform Products)
### Review
- When: When platform changes are planned and before they are implemented in PROD
- Participants: platform architects, operations team members as needed
- Will be scheduled on demand by team proposing the platform change

### Deliverables
- Architecture Overview
- Interfaces
- [AWS Due Dilligence Document](assets/architecture-docs/Uptimize_AWS_Due_Diligence_Checklist_V1.2.docx) (e.g., code review of IaC, standards used, etc.)
- [Snowflake Due Dilligence Document](assets/architecture-docs/Uptimize_Snowflake_Due_Diligence_Checklist_V0.1.docx) (e.g., code review of IaC, standards used, etc.)
- No dedicated template, just prepare overview of platform change. As guidance, the [use-case architecture review template](assets/architecture-docs/DA_UseCase_ArchitectureReview_Template.pptx) can be used.



[Back to top](UPTIMIZE/getting-started/architecture/architecture-review/)

---

# Use Case Portal

### Overview
The Use Case Portal is the one-stop-shop for tracking work in **UPTIMIZE** across the global Merck Organization. Start exploring existing Use Cases by Business Sector, create a new Use Case or request access to an existing one. The Use Case Portal does not only serve as a portfolio management tool but also as a governance tool, it provides transparency in the Merck Organization over the way the Use Case is implemented in UPTIMIZE.
If the use case should be supported by one of the Sector Data Offices, the quality of the description of the Use Case impacts its prioritization.

Please navigate to the [Use Case Portal documentation](/foundry/use-case-portal/) under the Foundry section.

---

# Data Governance @Merck 

## <i><u>Intro: Data at the heart of business value creation</u></i>

Data Governance is a framework to ensure rules and regulations are existing 
and implemented to handle data within a company. The mission of the Group 
Data Strategy is to ensure a mature design and an effective implementation of 
the same. One might ask: 

<span style="color:darkblue">Why should we care so much about how we treat Data?</span>

The answer is easy, as it stems from the fundamental purpose that all 
corporations have in common: **data is driving our business value**. Data is 
needed day-by-day to conduct analytics to drive new, innovative opportunities for 
revenue and stay competitive. It is required to accelerate digital transformation 
via conducting better and faster decision-making. Business agility can be improved
via sensible data treatment. But even for keeping the basic business running well, 
data is indispensable.

<span style="color:darkblue">But what is data?</span>

Without structure and context, data is nothing but discrete pieces of information, 
such as amounts, prices, measurements, identifiers, or names. In its pure form, 
data is messy and lacks sense. For turning data into valuable pieces of information 
that companies can use to propel their business forward, it needs to be structured, 
processed, and contextualized in a meaningful way.

<span style="color:darkblue">Data must be readily available, of high quality, and of relevance for the 
business problem at hand.</span>

To assure that data meets these attributes, a capable Data Governance is to be 
designed and implemented by the respective organization. By doing so, companies 
achieve their underlying business purpose - value creation - in a smart manner: 
They create new business value without requiring anything novel, but simply via
using data that is already available inside the organization in a more sophisticated 
way.

<span style="color:darkblue">What happens if a company does not treat data as a centerpiece for value
creation?</span>

They will simply miss out on data-driven opportunities for their business that are 
crucial for ensuring future success. But more than that, they waste precious 
resources in the meantime. Data processing and the quest of obtaining the right, 
high-quality data at the right place, when needed, can soak up large amounts of 
specialists' time - a resource that could be used far more meaningful on the task 
of analyzing and utilizing the data. This can be frustrating to employees, and costly 
for companies. 

The data itself builds the core and centerpiece for creating business value. 
However, data alone, as mentioned above, is not everything: To scale data's 
business value, businesses must envelop it with solid layers. Next to the data 
dimensions, data management and data alignment with business drivers, Data 
Governance is one important building block.

For more details visit [Data Governance @Merck](https://evarooms.merckgroup.com/Topic/MerckData/Pages/Materials/Governance-Overview.aspx)

For more information about Roles and Responsibilities, please visit [here](https://evarooms.merckgroup.com/Topic/MerckData/Files_Services/Data-Governance_Roles-and-Responsibilities_v1.0.pdf)

---

# UPTIMIZE Support Model Details


- [D&A_UPTIMIZE_AWS_SERVICENOW](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.1278706d-08d9-4fd8-aba2-829aeab17a2a)
- [D&A_Uptimize Palantir Foundry - How to](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.aa911d5d-50aa-4c9c-9b33-8dbbc379ba58)
- [D&A Uptimize Support Concept](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.244db246-a0c6-4ee8-935f-b0898603ed79)
- [DTI Issue Support User Guide](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.017e0177-75dc-491e-92ec-1556c6357b17)
- [How to modify users in Foundry Group](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.54fe8aca-c221-42a6-8529-033beaef3ec5)
- [How To Modify Users in SNOW Assignment Groups](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.pdf.0d7bd764-fcfe-4765-8516-9d877012b175)
- [Use Case Process](https://palantir.mcloud.merckgroup.com/workspace/compass/view/ri.compass.main.folder.4b2dd91d-9252-4044-879b-7940bb89f706)
- [Users](https://palantir.mcloud.merckgroup.com/workspace/compass/view/ri.compass.main.folder.fa7976ea-6115-48a3-a3a9-e8ee869eed74)

---

## Coming Soon!

---

# Code Style Guides


## General
Every major project has its own style guide: **a set of conventions** about **how to write code** for that project. It is much easier to understand a large codebase when all the code in it is in a consistent style. That is why we do apply a style guide.

- Please always **use Python instead of SQL** transforms. This ensures that a transformation can be edited, and potentially be made more complex, in the future.
- Please follow the [Palantir Pyspark Style Guide](https://github.com/palantir/pyspark-style-guide) which includes the [Google Python Style Guide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md).
- Please write your code in a **consistent** and **easily understandable**, intuitive format.
- Please avoid **boilerplate** code.

This guide focuses on a Python style guide as Python transformations are recommended.

## Best Practices: Style Guide
This is a summary of the Palantir and Google Style Guide containing the most important information.

### Linting & Formatting
Linting highlights syntactical and stylistic problems in your Python source code. Linting is different from Formatting because linting analyzes how the code runs and detects errors whereas formatting only restructures how code **appears**.

Please use the following format: [black](https://pypi.org/project/black/) or use as a minimum the **Foundry auto-formatting** [Press F1 in the Code repository and choose format document].

Please find a black online playground [here](https://black.vercel.app/?version=stable&state=_Td6WFoAAATm1rRGAgAhARYAAAB0L-Wj4ARsAnNdAD2IimZxl1N_WlkPinBFoXIfdFTaTVkGVeHShArYj9yPlDvwBA7LhGo8BvRQqDilPtgsfdKl-ha7EFp0Ma6lY_06IceKiVsJ3BpoICJM9wU1VJLD7l3qd5xTmo78LqThf9uibGWcWCD16LBOn0JK8rhhx_Gf2ClySDJtvm7zQJ1Z-Ipmv9D7I_zhjztfi2UTVsJp7917XToHBm2EoNZqyE8homtGskFIiif5EZthHQvvOj8S2gJx8_t_UpWp1ScpIsD_Xq83LX-B956I_EBIeNoGwZZPFC5zAIoMeiaC1jU-sdOHVucLJM_x-jkzMvK8Utdfvp9MMvKyTfb_BZoe0-FAc2ZVlXEpwYgJVAGdCXv3lQT4bpTXyBwDrDVrUeJDivSSwOvT8tlnuMrXoD1Sk2NZB5SHyNmZsfyAEqLALbUnhkX8hbt5U2yNQRDf1LQhuUIOii6k6H9wnDNRnBiQHUfzKfW1CLiThnuVFjlCxQhJ60u67n3EK38XxHkQdOocJXpBNO51E4-f9z2hj0EDTu_ScuqOiC9cI8qJ4grSZIOnnQLv9WPvmCzx5zib3JacesIxMVvZNQiljq_gL7udm1yeXQjENOrBWbfBEkv1P4izWeAysoJgZUhtZFwKFdoCGt2TXe3xQ-wVZFS5KoMPhGFDZGPKzpK15caQOnWobOHLKaL8eFA-qI44qZrMQ7sSLn04bYeenNR2Vxz7hvK0lJhkgKrpVfUnZrtF-e-ubeeUCThWus4jZbKlFBe2Kroz90Elij_UZBMFCcFo0CfIx5mGlrINrTJLhERszRMMDd39XsBDzpZIYV4TcG7HoMS_IF8aMAAAxI-5uTWXbUQAAY8F7QgAAP01Vc6xxGf7AgAAAAAEWVo=).

![Image_1](https://docs.uptimize.merckgroup.com/docs-assets/uptimize/UPTIMIZE/D&A_Best_Practice/Code_style/image2022-7-22_11-56-18.png)

Advanced setup: Please enable the following linter: [pylint](https://pypi.org/project/pylint/). Pylint can be enabled in a Foundry Code repository in the build.gradle file  [uncomment the pylint checks].

![Image_2](https://docs.uptimize.merckgroup.com/docs-assets/uptimize/UPTIMIZE/D&A_Best_Practice/Code_style/image2022-7-22_11-58-31.png)


## Code Documentation
Code documentation is text that accompanies software code to explain what the code is doing, why it's written the way it is, and / or how to use it.

Please apply the following documentation:

- Use **intuitive variable and table names**
- Use **docstrings** to document the code
- Use **type annotation**
- Use **inline comments** when needed

## Naming Conventions
A naming convention is a set of rules for choosing the character sequence to be used for identifiers which denote variables, types, functions, and other entities in source code and documentation.

Python related naming convention should be based on the [Google Python Style Guide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md). 

![Image_3](https://docs.uptimize.merckgroup.com/docs-assets/uptimize/UPTIMIZE/D&A_Best_Practice/Code_style/image2022-7-22_13-56-37.png)


## Links
[Palantir Pyspark Style Guide](https://github.com/palantir/pyspark-style-guide)

[Google Python Style Guide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md)

---

# User Docs Maintenance


## General
Our documentation is meticulously maintained by our dedicated product teams to ensure accuracy, comprehensiveness, and relevance. We constantly strive to provide the most up-to-date information to support our users effectively. We value user feedback as a crucial part of this process, as it helps us identify areas for improvement and address any gaps. Therefore, we genuinely welcome and appreciate feedback from our users pertaining to our documentation. Your insights and suggestions enable us to continually enhance the quality and usability of our materials, ensuring that they meet the needs and expectations of our user community. Together, we can create a more robust and user-centric knowledge repository.

In case you find want to improve a specific section of the docs, add a completely new section, or just fix a typo, please connect with the respective Product Owners.

For individuals with the appropriate permissions to edit pages directly, here's how that can be done:
- Find the user docs repository by clicking "Edit this page on Azure DevOps" on any of the user docs packages.
- Create a new branch.
    - If you want to add static assets like images or videos, please contact Laura Patzer or Luisa Pumplun.
- Commit your changes and do a pull request.
- The Docs team will approve and merge the pull request after a careful review.

For uploading static assets like image files, you can upload them to the 'assets' folder within the respective sub-folder (product-wise) via a commit pull request (PR) in the Azure project. For uploading videos, if you have access to the AWS Shared Services Prod account, you can directly upload them to the S3 bucket 'uptimize-docs-user-assets-bucket.' If you do not have access, please create an IT4U ticket and assign it to the GLOBAL_UPTIMIZE_PLATFORM group.

## Using the Docs with LLMs

The UPTIMIZE documentation provides `llms.txt` files that make it easy to feed documentation content into Large Language Models (e.g. ChatGPT, Claude, Copilot). These files are generated automatically during the build process and are available at every level of the docs hierarchy.

### How it works

Each `llms.txt` file contains the full markdown content of its section and all sub-sections, preserving the original formatting (headings, lists, code blocks, etc.). The content is ordered according to the chapter structure of the docs.

### Available levels

| URL | Content |
|-----|---------|
| `https://docs.uptimize.merckgroup.com/llms.txt` | Complete documentation of all sections |
| `https://docs.uptimize.merckgroup.com/foundry/llms.txt` | All Foundry documentation |
| `https://docs.uptimize.merckgroup.com/foundry/getting-started/llms.txt` | Foundry Getting Started and its sub-pages |
| `https://docs.uptimize.merckgroup.com/foundry/getting-started/landing-page/llms.txt` | A single page's content |

The pattern applies to every section -- simply append `/llms.txt` to any docs URL path to get the aggregated content for that section.

### Example usage

- Paste the contents of a section's `llms.txt` into an LLM chat to ask questions about that area of the docs
- Use the root `llms.txt` to give an LLM full context about the entire UPTIMIZE ecosystem
- Reference a specific section's `llms.txt` in tools like Claude Code or GitHub Copilot for context-aware assistance

### UPTIMIZE Documentation Skill for Claude Code & OpenCode

We provide a downloadable skill that gives your AI coding assistant access to the full UPTIMIZE documentation library. When invoked, the skill loads a lightweight chapter index -- the assistant then reads only the chapters it needs to answer your question.

#### Download

Download the latest skill: [`uptimize-docs-skills.zip`](https://docs.uptimize.merckgroup.com/uptimize-docs-skills.zip)

#### Installation

Download the ZIP and extract it into your tool's skill directory:

**Claude Code (user-scoped) -- macOS / Linux:**

```bash
unzip ~/Downloads/uptimize-docs-skills.zip -d ~/.claude/skills/
```

**Claude Code (project-scoped) -- commit to your repo:**

```bash
unzip ~/Downloads/uptimize-docs-skills.zip -d .claude/skills/
```

**OpenCode (user-scoped) -- macOS / Linux:**

```bash
unzip ~/Downloads/uptimize-docs-skills.zip -d ~/.config/opencode/skills/
```

**OpenCode (project-scoped) -- macOS / Linux:**

```bash
unzip ~/Downloads/uptimize-docs-skills.zip -d .opencode/skills/
```

**Windows (PowerShell) -- Claude Code:**

```powershell
Expand-Archive -Path "$env:USERPROFILE\Downloads\uptimize-docs-skills.zip" -DestinationPath "$env:USERPROFILE\.claude\skills\" -Force
```

#### Usage

After installation, invoke the skill with `/uptimize-docs`. The skill knows about all documentation chapters and will read the relevant ones to answer your question -- no need to specify which chapter.

```
> /uptimize-docs How do I connect Snowflake to Foundry?
> /uptimize-docs What ML models are available through UPTIMIZE?
> /uptimize-docs How do I deploy a Streamlit app?
```

#### Updating

To update, download the latest ZIP and extract it again -- existing files will be overwritten with the new versions.

---

# Agentic Coding Best Practices

> ** Work in Progress** -- This page is under active development and will be updated with comprehensive guidance on agentic coding practices within the UPTIMIZE platform.

## Overview

This guide covers best practices for working with AI-powered coding agents (such as Claude Code, OpenCode, Continue etc.) in the context of enterprise development on the UPTIMIZE platform.

Please note that tokens created for Agentic Coding support must only be used for development and must not be used in production workflows!

## Key Considerations

### Cost Awareness

- **Foundry tokens are generally cheaper than AI-ML services** -- When choosing between the Foundry Language Model Service (LMS) and our AI/ML API please consider that Foundry token costs are typically lower.

#### LMS Caching

When using models via the Foundry Language Model Service (LMS), requests are cached at the LMS level. When a cached response is available, it is served directly without incurring any token charges and without counting toward your rate limits.

This is particularly beneficial for **Pipeline Builder** usage and other non-streaming request patterns where duplicate requests, retries, and repeated prompts are common. In these scenarios, LMS caching can significantly reduce both cost and rate limit pressure with no additional configuration required.

#### Claude Prompt Caching

Palantir added support for [Claude's prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) in 2025. Prompt caching allows frequently reused context (such as system instructions, large documents, or conversation history) to be cached across requests, reducing both latency and cost for multi-turn interactions.

**Where it is enabled:**

- **AI FDE** (and multi-turn chat interfaces where it is most useful)
- **Foundry Anthropic proxy** -- prompt caching benefits are also available when using the proxy for agentic coding tools (Claude Code, OpenCode, etc.)

**Current pricing for cached tokens:**

| Token type | Pricing | Counts toward rate limits? |
|---|---|---|
| Initial cache write tokens | Priced as normal input tokens | Yes |
| Cache read tokens | **Not charged** | **No** |

Because cache read tokens are currently free and exempt from local rate limits, Claude models are more cost-effective for agentic coding (including AI-FDE) compared to GPT or Gemini alternatives.

> **Note:** The current pricing for cache read tokens is effectively subsidized. In the future, this may change to a passthrough of Claude's provider rates, but no such change is planned at this time.

### Topics that might be covered

The following sections might be expanded in future updates:

- Setting up agentic coding tools with UPTIMIZE repositories
- Prompt engineering for enterprise codebases
- Security considerations when using AI coding assistants
- Code review practices for AI-generated code
- Token usage optimization strategies
- Integration with CI/CD pipelines

---

*Last updated: 2026-03-03*

---

## Other Links

Additional sector specific information about UPTIMIZE and Data & Analytics can be accessed at the following locations: 

[Healthcare Wiki](https://wiki.merckgroup.com/confluence/display/HDGA/UPTIMIZE+Healthcare+%7C+Foundry)

[LS ACE Knowledge Base](https://wiki.merckgroup.com/confluence/pages/viewpage.action?spaceKey=AKB&title=ACE+Knowledge+Base+Home)

[Electronics Wiki](https://wiki.merckgroup.com/confluence/display/ELDO/Best+Practices)

[Enabling Functions Wiki](https://wiki.merckgroup.com/confluence/pages/viewpage.action?pageId=241833763)