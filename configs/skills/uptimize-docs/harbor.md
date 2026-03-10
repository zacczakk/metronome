<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


<img src="assets/harbor/UPTIMIZE_HARBOR_PIC.png"  style="width:700px;" />


# Welcome to UPTIMIZE harbor

UPTIMIZE Harbor is a central raw data hub that provides raw data from source systems for usage in the UPTIMIZE Platforms Foundry, Snowflake & AWS.  



## Why UPTIMIZE Harbor?


#### Two issues are blocking the flow of data

---

#### 1. Unreliable access to ERP data

- Extracting large amounts of data from the ERP is slow  
- Daily refreshes are not always possible  
- Potentially high-load on ERPs can be critical i.e. legacy ERPs  

---

#### 2. Tight coupling of storage and compute

- *Every* system that requires (ERP) data needs to ingest it separately leading to a **waste of storage and compute**  
- Many-to-many connectivity which is expensive to maintain and difficult to govern  

---

> Together, both issues considerably slow down the access to ERP data and drive consumption as well as maintenance / migration cost.  
> 
**UPTIMIZE Harbor is designed to solve both issues**


## What is it?

**UPTIMIZE Harbor is a managed raw-data landing zone built on Snowflake and the industry standard Iceberg open table format**

<img src="assets/harbor/Harbor_Birds_View_new.png" class="zoom" style="width:400px;" />

- Built-in Data Governance, monitoring, and security features  
- Automated data provisioning into target systems  
- Fully-MDAO managed ingestion from source systems  

---

**Fivetran is the data movement solution for efficiently extracting and synchronizing ERP data to UPTIMIZE Harbor**

Here's a short intro video to Fivetran:
https://www.youtube.com/watch?v=OEM0-_g6o94

- Uses highly-efficient log-based extraction for on-prem ERPs (crucial for older systems)  
- Compatible with the SAP Rise cloud for modern ERPs  

---

> **Harbor is not limited to UPTIMIZE systems.**  
> In any case, downstream systems no longer require direct ERP connections.

## Harbor USPs

#### UPTIMIZE Harbor is fully automated and has Data Governance built-in

Besides seamlessly exchanging data,  
**UPTIMIZE Harbor is also designed to ...**

---

#### ... make sharing of data auditable

- Any connection to a Harbor table is recorded, can be audited, and revoked  
- Information is available as structured dataset for analytics  

---

#### ... shop your data

- Use a modern GUI to get your data at a fingertip

---

#### ... integrate approval by Data Owners

- Data Owners are empowered to share their data with consumers  

---

#### ... minimize manual effort through an extensible engine that automates data sharing

- *Fully designed and developed in-house*


## Connected Systems

