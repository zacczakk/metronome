# UPTIMIZE DBT Cloud


Welcome to the documentation of UPTIMIZE Dbt cloud! Please browse through the below pages to learn more.

## What is DBT

DBT is a transformation workflow that helps you get more work done while producing higher quality results. You can use dbt to modularize and centralize your analytics code, while also providing your data team with guardrails typically found in software engineering workflows. Collaborate on data models, version them, and test and document your queries before safely deploying them to production, with monitoring and visibility.

## Quickstart on DBT Cloud

Dbt Cloud is a scalable solution that enables you to develop, test, deploy, and explore data products using a single, fully managed software service. It enables data teams to optimize their data transformation by developing, testing, scheduling, and investigating data models using a single, fully managed service through a web-based user interface (UI).

---

# DBT Cloud Setup

![DBT Cloud setup](/assets/dbt/DBT_Snowflake_Automation.png)

Uptimize DBT cloud Account will be integrated with the below three services:

 - **Uptimize Snowflake Account** : Each Project in DBT cloud will be integrated with its corresponding Project/ use case specific Snowflake account in Uptimize
 - **Azure DevOps Project** : Dbt Cloud Projects are integrated with the use case project created in ADO under Uptimize Organization
 - **Azure Active Directory** : Dbt Cloud account is integrated with our Azure AD for user authentication via Merck SSO

## DBT Cloud Project Request

