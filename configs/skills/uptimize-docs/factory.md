# UPTIMIZE  AWS Factory

Unleash your potential at the UPTIMIZE AWS Factory, a lively space where creativity and innovation come together! Picture a place where engineers and data scientists collaborate to solve real-world challenges using AWS. This is more than just a lab; it's a launchpad for solutions that can change entire industries.

In the UPTIMIZE AWS Factory, every project is an exciting adventure. You'll explore a high-tech environment where you can develop machine learning lifecycles, covering everything from data preparation to deployment, modeling, prediction, automated retraining, and integration with business applications.

The Factory is built for creating and running Data & Digital Solutions with AWS services. With custom AWS accounts tailored to your project, you have the flexibility to experiment and deliver effective solutions. Typically, The Factory provides either two or three AWS account environments, depending on the requirements (DEV and PROD, or DEV, QA, and PROD). Join the UPTIMIZE AWS Factory and become part of a community focused on innovation and collaboration!


## When to use UPTIMIZE AWS Factory for your use case?

The UPTIMIZE AWS Factory is suitable for various scenarios, including:

- **End-to-End Development:** For comprehensive environments to develop, test, and deploy Data & Digital Solutions.
<br>
**Example:** Building a new analytics platform.

-	**Machine Learning Projects:** Ideal for creating production-ready machine learning lifecycles.
<br> 
**Example:** Developing predictive models using large datasets.

-	**Custom AWS Accounts:** Necessary for dedicated AWS accounts for DEV, QA, and PROD environments.
<br>
**Example:** Software development with separate environments for stability.

-	**Direct Data Ingestion:** For cases needing direct data ingestion into the Factory account.
<br>
**Example:** Real-time data analysis for a marketing campaign.

-	**Integration Needs:** Essential when integrating with business applications.
<br>
**Example:** Connecting operational data with CRM systems.

-	**Central Data Hub Access:** Important for accessing the central Data Hub for enterprise data.
<br>
**Example:** Pulling datasets for comprehensive analysis.

-	**Infrastructure as Code:** When automating deployments using AWS CloudFormation.
<br>
**Example:** DevOps automating infrastructure resources.

-	**Collaboration Opportunities:** For teams seeking a collaborative space for innovation.
<br>
**Example:** Cross-functional teams working on product development.

-	**Data Ingestion Accounts:** For efficient data handling through central ingestion accounts.
<br>
**Example:** Ingesting large volumes of data from multiple sources.

-	**Azure DevOps Integration:** Facilitates CI/CD processes and version control.
<br>
**Example:** Continuous integration of applications.

-	**Security Compliance:** Ensures adherence to security protocols.
<br>
**Example:** Projects requiring strict security measures.

- **Training and Support:** Provides training resources for successful project execution.
<br>
**Example:** New team members learning to use AWS Factory tools.

## What skills are required to UPTIMIZE AWS?

To effectively utilize the UPTIMIZE AWS Factory, users should possess the following skills:

-	**AWS Knowledge:** Understanding AWS services and their configurations.

-	**Data Engineering Skills:** Familiarity with data ingestion, ETL processes, and data workflows.

-	**DevOps Practices:** Experience with CI/CD pipelines, particularly using Azure DevOps for project management and deployment.

-	**Programming Skills:** Proficiency in programming languages used for automation and scripting (e.g., Python).

-	**Security Awareness:** Understanding of security practices and user access management in AWS.

-	**Infrastructure as Code:** Familiarity with IaC tools, such as AWS CloudFormation, and AWS monitoring tools like CloudWatch and CloudTrail.


## Who is this for?

UPTIMIZE AWS Factory is designed for:

-	Factory developers and administrators who need to build and manage AWS-based applications.
-	Data scientists and engineers working on machine learning and data analytics projects.
-	Supporting automated deployments while ensuring security compliance.
-	Any team at Merck looking to leverage cloud capabilities for digital solutions.


These roles typically require collaboration with the UPTIMIZE AWS platform team to ensure that the use cases are aligned with the overall strategy and security requirements of Merck KGaA, Darmstadt, Germany.


## Outline of the UPTIMIZE AWS Factory user docs

This outline offers a clear framework for UPTIMIZE AWS Factory user documentation,
helping users quickly find essential information.

**Introduction to AWS Factory:** Overview of the Factory's purpose in developing Data & Digital Solutions with AWS.

**Prerequisites:**
Requirements: Lists the necessary skills, tools, and permissions needed to effectively use the Factory, ensuring team members are prepared.

**Roles and Access:**
RACI Matrix: Defines roles and responsibilities for team members involved in projects.
Access Instructions: Provides guidance on how team members can gain access to the AWS Factory.

**Policies and Resources:**
Service Control Policies: Outlines the policies that govern the use of AWS services to ensure compliance and security.
Baseline Resources: Describes the foundational resources set up to support various projects.

**Functionality:**
Networking: Details necessary networking configurations for projects.
Service Connections: Instructions on how to establish connections to AWS services.
Sandbox Environments: Availability of testing environments for safe experimentation.

**Data Management:**
Data Ingestion: Guidelines for importing data into the Factory.
Datahub Usage: Information on utilizing the Datahub for storing and accessing data efficiently.

**User Management:**
IAM User Creation: Steps for creating user accounts to manage permissions.
Azure AD Authentication: Instructions for using Azure Active Directory for secure application access.

**Security and Compliance:**
Security Measures: Overview of security protocols in place to protect data and resources.
 IT-Linux / Windows Report Requirements: Information on generating ITI reports for compliance.
Use Case Disclaimers: Important disclaimers related to specific use cases.

**Instance Management:**
Managing ITI Instances: Guidelines for deploying and managing ITI instances.
Onboarding Processes: Steps for onboarding managed instances to streamline operations.

**Collaboration:**
Shared Accounts: Information on using shared accounts for collaborative projects across different teams.

---

# Introduction to UPTIMIZE AWS Factory

The UPTIMIZE AWS Factory is the place to develop and run Data & Digital Solutions (use cases) end-to-end with state-of-the-art AWS services. As an example, Factory environments can be used to develop production-ready end-to-end Machine Learning lifecycles including data preparation, modeling, deployment, prediction, automated retraining, and integrations with business applications.

The core offering of the UPTIMIZE AWS Factory are custom **Factory AWS account(s)**. Based on the requirements of the use case either 2 (DEV and PROD) or 3 (DEV, QA and PROD) AWS accounts will be provisioned. In these accounts the core logic /code of the use cases is running. Generally, every AWS service can be provisioned, given that the service has passed security clearance by the Merck IT security team. Direct data ingestion into the Factory account (as opposed to ingestion via central Ingestion account and Data Hub) is also possible, however this is only recommended in cases where the data will be only used for a single use case and there is no plan to use the data for other use cases in the future.

Other offerings related to the UPTIMIZE AWS Factory are:

- **Central ingestion accounts:** We offer one non-regulated (nreg) ingestion account per sector that has preconfigured access to the Merck estate (internal and confidential zones). The use case teams can use the ingestion account to build data ingestion jobs for datasets that should be stored in the Data Hub. A separate ingestion account for GxP regulated data ingestions is also available. Data ingestion requests for UPTIMIZE can be submitted through Foundry, more information can be found here.
- **Central Data Hub:** The Data Hub is our central data store for raw, clean and enterprise data. Data can be ingested here and be made available across different use cases. To access an existing dataset in the Data Hub, please raise an access request on Foundry in Data Treasury.
- **Azure DevOps:** We offer a central UPTIMIZE AWS CI/CD, repository, and version control tool based on Azure DevOps. Each use case gets its own Azure DevOps project with pre-configured service connections to the AWS Factory accounts. For more information on the Azure DevOps project that will be provided to the use case team, please refer to this page. We encourage our Factory use case teams to deploy their infrastructure using Infrastructure as Code, specifically AWS CloudFormation, please refer to this page for more details.

---

# Uptimize AWS Governed Regions


This document outlines AWS regions approved for Uptimize AWS platform and service availability restrictions.

## Approved AWS Regions

| Region Name | Region Code | Status |
|-------------|-------------|---------|
| Europe (Stockholm) | `eu-north-1` | ✅ Available |
| Europe (Paris) | `eu-west-3` | ✅ Available |
| US East (Ohio) | `us-east-2` | ✅ Available |
| Europe (Ireland) | `eu-west-1` | ✅ Available |
| Europe (Frankfurt) | `eu-central-1` | ✅ Available |
| US East (N. Virginia) | `us-east-1` | ✅ Available |
| Europe (London) | `eu-west-2` | ✅ Available |
| US West (Oregon) | `us-west-2` | ✅ Available |
| Europe (Milan) | `eu-south-1` | ✅ Available |
| Europe (Spain) | `eu-south-2` | ✅ Available |
| Europe (Zurich) | `eu-central-2` | ✅ Available |

## VPC Service Availability

### ✅ VPC-Enabled Regions
| Region | Code | 
|--------|------|
| Europe (Frankfurt) | `eu-central-1` | 
| US East (N. Virginia) | `us-east-1` | 

### ❌ VPC-Restricted Regions
| Region | Code | Alternative | Primary Use Case |
|--------|------|-------------|------------------|
| Europe (Stockholm) | `eu-north-1` | Use `eu-central-1` | AWS Marketplace models |
| Europe (Paris) | `eu-west-3` | Use `eu-central-1` | AWS Marketplace models |
| US East (Ohio) | `us-east-2` | Use `us-east-1` | AWS Marketplace models |
| Europe (Ireland) | `eu-west-1` | Use `eu-central-1` | AWS Marketplace models |
| Europe (London) | `eu-west-2` | Use `eu-central-1` | AWS Marketplace models |
| US West (Oregon) | `us-west-2` | Use `us-east-1` | AWS Marketplace models |
| Europe (Milan) | `eu-south-1` | Use `eu-central-1` | AWS Marketplace models |
| Europe (Spain) | `eu-south-2` | Use `eu-central-1` | AWS Marketplace models |
| Europe (Zurich) | `eu-central-2` | Use `eu-central-1` | AWS Marketplace models |

> **Note**: VPC-restricted regions are primarily used for enabling and deploying models from the AWS Marketplace. For VPC-dependent services, use the designated VPC-enabled regions.

### 🔒 VPC-Only Regions (`eu-central-1`, `us-east-1`)
- VPC and subnets
- Security groups
- VPC endpoints
- Transit gateways
- NAT gateways

---

# Factory Environment Prerequisites