Harbor Users can find the list of all available Harbor tables [here](https://palantir.mcloud.merckgroup.com/workspace/hubble/exploration?objectTypeRid=ri.ontology.main.object-type.b44ce09d-a652-4bb9-9564-4ed71aae14be). 
The Data Central Team will add the Harbor Tables to Data Central in PI 25.4., in the meantime you can request access to the Harbor [use case](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.2612a214-96f1-4d26-9bae-f7b9425ee38f?UseCaseId=bfd4264b-374b-4456-acfb-3eef32403580&presetId=8d55009d-be15-40f2-9791-e123e753412e) with Preset 'Metadata Viewer' to get access.

The table below was last updated 31.10.2025.

<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 12px;">
  <thead>
    <tr>
      <th style="border: 1px solid #000; padding: 8px; background-color: #cce5ff; font-weight: bold;">ERP System</th>
      <th style="border: 1px solid #000; padding: 8px; background-color: #cce5ff; font-weight: bold;">DEV</th>
      <th style="border: 1px solid #000; padding: 8px; background-color: #cce5ff; font-weight: bold;">TEST</th>
      <th style="border: 1px solid #000; padding: 8px; background-color: #cce5ff; font-weight: bold;">QA/VAL</th>
      <th style="border: 1px solid #000; padding: 8px; background-color: #cce5ff; font-weight: bold;">PROD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">LEAN</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">DLA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">TLA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QLA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">PLA</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">VERSUM</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">HD1</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">HT1</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">HI1</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">HP1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;"><s>BW on Prem (moved to RISE)</s></td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;"></td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;"></td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;"></td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">NEO</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">DNE</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">TNE</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QNE</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">PNE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO EU</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">D08</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q08</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q01</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">P01</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO NA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">D08</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q08</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q80</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">P80</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO LA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">D70</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">T70</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q74</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">P70</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">QUATTRO</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QD1</td>
      <td style="border: 1px solid #000; padding: 8px;">Test is de-scoped<br>QT1 Connected but no Data Pipelines built</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QQ1</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QP1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">EMERALD</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">A95</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">D95</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q95</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">P95</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">SAP NOW NA</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">DEN</td>
      <td style="border: 1px solid #000; padding: 8px;">Test environment doesn't exist</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">STN</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">PRD</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">SAP NOW EU</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">DEU</td>
      <td style="border: 1px solid #000; padding: 8px;">Test environment doesn't exist</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">Q47</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">PRE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">SAP NEXT</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">DRP</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">QRP</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">URP</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">PRP</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">Phoenix</td>
      <td style="border: 1px solid #000; padding: 8px;">A16(Out of Scope)</td>
      <td style="border: 1px solid #000; padding: 8px; background-color: #00b050;">T16/200 First successful replication of clustered tables on 16.10.</td>
      <td style="border: 1px solid #000; padding: 8px;">I16/200 (TBD)</td>
      <td style="border: 1px solid #000; padding: 8px;">P16/200 (TBD)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">Oracle ERP</td>
      <td style="border: 1px solid #000; padding: 8px;">WIP (HVR 5 landscape buildup)</td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO EU[GxP]</td>
      <td style="border: 1px solid #000; padding: 8px;">GxP is only VAL & PROD</td>
      <td style="border: 1px solid #000; padding: 8px;">GxP is only VAL & PROD</td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO NA[GxP]</td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">TEMPO LA[GxP]</td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;"></td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
      <td style="border: 1px solid #000; padding: 8px;">TBD</td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <table style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px;">
    <tr>
      <td style="padding: 5px; background-color: #ff0000; width: 120px; border: 1px solid #000;"></td>
      <td style="padding: 5px; border: 1px solid #000;">Risk/Blocker/Delayed Timelines</td>
    </tr>
    <tr>
      <td style="padding: 5px; background-color: #ffff00; width: 120px; border: 1px solid #000;"></td>
      <td style="padding: 5px; border: 1px solid #000;">Work in Progress</td>
    </tr>
    <tr>
      <td style="padding: 5px; background-color: #00b050; width: 120px; border: 1px solid #000;"></td>
      <td style="padding: 5px; border: 1px solid #000;">Completed and Ready for Ingestion</td>
    </tr>
  </table>
</div>

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# UPTIMIZE Harbor Quick Start

Welcome to  **UPTIMIZE Harbor**! You're starting a new use case or already own one and want to use UPTIMIZE Harbor to get data ingested  and integrated from multiple sources? You're in the right place! Here we'll show you what you need to know to get started with UPTIMIZE Harbor.

## The Harbor User Journey

<img src="assets/harbor/Harbor_A_Z_processes.png" alt="Harbor User Journey" class="zoom" style="width:700px;" />





## Processes from A to Z - Overview

### I want to know more about UPTIMIZE Harbor
| **Action**                                                                                 |
|-------------------------------------------------------------------------------------------|
| - **Make yourself familiar with UPTIMIZE Harbor docs**                                   |
| - **For sector specific questions, contact your SDO-C** <br> Please refer to [Harbor RACI](https://docs.uptimize.merckgroup.com/harbor/roles-responsibilities/)                                   |
| - **Contact the UPTIMIZE Harbor PO for all other topics** <br> Please refer to [Harbor Product Management](https://docs.uptimize.merckgroup.com/harbor/roles-responsibilities/product-team/)                                 |

### I want to use data from UPTIMIZE Harbor
| **Action**                                                                                 |
|-------------------------------------------------------------------------------------------|
| - **Identify your SDO-S via SDO -C** <br> Please refer to [Harbor RACI](https://docs.uptimize.merckgroup.com/harbor/roles-responsibilities/) |  
| - **Create DIR based on Use Case** <br> Please refer to [DIR-DER](https://docs.uptimize.merckgroup.com/foundry/foundry-data/data-ingestion-enhancement/DIR-DER/) <br> Please refer to [UPTIMIZE Use Case Portal](https://docs.uptimize.merckgroup.com/foundry/use-case-portal/) <br> OR <br> - **DER based on DTI** <br> Please refer to [DIR-DER](https://docs.uptimize.merckgroup.com/foundry/foundry-data/data-ingestion-enhancement/DIR-DER/) |
| - **Create UPTIMIZE Harbor Request based on approved DIR/DER** <br> - **Access limited to SDO-S** |                                              

### I want to get a source connected to UPTIMIZE Harbor
| **Action**                                                                                 |
|-------------------------------------------------------------------------------------------|
| - **Check connected sources via UPTIMIZE Harbor docs**                                   |
| - **Guided by SDO-S** |
| - **Align demand with your SDO-C** <br> - **Get feedback from UPTIMIZE Harbor PO after Product Management alignment on priority and roadmap** <br> Please refer to [Harbor Roadmap](https://docs.uptimize.merckgroup.com/harbor/product_management/roadmaps/) |


---

**Legend**:  
- DIR = Data Ingestion Request  
- DER = Data Enhancement Request  
- DTI = Data Treasury Item  
- PO = Product Owner  
- SDO-C = Sector Data Office Champion  
- SDO-S = Sector Data Steward

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Uptimize Harbor Capabilties and Services

## Data Ingestion

Data ingestion is the process of collecting and importing data from various sources into a data storage system. At Uptimize, we offer comprehensive services to streamline this process:

- **Seamless Integration with Fivetran**: Connect your recommended source system to the Uptimize ecosystem using our state-of-the-art ELT tool, [Fivetran](https://www.fivetran.com/).
- **Pipeline Establishment**: We establish a robust pipeline to UPTIMIZE Harbor, ensuring efficient data flow.
- **Continuous Improvement**: Our team is dedicated to continuously improving and maintaining your pipelines for a seamless user experience.
- **Governed Workflows**: We facilitate the feeding of your data requirements through governed workflows, ensuring accuracy and compliance.

## Data Integration

Data integration involves combining data from different sources to provide a unified view, focusing on sharing, transforming, cleaning, and enriching the ingested data for consistency and accuracy. Our services in this area include:

- **Automation Development**: We develop and maintain automations to deliver your data from UPTIMIZE Harbor to all Uptimize platforms, including AWS, Palantir Foundry, and Snowflake.
- **Cross-Sector Collaboration**: We enable sectors to share data across use cases, facilitating further integration activities such as transforming and cleaning data.
- **Vision for a Data Marketplace**: Our approach includes implementing governed workflows towards realizing a vision of a data marketplace, enhancing data accessibility and usability.

## GxP Compliance

Good Automated Manufacturing Practice (GxP) in IT focuses on implementing robust systems that support compliance, data integrity, and quality assurance in manufacturing processes. Our services in GxP include:

- **Infrastructure Qualification**: We ensure that all existing and upcoming infrastructure components are qualified by 2026.
- **Validation Framework**: We establish a platform-based validation framework to uphold the highest standards of data handling and regulatory compliance.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>



SAP - not supported objects
==============

This page outlines specific object types within SAP ERP on HANA systems that Fivetran' s standard connector does not replicate. Understanding these exclusions is crucial for planning your data replication strategy and ensuring all required data is available in your data warehouse.

Fivetran' s SAP ERP on HANA connector primarily focuses on replicating standard, application-level data structures (tables and views) defined within SAP's ABAP Data Dictionary (DDIC). Certain object types are excluded due to their nature, purpose, or how they are defined within SAP.

- Database-Level System Tables
- Tables and Views Not Present in the SAP Data Dictionary (DDIC)
- Temporary Tables
- SAP Functions
- Projection Views
- Compatibility Views
- HANA CDS views (not ABAP)

 
Here's a breakdown of the excluded objects as per Fivetran documentation and our clarification.

## Compatibility Views
These are database views maintained by SAP in newer releases to ensure backward compatibility with applications, reports, or custom code developed for older SAP versions. They often mirror older data structures or provide access paths that are familiar from previous releases. Their replicability depends on their complexity. Simpler compatibility views that do not require any input parameters can often be replicated by Fivetran like standard views, as they present a complete dataset. Compatibility views that are "parameterized" (meaning they require specific input values to return data) are generally not replicable by Fivetran' s standard mechanism. Fivetran would not know which parameter values to provide to extract the full data set.

Recommendation From Fivetran
To replicate compatibility views, Fivetran recommended us to replicate the underlying table directly from the source and create views in the target. Fivetran can share the script with us 
to create views in the snowflake.

Example of a Parameterized Compatibility View: Imagine an older view OLD_CUSTOMER_BALANCE that now, in a newer SAP version, conceptually requires a Company Code parameter to work correctly due to underlying 
data model changes. If Fivetran tried to replicate OLD_CUSTOMER_BALANCE without providing a Company Code (e.g., '1000', '2000'), the view would not return a complete or meaningful dataset.

### Latest News
We are in collaboration (09/25) with Fivetran to reengineer compatibility views and provide the code to sectors for further usage

## Database-Level System Tables
These are internal tables and views used by the underlying SAP HANA database itself, not directly by the SAP application. They manage database operations, performance, and metadata. SAP's application layer does not typically see or manage these tables. They are internal to the database's functioning and are not considered application data relevant for standard replication. As Fivetran' s connector interacts via SAP's layer, therefore it cannot see these Database level system tables, that's why these comes under Fivetran Excluded Objects.

Example: Tables related to HANA's own monitoring e.g., M_CONNECTIONS, M_SERVICE_STATISTICS or internal catalog views. These are separate from SAP application tables like MARA (General Material Data).

## Tables and Views Not Present in the SAP Data Dictionary (DDIC)
SAP maintains a central registry called the ABAP Data Dictionary (DDIC) that defines all official tables, views, data elements, and other data structures used by SAP applications. Any table or view created directly in the SAP HANA database using native SQL (bypassing SAP's ABAP tools) will not be registered in this dictionary. Fivetran' s connector primarily communicates with the SAP system through its ABAP layer, which relies on the DDIC to discover and understand available data objects. If an object isn't in the DDIC, Fivetran cannot find or replicate it.

Example: If a developer manually connects to the HANA database and creates a table MY_CUSTOM_LOGS using a CREATE TABLE statement, and this table isn't subsequently defined in the SAP ABAP DDIC, Fivetran will not be able to replicate MY_CUSTOM_LOGS.

## Temporary Tables
These are temporary tables created by SAP during specific operations like system migrations, upgrades, patching, or certain batch processes. They are designed for short-term data handling and are typically dropped once the operation completes. Temporary tables are not permanently defined in the ABAP Data Dictionary as core application data. Their temporary nature and specific, short-lived purpose make them unsuitable for continuous data replication to a data warehouse, which focuses on persistent, meaningful datasets.

Example: During a large data migration, SAP might create a temporary table like MIGR_TEMP_DATA to stage records before they are committed to the final production tables. This table would exist only for the duration of the migration process.

## SAP Functions
SAP functions (e.g., ABAP Function Modules, BAPIs) are blocks of executable code or programs that perform specific operations, often involving data manipulation, calculations, or complex business logic. While they might expose or process data, they are not static data structures themselves. Fivetran' s core role is to extract static, structured data from tables and views, not to execute or replicate program code. Replicating a function would mean copying the program logic, not the data it produces. The output of functions can also be dynamic, depending on inputs and system state.

Example: A function module BAPI_MATERIAL_GETDETAIL retrieves material information. Fivetran will replicate the MARA (Material Master) table where the data resides, but not the function BAPI_MATERIAL_GETDETAIL itself, as it's a piece of code that acts on data, not the data itself.

## Projection Views
A projection view is a type of database view defined in the SAP ABAP Data Dictionary. It acts as a filter that exposes only a subset of columns from one underlying table or another view. It essentially provides a simplified, focused view of the data. Due to their complex logic structure, multiple joins Fivetran cannot replicate them.

Example: If a base table MARA has 100 columns, a projection view Z_PROJ_MAT_BASIC might be created to show only MATNR (Material Number) and MAKTX (Material Description).



## HANA CDS views (not ABAP)
These views refers to those created directly in the HANA database without being associated with the SAP ABAP Data Dictionary. Similar to tables/views not in the DDIC, if a CDS view is created purely at the HANA database level without a corresponding definition or reference within the SAP ABAP Data Dictionary, the Fivetran connector which operates through the ABAP layer cannot discover or access it for replication.

Recommendation from Fivetran 
To replicate CDS views present in ABAP dictionary, Fivetran suggested us to sync the underlying table, and create views in the target with the help of DBT package. 
Fivetran can share the DBT package with us to create views in the target.

## We have identified unsupported views from our source systems which cannot be ingested currently. The list is as below (as of 09/25):
- DD03M
- BSIS
- COEP
- USER_ADDR
- KNC1
- MBEW
- MKPF
- MARD
- ANEP
- MSEG
- MCHBH
- ANLC
- BSAK
- ANLP
- MSPR
- BSID
- ANEK
- T093C
- BSAD
- MCHB
- COSS
- BSAS
- ANEA
- CAUFV
- LFC1
- MARC
- BSIK
- T012K

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>



## Product Management

The UPTIMIZE Harbor is an offering which has the purpose to ingest and integrate data from multiple source systems make it available for use cases.
We are following agile principles for development and maintenance aligned with UPTIMIZE standards.
  
## Deployment
We are following the SAFE Agile Framework. https://docs.uptimize.merckgroup.com/pom/product-delivery/
We are deploying new features continuously and in collaboration with our stakeholders.

## New Features
New features are getting aligned with our staheholders and integrated in our Planning Iteration. (PI)
As of now  (09.25) a planning iteration has a duration of 12 weeks and we'll have round about 4 PIs per year.
All PI information can be found in Uptimize docs and are aligned with key stakeholders upfront.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>



## Roadmaps
In addition to the (P)lanning (I)teration (PI) details UPTIMIZE Harbor publishes  information on roadmaps for source connections and milestones.
Here you will find information clustered by PI.

Informations on actual (e.g. timeline) and past PIs can be found here:
[UPTIMIZE WIKI](https://dev.azure.com/Uptimize/Uptimize%20Agile%20Release%20Train/_wiki/wikis/Uptimize-Agile-Release-Train.wiki/3/UPTIMIZE)

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


Find all information about roadmaps, planned source connections and features of the respective PI on the following pages

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

## 25.4 PI Objectives

<img src="assets/harbor/25_4_PI_Objectives.png" alt="25_4_PI_Objectives" class="zoom" style="width:700px;" />


## 25.4 Milestones

<img src="assets//harbor/25_4_Milestones.png" alt="25_4_Milestones" class="zoom" style="width:700px;" />


## 25.4 Extended Features

<img src="assets/harbor/25_4_Extended_Features.png" alt="25_4_Extended_Features" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


Connection Roadmap PI 25.4
---------------


<img src="assets//harbor/25_4_Connection_Roadmap.png" alt="25_4 Connection Roadmap" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


Find all information about roadmaps, planned source connections and features of the respective PI on the following pages

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

## 25.3 PI Objectives

<img src="assets/harbor/25_3_PI_Objectives.png" alt="25_3_PI_Objectives" class="zoom" style="width:700px;" />


## 25.3 Milestones

<img src="assets//harbor/25_3_Milestones.png" alt="25_3_Milestones" class="zoom" style="width:700px;" />


## 25.3 Extended Features

<img src="assets/harbor/25_3_Extended_Features.png" alt="25_3_Extended_Features" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


Connection Roadmap PI 25.3
---------------


<img src="assets//harbor/Connection_Roadmap_25_3.png" alt="25_3 Connection Roadmap" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# Architecture

**UPTIMIZE Harbor** is Merck's central port of entry for data pipelines to be
ingested into a centralized and shared UPTIMIZE data repository. 

<img src="assets/harbor/Architecture_Harbor_High_Level.png" alt="Architecture_Harbor_High_Level" class="zoom" style="width:700px;" />

**As of 09/25 AWS Harbor is put into backlog and we are using Snowflake to store raw data. Stay tuned for the AWS harbor go-live**

## How does it work?

### Supported sources
Our main focus is supporting **SAP** ERP related data pipelines.
By end of 2025 we will start integrating first **NON-SAP** pipelines.

### GxP
Harbor will be able to host both GxP (long term strategy) and non-GxP data (active). 

### Dataflow
Data is ingested as a true copy, (i.e. as an exact mirror image of the original source data with the caveat that Harbor stores data in the Apache Iceberg data format). 
Source and target data structures may differ to the extent that this is due to
the difference in data format.


**UPTIMIZE Harbor** is the immediate target location for data ingestion
via Fivetran our tool of choice for **ELT** (Extract|Load|Transform). Harbor receives raw data as a like-for-like copy prior to the application of any use case-specific transformations, which may occur further downstream. The data is pushed into Harbor in accordance with ALCOA+ principles via one of potentially two Fivetran processes:

1.  Fivetran HVR pushes log-based data from externally managed OnPrem
    systems.

2.  Fivetran SaaS extracts and loads data from SaaS systems.

AWS Harbor is configured to accept Fivetran SaaS data. The connection
between the source systems and Harbor is monodirectional. Harbor / Fivetran
does **not have write access to source systems**. 

### Data Storage
**No data is stored in Fivetran.**
Fivetran only acts as an extraction mechanism that loads data into
Harbor without storing it internally. 

### Landing Zone
Fivetran pushes source data into a **"Landing Zone" in Harbor** controlled by a **MDAO managed Harbor Factory Account** . The Landing Zone will host separate schemas for each source system. 

### Data Links
**Harbor data is exposed to downstream systems via data links.**
Those links are enabled by means of AWS 'Lambda execution
engines' utilizing AWS Glue Catalog and AWS Lake Formation. However, the
data will reside in Harbor. The execution engines do not physically copy
any data.


### Our Promise!
Harbor is **designed to simplify the data ingestion** process both from a
downstream as well as an upstream point of view. The system intended to
minimize the number of pipelines required to connect source with target
systems. Ideally, any table should be extracted into Harbor from a
source only via one single connection.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Data Ingestion
Our team ingests data from sources using both Fivetran SaaS and Fivetran HVR as ingestion tools. 

[Fivetran: What is it?](https://youtu.be/TT85JYrCtIw)

Specifically, data orchestrated by Fivetran HVR is landed into Snowflake, data loaded via Fivetran SaaS is landed within AWS.
In all cases data is ingested into a MDAO managed landing zone and account.

| **Data Refresh**            | **Frequency**                       |
|-----------------------------|-------------------------------------|
| **Delta Loads**             |                                     |
| OnPrem data                 | Every 15 minutes                    |
| SaaS data                   | Every 3 hours                       |
| **Full Loads - New Tables** |                                     |
| In alignment with source teams (e.g. SAP basis) | Big tables only on weekends |
| **New Sources**             | To be aligned with product owner    |

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Fivetran HVR Microarchitecture
<img src="assets/harbor/MicroArchitectureFivetranHVR.png" alt="MicroArchitectureFivetranHVR" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Fivetran SaaS Microarchitecture
<img src="assets/harbor/MicroArchitectureFivetranSaaS.png" alt="MicroArchitectureFivetranHVR" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Data Integration
Our execution engine is fully **automated** and takes care off all kinds of **data integration**!
In all cases raw data does not get materialized in your use case or sector account within the UPTIMIZE platforms.
The different target platforms are using different objects to point to our harbor data. (e.g. Shares in Snowflake)
The following sections are explaining the details.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# UPTIMIZE AWS Harbor - Micro Architecture
**As of 09/25 AWS Harbor is put into backlog and we are using Snowflake to store raw data. Stay tuned for the AWS harbor go-live**
<img src="assets/harbor/MicroArchitectureAWSHarbor.png" alt="MicroArchitectureAWSHarbor" class="zoom" style="width:700px;" />
Iceberg tables landed in AWS are stored in an S3 bucket. For each table, the data is stored in data and metadata files. 
To provide access to the table in a simple and structured way, the table information from the metadata is provided as a table in the Glue Data Catalog. 
This means, in theory, you can query tables just by using the Glue Catalog, for example, using SQL statements in Athena or Apache Spark, and AWS will take care of reading the proper data out of the files.
As the Harbor AWS account is just the landing zone from where data will be distributed to several downstream systems, there is a need for a structured way of granting access and keeping track of the created grants on the Glue tables. 
Therefore, Lake Formation is utilized as a central service to grant and, if needed, supervise access. 
For providing tables to other AWS accounts, Lake Formation is used solely. 
For other downstream systems, additional steps are needed as these downstream systems use other ways to access AWS.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# UPTIMIZE AWS Harbor - Micro Architecture
**As of 09/25 AWS Harbor is put into backlog and we are using Snowflake to store raw data. Stay tuned for the AWS harbor go-live**
<img src="assets/harbor/Harbor_AWS_to_Snowflake.png" alt="Harbor_AWS_to_Snowflake" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# UPTIMIZE AWS Harbor - Micro Architecture
**As of 09/25 AWS Harbor is put into backlog and we are using Snowflake to store raw data. Stay tuned for the AWS harbor go-live**
<img src="assets/harbor/Harbor_AWS_to_Foundry.png" alt="Harbor_AWS_to_Foundry" class="zoom" style="width:700px;" />
Access to the Iceberg Glue table is controlled through AWS Lake Formation in combination with IAM policies.
The source uses OIDC-based credentials, meaning it assumes an AWS IAM role after authenticating via the Foundry Identity Provider. 
Below is the trust relationship for the role that the source assumes:
## Trust Relationship
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::{account_id}:oidc-provider/pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry:aud": "sts.amazonaws.com"
                },
                "ForAllValues:StringLike": {
                    "pltroidcpublic3e8c36fc.s3.eu-central-1.amazonaws.com/foundry:sub": "<source-rid>"
                }
            }
        }
    ]
}
## IAM Policies 
attached to the role
S3 Policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowlistObject",
            "Effect": "Allow",
            "Action": ["s3:ListBucket"],
            "Resource": "arn:aws:s3:::uptimize-harbor-<environment>-<qualification>",
            "Condition": {
                "ForAllValues:StringLike": {
                    "s3:prefix": ["*/<database_name>/<table_name>/*"]
                }
            }
        },
        {
            "Sid": "AllowGetObject",
            "Effect": "Allow",
            "Action": ["s3:GetObject", "s3:GetObjectVersion"],
            "Resource": [
                "arn:aws:s3:::uptimize-harbor-<environment>-<gxp>/erp/<environment>/<database_name>/<table_name>/*"
            ]
        }
    ]
}
## Glue Policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllConnectors",
            "Effect": "Allow",
            "Action": [
                "glue:GetDatabase",
                "glue:GetTable",
                "glue:GetTables"
            ],
            "Resource": [
                "arn:aws:glue:eu-central-1:<account_id>:catalog",
                "arn:aws:glue:eu-central-1:<account_id>:database/*",
                "arn:aws:glue:eu-central-1:<account_id>:table/*/*"
            ]
        }
    ]
}
## Note
Access to the Glue Catalog is enforced exclusively via Lake Formation, with only the following permissions granted to the external AWS account:
Database: DESCRIBE access
Table: SELECT access
The virtual tables would be created out of this source, which would be consumed by the end users.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# UPTIMIZE Snowflake Harbor - Micro Architecture
<img src="assets/harbor/MicroArchitectureSnowflakeHarbor.png" alt="MicroArchitectureSnowflakeHarbor" class="zoom" style="width:700px;" />
Our micro architecture provides a structured approach to data governance in the MDAO Harbor Snowflake environment, focusing on integrity, security, and efficient management of data resources.
We are managing our Snowflake architecture with following components:
## 1. Management of Snowflake Shares:
Objective: Establish standardized naming conventions for database schemas and shares to ensure consistency and traceability.
Monitoring: Implement continuous performance monitoring and uptime assessments to maintain high availability and reliability of data services.
## 2. Database and Schemas Management:
Structure: Databases are categorized based on ownership:
Dedicated Databases: For data exclusively owned by a single sector.
Clustered Databases: For shared (global) data across multiple sectors.
Access Control: Enforce strict access controls to ensure appropriate data availability and security.
## 3. Share Management:
Creation and Administration: Data shares are linked to specific databases, configured to grant permissions at the schema level.
Dynamic Permissions: Use of stored procedures to automatically update access controls when new tables are added, ensuring compliance with governance standards.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Integration to Foundry
<img src="assets/harbor/Harbor_Snowflake_to_Foundry.png" alt="Harbor_Snowflake_to_Foundry" class="zoom" style="width:700px;" />
## Folder Structure Of The Provisioned Resources:
Source:
<Output Port Folder>/<sector_short>-<source-type>-<source-system-name>
example: global-snowflake-tempo-la-p70
Virtual Table:
<Output Port Folder>/<system_identifier.tables>
example: P70.A018

