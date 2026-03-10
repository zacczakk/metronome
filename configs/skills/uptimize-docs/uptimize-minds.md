![minds.png](assets/uptimize-minds/minds.png)
# UPTIMIZE Minds - Overview

UPTIMIZE Minds (Merck Integrated Network of Data Semantics) is the semantic layer of the UPTIMIZE ecosystem. Built on robust and open W3C standards, it acts as the "connective tissue" across Merck's data landscape, enabling the shift from siloed, application-centric data to a knowledge-centric approach where data becomes a self-describing asset. With UPTIMIZE Minds, Merck establishes a common Data Language that ensures information is consistent, standardized, and interoperable across domains.

## Why It Matters
Adding a semantic layer transforms how Merck works with data and enables the vision of seamless data, seamless experiences:

- **Standardized meaning** - Clear, consistent definitions and vocabularies (e.g., map synonyms for substances).
- **Breaking silos** - W3C standards enables interoperability and re-use of data across systems, avoiding vendor lock-in.
- **Smarter AI & search** - Reduces hallucinations via contextualization of data and supports natural language queries.
- **Governance built-in** - Access rules encoded as metadata to meet regulatory and confidentiality needs.
- **Efficiency through re-use** - Modular ontologies foster reusable pipelines, cut repetitive work, and improve ROI (accelerating use case development over time).

## Capabilities of UPTIMIZE Minds
Powered by Siemens Altair Graph Studio, UPTIMIZE Minds provides:

- **Unified Data Models** - Standards-based models for attributes, rules, and relationships of key data objects ( target: less than 100 global models).
- **Semantic Taxonomies** - Structured classification of object types, forming the backbone for integration ( target: less than 1000 classes).
- **Mapped Terminologies** - Alignment of internal and external controlled vocabularies to harmonize terms across all business units and sectors.
- **Global Data Registry** - Persistent identifiers (URIs) for models, vocabularies, taxonomies, and key data objects.
- **Semantic API** - Programmatic access to semantic content in formats like JSON-LD, including e.g. mapping services.
- **Graph Analytics & AI** - Enrichment and linking of data, supporting embeddings and GPT-based integrations. Also running data analytics algorithms directly within the graph setup.

**Ontologies serve as blueprints and are structured into:**

- Top-Level Ontologies (TLO)  
- Domain-Level Ontologies (DLO)  
- Internally developed ontologies  


## How It Works

![how-it-works](assets/uptimize-minds/how-it-works.png)

A Minds use case typically follows three simple steps:

1. **Ask** - Define the business questions and identify relevant concepts and data sources.  
2. **Link** - Build ontologies to model these concepts and relationships, reusing industry standards where possible.  
3. **Connect** - Map source data to the ontology to create a knowledge graph, either via virtualization or onboarding.  

## Where It Fits in UPTIMIZE

![where-it-fits](assets/uptimize-minds/where-it-fits.png)

UPTIMIZE Minds is seamlessly integrated into the overall UPTIMIZE architecture, complementing platforms such as Data Central, AWS, Snowflake, and Foundry. By adding the capability to manage and access highly standardized data objects and knowledge graphs, UPTIMIZE Minds enables stronger connectivity and data re-use across the ecosystem. Working hand in hand with Data Central, it aligns semantic data definitions with business glossaries, providing a consistent and reliable foundation for data usage across Merck.


## Get Started
- Contact the UPTIMIZE Minds team for onboarding and support.  
- Explore available ontologies, vocabularies, and models.  
- Watch out for updates on Siemens Altair Graph Studio, the platform supporting Minds.  

We are continuously working on enhancements and will share updates soon.

---

# Uptimize Minds - Use Case Access Management

This guide explains how to request access to a specific role for your use case in Uptimize Minds.

---

## Step 1: Identify the Appropriate Role

Before requesting access, review the **Uptimize MINDS Platform - Roles & Responsibilities** section to understand the available roles. Select the role that best fits your responsibilities and requirements.

---

## Step 2: Submit an Access Request

