# UPTIMIZE AWS LAB

Imagine a world where deploying powerful cloud resources is as simple as a single click. **UPTIMIZE AWS Lab** transforms this vision into reality, streamlining the deployment of compute services like EC2, SageMaker, and EMR with the efficiency of the AWS Service Catalog. Built for ease, security, and scalability, it eliminates manual configurations, ensuring seamless access to high-performance computing. With built-in security and automatic updates, teams can focus on innovation in data analytics and machine learning. Welcome to the future of cloud deployment--simple, powerful, and ready when you are.

<ld-notice headline="Disclaimer" mode="warning"> Resources in an **UPTIMIZE AWS Lab** are deleted after 30 days. Use it for short-term experimentation, ad-hoc tasks, or working with ML workflows. </ld-notice>

## Use Cases for UPTIMIZE AWS Lab

* **Ad-Hoc Analytics:** Perform quick, on-demand data analysis to generate actionable insights.
* **Exploratory Data Analysis (EDA):** Explore datasets to identify patterns, trends, and relationships.
* **Model Training:** Train and optimize machine learning models efficiently using scalable compute resources like SageMaker and EMR.

## Skills Required to Use UPTIMIZE AWS Lab

To effectively utilize UPTIMIZE AWS Lab, the following skills are recommended:

**1.	Programming Knowledge:**
	Proficiency in Python and/or R for data analysis and modeling.

**2.	Version Control & Dependency Management:**
  Familiarity with tools like Git for version control and managing project dependencies.

**3.	Terminal Usage:**
  Experience using a terminal for running commands and managing workflows.

## Who is This For?

UPTIMIZE AWS Lab is designed for technical data practitioners, including:

- **Machine Learning Engineers:** For training and optimizing ML workflows.
- **Data Analysts:** For performing ad-hoc analytics and EDA.

**Integration Options**

UPTIMIZE AWS Lab seamlessly integrates with:

- **UPTIMIZE Foundry:** For secure data access and writebacks.
- **Factory:** For leveraging AWS services in custom solutions.
- **NLP API:** For natural language processing capabilities.

## Boot Up with UPTIMIZE AWS Lab

Get a quick and powerful overview of how to enhance your cloud experience with UPTIMIZE AWS Lab. Start your journey with this essential kickstart guide!

**1. Introduction**

- **Overview:** Explains the purpose of the UPTIMIZE AWS Lab and its benefits for users in data science and engineering.
- **Key Features:** Highlights the Lab's capabilities for performing analyses, data preparation, and training machine learning models

**2. Workbenches**
   
- **Types of Workbenches:** Details the pre-configured environments available, including:

  * **EC2 Instances:** Virtual servers for various computing tasks.
  * **SageMaker Notebooks:** Managed Jupyter notebooks for machine learning
  * **EMR Clusters:** Managed clusters for big data processing using Apache Hadoop and Spark.

- **Launching Workbenches:** Instructions on how to select, launch, and manage these workbenches, including necessary parameters.

**3.Data**

- **Data Access:** Guidelines on how to access and manipulate data within the Lab.

- **Storage Options:** Information on approved data sources, including:

  * **Instance Storage:** Temporary storage tied to the workbench.
  * **Personal S3 Bucket:** Unlimited storage for datasets.
  * **Foundry:** Long-term storage and sharing of data.

- **Best Practices:** Recommendations for managing data effectively and securely.

**4. AWS Lab Release Notes**

-	**Updates and Enhancements:** Provides information on new features and improvements made to the UPTIMIZE AWS Lab based on user feedback.

-	**User Notifications:** Users will receive timely updates on any changes affecting Lab usage via the Teams channel.


Please browse through the below pages to learn more about the UPTIMIZE AWS Lab.

---

# UPTIMIZE AWS Lab

## Welcome to the UPTIMIZE AWS Lab user docs! 


The purpose of the UPTIMIZE AWS Lab is to provide you with **scalable and flexible workbenches** for data science and data engineering workflows. Specifically, workflows such as any ad-hoc analyses, data exploration & preparation, training and testing ML models. We offer you a way to develop remotely using state-of-the-art tooling in **self-serve** fashion - that is, without lengthy approval processes. 