## Fast Snowflake Ingestion
There has been a library created, which utilizes Snowflake (Snowpark) compute power to prepare the data as files, which then are being sent to a Foundry Output Dataset directly. It leverages Snowpark API in the Foundry ecosystem, which lets the user to prepare a transformation logic within a code repository, which is lazily evaluated on Snowflake. Once Snowflake retrives complete transformation logic, it stages the data as files (parquet by default), which then are exported to a Foundry Output Dataset object. The whole process uses `@lightweight` transformation and minimal resources, to sync the prepared files over to Foundry. It can be used both with a shared or a non-shared Snowflake database via Foundry Vritual Table objects with an access to those Snowflake accounts.
The `fast-snowflake-ingestion` library should be used whenever the goal is to get Snowflake data to Foundry as a snapshot, as this approach makes the process time- and money-efficient. The observed improvement reaches as high as 75%.
Within the code repository linked below, there is a `README` file, which explains how to set it up in a Code Repository.
The library can be found on UPTIMIZE under the links below:
- [code repository](https://palantir.mcloud.merckgroup.com/workspace/code/repos/ri.stemma.main.repository.a0c37be3-9c1d-40f9-ad16-8fa8560c78d2/contents/refs%2Fheads%2Fmaster/README.md)
- [artifact](https://palantir.mcloud.merckgroup.com/workspace/artifacts/ri.stemma.main.repository.a0c37be3-9c1d-40f9-ad16-8fa8560c78d2/search?selected=CONDA%7E%7Efast-snowflake-ingestion&layout=conda)

## Foundry Virtual Tables
Foundry Virtual Tables are a feature in Palantir Foundry that allows users to create a virtual representation of Snowflake data within Foundry. This allows users to perform data operations and analytics in Foundry without needing to move data out of Snowflake. The virtual tables act as a bridge, providing real-time access to Snowflake data while maintaining data security and integrity. It also relies on Snowflake's compute.

For more information, please visit the UPTIMIZE documentation [here](https://docs.uptimize.merckgroup.com/snowflake/data-consumption/foundry-virtual-tables/).

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Integration to Snowflake
<img src="assets/harbor/Harbor_Snowflake_to_Snowflake.png" alt="Harbor_Snowflake_to_Snowflake" class="zoom" style="width:700px;" />
The connection between the Snowflake HVR account and a downstream (sector) account is set up as follows:
## In the Snowflake HVR Account (Data Provider)
First, a share is created by the execution engine, specifically designated for the consumer account that will receive the data. 
Once the share is established, access to the desired tables (schema, and database) is explicitly granted on this share. 
This step ensures the data becomes available for the consumer.
## In the Snowflake Consumer Account (Data Recipient)
After the share is created and access is granted on the provider side, the execution engine automatically creates a database from this share within the consumer account. 
This effectively "consumes" the shared data, making it accessible within the targeted Snowflake account. 
Note that a share can only be consumed by one database.
## Adding More Data to an Existing Share
A significant advantage of this sharing mechanism is its dynamic nature. 
Should the data provider need to make additional tables available to the consumer, the execution engine simply grants access to these new tables on the existing share within the HVR account. 
These newly added tables will become immediately available for the consumer to query within the already established shared database, without any further action required on the consumer's side.
## How the Execution Engine Creates Shares
The execution engine is designed to create shares with a specific granularity: it will always establish one unique share for each distinct combination of a consumer account and a database schema. 
For instance, if the consumer account HEALTHCARE needs to access the table EKKO from the schema TEMPO_P01, a dedicated share will be created for the combination of HEALTHCARE and TEMPO_P01. 
Subsequently, if the same HEALTHCARE account requires access to the table LFA1 from the same TEMPO_P01 schema, access to LFA1 will simply be granted on the already existing share. No new share will be generated. 
However, if HEALTHCARE then requests access to table EKKO from a different schema, such as EMERALD_P95, a new and separate share will be created for the HEALTHCARE and EMERALD_P95 combination.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Processes Overview
The following pages include high level information about UPTIMIZE Harbor Processes.

## BPMN is our notation
We are using BPMN to describe our processes.
**Business Process Model and Notation (BPMN)** is a standardized method used to visually represent business processes. It provides a clear and easy-to-understand way to map out how work gets done in an organization. BPMN uses specific symbols and diagrams to show the steps in a process, the flow of information, and the roles involved. This helps everyone in the organization understand how processes work, identify areas for improvement, and ensure that everyone is on the same page.

For a simple introduction to BPMN, you can watch this easy-to-follow video: [What is BPMN?](https://youtu.be/I9xOrRT6oXY).

## Top Level Processes

We have designed a top level process, which describes mandatory activities from a birds eyes perspective.


#### BPMN Diagram
This is showing the top level process in total.
<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/user-docs-process-top-level.png" class="zoom" style="width:700px;" />

It can be splitted in the following two sub-processes. 

These ones will be detailled in the sub-chapters.



### Process for Data Provisioning

<img src="assets/harbor/harbor_process_data_provisioning.png" class="zoom" style="width:700px;" />



1.  A harbor request requires a DIR that is in "Approved to Ingest"
    status.
2.  The Sector Data Steward will either know what is available in
    Harbor, or use the Harbor Request itself to check availability of
    data.
3.  Data can be provisioned and the DIR process finalized.

###  Process for additional table ordering

<img src="assets/harbor/harbor_process_additional_table.png" class="zoom" style="width:700px;" />

1.  If data is missing in Harbor, an IT4U Request must be initiated
    request is required.
2.  If data is available, the Harbor process for Data Provisiong can proceed
3.  Data can be provisioned and the DIR process finalized.


#### Procedure for Top Level Process
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 51%" />
<col style="width: 14%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>
<p>Details</p>
</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Initiate DIR</strong></td>
<td>
<p>This is the initial step of the Harbor Request process.  The Harbor
Request can only proceed if the DIR is in a status of "<strong>Approved
to Ingest</strong>".  See the sub-process for greater details.</p>
<p>This sub-process can be initiated by anyone but the core of the
verification and sending for approvals belongs with the Sector Data
Officers.</p>
</td>
<td>Need for data</td>
<td>DIR in stage "Approved to Ingest"</td>
</tr>
<tr>
<td><strong>Check data availability in harbor</strong></td>
<td>This is a manual step - especially during the early roll out of the
Harbor - to verify if the ERP system and associated tables already exist
in the Data Harbor.  The simplest method to verify is to open the Harbor
Request GUI and use the 'Create New Request' UI and verify if the ERP
systems is available, and if so, are the tables you require listed on
selecting the ERP system.  Close out/Cancel out of the GUI when
done.  </td>
<td>DIR in stage "Approved to Ingest"</td>
<td>Verification of data availability</td>
</tr>
<tr>
<td><strong>Request New ERP Data</strong></td>
<td>
<p>This is the sub-process when the ERP data you require is not in the
Harbor Request GUI controls.  The SDO Data Steward is responsible for
submission via the IT4U ServiceNow system.</p>
</td>
<td>SAP system or tables not availability</td>
<td>IT4U Harbor Request</td>
</tr>
<tr>
<td><strong>Process ERP Request</strong></td>
<td>
<p>This is a sub-process for the Harbor Request/Fivetran team.  This
group will take action based on whether the ERP is missing, or it is
merely a missing table.</p>
</td>
<td>IT4U Harbor Request</td>
<td>Data available and complete IT4U request</td>
</tr>
<tr>
<td><strong>Review IT4U Request details</strong></td>
<td>
<p>Once the IT4U ticket is resolved, the initiating SDO Data Steward
must looks through the comments on the Request and decide if they can
proceed, the request cannot be fulfilled, or more time is required until
the data is available.  In the case of more time required may be to
avoid large data loads during weekdays, etc.  At this point the Sector
Data Steward should wait until the initial data is loaded prior to
proceeding</p>
</td>
<td>Completed IT4U Request</td>
<td>Decision to proceed or cancel</td>
</tr>
<tr>
<td><strong>Notify Use Case Owner</strong></td>
<td>
<p>In the event that the Harbor Request cannot proceed, the SDO Data
Steward must notify the requester with the reasons.  Should more
information be required from the Fivetran/Harbor team email/teams chat
should be used quoting the RITM number of the original Request.  Do not
re-open the request</p>
</td>
<td>Decision to cancel</td>
<td>Cancelled DIR</td>
</tr>
<tr>
<td><strong>Harbor request process</strong></td>
<td>
<p>Once the SDO Person has confirmed - or raised the appropriate request
and can proceed - the SDO Data Steward can use the UPTIMIZE Harbor
Request Portal to initiate this sub-process.</p>
<p><strong>Note: the SDO Data Steward must ensure that the data
requested reflects only the data approved by the Business Owner in the
DIR.</strong></p>
</td>
<td>Verification of data availability</td>
<td>Approved Harbor Request</td>
</tr>
<tr>
<td><strong>Provision data</strong></td>
<td>
<p>This is the sub-process where upon approval of the Harbor Request the
'automation' takes over to provision the data.</p>
</td>
<td>Approved Harbor Request</td>
<td>Provisioned data or Failure message</td>
</tr>
<tr>
<td><strong>Complete DIR Process</strong></td>
<td>
<p>This is the sub-process after the data have been provisioned. 
Currently, this usually applies only to Foundry data.</p>
</td>
<td>Provisioned data</td>
<td>Data verified</td>
</tr>
</tbody>
</table>

#### RACI Chart for Top Level Process
<table style="width:100%;">
<colgroup>
<col style="width: 49%" />
<col style="width: 11%" />
<col style="width: 12%" />
<col style="width: 13%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">Tasks</th>
<th style="text-align: center;">Requester</th>
<th style="text-align: center;">SDO DS</th>
<th style="text-align: center;">Harbor Team</th>
<th style="text-align: center;">Fivetran Team</th>
</tr>
</thead>
<tbody>
<tr>
<td>Initiate DIR</td>
<td style="text-align: center;">R</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Check data availability in Harbor</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">I</td>
</tr>
<tr>
<td>Request New ERP Data</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Process ERP Request</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
</tr>
<tr>
<td>Review Response</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">C</td>
</tr>
<tr>
<td>Notify Use Case Owner</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Create Harbor Request</td>
<td style="text-align: center;">A</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Provision Data</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A</td>
</tr>
<tr>
<td>Complete DIR Process</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

---

<!-- 'Zooming of images' -->
<style>
.zoom {
  transition: transform 0.2s; /* Animation */
}
.zoom:hover {
  transform: scale(1.5) translateX(120px); /* Zoom-Faktor und Verschiebung nach rechts */
}
</style>

# Process for Data Provisioning

## Top Level Process

This main or normal process that should be applicable for most cases. Take into consideration, that mostly Sector Data Stewards have to be involved.

The following picture describes the flow of process steps.

<img src="assets/harbor/harbor_process_data_provisioning.png" class="zoom" style="width:700px;" />

## Initiate Data Ingestion Request (DIR)
### BPMN Diagram
<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/user-docs-process-dir.png" class="zoom" style="width:700px;" />

### Key Points
The Initiate DIR process involves several key steps for submitting and assessing Data Ingestion Requests (DIR) within Merck's data management framework. It starts with the requester completing the DIR form, which is then assessed by the Sector Data Steward. If the request is deemed appropriate, it is sent for approval to the Business Owner.
The Business Owner reviews the request and decides to either approve or reject it. If approved, the DIR status is updated to "Approved to Ingest." If rejected, the request is canceled. Throughout this process, automation within the system helps manage the status updates and notifications, ensuring a streamlined workflow for data requests.

### Procedure
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 51%" />
<col style="width: 14%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>
<p>Details</p>
</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Complete DIR Form and Submit</strong></td>
<td>This is the first step in the data request process. It begins with
the requester - optionally working with the SDO Data Steward -
submitting the DIR form within Foundry.</td>
<td>Need for Data</td>
<td>DIR Requested</td>
</tr>
<tr>
<td><strong>DIR Start Assessment</strong></td>
<td>
<p>Automation within Foundry to set the DIR status to "Start Assessment"
and notify the appropriate Data Stewards.</p>
</td>
<td>Requested DIR</td>
<td>DIR in Assessment</td>
</tr>
<tr>
<td><strong>Assess DIR</strong></td>
<td>
<p>This is the sub-process where the Sector Data Steward assesses the
DIR resulting in either proceeding to next stage or cancelling the
DIR.</p>
</td>
<td>DIR in Assessment</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Close DIR</strong></td>
<td>
<p>The SDO Data Steward can decide to reject the DIR if the data request
is not appropriate for the Use Case - this leads to the DIR being
closed.</p>
</td>
<td>DIR in Assessment</td>
<td>DIR Closed</td>
</tr>
<tr>
<td><strong>Set DIR to Pending Approval</strong></td>
<td>
<p>If the DIR assessment is complete and all relevant data are provided
and correct, then the Data Steward sends the data to request approval by
the Business Owner identified in the DIR. Automation takes care of
setting the DIR status and notifying the Business Owner.</p>
</td>
<td>DIR in Assessment</td>
<td>DIR in Pending Approval</td>
</tr>
<tr>
<td><strong>Review DIR Request</strong></td>
<td>
<p>The Business Owner reviews the DIR request and makes the decision to
approve or reject. Rejection results in the DIR being cancelled or put
on hold.</p>
</td>
<td>DIR in Pending Approval</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Cancel DIR</strong></td>
<td>
<p>Cancel DIR if approval cannot be granted</p>
</td>
<td>DIR in Pending Approval</td>
<td>DIR Cancelled</td>
</tr>
<tr>
<td><strong>Set Approved For Ingestion</strong></td>
<td>
<p>On approval of the DIR by the Business Owner, the DIR is
automatically set to "Approved to Ingest" and the Sector Data Steward is
notified.</p>
</td>
<td>DIR in Pending Approval</td>
<td>DIR in Approved to Ingest</td>
</tr>
</tbody>
</table>

### RACI Chart
<table>
<colgroup>
<col style="width: 54%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">Tasks</th>
<th style="text-align: center;">Requester</th>
<th style="text-align: center;">SDO DS</th>
<th style="text-align: center;">Business Owner</th>
</tr>
</thead>
<tbody>
<tr>
<td>Complete DIR Form and Submit</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;">C (R)</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Assess DIR</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Close DIR</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Set DIR to Pending Approval</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">A/R</td>
<td style="text-align: center;">C</td>
</tr>
<tr>
<td>Review DIR Request</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
</tr>
<tr>
<td>Cancel DIR</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
</tr>
<tr>
<td>Set Approved for Ingestion</td>
<td style="text-align: center;">I</td>
<td style="text-align: center;">C</td>
<td style="text-align: center;">A/R</td>
</tr>
</tbody>
</table>

## Process New Harbor Request
### BPMN Diagram
<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/user-docs-process-new-request.png" class="zoom" style="width:700px;" />

### Key Points
This process involves initiating a request by the Sector Data Steward in the Harbor Request Portal, where they enter a title and select an approved DIR. They then choose the relevant ERP system and tables from a dropdown list, ensuring that the selected tables match those approved in the DIR. After confirming all details, the request is submitted, triggering notifications and setting the process in motion. The request goes through an approval process for completeness and compliance, and upon approval, the necessary actions are taken to provision the requested data. This process ensures efficient data requests while adhering to Merck's compliance standards.

### Procedure
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 51%" />
<col style="width: 14%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>Details</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Select "Create New Request" in the Harbor Request Portal</strong></td>
<td>Select the Create New Request to open the request form.</td>
<td>N/A</td>
<td>New Request Form</td>
</tr>
<tr>
<td><strong>Enter Suitable title and select the relevant DIR</strong></td>
<td><p>You must select the previously created DIR and it must be in the
"Approved to Ingest" status.</p>
<p>Enter an appropriate name using the sector prefix to distinguish
different requests from different sectors</p></td>
<td>New Request Form</td>
<td>New Request Form</td>
</tr>
<tr>
<td><strong>Select the Source System and one or more tables</strong></td>
<td><p>Select the ERP from the dropdown list. Once selected, you will
see the list of tables available for the selected ERP in the list.</p>
<p>Note: if the ERP system you require is not available in the list, or
the tables listed for a selected ERP do not include the tables you need,
you need to cancel the request and follow the process to request ERP/ERP
Tables.</p>
<p>Note: only tables are listed. Database VIEWS cannot yet be loaded
into the Data Harbor.</p></td>
<td>New Request Form</td>
<td>New Request Form</td>
</tr>
<tr>
<td><strong>Ensure tables selected match those approved by Business Owner in DIR</strong></td>
<td>Ensure the ERP and tables listed are only those tables covered by
the DIR.</td>
<td>New Request Form</td>
<td>New Request Form</td>
</tr>
<tr>
<td><strong>Select the relevant Output Port then Select Submit</strong></td>
<td>If you have previously created or found an output port select it -
if you cannot see the output port, it is likely that the Snowflake
accounts in the DIR and output ports do not match.</td>
<td>New Request Form</td>
<td>Harbor Request ready for approval</td>
</tr>
</tbody>
</table>

### RACI Chart
A RACI Chart is not applicable in this process given the full process is completed by the SDO Data Steward.

## Provision Data

### BPMN Diagram
<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/harbor-docs-process-provision-data.png" class="zoom" style="width:700px;" />

### Key Points
This process focuses on the actual provisioning of data from the Harbor to downstream systems. It involves packaging request details into a JSON file, which triggers the provisioning steps. The data is then made accessible through various platforms, ensuring compliance with access rights and data governance.

### Procedure
Provisioning Data is covered completely by automation. The simplified steps are covered below for completeness:
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 51%" />
<col style="width: 14%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>
<p>Details</p>
</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Package DHR Values into JSON</strong></td>
<td>
<p>The provisioning stage is carried out through automation between
Foundry and the Data Harbor "Lambda Engine". The first step is the
packaging the request and output port details into a JSON file.</p>
</td>
<td>Approved Harbor Request</td>
<td>JSON File</td>
</tr>
<tr>
<td><strong>Save into DH S3 Bucket</strong></td>
<td>
<p>The JSON file is now loaded up to the Uptimize AWS Harbor S3 bucket
which triggers the actual provisioning steps.</p>
</td>
<td>JSON File</td>
<td>JSON file in S3 bucket</td>
</tr>
<tr>
<td><strong>S3 Create Object Event</strong></td>
<td>
<p>Event that triggers remainder of process</p>
</td>
<td>JSON file in S3 bucket</td>
<td>Event to trigger other AWS processes</td>
</tr>
<tr>
<td><strong>Create Foundry View</strong></td>
<td>
<p>The provisioning for Foundry is via Foundry's 'virtual table'
mechanism. The read-only virtual table will be created in the folder
identified in the Harbor Request form and is now governed by the rights
provided within the normal Foundry project access mechanisms.</p>
</td>
<td>Event to trigger other AWS processes</td>
<td>Foundry View</td>
</tr>
<tr>
<td><strong>Create Snowflake View</strong></td>
<td>
<p>Where the output port is a regular Harbor to Snowflake account - the
table will appear into the database schema given in the request. If it
is a 'Snowflake to Snowflake' request, the source Snowflake database and
database schema will appear as a 'shared' database and schema in the
destination Snowflake account; however, only the tables requested will
appear under the shared schema.</p>
</td>
<td>Event to trigger other AWS processes</td>
<td>Snowflake table(s) and/or shared schemas</td>
</tr>
<tr>
<td><strong>Create AWS Link</strong></td>
<td>
<p>For an AWS output, the ability to view the table will be granted to
the Uptimize AWS Factory account. There is no direct access granted but
rather the link is created in the AWS Resource Manager: users with the
Factory admin access can then create their own 'link' by accessing the
details via the AWS Resource Management service.</p>
</td>
<td>Event to trigger other AWS processes</td>
<td>AWS Resource Management entries</td>
</tr>
<tr>
<td><strong>Set "Data Provisioned" Status</strong></td>
<td>
<p>Upon successful provisioning, the status of the Harbor Request in
Foundry will be set to "Data Provisioned"</p>
</td>
<td>Harbor Lambda Engine process complete</td>
<td>Status in Foundry</td>
</tr>
</tbody>
</table>

### RACI Chart
A RACI Chart is not applicable in this process is fully automated

## Complete DIR process
After ingestion the DIR process has to be verified and set "to in Data Treasury/ in Use Case Project". Afterwards access requests to use cases could be granted.
For further documentation have a look into the Foundry process documentation.
https://docs.uptimize.merckgroup.com/foundry/data-treasury-portal/data-ingestion-enhancement/DIR-DER/

---

<!-- 'Zooming of images' -->
<style>
.zoom {
  transition: transform 0.2s; /* Animation */
}
.zoom:hover {
  transform: scale(1.5) translateX(120px); /* Zoom-Faktor und Verschiebung nach rechts */
}
</style>

# Process for additional table ordering

## Top Level Process

This process comes into play when tables are mssing in UPTIMIZE Harbor. Take into consideration, that mostly Sector Data Stewards have to be involved.

The following picture describes the flow of process steps:

<img src="assets/harbor/harbor_process_additional_table.png" class="zoom" style="width:700px;" />

##  Request ERP Data
### BPMN Diagram

<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/user-docs-process-process-erp-req.png" class="zoom" style="width:700px;" />

### Key Points
This process involves requesting connectivity to new ERP systems or tables not currently available in the Harbor. The SDO Data Steward submits requests through the IT4U system, detailing the required SAP system and tables. The requests are reviewed, and if approved, the necessary connections are established for data ingestion.

### Procedure
<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 44%" />
<col style="width: 13%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>
<p>Details</p>
</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Use IT4U to 'Make a Request' and detail SAP System
required</strong></td>
<td>To request connectivity to a new ERP system, the SDO Data Steward
must raise a "request" in IT4U.  The request must details the SAP system
and the required tables.</td>
<td>SAP system missing from Harbor Request</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Use IT4U to 'Make a Request' and detail table(s)
required</strong></td>
<td>To request new tables from an ERP system already connected to the
Harbor, the SDO Data Steward must raise a "request" in IT4U.  The
request must details the relevant SAP system and the required
tables.</td>
<td>SAP system in Harbor Request but tables missing</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Set 'Short Description' as 'Harbor Request
Form'</strong></td>
<td>Use the IT4U request short description to identify the request as
"Harbor Request Form". This will help the Harbor/Fivetran team
distinguish the Harbor request tickets from other types of
requests.</td>
<td>IT4U Request</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Select 'Create/Change/Delete' in 'Category'</strong></td>
<td>In the request Category, select the Change/Delete
option.</td>
<td>IT4U Request</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Enter 'Fivetran-nreg' in 'Choose Application, Device Type or
Service affected'</strong></td>
<td>Every IT4U has a "Choose Application, Device Type or Service
affected" field.  Use this and search for <strong>Fivetran. </strong>
There are 2 Fivetran options, select the <strong>Fivetran-nreg</strong>
option.</td>
<td>IT4U Request</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Add a link to the DIR in the comments</strong></td>
<td>You must add the DIR url into the request Comments section, and
insure you have all the details about which SAP/ERP system you are
referring and the tables you require.</td>
<td>IT4U Request</td>
<td>IT4U Request</td>
</tr>
<tr>
<td><strong>Submit using 'Request' button</strong></td>
<td>Upon submission of the request the Fivetran/Harbor team will
receive an email notification.</td>
<td>IT4U Request</td>
<td>IT4U Request Number</td>
</tr>
</tbody>
</table>

### RACI Chart
A RACI Chart is not applicable in this process given it is fully the
responsibility of the Sector Data Steward.

## Process ERP Request
### BPMN Diagrams

<img src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/user-docs-process-erp-request.png" class="zoom" style="width:700px;" />

### Key Points
This process involves requesting connectivity to new ERP systems or tables not currently available in the Harbor. The SDO Data Steward submits requests through the IT4U system, detailing the required SAP system and tables. The requests are reviewed, and if approved, the necessary connections are established for data ingestion.

### Procedure
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 51%" />
<col style="width: 14%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th>Step</th>
<th>
<p>Details</p>
</th>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Review/Assign 'Harbor Request Form' IT4U
Request</strong></td>
<td>The Fivetran team will review the request for Harbor Request
changes and will verify that the appropriate level of detail has been
provided (ERP Name, Tables, DIR, etc).  Then based on whether the
request covers and existing connection or requires a new connection then
will take the appropriate action.</td>
<td>IT4U Harbor Request</td>
<td>IT4U Harbor Request</td>
</tr>
<tr>
<td><strong>Add New SAP Instance</strong></td>
<td>This sub-process covers adding a new SAP/ERP system to the Harbor
platform itself.</td>
<td>IT4U Harbor Request</td>
<td>IT4U Request for ERP Systems</td>
</tr>
<tr>
<td><strong>extract Source data</strong></td>
<td>This sub-process governs the process the Fivetran follows when an
existing SAP/ERP system has been connected to the Harbor, but some
tables have not yet had pipelines set up.</td>
<td>IT4U Request Complete for ERP System</td>
<td>Data Source imported to Harbor</td>
</tr>
</tbody>
</table>

### RACI Chart
A RACI Chart is not applicable in this process given it is fully the
responsibility of the Fivetran team.

## Last Steps

### Review IT4YOU Request details
The SDO-Steward regularly reviews the ticket and gets informed about status and especially when task is done via ticket.

### Notify Use Case Owner
User case owner and requestor are getting informed when task cannot be done for any reason or is finsihed

### Next steps
All following steps (harbor request process - provision data - Complete DIR ) are the same as in the process for data provisioning.
(please revise docs for further details)

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# GxP 
GxP has two major components:
- Qualification
- Validation
At UPTIMIZE Harbor we are continuously working on both to achieve and maintain GxP readiness from sources to our target platforms.
On the following section you will get our latest status.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# GxP Qualification
Here you will find the latest status on GxP qualification for all UPTIMIZE Harbor components.
We aim to be fully qualified in 2025.
<img src="assets/harbor/Harbor_Qualification.png" alt="Harbor_Qualification" class="zoom" style="width:700px;" />
Status as of September 2025
<table class="relative-table wrapped" style="width: 112.152%;">
  <colgroup class="">
    <col class="" style="width: 16.5155%;"/>
    <col class="" style="width: 44.2208%;"/>
    <col class="" style="width: 14.3613%;"/>
    <col class="" style="width: 8.91597%;"/>
    <col class="" style="width: 9.63403%;"/>
    <col style="width: 6.3429%;"/>
  </colgroup>
  <tbody class="">
    <tr class="">
      <th style="text-align: center;">Deliverable</th>
      <th style="text-align: center;">Definition</th>
      <th style="text-align: center;">Approval Status</th>
      <th style="text-align: center;">Dependency</th>
      <th style="text-align: center;">Harbor Reference in ManGo</th>
      <th style="text-align: center;">Fivetran Reference in ManGo</th>
    </tr>
    <tr class="">
      <td>GxP Assessment</td>
      <td>A range of criteria is used to ascertain whether the project is subject to GxP regulation. If any one of these questions is answered yes, GxP relevance is assumed.<br/>Additional questions focus on topics such as:</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">None</td>
      <td style="text-align: center;">23207002</td>
      <td style="text-align: center;">23044152</td>
    </tr>
    <tr class="">
      <td>Supplier Assessment</td>
      <td>Assessment of the compliance status and readiness of the supplier of the platform</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">None</td>
      <td style="text-align: center;">20262671 / 23199745</td>
      <td style="text-align: center;">23062274</td>
    </tr>
    <tr class="">
      <td>Qualification Plan (QP)</td>
      <td>The Qualification Plan describes the agreed strategy, roles, responsibilities and deliverables for qualifying and keeping the qualified state of an IT platform.<br/><br/>It intends to capture all the necessary activities to ensure a high degree of assurance that the platform is designed as intended and meets its pre-approved specifications.<br/><br/>In scope are the installation of the platform and the installation, operation and decommissioning of the application software itself.</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">GxP Assessment</td>
      <td style="text-align: center;">23214248</td>
      <td style="text-align: center;">23044561</td>
    </tr>
    <tr class="">
      <td>Technical Specification (TS)</td>
      <td>The Technical Specification contains the technical details describing the architecture of the infrastructure required by the system. This includes the following:<br/><br/>Architecture of infrastructure<br/>Detailed description of components<br/>Interfaces/connection devices<br/>Source &amp; Target Systems<br/>Network Infrastructure<br/>Volumetric details, Scaling<br/>System administration and operation<br/>System Operation<br/>Disaster Recovery &amp; Response<br/>System monitoring</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">QP</td>
      <td style="text-align: center;">23221272</td>
      <td style="text-align: center;">23044613</td>
    </tr>
    <tr class="">
      <td>Technical Risk Assessment (TRA)</td>
      <td>A catalogue of technical and other risks pertaining to the platform to be deployed.</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">QP</td>
      <td style="text-align: center;">23221273</td>
      <td style="text-align: center;">23044621</td>
    </tr>
    <tr class="">
      <td>Change Request (VAL and PROD)</td>
      <td>Before deployment a change needs to be raised and approved.</td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">QP, TS, TRA</td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
    </tr>
    <tr class="">
      <td>Installation Qualification Plan SaaS (IQP)</td>
      <td>An Installation Qualification (IQ) Plan is a critical document which ensures that equipment or systems are installed correctly and according to predefined specifications.</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23249338</td>
      <td style="text-align: center;">23176853</td>
    </tr>
    <tr>
      <td>Installation Qualification Plan HVR (IQP)</td>
      <td></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23157905</td>
    </tr>
    <tr>
      <td>IQP Execution HVR</td>
      <td></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23157905</td>
    </tr>
    <tr>
      <td>IQP Execution SaaS</td>
      <td></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23176853</td>
    </tr>
    <tr class="">
      <td>Installation Qualification Report (IQRP) SaaS</td>
      <td>A report compiled after the execution of the IQP, stating whether the IQP was successful and summarizing the final state post execution.</td>
      <td style="text-align: center;">Open</td>
      <td style="text-align: center;">IQP</td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23202867</td>
    </tr>
    <tr>
      <td>IQRV SaaS</td>
      <td></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23194447</td>
    </tr>
    <tr>
      <td>Installation Qualification Report (IQRP) HVR</td>
      <td>A report compiled after the execution of the IQP, stating whether the IQP was successful and summarizing the final state post execution.</td>
      <td style="text-align: center;">Open</td>
      <td style="text-align: center;">IQP</td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23194468</td>
    </tr>
    <tr>
      <td>IQRV HVR</td>
      <td></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;"></td>
      <td style="text-align: center;">23190977</td>
    </tr>
  </tbody>
</table>

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# GxP Validation
Here you will find the latest status on GxP Validation for all UPTIMIZE Harbor components.
We aim to have a validation framework with automations ready by 2026.
<img src="assets/harbor/Gamp5_Validation.png" alt="Gamp5_Validation" class="zoom" style="width:700px;" />
<img src="assets/harbor/Harbor_Validation.png" alt="Harbor_Validation" class="zoom" style="width:700px;" />

Status as of September 2025
<h1>
  <strong>GAMP5 - Validation Project Phases for Software Category</strong>
</h1>
<p>
  <strong>
    <ac:image ac:align="center" ac:width="900">
      <ri:attachment ri:filename="image-2025-7-1_15-25-53.png"/>
    </ac:image>
  </strong>
</p>
<h1>
  <strong>Validation Steps</strong>
</h1>
<p>
  <strong>
    <ac:image ac:align="center" ac:width="900">
      <ri:attachment ri:filename="image-2025-7-1_15-27-16.png"/>
    </ac:image>
  </strong>
</p>
<table class="relative-table wrapped" style="width: 102.158%;">
  <colgroup>
    <col style="width: 19.7088%;"/>
    <col style="width: 46.8413%;"/>
    <col style="width: 14.7159%;"/>
    <col style="width: 10.3143%;"/>
    <col style="width: 8.4091%;"/>
  </colgroup>
  <tbody>
    <tr>
      <th scope="col" style="text-align: center;">Deliverable</th>
      <th scope="col" style="text-align: center;">Definition</th>
      <th scope="col" style="text-align: center;">Approval Status</th>
      <th scope="col" style="text-align: center;">Dependency</th>
      <th scope="col" style="text-align: center;">Harbor Reference in ManGo</th>
    </tr>
    <tr>
      <td>Use case in Foundry</td>
      <td>Definition of the use case in Foundry, which serves to set up the environment as per the user's needs</td>
      <td style="text-align: center;">Not required</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>AWS Use Case extension</td>
      <td>Use case extension defines</td>
      <td style="text-align: center;">Not required</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>Validation Master Plan (VMP)</td>
      <td>The purpose of the VMP is to define the strategy for the validation of GxP data processing.</td>
      <td style="text-align: center;">Approved</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">23190977</td>
    </tr>
    <tr>
      <td>Veeva Change Request (CR)</td>
      <td>Change Request is an initial document used for requesting, approving, and documenting changes to the project (Use Case). UPTIMIZE Foundry use-case portal will be used for initial request and additionally a Veeva CR will be created for GxP Use Cases to capture the implementation life cycle according to this VMP.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>User Requirements (URS)</td>
      <td>The User requirements reflect the business requirements, including input and output data and frequency of the use case execution. It shall be provided by business or at least the business shall be involved in the creation process and approve them. The requirement type "URS" in ALM shall be used for this deliverable.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">VMP, CR</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>Functional Requirements (FRS)</td>
      <td>The Functional requirements define which functionalities are required to fulfill the URS. The Functional requirements shall be linked to the User requirements in HP ALM. The requirement type "FRS" in ALM shall be used for this deliverable.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">URS</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>Configuration Specification (CS)</td>
      <td>The Configuration Specification is prepared for functionalities that require a configuration. It details the configuration settings of the related use case. This may include the configuration of database handles, interface configuration, network details etc. The Configuration Specification shall be traced to the FRS in ALM.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">FRS</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>Design Specification (DS)</td>
      <td>The Design Specification is prepared for functionalities that shall be developed. They follow directly from the Functional Specification and describe in detail how the FRS is implemented in technical terms. The Design Specification shall be traced to FRS in ALM.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">FRS</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>FMEA</td>
      <td>A detailed risk analysis on functional level will be prepared for GxP use cases. The requirement type "FMEA" in ALM shall be used for this deliverable. Every URS item will have a corresponding FMEA risk item and there will be a mapping between URS and FMEA items.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">URS</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>Requirements Traceability Matrix (RTM)</td>
      <td>Traceability establishes the relationship between two or more products of the development process.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">URS, FRS</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
    <tr>
      <td>CR Closure</td>
      <td>A closure report summarizing the implementation status and success of the Validation project.</td>
      <td style="text-align: center;">
        <br/>
      </td>
      <td style="text-align: center;">CR</td>
      <td style="text-align: center;">
        <br/>
      </td>
    </tr>
  </tbody>
</table>
<p>
  <br/>
</p>
<p>
  <br/>
</p>

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

# Roles & Responsibilities
UPTIMIZE Harbor is serving needs of various user groups.
The usage of the Harbor Request Portal is restricted to **technical data stewards**
Access to Harbor Request Portal can be requested via Foundry Use Case Portal.
Roadmap and major improvemens are aligned with 
## Sector Data Office Champions
- HC - Sylvain Cecilio (sylvain.cecilio@merckgroup.com)
- LS - Ram Vemparala (ram.vemparala@milliporesigma.com)
- EL - Mohamed Amer (mohamed.amer@merckgroup.com)
- EF - Gerald Uhlhaas (gerald.uhlhaas@merckgroup.com)
(as of September 2025)
For detailled RACI please refer to our process section.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>

<img src="assets/harbor/HarborProductTeam.png" alt="HarborProductTeam" class="zoom" style="width:700px;" />

# Harbor Product Team...
**...has the following roles & responsibilities**
- **...is responsible** for the development and implementation of the UPTIMIZE Harbor product vision and roadmap.
- **...is responsible** for the development, maintenance, and administration of the services.
- **...is responsible** for defining and improving the ways of working and governance for UPTIMIZE Harbor.
- **...is responsible** for prioritizing requirements and improving the platform as part of agile product development.
- **...is responsible** for establishing connections to Merck's source systems.

If you are interested in joining the UPTIMIZE Harbor Product Team, please contact our [Product Owner, Ingo Gansen](mailto:ingo.gansen@merckgroup.com)..

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>



# How To
In the following sections you will find manuals, videos and practical tipps for UPTIMIZE Harbor.

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# General information


## Who can access the a Harbor Request Portal?
Only users in custom sector groups will be able to create Harbor Requests and according objects for their sector. There is one custom group for each of the sectors, and members will have permissions to create requests and output port choosing their sector. 

In general mainly **sector data stewards** will get access to the Harbor Request Rortal.
If you are a sector data steward and want to get access, please follow according steps.

Open the
[UPTIMIZE Harbor (NREG)](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc?pageId=shared&useCaseId=bfd4264b-374b-4456-acfb-3eef32403580) 
Use Case and Requeset Access using the Preset for your sector.

## How can I access the Harbor Request Portal
You can find the Harbor Request Portal here:


[Harbor Request Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.3a2c4648-81b3-4074-b910-a6c79ed1b5a3/main)



## Harbor Request Portal Overview

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/HR_General_intro_to_Harbor_Request_Portal.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# How to create a harbor request
In the following sections you will find manuals, videos and practical tipps to create a harbor request.

## What is a harbor request?
A harbor request is giving the harbor execution engine all parameters to initiate the data provisioning to an Uptimize platform.

## Put in request title
<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/hr_request_title.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Take aways
Create a meaningful request title.

## Choose DIR

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/hr_dir.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Take aways
- A valid approved DIR is mandatory to create a harbor request



## Pick input port

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/hr_input_port_tables.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Take aways
- Input ports are available as soon as the system is connected and initialized in UPTIMIZE Harbor
- If a system is not available it has to be ingested in harbor by the DII team. This has to be triggered via a Service Now ticket. Afterwards the efforts will have to be priroitized and phased into Uptimize planning iterations.



### Take aways
- If a table is not available it has to be ingested in harbor by the DII team. This has to be triggered via a Service Now ticket.

## Choose Output Port

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/hr_output_port.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Take aways
- Output ports have to be created by Sector data stewards to get available for     harbor requests
- Outpout ports get filtered according to the sector and ingestion destination of  
  DIR
- Sector of DIR has to match the sector of the chosen output port

## General Information

### How to save a draft
- "Save Draft" button gets available as soon you will type in first informations to create a request
- You'll find all your drafts via the "You have draft requests to complete" button

<img src="assets/harbor/hr_draft_request.png" alt="hr_draft_request" class="zoom" style="width:700px;" />


### How to filter
You can filter your requests (and output ports) via common foundry filter mechanisms using the little filter icon right next to the list of requests.

In addition you can filter on your own requests, when tickmarking "View Your Requests".


<img src="assets/harbor/hr_filter.png" alt="hr_filter" class="zoom" style="width:700px;" />

<img src="assets/harbor/hr_filter_options.png" alt="hr_filter_options" class="zoom" style="width:700px;" />

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# How to create an Output Port
In the following sections you will find manuals, videos and practical tipps to create an output port.

## General Information
An output port is reflecting the **UPTIMIZE target** where you want to get your data being available.

An output port has to be unique defined by the key:

**platform + sector + Snowflake Account / Foundry project+folder**

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/create_op_general.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


## Create an UPTIMIZE Foundry Output Port

<video width="640" height="480" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/data-harbor-mvp/create_op_foundry.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Take aways
- Data to Foundry is getting provisioned to Foundry projects and folders. For details please refer to our architecture docs.

- Harbor TPA must have access to your project - otherwise the data provision will fail

- RID has to follow the right naming conventions - otherwise you cannot create the output port


## Create an UPTIMIZE Snowflake Output Port
<img src="assets/harbor/create_op_snowflake.png" alt="create_op_snowflake" class="zoom" style="width:700px;" />



1. Give your output port a custom name. This name will later help in identifying your respective output port. It is part of the outpout port title described in the notes

2. Specify your target sector. This means you should use the sector to which the DIR and the respective Snowflake account is belonging to. 

3. Choose Snowflake as platform

4. Choose the Snowflake account where data shall get provisoned to. Please ensure that the account matches to sector you have chosen before.

### Take aways
- Data for Snowflake is getting provisioned via Snowflake Shares. For further details please refer to our architecture docs.
- Snowflake accounts can be created via a use case. Please refer to our Snowflake documentation




## Create an UPTIMIZE AWS Output Port

AWS as output port is not available yet (status 09/25)

Stay tuned for its go live!

---

<style>
/* zoom styles (inserted inline) */
.zoom {
  transition: transform 0.2s;
  display: inline-block;
  will-change: transform;
}
.zoom:hover {
  transform: scale(1.5) translateX(120px);
  z-index: 999;
}
img.zoom {
  max-width: 100%;
  height: auto;
}
.zoom--w700 { width: 700px; }
</style>


# How to approve a harbor request
In the following sections you will find manuals, videos and practical tipps to create a harbor request.

## Harbor approval flow
To ensure governance data access has to follow an approval flow. For a detailled description please refer to our process section.

This will give you a simplified guideline.

- The approval flow is always determining the uses cases linked to the DIR
- Then it derives the sectors of these use cases
- Afterwards it determines whether the input port is referring to a global or local system
    - global system
        - System which is owned by all sectors. (e.g. SAP Tempo)
    - local system
        - System is owned by a specific sector. (e.g. SAP LEAN belonging to Health Care)
- Then the following approval flow is triggered. 

<img src="assets/harbor/harbor_approval_flow.png" alt="harbor_approval_flow" class="zoom" style="width:700px;" />

- Auto-approval is done by the Harbor Execution Engine
- Manual-approvals have to be done by one member of the respective sectors having permission to the Harbor Request Portal. Each member will receive a notification for approval.

## Notifications
For each and every step all members of the respective sector harbor groups or the requestor or MDAO are getting email notifications.
This is especially important when waiting for a specific sector approval.

## How to approve a harbor request

### Approve the SDAO Requests

- Only the buttons relevant to your sector will be displayed.  
- The Approve and Reject buttons are available on the Harbor Request overview page, as highlighted in the image below:

<img src="assets/harbor/Harbor_Sector_Approval_Button.png" alt="Harbor_mdao_approval_button" class="zoom" style="width:700px;"/>

- Click on **Approve** or **Reject** to process the sector request accordingly.

### Approve the MDAO request

- Typically, MDAO requests are auto-approved after 2 business days.  
- If an MDAO request needs to be approved urgently, please contact the Product Owner of Harbor.  
- For the Harbor MDAO team to approve the request, click on the **"MDAO approve"** button, as highlighted in the image below.

<img src="assets/harbor/Harbor_mdao_approval_button.png" alt="Harbor_mdao_approval_button" class="zoom" style="width:700px;"/>

## Find your requests to approve

There are two options

- you click on the link you got in the approval notification (see video above)
- you click on the request to review button and a list of all requests to be approved by you will pop up. 

<img src="assets/harbor/hr_requests_to_review.png" alt="hr_requests_to_review" class="zoom" style="width:700px;" />

## Final approval
The final approval comes to the MDAO team, these are either auto-approved after two business days or manually approved by the Harbor MDAO team.