## Step 1: Create a use case in the UPTIMIZE use case portal
All use cases on UPTIMIZE are tracked using our [use case portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc/search) on UPTIMIZE Foundry. If you want to build your use case on an UPTIMIZE AWS Factory environment, please first create a use case in the portal. You should update the status of your use case in the portal regularly according to our use case [lifecycle]( https://palantir.mcloud.merckgroup.com/workspace/report/ri.report.main.report.9fb07fcb-9928-4f73-b1f6-48ea152ca692). 

### AWS Extension Creation for a Foundry Use Case

If you are creating a new use case and already know that it will be built on **UPTIMIZE AWS**, start by placing the use case in the **Planning** phase.

During the Planning phase, answer **"Yes"** to the question **"Requires AWS Factory environment?"**  
By answering **Yes**, you can move the use case into the **Proof of Value (PoV)** phase.

> **Note:** Even if "Yes" is not selected during the Planning phase, you can still create an AWS Extension form later.

> **Important:** Only one AWS Extension request should be raised per use case.


### How to Create an AWS Extension Form

#### Prerequisites
- The use case must be in **PoV** or **Industrialization** status
- Only **use case owners** are authorized to create an AWS Extension

#### Steps to Create the AWS Extension
1. **Select your Use Case** in Foundry
2. **Click the hamburger menu (☰)** in the top-right corner
3. **Select "Request AWS Extension"**
4. **Fill in all required details** and submit the form

![HowtoImage](/assets/use-case-lifecycle/aws-extensionform.png)

#### After Submission
- Once submitted, the AWS Extension form will be visible under the **Extensions** section in Foundry
- The extension object will prompt you to provide additional information required for the creation of AWS Factory accounts

Both the UPTIMIZE AWS team and you will receive a notification email once the extension object has been created. In this object we will ask you to provide some additional information that we will need for the creation of your Factory accounts. In Step 4 you can find an explanation of how you provide additional information through the extension object.

## Step 2: Nominate Factory Admin and complete trainings
### Who should be a Factory admin?
Every Factory account requires at least one Admin from the use case team. A Factory admin should be a trained technical expert on AWS, with the following skillset:
- Knowledge and practical experience with all use case dependent AWS infrastructure and services
- Experience with Infrastructure as Code, CI/CD and Version control

### Factory Admin mandatory trainings
There are also several mandatory trainings that each admin has to complete before being added as an Admin user to an AWS account. Our role-based training guide can be found on [Mango](https://mango.merckgroup.com/cara/) with the document ID 20716643 in section 3. The Factory admin must complete all trainings for the role **UPTIMIZE AWS System Admin**. The Factory admin also needs to have an **SADM** (Merck admin) account. Developers of the use case should complete all trainings for the role **Technical Engineer**. The trainings are available on HR4You MyLearning and can be self-assigned. For the initial setup of the DEV account, only a single Factory admin and no additional users will be enabled. All subsequent Factory admins and devleopers can be added via SNOW ticket after the creation of the account.

### Factory Admin access and approval ticket
For documentation purposes, every Factory admin needs to ask for approval to be added as a Factory Admin to a Factory AWS account. The Factory Admin should submit a [SNOW](https://mhub.service-now.com/esc?id=sc_cat_item&sys_id=015a7fd51b1be510b62b10628b4bcb47) ticket to ask for approval. Also, please **attach evidence** (e.g. screenshots) to the ticket showing that all trainings are completed. See an example ticket below:

**Ticket title:** Admin access AWS account

**Affected System:** UPTIMIZE AWS

**Please provide additional information for your ticket:**
I am asking to be a Factory Admin for a use case on UPTIMIZE AWS. I have an SADM account and I have completed all mandatory trainings as per the role-based training matrix for UPTIMIZE AWS. I require access to the AWS account of **use case X (fill your use case name)**.
Please also assign this to the Service Delivery Manager for approval.

## Step 3: Initial Architecture review and cost estimate

Before the Factory environment is provisioned you should align your proposed use case Architecture with our UPTIMIZE Architects. Please perform an architecture review as per the process describe [here](UPTIMIZE/getting-started/architecture/architecture-review/).
For the review, please consider questions such as, How do we plan to ingest data? What network connectivity do we need (E.g. Merck on-prem network, Internet or Foundry)? What AWS Products and Services do we need? You can find a useful ppt template for the initial review [here](https://mdigital.sharepoint.com/:p:/r/sites/MerckArchitectureCommunity/Shared%20Documents/General/Architecture%20Review/Initial%20Architecture%20Review%20Template%20-%20Uptimize%20AWS.pptx?d=w6e5c51499c68449b8fa70c4d4dae4f39&csf=1&web=1&e=CfyXi2). In addition, please also prepare a cost estimate for your use case using public rates of AWS.

## Step 4: Provide additional information in use case extension object

Our aim is to automate the creation of Factory environments as much as possible, so that you can get started with the implementation of your use case quickly. To provision your Factory environment, we require some inputs from you. These inputs shall be provided through your AWS use case extension object in Foundry. Please see a screenshot below on where to add the information. 

![Information](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/use-case-information.png)

After you provided the information to the best of your knowledge the following review process will take place.

![Information](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/factory-review-steps.png)

## Step 5: Review sample templates

To get started implementing inside your AWS Factory Accounts, please review and make use of best practices and examples regarding Azure Devops Pipelines as well as Cloudformation Templates. Tailor-made examples for the Uptimize AWS Ecosystes can be found [here](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates).

## AWS Extension object Process flow

Provided below is the overall process flow of the AWS Extension form

![AWS_Extension_process_flow](/assets/factory-admin/AWS_extension_object_process_flow.png)

During use case creation in Foundry, selecting **Yes** for **Requires AWS Factory environment?** will automatically create an AWS Extension form.

### Key Features and Workflow:

- Form Editing:
The Business, Product, or Technical owner of the use case will have permission to edit the AWS Extension form.
Relevant details can be updated by clicking the `Edit` button.

- Request for Initial Review:
After filling in the required details, the use case team can initiate an architecture review for their AWS use case by clicking `Request Initial Review`. This action sends a notification to the SDO and MDAO architects, providing a link to the AWS Extension object for review. You can share necessary architecture dcuments on top of the notification received.

- Approval or Rejection:
The SDO architects will check the use case to be valid on the sector level and approve or reject the same. If Approved by SDO you can go ahead and schedule review with MDAO archietcure team. Post-review, the Architecture team can approve or reject the AWS request by clicking the `Approve` or `Reject` button.
Upon approval, a notification will be sent to the AWS Operations team.

- Dev Environment Provisioning:
The AWS Operations team will create the required AWS accounts and provision baseline resources for the development environment. Once completed, the status of the AWS Extension form will be updated to **dev-provisioned**.

- Request for Higher Environment Review:
When ready to migrate the use case to higher environments (QA/Prod), the use case team must request another review by clicking `Request Final Review`. This prompts the team to complete a **due diligence checklist**. The filled checklist needs to be shared with the MDAO Architecture team to procced with the final review for your uase case, as well as the AWS Platform team.

- Approval of Final Review:
MDAO Architecture team will review any chnanges made to the architecture of the use case as well as the due diligence documentation. Post review they will `Approve` or `Reject` the use case as needed. On approval, use case team will get a notification, to proceed with deployment request to higher environment.

- Deployment to Higher Environments:
Following the approval for Final review, the team can request provisioning of higher environments by clicking `Request QA Provision` or `Request Prod Provision`, depending on the use case needs.
The AWS Operations team will then provision the required baseline resources for QA or production environments and update the status of the AWS Extension form to **qa-provisioned**.

- Approval for Prod Deployment:
When the team wants to deploy their use case into production environment, a notification will be triggered to the MDAO Architecture team for approval. They need to approve by clicking on `Approve Prod Deployment` button in the aws extension form. Once this is approved, aws platform team is notified and will initiate the process for baseline Prod provisioning. On completion, the status will be updated to **provisioned** in the extension form for the use case.

For more details on the architecture review process, please refer [here](UPTIMIZE/getting-started/architecture/architecture-review/).

---

# RACI Matrix

<!-- fixing minimum width for long header or columns containing rather long texts -->
<style>
th:nth-child(7){
min-width: 10em;
}
th:nth-child(1), th:nth-child(2), th:nth-child(8), th:nth-child(9) {
min-width: 20em;
}
th:nth-child(6) {
min-width: 5em;
}
</style>

## Use case development
| Example activities                                                                                                                                      |Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Writing use case code (Python, TypeScript etc.) inside AWS services such as Lambda, Glue, EC2, ECS, Fargate, etc.                                                                |A factory developer writes Python code in a Lambda function to define the logic of a use case. |R|A|I|-|I|Stack Overflow, Factory admin|3,5: Informed through Architecture review|
| Infrastructure as Code: Develop IaC templates, deploy and configure AWS services required for the Factory use case (Lambda, ECS, Fargate, Glue, DynamoDB, S3, SecretManager etc) |A factory developer writes CloudFormation, CDK or Terraform code to deploy required Factory infrastructure. |R|A|I|-|I|Stack Overflow, Factory admin, Sample templates, User docs| |
| Creation of sub-domains in Route 53 (e.g. {use case name}.{env}.uptimize.merckgroup.com)                                                                                         |Special case of IaC. A factory developer deploys a Hosted Zone with an IaC template.|R|A|I|-|I|Stack Overflow, Factory admin, Sample templates, User docs| |
| Requesting a sub-domain in parent domain (uptimize.merckgroup.com)                                                                                                               |A factory developer creates a SNOW ticket to register the sub-domain as part of uptimize.merckgroup.com parent domain.|R|A|I|-|I|SNOW ticket| |
| Requesting allowlisting of domains in firewall                                                                                                                                   |A factory developer needs access to a specific domain and requests|R| | | | |Allowlisting XLS| |

## EC2
| Example activities                            |Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:----------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Deploy and operate IT-I managed EC2 instances |When a Factory use case requires IT-I manged EC2 instances (e.g. a GxP use case requiring EC2 instancs)|I|A|I|R|I|SNOW ticket| |
| Deploy and operate self-managed EC2 instances |When you want to operate and manage your own EC2 instances.|A|R|I|I|I|-|IT Security Review required for the use case team?|

## Factory baseline deployment and management
| Example activities|Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Creation of AWS Accounts                                                                  |Automated deployment of AWS Factory accounts|I|C|C|-|R|SNOW ticket| |
| Deployment and configuration of core VPCs (Internet, On-premise and Foundry connectivity) |Automated deployment of protected and governed AWS Factory baseline resources.|I|C|C|-|R|SNOW ticket| |
| Requesting a change to your baseline VPCs                                                 |When you need additional Subnets, Security Groups or different settings.|I|C|C|-|R|SNOW ticket| |

## Factory Management
| Example activities|Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Setting of Account budgets                                                                                                                                                       |A different budget setting from the baseline is required.|I|C|I|-|R|SNOW ticket| |
| Management of Account budgets                                                                                                                                                    |Monitoring current budget and optimial resource allocation|I|R|I|-|I|Factory Admin| |
| Modification of Factory Admin role                                                                                                                                               |A Factory Admin requires additional permissions|-|C|I|-|R|SNOW ticket|Docs: https://docs.uptimize.merckgroup.com/factory/team-access/|
| Modification of Factory Developer, Developer Advanced, Tester, Supporter roles                                                                                                   |One of the roles needs additional permissions to perform their job.|C|R|I|-|A|Stackoverflow, SNOW ticket| |

## Azure DevOps
| Example activities|Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Azure DevOps: Writing ADO build pipelines                                                                                                                                        |A factory developer writes an ADO build pipeline to deploy AWS services to Dev, QA and Prod.She follow best practices and guidelines by consulting with Factory Administrators and uses sample templates and user docs (if required).|R|A|I|-|I|Stack Overflow, Factory admin, Sample templates, User docs|3,5: Informed through Architecture review|
| Create Azure DevOps projects                                                                                                                                                     |A use case team needs an ADO project with an AWS account. One Azure DevOps project will be provisioned automatically for each AWS Factory team.|I|C|I|-|R|Palantir Foundry request form, SNOW ticket| |
| Create Azure DevOps repositories                                                                                                                                                 |A use case team needs multiple repositories inside their ADO project. |C|R|-|-|I|Factory Admin| |
| Create Azure DevOps service connections to Factory AWS Accounts                                                                                                                  |Create a service connection for pipeline deployment with necessary permissions. One standard service connection will be automatically configured for the Factory AWS Account.|C|A|-|-|R|SNOW ticket| |
| Modify Azure DevOps Service Connection DEV permissions                                                                                                                           |Service Connection DEV permissions have permissions to do all actions on all services and all resources except AWS IAM, AWS Organization and Account Management. All actions that can not be performed need to be done by the UPTIMIZE Platform team.|C|C|-|-|R|Factory Admin| |
| Modify Azure DevOps Service Connection QA/PROD permissions                                                                                                                       |Change permission of service connection.|I|C|-|-|R|SNOW ticket|Docs: https://docs.uptimize.merckgroup.com/factory/service-connection/|
| Access to Factory project and repositories                                                                                                                                       |Grant access to an ADO Factory project and repos. |I|A|-|-|R|SNOW ticket|Docs: https://docs.uptimize.merckgroup.com/factory/team-access/|

## AWS Data hub Access
| Example activities|Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Get access to existing data in AWS Data Hub                                                                                                                                      |A factory developer needs access to an S3 bucket/ prefix in the datahub|C|C|I|-|R|SNOW ticket| |
| Get access to data in Foundry use cases                                                                                                                                          |A factory use case team needs access to Foundry data.|C|A|I|-|I|Foundry process| |

## Security
| Example activities|Example scenario|Factory Developer|Factory Administrator|SDO Architects|IT-I|UPTIMIZE platform team|How do I get supported?|Notes|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:----|:----|:----|:----|:----|:----|:----|
| Security Assessment of the platform                                                                                                                                              |Conducting Security assessment for UPTIMIZE platform. |I|I|C|-|R|SNOW ticket| |
| Security Assessment for Factory use case, that includes resources created by Factory team (if required)                                                                                                                           |Conducting Security assessment for a use case. |C|R|A|-|A|Factory Admin| |
| Secure development and configuration of AWS according to best practices                                                                                                          |Developing a use case according to Merck and UPTIMIZE standards to meet security requirements. |R|A|C|-|C|Stack Overflow, Factory admin, Sample templates, User docs| |
| Incident Management (Security Hub)                                                                                                                                               |Monitoring, reporting and remediating incidents. |I|C|I|-|R| | |
| Secrets Management                                                                                                                                                               |A Factory Admin using AWS Secrets Manager to secure secrets|C|R|I|-|A|Factory Admin, Stackoverflow, SNOW ticket| |

---

# Use case team access

## Select the right role

Get controlled access to an AWS account for both **Factory** and **Ingestion** accounts.

### Admin roles

|               | <ld-icon name="checkmark" style="color: var(--ld-col-neutral-200)"></ld-icon> Some of what this role can do      | <ld-icon name="cross" style="color: var(--ld-col-neutral-200)"></ld-icon> Some of what this role can't do                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Factory Admin | This role is for anyone who needs similar access as the account owner--they can see and manage almost everything. | Based on [AdministratorAccess - AWS managed policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AdministratorAccess.html). They cannot edit or delete baseline resources (e.g. VPCs) created by the platform team. |

### Developer roles

|               | <ld-icon name="checkmark" style="color: var(--ld-col-neutral-200)"></ld-icon> Some of what this role can do                                        | <ld-icon name="cross" style="color: var(--ld-col-neutral-200)"></ld-icon> Some of what this role can't do        |
|--------------------|-------------------------------------------------|-------------|
| Developer Advanced       | Based on [PowerUserAccess - AWS managed policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/PowerUserAccess.html). AdminAccess without IAMUser creation permission.                                      |  Cannot create IAM users  |
| Developer          | Based on [Customer managed policies](https://docs.aws.amazon.com/acm/latest/userguide/authen-custmanagedpolicies.html). Can only access a subset of AWS resources based on customization by Factory Admin (see below)                                          | Billing, Accessing all resource types   |
| Tester             | Based on [Customer managed policies](https://docs.aws.amazon.com/acm/latest/userguide/authen-custmanagedpolicies.html). Can only access a subset of AWS resources based on customization by Factory Admin (see below)                                      | Billing, Accessing all resource types   |
| Support            | Based on [Customer managed policies](https://docs.aws.amazon.com/acm/latest/userguide/authen-custmanagedpolicies.html). Can only access a subset of AWS resources based on customization by Factory Admin (see below)                                     | Billing, Accessing all resource types   |

<ld-notice headline="Note" mode="warning">
The described role permissions apply to Dev and QA accounts. For Prod accounts, all roles have "View Only" permissions because we strongly encourage using automation and not editing any resources manually in Prod. For resource creation in Prod, please refer to Service Connections)
</ld-notice>

### Customize your roles

When you have access to your AWS Account, the Factory Admin can customize the below roles:

1. Developer, Tester and Support (For all the environments)
2. FactoryAdmin and DeveloperAdvanced (Only in prod environment)

Factory admin can customize the permissions by following the guide below.

#### Steps for customizing Developer, Tester and Support role permissions

1. Open the repository with the name of your use case. In the [ucinfra-nreg-ec1](https://dev.azure.com/Uptimize/ucinfra-nreg-ec1/_git) project
2. Clone the repository to your local computer
3. Create a local branch
4. Open the CloudFormation YAML file `/cloudformation/permission_sets/customer_managed_policies.yaml`. The `Env` parameter
   can be used to create policies conditional on the environment account.
5. Edit the PolicyDocument of the CustomerManagedPolicies as needed.
6. Commit and push to the remote branch
7. Open the repository again to create a pull request for the branch.
8. Write a short justification for the change in the pull request description.
9. The operations team is notified upon PR creation. They can approve/reject the changes and contact the author if needed.

#### Steps for customizing FactoryAdmin and DeveloperAdvanced role permissions (Only in prod)

1. Open the repository with the name of your use case. In the [ucinfra-nreg-ec1](https://dev.azure.com/Uptimize/ucinfra-nreg-ec1/_git) project
2. Clone the repository to your local computer
3. Create a local branch
4. Open the CloudFormation YAML file `/cloudformation/permission_sets/customer_managed_policies_prod.yaml`.
5. Edit the PolicyDocument of the CustomerManagedPolicies as needed.
6. Commit and push to the remote branch
7. Open the repository again to create a pull request for the branch.
8. Write a short justification for the change in the pull request description.
9. The operations team is notified upon PR creation. They can approve/reject the changes and contact the author if needed.

<ld-notice headline="Note" mode="warning">
Following actions are not allowed in customization of Admin and DeveloperAdvanced roles:
</ld-notice>

```json
"organizations:*",
"account:*",
"iam:*User*",
"iam:*Group*",
"iam:*AccessKey*",
"iam:*Password*",
"iam:*LoginProfile*",
"iam:*ServiceSpecificCredential*",
"iam:*MFADevice*",
"iam:*SSHPublicKey*",
"iam:*SigningCertificate*"
```

<ld-notice headline="Note" mode="warning">
Only FactoryAdmin roles can customize the IAM policies for other roles (Developer/Tester/Support) in their use case.
</ld-notice>

## IAM User Creation

IAM user can be created using the service connection by following the instructions [IAM User Creation](https://docs.uptimize.merckgroup.com/factory/iam-user-creation/)

# FactoryAdmin Role - IAM User Deletion Policy (Dev & Val Environments)

This policy grants the FactoryAdmin role comprehensive permissions to manage and delete IAM users in the Dev and Val environments, **strictly limited to users tagged with `managedby=FactoryAdmin`**.  
It ensures only designated, tagged users can be deleted or modified, supporting security, compliance, and minimizing the risk of unintended changes.

> **Note:** The IAM user tag `managedby=FactoryAdmin` should be assigned at user creation--specifically when creating IAM users through the Azure Project using a service connection.

---

## Actions Allowed

FactoryAdmin may perform the following actions only on IAM users tagged with `managedby=FactoryAdmin`:

- **Delete user** (`iam:DeleteUser`)
- **Delete user's access keys** (`iam:DeleteAccessKey`)
- **Update user's access keys** (`iam:UpdateAccessKey`)
- **Delete user's login profile** (`iam:DeleteLoginProfile`)
- **Detach policies attached to user** (`iam:DetachUserPolicy`)
- **Delete inline user policies** (`iam:DeleteUserPolicy`)
- **Remove user from groups** (`iam:RemoveUserFromGroup`)
- **List user access keys** (`iam:ListAccessKeys`)
- **List user tags** (`iam:ListUserTags`)
- **Retrieve when an access key was last used** (`iam:GetAccessKeyLastUsed`)
- **List user's signing certificates** (`iam:ListSigningCertificates`)
- **List user's SSH public keys** (`iam:ListSSHPublicKeys`)
- **List user's service-specific credentials** (`iam:ListServiceSpecificCredentials`)
- **List user's MFA devices** (`iam:ListMFADevices`)

---

## Scope & Restrictions

- **Resource:** Only users matching the ARN pattern: `arn:aws:iam::*:user/*`
- **Condition:** Only applies to users with the tag `managedby=FactoryAdmin`
- **Environments:** Dev and Val

---

## Request access to an AWS account

To access to an existing AWS account in a given role, you have to conduct trainings, and details to your SNOW ticket request.

<ld-notice headline="Note to EMSS use cases" mode="information">
The following section applies to only use cases that are NOT migrated to <b>Entitlement Management</b> system or provisioned initially before <b>December 2025</b>. If your use case is not part of either of these cases, please refer to <a href="/foundry/access-management/use-case/privileged-entitlement-user-guide/">Privileged Entitlements User Guide</a> instead. Use the SNOW ticket process only if your use case is not migrated to EMSS or self-managed.
</ld-notice>

### Conduct role-based trainings

Complete the standard trainings based on the role your select. Below you can find a mapping from our
Factory roles to the right set of training curriculum that need to be completed in [HR4You](https://merckkga.plateau.com/learning/). For further details, you can check the role-based training guide
on [Mango](https://mango.merckgroup.com/cara/) with the document ID 20716643 in section 3.

#### Details of the mandatory training for each role as follows

The **Platform Admin**/**Factory Admin** is required to complete the following curriculum and assignments

**Training Name:** Uptimize System Administration Curriculum

**Training ID:**  UP_SAC

**Assignments:**

1. Uptimize_DA_UC_Change Management Procedure
2. Operational Tasks for Uptimize AWS Administration Working Instruction
3. ITINF Operational Tasks for Uptimize AWS Account Management Working Instruction
4. Operational Tasks for Uptimize AWS RapidQ Working Instruction
5. Management of Uptimize AWS Procedure

**Developers Advanced, Developers, Testers,** and **Support** staff are required to complete the following curriculum and assignments

**Training Name:** Uptimize Technical Engineer Curriculum

**Training ID:**  UP_TEC

**Assignments:**

1. Uptimize_DA_UC_Change Management Procedure
2. ITSSDM Solution-Software Development & Maintenance Procedure
3. 1822 IT Security Training
4. ITCMP Cloud Activities for System Qualification Annex

| Factory role       | Required HR4You Training Curriculum                  | HR4You Curriculum ID | SDM approval | SADM account needed |
|--------------------|---------------------------|--------------|--------------|---------------------|
| Platform Admin     | Uptimize AWS System Administration Curriculum |UP_SAC| <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes          | <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes                 |
| Factory Admin      | Uptimize AWS System Administration Curriculum |UP_SAC| <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes          | <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes                 |
| Developer advanced | Uptimize Technical Engineer Curriculum |UP_TEC| <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes          | <ld-icon name="checkmark" style="color: var(--ld-col-rg-200)"></ld-icon> Yes                 |
| Developer          | Uptimize Technical Engineer Curriculum |UP_TEC| <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No           | <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No                  |
| Tester             | Uptimize Technical Engineer Curriculum |UP_TEC| <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No           | <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No                  |
| Support            | Uptimize Technical Engineer Curriculum |UP_TEC| <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No           | <ld-icon name="cross" style="color: var(--ld-col-rr-600)"></ld-icon> No                  |

### Submit a SNOW ticket

To get access to an AWS account for a specific role please submit a request
Go to `IT4YOU` -> `Make a request` -> `Access for Uptimize AWS` [IT4You](⁠⁠https://mhub.service-now.com/esc?id=sc_cat_item&sys_id=015a7fd51b1be510b62b10628b4bcb47)
Also, please attach evidence (e.g. training certificate) to the ticket showing that all trainings are completed.

#### Example ticket

```yaml
Choose Application, Device Type or Service affected: UPTIMIZE AWS GxP

Category: Create/Change/Delete

Short Description: Account Access for Uptimize AWS Account

Please describe your issue in more detail: 
I am asking to be a Factory Admin for the following AWS
account <AWS account number>. 
I have an SADM account and I have completed all mandatory trainings as per the role-based training matrix for UPTIMIZE AWS (see attached screenshots). Please also assign this to the Service Delivery
Manager for approval.

Thanks!!!

```

## Ingestion Account Admins for GxP and non-GxP

### LS

| NREG Account       | Admin                     | GXP Account   | Admin               |
|--------------------|---------------------------|-------------- |---------------------|
|ec1-da-d-ingestion-ls-nreg-00016 | Andre Kakarigji / Timo Hirt | Nil | Nil |
|ec1-da-q-ingestion-ls-nreg-00069 | Andre Kakarigji / Timo Hirt | Nil | Nil |
|ec1-da-p-ingestion-ls-nreg-00070 | Andre Kakarigji / Timo Hirt | Nil | Nil |

### HC

| NREG Account       | Admin                     | GXP Account   | Admin               |
|--------------------|---------------------------|-------------- |---------------------|
|ec1-da-d-ingestion-hc-nreg-00017 | Saikat Giri / Hannah Luksch / Veit Hoehn | ec1-da-d-centralingestion-gxp-00003 | Saikat Giri / Joaquin Leivas / Veit Hoehn |
|ec1-da-q-ingestion-hc-nreg-00076 | Saikat Giri / Hannah Luksch / Veit Hoehn | ec1-da-q-ingestion-hc-gxp-00021 | Saikat Giri / Joaquin Leivas / Veit Hoehn |
|ec1-da-p-ingestion-hc-nreg-00077 | Saikat Giri / Hannah Luksch / Veit Hoehn | ec1-da-p-ingestion-hc-gxp-00029 | Saikat Giri / Joaquin Leivas / Veit Hoehn |

### EL

| NREG Account       | Admin                     | GXP Account   | Admin               |
|--------------------|---------------------------|-------------- |---------------------|
|ec1-da-d-ingestion-el-nreg-00018 | Jan Loeffler / Min-Cheol Lee | Nil | Nil |
|ec1-da-q-ingestion-el-nreg-00078 | Jan Loeffler / Min-Cheol Lee | Nil | Nil |
|ec1-da-p-ingestion-el-nreg-00079 | Jan Loeffler / Min-Cheol Lee | Nil | Nil |

### MGF

| NREG Account       | Admin                     | GXP Account   | Admin               |
|--------------------|---------------------------|-------------- |---------------------|
|ec1-da-d-ingestion-mgf-nreg-00036 | Marius Heussner / Rahul Panda / Thomas Posern | ec1-da-d-ingestion-mgf-gxp-00061 | Rahul Panda |
|ec1-da-q-ingestion-mgf-nreg-00037 | Marius Heussner / Rahul Panda / Thomas Posern | ec1-da-q-ingestion-mgf-gxp-00062 | Rahul Panda |
|ec1-da-p-ingestion-mgf-nreg-00038 | Marius Heussner / Rahul Panda / Thomas Posern | ec1-da-p-ingestion-mgf-gxp-00063 | Rahul Panda |

## Request access to an Azure DevOps project

By default, the factory admin (MUID account) is to be added to the Use Case Azure Project in the Factory Admin group, as per the Use Case Extension form.

The factory admin can add additional team members to their Azure DevOps project by adding them to the group "Project Name" Team (ex: factory-Usecase name-nreg-ec1 Team). This only works if a user is already part of UPTIMIZE Azure DevOps and has a basic user license. If this is not the case, team members can be added via SNOW ticket:

### Example ticket

```yaml
Ticket title: Azure DevOps project access

Affected System: UPTIMIZE AWS

Please provide additional information for your ticket: 

I am asking to be a added to the following Azure DevOps
project as a developer with basic user license <Azure DevOps project name>. 

Thanks!

```

Please reach out to the factory admin for adding or removing users in the respective Azure Project group.

This URL (<https://dev.azure.com/Uptimize/>) should be accessible by using MUID.

By default, the factory admin is to be added to the ucinfra repo access for creating a customer-managed permission set for the Developer, Tester, and Support groups.

---

# Scheduling EC2 Instance Shutdown Over Weekend (Off Business Hours)

<ld-notice headline="Disclaimer" mode="warning">
The proposed solution is intended to help AWS factory teams to schedule auto shutdown of EC2 instances over weekend (Off business hours) for cost saving. If the EC2 instances are managed by ITI team, factory team is responsible to co-ordinate with ITI team if ITI team schedules any patch upgrades during weekend. AWS Platform team is not responsible, as we do not manage EC2 instances.
</ld-notice>

### Pre-Requisites

Before deploying the solution to use case AWS account, make sure an IAM role is created in the AWS factory account which can be assumed by cloudfromation service. The IAM role should have policy with permissions as below and cloudformation as trusted entity:

#### Policy Permissions
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "IAM",
            "Effect": "Allow",
            "Action": [
                "iam:List*",
                "iam:Get*",
                "iam:CreateRole",
                "iam:DeleteRole",
                "iam:UpdateRole",
                "iam:UpdateRoleDescription",
                "iam:AttachRolePolicy",
                "iam:CreatePolicy",
                "iam:CreatePolicyVersion",
                "iam:DeletePolicy",
                "iam:DeletePolicyVersion",
                "iam:DeleteRolePolicy",
                "iam:DetachRolePolicy",
                "iam:PutRolePolicy",
                "iam:PassRole"
            ],
            "Resource": "*"
        },
        {
            "Sid": "Lambda",
            "Effect": "Allow",
            "Action": [
                "lambda:List*",
                "lambda:Get*",
                "lambda:CreateFunction",
                "lambda:DeleteFunction",
                "lambda:InvokeFunction",
                "lambda:UpdateFunctionCode",
                "lambda:AddPermission",
                "lambda:RemovePermission"
            ],
            "Resource": "*"
        },
        {
            "Sid": "EventBridge",
            "Effect": "Allow",
            "Action": [
                "events:List*",
                "events:DescribeRule",
                "events:DeleteRule",
                "events:DisableRule",
                "events:EnableRule",
                "events:PutRule",
                "events:PutTargets",
                "events:RemoveTargets"
            ],
            "Resource": "*"
        }
    ]
}
```

#### Trust relationships

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudformation.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```
### Selection of the EC2 Instances 

You can select the EC2 instances that you want to auto stop and start over the weekend by adding a tag to it:

1. Login to the EC2 console
2. Select the EC2 instance and under Tags select Manage tags
   ![ec2](/assets/ec2_schedule/ec2-tag.png)
3. Add tag key and value and save
   ![add tag](/assets/ec2_schedule/add-tag.png)
4. Repeat the steps for other EC2 instances that you want to select for auto stop/start over weekend

### Deployment Steps

1. Login to the AWS factory account
2. Open the below URL in a new tab in the same browser session (AWS account logged in session)
   `https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/create/review?templateURL=https://ec2-autostop-cfn-template-donotdelete.s3.eu-central-1.amazonaws.com/ec2.yaml`
3. This will prompt for the user inputs:
   - Stack name - Enter stack name
   - Parameters - In this section you can do the customization
     - Start and Stop Time Configurations - Time in UTC HH:MM 24 hour format. Start time is considered for starting the EC2 instances on Monday morning and End time is considered for stopping EC2 instances on Friday EOD
     - Email Notification Configuration - Specify the recipient email addresses for receiving the notifications for instnce stop and start, Sender email Id is used to send the email notifications
     - EC2 Instance Tag Specifications - Input the tag key and value you added for the EC2 instance in previous section. Only instances tagged with these values will be selected for start/stop.

   ![User Inputs](/assets/ec2_schedule/user_inputs.png)
4. Select the role that was created as part of Pre-Requisites. This role will be used by cloudformation to deploy the resoures 
  ![Role selection](/assets/ec2_schedule/role_selection.png)

<ld-notice headline="Note" mode="warning">
If you don't see the role name in the drop down, make sure cloudformation is added as trusted entity for the role as mentioned in the Pre-Requisite
</ld-notice> 

5. Leave all other options to default
6. Acknowledge the IAM role creation pop up and select Create stack
   ![pop-up](/assets/ec2_schedule/pop-up.png)
7. Stack creation will begin and it will create all the required resources, wait for its completion.
8. After completion, you should see 10 resources in Resources section with status as CREATE_COMPLETE and stack status as CREATE_COMPLETE
   ![stack-resources](/assets/ec2_schedule/resources.png)

9. After completion of the stack creation, all the emails mentioned in the parameter section 'Email Notification Configuration' will get email verfication request from AWS (no-reply-aws@amazon.com). All the emails should be verified, if any of the email is not verified, notifications service won't work. You can check the verification status on SES console under identities.
   ![ses console](/assets/ec2_schedule/ses.png)

---

# Service Control Policy

SCPs offer central control over the maximum available permissions for the IAM users and IAM roles and ensure that all accounts operate within defined boundaries, thereby enhancing security and governance.

The AWS factory accounts falles under `nreg & gxp` OU

These are the SCP policies which restricts factory admin or users.

### GxP compliance - deny specific service configurations

The Below deny conditions are applicable to gxp factory accounts.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "GRAUDITBUCKETENCRYPTIONENABLED",
      "Effect": "Deny",
      "Action": [
        "s3:PutEncryptionConfiguration"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Sid": "GRAUDITBUCKETLOGGINGENABLED",
      "Effect": "Deny",
      "Action": [
        "s3:PutBucketLogging"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Sid": "GRRESTRICTS3DELETEWITHOUTMFA",
      "Effect": "Deny",
      "Action": [
        "s3:DeleteObject",
        "s3:DeleteBucket"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": [
            "false"
          ]
        },
        "ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*IngestionAdmin*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin-dev*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Action": [
        "config:DeleteConfigRule",
        "config:DeleteConfigurationRecorder",
        "config:DeleteDeliveryChannel",
        "config:StopConfigurationRecorder"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "ec2:CreateNatGateway",
        "ec2:CreateInternetGateway",
        "ec2:DeleteNatGateway",
        "ec2:AttachInternetGateway",
        "ec2:DeleteInternetGateway",
        "ec2:DetachInternetGateway"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "cloudtrail:StopLogging",
        "cloudtrail:DeleteTrail"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "cloudwatch:DeleteDashboards",
        "cloudwatch:DisableAlarmActions",
        "cloudwatch:PutDashboard"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "ec2:DeleteFlowLogs",
        "logs:DeleteLogGroup",
        "logs:DeleteLogStream"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*"
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Sid": "DenyActionsForBaselineTag",
      "Effect": "Deny",
      "NotAction": [
        "cloudformation:DescribeStacks",
        "config:Describe*",
        "config:Get*",
        "config:List*",
        "config:Select*",
        "logs:Describe*",
        "logs:FilterLogEvents",
        "logs:Get*",
        "logs:List*",
        "logs:StartLiveTail",
        "logs:StartQuery",
        "logs:StopLiveTail",
        "logs:StopQuery",
        "route53resolver:Get*",
        "route53resolver:List*",
        "lambda:List*"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/u:resource-type": "dns-query-logging-baseline"
        },
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_Adminfordevaccounts*",
            "arn:aws:iam::*:role/stacksets-exec-*",
            "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole",
            "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole-eu-central-1",
            "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole-us-east-1"
          ]
        }
      }
    },
    {
      "Sid": "DenyBaselinePrincipalsCreation",
      "Effect": "Deny",
      "Action": [
        "iam:AttachRolePolicy",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:DeleteRolePermissionsBoundary",
        "iam:DeleteRolePolicy",
        "iam:DetachRolePolicy",
        "iam:PutRolePermissionsBoundary",
        "iam:PutRolePolicy",
        "iam:UpdateAssumeRolePolicy",
        "iam:UpdateRole",
        "iam:UpdateRoleDescription",
        "iam:Tag*",
        "iam:Untag*",
        "s3:DeleteBucket"
      ],
      "Resource": [
        "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole",
        "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole-eu-central-1",
        "arn:aws:iam::*:role/DNSQueryLoggingBaselineServiceRole-us-east-1",
        "arn:aws:s3:::cdk-fac-base-*-assets-*-eu-central-1"
      ],
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_Adminfordevaccounts*",
            "arn:aws:iam::*:role/stacksets-exec-*"
          ]
        }
      }
    }
  ]
}
```

### nreg - GxP compliance - deny specific service configurations

The Below deny conditions are applicable to nreg factory accounts.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "GRAUDITBUCKETENCRYPTIONENABLED",
      "Effect": "Deny",
      "Action": [
        "s3:PutEncryptionConfiguration"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Sid": "GRAUDITBUCKETLOGGINGENABLED",
      "Effect": "Deny",
      "Action": [
        "s3:PutBucketLogging"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Sid": "GRRESTRICTS3DELETEWITHOUTMFA",
      "Effect": "Deny",
      "Action": [
        "s3:DeleteObject",
        "s3:DeleteBucket"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": [
            "false"
          ]
        },
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryDeveloperAdvanced*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      }
    },
    {
      "Action": [
        "config:DeleteConfigRule",
        "config:DeleteConfigurationRecorder",
        "config:DeleteDeliveryChannel",
        "config:StopConfigurationRecorder"
      ],
      "Resource": "*",
      "Condition": {
        "ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/us-east-1/*AWSAdministratorAccess*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "ec2:CreateNatGateway",
        "ec2:CreateInternetGateway",
        "ec2:DeleteNatGateway",
        "ec2:AttachInternetGateway",
        "ec2:DeleteInternetGateway",
        "ec2:DetachInternetGateway"
      ],
      "Resource": "*",
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "cloudtrail:StopLogging",
        "cloudtrail:DeleteTrail"
      ],
      "Resource": "*",
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "cloudwatch:DeleteDashboards",
        "cloudwatch:DisableAlarmActions",
        "cloudwatch:PutDashboard"
      ],
      "Resource": "*",
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Action": [
        "ec2:DeleteFlowLogs",
        "logs:DeleteLogGroup",
        "logs:DeleteLogStream"
      ],
      "Resource": "*",
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*Adminfordevaccounts*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*FactoryAdmin*"
          ]
        },
        "ArnLike": {
          "aws:PrincipalARN": "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/eu-central-1/*"
        }
      },
      "Effect": "Deny"
    },
    {
      "Sid": "DenyS3BucketDeletionForCDKFacBaseAssets",
      "Effect": "Deny",
      "Action": [
        "s3:DeleteBucket"
      ],
      "Resource": [
        "arn:aws:s3:::cdk-fac-base-*-assets-*-eu-central-1",
        "arn:aws:s3:::cdk-fac-base-*-assets-*-us-east-1"
      ]
    }
  ]
}
```

### Baseline resources 

To avoid misconfiguration, these resources normally can't be modified by the factory admin or users, only by the Uptimize AWS team. The only actions allowed are:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyActionsForBaselineTag",
      "Effect": "Deny",
      "NotAction": [
        "cloudformation:DescribeStacks",
        "ec2:Describe*",
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:CreateNetworkInterfacePermission",
        "ec2:DeleteNetworkInterfacePermission",
        "ec2:CreateSecurityGroup",
        "ec2:CreateVpcEndpoint",
        "ec2:RunInstances",
        "ec2:StartInstances",
        "ec2:StopInstances",
        "ec2:TerminateInstances",
        "secretsmanager:DescribeSecret",
        "secretsmanager:GetSecretValue",
        "ssm:GetParameter"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/u:resource-type": "Baseline"
        },
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_Adminfordevaccounts*",
            "arn:aws:iam::*:role/stacksets-exec-*",
            "arn:aws:iam::*:user/FactoryBaseline*",
            "arn:aws:iam::*:role/FactoryBaseline*",
            "arn:aws:iam::*:role/cdk-fac-base*",
            "arn:aws:iam::*:role/FactoryAccountBaseline*"
          ]
        }
      }
    },
    {
      "Sid": "DenyActionsForBaselinePrefix",
      "Effect": "Deny",
      "NotAction": [
        "budgets:ViewBudget",
        "budgets:Describe*"
      ],
      "Resource": [
        "arn:aws:budgets::*:budget/FactoryBaseline-*"
      ],
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_Adminfordevaccounts*",
            "arn:aws:iam::*:role/stacksets-exec-*",
            "arn:aws:iam::*:role/FactoryBaseline*",
            "arn:aws:iam::*:role/FactoryAccountBaseline*"
          ]
        }
      }
    },
    {
      "Sid": "DenyBaselinePrincipalsCreation",
      "Effect": "Deny",
      "Action": [
        "iam:AttachRolePolicy",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:DeleteRolePermissionsBoundary",
        "iam:DeleteRolePolicy",
        "iam:DetachRolePolicy",
        "iam:PutRolePermissionsBoundary",
        "iam:PutRolePolicy",
        "iam:UpdateAssumeRolePolicy",
        "iam:UpdateRole",
        "iam:UpdateRoleDescription",
        "iam:Tag*",
        "iam:Untag*"
      ],
      "Resource": [
        "arn:aws:iam::*:role/FactoryBaseline*",
        "arn:aws:iam::*:role/cdk-fac-base*",
        "arn:aws:iam::*:role/FactoryAccountBaseline*"
      ],
      "Condition": {
        "ForAnyValue:ArnNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_AWSAdministratorAccess*",
            "arn:aws:iam::*:role/aws-reserved/sso.amazonaws.com/*/AWSReservedSSO_Adminfordevaccounts*",
            "arn:aws:iam::*:role/stacksets-exec-*",
            "arn:aws:iam::*:role/cdk-fac-base*",
            "arn:aws:iam::*:user/FactoryBaseline*",
            "arn:aws:iam::*:role/FactoryBaseline*",
            "arn:aws:iam::*:role/FactoryAccountBaseline*"
          ]
        }
      }
    },
    {
      "Sid": "DenyStopAndTerminateWhenMFAIsNotPresent",
      "Effect": "Deny",
      "NotAction": [
        "iam:ListMFADevices",
        "iam:ListVirtualMFADevices",
        "iam:ListMFADevices",
        "iam:CreateVirtualMFADevice",
        "iam:DeleteVirtualMFADevice",
        "iam:EnableMFADevice",
        "iam:DeactivateMFADevice",
        "iam:ResyncMFADevice"
      ],
      "Resource": "*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": false
        },
        "StringLike": {
          "aws:PrincipalArn": [
            "arn:aws:iam::*:root"
          ]
        }
      }
    }
  ]
}
```

---

# Merck AMI's in Uptimize as self serve
Uptimize AWS EC2 remains the most consumed service on Uptimize AWS with growing demand. Keeping that in mind, we collaborated with IT-Infrastrcuture team to make EC2's self-service all the while keeping them compliant to the Merck standards and processes.

Uptimize AWS platform already provides an option for endusers to onboard and use ITI Managed Instances in their factory account. This is explained in detail [here](https://docs.uptimize.merckgroup.com/factory/ITI_Managed_Instance_Onboarding_Process/).

With this new self serve AMIs, we have :

- Collaborated with IT-I to jointly create a process to build and release Merck approved Linux AMI's to Uptimize
- Uptimize Users can now subscribe to these AMIs for their Factory accounts
- Latest images will be published to the factories following the IT-I patch each quarter 

## Image builder process flow:

Merck IT-Infrastructure team manages an EC2 instance in the Uptimize AWS account ec1-da-d-centraldeployment-gxp-00033 (791680346816). We have created an Image builder pipline in this account that runs on cron schedule. The image receipe of this pipleine uses the image from the IT-I managed instance as a base image. Factory accounts subscribing to the self-serve AMIs will  get added to this distribution list. 
This images is encrypted with the Customer manged KMS key, and only the encrypted images are shared with factories. Factory accounts are provided with required access to the KMS key to launch an instance using this the shared image.

Currently these self serve images are only availble for SUSE linux Server.

This is the overall AMI creation and distribution process flow from IT-I managed Instance in Central deployment gxp account:
![Architecture](/assets/factory-admin/Factory_Image_distribution.png)

## AMI distribution Process:

Factories which require self serve AMI can sunscribe to the same via the AWS use case extesnsion form in Foundry. This metadata is captured in the extension form and the entire process is integrated withe tha factory account provisioning process.

![Extension_form](/assets/factory-admin/Extension_form.png)

For accounts/ factories that have subscribed to these self - serve AMIs, an additional task  will be executed during the baseline provisioning to get the latest image available into the factory account. This image will be available under the dropdown 'Private Image' in the AMI section of EC2 console. Additionally the factory account will get added to the image builder distribution list in the central account, so the factories will continue to receive the latest images following the IT-I patch after each quarter.Factory admins are also notified on the availability of the Images in their corresponding factory accounts.

![Notification](/assets/factory-admin/AMI_notification.PNG)

## Updating the images in Factories

Factory admins would recive a notification as shown above with the AMI_ID whenever a latest image is distributed to Factory account. Then its the responsibility of the usecase team to use these latest distributed images.

These images will be availble the dropdown 'Private Image' in the AMI section of EC2 console with the AMI name as `UptimizeManagedFactoryAMI-<timestamp>` as shown below.
![AMI](/assets/factory-admin/AMIs.PNG)

1. Using shared AMI from Console:
Users can spin up EC2 instances with these shared AMIs directly from console by selecting the AMI -> `Launch instance from AMI`
![ec2](/assets/factory-admin/ec2.PNG)

2. Using shared AMI in CloudFormation:
Users can reference the AMI ID directly in their CloudFormation template in the ImageId property under **AWS::EC2::Instance** resource

````
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t2.micro
      ImageId: ami-0702d0a28d8a29bb8  # Replace with your latest shared Uptimize AMI ID
      KeyName: my-key-pair
````

3. Using shared AMI with AWS CLI:
Users can also launch an EC2 instance using the shared AMI with the following AWS CLI command

````
aws ec2 run-instances \
    --image-id ami-0702d0a28d8a29bb8  # Replace with your latest shared Uptimize AMI ID
    --count 1 \
    --instance-type t2.micro \
    --key-name my-key-pair
````
Users can also automate the process of updating the AMI ID in SSM Parameter Store whenever a new AMI version is shared to your factory account. This could then be easily referenced from the cloudFormation script or any other automation tools.

## Roles and Responsibilities:

### IT-I Team Responsibilities:
- Merck manages the AMI-EC2 instances
- The IT-I team is responsible for patching the instance quarterly

### Uptimize Platform Team Responsibilities:
- AWS Operations ensures image distribution to subscribed factories during account provisioning and after the IT-I patch each quarter 

### Use case Team Responsibility:
- Usecase team to subscribe for these self serve AMI in the AWS extension form if required
- Usecase team to ensure using the latest shared image to get the latest packages

---

# Baseline resources

Depending on how the use case foundry request is filled, a set of baseline resources is provided to facilitate
the integration with the rest of the Uptimize ecosystem.
These resources are identified by their name prefix `FactoryBaseline` or by the tag `u:resource-type=Baseline` and
are deployed by the Uptimize AWS team.
To avoid misconfiguration, these resources normally can't be modified by the factory admin or users, only by the
Uptimize AWS team. The only actions allowed are:

```
"cloudformation:DescribeStacks",
"ec2:Describe*",
"ec2:CreateNetworkInterface",
"ec2:DeleteNetworkInterface",
"ec2:CreateNetworkInterfacePermission",
"ec2:DeleteNetworkInterfacePermission",
"ec2:CreateSecurityGroup",
"ec2:CreateVpcEndpoint",
"ec2:RunInstances",
"ec2:StartInstances",
"ec2:StopInstances",
"ec2:TerminateInstances",
"secretsmanager:DescribeSecret",
"secretsmanager:GetSecretValue",
"ssm:GetParameter"
```

---

# Network architecture

Network access is managed centrally in Uptimize AWS. Both Factory and Ingestion accounts
are connected to a core network account that grants on-premise and/or internet connectivity.
Baseline VPCs and Subnets are provisioned by default for those accounts.

For template samples to deploy resources into your Factory accounts, see the [uptimize-aws-sample-templates repository](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates?path=/src/03_factory_vpc).

## Firewall
Internet traffic goes through a Firewall to prevent access to unwanted domains. If your Factory or Ingestion
account needs access to a domain that was not allow listed already, please open a SNOW ticket which mentions the domain(s)
to allow list, the reason why you need access, and your Factory name or ingestion account.

Already whitelisted domains can be found in the [Uptimize Firewall Whitelist Tracker](https://mdigital.sharepoint.com/:x:/r/sites/Unit8SoWCollaboration-AWSLabstesting/Shared%20Documents/AWS%20Labs%20testing/01_Deliverables/Firewall/UPTIMIZE%20Lab%20firewall%20whitelist.xlsx?d=w4ed6ac1fdfd043d5882e5757e187acd4&csf=1&web=1&e=9s4U1E).
Note, that the scope of a whitelisting of a domain is recorded in column "Factory Name / Ingestion Name / Lab" and can be either

- global (empty value in Excel sheet)
- for a certain account only

You will need to request to whitelist a domain for your specific account unless the domain is globally whitelisted!
Whitelisted domains specific to other accounts will not work in your account! 

### Request access to Whitelist the domains for AWS Accounts

#### Submit a SNOW ticket : [Merck ServiceNow](https://fire.service-now.com/).

#### SNOW ticket must contain below details

- `Domain`
- `Reason why you need access`
- `Specify the AWS Region`
- `Factory Account / Ingestion Account / Lab Account`

#### Example Ticket

```yaml
Ticket title: Whitelist the domains for AWS Accounts

Affected System: UPTIMIZE AWS

Please provide additional information for your ticket:

< Region >
< Reason why you need access >
< Factory Name / Ingestion Name / Lab >

I am asking to Whitelist the following 

<URL> 

Thanks!

```


## Lambdas and networking
In order for Lambdas to function properly, they should be bound to your Factory/Ingestion VPC using Lambdas' VPC configuration:
```yaml
MyLambda:
  Type: AWS::Lambda::Function
  Properties:
    [...]
    VpcConfig:
      SecurityGroupIds:
        - !Ref SecurityGroupId
      SubnetIds:
        - !Ref SubnetId
```

Template examples can be found in the [sample templates repo](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates?path=/src/04_lambda_examples/README.md)

## Route 53
The core network accounts (dev/qa/prod) include 3 hosted zones respectively:
- `dev.uptimize.merckgroup.com`
- `qa.uptimize.merckgroup.com`
- `p.uptimize.merckgroup.com`

The process to add a subdomain to the existing hosted zones is the following:
- Create your hosted zone in your factory account, for example:
```yaml
AWSTemplateFormatVersion: "2010-09-09"
Parameters:
  SubDomain:
    Type: String
    Default: myfactory
  Environment:
    Type: String
    AllowedValues:
      - dev
      - qa
      - p
  TTL:
    Type: Number
    Default: 600
Resources:
  HostedZone:
    Type: AWS::Route53::HostedZone
    Properties:
      Name: !Sub "${SubDomain}.${Environment}.uptimize.merckgroup.com"
  WwwRecordSet:
    Type: 'AWS::Route53::RecordSet'
    Properties:
      HostedZoneId: !Ref HostedZone
    # ... custom record set for your Alias, CNAME, ... record
```
- Deploy it to your factory account via Azure Devops Pipelines
- Once deployed, you have to retrieve the name servers that were created for your hosted zone in the console:
  - Navigate to Route53->Hosted Zones and select your hosted zone:
    ![img.png](/assets/network/network-hosted-zones-ui.png)
  - Copy the NS domains.
- Open a SNOW ticket towards the Uptimize AWS team describing your domain name and your ns servers.

The final setup will look like this:

![Subdomain validation](https://docs.uptimize.merckgroup.com/docs-assets/admin/network/dns_subdomain.png)

The Uptimize AWS Platform supports the creation of Hosted Zones without the "P" prefix (e.g., `usecase.uptimize.merckgroup.com`) for Production environments, when justified by specific use case requirements.

## Route53 Outbound Resolver Rules
Centralized Resolver Rules for Merck's internal systems are established within the Central Networking account and are made shareable across other AWS accounts, such as factory and ingestion, through AWS Resource Access Manager (RAM) sharing. It's important to note that Route 53 Resolver operates within a specific region, necessitating the sharing and association of VPCs within the same region.

Please create a ServiceNow task to incorporate the Factory VPC into the DNS resolver group, allowing it access to Merck's internal domains as follows:

- merckgroup.com
- merck.de
- millipore.com
- sial.com

Note: Route 53 Resolver is a regional service, and for the Uptimize platform, we have enabled these rules in the EU-Central-1 and US-East-1 regions.

## NAT Gateway public IP ranges (Uptimize AWS)

### EU Region
   #### Dev
      - 52.29.109.224
      - 52.29.181.45
   #### Val     
      - 3.67.21.206
      - 18.197.212.116
   #### Prod
      - 52.57.81.113
      - 18.159.220.89

### US Region
   #### Dev
      - 3.225.59.215
      - 18.235.133.131
   #### Val
      - 3.214.248.66
      - 18.215.80.179
   #### Prod
      - 3.213.15.186
      - 34.205.218.228

---

# UPTIMIZE Service Connection

## What is Service Connection for Azure DevOps?

To allow the AWS Toolkit for Azure DevOps to provision AWS services, Azure pipelines require AWS credentials. These credentials now come in the form of OIDC (OpenID Connect) service connections using federated identity. An OIDC Service connection is an Azure AD application that assumes an AWS IAM role through a trust relationship, eliminating the need for long-lived AWS access keys.

* For more details please refer to the [official AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html) and [Azure DevOps OIDC documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure).

## OIDC Service Connection Setup

As part of account provisioning, the UPTIMIZE core team creates OIDC service connections for all environments (Dev, QA, Prod). The OIDC approach provides enhanced security by:

- **No long-lived credentials**: Uses temporary tokens instead of static access keys
- **Improved security posture**: Reduces credential exposure risks
- **Automatic token rotation**: Tokens are automatically refreshed
- **Fine-grained access control**: Role-based permissions with session policies

### OIDC Role Policy (All Environments)

The OIDC role uses the same policy across all environments (Dev, QA, and Prod) and has permission to perform all actions on all services and resources except the following services:
- AWS Identity and Access Management (IAM User, Group, and credential management actions are restricted)
- AWS Organizations  
- AWS Account Management

**OIDC Role Policy (Dev/QA/Prod):**

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Resource": "*",
            "NotAction": [
                "organizations:*",
                "account:*",
                "iam:*User*",
                "iam:*Group*",
                "iam:*AccessKey*",
                "iam:*Password*",
                "iam:*LoginProfile*",
                "iam:*ServiceSpecificCredential*",
                "iam:*MFADevice*",
                "iam:*SSHPublicKey*",
                "iam:*SigningCertificate*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "iam:AttachRolePolicy",
                "iam:ListUsers",
                "iam:AttachUserPolicy",
                "iam:CreateAccessKey",
                "iam:CreatePolicy",
                "iam:CreatePolicyVersion",
                "iam:CreateRole",
                "iam:CreateUser",
                "iam:PutRolePermissionsBoundary",
                "iam:PutRolePolicy",
                "iam:PutUserPermissionsBoundary",
                "iam:PutUserPolicy",
                "iam:GetUser",
                "iam:TagUser",
                "iam:UpdateRole",
                "iam:UpdateUser",
                "iam:ListAttachedUserPolicies"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}
```

**Note**: Creation of OIDC service connection roles is provisioned automatically as part of factory use case baseline and is managed by UPTIMIZE AWS Administrator.


For more details related to managed policies, please refer to the [official AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html).

## Azure DevOps Pipeline Integration

### Using OIDC Service Connections in Pipelines

The OIDC service connections are designed to work seamlessly with your existing Azure DevOps pipeline templates. **Important**: AWS account access keys should never be hardcoded in pipeline templates or stored as variables. OIDC provides secure, temporary credentials automatically.

#### Existing Pipeline Template Compatibility

Your current pipeline templates will continue to work with OIDC service connections with minimal modifications. The migration from IAM user-based authentication to OIDC is designed to be backward compatible, ensuring:



## Migration from IAM Users to OIDC

### Benefits of OIDC Migration

1. **Enhanced Security**: No long-lived access keys to manage
2. **Reduced Attack Surface**: Temporary tokens with automatic expiration
3. **Improved Compliance**: Better audit trails and access control
4. **Simplified Key Management**: No manual key rotation required
5. **Consistent Policy**: Same role policy across all environments for simplified management



For assistance with the OIDC process, please contact the Uptimize platform team.

---

# Sandboxes

## Overview of AWS Sandbox Accounts

We provide a central sandbox AWS account for each sector and MGF. These shared sandbox accounts can be used to test any AWS services and for learning or training purposes. The sandbox accounts **cannot** be used for ❌**any production use case development** or to ❌**host any Merck data** of any data classification. 

The following sandbox accounts are in place:

**HC:** Account Name: HCSandbox, Account ID: 564721427792, Admins: Emre Esendir, Sylvain Cecilio

**LS:** Account Name: LSSandbox, Account ID: 025760030746, Admin: Mike Siefert, Carsten Goepp, Mirco Zeiss, Timo Hirt

**MGF:** Account Name: MGFSandbox, Account ID: 689676911593, Admin: Rahul Panda

**EL:** Account Name: ELSandbox, Account ID: 131751615212, Admin: Min-Cheol Lee, Jan Loeffler

## Access
To request access to one of the sandbox accounts, please contact the relevant Admin (see above) and state for which purpose you plan to use the sandbox account. Please also consider the costs involved with using the sandbox accounts and communicate your estimated spend.

## Requesting Access to AWS Sandbox Account with Administrator Role

To gain access to an AWS Sandbox account with the `AWSAdministratorAccess` role, please follow the steps below:

1. **Submit a Request via IT4YOU**
   - Navigate to: **IT4YOU → Make a Request → Access for Uptimize AWS Sandbox**

2. **Attach Admin Approval**
   - Ensure that you include approval from respective Lab  admin as part of the request.

---

# UPTIMIZE AWS Data Ingestion

## What is UPTIMIZE AWS Data Ingestion?

UPTIMIZE AWS Data Ingestion comes into play when data is not yet available and users need access to their data for their AWS Factory accounts. The offering includes two main components:


1. Azure DevOps project for ingestion that provides
    * Connectivity to your AWS accounts to deploy ETL jobs
    * Sample templates for AWS Glue workflow
        
2. AWS Ingestion accounts that provide
    * Networking connectivity to Merck internal systems
    * Tools such as AWS Glue to ingest data into the UPTIMIZE AWS Data Hub


*The docs assume you have an understanding of what AWS Accounts are. If you need to refresh your understanding of AWS Accounts, please head over to the [official AWS documentation](https://docs.aws.amazon.com/accounts/latest/reference/accounts-welcome.html).  

The diagram below shows a high-level overview of providing data to the Factories:

![Ingestion overview](https://docs.uptimize.merckgroup.com/docs-assets/factories/ingestion-overview.png)

1. Connect to on-premise data sources (SDO teams)
2. Ingest data into the Data Hub leveraging the ingestion account (SDO teams)
3. Provide data access to Factories (managed by the UPTIMIZE AWS platform team)

## Prerequisites

Before starting the technical data ingestion, ingestion teams need to fill out a Data Ingestion Request (DIR) form [here](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.10e9a51d-489e-4610-b6ce-e93a1bc66912/more-data) -> `Request Additional Data` on UPTIMIZE Foundry, if the data they need is not yet available in the UPTIMIZE AWS Data Hub. The DIR needs to be approved by the Data Owner.  

### Access 

To work on the ingestion project, you need to have access to 1) the Azure DevOps project and 2) AWS ingestion accounts.

**1) Azure DevOps project:**
You have access to the data ingestion project on [Azure DevOps](https://dev.azure.com/Uptimize) for your sector. If not, please refer to [Team access](https://docs.uptimize.merckgroup.com/factory/team-access/).
Below is an example of the dataingestion-gxp-ec1 project on Azure DevOps

![Azure DevOps project](https://docs.uptimize.merckgroup.com/docs-assets/factories/ado-ingestion-project.png)

**2) AWS Ingestion account**
You have access to the AWS ingestion accounts. If not, please refer to [Team access](https://docs.uptimize.merckgroup.com/factory/team-access/).  We offer two types of ingestion accounts.

1. **NREG**: Each sector has a set of non-regulated (nreg) ingestion accounts (1 Dev, 1 QA, and 1 Prod ingestion account). For example, if you have access to the MGF nreg ingestion accounts, your AWS login shows the following accounts:

![AWS NREG Ingestion account example](https://docs.uptimize.merckgroup.com/docs-assets/factories/mgf-nreg-ingestion-accounts.png)

2. **GxP**: MGF and HC sectors have GxP-qualified ingestion accounts (1 Dev, 1 QA, and 1 Prod ingestion account). For example, if you have access to the MGF gxp ingestion accounts, your AWS login shows the following accounts:

![AWS GxP Ingestion account example](https://docs.uptimize.merckgroup.com/docs-assets/factories/mgf-gxp-ingestion-accounts.png)

## How do you ingest data?
The following overview guides you through the default ingestion process.

### Ingestion process flow

The below diagram gives an overview of the data ingestion process in Uptimize AWS.

![Data Ingestion process flow](/assets/ingestion/DataIngestionProcessFlow.png)

Steps:

1. Ingestion team to fill out the [Data Ingestion Request](https://palantir.mcloud.merckgroup.com/workspace/fforms/f/new/ri.fforms.main.form.ab483f11-17ed-4ec9-ac2d-e3d3ba43d215) (DIR) on UPTIMIZE Foundry if the data they need is not yet available in the UPTIMIZE AWS Data Hub.
2. Ingestion team to create a service now (SNOW) ticket to the `UPTIMIZE AWS Operations` team, once the DIR is approved by the Data Owner in Foundry. SNOW ticket to have the below details:
    - DIR Approval link
    - Data Source name
    - Member information (Members to be provided access to the specific data source resources)
    - Email id for ADO access (Only this ID will have permissions to create a PR in the ADO repo)
    - If Athena access is required to the datalake s3 buckets for data validation
    - Data source classification: If the data source is `int` (internal) or `confi` (confidential)
3. UPTIMIZE AWS Operations team to create a PR in the [ingestioninfra-nreg-ec1](https://dev.azure.com/Uptimize/_git/ingestioninfra-nreg-ec1) with the details provided in SNOW ticket. PR needs to be approved by operations admins.
4. UPTIMIZE AWS Operations team to execute the `Use Case Isolation Pipelines`, to create the below resources specific to the data source:
    - S3 bucket in the sector specific ingestion account 
    - Permission set to access to the ingestion account 
    - Service users and service connection in the ado repo
    - Service role pipeline in ingestioninfra-nreg-ec1 repo
5. Ingestion team to make changes to their service role in their data source specific repo under the ingestioninfra-nreg-ec1 repo and create a PR. This PR should be reviewed and approved by the Operations team.
6. UPTIMIZE AWS Operations team to execute the data source specific [Service role pipelines](https://dev.azure.com/Uptimize/ingestioninfra-nreg-ec1/_build?definitionScope=%5Cservice_roles)
7. Ingestion team can now get started with the ingestion of their data for the specified data source into UPTIMIZE AWS.
8. Ingestion team to update the status of the DIR request on UPTIMIZE Foundry to `Ingested`. 

### Ingestion architecture and setup

The architecture diagram gives an overview of the used AWS services and best practices. 

![Glue ingestion best practices](https://docs.uptimize.merckgroup.com/docs-assets/factories/ingestion-arch.png)

### Access to Management Console

A permission set will be provided for each data source to access to the ingestion account of the sector. If you have the access, your AWS login will look like this:

![Permission Set Login](https://docs.uptimize.merckgroup.com/docs-assets/factories/permission-set-login.png)

* Naming convention for the permission set is 'Ingestion-{data-source-name}-{dev/qa/prod}'. Example: 'Ingestion-datasource01-dev'
* It is very important to notice the data source name in the form of it is mentioned in the permission set name. Because that same string is used in all policies as data source name.
* Sector ingestion accounts are shared with many data sources. For this reason, permission set policies are enforcing naming conventions specific to AWS services. Same rules applies to service connections as well. Please read the following sections carefully to avoid `Access denied` errors.

### Template samples

Ingestion template samples are available in the [uptimize-aws-sample-templates repository](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates?path=/src/02_ingestion)

### Network

There are three VPCs and one private subnet for each VPC provided in all ingestion account. Those are for Internal Merck Network, Confidential Merck Network and Internet connection. Example:

![Ingestion VPCs](https://docs.uptimize.merckgroup.com/docs-assets/factories/ingestion-vpcs.png)

![Ingestion Subnets](https://docs.uptimize.merckgroup.com/docs-assets/factories/ingestion-subnets.png)

You will need VPC ID, Subnet ID and Default Security Group ID values to attach your resources. Best practice to do that is to use outputs of the network stack. To learn how to import value from other stacks: [Fn::ImportValue](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html)

* The convention for the Export Name: "{ingestion-network-stackname}-{internal/confidential/internet}-{vpc/sbn/sg}"
* Example: stack-ingestion-vpcs-el-dev-internal-sbn

### S3 Buckets

**An S3 bucket in your ingestion account** is provided you by platform team. Data source teams are restricted to use only this bucket in the ingestion account. Please keep that in mind when designing architecture.

* The naming convention for data source buckets is 'ingestion-{d/q/p}-{ingestion-account-number}-{data-source-name}'. Example: 'ingestion-d-683851438096-datasource01'.
* Server side encryption is enforced by bucket policy. The encryption type is SSE-S3.
* You have PutObject and DeleteObject actions allowed in addition to the read access for this bucket.

You can give your glue job access to the proper **S3 bucket in the Data Lake accounts** for your data source.

* Naming convention for the S3 bucket in the Data Lake account 'dh-{d/qa/p}-{gxp/nreg}-confi-raw-s3'. Example 'dh-d-nreg-confi-s3'.
* Server side encryption is enforced by bucket policy. The encryption type is SSE-S3.
* Folder structure for Data Lake bucket is '{bucketname}/data/{confi/int}/{datasource}/{raw/cleaned}'. Example: 'dh-d-nreg-confi-raw-s3/data/int/uc-eva/raw/'
* Sample template for service roles will be provided. See [Service Roles](/factory/ingestion/#service-roles)

### Glue

The default tool for data ingestion into UPTIMIZE AWS is [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) which is a fully managed ETL service. If you need any other tools to ingest data, please consult with the UPTIMIZE AWS platform team.

Please follow the rules below:
* For all type of glue resources, name has to start with '{data-source-name}-'.
* A glue security config is provided for each ingestion account. Security config naming convention is '{sector}-{qualification}-{env}-glue-security-configuration'. Example: 'el-nreg-dev-glue-security-configuration'. Pass this security configuration to all your glue jobs for logs and S3 access to work correctly.

### Athena

AWS Athena is a serverless, interactive query engine used to query data from data lake s3 buckets for data validation purposes.

Users can create glue catalog tables in their ingestion account pointing to their datalake s3 objects. These tables can then be queried from athena for data validation.The Athena actions are restricted with the workgroup, so the users are requested to create a workgroup respective to their datasource name.

* Workgroup name has to start with '{data-source-name}-*'

### Lambda

AWS Lambda is a serverless computing service that runs code in response to events and manages the underlying resources.

### StepFunctions

AWS Step Functions is a visual workflow service that helps you build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.

* The State machine name has to start with '{data-source-name}-*'

### EventBridge Scheduler

Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. With EventBridge Scheduler, you can create schedules using cron and rate expressions for recurring patterns, or configure one-time invocations.

* The Scheduler name has to start with '{data-source-name}-*'

### EventBridge

A rule specifies which events to send to which targets for processing. A single rule can send an event to multiple targets, which then run in parallel.

* The Event rule name has to start with '{data-source-name}-*'

### Secrets Manager

AWS Secrets Manager is used to store credentials for Glue jobs (e.g. DB credentials).

* Secret names has to start with '{data-source-name}/'

### Cloudformation

* Naming convention for ingestion stacks 'stack-ingestion-{data-source-name}-{env}*'. Examples: 'stack-ingestion-datasource01-dev' or 'stack-ingestion-datasource01-dev-glue'
* Another stack data source has indirect access is the `service roles` stack. Naming convention for service roles stack is 'stack-service-roles-{data-source-name}-{env}'. Example: 'stack-service-roles-datasource01-dev'. See [Service Roles](/factory/ingestion/#service-roles)

### IAM

* Read-only access plus the PassRole permission given to the data source teams to view/assign service roles belong to the data source.
* Naming convention for service roles is '{data-source-name}-{env}-*-service-role'. Example 'datasource01-dev-glue-service-role'
* To learn how to create service roles see [Service Roles](/factory/ingestion/#service-roles)

### Service Roles

Same concern to isolate data sources in a shared ingestion account mentioned above applies to service roles as well. As platform team, we need to make sure that the glue jobs only has access to proper secrets, buckets etc. For this reason:

* Each data source is provided a repo in the `ingestioninfra-nreg-ec1` project.
* This repo will include sample cloudformation template and a pipeline file for service roles.
* Data source teams can create a branch, edit cloudformation template and adapt the pipeline accordingly, then create a pull request.
* The pull request will be reviewed and if no issues it will be merged and deployed to ingestion accounts by the platform team.

Please pay attention to the following points when editing service roles:
* Data source can only use specific S3 buckets. See [S3 Buckets](/factory/ingestion/#s3-buckets)
* Naming convention for secrets: [Secrets Manager](/factory/ingestion/#secrets-manager)
* Naming convention for service roles: [IAM](/factory/ingestion/#iam)
* Naming convention for service roles stack: [Cloudformation](/factory/ingestion/#cloudformation)

### Azure Pipelines

Azure DevOps pipelines are used to deploy data source ingestion to Dev, QA and Prod environments. Each data source team member will have access to sector's ingestion project in ADO. Example: 'dataingestion-el-nreg-ec1'.

Also each data source will be given access to the service connection created specifically for that data source for deploying the ingestion to AWS. Please read carefully above rules to avoid `Access denied` error, because those rules are enforced by the policies of the service connection IAM role as well.

* Naming convention for the service connection: '{region}-da-{d/q/p}-ingestion-{sector}-{data-source-name}-{gxp/nreg}' Example: 'ec1-da-d-ingestion-el-datasource01-nreg'

### Development flow (best practices)

On UPTIMIZE AWS, we are striving to follow the best practices below to iterate fast, ensure easy deployments across environments and have a secure development lifecycle. 

* Define everything as Infrastructure as Code (IaC) with CloudFormation
* Define your CI / CD pipelines with Azure pipelines

### Cloudformation and Azure pipeline samples for ingestion

Sample templates for Cloudformation are available in the feat/sample-templates branch in the [dataingestion-gxp-ec1](https://dev.azure.com/Uptimize/dataingestion-gxp-ec1/_git/dataingestion-gxp-ec1?version=GBfeat%2Fsample-templates) repository. This includes glue workflow templates.

For general guidance on how to write CloudFormation templates, we recommend [AWS CloudFormation Resources](https://aws.amazon.com/cloudformation/resources/) and the [CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

CloudFormation templates consists of 3 must-have sections:

1. **Parameters** - Define which parametes will be used throught the template. Example
````
Parameters:

  ScriptBucketName:
    Type: String

  ScheduleTriggerEnabled:
    Type: String
    Default: true
`````

2. **Resources** - Define which type of AWS resources are defined in the template. Example of a Glue workflow defined as a CloudFormation Resource: 

````
  MyWorkflow:
    Type: AWS::Glue::Workflow
    Properties:
      Description: "Workflow that manages the ingestion of data"
      Name: !Sub "${AccountDetails}-glue-wf-ing"  
````

3. **Outputs** - Define outputs of the template that can be imported in other CloudFormation templates. Example of Security Groups that can be imported in other stacks.
````
Outputs:
    InternetGlueSubnetOutput:
        Description: "Subnet used by Glue jobs during to connect to the internet"
        Value:
          Ref: ConcurSubnet
        Export:
          Name:
            'Fn::Sub': '${AWS::StackName}-GlueInternetSubnet'

    InternetGlueSGOutput:
        Description: "Security group used by Glue jobs during ingestion"
        Value:
          Ref: GlueSG
        Export:
          Name:
            'Fn::Sub': '${AWS::StackName}-InternetGlueSG'
````
**Note** - Provision is made for users with 'Developer Advanced' permission set, to 
view stack events/resources and delete their 'own' cloudformation stack using aws management console.
Condition: This only works when tag **key : 'userName'** and **value : 'LoginId'** are added during 
stack creation. It is important to specify complete sadm-muid/sadm-xuid/muid/xuid of user in tag 
value that is used to login to console so that it can be matched with the session tags.

An example screenshot of tags would be similar to:

![Username Tag Example](/assets/ingestion/usernamesnip.png)

---

# Create and Import Merck Signed certificate to AWS Certificate store
This document describes how to create a Certificate signed by Merck RootCA and import it to AWS Certificate Manager.
A Merck signed certificate used to validate the identity of web applications/API and establish an encrypted network connection.


Follow the steps to create certificate
======================================

  
1.  **Create private key for the certificate**
     * `openssl genrsa -out <key name>.key 2048`
2.  **Create req.conf file with following content**
    
    ```
    [req]
    distinguished_name = req_distinguished_name
    req_extensions = v3_req
    prompt = no
    [req_distinguished_name]
    C = DE
    ST = HESSEN
    L = Darmstadt
    O = Merck KGaA
    OU = IT
    CN = <domain name>
    [v3_req]
    basicConstraints = CA:FALSE
    keyUsage = digitalSignature, keyEncipherment, dataEncipherment
    extendedKeyUsage = serverAuth
    subjectAltName = @alt_names
    [alt_names]
    DNS.1 = < domain name >
    DNS.1 = < alternate domain name > 
    ```
    Eg:
    
    CN = uptimize-mgf-ingestion.merckgroup.com
    DNS.1 = uptimize-mgf-ingestion.merckgroup.com
    DNS.1 = uptimize-mgf-ingestion-dev.merckgroup.com
    
3.  **Create CSR file**
    * `openssl req -new -out <csr file name>.csr -key <key name>.key -config req.conf`
4.  **Verify private key and certificate**
    * `openssl rsa -in <key name>.key -check`
    * `openssl req -text -noout -verify -in <csr file name>.csr`
5.  **Create Certificate**
    *    Go to [https://adportal.merckgroup.com/Certs/CP](https://adportal.merckgroup.com/Certs/CP) -> Request a certificate -> Submit a certificate request by using a base-64-encoded file
    * Copy content from <csr file name>.csr and paste to the Saved Request: of Certificate Request

              (Content should start with "-----BEGIN CERTIFICATE REQUEST-----")
    * Select "merck_webserver_sha2_v3" template
    * Submit
    * Select "Base64 encoded" -> Download both the certificate and certificate chain

Convert to PEM format (to convert Certificate Chain in P7B format to PEM)
=========================================================================
*
 `openssl pkcs7 -print\_certs -in <certfile name>.p7b -out <certificate name>.cer`

Import certificate to AWS Certificate Manager
=============================================

* Follow AWS documentation to import certificate.
    [https://docs.aws.amazon.com/acm/latest/userguide/import-certificate-api-cli.html#import-certificate-api](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate-api-cli.html#import-certificate-api)
                   
        (Use any text editor to open .cer and .key file to copy the contents of it)

---

# Authenticate Applications using Azure AD

Authentication to Single Page Applications and APIs using Azure AD is centrally managed through the Enterprise Identity and Access Management team. This page provides updated guidance on how to request and configure Azure AD authentication for your applications deployed in Uptimize AWS.

## Overview

The Azure AD authentication service provides:
- Centralized identity management
- Single Sign-On (SSO) capabilities
- Secure authentication for both Single Page Applications (SPAs) and APIs
- Integration with AWS deployed applications

## For Developers

### Request Azure AD Authentication Setup

**All Azure AD authentication configurations must now be requested through the IT4U ticketing system.**

To request Azure AD authentication setup for your application:

1. **Raise an IT4U Ticket**
   - Navigate to the IT4U portal
   - Create a new service request
   - **Assignment Group**: `Global_IDENTITY & ACCESS MGMT_SSO_L2`

2. **Provide Required Information**
   
   Include the following details in your ticket:

   | Information | Required | Description | Example |
   |:-----------|:---------|:------------|:--------|
   | **Application Name** | Yes | The name of your application | `uptimize-myapp-dev` |
   | **Environment** | Yes | Target environment (dev, qa, prod) | `dev` |
   | **Application Type** | Yes | SPA, API, or both | `Single Page Application` |
   | **Homepage URL** | Yes | The application's main URL | `https://myapp.example.com` |
   | **Redirect URIs** | Yes | Authentication redirect URLs | `https://myapp.example.com/auth/callback` |
   | **Business Justification** | Yes | Why authentication is needed | `User access control for internal tool` |
   | **Expected Users** | Yes | Who will use the application | `Development team members` |
   
3. **Wait for Azure Team Response**
   - The Azure Identity team will process your request
   - They will create the App Registration and Enterprise Application
   - You will receive the necessary configuration details

4. **Receive Configuration Details**
   
   Once approved, you will receive:
   - **Application (Client) ID**
   - **Tenant ID**
   - **Application ID URI** (for APIs)
   - **Scope values** (for APIs)

## Configure an API

### FastAPI

The FastAPI implementation is fairly standard with the exception of the inclusion of an OPTIONS endpoint that is not restricted by JWT authentication. This endpoint is called by the CORS preflight request and needs to be handled manually using the following code, due to limitations of the AWS API Gateway v2 handling of CORS in HTTP APIs.

```python
# create unauthorized OPTIONS endpoint required for CORS functionality
@app.options("/", status_code=200)
async def options():
    return
```
As we discussed above, in order to enable CORS, we include a separate Lambda PROXY path for the OPTIONS endpoint that does not require JWT authentication.

```yaml
Resources:
  HttpApiRouteOptionsProxyVar:
    Type: AWS::ApiGatewayV2::Route
    Properties:
      ApiId:
        Ref: HttpApi
      RouteKey: OPTIONS /{proxy+}
      Target:
        Fn::Join:
          - "/"
          - - integrations
            - Ref: HttpApiIntegrationAPI
    DependsOn: HttpApiIntegrationAPI
```

### CloudFormation Deployment

To deploy the CloudFormation stack of the API, follow the steps below. The CloudFormation stack will be deployed on eu-central-1 (Frankfurt) under the naming convention: *[Application Name]-[Environment]*.

1. Clone the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) repository.
2. Copy the files found under the *example/api* directory to your Factory project's repository.
3. Replace the CloudFormation template's path in the file *[example/spa/azure-pipeline.yml](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/azure-pipeline.yml)*.
4. Push the files and inspect them on the Azure DevOps repository.
5. Navigate to *Pipelines* from the right panel and click *New pipeline*.
6. Click *Azure Repos Git* and then select your repository.
7. Click *Existing Azure Pipelines YAML file* and enter the path to the *azure-pipeline.yml* file of your repository.
8. Click *Run* to run the pipeline and and fill its parameters using the table guide below.

| Parameters   |      Required      |  Description | Example |
|:--------:|:-------------:|:-----:|:-----:|
| environment | Yes | The environment to deploy in: development, quality assurance, production. | dev |
| appName | Yes | The application's name. Will be registered as *uptimize-[appName]-[environment]* | auth-service |
| awsServiceConnection | Yes | The name of the Azure DevOps service connection of the project to the AWS account. | MyServiceConnection |
| issuerUrl | Yes | The OpenID issuer URL of Azure AD. Replace with the Azure AD tenant ID of your application, if necessary. | https://login.microsoftonline.com/db76fb59-a377-4120-bc54-59dead7d39c9/v2.0 |
| audience | Yes | The OpenID audience of your application. Replace with the application's client ID. | 9bd96f1f-38a6-491f-83eb-3d8a32277e71 |
| vpcId | Yes | The VPC ID of the AWS account. | vpc-1234567890 |
| privateSubnetA | Yes | The ID of the private subnet A of the VPC. | subnet-1234567890 |
| privateSubnetB | Yes | The ID of the private subnet B of the VPC. | subnet-1234567890 |

<ld-notice headline="Note" mode="warning">
The IAM Role used by the AWS service connection needs to include the following IAM policies.
<ul>
  <li>cloudformation:CreateChangeSet</li>
  <li>cloudformation:CreateStack</li>
  <li>cloudformation:DeleteChangeSet</li>
  <li>cloudformation:DescribeChangeSet</li>
  <li>cloudformation:DescribeStacks</li>
  <li>cloudformation:DescribeStackResources</li>
  <li>cloudformation:ExecuteChangeSet</li>
  <li>cloudformation:UpdateStack</li>
  <li>s3:CreateBucket</li>
  <li>s3:HeadBucket</li>
</ul>
</ld-notice>

### App Registration

The configurations of the App Registration deployed by the Azure DevOps pipeline include:

- Enabling **Authentication** on a Single Page Application with the AWS CloudFront distribution URL of the application as the redirect URI.
- Enabling ID tokens in the **Implicit grant and hybrid flows** section of the **Authentication**.
- Enabling **Expose an API** with type set as *Admin* or *User* and scope value set as *Api.Access* or another relevant value.
- Adding the required **API Permissions** for Microsoft Graph and the exposed API. These are the *Delegated* permissions *email*, *offline_access*, *openid*, *profile*, *User.Read* and the *My API* permission to the scope value we set earlier when exposing our API. 

<ld-notice headline="Note" mode="warning">
All of the aforementioned permissions need to be granted by an admin of the Azure AD team.
</ld-notice>

### Service Principal (Enterprise Application)

The owner of the application can add additional owners in the **Owners** tab of the Enterprise Application. The application owners can grant or revoke application access to users or user groups. Owners can grant or revoke access to users or user groups, which will have access to the application after logging in, in the **Users and groups** tab of the Enterprise Application.

## Configure a Single Page Application

An example Single Page Application developed using React that utilizes Azure AD authentication can be found in the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) Azure DevOps Repository. 

### React

Aside from the application code, the authentication layer requires the utilization of the code found in the following JavaScript files.

- *[example/spa/react/src/App.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/App.js&version=GBmain&_a=contents)*

Provides a HTML code that returns the login information, the JWT token and an example function that calls the application's backend API using the JWT token. The AWS API Gateway URL of the API requires replacement.

- *[example/spa/react/src/authProvider.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/authProvider.js&version=GBmain&_a=contents)*

Provides the configuration of the MSAL package. The *authority* value needs to be replaced with the tenant's ID if different from the example one, the *clientId* value needs to be replaces with the App Registration's client ID and the *redirectUri* needs to be replaces with the AWS CloudFront URL of the after the application deployment.

- *[example/spa/react/src/index.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/index.js&version=GBmain&_a=contents)*

Provides the DOM to be rendered by React so that Azure AD authentication is required to access the application.

### CloudFormation Deployment

To deploy the CloudFormation stack of the Single Page Application, follow the steps below. The CloudFormation stack will be deployed on us-east-1 (N. Virginia) under the naming convention: *[Application Name]-[Environment]*. We deploy on us-east-1 (N. Virginia) due to the limitation of the combination AWS CloudFront and AWS WAF.

1. Clone the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) repository.
2. Copy the files found under the *example/spa* directory to your Factory project's repository.
3. Replace the values of *authority*, *clientID* and *redirectURI* in the file *[example/spa/react/src/authProvider.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/authProvider.js&version=GBmain&_a=contents)*.
4. Replace the value of *response* in the file *[example/spa/react/src/App.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/App.js&version=GBmain&_a=contents)*.

5. Replace the CloudFormation template's path and the `cd` command's path in the file *[example/spa/azure-pipeline.yml](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/azure-pipeline.yml)*.

<ld-notice headline="Note" mode="warning">
To replace the values of the aforementioned variables, follow the comments inside the files.
</ld-notice>

5. Push the files and inspect them on the Azure DevOps repository.
6. Navigate to *Pipelines* from the right panel and click *New pipeline*.
7. Click *Azure Repos Git* and then select your repository.
8. Click *Existing Azure Pipelines YAML file* and enter the path to the *azure-pipeline.yml* file of your repository.
9. Click *Run* to run the pipeline and and fill its parameters using the table guide below.

| Parameters   |      Required      |  Description | Example |
|:--------:|:-------------:|:-----:|:-----:|
| environment | Yes | The environment to deploy in: development, quality assurance, production. | dev |
| appName | Yes | The application's name. Will be registered as *uptimize-[appName]-[environment]* | auth-service |
| awsServiceConnection | Yes | The name of the Azure DevOps service connection of the project to the AWS account. | MyServiceConnection |

<ld-notice headline="Note" mode="warning">
The IAM Role used by the AWS service connection needs to include the following IAM policies.
<ul>
  <li>cloudformation:CreateChangeSet</li>
  <li>cloudformation:CreateStack</li>
  <li>cloudformation:DeleteChangeSet</li>
  <li>cloudformation:DescribeChangeSet</li>
  <li>cloudformation:DescribeStacks</li>
  <li>cloudformation:DescribeStackResources</li>
  <li>cloudformation:ExecuteChangeSet</li>
  <li>cloudformation:UpdateStack</li>
  <li>s3:CreateBucket</li>
  <li>s3:HeadBucket</li>
</ul>
</ld-notice>




### Security Best Practices

1. **Token Validation**
   - Verify token signature, audience, and issuer
   - Check token expiration

2. **HTTPS Only**
   - Use HTTPS for all authentication endpoints
   - Ensure redirect URIs use HTTPS

3. **Scope Management**
   - Request only necessary scopes
   - Implement proper authorization checks

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your domain is added to the allowed origins
   - Check that OPTIONS endpoints are properly configured

2. **Token Validation Failures**
   - Verify the audience and issuer values
   - Check that the signing keys are up to date

3. **Redirect Issues**
   - Ensure redirect URIs match exactly (including trailing slashes)
   - Verify the redirect URI is registered in Azure AD

### Getting Help

For technical issues or questions:

1. **Authentication Setup**: Raise an IT4U ticket with assignment group `Global_IDENTITY & ACCESS MGMT_SSO_L2`
2. **Implementation Help**: Contact your Lead Architect or Factory Administrator

---

# AWS and Foundry Connectivity
Foundry connectivity in UPTIMIZE enables data movement between AWS and Palantir Foundry bi-directionally. To serve a wide range of uses cases, the following sections guide you on best practices to select the most suitable data movement approach.

UPTIMIZE is supporting two major approaches: 
1. Moving data from [AWS to Foundry](./aws-to-foundry)
2. Moving data from [Foundry to AWS](./call-aws-services-from-foundry)

---

# AWS to Foundry

When moving data from AWS to Foundry, the trigger of your data movement sits in the AWS Factory. Foundry IO examples are documented in the the [UPTIMIZE Lab documentation](https://docs.uptimize.merckgroup.com/lab/data/how-to-read-and-write-data/#foundry-io-examples).

Example use cases are: 
* **Pull**: Reading data from Foundry
* **Push**: Writing data to Foundry

<strong>!Recommendation:</span></strong> Foundry DevTools is the recommended UPTIMIZE best practice, if you want to trigger the data movement from AWS to Foundry. 

Foundry DevTools has first class support for the OAuth2-based authentication method to Foundry. You can find code examples in the following guides.


## Prerequisites
To move data from AWS to Foundry, you will need:

|Where|Prerequisite|Description|
|---|---|---|
|**Palantir Foundry**|A Third Party Application (TPA)|For Factory Accounts with enabled Foundry Connectivity, the automation scripts will create and maintain a [Foundry Third Party Application](https://www.palantir.com/docs/foundry/platform-security-third-party/third-party-apps-overview/) OAuth2 client. The resource-based permissions of this client are restricted to the Foundry use case project associated with the use case.|
||A Foundry dataset|```dataset_rid = "ri.foundry.main.dataset.xxxxxx-xxxx-xxxx-xxxx-xxxx"```|
|**AWS**|Secret| `{environment}/FactoryBaseline/FoundryTPAToken`. The credentials of the OAuth2 client are stored in AWS Secrets Manager in your AWS Factory Account. AWS Resources that have the correct IAM permission policies attached (see next prerequisite step) can retrieve the secret and use it to interact with Foundry.| 
||IAM role permissions (Secret)| Example permissions are available below. Your IAM role needs to have appropriate permissions to retrieve the secret containing the TPA credentials from the AWS Secrets Manager.|
||IAM role permissions (S3 access)| Example permissions are available below. Your IAM role needs appropriate permissions to access your Factory S3 bucket or DataHub S3 bucket. **Note** Keep in mind that the S3 bucket policy needs to allow-list your IAM role to access the data.|
||VPC connection| An example VPC connection is available below. AWS services (Lambda, Glue or EC2) need to be deployed inside the Factory baseline VPC tagged with `u:resource-type: Baseline` to reach Palantir Foundry from a networking perspective. These VPCs are created with automation after your Factory request and are managed by the UPTIMIZE platform team. **Note:** Foundry connectivity is not enabled for any VPCs that you may deploy on your own.|

When requesting your Factory Environment using our [standard process](https://docs.uptimize.merckgroup.com/factory/prerequisites/), please request access to Palantir Foundry from your AWS Accounts (see screenshot below) in the use case extension object. This will ensure that during the automated account provisioning networking connectivity and a Foundry Third Party App (TPA) will be provisioned for you.

**![Extension Object Foundry](https://docs.uptimize.merckgroup.com/docs-assets/factories/extension_object_foundry.png)**

## UPTIMIZE Template Repository

Sample templates including CloudFormation and Azure DevOps pipelines to guide you through the following services are available in the [uptimize-aws-sample-templates](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates) repository. Templates and best practices are continuously being added (more to come soon).

### AWS Lambda
The following guide walks you through three different AWS compute options to move data to Foundry depending on your use cases. 
1. AWS Lambda
2. AWS Glue
3. AWS EC2

**![Moving data with AWS compute](https://docs.uptimize.merckgroup.com/docs-assets/factories/aws_foundry_lambda.png)**

Now let's dive into specific guides on how we can move data between the AWS Factory and Palantir Foundry with different AWS services, starting with Lambda. 

#### Creating an IAM role for Lambda 

When creating an IAM role for your Lambda functions, we recommend following least privilige principles. To do this, we need to configure the Lambda function with four permission policies. Let's start with AWS managed policies we can use. 1) ```AWSLambdaBasicExecutionRole``` for basic Lambda actions and 2) ```AWSLambdaVPCAccessExecutionRole``` for network actions. For AWS Secrets Manager and S3 access, we are definining two separate customer inline managed policies to ensure least privilige. 

As a best practice, we strongly recommend restricting the ```"Resource":``` property to the specific ARNs of your resources. 
Please replace ```"Resource:"```with the ```arn``` of your S3 buckets and secret. 

```yaml
Resources:
  LambdaFunctionRole:
    Type: AWS::IAM::Role
    Properties:
      Description: Lambda Function will use this role to access AWS Secrets Manager and S3 Buckets.
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
        - arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal:
              Service:
                - "lambda.amazonaws.com"
            Action:
              - "sts:AssumeRole"
      Policies:
        - PolicyName: S3AccessPolicy
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Sid: AllowLambaFullS3Access
                Effect: Allow
                Action:
                  - "s3:*"
                Resource:
                  - "arn:aws:s3:::your-factory-bucket/*"
        - PolicyName: ManageSecretPolicy
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Sid: GetSecretValue
                Effect: Allow
                Action:
                  - "secretsmanager:GetSecretValue"
                Resource:
                  - "arn:aws:secretsmanager:eu-central-1:{aws-account-id}:secret:dev/FactoryBaseline/FoundryTPAToken"
```

#### Configure Foundry DevTools Lambda layer  and VPC connection

When defining the Infrastructure as Code temlpate (CloudFormation, CDK, Terraform) for your Lambda function, replace the ```Layers:``` property with one of the provided [Foundry DevTools Lambda layers](#lambda-layers) that you want to use. To configure VPC connectitivy, replace the ```VpcConfig:``` properties with the ```SecurityGroupIds:``` and ```SubnetIds:``` of your Factory baseline VPC. To do that, navigate to the VPC service, then Subnet and Security groups and copy/paste the SubnetIds into your IaC template or set them as variables in your Azure DevOps pipeline. If you are using CloudFormation or CDK, you can also import these values dynamically by using the outputs of the ```stack-factory-baseline-vpc-{env}``` stacks. 

```yaml
Resources:
  FoundryConnection:
    Type: AWS::Lambda::Function 
    Properties:
      Code:
        S3Bucket: !Sub arn:aws:s3:::your-factory-bucket/*
      Role: !GetAtt LambdaIAMRole.Arn
      Handler: aws-foundry-lambda.lambda_handler
      Runtime: python3.9
      Architectures:
        - arm64
      Layers:
        - arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-9_arm64:2
      VpcConfig:
        SecurityGroupIds:
          - sg-xxxxxx
        SubnetIds:
          - subnet-xxxxxx
          - subnet-xxxxx
```

#### Authenticate to Foundry

In your Lambda code, authenticate to Foundry by using the Foundry TPA credentials that are stored in AWS Secrets Manager. Update ```SecretId= ``` with the name of your secret (e.g. ```dev/FactoryBaseline/FoundryTPAToken```)

```python
from foundry_dev_tools import FoundryRestClient
import boto3

session = boto3.Session()
client = session.client(
    "s3", config=Config(signature_version=UNSIGNED, connect_timeout=5, read_timeout=5)
)

secretsmanager = boto3.client("secretsmanager")
get_secret_value_response = secretsmanager.get_secret_value(
    SecretId="{environment}/FactoryBaseline/FoundryTPAToken"
)
credentials_dict = json.loads(get_secret_value_response["SecretString"])
foundry_client = FoundryRestClient(
        config={
            **credentials_dict,
            "grant_type": "client_credentials",
            "scopes": ["compass:view", "compass:edit"],
            "foundry_url": "https://palantir.mcloud.merckgroup.com"
        }
    )

```

**Write your Lambda code: Reading the iris dataset**


```python
import json
from foundry_dev_tools import FoundryRestClient
import os
import boto3
import pandas as pd
from io import BytesIO


environment = os.getenv('FACTORY_ENVIRONMENT', 'dev') # set via CloudFormation/Terraform
secretsmanager = boto3.client("secretsmanager")
get_secret_value_response = secretsmanager.get_secret_value(SecretId=f"{environment}/FactoryBaseline/FoundryTPAToken") 
credentials_dict = json.loads(get_secret_value_response["SecretString"])
foundry_client = FoundryRestClient(
        config={
            **credentials_dict,
            "grant_type": "client_credentials",
            "scopes": ["compass:view", "compass:edit"],
            "foundry_url": "https://palantir.mcloud.merckgroup.com"
        }
    )

def lambda_handler(event, context):
    tpa_user_info = foundry_client.get_user_info()
    df = pd.read_csv(BytesIO(foundry_client.download_dataset_file(
        # /Group Functions/mgf-use-case-uptimize-app-service-public-content/data/iris
        dataset_rid="ri.foundry.main.dataset.701f50c4-76be-4c29-80e9-9e1b7b1716ba",
        output_directory=None,
        foundry_file_path="iris.csv",
        view="master",
    )))
    print(df)
    return {
        'statusCode': 200,
        'body': json.dumps(tpa_user_info)
    }
```



### AWS Glue
Coming soon

### AWS EC2
Coming soon

### Foundry DevTools

#### Performance tests
For testing the data transfer performance of ```Foundry DevTools```, we chose the [GBIF](https://registry.opendata.aws/gbif/) dataset from AWS' Registry of Open Data.

- Size of dataset of total dataset **~3.2 TB**
- Size of subset used for performance test **~100 GB**. You can list the details of the subset with 
```aws s3 ls --no-sign-request s3://gbif-open-data-eu-central-1/occurrence/2021-04-13/ --recursive --human-readable --summarize``` from your CLI (No AWS account required) or [Browse the bucket](https://gbif-open-data-eu-central-1.s3.eu-central-1.amazonaws.com/index.html).

**Test results**
The following results show that AWS Lambda and AWS Glue data transfer based on ```Foundry DevTools``` scales linearly. 

**![Moving data with AWS compute](https://docs.uptimize.merckgroup.com/docs-assets/factories/aws_foundry_tests.png)**

| Data transferred in GB | AWS Lambda* (duration in min.) | AWS Glue** (duration in min.) |
|------------------------|-------------------------------|-----------------------------|
|                   0.98 |                         0.283 |                       0.283 |
|                    1.9 |                         0.583 |                       0.467 |
|                    9.1 |                         2.350 |                       2.033 |
|                   50.5 |                        13.367 |                      10.217 |
|                    100 |                               |                      21.867 |

*AWS Lambda config used: 10240 MB (10GB) of memory

**AWS Glue config used: Python Shell, 1 DPU. [A DPU](https://docs.aws.amazon.com/glue/latest/dg/add-job-python.html) is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory 

**Limitations and Recommendations** 
- AWS Lambda has a maximum timeout of 15 minutes. Given this timeout limitation, you can transfer ~50GB of data with the shown configuration in a single AWS Lambda function. Lambda is well suited for serverless applications, event-based architectures and runs much faster for smaller tasks. If you still want to transfer more data than that, you can configure Lambda concurrency and distributing the load across multiple Lambda functions or choose AWS Glue, if you prefer to have a scheduled type of compute alternative.
- AWS Glue has a much higher maximimum timeout of 2,880 minutes (48 hours) because it is a Data Integration tool intended for longer running jobs. Glue jobs which take longer to initialize due to the fact that it's using distributed processing.

#### Lambda Layers

The following layers are shared from the central-deployment-account (791680346816) for usage with all accounts within the UPTIMIZE organization.

<!-- managed by pipeline - don't edit -->

| Version ARN                                                                   | Runtime   | Architecture | Foundry DevTools Version |
|-------------------------------------------------------------------------------|-----------|--------------|--------------------------|
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-10_arm64:38 | python3.10 | arm64 | 2.1.23 |
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-11_arm64:12 | python3.11 | arm64 | 2.1.23 |
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-12_arm64:12 | python3.12 | arm64 | 2.1.23 |
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-10_x86_64:39 | python3.10 | x86_64 | 2.1.23 |
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-11_x86_64:12 | python3.11 | x86_64 | 2.1.23 |
| arn:aws:lambda:eu-central-1:791680346816:layer:foundry-dev-tools_3-12_x86_64:12 | python3.12 | x86_64 | 2.1.23 |
<!-- end managed by pipeline -->

---

# Call AWS services from Foundry

The following is an example of how to set up AWS service calls from Foundry, in this case [AWS Textract](https://aws.amazon.com/de/textract/). 
While AWS Textract is available through the [UPTIMIZE NLP APIs](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/aws_ml_services/#3.-aws-textract-api), the endpoint only supports synchronous calls.
This example uses [Textractor](https://github.com/aws-samples/amazon-textract-textractor?tab=readme-ov-file) to make asynchronous calls to Textract, which requires access to the AWS Security Token Service (STS), AWS Textract, and an S3 Bucket.

## Prerequisites

To follow this guide, you will need:

- A Foundry project
- An AWS Factory account with [Factory Admin](https://docs.uptimize.merckgroup.com/factory/access-training/#admin-roles) access

<ld-notice headline="Note" mode="warning">
When implementing this guide, please always replace template variables with the correct values for your use case.   
</ld-notice>

## Create OpenID Connect (OIDC) identity provider

Start by creating an OIDC identity provider either through the AWS Management Console or using a CloudFormation template. Choose one of the following methods:

<details>
<summary>Using the AWS Management Console</summary>
<br>

<ol>
  <li>Navigate to the AWS Management Console</li>
  <li>Go to IAM > Identity Providers > Add provider</li>
  <li>Configure the following settings:
    <ul>
      <li>Provider type: OpenID Connect</li>
      <li>Provider URL: <code>https://pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry</code></li>
      <li>Audience: <code>sts.amazonaws.com</code></li>
    </ul>
  </li>
  <li>Click "Add provider"</li>
</ol>

</details>

<details>
<summary>Using CloudFormation</summary>
<br>

<p>Create a new CloudFormation stack using the following template:</p>

<pre><code class="language-yaml">AWSTemplateFormatVersion: '2010-09-09'
Description: Setup OIDC Provider

Resources:
  FoundryOIDCProvider:
    Type: AWS::IAM::OIDCProvider
    Metadata:
      cfn-lint:
        config:
          ignore_checks:
            - E3003
    Properties:
      Url: 'https://pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry'
      ClientIdList:
        - 'sts.amazonaws.com'  

Outputs:
  OIDCProviderArn:
    Description: ARN of the OIDC Provider
    Value: !GetAtt FoundryOIDCProvider.Arn
    Export:
      Name: FoundryOIDCProviderArn # Name to export so other stacks can import it
</code></pre>

</details>

## Create IAM Role for Foundry Access

Next, create an IAM role that allows Foundry to access your AWS resources.
This role uses the OIDC provider for authentication and grants specific permissions to access S3 buckets and the Textract service (`textract:*`).

<details>
<summary>Using CloudFormation</summary>
<br>
<p>Define the IAM role using the following CloudFormation template:</p>

<pre><code class="language-yaml">AWSTemplateFormatVersion: '2010-09-09'
Description: OIDC Role for Foundry Access

FoundryBucketAccessRole:
  Type: AWS::IAM::Role
  Condition: IsBatchRegion
  Properties:
    AssumeRolePolicyDocument:
      Statement:
        - Action:
            - sts:AssumeRoleWithWebIdentity
          Effect: Allow
          Condition:
            StringEquals:
              "pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry:aud": "sts.amazonaws.com"
              "pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry:sub": !Ref FoundrySource
          Principal:
            Federated:
              - !Ref FoundryOIDCProvider
      Version: "2012-10-17"
    Path: /
    Policies:
      - PolicyName: 'S3DatabaseAccess'
        PolicyDocument:
          Version: '2012-10-17'
          Statement:
            - Effect: Allow
              Action:
                - "s3:ListBucket"
              Resource:
                - !Sub "arn:aws:s3:::${AWS::StackName}-${AWS::AccountId}-${AWS::Region}"
            - Effect: Allow
              Action:
                - "s3:*Object"
              Resource:
                - !Sub "arn:aws:s3:::${AWS::StackName}-${AWS::AccountId}-${AWS::Region}/job-inputs/*"
            - Effect: Allow
              Action:
                - "textract:*"
              Resource: "*"
</code></pre>

<p>This role configuration:</p>
<ol>
  <li>Uses the OIDC provider for authentication through <code>AssumeRoleWithWebIdentity</code></li>
  <li>Grants permissions to list the contents of the specified S3 bucket</li>
  <li>Allows full object operations (<code>s3:*Object</code>) on objects within the <code>job-inputs/</code> directory</li>
  <li>Provides full access to AWS Textract services (<code>textract:*</code>) - this is essential for making Textract API calls from Foundry</li>
  <li>Uses CloudFormation pseudo parameters (<code>AWS::StackName</code>, <code>AWS::AccountId</code>, <code>AWS::Region</code>) to construct the resource ARNs</li>
</ol>

<ld-notice headline="Note" mode="warning">
Make sure to replace <code>FoundrySource</code> with the appropriate Foundry source identifier <code>ri.magritte..source.00000000-0000-0000-0000-000000000000</code> in your environment.
</ld-notice>

</details>

## Create Foundry Data Connection

Open the Data Connection app on Foundry and click `+ New Source` to add a new Data Connection. Pick `S3`, click `Continue` and choose `Direct Connection`:

* Name your connection and choose a location (e.g. inside of your project) and click `Continue`
* Connection settings:
   * URL: e.g. `s3://textract-bucket` (URL of the S3 bucket you Textract data will be processed)
   * S3 endpoint: `s3.eu-central-1.amazonaws.com`
   * Region: `eu-central-1`
* Credentials: `OpenID Connect`
* Network connectivity: Add the following egress policies. You will need to open a Foundry issue to request permissions for their addition (see below).
   * `textract.eu-central-1.amazonaws.com` (Port 443)
   * `sts.eu-central-1.amazonaws.com` (Port 443)
   * `textract-bucket.s3.eu-central-1.amazonaws.com` (Port 443)
* Choose `(+) More options` add and STS Role:
   * Role ARN `arn:aws:iam::116981779238:role/foundry-oidc-role-...` (ARN of the role created above)
   * Role session name: _can be anything_
   * Role session duration: _cannot exceed 3600_
   * External Id: _leave blank_
   * STS endpoint: `https://sts.eu-central-1.amazonaws.com`
* Click `Save and continue`
* Configure an output folder if necessary and click `Continue`
* You cannot modify anything beyond this point so just `Continue`, `Continue`, and `Explore`


## Add Egress Policies
Now, open a Foundry Issue and request the addition of the egress policies
<ul>
  <li><code>textract.eu-central-1.amazonaws.com</code> (Port 443)</li>
  <li><code>sts.eu-central-1.amazonaws.com</code> (Port 443)</li>
  <li><code>textract-bucket.s3.eu-central-1.amazonaws.com</code> (Port 443)</li>
</ul>
and the following permissions for the Data Connection:
<ul>
  <li><i>Enable exports to this source</i></li>
  <li><i>Allow this source to be imported into code repositories</i></li>
  <li><i>Allow this source to be imported into pipelines for UDFs</i> (if applicable)</li>
</ul>

Note that a <a href="https://www.palantir.com/docs/foundry/administration/configure-egress#amazon-s3-bucket-policies">VPC endpoint must be configured</a> by the Foundry admins when the s3 bucket egress policy is created.

## Call Textract from Code Repositories

```python
import polars as pl
from textractor import Textractor
from transforms.api import (
    transform,
    Input,
    Output,
    lightweight,
    LightweightOutput,
    LightweightInput,
)
from transforms.external.systems import external_systems, Source, ResolvedSource

@lightweight
@external_systems(
    aws_source=Source("ri.magritte..source.00000000-0000-0000-0000-000000000000")
)
@transform(
    input_uris=Input("/path/to/s3/uri/dataset"),
    chunked_outputs=Output("/path/to/output/dataset"),
)
def compute(
    aws_source: ResolvedSource,
    input_uris: LightweightInput,
    chunked_outputs: LightweightOutput,
):
    # Get temporary AWS credentials
    aws_creds = aws_source.get_aws_credentials()
    creds = aws_creds.get()
    
    # Set environment variables
    os.environ["AWS_ACCESS_KEY_ID"] = creds["access_key_id"]
    os.environ["AWS_SECRET_ACCESS_KEY"] = creds["secret_access_key"]
    os.environ["AWS_SESSION_TOKEN"] = creds["session_token"]
    os.environ["AWS_DEFAULT_REGION"] = region_name
    os.environ["AWS_REGION"] = region_name

    # Setup s3 and textractor clients
    s3 = boto3.client('s3')
    textractor = Textractor()

    # Use textractor to make async calls to AWS Textract
    ...
```

---

# Datahub
The UPTIMIZE Datahub consists of dedicated S3 Buckets to store, discover, and share data across the UPTIMIZE ecosystem.
1. [Overview](./datahub-overview)
2. [Data Catalog](./data-catalog)

---

# Datahub Overview

The Uptimize Datahub consists of dedicated S3 Buckets to store, discover, and share data across the Uptimize ecosystem.

## Architecture
The Datahub follows a 3-tiers architecture (i.e. Dev/QA/Prod). The Buckets which compose the
Datahub are also isolating data according to:
- its GxP status:
  - `gxp` for GxP qualified use cases
  - `nreg` for non regulated use cases
- its maturity level:
  - `raw` for raw and cleaned data
  - `ed` for enterprise data

### Raw data buckets
`raw` buckets contains two types of data: raw and cleaned.
Raw data sits inside the `raw` folder in S3. Those are direct dumps from any datasource, in raw format (i.e. a format that
is as close to the one used by the datasource as possible), for example: `.csv`, `.pdf`, `.parquet`, `.json`.
Cleaned data is located in the `cleaned` folder in S3. Cleaned data is consolidated, cleaned, formatted data in `.parquet` format.
Cleaned data can be shared across the organisation.

### Enterprise data buckets
`ed` (short for "Enterprise data") buckets contain data _created by use cases_, which offers added value and can be shared
with other teams. It is located in the `ontology` folder in the `ed` buckets. Format should be `.parquet`. Access is requested
using the DTI in Foundry - via a Data Access Request. Low level access management for Data Owners is made via SNOW tickets to
the Uptimize AWS team.

### Ingesting data
The only way to ingest data from external sources into the datahub is through the ingestion accounts (see the [Ingestion page](https://docs.uptimize.merckgroup.com/factory/ingestion/)).
Data that comes into the Datahub _must_ land in the `raw` folders. Data that comes from the datahub can however be processed, transformed
and/or promoted to cleaned/enterprise data from factories.

### Cleaning data
To promote data from `raw` to `cleaned`, you are required to create a job in an ingestion account that consolidates/cleans/... `raw` data
and creates `.parquet` files in the `cleaned` folder. This step is optional if the data ingested in the `raw` folder is already
in good shape - for example if you are dumping whole tables into `.parquet` files directly - or if you are using unstructured
data that cannot be formatted in `.parquet`, like image data or PDFs. In case a dataset does not need to be transformed to match
the requirements for the `cleaned` folder, S3 replication can be use to sync the `raw` and the `cleaned` folder.

### Creating Enterprise data
For now Enterprise data should only come from Factory accounts, when the use case teams consider the data they create
can be useful for other teams. Whether to promote data to Enterprise data is discussed during the architecture
review.

![Dataflow architecture](/assets/dataflow-architecture.png)

If promoting data from one stage to another for your project consists in copying the files, you can use S3 Replication
instead of using (and maintaining) a Glue job.

#### S3 Replication example

You can use the following template as a base to setup S3 Replication.

```yaml
S3Bucket:
  Type: AWS::S3::Bucket
  DeletionPolicy: Retain
  Properties:
    BucketName: !Ref BucketName
    AccessControl: Private
    PublicAccessBlockConfiguration:
      BlockPublicAcls: true
      BlockPublicPolicy: true
      IgnorePublicAcls: true
      RestrictPublicBuckets: true
    VersioningConfiguration:
      Status: Enabled
    ReplicationConfiguration:
      Role: !GetAtt S3ReplicationRole.Arn
      Rules:
        - Destination:
            Bucket: !Sub arn:aws:s3:::${DataHubBucketName}
            AccessControlTranslation:
              Owner: Destination
            Account: !Ref DataHubAccountId
          Prefix: !Sub "${PrefixToSync}"
          Id: ReplicationToDataHubBucket
          Status: Enabled

S3ReplicationRole:
  Type: AWS::IAM::Role
  Properties:
    RoleName: !Sub
      - '${AWS::AccountId}-${S3ReplicationRoleName}'
      - S3ReplicationRoleName: !Ref S3ReplicationRoleName
    AssumeRolePolicyDocument:
      Version: '2012-10-17'
      Statement:
        - Effect: Allow
          Principal:
            Service: s3.amazonaws.com
          Action: sts:AssumeRole
    Path: /
    Policies:
      - PolicyName: AllowCrossAccountReplication
        PolicyDocument:
          Statement:
            - Effect: Allow
              Action:
                - 's3:ListBucket'
                - 's3:GetObject'
                - 's3:GetBucketAcl'
                - 's3:GetBucketLocation'
                - 's3:GetReplicationConfiguration'
                - 's3:GetObjectVersionForReplication'
                - 's3:GetObjectVersionAcl'
                - 's3:GetObjectVersionTagging'
                - 's3:GetObjectRetention'
                - 's3:GetObjectLegalHold'
              Resource:
                - !Sub arn:aws:s3:::${BucketName}/*
                - !Sub arn:aws:s3:::${BucketName}
                - !Sub arn:aws:s3:::${DataHubBucketName}
                - !Sub arn:aws:s3:::${DataHubBucketName}/*
            - Effect: Allow
              Action:
                - 's3:List*'
                - 's3:*Object'
                - 's3:PutObjectAcl'
                - 's3:ReplicateObject'
                - 's3:ReplicateTags'
                - 's3:GetObjectVersionTagging'
                - 's3:GetBucketVersioning'
                - 's3:ObjectOwnerOverrideToBucketOwner'
              Resource:
                - !Sub arn:aws:s3:::${DataHubBucketName}
                - !Sub arn:aws:s3:::${BucketName}/*
                - !Sub arn:aws:s3:::${DataHubBucketName}/*
```

## Naming conventions

### Buckets

The S3 Buckets are named using the following structure:
`dh-${Stage}-${QualificationStatus}-confi-${DataStage}-s3`
With:
- `Stage`:
  - `d`: dev
  - `qa`: qa/val
  - `p`: prod
- `QualificationStatus`:
  - `gxp`: gxp qualified data and use cases
  - `nreg`: non regulated data and use cases
- `DataStage`:
  - `raw`: raw and cleaned data
  - `ed`: enterprise data

Therefore, the following 12 S3 Buckets are available in the Datahub:
- Dev:
  - `dh-d-gxp-confi-ed-s3`
  - `dh-d-gxp-confi-raw-s3`
  - `dh-d-nreg-confi-ed-s3`
  - `dh-d-nreg-confi-raw-s3`
- QA:
  - `dh-qa-gxp-confi-ed-s3`
  - `dh-qa-gxp-confi-raw-s3`
  - `dh-qa-nreg-confi-ed-s3`
  - `dh-qa-nreg-confi-raw-s3`
- Prod:
  - `dh-p-gxp-confi-ed-s3`
  - `dh-p-gxp-confi-raw-s3`
  - `dh-p-nreg-confi-ed-s3`
  - `dh-p-nreg-confi-raw-s3`

### Folder structure
The prefixes naming schema for use case data is as follows: `data/${Confidentiality}/uc-${UseCaseName}/${MaturityLevel}/`  
whereas data that is ingested must be located in a prefix like: `data/${Confidentiality}/ds-${DataSourceName}/${MaturityLevel}/`  
With:
- `Confidentiality`:
  - `confi` for confidential data
  - `int` for internal data
- `UseCaseName`:
  - The name of the use case (i.e. same as the factory name). All lowercase, hyphen separated words.
    - For instance: `post-payment-checks` or `app-service`
- `DataSourceName`:
  - The name of the source of the data that is ingested in the bucket. All lowercase, hyphen separated words.
    - For instance: `lims`, `glims`, `trackwise`, `sap-concur`
- `MaturityLevel`:
  - In the `raw` buckets:
    - `raw` for raw data
    - `cleaned` for cleaned data
  - In the `ed` buckets:
    - `ontology` for enterprise/ontology data

Examples:
- In the `raw` buckets:
  - `data/confi/ds-lims/raw` is a valid prefix for data created by an ingestion job sourcing confidential data from the LIMS database
  - `data/int/ds-glims/cleaned` is a valid prefix for data created by a cleaning job moving internal data coming from the GLIMS database
- In the `ed` buckets:
  - `data/confi/uc-post-payment-checks/ontology` is a valid prefix for confidential data created by a use case job

## Access
Low level data access in S3 is managed through allow-listed AWS IAM Roles.

### Cross Data Source Access Process
To access data source prefixes from external teams or use cases, the following IT4U ticket process must be followed:

#### Required Information
All access requests must include:
- **Data Source Prefix**: Full S3 prefix path (e.g., `data/confi/<datasource name>/cleaned/`)
- **IAM Role ARN**: Complete role identifier that will access the data
- **Data Source Owner**: Approval from the data source owner
- **Business Justification**: Clear explanation of the access requirement
- **Access Type**: Read-only or Read-Write permissions

#### IT4U Ticket Template
```
Subject: DataHub Access Request - [Data Source] - [Team Name]

Data Source: [e.g., lims, glims]
Prefix: [Full S3 prefix path]
IAM Role: [arn:aws:iam::account:role/role-name]
Access Type: [Read-Only/Read-Write]
Environment: [Dev/QA/Prod]
Data Source Owner: [Name and contact - REQUIRED]
Justification: [Business need explanation]
```

**Note**: Read access will be provided to access any data source prefix from teams other than the data source owner, subject to data source owner approval and business justification.

For bucket details of all 3 environments, please refer to [the following 12 S3 Buckets are available in the Datahub](#buckets).


### Ingestion
Ingestion accounts regroup jobs to ingest new data and promote data to the `cleaned` folder.
Ingestion accounts roles have read/write access to selected `raw`/`cleaned` folders.
For more details about the ingestion process, consult the [Ingestion page](https://docs.uptimize.merckgroup.com/factory/ingestion/).

### Factory
Factory accounts roles can read from selected `raw`/`cleaned`/`ontology` folders and optionally write to `ontology` folders
if they produce Enterprise data.

### Roles Guidelines
Roles that will be used to access the Datahub should meet the following criteria:
- The roles should have a name. There is no strict naming convention yet but a good starting point would be: `allow-{sector}-{aws-service}-{ingestion/cleaning}-ds-{datasource}-uc-{usecase}-role`, for instance:
  - `allow-hc-glue-ingestion-ds-lims-uc-ppc-role`
  - `allow-mgf-lambda-cleaning-ds-glims-uc-ppc-role`
- As a rule of thumb, a role should be deployed once. To change the permissions of a role internally, a use case team can
  attach policies and edit them dynamically.
```yaml
SampleGlueIngestionRole:
  Type: AWS::IAM::Role
  Properties:
    AssumeRolePolicyDocument:
      Statement:
        - Effect: "Allow"
          Principal:
            Service:
              - "glue.amazonaws.com"
          Action:
            - "sts:AssumeRole"
    RoleName: allow-hc-glue-ingestion-ds-lims-uc-ppc-role
SampleGlueIngestionRolePolicy:
  Type: AWS::IAM::Policy
  Properties:
    PolicyDocument:
      Version: "2012-10-17"
      Statement:
        - Effect: Allow
          Action:
            - s3:GetObject*
            - s3:GetBucket*
            - s3:List*
            - s3:DeleteObject*
            - s3:PutObject*
          Resource:
            - !Sub ${S3Bucket.Arn}/data/confi/ds-lims/uc-ppc/*
    Roles:
      - !Ref SampleGlueIngestionRole
```
  This requirement comes from AWS, which creates a unique ID for each role when directly referencing them cross-account. If a role
  is deleted and created again, its ID changes and is not referenced by the other accounts anymore. Even though the Datahub is
  not directly referencing roles it is still preferable to be aware of that caveat and be careful when deploying roles.
  Please note that we are using S3 Access Points to facilitate access management. You will need either an S3 bucket ARN
  or an Access Point ARN - which can be use interchangeably in common use cases - in both your Roles policies and code.

For ready to use IAM Roles Cloudformation templates, please have a look at the [uptimize-aws-sample-templates repo](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/uptimize-aws-sample-templates?path=/src/05_s3_and_iam).

### Policies
The following policies are applied to all the Datahub buckets:
- Public access is blocked
- Data access is logged
- Encryption at rest (AES256) and in transit are enforced
- Bucket ownership must be set to `bucket-owner-full-control`

In order to push data to any bucket the following flags must be used:
- `ServerSideEncryption=AES256`
- `ACL='bucket-owner-full-control'`

otherwise an `AccessDenied` error will be returned by S3.

#### Python (`boto3`) example:
```python
s3.Bucket(bucket_name)
    .put_object(
        Key=file_location,
        Body=data,
        ServerSideEncryption="AES256",
        ACL="bucket-owner-full-control"
    )
```

#### CLI example:
```bash
aws s3 cp ./myfile.png s3://dh-d-gxp-confi-ed-s3/path/to/file.png \
  --profile sandbox-admin \
  --sse AES256 \
  --acl bucket-owner-full-control
```

## Mapping with Foundry processes
We aim to use processes that are identical or very similar to what is happening on the Foundry side.

We do not expect non-ontology (non-DTI) data sets to be shared across the organization for now - as we don't have ingestion
teams to back them. Therefore, this whole process is meant to be used for ontology layer only.

### DTI
DTIs must be created in Foundry to list _ontology_ data items that are present in AWS, by using the "AWS S3 folder link"
field. This can be done to a Foundry DTI that is not assigned to any project.

If a dataset contains the _exact same data_ across Foundry and AWS (using some kind of replication mechanism), it
can be mapped to a single DTI in Foundry. Otherwise, it is recommended to create two separate DTIs.

Datasets inside the datahub can have Read-Only and Read-Write permissions.

### Data Ingestion Requests (DIR)
To ingest new data inside the Uptimize AWS Datahub, users must go through the DIR process in Foundry, specifying that the 
data will be ingested in AWS using the "UPTIMIZE AWS (special cases only)" parameter in the request form. This is valid
for both Use Case (Project) data sets and Ontology (DTI) datasets.

We follow the process that is already defined in Foundry to ensure compliance, and facilitate onboarding of new users in 
the AWS platform.

Since there are no dedicated ingestion teams, the users requesting Data Ingestion will be responsible for the ingestion. The process
is the same as the one to ingest data into Foundry, except for the following 3 steps:
- Ingestion In Progress
- Ingested 
- Verified 

The requesters are asked to fulfill these steps themselves.
![Dataflow architecture](/assets/datahub/data-ingestion-request-flow.png)

### Data Access Requests (DAR) and Data Enhancement Requests (DER)
DARs and DERs are requests to be performed on DTIs in Foundry - we expect to have such requests only for datasets in the 
ontology layer of the datahub. As for the DIRs, we re-use the existing Foundry process except for the steps that are 
AWS Specific:
- For DER:
  - Enhancement in Progress 
  - Enhanced
  - Verified
- For DAR:
  - Once the Request is approved, a SNOW ticket must be created by the user responsible for the DTI. The path to the data,
    the role that will be used to access the data, the stage (dev/qa/prod), as well as the type of access (read only, read-write, or s3 replication)
    must be provided in the ticket.

---

### How to access S3 from On-premises/VPN
VPC Interface endpoints (for S3) is used to establish connectivity to S3 buckets from on-premises. Interface endpoints extend the functionality of gateway endpoints by using private IP addresses to route requests to Amazon S3 from within on premises applications/tools.

#### S3 AccessPoint Approach
Recommended method to access data storage is through S3 AccessPoints. Each of these AccessPoints are dedicated to usecase and has its own policy which helps in better access management for large, shared data sets on a bucket.
AccessPoint is configured in two ways : 
- With 'NetworkOrigin' as VPC, which means access request originating from a specific VPC. 
- With 'NetworkOrigin' as  'Internet' i.e. access request routing is via Internet.

Recommended Accesspoint type is with VPC 'NetworkOrigin' as its more secured.

** In case any on-premises application/tools do not support VPC 'NetworkOrigin' (for example some tools would not have the options to configure the VPC Endpoint URL), then AccessPoint with 'Internet' origin can be considered.

#### On-premises Applications Not Supporting  S3 AccessPoint Approach
If an on-premises application does not support S3 AccessPoints, we can consider providing access via S3 bucket policy. The factory/use-case user will be provided access to the required folder in datahub bucket.

#### VPC Interface Endpoint Reference
Use-case teams can setup their own VPC Interface endpoint for S3. In Case they intend to use central Network VpcConfiguration (to access datahub) then configuration details are as below :
- DEV
  - vpcId           :  `vpc-0f2f52769cf4649d7`
  - S3 endpoint url :  `*.vpce-0b787f1d3215b9234-gw4wknj2.s3.eu-central-1.vpce.amazonaws.com`
- VAL
  - Vpcid           : `vpc-0f3184fa36e893e71`
  - Endpoint URL    : `*.vpce-045f3ca0a51e5c07d-e85ex9p4.s3.eu-central-1.vpce.amazonaws.com`
- PROD
  - Vpcid           : `vpc-0e527e27f98c08861`
  - Endpoint URL    : `*.vpce-0ccdbe97e9d27d90b-4s0q9yxs.s3.eu-central-1.vpce.amazonaws.com`

#### Testing Connectivity To S3 via AccessPoint From awscli (using accesspoint and VPC endpoint url)

- using accesspoint ARN reference:
`aws s3api list-objects-v2 --bucket <access point arn> --region eu-central-1 --endpoint-url https://accesspoint.vpce-0b787f1d3215b9234-gw4wknj2.s3.eu-central-1.vpce.amazonaws.com --profile <name>`

- using accesspoint ALIAS reference:
`aws s3api list-objects-v2 --bucket <access point alias> --region eu-central-1 --endpoint-url https://bucket.vpce-0b787f1d3215b9234-gw4wknj2.s3.eu-central-1.vpce.amazonaws.com --profile <name>`

#### Usecases Examples

- SAP BODS/ Uptimize S3 Bucket (via Ingestion Account):  
Connection established between BODS and Uptimize ingestion account using VPC endpoint URL and S3 AccessPoint with NetworkOrign as "VPC". Configuration as below-
![bodsconnection screenshot](/assets/datahub/bods-connection.png)

- Connectivity to Datahub using goAnywhere MFT Tool: 
goAnywhere MFT tool do not support accesspoint with NetworkOrign as "VPC". Connectivity established using accesspoint with NetworkOrign as 'Internet'. Details as below-
![goanywhere screenshot](/assets/datahub/goanywhere-connection.png)

---

## Data Catalog
We use the AWS Glue Data Catalog to catalog and structure datasets.

All the glue tables in the AWS Glue Data Catalog are also synchronized to Uptimize Data Central
once a day and represented as datasets with data source value of "UPTIMIZE AWS".
[Here](https://datacentral.uptimize.merckgroup.com/explorer/search?type=dataset&connectionName=UPTIMIZE%20AWS)
you can see the datasets synchronized from Uptimize AWS Datahub Prod Glue Catalog to Uptimize Data Central.

### Glue Catalog Resources
Datasets are referred to as "Glue Tables" and those tables must be regrouped into "Glue Databases".
The Glue catalog then allows users to browse through Databases and Tables to look for existing datasets and their schemas.

#### Glue Tables
A Glue Table represents a single dataset, for example an SQL Table, a collection of images, PDF, ...
Glue Tables names must be prefixed with the data stage they represent (`raw_`, `cleaned_`, `ontology_`).
Tables should have a description, an S3 Location, and a Schema that lists columns and their data types. This can be done
manually through creating an `AWS::Glue::Table` resource in Cloudformation, or automatically using Glue Crawlers
(see "Managing Data Catalog entries" below).

Every glue table will be represented in Uptimize Data Central as a dataset. Only datahub prod account tables will be shown in
Uptimize Data Central. Tables will be synchronized once a day to Uptimize Data Central.

#### Glue Databases
Glue Databases are a way of regrouping Glue Tables. Their names are generated for you and passed as parameters to the
Cloudformation templates (see "Managing Data Catalog entries" below). The generated names already contain the qualification (`nreg/gxp`)
and the stage (`d/qa/p`) of the data. Glue Databases must point to the location of the data on S3  through the `S3 Location` field.
Their description must contain the full name and user principal name(e.g `User Name <m12345@domain.merckgroup.com>`) of the data owner(s),
the business data steward(s) and the technical data steward(s) for the datasets and a text description of the contents of the Database.

The data owner(s), business data steward(s) and technical data steward(s) will be scraped from the database description
and synchronized to Uptimize Data Central once a day. All the tables under the same database will be marked with same data owner(s),
business data steward(s) and technical data steward(s). These roles should not be edited on Uptimize Data Central, otherwise the synchronization
will override the roles with the people specified in the glue catalog database description.

For further information regarding individual roles please visit
[Uptimize Data Central user docs](https://docs.uptimize.merckgroup.com/data-central/roles-responsibilities/).

Similarly the GxP and the Information Classification properties of the datasets in Uptimize Data Central are set based on the location uri
value of the glue catalog database. These properties too are set with same value for all the member tables of a database. These properties
should not be edited on Uptimize Data Central, otherwise it the synchronization will override the value.

#### Glue Crawlers
Rather than manually describing the schema, location, names (and prefixes) for each table in a Glue Database, you can
use Glue Crawlers. Glue Crawlers are jobs that - given an S3 Location, a Glue Database, a name, a table prefix, and a chron-like
schedule - automatically detect new tables, schemas, location and map them to a Glue Database.
Glue crawlers names must include the database name as a prefix. A good name would be: `<databasename>-crawler-<datastage>`
(i.e. `raw`, `cleaned`, `ontology`). Note that the Database name is provided as a Cloudformation parameter.

### Data Catalog structure
Glue Databases should be created within the following framework:
- Databases must regroup related data:
  - Datasets/tables/... that are ingested from the same data source (SQL Database, API, ...) must land into the same Glue Database
  - Datasets produced by a Use Case should land into the same Glue Database
- A single Database should regroup all related data from the same Bucket - there should be one Database for the `raw` Bucket
  and one for the `ed` Bucket (if applicable) that cover the same Data source or Use case.

You can then create as many Glue Tables as needed to map your datasets inside a Glue Database.

#### Example
Let us consider the following sample NREG use case, named "concur-reports":   
The use case uses the SAP Concur API to access two Resources (`User` and `Expense`). In an ingestion account, the data from Concur is directly 
dumped into the `raw` S3 folder. It is then cleaned, aggregated and moved to the `cleaned` folder.
From the use case's Factory account, the data is then transformed into a dataset called `Reports`, and pushed to the ontology.

We can derive the following paths and names from the prompt above:
- The data source is the SAP Concur API, from which both Raw and Cleaned datasets are created
  - The ingested (raw) data should be dumped into the `s3://<NregRawBucket>/data/confi/ds-concur/raw` folder
  - The cleaned data should be dumped into the `s3://<NregRawBucket>/data/confi/ds-concur/cleaned` folder
  - There must be a first Glue Database which uses `s3://<NregRawBucket>/data/confi/ds-concur/` as S3 Location.
  - Two crawlers can be created: the first one is called `<database-name>-crawler-raw`, which points to the `s3://<NregRawBucket>/data/confi/ds-concur/raw`
    folder and will create tables prefixed with `raw_`. the second one is called `<database-name>-crawler-cleaned`, which points to the
    `s3://<NregRawBucket>/data/confi/ds-concur/cleaned` folder and will create tables prefixed with `cleaned_`.
  - Two `raw_` tables (`raw_users` and `raw_expenses`) will be created by the first crawler.
  - Two `cleaned_` tables (`cleaned_users` and `cleaned_expenses`) will be created by the second crawler.
  - All four tables will be grouped inside the same Glue Database.
- The use case ontology data - created by the Factory account - will be created inside the `ed` Bucket
  - The dataset is dumped into the `s3://<NregEdBucket>/data/confi/uc-concur-reports/ontology` folder
  - There must be a second Glue Database which uses `s3://<NregRawBucket>/data/confi/uc-concur-reports/` as S3 Location.
  - One crawler must be created, its name is `<database-name>-crawler-ontology`, it points to the `s3://<NregEdBucket>/data/confi/uc-concur-reports/ontology`
    location and will create a table prefixed with `ontology_`.
  - One table will be created by the crawler: `ontology_reports`

> Note: table names are created by the crawlers, which can be configured to use a single prefix for all the tables detected
> in their configured folder. we assume that subfolders called `users`, `expenses` and `reports` are created by the
> ingestion, cleaning, and factory jobs

> Note: Not all use cases must create ontology data, this is an dummy example that covers all the stages

> Note: For that specific use case, as database names are generated and passed to your cloudformation templates by the automation,
> you would have to create one Glue Catalog repository for the concur raw dumps and one Glue Catalog repository for the concur-reports ontology data
> see "Managing data catalog entries" below


### Accessing the catalog
In order to access the catalog, end users can go to the [Uptimize AWS landing page](https://d-99672e18db.awsapps.com/start#/) and log into
the following accounts:
- Dev:
  - Account name: ec1-da-d-datalakestorage-gxp-00005
  - Permissions set name: GlueCatalogReadonly-dev
- QA:
  - Account name: ec1-da-q-datalakestorage-gxp-00020
  - Permissions set name: GlueCatalogReadonly-qa
- Prod:
  - Account name: ec1-da-p-datalakestorage-gxp-00028
  - Permissions set name: GlueCatalogReadonly-prod

> Note: those permissions sets are granted to all factory and ingestion accounts users. If you don't have access
> to them, please open a SNOW ticket mentioning your factory name or ingestion sector. We are slowly rolling out permission
> sets to existing factory/ingestion users. If you are not part of any of those groups, mention it in the ticket as well.

You can then navigate to "AWS Glue->Data Catalog->Databases":
![databases screenshot](/assets/datahub/datacatalog-databases.png)

Clicking on a Database lists all its Tables:
![tables screenshot](/assets/datahub/datacatalog-tables.png)

Finally, clicking on a Table displays its details, including schema, partition, indexes and description:
![table screenshot](/assets/datahub/datacatalog-table.png)

You also have access to the "Crawlers" tab where you can see their runs, status, ...

### Data catalog ownership
In order to keep track of data sets owners, please fill in the details in the cloudformation templates, and the ADO pipelines
templates. It allows the data catalog users to find data owners quickly.
In summary, the Glue Databases descriptions should contain:
- the Data Owner(s) full name and user principal name (e.g `User Name <m12345@domain.merckgroup.com>`)
- the Business Data Steward(s) *same format as data owners*
- the Technical Data Steward(s) *same format as data owners*
- a reference to the Foundry DTI this dataset is mapped to (if applicable)

Please note that these roles then will be synchronized to Uptimize Data Central and should only be edited from Uptimize AWS Glue Catalog side.

For further information regarding individual roles please visit
[Uptimize Data Central user docs](https://docs.uptimize.merckgroup.com/data-central/roles-responsibilities/).

### Requesting access to data
See the DARs section in the [Overview page](../datahub-overview). Every dataset in S3 should be mapped to a DTI in Foundry.

### Managing catalog entries

#### Setup process
To create entries in the Data Catalog, the following information is required. These details will be provided by the Ingestion/Factory team when requesting data source creation via the IT4U ticket system:
- Name of the Glue database
  - For example: `sap-concur`, `sap-lean`, `<usecase-name>`
- Data source type
  - Specify whether the Glue database will contain data dumped from an ingestion account (i.e., data source data) or data created from a factory account (i.e., use case data). This information will be used to automatically generate the database's name prefix, repository names, etc. ...
- First admin's email address
  - Provide an email address for the first admin who will have permission to edit and deploy the Data Catalog CloudFormation file. The email address must correspond to an Azure DevOps account.
- Environment requirements
  - Indicate if a QA environment is needed. By default, we create Dev/Prod environments
- Sector information
  - Specify the sector for which the database is being created

Note: The QA and Prod environments will be created once the Dev environment is completed

The base template for the Data Catalog will be created by the Uptimize Platform team based on their data source, and the admin will be informed to fill in the required details in both the CloudFormation and pipeline YAML files to create their Data Catalog.

From there, the following resources will be created for you:
- A repository in the [centraldatahub-gxp-ec1 Project](https://dev.azure.com/Uptimize/centraldatahub-gxp-ec1) in Azure Devops
  - The repository name is as follows: `datacatalog-<usecase/datasource>-<database-name>`
- Two pipelines:
  - `deploy-<repository-name>`: a pipeline to deploy your catalog entries, stored as a Cloudformation template.
    It is triggered automatically when code is merged into the `main` branch of the repository. The `main` branch is protected
    and you need to get approval from the Core team before being able to merge.
  - `lint-<repository-name>`: a pipeline to lint your Cloudformation template. It is automatically triggered when opening a PR,
    but can also be triggered manually.
- A user group in the same Project
  - Name is as follows: `<repository-name> Catalog Administrators`
  - All members of this group have the following permissions:
    - Access to the repository as contributors
    - Read access to the pipelines definitions and the pipelines runs
  - To add people to the user group, you can ask the platform team or your sector admins
- The repository will have a base PR open. The PR contains:
  - A base template for your data catalog entries
  - The 2 pipelines' templates

#### Working with the base template
Working with the base template will be the responsibility of the Ingestion/Factory Admin

After the Setup process above is complete, go to the open PR where you can fill in the blanks
(in both `cloudformation/datacatalog.yaml` and `pipelines/deploy-pipeline.yaml`)
and ask for review by the Core team or your sector Admins before merging. Once the first PR is merged, you can edit your entries by simply
opening new ones, getting them reviewed and merged.

The base template is composed of the following parts:

Parameters section:
```yaml
AWSTemplateFormatVersion: "2010-09-09"
Parameters:
  Stage:
    Type: String
    AllowedValues:
      # dev
      - d
      # test
      - qa
      # pre-prod
      - pp
      # prod
      - p
  # The following 8 parameters are set by the pipeline, you must use them depending on
  # which Bucket you want to use. Do not create new stack names or DB names.
  S3StackNameGxpRaw:
    Type: String
  S3StackNameGxpEd:
    Type: String
  S3StackNameNregRaw:
    Type: String
  S3StackNameNregEd:
    Type: String
  DBBaseNameNregRaw:
    Type: String
  DBBaseNameNregEd:
    Type: String
  DBBaseNameGxpRaw:
    Type: String
  DBBaseNameGxpEd:
    Type: String
```
The Parameters will automatically be set at runtime by the deploy pipeline. You can use them as variables in the template.
There are two types of parameters:
- `S3StackNameXXXX`: to be used to import the `BucketName` or the `CrawlerRoleArn` values.
- `DBBaseNameXXXX`: to be used to set the Databases and Crawlers names. You must _not_ use any other name for Databases,
  but you could have multiple Databases in this template (for example if you want to create a Raw DB and an Enterprise DB)


Database resource:
```yaml
Resources:
  DataBaseNregRaw:
    Type: AWS::Glue::Database
    Properties:
      CatalogId: !Ref AWS::AccountId
      DatabaseInput:
        # The name of the database is defined in the Parameters section above, and should not be redefined at all
        # you can however use one of the other DBBaseNameXXXX parameters
        Name: !Ref DBBaseNameNregRaw
        Description: |
          Required description contents:
          - data source this DB represents
          - ownership: team and/or sector
          - sector: 
          - Data Owners: User Name <m1234@domain.merckgroup.com>
          - Business Data Stewards: User Name <m1234@domain.merckgroup.com>, Another User <x3456@domain.merckgroup.com>
          - Technical Data Stewards: User Name <m1234@domain.merckgroup.com>
          - other useful information
        LocationUri: !Sub
          # naming conventions:
          # s3://<$bucketname>/data/<confi|int>/<ds|uc>-<$datasourcename|$usecasename>/<raw|cleaned|ontology>/
          - "s3://${BucketName}/path/to/db/folder/"
          - BucketName: { 'Fn::ImportValue': !Sub '${S3StackNameNregRaw}-BucketName' }

```
The Database resource is the core of the template. You must:
- Change the `Name` parameter to match your data.
  - i.e. if your data is in the Raw bucket and non Gxp, use `DBBaseNameNregRaw`. if it is Enterprise data and Gxp regulated, use `DBBaseNameGxpEd`.
- Fill in the `Description`
- Change the `LocationUri` to match the actual location of your data:
  - Change the `S3StackNameXXXX` to match your data's location
  - Change the `/path/to/db/folder` as well.

Then, you can either use a `AWS::Glue::Crawler` resource to automatically crawl your DB's folder in S3 and derive the tables locations, schemas, ...
or create one or more `AWS::Glue::Table` to manually describe your tables.

Glue Crawler resource:
```yaml
  # you can define your tables schemas automatically using AWS::Glue::Crawler
  # this sample crawler assumes you want to crawl raw data for the Nreg Raw DB
  GlueCrawlerRawTables:
    Type: AWS::Glue::Crawler
    Properties:
      # naming convention is <databasename>-crawler-<raw/cleaned/ontology>
      Name: !Sub "${DataBaseNregRaw}-crawler-raw"
      # CrawlerRoleArn is an export for all 4 of the S3StackNameXXXXX parameters, that must be assumed by crawlers
      Role: { 'Fn::ImportValue': !Sub '${S3StackNameNregRaw}-CrawlerRoleArn' }
      DatabaseName: !Ref DataBaseNregRaw
      Targets:
        S3Targets:
          - Path: !Sub
              # naming conventions:
              # s3://<$bucketname>/data/<confi|int>/<ds|uc>-<$datasourcename|$usecasename>/<raw|cleaned|ontolgy>/
              - "s3://${BucketName}/path/to/db/raw/folder/"
              - BucketName: { 'Fn::ImportValue': !Sub '${S3StackNameNregRaw}-BucketName' }
      SchemaChangePolicy:
        UpdateBehavior: "UPDATE_IN_DATABASE"
        DeleteBehavior: "LOG"
      Schedule:
        # this should be scheduled based on your data update frequency
        ScheduleExpression: "cron(0/10 * ? * MON-FRI *)"
      # must be set, naming convention is raw_/cleaned_/ontology_
      TablePrefix: "raw_"
```
In the same fashion as the `AWS::Glue::Database` resource, fill in the following:
- The crawler's `Name` should match the DB name, and use `crawler-<stage>` suffix
- The role must be imported from the `S3StackNameXXXX` stack. All the exports are in the form `<stackname>-CrawlerRoleArn`
- The S3 location must match the DB folder (or subfolder)
- The `Schedule` must match your database update frequency.

Glue Table resource:
```yaml
  # or you can define your tables schemas manually using AWS::Glue::Tables and AWS::Glue::Schema
  TableNregRaw:
    Type: AWS::Glue::Table
    Properties:
      CatalogId: !Ref AWS::AccountId
      DatabaseName: !Ref DataBaseNregRaw
      TableInput:
        # tables must use raw_/cleaned_/ontology_ prefix depending on the dataset's stage
        Name: raw_todo
        Description: |
          Required description contents:
          - data source source this table represents
          - ownership: team and/or sector
          - frequency of update
          - other useful information

        StorageDescriptor:
          Location: !Sub
            # naming conventions:
            # s3://<$bucketname>/data/<confi|int>/<ds|uc>-<$datasourcename|$usecasename>/<raw|cleaned|ontology>/
            - "s3://${BucketName}/path/to/db/folder/table/folder"
            - BucketName: { 'Fn::ImportValue': !Sub '${S3StackNameNregRaw}-BucketName' }
```
If you want to manually describe your tables, you can do so using the `AWS::Glue::Table` resource.
Again, you must start by filling in the following:
- The `DatabaseName` field must re-use the input Parameters.
- The `Location` must match your datasets' location.
- The `Description` must be as complete as possible.

Then, you _must_ provide a `AWS::Glue::Schema` to it. We suggest starting with a crawlers setup, which is
easier to implement and maintain.

---

# Bucket Life Cycle Overview

The Uptimize Bucket Life Cycle feature automates the transition of storage classes from default standard to Glacier instant retrieval for objects stored within various datahub buckets. This optimization helps reduce costs for storing objects with lower retrieval frequencies.

## Purpose
The primary goal of the Bucket Life Cycle feature is to efficiently manage and optimize the storage of objects within Uptimize datahub buckets. By automatically transitioning objects to a lower-cost storage class based on their access patterns, this feature contributes to overall cost savings and storage efficiency.

### Key Objectives
1. Automate storage class transitions based on access patterns.
2. Optimize costs associated with storing objects with infrequent retrievals.
3. Streamline storage management within datahub buckets.

### Transition Rules
The transition rules define the conditions and timing for moving objects from the default standard storage class to Glacier instant retrieval, ensuring that cost savings are realized while maintaining data accessibility.

### Policy Configuration
The configuration of the life cycle policies involves specifying the rules for transitioning objects and managing their retention periods, thereby aligning storage costs with actual usage patterns.

### Process and flow
The process to initiate a request to create a lifecycle rule for a S3 datahub bucket. It starts with:
  1. User creating a service now ticket for the AWS operations team giving the below information in the request:
   - bucketName - The name of the S3 datahub bucket that contains their use case project prefix folder. select the bucket of interest (example: `dh-d-nreg-confi-raw-s3` )
   - useCaseProjectPath - The path within the above S3 bucket, until their usecase project prefix folder name(example: `data/confi/ds-aera`)
   - lifeCycleRuleName - The usecase prefix name for the usecase project will be same as lifecycle(example: `ds-aera`)
   - daysToGlacierTransition - The number of days after which the objects in the above useCaseProjectPath will be transitioned from default - standard storage class to Glacier Instant Retrieval (sample: 365)
   - HasQa - Does the use case project requires a QA/Val pipelines and deployment to this environment as part of Gxp/Nreg requirements of the project.

   Example:
   - Datalake bucket: dh-d-nreg-confi-raw-s3
   - Usecase project path in datalake bucket: data/confi/ds-aera
   - datalake prefix of the usecase project: ds-aera
   - No of days to transition to glacier storage: 365

  2. Operations team will review the request and will initiate the required pipelines to create a lifecycle rule on the above mentioned S3 bucket.
  3. Operations team will monitor the status of the required pipelines and will connect with AWS engineering team incase of of any errors/issues.
  4. Once the lifecycle rule is successfully created, the operations team will update the user.


  ![Bucket life cycle management - process](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Bucket_life_cycle_process_flow.png)

### Testing of the above process:
The below screenshot shows a typical S3 bucket view:
![Datahub - bucket view](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Sample_s3_bucket_view.png)

The below view shows a sample use case folder that has implemented the lifecycle rule:
![Datahub - Lifecycle rule implemented](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Lifecycle_rule_implemented.png)

### Querying objects transitioned to Glacier Instant Retrieval
The objects/ files that are transitioned to Glacier Instant Retrieval can be queried if they are in any of the standard formats that could be queried / analyzed. Below are the steps to query a sample object(csv file, comma separated).
1. Select the file that needs to be queried:
![Object querying - select the file](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Querying_s3Glacier_data_step1.png)

2. Make selection for Querying using S3 select option:
![Object querying - s3 select](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Querying_s3Glacier_data_step2.png)

3. Select the check-box that says "Exclude the first line for CSV data":
![Object querying - s3 exclude first line](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Querying_s3Glacier_data_step3.png)

4. Execute the query:
![Object querying - s3 execute query](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Querying_s3Glacier_data_step4.png)

5. View the results:
![Object querying - view results](https://docs.uptimize.merckgroup.com/assets/datahub/bucketlifecycle-management/Querying_s3Glacier_data_step5.png)

### Benefits of setting up lifecycle rules for S3 bucket - prefixes
   Below are some of the benefits in setting up a default lifecycle rule for prefixes within a S3 bucket:
  1. For the use case projects that require retrieval of data, less frequent, such usecase prefix folders within S3 buckets can be transitioned from default standard storage to Glacier instant retrieval storage class to reduce the cost of storage.
  2. Even for data objects that are less needed/accessed, the final deletion is set after 30 years. so, this ensures a huge retention period for the data.

### limitations:
  Below are some of the limitations of implementing lifecycle rule for a S3 datahub usecase project - prefix
  1. Glacier instant retrieval storage class Objects consume Relatively more time compared to retrieve data if they were S3 - standard storage class objects. The delay is directly proportional to the size of objects that are being retrieved for analysis.
  2. The cost of retrieving the objects for analysis that are of Glacier instant retrieval storage class also attracts additional costs when we do GET,SELECT and other requests (Approximately $0.01 per 1000 requests).
  3. Storage class transitioning for S3 objects is not ideal for frequently accessed objects being major part of objects of a use case project. Every use case needs to be analyzed for a test period(for various access patterns) to estimate/extrapolate the costs that a specific use case could charge for this implementation.

### More information
  The below link can be referred for more information:
   https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html

### Support
If you face any issues while using bucket lifecycle management, please create a support ticket here:
https://mhub.service-now.com/esc?id=sc_cat_item&sys_id=015a7fd51b1be510b62b10628b4bcb47

---

# IAM User Creation

IAM user creation has been enabled for factory admins through service connection provided as part of factory project (ec1-da-{env}-{adoproject}) with a standard template.  


It is important that user keeps the tags intact with key value pair 'managedby': 'FactoryAdmin' in order to maintain distinction. 


The access key and secret key will be available in secrets manager once the template is deployed if the secret is properly tagged as in template.  


The secret can be retrieved either using service connection or from aws management console using Factory Admin Permission set.  

## Standard Cloudformation Yaml Template

```yaml
#cloudformation template to create iam user with required 
#permissions and store the access key and secret key of this iam user 
#in secrets manager with a tag.

AWSTemplateFormatVersion: '2010-09-09'
Parameters:
  UserName:
    Type: String
    Description: Name of the IAM user

Resources:
  IAMUser:
    Type: AWS::IAM::User
    Properties:
      UserName: !Ref UserName
      Tags: 
        - Key: "managedby"
          Value: "FactoryAdmin"
      Policies:
        - PolicyName: "allowed-actions"
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              # Modify the required permissions here but follow least priviledge principal
              - Sid: AllowedPermissions
                Action:
                  - ec2:*
                Effect: Allow
                Resource: '*'


  IAMUserAccessKey:
    Type: AWS::IAM::AccessKey
    Properties:
      UserName: !Ref UserName
    DependsOn: IAMUser


  Secret:
    Type: AWS::SecretsManager::Secret
    Properties:
      Name: !Sub "IAMUserAccessKeys/${UserName}"
      SecretString: !Sub |
        {
          "AccessKeyId": "${IAMUserAccessKey}",
          "SecretAccessKey": "${IAMUserAccessKey.SecretAccessKey}"
        }
      Description: Access key and secret key for the IAM user
      Tags:
        - Key: managedby
          Value: FactoryAdmin
```

## The Output resources will look as below in console :

### IAM User

![Factory IAM User](/assets/factory-admin/factory-iam-user.png)

### Secret in Secrets Manager

![Factory IAM User Secret](/assets/factory-admin/factory-iam-user.png)

---

# IAM Access Analyzer

IAM Access Analyzer is a service that helps you identify the resources in your AWS environment that are shared with external entities. It analyzes resource policies to help you understand and manage the permissions granted to external principals (such as other AWS accounts, services, or the public). With IAM Access Analyzer, you can identify unintended resource access and ensure that your security practices are being followed.

## Key Features of IAM Access Analyzer

### Identifying Unintended Access:
It helps to identify access to resources that might not have been intended, especially if shared with public or external accounts.
### Monitoring Resource Access: 
Continuously monitor access to your resources.
### CloudTrail Integration: 
Use IAM Access Analyzer to monitor CloudTrail logs for access events and actions taken by external entities.

## Enabling Access Analyzer

Within IAM, go to 'Access Reports' and then 'Resource analysis' to create analysis on External access or Internal access or Unused access.
![Access Analyzer](/assets/factory-admin/Analyzer.png)

When opted for desired access analysis, AWS will create service role "AWSServiceRoleForAccessAnalyzer" for your account and this role will be used for publishing findings.

---

# Release Notes

Please browse through the below pages to read the quarterly UPTIMIZE AWS Factory Release Notes

---

# What's New

Connectivity testing for newly provisioned AWS Factory accounts was automated and integrated with baseline code

9 Security related findings were resolved and closed

There were two changes to the AWS extension object in UPTIMIZE Foundry:
- The status for AWS use cases can be updated to "Decommissioned"
- A section on AWS Security Compliance was added so use case owners must review and confirm that best practices are being followed

---

# What's New

User docs: We refactored our AWS docs to a new infrastructure stack and authentication method making them way faster

We created new guidance for [Sandbox Environments](https://docs.uptimize.merckgroup.com/factory/sandboxes/), [Access to Factory Environments](https://docs.uptimize.merckgroup.com/factory/team-access/) and [data ingestion](https://docs.uptimize.merckgroup.com/factory/ingestion/).

Added Email notifications to the request process for Factory Environments, so that requestors, SDOs and MDO stay informed

We onboarded 8 new teams to UPTIMIZE AWS Factory Environments

---

# What's New

Introduced automated ingestion stacks for data pipelines for central ingestion accounts. See documentation [here](https://docs.uptimize.merckgroup.com/factory/ingestion/).

Extended automated provisioning of Factory Accounts and baseline resources to QA and PROD Accounts.

Onboarded 7 new teams to UPTIMIZE Factory environments.

---

# What's New

We extended our [user documentation](https://docs.uptimize.merckgroup.com/):
- Technical data [ingestion guide](https://docs.uptimize.merckgroup.com/factory/ingestion/) for AWS
- Updated the step-by-step instructions for how to request a Factory Environment for your D&A Solution
- Created a guide for how your developers can obtain [access](https://docs.uptimize.merckgroup.com/factory/team-access/) to existing Factory Environments

We went live with our automated process to create Factory Environments, reducing the time it takes to create the Environments by 75%!

We onboarded 10+ new teams to UPTIMIZE AWS Factory Environments

---

# What's New

We introduced a [new process](https://docs.uptimize.merckgroup.com/factory/prerequisites/) to request a Factory environment to facilitate getting started with building your use case in UPTIMIZE AWS

We have established a [process and templates](UPTIMIZE/getting-started/architecture/architecture-review/) for architecture and code reviews prior to use case go-live

We automated some complex manual steps for the provisioning of Factory environments, decreasing the time it takes for environments to be available to use case teams

We onboarded our first batch of use case teams to the UPTIMIZE AWS Factory

---

# Use Case Disclaimer addendum

## 1. Secure Configuration

### Secure Configuration of Systems/Resources:
1. Use case teams are responsible for ensuring that systems/resources not managed by the IT-I team are configured securely.
2. This includes the dedicated use of ports, services, and protocols to minimize potential vulnerabilities.
### Response to System Compromise:
1. Use case teams must have procedures in place to respond promptly and effectively in the event of a moderate or severe compromise of a system.
2. Incident response plans should be established and regularly reviewed to mitigate the impact of security incidents.

## 2. Authorized Software

### Downloading Libraries/Packages:
1. Use case teams should only download libraries/packages required for their projects from official sites.
   Examples include:
   -	Python: Python Package Index (PyPI)
   -	Go scripting: Go.dev
   -	Docker: Docker Hub
### Pre-Approval for AWS Marketplace Software:
1. Any software services required from the AWS Marketplace must be pre-approved by the Uptimize AWS Architecture Board during the project architecture approval process.
2. This ensures that only authorized and vetted software is used in projects, reducing the risk of security vulnerabilities.
### Patching and Security Fixes:
1. Use case owners/teams are responsible for ensuring proper patching and implementation of security fixes for all software used in their projects.
2. Regular maintenance and updates should be performed to address known security vulnerabilities and maintain a secure environment.
3. Use case teams are responsible for Static and Dynamic Code Analysis for their applications. e.g. usage of tools like Linting.   

## 3. Data Backup Retention

### Default Backup Retention Period:
1. Use case teams agree to a default backup retention period of 30 days when using the central datahub for data storage.
2. This retention period is established based on best practices followed across industries and serves as a standard guideline for data backup management.
### Customization Requests:
1. Any customization of the backup retention period beyond the default 30 days requires a formal request to be raised by the use case teams.
2. Requests will be evaluated based on project requirements, compliance considerations, and data management policies.
### Data Retention:
1. Use case teams are responsible to classify use-case data and ensure proper retention time. Platform team provide storage as service. Use-case team can maintain data in storage as long as needed.

## 4. Access Control and Authentication

### User Access Control:
1. Use case teams must implement proper access controls to ensure that only authorized individuals have access to sensitive data and resources.
2. Access should be granted based on the principle of least privilege to minimize the risk of unauthorized access or data breaches.
### Strong Authentication Mechanisms:
1. Use case teams should enforce strong authentication mechanisms such as multi-factor authentication (MFA) for accessing sensitive systems and applications.
2. This helps protect against unauthorized access and enhances the overall security posture of the organization.

## 5. Adherence to Relevant Legal and Regulatory Standards

### Compliance Requirements:
1. Use case teams must adhere to relevant legal and regulatory standards governing data privacy, security, and compliance in their respective domains.
2. This includes regulations such as GDPR, HIPAA, or industry-specific standards that may apply to the projects.

## 6. Security Requirements for Third-Party Vendors

### Vendor Assessment:
1. Use case teams should conduct thorough assessments of third-party vendors to ensure they meet security and compliance requirements.
2. Vendors should be evaluated based on factors such as data protection measures, security practices, and compliance certifications.

## 7. Information Classification

### Limitations:
1. The Uptimize AWS platform is only eligible to store and process **up to Confidential** classification level data.
2. **Secret** classification level data, or the processes generates **Secret** classification level data are **not allowed in Uptimize AWS**.
### Roles and Responsibilities
1. For every information asset stored in the Factory Accounts, the Factory Use Case Owner carries the responsibility of Information Owner.
2. All information assets stored in the Factory Accounts considered same classification level with the use case itself unless the information asset labeled with another classification level.
3. All unstructured information assets should be labeled according to their classification (e.g. Word, Excel, pdf documents).
For electronically stored information in office documents or similar formats, a cover page stating (amongst other information) the classification should be used.

*** The unstructured information assets stored in datalake/datahub should be labeled. If data lacks labels, the classification stated in the AWS extension form for business data will serve as the default labeling status.


## 8. Data Protection

### Compliance Requirements:
1. An automated tool on network perimeters that monitors for unauthorized transfer of sensitive information and blocks such transfers while alerting information security professionals shall be deployed.
### Use case team responsibilities
1. Assessing the risk and the need for an automated tool on network perimeters that monitors for unauthorized transfer of sensitive information and blocks such transfers while alerting information security professionals.
Implementing such a tool if needed. Defining criteria to identify the sensitive data. Defining criteria to identify authorized and unauthorized transfer.

## 9. Enforce password policy in linux systems

### Factory Accounts:
1. Usecase teams may opt for ec2 instance creation as below -
   a. Self Service
   b. IT-I managed Instance
   Responsibilites lies with factory teams, to ensure compliance to Merck Password policy.
   Reference: mango document 20439187 (https://mango.merckgroup.com/cara/lnk/content/mango_document/3198256/Effective?format=pdf)


## 10. Encryption - Data at Rest

AWS S3 storage is encrypted by default and the encryption mechanisms utilized by AWS for S3 encryption is SSE-KMS (Server-Side Encryption with AWS Key Management Service).

Encryption Methodology for Other Data Storages: For factory or use-case teams utilizing other data storages within AWS, establish and document a standardized encryption methodology. This methodology should align with industry best practices and AWS recommendations. 

## 11. Encryption - Transmission of Credentials and Application Data
* Passwords and other credential information shall not be transmitted in clear text.
* IP-based transmission of application data classified as internal, confidential, or secret should be encrypted within IT environment.

## 12. Application vulnerability scan from outside
- The Application Security team performs light scans for all subdomains of uptimize.merckgroup.com.
If any other domain is used for applications hosted on Uptimize AWS, the use case team is responsible for requesting
scans from the Application Security team.
- The Application Team is responsible to evaluate the necessity for heavy scans and request heavy scans from Application Security team where needed.
- Please refer to this mango document for more information:
[TITLE: GPSEC Application Security Group Procedure - Doc ID: 00024301](https://mango.merckgroup.com/cara/lnk/content/mango_document/4361192/Effective?format=pdf)

---

# Public Facing Resources Report - Scheduled Report Delivery and Storage Details
This report has been specifically generated for the exclusive use and internal processing of the AWS Admin Operations team. It comprises two CSV files designated as "PublicFacingResourcesList1.csv" and "PublicFacingResourcesList2.csv". The AWS Operations team is scheduled to receive this report on a weekly basis, with notifications being dispatched via email.

# User Access Management
The report will be sent via email to the address "uptimize_aws_admin@merckgroup.com" thereby ensuring visibility to all users who have access to this distribution list (DL).

---

# AWS Resource Management and Optimization

This section covers best practices and processes for managing and optimizing AWS resources on the Uptimize platform, including cost optimization, lifecycle management, and resource governance.

---

# S3 Lifecycle Rule Configuration

This document outlines the steps for configuring s3 lifecycle rules

# Steps

1. Access your S3 bucket through the AWS Management Console
2. Select Management and under "Lifecycle rules" click on "Create lifecycle rule"
3. Define a rule name and specify the scope (e.g., apply to all objects or specific  prefixes).

    ![Name](/assets/s3_lifecycle_rule/1.png)

4. Under "Lifecycle rule actions," choose " Permanently delete noncurrent versions of objects" and "Delete expired object delete markers or incomplete multipart uploads"

    ![Actions](/assets/s3_lifecycle_rule/2.png)

5. Set the desired time frame for transitioning or deleting non-current versions. We recommend 30 days for "Days after objects become noncurrent field, but you can decide this based on your requirements

    ![Options](/assets/s3_lifecycle_rule/3.png)

6. Review and save the rule

    ![Save](/assets/s3_lifecycle_rule/4.png)

---

## AWS Cost Optimization

As part of cost optimization initiative we have implemented automations to 
- Identify idle AWS accounts
- Communicate right sizing recommendations
- Communicate idle resources (unused EBS and EIPs)
- Track usecases in development phase for more than 90 days

All these automations run once in a quarter and communications are sent to factory admins.

### Idle AWS Accounts

We track the IAM role and IAM user activity across the factory accounts. If there is no activity in any AWS account for more than 90 days, we flag the account as idle and email communication is sent to factory admin for the confirmation of necessity of the account. The reminder emails are sent as per below schedule:
1. 1st reminder email will be sent to factory admins (only to admins who have not responded yet) after 15 days 
2. 2nd reminder email will be sent to factory admins (only to admins who have not responded yet) after 27 days
3. 3rd reminder email will be sent to factory admins (only to admins who have not responded yet) after 29 days
4. On the 30th day, SCP (Service Control Policy) will be applied to block use case teams' access to AWS accounts for which factory admins have not provided a response, and this action will be communicated to the admin.
5. If factory team still needs the account, they can request for the access restore through SNOW ticket

Please refer [idle aws account management](https://docs.uptimize.merckgroup.com/factory/idle-aws-account-management/) for more details.

### Right-sizing Recommendations

We communicate compute optimizer right-sizing recommendations for EC2, RDS and ECS services. This communication is sent to factory admin once in a quarter and has details of all the recommendations and consolidated estimated monthly savings that can be achieved by implementing the recommendations. These recommendations are based on the analysis of the usage pattern over a period of time.
- For EC2 and RDS, usage pattern is analysed for last 32 days
- For ECS usage pattern is analyzed for last 14 days

Factory admins should review the recommendations and consider implementing the same for better utilization of cloud resources and save costs.

![right-sizing](/assets/cost_optimization/compute_optimizer.jpg)

### Idle Resources

We conduct a review of the unused ebs volumes and unused EIP's across factory accounts once in a quarter. If we find any of the idle resources, email communication will be sent to factory admin with idle resource details. 
- Unused EBS Volumes : These are EBS volumes not attached to any EC2 instances
- Unused EIP's : These are public IPs not attached to any network interface

Factory admins should review the idle resources and delete the resources which are no longer required. This will ensure optimal use of cloud resources and saves cost.

![idle_resources](/assets/cost_optimization/unused_ebs.jpg)

### Track Usecases In Development Phase

We review the usecases in development phase once in a quarter. If any use case is in dev phase for more than 90 days, email will be triggered to factory admin to check production readiness of the usecase. The purpose of this tracking is to:
- Check if usecases are planning for moving to the next stage, if not they can consider decommissioning the accounts
- Check if they need help from us for any technical challenges
- Check approximate date of moving to production
- Reassess the budget for higher environments based on the experience with dev

![dev_usecases](/assets/cost_optimization/track_dev_usecases.jpg)

### Sandbox Automations

For improved cloud resource usage and reduce unnecessary costs we have implemented automations in following sandbox accounts:

| Account ID | Account Name |
|------------|--------------|
| 516462010905 | ec1-da-d-opssandbox-nreg-00034 |
| 522579306583 | ec1-da-s-itax-sandbox-00049 |
| 564721427792 | HCSandbox |
| 025760030746 | LSSandbox |
| 864091587804 | MDOSandbox |
| 131751615212 | ELSandbox |
| 689676911593 | MGFSandbox |
| 683851438096 | sandbox |
| 322717679088 | cloud-account-dataanalytics-sandboxadmin |

#### Automations

1. `Stop Compute Instances`: 
   A script will run everyday at 11 PM IST to stop all the running EC2, RDS and Sagemaker instances. These instances will be stopped through standard AWS API calls.

2. `Delete Unused EBS Volumes`: 
   Runs once in a month to clean up unused EBS volumes. Snapshots are created before deleting the volumes.

3. `Delete Unused Public IPs`: 
   Runs once in a month to check and release unassigned public IPs

---

# Security Concept

Please browse through the below pages to learn more about the UPTIMIZE AWS Securtiy concepts.

---

# Information Security in Projects


## Security by default
The security requirements are included in this project from the beginning on.
Very early on, we collaborated with IT Security to assure the AWS components we use and the way we configure them is appropriate.


## Information security risks
Security risks were identified in the planning phase of the project.
The possible threats in terms of confidentiality, integrity and availability of the Uptimize AWS platform were assessed and listed in the Technical Risk Assessment document as part of the GxP qualification (Mango ID 20676058).
Additionally the HLRA REG0006479 has been carried out and approved.
If additional risks will be identified, these will be added to the risk list and respective mitigations will be implemented.


## IT/OT Security Lead
The role of the IT/OT Security Lead is carried out by the Uptimize Platform Architect which roles is described in ITINF Management of Uptimize AWS Procedure (Mango ID 20705602),


### Escalation Process
All information security aspects are first discussed within the Platform Team in the presence of the Product Owner.
If necessary, the issues are raised to the The IT/OT Security Lead.
The IT/OT Security Lead shall escalate issues to Company's Security & Risk function or respectively OT on his or her own discretion.


## IT/OT Security Risk Assessment and Security Controls
The Uptimize AWS platform will be classified to be ready to host and process confidential data, as it can be expected that confidential data will be loaded into the platform.


## Adherence to existing security requirements
All main project communication is conducted using e-mail or Microsoft Teams.
For sharing documents, Sharepoint / MS Teams will be used and JIRA for collaboration.
For tasks involving the need to access Merck-internal systems, XUIDs will be provided to the external contractors.
They will be advised to use them accordingly.

---

# Information Security and Governance


## Information Security Governance
Please see the following GxP deliverables holding this information:
* Qualification Plan - Mango ID 20649940
* Technical Specification - Mango ID 20676063
* Technical Risk Assessment - Mango ID 20676058
* Procedure of Management of Uptimize AWS - Mango ID 20705602, section 2.7 Risk Management. 

Risks are assessed and documented in the risk log ITCMP_RA_Data & Analytics Platform_AWS
(Doc. ID 20676058).

Definition, objectives and principals of information security covered with in the documents mentioned above.
When platform team faces any deviation or exception to the defined security standards, team will raise it to the Product Owner
and a work item will be created in the teams Scrum board.
Product Owner will track the process of evaluation and corrective measures for the deviation or the exception.

Relevant authorities:
* Product Owner: Niousha Hormozi (niousha.hormozi@merckgroup.com)
* Technical Manager: Advith Nagappa (advith-belegadde.nagappa@merckgroup.com)
* Platform Security Lead and Platform Architect: 
* System Delivery Manager: Frank Kling (frank.kling@merckgroup.com)

Responsibility areas with in the Platform Team is segregated to reduce opportunities for unauthorized or unintentional modification or misuse of the organization's assets.
Please see [Platform Team Roles and Responsibilities](https://admin.docs.uptimize.merckgroup.com/others/platform_team_roles_and_responsibilities/) page for more information.


## Information Classification
The Uptimize AWS platform is classified to be ready to host confidential data, as it hosts e.g. Life Science finance data that is considered as confidential.
A yearly re-assessment of Information Classification will be performed.
Additionally, it is stated as a warning / alert to the users that no secret data and no transformations which create secret data can be performed on the Uptimize AWS platform.

When Lab users are provisioning resources in Lab accounts, all the resources are tagged with the username as the owner.
Owner of a resource is the information owner at he same time for what ever information stored and processed in those resources.
Which means the user is responsible for the labeling data with proper classification, and deciding who will have access to the data.
This situation as well as classifications and labeling explained in the AWS Lab user docs [here](https://docs.uptimize.merckgroup.com/lab/data/information-classification/).

For the AWS factory accounts, the factory admin id the information owner for the information stored or processed in the factory accounts.
Which means the factory admin is responsible for the labeling data with proper classification, and deciding who will have access to the data.
This situation as well as classifications and labeling explained in the AWS Lab user docs [here](https://docs.uptimize.merckgroup.com/lab/data/information-classification/).


## IT and OT Security Risk Management
Please see the Technical Risk Assessment document as part of the GxP qualification (Mango ID 20676058)


## Asset and Configuration Item Management
In terms of asset management, the following kinds of assets are tracked:
- AWS accounts
- Datasets

AWS accounts are tracked in the following sheet https://dev.azure.com/Uptimize/Uptimize-AWS-Operations-Documents/_wiki/wikis/Uptimize-AWS-Operations-Documents.wiki/12/AWS-Account-List 
The tracking is described in our AWS Control Tower WKI (20706079), in section 2.3.1 "Prepare AWS Account creation" (step 2)

Datasets are tracked in the AWS Glue data catalog of the Uptimize AWS data hub.

In terms of configuration management, an infrastructure as code approach is used to manage wide parts of the Uptimize AWS configuration.
The details are described in the Procedure of Management of Uptimize AWS - Mango ID 20705602 and relating documents.


## Use of Company Assets, Platforms & Devices 
The solution is under GxP-compliance and therefor strict compliance requirements are in place. 

In terms of compliance to data privacy, a process will be established that governs the loading of data subject to data privacy regulations.
The solution will be operated in the Merck environment by a vendor team from Exasol. Here, compliance aspects are contractually agreed.

AWS documents, tracks and monitors its legal, regulatory and contractual agreements and obligations. In order to do so, AWS performs and maintains the following activities:

1) Identifies and evaluates applicable laws and regulations for each of the jurisdictions in which AWS operates
2) Documents and implements controls to ensure conformity with all statutory, regulatory and contractual requirements relevant to AWS
3) Categorizes the sensitivity of information according to the AWS information security policies to protect from loss, destruction, falsification, unauthorized access and unauthorized release
4) Informs and continually trains personnel that must be made aware of information security policies to protect sensitive AWS information
5) Monitors for nonconformities to the information security policies with a process in place to take corrective actions and enforce appropriate disciplinary action

AWS maintains relationships with internal and external parties to monitor legal, regulatory, and contractual requirements.
Should a new security directives be issued, AWS creates and documents plans to implement the directive within a designated timeframe.

AWS provides Customers with evidence of its compliance with applicable legal, regulatory, and contractual requirements through audit reports, attestations, certifications and other compliance enablers.
Visit aws.amazon.com/artifact for information on how to review the AWS external attestation and assurance documentation. 

Refer to the following AWS Audit Reports for additional details: MTCS, PCI 3.2, ISO 27001, ISO 27017, C5, IRAP, NIST 800-53 (FEDRAMP & DOD), SOC 2 COMMON CRITERIA, SOC 1 & 2 CONTROLS, K-ISMS


## Information Security Reviews
Information security implementations are part of Sprint Planning (every 2 weeks) and Program Increments (every 3 months).
Information security reviews of Uptimize AWS will be conducted periodically every 1 year.
Overall, IT security is a constant concern that gets reviewed for other aspects as well during implementation phase.

---

# Network Security

## Secure Configurations for Network Devices

### Network Architecture:
The used AWS environment in the project is set up as follows.

The following regions are used and governed in the Control Tower:
- Frankfurt (eu-central-1)
- N. Virginia (us-east-1)

The AWS TGW is connected to the Cloud teams TGW and from there connected to the Merck internal network as datacenter extension with Direct Connect.
The Direct Connect endpoint is in AWS Frankfurt (eu-central-1) and AWS N. Virginia (us-east-1).

Only private subnets are used in the VPCs and all internet-related traffic is going through an Egress and Inspection VPC.
An AWS firewall is in place with an allow-list controlling which URLs can be accessed and which not.
Additionally the TGW route table serves as the first level of defense, meaning that if a specific route from a source VPC to the Egress VPC (via a TGW route) does not exist, the traffic flow is prohibited.

For more information, please see the [Platform Core Network Architecture page](https://admin.docs.uptimize.merckgroup.com/factory/network/architecture/).

### Administration of Network Devices / Changes:
How firewall rules, routes, TGW attachments and IP ranges are managed is described in "ITINF Operational Tasks for Uptimize AWS Account Management Working Instruction" (Mango ID 20726549).

### Administration / Process for Change:
The AWS Networking Accounts are GxP qualified and follow the Standard Operating Procedure "Uptimize_AWS_Change_Management Procedure" (Mango ID 20716892).
To change configurations in the Network, first a Service Now ticket is created by the user which is requiring the change.
The Development & Operations teams then check the request and if valid, create Pull Requests which are reviewed by a second person from the Development or Operations team (IT-AX/ MDO-ST, 4 eyes principle).
All network components are managed as IaC and are traceable as such. Additionally tools such as CloudFormation and cfn-nag are used to lint-check the templates before deployment.
To add URLs to the firewall allow-list, the same process of Service Now ticket (investigation of the request, approval by IT-AX for URL to be added, PR creation, review/approval of the PR itself and then update of the firewall) is followed.

The main VPCs controlling Merck network, Palantir Foundry and Internet connectivity are contained in a set (dev, qa, prod) of AWS Networking accounts which are only accessible by the Platform development and operations team.
A limited amount of the Development and Operations team have access to that set of Accounts and authenticate through SSO.

VPC Flow logs are defined and monitored for all core VPCs in the AWS platform. The operations team (IT-AX) is checking the flow logs on a regular basis.


## Firewall and Router Configuration Standards
An AWS Network Firewall is available for the traffic routed to internet.
The Ops Network Admins are responsible for all the developments and changes of this firewall's configurations.
Ops Network Admins are part of the the Platform Team.
Ops Network Admins use Azure Devops Repositories and Azure Devops Pipelines for the deployment of the firewall configurations and for all deployments related to platform core network.
All network components are managed as IaC and are traceable as such.
Additionally tools such as CloudFormation and cfn-nag are used to lint-check the templates before deployment.
Please also see section [11.4 - Dedicated Systems for Administration](factory/security_concept/secure_administration_privileged_access/#dedicated-systems-for-administration).

The egress traffic flows through the firewall symmetrically.
There are three security features:
* Deny list rule group: Traffic first hits the deny list to block communication with known malicious destinations.
* Allow list rule group: If the domain is not in the deny list, then it is checked against the allow list.
Here we have multiple allow lists. The common allow list allows traffic from all sources to allow listed domains.
This list covers frequently used domains to allow those for everyone using Uptimize AWS. Then there are allow lists which are specific to use case.
Here we check for the source VPC as well as the destination domain, so the domain is allowed for only specific unit who needs access.
* Drop traffic by default: If the traffic does not match with any of the rules above, it is dropped by default.

A list of current approved URLs is available on Sharepoint under this [link]
(https://mdigital.sharepoint.com/:x:/r/sites/Unit8SoWCollaboration-AWSLabstesting/Shared%20Documents/AWS%20Labs%20testing/01_Deliverables/Firewall/UPTIMIZE%20Lab%20firewall%20whitelist.xlsx?d=w4ed6ac1fdfd043d5882e5757e187acd4&csf=1&web=1&e=qBDSgJ)

To add new URLs, a Service Now ticket is created by the user which is requiring the change.
The Platform Team then check the request and if valid, create Pull Requests which are reviewed by Ops Network Admins (IT-AX/ MDO-ST, 4 eyes principle).

Please see following sections for more information:
* [Platform Core Network Architecture](https://admin.docs.uptimize.merckgroup.com/factory/network/architecture/)
* [Firewall Rules](https://admin.docs.uptimize.merckgroup.com/factory/network/firewallrules)
* [Platform Team Roles and Responsibilities](https://admin.docs.uptimize.merckgroup.com/others/platform_team_roles_and_responsibilities/)


## Network Perimeter Defense
Connectivity to the Merck network is achieved through connecting the AWS TGW of Uptimize to the Cloud teams TGW via intra-region peering and
that is further peered to a Direct Connect Gateway which established connectivity to the Merck network.

On the AWS side, there are so called ingestion VPCs segmented into internal and confidential ingestion VPCs.
Additionally DMZ VPCs are in place between the ingestion VPCs and the AWS data hub as an additional perimeter.
There are 4 CIDR blocks added to the Direct Connect Gateway (172.29.16.0/20, 172.29.48.0/20, 172.29.32.0/20 and 172.29.96.0/20) which were provided by the Networking team.
The ingestion VPCs get a range from these CIDR blocks and are then routed to the TGW and further to the 2nd TGW and the Direct Connect Gateway to the Merck network.
Therefore, the TGW route tables act as the main point to route traffic to the Merck network.
Additionally adding the CIDR blocks to the Direct Connect Gateway acts as a security parameter which is managed by Merck's Cloud team.

The platform core network does not allow any inbound traffic. The potential inbound traffic is dropped by the NAT Gateways in the Egress VPC.
The outbound traffic symmetrically flows through the Network Firewall which is located in the Inspection VPC.
Outbound traffic is only allowed for whitelisted domains by the firewall. To whitelist a domain, there is a certain procedure in place.
The business need is evaluated and recorded before whitelisting the domain.
Before traffic hits the allowlisting rule groups, it hits the denylisting rule group. This way communication with known malicious sites is blocked securely.

Please see following sections for more information:
* [Platform Core Network Architecture](https://admin.docs.uptimize.merckgroup.com/factory/network/architecture/)
* [Firewall and Router Configuration Standards](https://admin.docs.uptimize.merckgroup.com/security_concept/network_security/#firewall-and-router-configuration-standards)
* [Firewall Rules](https://admin.docs.uptimize.merckgroup.com/factory/network/firewallrules/)


## Network Segmentation
All AWS services used in this project are run within dedicated project accounts (Dev, Staging/Test and Prod), which are only used and only accessible by the project.
We use different accounts for the different stages of the environment (Dev, Staging/Test, Prod), each with its own VPC.
The network access rules are controlled by the network administrator in the AWS account.
The datacenter/network environment zoning concept is implemented using different subnets and different security groups, to block and allow network traffic.
The security groups are set up with a default deny/least privilege configuration.

VPC's are implemented in smaller segments to fulfill its function, trust level or classification level.
This is achieved by implementing multiple ingestion VPC's for internal and confidential data ingestion as well as creating separate VPC's for separate tasks
(e.g. 1 VPC for Inspection, 1 VPC for central Egress, 2 DMZ VPC's each in Dev, QA and Prod Networking accounts).

In the core network accounts, Company and non-Company network segments are separated by using separate VPCs and transit gateway routes.
The company network traffic flows either through the transit gateway and DMZ VPC to Foundry or through the transit gateway peering attachment to the Merck On-Premise network.
The non-Company network flows through the transit gateway to the inspection VPC, then to the egress VPC and then to the internet.

For more information about the core network architecture, please see the [Network Architecture admin docs page](https://admin.docs.uptimize.merckgroup.com/factory/network/architecture/).

Route53 service Private Hosted Zone and Outbound Resolver features are used for resolving private domains to internal IP addresses.
palantir.mcloud.merckgroup.com and arbor-data.palantirfoundry.com PHZs are created in dev, qa, and prod network accounts.
These hosted zones are associated with Spoke VPCs where Foundry connection is needed.
This way Route53 directs Foundry traffic to the Foundry VPC Endpoints located in the DMZ VPCs.

Also, an outbound endpoint is created in the dev, qa, and prod network accounts DNS VPCs to be able to forward certain DNS requests to Merck's On-Premise DNS Servers (155.250.53.53 and 155.250.87.50).
The resolver rules define which for which domains the request will be forwarded to this outbound endpoint.
Currently, four resolver rules are created in dev, qa, and prod network accounts for the domains merck.de, merckgroup.com, millipore.com, and sial.com.
These resolver rules are shared with spoke accounts and associated with spoke VPCs where needed.

All AWS VPCs have a Route53 endpoint provisioned by default.
The endpoint's IP address is VPC's CIDR+2 (e.g. CIDR: 172.35.0.0/26 - Resolver: 172.35.0.2)
All DNS queries reach AWS Route53 Resolver Service through the endpoint.
The Route53 Resolver Service attempts to resolve the domain with the following logic:
* If found in Local VPC Domain names, returns the IP address
* If found in the associated PHZs, returns the record
* If found in the associated outbound resolver rules, forwards the request to the outbound endpoint
* If not found, performs recursive lookups against public name servers on the internet

For more information about DNS management in Uptimize AWS, please see the [Route 53 admin docs page](https://admin.docs.uptimize.merckgroup.com/factory/network/route53/).


## Externally Facing Connectivity
For Data Center Extension AWS accounts, the Direct Connect tunnel built between AWS and Merck office network for the platform is used.

Externally facing traffic to the internet from AWS is handled through an Inspection VPC with an AWS firewall and a central Egress VPC.
Traffic originating from Lab / Factory VPCs and destined for the internet:
1) will be forwarded to the TGW
2) and then to the Inspection VPC for processing
3) if it passes defined firewall rules, traffic is forwarded to TGW Firewall Route Table 
4) and finally to the Central Egress VPC where it will be forwarded to the NAT gateway and internet gateway. 

The network firewall setup is described in "ITINF Operational Tasks for Uptimize AWS Account Management Working Instruction" (Mango ID 20726549), section 2.1.2.2.2 Firewall setup. 

VPC Flow logs of all VPCs including the firewall are captured, inspected/investigated and acted upon.

By default, Uptimize AWS does not support internet facing web applications.
The communication initiated from internet is dropped by the NAT gateways in the Egress VPC.
Although it is not supported by default, there are few exceptional cases that the use case teams require dedicated Internet Gateways.
However the responsibility of these Internet Gateways are belong to the use case teams.

GuardDuty service is centrally activated and managed for all accounts.
All VPC flow logs are analyzed against uncommon behavior and potential threats by GuardDuty.
GuardDuty forwards findings to Security Hub. The findings are also sent to Splunk.

Anti-spoofing measures of the platform's network security is made of multiple layers.
These are briefly Transit Gateway Configurations, IAM and MFA, and NAT Gateways.
Anti-spoofing measures are explained in more details in a separate page [here](https://admin.docs.uptimize.merckgroup.com/security_concept/network_security/antispoofing-measures/).

Please see following sections for more information:
* [Platform Core Network Architecture](https://admin.docs.uptimize.merckgroup.com/factory/network/architecture/)
* [Firewall Rules](https://admin.docs.uptimize.merckgroup.com/factory/network/firewallrules/)
* [GuardDuty](https://admin.docs.uptimize.merckgroup.com/others/guardduty/)
* [Splunk Integration](https://admin.docs.uptimize.merckgroup.com/others/splunk-integration/)
* [Anti-Spoofing Measures](https://admin.docs.uptimize.merckgroup.com/security_concept/network_security/antispoofing-measures/)


## Remote Access
The access to the AWS platform itself is only allowed for limited users, which are logging into the AWS Web console environment through the Merck SSO portal.
The configuration of the SSO portal access is done by the Merck IT Cloud team according to SOP workflow.

---

# Anti-Spoofing Measures
Internal IP spoofing occurs when an attacker masquerades as a legitimate internal resource by using a forged IP address.
To mitigate this risk in our AWS Uptimize setup, following security measures and best practices are implemented:

## Transit Gateway
AWS Transit Gateway can help in the prevention of internal IP spoofing by providing a centralized and controlled hub for routing traffic between multiple Amazon Virtual Private Clouds (VPCs) and on-premises networks within the AWS infrastructure.
While Transit Gateway itself doesn't directly prevent IP spoofing, it enforces routing and security policies that contribute to a more secure network architecture.
Here's how Transit Gateway aided in preventing internal spoofing:

### Segmentation and Isolation
Each VPC within Uptimize operates independently, and traffic between VPCs is tightly controlled through routing and security policies.
By logically isolating VPCs, the attack surface is reduced and potential for internal spoofing is limited because traffic between VPCs is subject to explicit rules and policies.

*Snapshot of VPCs attachment to transit gateway in Uptimize Central Network Account (DEV)*
![Snapshot of VPCs attachment to transit gateway in Uptimize Central Network Account (DEV)](assets/factory-admin/security_concept/07_network_security/anti_spoofing_measures/tgw_attachments.png)

### Centralized Routing Control
Routing policies enforced to ensure that traffic only flows along authorized paths, preventing rogue routes and helping to detect and mitigate spoofed routes. 

*TGW routing table for VPCs attached to central TGW in Central Networking*
![TGW routing table for VPCs attached to central TGW in Central Networking](assets/factory-admin/security_concept/07_network_security/anti_spoofing_measures/tgw_routes.png)

* Security Groups and Network ACLs are in place to specify which IP addresses are allowed or denied access to resources within each VPC.
* VPC Flow Logs enabled for monitoring network traffic. GaurdDuty service implemented to detect and investigate any suspicious traffic patterns, including potential IP spoofing attempts.

*Screenshot for Egress & Inspection VPC flowlogs*
![Screenshot for Inspection VPC flowlogs](assets/factory-admin/security_concept/07_network_security/anti_spoofing_measures/inspection_vpc_flowlogs.png)
![Screenshot for Egress VPC flowlogs](assets/factory-admin/security_concept/07_network_security/anti_spoofing_measures/egress_vpc_flowlogs.png)

## Security Groups and Network ACLs
Security Groups and NACLs configured to only allow traffic from trusted sources and restrict access to specific IP ranges or CIDR blocks.

## Use IAM and MFA
Identity and Access Management (IAM) policies are implemented to restrict access to AWS resources based on user roles and permissions.
Multi-Factor Authentication (MFA) in place for AWS accounts to prevent unauthorized access to the AWS Management Console and AWS CLI.

* https://docs.uptimize.merckgroup.com/factory/team-access/ 
* https://d-99672e18db.awsapps.com/start#/ 

## Connect to the Internet using Network Address Translation (NAT) for private subnets
*Current Setup*
![internet route](assets/factory-admin/security_concept/07_network_security/anti_spoofing_measures/internet_route_diagram.png)

## References
* https://docs.aws.amazon.com/whitepapers/latest/logical-separation/vpc-and-accompanying-features.html
* https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html

---

# System Security

## Malware Protection

AWS Managed services are configured to manage threat detection.
AWS [GuardDuty](https://admin.docs.uptimize.merckgroup.com/others/guardduty/) and AWS [SecurityHub](https://admin.docs.uptimize.merckgroup.com/security_concept/system_security/security-hub/) are used to detect, investigate and respond to malware threats. Logging data inputs is the first step to detect threats. AWS GuardDuty scans the following data inputs to detect anomalies involving IAM Access Keys, EC2 Instances and S3 Buckets. 

- AWS CloudTrail event logs (user activity and API usage)
- VPC Flow Logs (IP traffic to/from network interfaces within a VPC)
- Amazon CloudWatch (Monitor apps, using log data)
- DNS logs (Log of DNS queries in a VPC)

GuardDuty allow integrations with AWS Security Hub which provides a central view across AWS Accounts.

### Enabling Malware Protection 
Malware protection is enabled in GuardDuty for EC2 based on behavior based analytics. Malware Protection intiates a scan when GuardDuty detects suspicous behavior indicative of malware. A list of findings that initiate a scan can be found here. (https://docs.aws.amazon.com/guardduty/latest/ug/gd-findings-initiate-malware-protection-scan.html)

### Management of infrastructure 
EC2 instances are managed in a two-fold approach. First, there are EC2 instances in the AWS Labs which are managed by the UPTIMIZE AWS Platform team. These EC2 instances are protected by GuardDuty, AMIs are updated and scanned every week on Sundays. Secondly, there are EC2 instances located in the AWS Factory accounts. Use case teams can decide whether they want to make use of fully-managed IT-I EC2 instances or if they want to fulfill security requirements and mange the EC2 instances on their own. The UPTIMIZE AWS team currently does not provide fully-managed EC2 instances for AWS Factories.

### Scan mode 
For each EC2 instance and container workload for which GuardDuty generates findings, GuardDuty Malware Protection initiates a scan only once every 24 hours. 

### Process of ensurance is up to date 
For EC2 instances managed by the UPTIMIZE AWS Platform, EC2 instace AMIs are updated every week on Sundays. For EC2 instances in the AWS Factory, IT-I ensures EC2 instances are up-to date. 

### Incident Management after Malware identification
 After malware scans of GuardDuty, possible values for Scan result are Clean or Infected. In case of infection and discovered malware, the instance is stopped, terminated and replaced with a new instance as needed. Since for the AWS Lab, everything is written as Infrastructure as Code and EC2 instances are intended to be short-lived, users should keep their code and data assets outside of the EC2 instance to not maintain any state on the instance itself (e.g. in S3 buckets). 

For IT-I managed EC2 instances in the AWS Factory, IT-I remediation processes are followed.

---

# Security Hub setup for AWS Uptimize
Internal IP spoofing occurs when an attacker masquerades as a legitimate internal resource by using a forged IP address.
To mitigate this risk in our AWS Uptimize setup, following security measures and best practices are implemented:

## Security Standard
Security Hub also generates its own findings by running automated and continuous security checks against rules. The rules are represented by security controls defined in security standards. Following security standards are enabled:
- CIS AWS Foundations Benchmark v1.2.0
- AWS Foundational Security Best Practices v1.0.0

## Integration
AWS Security Hub can aggregate security finding data from several AWS services and from supported AWS Partner Network (APN) security solutions. This aggregation provides a comprehensive view of security and compliance across AWS environment. Following services are integrated with security Hub:
- AWS: Config
- AWS: Firewall Manager 
- Amazon: GuardDuty
- AWS: Health
- AWS: IAM Access Analyzer
- Amazon: Inspector
- Amazon: Macie
- AWS: Systems Manager Patch Manager

## Setup
![Snapshot of security hub setup](assets/factory-admin/security_concept/06_system_security/securityhubsetup.png)
![Snapshot of security hub Findings](assets/factory-admin/security_concept/06_system_security/securityhubfinds.png)

## Audit Logs
We can split the audit logs into two categories. The logs GuardDuty analysis and the logs guard duty generates (guard duty findings).
GuardDuty mainly analysis two types of logs:
- CloudTrail logs 
- VPC Flow logs.
The CloudTrail logs are archived for the purpose of audit in the log archive account:
![Snapshot of cloudtrail logs archival](assets/factory-admin/security_concept/06_system_security/logarchival.png)

VPC Flow Logs capture information about the IP traffic going to and from network interfaces in usecase VPC.
Need to enable for each VPC as below:
![Snapshot of cloudtrail logs enabling](assets/factory-admin/security_concept/06_system_security/logenable.png)

---

# Secure Administration (Privileged Access)

## Dedicated Accounts
By default, all systems, platforms and accounts are password-protected, according to the Merck password policy.
MUIDs/XUIDs are used for user identification.
Users with a deactivated MUID/XUID will not be able to log into the system anymore.
For privileged accounts, e.g. administrators, SADM accounts are used.
Admins and users authenticate to Uptimize AWS using the Merck LDAP, Azure AD and AWS SSO.
See also tech spec ITCMP_TS_Data & Analytics Platform_AWS (Mango ID 20676063) section 5.2

The configuration and granted privileges and permissions will be regularly revisited in a periodic review.

Also please see ITINF Management of Uptimize AWS Procedure (Mango ID 20705602) section 2.5


## Session Confidentiality and Integrity
For administrator sessions to EC2 in the Lab and Factories, SSH in combination with AWS Session Manager is used for direct access to the EC2 nodes.
Users must be logged into the CLI with SSO to be able to connect to the EC2 instance.
Sessions are protected by SSH and HTTPS. For Session Manager idle time lockout is set to 20 minutes.
 - The user sends her public key to EC2 Instance Connect using the AWS CLI.
 - EC2 Instance connect pushes the key to the EC2 instance. The key remains for 60 seconds.
 - An SSM agent running on the EC2 instance establishes a bidirectional channel with the SSM backend.
 - The user establishes an SSH connection through a Websocket between Terminal and SSM.
 - Authentication and authorization for the user and the SSM agent is IAM's job.

The AWS web console with SADM accounts will be used for AWS env. Management.


## Monitoring of Activities
Since AWS SSO is used to login from both the CLI and the AWS Web console, administrative session are logged into AWS CloudTrail and additionally into AWS Session Manger history for EC2 instance connect.
These logs are periodically reviewed by the IT-AX team. Session monitoring is monitored and logged through AWS Session Manager history.
Monitoring of the platform incl configuration for the platform is defined in ITINF Management of Uptimize AWS Procedure (Mango ID 20705602)

Monitoring (Security Hub, CloudWatch, CloudTrail)
System monitoring ensures the system is operating as intended. Any deviation from expected service discovered shall be raised through the applicable standard IT processes for service management.
System monitoring includes monitoring of the entire Uptimize AWS platform. Platform administrators shall perform monitoring activities according to the process section 6.2, Logging and Monitoring described in IT/OT Security Standard (Doc. ID 20419427).
This includes monitoring of the AWS Security Hub, CloudWatch and CloudTrail.
Security Hub shall be monitored on a daily basis, while CloudWatch and CloudTrail shall be monitored on a weekly basis. In event of a security incident or bug, CloudWatch and CloudTrail shall be investigated on a daily basis as well, for at least two weeks after the event.
Definitions of how this shall be done, are described in section 2.3 of the ITINF Operational Tasks for Uptimize AWS Administration Working Instruction (Doc. ID 20726535).

The configuration and granted privileges and permissions will be regularly revisited in a periodic review.


## Dedicated Systems for Administration
The notion of managing privileged accounts through Jump hosts does not apply to AWS as it applies to MCloud.
In AWS, privileged accounts are managed through AWS SSO, Azure AD and Merck LDAP.

Administrators log in to AWS using AWS SSO and SADM accounts.
They have dedicated AWS SSO permission sets.
These permissions sets (technical controls) allow them to carry out administrative tasks on Uptimize.
End users do not have these administrative permission sets and cannot perform administrative tasks on managed infrastructure, services or applications. 

The session duration for Operators (AWSAdministrators) is set to an inactivity lock-out of 1 hour. 

MFA, SSO and SADM accounts are used for all admin accounts.


## Recertification of Privileged Accounts
User recertification for Uptimize AWS is described in IT-AX Working Instructions
1) "ITINF Operational Tasks for Uptimize AWS User Recertification" and
2) "ITINF IAM Identity and Access Management for 100010414 UPTIMIZE Data & Analytics Platform - AWS".
As these are Work Instructions for the IT-AX Operations team, the documents are stored in a
[Microsoft Teams folder](https://mdigital.sharepoint.com/:w:/r/sites/AdvancedAnalytics-Operations/Shared%20Documents/IT-AXO%20platform/AWS/Operation%20Manuals/Uptimize%20AWS%20User%20Recertification_V1.0.docx?d=w759a11bcbf91497898f890dc9610bba3&csf=1&web=1).

By default, all systems, platforms and accounts are password-protected, according to the Merck password policy.
MUIDs/XUIDs are used for user identification. Users with a deactivated MUID/XUID will not be able to log into the system anymore.
For privileged accounts, e.g. administrators, SADM accounts will be used.
For Uptimize AWS, Merck LDAP will be used to authenticate admins and users.
See also tech spec ITCMP_TS_Data & Analytics Platform_AWS (Mango ID 20676063) section 5.2

The configuration and granted privileges and permissions will be regularly revisited in a periodic review.

---

# Security Concept

Please browse through the below pages to learn more about the UPTIMIZE IT-I Managed Instance concepts.
1. [IT-Team Managed EC2 Instance Onboarding Process](./onboarding_process)
2. [EC2 Instance Restore Process](./restore)

---

# Merck AMI's in Uptimize & EC2 instance managed by IT-Linux Team Request Process
Merck Image Linux machines' for AWS Factory accounts are managed by the IT-Linux team. If Factory/Usecase team need IT-I managed EC2 instance, then request need to be raised to IT-I team.

Create a request by using below mentioned Link: [Demand request portal](https://evarooms.merckgroup.com/Topic/IS-S/Pages/Demand%20Management/Demand%20_Management.aspx)

Please reach out to the appropriate demand manager as indicated in the request link. They will guide you on how to record the demand in the portal accordingly.

![Information](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/Demand-ITI-Process.png)

The request will be processed upon approval by the respective application owner.



## Process flow:
The factory team plans for EC2 instances that need to be managed by the IT-I team (Linux or Windows environments).

Factory/use-case team initiates a demand form, which undergoes weekly review during an offline process. If a platform-based request aligns with current demand assessments, it receives blanket approval, assuming thorough prior evaluation and account readiness. Informal approval is then granted without further inquiries for implementation.

Each request is assigned a unique demand ID, mandatory for ordering EC2 instances using the newly created form by IT4U for Linux or Windows machines. This form includes a specific field for entering the demand ID.

Depending on the sector (to which the use case belongs), the team will engage the relevant demand manager (life sciences or healthcare or Electronic or MGF ) responsible for ITI demands. This ensures that when planning for an Uptimize account that requires ITI instances, the demand managers are notified, facilitating their proper involvement in the demand management process.

The application architecture is thoroughly analyzed to assess whether it is best suited for on-premises or cloud hosting. However, this analysis step is bypassed when demand arises, and instead, resource planning takes precedence. The number of necessary instances is identified, and the task of server build-out is assigned to the relevant team. Upon receiving the request, an engineer(IT-I) oversees its execution, supported by the factory team initiating the demand and the demand manager seamlessly coordinating approval from the IT-I team in the background.

# Roles and Responsibilities:

- Merck manages the AMI-EC2 instances.

## IT-I Team:
- Patches the OS level vulnerabilities.
- Does the system monitoring.

## Uptimize Platform Team Responsibilities:
- AWS Backup: EC2 AMI and volumes. (Linux / Windows)
- Route53 Resolver rules for below listed Domains [Link](https://docs.dev.uptimize.merckgroup.com/factory/network/)
1. merckgroup.com
2. merck.de
3. millipore.com
4. sial.com

---

## Purpose:
This runbook is exclusively applicable to the restoration process for EC2 instances managed by the IT-I Team (Windows/Linux). It details the steps required to restore these specific EC2 instances from AWS backups, which have a 120-day retention period, such as AMIs and Snapshots. Other AWS resources or use cases are outside the scope of this document.

These restoration activities are to be performed by the IT-I Windows/Linux Team, as the resources (AMIs, Snapshots) are tagged as managedby: LinuxAdmin or managedby: WindowsAdmin. The backup process is scheduled to occur every day at 06:00 PM Etc/UTC (UTC+00:00)..


## Scope:
This document covers the restoration process for the following AWS resources:
- EC2 Instances 
- EBS Volumes


## Prerequisites:
Before initiating the restoration process, ensure the following:
- Access to the AWS Management Console or CLI with the necessary permissions.
- Confirmation that the required backup (AMI, snapshot backup) is available.
- Notification to stakeholders about the restoration process.

# AWS Lifecycle Management with 120-Day Retention
**Overview**: AWS Lifecycle Management automates the handling of snapshots and backups based on predefined retention policies. For environments with a 120-day retention period, where data is moved to cold storage after 30 days, the lifecycle policy ensures data is securely stored before automatic deletion, optimizing storage costs and ensuring compliance with data retention requirements..

## Key Components
### Amazon Machine Images (AMIs):
**Creation**: AMIs are created regularly to capture the state of EC2 instances, providing a reliable backup point.
**Retention Policy**: AMIs are retained for 120 days. After this period, they are automatically deregistered, and associated snapshots are deleted.
### Snapshots:
**Creation**: Snapshots are taken of EBS volumes to back up data at regular intervals.

**Retention Policy**: Snapshots are retained for 120 days before automatic deletion, managing storage costs while ensuring recent backups are available for recovery.
### Lifecycle Policies:
**Automation**: AWS Data Lifecycle Manager (DLM) or custom scripts automate the creation and deletion of AMIs and snapshots, enforcing the 120-day retention period and reducing manual management needs in AWS side.


# RACI Matrix for EC2 Instance Restoration Process
| Activities                                                                                        |Use Case (Factory) Team|Windows / Linux Admin|UPTIMIZE platform team|Service Delivery Team|
|:------------------------------------------------------------------------------------------------------|:------|:------|:------|:------|
| Initiate restoration via an IT4U ticket with GLOBAL_UPTIMIZE_PLATFORM                                                                |R|-|-|I| |
| Inform the IT-I team to restore the EC2 instance in person, using the contact details provided below  |-|-|R|-| |
| Restore EC2 Instance from AMI                                                                         |-|R|-|-| |
| Bring EC2 Instance to Operational State (IT-I Standards)                                              |-|R|-|-|-|
| Provide Support for Permissions Related to AWS Resources                                              |-|-|R|| |
| Coordinate Communication and Documentation Updates                                                    |-|-|-|R||
| Bring all Applications to Operational State                                                           |R|-|-|-|-|            
| Ensure and Confirm System fully Functional Post-Restore                                               |R| | | | | |


# Restoration Process
## Restoring an EC2 Instance from an AMI
**Identify the AMI**:
- Navigate to the EC2 Dashboard.
- Click on "AMIs" under the "Images" section.
- Locate the AMI based on creation date or tags

## Launch EC2 Instance:
- Select the AMI.
- Click "Launch" and follow the steps to configure instance details, storage, tags, and security groups.
- Choose an appropriate instance type based on the original instance's specifications.
- Click "Review and Launch" and then "Launch."
## Post-Launch Verification:
- Verify that the EC2 instance is running and accessible.
- Check if all services and applications are functioning as expected.

# Restoring an EBS Volume from a Snapshot
## Identify the Snapshot:
- Navigate to the EC2 Dashboard.
- Click on "Snapshots" under the "Elastic Block Store" section.
- Locate the snapshot based on creation date or tags.
## Create a New Volume:
- Select the snapshot.
- Click "Actions" and choose "Create Volume."
- Specify the availability zone and volume type.
- Click "Create Volume."
## Attach Volume to EC2 Instance:
- Navigate to "Volumes" under the "Elastic Block Store" section.
- Select the newly created volume.
- Click "Actions" and choose "Attach Volume."
- Select the target instance and specify the device name.
- Click "Attach."
## Post-Attach Verification:
- Log in to the EC2 instance.
- Mount the volume if necessary and verify that data is intact.

# Restoring an EC2 Instance from an AMI in Another AZ
If an AWS Availability Zone (AZ) goes down, restoring your resources in another AZ is critical to maintaining business continuity. Here's how you can manage and restore your infrastructure in such a scenario.

## EC2 Instances
**Snapshots & AMIs**: Ensure that your instances have recent snapshots or AMIs that are not restricted to a single AZ.
## Restore Process:
### Identify the Latest Snapshot or AMI:
- Navigate to the EC2 Dashboard.
- Under the Snapshots or AMIs section, find the most recent backup.
### Launch a New EC2 Instance in Another AZ:
- When launching a new instance, select a different AZ within the same region.
- Use the AMI or attach an EBS volume created from a snapshot in the new AZ.
### Configure Networking:
- Update security groups and networking configurations to ensure that the instance is accessible.
- If necessary, reassign Elastic IPs (EIPs) to maintain the same public IP address.
## EBS Volumes
**Snapshots**: EBS snapshots are region-specific, not AZ-specific, so you can create volumes in any AZ within the same region.
## Restore Process:
### Create a New Volume from the Snapshot:
- In the EC2 Dashboard, go to the Snapshots section.
- Select the snapshot, then choose Create Volume.
- Ensure that the volume is created in a different AZ from the one that is down.
## Attach the Volume to an EC2 Instance in Another AZ:
After creating the volume, attach it to an instance running in another AZ.

## S3 and Other Global Services
**S3**: S3 is a regional service and not tied to a specific AZ, so your data should remain accessible.

**Route 53**: If you're using Route 53, ensure failover routing is configured to redirect traffic to healthy endpoints in other AZs.
## Networking (VPC)
**Subnets**: Ensure that your VPC has subnets in multiple AZs. If one AZ is down, resources in other subnets/AZs will remain unaffected.

**Route Tables**: Check that your route tables are correctly configured to ensure traffic can flow between the remaining AZs.


## Post-Restoration Activities
**System Validation**: Ensure all services and applications are running as expected after the restoration.

**Notification**: Inform stakeholders about the successful restoration.

**Documentation**: Update the incident report and any relevant documentation.

## Troubleshooting
### Common Issues:
**Issue**: AMI not found.

**Solution**: Verify the correct region and filters are applied.

**Issue**: Snapshot not attachable.

**Solution**: Check if the snapshot is in the correct availability zone.

### Contact Support:
**UPTIMIZE platform Team**: [IT4U ticket - Assignment group: GLOBAL_UPTIMIZE_PLATFORM]

**IT-I Linux Support**: [Nidhin Babu <nidhin.babu@merckgroup.com>]

**IT-I Windows Support**: [Siju Doniston <siju.doniston@merckgroup.com>]

---

# ITI report generation - Scheduled Report Delivery and Storage Details
The ITI Report will be made available to the user on a weekly basis or whenever configuration items detect and record any changes. The report will be stored in the user's designated bucket named "merckgroup-uptimize-instancelist" under the folder "uptimize_files/" with the file format "uptimize_server_list_{date}_{time}.csv," where 'date' and 'time' correspond to the date and time of report creation.

# User Access Management
Access to the 'merckgroup-uptimize-instancelist' bucket is restricted to the client. The AWS Admin team will receive email notifications upon report creation. The client user is responsible for granting access to the bucket or the report.

---

# AWS Account Lifecycle Management

This section covers the lifecycle management of AWS accounts on the Uptimize platform, including shared accounts, idle account management, and decommissioning processes.

---

# AWS Shared Use case Accounts

This feature allows AWS users to share the provisioned factory accounts between AWS usecases. The criteria for enabling account sharing across the use cases are as follows :

* Use case should belong to the same **sector**
* Use case should be of the same **Qualification** (Gxp/Nreg)
* Requires approval from parent Use case **Business / Product Owner**

## Process to enable AWS Account share across multiple Use cases

If a use case team wants to reuse an existing AWS factory account provisioned for a different use case, then they will have to chose `Yes` for the option to reshare existing factory while filling the extension object form. Then it will ask the users to select the account they want to re-use from the listed of provisioned accounts that matches their sector and qualification.

![Shared](/assets/factory-admin/shared_accounts/account_share.PNG)

Users also have an option to request for a new ADO repo for their shared use case. This repo will be created under the ADO project that is already provisioned for the parent usecase. After filling all the required parameters in `Edit` form, Users acn click on `Submit`.

On Submitting, user would now be the able to see the `Request Sharing` button in their workshop module for the extension object. Users can click on this to send out a request to the Parent (selected)
use case' Business and Product owner, requesting for approval to enable sharing.

![Request_sharing](/assets/factory-admin/shared_accounts/request_sharing.PNG)
![Request_form](/assets/factory-admin/shared_accounts/request_sharing1.PNG)

The Business Owner and the Product Owner of the parent use case will be receiving an email notification regarding the use case team's request to share there aws factory Usecase, with a link to the extesnion object. They can review this and can `Approve` or `Reject` the sharing request as shown in the below image:

![Approve_sharing](/assets/factory-admin/shared_accounts/approve_sharing.PNG)

Once the Business Owner or the Product Owner of the Parent use case approves your request for AWS account sharing, then the status of your AWS Extension object will be changed to `shared`. 

For these shared extension objects, no new AWS Accounts will be provisioned by the AWS Operations team.

![Shared](/assets/factory-admin/shared_accounts/shared.PNG)

The child use case object details will be listed in the workshop module of the parent use case, under the `Child Use case objects` section as shown below:

![Child_object](/assets/factory-admin/shared_accounts/child_usecase.PNG)

## Guidelines for Use Case Teams on Shared AWS Accounts

- AWS accounts may only be shared within the sector across use cases that adhere to the same regulatory classification (GxP/non-regulated).
- The parent use case team will be responsible for all costs incurred on these shared AWS accounts.
- The parent use case team will also serve as the primary point of contact for any security or compliance matters related to these shared AWS accounts.
- Any new requests regarding shared AWS accounts will only be processed after obtaining confirmation from all use case teams involved in the account sharing. For example, if the parent use case does not have Internet/Intranet or Foundry access enabled, but the child use case team requires these services for the shared Factory account, the teams must discuss and align on the requirements. A separate ticket must then be raised with the AWS Operations team to enable the requested services for the existing Factory account.


## Cost and Usage Breakdown with `u:use-case` Tag in AWS Cost Explorer

### Overview

To enable detailed cost tracking and allocation across different projects or workloads, AWS resources can be tagged with key-value pairs. One recommended practice is to use a tag such as `u:use-case` to identify the business purpose or workload associated with each resource.

---

### Tag Example

- **Tag Key:** `u:use-case`
- **Tag Values:**
  - `data-processing`
  - `ml-training`
  - `web-app`
  - `dev-environment`
  - `shared-service`
  - _etc._

---

### How to Use in Cost Explorer

1. **Tag Your Resources:**  
   Ensure all relevant AWS resources (EC2, S3, Lambda, RDS, etc.) are tagged with the `u:use-case` key and an appropriate value.

2. **Activate the Tag:**  
   In the AWS Billing Console, go to **Cost Allocation Tags** and activate the `u:use-case` tag so it appears in Cost Explorer.
   > _Note: This setup has already been enabled in the management account by the Platform team._

3. **Analyze in Cost Explorer:**
   - Open **AWS Cost Explorer**.
   - Set the **Group by** filter to `Tag: u:use-case`.
   - Optionally, filter by specific accounts, services, or time periods.

---

### Breakdown Example

Suppose you have the following resources:

- EC2 instances for data processing tagged as `u:use-case=data-processing`
- S3 buckets for ML training tagged as `u:use-case=ml-training`
- Shared RDS instance tagged as `u:use-case=shared-service`

In Cost Explorer, you can view the monthly cost for each use case, making it easy to:

- Attribute costs to business units or projects
- Identify high-cost workloads
- Optimize resource usage per use case

---

### Example Use Cases

| Use Case         | Tag Value        | Example Resources      | Monthly Cost (USD) |
|------------------|-----------------|-----------------------|--------------------|
| Data Processing  | data-processing | EC2, S3               | $1,200             |
| ML Training      | ml-training     | EC2, SageMaker, S3    | $2,500             |
| Web Application  | web-app         | EC2, ELB, RDS         | $800               |
| Shared Services  | shared-service  | RDS, S3               | $600               |

---

### Benefits

- **Transparency:** Clear visibility into costs per use case.
- **Chargeback/Showback:** Enables internal billing or cost allocation.
- **Optimization:** Identify and optimize high-cost workloads.
- **Reporting:** Simplifies reporting for finance and management.

---

### Best Practices

- **Standardize Tag Values:** Use a controlled vocabulary for `u:use-case` values.
- **Automate Tagging:** Use automation (e.g., IaC, Lambda, policies) to enforce tagging.
- **Review Regularly:** Periodically review tag usage and update as projects evolve.

---

# AWS Accounts Decommission Process for Non-Regulated (Nreg) Environments



This document outlines the comprehensive process for decommissioning AWS Factory accounts in **Non-Regulated (Nreg) environments**, including roles and responsibilities for all stakeholders involved in the decommissioning process.


## Prerequisites

- **IT4U Ticket Creation**: An IT4U ticket must be created for any AWS Factory account decommissioning request
- **Factory Admin Approval**: The request must have Factory Admin approval as documented in the Foundry extension form
- **Platform Team Authorization**: Once approved, the Platform team will proceed with the decommissioning process.

## Roles and Responsibilities

### Use Case Team Responsibilities

The Use Case team is responsible for the following activities before account decommissioning:

#### Data Management
- [ ] **Data Backup**: Create comprehensive backups of all critical data stored in the account
  - S3 buckets and objects
  - Database snapshots (RDS, DynamoDB, etc.)
  - EBS snapshots
  - Application logs and configurations
  - Any custom data stores

#### Resource Cleanup
- [ ] **Application Resources**: Delete or migrate all application-specific resources
  - EC2 instances
  - Lambda functions
  - API Gateways
  - Load balancers
  - Auto Scaling groups
  - CloudFormation stacks (application-specific)
  - Clean up Route 53 hosted zones (if applicable)

- [ ] **Data Storage**: Clean up all data storage resources
  - S3 buckets (after data backup)
  - RDS instances
  - DynamoDB tables
  - ElastiCache clusters
  - Redshift clusters

- [ ] **Security Resources**: Remove application-specific security configurations
  - IAM roles and policies (application-specific)
  - Security groups (application-specific)
  - KMS keys (application-specific)
  - Secrets Manager secrets


### Platform Team Responsibilities

The Platform team handles the infrastructure baseline and final decommissioning activities:

#### Baseline Infrastructure Cleanup
- [ ] **VPC Baseline Resources**: Remove all VPC baseline infrastructure
  - VPCs and associated subnets
  - Route tables and routes
  - Internet gateways and NAT gateways
  - VPC endpoints
  - Network ACLs
  - Transit Gateway attachments

- [ ] **Firewall and DNS Management**: Clean up network  and DNS resources
  - Remove firewall rule groups for the use case
  - Delete NS (Name Server) records associated with the account
  - Remove Route 53 resolver rules


#### Final Account Activities
- [ ] **Account Closure**: Initiate the AWS account closure process
- [ ] **Billing Verification**: Ensure all resources are properly cleaned up and billing is stopped
- [ ] **Documentation Update**: Update internal documentation to reflect the decommissioned account

## Decommissioning Process Workflow

### Phase 1: Preparation and Planning
1. **IT4U Ticket Creation** (Use Case Team)
   - Create detailed decommissioning request
   - Include business justification

2. **Factory Admin Review** (Factory Admin)
   - Review and approve the decommissioning request
   - Validate business justification

### Phase 2: Use Case Team Execution
1. **Data Backup** (Use Case Team)
   - Execute comprehensive data backup plan
   - Verify backup integrity
   - Document backup locations

2. **Resource Cleanup** (Use Case Team)
   - Remove all application-specific resources
   - Validate resource deletion
   - Provide cleanup confirmation

### Phase 3: Platform Team Execution
1. **Baseline Infrastructure Removal** (Platform Team)
   - Remove VPC baseline resources
   - Clean up networking infrastructure
   - Remove security baseline configurations

2. **Final Verification** (Platform Team)
   - Verify all resources are removed
   - Confirm account is ready for closure

### Phase 4: Account Closure
1. **Account Decommissioning** (Platform Team)
   - Initiate AWS account closure
   - Monitor closure process
   - Update internal systems and documentation


## Important Notes

> ⚠️ **Critical**: Ensure all data is properly backed up before beginning resource deletion. Data loss is irreversible once resources are deleted.

> 📋 **Documentation**: Maintain detailed documentation throughout the process for audit and compliance purposes.

> 🔄 **Dependencies**: Carefully review and address any cross-account dependencies before proceeding with decommissioning.

> 💰 **Cost Monitoring**: Monitor costs throughout the decommissioning process to ensure proper resource cleanup.


---

---

# Idle AWS Account Tracking Process

As part of cost optimization initiative, we have defined a process to track and manage the idle AWS accounts. This process is scheduled to run once in every quarter.

### Criteria For Idle AWS Account

* **How we categorize AWS account as idle?**  

  If there is no activity from the factory SSO roles(FactoryAdmin, FactoryDeveloperAdvanced, FactoryDeveloper,FactoryTester,FactorySupport) and IAM users created by factory team for last 90 days, AWS account will be flagged as idle.

### Idle Account Management

To make sure the idle account is not in use and we can safely decommision, we reach out to factory admin for the confirmation.

* **Email Communication:**  

  After we identify AWS account as idle, an email communication is sent to factory admin to confirm on the requirement of the account. The email communication has two confirmation links (one link to confirm if account is required and other link to confirm if account is not required). Factory admin should acknowledge by clicking on the link accordingly.

![Email Template](/assets/idleaccounts/email_template.jpg)

* **Reminder Emails:**  

  If there is no response from factory admin, reminder emails will be sent
  * First reminder email will be sent after 15 days of initial communication
  * Second reminder email will be sent after 10 days of first reminder
  * Third reminder email will be sent after 2 days of second reminder

![Reminder email](/assets/idleaccounts/reminder_email.jpg)

* **Soft Decommission:**  

  If there is no response from factory admin after reminder emails, factory team access will be blocked a day after third reminder email and same will be communicated to factory admin through email.

![Soft decommission](/assets/idleaccounts/soft_decommission.jpg)

* **Account Decommission:**  

  * If factory team still need the account, they can request for the restoration of their access.
  * If we don't receive further response, [account decommission process](https://docs.uptimize.merckgroup.com/factory/aws-accounts-decommission-process/) will be initiated

### Workflow

![workflow](/assets/idleaccounts/workflow.jpg)

---

# KPI Reports

Access the KPI Reports workspace here:  
[KPI Reports Workspace](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.7164d5b3-0069-4ba1-a9e6-4ee9df7c3929)


## 1. Uptimize - Overall Accounts View

![Dashboard](/assets/kpi1.png)

Provides a consolidated overview of AWS accounts across the organization.

### Key Highlights:
- Total number of accounts
- Unique user count
- Account classification (GxP / NREG)
- Users mapped to AWS groups and roles

### Data Availability:
- Organization level
- Sector level
- Account level

*(Visibility depends on user access permissions.)*
### Data Source: 
- AWS Groups/Users
- Monthly Refresh


## 2. Uptimize - User Information

![Dashboard](/assets/kpi2.png)


Provides insights into AWS user activity and access distribution.

### Key Highlights:
- Monthly count of users logging into AWS accounts
- Role-based user distribution
- Data available at:
  - Organization level
  - Sector level
  - Account level

### Data Source: 
- AWS Cloudtrail
- Daily Refresh

**Detailed version available via Restricted View:**  
[User Information - Restricted View](https://palantir.mcloud.merckgroup.com/workspace/restricted-view/preview/ri.gps.main.view.7dcf2d8f-d436-4630-945d-41ed3c3e1fe2)


## 3. Uptimize - Labs

![Dashboard](/assets/kpi3.png)

Focused on AWS Sector Lab accounts.

### Key Highlights:
- Monthly newly provisioned users (new users added to Lab accounts)
- Monthly AWS usage cost

This report helps track Lab account growth and cost trends.
### Data Source: 
- Foundry Labs register writeback data and Cost DTI
- Monthly Refresh


## 4. AWS Usage Cost (Daily)

![Dashboard](/assets/kpi4.png)

Provides detailed daily AWS cost visibility.

### Key Highlights:
- Daily AWS usage cost
- Data sourced from the CUR (Cost & Usage Report) table
- Data refresh latency: approximately 24-28 hours

### Data Availability:
- Organization level
- Sector level
- Use case level

*(Based on user access permissions.)*
### Data Source: 
- AWS CUR Table
- Daily Refresh (Data Retention: 1 month)

**Detailed version available via Restricted View:**  
[AWS Usage Cost - Restricted View](https://palantir.mcloud.merckgroup.com/workspace/restricted-view/preview/ri.gps.main.view.6347165c-ecf8-406a-a22e-a786d84ebfa1)


## Additional Datasets (Restricted Views)

The following datasets are accessible through restricted views:

### 1. aws_roleactivity (Restricted View)
- Captures events triggered by batch or automated roles
- Source: CloudTrail logs

### 2. cloudtrail_useractivity_ib
- Captures events triggered by individual users
- Source: CloudTrail logs

---

# Azure DevOps AWS Service Connection Using OIDC

We have configured OIDC identitity provider for Azure DevOps in all the AWS factory accounts and ADO service connection to AWS should be configured using OIDC.
This document outlines the steps for configuring AWS service connection in AzureDevOps using OIDC

<ld-notice headline="Note" mode="note">
IAM User and credentials are no longer needed for service connection configuration.
</ld-notice>

## Steps

Create IAM role and service connection with following steps

#### IAM Role creation

Create IAM role in the AWS factory account with trust policy by sustituting placeholders with values as below:
1. **AWSAccountId**: 12 digit AWS Account ID
2. **ADOProject**: ADO project name 
3. **ServiceConnectionName**: Name of the ADO service connection
```
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": 
                "arn:aws:iam::<AWSAccountId>:oidc-provider/vstoken.dev.azure.com/
                cfd61ec9-9ba3-4c54-b76e-6b094781de52"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "vstoken.dev.azure.com/cfd61ec9-9ba3-4c54-b76e-6b094781de52:sub": 
                        "sc://Uptimize/<ADOProject>/<ServiceConnectionName>",
                    "vstoken.dev.azure.com/cfd61ec9-9ba3-4c54-b76e-6b094781de52:aud": 
                        "api://AzureADTokenExchange"
                }
            }
        }
    ]
}

```
  ![roletrustpolicy](/assets/oidc/trust_policy.png)

#### Service Connection Creation
1. Navigate to Service connections in ADO project settings
2. Select ``New service connection`` to create a new connection
3. Select AWS 
4. In the Authentication page, enter the arn of the IAM role created earlier in ``Role to Assume (optional)`` field
5. Check ``Use OIDC (optional)``
6. Enter the service connection name and description in ``Service Connection Name`` and ``Description (optional)`` fields
<ld-notice headline="Note" mode="warning">
Service connection name should be same as used in IAM role trust policy 
</ld-notice>

7. Click save

---

# Authenticate Applications using Azure AD

Authentication to Single Page Applications and APIs using Azure AD is centrally managed in Uptimize AWS. By deploying an Azure DevOps pipeline, developers can generate all the required Azure AD configurations required to add an authentication layer to their applications.

## For Developers

### Ask for access to the Authentication project

**This service is currently only available to Lead Architects and select advanced AWS UPTIMIZE users. In time this service will be rolled out to all developers.**

To ask for access to the Authentication project, contact a Factory Administrator. The Administrator should follow the **For Administrators / Give Factory users access to the Authentication project** guide below.

## For Administrators

### Give Factory users access to the Authentication project

To give a Factory user access to the **Authentication** project and repository, as well as its pipelines, follow the steps below.

1. Navigate to the Uptimize homepage on Azure DevOps.
2. Click *Organization settings* in the left down corner.
3. Select *Users* from the right panel and click *Add user*.
4. Enter the email of the Factory user that requested access and for the *Access level* select *Basic*.
5. Navigate to the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/factory-auth-service-nreg-ec1) project.
6. Click *Project settings* in the left down corner.
7. Select *Permissions* from the right panel and click the *Authentication Users* group.
8. Select *Members*, click *Add* and search for the Factory user that requested access.

## Architecture

In the following sections, we detail the architecture for the development of an authentication layer between Azure AD and AWS deployed applications. The schema of the architecture is presented below.

![](/assets/authentication_architecture.png)

## Configure Azure AD

The Azure AD configurations for the authentication layer involve the creation of an App Registration and its Service Principal (Enterprise Application). In the following sections, we detail the steps required to register an application, update an application, add additional owners to an application and give application access to users or user groups.

### Register an application

To register an application on Azure AD, deploy the pipeline using the following steps.

1. Browse to the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/factory-auth-service-nreg-ec1) project.
2. Navigate to **Pipelines** from the right panel.
3. Select *All*, navigate to the folder with your project's name and select the **Create App Registration** pipeline.
4. Click *Run pipeline* and fill its parameters using the table guide below.

| Parameters   |      Required      |                                                                   Description                                                                   | Example |
|:--------:|:-------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------:|:-----:|
| environment | Yes |                                    The environment to deploy in: development, quality assurance, production.                                    | dev |
| appName | Yes |                                The application's name. Will be registered as *uptimize-[appName]-[environment]*.                                | auth-service |
| appHomepageURL | Yes |                                                         The application's Homepage URL.                                                         | example.com |
| spaRedirectUri | Yes |                                                    The Single Page Application Redirect URI.                                                    | example.com |
| userConsentDescription | Yes | A more detailed description of the permission granted by the scope. Shown to users only if you set **Who can consent** to **Admins and users**. | Allow the application to have read-only access to your Employee data. |
| userConsentDisplayName | Yes |             A short description of the scope's purpose. Shown to users only if you set **Who can consent** to **Admins and users**.             | Read-only access to your Employee records |
| adminConsentDescription | Yes |                          A more detailed description of the permission granted by the scope that only admins will see.                          | Allow the application to have read-only access to your Employee data. |
| adminConsentDisplayName | Yes |                                      A short description of the scope's purpose that only admins will see.                                      | Read-only access to your Employee records |
| type | Yes |   Whether this scope can be consented to by users or if admin consent is required. Select **Admins only** for higher-privileged permissions.    | User |
| value | Yes |                         The name of your scope. A common scope naming convention is **resource.operation.constraint**.                          | Api.Access |

<ld-notice headline="Note" mode="warning">
More information regarding Expose an API and the required fields can be found in this <a href=https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-expose-web-apis>official guide</a>.
</ld-notice>

5. Login to Azure Portal with an Azure account that owns the application.
6. Navigate to **App Registrations**.
7. Search for the application you created which will be in the format "*uptimize-[Application Name]-[Environment]*".
8. Navigate to the **Overview** tab.
9. Copy the application's Application (client) ID and Application ID URI.
10. Use them as in the configurations of the example Single Page Application and API found in the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) repository.
11. Ask the Azure AD team to grant admin consent to all the API permissions.

### Create Enterprise Application

To create the application's Service Principal (Enterprise Application) on Azure AD, deploy the pipeline using the following steps.

1. Browse to the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/factory-auth-service-nreg-ec1) project.
2. Navigate to **Pipelines** from the right panel.
3. Select *All*, navigate to the folder with your project's name and select the **Create Enterprise Application** pipeline.
4. Click *Run pipeline* and fill its parameters using the table guide below.

| Parameters   |      Required      |                                    Description                                    | Example |
|:--------:|:-------------:|:---------------------------------------------------------------------------------:|:-----:|
| environment | Yes |     The environment to deploy in: development, quality assurance, production.     | dev |
| appName | Yes | The application's name. Will be registered as *uptimize-[appName]-[environment]*. | auth-service |

5. Login to Azure Portal with an Azure account that owns the application.
6. Navigate to **Enterprise Application**.
7. Search for the application you created which will be in the format "*uptimize-[Application Name]-[Environment]*".
8. Verify that the Enterprise Application was created.

### Modify the App Registration

To add/remove an owner and/or update the Redirect URIs of an already registered application, deploy the pipeline using the following steps.

1. Browse to the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/factory-auth-service-nreg-ec1) project.
2. Navigate to **Pipelines** from the right panel.
3. Select *All*, navigate to the folder with your project's name and select the **Modify App Registration** pipeline.
5. Click *Run pipeline* and fill its parameters using the table guide below.

| Parameters   | Required |                                                 Description                                                  |          Example           |
|:--------:|:--------:|:------------------------------------------------------------------------------------------------------------:|:--------------------------:|
| environment |   Yes    |                  The environment to deploy in: development, quality assurance, production.                   |            dev             |
| appName |   Yes    |              The application's name. Will be registered as *uptimize-[appName]-[environment]*.               |        auth-service        |
| spaRedirectUri |    No    |             The Single Page Application Redirect URI. Leave empty if you do not wish to update.              |        example.com         |
| addAppOwnerByEmail |    No    |  The email of the additional application owner. Leave empty if you do not wish to add an additional owner.   | x123456@one.merckgroup.com |
| removeAppOwnerByEmail |    No    | The email of the additional application owner. Leave empty if you do not wish to remove an additional owner. | x123456@one.merckgroup.com |

6. Navigate to your App Registration in the Azure Portal.
7. Monitor the change to the Owners in the *Owners* tab.
8. Monitor the change to the Redirect URIs in the *Authentication* tab.

### Modify the Enterprise Application

To update the Enterprise Application of an already registered application, deploy the pipeline using the following steps.

1. Browse to the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/factory-auth-service-nreg-ec1) project.
2. Navigate to **Pipelines** from the right panel.
3. Select *All*, navigate to the folder with your project's name and select the **Modify Enterprise Application** pipeline.
5. Click *Run pipeline* and fill its parameters using the table guide below.

| Parameters   |      Required      |                                                 Description                                                  | Example |
|:--------:|:-------------:|:------------------------------------------------------------------------------------------------------------:|:-----:|
| environment | Yes |                  The environment to deploy in: development, quality assurance, production.                   | dev |
| appName | Yes |              The application's name. Will be registered as *uptimize-[appName]-[environment]*.               | auth-service |
| addAppOwnerByEmail |    No    |  The email of the additional application owner. Leave empty if you do not wish to add an additional owner.   | x123456@one.merckgroup.com |
| removeAppOwnerByEmail |    No    | The email of the additional application owner. Leave empty if you do not wish to remove an additional owner. | x123456@one.merckgroup.com |

6. Update the parameters and run the pipeline.
7. Navigate to your Enterprise Application in the Azure Portal.
8. Monitor the change to the Owners in the *Owners* tab.

### Add additional owners

To add additional Azure accounts that will own an application, so that they have permission to grant or revoke user access to an application, run the *Modify App Registration* and/or the *Modify Enterprise Application* pipelines.

### Give access to users or user groups

To give application access to users or user groups access, so that logging in to the application will personalize their experience, follow the steps below.

1. Login to Azure Portal with an Azure account that owns the application.
2. Navigate to your App Registration.
3. In the **Overview** tab, click the value of **Managed application in local directory**, which will have the same name as your application.
4. In the **Enterprise Application** menu, you will find the **Users and groups** tab. 
5. Select **Add User/Group** to add users or user groups that will have access to your application.

## Configure an API

An example API developed using Python, FastAPI and the Serverless Framework can be found in the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) Azure DevOps Repository.

### FastAPI

The FastAPI implementation is fairly standard with the exception of the inclusion of an OPTIONS endpoint that is not restricted by JWT authentication. This endpoint is called by the CORS preflight request and needs to be handled manually using the following code, due to limitations of the AWS API Gateway v2 handling of CORS in HTTP APIs.

```python
# create unauthorized OPTIONS endpoint required for CORS functionality
@app.options("/", status_code=200)
async def options():
    return
```
As we discussed above, in order to enable CORS, we include a separate Lambda PROXY path for the OPTIONS endpoint that does not require JWT authentication.

```yaml
Resources:
  HttpApiRouteOptionsProxyVar:
    Type: AWS::ApiGatewayV2::Route
    Properties:
      ApiId:
        Ref: HttpApi
      RouteKey: OPTIONS /{proxy+}
      Target:
        Fn::Join:
          - "/"
          - - integrations
            - Ref: HttpApiIntegrationAPI
    DependsOn: HttpApiIntegrationAPI
```

### CloudFormation Deployment

To deploy the CloudFormation stack of the API, follow the steps below. The CloudFormation stack will be deployed on eu-central-1 (Frankfurt) under the naming convention: *[Application Name]-[Environment]*.

1. Clone the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) repository.
2. Copy the files found under the *example/api* directory to your Factory project's repository.
3. Replace the CloudFormation template's path in the file *[example/spa/azure-pipeline.yml](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/azure-pipeline.yml)*.
4. Push the files and inspect them on the Azure DevOps repository.
5. Navigate to *Pipelines* from the right panel and click *New pipeline*.
6. Click *Azure Repos Git* and then select your repository.
7. Click *Existing Azure Pipelines YAML file* and enter the path to the *azure-pipeline.yml* file of your repository.
8. Click *Run* to run the pipeline and and fill its parameters using the table guide below.

| Parameters   |      Required      |  Description | Example |
|:--------:|:-------------:|:-----:|:-----:|
| environment | Yes | The environment to deploy in: development, quality assurance, production. | dev |
| appName | Yes | The application's name. Will be registered as *uptimize-[appName]-[environment]* | auth-service |
| awsServiceConnection | Yes | The name of the Azure DevOps service connection of the project to the AWS account. | MyServiceConnection |
| issuerUrl | Yes | The OpenID issuer URL of Azure AD. Replace with the Azure AD tenant ID of your application, if necessary. | https://login.microsoftonline.com/db76fb59-a377-4120-bc54-59dead7d39c9/v2.0 |
| audience | Yes | The OpenID audience of your application. Replace with the application's client ID. | 9bd96f1f-38a6-491f-83eb-3d8a32277e71 |
| vpcId | Yes | The VPC ID of the AWS account. | vpc-1234567890 |
| privateSubnetA | Yes | The ID of the private subnet A of the VPC. | subnet-1234567890 |
| privateSubnetB | Yes | The ID of the private subnet B of the VPC. | subnet-1234567890 |

<ld-notice headline="Note" mode="warning">
The IAM Role used by the AWS service connection needs to include the following IAM policies.
<ul>
  <li>cloudformation:CreateChangeSet</li>
  <li>cloudformation:CreateStack</li>
  <li>cloudformation:DeleteChangeSet</li>
  <li>cloudformation:DescribeChangeSet</li>
  <li>cloudformation:DescribeStacks</li>
  <li>cloudformation:DescribeStackResources</li>
  <li>cloudformation:ExecuteChangeSet</li>
  <li>cloudformation:UpdateStack</li>
  <li>s3:CreateBucket</li>
  <li>s3:HeadBucket</li>
</ul>
</ld-notice>

### App Registration

The configurations of the App Registration deployed by the Azure DevOps pipeline include:

- Enabling **Authentication** on a Single Page Application with the AWS CloudFront distribution URL of the application as the redirect URI.
- Enabling ID tokens in the **Implicit grant and hybrid flows** section of the **Authentication**.
- Enabling **Expose an API** with type set as *Admin* or *User* and scope value set as *Api.Access* or another relevant value.
- Adding the required **API Permissions** for Microsoft Graph and the exposed API. These are the *Delegated* permissions *email*, *offline_access*, *openid*, *profile*, *User.Read* and the *My API* permission to the scope value we set earlier when exposing our API. 

<ld-notice headline="Note" mode="warning">
All of the aforementioned permissions need to be granted by an admin of the Azure AD team.
</ld-notice>

### Service Principal (Enterprise Application)

The owner of the application can add additional owners in the **Owners** tab of the Enterprise Application. The application owners can grant or revoke application access to users or user groups. Owners can grant or revoke access to users or user groups, which will have access to the application after logging in, in the **Users and groups** tab of the Enterprise Application.

## Configure a Single Page Application

An example Single Page Application developed using React that utilizes Azure AD authentication can be found in the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) Azure DevOps Repository. 

### React

Aside from the application code, the authentication layer requires the utilization of the code found in the following JavaScript files.

- *[example/spa/react/src/App.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/App.js&version=GBmain&_a=contents)*

Provides a HTML code that returns the login information, the JWT token and an example function that calls the application's backend API using the JWT token. The AWS API Gateway URL of the API requires replacement.

- *[example/spa/react/src/authProvider.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/authProvider.js&version=GBmain&_a=contents)*

Provides the configuration of the MSAL package. The *authority* value needs to be replaced with the tenant's ID if different from the example one, the *clientId* value needs to be replaces with the App Registration's client ID and the *redirectUri* needs to be replaces with the AWS CloudFront URL of the after the application deployment.

- *[example/spa/react/src/index.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/index.js&version=GBmain&_a=contents)*

Provides the DOM to be rendered by React so that Azure AD authentication is required to access the application.

### CloudFormation Deployment

To deploy the CloudFormation stack of the Single Page Application, follow the steps below. The CloudFormation stack will be deployed on us-east-1 (N. Virginia) under the naming convention: *[Application Name]-[Environment]*. We deploy on us-east-1 (N. Virginia) due to the limitation of the combination AWS CloudFront and AWS WAF.

1. Clone the [factory-auth-service-nreg-ec1](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1) repository.
2. Copy the files found under the *example/spa* directory to your Factory project's repository.
3. Replace the values of *authority*, *clientID* and *redirectURI* in the file *[example/spa/react/src/authProvider.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/authProvider.js&version=GBmain&_a=contents)*.
4. Replace the value of *response* in the file *[example/spa/react/src/App.js](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/react/src/App.js&version=GBmain&_a=contents)*.

5. Replace the CloudFormation template's path and the `cd` command's path in the file *[example/spa/azure-pipeline.yml](https://dev.azure.com/Uptimize/_git/factory-auth-service-nreg-ec1?path=/example/spa/azure-pipeline.yml)*.

<ld-notice headline="Note" mode="warning">
To replace the values of the aforementioned variables, follow the comments inside the files.
</ld-notice>

5. Push the files and inspect them on the Azure DevOps repository.
6. Navigate to *Pipelines* from the right panel and click *New pipeline*.
7. Click *Azure Repos Git* and then select your repository.
8. Click *Existing Azure Pipelines YAML file* and enter the path to the *azure-pipeline.yml* file of your repository.
9. Click *Run* to run the pipeline and and fill its parameters using the table guide below.

| Parameters   |      Required      |  Description | Example |
|:--------:|:-------------:|:-----:|:-----:|
| environment | Yes | The environment to deploy in: development, quality assurance, production. | dev |
| appName | Yes | The application's name. Will be registered as *uptimize-[appName]-[environment]* | auth-service |
| awsServiceConnection | Yes | The name of the Azure DevOps service connection of the project to the AWS account. | MyServiceConnection |

<ld-notice headline="Note" mode="warning">
The IAM Role used by the AWS service connection needs to include the following IAM policies.
<ul>
  <li>cloudformation:CreateChangeSet</li>
  <li>cloudformation:CreateStack</li>
  <li>cloudformation:DeleteChangeSet</li>
  <li>cloudformation:DescribeChangeSet</li>
  <li>cloudformation:DescribeStacks</li>
  <li>cloudformation:DescribeStackResources</li>
  <li>cloudformation:ExecuteChangeSet</li>
  <li>cloudformation:UpdateStack</li>
  <li>s3:CreateBucket</li>
  <li>s3:HeadBucket</li>
</ul>
</ld-notice>