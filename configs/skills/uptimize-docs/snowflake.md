# UPTIMIZE Snowflake

---
Welcome to the documentation of UPTIMIZE Snowflake! Here you can find all information you need to get started with your Data and Analytics use cases on Snowflake.

## What is UPTIMIZE Snowflake?

While UPTIMIZE Foundry and AWS represent a holistic platform offering and address most user needs, for particular scenarios, Snowflake can be a true game changer. It brings the ecosystem to the next level of user experience and platform performance.

UPTIMIZE Snowflake is our cloud data warehouse. Snowflake is a SaaS product, providing OLAP (Online analytical processing) capabilities through a cloud native SQL engine combined with a very user-friendly web-based UI and a well-documented API. Snowflake also offers Snowpark, which allows developers to use powerful general purpose programming languages such as Python or Java to interact with data in Snowflake. Snowpark transforms code into highly optimized SQL under the hood while allowing for all the flexibility of general purpose programming languages.

We have completed a thorough assessment of all cloud-based data warehousing platforms on the market and have concluded together with the Sector Data Offices that Snowflake best suits Merck´s requirements.  Over the past months, we have taken the baseline Snowflake product and developed a Merck specific product that is tightly integrated into the UPTIMIZE Ecosystem. 


## When to use UPTIMIZE Snowflake for your use case?

Use UPTIMIZE Snowflake if your use case requires you to:
- analyzes of large amounts of structured data using auto-scaled and auto-optimized SQL 
- store or access data in a star, snowflake, or data vault schema
- build a Dashboard / BI application on Tableau, Qlik or SAC that has high-performance reporting needs with large datasets 
- have high performance access on datasets with row or column level security
- use data from external partners that provide their data in the Snowflake data marketplace, for example IQVIA

> While all the above might be valid reasons to use UPTIMIZE Snowflake, each use case requesting a Snowflake Account will be reviewed by your Sector Data Office Architecture team and by the MDAO Architecture team. Both teams will be assisting you in your architecture design and in determining if Snowflake is the right solution for your use case. 

UPTIMIZE Snowflake perfectly complements our existing UPTIMIZE offerings, for example:
- Performance acceleration when using Tableau or other data visualization tools with large datasets stored in UPTIMIZE Foundry
- Building a data warehouse by ingesting structured data from the UPTIMIZE AWS DataHub, UPTIMIZE AWS Factory Environments or UPTIMIZE Foundry. While AWS also has a cloud data warehousing service, called Redshift, we have decided to use Snowflake at Merck for all cloud data warehousing use cases. We made this decision jointly with the SDOs because Snowflake´s offering provides a more advanced feature set and is more user friendly.
- Build highly performant Streamlit Apps on the UPTIMIZE App Service accessing Snowflake data. Streamlit, a popular open-source python framework to create webapps, has been bought by Snowflake recently, we expect many synergies. Streamlit today is already the most used App framework in our UPTIMIZE App Service.


## What skills are required to use UPTIMIZE Snowflake?

For a typical use case on UPTIMIZE Snowflake, we expect the following user profiles:

**Dashboard/BI end user** or so-called data consumer, responsible for:
- Interact with the final products like dashboards and reports
- Run simple queries such as select statements

**Snowflake functional user** or so-called data producers, mostly Data Analysts and Data Scientists, responsible for:
- Analyze & model data using SQL, dbt or Python 
- Build data visualizations

**Snowflake use case admins**, responsible for
- Overall Architecture design
- Role based access management and permissions for their team
- Resource creation (e.g. Databases and compute data warehouses)
- Setting up data connections with other parts of the UPTIMIZE ecosystem


## Overview of the UPTIMIZE Snowflake user docs

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/faster-innovation-with-partners.svg" width="30" height="30"> Quick Start

---
Are you new to Merck Snowflake or do you want to be a new member of the organization? Here is a good starting point!

You will have a very brief overview about how to:

* Request for a Snowflake account
* Manage access to your account
* Manage access within your account
* Use the tools provided for you to ensure security and governance in your account
* Ingest data
* Consume data
* Manage warehouses

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/automate--modular--management.svg" width="30" height="30"> Account Management

---
Wether you are new to Snowflake or you have loads of experience with the platform, you will find useful information on how our Merck Snowflake organization accounts are managed, and how to get the best out of your governed account, here.

In this section you will find out about:

* Naming conventions
* Stored procedures
* Best practices

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/access-management.svg" width="30" height="30"> Access Management

---
Merck Snowflake organization follows a unique approach to the management of Snowflake accounts. Approved use cases will have their own Snowflake accounts within the organization, and will be responsible for the management of their own accounts. This approach allows for a more flexible and agile management of the accounts, and enables the use cases to have more control over their own data. The access to each of these accounts is provided using **SSO (Single Sign-On)** and **Merck credentials**.

Once logged into their account, the users will interact with their account-level resources. **Snowflake's role hierarchy concept** was leveraged to create a governed role hierarchy, combining **access** and **functional roles** for access management to the resources. This approach allows for a more granular access management, and enables the use cases to have more control over their own data.

In this section you will find out about:

* Account-level access management
* Role-based access management

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/cloud--infrastructure-management.svg" width="30" height="30"> Data Ingestion

---
Accounts in the Merck Snowflake organization are considered to be highly integrated with the AWS UPTIMIZE ecosystem. As a result, Snowflake Account users are able to access, ingest, and output data from/to certain storage locations in AWS UPTIMIZE ecosystem.

Data could be ingested into the Snowflake either manually, or automatically, on an event-based or scheduled basis. Merck Snowflake supports several data ingestion scenarios that you can find in this section:

* Automated Data Ingestion
  * Foundry
  * Snowpipe (from Factory S3 buckets)
* Manual Data Ingestion
  * Factory S3 buckets
  * DataHub S3 bucket
  * Performing federated queries (on Factory S3 buckets)

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/dashboard.svg" width="30" height="30"> Data Consumption

---
Snowflake offers very high performance computation units (**warehouses**) to get insights or build reports and outputs for your business. Snowflake provides integration possibilities for a large number of **BI and dashboarding** tools, and Merck Snowflake organization accounts are bootstrapped with integration configurations of the following:

* Tableau
* PowerBI

You have manipulated your data, created some nice pipelines out of it, and now you want to export it to a cloud storage, so to use that data elsewhere. Merck Snowflake organization accounts currently support **unloading data** to the following storage locations in **AWS UPTIMIZE**:

* Factory Account S3 buckets
* UPTIMIZE Datahub S3 buckets

---

# UPTIMIZE Snowflake Quick Start

Welcome to **UPTIMIZE Snowflake**! You're starting a new use case or already own one and want to use Snowflake data warehousing to accelerate your data processing?
You're in the right place! Here we'll show you what you need to know to get started with UPTIMIZE Snowflake.

## Request a Snowflake account

---
1. You first need to have a use case on UPTIMIZE Foundry: if you don't have one, you can request it in the [UPTIMIZE Foundry use case portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc)
2. Once your use case is created and in the Proof of Value Development phase, click on **More** and select `REQUIRES SNOWFLAKE ACCOUNT`. This also works if your use case already existed before.
3. This will open a `Snowflake account request form` where you need to fill additional information about your use case, such as:
    - **desired Snowflake Account Name**
    - **SADM Account** of the **use case admin**.
4. After making the request, a **Snowflake Extension Object** for your use case will automatically be created and can be found [here](https://palantir.mcloud.merckgroup.com/workspace/hubble/exploration?objectTypeRid=ri.ontology.main.object-type.c528c029-c1bb-4700-b913-73632d28f819). 
5. To proceed, please initiate an architecture review by clicking the `Request Initial Review` button. Your Snowflake account request will be evaluated by your **Sector Data Office (SDO)** to validate the usecase requirement for Snowflake at sector level. Once approved by your **SDO** the **MDAO Architecture Team** will do a technical review and approve or reject based on the findings during the review.
Once approved by both the SDO and MDAO Architecture Team, the Snowflake Platform Team will proceed with provisioning your account. If the request is not approved, you will be notified accordingly.
Please note that for GxP-regulated use cases, only the development environment will be provisioned at this stage like DEV,TST gxp accounts.
Additionally, for GxP use cases, to provision higher environments, please submit the `Request Final Review`. You will be required to complete the **Due Diligence Checklist** and share it with the MDAO Architecture Team for their review and approval.
Once the final review is approved, you may proceed by submitting `Request QA Account`, followed by `Request Prod Account`.

For more details on the architecture review process, please refer [here](UPTIMIZE/getting-started/architecture/architecture-review/).

After your Architecture has been approved, the UPTIMIZE Snowflake team will create a dedicated account. The named use case admin will be notified upon successful creation and configuration of the account and he will be able to sign into their account using **their Merck SSO** through the **Account's Organization-based URL** as [https://merckgroup-<UC_NAME>.snowflakecomputing.com]().

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/sf-sso-login.png" alt="" width="350"/>


> To learn more about the naming conventions in Snowflake accounts, so to find out the `<UC_NAME>` for your organization-based URL, please refer to [naming convention documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/).
> To learn more about the roles in Snowflake accounts, please refer to [role documentation](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/).

## The use case admin role
---
The use case admin has clearly defined responsibilities and privileges and is responsible for the Snowflake Account. 
 For example, the use case admin is **the only one** who can
- add and manage users to the account
- manage and create roles for other users
- create databases, schemas and warehouses

However, the use case admin **cannot**:
- Modify the account configuration
- use the native Database/Warehouse/Schema creation commands

To correctly perform your role as a use case admin, you will need to be familiar with the following topics:

## 1. User Management

---
The use case admin can manage the users of the Snowflake account by using the Azure portal and adding or removing users one the dedicated VIEWERS group in Azure AD. 
If you want to introduce another administrator to your Snowflake account, you need to do it via creating a ticket, and they will be added by the Snowflake Core Team.


> To learn more about managing access to your account and the account level access control, please refer to the [Account Level Access Management](https://docs.uptimize.merckgroup.com/snowflake/access-management/account-level-access/) page of this documentation.  

Use case admins also are able to request a managed technical user (Service user) to be created in their accounts. Please refer to the [Managed Technical Users](https://docs.uptimize.merckgroup.com/snowflake/access-management/managed-technical-users/) page of documentation.

## 2. Roles and Resource Access Management

---
In every snowflake accounts, 2 roles are made available to users:

* **`SNOWFLAKE_<UC_NAME>_ADMINS_EMSS`:** This role is attributed to the use case owner (or the introduced additional admins). It enables the admin to perform database and administrative operations.
* **`SNOWFLAKE_<UC_NAME>_VIEWERS_EMSS`:** This role is attributed by default to new users and has minimal rights.

Creation of databases and schemas, generates associated access and management roles, as well. 
use case admins are then required to create and manage a proper hierarchy in the account by designing **custom functional roles** and assign the necessary access roles to them based on the *responsibility and competency profile* in their team.

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/functional_role_design.png" alt="MarineGEO circle logo" width="428"/>

> For more details, please head to the [dedicated documentation](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/).

## 3. Stored Procedures

---
Snowflake accounts are configured to ensure that your data is protected and that your account is used in a compliant way.
The following operations are therefore only enabled through specific stored procedures:

* CREATE/REMOVE_DATABASE
* CREATE/REMOVE_SCHEMA
* CREATE/REMOVE_WAREHOUSE

These stored procedures enforce naming conventions and governance and also create access roles to the resources created by them (Look into item 3 in this Quick Start guide).
 Once a database and schema have been created, users can create and manipulate tables using the [regular Snowflake DDL commands](https://docs.snowflake.com/en/sql-reference/sql/create-table)

> For detailed instructions on how to use these stored procedure, please refer to the [dedicated documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/).
## 4. Data Ingestion

---
To integrate seamlessly in Merck workflow, all Snowflake accounts are configured to ingest data from selected uptimize services (Please refer to the [Snowflake Data Ingestion documentation section](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/) for more details.):

* **UPTIMIZE DataHub (on-demand):** You can load data from certain paths on UPTIMIZE DataHub bucket to your Snowflake account. **Feature is only available upon request approval**.
* **UPTIMIZE Factory S3 (on-demand):** You can load data from an UPTIMIZE AWS Factory S3 bucket to your Snowflake in a self-service manner.
* **UPTIMIZE Factory S3 (automated):** You can deploy an event-based automated ingestion job for an UPTIMIZE Factory S3 bucket.
* **Foundry:** You can setup an automated data export job on Foundry to move data sync to your Snowflake Account.

> For more details, please head to the [dedicated documentation](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/).


## 5. Data Consumption

---
To expand the usage of data beyond the Snowflake environment, all accounts are configured to enable data unloading and consumption to and from the following services (Please refer to the [Snowflake Data Consumption documentation section](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/) for more details.):

* **UPTIMIZE Factory S3:** You can export data to an UPTIMIZE AWS Factory S3 bucket by using the same resources that enable you to ingest data from S3 buckets.
* **UPTIMIZE Datahub S3:** You can export data to an UPTIMIZE AWS Datahub S3 bucket **Feature is only available upon request approval**.
* **Merck Tableau:** You can access your snowflake data directly from Tableau using OAuth to support your dashboarding.
* **Merck PowerBI:** PowerBi users can import Snowflake data from the PowerBI by selecting Snowflake as "other source".

> **Note:** At the time of writing this page, PowerBI is only supported down to the integration level. Further support for the product will not be offered by the Snowflake Core Team.

## 6. Working with warehouses

---
Warehouses are the compute units of snowflake. They are significant factors when it comes to both the performance and the cost in your account, so the need to be managed with care.

To help you with a better management of the warehouse, you may refer to [guidelines and best practices](https://docs.uptimize.merckgroup.com/snowflake/account-management/best-practices/).

---

# Merck Snowflake Organization

Merck Snowflake Organization follows a unique decentralized approach. In this concept:

* Each use-case is provided with a dedicated Snowflake account
* Gevernance is enforced using the Snowflake Management Accounts:
  * ROOT
  * AUTOMATION
  * MONITORING

![Snowflake Organization Setup](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/organization-setup.png)

For non-regulated (NREG) use-cases, **one** account is provided for the use-case. For regulated (GXP) use-cases, upon request, **mutiple accounts will be provided** (DEV, TEST, PROD).

> To ensure the highest level of functionality, all the provisioned accounts are of the **Business Critical tier**. Please note that this is **the most expensive tier of Snowflake**, and therefore, following the [Merck Snowflake Best Practices](https://docs.uptimize.merckgroup.com/snowflake/account-management/best-practices/) is highly recommended.

Use-case accounts can independently ingest data from the approved sources or consume the data on their account.

To share the data between the accounts, the account owners can leverage Snowflake Data sharing capabilities.
To share the data within the same same account, eg between dev and prod environments, the account owners can leverage Zero-Copy cloning.

In addition to use case accounts, three additional accounts are configured to provide governance and automation in the Merck Snowflake Organization:

* **ROOT** account is used by Snowflake Organization Administrators for high-level organization management, manual monitoring, and usage reporting
* **AUTOMATION** account is used by the deployed Azure Devops Pipelines to perform automated Account creation and configuration, configuring governance, and gathering monitoring data
* **MONITORING** account is where all the consolidated monitoring data is stored and provides dashboarding capabilities for the Snowflake Organization Administrators and use-case owners


## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/softlayer--enablement.svg" width="30" height="30"> Naming Conventions

---
To provide better governance, and to enable automated monitoring, the use case Snowflake accounts and resources follow certain naming conventions. To learn more about the naming conventions, please refer to the [Naming Conventions](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/) page.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/storage--product.svg" width="30" height="30"> Stored Procedures

---
Stored procedures are bootstrapped into the Snowflake accounts so to provide better governance in the Accounts. They help the use case admins to better manage the access to their resources. Stored procedures also enforce naming conventions on certain resources that are created by them. To learn more about the stored procedures, please refer to the [Stored Procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/) page.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/troubleshooting.svg" width="30" height="30"> Best Practices

---
To ensure the highest level of functionality, all the provisioned accounts are of the **Business Critical tier**. Please note that this is **the most expensive tier of Snowflake**, and therefore, following the [Merck Snowflake Best Practices](https://docs.uptimize.merckgroup.com/snowflake/account-management/best-practices/) is highly recommended.

For the most part, Merck Snowflake organization follows the same best practices as the default Snowflake best practices. However, due to a more in-depth governance deployed, reading the **Merck Snowflake Best Practices** is still recommended.


## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/security.svg" width="30" height="30"> Security

Merck Snowflake Organization enforces strong security at account, user, and data levels. Access is restricted through strict network policies and approved IP ranges.

For more details, see the [Security](https://docs.uptimize.merckgroup.com/snowflake/account-management/account-security/) page.

---

# Naming Conventions

## Account-level Naming Conventions

---
There are two main types of Snowflake Accounts depending on their regulatory conformity: 

* **GxP accounts** :regulated accounts
* **non-GxP accounts**: non-regulated

Both types need to have a unique **use-case name associated, consisting of 15 letters without any special characters.** The usecase name is case sensitive and cannot include  *TEST*.

The **GxP accounts** need to differentiate between environments such as DEV, TST, QA and PROD. For this purpose the following naming template is imposed:

**USECASE**\_GXP\_**ENV**, e.g. *CHD_GXP_PROD*

For **non-GxP accounts**, there is no general need for separation between the environments. For such use cases, the following naming template is imposed:

**USECASE**\_NREG\_ALL, e.g. *CHD_NREG_ALL*

where *NREG* stands for *non-regulated* in order to keep it consistent with the currently adopted naming convention in AWS UPTIMIZE use case accounts and *ALL* stands for all environments.

> **Note:** Once the account name is constructed, you can have the corresponding organization-based URL for your account as ```https://merckgroup-<UC_NAME>.snowflakecomputing.com```.

## Resource-level Naming Conventions

---

### Databases

Database name is composed of domain name, environment and *DB* suffix:

**DOMAIN**\_**ENV**\_DB, e.g. *CHD_DEV_DB*

where *ENV* stands for the environment and can be set as **SANDBOX**, **DEV**, **TEST**, **VAL**, **QA**, and **PROD**. The **DOMAIN** is meant to represent the purpose inside the use case.

### Warehouses

Warehouse name is composed of the domain name, the environment type, and a unique warehouse name and *WH* suffix:

**DOMAIN**\_**ENV**\_**NAME**\_WH, e.g. *ANALYTICS_DEV_WL2_WH*

So, basically, the warehouse name includes the **name of the database it is associated with** and the **warehouse name itself**.

### Schemas

Schemas are logical groupings of datasets in a database, therefore, it is suggested to compose the schema name as follows:

**GROUP**\_**FUNCTION**, eg. *ANALYTICS_DS*, *ANALYTICS_STAGING*, *ANALYTICS_BI*

where **GROUP** is representative of the logical grouping, and **FUNCTION** can be either the end user function (role) or a schema type (data vault, staging etc)

> Please note that the above schema naming composition is not enforced. But it is best practice to follow the above naming convention.

### Roles

Access to Account-level resources in Snowflake are handled by Access Roles associated with those resources.

For each **Database** there are **Three roles** with naming reference to the corresponding database name as such:

**DOMAIN**\_**ENV**\_SYSADMIN, e.g. *CHD_DEV_SYSADMIN*

**DOMAIN**\_**ENV**\_ROLEADMIN, e.g. *CHD_DEV_ROLEADMIN*

**DOMAIN**\_**ENV**\ADVANCEDDEVELOPER, e.g. *CHD_DEV_ADVANCEDDEVELOPER*

For each **schema** in the database there are **three roles** with naming reference to the corresponding database and schema as such:

**DOMAIN**\_**ENV**\_**SCHEMA**\_R, e.g. *CHD_DEV_SAIZEN_R*

**DOMAIN**\_**ENV**\_**SCHEMA**\_RW, e.g. *CHD_DEV_SAIZEN_RW*

**DOMAIN**\_**ENV**\_**SCHEMA**\_RWC, e.g. *CHD_DEV_SAIZEN_RWC*

where **SCHEMA** is the name of the schema.

### Users

There are two types of users, either Azure Active Directory (MUID/XUID/SADM) users or managed technical user (Service user).

For the 1st type (AAD), the naming of the user will be the exact name from the identity server.

**MUID**\@**ONE**\.**MERCKGROUP**\.**COM**, e.g. *M330961@ONE.MERCKGROUP.COM*

For the 2d type (Managed technical user), It is composed of *MUSER* as a prefix, username and environment:

**MUSER**\_**USERNAME**\_**ENV**, e.g. *MUSER_FOUNDRY_QA*

where **_ENV_** stands for the environment and can be set as **DEV**, **QA**, and **PROD**. The **DOMAIN** is meant to represent the purpose inside the use case.


## Monitoring and Enforcement

---
Automatic controls are done on a schedule in the use-case Accounts. These controls verify adoption of security and best-use practices, proper role and access management, and usage intensity.

In case of **violation of the critical guidelines**, the use-case Account owner is notified to take the proper action.

> Please note that any resource that is being used for production purposes, needs to identified by `ENV = PROD` in their naming.

> Please note that any resource identified by **PROD** are subjected to monitoring controls for enforcement of security and best-use practices.

---

# Stored procedures

Stored procedures are used for the automation of administrative tasks such as role assignments or warehouse, database and schema creations.
In addition to the automation, stored procedure are a great way to enforce certain conventions including naming conventions or specific role assignments, as well as, to provide logging and exception handling capabilities.

The important aspect of stored procedures is that there they can be executed following two approaches.

* The default option: **execute as owner**, lets users with only *USAGE* permission on the procedure, to run it with the owner privileges. This allows users without high privilege permissions, such as "Create Database", to create the resource but with the enforced naming conventions and the automatic role creation based on the guidelines.
* Another option is to create a stored procedure with **execute as caller** setting, which impersonates the caller when executing the stored procedure. The latter option is good for automation purposes however it does not enable us to enforce the naming conventions or input validation, as users that have permissions to run the code in the stored procedure can then simply run the same code outside of the stored procedure. **Therefore the option used in the predefined snowflake stored procedures will always be the *execute as owner***. However users are free to create their own stored procedure with the settings of their choice.

> Because of the high privilege tasks performed by the stored procedures, **ONLY the use case admins will have USAGE privilege on the following predefined stored procedures**.

## How to use

Stored are bootstrapped into and stored on each Snowflake account from the very beginning.

To execute stored procedures, you need to use the pre-created database **OPERATIONS_DB** and schema **STORED_PROCS**. A default warehouse is also created in each account, enabling the users to execute stored procedures, called **OPERATION_WH**. Its usage is granted to all users.

Stored procedures are only meant to be used by the **use case admins**, however the procedures themselves could only be modified and updated by the **Merck's Snowflake core team** members.

> **Best Practice:** It is strongly recommended to use **named parameters** when calling stored procedures instead of positional arguments. Named parameters improve code readability, maintainability, and prevent errors when procedure signatures are updated.

**Example of Named Parameters vs Positional Arguments:**

```sql
-- Positional arguments (not recommended)
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('mydomain', 'dev', 7);

-- Named parameters (recommended)
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE(
  domain => 'mydomain',
  env => 'dev',
  data_retention_time_in_days => 7
);
```

Named parameters use the syntax `parameter_name => value`, making it clear what each argument represents.

## Procedures
---

### Databases
---

There exist two stored procedures for Database management: one for creation of a database with three roles, and one for the database removal together with the roles and associated warehouses.

#### Create Database

```sql
CREATE_DATABASE(domain VARCHAR, env VARCHAR, data_retention_time_in_days NUMBER)
```

This stored procedure enforces the [pre-defined naming conventions](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/) and also creates the following two roles according to the [RBAC guidelines](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/):

* **\<domain\>\_\<env\>\_SYSADMIN**: granted the ownership of the Database
* **\<domain\>\_\<env\>\_ROLEADMIN**: owner of all the roles created for schemas in the Database
* **\<domain\>\_\<env\>\_ADVANCEDDEVELOPER**: This role is created to perform actions on behalf of the UCAdmin, such as creating and deleting schemas within a specific database. Currently, this is the scope of the role, but it may expand in the future.

> It is in **UCADMIN** (usecase admin) responsibilities to assign specific users/functional roles to these database specific roles.

The following arguments are accepted:
* *domain* : *VARCHAR* **(required)**, your domain name. Can not exceed 30 characters.
* *env* : *VARCHAR* **(required)**, the environment for which the Database is intended. Accepted values: *'SANDBOX', DEV', 'TEST', 'VAL', QA', 'PROD'* in any combination of lower and upper cases (they are all changed to uppercase anyway).
* *data_retention_time_in_days* : *NUMBER* **(optional)** , the time travel parameter specifying how far in the past can you go with the data retention. Default value is 1 day and accepted parameters are in between 1 and 7 days.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('mydomain', 'dev', 7);
```

or 

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('my_domain', 'dev');
```

The *DB_ALREADY_EXISTS* error is raised when trying to run the procedure with the same parameters again.

> **Note:** As stored procedures do not have the default argument option as in other languages, we are using *Procedures Overloading*, which means there are actually two stored procedures with the same name but one of them has three arguments (the additional optional argument) and another only two. For the end user it seems as if he/she could choose to provide the optional argument or not.

#### Create Database from share

To create a database as a consumer from a share is a special operation and requires a different stored procedure: 

```sql
CREATE_SHARE_DATABASE(domain VARCHAR, env VARCHAR, share_name VARCHAR)
```

This stored procedure enforces the [pre-defined naming conventions](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/) and also creates the following two roles according to the [RBAC guidelines](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/):

* **\<domain\>\_\<env\>\_R**: granted read permissions on the whole database.

> It is in **UCADMIN** (usecase admin) responsibilities to assign specific users/functional roles to this database reader role.

The following arguments are accepted:

* *domain* : *VARCHAR* **(required)**, your domain name. Can not exceed 30 characters.
* *env* : *VARCHAR* **(required)**, the environment for which the Database is intended. Accepted values: *'SANDBOX', DEV', 'TEST', 'VAL', QA', 'PROD'* in any combination of lower and upper cases (they are all changed to uppercase anyway).
* *share_name* : *VARCHAR* **(required)** , the share name parameter is the full Snowflake identifier for the shared database resource, It includes: **(The organization Name)**.**(Account Name)**.**(Share Name)**


Example usage of the procedure:

```sql
CALL CREATE_SHARE_DATABASE('mydomain', 'dev', 'MERCKGROUP.PROVIDER_ACCOUNT.MYSHARE');
```

> **Note:** Only one database can be created for each share. If you want to create another database, you will first need to remove the current one.

#### Remove Database

```sql
REMOVE_DATABASE(database_name VARCHAR)
```

Removal of the Database using the stored procedure, adds logging capabilities, while dropping all the schemas, warehouses and roles associated with it. This stored procedure calls two other stored procedures: *remove_schema()* and *remove_warehouse()*.

The following arguments are accepted:

* *database_name* : *VARCHAR* **(required**), the database name. An error is raised if not provided.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_DATABASE('mydomain_dev_db');
```

#### Clone Database

```sql
CALL CLONE_DATABASE(
  SOURCE_DATABASE_NAME VARCHAR,
  IMMUTABLE_CLONE BOOLEAN DEFAULT FALSE,
  AT_BEFORE_CLAUSE VARCHAR DEFAULT NULL,
  TIME_TRAVEL_PARAMETER VARCHAR DEFAULT NULL,
  TIME_TRAVEL_VALUE VARCHAR DEFAULT NULL,
  CUSTOM_DOMAIN VARCHAR DEFAULT NULL,
  CUSTOM_ENV VARCHAR DEFAULT NULL,
  CUSTOM_ID VARCHAR DEFAULT NULL
);
```

This stored procedure creates a zero-copy clone of a Snowflake database with automatic time travel support and configurable permission models. The clone inherits the roles from the source database and uses them in the cloned database.

**Clone Naming Convention:**

The generated clone database name follows different patterns based on parameters:

1. **Default** (no custom parameters): `DOMAIN_ENV_CLONE_YYYYMMDD_DB`
   - Example: `SALES_DEV_DB` → `SALES_DEV_CLONE_20261012_DB`

2. **Custom domain/env**: `CUSTOM_DOMAIN_CUSTOM_ENV_DB`
   - Example: `CLONE_DATABASE(source_database_name => 'SALES_DEV_DB', custom_domain => 'ANALYTICS', custom_env => 'PROD')` → `ANALYTICS_PROD_DB`

3. **Custom ID**: `DOMAIN_ENV_CLONE_CUSTOMID_DB` (ID zero-padded to 8 digits)
   - Example: `CLONE_DATABASE(source_database_name => 'SALES_DEV_DB', custom_id => '123')` → `SALES_DEV_CLONE_00000123_DB`

> ** Deprecation Alert: ** if you used to use the old stored procedure **CREATE_DATABASE_CLONE**, we are going to deprecate it soon, please start using the below one.

* *SOURCE_DATABASE_NAME* : *VARCHAR*, **(required)**, The name of the source database to clone.
* *IMMUTABLE_CLONE* : *BOOLEAN*, **(optional, default: FALSE)**, A flag indicating whether the clone should be immutable, If TRUE, the clone will be a read-only snapshot of the source database, meaning no changes can be made to it.
* *AT_BEFORE_CLAUSE* : *VARCHAR* **(optional)**,This is used to specify the "time travel" clause, indicating the specific time at which the database should be cloned, The value should be one of "AT" or "BEFORE", examples :

  * AT_BEFORE_CLAUSE = 'AT' (This would specify a point in time when cloning the database)
  * AT_BEFORE_CLAUSE = 'BEFORE' (This would indicate cloning the database before a specific event)

* *TIMETRAVEL_PARAMETER* : *VARCHAR* **(optional)**,Defines how the time travel should be applied to the database snapshot, It allows you to specify the type of time travel mechanism you want to use, There are three available options:

  * TIMETRAVEL_PARAMETER = 'TIMESTAMP' (This would set the point in time using a timestamp)
  * TIMETRAVEL_PARAMETER = 'OFFSET' (This would set the point in time using an offset from the current time)
  * TIMETRAVEL_PARAMETER = 'STATEMENT' (This would set the point in time based on a specific query ID for statement)

* *TIMETRAVEL_VALUE* : *VARCHAR* **(optional)**, This parameter holds the actual value corresponding to the TIMETRAVEL_PARAMETER, The value you provide here determines the exact point in time or offset that will be used for the cloning operation, examples:

  * TIMETRAVEL_VALUE = '2023-01-01 10:00:00' (This would be the timestamp for time travel)
  * TIMETRAVEL_VALUE = '1 DAY' (This would indicate an offset of 1 Day from the current time)
  * TIMETRAVEL_VALUE = '8e5d0ca9-005e-44e6-b858-a8f5b37c5726' (This could be the query ID for statement used for time travel)

* *CUSTOM_DOMAIN* : *VARCHAR* **(optional)**, Custom domain name for the clone. Cannot be used with `CUSTOM_ID`. Must be provided together with `CUSTOM_ENV`. Max 50 characters. When provided, creates new roles for the target domain/environment and revokes permissions from source database roles.

* *CUSTOM_ENV* : *VARCHAR* **(optional)**, Custom environment for the clone. Cannot be used with `CUSTOM_ID`. Must be provided together with `CUSTOM_DOMAIN`. Accepted values: 'SANDBOX', 'DEV', 'TEST', 'VAL', 'QA', 'PROD' (case-insensitive).

* *CUSTOM_ID* : *VARCHAR* **(optional)**, Custom identifier for the clone (max 8 digits, will be zero-padded). Cannot be used with `CUSTOM_DOMAIN`/`CUSTOM_ENV`. Must contain only digits.

**Permission Management:**

The stored procedure handles permissions differently based on the cloning scenario:

**When `CUSTOM_DOMAIN` and `CUSTOM_ENV` are provided:**
- Creates target database roles (`DOMAIN_ENV_SYSADMIN`, `DOMAIN_ENV_ROLEADMIN`, `DOMAIN_ENV_ADVANCEDDEVELOPER`)
- Creates target schema roles (`DOMAIN_ENV_SCHEMA_R/RW/RWC`)
- Revokes all permissions from source database roles on the clone
- Transfers schema ownership to target `SYSADMIN` role using `REVOKE CURRENT GRANTS`
- Establishes role hierarchy for clean permission separation between environments

**When `CUSTOM_ID` is provided or no custom parameters are provided (default clone):**
- The clone inherits all roles and permissions from the source database
- The clone database name format varies:
  - With `CUSTOM_ID`: `DOMAIN_ENV_CLONE_CUSTOMID_DB` (ID zero-padded to 8 digits)
  - Default (no custom parameters): `DOMAIN_ENV_CLONE_YYYYMMDD_DB` (includes timestamp)
- No new roles are created
- Existing source database roles retain their permissions on the clone
- No permission separation occurs - the clone shares the same role structure as the source
- Both source and clone databases remain accessible with the same role structure
- Ideal for testing, backup, or development purposes where you need a point-in-time copy

Example usage of the procedure:

* Cloning a database as mutable (editable) with default naming:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db'
);
```
Result: Creates `MYDOMAIN_DEV_CLONE_20261012_DB` with full read-write access

* Cloning a database as immutable (read-only):

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  immutable_clone => TRUE
);
```
Result: Creates `MYDOMAIN_DEV_CLONE_20261012_DB` with read-only access

* Clone with custom domain and environment (cross-domain cloning):

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  custom_domain => 'ANALYTICS',
  custom_env => 'PROD'
);
```
Result: Creates `ANALYTICS_PROD_DB` with permissions transferred to `ANALYTICS_PROD_*` roles

* Clone with custom ID:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  custom_id => '123'
);
```
Result: Creates `MYDOMAIN_DEV_CLONE_00000123_DB`

* Cloning a database with a Time Travel Offset:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  immutable_clone => TRUE,
  at_before_clause => 'AT',
  time_travel_parameter => 'OFFSET',
  time_travel_value => '3600'
);
```
Result: Creates a clone from 3600 seconds (1 hour) ago

* Cloning a database with a Specific Timestamp:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  immutable_clone => TRUE,
  at_before_clause => 'AT',
  time_travel_parameter => 'TIMESTAMP',
  time_travel_value => '2024-10-10 00:00:00'
);
```

* Cloning a database Before a Specific Statement:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  immutable_clone => TRUE,
  at_before_clause => 'BEFORE',
  time_travel_parameter => 'STATEMENT',
  time_travel_value => '8e5d0ca9-005e-44e6-b858-a8f5b37c5726'
);
```

* Clone with custom domain/env and time travel:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CLONE_DATABASE(
  source_database_name => 'mydomain_dev_db',
  custom_domain => 'ANALYTICS',
  custom_env => 'QA',
  immutable_clone => FALSE,
  at_before_clause => 'AT',
  time_travel_parameter => 'TIMESTAMP',
  time_travel_value => '2024-10-09 12:00:00'
);
```

#### Rename Database

```sql
RENAME_DATABASE(
  current_database_name VARCHAR,
  new_database_name VARCHAR,
  cascade_rename BOOLEAN DEFAULT TRUE
)
```

This stored procedure renames Snowflake databases and automatically handles cascading changes to associated roles and warehouses based on the database type and transition scenario. The procedure intelligently detects the database type and applies appropriate renaming logic.

**Database Types:**

The procedure recognizes three types of databases:

1. **Original Database**
   - Pattern: `DOMAIN_ENV_DB` (e.g., `SALES_DEV_DB`)
   - Has 3 database-level roles: `SYSADMIN`, `ROLEADMIN`, `ADVANCEDDEVELOPER`
   - Has schema-level roles: `SCHEMA_R`, `SCHEMA_RW`, `SCHEMA_RWC`
   - Has associated warehouses: `DOMAIN_ENV_*_WH`

2. **Clone Database**
   - Pattern: `DOMAIN_ENV_CLONE_YYYYMMDD_DB` (e.g., `SALES_DEV_CLONE_20241009_DB`)
   - Created by the `CLONE_DATABASE` stored procedure
   - Same role structure as original database

3. **Shared/Listing Database**
   - Pattern: `DOMAIN_ENV_DB` (same as original)
   - Has only 1 role: `DOMAIN_ENV_R` with IMPORTED PRIVILEGES

The following arguments are accepted:

* *current_database_name* : *VARCHAR* **(required)**, The name of the database to rename.
* *new_database_name* : *VARCHAR* **(required)**, The new name for the database.
* *cascade_rename* : *BOOLEAN* **(optional)**, Whether to cascade rename to roles and warehouses. Default value is TRUE. Only applies to Original→Original scenario. **VERY IMPORTANT: ** Please make sure that you understand the consequences of setting this parameter as TRUE/FALSE, this action is irreversible. 

**Supported Scenarios:**

**Scenario 1: Clone → Original (Promotion)**

Promotes a clone database to an original database by renaming it and re-granting all permissions to the existing target roles.

Actions performed:
- Renames the database
- Re-grants ownership on database to existing SYSADMIN role
- Re-grants USAGE to ADVANCEDDEVELOPER and ROLEADMIN roles
- Re-applies all schema permissions to existing schema roles (R, RW, RWC)

```sql
CALL OPERATIONS_DB.STORED_PROCS.RENAME_DATABASE('SALES_DEV_CLONE_20241009_DB', 'SALES_QA_DB');
```

> **Note:** The `cascade_rename` parameter is ignored for this scenario.

**Scenario 2A: Original → Original (Full Cascade)**

Renames an original database and cascades the rename to all associated roles and warehouses.

Actions performed:
- Renames the database
- Renames 3 database-level roles (SYSADMIN, ROLEADMIN, ADVANCEDDEVELOPER)
- Renames all schema-level roles (SCHEMA_R, SCHEMA_RW, SCHEMA_RWC)
- Renames all associated warehouses (DOMAIN_ENV_*_WH)

```sql
CALL OPERATIONS_DB.STORED_PROCS.RENAME_DATABASE('SALES_DEV_DB', 'SALES_QA_DB', TRUE);
```

or simply:

```sql
CALL OPERATIONS_DB.STORED_PROCS.RENAME_DATABASE('SALES_DEV_DB', 'SALES_QA_DB');
```

**Scenario 2B: Original → Original (Database Only)**

Renames only the database without changing roles or warehouses.

Actions performed:
- Renames database only
- Roles and warehouses remain unchanged

```sql
CALL OPERATIONS_DB.STORED_PROCS.RENAME_DATABASE('SALES_DEV_DB', 'SALES_QA_DB', FALSE);
```

**Scenario 3: Shared/Listing → Shared/Listing**

Renames a shared/listing database and its single R role.

Actions performed:
- Renames the database
- Renames single R role (DOMAIN_ENV_R)

```sql
CALL OPERATIONS_DB.STORED_PROCS.RENAME_DATABASE('SALES_SHARED_DB', 'FINANCE_SHARED_DB');
```

> **Note:** The `cascade_rename` parameter is ignored for this scenario.

**Blocked Scenarios:**

The following scenarios are explicitly blocked by the procedure:

* **Original → Clone**: Use the `CLONE_DATABASE` procedure instead
* **Clone → Clone**: Clone databases can only be promoted to original databases

> **Important:** Shared/Listing databases are automatically detected and handled within the Original→Original scenario. Mixing shared and non-shared databases in a single rename is prevented by the validation logic. 


### Create Listing

#### CREATE_LISTING_DATABASE

The `CREATE_LISTING_DATABASE` stored procedure automates the creation of a new internal database from an existing internal Snowflake data listing.

```sql
CREATE_LISTING_DATABASE(domain VARCHAR, env VARCHAR, listing_id VARCHAR)
```
**The following arguments are accepted:**
* *domain* : *VARCHAR* **(required)**, your domain name. Can not exceed 30 characters.
* *env* : *VARCHAR* **(required)**, the environment for which the Database is intended. Accepted values: *'SANDBOX', DEV', 'TEST', 'VAL', QA', 'PROD'* in any combination of lower and upper cases (they are all changed to uppercase anyway)
* *listing_id* : *VARCHAR* **(required)** The internal listing ID used to create the database.

**Example usage:**

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_LISTING_DATABASE(
    'SALES',
    'DEV',
    '1234abcd5678efgh'
);
```

> **Note:**
> * The listing_id must reference an existing internal data listing within your organization's Snowflake account.
> * If the email is not verified, the user must run the stored procedure [SET_USER_EMAIL](#set_user_email)(email VARCHAR) to register and validate email before executing this procedure.

---
### Schemas

There exist two stored procedures for Schema management: one for creation of a schema with three roles, and one for the removal of the schema together with the roles.

#### Create Schema

```sql
CREATE_SCHEMA(database_name VARCHAR, name VARCHAR, data_retention_time_in_days NUMBER)
```

This stored procedure enforces the naming conventions by **limiting the max characters in schema name**, but more importantly, it **creates the proper roles structure** by creating three schema roles together with the privileges, as documented in [RBAC guidelines](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/):

* **\<domain\>\_\<env\>\_\<schema_name\>_R**: granting READ-ONLY access on the schema
* **\<domain\>\_\<env\>\_\<schema_name\>_RW**: granting READ/WRITE access on the schema
* **\<domain\>\_\<env\>\_\<schema_name\>_RWC**: granting READ/WRITE/CONTROL access on the schema

The following arguments are accepted:

* *database_name* : *VARCHAR*, **(required)**, the database name. An error is raised if not provided.
* *name* : *VARCHAR*, **(required)**, your schema specific name. The max allowed number of characters is 30.
* *data_retention_time_in_days* : *NUMBER* **(optional)** . The time travel parameter specifying how far in the past can you go with the data retention. Default value is 1 day and accepted values are in between 1 and 7 days.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SCHEMA('mydomain_dev_db', 'schema1', 7);
```

or

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SCHEMA('mydomain_dev_db', 'schema1');
```

The *SCHEMA_ALREADY_EXISTS* error is raised when trying to run the procedure with the same parameters again.

> **Note:** As stored procedures don't have the default argument option as functions in popular programming languages, we are using *Procedures Overloading*, which means there are actually two stored procedures with the same name but one of them has three arguments (the additional optional argument) and another only two. For the end user it seems as if he/she could choose to provide the optional argument or not.

#### Remove Schema

```sql
REMOVE_SCHEMA(database_name VARCHAR, name VARCHAR)
```

Removal of the schema using the stored procedure, adds logging capabilities, while dropping all the roles associated with it.

The following arguments are accepted:

* *database_name* : *VARCHAR*, **(required**), the database name. An error is raised if not provided.
* *name* : *VARCHAR*, **(required)**, your schema specific name. An error is raised if not provided.

```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_SCHEMA('mydomain_dev_db', 'schema1');
```
---
### Warehouses

There exist two stored procedures for Warehouse management: one for creation of a warehouse and one for its removal.

#### Create Warehouse

```sql
CREATE_WAREHOUSE(database_name VARCHAR, name VARCHAR, size VARCHAR)
```

The main reason behind automating warehouse creation is to impose naming conventions as well as to save costs by making sure the *auto suspend* parameter is set while the size is not unnecessarily too big.

The following arguments are accepted:

* *database_name* : *VARCHAR* **(required)**, the full name of the database for which this warehouse is intended. An error is raised if not exists.
* *name* : *VARCHAR* **(required)**, your warehouse specific name. This parameter is required for naming conventions, as users might need multiple warehouses for the same domain and same environment. The max allowed number of characters is 15.
* *size* : *VARCHAR* **(required)**, your warehouse size. To avoid unnecessarily big compute units, the only allowed sizes are: XSMALL(X-SMALL), SMALL, MEDIUM. If later the size needs to be changed, or has to be larger than the allowed sizes by the procedure, it can be cautiously changed by the Warehouse owner (which is a sysadmin role for the database) with the following command:

```sql
ALTER WAREHOUSE <full_warehouse_identifier> SET WAREHOUSE_SIZE = LARGE;
```

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_WAREHOUSE('mydomain_dev_db', 'myname', 'xsmall');
```

> **Note:** Please note that the *CREATE_WAREHOUSE* procedure does not create any access roles for the warehouse. The warehouse owner is the sysadmin role of the database, associated with the warehouse(see [Database Access Roles](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/)). They can **grant the usage of the warehouse** to other **functional roles** by using the following command:
> ```sql
> GRANT USAGE ON WAREHOUSE <WH_NAME> TO ROLE <FUNCTIONAL_ROLE>;
> ```
#### Remove Warehouse

```sql
REMOVE_WAREHOUSE(warehouse_name VARCHAR)
```

The removal of warehouse through stored procedures adds logging capabilities.

The following arguments are accepted:

* *warehouse_name* : *VARCHAR* **(required)**, the warehouse name. An error is raised if not exists.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_WAREHOUSE('mydomain_dev_myname_wh');
```
---
### Managed Role Grants

#### ALTER_MANAGED_ROLE_GRANTS

This stored procedure allows the UCADMIN to assign or revoke a predefined list of roles to users or roles, even without direct ownership. It ensures tighter control over role assignment while delegating administrative capabilities.

**The following arguments are accepted:**
* *ROLE_NAME* : *VARCHAR* **(required)**, The name of the managed role to grant or revoke.
* *GRANT_TYPE* : *VARCHAR* **(required)**, Either `GRANT` or `REVOKE`.
* *ASSIGNEE_TYPE* : *VARCHAR* **(required)** Either `ROLE` or `USER`.
* *ASSIGNEE_NAMES* : *ARRAY* **(required)** List of assignee names (users or roles).

**Example usage:**

Grant a managed role to users:
```sql
CALL OPERATIONS_DB.STORED_PROCS.ALTER_MANAGED_ROLE_GRANTS(
  'USAGE_VIEWER',
  'GRANT',
  'USER',
  ARRAY_CONSTRUCT('M330961@ONE.MERCKGROUP.COM', 'ANOTHER_USER@ONE.MERCKGROUP.COM')
);
```

Revoke a managed role from a user:
```sql
CALL OPERATIONS_DB.STORED_PROCS.ALTER_MANAGED_ROLE_GRANTS(
  'USAGE_VIEWER',
  'REVOKE',
  'USER',
  ARRAY_CONSTRUCT('M330961@ONE.MERCKGROUP.COM')
);
```

Grant a managed role to other roles:
```sql
CALL OPERATIONS_DB.STORED_PROCS.ALTER_MANAGED_ROLE_GRANTS(
  'USAGE_VIEWER',
  'GRANT',
  'ROLE',
  ARRAY_CONSTRUCT('DATA_ANALYST_ROLE', 'REPORTING_ROLE')
);
```

> **Note:** Only roles managed by the PLATFORM team (tagged with `OPERATIONS_DB.ACCOUNT_MANAGEMENT.OWNER = 'PLATFORM'`) can be granted or revoked using this procedure. All operations are logged and run in a transaction for safety.

---
### User Email

#### SET_USER_EMAIL

The SET_USER_EMAIL stored procedure registers or updates the email address of the currently authenticated user and triggers the email verification process.

```sql
CALL SET_USER_EMAIL(email VARCHAR);
```
**The following arguments are accepted:**
* *email* : *VARCHAR* **(required)**, The user's email address to associate with the current Snowflake user account. Must be a valid email format.

**Example usage of the procedure:**

```sql
CALL SET_USER_EMAIL('user@example.com');
```

---
### Integrations
We offer a stored procedure to help use-case admins to create integrations on Snowflake with other services like S3 for example

#### Create S3 Storage Integration

```sql
CREATE_STORAGE_INTEGRATION(integration_name VARCHAR, env VARCHAR, storage_aws_role_arn VARCHAR, storage_allowed_locations VARCHAR);
```

This stored procedure creates a storage integration with the provided attributes. The storage integration object name will be in the format: `<integration_name>_<env>`. Additionally, it grants the UCADMIN ownership and usage privilege on the object. This allows you to alter or drop the storage integration as needed. For more details, refer to the Snowflake documentation: [ALTER STORAGE INTEGRATION](https://docs.snowflake.com/en/sql-reference/sql/alter-storage-integration), [DROP INTEGRATION](https://docs.snowflake.com/en/sql-reference/sql/drop-integration).

The following arguments are accepted:

* *integration_name* : *VARCHAR* **(required)**, the name of the integration, could be anything (e.g. marketing_data). Avoid using whitespaces or providing empty name.
* *env* : *VARCHAR* **(required)**, the environment for which the integration is intended. Accepted values: 'DEV', 'QA', 'PROD', 'SANDBOX', 'VAL', 'TEST' in any combination of lower and upper cases (they are all changed to uppercase anyway).
* *storage_aws_role_arn* : *VARCHAR* **(required)**, Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.
* *storage_allowed_locations* : *VARCHAR* **(required)**, used to refer to one or more storage S3 bucket locations.Supports a comma-separated list of URLs for existing buckets and, optionally, paths used to store data files for loading/unloading. Alternatively supports the * wildcard, meaning "allow access to all buckets and/or paths".


Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_STORAGE_INTEGRATION(
  'marketing_data',
  'dev',
  'arn:aws:iam::123456789012:role/storageintegrationrole',
  's3://marketing_campaigns/'
);
```

> **Note:** This integration could be used to with Factory data ingestion, check the relevant data ingestion docs page for more details.

#### Create External Volume

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EXTERNAL_VOLUME(
    external_volume_name VARCHAR,
    env VARCHAR,
    storage_location_logical_id VARCHAR,
    storage_base_url VARCHAR,
    storage_aws_role_arn VARCHAR,
    storage_aws_external_id VARCHAR
);
```
This stored procedure creates a an external volume in Snowflake with the provided attributes. The external volume object name will be in the format: `<integration_name>_<env>`. Additionally, it grants the ``` UCADMIN ``` ownership and usage privilege on the object.

The following arguments are accepted:

- *external_volume_name* : *VARCHAR* **(required)**, The name of the external volume to be created. This name will be used to identify the volume uniquely within the Snowflake account.
- *env* : *VARCHAR* **(required)**, the environment for which the external volume is intended. Accepted values: *'SANDBOX', DEV', 'TEST', 'VAL', QA', 'PROD'* in any combination of lower and upper cases (they are all changed to uppercase anyway).
- *storage_location_logical_id* : *VARCHAR* **(required)**, A logical identifier for the storage location in the external cloud provider (e.g., AWS S3). This value helps map the external volume to the correct storage location.
- *storage_base_url* : *VARCHAR* **(required)**, The base URL of the external storage, typically the bucket or directory path in the cloud provider (e.g., s3://bucket-name/).
- *storage_aws_role_arn* : *VARCHAR* **(required)**, The Amazon Resource Name (ARN) of the AWS IAM role that grants Snowflake access to the external storage. This role is used for secure authentication and access to the storage location (e.g., arn:aws:iam::123456789012:role/SnowflakeAccessRole).
- *storage_aws_external_id* : *VARCHAR* **(optional)**, An optional external ID used to further secure the integration between Snowflake and AWS. If provided, it will be included in the external volume creation process; otherwise, Snowflake will handle the auto-generation of the external volume. (Default value is NONE)

#### Example usage of the procedure:

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EXTERNAL_VOLUME(
  'my_volume_name',
  'dev',
  'aws s3',
  's3://bucket_name/',
  'arn:aws:iam::123456789012:role/SnowflakeAccessRole'
);
```

or 

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EXTERNAL_VOLUME(
  'my_volume_name',
  'dev',
  'aws s3',
  's3://bucket_name/',
  'arn:aws:iam::123456789012:role/SnowflakeAccessRole',
  'eid12345'
);
```

> **Note:** Once the external volume is created, you can modify its properties using the [ALTER EXTERNAL VOLUME](https://docs.snowflake.com/en/sql-reference/sql/alter-external-volume) statement if needed. This allows you to update attributes such as storage locations, permissions, or other configurations without recreating the volume.


#### Create Email Notification Integration

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EMAIL_NOTIFICATION_INTEGRATION(
    integration_name VARCHAR
);
```
This stored procedure creates a notification integration with the type `EMAIL` in your account and it it's going to grant the ``` UCADMIN ``` ownership and usage privilege on that integration.

The following arguments are accepted:

- *integration_name* : *VARCHAR* **(required)**, The name of the integration to be created. This name will be used to identify the notification integration uniquely within the Snowflake account. It should not contain any special characters or spaces.

#### Example usage of the procedure:

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EMAIL_NOTIFICATION_INTEGRATION(
  'my_ops_team_email_notification'
);
```

> **Note:** Once the integration is created, you can easily alter it to update the recipients list, subject, etc.., please refer to Snowflake's official docs [ALTER NOTIFICATION INTEGRATION (email)
](https://docs.snowflake.com/en/sql-reference/sql/alter-notification-integration-email). 


#### Create Foundry Source Connection

```sql
CREATE_FOUNDRY_SOURCE_CONNECTION(source_id VARCHAR)
```

This stored procedure creates a pre-configured *external integration* if not exists in the account and also creates the needed resources *(e.g. users, roles, etc..)* to enable the connection from Foundry to the Snowflake account.

The created Foundry source resources in Snowflake follows this naming convention: **FOUNDRY_OIDC_\<SOURCE_ID\>**. This convention applies on the roles and the users.

The following arguments are accepted:

* **source_id** : *VARCHAR* **(required)**, the ID of the source created in Palantir Foundry.

Example usage of the procedure:

you have to get the source id and run the procedure like below:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_FOUNDRY_SOURCE_CONNECTION('ri.magritte..source.xxxxxx-xxxxxx-xxxxxx-xxxxxx');
```

> **Note**: to explore more how to use this Foundry OIDC connection, refer to [Foundry Virtual Tables](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/foundry-virtual-tables/)

#### Remove Foundry Source Connection

```sql
REMOVE_FOUNDRY_SOURCE_CONNECTION(source_id VARCHAR)
```

This stored procedure removes the resources created for a certain Foundry source connection, it deletes the *user and the role*, but it retains the *external integration*.

The following arguments are accepted:

* **source_id** : *VARCHAR* **(required)**, the ID of the source created in Palantir Foundry.

Example usage of the procedure:

you have to get the source id and run the procedure like below:
```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_FOUNDRY_SOURCE_CONNECTION('ri.magritte..source.xxxxxx-xxxxxx-xxxxxx-xxxxxx');
```


### Resource Monitors

Use-case admins can create resource monitor on different level, either the account-level or the warehouse level, to do so, we have couple of stored procedure for this.

> **Notes:**  
> - No naming convention for the resource monitors, but the name must be unique, otherwise, the procedure will fail to create it.  
> - These stored procedures are just for the creation, however, to define the body/rules of the procedures, we are allowing use-case admins to modify the created resource monitor, please refer to [ALTER RESOURCE MONITOR](https://docs.snowflake.com/en/sql-reference/sql/alter-resource-monitor)


> **Note:**  
> Notification behavior depends on the **type of resource monitor** and whether notifications are enabled for the individual user.  
>
> **For warehouse-level monitors:**  
> - Notifications are sent to:  
>   - All account administrators who have enabled resource monitor notifications.  
>   - Non-administrator users included in the **notification list** for the warehouse monitor.  
>
> **For account-level monitors:**  
> - Notifications are sent only to:  
>   - The **account administrator** with the **OWNERSHIP privilege** on the monitor (if they have enabled notifications).  
>   - Other **account administrators** who have enabled notifications through Classic Console.  
>
> <span style="color:red;">Non-administrator users cannot receive notification emails for **account-level resource monitors**.</span>

#### Create Resource Monitor - Account-Level

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_RESOURCE_MONITOR(name VARCHAR)
```

This will create resource monitor and set it on the account-level, behind the scenes it runs `ALTER ACCOUNT SET RESOURCE_MONITOR = 'YOUR RESOURCE MONITOR NAME';` on behalf of the accountadmin. 

The following arguments are accepted:

* *name* : *VARCHAR* **(required)**, the resource monitor name. An error is raised if this name is used before.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_RESOURCE_MONITOR('account_usage_credits');
```


> **Note:** Snowflake allows you to set only one resource monitor on the account-level, if you tried to create multiple, it will fail, you have to drop the old one first by running the REMOVE_RESOURCE_MONITOR stored procedure.

#### Create Resource Monitor - Warehouse-Level

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_RESOURCE_MONITOR(name VARCHAR, warehouse_name VARCHAR)
```

This will create resource monitor for the specified warehouse.

The following arguments are accepted:

* *name* : *VARCHAR* **(required)**, the resource monitor name. An error is raised if this name is used before.
* *warehouse_name* : *VARCHAR* **(required)**, the warehouse name. An error is raised if not exists.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_RESOURCE_MONITOR('analytics_wh_credits', 'myusers_dev_analytics_wh');
```

> **Note:** Snowflake allows you to set only one resource monitor per warehouse, if you tried to create multiple, it will fail, you have to drop the old one first by running the REMOVE_RESOURCE_MONITOR stored procedure.



#### Remove Resource Monitor

```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_RESOURCE_MONITOR(name VARCHAR)
```

This will drop the specified resource monitor and it works either on the account-level or the warehouse-level.

The following arguments are accepted:
* *name* : *VARCHAR* **(required)**, the resource monitor name. An error is raised if this name is used before.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.REMOVE_RESOURCE_MONITOR('account_usage_credits');
```

### Administration

Below some stored procedures that helps the usecase admins in the account administration.

#### Enable Unredacted Queries For Users

To enable unredacted query text for queries failing due to syntax or parsing errors in Snowflake, you need to run the below stored procedure to allow this functionality for certain users, even yourself.

```sql
CALL OPERATIONS_DB.STORED_PROCS.ENABLE_UNREDACTED_QUERIES_FOR_USER(users ARRAY)
```

The following arguments are accepted:
* *users* : *ARRAY* **(required)**, it takes array of usernames, make sure to consider the case sensitivity, users most of the time are in ALL CAPS.

Example usage of the procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.ENABLE_UNREDACTED_QUERIES_FOR_USER(['M330961@ONE.MERCKGROUP.COM']);
```


#### Timezone Adjustment

By default the timezone of the account is set to `America/Los_Angeles`. Use-case admins can adjust the timezone of the account by running the following stored procedure:

> **Note:** The timezone must be a valid timezone name in IANA database, you can find the list of valid timezone names [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) under the column `TZ identifier`.

```sql
CALL OPERATIONS_DB.STORED_PROCS.ADJUST_TIMEZONE(timezone VARCHAR)
```

As an example, if you want to set the timezone to `Europe/London`, you can run the following command:

```sql
CALL OPERATIONS_DB.STORED_PROCS.ADJUST_TIMEZONE('Europe/London');
```

## Logging
---
Each call to the predefined stored procedures is logged that is saved in the **OPERATIONS_DB** database under the **LOGS** schema and the **STORED_PROCS_LOGS** table. All users have *READ* permissions on the entire **LOGS** schema.

The logs table include the following columns:

* **TS** - *TIMESTAMP*, the time when a specific log was generated
* **LOG_LEVEL** - *VARCHAR*, the log level can be INFO, WARNING or ERROR
* **STORED_PROC** - *VARCHAR*, the name of the stored procedure from which the log was generated
* **SESSION_ID** - *NUMBER*, the id of the session during which the log was generated. It can be used to identify which user was executing the stored procedure, or checking all the queries ran by this user in the session.
* **MESSAGE** - *VARCHAR*, the log message
* **ERROR_CODE** - *NUMBER*, the error code in case an exception was raised by the procedure. It is *NULL* in case of a successful query.
* **ERROR_MESSAGE** - *VARCHAR*, the error message in case an exception was raised by the procedure. It is *NULL* in case of a successful query.

Example query for fetching the last 5 logs:

```sql
SELECT * FROM OPERATIONS_DB.LOGS.STORED_PROCS_LOGS ORDER BY TS DESC LIMIT 5;
```

## NLP API Integration

### PROVISION_NLP_API_CALLER_FUNCTION

This stored procedure creates or replaces a secure external function used to call the NLP API from within Snowflake. It provisions the call_nlp_api function inside the specified database and schema, linking it to a predefined API integration and endpoint.

```sql
PROVISION_NLP_API_CALLER_FUNCTION(db_name VARCHAR, schema_name VARCHAR, api_token VARCHAR)
```

**The following arguments are accepted:**
- `db_name` (VARCHAR)**(required)**: The target database name where the function will be created.
- `schema_name` (VARCHAR)**(required)**: The target schema name where the function will be created.
- `api_token` (VARCHAR)**(required)**: The API token used for authenticating requests to the NLP API.

**Example usage of the procedure:**
```sql
CALL OPERATIONS_DB.STORED_PROCS.PROVISION_NLP_API_CALLER_FUNCTION(
  'NLP_API_TEST_DB',
  'EXT_FUNC',
  '<api-token>'
);
```

> **Note:** Replace `<api-token>` with your actual API token. The function is created as a secure external function and can be used by authorized roles in the account.


### DEPROVISION_NLP_API_CALLER_FUNCTION

This stored procedure removes the external function used for NLP API calls from a specified database and schema. It is designed to clean up resources that were previously deployed as part of the NLP API integration.

```sql
CALL OPERATIONS_DB.STORED_PROCS.DEPROVISION_NLP_API_CALLER_FUNCTION(db_name VARCHAR, schema_name VARCHAR)
```

**The following arguments are accepted:**

db_name: VARCHAR, **(required)** -- The name of the database where the external function resides.
schema_name: VARCHAR, **(required)** -- The name of the schema where the external function is located.

**Example usage of the procedure:**

```sql
CALL OPERATIONS_DB.STORED_PROCS.DEPROVISION_NLP_API_CALLER_FUNCTION('MYDOMAIN_DEV_DB', 'NLP_SCHEMA');
```

> **Note:** The procedure is idempotent -- running it multiple times will not cause an error if the function has already been removed.

---

# Account management best practices

## Data management

---

* **Separate environment into different DBs**: Rigorous dev/test/prod split is one of the best ways to ensure that prod workloads do not fail. The optimal way to implement this split is with one DB per environment and distinct warehouses.
* **Enforce logical schema separation**: The temptation of creating all tables in 1 big schema is always there! However your future self will be grateful if, from the start, you establish a meaningful schema separation of your data. This will be less error-prone and make your data easier to use. Schemas shall be created according to the logical grouping of the tables they are holding.
* **Use naming conventions**: Databases get very quickly overcrowded with tables and schemas. To keep everything in order, you should establish meaningful naming conventions end enforce them at all time.
* **Remove unused tables**: As we experiment in a data warehouse, we create a lot tables that will not be used later on. Make sure to regularly clean your account of those tables. This will both improve your account's readability and reduce the costs.

## RBAC best practices

---

* **assign minimal permissions:** When assigning access roles to contributors, make sure to not assign more permissions than necessary. In case of a security breach this will limit damages and it also limits the risks of an accidental data destruction.
* **Remove dormant users**: Use case owners are allowed to add contributors to the project via the VIEWERS group in Azure AD (see [Account-level Access Management documentation](https://docs.uptimize.merckgroup.com/snowflake/access-management/account-level-access/)), but they are needed to limit the risks of access and data breach by removing users from the Azure AD group, as soon as they do not need the access anymore.
* **Do not alter the VIEWER role**: We provide this role as default role for new users. Following security best practices, this role has very limited permissions and any additional permissions granted to this group will be granted automatically to all new users. Please never do that and, instead, attribute individual custom tailor-made roles to users.
* **Create your own role structure**: Using the [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/) we provide access roles to your created resources. However, to manage the access to your resources more efficiently you shall create your own **functional roles** that regroup multiple access roles ([See Role-based Access Management documentation](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/)). This help you establish governance in your account and also allows you to use more meaningful role names as well, e.g create the functional role **DATA_SCIENTIST** which has R/W permissions on PROCESSED_DATA schema, and only R permissions on RAW_DATA schema.
* **Use views to restrict share database permissions:** Shared databases can only provide DB-wide read permissions. However the use-case admin can create views on specific tables and can grant read-access to single views. This allows for tighter control over the permissions and is strongly recommended.
* **[Managed technical users](https://docs.uptimize.merckgroup.com/snowflake/access-management/managed-technical-users/) should be given the least privileges** and It's recommended to create a separate role that does wrap the needed permissions.

## Resource management best practices

---

* **Use query timeouts:** Snowflake allows for defining query timeouts. This enables you to avoid having unnecessary spikes in consumption due to stuck queries.
* **Use the smallest warehouse necessary:** The majority of Snowflake costs come from the warehouse usage. The most efficient measure you can take to limit your costs is by ensuring that you never use a warehouse larger than you need.
* **Keep an eye on the monitoring dashboard:** Although implementing best practices should prevent excessive resource consumption, you should also look into the resource management dashboard provided at the account creation (if you haven't received it, please request it) to catch any unexpected over-consuming process.
* **Use meaningful names:** Although a naming convention is already enforced by the stored procedures, it is still important to provide values for the central name of a warehouse, helping future user to choose the warehouse most appropriate to their task.
* **Remove dormant warehouses:** Ih a warehouse has been created manually and will not be used in the future, it is recommended to remove them. 
By keeping the account cleaner, it will be easier to monitor warehouse usage overall.

---

# Best Practices for warehouse utilization


To Create the warehouse USECASEADMIN need to execute below command. For more details please refer (https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/)

```sql
CALL CREATE_WAREHOUSE('mydomain_dev_db', 'myname', 'xsmall');
```
1. Auto suspend

By executing above statement warehouse will be created with AUTO_SUSPEND = 600 (10 Mins).
* It is best practice to set AUTO_SUSPEND value to lower side. Consider below  scenarios.
* Each time warehouse is resumed it is billed for minimum 1 min. So in case there are incoming queries every 2-3 mins then it does not make sense to set the Auto_Suspend value to 60 as warehouse will be in continual state of start and stop
* If warehouse usage is adhoc, it makes absolutely sense to set AUTO_SUSPEND=60.

    To re-set auto suspend execute below with USECASEADMIN role OR <domain>_<env>_SYSADMIN role.
```sql
ALTER WAREHOUSE <WAREHOUSE_NAME> set AUTO_SUSPEND=60;
```
2. Auto resume

* It is good practice to have all warehouses to have Auto_resume enabled. If Auto_resume is disabled, users will not be able to query until warehouse is explicitly resumed.
* Run below to check Auto_resume values.
```sql
SHOW WAREHOUSES; ----- Look for Auto_resume column
```

3. Separate warehouses for Data loading and query execution

* As a performance point of view, it is always better to create a separate warehouse for your data loading and query execution.
* Start with smaller size and based on the performance, you can manually resize the warehouse


3. Proper warehouse size 

* Increasing the size of a warehouse does not always improve data loading performance
* Data loading performance is influenced more by the number of files being loaded (and the size of each file) than the size of the warehouse
* A smaller warehouse (Small, Medium) is generally sufficient for all your data loading needs

4. Apply resource monitor 

* It is good practice to apply resource monitor for large/actively used warehouses in the system.
* Resource monitors are Snowflake objects designed to monitor credit usage of warehouse and as an action when threshold is reached/approaching can suspend the warehouse or notify the Admin.

* To Apply resource monitor at warehouse, below is the example
```sql
ALTER WAREHOUSE <WAREHOUSE_NAME> SET RESOURCE_MONITOR = <monitor_name>;
```
> For more details on resource monitors, please refer Snowflake documentation (https://docs.snowflake.com/en/sql-reference/sql/create-resource-monitor)

5. Setting appropriate account statement timeout
  
* STATEMENT_TIMEOUT_IN_SECONDS 
    Definition - Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is cancelled by the system.
    Default Value - 2 Days

* Use the STATEMENT_TIMEOUT_IN_SECONDS parameters to automatically stop queries that are taking too long to execute, either due to a user error or a frozen cluster. 
* Customize warehouse, account, session, and user timeout-level statements according to your data strategy for long-running queries.  

```sql
ALTER WAREHOUSE <WAREHOUSE_NAME> set STATEMENT_TIMEOUT_IN_SECONDS= 3600;
```
```sql
SHOW PARAMETERS IN WAREHOUSE <WAREHOUSE_NAME>;-- This Command will display warehouse parameters
```

6. Queries timing out

* If you notice that your queries are consistently slow or frequently timing out, it could indicate that the Snowflake warehouse size is too small for the workload. Sluggish query performance can indicate that the warehouse lacks sufficient resources to handle the workload efficiently. Consider monitoring the query durations and examining whether increasing the warehouse size improves query speed.
* Below query can be used by USECASEADMIN to check queries which are taking longer time to execute.
```sql
SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY ORDER BY TOTAL_ELAPSED_TIME DESC LIMIT 10;-- You may use where clause to filter for particular query you are looking for
```
In such cases, it indicates resources are inefficient to perform the workload and increasing the warehouse size can increase the performance.

7. Monitor Performance Dashboard from Monitoring account

* Once account creation is done , as part of process access to monitoring dashboard is enabled for USECASEADMINS.

* Login to Monitoring account using SSO ---> Duplicate the dashboard access given -->select the assigned role from context menu --> Start using Dashboards

* Look for Performance dashboard, here you can look for any anomalies in the performance.

> To learn more about how to use monitoring dashboards, please refer to the [Monitoring Dashboard Usage](https://docs.uptimize.merckgroup.com/snowflake/snowflake-monitoring/performance-monitoring-dashboard/) page for more details.

---

# Account Security

## Network

--- 

### Account Ingress - Human Users (via SSO)
Currently, there are no network restrictions in place; human users can access our Snowflake accounts from any network, as Snowflake is accessible over the internet.

We will soon initiate a communication campaign to notify all users with Snowflake access that we will begin restricting access to only approved Merck IP addresses. External users will be required to connect through a DoD.

> **Note:** Exceptions for whitelisting partner IP addresses for major projects will be evaluated and managed on a case-by-case basis.

### Account Ingress - Managed Technical Users (Service Users)
All [Managed Technical Users](https://docs.uptimize.merckgroup.com/snowflake/access-management/managed-technical-users/) (MTUs) requested through SNOW are required to have a network policy applied. When submitting a request, the requester must specify the list of IP addresses from which the user's traffic is expected to originate.

We will contact use-case owners to gather the required IP addresses for existing Managed Technical Users (MTUs) that currently lack network policies. Please respond promptly to these requests to ensure uninterrupted access for your MTUs.

> **Note:** We will be maintaining Merck's on-prem IP addresses from our end, as well as other UPTIMIZE core offering IPs, so don't worry about getting the IPs yourself. 

#### Example:
Suppose you have a MUSER that is used by a third-party tool such as Qlik Cloud. In this case, you must provide the list of IP addresses for the Qlik Cloud servers that will connect to Snowflake. if you are using Qlik on-premises, you need just need to mention that this is connecting from Merck's on-prem data center. You can obtain this information by contacting your service provider or by checking their product documentation or wiki.


### Account Egress
TBD


## Authentication

--- 

### Merck Users
We only allow using Single Sign-On (SSO) to login to Snowflake use case accounts. This is managed via an integration with Microsoft Entra ID, the user will be redirected to login -if there's no active login before- with their Merck identity (either internal or external).

This also covers some integrations like Tableau, PowerBI, and AppService. The users will be asked to login via SSO, and this is based on OAuth.

### Managed Technical Users - Service Users

Service connections to Snowflake can be done in many different ways. The current recommended method in UPTIMIZE is [Workload Identity Federation](https://docs.snowflake.com/user-guide/workload-identity-federation), however Keypair is also supported. Password-based users are going to deprecate soon and won't be allowed to be used as a Service User, as it has to be configured with MFA.

---

# Access Management

UPTIMIZE Snowflake provides several levels of access management:

* **Account-level access management**: Merck Snowflake organization offers one Snowflake account for each the approved use cases. The use case accounts have their own owners and contributors. To grant them access to their use case Snowflake account, Azure AD groups are used to provide **SSO-based login access** using their **Merck credentials**.
* **Role-based access management**: Once the users are logged into their account, they will be interacting with the resources in their account. To provide access to these resources, Snowflake's **Role assignment** and **Role hierarchy** concepts are leveraged.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/secure--profile.svg" width="30" height="30"> Account-level Access Management

---
Access to the Snowflake accounts in Merck Snowflake organization is managed through the membership of certain **Azure AD groups**. The selected users are then able to login to their Snowflake account via their **Merck credentials**. To learn more about the process and how to manage the access to your Snowflake accounts, please refer to the [Account-level](https://docs.uptimize.merckgroup.com/snowflake/access-management/account-level-access/) access management page.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/professional--marketplace.svg" width="30" height="30"> Role-based Access Management

---
The access to the Snowflake resources are only granted to the role who created them, by default. To provide other users, and other roles, to access those resources, access and functional roles can be leveraged in Snowflake. Furthermore, the concept of role hierarchy is also leveraged to provide proper access management to the account resources. To learn more about the process and how to manage the access to the resources in your Snowflake account, please refer to the [Role-based](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/) access management page.

---

# Account-level Access Management

To facilitate the management of the access to the accounts in the Merck Snowflake organization in a secure way, **Entra-ID groups managed through EMSS (Enterprise Merck Security Services) and Foundry** are used to enable users to login to their Snowflake accounts via their **Merck SSO credentials**. These groups are automatically created and assigned to enterprise applications, and membership is managed through the **User Access Management (UAM)** system. The members of the associated Entra-ID groups are regularly synced with the corresponding Snowflake accounts, providing a robust and auditable method to manage access.

## Logging into your Snowflake Account

---
Merck Snowflake users are able to access their Snowflake account console via their **account's organization-based URL** as [https://merckgroup-<UC_NAME>.snowflakecomputing.com](). To learn how you can construct the ```<UC_NAME>```, please take a look into the [naming convention documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/). In their console login page, users need to click on the "**Sign in using MerckSSO**" button on the top. They will be redirected to the SSO page for Merck organization where they need to sign in using their **Merck credentials**.

![Snowflake SSO Sign-in](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/sf-sso-login.png)

## Account-level Access Roles

---
Two high-level access roles are provided for each Snowflake account, **managed through Privileged Entitlements in the User Access Management (UAM) system**:

* **SNOWFLAKE_\<USECASENAME\>_ADMINS_EMSS**, e.g. *SNOWFLAKE_EMDSERONO_NREG_ALL_ADMINS_EMSS*
* **SNOWFLAKE_\<USECASENAME\>_VIEWERS_EMSS**, e.g. *SNOWFLAKE_EMDSERONO_NREG_ALL_VIEWERS_EMSS*

where *USECASENAME* is defined according to the [account-level naming conventions](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/).

These roles are created automatically through the provisioning workflow when your Snowflake Extension reaches the appropriate status. The groups are:
- Created as **Privileged Entitlements** in EMSS
- Generated as **multipass groups** in Foundry
- Synchronized to **Entra-ID** within 45 minutes
- Synced to **Snowflake** every 40 minutes

Their purpose is to group use case admins and non-admins into separate groups, enabling designated admins to perform high-level administrative tasks while providing controlled access to other Snowflake users.

## Deprecation of Legacy Access Roles

---

> **Important -- 45-Day Deprecation Notice**

With the introduction of the new **_EMSS** suffixed roles, the legacy access roles (without the `_EMSS` suffix) are now **deprecated** and will be fully decommissioned after a **45-day transition period starting from March 8, 2026**.

### Legacy Roles Being Deprecated

The following legacy role naming patterns are affected:

* **SNOWFLAKE_\<USECASENAME\>_ADMINS** → replaced by **SNOWFLAKE_\<USECASENAME\>_ADMINS_EMSS**
* **SNOWFLAKE_\<USECASENAME\>_VIEWERS** → replaced by **SNOWFLAKE_\<USECASENAME\>_VIEWERS_EMSS**

### Deprecation Timeline

| Phase | Period | Details |
| ----- | ------ | ------- |
| **Transition** | March 8 - April 22, 2026 (45 days) | Both legacy and new `_EMSS` roles are active. Users should migrate to the new roles during this period. |
| **Decommission** | April 22, 2026 | Legacy roles will be removed. Only the new `_EMSS` roles will remain active. |

### Action Required

1. **Transfer ownership** of objects currently owned by the old role (`SNOWFLAKE_<ACCOUNT>_ADMINS`) to `UCADMIN`. This includes:
   - Dynamic Tables, Roles, Tables, Views, Schemas, Procedures, Stages, Shares, etc.

2. **Transfer any USAGE grants** (e.g., on warehouses, integrations, databases) currently assigned to the old `ADMINS`/`VIEWERS` role to `UCADMIN` (or the appropriate functional role). These grants should not remain on the legacy `ADMINS`/`VIEWERS` roles.

3. **Start using the new entitlement process.** The UPTIMIZE docs have been updated with the new process.
4. **Update** any internal documentation, scripts, or tooling that references the legacy role names.

5. **Verify** your access using the new roles before the decommission date.

### How to Identify Impacted Objects

Run the following command to list all grants assigned to your legacy ADMINS role:

```sql
SHOW GRANTS TO ROLE SNOWFLAKE_<ACCOUNTNAME>_ADMINS;
```

**Example:**

```sql
SHOW GRANTS TO ROLE SNOWFLAKE_FIVETRAN_NREG_ALL_ADMINS;
```

### How to Transfer Ownership

Use the following command to transfer ownership of objects from the legacy role to `UCADMIN`:

```sql
GRANT OWNERSHIP ON <OBJECT_TYPE> <OBJECT_NAME> TO ROLE UCADMIN COPY CURRENT GRANTS;
```

**Example:**

```sql
GRANT OWNERSHIP ON ROLE MY_CUSTOM_ROLE TO ROLE UCADMIN COPY CURRENT GRANTS;
```

### How to Transfer Usage Grants

**Step 1** -- Grant usage to `UCADMIN`:

```sql
GRANT USAGE ON <OBJECT_TYPE> <OBJECT_NAME> TO ROLE UCADMIN;
```

**Step 2** -- Revoke usage from the old role:

```sql
REVOKE USAGE ON <OBJECT_TYPE> <OBJECT_NAME> FROM ROLE SNOWFLAKE_<ACCOUNT>_ADMINS;
```

> **Note:** During the 45-day transition period, users who are members of the legacy roles will continue to have access. However, after **April 22, 2026**, the legacy roles will be permanently removed and any access granted exclusively through them will be revoked. Ensure you have completed the ownership and grant transfers, and have been provisioned under the new `_EMSS` roles before this date to avoid any disruption.
>
> If you have any questions or need support with this migration, please feel free to reach out to the UPTIMIZE team.

### **SNOWFLAKE_\<USECASENAME\>_VIEWERS_EMSS**

This role is meant to group non-admin users together. By default, a user in this group is only granted a **Public role with minimum additional privileges** (eg. *USAGE on LOGS schema in OPERATIONS_DB database*). It is later the **use case admins' responsibility** to divide users in this group into additional **functional roles** that their use case requires.

Access to this group is controlled through a **Privileged Entitlement** in the **User Access Management (UAM)** system. The use case owner, as the owner of the entitlement, and designated **Entitlement Delegates** can approve access requests. Once approved, users are automatically provisioned through the system.

> **Access Request Flow**: When access is approved, the user is granted access to the EMSS Entitlement. Within 5 minutes, the user is provisioned to the Entra-ID group. Then, the Snowflake synchronization job syncs Entra-ID group members to Snowflake (runs every 40 minutes).

### **SNOWFLAKE_\<USECASENAME\>_ADMINS_EMSS**

This role groups all the use case admins together. By default, the use case owner is granted access to this role through ownership of the corresponding Privileged Entitlement. Additional admins must request access through the **User Access Management (UAM)** system. Access requests are approved by the use case owner (as entitlement owner) or designated entitlement delegates.

This functional group is automatically granted an access role called *UCADMIN* which has the following privileges:

| ACTION TYPE | AFFECTED RESOURCE / ACTION  | AFFECTED ITEM                                                         |
| ----------- | -------------------------   | --------------------------------------------------------------------- |
| CREATE      | ROLE                        | ACCOUNT                                                               |
| EXECUTE     | ALERT                       | ACCOUNT                                                               |
| EXECUTE     | TASK                        | ACCOUNT                                                               |
| CREATE      | SHARE                       | ACCOUNT                                                               |
| IMPORT      | SHARE                       | ACCOUNT                                                               |
| MONITOR     | EXECUTION                   | ACCOUNT                                                               |
| MONITOR     | USAGE                       | ACCOUNT                                                               |
| APPLY       | TAG                         | ACCOUNT                                                               |
| APPLY       | MASKING POLICY              | ACCOUNT                                                               |
| APPLY       | ROW ACCESS POLICY           | ACCOUNT                                                               |
| USAGE       | DATABASE                    | OPERATIONS_DB                                                         |
| USAGE       | SCHEMA                      | OPERATIONS_DB.STORED_PROCS                                            |
| USAGE       | TABLE                       | OPERATIONS_DB.LOGS.STORED_PROCS_LOGS                                  |
| USAGE       | WAREHOUSE                   | OPERATIONS_WH                                                         |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_database(VARCHAR, VARCHAR)          |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_database(VARCHAR, VARCHAR, NUMBER)  |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_schema(VARCHAR, VARCHAR)            |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_schema(VARCHAR, VARCHAR, NUMBER)    |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_warehouse(VARCHAR, VARCHAR, VARCHAR)|
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.remove_database(VARCHAR)                   |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.remove_schema(VARCHAR, VARCHAR)            |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.remove_warehouse(VARCHAR)                  |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_storage_integration(VARCHAR, VARCHAR, VARCHAR, VARCHAR)                                |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_foundry_source_connection(VARCHAR)                                |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.remove_foundry_source_connection(VARCHAR)                                |
| USAGE       | PROCEDURE                   | OPERATIONS_DB.STORED_PROCS.create_external_volume(VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR)                  |

> **Note:** Merck Snowflake account admins do not have all the privileges that the **default Snowflake ACCOUNTADMIN** role has. For some of the DDL (Data Definition Language) statements such as **CREATE/DROP DATABASE**,  **CREATE/DROP SCHEMA**, **CREATE/DROP WAREHOUSE**, users with UCADMIN role, have to use the provided stored procedures that make sure that the created resources have specific roles created and granted automatically, and that the naming conventions are being followed. The table creation and DML (Data Manipulation Language) operations can then be performed using the standard SQL commands, without the use of the stored procedures. For more information on the provided stored procedures, check the [Stored Procedures documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/).  

## What am I responsible for?

---

### As an Account Viewer

You need to follow the guidelines and best practices provided to you. To gain access to a Snowflake account, you must submit an access request through the **User Access Management (UAM)** system.

For detailed instructions on how to create access requests, check prerequisites, and track your request status, please refer to the [Privileged Entitlement User Access Management Guide](https://docs.uptimize.merckgroup.com/foundry/access-management/use-case/privileged-entitlement-user-guide/).

### As an Account Admin / Use Case Owner

As an Account admin or Use Case Owner, you are responsible for managing access to your Snowflake Account through the **User Access Management (UAM)** system. As the owner of the Privileged Entitlements associated with your Snowflake account, you control who can access your account.

Access to your account is managed through **Privileged Entitlements** (not direct group membership). You can review and approve access requests, designate entitlement delegates to help manage approvals, pre-approve requests pending prerequisite completion, revoke access when needed, and set time-limited access with expiration dates.

For comprehensive guidance on managing access requests, approval workflows, and entitlement delegates, please refer to the [Privileged Entitlement User Access Management Guide](https://docs.uptimize.merckgroup.com/foundry/access-management/use-case/privileged-entitlement-user-guide/).

#### Additional Responsibilities

You are also provided with tools to manage Administrative Roles and Access Roles to database and schema resources inside your Account. For more information, see the [Role-Based Access Management](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/) section of this documentation.

When users are provisioned in your account, you can assign them functional roles based on user profiles in your account.

> **Note**: The Azure portal is no longer used for managing access to Snowflake accounts. All access management is now handled through the User Access Management (UAM) system, providing better audit trails, approval workflows, and prerequisite validation.

---

# Role-based Access Management

Merck Snowflake organization follows the same role hierarchy concept as suggested by Snowflake. To facilitiate the placement of governance and to help account admins to securely manage to their account-level resources, [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/) are provided to create corresponding **access roles**. Account admins are then required to create **functional roles** according to their needs, and then grant them the access roles. **Functional roles** are going to act as **logical wrappers of access roles** to be assigned to each group of the user functions.

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/functional_role_design.png" alt="MarineGEO circle logo" width="428"/>

## Access Roles

---
When the use case admins creates database, schemas, and warehouses using the provided stored procedures, the corresponding access roles are automatically created. These roles are granted to the use case admin's role. They can then be granted to other roles, by the use case admins, to provide access to the resources created.

### Database Access Roles

For each created database the following two access roles are automatically created:

* **\<DOMAIN\>_\<ENV\>_SYSADMIN**, e.g. *MYDOMAIN_DEV_SYSADMIN*: by default granted to the **SNOWFLAKE_\<USECASENAME\>_ADMINS** role. It is granted the **ownership of the database *<DOMAIN\>_\<ENV\>_DB* and its schemas** (public schema and all the additional schemas under the database created by the *create_schema()* stored procedure). It is also granted the ownership of any newly created warehouse associated with the database.
* **\<DOMAIN\>_\<ENV\>_ROLEADMIN**, e.g. *MYDOMAIN_DEV_ROLEADMIN*: by default granted to the **SNOWFLAKE_\<USECASENAME\>_ADMINS** role. It grants the **ownership of all the schema roles under *<DOMAIN\>_\<ENV\>_DB*.** It means that a user granted this role will be able to grant schema roles for all the schemas under this database, to other users.
* **\<DOMAIN\>_\<ENV\>_ADVANCEDDEVELOPER**, e.g. *MYDOMAIN_DEV_ADVANCEDDEVELOPER*: by default granted to the **SNOWFLAKE_\<USECASENAME\>_ADMINS** role. It allows actions to be performed on behalf of the **\<DOMAIN\>_\<ENV\>_ROLEADMIN**, such as creating and deleting schemas within the **<DOMAIN\>_\<ENV\>_DB**. Users granted this role will be able to manage schemas within the database, ensuring efficient schema administration.

where *\<DOMAIN\>* and *\<ENV\>* are provided for [database name](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/).

### Schema Access Roles

For each created schema the following three access roles are automatically created:

* **\<DOMAIN\>\_\<ENV\>_\<SCHEMA_NAME\>_R**, e.g. **MYDOMAIN_DEV_MYSCHEMA_R**
* **\<DOMAIN\>\_\<ENV\>_\<SCHEMA_NAME\>_RW**, e.g. **MYDOMAIN_DEV_MYSCHEMA_RW**
* **\<DOMAIN\>\_\<ENV\>_\<SCHEMA_NAME\>_RWC**, e.g. **MYDOMAIN_DEV_MYSCHEMA_RWC**

where *\<DOMAIN\>* and *\<ENV\>* are provided for [database name](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/) and the *SCHEMA_NAME* is the [unique schema name](https://docs.uptimize.merckgroup.com/snowflake/account-management/naming-convention/) under the specific database.

**MYDOMAIN_DEV_MYSCHEMA_R** role has the following privileges on the schema *MYSCHEMA* under the database *MYDOMAIN_DEV_DB* :

| ACTION TYPE | AFFECTED RESOURCE / ACTION  | AFFECTED ITEM                                                         |
| ----------- | --------------------------- | --------------------------------------------------------------------- |
| SELECT      | ALL TABLES                  | ALL TABLES IN SCHEMA *MYSCHEMA*                                       |
| SELECT      | FUTURE TABLES               | FUTURE TABLES IN SCHEMA *MYSCHEMA*                                    |
| SELECT      | ALL VIEWS                   | ALL VIEWS IN SCHEMA *MYSCHEMA*                                        |
| SELECT      | FUTURE VIEWS                | FUTURE VIEWS IN SCHEMA *MYSCHEMA*                                     |
| SELECT      | ALL MATERIALIZED VIEWS      | ALL MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                           |
| SELECT      | FUTURE MATERIALIZED VIEWS   | FUTURE MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                        |
| SELECT      | ALL STREAMS                 | ALL STREAMS IN SCHEMA *MYSCHEMA*                                      |
| SELECT      | FUTURE STREAMS              | FUTURE STREAMS IN SCHEMA *MYSCHEMA*                                   |
| SELECT      | ALL TASKS                   | ALL TASKS IN SCHEMA *MYSCHEMA*                                        |
| SELECT      | FUTURE TASKS                | FUTURE TASKS IN SCHEMA *MYSCHEMA*                                     |
| SELECT      | ALL SEQUENCES               | ALL SEQUENCES IN SCHEMA *MYSCHEMA*                                    |
| SELECT      | FUTURE SEQUENCES            | FUTURE SEQUENCES IN SCHEMA *MYSCHEMA*                                 |
| SELECT      | ALL FUNCTIONS               | ALL FUNCTIONS IN SCHEMA *MYSCHEMA*                                    |
| SELECT      | FUTURE FUNCTIONS            | FUTURE FUNCTIONS IN SCHEMA *MYSCHEMA*                                 |
| SELECT      | ALL PROCEDURES              | ALL PROCEDURES IN SCHEMA *MYSCHEMA*                                   |
| SELECT      | FUTURE PROCEDURES           | FUTURE PROCEDURES IN SCHEMA *MYSCHEMA*                                |
| SELECT      | SCHEMA                      | *MYSCHEMA*                                                            |
| USAGE       | DATABASE                    | *MYDOMAIN_DEV_DB*                                                     |

**MYDOMAIN_DEV_MYSCHEMA_RW** role has the following privileges on the schema *MYSCHEMA* under the database *MYDOMAIN_DEV_DB* :

| ACTION TYPE     | AFFECTED RESOURCE / ACTION  | AFFECTED ITEM                                                         |
| --------------- | --------------------------- | --------------------------------------------------------------------- |
| ALL PRIVILEGES  | ALL TABLES                  | ALL TABLES IN SCHEMA *MYSCHEMA*                                       |
| ALL PRIVILEGES  | FUTURE TABLES               | FUTURE TABLES IN SCHEMA *MYSCHEMA*                                    |
| ALL PRIVILEGES  | ALL VIEWS                   | ALL VIEWS IN SCHEMA *MYSCHEMA*                                        |
| ALL PRIVILEGES  | FUTURE VIEWS                | FUTURE VIEWS IN SCHEMA *MYSCHEMA*                                     |
| ALL PRIVILEGES  | ALL MATERIALIZED VIEWS      | ALL MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                           |
| ALL PRIVILEGES  | FUTURE MATERIALIZED VIEWS   | FUTURE MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                        |
| ALL PRIVILEGES  | ALL STREAMS                 | ALL STREAMS IN SCHEMA *MYSCHEMA*                                      |
| ALL PRIVILEGES  | FUTURE STREAMS              | FUTURE STREAMS IN SCHEMA *MYSCHEMA*                                   |
| ALL PRIVILEGES  | ALL SEQUENCES               | ALL SEQUENCES IN SCHEMA *MYSCHEMA*                                    |
| ALL PRIVILEGES  | FUTURE SEQUENCES            | FUTURE SEQUENCES IN SCHEMA *MYSCHEMA*                                 |
| ALL PRIVILEGES  | ALL FUNCTIONS               | ALL FUNCTIONS IN SCHEMA *MYSCHEMA*                                    |
| ALL PRIVILEGES  | FUTURE FUNCTIONS            | FUTURE FUNCTIONS IN SCHEMA *MYSCHEMA*                                 |
| ALL PRIVILEGES  | ALL PROCEDURES              | ALL PROCEDURES IN SCHEMA *MYSCHEMA*                                   |
| ALL PRIVILEGES  | FUTURE PROCEDURES           | FUTURE PROCEDURES IN SCHEMA *MYSCHEMA*                                |
| MONITOR         | ALL TASKS                   | ALL TASKS IN SCHEMA *MYSCHEMA*                                        |
| MONITOR         | FUTURE TASKS                | FUTURE TASKS IN SCHEMA *MYSCHEMA*                                     |
| USAGE           | SCHEMA                      | *MYSCHEMA*                                                            |
| USAGE           | DATABASE                    | *MYDOMAIN_DEV_DB*                                                     |

**MYDOMAIN_DEV_MYSCHEMA_RWC** role has the following privileges on the schema *MYSCHEMA* under the database *MYDOMAIN_DEV_DB* :

| ACTION TYPE     | AFFECTED RESOURCE / ACTION  | AFFECTED ITEM                                                         |
| --------------- | --------------------------- | --------------------------------------------------------------------- |
| OWNERSHIP       | ALL TABLES                  | ALL TABLES IN SCHEMA *MYSCHEMA*                                       |
| OWNERSHIP       | FUTURE TABLES               | FUTURE TABLES IN SCHEMA *MYSCHEMA*                                    |
| OWNERSHIP       | ALL VIEWS                   | ALL VIEWS IN SCHEMA *MYSCHEMA*                                        |
| OWNERSHIP       | FUTURE VIEWS                | FUTURE VIEWS IN SCHEMA *MYSCHEMA*                                     |
| OWNERSHIP       | ALL MATERIALIZED VIEWS      | ALL MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                           |
| OWNERSHIP       | FUTURE MATERIALIZED VIEWS   | FUTURE MATERIALIZED VIEWS IN SCHEMA *MYSCHEMA*                        |
| OWNERSHIP       | ALL STREAMS                 | ALL STREAMS IN SCHEMA *MYSCHEMA*                                      |
| OWNERSHIP       | FUTURE STREAMS              | FUTURE STREAMS IN SCHEMA *MYSCHEMA*                                   |
| OWNERSHIP       | ALL FILE FORMATS            | ALL FILE FORMATS IN SCHEMA *MYSCHEMA*                                 |
| OWNERSHIP       | FUTURE FILE FORMATS         | FUTURE FILE FORMATS IN SCHEMA *MYSCHEMA*                              |
| OWNERSHIP       | ALL TASKS                   | ALL TASKS IN SCHEMA *MYSCHEMA*                                        |
| OWNERSHIP       | FUTURE TASKS                | FUTURE TASKS IN SCHEMA *MYSCHEMA*                                     |
| OWNERSHIP       | ALL SEQUENCES               | ALL SEQUENCES IN SCHEMA *MYSCHEMA*                                    |
| OWNERSHIP       | FUTURE SEQUENCES            | FUTURE SEQUENCES IN SCHEMA *MYSCHEMA*                                 |
| OWNERSHIP       | ALL FUNCTIONS               | ALL FUNCTIONS IN SCHEMA *MYSCHEMA*                                    |
| OWNERSHIP       | FUTURE FUNCTIONS            | FUTURE FUNCTIONS IN SCHEMA *MYSCHEMA*                                 |
| OWNERSHIP       | ALL PROCEDURES              | ALL PROCEDURES IN SCHEMA *MYSCHEMA*                                   |
| OWNERSHIP       | FUTURE PROCEDURES           | FUTURE PROCEDURES IN SCHEMA *MYSCHEMA*                                |
| CREATE          | TABLE                       | *MYSCHEMA*                                                            |
| CREATE          | VIEW                        | *MYSCHEMA*                                                            |
| CREATE          | STREAM                      | *MYSCHEMA*                                                            |
| CREATE          | FILE FORMAT                 | *MYSCHEMA*                                                            |
| CREATE          | PIPE                        | *MYSCHEMA*                                                            |
| CREATE          | TASK                        | *MYSCHEMA*                                                            |
| CREATE          | SEQUENCE                    | *MYSCHEMA*                                                            |
| CREATE          | FUNCTION                    | *MYSCHEMA*                                                            |
| CREATE          | PROCEDURE                   | *MYSCHEMA*                                                            |
| MONITOR         | SCHEMA                      | *MYSCHEMA*                                                            |
| USAGE           | SCHEMA                      | *MYSCHEMA*                                                            |
| USAGE           | DATABASE                    | *MYDOMAIN_DEV_DB*                                                     |

Granting the above schema roles to other **functional roles** is the responsibility of the *MYDOMAIN_DEV_ROLEADMIN* role.

### Metadata Access Roles


In Snowflake, each account will have a database called [SNOWFLAKE](https://docs.snowflake.com/en/sql-reference/snowflake-db) delivered out of the box by Snowflake themselves, which contains all the metadata related to the account. This metadata includes a lot of details related to the account objects like the database/schema objects, query history, network policies, etc.. 

* **GOVERNANCE_VIEWER**, The `GOVERNANCE_VIEWER` role is designed to provide permissions for governance and monitoring views in Snowflake. This role enables users to view governance and account usage information, manage classifications, monitor activities, and analyze data metrics.

* **USAGE_VIEWER**, The `USAGE_VIEWER` role is designed to provide permissions for tracking and analyzing Snowflake's costs and usage. This role enables users to monitor key details about Snowflake's utilization and performance. 

* **SECURITY_VIEWER**, `The SECURITY_VIEWER` role is designed to provide permissions to view security-related information in Snowflake. This role enables users to monitor and track security settings, usage, and workload insights.

* **FULL_METADATA_VIEWER**, The `FULL_METADATA_VIEWER` combines the permissions of the `GOVERNANCE_VIEWER`, `USAGE_VIEWER`, and `SECURITY_VIEWER` roles.

* **BUDGET_CREATOR**, `The BUDGET_CREATOR` role is designed to provide permissions to create budgets.

> **Note:** All of the roles `GOVERNANCE_VIEWER`, `USAGE_VIEWER`, `SECURITY_VIEWER`, `BUDGET_CREATOR` and `FULL_METADATA_VIEWER` are owned by the `UCADMIN` role, and these roles are assigned to **UCADMIN**. This setup allows the`UCADMIN` role to grant these roles to other users, enabling them to use the permissions associated with each role as needed. This structure provides flexibility for the **UCADMIN** to manage and assign governance, usage, and security monitoring capabilities across the account.


A checkmark (i.e. ✔) indicates the database roles are mapped to the our functional roles.
| DATABASE ROLE                          | GOVERNANCE_VIEWER ROLE | USAGE_VIEWER ROLE      | SECURITY_VIEWER ROLE    |FULL_METADATA_VIEWER ROLE  |BUDGET_CREATOR ROLE       |
| ---------------------------------------|------------------------|------------------------|-------------------------|---------------------------|---------------------------|
| SNOWFLAKE.GOVERNANCE_VIEWER            |<p align="center">✔️</p> |<p align="center">✔️</p> |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.SECURITY_VIEWER              |<p align="center">✔️</p> |                        |<p align="center">✔️</p>  |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.OBJECT_VIEWER                |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.CLASSIFICATION_ADMIN         |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.DATA_METRIC_USER             |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.GOVERNANCE_ADMIN             |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.MONITORING_VIEWER            |<p align="center">✔️</p> |<p align="center">✔️</p> |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.READER_USAGE_VIEWER          |<p align="center">✔️</p> |<p align="center">✔️</p> |<p align="center">✔️</p>  |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.USAGE_VIEWER                 |                        |<p align="center">✔️</p> |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.ALERT_VIEWER                 |<p align="center">✔️</p> |<p align="center">✔️</p> |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.CLASSIFICATION_VIEWER        |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.CORE_VIEWER                  |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.DATA_PRIVACY_VIEWER          |<p align="center">✔️</p> |                        |                         |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.SHARING_USAGE_VIEWER         |                        |<p align="center">✔️</p> |<p align="center">✔️</p>  |<p align="center">✔️</p>    |                           |
| SNOWFLAKE.BUDGET_CREATOR               |                        |                        |                         |                           |<p align="center">✔️</p>   |

You can check the Snowflake [database role documentation](https://docs.snowflake.com/en/sql-reference/snowflake-db-roles) for more details.

## Functional Roles

---
Leveraging **functional roles** is one of the best-practices that can facilitate the access management and governance in a Snowflake account. **Functional roles** can be defined according to the needs of a use case owner. They are going to act as **logical wrappers of access roles** to be assigned to each group of the user functions.

As a result, each use case may have their own specific functional role definition. For example, in one use case we may have the following functional roles:

* DATA SCIENTIST
* DATA ENGINEER
* DATA ANALYST
* VISUALIZATION DEVELOPER
* STAKEHOLDER

Each of the above-mentioned roles may have different access requirements. For example, a **VISUALIZATION DEVELOPER** may not need any higher privilege than read access to the schemas. On the other hand, a **DATA ENGINEER** may need to have read and write privileges on the schemas. Meanwhile, **STAKEHOLDERS** may only need a limited read access to specific schemas.

Functional roles enable the use case admins to assign the required access roles to certain functionality groups, rather than to the users one-by-one. This makes the management of access to the resources much easier and more efficient.

> **Note:** It is highly advised that you do not assign access roles directly to the users, but to grant them to the functional roles:
> ```sql
> -- assigning a role to another role (role inheritance)
> grant role <ACCESS_ROLE> to role <FUNCTIONAL_ROLE>;
> ```
> Each user can be assigned one or more functional role and therefore, will inherit the access roles granted to the functional roles:
> ```sql
> -- assigning functional roles to a user
> grant role <FUNCTIONAL_ROLE> to user "<USER_EMAIL>";
> ```
> Reading the [official Snowflake documentation](https://docs.snowflake.com/en/user-guide/security-access-control-overview#role-hierarchy-and-privilege-inheritance) on how the role hierarchy works is highly recommended.

> **Note:** While assigning functional roles to users, please note that the ```<USER_EMAIL``` shall be the one with which they are signing into their Snowflake account, and shall be written **ALL IN CAPITAL LETTERS**.

---

# Managed Technical Users (Service Users)

Use case admins can request service users to be added to their Snowflake accounts to use it in the integrations with the other tools like DBT, Foundry Azure DevOps, etc... This user will be managed by the Snowflake core team and it will be delivered, managed and governed in an automated fashion.

![Managed Technical User](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/managed-technical-user-hld.png)


## Request managed user in your Snowflake account:

---
To get your managed user created, please create a **_SNOW ticket_** with the following template:

````
Dear Snowflake team,

I need to create a technical user in my Snowflake account, KFB the details:
- Account name/Identifier: myusecase
- Username: appname
- Environment: QA
- Secret type: WIF AWS
- WIF AWS identity ARN: arn:aws:iam::123456789012:role/YourRoleName
- Owners: ahmed.aladeeb@merckgroup.com,john.doe@merckgroup.com
- Reason/Usage: used for data ingestion
- IP address: IP of the service/system that will access the Snowflake account.  
  Required so we can configure network policies for controlled access.


Thanks
````
> ### Below a guide how to fill the ticket body.  
> - **Account name/Identifier:** Is the account mentioned in your account's URL, which will be mentioned after merckgroup and it will be like _emdserono_nreg_all_.  
> - **Username:** Is the login name, should be unique per user environment. This username will be used to initiate connection to your account.  
> - **Environment:** Is the user environment, imagine you have 2 databases, dev and prod, you might need to create user which has only access to the dev database to integrate first and do your tests. And another user for prod which only has access to the prod database. You can choose between _**DEV**_, _**QA**_ and _**PROD**_  
> - **Secret type:** Is the type of your user's secret where it could be either:
>   - one of the _**Workflow Identity Federation**_ methods **(recommended)**:
>     - [_**WIF AWS**_] - authentication through [AWS Workload Identity Federation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-by-using-aws-iam-roles-and-a-snowflake-python-driver).
>     - [_**WIF AZURE**_] - authentication through [Azure Workload Identity Federation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-using-microsoft-idp-and-a-snowflake-python-driver).
>     - [_**WIF OIDC**_] - authentication through [OIDC Workload Identity Federation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-using-a-custom-openid-connect-oidc-provider).
>   - [_**keypair**_] - authentication through keypair (public/private key).
>   - ~~[_**password**_]-based user. If you decided to go with the password-based, please provide a valid justification.~~  _Password-based users is not allowed anymore by Snowflake and will be deprecated very soon._
> - **Workflow Identity Federation details** (only required for WIF users):
>   - for _**WIF AWS**_ : Provide the AWS IAM role ARN that will be used to authenticate to Snowflake (for more details check [Snowflake's official documentation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-by-using-aws-iam-roles-and-a-snowflake-python-driver)).
>   - for _**WIF AZURE**_ : Provide the subject (i.e. Azure AD managed identity object ID) that will be used to authenticate to Snowflake (for more details check [Snowflake's official documentation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-using-microsoft-idp-and-a-snowflake-python-driver)).
>   - for _**WIF OIDC**_ : Provide the OIDC provider details (issuer, subject and optionally audience list) that will be used to authenticate to Snowflake (for more details check [Snowflake's official documentation](https://docs.snowflake.com/en/user-guide/workload-identity-federation#authenticate-to-snowflake-using-a-custom-openid-connect-oidc-provider)).
> - **Secret rotation period:** (not required for WIF users) Is the period after which your user's secret will be rotated. You can choose between _**3**_, _**6**_, _**12**_ months.
> - **Owners:** The user/s who will recieve the notifications for the secrets expiry, should be a valid Merck email.  
> - **Reason/Usage:** Is the reason you need this user created for.  
> - **IP address:** Provide the IP address from which the managed user will connect to Snowflake.  
>   This lets the platform team apply the required Snowflake network policy.


Once your request is fulfilled by the platform team, the user details will be landed into the _**MUSER_DB**_ and you will be able get the up to date user details yourself even if the secret is rotated in the future. No need to get back to the platform team to retrieve the new secrets.

## Access the managed users' details:

---

If you have a managed user in your account, you should find a database a database with the name "**_MUSERS_DB_**" right there in your account as a UCADMIN.
> **Note:** All the steps mentioned below should be done while assuming the UCADMIN role.

### Extract the users' details through running the following commands:
```sql
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
USE DATABASE MUSER_DB;
SELECT * FROM OPERATIONS.VW_USERS;
```

Usernames will be in the following format **_MUSER\_\<USERNAME>\_\<ENV>_**

### Manage the grants of the new managed user:

Once you have the managed user created, you will need to give it the needed access to be able to function. You can create a new functional role or use an existng one, according to our role hierarchy best practice, this role should be the wrapper for the other access roles that you want to grant to your managed user (e.g. like granting the manage user access to read data from specific schema)
   
Please follow the below commands to manage the managed user grants:
   
```sql
USE ROLE UCADMIN;
-- You have 2 options
-- 1) You can create a new functional role which should wrap your needed permissions and then grant it to the managed user:
CREATE ROLE <USERNAME>_<ENV>_ROLE; 
GRANT ROLE <USERNAME>_<ENV>_ROLE TO USER MUSER_<USERNAME>_<ENV>;
   
-- OR
-- 2) You can grant an existing functional role to the managed user:
GRANT ROLE DATA_ENGINEER TO USER MUSER_<USERNAME>_<ENV>;
```    

### Grant other users the access to get the managed user details:

To eliminate the dependency on the use case admin, we are enabling them to delegate the access to these managed users to someone else.     
  
With each user created, a reader role is being created as well according to the following convention **_MUSER\_\<USERNAME>\_\<ENV>\_READER_**.     

You can see all the roles that does belong to your managed users by executing the following command:
```sql
USE ROLE UCADMIN;
SHOW ROLES LIKE 'MUSER%';
```

You, as a UCADMIN, can delegate the credentials access to others. You can either grant it to a specific group of people to have access to the managed user credentials and it's details through granting it to a functional role, or you grant it to only a specific person instead of granting a group of people. Please follow the below commands to grant the access to a specific user:
```sql
USE ROLE UCADMIN;
-- You can grant the access to a specific person:
GRANT ROLE MUSER_<USERNAME>_<ENV>_READER TO USER "SADM-MUID@ONE.MERCKGROUP.COM";
```

As a delegate (A one who has the access to the managed user's credentials), you have to use the reader role to get the managed user credentials:
```sql
USE ROLE MUSER_<USERNAME>_<ENV>_READER;
USE WAREHOUSE OPERATIONS_WH;
USE DATABASE MUSER_DB;
SELECT * FROM OPERATIONS.VW_USERS;
```

## Delete managed user

To delete managed user that exists in your account, please raise a **_SNOW ticket_** that contains both account's and user's details.

````
Dear Snowflake team,

I need to delete a managed technical user from my Snowflake account:
- Account name/Identifier: myusecase
- Username: appname
- Environment: QA

Thanks
````


## Secret Rotation

If your user's secret has a rotation policy, then you might recieve an automated notification from the service 14 and 1 day before the expiry date to rotate your secret in the upstream/downstream system, and to do so, you need to query the VW_USERS to get the new secret.

```sql
-- You could use UCADMIN or if you're a deletgate, 
-- the you could use MUSER_<USERNAME>_<ENV>_READER;
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
USE DATABASE MUSER_DB;
SELECT * FROM OPERATIONS.VW_USERS;
```

> **Note:** The above steps are valid for the keypair managed technical users, for the password managed technical users, you have to update after the expiry date as there's no way to set 2 active passwords. The notification will contain the needed instructions to proceed.

---

# Snowflake Entitlement Management

## Introduction

The Snowflake Entitlement Management process allows Use Case Owners to independently manage group-based access to their Snowflake environments using a form-based interface in Foundry.

This process is designed to ensure secure, auditable, and policy-compliant access by enabling owners to assign and remove entitlement groups that control who can access specific Snowflake accounts. Only groups that have been approved through centralized systems such as EMSS or Active Directory, and subsequently ingested into Foundry, are eligible to be used in this flow.

Only entitlement groups that have been created and approved through [EMSS](https://entitlement.giam.merckgroup.com/) and ingested into Foundry as Multipass groups can be used in the entitlement sync process.

This guide outlines the steps Use Case Owners need to follow to request, view, and manage Snowflake entitlement syncs without requiring manual intervention from the platform team.

## Prerequisites

Before initiating a sync request, ensure the following prerequisites are met:

- The entitlement group has been created and approved through the EMSS application.
- The group has been ingested into Foundry as a Multipass group.
- The Snowflake account must already be provisioned and appear in the Snowflake Extension dashboard.

For more information on the ingestion process, refer to the [Foundry documentation](https://docs.uptimize.merckgroup.com/foundry/foundry-access-management/organization-aligned-access-management/).

## Entitlement Sync Workflow

### Step 1: Access the Sync Form

1. Navigate to the Snowflake Extension form in Foundry.
2. Select the **Request Snowflake Sync** action to initiate the sync.

### Step 2: Submit Sync Request

1. Complete the form fields:
   - Select a valid entitlement group.
   - Select the appropriate Snowflake Extension.
   - Provide a reason for the sync.
2. Submit the form.

The system processes the request and provisions the group access directly in Snowflake. No approval workflow is required.

## Viewing Synced Entitlements

Use Case Owners can view provisioned entitlements in their Snowflake Extension form. The following details are visible:

- Entitlement group name
- Snowflake account and environment
- Associated use case
- Synced group ID (entraId)
- Provisioned timestamp

This provides full transparency into access provisioning.

## Removing a Synced Entitlement

To remove a previously synced entitlement:

1. Open the Snowflake Extension form.
2. Locate the list of provisioned entitlements.
3. Select the entitlement group to remove.
4. Submit the removal request through the action provided.

The system will trigger a deprovisioning workflow and remove the entitlement from the Snowflake account. The update is reflected in Foundry.

No approvals are required for removal. Use Case Owners maintain full control over access management for their use cases.

## Data Flow Overview

| Direction              | Trigger/Event                       | Description                                                      |
|------------------------|-------------------------------------|------------------------------------------------------------------|
| External to Foundry    | Entitlement registration in EMSS    | Groups are created in EMSS and ingested into Foundry             |
| Foundry Internal       | User form submission                | Entitlements are linked to Snowflake Extensions via self-service |
| Foundry to Snowflake   | Sync or removal action              | Group access is provisioned or deprovisioned in Snowflake        |

## Support

If any entitlement is not visible or if issues occur during submission, please raise a ServiceNow ticket through your support channel.

---

# Development Guide

This section provides resources, tools, and templates to help developers efficiently build and manage Snowflake resources. Find guides, best practices, and starter templates for various development scenarios and automation approaches.

---

# Snowflake development best practices

This section describes development best practices in the following categories:
1. [Development](/snowflake/development-guide/best-practices/development)
2. [Data Governance](/snowflake/development-guide/best-practices/data-governance)
3. [Data Ingestion](/snowflake/development-guide/best-practices/data-ingestion)
4. [Data Externalization](/snowflake/development-guide/best-practices/data-externalization)
5. [Security](/snowflake/development-guide/best-practices/security)
6. [Warehouse & Compute](/snowflake/development-guide/best-practices/warhouse-and-compute)

---

# General Development Best Practices for Snowflake

## Overview

This document provides guidelines for development practices within a GxP-compliant Snowflake environment. These best practices ensure that your data platform is built using industry standards, version-controlled, reproducible, and maintainable across separate organizational environments.

---

## 1. Infrastructure as Code (IaC)

### Why IaC Matters

Infrastructure as Code ensures that your Snowflake environment is **defined, reproducible, and auditable**. Rather than relying on manual setup steps, IaC treats infrastructure definitions like application code--version controlled, reviewed, and deployed consistently.

### Key Principles

- **Use [IaC starter templates](/snowflake/development-guide/iac-quickstart-templates)** to bootstrap your Snowflake infrastructure
- **Use declarative frameworks** to define all Snowflake resources (databases, schemas, warehouses, roles, users, resource monitors)
- **Version control all IaC configurations** in a Git repository with clear commit history
- **Maintain separate IaC configurations** for each environment (development, staging, production)
- **Implement code review processes** before deploying infrastructure changes to production

### Implementation Guidelines

- **Select an IaC tool** that integrates well with Snowflake, such as Terraform or custom Python scripts
- **Organize your Git repository** with a clear structure separating modules, environments, and configurations
- **Pin dependency versions** in all IaC files to ensure reproducibility and prevent unexpected breaking changes
- **Create sandbox environments** provisioned entirely through IaC scripts to validate the infrastructure creation process
- **Automate your IaC deployment** using CI/CD pipelines to reduce manual errors and ensure consistency
- **Document your IaC architecture** with reference materials explaining module purposes and dependencies

### Separation of Concerns

When using IaC with service accounts and cross-account provisioning (via stored procedures):

- **Limit IaC user permissions** to only what is necessary for creating and managing core infrastructure objects
- **Use separate credentials** for service accounts that perform provisioning versus those that execute workloads
- **Implement role-based access** so that different teams can only provision resources within their designated namespaces
- **Audit all infrastructure changes** to ensure visibility into who deployed what and when

---

## 2. Naming Conventions

### Importance of Consistency

Standardized naming conventions improve **discoverability, maintainability, and compliance** across your Snowflake environment. They also make it easier to enforce governance policies and identify resource ownership.

### Database and Schema Naming

- **Use provisioned stored procedure for database/schema creation** to enforce naming standards
- **Use descriptive, lowercase names** with underscores as separators (e.g., `sales_analytics`, `manufacturing_ops`)
- **Include environment indicators** (e.g., `dev`, `prod`) in the appropriate environment parameter in `CREATE_DATABASE` stored procedure
- **Do not include environment indicators** (e.g., `dev`, `prod`) in the domain name parameter in `CREATE_DATABASE` stored procedure
- **Use clear schema names** that reflect their purpose: `raw`, `processed`, `analytics`, `sandbox`
- **Avoid abbreviations** unless they are widely recognized within your organization

### Table and View Naming

- **Prefix tables with their type or source**: Use conventions like `stg_` for staging tables, `fct_` for fact tables, `dim_` for dimensions
- **Use consistent naming** across similar objects to improve pattern recognition
- **Avoid reserved SQL keywords** in object names; if necessary, use descriptive alternatives
- **Keep names concise but descriptive**: Balance clarity with readability (aim for 20-40 characters)

### Warehouse and Compute Resource Naming

- **Use provisioned stored procedure for warehouse creation** to enforce naming standards
- **Name resource monitors** based on what they control (e.g., `etl_wh_monitor`)

### Role and User Naming

- **Use clear functional role names** that describe purpose: `analyst_reports`, `etl_processor`, `data_engineer`
- **Prefix service accounts** with an identifier like `svc_` or `sa_` to distinguish from user accounts
- **Use lowercase** for all system names to ensure consistency
- **Avoid person names** in role definitions; use functional descriptions instead

### Stored Procedure Naming

- **Prefix procedures** with their primary function (e.g., `sp_create_`, `sp_ingest_`, `sp_validate_`)
- **Make procedure names descriptive** of what they accomplish
- **Use consistent parameter naming** across similar procedures

---

## 3. Code Organization and Structure

### Repository Layout

Organize your IaC and DDL repositories with the following structure:

```
snowflake-iac/
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
├── modules/
│   ├── core/
│   ├── databases/
│   ├── roles/
│   └── warehouses/
├── procedures/
├── variables/
├── tests/
└── README.md
```

- **Environments directory**: Separate configurations for each deployment target
- **Modules directory**: Reusable infrastructure components
- **Procedures directory**: SQL stored procedures and functions
- **Variables directory**: Environment-specific variables and parameters
- **Tests directory**: IaC validation and unit tests

### Change Management

- **Implement branching strategy** such as Git Flow or trunk-based development
- **Require pull request reviews** before merging changes to main branches
- **Use descriptive commit messages** that explain the "why" behind changes
- **Tag releases** in Git to track which IaC version corresponds to each deployment
- **Maintain a CHANGELOG** documenting significant infrastructure changes

---

## 4. Testing and Validation

### Infrastructure Validation

- **Validate IaC syntax** before deployment using linters and validators
- **Test in a sandbox environment** provisioned entirely from IaC to verify the entire creation process
- **Implement unit tests** for complex procedures, functions, and policies
- **Document expected vs. actual behavior** for all critical infrastructure changes

### Code Quality

- **Use consistent formatting** across all SQL and IaC code
- **Implement static code analysis** to catch common issues early
- **Apply security scanning** to identify policy violations or unintended permissions
- **Review logs and audit trails** after each deployment to confirm changes applied correctly

---

## 5. Documentation

### Inline Documentation

- **Document complex procedures and logic** with comments explaining purpose and business rules
- **Include references** to change management tickets or approval documentation
- **Document parameter purposes** in stored procedures and functions
- **Explain non-obvious design decisions** for future maintainers

### Architectural Documentation

Maintain separate documentation files covering:

- **Architecture decisions**: Why certain tools and patterns were chosen
- **Environment topology**: How development, staging, and production differ
- **Deployment procedures**: Step-by-step instructions for rolling out changes
- **Runbooks**: How to handle common operational tasks and troubleshoot issues
- **Data lineage**: How data flows through your Snowflake environment

### Standards and Policies

- **Publish and maintain** a centralized guide to naming conventions
- **Document role hierarchies** and access patterns
- **Maintain records** of approved data classifications and retention policies
- **Document resource sizing guidelines** for warehouses and compute

---

## 6. Cross-Account and Environment Management

### Environment Isolation

- **Maintain separate Snowflake accounts** for different use case teams to ensure isolation
- **Use consistent IaC structures** across environments to ensure predictable deployments
- **Apply the same naming conventions** across all environments for consistency
- **Replicate security policies** across environments to prevent configuration drift

### Cross-Account Provisioning

When use case teams provision resources via stored procedures:

- **Bootstrap foundational resources** through IaC in the core platform account
- **Implement stored procedures** that handle team-specific resource creation with built-in governance
- **Apply least-privilege principles** to the service accounts executing provisioning procedures
- **Log all provisioning activities** for audit and compliance purposes
- **Validate team-created resources** against governance policies before allowing production use

---

## 7. Security and Compliance in Development

### Secret Management

- **Never hardcode credentials** in IaC files or code
- **Use external secret management** services (e.g., AWS Secrets Manager, HashiCorp Vault)
- **Rotate secrets regularly** according to your organization's policies
- **Audit secret access** to detect unauthorized attempts

### Version Control Best Practices

- **Protect main branches** with branch protection rules
- **Require status checks** (linting, testing) before merging
- **Maintain audit logs** of who made changes and when
- **Archive old branches** periodically to maintain repository cleanliness

---

## Sources & Further Reading

- Snowflake Official Documentation: [Infrastructure as Code & Operational Excellence](https://docs.snowflake.com)
- Terraform Snowflake Provider: [Snowflake Provider Documentation](https://registry.terraform.io/providers/Snowflake-Labs/snowflake)
- Git Flow Branching Model: [Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- SQL Naming Conventions: [SQL Style Guide Recommendations](https://www.sqlstyle.guide)

---

# Data Governance Best Practices for Snowflake

## Overview

Data governance in a GxP-compliant environment ensures that data is **accurate, secure, traceable, and meeting regulatory requirements**. This document outlines how to implement governance controls within Snowflake that support compliance with GxP standards while maintaining operational efficiency.

---

## 1. Establishing a Governance Framework

### Core Governance Principles

- **Data Ownership**: Clearly define who owns which datasets and is responsible for their accuracy and protection
- **Data Stewardship**: Assign stewards to maintain data quality, handle updates, and enforce retention policies
- **Classification**: Implement a consistent system for categorizing data by sensitivity level and regulatory requirements
- **Accountability**: Maintain audit trails showing who accessed what data, when, and for what purpose
- **Compliance Alignment**: Ensure all governance policies align with regulatory requirements (GDPR, HIPAA, SOC 2, etc.)

### Governance Team Roles

Define clear roles within your governance structure:

- **Data Owner**: Responsible for business context, access decisions, and policy compliance for specific datasets
- **Data Steward**: Maintains data quality, manages retention policies, and handles exceptions
- **Data Governance Administrator**: Manages governance tools, policy enforcement, and audit reporting
- **Compliance Officer**: Ensures alignment with regulatory and corporate policies

---

## 2. Data Classification

### Classification Scheme

Implement a **consistent data classification system** across your organization. A typical scheme includes:

- **Public**: Non-sensitive data that can be broadly shared
- **Internal**: Data intended for internal use only
- **Confidential**: Sensitive business or technical data requiring restricted access
- **Restricted**: Highly sensitive data subject to regulatory controls (PII, health data, financial data)

### Classification Assignment

- **Classify data at the column level** to allow granular control over sensitive fields
- **Use object tagging** in Snowflake to programmatically assign and track classifications
- **Automate classification** for common sensitive data types (email addresses, phone numbers, health identifiers)
- **Document classification rationale** for audit purposes and regulatory inspections
- **Review classifications periodically** to ensure they remain accurate as data evolves

### Classification-Driven Policies

Link governance policies to data classifications:

- **Apply masking policies** automatically to columns tagged as "Restricted"
- **Restrict access** based on classification level and user roles
- **Enforce retention policies** based on regulatory requirements for each classification
- **Monitor access patterns** for highly classified data to detect anomalies


### Using Tags for Governance and Classification

#### Create Your Tag Taxonomy

**Why it matters:** Tags enable metadata-driven governance, allowing automated application of masking and access policies.

**How to implement:**

```sql
-- Create tags for data sensitivity
USE ROLE UCADMIN;
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('GOVERNANCE', 'PROD');
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SCHEMA('GOVERNANCE_PROD_DB', 'TAGS');

-- Create tag for data sensitivity classification
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.data_sensitivity ALLOWED_VALUES = ('public', 'internal', 'confidential', 'restricted');

-- Create tag for PII/PHI data types
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.contains_pii ALLOWED_VALUES = ('name', 'email', 'phone', 'ssn', 'dob', 'address');

-- Create tag for business domain
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.business_domain ALLOWED_VALUES = ('sales', 'finance', 'operations', 'r&d', 'quality');

-- Create tag for regulatory importance (GxP)
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.regulatory_importance ALLOWED_VALUES = ('subject_data', 'study_data', 'quality_data', 'audit_critical');

-- Create tag for data retention requirement
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.data_retention_years;

-- Create tag for owner contact
CREATE TAG IF NOT EXISTS GOVERNANCE_PROD_DB.TAGS.data_owner;
```

#### Apply Tags to Data Objects

**Why it matters:** Tagging enables automated policy application and simplifies governance queries.

**How to implement:**

```sql
-- Tag a database with business domain
ALTER DATABASE customer_analytics SET TAG GOVERNANCE_PROD_DB.TAGS.business_domain = 'sales';

-- Tag tables with sensitivity and PII information
ALTER TABLE customer_analytics.public.customers 
  SET TAG GOVERNANCE_PROD_DB.TAGS.data_sensitivity = 'confidential'
    , GOVERNANCE_PROD_DB.TAGS.contains_pii = 'name,email'
    , GOVERNANCE_PROD_DB.TAGS.data_owner = 'john.smith@company.com';

-- Tag specific columns with PII information
ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN customer_id SET TAG GOVERNANCE_PROD_DB.TAGS.contains_pii = 'unique_identifier';

ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN email SET TAG GOVERNANCE_PROD_DB.TAGS.contains_pii = 'email';

ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN social_security_num SET TAG GOVERNANCE_PROD_DB.TAGS.contains_pii = 'ssn';
```

#### Monitor and Report on Tag Coverage

**Why it matters:** Ensures consistent governance across all data assets.

**How to implement:**

```sql
-- Query to find untagged tables in critical databases
SELECT 
    t.table_catalog,
    t.table_schema,
    t.table_name,
    COUNT(tref.tag_name) as tag_count
FROM information_schema.tables t
LEFT JOIN snowflake.account_usage.tag_references tref 
    ON tref.object_id = t.table_name
    AND tref.domain = 'TABLE'
WHERE t.table_schema NOT IN ('INFORMATION_SCHEMA')
GROUP BY t.table_catalog, t.table_schema, t.table_name
HAVING tag_count = 0
ORDER BY tag_count;

-- Query to identify all objects with "confidential" sensitivity
SELECT 
    tag_name,
    tag_value,
    object_name,
    domain,
    object_database
FROM snowflake.account_usage.tag_references
WHERE tag_name = 'GOVERNANCE.DATA_SENSITIVITY'
    AND tag_value = 'confidential'
ORDER BY object_database, object_name;
```

---

## 3. Access Control and Role-Based Governance

### Role Hierarchy Design

Implement a **scalable role hierarchy** that separates access roles from functional roles:

- **Access Roles**: Define what can be done (e.g., `select_analytics_db`, `insert_raw_tables`)
- **Functional Roles**: Define who performs specific functions (e.g., `analyst_sales`, `etl_processor`)
- **Layer functional roles** with access roles to grant appropriate permissions
- **Utilize stored procedure created roles**: Procedures like `CREATE_DATABASE` or `CREATE_SCHEMA` create roles with predefined privileges, utilize them to ensure granular access.
- **Minimize role count** by combining similar access patterns within single access roles
- **Use database roles** for managing permissions within individual databases to simplify complex hierarchies

### Least Privilege Implementation

- **Grant only the minimum permissions** required for each role to perform its function
- **Use managed access schemas** to centralize and control grants rather than allowing individual object owners to grant permissions
- **Regularly audit privilege assignments** to identify and remove excessive permissions
- **Implement privilege review cycles** where data owners formally confirm that assigned access is still appropriate

### Service Account Management

- **Create dedicated service accounts** for applications, ETL processes, and automated tasks
- **Use descriptive naming** to identify service accounts (prefix with `svc_` or `sa_`)
- **Limit service account permissions** to specific objects they need to access
- **Rotate service account credentials** on a regular schedule
- **Monitor service account activity** separately from user activity to detect anomalies

### Database Roles for Governance

Leverage Snowflake's database roles to:

- **Simplify permission management** within large, complex databases
- **Grant database roles to account-level roles** to make permissions usable in sessions
- **Reduce privilege sprawl** by managing permissions at the database level
- **Maintain consistency** across related objects within a database

---

## 4. Dynamic Data Masking and Row-Level Security

### Masking Policy Strategy

Implement **dynamic data masking** to protect sensitive data at query time:

- **Define masking policies** that transform or hide sensitive values based on the user's role
- **Link policies to classifications**: Automatically apply masking to columns tagged as "Restricted"
- **Test masking policies** thoroughly to ensure they mask data appropriately without breaking applications
- **Document masking logic** to explain to users why they see masked data
- **Monitor masked data access** to detect attempts to circumvent masking

#### Masking Policy Types

- **Full masking**: Replace entire values with placeholders (e.g., "***")
- **Partial masking**: Show only selected portions of the value (e.g., last 4 digits of SSN)
- **Hash masking**: Replace with a cryptographic hash for consistent but irreversible transformation
- **Role-based masking**: Different masking levels for different roles on the same column


#### Masking example

Create Role-Based Masking Policies:

```sql
-- Create masking policy for email addresses
USE ROLE SECURITYADMIN;

CREATE OR REPLACE MASKING POLICY governance.email_mask AS (val STRING) 
RETURNS STRING ->
CASE
    WHEN CURRENT_ROLE() IN ('ANALYST', 'DATA_SCIENTIST') THEN val
    WHEN CURRENT_ROLE() IN ('VIEWER') THEN REGEXP_REPLACE(val, '.+\@', '*****@')
    ELSE '***@***.***'
END;

-- Create masking policy for social security numbers
CREATE OR REPLACE MASKING POLICY governance.ssn_mask AS (val STRING)
RETURNS STRING ->
CASE
    WHEN CURRENT_ROLE() IN ('COMPLIANCE_OFFICER', 'AUDIT_ADMIN') THEN val
    ELSE CONCAT('***-**-', SUBSTRING(val, 8, 4))
END;

-- Create masking policy for phone numbers
CREATE OR REPLACE MASKING POLICY governance.phone_mask AS (val STRING)
RETURNS STRING ->
CASE
    WHEN CURRENT_ROLE() IN ('CUSTOMER_SERVICE', 'SALES') THEN val
    ELSE REGEXP_REPLACE(val, '^.*(\d{3})$', '***-***-\1')
END;

-- Create masking policy using tag-based logic
CREATE OR REPLACE MASKING POLICY governance.tag_based_mask AS (val STRING)
RETURNS STRING ->
CASE
    WHEN CURRENT_ROLE() IN ('SECURITYADMIN', 'ACCOUNTADMIN') THEN val
    WHEN IS_ROLE_IN_SESSION('MASKED_VIEWER') THEN HASH(val)
    ELSE NULL
END;
```

Apply Masking Policies to Columns:

```sql
-- Apply masking policy to email column
ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN email SET MASKING POLICY governance.email_mask;

-- Apply masking policy to SSN column
ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN social_security_num SET MASKING POLICY governance.ssn_mask;

-- Apply masking policy to phone column
ALTER TABLE customer_analytics.public.customers 
  MODIFY COLUMN phone SET MASKING POLICY governance.phone_mask;

-- Query masking policy information
SELECT 
    database_name,
    schema_name,
    table_name,
    column_name,
    policy_name,
    policy_database,
    policy_schema
FROM snowflake.account_usage.masking_policies_applied
ORDER BY database_name, schema_name, table_name;
```

### Row-Level Security (RLS)

Implement row-level security where appropriate:

- **Define row policies** to restrict which rows users can access based on their role or attributes
- **Use RLS for data isolation** between teams or organizations within shared schemas
- **Test RLS policies** to ensure they correctly filter data without impacting performance
- **Document row policy logic** to help users understand data access boundaries


#### RLS example

```sql
-- Create a role-to-department mapping table
CREATE TABLE governance.role_department_mapping (
    role_name VARCHAR,
    department VARCHAR
);

INSERT INTO governance.role_department_mapping VALUES
  ('SALES_TEAM', 'US_WEST'),
  ('SALES_TEAM', 'US_EAST'),
  ('EUROPE_SALES', 'EUROPE'),
  ('ASIA_SALES', 'ASIA');

-- Create row access policy based on mapping table
CREATE OR REPLACE ROW ACCESS POLICY governance.department_filter AS (department_code VARCHAR)
RETURNS BOOLEAN ->
EXISTS (
    SELECT 1 
    FROM governance.role_department_mapping
    WHERE role_name = CURRENT_ROLE() 
      AND department = department_code
);

-- Apply row access policy to sales table
ALTER TABLE sales_data.public.transactions
  ADD ROW ACCESS POLICY governance.department_filter ON (department_code);

-- Create a policy for subject data access in GxP environment
CREATE OR REPLACE ROW ACCESS POLICY governance.subject_data_access AS (subject_id VARCHAR)
RETURNS BOOLEAN ->
EXISTS (
    SELECT 1 
    FROM governance.subject_access_mapping
    WHERE role_name = CURRENT_ROLE()
      AND authorized_subject_id = subject_id
);

ALTER TABLE clinical_data.public.subject_visits
  ADD ROW ACCESS POLICY governance.subject_data_access ON (subject_id);
```

---

## 5. Audit and Compliance Tracking

### ACCOUNT_USAGE Schema Monitoring

Use Snowflake's built-in audit capabilities to track compliance:

- **Monitor LOGIN_HISTORY** to track who accessed the account and from where
- **Track QUERY_HISTORY** to capture all queries executed, including who ran them and what resources they used
- **Review ACCESS_HISTORY** to see which users accessed which specific tables, columns, and rows
- **Export audit data regularly** for compliance reporting and investigation

### Audit Trail Best Practices

- **Set up automated queries** to monitor audit logs for suspicious patterns or policy violations
- **Alert on sensitive data access** to detect unusual queries against restricted tables
- **Maintain audit logs** for the period required by your regulatory framework (typically 3-7 years)
- **Archive older audit data** to optimize query performance while maintaining compliance records
- **Document audit findings** in compliance reports for regulatory inspections

### Query and Activity Monitoring

- **Track query performance** for sensitive data queries to ensure they complete within expected timeframes
- **Monitor failed login attempts** to detect potential security threats
- **Review warehouse usage patterns** to identify unused resources or anomalous behavior
- **Generate compliance reports** showing access patterns, policy enforcement, and any violations

---

## 6. Data Retention and Lifecycle Management

### Retention Policy Development

Establish **clear retention policies** based on regulatory requirements and business needs:

- **Define retention periods** by data classification level
- **Document retention rationale** based on regulatory, legal, or business requirements
- **Apply retention policies** automatically where possible using table retention settings
- **Consider lifecycle stages**: hot (frequently accessed), warm (occasionally accessed), cold (archived)

### Retention and Deletion

- **Automate data deletion** at the end of retention periods to ensure compliance
- **Implement soft deletes** where needed (mark records as deleted but maintain audit trail)
- **Maintain secure deletion processes** to ensure deleted data cannot be recovered
- **Log all deletions** for audit purposes
- **Test deletion procedures** in development environments before applying to production

### Data Archival

For data that must be retained beyond normal access periods:

- **Export archived data** to external storage (e.g., AWS S3) in secure, encrypted formats
- **Maintain archival metadata** showing what was archived, when, and why
- **Test restoration procedures** periodically to ensure archived data can be retrieved if needed
- **Apply encryption** to archived data to protect it during long-term storage

---

## 7. Data Quality and Validation

### Data Quality Metrics

Establish metrics to measure data quality:

- **Completeness**: Percentage of required fields that contain values
- **Accuracy**: Alignment with source systems and business rules
- **Consistency**: Standardization across similar data elements
- **Timeliness**: Currency of data relative to source systems
- **Uniqueness**: Identification and removal of duplicate records

### Quality Checks

- **Implement validation rules** in ETL processes to catch data quality issues early
- **Document data quality expectations** for each dataset
- **Create dashboards** to monitor data quality metrics over time
- **Establish escalation procedures** for data quality issues that affect production
- **Track data quality issues** in a central system for trending and root cause analysis

---

## 8. Change Management in Data Governance

### Schema and Policy Changes

- **Document all governance policy changes** with approval and effective dates
- **Test policy changes** in non-production environments before deployment
- **Communicate policy changes** to affected users and data stewards
- **Maintain version history** of all governance policies
- **Review impact** of policy changes on existing access rights and workflows

### Compliance Monitoring for Changes

- **Audit all changes** to masking policies, row-level security rules, and role definitions
- **Maintain records** of who authorized each governance change
- **Implement change notifications** to alert relevant stakeholders of policy modifications
- **Track policy effectiveness** after implementation to ensure changes achieved intended goals

---

## 9. Metadata Management

### Metadata Collection

Capture and maintain metadata about your data:

- **Business metadata**: Data purpose, ownership, and sensitivity classification
- **Technical metadata**: Column names, data types, constraints, and relationships
- **Operational metadata**: Last modified date, refresh frequency, quality metrics
- **Regulatory metadata**: Retention period, compliance frameworks, and approval dates

### Metadata Usage

- **Use metadata to build a data catalog** showing what data exists and how to access it
- **Link metadata to policies** to automate governance decisions
- **Document lineage** showing how data flows through your system
- **Maintain lineage documentation** for regulatory inspection and impact analysis

---

## 10. Regulatory Compliance Documentation

### Compliance Evidence

Maintain documentation supporting GxP compliance:

- **System validation reports** showing Snowflake environment meets requirements
- **Access control documentation** showing role definitions and approval records
- **Policy documentation** covering data governance, retention, and security
- **Training records** showing personnel understand compliance requirements
- **Audit reports** demonstrating monitoring and control effectiveness

### Audit Preparation

- **Maintain an audit trail** of all governance decisions and approvals
- **Document exceptions** to standard policies with business justifications and approval dates
- **Prepare audit response templates** to streamline regulatory review processes
- **Track audit findings** and corrective actions to resolution
- **Schedule mock audits** periodically to test readiness

---

## Sources & Further Reading

- Snowflake Official Documentation: [Data Governance](https://docs.snowflake.com/en/guides-overview-governance)
- SNOWFLAKE ACCOUNT_USAGE Schema Reference: [Query History and Access History](https://docs.snowflake.com/en/sql-reference/account-usage)
- Object Tagging in Snowflake: [Classification and Governance](https://docs.snowflake.com/en/user-guide/object-tagging)
- Dynamic Data Masking: [Column-Level Security](https://docs.snowflake.com/en/user-guide/security-column-intro)
- Row-Level Security: [Row Access Policies](https://docs.snowflake.com/en/user-guide/security-row-intro)
- Database Roles: [Role-Based Access Control](https://docs.snowflake.com/en/sql-reference/sql/create-database-role)
- GxP Record Retention Guidelines: [FDA and Industry Standards](https://www.fda.gov)

---

# Data Ingestion Best Practices for Snowflake

## Overview

Data ingestion is the foundation of your data platform. This document provides guidelines for implementing **reliable, auditable, and efficient data ingestion** processes that meet GxP compliance requirements and maintain data integrity throughout the pipeline.

> WHENEVER POSSIBLE: Use managed processes for data ingestion, as described in [the documentation](/snowflake/data-ingestion).

---

## 1. Ingestion Strategy Selection

### Understanding the Four Vs of Data

When designing an ingestion pipeline, evaluate your data characteristics:

- **Volume**: How much data are you ingesting? (kilobytes to terabytes)
- **Velocity**: How frequently does data arrive? (batch, hourly, continuous, real-time)
- **Variety**: What formats are involved? (CSV, JSON, Parquet, XML)
- **Veracity**: How trustworthy is the data, and what validation is required?

These factors determine which ingestion method best fits your use case.

### Ingestion Method Selection

**Batch Loading (COPY INTO)**
- Use for: Historical data loads, regular batch updates, bulk file imports
- Frequency: One-time or scheduled intervals
- Best for: Volume > 100 MB, when real-time processing is not required
- Advantages: Simple, cost-effective, handles large files efficiently

**Continuous/Streaming (Snowpipe)**
- Use for: Near-real-time data updates, continuous monitoring scenarios
- Frequency: Automatic triggering on file arrival
- Best for: Data arriving frequently throughout the day
- Advantages: Serverless, automatic scaling, minimal operational overhead

**Real-Time Streaming (Kafka Connector)**
- Use for: True streaming requirements, event-driven architectures
- Frequency: Continuous micro-batches
- Best for: Applications requiring sub-minute latency
- Advantages: Handles high-frequency events, integrates with Kafka ecosystems

**Foundry to Snowflake Sync**
- Use for: Palantir Foundry users needing seamless data sync
- Frequency: Automatic sync based on Foundry dataset changes
- Best for: Anyone wanting to integrate Foundry data into Snowflake
- Advantages: Simplified integration, managed by Snowflake Platform team

---

## 2. Data Preparation and Validation

### Pre-Ingestion Preparation

Before loading data into Snowflake:

- **Normalize file formats** to ensure consistency (e.g., all dates in ISO 8601 format)
- **Validate file integrity** using checksums or hash comparisons to detect corruption
- **Eliminate unnecessary data** in source files to reduce volume and improve efficiency
- **Compress data files** using supported compression methods (Gzip, Bzip2, Deflate)
- **Organize files** in cloud storage with clear naming conventions and directory structures

### Data Quality Checks

Implement validation at multiple stages:

- **Pre-load validation**: Verify file format, structure, and basic data types before loading
- **Schema validation**: Confirm that incoming data matches expected column definitions
- **Referential integrity checks**: Validate foreign keys and relationships are maintained
- **Data range checks**: Confirm values fall within expected ranges and distributions
- **Duplicate detection**: Identify and handle duplicate records appropriately

### Handling Invalid Records

Develop a strategy for records that fail validation:

- **Implement error handling** to capture records that cannot be loaded
- **Quarantine invalid data** in staging tables for investigation
- **Log detailed error information** including the problematic record and validation failure reason
- **Establish escalation procedures** for data quality issues that block ingestion
- **Maintain error metrics** to track and trend data quality issues over time

---

## 3. Batch Loading with COPY INTO

### File Size Optimization

- **Target file sizes between 10 MB and 250 MB** for optimal ingestion performance
- **Use parallel uploads** for very large files to improve throughput
- **Avoid very small files** (< 1 MB) which create unnecessary overhead
- **Monitor file size distributions** to identify opportunities for optimization

### COPY INTO Best Practices

- **Use cloud provider storage** (S3, Azure Blob, GCS) as an intermediate stage for larger datasets
- **Create external stages** that reference cloud storage locations with appropriate credentials
- **Implement transformation logic** using ON_ERROR clauses to handle validation failures gracefully
- **Compress data files** before uploading to reduce network bandwidth and storage costs
- **Use COPY INTO for initial data loads** combined with Snowpipe for incremental updates

### Data Loading Configuration

- **Set appropriate file format options** (delimiter, quote character, null handling)
- **Define column mapping** to handle source-to-target column differences
- **Implement purging strategies** to remove processed files from staging areas after verification
- **Monitor load performance** to identify bottlenecks and optimization opportunities

### Audit and Compliance

- **Maintain load manifest files** tracking which source files loaded into which tables
- **Record load timestamps** and data version information for each load
- **Document transformation logic** applied during loading
- **Preserve audit trails** showing data lineage from source through loading

---

## 4. Continuous Loading with Snowpipe

### Auto-Ingest Snowpipe Setup

For most use cases, auto-ingest Snowpipe is the preferred approach:

- **Configure cloud event notifications** (SNS for AWS, Event Hubs for Azure) to trigger on new file arrival
- **Define pipes** that automatically ingest files matching specific patterns
- **Use cloud provider event filtering** to reduce notification volume and ingestion latency
- **Set appropriate file format options** matching your source data characteristics
- **Configure error handling** to capture and quarantine invalid records

### Snowpipe Configuration Options

- **Use regex filtering** on Snowpipe pipes to ingest only files matching specific patterns
- **Set file name patterns** to automatically detect new data files
- **Configure COPY options** including null handling, date formats, and data type conversions
- **Implement notification dead-letter queues** to capture failed event processing
- **Monitor Snowpipe latency** to ensure data is loaded within acceptable timeframes

### API-Triggered Snowpipe

When auto-ingest is not feasible:

- **Use REST API endpoints** to trigger ingestion on demand
- **Implement refresh logic** to list bucket prefixes and ingest recently modified files
- **Use loadHistoryScan** for detailed load history and tracking
- **Monitor insertReport endpoints** for real-time load status
- **Implement retry logic** for failed API calls with exponential backoff

### Snowpipe Monitoring

- **Track load history** showing which files loaded successfully and which failed
- **Monitor ingestion latency** to ensure data arrives within expected timeframes
- **Set alerts** for failed loads or unusual ingestion patterns
- **Review cost implications** of Snowpipe usage
- **Analyze file processing patterns** to identify optimization opportunities

---

## 5. Cloud Storage Integration

### Storage Stage Configuration

- **Create external stages** referencing S3, Azure Blob, or GCS locations
- **Use storage integrations** to manage credentials securely without hardcoding
- **Restrict allowed locations** to specific buckets or prefixes using STORAGE_ALLOWED_LOCATIONS
- **Implement blocking lists** to prevent accidental access to unintended locations
- **Regularly audit stage configurations** to ensure proper access controls

### Cloud Provider Integration

**AWS S3 Integration**
- Use storage integrations with IAM roles for secure, key-free authentication
- Create S3 bucket policies allowing Snowflake to access required objects
- Use SNS topics for Snowpipe event notifications
- Implement lifecycle policies on S3 to manage file retention

**Azure Integration**
- Use storage integrations with Azure managed identities where available
- Configure Blob Storage event subscriptions for Snowpipe automation
- Implement Azure role-based access control (RBAC) for Snowflake service principals
- Use private endpoints for secure connectivity

### Security in Cloud Storage

- **Enable encryption at rest** on cloud storage using provider-managed or customer-managed keys
- **Encrypt data in transit** using TLS/HTTPS connections
- **Limit access** to ingestion storage paths using bucket policies or access control lists
- **Enable access logging** on storage buckets to track all object access
- **Regularly audit** bucket configurations for security misalignments

---

## 6. Semi-Structured Data Ingestion

### Handling JSON and XML

- **Ingest semi-structured data** into VARIANT columns when structure varies
- **Flatten semi-structured data** into structured tables for better query performance
- **Use schema detection** to identify nested structures and data types
- **Implement gradual flattening** to balance flexibility with query optimization
- **Document data structure** for users who query semi-structured columns

### Schema Evolution

- **Plan for schema changes** in source systems
- **Version your ingestion processes** to handle schema variations
- **Test schema changes** in development environments before applying to production
- **Maintain compatibility** between schema versions where possible
- **Document all schema changes** with dates and rationales

---

## 7. Data Lineage and Tracking

### Ingestion Metadata

Capture metadata about each ingestion:

- **Track source system and file name** for traceability
- **Record ingestion timestamp** and end-to-end processing duration
- **Capture row counts** (loaded, rejected, skipped) for validation
- **Document transformation rules** applied during loading
- **Maintain data version information** showing which data version was loaded when

### Audit Trail Requirements

- **Create ingestion audit tables** logging all load activities
- **Record who initiated each load** and from which system
- **Capture any data transformations** applied before loading
- **Document data quality** metrics and validation results
- **Maintain historical records** of all ingestion activities for compliance purposes

### Compliance Documentation

- **Generate ingestion reports** for regulatory review
- **Document data provenance** showing source-to-target data flow
- **Maintain change history** for ingestion procedures and configurations
- **Create traceability matrices** linking source to loaded data
- **Archive ingestion logs** according to retention policies

---

## 8. Error Handling and Retry Logic

### Failure Recovery

- **Implement automatic retries** with exponential backoff for transient failures
- **Distinguish between recoverable and permanent errors** to avoid infinite retries
- **Implement circuit breakers** to pause ingestion when persistent failures occur
- **Set up alerting** for critical ingestion failures
- **Document manual recovery procedures** for administrator intervention

### Data Quality Failures

- **Implement on-error strategies** (skip, continue, abort) appropriate to your use case
- **Quarantine rejected records** for investigation and remediation
- **Log rejection reasons** with sufficient detail for root cause analysis
- **Track rejection metrics** over time to identify systemic issues
- **Implement feedback loops** to address recurring quality issues at the source

### Monitoring and Alerting

- **Set thresholds** for alert triggers (e.g., rejection rate > 1%, latency > 5 minutes)
- **Configure notifications** for critical failures
- **Create dashboards** showing ingestion health metrics
- **Implement automated remediation** for common, understood failures
- **Maintain runbooks** for manual intervention in failure scenarios

---

## 9. Performance Optimization

### Warehouse Configuration

- **Use appropriately sized warehouses** for ingestion workloads
- **Consider separate warehouses** for ingestion vs. analytical queries to avoid contention
- **Implement auto-suspend** to reduce costs for batch ingestion
- **Monitor warehouse utilization** to right-size resources
- **Test performance** with expected data volumes before production deployment

### Ingestion Pipeline Tuning

- **Optimize file staging** organization to minimize bucket listing time
- **Implement parallel loading** for very large files or datasets
- **Use appropriate data types** to minimize storage and processing requirements
- **Consider materialized views** for commonly used data transformations
- **Profile ingestion processes** to identify and eliminate bottlenecks

### Cost Optimization

- **Monitor ingestion costs** by pipeline and source system
- **Optimize file sizes** and compression to reduce data transfer costs
- **Schedule batch ingestion** during off-peak hours where possible
- **Clean up temporary and staging data** to avoid unnecessary storage costs
- **Review Snowpipe costs** and compare with batch alternatives

---

## 10. Data Validation Post-Ingestion

### Reconciliation Checks

- **Compare row counts** between source and loaded data
- **Validate aggregate metrics** (sums, averages) against source system
- **Check for missing values** in critical columns
- **Verify data type distributions** match expectations
- **Validate referential integrity** across related tables

### Ongoing Monitoring

- **Monitor data freshness** showing how current loaded data is relative to source
- **Track data staleness** by table to identify ingestion delays
- **Alert on data arrival delays** that exceed SLA
- **Monitor data anomalies** such as unusual value distributions
- **Trend data quality metrics** to identify degradation patterns

---

## Sources & Further Reading

- Snowflake Official Documentation: [Data Ingestion Methods](https://docs.snowflake.com/en/user-guide/data-load-overview)
- COPY INTO Best Practices: [Bulk Loading Reference](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table)
- Snowpipe Guide: [Continuous Data Loading](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)
- Kafka Connector Documentation: [Streaming Data Ingestion](https://docs.snowflake.com/en/user-guide/kafka-connector)
- AWS S3 Integration: [Cloud Storage Documentation](https://docs.snowflake.com/en/user-guide/data-load-s3)

---

# Data Externalization Best Practices for Snowflake

## Overview

Data externalization (unloading) involves exporting data from Snowflake to external storage systems for downstream processing, reporting, or integration with other platforms. This document provides guidelines for **secure, auditable, and efficient data exporting** that maintains data integrity and compliance throughout the externalization process.

> WHENEVER POSSIBLE: Use managed processes for data consumption, as described in [the documentation](/snowflake/data-consumption).

---

## 1. Externalization Strategy and Use Cases

### Common Externalization Scenarios

- **Data Lake Export**: Moving processed data to cloud storage for analytics platform integration
- **System Integration**: Exporting data to external systems (ERP, CRM, BI tools)
- **Partner Data Sharing**: Providing data extracts to external partners or vendors
- **Backup and Archival**: Moving data to long-term storage for compliance retention
- **Palantir Foundry Integration**: Syncing data with Palantir for AI and analytics capabilities
- **Report Generation**: Exporting query results in specific formats for downstream consumption

### Selection Criteria

When choosing an externalization approach, consider:

- **Data volume**: Size of export determines method efficiency
- **Frequency**: One-time vs. scheduled vs. continuous exports
- **Format requirements**: CSV, Parquet, JSON, or other specific formats
- **Target system**: Where data needs to be delivered
- **Compliance requirements**: Data protection and audit trail needs
- **Cost sensitivity**: Impact of compute and storage on total cost

---

## 2. Unloading Data with COPY INTO

### Basic Unload Configuration

The primary method for exporting data from Snowflake:

- **Use COPY INTO FROM** to unload table data to external stages
- **Reference external stages** configured to cloud storage (S3, Azure Blob, GCS)
- **Specify output format** (CSV, JSON, Parquet) appropriate for downstream systems
- **Implement data transformations** in the SELECT query before unloading
- **Control file size** and partitioning to manage downstream processing

### Unload Options and Parameters

- **File format**: Define delimiter, quote characters, null handling for CSV
- **Compression**: Use Gzip or other compression to reduce storage and transfer costs
- **Header rows**: Include or exclude column headers based on downstream requirements
- **Data type conversions**: Handle date, timestamp, and numeric format conversions
- **Partition configuration**: Split output across multiple files based on size or column values
- **Overwrite behavior**: Control whether to replace existing files or append new data

### Output Format Selection

**CSV Format**
- Use for: General-purpose data exports, spreadsheet imports
- Advantages: Widely supported, human-readable, small file size with compression
- Considerations: Requires careful handling of special characters and null values

**Parquet Format**
- Use for: Data lake exports, integration with big data tools
- Advantages: Columnar format, efficient compression, preserves data types
- Considerations: Less human-readable, requires compatible tools for consumption

**JSON Format**
- Use for: API-driven systems, semi-structured data exports
- Advantages: Flexible structure, supports nested objects
- Considerations: Larger file sizes, parsing complexity

---

## 3. External Stage Configuration

### Stage Creation and Management

- **Create external stages** referencing cloud storage paths (S3 prefixes, Azure containers, GCS folders)
- **Use storage integrations** to manage credentials securely without exposing keys
- **Define allowed locations** to control which paths can be accessed
- **Implement blocking lists** to prevent accidental data exfiltration to unintended locations
- **Organize stages** with clear naming conventions showing purpose and data classification

### Security Configuration

- **Enable encryption at rest** on all external storage using provider-managed or customer keys
- **Encrypt data in transit** using TLS/HTTPS for all data transfers
- **Restrict bucket access** using IAM policies allowing only Snowflake service accounts
- **Enable versioning** on cloud storage to maintain data history and enable recovery
- **Configure access logging** on storage buckets to track all data access
- **Implement lifecycle policies** to manage retention and transition old files to archive storage

### Storage Integration Best Practices

- **Use separate integrations** for different sensitivity levels or teams
- **Implement least-privilege access** limiting each integration to minimum required permissions
- **Regularly audit integration configurations** to ensure they remain appropriate
- **Test access** periodically to verify connections remain functional
- **Document integration purposes** and approval dates for compliance

---

## 4. Data Lineage and Audit Trails

### Externalization Metadata

Capture and maintain detailed metadata for each data export:

- **Export timestamp** showing exactly when data was extracted
- **Query or table source** documenting what data was exported
- **Row counts** (before and after any filtering)
- **Data hash or checksum** for integrity verification
- **Export initiator** documenting who requested the export
- **Destination** showing where data was delivered
- **Purpose** describing why data was exported (for compliance review)

### Audit Trail Maintenance

- **Create externalization audit tables** logging all data exports
- **Include query identifiers** linking exports to specific Snowflake operations
- **Record data transformations** applied during externalization
- **Document access patterns** showing who accessed exported data
- **Maintain historical records** showing export volume and frequency trends
- **Archive audit records** according to GxP retention requirements

### Compliance Documentation

- **Generate export authorization records** showing approval for each export
- **Document data classification levels** of exported data
- **Create export manifests** listing files and their contents
- **Maintain recipient records** for partner data sharing scenarios
- **Document encryption and data protection** applied to exported data
- **Create traceability records** for regulatory review

---

## 5. Palantir Foundry Integration

### Bidirectional Data Exchange

Leverage the new Snowflake-Palantir partnership for improved interoperability:

- **Use Iceberg tables** in Snowflake for native zero-copy interoperability with Palantir Foundry
- **Implement bidirectional sync** allowing data to flow from Snowflake to Foundry and back
- **Eliminate duplicate data** through zero-copy mechanisms reducing storage and compliance overhead
- **Maintain data governance** across both platforms using consistent policies and classifications

### Foundry Data Connector Setup

- **Configure data connections** between Snowflake and Palantir Foundry
- **Map Snowflake tables** to Foundry datasets with appropriate transformations
- **Implement scheduling** for regular data synchronization
- **Monitor sync health** to detect and resolve connection issues
- **Document data flow** showing which Snowflake objects feed into Foundry

### Data Governance in Palantir Integration

- **Apply consistent tagging** across both Snowflake and Foundry
- **Enforce masking policies** that apply in both platforms
- **Maintain role consistency** to ensure users have equivalent access levels
- **Audit data movement** between platforms for compliance tracking
- **Document integration** showing data provenance and transformation logic

---

## 6. AWS S3 and Cloud Storage Export

### S3 Export Best Practices

- **Organize S3 data** with clear folder hierarchies (e.g., /exports/quarterly/2024-Q1/)
- **Use consistent file naming** conventions showing content, date, and version
- **Implement S3 lifecycle policies** to transition old exports to Glacier for cost optimization
- **Enable S3 versioning** to maintain export history and enable rollback
- **Use S3 bucket policies** restricting access to authorized principals only
- **Enable access logging** to track all access to exported data
- **Implement tags** on exported objects for cost allocation and compliance tracking

### Azure Blob Storage Export

- **Organize Blob containers** with consistent naming and folder structures
- **Use Azure RBAC** to control access to exported data
- **Enable Blob snapshots** to maintain historical versions
- **Implement retention policies** to automatically archive or delete old exports
- **Enable logging** in Azure Monitor for access auditing
- **Use encryption** with customer-managed or Azure-managed keys

### GCS Export

- **Organize GCS buckets** with clear folder hierarchies
- **Implement bucket policies** using Cloud IAM for fine-grained access control
- **Enable versioning** on GCS buckets to maintain export history
- **Use Cloud Audit Logs** to track all data access
- **Implement retention rules** to manage export lifecycle
- **Use encryption** with Google-managed or customer-managed keys

---

## 7. Data Protection During Externalization

### Encryption Strategy

- **Encrypt data at rest** in external storage using industry-standard encryption
- **Encrypt data in transit** using TLS 1.2 or higher for all transfers
- **Consider field-level encryption** for highly sensitive data before export
- **Maintain separate encryption keys** for different sensitivity levels
- **Document encryption implementation** for compliance audits

### Access Control

- **Restrict export access** to authorized roles only
- **Implement time-based access** limiting who can export data during business hours
- **Require approval workflows** for exporting sensitive data
- **Monitor export activity** to detect unauthorized or anomalous exports
- **Implement IP whitelisting** to restrict export sources to known locations

### Data Masking Before Export

- **Apply masking policies** before unloading sensitive data
- **Use view-based exports** that apply masking automatically
- **Implement transformations** that reduce sensitive data exposure
- **Create separate export paths** for different authorization levels
- **Document masking** applied to exported data for recipient notification

---

## 8. Partner Data Sharing

### Data Sharing Agreements

- **Establish formal agreements** documenting what data partners receive and how they'll use it
- **Define security requirements** for partner data handling and storage
- **Specify retention periods** for partner-held data
- **Document approval requirements** for sensitive data sharing
- **Include audit rights** allowing verification of proper data handling
- **Define incident notification** requirements if data is mishandled

### Secure Data Exchange

- **Use Snowflake Secure Data Sharing** for controlled data exchange within Snowflake ecosystem
- **Implement staging databases** as intermediaries between internal and partner-accessible data
- **Use share objects** that provide read-only access to specific datasets
- **Monitor access** to partner shares through query history
- **Implement time-bound shares** that expire after specified periods
- **Encrypt exported data** before sending to partners via email or external channels

### Compliance in Data Sharing

- **Document data classifications** of shared data
- **Obtain approvals** before sharing restricted data
- **Maintain audit logs** of all partner data sharing activities
- **Track data usage** through partner access patterns
- **Implement data retention** policies within partner systems
- **Conduct periodic audits** of partner data handling practices

---

## 9. Performance Optimization

### Export Performance Tuning

- **Use parallel unload** for large datasets to leverage multiple compute resources
- **Optimize query complexity** before unloading to reduce compute time
- **Partition output files** appropriately for downstream processing
- **Avoid unnecessary columns** by selecting only required fields
- **Pre-aggregate data** where possible to reduce output volume

### Compute Resource Management

- **Use appropriately sized warehouses** for export workloads
- **Consider separate warehouses** for exports vs. analytical queries
- **Implement auto-suspend** to reduce costs for scheduled exports
- **Monitor warehouse utilization** during export operations
- **Test export performance** with realistic data volumes

### Cost Optimization

- **Monitor export volumes** and frequencies to identify optimization opportunities
- **Compress exported data** to reduce storage costs
- **Implement tiered storage** using cloud provider lifecycle policies
- **Consider Snowpipe** for continuous exports vs. scheduled COPY operations
- **Analyze export costs** by destination and data classification

---

## 10. Monitoring and Compliance Reporting

### Export Monitoring

- **Create dashboards** showing export volume, frequency, and trends
- **Set alerts** for unusual export patterns or policy violations
- **Monitor failed exports** and implement retry logic
- **Track export latency** to ensure SLAs are met
- **Generate compliance reports** showing all externalization activities

### Audit and Compliance Metrics

- **Track data classifications** of exported data
- **Monitor who initiates exports** and document approval trails
- **Measure export frequency** by data domain or team
- **Identify sensitive data exports** requiring heightened monitoring
- **Generate regulatory reports** showing export controls and data protection measures

### Data Quality in Exports

- **Validate data** before and after export to ensure integrity
- **Compare row counts** between source and exported data
- **Verify checksums** to ensure files were not corrupted in transit
- **Test format conversions** to ensure data is readable by recipients
- **Monitor recipient feedback** for data quality issues

---

## Sources & Further Reading

- Snowflake Official Documentation: [Unloading Data](https://docs.snowflake.com/en/user-guide/data-unload-overview)
- COPY INTO Unload Reference: [Export Syntax and Options](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location)
- External Stages Guide: [Cloud Storage Integration](https://docs.snowflake.com/en/user-guide/data-unload-s3)
- Secure Data Sharing: [Partner Data Exchange](https://docs.snowflake.com/en/user-guide/secure-data-sharing-across-accounts)
- Snowflake-Palantir Partnership: [Zero-Copy Interoperability](https://docs.snowflake.com)
- AWS S3 Data Management: [Lifecycle Policies and Encryption](https://aws.amazon.com/s3/)
- Azure Blob Storage Best Practices: [Access Control and Encryption](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- GCS Best Practices: [Organization and Security](https://cloud.google.com/storage/docs)

---

# Security Best Practices for Snowflake

## Overview

Security is fundamental to GxP compliance. This document provides comprehensive guidelines for implementing **multi-layered security controls** in your Snowflake environment that protect sensitive data, prevent unauthorized access, and maintain audit trails for regulatory inspection.

---

## 1. Network Security and Isolation

### Network Monitoring

- **Enable VPC Flow Logs** (AWS) or Network Watcher (Azure) to monitor network traffic
- **Set up alerts** for unusual connection patterns or access from unexpected locations
- **Monitor data exfiltration** patterns to detect potential breaches
- **Review network policies** regularly to remove obsolete or overly permissive rules
- **Test network policies** periodically to ensure they function as intended

---

## 2. Authentication and Access Control

### OAuth and Security Integrations

- **Implement OAuth 2.0** for third-party application authentication
- **Use security integrations** to authenticate external applications
- **Limit OAuth scope** to only required permissions
- **Monitor OAuth token usage** to detect suspicious activity
- **Implement network policies** on security integrations for additional control

### Workflow Identity Federation

For service accounts and automation:

- **Whenever possible, use federated identity** for automated workflows
- **Integrate with identity providers** such as AWS or AZURE, or others that support OIDC
- **Avoid hardcoding credentials** in scripts or applications
- **Use short-lived tokens** for workflow authentication
- **Implement role assumption** for workflows to limit permissions

### Key Pair Authentication

For service accounts and automation:

- **Use SSH key pair authentication** where supported by client libraries, if WIF is not possible
- **Rotate key pairs** according to security policies
- **Store private keys** securely in encrypted vaults or secret managers
- **Limit key pair scope** to specific roles and permissions
- **Audit key pair usage** to detect misuse or compromise

---

## 3. Role-Based Access Control (RBAC)

### Role Hierarchy

Implement a well-structured role hierarchy:

- **Define access roles** that grant permissions to perform specific actions
- **Define functional roles** that represent job functions and responsibilities
- **Layer roles** by composing functional roles from multiple access roles
- **Use built-in roles** (SYSADMIN, SECURITYADMIN) only for administrative functions
- **Minimize role inheritance chains** to prevent unexpected permission inheritance
- **Document role purposes** and approval records for audit purposes

### Least Privilege Implementation

- **Grant minimum required permissions** to each role
- **Regularly audit role assignments** to identify over-privileged roles
- **Review user-role mappings** to ensure appropriateness
- **Implement role review cycles** where managers confirm employee role assignments
- **Remove unused roles** and consolidate similar roles over time
- **Use database roles** to manage permissions within individual databases

### Super-Role and Super-User Management

- **Identify super-roles** (roles with high-level access) explicitly
- **Limit number of super-users** to minimize security risk
- **Require approval** for super-role assignments
- **Implement separation of duties** preventing single individuals from having administrative privileges
- **Monitor super-user activity** more closely than standard users
- **Regularly audit** super-role permissions to remove unnecessary privileges

---

## 4. Data Protection

### Encryption at Rest

- **Enable Snowflake's native encryption** which encrypts all data at rest
- **Use customer-managed encryption keys** where supported for enhanced control
- **Manage encryption keys** in a secure key management service
- **Rotate encryption keys** according to security policies
- **Document encryption implementation** for compliance verification
- **Test key recovery** procedures periodically to ensure disaster recovery capability

### Encryption in Transit

- **Enforce TLS 1.2 or higher** for all data transfers
- **Use HTTPS** for all web-based connections
- **Configure SSL/TLS parameters** in client connections
- **Use secure VPN connections** for remote access
- **Monitor for unencrypted connections** and block them if possible

### Data Masking and Tokenization

- **Implement dynamic data masking** to hide sensitive data from unauthorized users
- **Use masking policies** to transform data at query time based on user role
- **Apply consistent masking** across similar sensitive columns
- **Document masking policies** to explain to users why they see masked data
- **Validate masking effectiveness** to ensure sensitive data is protected
- **Consider field-level encryption** for highest-sensitivity data requiring zero-knowledge implementations

---

## 5. Access Management and Auditing

### Query Monitoring

- **Monitor all queries** executed in production environments
- **Audit queries accessing sensitive data** for compliance purposes
- **Alert on queries** from unusual users or at unusual times
- **Investigate failed queries** that may indicate attack attempts
- **Track query performance** to identify potential abuse

### Audit Trail Maintenance

Leverage Snowflake's built-in audit capabilities:

- **Monitor LOGIN_HISTORY** to track user authentication and access
- **Review QUERY_HISTORY** to understand what data users accessed
- **Track ACCESS_HISTORY** to see specific column and row access patterns
- **Maintain long-term audit records** for regulatory compliance
- **Archive audit data** according to GxP retention requirements
- **Regularly review audit logs** for suspicious activity

### Sensitive Data Tracking

- **Identify sensitive data columns** through data classification
- **Monitor access patterns** to sensitive data
- **Alert on large exports** of sensitive data
- **Implement access approval workflows** for sensitive data
- **Document all access** to restricted data for compliance audit

---

## 6. Security Integration with AWS

### AWS IAM Configuration

- **Create dedicated IAM roles** for Snowflake service accounts
- **Implement least-privilege IAM policies** limiting Snowflake to required actions
- **Use external IDs** when configuring Snowflake storage integrations
- **Regularly audit IAM policies** to ensure they remain appropriate
- **Implement AWS CloudTrail** logging to track all AWS API calls from Snowflake

### AWS PrivateLink Setup

- **Create VPC endpoints** for Snowflake services
- **Configure security groups** to allow only necessary traffic
- **Enable DNS resolution** through private endpoints
- **Monitor VPC Flow Logs** for traffic patterns
- **Test failover** to public endpoints in case of private link issues

### S3 Security

- **Enable S3 bucket encryption** at rest
- **Block public access** to S3 buckets used for Snowflake
- **Implement bucket policies** restricting access to Snowflake IAM roles
- **Enable S3 access logging** to track all object access
- **Implement lifecycle policies** to move old data to cheaper storage tiers
- **Enable versioning** on production S3 buckets for recovery capability

---

## 7. Secrets and Credentials Management

### Secret Storage

- **Never store credentials** in code, configuration files, or version control
- **Use AWS Secrets Manager** or Azure Key Vault for credential storage
- **Implement fine-grained access controls** on secret storage
- **Enable audit logging** on all secret access
- **Rotate secrets regularly** without requiring code changes

### Credential Rotation

- **Implement automated rotation** of service account credentials
- **Define rotation schedules** based on risk assessment
- **Test credential rotation** to ensure applications remain functional
- **Maintain previous credentials** briefly to allow graceful application reconnection
- **Alert on failed rotation** to ensure prompt remediation

### API Keys and Tokens

- **Generate API keys** with minimum scope needed
- **Implement token expiration** to limit exposure window
- **Revoke unused API keys** regularly
- **Monitor API key usage** for anomalies
- **Document API key purposes** for audit purposes

---

## 8. Data Residency and Compliance

### Data Residency Requirements

- **Understand regulatory data residency requirements** (GDPR, CCPA, etc.)
- **Select Snowflake regions** that meet residency requirements
- **Document data location** for compliance verification
- **Prevent accidental data movement** outside compliant regions
- **Implement monitoring** to detect policy violations

### Cross-Border Data Transfer

- **Document data transfer justifications** for cross-border scenarios
- **Implement additional controls** for international data transfers
- **Use data localization** to keep sensitive data within regulatory jurisdictions
- **Maintain records** of transfer decisions and approvals
- **Notify users** of international data processing where required by regulation

---

## 9. Third-Party and Partner Security

### Vendor Assessment

- **Conduct security assessments** of third-party service providers
- **Verify SOC 2 or equivalent certifications** of partners
- **Review partner data handling practices** before sharing access
- **Establish data processing agreements** covering security requirements
- **Implement audit rights** allowing verification of compliance

### Partner Access Management

- **Create separate roles** for different partner integrations
- **Limit partner access** to required data and functions only
- **Implement time-based access** expiring partner credentials
- **Monitor partner access** for unusual patterns
- **Maintain audit logs** of all partner activities
- **Require partner confidentiality agreements** covering data handling

### Secure Data Sharing

- **Use Snowflake Secure Data Sharing** for controlled partner access
- **Grant read-only shares** where possible to prevent modifications
- **Implement sharing agreements** documenting data classification and use
- **Monitor share usage** through query history
- **Revoke access promptly** when partnerships end

---

## 10. Incident Response and Security Monitoring

### Security Monitoring

- **Implement centralized logging** of all Snowflake activities
- **Use SIEM tools** (e.g., Splunk, Azure Sentinel) for security event correlation
- **Set up automated alerts** for suspicious activities
- **Monitor for data exfiltration** attempts
- **Track authentication failures** to detect brute force attempts

### Incident Response Planning

- **Develop incident response procedures** for security breaches
- **Define escalation paths** for different severity levels
- **Document incident investigation** procedures
- **Establish communication protocols** for notifying stakeholders
- **Maintain incident logs** for regulatory reporting

### Security Assessment and Penetration Testing

- **Conduct regular security assessments** of your Snowflake environment
- **Perform penetration testing** to identify exploitable vulnerabilities
- **Address findings** from assessments promptly
- **Document remediation** of security issues
- **Maintain records** of security assessments for compliance purposes

---

## 11. Compliance Monitoring and Reporting

### Compliance Verification

- **Verify security controls** are functioning as designed
- **Validate encryption implementations** periodically
- **Test access controls** to ensure they prevent unauthorized access
- **Monitor policy compliance** through automated checks
- **Document compliance evidence** for regulatory inspections

### Security Reporting

- **Generate security metrics** showing access patterns and anomalies
- **Create compliance reports** for regulatory review
- **Document security incidents** and responses
- **Maintain evidence** of control effectiveness
- **Prepare audit documentation** for regulatory inspections

---

## Sources & Further Reading

- Snowflake Official Documentation: [Security & Compliance](https://docs.snowflake.com/en/user-guide/security)
- Network Policies Guide: [IP Whitelisting and VPC Access](https://docs.snowflake.com/en/user-guide/network-policies)
- Private Connectivity Options: [PrivateLink, Private Service Connect](https://docs.snowflake.com/en/user-guide/private-connectivity)
- Encryption Best Practices: [Data Protection Strategies](https://docs.snowflake.com/en/user-guide/security-encryption)
- Role-Based Access Control: [RBAC Design Patterns](https://docs.snowflake.com/en/user-guide/security-access-control-overview)
- AWS Security Best Practices: [Identity and Access Management](https://aws.amazon.com/security/)
- Azure Security Best Practices: [Cloud Security Guidance](https://docs.microsoft.com/en-us/azure/security/)
- NIST Cybersecurity Framework: [Security Standards and Guidelines](https://www.nist.gov/cyberframework)
- CIS Cloud Security Benchmarks: [Cloud Best Practices](https://www.cisecurity.org)

---

# Warehouse & Compute Best Practices for Snowflake

## Overview

Efficient warehouse and compute resource management is crucial for maintaining performance, controlling costs, and ensuring reliable operations in a GxP-compliant Snowflake environment. This document provides guidelines for **optimal resource configuration, scaling strategies, and cost optimization** while maintaining audit trails and compliance.

---

## 1. Warehouse Architecture and Design

### Warehouse Types and Sizing

**Warehouse Sizes (Vertical Scaling)**
- Choose warehouse sizes (XS through 6XL) based on expected query complexity and data volume
- **Start conservative** with smaller sizes and scale up based on observed performance
- **Avoid oversizing** which unnecessarily increases credit consumption
- **Consider workload characteristics**: OLAP queries may benefit from larger sizes, while ETL might use small warehouses
- **Document sizing decisions** for future reference and cost analysis

**Multi-Cluster Warehouses (Horizontal Scaling)**
- Use multi-cluster warehouses for high-concurrency workloads
- **Set auto-scaling policies** to add clusters during peak usage
- **Define minimum and maximum cluster counts** appropriate for your workload
- **Monitor cluster scaling** to optimize the scaling configuration
- **Use scaling policies** (Standard or Economy) based on cost/performance trade-offs
- **Test multi-cluster configuration** in development before production deployment

### Warehouse Generation Selection

**Snowflake Gen1 vs Gen2**
- **Evaluate Gen2 for workloads** with intensive DML, large scans, or complex joins
- **Consider Gen2 cost** (typically 1.25x-1.35x higher per second) vs. performance gains
- **Test workloads on Gen2** to determine if faster execution justifies higher per-second costs
- **Monitor Gen2 performance** showing p95 query times and total cost
- **Note Gen2 region availability** which is limited compared to Gen1

---

## 2. Warehouse Configuration and Tuning

### Auto-Suspend and Auto-Resume

- **Set auto-suspend timeout** to 5-10 minutes for development, 10-15 minutes for production
- **Enable auto-resume** to allow warehouses to restart when queries are submitted
- **Balance cost savings** against overhead of warehouse startup delays
- **Monitor auto-suspend patterns** to ensure they achieve cost goals
- **Adjust timeouts** based on query frequency and acceptable startup delays

### Concurrency and Performance

- **Monitor MAX_CONCURRENCY_LEVEL** which limits concurrent SQL executions
- **Adjust concurrency settings** for high-throughput or high-latency workloads
- **Understand query queueing** behavior when concurrency limits are reached
- **Test queue depth** to ensure acceptable query latencies
- **Document concurrency configuration** rationale for audit purposes

### Statement Timeout

- **Set statement timeout** to prevent runaway queries consuming resources
- **Use appropriate timeout values** balancing protection with operational needs
- **Document timeout decisions** explaining why specific timeouts were chosen
- **Monitor timeout events** to detect problematic queries
- **Implement alerting** for frequent statement timeout events

---

## 3. Warehouse Segregation Strategy

### Workload Isolation

Implement separate warehouses for different workload types:

- **Create ETL warehouse** dedicated to data ingestion and transformation
- **Create analytical warehouse** for BI and user queries
- **Create reporting warehouse** for scheduled reports and dashboards
- **Create development warehouse** for development and testing activities
- **Isolate critical workloads** using dedicated warehouses preventing competition for resources

### Team or Department Warehouses

- **Provision separate warehouses** for teams with distinct workload patterns
- **Size warehouses** appropriately for each team's typical usage
- **Implement warehouse quotas** to control runaway costs
- **Use resource monitors** to enforce spending limits per team
- **Allocate compute credits** using transparent chargeback mechanisms

### Performance-Sensitive Operations

For operations sensitive to query timing:

- **Dedicated warehouse for time-sensitive reports** to prevent queueing
- **Guaranteed minimum resources** using warehouse clusters
- **Separate warehouse for interactive analytics** to isolate ad-hoc queries
- **Monitor SLA compliance** for performance-critical workloads
- **Test failover procedures** for critical warehouse dependencies

---

## 4. Resource Monitoring and Optimization

### Warehouse Utilization Metrics

- **Monitor warehouse credits consumed** by query and user
- **Track query distribution** across warehouses
- **Measure warehouse idle time** to identify rightsizing opportunities
- **Monitor queue depth** and queueing time to detect congestion
- **Analyze query duration trends** to identify performance degradation

### Query Performance Analysis

- **Use Query Profile** to understand execution plans and identify bottlenecks
- **Identify slow queries** through Query History
- **Analyze data scanning patterns** to optimize partition pruning
- **Optimize query compilation time** for complex queries
- **Review join strategies** to ensure optimal execution plans

### Cost Allocation and Chargeback

- **Implement cost allocation tags** on warehouses by team or department
- **Calculate cost per warehouse** and per business unit
- **Generate chargeback reports** for cost transparency
- **Identify cost optimization opportunities** through per-user or per-query analysis
- **Share cost data** with stakeholders to drive cost-conscious behavior

---

## 5. Query Optimization and Performance

### Query Design Best Practices

- **Avoid SELECT *** in production queries** to reduce data scanning
- **Filter early** in WHERE clauses to reduce data volume processed
- **Use clustered key pruning** to leverage table clustering
- **Implement materialized views** for frequently used transformations
- **Consider pre-aggregation** for heavy analytical workloads
- **Use appropriate join types** based on data sizes and selectivity

### Statistics and Optimization

- **Enable table statistics** to help query optimizer make good decisions
- **Review optimizer statistics** for large tables
- **Analyze query plans** using EXPLAIN to identify sub-optimal strategies
- **Denormalize data strategically** for analytical queries when needed
- **Test query performance** before and after optimizations

### Scaling Queries Efficiently

- **Understand predicate pushdown** to maximize cloud warehouse efficiency
- **Use result caching** for identical queries when data hasn't changed
- **Implement query result caching** for frequently repeated reports
- **Consider incremental processing** for large batch jobs
- **Use clustering** on large tables for frequently filtered columns

---

## 6. Cost Management and Optimization

### Credit Consumption Strategies

- **Monitor credits consumed** by warehouse, user, and query type
- **Right-size warehouses** to match workload requirements
- **Use smaller warehouses** where possible to reduce per-second costs
- **Schedule workloads** during off-peak hours to reduce contention
- **Consolidate warehouses** to reduce idle compute costs

### Cost Optimization Techniques

**Warehouse Consolidation**
- Combine multiple small, underutilized warehouses into larger ones
- Evaluate cost/performance impact of consolidation
- Test consolidated configurations with expected workloads
- Document consolidation decisions and baseline metrics

**Query Optimization for Cost**
- Optimize queries to reduce data scanned (primary cost driver)
- Use clustering keys on large tables to enable partition pruning
- Implement result caching for common queries
- Archive historical data to reduce query scope
- Use external tables for cold data to reduce scanning costs

**Scheduled Workloads**
- Schedule ETL during off-peak hours when possible
- Use auto-suspend aggressively for scheduled, time-limited workloads
- Implement scheduling via tasks or external orchestration
- Monitor scheduled workload execution to identify improvements

### Storage Cost Optimization

- **Monitor storage consumption** by database and table
- **Implement data retention policies** to archive or delete old data
- **Use table time-travel** for recovery rather than maintaining full backups
- **Consider table compression** for large tables
- **Archive infrequently accessed data** to external storage
- **Implement automatic data tiering** using lifecycle policies

---

## 7. Warehouse Maintenance and Operations

### Regular Maintenance Tasks

- **Review warehouse configuration** monthly to ensure appropriateness
- **Update warehouse comments** to document purpose and owner
- **Archive unused warehouses** to reduce clutter and prevent accidental use
- **Update warehouse scaling policies** based on usage trends

### Monitoring and Alerting

- **Set up alerts** for high credit consumption
- **Alert on failed queries** that may indicate issues
- **Monitor queue depth** exceeding thresholds
- **Alert on long-running queries** that may need optimization
- **Implement escalation procedures** for critical warehouse issues

### Cluster and Resource Limits

- **Monitor cluster health** for multi-cluster warehouses
- **Review cluster performance** to identify underperforming instances
- **Set resource limits** to prevent single queries from monopolizing resources
- **Implement query timeouts** to prevent runaway queries
- **Monitor statement queue** to identify queuing patterns

---

## 8. Scaling Strategies for Growth

### Scaling for Increased Data Volume

- **Monitor data ingestion rates** to anticipate growth
- **Test warehouse performance** with projected data volumes
- **Plan warehouse scaling** in advance of growth
- **Implement incremental scaling** rather than sudden jumps
- **Evaluate table clustering** for growing tables

### Scaling for Increased Concurrency

- **Monitor concurrent user growth** trends
- **Implement multi-cluster warehouses** when concurrency increases
- **Test concurrent query performance** regularly
- **Tune concurrency settings** as user base grows
- **Consider separate warehouses** for different user groups

---

## 9. Disaster Recovery and Business Continuity

### Backup and Recovery

- **Understand Snowflake's Time Travel** capability for data recovery
- **Configure appropriate retention periods** for time travel
- **Document recovery procedures** for different scenarios
- **Test recovery procedures** in non-production environments
- **Maintain monitoring** of backup/recovery health

### Business Continuity

- **Define RPO (Recovery Point Objective)** for critical data
- **Define RTO (Recovery Time Objective)** for critical systems
- **Implement replication** for disaster recovery where needed
- **Maintain redundancy** for critical warehouse components
- **Test business continuity procedures** periodically

---

## 10. Audit and Compliance in Compute Management

### Compliance Monitoring

- **Audit warehouse creation and deletion** for compliance
- **Track warehouse configuration changes** for change control
- **Monitor cost controls** to ensure spending remains within limits
- **Verify access controls** on warehouse operations
- **Maintain documentation** of warehouse business purposes

### Performance and SLA Compliance

- **Define SLAs** for query response times and availability
- **Monitor SLA compliance** through dashboards and reports
- **Track SLA violations** and root causes
- **Implement escalation procedures** for SLA breaches
- **Generate SLA reports** for compliance review

### Documentation and Records

- **Maintain warehouse inventory** showing purpose and owner
- **Document sizing decisions** and performance baselines
- **Keep records** of scaling changes and justifications
- **Maintain performance metrics** over time
- **Document cost allocation** methodologies

---

## 11. Warehouse Performance Best Practices

### Query Warmup and Caching

- **Understand warm vs cold cache** behavior
- **Implement cache-aware testing** for performance benchmarking
- **Monitor cache hit rates** to understand caching benefit
- **Pre-warm caches** before critical reporting periods
- **Understand cache invalidation** triggers

### Concurrency Without Contention

- **Design workload schedules** to avoid peak congestion
- **Use resource monitors** to prevent runaway workloads
- **Implement priority queuing** for different user classes
- **Monitor queue depth** and implement routing if needed
- **Alert when queuing exceeds acceptable thresholds**

### Performance Consistency

- **Monitor performance trends** over time
- **Identify seasonal patterns** in query performance
- **Implement performance baselines** for key queries
- **Alert on performance degradation** exceeding thresholds
- **Investigate sudden changes** in query timing

---

## Sources & Further Reading

- Snowflake Official Documentation: [Warehouse Overview](https://docs.snowflake.com/en/user-guide/warehouses)
- Warehouse Configuration Guide: [Performance Tuning](https://docs.snowflake.com/en/user-guide/warehouse-manage)
- Query Performance Optimization: [Query Profiling and Analysis](https://docs.snowflake.com/en/user-guide/querying)
- Cost Optimization Guide: [Credit Consumption and Monitoring](https://docs.snowflake.com/en/user-guide/cost-understanding-compute)
- Multi-Cluster Warehouses: [Scaling for Concurrency](https://docs.snowflake.com/en/user-guide/warehouses-multicluster)
- Time Travel and Disaster Recovery: [Data Retention](https://docs.snowflake.com/en/user-guide/data-time-travel)
- Performance Best Practices: [Query Optimization Strategies](https://docs.snowflake.com/en/guides-overview-performance)
- Resource Monitor Configuration: [Cost Controls](https://docs.snowflake.com/en/user-guide/resource-monitors)

---

# Infrastructure as Code (IaC) Quickstart Templates

Infrastructure as Code (IaC) templates provide a standardized way to manage Snowflake resources programmatically. These templates automate the creation and management of databases, warehouses, schemas, roles, tables, and permissions while enforcing naming conventions and governance policies.

Two template options are available in the `factory-snowflake-iac-templates` repository:
- **Python Templates** - Script-based automation
- **Terraform Templates** - Declarative infrastructure definitions

## When to Use IaC Templates?

Use IaC templates when you need to:

* Provision resources in a repeatable and consistent manner
* Automate environment setup (DEV, TEST, PROD)
* Integrate Snowflake resource management into CI/CD pipelines
* Ensure governance and naming conventions are enforced automatically
* Manage infrastructure changes through version control

## What are IaC Templates?

IaC templates are pre-built configurations that enable use case administrators to:

* **Automate resource provisioning** - Create databases, schemas, warehouses, roles, and tables via code
* **Enforce naming conventions** - Automatically apply Merck Snowflake [naming conventions](/snowflake/account-management/naming-convention/)
* **Leverage governance** - Utilize [stored procedures](/snowflake/account-management/stored-procedures/) for controlled resource creation
* **Maintain consistency** - Ensure uniform configuration across DEV, TEST, and PROD environments

## Template Options

### Python Templates

Script-based approach using Python to manage Snowflake resources through pre-built scripts.

**Best for:**
- Teams familiar with Python scripting
- Custom workflows requiring flexibility
- Integration with existing Python-based CI/CD pipelines

### Terraform Templates

Declarative infrastructure definitions using Terraform for resource management.

**Best for:**
- Teams with Terraform expertise
- Organizations following infrastructure as code practices
- Scenarios requiring state management and drift detection
- Multi-environment deployments with consistent configuration

## Getting Started

### Python Templates

#### Prerequisites

1. **Python environment** with required packages installed (`snowflake-connector-python`, `cryptography`)
2. **Snowflake authentication** - Templates include guidance for key-pair authentication (recommended), but support other Snowflake authentication methods
3. **UCADMIN role** or appropriate permissions in your Snowflake account

> **Security Best Practice:** Use environment variables to store authentication credentials instead of local files when possible. If using files, place your `private_key.pem` and `passphrase.txt` in the template directory and never commit them to version control.

### Terraform Templates

#### Prerequisites

1. **Terraform** installed (version >= 1.0)
2. **Snowflake authentication** - Templates include examples for key-pair authentication, but can be configured for other authentication methods
3. **UCADMIN role** or appropriate permissions in your Snowflake account
4. Configure variables in `terraform.tfvars` or pass via command line

> **Security Best Practice:** Use environment variables to store authentication credentials instead of local files when possible. If using files, place your `private_key.pem` and `private_key_passphrase.txt` in the `keys/` directory and never commit them to version control.

The Terraform templates provide examples for provisioning the following resource types:
- Databases (via stored procedures)
- Multiple schemas with governance roles (R, RW, RWC)
- Tables using SQL templates
- Warehouses with auto-suspend
- Custom roles (developer, analyst)
- Role hierarchies and permissions

> **Note:** These are example implementations. You can extend the templates to provision any Snowflake resource type supported by your service role permissions.

## Available Template Scripts (Python)

The Python templates include the following resource management scripts:

| Script | Purpose | Creates |
|--------|---------|---------|
| **database_operations.py** | Manage databases | `{DOMAIN}_{ENV}_DB` with governance roles |
| **schema_operations.py** | Manage schemas | Schemas with R, RW, RWC roles |
| **warehouse_operations.py** | Manage warehouses | `{DOMAIN}_{ENV}_{NAME}_WH` with auto-suspend |
| **role_operations.py** | Manage custom roles | `{DOMAIN}_{ENV}_{ROLE}` functional roles |
| **table_operations.py** | Manage tables | Tables with custom or default columns |
| **permission_operations.py** | Grant/revoke permissions | Role hierarchies and warehouse access |

All scripts automatically apply:
- Domain and environment prefixes
- Naming convention validation
- Governance policies through stored procedures

## How to Use

### Python Templates

#### Basic Usage Pattern

All Python scripts follow a consistent pattern with these common parameters:

* `--sf-account-name` - Your Snowflake account identifier
* `--username` - Your Snowflake username
* `--user-role` - Execution role (typically `UCADMIN`)
* `--domain` - Your domain/business unit name
* `--environment` - Environment (`DEV`, `TEST`, `PROD`)
* `--action` - Operation to perform (`create` or `remove`)

#### Example: Creating a Database

```bash
python resources/database_operations.py \
  --sf-account-name "Test1_nreg_all" \
  --username "M123456@ONE.MERCKGROUP.COM" \
  --user-role "UCADMIN" \
  --domain "MARKETING" \
  --environment "DEV" \
  --action "create" \
  --data-retention-time-in-days 7
```

This creates `MARKETING_DEV_DB` with all required governance roles and settings.

### Terraform Templates

#### Basic Usage Pattern

Terraform templates use a modular approach. Configure variables in `terraform.tfvars` or pass them via command line:

**Key variables:**
* `domain` - Your domain/business unit name
* `environment` - Environment (`DEV`, `TEST`, `PROD`)
* `snowflake_account` - Your Snowflake account identifier
* `snowflake_user` - Your Snowflake username
* `snowflake_role` - Execution role (typically `UCADMIN`)

#### Example: Provisioning Resources

```hcl
# terraform.tfvars
domain              = "MARKETING"
environment         = "DEV"
snowflake_account   = "Test1_nreg_all"
snowflake_user      = "M123456@ONE.MERCKGROUP.COM"
snowflake_role      = "UCADMIN"
```

Then run:

```bash
terraform init
terraform plan
terraform apply
```

This provisions databases, schemas, warehouses, roles, and tables based on the module configuration.


## CI/CD Integration

The templates are designed to integrate with Azure DevOps pipelines. Your DevOps team can configure pipelines to automatically provision and manage Snowflake resources as part of your deployment process.

**Key integration points:**
- Parameterized environment variables
- Automated resource provisioning
- Version-controlled infrastructure changes

---

# Snowflake Data Ingestion

Accounts in the Merck Snowflake organization are considered to be highly integrated with the AWS UPTIMIZE ecosystem. As a result, Snowflake Account users are able to access, ingest, and output data from/to certain storage locations in AWS UPTIMIZE ecosystem. These storage locations, at the time of writing this document, include -but are not limited to- the following:

* UPTIMIZE AWS Factory Account S3 buckets
* UPTIMIZE AWS DataHub S3 bucket
* UPTIMIZE Foundry

Configuration of integrations (for self-service integrations) or making request for an integration to be configured (for managed integrations) is **only reserved for Snowflake account admins**.

Below, a general architecture diagram of the integration of the storage services over AWS UPTIMIZE with Snowflake is presented.

![Snowflake Data Ingestion](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion.png)

Two ingestion scenarios are supported:

* [On-demand Data Ingestion](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/)
* [Automated Data Ingestion](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/)

A general overview on each of them can be found below.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/user.svg" width="30" height="30"> On-demand Data Ingestion

---
On-demand data ingestion scenarios support loading data from configured locations into the Snowflake account, being triggered by the Snowflake account admins. This approach supports only one-time imgestion or on-demand update of the data. There is **no automatic data update mechanism or scheduling supported**.

On-demand data ingestion is supported for the following storage options in AWS UPTIMIZE:

* UPTIMIZE AWS [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/)
* UPITMIZE AWS [DataHub S3 bucket](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/datahub-s3/)

Any sort of [federated queries](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/federated-queries/) are only supported in an **on-demand data ingestion scenario**.

To learn more about the supported on-demand data ingestion scenarios, please refer to the [corresponding documentation section](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/).

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/managing--contractual--flow.svg" width="30" height="30"> Automated Data Ingestion

---
Automated data ingestion scenarios allow for the configuration of a data ingestion process that is triggered automatically, based on an event or a schedule. This approach supports **automatic data update mechanism and scheduling**.

Automated data ingestion is supported for the following storage options in AWS UPTIMIZE:

* UPTIMIZE [Foundry](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/foundry/)
* UPTIMIZE AWS [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/snowpipe/), via **Snowpipe**
* UPTIMIZE AWS [Datahub Paths](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/datahub-s3/), via either **Snowpipe** or **External Tables**

To learn more about the supported automated data ingestion scenarios, please refer to the [corresponding documentation section](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/).

---

# On-Demand Data Ingestion

On-demand data ingestion scenarios support loading data from configured locations into the Snowflake account, being triggered by the Snowflake account admins. This approach supports only *one-time ingestion* or *on-demand update* of the data. There is **no automatic data update mechanism or scheduling supported**.

At the time of writing this document, on-demand data ingestion is supported for the following storage options in AWS UPTIMIZE:

* UPTIMIZE AWS [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/)
* UPTIMIZE AWS [DataHub S3 bucket](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/datahub-s3/)

Any sort of [federated queries](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/federated-queries/) are only supported in an **on-demand data ingestion scenario**.

![Snowflake Manual Data Ingestion](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-manual.png)

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/factory.svg" width="30" height="30"> Factory S3 Buckets

---
Integration configuration for **UPTIMIZE AWS Factory S3 buckets** are offered as a **self-service**. The Snowflake account admins could follow the procedures described [here](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) to enable data ingestion from their own AWS UPTIMIZE Factory S3 buckets.

> **Note:** Snowflake account admins are responsible for the integrations created by them. Integrations managed by the account admins will be monitored by the Merck Snowflake monitoring capabilities to identify any mis-configuration or potential issues.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/data--insights.svg" width="30" height="30"> DataHub S3 Buckets

---
Access to certain paths on **UPTIMIZE AWS DataHub S3 bucket** is offered only via **SNOW tickets** requested by the **use case owners**. Snowflake core team will review the request, and then, upon approval, dedicated pipelines will be triggered to deploy the configuration on the requestor's Snowflake account and specific UPTIMIZE AWS account resources. To learn more about this feature, please head to the [DataHub Integration](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/datahub-s3/) documentation page.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/cloud--infrastructure-management.svg" width="30" height="30"> Federated Queries

**Federated queries** enable Snowflake users to query data in the integrated storage location, **directly without ingesting the data into the Snowflake account**. This feature is only supported in an **on-demand data ingestion scenario**.

To learn more about this feature, and how to best leverage that, please head to the [Federated Queries](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/federated-queries/) documentation page.

---

# Ingestion from UPTIMIZE AWS Factory S3

Integration configuration for **UPTIMIZE AWS Factory S3 buckets** are offered as a **self-service**. The Snowflake account admins could follow the procedures described below to enable data ingestion from their own AWS UPTIMIZE Factory S3 buckets.

> **Note:** Snowflake account admins are responsible for the integrations created by them. Integrations managed by the account admins will be monitored by the Merck Snowflake monitoring capabilities to identify any mis-configuration or potential issues.

## Integration Configuration

---

### Resource to be Configured

To enable the Snowflake Account to ingest data from AWS Factory S3 buckets, Snowflake Account owners are required to create and configure the following:

**Prerequisites**: UPTIMIZE AWS Factory Account

* An **AWS S3 bucket** for data ingestion
* Appropriate **IAM Policies and Roles** to grant Snowflake access to data on the S3 buckets
* **STORAGE INTEGRATION** in Snowflake to allow for accessing data in the S3 bucket as an EXTERNAL STAGE

![Data Ingestion from UPTIMIZE AWS S3](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/ingestion-factory-s3.png)

### Configuration Steps

1. Head to your **Snowflake Account** and execute the following SQL script to fetch the VPC ID of Snowflake in the Account Region:

```sql
-- retrieve Snowflake VPC ID (Recomended method)
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
SELECT GET(PARSE_JSON(PLATFORM_JSON), 'snowflake-vpc-id')[0] AS VPC_ID
FROM ACCOUNT_MANAGEMENT.PLATFORM_INFO
LIMIT 1;
```

This will return the `"<VPC_ID>"`. Please note it down as it is required for the later stages.

> **Note:** Alternatively, you can use the following stored procedure to fetch the VPC ID. However, this method will be deprecated in future versions:

```sql
-- retrieve Snowflake VPC ID
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
CALL OPERATIONS_DB.STORED_PROCS.GET_VPCID();
```

2. Now, It's time to setup the AWS prerequisites, pick one of the CloudFormation templates from this repo: 
[S3 Integration Templates](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/s3-integration), you should either use `s3-read-with-bucket-creation.yml` or `s3-read-without-bucket-creation.yml` based on if you do have a bucket or not. Please make sure to deploy the bucket 
in the same region you account located in, our accounts are either in `eu-central-1` or `us-east-1`.   
Please keep `StorageAwsIamUserArn` and `StorageAwsExternalId` empty during the creation as we are going to fill update them after the next step.

> **Note:** You can refer to this README page to know how to deploy CloudFormation templates [CloudFormation Deployment](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/README.md)


3. Now, head back to your **Snowflake Account** an execute the following SQL script to create a **STORAGE INTEGRATION** for the S3 bucket:

```sql
-- create a storage integration for S3
CALL OPERATIONS_DB.STORED_PROCS.CREATE_STORAGE_INTEGRATION(
  'integration_name_you_want',
  'environment',
  'arn:aws:iam::123456789000:role/storage-integration-role',
  's3://your-bucket-name/'
);
```

> **Note:** Read more about the CREATE_STORAGE_INTEGRATION stored procedure from here: [Stored Procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/) 


4. Now that the **STORAGE INTEGRATION** is created, we need to fetch the **USER ARN** and the **EXTERNAL ID** which is used by Snowflake to access data on the AWS UPTIMIZE Factory S3 buckets. To do so, execute the following script in your **Snowflake Account**:

```sql
-- List your storage integrations to get the name
SHOW STORAGE INTEGRATIONS;
DESC STORAGE INTEGRATION <STORAGE_INTEGRATION_NAME>;
```

The query result will be in the form of a table. Record the values for `STORAGE_AWS_IAM_USER_ARN` and `STORAGE_AWS_EXTERNAL_ID`.

5. Head back into your AWS Account to update your CloudFormation template, you could follow this guide [CloudFormation Deployment](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/README.md). Now update the parameters `StorageAwsIamUserArn` and `StorageAwsExternalId` with the values you extracted from the last step and then update.

**You are all set now!** Below, you can find out how to ingest data on-demand from your factory S3 bucket, or if you wish to do an event-based ingestion, you may want to know how to [Configure Snowpipe](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/snowpipe/).

## Using the STORAGE INTEGRATION

---
Manual data ingestion from AWS UPTIMIZE Factory S3 buckets is available to the Snowflake Users after they introduce the corresponding **STORAGE INTEGRATION** in their Snowflake Account *(as described above)*.

Afterwards, the Snowflake Users are able to query data in their AWS UPTIMIZE Factory S3 buckets, either directly (refer to the [Federated Queries](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/federated-queries/) section of this documentation) or after the ingestion of data into their Snowflake Account.

To ingest data into the Snowflake Account and query it on-demand, please perform the following in your **Snowflake Account**:

**Prerequisites**: Having an STORAGE INTEGRATION for the Data Source

1. Creating a new or using an existing database; see how to [create databases using stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/)
2. Creating a new or using an existing schema; see how to [create schemas using stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/)
3. Creating a new table, if it doesn't already exist. The table shall be of compatible format to what you are ingesting in terms of the number of columns, type of columns, etc.

```sql
-- creating a new table
create or replace table <TABLE_NAME> (
    `<COL_NAME_1>` <COL_1_TYPE> NOT NULL, 
    `<COL_NAME_2>` <COL_2_TYPE> NOT NULL, 
    ...
);
```

4. Creating a new compatible file format, if it doesn't already exist

```sql
-- EXAMPLE create CSV file format
create or replace file format <FORMAT_NAME>
    type = 'CSV'
    field_delimiter = ','
    skip_header = 1;
```

5. Creating a new external stage

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = 's3://<FULL_BUCKET_NAME>';
```

**You are now all set**! You are able to ingest compatible files on-demand using the script below:

```sql
-- load the files to "testcsvtable"
copy into <TABLE_NAME>
    from @<STAGE_NAME>/<FILE_NAME>;
```

The contents of the file will be ingested to the table you created in *Step 2* (or the existing table).

---

# Ingestion from UPTIMIZE DataHub

Access to certain paths on **UPTIMIZE AWS DataHub S3 bucket** is offered only via **SNOW tickets** requested by the **use case owners**. Snowflake core team will review the request, and then, upon approval, dedicated pipelines will be triggered to deploy the configuration on the requestor's Snowflake account and specific UPTIMIZE AWS account resources.

> **Note:** Snowflake core team will manage the Datahub integrations and the use case admins are only granted the usage of those integrations. Therefore, any request to update or destroy the integrations shall be communicated via **SNOW tickets**.

![Data Ingestion from UPTIMIZE AWS DataHub](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-manual.png)

## Integration Configuration

---
There is no need for you to configure the integration. The Snowflake core team will take care of the configuration and will provide you with the status of the integration via SNOW tickets.

## Using the STORAGE INTEGRATION

---
Once the request of the Snowflake account use case owner to access a certain path on an UPTIMIZE DataHub s3 bucket is approved, dedicated pipelines will be triggered to configure the required resources and deploy a **STORAGE INTEGRATION** in the Snowflake account. The managed **STORAGE INTEGRATION** can **only be modified by the Snowflake core team**. The **use case admins** will be granted the **usage of the STORAGE INTEGRATION**.

To ingest data into the Snowflake Account and query it on-demand, please perform the following in your **Snowflake Account**:

**Prerequisites**: Having your requested accepted and the STORAGE INTEGRATION deployed in your Snowflake account

> **Note:** Please note that for each bucket that your are granted access in the UPTIMIZE DataHub, only one STORAGE INTEGRATION is deployed in your Snowflake account. Therefore, if you have access to multiple buckets, you will have multiple STORAGE INTEGRATIONS deployed in your Snowflake account. The name of those STORAGE INTEGRATIONS will be **DATAHUB_S3_<BUCKET_NAME>**.

1. Creating a new or using an existing database; see how to [create databases using stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/)
2. Creating a new or using an existing schema; see how to [create schemas using stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/)
3. Creating a new table, if it doesn't already exist. The table shall be of compatible format to what you are ingesting in terms of the number of columns, type of columns, etc.

```sql
-- creating a new table
create or replace table <TABLE_NAME> (
    `<COL_NAME_1>` <COL_1_TYPE> NOT NULL, 
    `<COL_NAME_2>` <COL_2_TYPE> NOT NULL, 
    ...
);
```

4. Creating a new compatible file format, if it doesn't already exist

```sql
-- EXAMPLE create CSV file format
create or replace file format <FORMAT_NAME>
    type = 'CSV'
    field_delimiter = ','
    skip_header = 1;
```

5. Creating a new external stage

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = '<APPROVED_PATH_ON_DATAHUB_S3_BUCKET>';
```

where the **<STORAGE_INTEGRATION_NAME>** in the above command is the name of the STORAGE INTEGRATION that was deployed in your Snowflake account, as **DATAHUB_S3_<BUCKET_NAME>**.

> **Note:** Please be mindul about the **<APPROVED_PATH_ON_DATAHUB_S3_BUCKET>**. You are only granted access to the path that you requested in the SNOW ticket. Therefore, you shall only use the path that was approved in the SNOW ticket.

**You are now all set**! You are able to ingest compatible files on-demand using the script below:

```sql
-- load the files to "testcsvtable"
copy into <TABLE_NAME>
    from @<STAGE_NAME>/<FILE_NAME>;
```

The contents of the file will be ingested to the table you created in *Step 2* (or the existing table).

---

# Performing Federated Queries

Snowflake supports querying data from various data sources **without ingesting data into the Snowflake** itself. This is called **Federated Querying**. In this document, we will discuss how to perform federated queries from Snowflake to **AWS UPTIMIZE Factory Account S3 buckets** and **DataHub S3 bucket**.

Two Snowflake features covered in this document for performing federated queries are:

* Querying Data in Staged Files
* External Tables

In both of approaches, Snowflake scans the location associated with the **EXTERNAL STAGE** (corresponding to either [factory S3](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) or [DataHub S3](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/datahub-s3/)) and queries the all the available data directly from the source. **This includes the data files in the subdirectories of the location.**

## Pre-requisites

---
You should have already created an **EXTERNAL STAGE**(corresponding to either [factory S3](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) or [DataHub S3](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/datahub-s3/)) to perform either of the two federated querying methods.

## Listing Data Files in the EXTERNAL STAGE

---
You are able to list the data files available in the **EXTERNAL STAGE** using the following query:

```sql
LIST @<EXTERNAL_STAGE_NAME>;
```

> **NOTE:** The above query will **list all the data files in the location** associated with the **EXTERNAL STAGE**, **including the data files in the subdirectories** of the location.

## Querying Data in Staged Files

---
You are already set to query the data in the staged files using the following query:

```sql
SELECT
    c.$1 AS <COLUMN_1_NAME>,
    c.$2 AS <COLUMN_2_NAME>,
    c.$3 AS <COLUMN_3_NAME>,
    c.$4 AS <COLUMN_4_NAME>,
    ...
FROM @<STAGE_NAME> c;
```

Snowflake performs the query on the files in the location associated with the **EXTERNAL STAGE**, without ingesting them into the Snowflake account itself. This method is preferable for **one-time queries**.

In the above query statement, ```c``` is the **alias** for the **detected columns** in the data file. You are able to change it to an alias of your preference. The ```$1, $2, $3, ...``` are the **column indexes** of the detected columns in the data file. You are also able to select a file or a subdirectory of the **EXTERNAL STAGE**, as follows:

```sql
SELECT
    c.$1 AS <COLUMN_1_NAME>,
    c.$2 AS <COLUMN_2_NAME>,
    c.$3 AS <COLUMN_3_NAME>,
    c.$4 AS <COLUMN_4_NAME>,
    ...
FROM @<STAGE_NAME>/<PATH_TO_FILE_SUBDIR> c;
```

## External Tables

In a typical table, the data is stored in the database; however, in an **external table**, the data is stored in files in an **EXTERNAL STAGE**. **External tables** store **file-level metadata** about the data files, such as the *filename*, a *version identifier* and *related properties*. This enables querying data stored in files in an **EXTERNAL STAGE** as if it were inside a database. **External tables** can access data stored in any format supported by ```COPY INTO <table>``` statements.

> **Note:** External tables are **read-only**, therefore no DML operations can be performed on them; however, external tables can be used for query and join operations. Views can be created against external tables.

> **Note:** Querying data stored external to the database is **likely to be slower** than querying native database tables; however, materialized views based on external tables can improve query performance.

---

# Automated Data Ingestion

Automated data ingestion scenarios allow for the configuration of a data ingestion process that is triggered automatically, based on an event or a schedule. This approach supports **automatic data update mechanism and scheduling**.

At the time of writing this document, automated data ingestion is supported for the following storage options in AWS UPTIMIZE:

* UPTIMIZE [Foundry](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/foundry/)
* UPTIMIZE AWS [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/snowpipe/), via **Snowpipe**
* UPTIMIZE AWS [Datahub S3 paths](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/datahub-s3/), via either **Snowpipe** or **External Tables**

![Snowflake Automated Data Ingestion](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-automated.png)

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/data--apis.svg" width="30" height="30"> Foundry

---
Snowflake offers **compute elasticity and scalability** to the Foundry platform users. Foundry use cases who have a Snowflake account, upon approval of their request, can leverage the Snowflake account resources to run their own data processing pipelines, and then, store the output data in the Snowflake account. Specifically, use case contributors and stakeholders can highly benefit from significant performance improvements when it comes to **BI and dashboarding** on their data. To learn more about this feature, please head to the [Foundry Integration](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/foundry/) documentation page.

Upon request, Foundry datasets can be configured to be ingested into the Snowflake account automatically, based on a schedule or an event.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/factory.svg" width="30" height="30"> Factory S3 Buckets

---
Configured storage integrations for **UPTIMIZE Factory S3 buckets** can be used with [**snowpipes**](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro). **Snowpipes** allow for the automatic ingestion of data into the Snowflake account, based on the **configured events on the AWS UPTIMIZE Factory S3 sources**.

To learn more about **snowpipe** and how to leverage it best for your own purposes, please consider looking into the [corresponding documentation page](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-automated/snowpipe/).

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/data--insights.svg" width="30" height="30"> Datahub Paths

---
Users are now able to automatically ingest data from **approved paths on Datahub S3 buckets** into the Snowflake account via [**snowpipe**](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro) or directly query them without the need for an ingestion thanks to [**external tables**](https://docs.snowflake.com/en/user-guide/tables-external-intro).

To learn more about the configuration steps for each of these options, please refer to the [corresponding documentation page](https://docs.uptimize.merckgroup.com/nowflake/data-ingestion/data-ingestion-automated/datahub-s3/).

---

# Data Export from UPTIMIZE Foundry to Snowflake

## Why should I import UPTIMIZE Foundry data to Snowflake ?

Foundry, at its core, is a data lake solution while Snowflake is a data warehouse.
A data warehouse typically stores data in a predetermined structure with a schema while a data lake does not have a predetermined schema. 
Also, whereas a data warehouse usually stores structured data, a data lake stores structured and unstructured data. This means that a data lake (Foundry)
offers better flexibility around data storage and manipulation, while Snowflake offers greater performances and scalability.

In case you are only interested in connecting your UPTIMIZE Foundry Dataset to accelerate the performance of a Tableau or PowerBI dashboard, we offer the
dedicated accelerator service. You can read all about it in [here](https://docs.uptimize.merckgroup.com/foundry/foundry-data/foundry-data-externalization/dashboarding-accelerator/)

## Prerequisites
Here's the list of things you need to have to start the accelerator
1. A Foundry use case, with at least one Foundry project linked to it 
2. A Snowflake extension object tied to this same use case [(Read how to get one here)](https://docs.uptimize.merckgroup.com/snowflake/quickstart/) 
3. Either one of these:
   1. A dataset located in a project of the Foundry use case
   2. A folder containing multiple datasets located in a project of the Foundry use case
4. Owner permission on the Foundry use case

> NOTE: If your Snowflake account has been created before Nov. 2023, create a SNOW ticket to create the ```FOUNDRY_DB``` in your account.

> IMPORTANT: Dataset synchronization may fail if your dataset includes columns named with Snowflake reserved keywords. Please review the [Reserved & limited keywords](https://docs.snowflake.com/en/sql-reference/reserved-keywords) documentation to identify and avoid using these keywords in your column names.  

## How to request the data export

1. Go to your the use case portal, select your use case and click on ```more > request data export```

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/accelerator/button_request_sync.png" alt="drawing" width="600"/>

2. Select the ```UPTIMIZE Snowflake``` option

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/accelerator/button_export_snowflake.png" width="600"/>

3. copy-paste the **rid** of your dataset or folder and pick correct option under folder/dataset sync selection. Make sure the dataset/folder is located in one of your Snowflake's project. If the data you want to export is in another project, please make a copy of the data in your project. 

4. Briefly explain the reasons for this export, select the ```Sync Use Case specific account``` option and select the SF account you'd like the export to be made to.

5. Optionally you can select a display name. If you leave this field empty, the data will appear in Snowflake under the same name as the Foundry dataset. Please note that this will be synced, which means that renaming the source dataset in Foundry will cause the Snowflake data to be renamed as well. This option will not have any effect in case of a folder sync, the display name will always be the name of datasets contained within it.

![Snowflake Sync Requestor Form](assets/snowflake/accelerator/snowflake_sync_requestor_form.png)

6. Submit your request and you're all done !

## Support for Non-Master Branch Syncs

You can now sync data from any source branch of the dataset instead of being limited to the `master` branch.

### What changes for non-master syncs:
- A dedicated Snowflake schema will be created.
- An end date is mandatory to ensure the sync is temporary for non-master branch sync.
- After the end date:
  - A notification is sent.
  - The sync is paused automatically after 14 days.
  - It is archived 7 days later.

This enables safe experimentation in Snowflake without impacting production datasets.


> **Note**: If you are syncing a folder:
> - it will be expanded and all datasets contained within it will be synced to Snowflake 
> - folder can contain other resources as well, they will be simply skipped
> - only datasets at the top level of the folder will be synced, subfolders will not be crawled recursively
> - for each dataset, a separate view will be created in Snowflake under the same name as the dataset appears in Foundry
> - if in the future new datasets are added to the folder, they will be synced automatically within 24 hours
> - if in the future a dataset will be removed from the folder, it will be removed from Snowflake as well within 24 hours

> **warning** Make sure your dataset has no special characters (except _ and -) and no space in its name. 
> If you fail to do so, your sync request will not be processed and you will receive a notification e-mail inviting you to rename your dataset. Once you have renamed your dataset, an additional delay of 24h might occur for your request to be processed.

> **Notes**
> - After submitting, you will be redirected to the request, were you can track the approval status.
> - Once the request is created, you will receive an confirmation e-mail with a link to the Foundry request

## When will the data be available ?

The export request will first require to be approved by the corresponding SDO. 
Once the request has been approved, the data will be ready to use within 1 hours.

## How to access the data ?
All Snowflake accounts have been equipped with a database called ```FOUNDRY_DB```. This is a read-only database that will receive all the data exported from Foundry. 
When the export has completed, a new schema will appear named after the RID of the Foundry project in which the data is located: ```F_<PROJECT RID>```.
Additionally, a reader role to the schema will be created with the name: ```FOUNDRY_F_<PROJECT RID>_R```. The role ```FOUNDRY_ROLEADMIN``` is the owner of those roles. 

Each dataset will result in 2 views available in FOUNDRY_DB: 
 - One with the same name as the Foundry dataset
 - One with the name based on the dataset rid -> ```<DATASET_RID>```

Since FOUNDRY_DB is a read-only database, you will be forced to make a copy of the data to one of your personal DB before making any modification. 
At first, only the Snowflake account's ```UCADMIN``` can see the data, he can however grant select permissions to other users by using the corresponding schema reader role.
For more info on how to use RBAC in UPTIMIZE Snowflake, please look into our [dedicated documentation](https://docs.uptimize.merckgroup.com/snowflake/access-management/role-based-access-management/).

## Deletion and pause of sync request

You can Pause or archive your sync request by editing the existing request form. 
Pausing the sync will cause the data to stay on the accelerator but not be synched with the Foundry dataset anymore.
Archiving the request will delete the data from the accelerator all together. 
To access your sync request form, you can use the link sent in the confirmation e-mail. Otherwise
you can access it from the Foundry ontology.

## Anything else I should know ?
Here are a couple of restrictions/behaviours you should be aware of:
- Not all types of dataset names are supported. Make sure your dataset has no special characters in its name, except _ and - and white spaces. (```Table```, ```Table 2```, ```Table-3``` are allowed but not ```2Table%```)
- All column names supported by Foundry are allowed
- The accelerator will convert dashes (-) and white spaces to underscores (_) in the dataset name
- When the dataset is modified, you can expect the changes to be visible in the accelerator after 30 minutes
- You can Pause your sync request by editing the corresponding sync request. Pausing the sync will cause the data to stay on the accelerator but not be synched with the Foundry dataset anymore. 
- If you want to make a 1-time export, then you need to make a sync request and then pause the sync once the data has arrived in the Snowflake account
- If you want to sync 2 datasets with the same name and from the same project, their display name will append the first 5 characters of their RID to differentiate them (e.g ```SALES_DATA_34G6D9```)
- To easliy go to the source dataset of a Snowflake view, you can look at the "comment" of the view, the URL link to the source dataset can be found here
- If the dataset has a marking applied, the sync will fail and a notification will be sent to the requester informing the same.
- Both master and non-master branch syncs are supported. Non-master syncs require an end date and follow a timed pause and archival process.

## FAQ

### Who can I reach out to for support ?
For any support, please open a SNOW ticket on the service ```Snowflake``` and category ```Uptimize Snowflake```
### When will the data be available after posting my request ?
The export request will first require to be approved by the corresponding SDO. 
Once the request has been approved, the data will be ready to use within 1 hour.

### When I update my data in Foundry, how fast does it sync to the accelerator ?
Depending on the size of your data, we see updates lasting from 5 minutes (<2GB) to 30 minutes (>100GB). 
Those performances will also depend on various factors like network traffic, data partitionning, etc.

---

# Automatic Ingestion of Data from AWS Factory S3

**Snowpipe** enables loading data from files *as soon as they end up or become updated in **Factory S3 buckets***. This means you can load data from files in micro-batches, making it available to users within minutes, rather than manually executing COPY statements on a schedule to load larger batches.

Basically, **Snowpipes** leverage the same **STORAGE INTEGRATION** as is used for [on-demand data ingestions](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) from **Factory S3 buckets**. They are triggered by the a **SQS queue managed by Snowflake**. The queue handles the event messages of the S3 Event Notifications generated from defined S3 API calls. Upon being triggered, Snowpipes use the created **IAM Roles** for **STORAGE INTEGRATION** to fetch the files from the S3 Bucket.

A pipe is a named, first-class Snowflake object that contains a **COPY statement** used by **Snowpipe**. The **COPY statement** identifies the *source location of the data files* (i.e., a stage) and a *target table*.

> **Note:** At the time of writing this document, **Snowpipe** is only supported for **UPTIMIZE AWS Factory S3 buckets**.

![Snowpipe UPTIMIZE Integration](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-automated-snowpipe.png)

## Configuration Steps

---
**Prerequisites**: Configuration of [STORAGE INTEGRATION for Factory S3 Buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/)

As mentioned above, **Snowpipe** is *triggered by a **SQS queue*** receiving notification messages of **S3 Event Notifications**. **Event Notifications** carry the path of the file that triggered them and pass them to the **SQS queue**. As a result, **Snowpipe** would know the path and the name of the file which is just placed/updated in the **Factory S3 bucket**. This enables the Snowflake users to:

* Ingest various types of data automatically using just a single S3 Factory bucket
* Carry out complex ingestion plans which include various data types or data architectures
* Prevent double-ingestion of the file into the Snowflake Account

To automatically ingest files from **Factory S3 buckets**, for **each data type or architecture**, the users shall:

1. Head to your **AWS Account**, to the S3 bucket configured for **STORAGE INTEGRATION**, and create a folder corresponding to your data type or architecture, e.g. *data-type-1*.
2. Head to your **Snowflake Account** and create new or use existing **databases**, **tables**, **file formats** and **stages** according to the [On-Demand Ingestion from Factory S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) section of this documentation.
**NOTICE:** For creating external stages, please note to use the path to the folder that you created for the data type or architecture, such as follows:

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = 's3://<FULL_BUCKET_NAME>/data-type-1';
```

3. Now create your Snowpipe logic by executing the SQL script below:

```sql
-- SNOWPIPE definition
create or replace pipe <PIPE_NAME> auto_ingest=TRUE
    as copy into <TABLE_NAME>
    from @<STAGE_NAME>;
```

4. Now, you need to **fetch the ARN for the SQS queue** that was created for the Snowpipe. To do so, execute the following SQL statement:

```sql
-- get the ARN of the SQS queue
show pipes like '<PIPE_NAME>';
```

The ARN of the SQS queue is the value of the **notification_channel** column in the result.

> Please note that Snowflake uses the same SQS queue for all Snowpipes associated with the same STORAGE INTEGRATION. As a result, the ARN of the SQS queue is the same for all Snowpipes. This means that you only need to fetch the ARN once for the STORAGE INTEGRATION.

5. Now head to your **AWS Account**, to the S3 bucket confgiured for **STORAGE INTEGRATION** in which you created a folder in *Step 1*. Navigate to the **Properties** tab and in the **Event notifications** section, click on the **Create event notification** button.
6. In the **General configuration** section, enter the **name** of the event notification, preferably the same as the pipe name, and the **Prefix**, as the name of the folder you created in *Step 1* followed by a "/".

![S3 Event Notification General Configuration](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/s3-event-notification-general-config.png)

7. In the Event types section, tick the "All object create events" box while not ticking any other boxes. As a result, an event notification is created whenever a file ends up in the designated folder.

![S3 Event Notification Event Types](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/s3-event-notification-event-types.png)

> Please note that if the **Suffix** is not empty, the event notification will only be triggered for files ending with the specified suffix. It is advised to use a different folder for each data type or architecture.

> Beware of ticking any other boxes in the Event types section, as this may result in double ingestion of the same file into the Snowflake Account on the events totally unrelated to an object creation.

8. Finally, in the **Destination** section, select the **SQS queue** that was created for the **STORAGE INTEGRATION**. This is the queue that will receive the event notifications and trigger the Snowpipe. Now, select the "**Enter SQS queue ARN**" option and paste the **ARN** of the queue that you fetched in *Step 4*. Click on the **Save changes** button to save the event notification.

![S3 Event Notification Destination](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/s3-event-notification-destination.png)

**YOU ARE NOW ALL SET!** You can now place files in the designated folder and Snowpipe will automatically ingest them into the designated table.

## Snowpipe in Action

---
Once a file ends up in the designated folder, the event notification is triggered and the SQS queue receives the event notification. The SQS queue then triggers the Snowpipe and the file is ingested into the designated table.

In the cases where several Snowpipes are defined for the same **STORAGE INTEGRATION**, the SQS queue will trigger all Snowpipes. However, **only the Snowpipes that match the file path in their definition** will proceed with the ingestion.

![Automated Ingestion with Snowpipe](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowpipe-ingestion.png)

### New File Types and Architectures

Users are able to ingest new file types and architectures by simply creating a new folder in the S3 bucket and defining a new Snowpipe for the new folder.

> It is advised that users do not create nested folders in the S3 bucket. This may result in double ingestion of the same file into the Snowflake Account. To handle more complex ingestion plans that require **nested folders**, please refer to the next section.

### Complex Ingestion Plans using Snowpipe and Nested Folders

For some cases, users might need to ingest data from several sub-folders in a bucket to their Snowflake Account. For example, a user might want to ingest data from the following folder structure:

    s3://<FULL_BUCKET_NAME>/
    ├── data-type-1
    │   ├── data-1
    │   └── data-2
    └── data-type-2
        ├── data-1
        └── data-2

It should be noted that if a Snowpipe is defined for *data-type-1*, it will ingest data from **both** *data-1* and *data-2* folders. Consequently, to prevent double ingestion of the same file, no other Snowpipes shall be defined for the *data-1* and *data-2* sub-folders. If *data-1* and *data-2* sub-folders are going to host files of different data types, then it is advised to not define any Snowpipes for *data-type-1* folder and instead define Snowpipes for the *data-1* and *data-2* sub-folders.

---

# Automated data ingestion & direct queries from UPTIMIZE DataHub

Access to certain paths on **UPTIMIZE AWS DataHub S3 bucket** is offered only via **SNOW tickets** requested by the **use case owners**. Snowflake core team will review the request, and then, upon approval, dedicated pipelines will be triggered to deploy the configuration on the requestor's Snowflake account and specific UPTIMIZE AWS account resources.

> **Note:** Snowflake core team will manage the Datahub integrations and the use case admins are only granted the usage of those integrations. Therefore, any request to update or destroy the integrations shall be communicated via **SNOW tickets**.

![Data Ingestion from UPTIMIZE AWS DataHub](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-manual.png)

## SNOW ticket requirements

---
Users are kindly asked to provide the following information in the **SNOW ticket**, when requesting access to a certain path on the UPTIMIZE DataHub S3 bucket for automated data ingestion and direct queries:

* **DataHub S3 Bucket Name**: The **name of the UPTIMIZE DataHub S3 bucket** that you want to access.
* **DataHub S3 Bucket Path**: The **path on the UPTIMIZE DataHub S3 bucket** that you want to access.
* **Snowflake Account Name**: The **name of the Snowflake account** where you want the integration to be deployed.
* **Ingestion approval from the source owner/domain owner**: The **source owner/domain owner** must approve the ingestion of data from the requested path on the UPTIMIZE DataHub S3 bucket. The approval needs to be attached to the SNOW ticket.

Once the request is approved, the Snowflake core team will deploy the configuration and provide you with the **SNS Topic ARN** that is associated with the updates on the requested path. The **SNS Topic ARN** will be used to configure the **Snowpipe for automated data ingestion** or to configure the **External Table for direct queries** *(setup instructions below)*.

## What is a Snowpipe?

---
**Snowpipe** enables loading data from files *as soon as they end up or become updated in **Datahub S3 buckets***. This means you can load data from files in micro-batches, making it available to users within minutes, rather than manually executing COPY statements on a schedule to load larger batches.

**Snowpipes** are actually AWS SQS queues managed by Snowflake. UPTIMIZE Snowflake backend services gather all the event notifications on Datahub S3 buckets, verify them against the approved requested paths, and then forward the valid notifications to dedicated SNS topics. **The Snowpipe needs to be subscribed to the dedicated SNS topic to be triggered by the event notifications**.

To configure the **Snowpipe** for **automated data ingestion**, or to leverage it for **External Tables** for direct queries, please follow the instructions below.

## What is an External Table?

---
**External Tables** are tables that are defined in Snowflake but **do not contain data**. Instead, they reference data stored in an external stage, such as an S3 bucket. External tables are useful when you want to query data stored in an S3 bucket without loading it into Snowflake.

**External tables leverage Snowpipes under the hood** to **update the metadata** associated with the table when new files are added to the external stage, or the existing files were updated. This way, you can query the data in the external stage as if it were a regular table in Snowflake.

To learn more about external tables, you can refer to the [External Tables](https://docs.snowflake.com/en/user-guide/tables-external-intro) section of the Snowflake documentation.

## Configuration Steps for Automated Data Ingestion (Snowpipe)

---
**Pre-requisite:**

* **SNOW ticket approval** for the requested path on the UPTIMIZE DataHub S3 bucket.
* STORAGE INTEGRATION for the requested path on the UPTIMIZE DataHub S3 bucket -- **deployed by the Snowflake core team in your account** and passed to you.
* **SNS Topic ARN** for the requested path on the UPTIMIZE DataHub S3 bucket -- **provided by the Snowflake core team**.

After the request approval, you should have received the **SNS Topic ARN** that is associated with the updates on the requested path. The **SNS Topic ARN** will be used to configure the **Snowpipe for automated data ingestion**.

You can now proceed with the following steps to configure the **Snowpipe** for automated data ingestion:

1. Head to your **Snowflake Account** and create new or use existing **databases**, **tables**, and **file formats** according to the [On-Demand Ingestion from Factory S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) section of this documentation.

2. Create an external stage to load the files from the requested path on the UPTIMIZE DataHub S3 bucket. Use the **STORAGE INTEGRATION** that was deployed in your account for the requested path.

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = '<PATH ON DATAHUB S3 BUCKET>';
```

3. Now create your Snowpipe logic by executing the SQL script below:

```sql
-- SNOWPIPE definition
create or replace pipe <PIPE_NAME> auto_ingest=TRUE
    aws_sns_topic = '<SNS_TOPIC_ARN>'
    as copy into <TABLE_NAME>
    from @<STAGE_NAME>;
```

and, that's it! **You are now all set to ingest data automatically from the requested path on the UPTIMIZE DataHub S3 bucket.**

The Snowpipe will automatically subscribe itself to the SNS Topic and will be triggered by the event notifications on the requested path. It will then ingest the data into the designated table.

> IMPORTANT NOTE: Please consider that **any created Snowpipe only subscribes to one of our SNS topics ONCE**! In other words, **you are not able to subscribe to the same topic twice, whether from two different snowpipes or from the same named Snowpipe (after replacing it)**. So, if you need to replace the Snowpipe, you will lose access to that SNS topic, and therefore, you need to raise another request to the Snowflake Core Team.

## Configuration Steps for Direct Queries (External Table)

---
**Pre-requisite:**

* **SNOW ticket approval** for the requested path on the UPTIMIZE DataHub S3 bucket.
* STORAGE INTEGRATION for the requested path on the UPTIMIZE DataHub S3 bucket -- **deployed by the Snowflake core team in your account** and passed to you.
* **SNS Topic ARN** for the requested path on the UPTIMIZE DataHub S3 bucket -- **provided by the Snowflake core team**.

After the request approval, you should have received the **SNS Topic ARN** that is associated with the updates on the requested path. The **SNS Topic ARN** will be used to configure the **External Table for direct queries**.

You can now proceed with the following steps to configure the **External Table for direct queries**:

1. Head to your **Snowflake Account** and create new or use existing **databases**, **tables**, and **file formats** according to the [On-Demand Ingestion from Factory S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/) section of this documentation.
2. Create an external stage to load the files from the requested path on the UPTIMIZE DataHub S3 bucket. Use the **STORAGE INTEGRATION** that was deployed in your account for the requested path.

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = '<PATH ON DATAHUB S3 BUCKET>';
```

3. Create an external table to query the data from the requested path on the UPTIMIZE DataHub S3 bucket.

```sql
-- create an external table to query the data (sample code)
create or replace external table <TABLE_NAME>
(
    COLUMN_NAME_1 VARCHAR(100),
    COLUMN_NAME_2 NUMBER(10,2),
    ...
)
 location=@<STAGE_NAME>.<PATH_ON_DATAHUB_S3_BUCKET>;
 auto_refresh = TRUE
 file_format = <FORMAT_NAME>;
 AWS_SNS_TOPIC = '<SNS_TOPIC_ARN>';
```

and, that's it! **You are now all set to query the data directly from the requested path on the UPTIMIZE DataHub S3 bucket.**

The Snowpipe supporting the external table will automatically subscribe itself to the SNS Topic and will be triggered by the event notifications on the requested path. It will then update the metadata associated with the external table to reflect the changes in the data.

---

# Snowflake Data Consumption

You have probably loaded data into Snowflake, manipulated it, or created some nice pipelines out of it. Now it's time to leverage the very high performance computation units (**warehouses**) in Snowflake to get insights or build reports and outputs for your business.

At the time of writing this document, the possibilities supported for data consumption include but are not limited to:

* [Dashboarding](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/) purposes
* [Data Unloading](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/) to configured Factory S3 buckets or Datahub S3 buckets

A general overview on each of them can be found below.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/dashboard.svg" width="30" height="30"> Dashboarding

---
Snowflake provides highly **performant elastic computational power** in the form of **warehouses** enabling its user to perform BI and analytics on the stored data and show the results on fancy highly responsive dashboards.

The dashboarding application currently supported by Merck Snowflake organization are as follows:

* [Tableau](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/tableau/)
* [Power BI](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/power-bi/)

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/export--02.svg" width="30" height="30"> Data Unloading

---
You have manipulated your data, created some nice pipelines out of it, and now you want to export it to a **storage location in AWS UPTIMIZE ecosystem**, so to use that data elsewhere.

Merck Snowflake organization accounts currently support unloading data to the following storage locations in **AWS UPTIMIZE**:

* [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/factory-s3/)
* [Datahub S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/datahub-s3/)


## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/data--set.svg" width="30" height="30"> Foundry

---
You could also use your data tables/views in other UPTIMIZE ecosystem's components like Foundry, where you could create **Virtual Tables** out of it.

* [Foundry Virtual Tables](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/foundry-virtual-tables/)

---

# Dashboarding

> **Note:** Please note that **Tableau** is the recommended solution for Insights Generation and Data Visualization at Merck. It is fully supported and enriched by IT across **both in and outside of the UPTIMIZE platform**.

With the significantly fast and elastically resizeable compute units of Snowflake, you are capable of creating rapid customer or stakeholder facing dashboards.

Good news? Your Snowflake account in the Merck Snowflake organization is already bootstrapped for that (for a selective number of dashboarding platforms)! Merck Snowflake organization provides access to your data securely for dashboarding purposes.

The dashboarding application currently supported by Merck Snowflake organization are as follows:

* [Tableau](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/tableau/)
* [Power BI](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/power-bi/)
* [Qlik](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/qlik/)

## Tableau

---
Tableau is the most adopted data visualization platform in Merck. It is a powerful and secure end-to-end analytics platform that enables you to create dashboards and reports that are easy to share, accurate, and actionable.

Your Snowflake account is already bootstrapped to be integrated with Tableau. To learn more about how to connect to your Snowflake account from Tableau, please head to the [corresponding documentation page](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/tableau/).

Merck Snowflake organization supports both Tableau Desktop and Tableau Server integrations.

## Power BI

---
Power BI is Microsoft's answer to dashboarding needs. Some versions of Merck virtual machines support are available with pre-installed desktop version of Power BI. Your Snowflake accounts are bootstrapped to be integrated with desktop versions of Power BI. To learn more about how to connect to your Snowflake account from Power BI, please head to the [corresponding documentation page](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/power-bi/).

> **Note:** Please be aware that only the integration configuration for Power BI is supported. However, the actual Power BI usage and corresponding support is not offered by Merck Snowflake team and the users shall go on with their workloads on their own.

## Qlik

---
Qlik's solution for Snowflake users automates the design, implementation and updates of data models while minimizing the manual, error-prone design processes of data modeling, ETL coding and scripting. Accelerate analytics projects, achieve greater agility, and reduce risk while fully realizing the instant elasticity and cost advantages of Snowflake's Data Cloud.

To learn more about the Qlik integration with Snowflake, please head to the [corresponding documentation page](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/dashboarding/qlik/).

> **Note:** Due to technical difficulties with the integration with Qlik, the integration is currently not offered on release. Please stay tuned for further updates on this topic.

---

# Dashboarding with Tableau

**Tableau** is the most adopted data visualization platform in Merck. It is a powerful and secure end-to-end analytics platform that enables you to create dashboards and reports that are easy to share, accurate, and actionable.

Your Snowflake account is already bootstrapped to be integrated with either of Tableau Desktop and Server versions.

## Connecting to Snowflake from Tableau

---

We do offer an integration with Tableau for both Snowflake use-case accounts and Dashboard Accelerator Project accounts.

For detailed instructions on utilizing the Dashboard Accelerator Project, please refer to the [Foundry Data Externalization > Dashboarding accelerator](https://docs.uptimize.merckgroup.com/foundry/foundry-data/foundry-data-externalization/dashboarding-accelerator/) documentation.

To connect your Tableau to a Snowflake data source, please follow the documentation provided by Tableau Knowledge Base tailored specifically for Snowflake integration: [Tableau Knowledge Base - Snowflake](https://mdigital.sharepoint.com/sites/Tableau_Knowledge_Base/SitePages/Data-Snowflake.aspx). These instructions apply to both use-case accounts and the Accelerator Account.



## Best Practices

---

### Live Connection vs. Extract

The data source panel enables you to select either a **live connection** or an **extract**.

To take advantage of **Snowflake's high performance** data warehouse, select **Live**.

However, you may want to use a **Tableau extract** (a compressed snapshot of data loaded into memory) for any of the following situations:

* Users require an **offline data cache** that can be used without a connection to Snowflake.
* Users are **joining Snowflake with other data sources that are slow**. Creating an extract will pull data from both sources and **remove the performance bottleneck from the additional source**.
* Users create **aggregated extracts to act as summarized data caches**. This can be an effective approach to **working with large, slow data lakes**. However, because Snowflake can provide fast query results when processing large volumes of structured and semi-structured data, *this may be unnecessary*.

> **Note:** To create or modify an extract connection, you need a live connection.

### Joins vs. Flat Tables

Even though Snowflake is quite a performant warehousing solution, one shall be still mindful of the costs incurred by their queries.

Tableau enables users to perform joins between tables. However, it is not always the best practice to do so. As for a **live connection**, Tableau will send the query to Snowflake and Snowflake will perform the join. This means that the join will be performed on Snowflake's compute resources, which will **incur costs**.

**Pre-joining**, a.k.a *flattening the tables*, is a good practice to **reduce the costs** incurred by your queries, and also to **significantly improve the performance** of your queries.

---

# Dashboarding with Power BI

> **Note:** Please note that **Tableau** is the recommended solution for Insights Generation and Data Visualization at Merck. It is fully supported and enriched by IT across **both in and outside of the UPTIMIZE platform**.

**Power BI** is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.

Your Snowflake account is already bootstrapped to be integrated with Power BI Desktop you can find on Merck's DoDs.

If you want to perform business intelligence tasks on your Snowflake data using Power BI, please follow these steps:

## PowerBI Side:
1. From the PowerBI starting page, select `Get data > more...` 
![select_snowflake](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/PBI-import+data.png)
2. Select snowflake as an external source
![select_snowflake](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/PBI-select+snowflake.png)
3. Enter the URL of the snowflake account and the warehouse you want to be used for the operation.
![select_snowflake](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/PBI-connection+string.png)
4. Click on Advanced Options, add the `Role name` that will have access to the data on the Snowflake side and click `OK`.   
![select_snowflake](assets/powerbi/default-roles/advanced-options.png)
5. select Microsoft account, signin if necessary and connect. Please make sure you sign in with the desired account for the Snowflake target. 
![select_snowflake](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/PBI-signin.png)

> **Important considerations for setting-up the connection:**
> * The URL of the Snowflake account must not contain "https://" and not have the final slash "/"
> * The warehouse chosen must exist and your snowflake profile must have the rights to operate it
> * Your snowflake profile must have none of the following roles assigned to it: ACCOUNTADMIN, ORGADMIN, and SECURITYADMIN

> **Note:** Snowflake tries to verify Azure Active Directory through the URL value in the external_oauth_jws_keys_url property (shown below) or through the allowed IP addresses in the network policy, if the network policy exists. Microsoft updates its tokens and keys every 24 hours.

> **Note:** Please be aware that only the integration configuration for Power BI is supported. However, the actual Power BI usage and corresponding support is not offered by Merck Snowflake team and the users shall go on with their workloads on their own.

---

# Snowflake Qlik Dashboarding

> **Note:** Due to technical difficulties with the integration with Qlik, the integration is currently not offered on release. Please stay tuned for further updates on this topic.

---

# Data Unloading

You have manipulated your data, created some nice pipelines out of it, and now you want to export it to a **storage location in AWS UPTIMIZE ecosystem**, so to use that data elsewhere.

Merck Snowflake organization accounts currently support unloading data to the following storage locations in **AWS UPTIMIZE**:

* [Factory Account S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/factory-s3/)
* [Datahub S3 buckets](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/datahub-s3/)

Snowflake uses the same concepts as data loading for unloading data, as well.

![Data Ingestion from UPTIMIZE AWS S3](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/ingestion-factory-s3.png)

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/factory.svg" width="30" height="30"> Unloading to UPTIMIZE AWS Factory Account S3 Buckets

As a part of the UPTIMIZE environment, Merck Snowflake organization accounts are able to unload data to the **UPTIMIZE AWS Factory Account S3 buckets**. This is a self-service integration, and Snowflake account admins could follow the procedures described [here](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/factory-s3/) to enable data unloading to their own AWS UPTIMIZE Factory S3 buckets.

## <img src="https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/pictograms/src/svg/data--insights.svg" width="30" height="30"> Unloading to UPTIMIZE AWS Datahub S3 Buckets

As a part of the UPTIMIZE environment, Merck Snowflake organization accounts are able to unload data to the **UPTIMIZE AWS Datahub S3 buckets**. This integration can be requested only via SNOW ticket, and Snowflake account admins could follow the procedures described [here](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/data-unloading/datahub-s3/) to enable data unloading to AWS UPTIMIZE Datahub S3 buckets.

---

# Unloading to Factory S3

Unloading data to **UPTIMIZE AWS Factory S3 buckets** is offered as a **self-service**, using the **STORAGE INTEGRATION** objects in Snowflake.

> **Note:** Snowflake account admins are responsible for the integrations created by them. Integrations managed by the account admins will be monitored by the Merck Snowflake monitoring capabilities to identify any mis-configuration or potential issues.

## Integration Configuration

---

### Resource to be Configured

To enable the Snowflake Account to ingest data from AWS Factory S3 buckets, Snowflake Account owners are required to create and configure the following:

**Prerequisites**: UPTIMIZE AWS Factory Account

* An **AWS S3 bucket** for data ingestion
* Appropriate **IAM Policies and Roles** to grant Snowflake write access to the S3 buckets
* **STORAGE INTEGRATION** in Snowflake to allow for accessing data in the S3 bucket as an EXTERNAL STAGE

![Data Ingestion from UPTIMIZE AWS S3](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/ingestion-factory-s3.png)

### Configuration Steps

> **Note:** Step one is optional. If VPC ID is set, you will only be able to read and write data to/from the S3 bucket from Snowflake. Further processing of data in the AWS Account the bucket is located will be denied by S3 Bucket policy. Remember to remove the S3 Bucket Policy from the respective Cloudformation template below as well.

1. Head to your **Snowflake Account** and execute the following SQL script to fetch the VPC ID of Snowflake in the Account Region:

```sql
-- retrieve Snowflake VPC ID (Recomended method)
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
SELECT GET(PARSE_JSON(PLATFORM_JSON), 'snowflake-vpc-id')[0] AS VPC_ID
FROM ACCOUNT_MANAGEMENT.PLATFORM_INFO
LIMIT 1;
```

This will return the `"<VPC_ID>"`. Please note it down as it is required for the later stages.

> **Note:** Alternatively, you can use the following stored procedure to fetch the VPC ID. However, this method will be deprecated in future versions:

```sql
-- retrieve Snowflake VPC ID
USE ROLE UCADMIN;
USE WAREHOUSE OPERATIONS_WH;
CALL OPERATIONS_DB.STORED_PROCS.GET_VPCID();
```

2. Now, It's time to setup the AWS prerequisites, pick one of the CloudFormation templates from this repo: 
[S3 Integration Templates](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/s3-integration), you should either use `s3-read-write-with-bucket-creation.yml` or `s3-read-write-without-bucket-creation.yml` based on if you do have a bucket or not. Please make sure to deploy the bucket 
in the same region you account located in, our accounts are either in `eu-central-1` or `us-east-1`.   
Please keep `StorageAwsIamUserArn` and `StorageAwsExternalId` empty during the creation as we are going to fill update them after the next step.
Remember to remove the S3 Bucket Policy, if you skipped step 1 and don't need the `VPC ID` restriction.

> **Note:** You can refer to this README page to know how to deploy CloudFormation templates [CloudFormation Deployment](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/README.md)


3. Now, head back to your **Snowflake Account** an execute the following SQL script to create a **STORAGE INTEGRATION** for the S3 bucket:

```sql
-- create a storage integration for S3
CALL OPERATIONS_DB.STORED_PROCS.CREATE_STORAGE_INTEGRATION(
  'integration_name_you_want',
  'environment',
  'arn:aws:iam::123456789000:role/storage-integration-role',
  's3://your-bucket-name/'
);
```

> **Note:** Read more about the CREATE_STORAGE_INTEGRATION stored procedure from here: [Stored Procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/) 


4. Now that the **STORAGE INTEGRATION** is created, we need to fetch the **USER ARN** and the **EXTERNAL ID** which is used by Snowflake to access data on the AWS UPTIMIZE Factory S3 buckets. To do so, execute the following script in your **Snowflake Account**:

```sql
-- List your storage integrations to get the name
SHOW STORAGE INTEGRATIONS;
DESC STORAGE INTEGRATION <STORAGE_INTEGRATION_NAME>;
```

The query result will be in the form of a table. Record the values for `STORAGE_AWS_IAM_USER_ARN` and `STORAGE_AWS_EXTERNAL_ID`.

5. Head back into your AWS Account to update your CloudFormation template, you could follow this guide [CloudFormation Deployment](https://dev.azure.com/Uptimize/factory-snowflake-dev-nreg-ec1/_git/snowflake-quickstarts?path=/templates/cloudformation/README.md). Now update the parameters `StorageAwsIamUserArn` and `StorageAwsExternalId` with the values you extracted from the last step and then update.

**You are all set now!** Below, you can find out how to unload data on-demand to your factory S3 bucket.

## Using the STORAGE INTEGRATION

Manual data ingestion from AWS UPTIMIZE Factory S3 buckets is available to the Snowflake Users after they introduce the corresponding **STORAGE INTEGRATION** in their Snowflake Account *(as described above and in [Data Ingestion from UPTIMIZE AWS S3](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/))*.

Afterwards, the Snowflake users are able to unload data to their AWS UPTIMIZE Factory S3 bucket on demand through performing the following in their **Snowflake Account**:

**Prerequisites**: Having a STORAGE INTEGRATION

1. Creating a new compatible file format, if it doesn't already exist

```sql
-- EXAMPLE create CSV file format
create or replace file format <FORMAT_NAME>
    type = 'CSV'
    field_delimiter = ','
```

2. Creating a new external stage

```sql
-- create an external stage to load the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = 's3://<FULL_BUCKET_NAME>';
```

**You are now all set**! You are able to unload data in your tables on-demand using the script below:

```sql
COPY INTO @<STAGE_NAME>/<FILE_NAME> 
    from <TABLE_NAME>;
```

---

# Unloading to Datahub S3
Unloading data to **UPTIMIZE AWS Datahub S3 buckets** is offered only via **SNOW Ticket** requested by the **use case owners**. Snowflake core team will review the request, and then, upon approval, dedicated pipelines will be triggered to deploy the configuration on the requestor's Snowflake account and specific UPTIMIZE AWS account resources.

> **Note:** Snowflake core team will manage the Datahub integrations and the use case admins are only granted the usage of those integrations. Therefore, any request to update or destroy the integrations shall be communicated via **SNOW tickets**.

![Data Unload to UPTIMIZE AWS DataHub](https://docs.uptimize.merckgroup.com/docs-assets/snowflake/snowflake-data-ingestion-manual.png)

## Integration Configuration
There is no need for you to configure the integration. The Snowflake core team will take care of the configuration and will provide you with the status of the integration via SNOW tickets.

## Using the STORAGE INTEGRATION
Once the request of the Snowflake account use case owner to access a certain path on an UPTIMIZE DataHub s3 bucket is approved, dedicated pipelines will be triggered to configure the required resources and deploy a **STORAGE INTEGRATION** in the Snowflake account. The managed **STORAGE INTEGRATION** can **only be modified by the Snowflake core team**. The **use case admins** will be granted the **usage of the STORAGE INTEGRATION**.

> Note: The deployed storage integration will be called datahub_s3-write_{DATAHUB_BUCKET_NAME} whereas the the DATAHUB_BUCKET_NAME is the datahub bucket requested in the SNOW ticket, ***Note it down to use it in the next steps.***

You can list all the storage integrations using the below script:
```sql
SHOW STORAGE INTEGRATIONS;
```

Afterwards, the Snowflake users are able to unload data to the predetermined AWS UPTIMIZE Datahub S3 buckets on demand through performing the following in their **Snowflake Account**:

**Prerequisites**: Having a STORAGE INTEGRATION

1. Creating a new compatible file format, if it doesn't already exist

```sql
-- EXAMPLE create CSV file format
create or replace file format <FORMAT_NAME>
    type = 'CSV'
    field_delimiter = ','
```

2. Creating a new external stage using the STORAGE INTEGRATION we have created earlier and the file format.
 *Server-side encryption is **required** in the write stage. If the stage was not encrypted using **AWS_SSE_S3**, you will get access denied error.*

```sql
-- create an external stage to unload the files
create or replace stage <STAGE_NAME>
    storage_integration = <STORAGE_INTEGRATION_NAME>
    file_format = <FORMAT_NAME>
    url = 's3://<FULL_BUCKET_NAME>'
    encryption = (type = 'AWS_SSE_S3');
```

3. **You are now all set**! You are able to unload data in your tables on-demand using the script below:

```sql
-- load the data from the table into the stage
copy into @<STAGE_NAME>/<FILE_NAME> 
    from <TABLE_NAME>;
```

4. You can also list all the files exists in the external stage using the below script:
```sql
list @<STAGE_NAME>
```

---

# Foundry Virtual Tables

## What are Foundry Virtual Tables?

Foundry Virtual Tables are a feature in Palantir Foundry that allows users to create a virtual representation of Snowflake data within Foundry. This allows users to perform data operations and analytics in Foundry without needing to move data out of Snowflake. The virtual tables act as a bridge, providing real-time access to Snowflake data while maintaining data security and integrity. It also relies on Snowflake's compute.  

## How to Use Foundry Virtual Tables with Snowflake

First, you have to create a source in Foundry to enable the communication between Foundry and Snowflake. Usually, you will require help from your SDO Admin on some of these steps.

Navigate to Foundry to do the below steps:
1. Create **+ New Source** from the data connections page in Foundry, source type should be **Snowflake**.
2. Select the connection type as **Direct Connection**, save the source with the name you like and select a project the save it in. Then press on **Create source and continue**
3. Here's the most important piece, while configuring the Snowflake source, you have to provide the account locator in the **Connection properties** section, which should be something in this format **\<ORGANIZATION_NAME\>-\<USECASE_NAME\>-\<GxP/NREG\>-\<DEV/QA/PROD/ALL\>** *(e.g. merckgroup-sandbox-nreg-all)* where USECASE_NAME is the account name mentioned in your Snowflake extension object. 
4. In the **Credentials** section, select **External OAuth**. Also collapse *Source system configuration instructions* and get the **Login Name**, note it down as you will use it later as the **Source ID**.
5. In the **Network Connectivity** section, you have to import the Snowflake egress policy to your source, there's a pre-created egress policy for each account, but if you don't have the access to view/import it, please check with your SDO. In addition you need to import the egress policy for the internal stage bucket of your account. URLs and egress policies' IDs are stored in the Snowflake extension object as well.  
_E.g. **internal stage bucket**: `sfc-eu-ds1-30-customer-stage.s3.eu-central-1.amazonaws.com`, **account url egress**: `merckgroup-sandbox-nreg-all.snowflakecomputing.com`_
   

** You will need elevated permissions to complete step 5. Please work with your SDO Admin or open a Foundry Issue to get help.**
  
  
> **Note:** find more information about the Foundry Sources/Data Connections from here the [Official Foundry Docs](https://www.palantir.com/docs/foundry/data-connection/set-up-source)
  
After creating the Foundry source, you have to create some resources in your Snowflake account to enable the connectivity.  

Now, navigate to your Snowflake account to do the below steps:  

6. Run the CREATE_FOUNDRY_SOURCE_CONNECTION(source_id) stored procedure and provide the **Login Name** you have noted in the stored procedures arguments, refer to the (Stored Procedures)[https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-foundry-source-connection] documentation page to get more details.   
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_FOUNDRY_SOURCE_CONNECTION('PUT_THE_SOURCE_ID_YOU_NOTED_DOWN');
-- example: CALL OPERATIONS_DB.STORED_PROCS.CREATE_FOUNDRY_SOURCE_CONNECTION('ri.magritte..source.2f817ec4-a7cd-4689-b6c2-14e5cd15fd4f');
```
7. The stored procedure you ran will create a role that will be used to access the data, the role name should be mentioned in the execution results of the stored procedure and it should be like *FOUNDRY_OIDC_RI....*, now you need to configure it through granting it the needed access roles as well as the usage on a warehouse that will be used to query the data. Refer to the below code as an example:  

```sql
 -- the Foundry role name should be double-quoted as it contains special characters.
GRANT ROLE PNL_SCH_R TO ROLE "FOUNDRY_OIDC_RI.MAGRITTE.XXXXX.XXXXX.XXXX.XXXX.XXXXX";
GRANT USAGE ON WAREHOUSE FINANCE_DEV_PNL_DB TO ROLE "FOUNDRY_OIDC_RI.MAGRITTE.XXXXX.XXXXX.XXXX.XXXX.XXXXX";
```
  
**All set now**, you can create the Virtual Tables in Foundry.  
  
Navigate back to the Palantir Foundry source connection setting page:  

8. You can then configure the default warehouse or database in your Foundry connection, you need to click on **more options** at the bottom of the Source Configuration to add a role name as well as the warehouse you have configured in your Snowflake account.
9. After finishing, click on **Save**, and navigate to the **Virtual Table tab** and select the needed tables/views that will be represented as a virtual table.

  
> **Note:** find more information about the Foundry Virtual Tables from here the [Official Foundry Docs](https://www.palantir.com/docs/foundry/data-integration/virtual-tables)

## Fast Snowflake Ingestion
A Foundry library called `fast-snowflake-ingestion` has been created for Snoflake-to-Foundry data upload with no agent or sync objects required. The data can be synced programatically from a Code Repository using this library, instead of pulling the data from a Foundry Virtual Table poiting to a Snoflake table.
For more information, visit [this](https://docs.uptimize.merckgroup.com/harbor/harbor_architecture/data_integration/snowflake_harbor/integration_hsf_to_foundry/) UPTIMIZE documentation page or inspect the `README.md` file from the [artifact](https://palantir.mcloud.merckgroup.com/workspace/artifacts/ri.stemma.main.repository.a0c37be3-9c1d-40f9-ad16-8fa8560c78d2/search?selected=CONDA%7E%7Efast-snowflake-ingestion&layout=conda) repository.

---

# Snowflake AI-ML API Integration

Snowflake's AI-ML API Integration feature allows users to seamlessly connect and interact with various AI and machine learning services directly from the Snowflake platform.

All the supported APIs are maintained by AI/ML team and more information about them can be found in [their documentation](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/).

> **IMPORTANT:** Currently AI/ML API integration is only supported for non-GxP use cases within eu-central-1 AWS region.

## Usage

> **PREREQUISITE:** To use AI/ML API integrations you must first obtain an access token from the AI/ML team. Please refer to [this guide](https://docs.uptimize.merckgroup.com/aiml/aiml_apis/#requesting-access-to-ai-ml-apis) for more information.

To use AI/ML API integration in Snowflake, a user with `UCADMIN` role privileges must follow these steps:
1. Log in to your Snowflake account.
2. Verify that the NLP API integration exists, by running the following command:
   ```sql
   SHOW INTEGRATIONS LIKE 'NLP_API';
   ```
3. Provision an NLP API caller function, by executing the following command:
    ```sql
    CALL OPERATIONS_DB.STORED_PROCS.PROVISION_NLP_API_CALLER_FUNCTION('<DATABASE_NAME>', '<SCHEMA_NAME>', '<AI_ML_API_ACCESS_TOKEN>');
    ```
     - **NOTE:** As you can see in the command above, you need to provide the following parameters:
       - `<DATABASE_NAME>`: The name of the database where you want to create the NLP API caller function.
       - `<SCHEMA_NAME>`: The name of the schema within the specified database where you want to create the NLP API caller function.
       - `<AI_ML_API_ACCESS_TOKEN>`: The access token obtained from the AI/ML team.
     - **NOTE 2:** It is possible to provision multiple NLP API caller functions in different databases and schemas within the same Snowflake account. Each function can be created with a different access token if needed, which allows for more granular usage tracking in big teams.
4. As the caller function is schema-scoped, the existing schema roles will enable users who have them granted to use the function. R and RW roles won't however be able to view the used access token or endpoint url, this can be viewed only with RWC role, which will be the owner of created function.
5. To call the NLP API, use the following command:
    ```sql
    SELECT <DATABASE_NAME>.<SCHEMA_NAME>.CALL_NLP_API('<API_ADDRESS>', <REQUEST_PAYLOAD>);
    ```
     - **NOTE:** As you can see in the command above, you need to provide the following parameters to the function:
       - `<API_ADDRESS>`: The full API endpoint address you want to call (must support `POST` method).
       - `<REQUEST_PAYLOAD>`: An OBJECT, which will be json-formatted and passed as the request payload.
    
> **NOTE:** Integration layer in the UseCase Snowflake accounts serves simply as a proxy layer between the account and AI/ML APIs. It does not validate or store any data, so request formats described by AI/ML team must be followed.

---

# Introduction to Snowflake data sharing

Snowflake data sharing features enables to share data securely across their business ecosystem be it Snowflake or Non-Snowflake accounts. With Snowflake secure data sharing live data is esaily accessisible without the need to copy the data. As of now, Snowflake allows to share below database object only-

* Tables
* External Tables
* Secure views
* Secure materialized views
* Secure UDF's


The Snowflake Account owners are required to follow guideline to be able to share or consume shared data.
Refer subsequent document to follow best practices.

---

# Snowflake data sharing as Provider

# Secure data sharing when both Provider and consumer Snowflake account is in same region
# Sharing Tables

Below topics describes steps to follow from Provider accounts

Login to Snowflake Account with UCADMIN role

1. Creating an empty share

    ```sql
    -- CREATE SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```

2. GRANT Usage privilege on database to share
    ```sql
    -- GRANT USAGE ON DATABASE DATABASE1 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
3. Grant Usage privilege on schema to share
    ```sql
    -- GRANT USGAE ON SCHEMA DATABASE1.SCH1 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
4. Grant select on each table to be shared.
    ```sql
    -- GRANT SELECT ON TABLE DATABASE1.SCH1.TABLE1 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
    Use below statement if all tables to be shared
    ```sql
    -- GRANT SELECT ON ALL TABLES DATABASE1.SCH1 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
5. Collect the account locator **from the consumer account**:
    ```sql
    -- SELECT CURRENT_ACCOUNT();
    ```

6. Add Consumer account_locator with whom you want to share
    ```sql
    -- ALTER SHARE SHARE_<BUSINESS_ECOSYSTME> ADD ACCOUNT=<ACCOUNT_LOCATOR>;

    ```
    Use below statement if to be share with multiple accounts
    ```sql
    -- ALTER SHARE SHARE_<BUSINESS_ECOSYSTME> ADD ACCOUNTS=<ACCOUNT_LOCATOR1>,<ACCOUNT_LOCATOR2>;

    ```
# Steps to follow from Consumer accounts-
As a consumer after following below step one should be able to access live and secure data 

Login to Snowflake account with UCADMINS role and create a database from share using the dedicated stored procedure:
```sql 
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SHARE_DATABASE(
    'DATABASE1', 
    '<ENV>', 
    'MERCKGROUP.<PROVIDER_ACCOUNT_NAME>.SHARE_<BUSINESS_ECOSYSTME>'
    );
```
# Sharing Secure Views
Sharing data from multiple databases can be done using Snowflake secure view feature.

# Provider Account
1. Assume below view to be shared.

    ```sql
    -- CREATE SECURE VIEW database3.sch.view3 AS
    SELECT view1.id AS View1Id, table2.id AS table2id, table3.id as table3id
    FROM database1.sch.view1 view1,
    database2.sch.table2 table2,
    database3.sch.table3 table3;

    ```

2. Perform all the steps as mentioned in sharing data in same region with additional grants to referenced databases as below

    ```sql
    -- GRANT REFERENCE_USAGE ON DATABASE database1 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
    ```sql
    -- GRANT REFERENCE_USAGE ON DATABASE database2 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```
    ```sql
    -- GRANT SELECT ON VIEW database3.sch.view3 TO SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```

# Consumer Account
To perform same steps mentioned as above.

# Quick SQL Commands 
* List all the shares available to a Account. Outbound Share is shared from Account to consumer and Inbound share is Share to Account from Provider.
    ```sql
    -- SHOW SHARES;

    ```

* To know the Account_locator
    ```sql
    -- SELECT CURRENT_ACCOUNT();

    ```

* Run below command to drop Share. Please note once dropped Share cannot be UNDROP and it need to be recreated using above command.
    ```sql
    -- DROP SHARE SHARE_<BUSINESS_ECOSYSTME>;

    ```

---

---- Steps to be followed by Accountadmin role only-----
# Secure data sharing when both Provider and consumer Snowflake account is in different region or on different cloud platform
# Sharing Tables

Scenario:
Assume provider account1 "AWS_EU_CENTRAL_1" wants to share data with consumer account2 "AZURE_WESTEUROPE"  
In this scenario since both Account1 and Account2 are residing in different region, data cannot be directly shared, and data needs to be replicated in Account2 region from Account1

# What is Database replication
Database replication is process of copying data from Snowflake source account to target account to improve the accessibility and availability.

# Steps to follow from Provider Account "AWS_EU_CENTRAL_1"
Login to Snowflake with ACCOUNTADMIN role
1. Check if replication is enabled at Account 
    ```sql
    -- Show Replication Account;

    ```
2. Alter Provider Account database1 as Primary database
    ```sql
    -- ALTER DATABASE DATABASE1 ENABLE REPLICATION TO ACCOUNTS AZURE_WESTEUROPE.<ACCOUNT2_LOCATOR>;

    ```

# Steps to follow from Consumer Account "AZURE_WESTEUROPE"

Login to Snowflake with ACCOUNTADMIN role
1. Create replica of primary database DATABASE1
    ```sql
    -- CREATE DATABASE DATABASE2 AS REPLICA OF AWS_EU_CENTRAL_1.<ACCOUN1_LOCATOR>.DATABASE1;

    ```

2. Create and schedule the task to refresh the secondary database with agreed frequency
    ```sql
    -- CREATE TASK TASK_REFRESH_DATABASE2
    WAREHOUSE = <WAREHOUSE_NAME>
    SCHEDULE = '5 MINUTE'
    AS
    ALTER DATABASE DATABASE2 REFRESH;

    ```
3. Create share on top of Secondary database. This step can be done by UCADMINS.
Follow the steps shared in "datasharing-same_region" document

# Key Pointers -
1. Replicating from higher Snowflake to lower Snowflake edition is not allowed 
2. By default replication is not enabled for all accounts, contact your "ORGADMIN"
 in case you get error "Replication is not allowed for the account"
3. In case data from multiple databases to be shared, all the databases need to be replicated in consumer region

# Quick Sql commands
1. Only ACCOUNTADMIN Role can execute below.
    ```sql
    -- SHOW REPLICATION ACCOUNT;

    ```
2. To enable the replication at account. Only Orgadmin can execute the command
    ```sql
    -- SELECT SYSTEM$GLOBAL_ACCOUNT_SET_PARAMETER(<organization.account_name>,'ENABLE_ACCOUNT_DATABASE_REPLICATION', 'true');

    ```

---

# Introduction to Snowflake data listings

A listing is an enhanced method of Secure Data Sharing and uses the same provider and consumer model.

As a provider, you can share a Snowflake Native App or data in your Snowflake account by creating and publishing a listing to specific Snowflake accounts or on the Snowflake Marketplace. To get started, see Use listings as a provider.

As a consumer, you can access a Snowflake Native App or data shared by other Snowflake accounts on the Snowflake Marketplace or privately with your account using a listing.

Listings can be accessed via Snowsight UI in Snowflake Marketplace:

![Listings in Snowflake Marketplace](assets/snowflake/data_listings/1_listings_in_marketplace.png)

Or in Data Sharing section:

![Listings in Data Sharing section](assets/snowflake/data_listings/2_listings_in_data_sharing.png)

Then you can extract listing id / global name from listing's url:

![Listings ID in the url](assets/snowflake/data_listings/3_listing_id_in_url.png)

Alternatively you can use SQL commands to interact with listings. For example, you can use the `SHOW AVAILABLE LISTINGS;` command to see the listings that are available to your account.

To find out more about listings, see [official Snowflake documentation](https://docs.snowflake.com/en/collaboration/collaboration-listings-about).

## Consuming listings from UseCase accounts

> **PREREQUISITE**: To use some system functions required for listings usage, the user must have a validated email address configured. If you don't have this configured yet,
> please use the following command to set it up:
> ```sql
> CALL OPERATIONS_DB.STORED_PROCS.SET_USER_EMAIL('<YOUR_EMAIL_ADDRESS>');
> ```
> This will result in your email being updated and a validation message being sent to provided address. Please follow the instructions in the email to complete the validation process.

> **IMPORTANT:** All the described steps must be executed with `UCADMIN` privileges.

1. Log in to your Snowflake account.
2. Locate the listing that you want to consume. You can find listings on the Snowflake Marketplace or through a direct link provided by the listing provider.
3. Note down listing's "global_name" (or "listing_id"), which should be a 10-character alphanumeric string (e.g. "GZSNZ7F5UH").
4. Use the following SQL command to request the listing:
   ```sql
   CALL SYSTEM$REQUEST_LISTING_AND_WAIT('<listing_global_name>');
   -- OR USE BELOW IF YOU WANT TO SPECIFY TIMEOUT
   CALL SYSTEM$REQUEST_LISTING_AND_WAIT('<listing_global_name>', <timeout_in_minutes>);
   ```
   - **NOTE:** Some listings may not require to be requested, which can be checked by running `SHOW AVAILABLE LISTINGS;` command and locating the desired one. If the listing is marked as `true` in the `is_ready_for_import` column - requesting is not necessary. It is however recommended, as it will execute very quickly.
   - **NOTE 2:** Requesting listings might take quite a long time to complete (up to several hours), as this requires the listing owner to approve your request, please be patient. If you don't wish to wait until the listing is available within the procedure call, simply put `0` as the timeout in minutes value in the aforementioned function call. In such case the function will succeed immidiately, and you'll receive an email once the listing is ready to be imported. In other case the function will wait until the listing is available or the timeout is reached.
   - **NOTE 3:** More details on the request function can be found in the [official Snowflake documentation](https://docs.snowflake.com/en/sql-reference/stored-procedures/system_request_listing_and_wait).
5. Once the listing is available, you need to accept the terms of use. You can do this by running the following SQL command:
   ```sql
   CALL SYSTEM$ACCEPT_LEGAL_TERMS('DATA_EXCHANGE_LISTING', '<listing_global_name>');
   ```
6. Finally, you can execute the following stored procedure to create a database from the listing:
   ```sql
   CALL OPERATIONS_DB.STORED_PROCS.CREATE_LISTING_DATABASE('<DOMAIN_NAME>', '<ENVIRONMENT>', '<LISTING_GLOBAL_NAME>');
   ```
   This command will create a new database in your Snowflake account that contains the data or application from the listing. Database will be owned by `UCADMIN` role and will be named in the following format: `<DOMAIN_NAME>_<ENVIRONMENT>_DB`. Along the database, an account role will be created with the name `<DOMAIN_NAME>_<ENVIRONMENT>_R` that has `USAGE` privilege on the database. You can grant this role to other users in your account to allow them to access the listing data.

---

# Merck Snowflake Account monitoring

To use dashboard you must have USECASEADMIN role enabled for you in "MONITORING_NREG_ALL" account.
By default, when new account is provisioned, access to "MONITORING_NREG_ALL" account is enabled with appropriate role.

## Why to use dashboard?
As an Admin it is extremely important to monitor the Snowflake account cost, best practices or if any performance bottle necks which needs attention.
For this we have created centralized dashboard screen, which will help you in monitoring your accounts and take actions. 

* [Duplicate Dashboard in your worksheet](https://docs.uptimize.merckgroup.com/snowflake/snowflake-monitoring/dashboard-access/)
* [Link to Cost Monitoring Dashboard document](https://docs.uptimize.merckgroup.com/snowflake/snowflake-monitoring/cost-monitoring-dashboard/)
* [Link to performance Monitoring Dashboard document](https://docs.uptimize.merckgroup.com/snowflake/snowflake-monitoring/performance-monitoring-dashboard/)
* [Link to User Adoption Dashboard document](https://docs.uptimize.merckgroup.com/snowflake/snowflake-monitoring/user-adoption-dashboard/)

---

## Dashboard Links 
  [Cost Monitoring dashboard](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/cost-monitoring-dDveMTY7a)
  [Performance Monitoring](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/performance-dashboard-dYBRKsF7U)
  [User Adoption](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/user-adoption-d3FDmGTUc)

1. By accessing the above Links. You will see below view.

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/Dashboard_access_page.png" alt="" width="350"/>


2. After clicking on the 'Duplicate and Run' button, it will create a new copy of the Dashboard and allow USER1 to run the Dashboard.
3. From top Account filter - select your Snowflake account and save the dashboard.

You are good to use dashboards.

---

## When to use cost-monitoring screen?
This dashboard provides the "higher management Persona" high level metrics on their respective account with date range filter.
This details for number of resources, credit consumption trend and storage usage.


 [Link to access Cost Monitoring Dashboard](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/cost-monitoring-dDveMTY7a)
 
<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/Cost_Monitoring.png" alt="MarineGEO circle logo" width="428"/>


*   Row 1 - Scorecards

|  Widget | Type  | Description  | Filter  |
|---|---|---|---|
|EUR_CONSUMED   | SCORECARD  |  Total billed amount in EUR | ACCOUNT/DATE RANGE  |
| ACCOUNTS  | SCORECARD  | No of account. Value will be 1  |   |
| WAREHOUSES  |  SCORECARD | Total No of warehouses in your account  | ACCOUNT/DATE RANGE  |
| DATA_VOL_TB  | SCORECARD  |  Total data volume in TB which is being charged | ACCOUNT  |
| COMPUTE_CREDITS  | SCORECARD  | Total compute credits billed  | ACCOUNT/DATE RANGE  |


* Row 2 - Bar Graphs

1. Top 10 Accounts by Spending

    This information is already available in top scorecards, spent value by Account.
2. Top 10 Accounts by Volume 

    This information is also available in top scorecards, data volume size in TB.
3. Monthly credits billed 

    * This bar chart is useful to see month on month credit usage trend for an account.
    * Assume if you see peak in credit usage for a month, you might want to dig down further to see sudden peak in behaviour and take the necessary action.

* Row 3 - Yearly Organization Usage by day

    This line chart is a trend line of credit usage for last year. Sudden jump in the trend is a point of concern and should be addressed with proper reasoning.

* Row 4 - Warehouse Usage Over time 

    This bar chart is further breakdown of credits by warehouse. From Row 3 chart you will get to know month and date on which credits were billed more.
    to further breakdown, this chart will help you see which warehouse was getting used more on the specific day.

* Row 5 - Budget vs Actual

    * All the account has some predefined budget allocated.
    * This bar graph helps identifying months which are overshooting the budget.

* Row 6 - Warehouses created over time by Account/Sector 

    * Both the charts will have same graph value for individual accounts.
    * These graphs are created for the purpose to have control in creating no of warehouses. 
    * As an Admin you must follow practice to limit the number of warehouses and should be created only when needed.
    * If you see in a month quite good no of warehouses are created, you might want to go and check if at all necessary.

* Row 7 - Yearly warehouses trend by Account/Sector

    * Both the charts will have same graph value for individual accounts.
    * This is different from above (Row 6) graphs the way warehouses are counted. In above we are checking created date of warehouse.
    * Let's say, in Jan 2 warehouses are created and on Feb 3. In this case in above you will see 2 for Jan month and 3 for Feb.
    * Whereas in this (Row 7), you will see 2 for Jan and 5 for Feb. Meaning it's a cumulative addition of warehouses.

---

## When to use performance-monitoring screen?
This dashboard screen is mainly useful for "Production User persona" who is interest to see performance glitch/sudden change in usage. Also it highlights warehouses where nest practices are not followed. Some visualizations can also help decide if warehouse needs to scaled up/scaled out

[Link to access Performance Monitoring Dashboard](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/performance-dashboard-dYBRKsF7U)

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/Performance_Dashboard.png" alt="MarineGEO circle logo" width="428"/>


* Row 1 - Bar charts

1. Slow running queries

    * This signifies top 5 queries which has taken more time to execute. Please not database is not refreshed in real time, its always business day - 1.
    * To see real time data you might want to consider querying SNOWFLAKE.ACCOUNT_USAGE.QUAERY_HISTORY table with date and query filters.
    * If you find out on daily basis same queries are appearing in the chart, please consider tuning query or increase the warehouse size for particular if that is the option.

2. Elapsed time by warehouses

    * Total time spent by all the warehouses in an Account.
    * Consider using best practices for warehouse sizing and utilization. If multiple use cases like BI and ETL team, both using same warehouse consider creating different warehouse for each use case as recommended by Snowflake.

* Row 2 - Warehouses Deviating from 7 day average

    * This line chart is comparison between daily credit usage by account vs average credit usage of last 7 days.
    * Look for the sudden peaks in the blue lines as below and if the deviation is too high. 
    * Check for graph queries in queue(as explained above) and try to see if those high performant costly queries are the ones contributing to more warehouse usage.
Also consider writing sql query on SNOWFLAKE.ACCOUNT_USAGE database for more details.

```
SELECT * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY where
    execution_status = 'SUCCESS' Order by     execution_time desc;
```
* Row 3 - Queries in queue and Warehousers Auto Suspend

1. Queries in queue 
    * Top 10 queries which has spent more time in queue than the query execution time.
    * If queries are appearing in the box and if query queue time is more than 1-2 minutes and if those queries are missing SLA and are very important for execution on time.
    * Please observe regular pattern of query queue time. Look if multi clustered warehouse is enabled.
    * If warehouse is created as expected, check for queries which are being executed on same time using query history table and take appropriate action like do nothing if its once a situation and not impacting SLA or create different warehouses for different use cases if multiple use case personas are using same warehouse.

```
SHOW WAREHOUSES; --- LOOK FOR MAX_CLUSTER_COUNT IS SET TO MORE THAN 1
```
    
2. Warehouse Auto suspend not set or set more than 10 minutes

    * When an USECASE admin creates warehouse with automated stored proc, warehouse auto suspend value is enabled to 600 sec.
    * Please refer for warehouse best practices
    (https://admin.docs.uptimize.merckgroup.com/snowflake/warehouse_considertaions/)

* Row 4 - Table cards

1. Auto Resume not enabled
    * When an USECASE admin creates warehouse with automated stored proc, warehouse auto resume is set to True.
    * Please refer for warehouse best practices
    (https://admin.docs.uptimize.merckgroup.com/snowflake/warehouse_considertaions/)

2. Query Acceleration is enabled

    * To meet concurrency, Snowflake recommends using multi cluster warehouses.
    * Query acceleration must be enabled with proper reasoning and understanding as it comes with cost.
    * Not all queries will be benefited from query acceleration, consider reading Snowflake documentation before applying query acceleration.
    (https://docs.snowflake.com/en/user-guide/query-acceleration-service)
    * To fulfil upscaling requirement, Snowflake has enable query acceleration feature which can be set by USECASE admin with below command.
```
ALTER WAREHOUSE <WAREHOUSE_NAME> SET
ENABLE_QUERY_ACCELERATION = true
QUERY_ACCELERATION_MAX_SCALE_FACTOR = 0;
```


* Row 5 - Warehouses Spillage

    * It lists the warehouses in which queries are getting spilled to local and remote storage.
    * Local Spillage -When Snowflake can not fit an operation into memory, it starts spilling (storing) data first to the local disk of a warehouse node, and then to remote storage.  
    * Remote Spillage - If the local disk is not sufficient to fit the spilled data, Snowflake further tries to write to the remote cloud storage 
    * Query spilling to local spillage will take longer time to execute than when a query fits into Snowflake memory and query spilling to remote storage will be much slower than query executing with local spillage. 
    * Queries spilled to Remote are cost heavy queries and consider taking below action for such queries.
    1. Increase the warehouse size 
    2. Tune the query 
    3. Using CTE operations to break the query

---

## When to use user-adoption dashboard screen?

This dashboard screen shows User activity over time and by Account filter. Using this screen user anomalies and some security threats can be identified.

[Link to access User Adoption Dashboard](https://app.snowflake.com/merckgroup/monitoring_nreg_all/#/user-adoption-d3FDmGTUc)

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/User_Adoption.png" alt="MarineGEO circle logo" width="428"/>

* Row 1 - Bar Graphs
    * Monthly Active users by Account /Monthly Active users by Sector
    * Both charts will have same value from USECASEADMIN point of you. It shows user login activity monthly. 

* Row 2- Scorecards 

1. Total active users

    * Users who are not deleted and even not disabled from the Account are listed here.
    
2. Idle users in last 90 days

    * Count of users who are not deleted and not disabled and who have not logged in last 3 months.
   *  As USECASEADMIN you might want to check if users are at all needed to be in the Account or can be deleted.

Query to find such users -
```
SELECT count(DISTINCT NAME) users,ACCOUNT_NAME FROM (
select au.name, au.last_success_login,AU.ACCOUNT_NAME
  from DB_MONITORING.SCH_ACCOUNT_USAGE.VW_USERS AU
  where (((deleted_on is null
    AND LAST_SUCCESS_LOGIN< 
         DATEADD('DAY',-90, SYSDATE()) )
   and NAME NOT LIKE 'SNOWFLAKE' )
    OR  (deleted_on is null and last_success_login is null AND NAME NOT LIKE 'SNOWFLAKE'
    AND CREATED_ON<DATEADD('DAY',-90, SYSDATE()))))A
    group by ACCOUNT_NAME;
```

3. Users With ACCOUNTADMIN role

    * Count of users who are having ACCOUNTADMIN ROLE.
    * As per Snowflake not more than 2-3 people should have ACCOUNTADMIN role enabled.
    * This screen is mainly for ORGADMIN who is going to monitor all Merck accounts.

* Row 3 - Idle users by Account /Users with USECASEADMIN role.

1. Idle users by Account

    * For USECASEADMIN this is going to be same value as shown in above scorecards.
    * This chart is useful for ORGADMINS monitoring all Merck accounts.

2. Users with USECASEADMIN role.

    * We recommend not more than 4-5 users having USECASEADMIN role per account.
    * USECASEADMIN role is a powerful custom role created to be used by Merck users. this role will have
    * Capability to create/modify databases/warehouses and much more.
    * This role to be granted to users only/if necessary.

* Row 4 - User Login Method

    * This bar chart is created to identify login methods and threats if users are not following MFA authentication or login to Snowflake using User-password method.
    * USECASEADMINS should be carefully monitor this chart and take the action in case of not recommended login methods.

* Row 5 - Users by Sector

    * This will have same value as scorecard for USECASEADMINS. This is designed for ORGADMINS.

---

## What is Snowflake Alerts?
Snowflake alerts are schema level objects which can be used to notify set of people or can be used to take an action when certain condition is met.
Alerts has below properties.
1. **A condition** that triggers the alert (e.g., task failure, resource usage exceeding threshold etc.)
2. **The action** to perform when the condition is met (e.g., send an email notification or capture the data in a table for further analysis or both)
3. When and how often **the condition** should be evaluated (e.g., every 30 minutes, every day at 7 p.m., etc.)

## How to use Snowflake Alerts?
Below create alert syntax is used to check if data load is completed for current date, if not then send email notification to recipients.

```sql
  CREATE OR REPLACE ALERT ALERT_LOAD_CHECK
  WAREHOUSE = my_WH --- change warehouse name
   SCHEDULE = 'USING CRON 10 10 * * * UTC'  --SCHEDULE TO RUN 10:00 AM DAILY
   IF( EXISTS(
    SELECT 1 FROM TABLE WHERE (SELECT TO_DATE(MAX(LDTS)) FROM TABLE<>current_date()))) ----- Condition to check if load is completed for today  
  THEN
     CALL SYSTEM$SEND_EMAIL(
    'email_load_check',----Notification Integration (see below this page for more details)
    'email_id@merckgroup.com',--- email address
    'Email Alert: Data is not loaded for date :' || current_date(),--- email subject
    'Alert : ALERT_LOAD_CHECK successfully triggered at '|| current_timestamp()---- email body
);
```
By default when an alert is created it is in Suspended state and needs to be resumed manually using below sql.

```sql
ALTER ALERT ALERT_LOAD_CHECK RESUME;
```
Use below query to check state of alerts which has been scheduled/executed in last one hour.

```sql
SELECT *
FROM
  TABLE(INFORMATION_SCHEMA.ALERT_HISTORY(
    SCHEDULED_TIME_RANGE_START
      =>dateadd('hour',-1,current_timestamp())))---- change the date filter as per need
ORDER BY SCHEDULED_TIME DESC;
```
Query to see all alerts in the schema.

```sql
SHOW ALERTS;
```

## What is Email notification in Snowflake?
* Snowflake has recently introduced feature to send email to users using Snowflake object "NOTIFICATION INTEGRATION".
* Notification Integration is a Snowflake object which provides interface between Snowflake and third partly services (like email).
* An single Snowflake account is limited to create 10 Snowflake accounts.
* Only UCADMIN has been given access to create notification integration via the triggering self-service (stored procedures)[https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures].

## Steps to send email notification to user 
1. Notification integration can be set for recipients who have verified email address with Snowflake. 
> Refer Snowflake documentation to see how to verify email address [Using Snowsight](https://docs.snowflake.com/en/user-guide/ui-snowsight-profile#label-snowsight-verify-email-address) [Using Classic web console](https://docs.snowflake.com/en/user-guide/ui-preferences#label-classic-verify-email-address) 

2. Create notification integration
We ship a stored procedure that helps you to create the integarion (Create Email Notification Integration)[https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-email-notification-integration]

```sql
USE ROLE UCADMIN;
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EMAIL_NOTIFICATION_INTEGRATION(
  'email_load_check'
);

ALTER NOTIFICATION INTEGRATION email_load_check
  SET ALLOWED_RECIPIENTS=('email_id1@merckgroup.com','email_id2@merckgroup.com');--- please note only verified email id's are allowed to mention in the list. If not, statement error will be displayed with this command
```
3. Grant the privilege to use Notification integration.
    Notification integration can be created by only USECASEADMINS, but ,can be granted usage on this integration object to other role using below sql.
```sql
GRANT USAGE ON INTEGRATION email_load_check TO ROLE <NEW_ROLE>;---Note this step is not required if only USECASEADMIN wants to use/trigger emails.
```
4. Sending an email notification

* After creating the email notification integration, one can call the SYSTEM$SEND_EMAIL stored procedure to send an email notification.
* This is system created stored procedure.
* To send email using notification integration "email_load_check" use below sql to send email to email_id@merckgroup.com if data load is not completed.

```sql
 CALL SYSTEM$SEND_EMAIL(
    'email_load_check',----Notification Integration (see below this page for more details)
    'email_id@merckgroup.com',--- email address
    'Email Alert: Data is not loaded for date :' || current_date(),--- email subject
    'Alert : ALERT_LOAD_CHECK successfully triggered at '|| current_timestamp()---- email body
```

As of today (i.e 8th Aug 2023) "SystemSendEmail" expects literal values in the email address. To customize the SYSTEM$SEND_EMAIL to send alert to email id's based on distribution list.
We have created a sample code, which can be referred by USECASEADMINS to do the customization.

(Please refer to the [Customized code to send email alert](https://docs.uptimize.merckgroup.com/snowflake/alerts-notification/alert_notification_code/) for more details.):

(Please refer to the [Send email alert for long running queries](https://docs.uptimize.merckgroup.com/snowflake/alerts-notification/alert_for_long_running_queries/) for more details.):

---

## Customized code to send email based on Topic wise distribution list 

* Use below created custom stored procedure "SEND_EMAIL_TO_DISTRIBUTION_LIST" to send email notification instead of using Snowflake system created stored procedure "SYSTEM$SEND_EMAIL".
* Please note below created code is just a use case how customization can be achieved with respect to sending email.
* You may want to tweak the code as per your business need and below code can be used as reference.

```sql
---AUDIT EMAIL NOTIFICATION TABLE---
Create or replace table AUDIT_NOTIFICATION_EMAIL(TOPIC varchar,EMAIL varchar);

--ENTER SOME DUMMY ENTRIES FOR TESTING---
insert into AUDIT_NOTIFICATION_EMAIL values ('TOPIC 1','email_id1@merckgroup.com');
insert into AUDIT_NOTIFICATION_EMAIL values ('TOPIC 2','email_id2@merckgroup.com');

--- TABLE TO STORE IF EMAIL ID'S ARE VALIDATED IN SNOWFLAKE ACCOUNT---
Create or replace table AUDIT.EMAIL_VALIDATED(EMAIL varchar);

---STORED PROC TO CREATE NOTIFICATION INTEGRATION---
CREATE OR REPLACE PROCEDURE CREATE_NOTIFICATION_INTEGRATION() RETURNS VARCHAR
execute as caller
as
Declare
    NOTIFICATION_NAME STRING;
    output string;
    res RESULTSET DEFAULT (select distinct email from AUDIT.AUDIT_NOTIFICATION_EMAIL);
    c1 CURSOR FOR res;
    recipient_list string default '';
    e varchar;
begin
    recipient_list := '';
    output := '';
    NOTIFICATION_NAME := (SELECT CURRENT_DATABASE() ||'_EMAIL_INT');
    
    for recipient in c1
    do
        begin
           e := recipient.email;
           -- this block checks if email id's are validated , if not will throw exception email is not validated
           if (not (exists(select * from AUDIT.EMAIL_VALIDATED where email = :e))) then 
				execute immediate 'create or replace NOTIFICATION INTEGRATION TEST_' 
                       || NOTIFICATION_NAME 
                       || ' TYPE=EMAIL ENABLED=TRUE ALLOWED_RECIPIENTS=(''' || e ||''');';
				execute immediate 'drop NOTIFICATION INTEGRATION TEST_' || NOTIFICATION_NAME ;
    
				INSERT INTO AUDIT.EMAIL_VALIDATED(email) values (:e); 
           end if;
           if (length(recipient_list) > 0) then
              recipient_list := recipient_list ||',';
           end if;
           recipient_list := recipient_list || '''' || e ||'''';
           
         exception
            when other then
                output := output ||' ' || recipient.email || ' is NOT valid;';
         end;
    end for;
    -- list of recipients is known
    -- first try to alter the notification, if it exists
    begin
        execute immediate 'ALTER NOTIFICATION INTEGRATION ' 
                   || NOTIFICATION_NAME 
                   || ' ALLOWED_RECIPIENTS=(' || recipient_list ||');';    
    exception
       when other then
           -- doesn't exist, create it
           execute immediate 'create or replace NOTIFICATION INTEGRATION ' 
                   || NOTIFICATION_NAME 
                   || ' TYPE=EMAIL ENABLED=TRUE ALLOWED_RECIPIENTS=(' || recipient_list ||');';
    end;
       
    return "SUCCESS";
end;       


---TO CALL ABOVE STORED PROC---
call CREATE_NOTIFICATION_INTEGRATION();

--TO CHECK WHAT ALL EMAIL ID'S ARE VALIDATED IN THE SYSTEM---
select * from ALERT_FEATURE.EMAIL_VALIDATED;


---STORED PROCEDURE TO SEND EMAIL AS PER TOPIC---
CREATE OR REPLACE PROCEDURE SEND_EMAIL_TO_DISTRIBUTION_LIST(TOPIC STRING, TITLE STRING, BODY STRING) RETURNS STRING
execute as caller
as
Declare
    NOTIFICATION_NAME STRING;
    res RESULTSET DEFAULT (select distinct e.email 
                             from AUDIT.AUDIT_NOTIFICATION_EMAIL e 
                             join AUDIT.EMAIL_VALIDATED v on v.email = e.email
                            where TOPIC = :TOPIC );
    c1 CURSOR FOR res;
    recipient_list string default '';
begin
    recipient_list := '';
    NOTIFICATION_NAME := (SELECT CURRENT_DATABASE() ||'_EMAIL_INT');

    for recipient in c1
    do
        if (length(recipient_list) > 0) then
           recipient_list := recipient_list ||', ';
        end if;
        recipient_list := recipient_list  || recipient.email;
    end for;
-- CALL SNOWFLAKE SYSTEM STORED PROC TO SEND EMAIL ----
    begin
        execute immediate 'CALL SYSTEM$SEND_EMAIL('''
                  || NOTIFICATION_NAME ||''','''
                  || RECIPIENT_LIST || ''','''
                  || replace(TITLE,'''','''''') || ''','''
                  || replace(BODY,'''','''''') || ''');';
    end;
       
    return recipient_list;
    end;       

----CALLING PROCEDURE TO SEND EMAIL----
Call SEND_EMAIL_TO_DISTRIBUTION_LIST('TOPIC 1','TEST EMAIL TO TOPIC 1','and email is successfully sent');
```

---

## Code to trigger alert for queries which are running longer than 10 minutes

* Use below code to send email alert for queries which are running longer than 10 minutes. 
* You may want to tweak the code as per your business need and below code can be used as reference.

```sql
--CREATE NOTIFICATION INTEGRATION TO SEND EMAIL FOR SLOW RUNNING QUERIES----
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EMAIL_NOTIFICATION_INTEGRATION(
  'email_slow_running_query_id'
);

--ALTER EMAIL NOTIFICATION INTEGRATION TO SET THE ALLOWED_RECIPIENTS----
ALTER NOTIFICATION INTEGRATION email_slow_running_query_id
  SET ALLOWED_RECIPIENTS=('email_address@merckgroup.com');

----CREATE AUDIT TABLE TO CAPTURE QUERY ID'S WHICH ARE TAKING LONGER TIME TO EXECUTE----
CREATE TABLE  AUDIT_SLOW_RUNNING_QUERY_ID
(QUERY_ID VARCHAR,
EXECUTION_TIME NUMBER,
LDTS TIMESTAMP_NTZ);

----ALERT TO CAPTURE QUERY_ID'S INTO AUDIT TABLE  
CREATE OR REPLACE ALERT ALERT_SLOW_RUNNING_QUERIES
WAREHOUSE = <warehouse_name> ---change the warehouse name
SCHEDULE = '10 MINUTE' ----schedule can be changed as per business need
 IF( EXISTS(
	SELECT
		query_id,(execution_time / 1000) as exec_time_in_seconds 
	FROM
		table(information_schema.query_history(dateadd('MINUTES',-10,current_timestamp()),current_timestamp()))---- checking query history for lats 10 minuts
	WHERE EXECUTION_STATUS IN ('RUNNING')))---- queries which are still executing
THEN
    INSERT INTO AUDIT_SLOW_RUNNING_QUERY_ID 
    SELECT
    query_id, (execution_time / 1000) as exec_time_in_seconds,CURRENT_TIMESTAMP
	FROM
    table(information_schema.query_history(dateadd('MINUTES',-10,current_timestamp()),current_timestamp()))
	WHERE EXECUTION_STATUS IN ('RUNNING') ;
	
---RESUME ALERT ----
ALTER ALERT ALERT_SLOW_RUNNING_QUERIES RESUME;

---ALERT TO SEND EMAIL IF AUDIT TABLE HAS ENTRIES--
CREATE OR REPLACE ALERT ALERT_SEND_EMAIL
WAREHOUSE = <warehouse_name> ---change the warehouse name
SCHEDULE = '11 MINUTE'
IF( EXISTS(
  SELECT QUERY_ID FROM AUDIT_SLOW_RUNNING_QUERY_ID WHERE LDTS >=DATEADD('MINUTES',-15,CURRENT_TIMESTAMP()) ))
THEN
     CALL SYSTEM$SEND_EMAIL(
    'email_slow_running_query_id',
    'email_address@.merckgroup.com',
    'Email Alert: Slow Running Queries :' || current_timestamp(),
    'Alert : Queries are running for more than 10 minutes now, please check the Audit table AUDIT_SLOW_RUNNING_QUERY_ID for query_id at timestamp - '|| current_timestamp()
); 
---RESUME ALERT---
ALTER ALERT ALERT_SEND_EMAIL RESUME;

```
### Screenshot for email generated when above alert is triggered.

<img src="https://docs.uptimize.merckgroup.com/docs-assets/snowflake/Email Alert Snap.png" alt="" width="950"/>

---

# Snowflake Release Management

## How to request a release opt-in for GxP use-cases:
1. Open your Snowflake's account extension object on Foundry.
2. Scroll down a bit and select the needed account, usually you would start with the nreg one.
3. Scroll down and select the available version and click on Request Selected Version.
4. A request would be sent to our team and we will create a CR (in case of QA/Prod) and will keep you informed

You can refer to the below exmaple screenshot:
![Account Update Process](https://docs.uptimize.merckgroup.com/assets/snowflake/request-version-update.png)

---

# Snowflake Platform Bundle Release Notes

This page contains the release notes for the Snowflake Platform Bundle. The release notes are organized by version, 
with each version containing details about new features, bug fixes, and any breaking changes.

---

# Version 1.0.0 (July 01, 2025)

We are excited to announce the initial release of the UPTIMIZE Snowflake, version v1.0.0. This release marks 
the beginning of a new era in streamlined account management and enhanced data capabilities within 
the Snowflake ecosystem.

## Introduction
The UPTIMIZE Snowflake is designed to simplify and optimize the management of your Snowflake accounts. With a focus 
on user-friendly interfaces and robust functionality, this bundle aims to enhance your data management experience and 
drive efficiency across your organization.

## Installation Instructions
To get started with the UPTIMIZE Snowflake, please follow these installation steps:

For GxP & critical use cases:
    Request the version

For standard & early-adopter use cases:
    New version will be automatically rolled out to early-adpoter environments. 
    All standard environments will be upgraded once the version is in General Availability.

## Contact Information
For support or to report any issues, please contact our support team at 
[3de104bc.merckgroup.onmicrosoft.com@emea.teams.ms](mailto:3de104bc.merckgroup.onmicrosoft.com@emea.teams.ms). 

You can also report a ticket through the IT4U portal at [IT4U Portal](https://mhub.service-now.com/).

## Acknowledgments
We would like to extend our gratitude to our dedicated team and partners who have contributed to the development of 
the UPTIMIZE Snowflake. Your hard work and collaboration have been invaluable in bringing this product to life.


Thank you for choosing the UPTIMIZE Snowflake. We look forward to supporting your data management needs and helping 
you achieve your business goals.

---

# Version 1.0.1 (July 15, 2025)

New patch version 1.0.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
No bug fixes in this release.

## Non-user-facing changes
* Corrected branch validation in the ado pipeline template (creating account and deploying other resources from `main` won't be possible from this point on, only from `release/*` branches).

---

# Version 1.1.0 (July 22, 2025)

New minor version 1.1.0 of the code release is now available in Preview. 

Previous version 1.0.1 as of July 22, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: add tableau GxP OAuth integration (This PR adds support for Tableau GxP OAuth integration in Snowflake accounts. It includes client ID/secret provisioning and environment-specific redirect URI mapping for:  - `TABLEAU_GXP_DEV_CUSTOM_OAUTH` - `TABLEAU_GXP_QA_CUSTOM_OAUTH` - `TABLEAU_GXP_PROD_CUSTOM_OAUTH`  The integration secrets are appended to existing AWS Secrets Manager entries.  Related work items: #53471, #53472). (Resolved task 1)[#53471] (Resolved task 2)[#53472]
* New Feature: add AWS ap-northeast-1 (Tokyo) to the list of allowed Snowflake account creation regions (added AWS ap-northeast-1 (Tokyo) to the list of allowed Snowflake account creation regions as requested by Michal Gaida to handle Mediacom use-case that needs the data to hosted locally in Japan.). (Resolved task 1)[#47535]
* New Feature: create and assign SUPPORT_CASES_MANAGER role to manage Snowflake support cases (Created a new SUPPORT_CASES_MANAGER role with privileges to manage Snowflake support cases and assigned it to the UCADMIN role with ownership.). (Resolved task 1)[#52027]
* New Feature: added the new adjust_timezone stored procedure and updated related scripts (**feat**: added the new adjust_timezone stored procedure and updated related scripts) [Resolved task](https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/43875)).
* New Feature: add writeback OAuth integration and update secret management
* New Feature: increase the schema name length limit in the create schema stored procedure.
* New Feature: add TYPE property to TECHNICALUSER and other platform out-of-the-box users like ZEENEA's (Update the user creation process by setting the `TYPE` to `SERVICE` for both technical and platform service users.).
* New Feature: update user creation sql script with user type (This PR introduces a feature, when a user is created in Snowflake, it will be assigned a type based on the authentication method: if a password is used, the user will be categorized as a legacy service; if a key pair is used, it will be categorized as a service.).

## Bug Fixes
* Bug Fix: Grant manage share target privilege to UCADMIN role. (Grant manage share target to ucadmin role, this fixes the issue of adding/removing of accounts to an existing share owned by ucadmin. there was a BCR that introduced this change https://docs.snowflake.com/en/release-notes/bcr-bundles/2024_07/bcr-1734). (Resolved task 1)[#52890]
* Bug Fix: remove setting password while updating keypair
* Bug Fix: remove deprecated Snowflake database roles from default_roles.sql

---

# Version 1.1.1 (July 28, 2025)

New patch version 1.1.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: pass the redirect URIs variables for Tableau GxP environments (Passed the redirect GxP environment URIs to the Tableau integration bootstrapping step.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/47535]
* Bug Fix: Fixed source branch restriction for release/* branches PRs (Fixed source branch restriction for release/* branches PRs  Cherry-picked from commit `4c604c24`.). (Resolved task 1)[n/a]

---

# Version 1.1.2 (July 28, 2025)

New patch version 1.1.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: add release branches in the check-branch template (fix: add release branches in the check-branch template). (Resolved task 1)[n/a]

---

# Version 1.1.3 (July 28, 2025)

New patch version 1.1.3 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
No bug fixes in this release.

---

# Version 1.1.4 (July 28, 2025)

New patch version 1.1.4 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: user provisioning sql missing semi-colon (fix: user provisioning sql missing semi-colon). (Resolved task 1)[n/a]

---

# Version 1.1.5 (July 29, 2025)

New patch version 1.1.5 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Fixed update_org_info.sql syntax and release notes reviewers (Fixed update_org_info.sql syntax and release notes reviewers, which came up during first deployment of an actual account according to the new release process.). (Resolved task 1)[n/a]

---

# Version 1.1.6 (July 30, 2025)

New patch version 1.1.6 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
No bug fixes in this release.

---

# Version 1.1.7 (July 31, 2025)

New patch version 1.1.7 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
- Fixed an issue where the GxP Dev account names were not being generated correctly in the Snowflake account creation pipeline.

---

# Version 1.10.1 (January 28, 2026)

New patch version 1.10.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: update max retention to 90 for the release process (Update max retention to 90 for the release process). (Resolved task 1)[n/a]

---

# Version 1.10.2 (January 28, 2026)

New patch version 1.10.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: use connection type's authentication method (Use connection type's authentication method). (Resolved task 1)[n/a]

---

# Version 1.10.0 (January 28, 2026)

New minor version 1.10.0 of the code release is now available in Preview. 

Previous version 1.9.1 as of January 28, 2026 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: workload identity federation implementation for Snowflake codebase (Implementing Workload Identity Federation (WIF) for Snowflake authentication, enabling secure, credential-less authentication using AWS IAM roles instead of keypair credentials. The implementation adds WIF automation users to both new and existing Snowflake accounts, with intelligent fallback logic to use technical users when WIF users don't exist yet, supporting a gradual migration from keypair to WIF authentication across all environments.  Related work items: #66003). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/65384]
* New Feature: increase max allowed database retention for create_database (Increase the allowed max retention period for create_database stored procedure that is used for [time travel](https://docs.snowflake.com/en/user-guide/data-time-travel)). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/64312]
* New Feature: adding create warehouse integration test (Adding create warehouse integration test  Related work items: #66563). (Resolved task 1)[N/A]

## Bug Fixes
* Bug Fix: update wif configuration (update cam wif configuration  Related work items: #73386). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/73386/]
* Bug Fix: adjust default value for MaxRetention (Adjust default value for MaxRetention). (Resolved task 1)[n/a]

---

# Version 1.11.1 (February 27, 2026)

New patch version 1.11.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: quote each allowed location individually in storage integration procedure (Quote each allowed location individually in storage integration while running the create_storage_integration procedure. STORAGE_ALLOWED_LOCATIONS was wrapping the entire comma-separated string in a single pair of quotes instead of quoting each location separately.). (Resolved task 1)[n/a]

---

# Version 1.11.0 (February 24, 2026)

New minor version 1.11.0 of the code release is now available in Preview. 

Previous version 1.10.2 as of February 24, 2026 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: snowflake entitlement integration (Implemented EMSS naming convention for Snowflake roles to align with enterprise standards, introducing new roles with the _EMSS suffix (format: SNOWFLAKE_{ACCOUNT}_{ROLE}_EMSS) while maintaining backward compatibility with existing roles for a smooth migration path.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/75026/]
* New Feature: migrate Datahub integration to new CDK architecture (This PR implements the migration from the legacy Datahub CloudFormation stacks to the new CDK-based architecture with nested stacks.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/69307/]
* New Feature: cam engine revoke sprocs (Three revoke stored procedures were added to handle deprovisioning of Snowflake sharing. cam_revoke_account_from_listing(VARCHAR, VARCHAR) removes a consumer account from a listing. cam_revoke_consumer_resources(VARCHAR, VARCHAR) deletes the consumer-side objects and grants created during provisioning. cam_revoke_same_account_sharing(VARCHAR, VARCHAR) removes direct grants used in same-account sharing.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/74030]

## Bug Fixes
* Bug Fix: preserve notification service role trust relationships on deploy (preserve notification service role trust relationships on deploy). (Resolved task 1)[n/a]
* Bug Fix: cam engine tests fix (Resolved task 1)[n/a]
* Bug Fix: Added failback for technical user in account_manager.py (Added failback for technical user in account_manager.py as this is being referenced by the dbt_integration pipeline for creation of qa & prod users). (Resolved task 1)[N/A]
* Bug Fix: fixing create share database sp (Fixing create share database sp issue through adding empty name condition to prevent empty domain names creation and adding special character condition to restrict domain names to alphanumeric, hyphens, and underscores only.  Related work items: #69353). (Resolved task 1)[N/A]
* Bug Fix: ensure deterministic SSM parameter ordering (Ensure deterministic SSM parameter ordering). (Resolved task 1)[n/a]
* Bug Fix: add missing value for MaxRetention parameter (Add missing value for MaxRetention parameter). (Resolved task 1)[n/a]

---

# Version 1.2.0 (September 01, 2025)

New minor version 1.2.0 of the code release is now available in Preview. 

Previous version 1.1.7 as of September 01, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: introducing event table for the muser procedures/tasks (Introducing event table for the muser procedures/tasks). (Resolved task 1)[n/a]
* New Feature: introducing create_email_notification_integration stored procedure (Introducing create_email_notification_integration stored procedure). (Resolved task 1)[n/a]
* New Feature: grant the needed privileges to create, use, and own dynamic, external, and event tables while creating a new schema (Grant the needed privileges to create, use, and own dynamic, external, and event tables while creating a new schema). (Resolved task 1)[n/a]
* New Feature: enable external_oauth_any_role_mode in the security integration (Enabling external_oauth_any_role_mode for the PowerBI security integration). (Resolved task 1)[n/a]
* New Feature: automating the datahub access management process (Fully automated manual/automated datahub data ingestion access management). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/51291]
* New Feature: added NETWORK_RULES schema to OPERATIONS_DB. (Resolved task 1)[n/a]

## Bug Fixes
* Bug Fix: added error handling for commit parsing in release notes generator (added error handling for commit parsing in release notes generator). (Resolved task 1)[n/a]

---

# Version 1.3.1 (October 01, 2025)

New patch version 1.3.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Skip NLP API integration on the accounts that is not hosted on eu-central-1 (Skip NLP API integration on the accounts that is not hosted on eu-central-1). (Resolved task 1)[n/a]

---

# Version 1.3.2 (October 01, 2025)

New patch version 1.3.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
No bug fixes in this release.

---

# Version 1.3.0 (September 30, 2025)

New minor version 1.3.0 of the code release is now available in Preview. 

Previous version 1.2.0 as of September 30, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Emitting stored procedures logs via the python logging module into a dedicated event table in operations_db.logs (Enabled logging for UC Admins via the Snowflake Event Table to view logs generated by UPTIMIZE stored procedures.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57200/]
* New Feature: Implemented integration tests framework (Implemented initial integration tests framework.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/61959]
* New Feature: Implemented account level NLP API integration (Implemented account level NLP API integration.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/61388]
* New Feature: Introducing data quality privileges to UCADMIN and _RWC roles (Introducing data quality privileges to UCADMIN and _RWC roles). (Resolved task 1)[n/a]
* New Feature: Create STORED_PROCEDURES_EXECUTOR role (Created a new role `STORED_PROCEDURES_EXECUTOR`, granted usage permissions for all stored procedures in `OPERATIONS_DB.STORED_PROCS`, and assigned this role to `UCADMIN`.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57197/]
* New Feature: Harbor integration resources, infra, stored procedures, etc.. (Introducing Harbor resources that will be deployed on all the accounts like user, role, stored procedures, etc..). (Resolved task 1)[n/a]
* New Feature: Implement SHARE_MANAGER role to create/manage shares (Create a new role `SHARE_MANAGER` to handle creating and managing Snowflake shares across the account.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57196/]

## Bug Fixes
* Bug Fix: Corrected infra approvers variable reference (Corrected infra approvers variable reference). (Resolved task 1)[n/a]
* Bug Fix: Migrate SYSTEM$GET_SNOWFLAKE_PLATFORM_INFO call from procedure to scheduled task (Calling a system function inside a stored procedure is disabled. This fix will create a new schema, table, and task within the operations_db to store system information that can be accessed from the stored procedure.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/61291]
* Bug Fix: Grant usage on network_rules schema to ucadmin role (grant usage on network_rules schema to ucadmin role). (Resolved task 1)[n/a]
* Bug Fix: Disable Snowflake AI features (disable Snowflake AI features). (Resolved task 1)[n/a]
* Bug Fix: Fix issue in email validation (fix issue in email validation in account deletion). (Resolved task 1)[n/a]
* Bug Fix: Updating email validation to be in the begining of the pipeline (updating email validation to be in the begining of the pipeline). (Resolved task 1)[n/a]
* Bug Fix: Updated caching mechanism (updated caching mechanism). (Resolved task 1)[n/a]
* Bug Fix: Add missing semicolon (update missing semicolon). (Resolved task 1)[NA]
* Bug Fix: Cleaned up remaining references to snowflake-automation directory (cleaned up remaining references to snowflake-automation directory). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/56607]
* Bug Fix: Renamed snowflake-automation directory to snowflake_automation to enable proper handling by mypy (renamed snowflake-automation directory to snowflake_automation to enable proper handling by mypy.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/56607]

---

# Version 1.3.3 (October 09, 2025)

New patch version 1.3.3 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: update typo in database creation stored proc (Cherry-picked from commit `9ed3db9d`.). (Resolved task 1)[n/a]

---

# Version 1.4.1 (October 21, 2025)

New patch version 1.4.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: update the missing comma (fix the missing comma). (Resolved task 1)[NA]

---

# Version 1.4.2 (October 22, 2025)

New patch version 1.4.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Exclude predefined list of accounts from cortex access revoke step (Exclude predefined list of accounts from cortex access revoke step  Cherry picked from !39237  Cherry-picked from commit `fe4bdd09`.). (Resolved task 1)[N/A]

---

# Version 1.4.3 (November 06, 2025)

New patch version 1.4.3 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: update harbor queries to accept special characters (Using quoted identifiers to fix an issue where table names with special characters (like /, -, or spaces) caused errors in the Harbor procedures.). (Resolved task 1)[NA]

---

# Version 1.4.0 (October 21, 2025)

New minor version 1.4.0 of the code release is now available in Preview. 

Previous version 1.3.3 as of October 21, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Creating SET_USER_EMAIL Stored Procedure that sets an email for the user and trigers email validation (This enables users to update their email address and trigger a verification process for that email  Related work items: #57162). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57162]
* New Feature: grant managed roles procedure to assign managed roles (Created a stored procedure `GRANT_MANAGED_ROLE` to allow `UCADMIN` to assign a predefined list of roles to users or roles, even without direct ownership. This ensures tighter control over role assignment while delegating administrative capabilities.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57197/]
* New Feature: Implemented procedure for creating dbs from listings (Implemented procedure for creating dbs from listings). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/57163]

## Bug Fixes
* Bug Fix: remove tag from create reader user (Remove the tag from create reader user for the MUSER creation as it's not yet a deployed feature on all accounts and would break the MUSER creation flow.). (Resolved task 1)[NA]

---

# Version 1.4.4 (November 09, 2025)

New patch version 1.4.4 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Add hcadatahub_nreg_all and emserono_nreg_all to Cortex feat flag exception list (Add hcadatahub_nreg_all and emserono_nreg_all to Cortex feat flag exception list). (Resolved task 1)[N/A]

---

# Version 1.5.1 (November 06, 2025)

New patch version 1.5.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: update harbor queries to accept special characters (Using quoted identifiers to fix an issue where table names with special characters (like /, -, or spaces) caused errors in the Harbor procedures.). (Resolved task 1)[NA]

---

# Version 1.5.2 (November 09, 2025)

New patch version 1.5.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Add hcadatahub_nreg_all to Cortex feat flag exception list (Add hcadatahub_nreg_all to Cortex feat flag exception list  Cherry-picked from commit `f156c278`.). (Resolved task 1)[N/A]

---

# Version 1.5.0 (October 28, 2025)

New minor version 1.5.0 of the code release is now available in Preview. 

Previous version 1.4.2 as of October 28, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Enabled internal stages private link config (Enabled internal stages private link config.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/64677]
* New Feature: enable performance explorer in snowflake (enable performance-explorer-in-snowflake). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/65235/]

## Bug Fixes
* Bug Fix: Update the create resource monitor stored procedure (Fixed the resource monitor creation procedure to correctly check if a specific warehouse already has a resource monitor assigned. The procedure now uses SHOW WAREHOUSES LIKE '<warehouse_name>' and raises an exception only if the target warehouse has a resource monitor, preventing false errors when other warehouses have monitors.). (Resolved task 1)[NA]

---

# Version 1.6.0 (November 17, 2025)

New minor version 1.6.0 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: added WIF authentication (Added WIF authentication configuration for managed users.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/65994]
* New Feature: Create CLONE_DATABASE and RENAME_DATABASED procedures (This PR adds functionality to be able to use Clone_database stored procedure and Rename_database stored procedure.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/64528]

## Bug Fixes
No bug fixes in this release.

## Miscellaneous
* New Feature: grant rdbtwosnow_nreg_all write access to uc-rdbup/ontology path in dev and prod DataHub buckets (Granting rdbtwosnow_nreg_all Snowflake account write access to uc-rdbup/ontology paths in both dev and prod DataHub buckets for RDB enterprise data integration.). (Resolved task 1)[n/a]
* New Feature: Adding ability for gxp account to use dev,tst environment. (Resolved task 1) [https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_sprints/taskboard/Frosties/Uptimize%20Agile%20Release%20Train/PI25.4/PI25.4%20-%20Iteration%201?System.AssignedTo=M334707%40one.merckgroup.com&workitem=67028]

---

# Version 1.7.1 (November 25, 2025)

New patch version 1.7.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: create_harbor_share overload fix (Added drop of the correct existing create_harbor_share sproc to avoid ambiguous overload error.). (Resolved task 1)[N/A]

---

# Version 1.7.0 (November 25, 2025)

New minor version 1.7.0 of the code release is now available in Preview. 

Previous version 1.6.0 as of November 25, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Added listings functionality to Harbor data sharing (Added listings functionality to Harbor data sharing, along with global data sharing enablement for all accounts.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66728]

## Bug Fixes
* Bug Fix: updating error handling (Updating error hanlding in stage accounts pipeline). (Resolved task 1)[N/A]

---

# Version 1.8.1 (December 03, 2025)

New patch version 1.8.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: Set exit_script with False to continue the remaining steps of account creation stage (Setting exit_script with False to continue the remaining steps of account creation stage  Cherry picked from !42709  Cherry-picked from commit `7384c67b`.). (Resolved task 1)[n/a]

---

# Version 1.8.2 (December 17, 2025)

New patch version 1.8.2 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
No bug fixes in this release.

---

# Version 1.8.0 (December 01, 2025)

New minor version 1.8.0 of the code release is now available in Preview. 

Previous version 1.7.1 as of December 01, 2025 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Added dedicated Foundry service user (Added Foundry service user creation with required grants.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/65997]
* New Feature: Added FNDR user prefix to the secret access policy for the Foundry IAM role (Added FNDR user prefix to the secret access policy for the Foundry IAM role). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/65998]
* New Feature: add comprehensive test suite for create_foundry_schema stored procedure (Added comprehensive integration test cases for the `create_foundry_schema` stored procedure, covering success paths, validation logic, and error handling scenarios.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66553/]
* New Feature: add comprehensive test suite for create_foundry_database stored procedure (Added comprehensive integration test cases for the `create_foundry_database` stored procedure, covering success paths, validation logic, and error handling scenarios.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66552/]

## Bug Fixes
No bug fixes in this release.

---

# Version 1.9.1 (January 14, 2026)

New patch version 1.9.1 of the code release is now available in Preview. 

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
No new features in this release.

## Bug Fixes
* Bug Fix: cam engine allow creation on all accounts except gxp (cam engine allow creation on all accounts except gxp). (Resolved task 1)[n/a]

---

# Version 1.9.0 (January 13, 2026)

New minor version 1.9.0 of the code release is now available in Preview. 

Previous version 1.8.2 as of January 13, 2026 is in General Availability.

Version details listed below.

## Upgrade Steps
For GxP use cases:
    Communication will be sent to align on the next steps to upgrade.

For non-GxP use cases:
    New version has been automatically rolled out to early-adpoter environments. 
    All other environments will be upgraded once the version is in General Availability.

## Breaking Changes
No breaking changes in this release.

## New Features
* New Feature: Introducing full Snowflake support for **CAM Engine** by adding a new **WIF-based Snowflake user**, along with the required configuration, stored procedures, and CI/CD pipeline updates to automate provisioning and deployment. (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/71913]
* New Feature: adjust stored procedure for enhanced permission management (Enhanced the clone_database stored procedure with flexible naming conventions, cross-domain permission management, comprehensive validation, and improved code quality. Added the get_role_permissions helper stored procedure for centralized role permission management.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/70666/]
* New Feature: add alert-related privileges to schema role in create_schema procedure (Granting the needed privileges to schema roles to create, monitor, operate alerts in schemas and execute it on account level (serverless alerts are allowed as well) while creating new schemas.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/71273]
* New Feature: refactor Foundryiam pipeline to allow deployments to GxP environments (Refactor Foundryiam pipeline to allow deployments to GxP environments). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/48372]
* New Feature: Enabling OIDC connection from Foundry (Enabling OIDC authorization from Foundry for SF TECHNICALUSER secret fetching.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/64674]
* New Feature: Add integration tests for CREATE_EXTERNAL_VOLUME_INTEGRATION stored procedure (Add comprehensive integration tests for CREATE_EXTERNAL_VOLUME_INTEGRATION stored procedure.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66551/]
* New Feature: Add integration tests for ENABLE_UNREDACTED_QUERIES_FOR_USER stored procedure (Add comprehensive integration tests for ENABLE_UNREDACTED_QUERIES_FOR_USER stored procedure.). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66566/]
* New Feature: Add integration tests for CREATE_STORAGE_INTEGRATION stored procedure (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66562/]
* New Feature: Add integration tests for CREATE_LISTING_DATABASE stored procedure (- Added comprehensive test suite for CREATE_LISTING_DATABASE stored procedure). (Resolved task 1)[https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_workitems/edit/66559/]

## Bug Fixes
* Bug Fix: fix missing comma (Fix for missing comma). (Resolved task 1)[n/a]
* Bug Fix: fix variable name (Fixed prod Foundry Source RID variable name.). (Resolved task 1)[n/a]

---

# Blueprints
The blueprints are a structured guide for hands-on labs covering various topics related to Snowflake. Each lab is designed to provide practical experience, step-by-step instructions to deepen your understanding of key concepts.

### NLP API Integration
The NLP API Integration blueprint provides a comprehensive guide for integrating natural language processing capabilities directly into your Snowflake environment. This integration enables you to call NLP API endpoints from within Snowflake using external functions, allowing you to perform advanced text analysis, sentiment analysis, and AI-powered language processing on your data.

You can refer to the [NLP API Integration blueprint](https://docs.uptimize.merckgroup.com/snowflake/blueprints/nlp-api-integration-steps/) hands-on lab to learn how to:
- Set up the required database, schema, and warehouse
- Provision the NLP API caller function at the account level
- Invoke NLP API endpoints directly from Snowflake queries
- Manage and deprovision the integration when needed

### Snowflake Managed Iceberg Tables
Apache Iceberg tables for Snowflake combine the performance and query semantics of typical Snowflake tables with external cloud storage that you manage. They are ideal for existing data lakes that you cannot, or choose not to, store in Snowflake.

You can refer to the [Iceberg table blueprint](https://docs.uptimize.merckgroup.com/snowflake/blueprints/snowflake-managed-iceberg-tables/) hands-on lab to learn how to work with Iceberg tables in your Snowflake account.

---

# NLP API Integration: Step-by-Step Blueprint

This blueprint provides step-by-step instructions for integrating the NLP API at the account level in Snowflake.

## Prerequisites
- UCADMIN role access
- API token for NLP API
- Access to warehouse

## Steps

1. **Set up context and warehouse**
  
  ```sql
  USE ROLE UCADMIN;
  USE SECONDARY ROLES NONE;
  USE WAREHOUSE OPERATIONS_WH;
  SELECT CURRENT_ROLE(), CURRENT_SECONDARY_ROLES();
  ```
2. **Create database, schema, and warehouse for NLP API**
   
  ```sql
  CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('NLP_API', 'TEST');
  CALL OPERATIONS_DB.STORED_PROCS.CREATE_SCHEMA('NLP_API_TEST_DB', 'EXT_FUNC');
  CALL OPERATIONS_DB.STORED_PROCS.CREATE_WAREHOUSE('NLP_API_TEST_DB', 'OPS', 'XSMALL');
  ```
3. **Provision the NLP API caller function**
   
  ```sql
  CALL OPERATIONS_DB.STORED_PROCS.PROVISION_NLP_API_CALLER_FUNCTION(
    'NLP_API_TEST_DB', 'EXT_FUNC', '<api-token>'
  );
  ```
  > For full details, see the [NLP API Caller Function documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#provision_nlp_api_caller_function).

> **Note:** Replace `<api-token>` with your actual API token.

4. **Grant usage on the warehouse to the NLP API caller role**
   
  ```sql
  GRANT USAGE ON WAREHOUSE NLP_API_TEST_OPS_WH TO ROLE NLP_API_TEST_EXT_FUNC_NLP_API_CALLER;
  ```
5. **Invoke the NLP API from Snowflake**

  ```sql
  USE ROLE NLP_API_TEST_EXT_FUNC_NLP_API_CALLER;
  USE SECONDARY ROLES NONE;
  USE WAREHOUSE NLP_API_TEST_OPS_WH;
  SELECT NLP_API_TEST_DB.EXT_FUNC.CALL_NLP_API(
    'https://api.nlp.dev.uptimize.merckgroup.com/model/anthropic.claude-3-haiku-20240307-v1:0/invoke',
    {
      'anthropic_version': 'bedrock-2023-05-31',
      'max_tokens': 1000,
      'messages': [
        {
          'role': 'user',
          'content': [
            {
              'type': 'text',
              'text': 'Hello, what is 10 + 5 ?, tell me a short story '
            }
          ]
        }
      ]
    }
  );
  ```
6. **Deprovision the NLP API caller function when finished**

  ```sql
  USE ROLE UCADMIN;
  USE SECONDARY ROLES NONE;
  USE WAREHOUSE OPERATIONS_WH;
  CALL OPERATIONS_DB.STORED_PROCS.DEPROVISION_NLP_API_CALLER_FUNCTION('NLP_API_TEST_DB', 'EXT_FUNC');
  ```
  > For full details, see the [NLP API Caller Function documentation](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#deprovision_nlp_api_caller_function).

---

# Snowflake Managed Iceberg Tables

## Introduction
This tutorial covers how to create [Apache Iceberg](https://docs.snowflake.com/en/user-guide/tables-iceberg) tables that use Snowflake as the catalog and support read and write operations.

Complete this tutorial using a worksheet in Snowsight or using a Snowflake client such as [SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql). You can copy and paste the code examples, and then run them.


## At the end of this tutorial

At the end of this tutorial, you'll learn how to do the following:

* Set up a storage integration
* Set up an external volume.
* Create an Iceberg table (with Snowflake managed catalog).

## Prerequisites

* A database is available (or you have permissions to create it).
* A schema is available (or you have permissions to create it).
* You have the UCADMIN role.
* A warehouse is available (or you can create one if it does not exist).


### 1. Setup the database

If your **database** is already created, skip this step. If not, you can use our [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-warehouse) to create it.

#### 1.1. Create a database

Run the following example to create a database using a stored procedure:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_DATABASE('iceberg', 'dev', 7);
```
The query should produce the following result:  `Database ICEBERG_DEV_DB created with thr.. etc.`  

#### 1.2. Use the database
Run the following example to use the database:
```sql
USE DATABASE ICEBERG_DEV_DB;
```

The query should produce the following result:  `Statement executed successfully.`

### 2. Setup the schema

If your **schema** is already created, skip this step. If not, you can use our [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-warehouse) to create it.

#### 2.1. Create a schema

Run the following example to create a schema using a stored procedure:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SCHEMA('iceberg_dev_db', 'iceberg_schema', 7);
```

The query should produce the following result: `Schema ICEBERG_SCHEMA successf... etc.`

#### 2.2. Use the schema
Run the following example to use the schema
```sql
USE SCHEMA ICEBERG_DEV_DB.ICEBERG_SCHEMA;
```
The query should produce the following result: `Statement executed successfully.`  

### 3. Setup the warehouse 

If your **warehouse** is already created, skip this step. If not, you can use our [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-warehouse) to create it.

#### 3.1. Create a warehouse

Run the following example to create a warehouse using a stored procedure:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_WAREHOUSE('iceberg_dev_db', 'iceberg', 'xsmall');
```
The query should produce the following result: `Warehouse ICEBERG_DEV_ICEBERG_WH creat... etc.`  

#### 3.2. Use the warehouse
Run the following example to the warehouse

```sql
USE WAREHOUSE ICEBERG_DEV_ICEBERG_WH;
```

The query should produce the following result: `Statement executed successfully.`  

### 4. Create an external volume

#### 4.1. AWS prerequisites configuration steps 
  
Setup the [AWS prerequisites configuration steps](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/)

> **Note:** When creating a external volume in Snowflake, ensure that you use a template configured with both read and write access to the S3 bucket.


#### 4.2. Create an external volume

Use our [stored procedures](https://docs.uptimize.merckgroup.com/snowflake/account-management/stored-procedures/#create-external-volume) to create external volume.

Run the following example to verify the external volume connection using a stored procedure:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_EXTERNAL_VOLUME(
  'external_integration_iceberg', -- The name of the external integration to be created
  'dev',                          -- The environment for which the external volume is intended (e.g., SANDBOX, DEV, QA, PROD)
  'aws s3',                       -- A logical identifier for the storage location (e.g., AWS S3)
  's3://icbergusecase-dev-bucket/', -- The base URL of the external storage location in AWS S3
  'arn:aws:iam::460528558802:role/snowflake-s3-integration-icbergusecase-dev-role-read', -- The ARN of the AWS IAM role for secure access
  'external storage id'           -- (Optional) Provide this external ID or leave it empty, and Snowflake will generate one (e.g., BM00150_SFCRole=1_vHyRXz8Va3sDxnjtHbOMZDYWGbM=)
);
```
The query should produce the following result: `External volume EXTERNAL_INTEGRATION_ICEBERG_DEV creat... etc.`  

#### 4.3. Verify the external volume connection

Run the following example to create  external volume using a stored procedure:
``` sql
CALL SYSTEM$VERIFY_EXTERNAL_VOLUME('EXTERNAL_INTEGRATION_ICEBERG_DEV');
```

The query should produce the following result: 
```json
{"success":true,"storageLocationSelectionResult":"PASSED","storageLocationName":"AWS S3","servicePrincipalProperties":"STORAGE_AWS_IAM_USER_ARN: ; STORAGE_AWS_EXTERNAL_ID: ","location":"s3://icbergusecase-dev-bucket/","storageAccount":null,"region":"eu-central-1","writeResult":"PASSED","readResult":"PASSED","listResult":"PASSED","deleteResult":"PASSED","awsRoleArnValidationResult":"PASSED","azureGetUserDelegationKeyResult":"SKIPPED"}
```


### 5. Load data into/from iceberg table

We'll look at two examples. The first one shows how to write data from another table into an Iceberg table and then check if the data is stored in the correct location in S3.

#### 5.1. Example on how to write data from another table into an Iceberg table

This example shows how to write data from another table into an Iceberg table and then check if the data is stored in the correct location in S3.

##### 5.1.1. Create iceberg table
  
Run the following example to create a file format:
```sql
CREATE OR REPLACE ICEBERG TABLE iceberg_table (
  c_custkey INTEGER,
  c_name STRING,
  c_address STRING,
  c_nationkey INTEGER,
  c_phone STRING,
  c_acctbal INTEGER,
  c_mktsegment STRING,
  c_comment STRING
)
  CATALOG = 'SNOWFLAKE'  -- Specifies the Snowflake catalog to use for creating and managing the Iceberg tables.
  EXTERNAL_VOLUME = 'EXTERNAL_INTEGRATION_ICEBERG_DEV'  -- Name of the external volume that was created previously and is being referenced here.
  BASE_LOCATION = 'iceberg_table'; -- Path within the S3 bucket where the Iceberg table data is stored
```

The query should produce the following result: `Table ICEBERG_TABLE successfully created.`

[For more details about stage and how to create it](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table-snowflake)


##### 5.1.2. Create dummy database

In this, we will use a dummy database to simply load data from it

Run the following example to create a file format:

``` sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_SHARE_DATABASE('SAMPLEDATA', 'DEV', 'SFC_SAMPLES.SAMPLE_DATA');
```

##### 5.1.3. Insert data into the Iceberg table

Run the following example to insert data into the iceberg table:
```sql
INSERT INTO iceberg_table
  SELECT * FROM SAMPLEDATA_DEV_DB.tpch_sf1.customer;
```
The query should produce the following result: `The query will return the number of rows inserted.`  

> Note If you check your cloud storage location, you should now see a directory that contains your table data files at the following path: ```STORAGE_BASE_URL/BASE_LOCATION/iceberg_table/data/```.

#### 5.2. Another example on how read data from s3 into an Iceberg table

This example shows how to read data from s3 into an Iceberg table and then check if the data is loaded in the table.

##### 5.2.1. Create a storage integration

###### 5.2.1.1 - AWS prerequisites configuration steps 
        
Setup the [AWS prerequisites configuration steps](https://docs.uptimize.merckgroup.com/snowflake/data-ingestion/data-ingestion-manual/factory-s3/)

> **Note:** When creating a storage integration in Snowflake, ensure that you use a template configured with both read and write access to the S3 bucket.

###### 5.2.1.2 - Create a storage integration
Run the following example to create storage integration using a stored procedure:
```sql
CALL OPERATIONS_DB.STORED_PROCS.CREATE_STORAGE_INTEGRATION(
  'storage_intEGRAtion_iceberg',
  'dev',
  'arn:aws:iam::460528558802:role/snowflake-s3-integration-icbergusecase-dev-role-read',
  's3://icbergusecase-dev-bucket/'
);
```
The query should produce the following result: `Storage integration STORAGE_INTEGRATION_ICEBERG_DEV created an.. etc.`

###### 5.2.1.3. Create a stage

Run the following example to create a stage:

```sql
CREATE OR REPLACE STAGE iceberg_stage
  URL = 's3://icbergusecase-dev-bucket'  -- The S3 bucket URL where the data for the Iceberg use case is stored.
  STORAGE_INTEGRATION = STORAGE_INTEGRATION_ICEBERG_DEV;  -- Associates the stage with the previously configured storage integration for secure access to the S3 bucket.
```

The query should produce the following result: `Stage area ICEBERG_STAGE successfully created.`

[For more details about stage and how to create it](https://docs.snowflake.com/en/sql-reference/sql/create-stage)

> Note: This example is designed to handle files in ```Parquet format``` . Ensure that your external stage contains Parquet data files to successfully load them into the ```Iceberg table``` in the next steps.

###### 5.2.1.4. Create iceberg table

Run the following example to create a file format:
```sql
CREATE OR REPLACE ICEBERG TABLE iceberg_table (
  c_custkey INTEGER,
  c_name STRING,
  c_address STRING,
  c_nationkey INTEGER,
  c_phone STRING,
  c_acctbal INTEGER,
  c_mktsegment STRING,
  c_comment STRING
)
  CATALOG = 'SNOWFLAKE'  -- Specifies the Snowflake catalog to use for creating and managing the Iceberg tables.
  EXTERNAL_VOLUME = 'EXTERNAL_INTEGRATION_ICEBERG_DEV'  -- Name of the external volume that was created previously and is being referenced here.
  BASE_LOCATION = 'data/iceberg'; -- Path within the S3 bucket where the Iceberg table data is stored
```
The query should produce the following result: `Table ICEBERG_TABLE successfully created.`

[For more details about stage and how to create it](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table-snowflake)

###### 5.2.1.5. Create a file format

Run the following example to create a file format:
```sql
CREATE OR REPLACE FILE FORMAT my_file_format -- choose a relevant name
  TYPE = PARQUET  --  The file type as Parquet; change to CSV, JSON, AVRO, ORC, or other supported types as needed.
  USE_VECTORIZED_SCANNER = TRUE;  -- Enables the vectorized scanner for optimized and faster reading of Parquet files.
```
The query should produce the following result: `File format MY_FILE_FORMAT successfully created.`

###### 5.2.1.6. Loading the data into the Iceberg table
In data loading into iceberg table there are two options for formats:

###### 5.2.1.6.1. Non-Parquet formats (CSV, JSON, Avro, ORC)
```sql
COPY INTO iceberg_table -- The target Iceberg table where data will be ingested.
  FROM @iceberg_stage -- The stage containing the data to be copied.
  FILE_FORMAT = 'my_file_format'-- The file format to use for loading data.
  LOAD_MODE = 'FULL_INGEST'; -- Fully ingests all data, replacing existing content in the Iceberg table.
``` 

###### 5.2.1.6.2. Apache parquet format
In Apache Parquet Format there are two options also to load the data:

###### 5.2.1.6.2.1. Load with `FULL_INGEST` mode:
Scans files and rewrites Parquet data into the Iceberg tables base location:
```sql
COPY INTO iceberg_table  -- The target Iceberg table where data will be ingested.
  FROM @iceberg_stage  -- The stage containing the data to be copied.
  FILE_FORMAT = 'my_file_format'  -- The file format to use for loading data.
  LOAD_MODE = FULL_INGEST  -- Fully ingests all data, replacing existing content in the Iceberg table.
  -- PURGE = TRUE  -- Uncomment to delete the source files from the stage after ingestion (optional).
  MATCH_BY_COLUMN_NAME = CASE_SENSITIVE;  -- Ensures column names are matched with case sensitivity between the table and files.
```

###### 5.2.1.6.2.2. Load with `ADD_FILES_COPY` mode ( **Preferred method due to lower cost of ingestion.** ):
Directly copies Iceberg-compatible Parquet files and registers them in the Iceberg catalog.

```sql
COPY INTO iceberg_table  -- The target Iceberg table where data will be copied.
  FROM @iceberg_stage  -- The stage containing the data to be copied.
  FILE_FORMAT = 'my_file_format'  -- The file format to use for loading data.
  LOAD_MODE = ADD_FILES_COPY  -- Adds new files to the Iceberg table without overwriting existing data.
  -- PURGE = TRUE  -- Uncomment this line to delete source files from the stage after copying (optional).
  MATCH_BY_COLUMN_NAME = CASE_SENSITIVE;  -- Matches column names in a case-sensitive manner between the table and the files.
```



### 6. Verify the data
Run the following example to verify the data:
``` sql
SELECT * FROM iceberg_table LIMIT 10;
```

### Additional Notes
> As a UCADMIN, you could grant usage privilege to other functional access roles like _RWC to use the external volume in the Iceberg table creation for non-use-case admins.

---

# Guidelines for Building a Scalable Data Warehouse

---

# Data Vault 2.0 Architecture

---

# Snowflake Role Management

This page documents the key Snowflake roles, their purpose, and how the `UCADMIN` can assign and manage these roles.

## Overview

Snowflake uses roles to control access and visibility into cost, usage, governance, security, and account management features. The following roles are:

- **USAGE_VIEWER**: View cost/usage information and policy-related data.
- **GOVERNANCE_VIEWER**: View governance, account usage, object metadata, and security information.
- **SECURITY_VIEWER**: View security-related information.
- **FULL_METADATA_VIEWER**: View usage, governance, and security information.
- **BUDGET_CREATOR**: Create and manage budgets.
- **SUPPORT_CASES_MANAGER**: Manage support cases with Snowflake.
- **SHARE_MANAGER**: Create and manage shares.

## Role Details & Assignment

### USAGE_VIEWER
**Purpose**: The USAGE_VIEWER role provides broad visibility into Snowflake's operations, including cost, usage, monitoring, alerts, and resource sharing. Originally focused on viewing cost and usage information, it now includes:

- **Monitoring**: Access to MONITORING_VIEWER for tracking data metrics and system performance.
- **Alerts**: Access to ALERT_VIEWER for monitoring system alerts and managing budget-related settings.
- **Usage Insights**: Access to SHARING_USAGE_VIEWER for analyzing workload patterns, shared resources, and reader-based usage.
- **Permissions**: Grants on database roles for cost, usage, monitoring, alerts, and sharing insights.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/user-guide/cost-exploring-overall#granting-access-to-cost-and-usage-data)

### GOVERNANCE_VIEWER
**Purpose**: The GOVERNANCE_VIEWER role now provides expanded access for governance, monitoring, classification, and data metrics. Originally focused on governance/account usage, it now includes:

- **Governance and Security Access**: Permissions for CLASSIFICATION_ADMIN, GOVERNANCE_ADMIN, and SECURITY_VIEWER to oversee data classifications, governance settings, and security configurations.
- **Data Metrics and Monitoring**: Access to DATA_METRIC_USER and MONITORING_VIEWER for tracking data metrics and system performance.
- **Classification and Core Viewer Access**: Permissions for CLASSIFICATION_VIEWER and CORE_VIEWER for targeted analysis of data classifications and core resource usage.
- **Alerts**: Access to ALERT_VIEWER for monitoring system alerts and managing budget-related settings.
- **Enhanced Data Visibility**: Roles like DATA_METRIC_USER and DATA_PRIVACY_VIEWER for insights into data metrics and privacy measures.
- **Usage Insights**: Access to READER_USAGE_VIEWER for analyzing workload patterns and reader-based resource usage.
- **Permissions**: Grants on governance, security, classification, monitoring, alerts, and data metric roles.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/sql-reference/snowflake-db-roles)

### SECURITY_VIEWER
**Purpose**: The SECURITY_VIEWER role provides users with read-only access to security-related information in Snowflake, including monitoring and tracking security settings, usage, and workload insights.

- **Security-Based Access**: View security settings through the SECURITY_VIEWER role.
- **Usage and Sharing Insights**: Permissions for viewing usage and sharing information with roles like READER_USAGE_VIEWER and SHARING_USAGE_VIEWER.
- **Permissions**: Grants on security, usage, and sharing usage database roles.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/sql-reference/snowflake-db-roles)

### FULL_METADATA_VIEWER
- **Purpose**: Visibility into usage, governance, and security information.
- **Permissions**: Grants on GOVERNANCE_VIEWER, USAGE_VIEWER, and SECURITY_VIEWER roles.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/sql-reference/snowflake-db-roles)

### BUDGET_CREATOR
- **Purpose**: Create and manage budgets. Requires CREATE ALERT access on schema level.
- **Permissions**:Grants on BUDGET_CREATOR database role.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/sql-reference/classes/budget/commands/create-budget)

### SUPPORT_CASES_MANAGER
- **Purpose**: Create and manage support cases with Snowflake.
- **Permissions**: MANAGE ACCOUNT/USER SUPPORT CASES privileges.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/user-guide/ui-support)

### SHARE_MANAGER
- **Purpose**: Create and manage shares.
- **Permissions**: CREATE SHARE privilege on account.
- **Reference**: [Snowflake Docs](https://docs.snowflake.com/en/sql-reference/sql/create-share)

## How UCADMIN Assigns Roles

**Managed Role Assignment via Stored Procedure:** UCADMIN can use the managed role assignment stored procedure:

```sql
CALL OPERATIONS_DB.STORED_PROCS.ALTER_MANAGED_ROLE_GRANTS(
  '<role_name>',
  'GRANT',
  '<ASSIGNEE_TYPE>',
  ARRAY_CONSTRUCT('<assignee_1>', '<assignee_2>')
);
```

See the full documentation and examples in [Account Management Stored Procedures](/snowflake/account-management/stored-procedures/).

## References
- [Snowflake Cost & Usage Data Access](https://docs.snowflake.com/en/user-guide/cost-exploring-overall#granting-access-to-cost-and-usage-data)
- [Snowflake Database Roles](https://docs.snowflake.com/en/sql-reference/snowflake-db-roles)
- [Snowflake Data Metric Functions](https://docs.snowflake.com/en/sql-reference/functions-data-metric)

---

# Snowflake AI