Request for a dbt cloud project is made from the [Use Case Snowflake Extension](https://palantir.mcloud.merckgroup.com/workspace/hubble/exploration?objectTypeRid=ri.ontology.main.object-type.c528c029-c1bb-4700-b913-73632d28f819). 

#### Prerequisites 

- Usecases that are currently using or plan to use Uptimize Snowflake as their cloud data warehouse 

Users added to Uptimize DBT via the Identity Provider - Microsoft Entra ID (formerly Azure AD) would be able to login to dbt cloud account using the Merck SSO link : https://emea.dbt.com/enterprise-login/merck-group.

---

# Access Management

UPTIMIZE DBT provides multiple levels of access management:

##  User Access Management

Uptimize dbt account offers one dbt project for each the approved use cases, which has a standalone Snowflake account. These dbt projects have there own admin, developer and viewers. To grant them access to their use case Snowflake account, Azure AD groups are used to provide **SSO-based login access** using their **Merck credentials**.

Two high-level access roles are provided for each Snowflake account, **managed through the membership of the associated Azure AD groups**:

- DBT_<USECASE_NAME>_ADMIN_GROUP , e.g. *DBT_EMDSERONO_ADMIN_GROUP*
- DBT_<USECASE_NAME>_DEVELOPER_GROUP , e.g. *DBT_EMDSERONO_DEVELOPER_GROUP*
- DBT_<USECASE_NAME>_VIEWER_GROUP , e.g. *DBT_EMDSERONO_VIEWER_GROUP*
- DBT_<USECASE_NAME>_JOB_ADMIN_GROUP , e.g. *DBT_EMDSERONO_JOB_ADMIN_GROUP*
- DBT_<USECASE_NAME>_JOB_RUNNER_GROUP , e.g. *DBT_EMDSERONO_JOB_RUNNER_GROUP*
- DBT_<USECASE_NAME>_JOB_VIEWER_GROUP , e.g. *DBT_EMDSERONO_JOB_VIEWER_GROUP*
- DBT_<USECASE_NAME>_STAKEHOLDER_GROUP , e.g. *DBT_EMDSERONO_STAKEHOLDER_GROUP*

where *USECASENAME* is the name of the actual usecase for which this request is raised.

Users added to these groups would be able to login to Uptimize DBT cloud via the [Merck SSO](https://emea.dbt.com/enterprise-login/merck-group).

These roles are created automatically upon the creation of your dbt project. Their purpose is to only group use case admins and non-admins into the separate groups to enable designated admins to perform high-level administrative tasks in the dbt project.

For getting added to the above listed DBT groups in Azure for their dbt projects, User can raise a Snow ticket to **GLOBAL_UPTIMIZE_PLATFOrM_SNOWFLAKE** assignment group. 

## Role based Permissions

AD groups created for a specific project in dbt will be mapped to dbt Cloud groups which are then in turn granted to users. A dbt Cloud group can be associated with more than one role and permission set. Roles with more access take precedence.

For the created AD groups, the role based permissions will be mapped as follows:

- DBT_<USECASE_NAME>_ADMIN_GROUP : Members of this group will have **Admin** role on their specified use case Project. 
- DBT_<USECASE_NAME>_DEVELOPER_GROUP: Members of this group will have **Developer** role on their specified use case Project. 
- DBT_<USECASE_NAME>_VIEWER_GROUP: Members of this group will have **Read-Only** role on their specified use case Project. 
- DBT_<USECASE_NAME>_JOB_ADMIN_GROUP: Members of this group will have **Job Admin** role on their specified use case Project. 
- DBT_<USECASE_NAME>_JOB_RUNNER_GROUP: Members of this group will have **Job Runner** role on their specified use case Project. 
- DBT_<USECASE_NAME>_JOB_VIEWER_GROUP: Members of this group will have **Job Viewer** role on their specified use case Project. 
- DBT_<USECASE_NAME>_STAKEHOLDER_GROUP: Members of this group will have **Stakeholder** role on their specified use case Project. 

To learn more about the permissions granted for the above roles, please refer to the [DBT Role-based permissions](https://docs.uptimize.merckgroup.com/dbt/dbt-access-management/admin-vs-developer-permissions/) page.

---

---

# Account Level Permissions for a project Role

Provided below is the list of permissions for the *Admin* and *Developer* permission sets in the dbt cloud account for their specific project.

| ACCOUNT LEVEL PERMISSIONS | Admin | Developer | Viewer | Job Admin | Job Runner| Job Viewer| Stakeholder|
| ------------------------- | ------| ----------|--------|-----------|-----------|-----------|------------|
|   Account settings        |  R    |  -        | R      | -         | -         | -         | -          |
|   Groups                  |  R    |  R        | R      | -         | -         | -         | R          |
|   Licenses                |  W    |  R        | R      | R         | -         | R         | -          |
|   Webhooks                |  W    |  W        | -      | -         | -         | -         | -          |
|   Connections             |  W    |  R        | -      | R         | -         | -         | R          |
|   Projects                |  W    |  W        | R      | R         | -         | R         | R          |
|   Repositories            |  W    |  R        | R      | -         | -         | -         | R          |
|   Environments            |  W    |  R        | R      | W         | -         | R         | R          |
|   Jobs                    |  W    |  W        | R      | W         | R         | R         | R          |
|   Runs                    |  W    |  W        | R      | W         | W         | R         | R          |
|   Environment Credentials |  W    |  W        | R      | W         | -         | -         | R          |
|   Semantic Layer Config   |  w    |  R        | R      | R         | -         | -         | R          |
|   Metadata                |  R    |  R        | R      | R         | -         | R         | R          |
|   Permissions             |  W    |  R        | R      | -         | -         | -         | -          |
|   Develop(IDE or dbt Cloud CLI)  |  W    |  W        | -      | -         | -         | -         | -          |

For more details on DBT role level permissions, you can refer to the dbt documentation [here](https://docs.getdbt.com/docs/cloud/manage-access/enterprise-permissions).

Key:

* **(W)rite** -- Create new or modify existing. Includes create, delete, allocate, modify, develop, and read
* **(R)ead** -- Can view but can not create or change any fields.

---

# DBT License Management

Merck has procured a dbt enterprise license for two years, which is valid till Feb 1st, 2026. This allows us to build close to 250,000 Models per year. The rest is carry forwarded to the next year.The number of Developer & read only licenses purchased also holds only until this enterprise plan, post which the license needs to be renewed. 

We can procure additional developer/ read-only license at any point in time based on the use case teams requirements. For procuring new or additional licenses for any use case, please reach out to **Wael Atawya** <wael.atawya@merckgroup.com>.

More details on the license is available in `Billing & Usage` section on the Uptimize dbt cloud account.

![DBT License](/assets/dbt/dbt_license_info.png)

---

# DBT Best Practises

## Table of Contents

- Naming Conventions
- Coding Standards
- Code Quality
- Code Review Guidelines
- Data Quality Checks
 

## Naming Conventions


## Coding Standards

Common Table Expression (CTE), is a temporary result set that can be used in a SQL query. You can use CTEs to break up complex queries into simpler blocks of code that can connect and build on each other
To use CTEs, you begin by defining your first CTE using the WITH statement followed by a SELECT statement.

Let's break down this example involving two tables CTE below:

![DBT CTEs Example](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_cte_example.png)

Please refer to the official document for more details [Guide to CTEs](https://www.getdbt.com/blog/guide-to-cte)


## Code Quality

Ensuring high-quality code is crucial for maintaining reliability and clarity in data pipelines.
- **Linting**: use third-party linters like ```SQLFluff``` or ```pylint``` for Python code used within DBT.

  <u>Linting Issue</u>: Below is the linting issue image

  ![DBT Linting Issue](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_linting_error.png)


  <u>Linting Issue Resolved</u>: Below is the lining issue resolved image

  ![DBT Linting Resolved](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_linting_error_resolved.png)


  <u>Linting Custom</u>: Below is the customize linting image

  ![DBT Linting Custom](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_linting_cutomize.png)


  <u>SQL Format Issue</u>: Below is the SQL format issue image

  ![DBT SQL Format Issue](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_sql_code_format_error.png)


  <u>SQL Format Resolved</u>: Below is the SQL format issue resolved images

  ![DBT SQL Format Resolved](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_sql_code_format_error_resolved.png)
  
  ![DBT SQL Format Resolve](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_sql_code_format_error_resolved_one.png)


  Please refer to the official document for more details [Lint and Format Guide](https://docs.getdbt.com/docs/cloud/dbt-cloud-ide/lint-format)



- **Run Tests**: Regularly run the DBT ```run``` and ```test``` commands to ensure your models are building correctly and data is accurate. This command will run the models and execute transformations. If there's an error (e.g., a bad SQL query or schema mismatch), it will be displayed in the terminal.
  
  ```
  dbt run
  ```
  ```
  dbt test
  ```

- **Document**: Provide detailed documentation for models and columns. DBT allows you to document models, columns, and tests directly within ```.yml``` files.

  ```
  models:
  - name: <model name>
    description: "write descriptive text"
    columns:
      - name: <field name>
        description: "write descriptive text"
  ```

- **Performance Checks**: While DBT doesn't have a built-in performance checking tool, you can manually ensure the performance of your queries by reviewing execution times and optimizing queries using indexes, partitioning, and analyzing query plans.

  ```
  EXPLAIN ANALYZE
  ```

- **Modularize**: Use models, macros, and sources for better reusability.

  In macros, create a SQL helper macro:
  
  ![DBT Macro](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_modularize_macro.png)

  Then, use this macro in your models:

  ![DBT Macro](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_modularize_macro_one.png)

- **Targeted Execution**: Instead of running all models, use --models to target specific models for testing, which can be helpful for debugging and ensuring the correctness of specific transformations.

  ```
  dbt run --models <model name>
  ```
  This command runs only the ```<model name>``` model, saving time when working with large projects.




## Code Review Guidelines

The main focus areas are readability, consistency, data integrity, performance, and maintainability.
Code reviewer/approver in development environment would be techincal lead or technical authorized person. Data quality(UAT/QA) approval would be business.

<U>DBT_Project_Flow</U>
![DBT Project Setup](https://docs.uptimize.merckgroup.com/docs-assets/dbt/DBT_Project_Flow.png)




## Data Quality Checks

Data quality checks are crucial to ensuring that your data transformations maintain accuracy, consistency, and reliability. DBT has built-in functionality to help you implement data quality checks at various stages of your data pipeline. These checks help you catch issues early, prevent bad data from moving downstream, and improve the trustworthiness of your analytics.

Please refer to the official document for more details [Add data tests to your DAG](https://docs.getdbt.com/docs/build/data-tests)
### dbt test
Create a yml file in models/test directory to check for null, unique, accepted/range values, relationship/foreign key and data freshness check. 
- **Uniqueness**: Check that certain columns contain unique values (e.g., primary keys). 

  models/schema.yml
  ```
  models:
    - name: <table name>
     columns:
        - name: <field name>
          tests:
            - unique
  ```
- **Not Null**: Ensure important columns are not null.

  models/schema.yml
  ```
  models:
    - name: <table name>
      columns:
        - name: <field name>
          tests:
            - not_null
  ```

- **Accepted Values**: Verify that columns contain only allowed values.

  models/schema.yml
  ```
  models:
  - name: <table name>
    columns:
      - name: <field name>
        tests:
          - accepted_values:
              values: ['value1', 'value2', 'value3', 'value4']
  ```

- **Relationships**: Ensure foreign key relationships are valid.

  models/schema.yml
  ```
  models:
  - name: <table name>
    columns:
      - name: <field name>
        tests:
	  - relationships:
              to: <reference table>
              field: <field name>
  ```

- **Accepted Range**: Ensure values in a column fall within a specific range.

  models/schema.yml
  ```
  models:
  - name: <table name>
    columns:
      - name: <field name>
        tests:
	  - accepted_range:
		     min:0
		     max: 10000
  ```

- **Freshness**: Check that data is updated within a certain time period in the source. Freshness thresholds can be set in the YML file where sources are configured. For each table, the keys loaded_at_field and freshness must be configured. The freshness of sources can then be determined with the command ```dbt source freshness```

  models/schema.yml
  ```
  source:
  - name: <table name>
    loaded_at_field: <field name>
    freshness:
      warn_after: {count: 24, period: hour}
      error_after: {count: 48, period: hour}
  ```

---

# DBT Vendor Support 

Support for dbt is available to all users through the following channels:

  * Dedicated dbt Support team : The global dbt Support team is available to dbt Cloud customers by email or by creating a support ticket from the dbt cloud UI.

  ![DBT Support](assets/dbt/dbt_support.PNG)

This support team can assist you with dbt Cloud questions, like project setup, login issues, error understanding, setup private packages, link to a new GitHub account, and so on.

---

# Provisioning of a dbt project

The flow illustrates the entire process for creating a DBT project when a request is made through the Foundry Snowflake Extension Object. 

![DBT Automation Flow](/assets/dbt/dbt_flow.png)

Here are the Automation steps in detail:

### User Raises Request:

A user initiates the process by raising a request for DBT project creation through the Foundry Snowflake Extension Object.

Based on request captured in the extemnsion form, DBT Account Provisioning Pipeline is  executed.

### DBT Account Provisioning Pipeline Automation:

1. Creation of Azure DevOps Project

An Azure DevOps (ADO) project is created as the first step. This project will be used for managing the version control and collaboration aspects of the DBT project. If the use case teams opts to leverage their existing ADO project, then a new repo will be created in the same project for dbt version control.

For more details please refer (https://docs.uptimize.merckgroup.com/dbt/dbt-project-management/dbt-ado-integration/)

2. Creation of Azure Security Groups:

**ADMIN** and **DEVELOPER** security groups are created in Azure to manage access control and permissions for the DBT project. This ensures that the right team members have the appropriate access. Additionally, the pipeline creates two corresponding groups in DBT Cloud and maps them to the Azure security groups, granting `ADMIN` and `DEVELOPER` permissions for the specific DBT project. Consequently, users added to the security groups in Azure will automatically have access to their DBT projects upon login.

3. Creation of DBT Project:

A new DBT project is created in DBT Cloud, configured to use its corresponding use case Snowflake account as the data platform. 
For more details on dbt to snowflake integration please refer (https://docs.uptimize.merckgroup.com/dbt/dbt-project-management/dbt-snowflake-integration/)

The dbt project is integrated with Azure Devops created in `Step 1` for version control.This step also takes care of configuring the **Development** environment, which powers the cloud IDE.
For more details on dbt environmenta please refer (https://docs.uptimize.merckgroup.com/dbt/dbt-project-management/dbt-environments/)

4. Upload Jaffle Shop Dataset (Conditional):

If the use case team has opted for sample models and datasets to be bootstrapped, the Jaffle Shop dataset is uploaded to the DBT_PLAYGROUND_DB on Snowflake. Also, sample models on the dataset is made available on the dbt project. This provides initial data and models to help the team get started quickly to dbt.

For more details on the playground data or how to use it, please refer (https://docs.uptimize.merckgroup.com/dbt/dbt-project-management/dbt-playground-datasets/)

---

# Data platform Connections

DBT cloud allows users to connect to varipus data platform. In Uptimize we're leveraging the dbt cloud to connect to Snowflake

## Connection to Snowflake

#### Prerequisites

The following fields are required when creating a Snowflake connection

|   FIELD   | DESCRIPTION  |  EXAMPLE   |
| --------  | -----------  | ---------- |
| Account   | The Snowflake account to connect to | eg: cl04411.eu-central-1 |
| Role      | The role that dbt needs to assume after connecting to Snowflake | eg: DBT_R |
| Database  | Logical database to connect to and run queries in Snowflake. This needs to be created via Stored procedures| DBT_DEV_DB |
| Warehouse | Virtual warehouse to use for queriy execution | DBT_DEV_RAW_WH |

#### Authentication to Snowflake

User authentication to snowlake accounts can be done using Snowflake OAuth. This OAuth auth method permits dbt Cloud to run development queries on behalf of a Snowflake user in dbt Cloud project.

Security intergration can be enabled from Snowflake account by executing the below query for generating an Oauth Client ID and Token.

```
CREATE OR REPLACE SECURITY INTEGRATION DBT_CLOUD
  TYPE = OAUTH
  ENABLED = TRUE
  OAUTH_CLIENT = CUSTOM
  OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'
  OAUTH_REDIRECT_URI = 'https://emea.dbt.com/complete/snowflake'
  OAUTH_ISSUE_REFRESH_TOKENS = TRUE
  OAUTH_REFRESH_TOKEN_VALIDITY = 7776000;
 
with
integration_secrets as (
  select parse_json(system$show_oauth_client_secrets('DBT_CLOUD')) as secrets
)
```

Generated token can be retrived by executing the below query:

```
select
  secrets:"OAUTH_CLIENT_ID"::string     as client_id,
  secrets:"OAUTH_CLIENT_SECRET"::string as client_secret
from
  integration_secrets;

```
Use case team will not be having permission to add/update the project connection with this OAuth credentials. Only the DBT operations team can add/update the credentials.

![Snowflake - DBT OAuth Integration](/assets/dbt/snowflake_dbt_sso.png)

Authentication to Snowflake using OAuth is only permitted in Development environment. For higher environments like QA & PROD, authentication needs to be done using key pairs only.

========================================

---

# DBT ADO Integration

DBT Cloud account is integrated with ADO for version control, this allows the dbt Cloud to perform Git actions on behalf of those authenticated individuals, against repositories to which they have access according to their ADO permissions.

DBT to Azure Devops integration is enabled at the account level for the Uptimize DBT cloud account. We have linked the service user `SVC-S122565@one.merckgroup.com` to dbt cloud. Any Project in ADO, for which the service user has access to, will now enable you to perform continuous integration builds in deployment environments.

![DBT ADO integration](/assets/dbt/ADO_integration.png)

---

# Provisioning a new DBT project in DBT cloud

For every use case that opts for dbt cloud in the Snowflake Extension form in Foundry, a project will get created for the usecase in dbt cloud with snowflake as the data platform.

When a use case team requests the creation of a DBT project for their use case, we gather additional details to ensure proper setup and alignment with their needs. Here are the questions we ask:

* **Sample Models and Datasets Bootstrapping**:  Would you like sample models in DBT Cloud and datasets in the DBT_PLAYGROUND_DB on Snowflake to be bootstrapped? This will help you get started with some pre-built models and data samples to facilitate quicker onboarding and initial testing.

* **ADO Project Requirements**:  Do you require a new Azure DevOps (ADO) project to be created for DBT, or do you have an existing project that you would like to leverage? Providing details about any existing ADO projects can help us integrate the DBT project with your current workflows and version control systems.

![Request for DBT Project](/assets/dbt/dbt_request.PNG)

By collecting this information, we can tailor the DBT project setup to better meet the specific needs of the use case team, ensuring a smoother and more efficient start to their data transformation work.

For more details on the project provisioning workflow, please refer (https://docs.uptimize.merckgroup.com/dbt/dbt-project-management/dbt-project-provisioning/)

---

# DBT Environment

DBT Environment refers to the distinct configurations and settings that define different stages of your data transformation pipeline. Typically, these stages involve a development environment and a deployment environment (often including staging and production). The goal of setting up and managing multiple environments in DBT is to enable safe, efficient, and controlled workflows for developing, testing, and deploying data models.
DBT environments in this context refer to the configuration of the DBT project, along with how data models are run, tested, and deployed in different environments (such as development, staging, and production). Managing environments properly ensures that changes to data models are thoroughly tested before they affect production data.

## Table of Contents
- DBT Environment Overview
- DBT Environment Bootstrapped By The Automation Process
- DBT Environment setup
   - Development Environment
   - Production Environment
   - Deployment Environments
- Custom Environment Creation
- Project Branch to Environment Mapping
- Environment Variable

## DBT Environment Overview

![Environment Overview](https://docs.uptimize.merckgroup.com/docs-assets/dbt/Environment_Overview.png)


## DBT Environment Bootstrapped By The Automation Process

The table below lists the environments created by the Process:

| Environment Name | Type*      |
|------------------|------------|
| Development      | Development|
| QA**             | Deployment |
| Production       | Production |

For more details on DBT Cloud environments, please refer to this [page](https://docs.getdbt.com/docs/dbt-cloud-environments).

\* As defined in the context of the DBT Cloud platform  
\** The QA environment is bootstrapped only if the user opts for it.

## DBT Environment setup

### Development Environment

Members of the DBT ADMIN group have the required permissions to create or modify an environment in dbt.  Typically, there are two types of environments in dbt:

* **Deployment or Production** (or `prod`) -- Refers to the environment that end users interact with.

* **Development** (or `dev`) -- Refers to the environment that the developers work in. This means that engineers can work iteratively when writing and testing new code in development. Once they are confident in these changes, they can deploy their code to production.

Users can also create a **QA** or `stg` environment based on their requirement.

#### Steps to Set Up Your Development Environment in DBT Cloud

Follow these instructions to set up your Snowflake connection for the development environment:

1. Navigate to the ``Develop`` dropdown menu and select ``Cloud IDE``.

![Cloud IDE setup](assets/dbt/cloud_ide_select.png)

2. If the Snowflake connection has not been set up, you'll be prompted to configure credentials. Click ``Configure credentials``.

3. Click the edit button, ensure the pre-filled fields exist, select OAuth as the authentication method, and save.

4. Click ``Connect to Snowflake`` to authenticate.

![Connect Snowflake account](assets/dbt/connect_snowflake_account.png)

5. Once authenticated, go to ``Develop`` dropdown and select ``Cloud IDE`` for developmental activities.

![DBT IDE](assets/dbt/dbt_ide.PNG)

### Production Environment

The production environment authenticates via key pairs, provided during bootstrapping.

Production environment uses **DBTUser**, which assumes **DBT_ROLE** in Snowflake for operations. This is an empty role; appropriate access must be granted by the Snowflake use case admins.

The production environment is mapped with TARGET and not mapped with any database.

#### Steps to Configure Your Production Environment in DBT Cloud

Follow these instructions to set up your Snowflake connection for the production environment:

1. Navigate to the ``Deploy`` dropdown menu and select the ``Environment`` option.

![DBT Environment](assets/dbt/environment.PNG)

2. Choose the ``Production`` environment.

![DBT prod Environment](assets/dbt/production_environment_select.png)

3. Click the settings button to view the configuration.

![Production Widget](assets/dbt/production_page_widget_button.png)

4. Click edit to modify the configuration.

![Production Setting](assets/dbt/production_settings_edit.png)

5. Set the Target database and schema.

6. Click save to deploy your jobs in the production environment.


**Please Note**: QA environment setup also follows the same process as Production Environment

### Deployment Environments

Deployment refers to the process of executing your dbt project (models, tests, and other transformations) in a production environment. This involves running the dbt commands to build your data models, test your data quality, and create documentation, while managing different environments (e.g., development, staging, and production) to ensure the code is reliable and scalable.
The deployment environment encompasses staging and production stages where the final, validated data models are deployed. It is a critical aspect of a well-defined CI/CD pipeline (Continuous Integration / Continuous Deployment).

#### Steps to Configure Your Deployment Environment in DBT Cloud

Follow these instructions to set up your Snowflake connection for the deployment environment:

1. Navigate to the ``Develop`` dropdown menu and select ``Cloud IDE``.

![Cloud IDE setup](assets/dbt/cloud_ide_select.png)

2. Click on create new environment

![Deployment Environment](assets/dbt/dbt_create_deployment_environment.png)

3. Select connection

![Deployment Connection](assets/dbt/dbt_create_deployment_connection.png)

4. Provide the credentials

![Deployment Credentials](assets/dbt/dbt_create_deployment_credentials.png)


## Custom Environment Creation

In certain cases, additional environments may be needed to meet specific use case requirements. Custom environments can be created to ensure isolation between them. As per UPTIMIZE Best Practices, these environments must authenticate using key pairs generated from a managed user in Snowflake. The creation of this managed user will be handled by the UPTIMIZE Snowflake team when a ticket is submitted. Make sure to grant appropriate privileges to this managed user since no roles will be assigned to it upon its creation
For more information on managed user please refer [here](https://docs.uptimize.merckgroup.com/snowflake/access-management/managed-technical-users/) 

### Steps to Create a Custom Environment

1. Submit a ticket on the IT4you Portal to request a managed user from the UPTIMIZE Snowflake team. You can access the portal [here](https://mhub.service-now.com/esc?id=ec_pro_dashboard).

2. After the new managed user has been created, you can retrieve the key pair from your Snowflake account by running the following query as ``UCADMIN`` Role: ```select * from muser_db.operations.vw_users```
   
3. Go to the Environment page by selecting the environment option, as shown in the screenshot below:

![DBT Environment](assets/dbt/dbt_environment_select.PNG)

4. Click the ``Create Environment`` button.

![DBT Environment](assets/dbt/dbt_environment_create_button.PNG)

5. Complete the required fields, ensuring that the authentication type is set to key pairs.

![DBT Environment](assets/dbt/dbt_environment_save.PNG)

6. Click ``Save`` to be directed to the newly created environment page.SSS

![DBT Environment](assets/dbt/dbt_new_environment_page.PNG)

## Project Branch to Environment Mapping

It is considered best practice to map deployment environments to corresponding branches. Below is the recommended naming convention for optimal organization:

| Environment Name | Branch Name         |
|------------------|---------------------|
| Development      | release/development |
| QA               | release/qa          |
| Production       | main                |

## Branching Guidelines

   ## Creation of Branch

1. Navigate to the Project and click on settings

![DBT Project Settings](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_project_settings.png)

2. Copy the Repository link

![DBT Repository](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_repository.png)

3. Click on New Branch

![DBT New Branch](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_branch_creation.png)
![DBT Branch Creation](https://docs.uptimize.merckgroup.com/docs-assets/dbt/dbt_branch_creation_one.png)

### Steps to Configure a Custom Environment

1. Navigate to the Environment page by selecting the environment option, as shown in the screenshot below:

![DBT Environment](assets/dbt/dbt_environment_select.PNG)

2. Select the environment you wish to configure.

3. Click on ``Settings``.

![DBT Environment](assets/dbt/dbt_environment_settings.PNG)

4. Press the ``Edit`` button.

![DBT Environment](assets/dbt/dbt_environment_edit.PNG)

5. Enable the ``Custom Branch`` option, and specify the branch that should be mapped to the environment.

![DBT Environment](assets/dbt/dbt_environment_custom_branch.PNG)

## Environment Variable

In dbt, environment variables are used to manage configuration settings that can change depending on the environment (e.g., development, staging, or production). These variables allow for more flexible and secure management of your dbt projects, as they can store sensitive information (like credentials) or control different behaviors (e.g., which database or schema to use) without hardcoding them into your dbt models or configurations.
Environment Variables provide flexibility and security by allowing sensitive data and environment-specific configurations to be stored outside of your codebase. Leveraging these variables helps manage database connections, API keys, and other parameters dynamically. By integrating environmental variables, dbt projects become more maintainable, portable, and secure, especially across different environments (e.g., dev, staging, prod).

![DBT Environment Variables](assets/dbt/dbt_environment_variables.png)

---

# DBT Playground Data

## What is the Jaffleshop dataset

The Jaffleshop dataset is a widely used dataset for DBT tutorial projects. It consists of a one-year sample, spanning from 2016 to 2017, and includes the following tables: 

- `raw_customers`: Customers who have placed orders.
- `raw_orders`: Orders placed by customers for food and drinks.
- `raw_items`: The individual items that make up an order.
- `raw_products`: The products that are available to order.
- `raw_stores`: The stores where orders are placed.
- `raw_supplies`: The supplies used to make products.

To use this Jaffleshop dataset in your development environment, your Muid or Xuid needs permission to assume the `DBT_PLAYGROUND_ROLE` role in the Snowflake account.

The Jaffleshop dataset has been seeded into the Snowflake `DBT_PLAYGROUND_DB`, which is mapped to the Development environment by default. Utilize this environment to explore and discover the exciting features of DBT. Additionally, some models and macros have been bootstrapped to perform transformations on the Jaffleshop dataset, which you can use as a template to develop your models for your specific use case.