The UPTIMIZE AWS Lab currently consists of pre-configured short-lived workbenches that are based on [EC2](https://aws.amazon.com/ec2/) instances and [Sagemaker](https://aws.amazon.com/sagemaker/) notebooks. Workbenches are launched and managed using [AWS Service catalog](https://aws.amazon.com/servicecatalog/?nc1=h_ls&aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc). All workbenches have **access to the internet** (see [here](https://mdigital.sharepoint.com/:x:/s/Unit8SoWCollaboration-AWSLabstesting/ER-s1k7Q39VDiC5XV-GHrNQByMOs0Vtw7bucavlRSWHDMQ?email=adam.vegh%40external.merckgroup.com&e=yLgAAJ) for whitelisted URLs) and come with **pre-configured UPTIMIZE Foundry read/write access** as well as **SSO login** capabilities.

The UPTIMIZE AWS Lab is still actively being developed and our aim is to provide you with the **best user experience** and constantly **improve our Lab offering** over time. 

These **user docs** provide you with the basic information to get started and will be extended over time based on your feedback and new features that we add.

## Who should use the UPTIMIZE AWS Lab?

The Lab can be used by technical data practitioners. The typical skill-set for Lab users looks as follows:
1. Software engineering skills, such as:
    - Version control & Dependency management
    - Python programming skills
    - Experience working with the command line
2. Cloud/remote development experience
3. Data Science and/or Data Engineering knowledge

For everyone outside of this profile we have data and analytics tools available in UPTIMIZE Foundry. Please refer to the UPTIMIZE Foundry [Development tool framework](https://docs.uptimize.merckgroup.com/foundry/foundry-architecture/development-tool-framework/)



On the next page you can learn [how to access the Lab](https://docs.uptimize.merckgroup.com/lab/introduction/how-to-get-started/).

---

# How to get started

## Send an access request

Access to the UPTIMIZE AWS Lab can be raised from Foundry Use Case portal -
1.	Go to UseCase portal - https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc/personal
2.	Select any UseCase 
3.	Click on the burger menu located on right top
4.	Click On the "Request AWS Lab account"

![HowtoImage](/assets/uptimize-request/HowtoAWSLabRequest.png)

Your access request will be processed as follows:

### Lab admin review
Sector admins from the SDOs/MDO will review your request. Based on the information you provide they will either **accept** or **reject** your request. Before rejecting, they will get in touch to clarify whether the UPTIMIZE Lab is the right tool for what you are trying to accomplish.

SDO/MDO Lab Admins:
- HC: Emre Esendir, Sylvain Cecilio, Saikat Giri
- LS: Mike Siefert, Timo Hirt
- EL: Min-Cheol Lee, Jan Loeffler
- MGF: Karsten Krauser, Rahul Panda
- MDO: Veit Hoehn, Kulasekara pandian

### Provisioning
If your access request was accepted, the UPTIMIZE AWS Ops team will provide you access to the correct [Lab AWS account](https://aws-sso.uptimize.merckgroup.com), [Azure DevOps project](https://dev.azure.com/Uptimize/) and our [Teams user group channel](https://teams.microsoft.com/l/team/19%3a_frGeH7MXjXnEzLEi_BP9iMzfEtfdLdjKCHJONb9Dec1%40thread.tacv2/conversations?groupId=77f2ae53-7d55-4cea-9c1c-b33a0812401d&tenantId=db76fb59-a377-4120-bc54-59dead7d39c9) "UPTIMIZE AWS user group". Once your request reached the status **Provisioned** you should be able to use the Lab.


## Accessing AWS via SSO

AWS can be reached via Merck SSO. Please head to https://aws-sso.uptimize.merckgroup.com to get started. 

Log-in to the lab account you have access to by clicking on **Management console**.

![Login example](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/account-login.png)


## Service Catalog

You should automatically be routed to **AWS Service Catalog**. If not, you can use the search bar. Please find more information on how to use service catalog in [this section](https://docs.uptimize.merckgroup.com/lab/workbenches/how-to-use-service-catalog/) of the user docs.

![Service Catalog](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/Service-catalog.png)

## Region

**Important:** All workbenches can only be launched in the region Frankfurt (eu-central-1).

---

# Getting help

## Issues

For any issue or bug that needs to be fixed quickly in order for you to continue your work, please raise a [SNOW ticket](https://fire.service-now.com/MerckPortal/) with the affected system flagged as "Uptimize AWS". The SNOW ticket will reach our AWS operations team and will be solved as soon as possible.

We also offer a public [Support Board](https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_boards/board/t/UPTIMIZE-AWS%20Team/Issues) in Azure DevOps. Everyone working on AWS should already have access to this board. If you want to make issues or bugs visible to everyone in the UPTIMIZE AWS community, please raise an issue in the column „New issues". If you also created a SNOW ticket, you can include the ticket ID in the issue raised on the board. In the ticket all users can add comments or tag people. If the issue is being worked on it will be moved to the column „In Progress". Please also make sure to check „Known Issues" before raising an issue.

## AWS Enhancement Ideas

In case you have an idea for us to improve our UPTIMIZE AWS offering, please create an issue in the column „AWS Enhancement Ideas" in the public Support Board.
https://merckgroup.canny.io/admin/roadmap/uptimize-aws

## General questions

For any general user questions (non-issues) you can ask them in the Teams channel UPTIMIZE AWS user group. Every Uptimize AWS user is added to this Teams channel.

---

# Workbenches

## Introduction

In this section you will learn how to use the Lab workbenches and what you can do with the Service Catalog.

## Contents

1. [Service Catalog](https://docs.uptimize.merckgroup.com/lab/workbenches/how-to-use-service-catalog/): The AWS Service Catalog and all its functions will be explained to you in this section. You will learn how to launch and manage workbench products.

2. [EC2 Instance](https://docs.uptimize.merckgroup.com/lab/workbenches/ec2-instance/): In this section we explain how to work with EC2 instances in the Lab and how you can work with your code editor of choice. 

3. [EMR Cluster](https://docs.uptimize.merckgroup.com/lab/workbenches/emr-cluster/): This section explains how to use AWS EMR clusters in the Lab. 

4. [Sagemaker Notebook](https://docs.uptimize.merckgroup.com/lab/workbenches/sagemaker-notebook/): This section explains how to work with Sagemaker notebooks, as well as which kernels and environments are available.

5. [Best practices and guidelines](https://docs.uptimize.merckgroup.com/lab/workbenches/best-practices-and-guidelines/): This mandatory section explains how to work correctly with the Lab workbench products, how user access works and what best practices you should adhere to.

6. [Spark NLP and OCR](https://docs.uptimize.merckgroup.com/lab/workbenches/nlp/): The Spark NLP and OCR section shows you how to get started and also links to tutorials that show you how to use these modules. The individual kernels are also shown and explained how to update them

7. [Version control and repos](https://docs.uptimize.merckgroup.com/lab/workbenches/version-control-and-repos/): This section explains how to do code version control with Azure DevOps.

8. [RStudio](https://docs.uptimize.merckgroup.com/lab/workbenches/rstudio/): This section explains how to connect RStudio to the EC2 instance, as well as how to connect it to the server in the background on MacOS, Linux and Windows.

9. [Instance types](https://docs.uptimize.merckgroup.com/lab/workbenches/instance-types/): This section shows all EC2 instance types available in the Lab including pricing.

---

# How to use Service Catalog

## Demonstration video

<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/workbenches/service-catalog-video.mov" type="video/mp4">
  Your browser does not support HTML video.
</video>

## Service Catalog structure

- The `Products` tab lists the various workbench products that you can launch.
- The `Provisioned products` tab lists the workbenches that have already been launched.

## Workbenches

There are three types of workbenches that can be provisioned using the Service Catalog:

1. An EC2 instance.

2. A SageMaker Notebook instance.

3. An EMR cluster.

![Provisioned products](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sagemaker-provisioned-products.png)

## How to launch workbench products

On the `Products` tab, select the workbench product that you would like to launch and click on `Launch product` in the top-right corner. Each instance has its own list of parameters that need to be set.

### EC2 Instance:
  - Provisioned Product Name: The name you give to the launched product in the Service Catalog. It is also possible to tick the `Generate Name` checkbox.
  - InstanceType: The instance type of the EC2 instance. `g4dn` and `p3` instances are GPU instances.
  - SubnetId: The subnet associated with the product. Any can be chosen.
  - VolumeSizeInGB: The size of the EBS volume attached to the instance from 25 GB to 150 GB.<br>
### SageMaker Notebook instance:
  - Provisioned Product Name: The name you give to the launched product in the Service Catalog. It is also possible to tick the `Generate Name` checkbox.
  - InstanceType: The instance type of the SageMaker Notebook instance. `g4dn` and `p3` instances are GPU instances.
  - SubnetId: The subnet associated with the product. Any can be chosen.
  - VolumeSizeInGB: The size of the EBS volume attached to the instance from 25 GB to 150 GB.<br>
### EMR Cluster:
  - Provisioned Product Name: The name you give to the launched product in the Service Catalog. It is also possible to tick the `Generate Name` checkbox.
  - EMRClusterName: The name of the EMR Cluster that will be created. Please choose a unique name.
  - FoundryJWTToken: Your personal Foundry JWT Token. You can find/create it on Foundry in your account settings.
  - MasterInstanceType: The instance type of the EMR cluster master node.
  - CoreInstanceType: The instance type of the EMR cluster core node(s).
  - TaskInstanceType: The instance type of the EMR cluster task node(s).
  - NumberOfCoreInstances: The number of core instances attributed to the cluster.
  - NumberOfTaskInstances: The number of task instances attributed to the cluster.
  - SubnetId: The subnet associated with the product. Any can be chosen.<br><br>

| Important notes                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------      |
| All the parameters need to be set otherwise the provisioning will fail                                                                                              |
| If you launch a GPU instance in SageMaker or EC2, you need to allocate at least 120 GB for your EBS volume.                                                         |
| If you receive an error message similar to `We currently do not have sufficient capacity in the Availability Zone you requested.` Try to use a different subnet.    |
| To view a product over the `Provisioned Products`, ensure that the Access Filter is set to `User` rather than `Account`. Otherwise, the product will not be visible.|


![Example: SageMaker parameters](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/instance-parameters.png)

**Info:** You can look at this [page](https://docs.uptimize.merckgroup.com/lab/workbenches/ec2-instance/) to learn how to connect to your provisioned EC2 instance.

### To initiate a Jupyter Notebook or Jupyter Lab within your SageMaker instance: 
1. Once the workbench is starting you have to wait until the status is set to "Available"
2. Begin by navigating to the `Provisioned Products` section and locating your specific product. 
3. Next, access the `Events` tab associated with your product. Within this tab, you will find an Output Key section containing a SageMakerLink. 
4. Proceed to follow the provided link, which will redirect you to the Notebook instance. Once there, you will find the options to `Open Jupyter` Notebook and `Open Jupyter Lab` conveniently located at the top.

![SageMaker Product page](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sagemaker-product.png)

## How to manage provisioned workbenches

There are three types of management actions that you can do:

1. **Terminating:** If you terminate an workbench product, no more costs are accruing and all work on the workbench is lost, if not stored outside of the instance. To terminate a workbench, head to the `Provisioned products` tab in Service Catalog, select a workbench that you already launched and terminate it using the `Actions` drop-down menu and the `Terminate`. All instances will be terminated automatically after 30 days.<br><br>
2. **Stopping:** If you stop a workbench product, minor costs are accruing and you can later restart the instance and continue working. To stop an instance you need to navigate to the corresponding service's page (EMR/SageMaker/EC2) through the search bar. Select your instance and under the `Actions` drop-down menu, select `Stop`.<br>(**Please note**: EC2 instances will be **stopped automatically** after 4h of idle GPU/CPU usage and if no user is connected to it. Sagemaker notebooks will be **stopped automatically** if the Kernel has been inactive for 4h.)<br><br>
3. **Update:** If you want to switch to a larger EC2 instance type or increase the EBS volume you can resize the workbench. To resize a workbench, head to the `Provisioned products` tab in Service Catalog, select a workbench that you already launched and resize it using the `Actions` drop-down menu and then `Update`.<br><br>

## Troubleshooting

### `Failed to start instance (...). Insufficient capacity`

Amazon Web Services (AWS) doesn't currently have enough available On-Demand capacity of the requested instance type in the requested Availability Zone(AZ).

Possible workarounds:
- Create product with a different subnet (corresponds to a different availability zone which has a different pool of resources)
- Create product with a different instance type

---

## Pre-installed Conda environments
The environments are present in the  `/home/ec2-user/mambaforge/envs/` directory and all of them have Python version 3.10, 3.11, 3.12 and Foundry DevTools.
The following environment/packages are installed depending on the instance type that is chosen:

- CPU instance
  - `uptimize_python310` : pyspark, pandas
  - `uptimize_python311` : pyspark, pandas
  - `uptimize_python312`: pyspark, pandas

- GPU instance
  - `uptimize_python310`: pyspark, pandas
  - `uptimize_pytorch_python310` : pytorch-gpu, pyspark, pandas
  - `uptimize_tensorflow_python310`: tensorflow-gpu, pyspark, pandas

- Graviton instance
  - `uptimize_python310`: pyspark, pandas
  - `uptimize_python311`: pyspark, pandas
  - `uptimize_python312`: pyspark, pandas


**The EC2 CPU, GPU, and Graviton instance types are using Amazon Linux 2023 as their operating system version.**
  
**Python version 3.11 & 3.12 are extended to GPU instance as well, that includes uptimize_python<XX>, uptimize_pytorch_python<XX>.**

While creating EC2 instances from the service catalog product, the user is provided with a dropdown to select which python version should be set as default.

![Set Default Python](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/set_default_pythonversion.png)


Please note, that there is a script which modifies or creates a spark defaults config on login, more on this below.

## Connect to your EC2 instance  

### Prerequisites: Install the AWS CLI and session manager plugin
You will use the AWS Command Line Interface (CLI) to push your public key via EC2 Instance Connect and establish a tunnel for your SSH connection with the EC2 instance. 
Therefore, make sure to install the AWS CLI and the AWS session manager plugin on your local machine.

#### macOS
```shell
brew install awscli session-manager-plugin
```
#### Windows
In the Software Center, go to Applications and type (PR022476) in the search box. Install `AWS CLI`. For a text editor, install `Notepad++` (PR022642).
Note: The Session Manager Plugin package is included with the AWS CLI.

#### Relevant documentation
1. [Installing or updating the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. [Install the Session Manager plugin for the AWS CLI](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html)

### Head over to AWS 
AWS can be reached via Merck SSO. Please head to https://d-99672e18db.awsapps.com/start#/ to get started. 
Here you can identify your `sso_account_id` and your `sso_role_name` which you need for the next step. 

![SSO Account ID and SSO Role name](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sso_login.png)

In this case, the `sso_account_id` is `601115765604` and the `sso_role_name` is `Lab-user-mgf`

Updates: We have provision new `sso_role_name` - `Lab-PowerUser` , to cater the need of users who need high configuration ec2 Instance. Upon the submission of a ServiceNow ticket and subsequent approval from Lab admin, users can be granted access to this role. Presently, the available instance type for selection is limited to "r6a.32xlarge."
![New SSO Role name](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/new_sso_role.png)

### Launch an EC2 instance from the Service Catalog
Launch an EC2 instance you want to connect to as described [here](https://docs.uptimize.merckgroup.com/lab/workbenches/how-to-use-service-catalog/)

The EC2 Instance id will be in your product page under Events/PROVISION_PRODUCT/Output with Output Key `Ec2InstanceId` or in the EC2 console.

![EC2 Instance ID](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/ec2_instance_id.png)


### Configuring your work station for EC2 connectivity (Auto - Preffered Way)
Python script, provided below, will handle all the necessary configurations for connecting to your EC2 instance.. 

1. Copy and paste the python script to a file in your work station (e.g. `lab-config-setup.py`)
2. Execute the python script (e.g. `python lab-config-setup.py` ).
   If you don't have a python installation please refer to the following guide to install mambaforge : (https://docs.uptimize.merckgroup.com/foundry/foundry-dev-tools/#environment-setup)
3. The script will takecare of following :
    - Prompt you to select the required Lab profile :
    
    ![Select Option](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/Menu.png)
    - Create a profile for the chosen role/account in `~/.aws/config`, enabling AWS CLI login via SSO.
    - Generate an SSH key if one doesn't already exist.
    -  Create `~/.ssh/cacert.pem` and append the following line to the bottom of the config profile: `ca_bundle = ~/.ssh/cacert.pem`
    - Set up your SSH client by creating a configuration file in the `~/.ssh/config` directory

#### Scripts supports Windows/macOS/Linux OS

```python
import os
import platform
import re
import shutil
import ssl
import subprocess
import sys
import tempfile
from urllib.error import URLError
from urllib.request import urlopen


def create_folder(path):
    # Create folder if it doesn't exist
    if not os.path.exists(path):
        print(f"Creating folder: {path}")
        os.makedirs(path)


def copy_file(src, dest):
    # Copy file if it doesn't exist
    if not os.path.exists(dest):
        print(f"Copying file: {src} to {dest}")
        shutil.copy(src, dest)


def check_ssh_key(ssh_key_path):
    # Check for existing SSH key, generate new one if necessary
    if not os.path.exists(ssh_key_path):
        print("Generating a new SSH key...")
        try:
            subprocess.run(
                ["ssh-keygen", "-t", "rsa", "-b", "4096", "-N", "", "-f", ssh_key_path],
                check=True,
            )
            print(f"SSH key generated: {ssh_key_path}")
        except subprocess.CalledProcessError as e:
            print(f"Error during SSH key generation: {e}")
    else:
        print(f"SSH key already exists: {ssh_key_path}. Good to go!")


def aws_sso_login(lab_profile):
    # Executes AWS SSO login for the specified profile.
    try:
        result = subprocess.run(
            ["aws", "sso", "login", "--profile", lab_profile],
            check=True,
            text=True,
            capture_output=False,
        )
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(e.stderr)


def aws_get_caller_identity(lab_profile):
    # Executes AWS SSO login for the specified profile.
    try:
        result = subprocess.run(
            ["aws", "sts", "get-caller-identity", "--profile", lab_profile],
            check=True,
            text=True,
            capture_output=True,
        )
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(e.stderr)


def update_cacert(merck_root_ca, output_path):
    # Recreate logic of certifi
    url = "https://mkcert.org/generate/"
    temp_file = tempfile.NamedTemporaryFile().name
    with open(temp_file, "w") as f:
        f.write(merck_root_ca)
    try:
        ctx = ssl.create_default_context()
        response = urlopen(url, context=ctx)
    except URLError:
        ctx = ssl.create_default_context(cafile=temp_file)
        response = urlopen(url, context=ctx)

    # Check if the request was successful
    if response.status != 200:
        raise Exception(
            "Failed to download the new cacert.pem. Please report this issue."
        )

    new_cacert = response.read()
    combined_cert = new_cacert + merck_root_ca.encode()

    with open(output_path, "wb") as f:
        f.write(combined_cert)


def modify_ssh_config(config_file, lab_profile, proxy_command):
    # case 1: config_file does not exist
    config_file_exists = os.path.exists(config_file)
    contains_host_i_already = False
    if config_file_exists:
        with open(config_file, "r") as f:
            current_content = f.read()
        # case 2: config file does exist
        contains_host_i_already = "host i-*" in current_content
    else:
        current_content = ""

    if not contains_host_i_already:
        current_content = current_content + "\n"
        current_content = current_content + "host i-*\n"
        current_content = current_content + "    IdentityFile ~/.ssh/id_rsa\n"
        current_content = current_content + "    TCPKeepAlive yes\n"
        current_content = current_content + "    ServerAliveInterval 120\n"
        current_content = current_content + "    User ec2-user\n"
        updated_proxy_command = re.sub(
            r"--profile \S+", f"--profile {lab_profile}", proxy_command
        )
        current_content = current_content + updated_proxy_command

    else:
        # get host i-* line
        lines = current_content.split("\n")
        for i, line in enumerate(lines):
            if "host i-*" in line:
                proxy_command_found = False
                inner_counter = 1
                while not proxy_command_found:
                    line = lines[i + inner_counter]
                    proxy_command_found = "ProxyCommand" in line
                    if proxy_command_found:
                        lines[i + inner_counter] = re.sub(
                            r"--profile \S+", f"--profile {lab_profile}", line
                        )
                    inner_counter = inner_counter + 1
        current_content = "\n".join(lines)

    # Write the updated lines back to the config file
    with open(config_file, "w") as f:
        f.write(current_content)


def add_to_aws_config(config_file, lab_profile, sso_account_id):
    # Add or overwrite AWS config for the selected lab profile
    if not os.path.exists(config_file):
        with open(config_file, "w") as f:
            f.write("[default]\n")

    # Read the current AWS config
    with open(config_file, "r") as f:
        lines = f.readlines()

    # Check if the profile already exists in the AWS config by looking for a profile section
    profile_exists = any(f"[profile {lab_profile}]" in line for line in lines)
    if profile_exists:
        print(f"Profile {lab_profile} already exists in {config_file}.")
        return  # Exit without modifying the file

    # Write the new config to the file, effectively appending the profile to config
    with open(config_file, "w") as f:
        f.writelines(lines)
        print(f"Adding/Overwriting profile for {lab_profile} in AWS config")
        f.write(f"\n[profile {lab_profile}]\n")
        f.write("sso_start_url = https://d-99672e18db.awsapps.com/start#/\n")
        f.write("sso_region = eu-central-1\n")
        f.write(f"sso_account_id = {sso_account_id}\n")
        f.write(f"sso_role_name = {lab_profile}\n")
        f.write("region = eu-central-1\n")
        f.write("output = json\n")
        f.write("ca_bundle = ~/.ssh/cacert.pem\n")


def get_user_profile():
    # Prompt user to select a profile
    print("Select a User Profile:")
    print("1) Lab-user-dev")
    print("2) Lab-user-el")
    print("3) Lab-user-mdo")
    print("4) Lab-user-ls")
    print("5) Lab-user-mgf")
    print("6) Lab-user-hc")

    choice = input("Enter your choice (1-6): ")

    profiles = {
        "1": ("Lab-user-dev", "545418957587"),
        "2": ("Lab-user-el", "049771543584"),
        "3": ("Lab-user-mdo", "469268659874"),
        "4": ("Lab-user-ls", "804878901319"),
        "5": ("Lab-user-mgf", "601115765604"),
        "6": ("Lab-user-hc", "625229962653"),
    }

    if choice in profiles:
        return profiles[choice]
    else:
        print("Invalid choice. Exiting.")
        sys.exit(1)


def main():
    # Get user profile choice
    lab_profile, sso_account_id = get_user_profile()

    # Define file paths
    ssh_folder = os.path.expanduser("~/.ssh")
    aws_folder = os.path.expanduser("~/.aws")
    ssh_key_path = os.path.join(ssh_folder, "id_rsa")
    ssh_config_file = os.path.join(ssh_folder, "config")
    aws_config_file = os.path.join(aws_folder, "config")
    cacert_file = os.path.join(ssh_folder, "cacert.pem")

    # Detect the OS
    current_os = platform.system()

    # Conditional ProxyCommand based on the OS
    if current_os == "Windows":
        # Windows for command execution
        proxy_command = (
            f"    ProxyCommand C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -Command "
            f'"aws ec2 start-instances --instance-ids %h --profile {lab_profile} ; '
            f"aws ec2 wait instance-running --instance-ids %h --profile {lab_profile} ; "
            f"aws ec2-instance-connect send-ssh-public-key --profile {lab_profile} --instance-id %h "
            f"--instance-os-user %r --ssh-public-key 'file://~/.ssh/id_rsa.pub' --availability-zone "
            f"$(aws ec2 describe-instances --profile {lab_profile} --instance-ids %h "
            f"--query 'Reservations[0].Instances[0].Placement.AvailabilityZone') ; "
            f"aws ssm start-session --target %h --profile {lab_profile} --region eu-central-1 "
            f"--document-name AWS-StartSSHSession --parameters 'portNumber=%p'\" \n"
        )
    else:
        # Linux/macOS use sh -c for shell command execution
        proxy_command = (
            f'    ProxyCommand sh -c "aws ec2 start-instances --instance-ids %h --profile {lab_profile} ; '
            f"aws ec2 wait instance-running --instance-ids %h --profile {lab_profile} ; "
            f"aws ec2-instance-connect send-ssh-public-key --profile {lab_profile} --instance-id %h "
            f"--instance-os-user %r --ssh-public-key 'file://~/.ssh/id_rsa.pub' --availability-zone "
            f"$(aws ec2 describe-instances --profile {lab_profile} --instance-ids %h "
            f"--query 'Reservations[0].Instances[0].Placement.AvailabilityZone') ; "
            f"aws ssm start-session --target %h --profile {lab_profile} --region eu-central-1 "
            f"--document-name AWS-StartSSHSession --parameters 'portNumber=%p'\" \n"
        )

    MERCK_ROOT_CA = """
# Label: "MERCK ROOT CA 01"
-----BEGIN CERTIFICATE-----
MIIGOzCCBCOgAwIBAgIQHt22MoeoebZLg1n5IiALWTANBgkqhkiG9w0BAQsFADBT
MQswCQYDVQQGEwJERTEUMBIGA1UECgwLTWVyY2sgR3JvdXAxEzARBgNVBAsMCk1l
cmNrIEtHYUExGTAXBgNVBAMMEE1FUkNLIFJPT1QgQ0EgMDEwHhcNMTYxMDI4MDg1
MjU2WhcNMzYxMDI4MDkwMjUyWjBTMQswCQYDVQQGEwJERTEUMBIGA1UECgwLTWVy
Y2sgR3JvdXAxEzARBgNVBAsMCk1lcmNrIEtHYUExGTAXBgNVBAMMEE1FUkNLIFJP
T1QgQ0EgMDEwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDQGa8XIrc9
Ri5hhJfXHCfzbJY9sueLJXtOuwYdGD/riltHGCOitOxFGCTTwelCDwpvT+9VB0rM
tbtU5pZMNhWhPm+6xVG0pBOsZW65sL+rgh9o4kvSfAmLE7n8qZmek1jfK/i8tRHI
D51YM+1+ObBcrCi5KrqROEpJEvGIQjbaKM6kCuhJGGcxr40gQ1hc4mVysRELOv4y
8YU3bSHiqDpMvwzCD+57xuYSfuZx6YXSfPXM1JU6vjZ1fp3NjbArp9+Ml9b4UC7Q
FInGmwRhEmd1UMdDm2IshhOlQ8Q4NXoOdecrQCkyHKHKpvvolDmnpucdUa8hVrDq
Xk94r/AEbIk87OBjl9r/V2ei7lD45pjanam24Xm5uwJDX2RrL+LxD4tNQTDig/f5
F75hSPHWsFatQrxT2mNtOihfAFWZySTzVTNE+Ez3nei0GZ92QcdX3jn0oTvezGEn
cnSp9mhGnWlXUXQ5GXEIUsF3Krvkw30xSM1tJt7tpnAR8ZIqBFcfhdVuNnhSZvzS
qoxBEEf2N76k28rCq/PuxcAd0EwE5x7eDcD7ZNjLev/wgqthUv+zddkKlfhRWop7
Z7hmvQRYWp9mOqX0t6B6y0/ulAqgn67U7qb/XzpnvVp5Aydv1tQ+qq6Od1JlMScj
nv0F7KSTrnc5K8KPsSFxOkcNkoCMdVgGzQIDAQABo4IBCTCCAQUwDgYDVR0PAQH/
BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFNDmVlzqHY/5Kj0GGKWU
kZwA1VUzMIHCBgNVHSAEgbowgbcwgbQGBFUdIAAwgaswgagGCCsGAQUFBwICMIGb
HoGYAEMAZQByAHQAaQBmAGkAYwBhAHQAaQBvAG4AIABQAHIAYQBjAHQAaQBjAGUA
IABTAHQAYQB0AGUAbQBlAG4AdAAgACgAQwBQAFMAKQAgAGEAdgBhAGkAbABhAGIA
bABlACAAbwBuACAAcgBlAHEAdQBlAHMAdAAgAGYAcgBvAG0AIABJAFQAIABTAGUA
YwB1AHIAaQB0AHkwDQYJKoZIhvcNAQELBQADggIBADaPFSRRqFU9Uu8xEgk7rxJt
XHoVnMoDiHhHcTBeG+9U3q1tSA/MohIPZN98isEP6BLlN2tv5xVZRG8VjmIj3bE5
KUcwSNKRPUYZHIelTkXZnyfjnWLG1aFloLmnysZOQcK/ce/uRTIeivGPIneJgifs
NTeYZF7b5WYAGtkTC5t+TFdAxVw4ptmwX1NDgAwclUE72JxtDk8xPxYfy/26vA6+
Rfl3YaRiwB++WxUaG68wYHWV4+uo6enz0NIJwvlg+4sZGCeoQ/zRl1yQM4sBu3DT
uYVoN15MAnrxbXJ81LSrCYJGLNM1pbA75a3UwTercGoCh0gchLuuCWk8vz3TmkU2
xZRGVpqFveoO4Y2Gd08QMJBSRmCaCmaDFUqbqPump/euTbjPICTZ0gEn9SfhAVWK
dotKAz7yqhrjOx08x3fBtbggnLvQrK1NBgsXUz6+c2WcqVh1yR9DCYqLSW656psv
J42zE5cplnkhc+0XS7itIaBwEEHR6XDq006YZpQeYapSAZ5F+Vc782UGQa+4fFg2
0rkON71IUxOG6rsVG85Fnt4xPAIHxJxMT4FKKlN0yFxc4aBn8Mj/GRP9up0caUoF
lmIhWZaOkQFhYXt7TGNzYxf2FUM1OVZetlF8cIX29LoqzSVYIT6kJVoO/+JnKjqv
1U8Ol3yI5k05mg+n+Tac
-----END CERTIFICATE-----"""

    # Create necessary folders and files
    create_folder(ssh_folder)
    create_folder(aws_folder)

    # cacert creation
    update_cacert(MERCK_ROOT_CA, cacert_file)

    # Handle SSH key
    check_ssh_key(ssh_key_path)

    # Modify SSH config
    modify_ssh_config(ssh_config_file, lab_profile, proxy_command)

    # Add AWS config
    add_to_aws_config(aws_config_file, lab_profile, sso_account_id)

    print("Setup completed successfully.")
    print(
        "Starting SSO Login. Please 'Confirm and Continue' and 'Allow' in Web Browser."
    )
    print("Please close browser and come back to this script.")
    _ = input("Press any key to continue to login.").strip().lower()

    aws_sso_login(lab_profile)
    print("You are logged in with the following role:")
    aws_get_caller_identity(lab_profile)


if __name__ == "__main__":
    main()

```

### Login to AWS CLI via SSO (Manual Way)
1. Add a profile section for each role/account that you need to use into your ssh config file which is usually located under `~/.aws/config`.
If it does not exist, you can simply create a folder and the file with a text editor.

**NOTE**: The file cannot have a `.txt` extension.  In Windows use Notepad++ to save as type `All types` without extension.

2. Copy the sample config below, replace `sso_account_id` with the AWS Account ID and `sso_role_name` with SSO role name which you can find from the previous step in the SSO login screen.
Optionally rename the profile name (string in front of `[profile `) to something that matches the sector account(e.g. `lab-user-ls`).

**NOTE**: The profile name is used for every `aws` command moving forward.

A sample `~/.aws/config` can look like this:
```shell
[profile lab-user-mgf]
sso_start_url = https://d-99672e18db.awsapps.com/start#/
sso_region = eu-central-1
sso_account_id = 601115765604
sso_role_name = Lab-user-mgf
region = eu-central-1
output = json
```
**NOTE**: If inside the VPN, download [certificate](https://palantir.mcloud.merckgroup.com/workspace/preview-app/ri.blobster.main.certificate.ab5dc834-157d-46e0-9efc-b3757b973585)
to `~/.ssh/cacert.pem` and add the following line in the bottom of the config profile
`ca_bundle = ~/.ssh/cacert.pem`


3. Login to each profile:

```shell
aws sso login --profile lab-user-mgf
```

If you want to open the SSO link in a specific browser window, simply run the following command, open the link in the right browser window and copy the code from your CLI.
```shell
BROWSER=true aws sso login --profile lab-user-mgf
```

### Configure your SSH client

#### Keys
If you still haven't generated your SSH keys, please do by running the following command in your terminal/powershell:
```shell
ssh-keygen
```

#### SSH config
For Mac, your ssh config file is usually located under `~/.ssh/config`. For Windows it is usually located under your home directory `$HOME\.ssh\config`.

Add the below configuration file to your config. This special ssh configuration does the following:

1. Start the instance if stopped
2. Wait for the instance to start
3. Copy your public SSH key to the instance 
4. Connect with SSH (using AWS Session Manager Plugin)

##### macOS/Linux
```shell
host i-*
 IdentityFile ~/.ssh/id_rsa
 TCPKeepAlive yes
 ServerAliveInterval 120
 User ec2-user
 ProxyCommand sh -c "aws ec2 start-instances --instance-ids %h --profile lab-user-mgf && aws ec2 wait instance-running --instance-ids %h --profile lab-user-mgf && aws ec2-instance-connect send-ssh-public-key --profile lab-user-mgf --instance-id %h --instance-os-user %r --ssh-public-key 'file://~/.ssh/id_rsa.pub' --availability-zone '$(aws ec2 describe-instances --profile lab-user-mgf --instance-ids %h --query 'Reservations[0].Instances[0].Placement.AvailabilityZone' --output text)' && aws ssm start-session --target %h --profile lab-user-mgf --region eu-central-1 --document-name AWS-StartSSHSession --parameters 'portNumber=%p'"
```

##### Windows
```shell
host i-*
 IdentityFile ~/.ssh/id_rsa
 TCPKeepAlive yes
 ServerAliveInterval 120
 User ec2-user
 ProxyCommand C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe -Command "aws ec2 start-instances --instance-ids %h --profile lab-user-mgf ; aws ec2 wait instance-running --instance-ids %h --profile lab-user-mgf ; aws ec2-instance-connect send-ssh-public-key --profile lab-user-mgf --instance-id %h --instance-os-user %r --ssh-public-key 'file://~/.ssh/id_rsa.pub' --availability-zone $(aws ec2 describe-instances --profile lab-user-mgf --instance-ids %h --query 'Reservations[0].Instances[0].Placement.AvailabilityZone') ; aws ssm start-session --target %h --profile lab-user-mgf --region eu-central-1 --document-name AWS-StartSSHSession --parameters 'portNumber=%p'"
```
**NOTES**:
- The file cannot have a `.txt` extension.  In Windows use Notepad++ to save as type `All types` without extension.
- Replace `lab-user-mgf` with your AWS CLI profile name (everywhere in `ProxyCommand`)
- If you have a custom location for your `id_rsa.pub` and `id_rsa` files you need to adjust the path behind `IdentityFile` and the path behind `--ssh-public-key` accordingly.

### Connect to your EC2 instance using SSH
To test the connection to your instance, simply copy your EC2 instance ID from the Resources section of the service catalog. EC2 instance IDs start with `i-......`
(e.g. `i-0b0f61e043ea33454`). Do **not** use the provisioned product ID.

Run the following command from your terminal to connect:
```shell
ssh i-0b0f61e043ea33454
```
## Controll your EC2 instance with the command line

### Video to connect your ec2 instance with the command line

<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/workbenches/screen-recording-ec2.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video><br><br>

Start:
```shell
aws ec2 start-instances --instance-ids i-* --profile lab-user-mgf
```

Stop:
```shell
aws ec2 stop-instances --instance-ids i-* --profile lab-user-mgf
```

Terminate:
```shell
aws ec2 terminate-instances --instance-ids i-* --profile lab-user-mgf
```

There are many more features using the CLI to control the EC2 instance from the command line, all of these can be found on the [AWS website](https://docs.aws.amazon.com/cli/latest/reference/ec2/).

### Use RStudio on your EC2 instance
If you wish to use RStudio, you may now follow the steps on the extra RStudio page.


### Copy files using `scp`
```shell
scp example.txt i-0b0f61e043ea33454:/tmp/
```

### Spark config based on available memory
To make better use of the available memory, the script `/etc/profile.d/update_spark_conf.sh` gets called everytime a user logs in.  
It will create the directory `~/.spark-conf` and make it the spark config directory by setting the `SPARK_CONF_DIR` environment variable.  
On every login it calculates the spark driver memory and the max result size.  

The `spark-defaults.conf` will have these values:
```
spark.driver.memory = 3/4 of the available memory of the instance
spark.driver.maxResultSize = half of the spark.driver.memory
spark.sql.execution.arrow.pyspark.enabled true
spark.sql.broadcastTimeout 9999
spark.driver.extraJavaOptions="-Dio.netty.tryReflectionSetAccessible=true"
spark.executor.extraJavaOptions="-Dio.netty.tryReflectionSetAccessible=true"
spark.driver.host 127.0.0.1
```

---
**NOTE**

If the config already exists (e.g. after restarting or changing the size of your instance),
it will **only** alter the memory and max result size, the rest of your config will be **untouched**.

---


## Remote Development
If you want to use your IDE (Visual Studio Code or PyCharm) to connect to the instance, try the following.

### [Visual Studio Code](https://code.visualstudio.com/download)
Make sure you have the extension "Remote - SSH" installed. Details for Visual Studio Code Remote - SSH can be found [here](https://code.visualstudio.com/docs/remote/ssh). 

Connect to a remote host 
1. Press `F1`
2. Select `Remote-SSH: Connect to Host`
3. Input the EC2 instance id into the prompt e.g. `i-0b0f61e043ea33454`
4. A new Window will appear. Select `Linux` platform if asked 
5. You can then open a folder from the instance or clone a repository from the `Explorer` tab in the left vertical menu

If you run into any problems, visit [here](https://code.visualstudio.com/docs/remote/ssh#_connect-to-a-remote-host) for detailed instructions

### PyCharm

Under PyCharm -> Preferences, go to SSH Configuration and setup a new SSH configuration with your EC2 instance ID `i-0b0f61e043ea33454` and user `ec2-user`. 
As Authentication type select `OpenSSH config and authentication agent`. 
After entering the hostname and the user, you may already click the `Test Connection` button to verify that the connection is `Successfully connected!`.

![Add PyCharm SSH Configuration](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/pycharm_remote_host.png)

Now, open a local project in PyCharm which you want to develop further on the remote EC2 instance. 
On the bottom right corner, click on the currently selected, default `Python interpreter` -> `Add New Interpreter` -> `On SSH...`. 

![Add PyCharm SSH Interpreter](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/pycharm_add_new_ssh_interpreter.png)

In the popup window select Existing, in the dropdown select your EC2 instance. Click on Next. 


![PyCharm Select Instance](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/pycharm_select_instance.png)

PyCharm will now scan ("introspect") your EC instance. Click on Next. 
In the `Project directory and Python runtime configuration` window, select `System Interpreter` on the left side. 
Click on the `...` (three dots) next to the `/home/ec2-user/mambaforge/bin/python3` Interpreter to select the `uptimize_python310` Interpreter. 
Enter `/home/ec2-user/mambaforge/envs/uptimize_python310/bin/python3` as path to the Python executable, confirm with `OK`.
Adjust the path to the `python3` executable if you want to use a custom conda environment.
In this step you could also modify the Sync folders. By default PyCharm will sync into a subfolder in `/tmp`.

![PyCharm Select Python Executable](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/pycharm_select_python_executable.png)

Click on Create. PyCharm will now connect to the instance and upload your project directory to a temporary directory as well as Update it's skeletons and indices. 
This will take 1-2 minutes to complete.

Once this is completed you can run or debug your Python code and it will be automatically executed on the remote host. Files and folder will be synchronized as well.

![PyCharm Run or Debug](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/pycharm_run_or_debug.png)

#### Install additional packages

If you need to install additional packages you can open a Terminal in PyCharm (PyCharm will open the Terminal on your local host, not on your remote host), connect to the remote host, activate the conda enviroment and install the package. 

```bash
$ ssh <instance e.g. i-0b0f61e043ea33454>
Last login: Tue Oct 18 09:09:12 2022 from localhost

       __|  __|_  )
       _|  (     /   Amazon Linux 2 AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-2/
$ [ec2-user@ip-10-10-1-163 ~]$ conda activate uptimize_python310
(uptimize_python310) [ec2-user@ip-10-10-1-163 ~]$ pip install streamlit
...
```

#### Port Forwarding

In case you develop for example a streamlit app or any other app that exposes a port and want to access it in your local browser you need to forward the remote port to your local machine. Open a new terminal and run the following example code to forward port 8501 to your localhost:

```bash
$ ssh -L 8501:localhost:8501 <instance e.g. i-0b0f61e043ea33454>
```

If your app is running on the remote server, you can open `http://localhost:8501` in your local browser to open the app.


## Automatic Mounting of NVMe Instance Store Disks

Some EC2 instance types provide **ephemeral NVMe instance store volumes** for high-speed, temporary storage. Our setup includes a script that automatically detects and mounts these disks on every system boot, ensuring they are always available for your workloads.

**Key Functions:**
- **Detection of NVMe Disks:** Identifies if ephemeral instance storage is present (supports both NVMe and non-NVMe types).
- **RAID 0 Configuration (if multiple disks):** If more than one disk is detected, sets up a RAID 0 array using `mdadm` for high-performance storage.
- **Formatting & Mounting:**
  - Formats the disk(s) with the `ext4` filesystem.
  - Mounts them to the `/ephemeral_data` path.
  - Adds an entry to `/etc/fstab` for persistent mounting on reboots.
- **Ownership:** Changes ownership of the mount path to `ec2-user`.

**Use Cases:**  
This is useful for workloads requiring **temporary high-speed storage**, such as:
- Data processing jobs
- Build caches
- Intermediate computation storage
- Temporary scratch space

> **Note:** Data in instance store volumes is **ephemeral** - it is lost when the instance is stopped or terminated.

---

## Git Configuration for `ec2-user`

By default, the data user script installs Git and sets up the global Git configuration for the default EC2 user (`ec2-user`) on Amazon Linux-based instances, including setting `git.user` and `git.email` to match the user who launched the instance.

**This setup is commonly used when:**

- Seamless git push workflow for DevOps pipelines, CI/CD workflows, or infrastructure-as-code deployments where Git is required.

> **Best Practice:**  
> Always use non-root users like `ec2-user` for such configurations to ensure least privilege and audit clarity.

## EC2 Instance Lifecycle Management
To optimize resource usage and control costs, all EC2 instances provisioned through this environment follow a managed lifecycle. Please review the details below to understand what to expect during your instance's lifetime.

### Lifecycle Overview
--  **kProvisioning:**
When you request an EC2 instance, it is launched with your selected configuration and tagged with your user ID for tracking and access control.
--  **Idle Shutdown:**
If your instance remains idle (e.g., low CPU/GPU utilization and no active SSM sessions) for a defined period (typically 4 hours), it will be automatically stopped to save costs. You can restart your instance as needed.
--  **Automatic Termination:**
from their creation date. This policy ensures that unused resources do not accumulate and helps manage AWS costs.

**ALL EC2 instances are automatically terminated after 30 days** 
- You will receive notifications (if configured) before termination
- All data stored on the instance (including the root volume and ephemeral storage) will be deleted upon termination.
- Make sure to back up any important data to S3 or other persistent storage before the 30-day period ends.

-- **Manual Termination:**
You can also manually terminate your instance at any time via the AWS Console Service Catalog.

### Important Notes
-- **Data Persistence: **
Data stored on the EC2 instance itself is ephemeral. Always use S3 buckets or other persistent storage for important files.
-- **Re-provisioning:**
After termination, you can request a new instance at any time. The new instance will not retain data or configuration from the previous instance unless you have backed up and restored it.

---

This product is meant for experienced Spark developers. The EMR cluster will be terminated after four hours of idle time so please version control to save your work. You can refer to [this page](https://docs.uptimize.merckgroup.com/lab/workbenches/version-control-and-repos/) and to its "EC2 instance" section to know more about version control.

## Access to Foundry

To enable Foundry on your EMR cluster, you need to input your personal JWT token as a parameter for the EMR product. You can find/create this token in Foundry in your account settings.

![FoundryToken](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/foundry-token.png)

If your token is invalid, if there is an error in it or if you launched your EMR cluster without your Foundry JWT token, you can run the command:

```shell
cluster_id=<YOUR_CLUSTER_ID>
foundry_jwt_token=<YOUR_FOUNDRY_TOKEN>

nodes=`aws ec2 describe-instances --filters Name=tag:aws:elasticmapreduce:job-flow-id,Values=$cluster_id --profile <YOUR_PROFILE_NAME> --query 'Reservations[*].Instances[*].[InstanceId]' --output text`

for node in $nodes; do ssh ec2-user@$node "egrep '^jwt=.*' /home/ec2-user/.foundry-local/config -v  > temp && mv temp /home/ec2-user/.foundry-local/config && echo \"jwt=$foundry_jwt_token\" | tee -a /home/ec2-user/.foundry-local/config"  ; done
```

where you replace `<YOUR_CLUSTER_ID>` by the id of the EMR cluster you launched and `<YOUR_FOUNDRY_TOKEN>` with your personal Foundry JWT token.

## Access your EMR cluster from the Service Catalog

From the `Provisioned Products` page in the Service Catalog, select the EMR product you previously launched. Once it is in the `Available` state, navigate to the `Events` tab. There you can find the link to your cluster.

![EMRClusterLink](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/emrClusterLink.png)

From this `Events` tab, you can also find the name of the S3 bucket that has been provisioned for you.

## Connect to the Master node

You can connect to the Master node via SSH. You can setup your SSH configuration by following the steps described [here](https://docs.uptimize.merckgroup.com/lab/workbenches/ec2-instance/).

To connect to the Master node, navigate to the `Hardware` tab, and select the Master node by clicking on its intance group's id. There you can find the underlying EC2 instance's id.

![EMR_Hardware](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/emr-hardware.png)

![EMR_Master](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/emr-master-id.png)

Then from your terminal/powershell, connect to the node by using the command:

```shell
ssh <your-instance-id>
```

Once logged in your master node, you can use the Spark Shell by entering the command:

```shell
spark-shell
```

You can also access a PySpark shell by running the command:

```shell
pyspark
```

When logged in via SSH, you can launch a python shell or run python applications. When you do, make sure to use

```shell
python3
```

in order to have access to the pre-installed libraries such as foundry-local.

## Launch a Spark Application on your cluster

After developping a Spark application, upload the scripts on the S3 bucket that has been provisioned for you. The data you use in your Spark applications can be uploaded on the same S3 bucket or can be accessed from Foundry. Please see the documentation [here](https://docs.uptimize.merckgroup.com/lab/data/how-to-read-and-write-data/) to see how to use the library `foundry-local` to access Foundry data.

In order to launch your Spark application on your EMR cluster, navigate to the `Steps` tab. Then choose `Add Step`.

Under `Step type`, select "Spark application". Edit the `Name` as you want. You can choose to run the application either in `Cluster` or in `Client` mode. Then, you can add `spark-submit` options, enter the location of your application file and finally add your application arguments. You can leave `Continue` under the `Action on failure` option. To launch your application, click on `Add`.

![EMRSparkStep](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/emr-spark-application.png)

You can find more detailed documentation on how to add a Spark step to your EMR cluster [here](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-submit-step.html).

## Pricing

The EMR Cluster product launches managed EC2 instances. You can find the pricing for the different instance types of EC2 instances [here](https://docs.uptimize.merckgroup.com/lab/workbenches/instance-types/).

In addition to these charges, Amazon charges the use of the EMR cluster itself. You can find information about EMR pricing [here](https://aws.amazon.com/emr/pricing/).

---

## Pre-installed Conda environments
We pre-install an environment called `uptimize_python310` which includes Python3.10, pyspark, pandas and foundry-local.
It's located in `/home/ec2-user/anaconda3/envs/uptimize_python310`. The respective Jupyter kernel is called `conda_uptimize_python310`. We highly recommend you to use this environment.

## SageMaker kernels

The `conda_uptimize_python310` kernel should be your default go-to kernel. It has an up-to-date Python 3.10 version as well as `foundry-local` pre-installed.
From inside a running notebook with that Kernel, you can install additional packages with `!mamba install <packagename> -y` or even `!pip install <packagename>`
(if the package is not available on [conda-forge](https://anaconda.org/conda-forge)). The packages are persisted between restarts of the notebook instance.

In case you want to create your own kernel, follow these steps:

Open a Terminal in Jupyter or Jupyter Lab and switch to the `ec2-user`. Perform all steps below as this user.
```shell
sudo su - ec2-user
```

Expose the name of your new environment as variable, as we will re-use it several times.
```shell
export ENV_NAME=uptimize_python_custom
```

Now, create an environment (`ipykernel` is a mandatory package), you could add additional custom packages to the command below:
```shell
mamba create -n $ENV_NAME python=3.10 ipykernel -y
```

When this has finished, you need to link this environment to the default environment folder to make it available for SageMaker:
```shell
ln -s /home/ec2-user/SageMaker/mambaforge/envs/$ENV_NAME \
/home/ec2-user/anaconda3/envs/$ENV_NAME
       
```

SageMaker searches for new environments every 3 minutes. At the latest, 3 minutes after you have linked your environment or you have started SageMaker your Kernel will appear.
Reload your Jupyter or Jupyter Lab browser window and start a new notebook with your Kernel.

**Important**: The new of the Kernel will start with "conda_" as prefix, e.g. `conda_uptimize_python_custom`.

---

# Best practices and guidelines

## Resources management and lifecycle

- If you already have an instance running, please **re-use your existing instances**.
- Resources might be stopped/terminated automatically when certain budget thresholds are reached. For that reason, please
**frequently use version control** to save your code.
- Start with a **small instance type** and resize the instance if required. 
- When you are not using an EC2 or SageMaker instance, please **stop** it. It will be stopped after a few hours of
inactivity in case you forget to do so.
- When instantiating a new EC2 instance or SageMaker notebook, consider the amount disk storage required based on your use case. We recommend to start with a **small disk storage size** and store most of your data on **S3 and/or Foundry**.
- All EC2 and Sagemaker instances are **automatically terminated after 30 days** of use. You will receive **Email notifications** a few days before your instance is terminated to give you enough time to save your work.

## Product update/resizing
Products can be updated to modify their configuration like increasing/reducing storage or changing the instance type by going
to your provisioned product page and clicking on the top right button `Actions/Update`.
To backup data you can use Foundry or your Personal S3 Bucket.


## Data ingestion

- Currently, the only approved data sources for the UPTIMIZE Lab are [Palantir Foundry](https://palantir.mcloud.merckgroup.com/workspace/home/), and our [whitelisted URLs](https://mdigital.sharepoint.com/:x:/s/Unit8SoWCollaboration-AWSLabstesting/ER-s1k7Q39VDiC5XV-GHrNQByMOs0Vtw7bucavlRSWHDMQ?email=adam.vegh%40external.merckgroup.com&e=yLgAAJ). 
- The data classification for the UPTIMIZE AWS Lab is confidential, that is secret data cannot be ingested.
- Azure DevOps our code repo and version control tool, has not had an official approval to host confidential data and code. While we see there is very minimal risk at hosting confidential data or code in Azure DevOps particularly since the Office 365 estate and environment have and are being used extensively at Merck the usage of AzureDev Ops will be something you will need to weigh and risk assess.
- The UPTIMIZE Lab is not intended to be used for ingesting data directly from a source system. 
- Currently, the UPTIMIZE Lab is not GxP qualified and can therefore not be used for processing GxP data.
- **For users in China:** All data uploaded by you to the UPTIMIZE AWS Lab will be hosted in Frankfurt (Germany). Uploading data from certain categories (e.g. Personal data and "Important" data) to the AWS Lab **is not allowed** according to China´s Cyber Security, Data Security and Personal Information Protection Laws. If you are unsure about the nature of the data you are about to ingest, please get in touch with Legal first.

## Data storage

- Use your personal S3 bucket for large temporary, intermediate datasets.
- Use Foundry project folders for long-term storage and for sharing data with colleagues.
- Use [version control](https://docs.uptimize.merckgroup.com/lab/workbenches/version-control-and-repos/) as much as possible. If your instance is terminated, all the data stored on it will be lost if it is not saved in a repository.

## Dependency management

We generally encourage to use `mamba` as package manager. It is pre-installed on the EC2 instances and in the SageMaker notebooks.

## Product customization

You're given root access to your product (EC2/SageMaker), which allows you to run commands (e.g. install packages/libraries/kernels) to customize it to better fit your use case.
The operating system installed is [Amazon Linux 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managing-software.html).

As the products are intended to be temporary, please store the commands that you executed in a shell script and save it in an AzureDevops repository. That way, when you launch a new product you can just clone the repository and execute shell script.

1. Create configuration script
e.g. `nano config.sh`

```shell
#!/usr/bin/env bash
set -o xtrace
set -ue

sudo yum install -y dotnet-sdk-6.0 
```
2. Make the file executable `sudo chmod +x config.sh`
3. Commit it and push to an AzureDevOps repository
4. In the new product clone the AzureDevOps repository
5. Execute the script `bash config.sh`

## URL whitelisting process

If you need to reach a specific URL from the Lab workbenches, please follow this process to add the URL to our firewall whitelist:

- Check if the URL is already whitelisted in this [XLS sheet](https://mdigital.sharepoint.com/:x:/s/Unit8SoWCollaboration-AWSLabstesting/ER-s1k7Q39VDiC5XV-GHrNQByMOs0Vtw7bucavlRSWHDMQ?email=adam.vegh%40external.merckgroup.com&e=yLgAAJ)
- If yes, you can already reach it
- If no, please add it as an entry to the [XLS sheet](https://mdigital.sharepoint.com/:x:/s/Unit8SoWCollaboration-AWSLabstesting/ER-s1k7Q39VDiC5XV-GHrNQByMOs0Vtw7bucavlRSWHDMQ?email=adam.vegh%40external.merckgroup.com&e=yLgAAJ) and fill all required columns (URL, Requestor, Use case, Status)
- The Lab core team will check the [XLS sheet](https://mdigital.sharepoint.com/:x:/s/Unit8SoWCollaboration-AWSLabstesting/ER-s1k7Q39VDiC5XV-GHrNQByMOs0Vtw7bucavlRSWHDMQ?email=adam.vegh%40external.merckgroup.com&e=yLgAAJ) on a regular cadence and will add will whitelist new entries based on the information provided

## Improving the user docs

All Lab users have contributor access to the user docs repository. In case you find want to improve a specific section of the docs, add a completely new section or just fix a typo, please follow the below steps:

- Find the user docs repository by clicking "Edit this page on Azure DevOps" on any of the user docs packages
- Create a new branch
- Commit your changes and do a pull requested
- The Lab core team will approve and merge the pull request after a careful review

If you want to add static assets like images or videos, please contact Kulasekara Pandian, since there currently is no direct solution yet to add assets as a user.

---

## Demonstration video

<video width="100%" controls>
  <source src="https://docs.uptimize.merckgroup.com/docs-assets/workbenches/version-control-video.mov" type="video/mp4">
  Your browser does not support HTML video.
</video>

## Repositories

Repositories can be cloned by using HTTPS Git Credentials.
1. Open the repository that you want to clone e.g. https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/UPTIMIZE-AWS-Docs
2. Click on the `Clone` button
3. Run `git clone` with the `https` URL that appears. e.g. `git clone https://dev.azure.com/Uptimize/UPTIMIZE-AWS/_git/UPTIMIZE-AWS-Docs`
4. Click `Generate Git Credentials` and use the visible credentials in the `git clone` prompt

## Version control

### SageMaker Notebooks

* In Jupyter Lab, there are two ways to do version control.
   1. Open a new terminal by clicking on **+** -> **Other** -> **Terminal**. Run the command `cd SageMaker` and from this folder, you can clone your repository and manage it.
   2. Jupyter Lab offers a version control functionality that you can find on left side of the console. Follow the prompt to clone your repository. You can also commit/push/pull from this tab.

![JupyterLabVC](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sagemaker-vc.png)

* In Jupyter, select **New** -> **Terminal** to open the command line. From there, run the command `cd SageMaker` and from this folder, you can clone the repository and manage it.

![JupyterVC](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sagemaker-jupyter-vc.png)

### EC2 instance

Once connected to your EC2 instance, you can run the `git clone` command in the command line to import your repository.

## Python artifacts feed
Azure pypi feeds can be used by first installing required packages into your Python environment:
```shell
pip install dotnetcore2 keyring artifacts-keyring
```

then setting using the `--extra-index-url` option in the pip install.

Example for installing Foundry packages `foundry-local` and `pyfoundry-auth` which are available in the [Uptmize `artifacts` feed](https://pkgs.dev.azure.com/Uptimize/_packaging/artifacts%40Local/pypi/simple/)

```shell
pip install --extra-index-url https://pkgs.dev.azure.com/Uptimize/_packaging/artifacts%40Local/pypi/simple/ foundry-local pyfoundry-auth
```

A message should appear redirecting to `https://microsoft.com/devicelogin` and asking to enter the provided code.
After entering the code in the microsoft website and logging in into it, the pip command should resume and install the packages asked.

---

# RStudio Server

## Launch EC2 instance

In order to start using RStudio on EC2, you need to first install prerequisites, launch an instance and connect to it by following the steps on [EC2 instance page](./ec2-instance.md) until and including the step "Connect to your EC2 instance using SSH".

## Start RStudio Server

When connected to your instance, start RStudio Server by running:

```shell
sudo rstudio-server start
```

You will need to run this command every time your instance is restarted.

If you wish for RStudio Server to be started automatically, run:

```shell
sudo systemctl enable rstudio-server
```

You can always check if the server is running with:

```shell
sudo rstudio-server status
```

![RStudio status](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/rstudio-status.png)

## Connect to RStudio Server

Once RStudio Server is running, the below command makes it available in the browser on your local machine.

You only need to adjust two parameters: **instance_id** (e.g. `i-0b0f61e043ea33454`) and **profile_name** (e.g.`lab-user-mgf`).

#### macOS/Linux
```shell
aws ssm start-session --target instance_id --profile profile_name --region eu-central-1 --document-name AWS-StartPortForwardingSession --parameters '{"portNumber":["8787"], "localPortNumber":["8787"]}' 
```

#### Windows
```shell
aws ssm start-session --target instance_id --profile profile_name --region eu-central-1 --document-name AWS-StartPortForwardingSession --parameters 'portNumber=8787,localPortNumber=8787'
```


After that you can open RStudio in a browser under [localhost:8787](localhost:8787).

You'll be able to use it after logging in with credentials:
```
Username: ec2-user
Password: aws
```

![RStudio Server](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/rstudio.png)


## Connect to RStudio Server in the background

If the above works for you, but you wish to run the process in the background, without a need to keep a command line window open, you may use these commands instead:

#### macOS/Linux
```shell
nohup aws ssm start-session --target instance_id --profile profile_name --region eu-central-1 --document-name AWS-StartPortForwardingSession --parameters '{"portNumber":["8787"], "localPortNumber":["8787"]}' &
```

#### Windows
```shell
start C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe -ArgumentList '-Command "aws ssm start-session --target instance_id --profile profile_name --region eu-central-1 --document-name AWS-StartPortForwardingSession --parameters portNumber=8787,localPortNumber=8787"' -WindowStyle Hidden
```

Please note that with this Windows command you are losing output logs which are helpful if something goes wrong.

---

# Instance types

## EC2

For EC2 Instance types cost details you can refer the AWS docs.
https://aws.amazon.com/ec2/pricing/on-demand/

![EC2 instance info](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/ec2_instance_types.png)

# Graviton (ARM) Instance Support in Uptimize

## Overview

Uptimize now supports launching EC2 instances based on AWS Graviton processors (ARM64 architecture). These instances offer significant performance and cost benefits for many workloads, especially those optimized for ARM.

## Supported Graviton Instance Types

The following Graviton instance types are available for selection:
> **Note:** If you require additional ARM64 instance types for your workloads, please contact the AWS Platform Team for assistance.

- `i8g.xlarge` (4 vCPU, 32 GiB RAM, 1x 118 GiB NVMe)
- `i8g.2xlarge` (8 vCPU, 64 GiB RAM, 1x 474 GiB NVMe)
- `i8g.4xlarge` (16 vCPU, 128 GiB RAM, 1x 950 GiB NVMe)
- `i8g.8xlarge` (32 vCPU, 256 GiB RAM, 2x 950 GiB NVMe)
- `i8g.12xlarge` (48 vCPU, 384 GiB RAM, 2x 1425 GiB NVMe)

These instance types use the latest Amazon Linux 2023 ARM64 AMI, built and managed via the Uptimize Image Builder pipeline.

## Benefits of Graviton Instances

- **Performance:** Optimized for ARM workloads, offering better price/performance compared to x86.
- **Cost Efficiency:** Lower cost per vCPU and per GiB RAM.
- **Energy Efficiency:** Reduced power consumption.

## RStudio Server Limitation

> **Important:**  
> RStudio Server is **not supported** on Graviton (ARM) instance types.

- The ARM64 architecture does not have official RStudio Server binaries for Amazon Linux 2023.
- Attempts to install RStudio Server on these instances will fail or result in unsupported behavior.
- If your workflow requires RStudio Server, please select an x86_64 instance type (e.g., `t3`, `m5`, `c5`).

## How to Select Graviton Instances

When launching an EC2 instance via the Service Catalog, choose one of the supported Graviton instance types from the dropdown menu. The system will automatically provision the correct ARM64 AMI and configure the instance for optimal performance.


## Additional Notes

- All standard Uptimize features (Python, Git, Docker, etc.) are available on Graviton instances.
- RStudio Server is **skipped** in the ARM image build process.


---


## Sagemaker

![Sagemaker instance info](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/sagemaker-instances.png)

---

# Data

## Introduction

In this section you can learn everything about how to access data and how to store data in the Lab.

## Contents

1. [ How to read & write Foundry data](https://docs.uptimize.merckgroup.com/lab/data/how-to-read-and-write-data/): This section explains how to access, read and write the data.

2. [Storage and data sharing](https://docs.uptimize.merckgroup.com/lab/data/storage-and-data-sharing/): This explains how to share and save the data.

---

# How to read & write Foundry data

We recommend using the Python library `foundry-dev-tools` ([GitHub](https://github.com/emdgroup/foundry-dev-tools) | [Docs](https://emdgroup.github.io/foundry-dev-tools/index.html))
developed at Merck for simplified reading/writing of Foundry datasets.

UPTIMIZE Conda environments already have the library installed. If you use a different environment you can install the library following the steps in the respective section of this page. 


## SSO Authentication

We created a Third Party Application in Foundry which is used for authenticating users.
Once a function of `foundry-dev-tools` is run to access data sitting in Foundry, the auth process is started.

Example:

```python
from foundry_dev_tools import FoundryRestClient
rest_client = FoundryRestClient()
rest_client.get_user_info()
```

Steps:
1. Execute the above lines - a message with a URL will appear - visit this URL in your browser
2. Once opened, log in to Foundry (if necessary) using your Merck account and allow the `UPTIMIZE AWS` application
3. Copy the authorization code to the prompt of your Python commands and press Enter

The result `get_user_info()` should appear, showing your Foundry user information.
At this point your temporary credentials are stored locally and will be used for future calls to Foundry.

## Foundry IO examples

Please visit the official [Docs](https://emdgroup.github.io/foundry-dev-tools/index.html) for usage instructions.

## Upgrading from foundry-local

Please follow this [StackOverflow Article](https://stackoverflow.uptimize.merckgroup.com/articles/1194#heading-upgrade-your-projects-from-foundry-local-to-foundry-devtools) to upgrade the imports in your Python code.

## SageMaker PySpark version
SageMaker Notebook pre-installed Conda environments have `sagemaker-pyspark` which is a package with an old dependency for Spark 2.4. This can be problematic when using it an up-to-date Java version.
While a better solution is being implemented, a mitigation is to uninstall `sagemaker-pyspark` and upgrade `pyspark` as follows:
```shell
pip3 uninstall sagemaker-pyspark -y
pip3 install --upgrade pyspark==3.2.1
```

---

# Storage and data sharing

The three types of storage that are currently available in Workbenches, ranked from the most volatile to the most persistent
are the following:
- Instance storage
- Personal S3 Bucket
- Foundry

## Instance storage
This is the instances' disk storage. Its size can be selected from the [Service Catalog](https://docs.uptimize.merckgroup.com/lab/workbenches/how-to-use-service-catalog/) launch page.
When you download data from Foundry it will land there at first, so you will have to select an appropriate size according to your needs.
<!-- TODO: should we talk about costs of SSD here? -->
### Lifecycle
This storage is deleted permanently when the workbench it is linked to is terminated. It **cannot** be accessed while the workbench
is not running.

## Personal S3 Bucket
An S3 Bucket is launched with each workbench product. Only you have access to it and you can store an unlimited amount of data.
You should use it to store temporary or intermediate datasets rather than use the instance's storage.
### Lifecycle
This storage is deleted permanently when the workbench it is linked to is terminated. However, it **can** be accessed (read and write)
even if the linked workbench is not running.
### Usage
You can find your personal bucket name in the `Events/PROVISION_PRODUCT/Output` section of your Provisioned Product page or
in the terminal you can use the `$PERSONAL_BUCKET` bash environment variable. 
The credentials to access this bucket are included by default in your instance.
![Bucket Name in Service Catalog](https://docs.uptimize.merckgroup.com/docs-assets/workbenches/data-bucket-name.png)

You can also use the [console](https://s3.console.aws.amazon.com/s3/home?region=eu-central-1) to navigate, download and upload.

**Important**: When uploading, server-side encryption is required. 

#### CLI
To copy data from/to s3 you can use the `aws s3 cp` command which is preinstalled on the instances.
Its usage is similar to the regular `cp` shell command.
Assuming the following local folder structure:
- `folder1/`
  - `file1`
  - `file2`

You can copy your local folder to S3:
```bash
aws s3 cp folder1 s3://$PERSONAL_BUCKET/folder1 --recursive
```

You can then copy the folder from S3 to your local filesystem:
```bash
aws s3 cp s3://$PERSONAL_BUCKET/folder1 ./folder2 --recursive
```

You can also copy the remote folder into another S3 location:
```bash
aws s3 cp s3://$PERSONAL_BUCKET/folder1 s3://$PERSONAL_BUCKET/folder2 --recursive
```

You can remove the contents of a folder with `aws s3 rm`
```bash
aws s3 rm s3://$PERSONAL_BUCKET/folder1 --recursive
```

#### Python - `pandas`
To interact with S3 using Python, you can use the `boto3` library.
First, add the following libraries to your virtual/conda/mamba environment or your global python3 interpreter:
```bash
cat > requirements.txt << EOF
boto3==1.20.51
# needed for the example code to work, we want to copy DFs from and to S3
pandas==1.3.5
# needed for parquet files read/writes
pyarrow=7.0.0
EOF

# for example:
python3 -m pip install -r requirements.txt
```

To upload a pandas DataFrame to S3, as a CSV:
```python
from io import BytesIO
import os
import pandas as pd
import boto3

# Create dummy dataframe
data = {'Name':['Alice', 'Bob', 'Carol', 'Dave'], 'Age':[20, 21, 19, 18]}
df = pd.DataFrame(data)

# get the bucket name from environment
bucket_name = os.getenv("PERSONAL_BUCKET")

# create a client object
client = boto3.client("s3")

# upload to s3
with BytesIO() as io_buffer:
    df.to_csv(io_buffer, index=False)
    io_buffer.seek(0)
    client.upload_fileobj(io_buffer, bucket_name, "python/df.csv")
```

To download a CSV from S3, and parse it as a pandas DataFrame:
```python
from io import BytesIO
import os
import pandas as pd
import boto3

# get the bucket name from environment
bucket_name = os.getenv("PERSONAL_BUCKET")

# create a client object
client = boto3.client("s3")

obj = client.get_object(Bucket=bucket_name, Key="python/df.csv")

# download from s3
with BytesIO(obj["Body"].read()) as io_buffer:
    new_df = pd.read_csv(io_buffer)
```

To upload a pandas DataFrame to S3, as a Parquet file:
```python
from io import BytesIO
import os
import pandas as pd
import boto3

# Create dummy dataframe
data = {'Name':['Alice', 'Bob', 'Carol', 'Dave'], 'Age':[20, 21, 19, 18]}
df = pd.DataFrame(data)

# get the bucket name from environment
bucket_name = os.getenv("PERSONAL_BUCKET")

# create a client object
client = boto3.client("s3")

# upload to s3
with BytesIO() as io_buffer:
  # Warning: requires the pyarrow package, fastparquet fails
  df.to_parquet(path=io_buffer, engine='auto', compression='snappy')
  io_buffer.seek(0)
  client.upload_fileobj(io_buffer, bucket_name, "python/df.parquet")
```

To download a Parquet file from S3, and use it as a pandas DataFrame:
```python
from io import BytesIO
import os
import pandas as pd
import boto3

# get the bucket name from environment
bucket_name = os.getenv("PERSONAL_BUCKET")

# create a client object
client = boto3.client("s3")

# download from s3
obj = client.get_object(Bucket=bucket_name, Key="python/df.parquet")
with BytesIO(obj["Body"].read()) as io_buffer:
  # Warning: requires the pyarrow package, fastparquet fails
  new_df = pd.read_parquet(io_buffer)
```


## Foundry
Foundry is used as the source of truth for data, for long term storage and to share data with colleagues. For more details
about reading and writing from and to Foundry, have a look at the [Foundry how to](lab/data/how-to-read-and-write-data/).
### Lifecycle
The lifecycle of this storage is independent of the workbenches in Service Catalog and can be used for long-term storage.

---

# Release Notes

Please browse through the below pages to read the quarterly UPTIMIZE AWS Lab Release Notes.

---

# What's New

High confuguration EC2 instances were made available to Lab users.  Specifically, this was enabled for those users with "power-user" access

---

# What's New

Together with the Text Analytics team, we upgraded the [NLP Sagemaker Kernel](https://docs.uptimize.merckgroup.com/lab/workbenches/nlp/) to feature the newest version of Spark NLP

---

# What's New

We reached > 150 Lab users

Together with the text analytics team we added enterprise-grade NLP and OCR capabilities via a new kernel in the UPTIMIZE AWS Lab Sagemaker. Find the docs about this [here](https://docs.uptimize.merckgroup.com/lab/workbenches/nlp/) (VPN Needed)

We added compute and Sagemaker savings plans resulting in significant cost savings across Lab accounts

We updated our [support concept](https://docs.uptimize.merckgroup.com/lab/introduction/getting-help/) for the Lab