Access to an existing use case in Uptimize Minds is granted through a ServiceNow request.

### How to Submit

1. Navigate to **ServiceNow → Generic Request**  
   [Open ServiceNow Request Form](https://mhub.service-now.com/now/nav/ui/classic/params/target/com.glideapp.servicecatalog_category_view.do%3Fv%3D1%26sysparm_parent%3D800ea19edb68ce14af200a9bd39619d9%26sysparm_no_checkout%3Dfalse%26sysparm_ck%3Dd3622a9893133e50e498bf997bba105e8d71a2d678f2a14804878f72b2f84a28eed62184%26sysparm_view%3Dcatalog_default%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default)

2. Complete the form using the template below.


#### Request Template

```yaml
Choose Application, Device Type or Service affected: Uptimize Minds

Category: Create/Change/Delete

Short Description: Access request for Uptimize Minds

Please describe your issue in more detail: 
Please add me to the `<ROLE>` group for the use case `<USE_CASE_NAME>` in Uptimize Minds for the `<ENVIRONMENT>` environment.

Thanks!!!

> **Note:** Replace `<ROLE>` with your desired role (e.g., ADMIN, STEWARD), `<USE_CASE_NAME>` with your use case, and `<ENVIRONMENT>` with the target environment (e.g., dev, qa-nreg, qa, prod).

```
---

## What Happens Next?

Once you submit the request, the Uptimize Minds Platform Team will add you to the appropriate use case group in the entitlement system. You'll receive confirmation once access is granted.

---

# Uptimize MINDS Platform - Roles & Responsibilities 

## 1. Purpose

This document defines the standard roles and responsibilities for the **Uptimize MINDS Graph Studio platform**. It aligns Merck's corporate governance expectations with **Anzo role mappings** and **Azure Entra ID group structures**, ensuring consistent onboarding, access management, and lifecycle control across all use cases and environments.

This specification provides:
- A standardized role matrix mapping **Graph Studio roles**, **MINDS-equivalent roles**, and **Azure Entra groups**
- Governance for **user provisioning** and **group synchronization** between Azure Entra and Anzo
- Guidance for **extending or customizing roles** where non-standard access is required
- A clear separation between **use case-specific roles** and **platform-level operational roles**

---

## 2. Role Framework Overview

The Uptimize MINDS platform supports multiple business use cases operating within shared Anzo environments:

- DEV
- QA-NREG
- VAL
- PROD

Each use case follows a standardized access model based on predefined roles.

### Role Categories

| Category | Description |
|-------|-------------|
| **Platform Roles** | Roles responsible for operating and maintaining shared Uptimize infrastructure (Azure, AWS, Anzo/Graph Studio, CI/CD pipelines). |
| **Use Case Roles** | Roles applied per business use case, covering data ownership, ingestion, quality, transformation, and consumption. |

---

## 3. Standard Role Matrix (Use Case Level)

| Graph Studio Role | Description | MINDS Equivalent Role | Azure Entra Group Pattern | Key Graph Studio Modules |
|------------------|-------------|-----------------------|---------------------------|--------------------------|
| Data Governor / Owner | Accountable for data quality, usage, and business impact | Data Owner (Type 1) | `MINDS-<UseCase>-Admins-<ENV>` | Graph Studio Admin, SDL, Hi-Res |
| Data Steward / Custodian | Manages operational data quality, mappings, and transformations | Business Data Steward (Type 2) | `MINDS-<UseCase>-Stewards-<ENV>` | Graph Studio Admin, SDL, Hi-Res |
| Quality Manager | Ensures compliance with governance and quality controls | Data Quality Manager | `MINDS-<UseCase>-Quality-<ENV>` | AVM, Graph Studio Admin, Hi-Res |
| Anzo Administrator | Manages ingestion, transformations, and technical configuration | Technical Data Steward (Type 4) | `MINDS-<UseCase>-Engineers-<ENV>` | Graph Studio Admin, SDL, Hi-Res |
| API Admin| Service principal group used by Semantic API; minimum scopes only. | API Administrator  | `MINDS-<UseCase>-API-<ENV>` | Semantic services, Rest API  |
| Analyst / End User | Consumes approved graphmarts and dashboards (read-only) | Data Consumer | `MINDS-<UseCase>-Analysts-<ENV>` | Graph Studio Viewer, SDL |

---

## 4. Platform-Level Roles and Responsibilities

| Platform Role | Primary Responsibilities |
|--------------|--------------------------|
| **Uptimize Minds Platform** | Provision and maintain Azure Entra groups, cloud infrastructure, pipelines, and connectivity to source systems. |
| **Data Integration Team (Uptimize / Partners)** | Deploy and operate Anzo and Graph Studio; implement ingestion pipelines, mappings, dashboards, and AI enablement. |
| **Business Use Case Owners** | Define business requirements, rules, and acceptance criteria; act as data owners and consumers. |
| **Validation & Governance Team** | Maintain GxP validation artifacts, risk assessments, SOPs, and audit readiness across environments. |

> **Note:** Platform and business responsibilities are subject to review and confirmation with the stakeholders.

---

## 5. Azure Entra Group to Anzo Role Mapping

All groups follow the Uptimize MINDS naming standards.

### Group Naming Convention

MINDS-<UseCase>-<Role>-<ENV>

**Example:**  
`MINDS-Formulation-Analysts-QA-NREG`

### Standard Mappings

| Azure Entra Group | Assigned Anzo Role(s) | Access Scope |
|------------------|----------------------|--------------|
| `MINDS-<UseCase>-Admins-<ENV>` | Graph Studio Admin | Full control across GM, DL, DS |
| `MINDS-<UseCase>-Engineers-<ENV>` | Editor / Ingestion Manager | Manage ingestion and transformations |
| `MINDS-<UseCase>-Stewards-<ENV>` | Data Steward | Controlled write access to published datasets |
| `MINDS-<UseCase>-Analysts-<ENV>` | Data Viewer | Read-only access to published graphmarts |
| `MINDS-<UseCase>-API-<ENV>` | Service Account | Semantic API access with minimal scopes |

---

## 6. User Provisioning and Group Synchronization

User and group synchronization between **Azure Entra ID** and **Anzo** is handled by a custom automation utility.

### Synchronization Behavior
- Imports Entra groups and transitive members linked to the Uptimize Entra app registration
- Creates corresponding users and groups in Anzo
- Assigns group memberships
- Pushes updates via TriG payloads to the Anzo Client HTTP servlet
- Automatically reconciles removals (idempotent)

### Planned Improvement
- Automatic Anzo role assignment during synchronization, eliminating manual UI configuration

---

## 7. Custom Role or Group Requests

While standard roles cover most use cases, exceptions may be required (e.g., AI experimentation, external partner access).

Each custom request must include:
- Business justification
- Defined scope of access
- Proposed Azure Entra group name
- Mapping to an existing Anzo role
- Governance and security approval

Custom roles must be approved **before provisioning**.

---

## 8. Relationship to Naming & Standards

All groups, datasets, graphmarts, and related artifacts must comply with the **Uptimize MINDS - Naming & Standards** specification to ensure:
- Discoverability
- Automation compatibility
- Governance traceability
- Validation readiness

---

## 9. Lifecycle and Maintenance

| Activity | Responsible Role | Notes |
|-------|------------------|-------|
| Initial use case onboarding | Platform Admin / Data Integration Team | Create Entra groups, validate SSO, initialize Anzo roles |
| Synchronization execution | Automation Utility | Idempotent, scheduled |
| Membership updates | Azure Group Owners / Use Case Leads | Managed via Entra |
| Role mapping updates | Data Integration Team + Governance | Reviewed quarterly or on major change |
| Validation audits | Governance / Quality Team | Ensure GxP and SOP compliance |

---

---

## Frequently Asked Questions: The Semantic World
 
**What is an "Ontology"?**  
Think of an Ontology as our "Corporate Dictionary" but for machines. It defines the rules and relationships of our data (e.g., "A Factory contains Production Lines"). This ensures that different systems and AI agents understand exactly what we mean when we use specific business terms.
 
**What is a "Knowledge Graph"?**  
Unlike a traditional database that stores data in rigid rows and columns, a Knowledge Graph stores data as a network of real-world concepts connected by relationships. This allows us to "surf" through data naturally, just like navigating links on the web.
 
**What is the difference between Palantir Foundry ontologies and the W3C ontologies in UPTIMIZE Minds?**  
While both systems structure data, they serve different strategic purposes.
- Semantic Reasoning (The "Brain"): Palantir Foundry uses a rigid, object-oriented model designed for operational workflows. In contrast, the W3C approach allows for inference and reasoning. This means the system can automatically deduce new relationships and logic that weren't explicitly entered (e.g., "If Ingredient A is banned in Region B, and Product C contains Ingredient A, then Product C is non-compliant in Region B").
- Portability (The "Freedom"): Palantir's ontology is proprietary to their software. Our W3C ontologies are open and vendor-agnostic. This ensures our data models remain portable and interoperable with any future tool, AI agent, or partner system, preventing vendor lock-in.

**Why are we using W3C Standards (RDF/SHACL/SPARQL)?**  
W3C standards are the global protocols of the World Wide Web. By using them, we ensure our data is interoperable (it can talk to other systems easily) and vendor-neutral (we own the data model, not a software provider).

**Who is this approach interesting for?**  
W3C Ontologies offer benefits across the organization:
- For Data Scientists & AI Engineers: It provides "AI-ready" data. Because the data carries its own context (schema and meaning), you spend less time cleaning data and more time building models or GenAI agents.
- For Solution Architects: It simplifies integration. You can decouple data from specific applications, making it easier to swap out old systems without breaking the underlying data model.
- For Strategy & M&A Teams: It enables "Standardization at Scale." You can enforce a global data language that partners and new acquisitions can map to easily, regardless of what IT systems they use.

**Do I need special training?**  
Not mandatory, but education and guidance will be available.  
 
**How can I access Altair Graph Studio?**  
Details will be shared as soon as the platform is fully implemented.  
 
**Can Minds be used together with Foundry use cases?**  
Yes, ontologies from Minds can be applied in Foundry to align with the broader Merck Data Language.

---

# Uptimize Minds - Quick Start Guide

Welcome to **Uptimize Minds**! Whether you're starting a new use case or looking to leverage Uptimize Minds for semantic layer transformation on an existing one, this guide will walk you through the onboarding process.

---

## Prerequisites

Before requesting an Uptimize Minds account, ensure you have an active use case on **Uptimize Foundry**. If you don't have one, you can create it through the [Uptimize Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc).

---

## Request an Uptimize Minds Use Case

![Uptimize-Minds-On-boarding.png](assets/uptimize-minds/Uptimize-Minds-On-boarding.png)

### Step 1: Initiate the Request

Once your Foundry use case is created and in the **Proof of Value Development** phase:
1. Navigate to your use case
2. Click **More** → Select **Request Minds Account**

> **Note:** This option is also available for existing use cases.

![Minds-Foundry-form.png](assets/uptimize-minds/Minds-Foundry-form.png)

### Step 2: Complete the Request Form

You need to fill additional information about your use case, such as:
    - **desired Use case Name**
    - **SADM Account** of the **use case admin**
    - **Data source Details**
    
![Minds-Foundry-form1.png](assets/uptimize-minds/Minds-Foundry-form1.png)


### Step 3: Track Your Request

After submission, an **Uptimize Minds Extension Object** is automatically created for your use case. You can track it [here](https://palantir.mcloud.merckgroup.com/workspace/hubble/exploration?objectTypeRid=ri.ontology.main.object-type.81b478bd-e770-4678-bdb8-b028d523ae3b).

### Step 4: Approval & Onboarding

1. Initiate a review with the **Uptimize Minds Team** for approval
2. Once approved, the **Uptimize Minds Platform Team** will begin onboarding your use case

---