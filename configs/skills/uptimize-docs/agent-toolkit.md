# UPTIMIZE Agent Toolkit (Early Preview)

## Introduction
UPTIMIZE Agent Toolkit is an end-to-end foundation that helps teams quickly build and launch reliable AI agents that can 
run tasks, remember conversations, connect to business systems, be monitored, be continuously improved, and stay within 
clear safety controls. 

---
## Read This First!
Please make sure that you have read and understood the following things before using Uptimize Agent Toolkit:

* Agent Toolkit is not intended for use in regulated environments.
* Agent Toolkit is not intended for use for public-facing products.
* Agent Toolkit is not intended for use with secret data.
* Agent Toolkit is at the public preview stage. Therefore, do expect technical glitches which will be fixed in production-ready release.
* In case you want to process data containing Personal Identifiable Information (PII), the same terms and conditions apply as mentioned in section 5 for usage of myGPT Suite.

---

![Agent Toolkit Overview](/assets/nlp/agent-toolkit/agenttoolkit_intro.png)

---

## Access request
You can request access to the Agent Toolkit by filling out the 
[Agent Toolkit Access Request Form](https://agenttoolkit.apps.p.uptimize.merckgroup.com/). 
You will receive an email with details of runtimes and/or memory along with api key to set up your environment.

![Namespace Association](/assets/nlp/agent-toolkit/namespace.png)

A **Usecase maps** to a **Namespace**, and that namespace acts as the central container for everything related to that use case. 
From there, multiple Runtimes, Memories and background resources like S3 Bucket, Secret Managers are organized under the same namespace so execution, context, and safety controls stay grouped and governed together.

---
## Support & Contact

For questions, issues, or assistance with Agent Toolkit, please reach out to us through the following channels:

**📧 Email**: gpt-api@merckgroup.com

---

---

## UPTIMIZE Agent Toolkit CLI
Agent Toolkit CLI is the command-line companion to Agent Toolkit that lets teams quickly create, configure, deploy, and manage AI agents from a single workflow. It simplifies day-to-day operations with straightforward commands, faster setup, and consistent execution across environments, so teams can move from idea to production with less effort.

---

## Prerequisites

Before you begin, ensure the following:

* Python **>= 3.11 <= 3.13** is installed
* You are working inside a **Python virtual environment**
* You have access to the **Merck Network Or Connected to VPN**
* You have a valid **Agent Toolkit API Key**

---

## 1. Installing Agent Toolkit

Install the Agent Toolkit CLI using `pip`.

### Command

```shell
uv pip install uptimize_agenttoolkit\
  --extra-index-url https://api.nlp.p.uptimize.merckgroup.com/pypi/
```

You can set the extra index URL permanently by exporting the `PIP_EXTRA_INDEX_URL` environment variable in your shell profile.

```shell
export PIP_EXTRA_INDEX_URL=https://api.nlp.p.uptimize.merckgroup.com/pypi/
```

### Verify Installation

You can verify that the installation was successful by checking the version of the Agent Toolkit CLI.

```shell
agenttoolkit --version
0.0.6
```

---

## 2. Initialize Agent Toolkit in your project
To initialize Agent Toolkit in your project, run the following command in your terminal:

```shell
agenttoolkit project init
```

### This command connects to Agent Toolkit API using API key
* Fetches your namespace and available runtimes
* Scaffolds a project template based on a selected runtime protocol
* Writes:
  - `agenttoolkit.json`
  - `.env`
  - starter code files for the selected protocol and framework (main.py, requirements.txt, etc.)

### Interactive prompts you'll see (in order)

| Prompt | Default value                               | Description |
|---|---------------------------------------------|---|
| Project name | --                                           | Name for the project; the local directory will be created using this name. |
| Agent Toolkit base URL | `https://api.nlp.p.uptimize.merckgroup.com` | Base URL for the Agent Toolkit API. |
| Agent Toolkit API key | --                                           | API key you received in the access approval email. |
| Runtime selection | --                                           | Choose a runtime from a numbered list; the runtime determines the protocol and environment your agent will run in. |
| Framework selection | Depends on runtime                          | **A2A:** prompts to select an A2A framework. **HTTP:** framework prompt shown (defaults to `strands`). **MCP:** no framework prompt. |
| Python version | `3.13`                                      | Select Python version (`3.10`, `3.11`, `3.12`, `3.13`). |
| Entrypoint filename | main.py                                     | Option to customize the entrypoint filename (asked if you choose to use a different filename). |
| Final confirmation | --                                           | Confirm whether to proceed with project creation. |

**Note:** Runtime type is auto-detected from the runtime you choose in the request form, so it usually isn't asked separately.

---

## 3. Secrets Management
Agent Toolkit CLI provides a seamless way to manage secrets required for your agent to run. You can add, update secrets using simple commands.

```shell
agenttoolkit secrets manage
```
This command will prompt you to enter the name of the secret and its value. 
The secrets are securely stored and can be accessed by your agent during runtime without hardcoding them in your codebase.

---

## 4. Deploying Your Agent
Once you have initialized your project and added the necessary secrets, you can deploy your agent to the selected runtime environment.


```shell
agenttoolkit runtime deploy
```

This command prompts you to modify advanced configurations related to runtime, you can configure them before deploying at this stage.

| Prompt | Description |
|---|---|
| Header forwarding rules | The updated configuration for HTTP request headers that will be passed through to the runtime. |
| Session timeout settings | Timeout in seconds for idle runtime sessions. When a session remains idle for this duration, it will be automatically terminated. Default: 900 seconds (15 minutes).|
| Environment variables for your container | Environment variables to set in the AgentCore Runtime environment.|
| Retry safety token for update requests | A unique, case-sensitive identifier to ensure idempotency of the request.|

You can skip these configurations if they are not relevant for you by entering "N" (default) for the prompt `Do you want to modify advanced runtime configuration before deploy?`

As a pre-deployment dependency, your codebase is scanned for security issues or vulnerabilities. If any high or critical issues are found, deployment will be aborted unless they are fixed.
You can also manually scan your codebase before deploying at all stages of your deployment. You will find more details [here](agent-toolkit/cli/scanner).

The process will continue further to build container for your codebase and update the runtime. 
You can monitor the logs for this step using [logs command](agent-toolkit/cli/#4.-logging-and-monitoring)

Upon successful deployment you will be provided with following details.
- **ARN**: Agentcore runtime ARN
- **Integration Hub URL**: You can use this url to configure integration hub agents/mcps.
- **MCP Invoke URL**: used for testing the agents/mcp with any clients (We recommend using this method for testing purposes only, and users are required to use integration hub for production consumption)

---

## 4. Logging and Monitoring
Agent Toolkit provides logging and monitoring capabilities to help you keep track of your agent's performance and troubleshoot any issues that may arise. You can view logs for your agent using the following command:

### Build logs
```shell
agenttoolkit logs codebuild
```
This command displays the logs related to the build process of your agent, including any errors or warnings that may have occurred during the build. You can use these logs to identify and fix issues in your code before deploying your agent.



### Runtime logs
```shell
agenttoolkit logs runtime
```
This command prompts you to select the duration of the logs you want to view and then displays the logs for your runtime. You can use these logs to monitor the behavior of your agent, identify any errors or issues, and optimize its performance over time.

### Tail logs
```shell
agenttoolkit logs tail {runtime/codebuild}
```
This command allows you to continuously stream logs for either the build process or the runtime. This is particularly useful for real-time monitoring and debugging, as you can see log entries as they are generated.

---
## 5. Metrics
Agent Toolkit also provides metrics to help you understand the performance of your agent. You can view metrics for your agent using the following command:

```shell
agenttoolkit runtime metrics
```
This command prompts you to select the duration for which you want to view the metrics and then displays various 
performance metrics for your runtime, such as Sessions, CPU usage, memory usage, number of invocations, error rate, and 
throttle rate, this command also provides you with the trends of metric over the period of time.

---
## 6. Scanner
Agent Toolkit CLI includes a security scanner that checks your codebase for potential security vulnerabilities before deployment. You can run the scanner using the following command:

```shell
agenttoolkit scanner scan
```
This command scans your codebase for security issues and provides a report of any vulnerabilities found. If any high or 
critical issues are detected, it is recommended to address them before deploying your agent to ensure the security and 
integrity of your application. A detailed report will be stored in the project directory for your reference.

You can get more details about the scanner in the [Scanner documentation](agent-toolkit/cli/scanner).

---
## 7. Invoke
Agent Toolkit CLI allows you to invoke your agent directly from the command line for testing purposes. You can use the following command to invoke your agent:

```shell
agenttoolkit runtime invoke
```

This command gets the tools and input required for invoking the agent from you and then makes a request to the runtime to invoke the agent with the provided input. This is a useful way to test your agent's functionality and ensure that it is working as expected before deploying it to production.

This command may fail if your runtime is in error state, in that case you can check the runtime logs for more details using `agenttoolkit logs runtime` command and fix the issues before invoking again.

This method is recommended for testing purposes only, and users are required to use [Integration hub](agent-toolkit/integration-hub) for production consumption.

---

## 7. Get runtime details
You can get the details of your runtime using the following command:

```shell
agenttoolkit runtime get
```
This command provides detailed information about your runtime, including its current status, configuration. This information can be useful for checking the configurations of your runtime and troubleshooting any issues that may be affecting its performance.

## 8. List runtimes
You can list all the runtimes associated with your namespace using the following command:

```shell
agenttoolkit runtime list
```
This command displays a list of all the runtimes in your namespace along with their current status. This can be helpful for managing multiple runtimes and keeping track of their statuses.

## 9. Memory management
Agent Toolkit CLI also provides commands for listing and getting details of memories associated with your namespace.
To list all memories in your namespace, use the following command:

```shell
agenttoolkit memory list
```
This command displays a list of all the memories in your namespace.

To get details of a specific memory, use the following command:

```shell
agenttoolkit memory get
```
This command prompts you to select a memory from the list and then provides detailed information about the selected memory, including its type and configurations. 
This can be useful for managing your memories and ensuring that they are configured correctly for your agent's needs.

Memories can be directly managed using SDKs supported by Agentcore runtime, more details about memory management can be found in the [Memory documentation](agent-toolkit/memory).

---

If you want to interact with Agent Toolkit API directly without using CLI, you can refer to the [API documentation](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs) for more details on how to do that.

---

## Scanner

The **Security Scanner** is a comprehensive security service that automatically detects vulnerabilities, malicious patterns, and security threats in AI agents and tools before they are deployed to production. It helps prevent security breaches, ensures compliance with security policies, and protects sensitive data by scanning your code for potential risks.

### Key Benefits

- **Prevent Security Breaches**: Catch vulnerabilities before deployment
- **Automated Protection**: Integrated scanning in deployment pipelines
- **Multi-Layer Analysis**: Two complementary analyzer types for comprehensive coverage
- **Early Detection**: Identify issues during development, not production
- **Compliance & Governance**: Meet security requirements automatically
- **No Manual Reviews**: Automated security validation saves time

---

## What Does Security Scanner Check?

Security Scanner analyzes three types of AI systems:

### 1. **A2A (Agent-to-Agent) Scanning**
Scans AI agents that communicate with each other in multi-agent systems. Detects vulnerabilities in agent interactions, message passing, and coordination logic.

**Use when**: Building systems where multiple AI agents collaborate or exchange information.

### 2. **MCP (Model Context Protocol) Scanning**
Scans MCP servers, tools, prompts, and resources. Detects security issues in tool definitions, prompt injection risks, and malicious resource access patterns.

**Use when**: Developing MCP servers or integrating MCP tools into your applications.

### 3. **HTTP-based Agent Scanning**
Scans web-based AI agents, REST APIs, and HTTP endpoints. Detects vulnerabilities in API implementations, authentication issues, and data exposure risks.

**Use when**: Building HTTP/REST API-based agents or web services.

---

## How Does It Work? Two Security Analyzers

Security Scanner uses two complementary analysis techniques to detect different types of threats:

### 1. **YARA Analyzer** (Pattern-Based Detection)
Fast, rule-based scanning that matches known vulnerability patterns.

**Detection Examples**:
- Command Injection
- SQL Injection  
- Path Traversal
- Credential Exposure
- Hardcoded Secrets

**Best for**: Quick scans, known patterns, CI/CD pipelines

---

### 2. **Behavioral Analyzer** (Powered by LLM)
Analyzes how your code actually behaves at runtime by examining execution paths, data flows, and cross-file interactions. Uses Large Language Models to understand context and detect both obvious and subtle security issues.

**Detection Examples**:
- Prompt Injection
- Tool Poisoning
- Data Exfiltration
- Hidden Backdoors
- Logic Flaws
- Multi-File Attack Chains
- Behavioral Mismatches (code does something different than documented)
- Cross-Module Threats
- Defense Evasion
- Resource Exhaustion (DoS)
 
**Best for**: Deep analysis, complex codebases, multi-file projects, unknown threats, semantic understanding

---

## How to Use Security Scanner

Security Scanner can be used in two ways: **Pre-Deployment Scanning** (manual testing during development) and **Automated Deployment Scanning** (automatic checking during deployment).

---

## 1. Pre-Deployment Scanning

During development, you can manually scan your code before deploying to production. This helps catch security issues early in the development cycle.

### Step 1: Get Your API Key

You'll receive an API key when you request access to the AgentCore runtime. This same API key is used for the Security Scanner.

**API Key Source**: Email received when requesting AgentCore runtime access

### Step 2: Package Your Code
<details>
<summary>Create a ZIP file containing your agent code:</summary>

```bash
# Example: Package your MCP server
cd my-mcp-server
zip -r my-mcp-server.zip *.py

# Example: Package your A2A agent
cd my-a2a-agent
zip -r my-a2a-agent.zip *.py
```
</details>


### Step 3: Call the Scan API

Use the wrapper APIs to scan your code before deployment.

**Full API Documentation**: [https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#models](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#models)

---

### **MCP Scanner API**

**Endpoint**: `POST /agenttoolkit/v1/scan/mcp/offline`

<details>
<summary><b>Python Example</b> (click to expand)</summary>

```python
import requests

# Configuration
API_URL = "https://api.nlp.p.uptimize.merckgroup.com"
API_KEY = "your-api-key-here"  # Same key used for AgentCore runtime
ZIP_FILE = "my-mcp-server.zip"

# Scan MCP server
with open(ZIP_FILE, 'rb') as f:
    response = requests.post(
        f"{API_URL}/agenttoolkit/v1/scan/mcp/offline",
        files={'file': ('agent.zip', f, 'application/zip')},
        headers={'X-API-Key': API_KEY},
        timeout=300
    )

result = response.json()

# Check results
severity = result['result']['report']['overall_severity_summary']
print(f"Critical: {severity.get('CRITICAL', 0)}")
print(f"High: {severity.get('HIGH', 0)}")
print(f"Medium: {severity.get('MEDIUM', 0)}")

# Decision logic
if severity.get('CRITICAL', 0) > 0 or severity.get('HIGH', 0) > 0:
    print("❌ BLOCKED: Critical/High severity issues found!")
else:
    print("✅ PASSED: Safe to deploy")
```

</details>

<details>
<summary><b>curl Example</b> (click to expand)</summary>

```bash
curl -X POST "https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/scan/mcp/offline" \
  -H "X-API-Key: your-api-key-here" \
  -F "file=@my-mcp-server.zip"
```

</details>

<details>
<summary><b>Response Structure</b> (click to expand)</summary>

```json
{
  "upstream_status_code": 200,
  "result": {
    "status": "completed",
    "timestamp": "2026-03-03T10:00:00Z",
    "scan_mode": "mcp",
    "analyzers_used": ["yara", "llm", "behavioral"],
    "report": {
      "overall_severity_summary": {
        "CRITICAL": 0,
        "HIGH": 2,
        "MEDIUM": 1,
        "LOW": 0
      },
      "results": [
        {
          "file_path": "server.py",
          "component_type": "mcp_tool",
          "is_safe": false,
          "total_findings": 3,
          "findings": [
            {
              "threat_name": "Command Injection",
              "severity": "HIGH",
              "summary": "Subprocess call with user input without validation",
              "analyzer": "behavioral"
            }
          ]
        }
      ]
    }
  }
}
```

</details>

---

### **A2A Scanner API**

**Endpoint**: `POST /agenttoolkit/v1/scan/a2a/offline`

<details>
<summary><b>Python Example</b> (click to expand)</summary>

```python
import requests

# Configuration
API_URL = "https://api.nlp.p.uptimize.merckgroup.com"
API_KEY = "your-api-key-here"  # Same key used for AgentCore runtime
ZIP_FILE = "my-a2a-agent.zip"

# Scan A2A agent
with open(ZIP_FILE, 'rb') as f:
    response = requests.post(
        f"{API_URL}/agenttoolkit/v1/scan/a2a/offline",
        files={'file': ('agent.zip', f, 'application/zip')},
        headers={'X-API-Key': API_KEY},
        timeout=300
    )

result = response.json()

# Check results
severity = result['result']['report']['overall_severity_summary']
critical = severity.get('CRITICAL', 0)
high = severity.get('HIGH', 0)

if critical > 0 or high > 0:
    print(f"BLOCKED: Found {critical} CRITICAL and {high} HIGH severity issues")
    exit(1)
else:
    print("✅ PASSED: No critical issues detected")
    exit(0)
```

</details>

<details>
<summary><b>curl Example</b> (click to expand)</summary>

```bash
curl -X POST "https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/scan/a2a/offline" \
  -H "X-API-Key: your-api-key-here" \
  -F "file=@my-a2a-agent.zip"
```

</details>

<details>
<summary><b>Response Structure</b> (click to expand)</summary>

```json
{
  "upstream_status_code": 200,
  "result": {
    "status": "completed",
    "timestamp": "2026-03-03T10:00:00Z",
    "scan_mode": "a2a",
    "analyzers_used": ["yara", "llm", "behavioral"],
    "report_format": "structured",
    "report": {
      "scan_metadata": {
        "zip_file": "my-a2a-agent.zip",
        "total_files_scanned": 5
      },
      "overall_severity_summary": {
        "CRITICAL": 0,
        "HIGH": 1,
        "MEDIUM": 2,
        "LOW": 1
      },
      "results": [
        {
          "file_path": "agent.py",
          "component_type": "a2a_agent",
          "is_safe": false,
          "severity_summary": {
            "HIGH": 1,
            "MEDIUM": 2
          },
          "findings": [
            {
              "threat_name": "Data Exfiltration",
              "severity": "HIGH",
              "summary": "Agent sends data to external endpoint without encryption",
              "details": {
                "line_number": 45,
                "category": "Network Security"
              },
              "analyzer": "behavioral"
            }
          ]
        }
      ]
    }
  }
}
```

</details>

---

### **HTTP Scanner API**

**Endpoint**: `POST /agenttoolkit/v1/scan/http/offline`

<details>
<summary><b>Python Example</b> (click to expand)</summary>

```python
import requests

# Configuration
API_URL = "https://api.nlp.p.uptimize.merckgroup.com"
API_KEY = "your-api-key-here"  # Same key used for AgentCore runtime
ZIP_FILE = "my-http-agent.zip"

# Scan HTTP agent
with open(ZIP_FILE, 'rb') as f:
    response = requests.post(
        f"{API_URL}/agenttoolkit/v1/scan/http/offline",
        files={'file': ('agent.zip', f, 'application/zip')},
        headers={'X-API-Key': API_KEY},
        timeout=300
    )

result = response.json()

# Check results
severity = result['result']['overall_severity_summary']
critical = severity.get('CRITICAL', 0)
high = severity.get('HIGH', 0)

if critical > 0 or high > 0:
    print(f"❌ BLOCKED: Found {critical} CRITICAL and {high} HIGH severity issues")
    exit(1)
else:
    print("✅ PASSED: No critical issues detected")
    exit(0)
```

</details>

<details>
<summary><b>curl Example</b> (click to expand)</summary>

```bash
curl -X POST "https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/scan/http/offline" \
  -H "X-API-Key: your-api-key-here" \
  -F "file=@my-http-agent.zip"
```

</details>

<details>
<summary><b>Response Structure</b> (click to expand)</summary>

```json
{
  "upstream_status_code": 200,
  "result": {
    "status": "completed",
    "timestamp": "2026-03-03T10:00:00Z",
    "scan_type": "http",
    "analyzers_used": ["yara", "llm", "behavioral"],
    "report_format": "structured",
    "uploaded_file": "my-http-agent.zip",
    "overall_severity_summary": {
      "CRITICAL": 0,
      "HIGH": 2,
      "MEDIUM": 3,
      "LOW": 1
    },
    "report": {
      "scan_metadata": {
        "uploaded_file": "my-http-agent.zip",
        "total_files_scanned": 8,
        "scan_duration_seconds": 4.2
      },
      "findings": [
        {
          "severity": "HIGH",
          "threat_category": "Hardcoded Secrets",
          "file_path": "agent.py",
          "line_number": 15,
          "summary": "Hardcoded API key detected",
          "details": {
            "pattern": "api_key = \"sk-...",
            "category": "CWE-798: Use of Hard-coded Credentials"
          },
          "analyzer": "behavioral"
        },
        {
          "severity": "HIGH",
          "threat_category": "SQL Injection",
          "file_path": "database.py",
          "line_number": 42,
          "summary": "Potential SQL injection vulnerability",
          "details": {
            "code_snippet": "query = f\"SELECT * FROM users WHERE id = {user_id}\"",
            "category": "CWE-89: SQL Injection"
          },
          "analyzer": "yara"
        }
      ]
    }
  }
}
```

</details>
1. **Trigger Deployment**: You initiate deployment to AgentCore runtime
2. **Automatic Scan**: Pipeline automatically calls Security Scanner
3. **Severity Check**: Scanner analyzes code and returns severity summary
4. **Decision**:
   - **PASS**: If no CRITICAL or HIGH severity issues → Deployment proceeds
   - **BLOCK**: If CRITICAL or HIGH severity issues found → Deployment prevented

### Deployment Decision Matrix

| Severity Level | Action | Deployment |
|----------------|--------|------------|
| **CRITICAL** | BLOCK | Prevented |
| **HIGH** | BLOCK | Prevented |
| **MEDIUM** | WARNING | Proceeds with warning |
| **LOW** | INFO | Proceeds |
| **SAFE** | PASS | Proceeds |

### What Happens When Scan Fails?

If the scan detects CRITICAL or HIGH severity issues:

1. **Deployment is blocked** automatically
2. **Detailed report** is generated showing all findings
3. **Developer notification** with issue summary
4. **Fix and retry**: Developer fixes issues and retries deployment

<details>
<summary><b>Example Blocked Deployment</b> (click to expand)</summary>

```
❌ DEPLOYMENT BLOCKED

Security Scanner detected 2 HIGH severity issues:

1. [HIGH] Command Injection in server.py:45
   - Subprocess call with unsanitized user input
   
2. [HIGH] Data Exfiltration in utils.py:78
   - Sending sensitive data to external endpoint

Action Required: Fix these issues and redeploy
```

</details>

---

## Understanding Severity Levels

Security Scanner classifies all findings into severity levels:

### **CRITICAL** 🔴
**Immediate security threat requiring urgent attention**

- Arbitrary code execution
- Remote command injection
- Complete system compromise
- Data breach risk

**Action**: Deployment blocked immediately. Must fix before deploying.

---

### **HIGH** 🔴
**Serious security vulnerability**

- SQL injection
- Sensitive data exposure
- Authentication bypass
- Privilege escalation

**Action**: Deployment blocked. Should fix before production deployment.

---

### **MEDIUM** 🟡
**Moderate security concern**

- Missing input validation
- Weak cryptography
- Information disclosure
- Logic flaws

**Action**: Deployment proceeds with warning. Should address promptly.

---

### **LOW** 🟢
**Minor security issue or best practice violation**

- Code quality issues
- Missing error handling
- Deprecated functions
- Style violations

**Action**: Deployment proceeds. Address in normal development cycle.

---

### **SAFE** ✅
**No security concerns detected**

**Action**: Deployment proceeds normally.

---

## Response Format - What to Check

When you call the scan APIs, check these key fields in the JSON response:

<details>
<summary><b>1. Status</b> (click to expand)</summary>

```json
"status": "completed"  // Scan finished successfully
```

</details>

<details>
<summary><b>2. Overall Severity Summary</b> (Most Important - click to expand)</summary>

```json
"overall_severity_summary": {
  "CRITICAL": 0,
  "HIGH": 2,
  "MEDIUM": 1,
  "LOW": 0,
  "SAFE": 5
}
```

**Decision Logic**:
```python
severity = result['result']['report']['overall_severity_summary']

if severity.get('CRITICAL', 0) > 0 or severity.get('HIGH', 0) > 0:
    # BLOCK deployment
    print("Security issues found - deployment blocked")
else:
    # ALLOW deployment
    print("Scan passed - safe to deploy")
```

</details>

<details>
<summary><b>3. Findings Array</b> (Detailed Issues - click to expand)</summary>

```json
"findings": [
  {
    "threat_name": "Command Injection",
    "severity": "HIGH",
    "summary": "User input passed directly to subprocess without validation",
    "analyzer": "behavioral",
    "details": {
      "file_path": "server.py",
      "line_number": 45,
      "category": "Injection Attacks"
    }
  }
]
```

</details>

---

## Getting Started - Quick Steps

### 1️⃣ **Get Your API Key**
Receive your API key when you request AgentCore runtime access. This key is used for both AgentCore and Security Scanner.

**API Key Location**: Email from AgentCore runtime onboarding

---

### 2️⃣ **Package Your Code**
Create a ZIP file containing your agent code:

```bash
zip -r my-agent.zip *.py
```

---

### 3️⃣ **Choose Your Scanner**
- **MCP Servers**: Use `/agenttoolkit/v1/scan/mcp/offline`
- **A2A Agents**: Use `/agenttoolkit/v1/scan/a2a/offline`
- **HTTP Agents**: Use `/agenttoolkit/v1/scan/http/offline`

---

### 4️⃣ **Call the API**
Use the Python or curl examples above to scan your code.

---

### 5️⃣ **Review Results**
Check `overall_severity_summary` to see if your code is safe to deploy.

---

## API Reference

**Base URL**: `https://api.nlp.p.uptimize.merckgroup.com`

**Full API Documentation**: [https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner)

### Available Endpoints

| Endpoint | Purpose | Documentation                                                                                                                     |
|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| `/agenttoolkit/v1/scan/mcp/offline` | Scan MCP servers | [API Docs](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner/POST/agenttoolkit/v1/scan/mcp/offline)  |
| `/agenttoolkit/v1/scan/a2a/offline` | Scan A2A agents | [API Docs](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner/POST/agenttoolkit/v1/scan/a2a/offline)  |
| `/agenttoolkit/v1/scan/http/offline` | Scan HTTP agents | [API Docs](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner/POST/agenttoolkit/v1/scan/http/offline) |

### Authentication

All API requests require authentication using the `X-API-Key` header:

```bash
X-API-Key: your-api-key-here
```

**Note**: Use the same API key you received for AgentCore runtime access.

---

## Best Practices

<details>
<summary><b>View Best Practices</b> (click to expand)</summary>

### ✅ **Scan Early, Scan Often**
Run security scans during development, not just before deployment. Catch issues early when they're easier to fix.

### ✅ **Fix Critical & High Issues Immediately**
Don't ignore CRITICAL or HIGH severity findings. These represent real security risks.

### ✅ **Review Medium & Low Issues**
While these won't block deployment, they should still be addressed to improve security posture.

### ✅ **Monitor Trends**
Track security findings over time to identify recurring patterns or improvement areas.

</details>

---

## Troubleshooting

<details>
<summary><b>View Troubleshooting Guide</b> (click to expand)</summary>

### **Issue**: API returns 401 Unauthorized

**Solution**: Check your API key. Ensure you're using the correct key from your AgentCore runtime access email.

```bash
# Verify API key format
X-API-Key: your-actual-api-key-here
```

---

### **Issue**: Scan timeout after 5 minutes

**Solution**: Your ZIP file may be too large. Keep files under 50MB and reduce the number of files if possible.

```bash
# Check ZIP size
ls -lh my-agent.zip

# Split into smaller ZIPs if needed
```

---

### **Issue**: "No Python files found in ZIP"

**Solution**: Ensure your ZIP contains `.py` files at the root or in subdirectories.

```bash
# Check ZIP contents
unzip -l my-agent.zip | grep '\.py$'
```

---

### **Issue**: False positive findings

**Solution**: Review the finding details. If you believe it's a false positive, you can document the justification and proceed. However, most HIGH/CRITICAL findings are legitimate security issues.

</details>

---

## Support & Contact

For questions, issues, or assistance with Security Scanner:

**📧 Email**: gpt-api@merckgroup.com

**📚 Full API Documentation**: [https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs#tag/scanner)


---

---

## Langfuse

Agent Toolkit CLI integrates with Langfuse for observability, tracing, and monitoring of your AI agents. Langfuse provides comprehensive insights into agent behavior, performance metrics, and debugging capabilities.

---

## What You'll See in Your Project

When you initialize a project, tracing code is automatically included:

### 1. Langfuse Wrapper Module
Located at: `<your_package>/langfuse_wrapper.py`

This module:
- Initializes the Langfuse client
- Sets up environment variables for automatic tracing
- Handles credentials from AWS Secrets Manager or environment variables

### 2. Native @observe Decorator
Your agent code includes the Langfuse native decorator:

<details>
<summary>Click to expand code</summary>

```python
from langfuse import observe

@observe(name="agent-execution", as_type="generation")
def my_agent_function(payload):
    # Your agent logic here
    return result
```

</details>

What it does:
- Automatically captures function inputs and outputs
- Records execution time and performance metrics
- Tracks errors and exceptions
- Links traces to your Langfuse project

### 3. Initialization Code
In your Entrypoint file (Ex: `agent.py` or `main.py`):

<details>
<summary>Click to expand code</summary>

```python
from <package>.langfuse_wrapper import build_langfuse_client

# Initialize Langfuse - sets environment variables for @observe decorator
build_langfuse_client(secrets)
```

</details>

This single line:
- Reads Langfuse credentials from AWS Secrets Manager or `.env` file
- Configures environment variables (`LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_HOST`)
- Enables automatic tracing for all `@observe` decorated functions

## Getting Started

### Option 1: With Langfuse (Recommended)

If you want full observability for your AI agents:

#### Step 1: Get Langfuse Credentials

You need three credentials to set up Langfuse:

1. Public Key - API authentication (non-sensitive)
2. Secret Key - API authentication (sensitive, keep secure)
3. Host URL - Your Langfuse instance URL

How to get credentials:
Follow the detailed guide at: [Langfuse Setup Documentation](https://docs.uptimize.merckgroup.com/aiml/llm-traces/)

This guide will show you how to:
- Create a Langfuse project
- Generate API keys
- Configure your instance

#### Step 2: Add Credentials to Your Project

**Best Practice - Credential Storage**

 - **For Local Testing/Development**: Store credentials in a `.env` file in your project root
 - **For Production**: Store credentials in AWS Secrets Manager for secure access

 This approach ensures:
 - Credentials are never committed to version control (add `.env` to `.gitignore`)
 - Production secrets are centrally managed and auditable
 - Different environments can use appropriate security measures

You have two options:

A. AWS Secrets Manager (**Required for production environments**)

<details>
<summary>Click to expand code</summary>

```bash
# System automatically reads from AWS Secrets Manager
# Secret name format: {namespace}/{runtime_id}
# Add these keys to your secret:
LANGFUSE_PUBLIC_KEY=pk-lf-xxx
LANGFUSE_SECRET_KEY=sk-lf-xxx
LANGFUSE_HOST=https://your-langfuse-instance.com
```

</details>

B. Environment Variables / .env File (**For local testing and development only**)

<details>
<summary>Click to expand code</summary>

```bash
# Create/edit .env file in your project root
echo "LANGFUSE_PUBLIC_KEY=pk-lf-xxx" >> .env
echo "LANGFUSE_SECRET_KEY=sk-lf-xxx" >> .env
echo "LANGFUSE_HOST=https://your-langfuse-instance.com" >> .env
```

</details>

#### Step 3: Run Your Agent

That's it! Your agent will now automatically send traces to Langfuse:

<details>
<summary>Click to expand code</summary>

```bash
python main.py
```

</details>

Console output:

<details>
<summary>Click to expand console logs</summary>

```
INFO: Initializing Langfuse client with host: https://your-langfuse-instance.com
INFO: ✓ Langfuse client initialized successfully
INFO: ✓ Environment variables set for @observe decorator
```

</details>

### Option 2: Without Langfuse

If you don't have Langfuse credentials , the system will automatically fall back to AWS native observability for tracing.

#### What Happens:

1. No credentials found - The system logs a warning:

<details>
<summary>Click to expand console logs</summary>

```
WARNING: Langfuse credentials not found. Tracing will be disabled.
```

</details>

2. Agent continues to work normally - Tracing is fully optional!

3. AWS native observability is used - Your agent execution traces will be captured through AWS CloudWatch, providing basic observability without the enhanced features of Langfuse.

4. No Langfuse traces are sent - Your agent executes without sending data to Langfuse, but AWS-level tracing remains active.

#### To Run Without Langfuse:

1. Do not opt for enabling Langfuse Integration while initiating the project
2. Do not add Langfuse credentials:
    - Skip setting `LANGFUSE_*` environment variables
    - Don't add Langfuse keys to AWS Secrets Manager

Your agent will work perfectly fine with AWS observability as the default tracing mechanism.

## Viewing Your Traces

Once your agent is running with Langfuse enabled:

1. **Log into your Langfuse dashboard**
2. **Select your project**
3. **View real-time traces** showing:
   - Agent execution flow
   - Input/output data
   - Execution time and latency
   - Token usage and costs
   - Errors and debugging information

---

## Customizing Tracing

### Change Trace Names

Edit the `@observe` decorator in your agent code:

<details>
<summary>Click to expand code</summary>

```python
@observe(name="my-custom-trace", as_type="generation")
def my_agent_function(payload):
    ...
```

</details>

### Trace Types

The `as_type` parameter can be:
- `"generation"` - For LLM calls (default)
- `"span"` - For general operations
- `"event"` - For discrete events
- `"agent"` - For agent-level operations

## Troubleshooting

### Issue: "Langfuse credentials not found"

Solution: Verify credentials are set correctly:

<details>
<summary>Click to expand code</summary>

```bash
# Check environment variables
echo $LANGFUSE_PUBLIC_KEY
echo $LANGFUSE_SECRET_KEY
echo $LANGFUSE_HOST

# Or check .env file exists
cat .env | grep LANGFUSE
```

</details>

### Issue: "Failed to initialize Langfuse client"

Solution: 
1. Verify your `LANGFUSE_HOST` URL is correct and accessible
2. Check that your API keys are valid
3. Ensure you have network access to the Langfuse instance

### Issue: No traces appearing in Langfuse

Solution:
1. Confirm your agent is actually executing the decorated functions
2. Check console logs for Langfuse initialization messages
3. Verify you're looking at the correct project in Langfuse dashboard
4. Traces may take a few seconds to appear - refresh your dashboard

## Summary

| Scenario | Setup Required | What Happens |
|----------|---------------|--------------|
| With Langfuse | Add 3 credentials (Public Key, Secret Key, Host) | Full tracing enabled, insights in dashboard |
| Without Langfuse | Nothing | Agent works normally, warning logged, falls back to AWS native observability |

## Additional Resources

- [Langfuse Setup Guide](https://docs.uptimize.merckgroup.com/aiml/llm-traces/) - Complete setup instructions
- [Langfuse Documentation](https://langfuse.com/docs) - Official Langfuse docs

## Quick Start Checklist

- [ ] Read the [Langfuse Setup Guide](https://docs.uptimize.merckgroup.com/aiml/llm-traces/)
- [ ] Create a Langfuse project and obtain credentials
- [ ] Initialize your project (credentials are auto-detected)
- [ ] Add credentials to `.env` file (local testing) or AWS Secrets Manager (production)
- [ ] Run your agent and verify "Langfuse client initialized successfully"
- [ ] Open Langfuse dashboard and view your first traces!

## Support & Contact

For questions, issues, or assistance with Langfuse:

**📧 Email**: gpt-api@merckgroup.com

---

## UPTIMIZE Agentic Integration Hub

The UPTIMIZE Agentic Integration Hub is a centralized platform that enables seamless integration of various MCP Servers, A2A and HTTP Agents into your AI applications. It provides centralized governance, discovery, and observability across our platform, along with unified interface for managing and orchestrating these integrations, allowing your agents to access and utilize AI and enterprise resources effectively.

### Key Features

- **MCP Gateway** - MCP & REST translation to enable any agent to connect to any tool, regardless of protocol differences
- **Agent Gateway** - A2A protocol translation to enable seamless communication and interoperability between agents built on different platforms or frameworks
- **Centralized Management** - Unified interface for managing and orchestrating all your integrations, providing visibility and control over your agent ecosystem
- **Security and Compliance** - Built-in security features and compliance controls to ensure safe and compliant integration of tools and agents within your applications
- **Scalability and Performance** - Designed to handle high volumes of requests and interactions, ensuring optimal performance as your agent ecosystem grows
- **Governance and Access Control** - Centralized governance features to manage access and permissions for your integrations

### Getting Started

To get started with the UPTIMIZE Agentic Integration Hub, you can follow these steps:

1. **Explore Documentation**: Familiarize yourself with the documentation for the Integration Hub to understand its capabilities and how to use it effectively.
2. **Login through SSO**: Login and navigate to the Integration Hub dashboard to access the MCP server tools and agents available for integration.

    Integration Hub URL: <https://ihub.nlp.p.uptimize.merckgroup.com/ihub/admin/login>

3. **Register Your MCP Servers and Agents**: Use the provided UI interface to integrate your MCP Servers, A2A agents, and HTTP agents into the Integration Hub, following the guidelines and best practices outlined in the documentation.
4. **Consume Integrations**: Once your MCP Servers and agents are registered, you can start consuming them in your applications by creating virtual servers (MCP) that provide a unified interface to access the capabilities of your registered tools and agents.

---

## Register Your MCP Servers, A2A and HTTP Agents

To register your MCP Servers, A2A agents, and HTTP agents, you can follow these steps:

### 1. Fetch Integration Hub Endpoint using the following command

```shell
agenttoolkit runtime endpoints
```

Expected Output:
![Runtime Endpoints](/assets/nlp/agent-toolkit/runtime_endpoints.jpeg)

### 2. Register your MCP Server, A2A agent, or HTTP agent with the Integration Hub

#### i. MCP Server Registration

For MCP Server registration, go to the "MCP Servers" tab on left sidebar of Integration Hub Dashboard UI, and fill the details to register your server in the section "Add New MCP Server or Gateway" at bottom of the page. Once registered, your MCP Server tools, prompts and resources will be automatically fetched and available in the Tools tab (you can switch to Tools tab from left sidebar).

![MCP Server Registration](/assets/nlp/agent-toolkit/register_mcp_server.jpeg)

- Fill the **"MCP Server Name"** field with a unique name for your MCP Server.
- Fill the **"MCP Server URL"** field with the Integration Hub URL of your MCP Server.
- Fill the **"Description"** field with a brief description of your MCP Server.
- Optional: Add tags to categorize and organize your MCP Server.
- Select the **"Visibility"** field to choose whether your MCP Server should be visible to all users or only to you or specific team. For team members, you can select the team from the dropdown list on top right corner of the page.

Team Selection:

![Team Selection](/assets/nlp/agent-toolkit/team_selection.png)

- Select the "Transport Type" as "Streamable HTTP" which the only one supported by Agent Toolkit deployed MCP Servers.
- Fill the **"Authentication Type"** field with the authentication method used by your MCP Server (e.g., Bearer Token, OAuth 2.0, etc.).

    *Note: if your MCP server does not connect to any target system or other authenticated APIs, you can choose "None" as authentication type.*

  - Fill the **"Authentication Details"** field with the necessary authentication information based on the selected authentication type.

- Click the **"Add Gateway"** button to complete the registration process. Once registered, your MCP Server tools, prompts and resources will be automatically fetched and available in the Tools tab.

#### ii. A2A Agent Registration

For A2A agent integration, go to the "Agents(A2A)" tab on left sidebar of Integration Hub Dashboard UI, and fill the details to register your agent in the section "Add New A2A Agent" at bottom of the page.

![A2A Agent Registration](/assets/nlp/agent-toolkit/register_a2a_agent.png)

- Fill the **"Agent Name"** field with a unique name for your A2A agent.
- Fill the **"Endpoint URL"** field with the Integration Hub URL of your A2A Agent.
- Keep the **"Agent Type"** field as "generic" for all Agent Toolkit deployed agents.
- Fill the **"Authentication Type"** field with the authentication method used by your Agent (e.g., Bearer Token, OAuth 2.0, etc.).

    *Note: if your Agent does not connect to any target system or other authenticated APIs, you can choose "None" as authentication type.*

  - Fill the **"Authentication Details"** field with the necessary authentication information based on the selected authentication type.
  
- Fill the **"Description"** field with a brief description of your Agent.
- Optional: Add tags to categorize and organize your Agent.
- Select the **"Visibility"** field to choose whether your Agent should be visible to all users or only to you or specific team. For team members, you can select the team from the dropdown list on top right corner of the page.
- Click the **"Add A2A Agent"** button to complete the registration process.

#### iii. HTTP Agent Registration

For HTTP agent integration, go to the "Tools" tab on left sidebar of Integration Hub Dashboard UI, and fill the details to register your agent in the section "Add New Tool from REST API" at bottom of the page.

![HTTP Agent Registration](/assets/nlp/agent-toolkit/register_http_agent.png)

- Fill the **"Name"** field with a unique name for your HTTP agent.
- Fill the **"URL"** field with the Integration Hub Endpoint URL of your HTTP Agent.
- Fill the **"Description"** field with a brief description of your HTTP Agent.
- Fill the **"Request Type"** field with the HTTP method used by your agent (e.g., GET, POST, etc.).
- Fill the **"Headers"** field with any required headers for your HTTP request.
- Build the Input Schema as per your HTTP Agent requirements by adding necessary parameters and their types in the **"Input Schema"** section.
- For example, if your HTTP Agent requires a "query" parameter of type string and a "limit" parameter of type integer, you can add them in the Input Schema builder as shown below:

![Input Schema Builder](/assets/nlp/agent-toolkit/input_schema_builder.png)

- This will help ensure that the correct parameters are passed to your HTTP Agent when it is called by other agents or tools within the Integration Hub.
- Fill the **"Authentication Type"** field with the authentication method used by your HTTP Agent (e.g., Bearer Token, OAuth 2.0, etc.).

    *Note: if your HTTP Agent does not connect to any target system or other authenticated APIs, you can choose "None" as authentication type.*

- Fill the **"Authentication Details"** field with the necessary authentication information based on the selected authentication type.

- Optional: Add tags to categorize and organize your HTTP Agent.
- Select the **"Visibility"** field to choose whether your HTTP Agent should be visible to all users or only to you or specific team. For team members, you can select the team from the dropdown list on top right corner of the page.
- Click the **"Add Tool"** button to complete the registration process.

---

## Consume Registered MCP Servers, A2A and HTTP Agents

To consume the registered MCP Servers, A2A agents, and HTTP agents in your applications, you must create virtual server (MCP).

Virtual servers provide a unified interface to select, mix and match your registered MCP Servers tools, resources, prompts, A2A agents, and HTTP agents. You can select any tools or agents from the registry to add to your virtual server, and then call this virtual server from your agent code using the Integration Hub Endpoint URL of the virtual MCP server. This allows you to seamlessly integrate and utilize the capabilities of your registered MCP Servers, A2A agents, and HTTP agents within your applications without worrying about protocol differences or integration complexities.

For example, if you have registered an HTTP agent that provides weather information and an A2A agent that provides news updates, and MCP Server which fetches the live weather and news information from internet for agents, you can create two virtual servers.

- One virtual server for MCP tools which can be consumed by the Agents,
- And other virtual server of Agents which can be consumed by any LLM based client applications like myGPT or App Service Application.
- Then, when your LLM application calls this virtual MCP server, it can access both the weather information and news updates through a single API call to the virtual server's MCP Server URL, without needing to handle separate integrations for the HTTP agent and A2A agent.

### Create a Virtual Server (MCP) to Consume Your Registered MCP Servers, A2A and HTTP Agents

To create a virtual server, go to the "Virtual Servers" tab on left sidebar of Integration Hub Dashboard UI, and fill the details in the section "Add New Server" to create your virtual server.

- Fill the "Name" field with a unique name for your virtual server.
- Fill the "Description" field with a brief description of your virtual server.
- Filter through the MCP servers you want to use in this virtual server by name or REST/A2A type, and select the tools, prompts, resources, A2A agents and HTTP agents you want to add to this virtual server from the search results.
- Optional: Fill the tags to categorize and organize your virtual server.
- Visibility: Choose whether your virtual server should be visible to all users or only to you or specific team. For team members, you can select the team from the dropdown list on top right corner of the page.
- Click the "Add Server" button to complete the virtual server creation process.

![Virtual Server Creation](/assets/nlp/agent-toolkit/create_virtual_server.png)

### Fetch the Virtual Server Endpoint

Once the virtual server is created, you can find it in the list of virtual servers on the same page. You can click on the "Export Config" button next to your virtual server, and select "HTTP (REST clients)" to copy its MCP Server URL.
   ![Export Virtual Server Config](/assets/nlp/agent-toolkit/export_config.png)

### Consume the Virtual Server with API Token

To access this MCP Server URL, you need to have the API token generated from the Integration Hub. You can generate the API token by going to the "API Tokens" tab on left sidebar of Integration Hub Dashboard UI, and clicking on the "Generate API Token" button. Once you have the API token, you can use it to call your virtual server from your agent code or any REST client.

- When calling the virtual server from your agent code, make sure to include the Integration Hub API token (NOT Agent Toolkit API Key) in the request headers for authentication. The header should be in the format: `Authorization: Bearer <API_TOKEN>`.
- You can now seamlessly integrate and utilize the capabilities of your registered MCP Servers, A2A agents, and HTTP agents within your applications through this virtual server without worrying about protocol differences or integration complexities.

![API Token Generation](/assets/nlp/agent-toolkit/api_token_generation.png)

---

# Agent Toolkit Memory - User Guide

A simple guide to understand and use Agent Toolkit Memory with your AI agents, regardless of the framework you use.

---

## What is Agent Toolkit Memory?

**Agent Toolkit Memory** is a managed service that gives your AI agents the ability to remember conversations and extract long-term knowledge. Think of it as a centralized memory system that works with any agent framework.

### Two Types of Memory

**Short-Term Memory (Conversation History)**
- Stores the raw messages from conversations
- Remembers what was said in the current session
- Like taking notes during a meeting
- Example: "You told me your name is Sarah 2 minutes ago"

**Long-Term Memory (Knowledge Extraction)**
- Extracts and stores important facts across sessions
- Remembers user preferences and information permanently
- Like keeping a diary or knowledge base
- Example: "I remember from last week that you prefer tea over coffee"

---

## Core Concepts

### Understanding Memory Components

| Component | Description | Example |
|-----------|-------------|---------|
| **Memory Resource** | The storage container for all memories | Provided via access request |
| **Actor ID** | Unique identifier for each user | `"user-john"`, `"customer-123"` |
| **Session ID** | Unique identifier for each conversation | `"session-001"`, `"chat-20260305"` |
| **Memory Strategy** | Rules for extracting long-term knowledge | Preferences, Facts, Summaries |

### Key Principles

- **Same user across all sessions** → Same Actor ID
- **New conversation** → New Session ID
- **One memory resource** → Shared by all users in your app
- **Framework agnostic** → Works with any agent framework

### Understanding Namespaces (Long-Term Memory)

**Namespaces** are organizational paths that categorize and isolate different types of long-term memories. Think of them as folders in a file system that help organize extracted knowledge.

**Note:** Agent Toolkit Memory namespaces are distinct from agentcore runtime memory. Namespaces organize *persistent* memories stored in the managed service. Namespaces enable precise retrieval by allowing you to query specific types of memories (e.g., only preferences) rather than searching all long-term knowledge.

**Common namespace patterns:**
- `/preferences/{actorId}` - User preferences and likes/dislikes
- `/facts/{actorId}` - Factual information about the user
- `/summaries/{actorId}/{sessionId}` - Conversation summaries per session


---

## Getting Started

### Step 1: Request Access

To use Agent Toolkit Memory, you need to request access to get your Memory ID and API credentials.

**How to Request Access:**

1. Visit the [Agent Toolkit Access Request Form](https://agenttoolkit.apps.p.uptimize.merckgroup.com/)
2. Fill out the access request form
3. You will receive an email with:
   - Memory ID
   - API Key for authentication
   - Setup instructions

**Important:** Save the Memory ID and API Key - you'll need them for all memory operations.

### Step 2: Set Up Your Environment

Once you receive your credentials, set them up in your environment:

<details>
<summary>Click to see environment setup</summary>

```bash
# Set environment variables
export MEMORY_ID="your-memory-id-from-email"
export API_KEY="your-api-key-from-email"
export AWS_REGION="eu-central-1"  # Or your specified region
```

Or create a `.env` file:

```
MEMORY_ID=your-memory-id-from-email
API_KEY=your-api-key-from-email
AWS_REGION=eu-central-1
```

</details>

### Step 3: Obtain AWS Credentials (Required for Direct API Access)

**Important:** When using boto3 directly (Examples 2 & 3), you need valid AWS credentials. Agent Toolkit provides temporary credentials via FED tokens.


---

#### What are FED Tokens?

FED (Federated) tokens are temporary AWS credentials that expire after a specified duration (typically 1 hour). Agent Toolkit provides a token service that generates these credentials using your API key.

---

<details>
<summary>Click to expand - How to Get and Use FED Tokens</summary>


#### Fetching FED Tokens

```python
import requests
import json
import boto3
import os
from datetime import datetime, timedelta

def fetch_fresh_credentials(api_key: str, token_service_url: str) -> dict:
    """Fetch fresh AWS credentials from FED token service"""
    
    payload = json.dumps({"duration_seconds": 3600})
    headers = {
        'Content-Type': 'application/json',
        'x-api-key': api_key
    }
    
    response = requests.post(token_service_url, headers=headers, data=payload)
    response.raise_for_status()
    
    return response.json()


class TokenManager:
    """Manages automatic token refresh"""
    
    def __init__(self, api_key: str, token_service_url: str, refresh_interval_minutes: int = 50):
        self.api_key = api_key
        self.token_service_url = token_service_url
        self.refresh_interval = timedelta(minutes=refresh_interval_minutes)
        self.credentials = None
        self.last_refresh = None
    
    def needs_refresh(self) -> bool:
        """Check if credentials need refresh"""
        if not self.credentials or not self.last_refresh:
            return True
        
        elapsed = datetime.now() - self.last_refresh
        return elapsed >= self.refresh_interval
    
    def get_credentials(self) -> dict:
        """Get valid credentials, refreshing if needed"""
        if self.needs_refresh():
            result = fetch_fresh_credentials(self.api_key, self.token_service_url)
            self.credentials = result.get("credentials", {})
            self.last_refresh = datetime.now()
            print(f"Credentials refreshed at {self.last_refresh}")
        
        return self.credentials
```

---

#### Using FED Tokens with Boto3

```python
# Initialize token manager
API_KEY = os.getenv("API_KEY")
TOKEN_SERVICE_URL = "https://api.nlp.p.uptimize.merckgroup.com/agentkit/v1/fed-token"

token_manager = TokenManager(
    api_key=API_KEY,
    token_service_url=TOKEN_SERVICE_URL
)

# Get credentials (auto-refreshes if needed)
creds = token_manager.get_credentials()

# Create boto3 session with fresh credentials
boto_session = boto3.Session(
    aws_access_key_id=creds["access_key_id"],
    aws_secret_access_key=creds["secret_access_key"],
    aws_session_token=creds["session_token"],
    region_name=os.getenv("AWS_REGION", "eu-central-1")
)

# Use session to create Memory client
client = boto_session.client("bedrock-agentcore")
```

---

</details>

#### Best Practices for FED Tokens

- **Refresh proactively**: Refresh tokens before they expire (50-55 minutes for 1-hour tokens)
- **Store API keys securely**: Use environment variables, never hardcode
- **Handle errors gracefully**: Implement retry logic for token fetch failures
- **Don't wait for expiration**: Refresh automatically rather than waiting for credential errors
- **Reuse sessions**: Create one boto3 session and reuse it across your application

---

#### When Do You Need FED Tokens?

| Framework/Method | Needs FED Tokens? | Why |
|------------------|-------------------|-----|
| **Strands SDK** | No* | SDK may handle credentials internally |
| **LangGraph (boto3)** | Yes | Direct boto3 usage requires credentials |
| **Direct API (boto3)** | Yes | boto3 requires AWS credentials |

*Note: Verify with Strands SDK documentation if credential management is handled automatically.


### Step 4: Integrate with Your Agent Framework

Now integrate memory with your preferred agent framework. See framework-specific examples below.

---

## Framework Integration Examples

### Example 1: AWS Strands SDK

<details>
<summary>Click to expand - Strands SDK Integration</summary>

The Strands SDK provides native Memory integration through `AgentCoreMemorySessionManager`.

**Installation:**
```bash
pip install strands bedrock-agentcore boto3
```

**Code Example:**
```python
import asyncio
import os
from strands import Agent
from bedrock_agentcore.memory.integrations.strands import AgentCoreMemorySessionManager
from bedrock_agentcore.memory.integrations.strands.config import (
    AgentCoreMemoryConfig,
    RetrievalConfig
)

async def main():
    # Get configuration from environment
    MEMORY_ID = os.getenv("MEMORY_ID")
    ACTOR_ID = "user-123"           # Unique per user
    SESSION_ID = "session-001"       # Unique per conversation
    
    # Configure memory
    memory_config = AgentCoreMemoryConfig(
        memory_id=MEMORY_ID,
        actor_id=ACTOR_ID,
        session_id=SESSION_ID,
        # Optional: Enable long-term memory retrieval
        retrieval_config={
            f"/preferences/{ACTOR_ID}": RetrievalConfig(top_k=5),
            f"/facts/{ACTOR_ID}": RetrievalConfig(top_k=10),
        }
    )
    
    # Create session manager
    session_manager = AgentCoreMemorySessionManager(
        agentcore_memory_config=memory_config,
        region_name=os.getenv("AWS_REGION", "eu-central-1"),
    )
    
    # Create agent with memory
    agent = Agent(
        name="MyAgent",
        system_prompt="You are a helpful assistant with memory.",
        session_manager=session_manager,  # Memory enabled!
    )
    
    # Use the agent
    response = await agent.invoke_async("Hi, my name is Alex!")
    print(response)
    
    response = await agent.invoke_async("What's my name?")
    print(response)  # "Your name is Alex!"

if __name__ == "__main__":
    asyncio.run(main())
```

**What happens automatically:**
1. User messages are stored in Memory
2. Agent responses are stored in Memory
3. Conversation history is retrieved automatically
4. Long-term facts are retrieved (if configured)

</details>

### Example 2: LangGraph

<details>
<summary>Click to expand - LangGraph Integration</summary>

LangGraph can integrate with Agent Toolkit Memory using custom checkpointers and memory management.

**Installation:**
```bash
pip install langgraph bedrock-agentcore boto3
```

**Code Example:**
```python
import boto3
import os
from typing import Any, Dict
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.base import BaseCheckpointSaver

class MemoryCheckpointer(BaseCheckpointSaver):
    """Custom checkpointer that uses Agent Toolkit Memory"""
    
    def __init__(self, memory_id: str, actor_id: str, session_id: str, region: str = "eu-central-1"):
        self.memory_id = memory_id
        self.actor_id = actor_id
        self.session_id = session_id
        self.client = boto3.client("bedrock-agentcore", region_name=region)
    
    def put(self, config: Dict[str, Any], checkpoint: Dict[str, Any]) -> None:
        """Save checkpoint to Memory"""
        self.client.add_memory_event(
            memoryId=self.memory_id,
            event={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "checkpoint",
                "eventData": {
                    "checkpoint": checkpoint
                }
            }
        )
    
    def get(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Retrieve checkpoint from Memory"""
        response = self.client.get_memory_events(
            memoryId=self.memory_id,
            filters={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "checkpoint"
            },
            maxResults=1
        )
        
        if response.get("events"):
            return response["events"][0]["eventData"]["checkpoint"]
        return {}


# Define your graph state
class GraphState(Dict):
    messages: list
    user_preferences: dict


def chatbot_node(state: GraphState) -> GraphState:
    """Process messages"""
    # Your agent logic here
    return state


# Create graph with Memory
def create_langgraph_with_memory(memory_id: str, actor_id: str, session_id: str):
    # Create workflow
    workflow = StateGraph(GraphState)
    workflow.add_node("chatbot", chatbot_node)
    workflow.set_entry_point("chatbot")
    workflow.add_edge("chatbot", END)
    
    # Create checkpointer with Memory
    checkpointer = MemoryCheckpointer(
        memory_id=memory_id,
        actor_id=actor_id,
        session_id=session_id
    )
    
    # Compile with memory
    app = workflow.compile(checkpointer=checkpointer)
    return app


# Usage
MEMORY_ID = os.getenv("MEMORY_ID")
app = create_langgraph_with_memory(
    memory_id=MEMORY_ID,
    actor_id="user-john",
    session_id="session-001"
)

# Run the agent
result = app.invoke({
    "messages": ["Hello, my name is John"],
    "user_preferences": {}
})
```

**Alternative: Direct Memory Integration**

You can also directly use Memory APIs within LangGraph nodes:

```python
import boto3
import os

def create_memory_aware_node(memory_id: str, actor_id: str, session_id: str):
    """Create a node that reads/writes to Memory"""
    
    client = boto3.client("bedrock-agentcore", region_name=os.getenv("AWS_REGION", "eu-central-1"))
    
    def memory_node(state: GraphState) -> GraphState:
        # Retrieve relevant memories
        memories = client.query_memory(
            memoryId=memory_id,
            queryText=state["messages"][-1],
            actorId=actor_id,
            namespaces=[f"/preferences/{actor_id}", f"/facts/{actor_id}"]
        )
        
        # Add memories to context
        state["context"] = memories.get("retrievedMemories", [])
        
        # Store new event
        client.add_memory_event(
            memoryId=memory_id,
            event={
                "actorId": actor_id,
                "sessionId": session_id,
                "eventType": "message",
                "eventData": {
                    "role": "user",
                    "content": state["messages"][-1]
                }
            }
        )
        
        return state
    
    return memory_node

# Add to your graph
MEMORY_ID = os.getenv("MEMORY_ID")
workflow.add_node("memory", create_memory_aware_node(
    memory_id=MEMORY_ID,
    actor_id="user-john",
    session_id="session-001"
))
```

</details>

### Example 3: Framework-Agnostic Integration (Non-AWS Frameworks)

<details>
<summary>Click to expand - Using Boto3 with Any Framework</summary>

You can use Agent Toolkit Memory with any agent framework using the Boto3 SDK directly. This approach works with any Python-based agent system.

**⚠️ Important:** This example requires AWS credentials via FED tokens (see [Step 3](#step-3-obtain-aws-credentials-required-for-direct-api-access) above).

**Installation:**
```bash
pip install boto3 requests
```

**Complete Example with FED Token Integration:**
```python
import boto3
import requests
import json
import os
from datetime import datetime, timedelta

# ===== FED Token Manager =====
class TokenManager:
    """Manages automatic token refresh for AWS credentials"""
    
    def __init__(self, api_key: str, token_service_url: str, refresh_interval_minutes: int = 50):
        self.api_key = api_key
        self.token_service_url = token_service_url
        self.refresh_interval = timedelta(minutes=refresh_interval_minutes)
        self.credentials = None
        self.last_refresh = None
    
    def needs_refresh(self) -> bool:
        if not self.credentials or not self.last_refresh:
            return True
        elapsed = datetime.now() - self.last_refresh
        return elapsed >= self.refresh_interval
    
    def get_credentials(self) -> dict:
        if self.needs_refresh():
            payload = json.dumps({"duration_seconds": 3600})
            headers = {'Content-Type': 'application/json', 'x-api-key': self.api_key}
            response = requests.post(self.token_service_url, headers=headers, data=payload)
            response.raise_for_status()
            result = response.json()
            self.credentials = result.get("credentials", {})
            self.last_refresh = datetime.now()
            print(f"✓ Credentials refreshed at {self.last_refresh}")
        return self.credentials

# ===== Memory Manager =====
class MemoryManager:
    """Generic memory manager for any agent framework"""
    
    def __init__(self, memory_id: str, actor_id: str, session_id: str, 
                 token_manager: TokenManager, region: str = "eu-central-1"):
        self.memory_id = memory_id
        self.actor_id = actor_id
        self.session_id = session_id
        self.token_manager = token_manager
        self.region = region
        self._client = None
    
    @property
    def client(self):
        """Get or create boto3 client with fresh credentials"""
        if self._client is None or self.token_manager.needs_refresh():
            creds = self.token_manager.get_credentials()
            session = boto3.Session(
                aws_access_key_id=creds["access_key_id"],
                aws_secret_access_key=creds["secret_access_key"],
                aws_session_token=creds["session_token"],
                region_name=self.region
            )
            self._client = session.client("bedrock-agentcore")
        return self._client
    
    def add_message(self, role: str, content: str):
        """Store a message in memory"""
        self.client.add_memory_event(
            memoryId=self.memory_id,
            event={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "message",
                "eventData": {
                    "role": role,
                    "content": content,
                    "timestamp": datetime.now().isoformat()
                }
            }
        )
    
    def get_conversation_history(self, max_messages: int = 20):
        """Retrieve conversation history"""
        response = self.client.get_memory_events(
            memoryId=self.memory_id,
            filters={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "message"
            },
            maxResults=max_messages
        )
        
        messages = []
        for event in response.get("events", []):
            messages.append({
                "role": event["eventData"]["role"],
                "content": event["eventData"]["content"]
            })
        
        return messages
    
    def query_long_term_memory(self, query_text: str, top_k: int = 10):
        """Query long-term memories"""
        response = self.client.query_memory(
            memoryId=self.memory_id,
            queryText=query_text,
            actorId=self.actor_id,
            namespaces=[
                f"/preferences/{self.actor_id}",
                f"/facts/{self.actor_id}"
            ],
            maxResults=top_k
        )
        
        return response.get("retrievedMemories", [])


# Usage with any agent framework
MEMORY_ID = os.getenv("MEMORY_ID")
memory = MemoryManager(
    memory_id=MEMORY_ID,
    actor_id="user-123",
    session_id="session-001"
)

# Store user message
memory.add_message("user", "I love pizza")

# Get conversation history
history = memory.get_conversation_history()

# Store agent response
memory.add_message("assistant", "Great! I'll remember that you love pizza.")

# Query long-term memories
memories = memory.query_long_term_memory("What food does the user like?")
print(memories)
```

**Integration with Your Agent:**
```python
# Example: Using with OpenAI
import openai

def chat_with_memory(user_message: str, memory: MemoryManager):
    # Store user message
    memory.add_message("user", user_message)
    
    # Get conversation history
    history = memory.get_conversation_history()
    
    # Get relevant long-term memories
    long_term = memory.query_long_term_memory(user_message)
    
    # Build context
    messages = [
        {"role": "system", "content": f"Relevant memories: {long_term}"}
    ] + history
    
    # Call your LLM
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=messages
    )
    
    # Store assistant response
    assistant_message = response.choices[0].message.content
    memory.add_message("assistant", assistant_message)
    
    return assistant_message

# Usage
response = chat_with_memory("What's my favorite food?", memory)
print(response)  # "You love pizza!"
```

</details>

---

## How Memory Works

### Memory Lifecycle

**Short-Term Memory (Automatic):**
1. User sends message → Stored immediately in storage
2. Agent retrieves conversation history from storage
3. Agent responds → Response stored in storage
4. Linked to SESSION_ID (conversation-specific)

**Long-Term Memory (Asynchronous):**
1. Conversation happens (stored in short-term)
2. Memory strategies analyze conversation (2-5 minutes later)
3. Important facts extracted and converted to embeddings
4. Stored in vector database for semantic search
5. Linked to ACTOR_ID (user-specific, not session-specific)

### Storage Architecture & Managed Service

Agent Toolkit Memory is a **fully managed service**, meaning the underlying storage infrastructure is abstracted and handled automatically:

**What's Managed:**
-  **Short-term storage**: Handled by AWS-managed database (DynamoDB)
-  **Vector storage**: Handled by AWS-managed vector database (OpenSearch Serverless or similar)
-  **Embeddings generation**: Automatic conversion of text to vector embeddings
-  **Scaling & performance**: Automatically scales based on usage
-  **Backup & reliability**: Built-in redundancy and disaster recovery

**What You Control:**
-  **Memory strategies**: Choose which knowledge to extract (preferences, facts, summaries)
-  **Namespaces**: Organize memories by actor/session/type
-  **Retrieval configuration**: Control how memories are queried (top_k, filters)
-  **Access control**: Who can read/write memories via API keys

**External Vector Database Integration:**

 **Agent Toolkit Memory does NOT support external vector databases** like Qdrant, Pinecone, Weaviate, or custom vector stores.

**Why?**
- The service is designed for simplicity and ease of use
- Storage is fully abstracted behind the API
- You interact via `add_memory_event()`, `query_memory()`, etc., without direct database access
- This ensures security, consistency, and automatic optimizations

**Alternative Approaches:**
If you need custom vector database functionality:
1. **Use Memory APIs + Export**: Query memories via API and sync to your own vector DB
2. **Hybrid approach**: Use Agent Toolkit Memory for conversations + your own Qdrant instance for custom data
3. **Build custom solution**: Use boto3 directly with your preferred vector database

---

## Hybrid Approach: AgentCore Memory + Qdrant

While AgentCore Memory doesn't support external vector databases directly, you can implement a powerful **hybrid architecture** that combines the best of both worlds:

**Use AgentCore Memory for conversations + UPTIMIZE Qdrant for custom domain knowledge**

### Why Use a Hybrid Approach?

This architecture allows you to:
-  Store conversation history in AgentCore Memory (fully managed, automatic)
-  Store custom domain knowledge, documents, FAQs in Qdrant (flexible, customizable)
-  Query both systems to provide comprehensive context to your agent
-  Maintain conversation state while accessing specialized knowledge bases
-  Control costs independently for each system

**📚 For complete Qdrant setup, registration, and advanced usage, visit:** [UPTIMIZE Vector Database Documentation](https://docs.uptimize.merckgroup.com/aiml/vector_database/)

### Sample Implementation

<details>
<summary>Click to expand - Complete Hybrid Implementation Code</summary>

```python
import boto3
import os
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
import requests
from datetime import datetime

# ===== AgentCore Memory Manager =====
class AgentCoreMemoryManager:
    """Manages AWS Bedrock AgentCore Memory for conversation history"""
    
    def __init__(self, memory_id: str, actor_id: str, session_id: str, region: str = "eu-central-1"):
        self.memory_id = memory_id
        self.actor_id = actor_id
        self.session_id = session_id
        self.client = boto3.client("bedrock-agentcore", region_name=region)
    
    def add_message(self, role: str, content: str):
        """Store conversation message in AgentCore Memory"""
        self.client.add_memory_event(
            memoryId=self.memory_id,
            event={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "message",
                "eventData": {
                    "role": role,
                    "content": content,
                    "timestamp": datetime.now().isoformat()
                }
            }
        )
    
    def get_conversation_history(self, max_messages: int = 10):
        """Retrieve recent conversation history"""
        response = self.client.get_memory_events(
            memoryId=self.memory_id,
            filters={
                "actorId": self.actor_id,
                "sessionId": self.session_id,
                "eventType": "message"
            },
            maxResults=max_messages
        )
        return [event["eventData"] for event in response.get("events", [])]
    
    def query_user_preferences(self, query: str, top_k: int = 5):
        """Query long-term user preferences extracted by AgentCore"""
        response = self.client.query_memory(
            memoryId=self.memory_id,
            queryText=query,
            actorId=self.actor_id,
            namespaces=[f"/preferences/{self.actor_id}"],
            maxResults=top_k
        )
        return response.get("retrievedMemories", [])


# ===== Qdrant Knowledge Base Manager =====
class QdrantKnowledgeBase:
    """Manages custom domain knowledge in UPTIMIZE Qdrant Vector DB"""
    
    def __init__(self, collection_name: str, env: str = "p"):
        """
        Initialize Qdrant client
        
        Args:
            collection_name: Your Qdrant collection name from registration
            env: Environment - "dev" for development, "p" for production
        """
        self.collection_name = collection_name
        self.url = f"https://api.nlp.{env}.uptimize.merckgroup.com"
        self.nlp_api_key = os.getenv("NLP_API_KEY")  # For embeddings
        self.vec_api_key = os.getenv("VECTORDB_API_KEY")  # For Qdrant
        
        # Initialize Qdrant client
        self.client = QdrantClient(
            url=self.url,
            api_key=self.vec_api_key
        )
    
    def get_embeddings(self, text: str):
        """Generate embeddings using UPTIMIZE Nomic API"""
        api_url = f"{self.url}/nomic/v1/embeddings"
        headers = {"x-api-key": self.nlp_api_key}
        payload = {"input": text}
        response = requests.post(api_url, json=payload, headers=headers)
        return response.json()[0]['embedding']
    
    def create_collection(self, vector_size: int = 768):
        """Create Qdrant collection (one-time setup)"""
        try:
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(
                    size=vector_size,
                    distance=Distance.COSINE,
                    on_disk=True
                )
            )
            print(f"✓ Collection '{self.collection_name}' created")
        except Exception as e:
            print(f"Collection may already exist: {e}")
    
    def add_knowledge(self, id: int, text: str, metadata: dict = None):
        """Add custom knowledge documents to Qdrant"""
        vector = self.get_embeddings(text)
        point = PointStruct(
            id=id,
            vector=vector,
            payload={"text": text, **(metadata or {})}
        )
        self.client.upsert(
            collection_name=self.collection_name,
            points=[point]
        )
    
    def search_knowledge(self, query: str, limit: int = 5):
        """Search for relevant domain knowledge in Qdrant"""
        query_vector = self.get_embeddings(query)
        results = self.client.search(
            collection_name=self.collection_name,
            query_vector=query_vector,
            limit=limit
        )
        return [
            {
                "text": r.payload["text"],
                "score": r.score,
                "metadata": {k: v for k, v in r.payload.items() if k != "text"}
            }
            for r in results
        ]


# ===== Hybrid Agent Implementation =====
class HybridMemoryAgent:
    """AI Agent using both AgentCore Memory and Qdrant Knowledge Base"""
    
    def __init__(
        self,
        agentcore_memory: AgentCoreMemoryManager,
        qdrant_kb: QdrantKnowledgeBase
    ):
        self.memory = agentcore_memory
        self.knowledge = qdrant_kb
    
    def process_query(self, user_query: str):
        """
        Process user query using hybrid memory approach
        
        Combines:
        1. Conversation history from AgentCore Memory
        2. User preferences from AgentCore Memory (long-term)
        3. Domain knowledge from Qdrant
        """
        
        # 1. Store user message in AgentCore Memory
        self.memory.add_message("user", user_query)
        
        # 2. Get recent conversation history from AgentCore
        conversation_history = self.memory.get_conversation_history(max_messages=5)
        
        # 3. Get user preferences from AgentCore (long-term memory)
        user_preferences = self.memory.query_user_preferences(user_query, top_k=3)
        
        # 4. Search custom domain knowledge in Qdrant
        domain_knowledge = self.knowledge.search_knowledge(user_query, limit=5)
        
        # 5. Combine context from both sources
        combined_context = {
            "conversation_history": conversation_history,
            "user_preferences": user_preferences,
            "domain_knowledge": domain_knowledge
        }
        
        # 6. Generate response using your LLM with combined context
        response = self.generate_llm_response(user_query, combined_context)
        
        # 7. Store assistant response in AgentCore Memory
        self.memory.add_message("assistant", response)
        
        return response
    
    def generate_llm_response(self, query: str, context: dict):
        """
        Generate response using LLM with hybrid context
        Replace this with your actual LLM call (OpenAI, Claude, Bedrock, etc.)
        """
        # Build comprehensive prompt
        prompt = f"""
You are a helpful AI assistant with access to conversation history and domain knowledge.

=== Recent Conversation ===
{self._format_conversation(context['conversation_history'])}

=== User Preferences (Long-term Memory) ===
{self._format_preferences(context['user_preferences'])}

=== Relevant Domain Knowledge ===
{self._format_knowledge(context['domain_knowledge'])}

=== Current User Query ===
{query}

Please provide a helpful response using all available context:
"""
        
        # TODO: Replace with your actual LLM call
        # Example with OpenAI:
        # response = openai.ChatCompletion.create(
        #     model="gpt-4",
        #     messages=[{"role": "user", "content": prompt}]
        # )
        # return response.choices[0].message.content
        
        return "[Replace this with your LLM response]"
    
    def _format_conversation(self, history: list) -> str:
        """Format conversation history for prompt"""
        if not history:
            return "No previous conversation"
        return "\n".join([f"{msg['role']}: {msg['content']}" for msg in history[-5:]])
    
    def _format_preferences(self, preferences: list) -> str:
        """Format user preferences for prompt"""
        if not preferences:
            return "No stored preferences"
        return "\n".join([f"- {pref.get('content', pref)}" for pref in preferences])
    
    def _format_knowledge(self, knowledge: list) -> str:
        """Format domain knowledge for prompt"""
        if not knowledge:
            return "No relevant knowledge found"
        return "\n".join([
            f"[Score: {k['score']:.2f}] {k['text']}"
            for k in knowledge
        ])


# ===== Usage Example =====
if __name__ == "__main__":
    # 1. Initialize AgentCore Memory
    agentcore_memory = AgentCoreMemoryManager(
        memory_id=os.getenv("MEMORY_ID"),
        actor_id="user-john",
        session_id="session-001"
    )
    
    # 2. Initialize Qdrant Knowledge Base
    # NOTE: Register for Qdrant access first at:
    # https://docs.uptimize.merckgroup.com/aiml/vector_database/
    qdrant_kb = QdrantKnowledgeBase(
        collection_name="your-collection-name",  # From registration email
        env="p"  # Use "dev" for development
    )
    
    # 3. One-time setup: Create collection and add domain knowledge
    # qdrant_kb.create_collection(vector_size=768)
    # qdrant_kb.add_knowledge(
    #     id=1,
    #     text="AWS Bedrock AgentCore provides managed memory services for AI agents.",
    #     metadata={"source": "aws-docs", "category": "agentcore"}
    # )
    # qdrant_kb.add_knowledge(
    #     id=2,
    #     text="Qdrant is a vector database optimized for semantic search and retrieval.",
    #     metadata={"source": "qdrant-docs", "category": "vector-db"}
    # )
    
    # 4. Create hybrid agent
    agent = HybridMemoryAgent(
        agentcore_memory=agentcore_memory,
        qdrant_kb=qdrant_kb
    )
    
    # 5. Process user queries
    response = agent.process_query("What is AgentCore Memory?")
    print(response)
    
    # Conversation continues with full context
    response = agent.process_query("How does it compare to Qdrant?")
    print(response)
```

</details>

### Benefits of This Hybrid Approach

| Aspect | AgentCore Memory | Qdrant Knowledge Base |
|--------|------------------|----------------------|
| **Use Case** | Conversation history, user preferences | Domain knowledge, FAQs, documents |
| **Management** | Fully managed by AWS | Self-managed content |
| **Updates** | Automatic (preferences extraction) | Manual control |
| **Cost Model** | Per-conversation | Per-storage & queries |
| **Best For** | Session state, user context | Static/semi-static knowledge |
| **Scaling** | Automatic | Manual configuration |

### Setup Checklist

**For AgentCore Memory:**
- [ ] Request access via [Agent Toolkit Access Request Form](https://agenttoolkit.apps.p.uptimize.merckgroup.com/)
- [ ] Receive Memory ID and API Key
- [ ] Set up environment variables

**For Qdrant:**
- [ ] Register use case in [Foundry Use Case Portal](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.cfbd54d9-5f5e-4c67-a94d-37fc842812cc)
- [ ] Apply for token at [Vector DB Token Form](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.42365df1-f320-4c65-af29-c6f840a9d9da)
- [ ] Create collection and index your domain knowledge
- [ ] See [complete Qdrant documentation](https://docs.uptimize.merckgroup.com/aiml/vector_database/)

### When to Use This Approach

** Use Hybrid Approach When:**
- You have static domain knowledge (documentation, FAQs, policies)
- You need granular control over what knowledge is indexed
- You want to separate conversation state from domain knowledge
- Cost optimization is important (control Qdrant costs separately)
- You need to update domain knowledge independently

** AgentCore Memory Alone is Sufficient When:**
- You only need conversation history
- User preferences auto-extraction meets your needs
- You don't have custom domain knowledge to index
- You prefer fully managed solution without external dependencies

---

## Best Practices

### 1. ID Management

```python
# Good - Unique and descriptive
actor_id = f"user-{email}"              # "user-john@example.com"
session_id = f"session-{timestamp}"      # "session-1709648000"

# Bad - Not unique
actor_id = "user"                        # All users share same memory!
session_id = "session"                   # All conversations mixed!
```

### 2. When to Create New Sessions

Create a **new SESSION_ID** when:
- User clicks "New Chat" button
- User explicitly starts a new conversation
- Day changes (for daily conversation isolation)
- Context needs to be cleared

Keep the **same SESSION_ID** when:
- Page refresh (same conversation continues)
- Temporary disconnection
- User navigates away and comes back

### 3. Memory Strategy Selection

Choose strategies based on your use case:

| Use Case | Recommended Strategies |
|----------|----------------------|
| **Personal Assistant** | User Preference + Semantic + Summary |
| **Customer Support** | Summary + Semantic |
| **Educational Tutor** | Semantic + User Preference |
| **Simple Chatbot** | Summary only |

### 4. Error Handling

```python
def safe_memory_operation(operation_func, *args, **kwargs):
    """Safely execute memory operations with error handling"""
    try:
        return operation_func(*args, **kwargs)
    except Exception as e:
        print(f"Memory operation failed: {e}")
        # Fallback: Continue without memory
        return None

# Usage
result = safe_memory_operation(
    memory.add_message,
    "user",
    "Hello!"
)
```

---

## Troubleshooting

### Common Issues

**Issue 1: "Memory not found"**
```python
# Verify memory exists
import boto3
client = boto3.client("bedrock-agentcore-control", region_name="eu-central-1")
response = client.get_memory(memoryId=os.getenv("MEMORY_ID"))
print(f"Memory status: {response['memory']['status']}")
# Status should be "ACTIVE"
```

**Issue 2: "Credentials expired"**
```python
# Test credentials validity
import boto3
sts = boto3.client('sts')
identity = sts.get_caller_identity()
print(f"Credentials valid. Account: {identity['Account']}")
```

**Issue 3: "Long-term memories not appearing"**
- Long-term memory extraction is **asynchronous**
- Takes 2-5 minutes after conversation ends
- Check memory strategies are configured correctly
- Verify namespaces match retrieval configuration

**Issue 4: "Memories not retrieved"**
```python
# Debug memory retrieval
import boto3
import os

client = boto3.client("bedrock-agentcore", region_name="eu-central-1")
response = client.query_memory(
    memoryId=os.getenv("MEMORY_ID"),
    queryText="test query",
    actorId="user-123",
    namespaces=["/preferences/user-123"],
    maxResults=10
)

print(f"Retrieved {len(response.get('retrievedMemories', []))} memories")
for memory in response.get('retrievedMemories', []):
    print(f"- {memory['content']}")
```

---

## Memory Management via CLI

Agent Toolkit CLI provides convenient commands for managing your memories. You can list all memories in your namespace and get detailed information about specific memories.

**List all memories:**
```bash
agenttoolkit memory list
```

**Get memory details:**
```bash
agenttoolkit memory get
```

For more details on CLI commands, refer to the [Agent Toolkit CLI documentation](../cli/#9.-memory-management).

---

## Quick Reference

### Core Operations

| Operation | API Method | Purpose |
|-----------|-----------|---------|
| Add message | `add_memory_event()` | Store conversation |
| Get history | `get_memory_events()` | Retrieve messages |
| Query memory | `query_memory()` | Search long-term facts |

### Memory Namespaces

| Namespace Pattern | Strategy Type | Example |
|------------------|---------------|---------|
| `/preferences/{actorId}` | User Preference | User likes/dislikes |
| `/facts/{actorId}` | Semantic | Factual information |
| `/summaries/{actorId}/{sessionId}` | Summary | Conversation summaries |

---

## Summary

### To Add Memory to Your Agent:

1. **Request access** via [Agent Toolkit Access Request Form](https://agenttoolkit.apps.p.uptimize.merckgroup.com/)
2. **Receive Memory ID and API Key** via email
3. **Set up environment** with your credentials
4. **Integrate with your framework:**
   - **Strands**: Use `AgentCoreMemorySessionManager`
   - **LangGraph**: Use custom checkpointer or direct API
   - **Other**: Use Boto3 client directly
5. **Use unique Actor ID per user**
6. **Use unique Session ID per conversation**

Memory is now automatic! Your agent will remember conversations and extract knowledge.

---

## Additional Resources

- [Agent Toolkit Access Request Form](https://agenttoolkit.apps.p.uptimize.merckgroup.com/)
- [Agent Toolkit CLI](../cli)
- [Integration Hub](../integration-hub)
- [API Documentation](https://api.nlp.p.uptimize.merckgroup.com/agenttoolkit/v1/api-docs)

---