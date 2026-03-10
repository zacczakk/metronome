# BayBE = Bayesian Back End

## Introduction
BayBE stands for **Bay**esian **B**ack **E**nd. It is a general-purpose toolbox for 
**Design of Experiments (DOE)** with particular emphasis on experimentally-relevant addons 
and aims to support many projects at Merck. It provides the necessary functionality to:

- Manage experimental design spaces that can be defined through various types of
  parameters.
- Execute different kinds of DOE strategies, levering both classical and
  machine-learning-based models.
- Handle measurements data and feed it back into the experimental design.
- Compare different DOE strategies through backtesting with synthetic and real data.

The general workflow always follows the same steps: i) get recommendations from the 
algorithm; ii) set the experimental parameters to the recommended ones and measure the 
result and iii) repeat until the desired result is achieved, the experimental budget is 
exhausted or the probability of improvement is low (last point **in development**).

Due to the flexibility of the framework, there are various possible starting points for 
new campaigns:
- **No starting data**: we provide sampling and clustering techniques that kickstart the 
information gain for the optimization phase.
- **Historical data**: you can use any data points measured before the actual campaign 
as long as they fit into the search space that you create. Soon you will also be able to
use data, even if they originate from different but similar campaigns (via 
transfer-learning, **in development**).
- **DOE measurements**: In case a DOE has already been performed but no further 
optimizations have occurred, it is perfectly fine to feed these data to BayBE. In a 
sense, using a classical DOE to reduce the number of parameters before then optimizing 
those via BayBE is a *match made in heaven*.


## Features
BayBE is built on a Bayesian optimization framework, hence the name. The differences to 
classical DOE are as follows:
- A non-explicit machine learning is used instead of explicitly specified linear 
equations.
- The optimization process includes considerations about the model's uncertainty, which 
makes a rigid split into design and optimization phase unnecessary. BayBE aims to
optimize your problem from the very first measurement on, and you don't have to measure 
parameter range boundaries in advance.

Thanks to the machine-learning enabled flexibility there are various extensions which 
can greatly improve the performance:

**Label-encoding**: Instead of treating categorical parameters as such, you can infuse 
the algorithm with expert knowledge by providing descriptors that represent each 
label. Example: A set of solvents can be described by Hansen parameters, which 
enable the algorithm to see similarities between solvents that would otherwise get 
lost or even decrease the performance due to spurious implications that come with 
traditional categorical treatments.

**Transfer-Learning**: Use data from similar campaign so that you do not have to start 
from scratch. Example: in cell culture media development we 
often have the same parameters that correspond to the mixture, but the targeted cell 
type is different. Example 2: In chemical reactions we often vary the same ligands, 
solvents or bases, but the educts (which are not part of the optimization) are different
each campaign.

**Active-Learning**: You can run smart data acquisition campaigns that have the aim to 
improve a certain coverage in the most efficient way. This is e.g. useful when 
performing lab experiments to obtain data to train models. With active learning, the 
model metrics generally improve much faster compared to randomly selecting experiments 
to perform.

**Hybrid spaces**: You can optimize spaces with discrete, continuous or mixed 
parameter types.

**Insights**: Perform few-click postprocessing to gain useful insights such as 
assessing parameter importance.

**Custom models**: BayBE offers a range of tested 
machine-learning models which are used to learn the connection between parameters and 
targets. In some cases you might already have models or architectures stemming from your
own research that you want to use. Use our provided wrappers to enable exactly this.

**Backtesting**: BayBE comes with simulation capabilities that allow you to estimate the 
performance of different settings and algorithms of previous campaigns. This even works 
if your data set is incomplete (not all parameter combinations have been measured), as 
we offer a range of imputation methods.

## Applicable Use-Cases
DOE is generally applicable to almost any form of *black-box* problem. That is, a 
problem where the connection between parameters and measurement outcomes are complicated
and cannot easily be predicted.

### Chemical Reactions
These are the prototype where classical DOE methods often fail due to their simplicity 
and the steep response curves possible in chemistry. You can optimize reaction 
conditions such as temperature, pressure, concentration but also the choice of 
substance (solvent, base, ligand, ...) using the chemical encodings BayBE comes with. 

### Product Development
Many products undergo a synthesis step, where a range of parameters such as incubation 
time, temperature, concentration, equipment settings, etc. are varied. This could be 
for the creation of a new abrasive, thin film, a new molecule, ...

### Mixtures and Formulations
Typical use cases where a large space of possibilities (mixture components and their 
concentration) should be optimized. This could be for pharmaceutical ingredient 
stabilization, mRNA formulation, cell culture media optimization...

### Digital Twins and Simulations
Sometimes in principle a problem can be simulated in the computer via computational 
chemistry, fluid dynamics etc. However, these simulations can be expensive and it might 
be desirable to prioritize in a smart way and reduce the number of simulations that are 
performed. BayBE here can be used as recommender as the "measurements" that are fed to 
it are the results of these simulations. 

### Hyperparameters
Machine learning models or financial equations rely on a large set of coefficients and 
parameters distributed in a complicated space. Bayesian DOE is a good approach to find 
the global optimum of those or find a good solution within a certain budget of trials.

### Active Learning
This is a method to perform experimental campaigns with the sole purpose of creating 
measurements to be used for training a model. Instead of randomly measuring points, you 
can follow the uncertainty of the model to tell you the next set of measurements that 
would lead to the best model improvement. So you can achieve the same model performance 
with a much smaller amount of measurements compared to randomly performing the campaign.
Since active learning is just a special case of Bayesian optimization (with a special 
acquisition function and custom model) you can perform this in the framework of BayBE.

### ... your use-case?
If your use-case does not reflect what is written above there is still a chance that 
BayBE can be of service to you with some slight adjustments and / or developments. In 
this case we are happy to hear your suggestions.

## Contact
BayBE is a Merck-internal development with various contributions from all businesses. 
You can direct questions and inquiries to any of the developers: 
- [Martin Fitzner (S&T Digital Chemistry)](mailto:martin.fitzner@merckgroup.com)
- [Adrian Šošić (LS ACE)](mailto:adrian.sosic@merckgroup.com)
- [Alexander Hopp (S&T AI & Quantum Lab)](mailto:alexander.hopp@merckgroup.com)
- [Kathrin Skubch (S&T AI & Quantum Lab)](mailto:kathrin.skubch@merckgroup.com)
- [Daniel Weber (S&T Digital Chemistry)](mailto:daniel.weber@emdserono.com)

---

# Instructions

## Access the Python package
The python package is hosted as [repository on Github](https://github.com/emdgroup/baybe/). 
For installation and usage instructions please refer to the README.

## Access the RestAPI
We hosted a RestAPI on UPTIMIZE. The two main differences to pythonic usage are i) no 
installation of the SDK is necessary; and ii) the computation is performed in the AWS 
cloud and not on the machine invoking the commands. 
[Apply for an API key on Foundry](https://palantir.mcloud.merckgroup.com/workspace/module/view/latest/ri.workshop.main.module.0812a739-40d1-4e39-9b70-df32b766fb43)

Please note that:
- A key must be linked to exactly one foundry use case.
- Per use case there can be only one API key.
- API keys can be reissued if they are lost (contact us).
- The typical approval takes some hours, but might extend into a handful of days.

## When not to use BayBE
Given its flexible approach to optimizing *black-box* problems, BayBE can help with a 
variety of projects. However, in a few situations it is unlikely that BayBE can solve 
your problem, and you might save some time investigating alternative approaches other 
than Bayesian DOE:
- **You expect that BayBE works with arbitrary historical Merck data**: BayBE is based on 
a low- to no-data method and does not come with data sets to model problems. You are 
responsible for providing reasonable data or perform the measurement loop. Also, if you 
have lots of data, a purely predictive model could be a better first approach.
- **You expect a zero-shot solution**: BayBE learns with measurements. Especially in the 
very initial starting phase, given that no or few measurements have been provided, its 
performance is not necessarily better than random. This is entirely expected, and we can 
see in the [benchmarks](baybe/benchmarks/) that after this initial phase the learning curves then often shoot up 
drastically.
- **Your problem can be solved with mechanistic modelling**: BayBE does not aim to replace 
methods such as fluid dynamics, computational chemistry or bioreactor 
modelling. So if your problem can be solved by these methods they are favorable to try 
first. However, in the case that the simulations are too expensive, using BayBE as 
selector for what simulations to prioritize can be a beautiful combo.

---

## The BayBE Python SDK Documentation Has Moved Permanently

Please find the up-to-date documentation of the Python 
package online:
  - [GitHub](https://github.com/emdgroup/baybe)
  - [README](https://emdgroup.github.io/baybe/stable/#)
  - [Code Documentation](https://emdgroup.github.io/baybe/stable/_autosummary/baybe.html)
  - [Examples](https://emdgroup.github.io/baybe/stable/examples/examples.html)
  - [User Guide](https://emdgroup.github.io/baybe/stable/userguide/userguide.html)
  - [PyPI](https://pypi.org/project/baybe/)
  - [Publication in Digital Discovery](https://pubs.rsc.org/en/content/articlelanding/2025/dd/d5dd00050e)

---

# Info about the RestAPI

**Please refer to [Instructions](baybe/instructions/) for how to obtain an API key.**

The API has been tested with discrete search spaces up to 150M entries. The discrete 
search space size is defined as the product of the number of possible values for each 
discrete parameter. If your project configuration is larger, please consider changing 
the design of your project. For instance, if you have few parameters, you can typically 
add much more possible values to your discrete parameters. But if you have many 
parameters, it is worth changing some of them to a continuous parameter as this 
drastically reduces the size of the discrete search space part.

**These pages document the API version 0.14, which is linked to the latest Python version 0.14.x**

---

# RestAPI
The BayBE RestAPI takes away the burden of performing the computations associated with BayBE
locally and installing the package. It is therefore the ideal way
to use BayBE for web applications, dashboards or programs running on limited machines 
(like typical lab equipment). For usage information and examples please consult the 
other sections.

## Documentation
We provide [Swagger docs](https://docs.baybe.p.uptimize.merckgroup.com/api-reference) 
for the RestAPI.

## Versioning
The version of the API is pinned to the SDK version. This means that a config that 
should work with the API version 0.14 needs to be compatible with the latest SDK version 
0.14.x and so on. You can switch version in the dropdown list on the API documentation 
page.

---

# BayBE RestAPI Minimal Example

Version 0.14

## Request Syntax

HTTP calls in this example are done via the command syntax `!curl ...` in a Jupyter notebook purely for display purposes. They can also be made directly in the console with `curl` or using the `requests` package in Python. For instance, these calls are identical except for the response object they return as this is structured according to the package/command.

#### Redirects
All API calls should be made with redirects enabled, e.g. `-L` option for `curl`. This ensures that calls to `http` and `https` both work.

#### 1) Python
```python
import requests
response = requests.get(url, allow_redirects=True, headers={
    'accept': 'application/json',
    'x-api-key': api_key
})
```

#### 2) Jupyter NB using a console command
```python
response = !curl -s -L \ # using -s to suppress additional console output
  -X GET {url} \ 
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}
```

#### 3) Unix terminal
```bash
curl -L -X GET ${url} -H 'accept: application/json' -H "x-api-key: ${api_key}"
```
or
```bash
wget --method GET --header='accept: application/json' --header="x-api-key: ${api_key}" ${url}
```

#### 4) Windows terminal
```powershell
$headers = @{
    "accept" = "application/json"
    "x-api-key" = $api_key
}

$response = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
```

## Action Flow
All basic actions in the BayBE API follow roughly the same workflow:
1) Do a `POST` call to the respective endpoint to initiate an action
2) This near-instantly returns a response that includes an `uploadUrl`
3) Upload (e.g. via `PUT` call) any arguments or data that are needed for the action in json format to that URL. Even if you want to perform the action with default arguments and there is no data to be uploaded, you must upload an empty json
4) Successful upload to the `uploadUrl` triggers the actual computation
5) You can now periodically check the status of the computation with a `GET` call to the corresponding endpoint
6) Once the computation finishes, the response of the `GET` call will include a `downloadUrl`
7) Download (e.g. via `GET` call) the outcome of the computation from the `downloadUrl`

## Action Status
Requests in the BayBE API will generally return a response that has a `status` entry. It can have one of four values:
- `awaiting_upload`: The action was initiated and is awaiting upload of the arguments and/or data to `uploadUrl`
- `upload_complete`: An upload to the URL was successfully registered and will start the computation soon
- `queueing`: The request was processed and added into the queue. Requests in the queue will be processed in order, so you can send a cascade of related calls in order without them having to wait for each other (e.g. 1) create project, 2) upload measurement, 3) trigger recommendation)
- `processing`: The request is currently being worked on, e.g. during computation. Typical calculation times are very short so it's less likely that you will encounter this status  
- `success`: Processing of the request has finished without problem
- `error`: Something went wrong, additional details can be found in the `error` item of the response

**Recommendation:** Before every `POST` call, make sure via a respective `GET` call to the previous action to check whether the intended process was actually performed correctly and the status is not `error`. If a command is not executed successfully, the status of the underlying campaign will not be updated and any further commands will operate on the last successfully changed campaign. In the worst case, you could request recommendations and receive suboptimal ones because the preceding call to add measurements was not successful (e.g. due to invalid data used for the upload).

**In this tutorial,** there are several places where we introduce an artificial waiting time via `sleep`. In practice, you don't have to wait in this manner, but you can continuously (e.g. in a loop) perform the `GET` request and continue once the result is `success`.

## downloadUrl and uploadUrl
Some of the calls will result in `uploadUrl` or `downloadUrl` fields being returned. These URLs are a mechanism to send required input and retrieve the computation results without being limited by size as it would be if data was being sent directly via the http request.
- These URLs are self-signed. Thus, they don't need the API key and you should treat them as secret.
- `uploadUrl`: Valid for 5 minutes.
- `downloadUrl`: Valid for 1 hour.

**Important! Single-Use for Upload**: The computation will immediately be triggered after you uploaded the data to the `uploadUrl`. You should treat these as single-use as there is no mechanism to deactivate the URLs after they have been used, but multiple uploads might result in very random and unexpected behavior. If you uploaded something by mistake you should correct the project, but never attempt to upload again to the same URL.

## Imports and Specifications


```python
# Needed for waiting for a time period
import time

# Needed for visualization
import json
import pandas as pd
import seaborn as sns
```


```python
url = 'https://api.baybe.dev.uptimize.merckgroup.com/v0.14'
api_key = 'REDACTED_USE_YOUR_OWN'
```

## Get All Existing Projects for That API Key
Note that for brevity each project item does not contain the configuration details. To get this, use the corresponding GET call on a particular project (see below).


```python
response = !curl -s -X GET {url}/projects \
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}

#response
json.loads(response[0])[-3:] # Only show last three entries
```




    [{'projectId': '0000697b99b511904a3cef9103bd',
      'name': 'Simplex Example',
      'createdAt': '2026-01-29T17:32:37Z',
      'currentBatch': 0,
      'currentFit': 0,
      'noMeasurements': 0,
      'description': 'Mixture of up to four components',
      'queue': None,
      'status': 'success',
      'error': None,
      'version': 'v0.14',
      'uploadUrl': None,
      'uploadUrlExpiration': None},
     {'projectId': '0000697ca578db6ab7fd858b16ae',
      'name': 'Minimal_Example',
      'createdAt': '2026-01-30T12:35:04Z',
      'currentBatch': 1,
      'currentFit': 2,
      'noMeasurements': 1,
      'description': 'for API demo',
      'queue': None,
      'status': 'success',
      'error': None,
      'version': 'v0.14',
      'uploadUrl': None,
      'uploadUrlExpiration': None},
     {'projectId': '00006980af554c905422625411fd',
      'name': 'Simplex Example',
      'createdAt': '2026-02-02T14:06:13Z',
      'currentBatch': 0,
      'currentFit': 0,
      'noMeasurements': 0,
      'description': 'Mixture of up to four components',
      'queue': None,
      'status': 'success',
      'error': None,
      'version': 'v0.14',
      'uploadUrl': None,
      'uploadUrlExpiration': None}]



## Create a New Project


```python
response = !curl -s -L -X POST {url}/projects \
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}

response = json.loads(response[0])
upload_url = response['uploadUrl']
status = response['status']
project_id = response['projectId']

print(upload_url)
print(status)
print(project_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    0000699722cbc7625a7c2e8edd4d



```python
payload = """{
  "name": "Minimal_Example",
  "description": "for API demo",
  "config": {
    "allow_recommending_already_recommended": true,
    "allow_recommending_already_measured": false,
    "searchspace": {
      "constructor": "from_product",
      "parameters": [
        {
          "type": "CategoricalParameter",
          "name": "Granularity",
          "values": [
            "coarse",
            "medium",
            "fine"
          ],
          "encoding": "OHE"
        },
        {
          "type": "NumericalDiscreteParameter",
          "name": "Pressure[bar]",
          "values": [
            1,
            5,
            10
          ],
          "tolerance": 0.2
        },
        {
          "type": "SubstanceParameter",
          "name": "Solvent",
          "data": {
            "Solvent A": "COC",
            "Solvent B": "CNCC",
            "Solvent C": "CCCCC"
          },
          "decorrelate": true,
          "encoding": "RDKIT"
        }
      ],
      "constraints": []
    },
    "objective": {
        "type": "DesirabilityObjective",
        "targets":
        [
            {
                "type": "NumericalTarget",
                "name": "t1",
                "mode": "MAX",
                "bounds": [0, 100]
            },
            {
                "type": "NumericalTarget",
                "name": "t2",
                "mode": "MIN",
                "bounds": [0, 100]
            }
        ]
    },
    "recommender": {
        "type": "TwoPhaseMetaRecommender",
        "initial_recommender": {
            "type": "RandomRecommender"
        },
        "recommender": {
            "type": "BotorchRecommender",
            "surrogate_model": {
                "type": "GaussianProcessSurrogate"
            },
            "acquisition_function": "qLogEI"
        },
        "switch_after": 1
    }
  }
}"""
```


```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []



## Check project status
After posting the create command the project is queued for processing (see status `queueing`). We can check the status and other project information for the next call. If the status is `error` a corresponding error message is also provided, otherwise `null`.


```python
time.sleep(100) # Wait some time for the project creation

response = !curl -s -L -X GET {url}/projects/{project_id} \
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

response['status'], response['projectId'], response['error']
```




    ('success', '0000699722cbc7625a7c2e8edd4d', None)



Since now the project status is `success` the project was created correctly and we can continue.

## Upload Measurements

We will upload seven fake measurements here for demonstration purposes.


```python
response = !curl -s -L -X POST {url}/projects/{project_id}/measurements \
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}

response = json.loads(response[0])
upload_url = response['uploadUrl']
status = response['status']
measurement_id = response['measurementId']

print(upload_url)
print(status)
print(measurement_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    0001699722f6d2e356bc04149577



```python
payload = '''{
    "measurements":{
        "orient": "records",
        "json": [
            {
                "Granularity": "coarse",
                "Pressure[bar]": 1,
                "Solvent": "Solvent A",
                "t1": 2.2,
                "t2": 10
            },
            {
                "Granularity": "fine",
                "Pressure[bar]": 5,
                "Solvent": "Solvent B",
                "t1": 52.3,
                "t2": 12
            },
            {
                "Granularity": "medium",
                "Pressure[bar]": 10,
                "Solvent": "Solvent C",
                "t1": 82.3,
                "t2": 2
            },
            {
                "Granularity": "coarse",
                "Pressure[bar]": 10,
                "Solvent": "Solvent C",
                "t1": 92.3,
                "t2": 0.2
            },
            {
                "Granularity": "fine",
                "Pressure[bar]": 1,
                "Solvent": "Solvent B",
                "t1": 22.3,
                "t2": 1
            },
            {
                "Granularity": "medium",
                "Pressure[bar]": 10,
                "Solvent": "Solvent A",
                "t1": 82.3,
                "t2": 1
            },
            {
                "Granularity": "fine",
                "Pressure[bar]": 5,
                "Solvent": "Solvent C",
                "t1": 42.1,
                "t2": 62.3
            }
        ]
    }
}'''
pd.DataFrame.from_records(json.loads(payload)['measurements']['json'])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Granularity</th>
      <th>Pressure[bar]</th>
      <th>Solvent</th>
      <th>t1</th>
      <th>t2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>coarse</td>
      <td>1</td>
      <td>Solvent A</td>
      <td>2.2</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>fine</td>
      <td>5</td>
      <td>Solvent B</td>
      <td>52.3</td>
      <td>12.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>medium</td>
      <td>10</td>
      <td>Solvent C</td>
      <td>82.3</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>coarse</td>
      <td>10</td>
      <td>Solvent C</td>
      <td>92.3</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>fine</td>
      <td>1</td>
      <td>Solvent B</td>
      <td>22.3</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>medium</td>
      <td>10</td>
      <td>Solvent A</td>
      <td>82.3</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>fine</td>
      <td>5</td>
      <td>Solvent C</td>
      <td>42.1</td>
      <td>62.3</td>
    </tr>
  </tbody>
</table>
</div>




```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []



## Check Whether Measurements Were Added Successfully
Similar to project creation, the call above returned status `queueing`. We now check whether the measurements have been added successfully. The following command checks the status for all uploaded measurements.


```python
response = !curl -s -L -X GET {url}/projects/{project_id}/measurements \
  -H 'x-api-key: '{api_key}

json.loads(response[0])
```




    [{'measurementId': '0001699722f6d2e356bc04149577',
      'batch': 1,
      'createdAt': '2026-02-19T14:49:26Z',
      'status': 'upload_complete',
      'error': None,
      'uploadUrl': None,
      'uploadUrlExpiration': None,
      'downloadUrl': None,
      'downloadUrlExpiration': None}]



You can also check the status of that particular measurement upload from above, using its `measurementId`. Note that this does not return a list as the call above but just one single item.


```python
response = !curl -s -L -X GET {url}/projects/{project_id}/measurements/{measurement_id} \
  -H 'x-api-key: '{api_key}

json.loads(response[0])['status']
```




    'success'



Often we are only interested in the status of the latest call, in this case you can use `latest` instead of the `measurementID` in the URL.


```python
time.sleep(100) # wait time to ensure measurements were added

response = !curl -s -L -X GET {url}/projects/{project_id}/measurements/latest \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

response['status']
```




    'success'



## Trigger Recommendations
Let's ask for 5 experimental recommendations. This request can already be made before the calls from above return the status `success` since it will simply queue after the previous request. However, if there was an error with uploading the measurements you would not notice. Hence, it is safe to check whether the previous upload was successful.


```python
assert response['status'] == 'success', "There was an issue with uploading data, please fix before continuing. The upload might also still be 'upload_complete', 'queueing' or `processing`."
```


```python
response = !curl -s -L -X POST {url}/projects/{project_id}/recommendations \
 -H 'x-api-key: '{api_key}

response = json.loads(response[0])
upload_url = response['uploadUrl']
status = response['status']
recommendation_id = response['recommendationId']

print(upload_url)
print(status)
print(recommendation_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    000269972301769d54fc8ef4bec4



```python
payload="""
{"batchSize": 5,
"randomSeed": 1337}
"""

response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []



## Random Seed

When requesting recommendations you can optionally provide the `randomSeed` as part of the payload (see above). This can ensure reproducibility by using the corresponding random seed during the optimization. All other request have no random aspects and hence do not accept this optional parameter.

## Get Status of Recommendations

If you try to retrieve recommendations immediately the result will be empty and the status still `queueing`. The following call will give you the status of all recommendation requests ever performed for this project.


```python
response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations \
  -H 'x-api-key: '{api_key}

json.loads(response[0])
```




    [{'recommendationId': '000269972301769d54fc8ef4bec4',
      'createdAt': '2026-02-19T14:49:37Z',
      'changedAt': None,
      'fit': None,
      'batch': 1,
      'batchSize': 5,
      'randomSeed': 1337,
      'pendingExperiments': None,
      'status': 'processing',
      'error': None,
      'uploadUrl': None,
      'uploadUrlExpiration': None,
      'downloadUrl': None,
      'downloadUrlExpiration': None}]



Similar to the measurements, you can also just retrieve the result for a specific recommendation, identified by `recommendationID`.


```python
response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/{recommendation_id} \
  -H 'x-api-key: '{api_key}

json.loads(response[0])
```




    {'recommendationId': '000269972301769d54fc8ef4bec4',
     'createdAt': '2026-02-19T14:49:37Z',
     'changedAt': None,
     'fit': 1,
     'batch': 1,
     'batchSize': 5,
     'randomSeed': 1337,
     'pendingExperiments': None,
     'status': 'success',
     'error': None,
     'uploadUrl': None,
     'uploadUrlExpiration': None,
     'downloadUrl': 'https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...',
     'downloadUrlExpiration': '2026-02-19T15:49:46Z'}



In most use cases, we are however only interested in the most current recommendations. This info can be retrieved by using `latest` in the URL.


```python
time.sleep(100)

response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/latest \
  -H 'x-api-key: '{api_key}

response = json.loads(response[0])
download_url = response['downloadUrl']

print(response)
```

    {'recommendationId': '000269972301769d54fc8ef4bec4', 'createdAt': '2026-02-19T14:49:37Z', 'changedAt': None, 'fit': 1, 'batch': 1, 'batchSize': 5, 'randomSeed': 1337, 'pendingExperiments': None, 'status': 'success', 'error': None, 'uploadUrl': None, 'uploadUrlExpiration': None, 'downloadUrl': 'https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...', 'downloadUrlExpiration': '2026-02-19T15:49:46Z'}


So we wait some time until recommendation calculation is finished. This time can strongly vary from project to project, we recommend to perform a loop and wait until the status is `success` or use webhooks.

## Download Recommendations
Once recommendations are ready, you can download them from the `downloadUrl`


```python
response = !curl -s -L -X GET "{download_url}"
recommendations = json.loads(response[0])
pd.DataFrame.from_records(recommendations)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Granularity</th>
      <th>Pressure[bar]</th>
      <th>Solvent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>coarse</td>
      <td>5.0</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>1</th>
      <td>medium</td>
      <td>5.0</td>
      <td>Solvent A</td>
    </tr>
    <tr>
      <th>2</th>
      <td>medium</td>
      <td>5.0</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>3</th>
      <td>medium</td>
      <td>10.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>4</th>
      <td>coarse</td>
      <td>10.0</td>
      <td>Solvent B</td>
    </tr>
  </tbody>
</table>
</div>



## Pending Experiments

After you initiated the measurement process, you might want to trigger recommendations again, even before the measurements are ready. If this is done naively, the API would simply return the previous recommendations again, because if no measurements were uploaded, the recommender would have no new information and no reason to recommend something else (except for small numerical convergence reasons).

`pendingExperiments` is an optional keyword that you can attach to the call when triggering recommendations. The content follows the same structure as `measurements` and has to be added to the payload. If this is done, BayBE will take into consideration that these measurements have already been started but no final measurement is provided.

Below, we will consider our previous set of recommendations as `pendingExperiments`. As you can see, the recommendations returned now are different from the pending ones, as we require.


```python
pending = recommendations
pd.DataFrame.from_records(pending)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Granularity</th>
      <th>Pressure[bar]</th>
      <th>Solvent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>coarse</td>
      <td>5.0</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>1</th>
      <td>medium</td>
      <td>5.0</td>
      <td>Solvent A</td>
    </tr>
    <tr>
      <th>2</th>
      <td>medium</td>
      <td>5.0</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>3</th>
      <td>medium</td>
      <td>10.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>4</th>
      <td>coarse</td>
      <td>10.0</td>
      <td>Solvent B</td>
    </tr>
  </tbody>
</table>
</div>




```python
response = !curl -s -L -X POST {url}/projects/{project_id}/recommendations \
 -H 'x-api-key: '{api_key}

response = json.loads(response[0])
upload_url = response['uploadUrl']
status = response['status']
recommendation_id = response['recommendationId']

print(upload_url)
print(status)
print(recommendation_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    00026997232fed5e1d9f24188de3



```python
payload = {
    "batchSize": 5,
    "randomSeed": 1337,
    "pendingExperiments": {
        "orient": "records",
        "json": pending
    }
}
payload = json.dumps(payload, indent=4)
```


```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100)

response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/latest \
  -H 'accept: application/json' \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
recommendation_id = response['recommendationId']

print(download_url)
print(status)
print(recommendation_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    00026997232fed5e1d9f24188de3



```python
response = !curl -s -L -X GET "{download_url}"
recommendations_new = json.loads(response[0])
pd.DataFrame.from_records(recommendations_new)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Granularity</th>
      <th>Pressure[bar]</th>
      <th>Solvent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>coarse</td>
      <td>1.0</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>1</th>
      <td>medium</td>
      <td>1.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>2</th>
      <td>fine</td>
      <td>10.0</td>
      <td>Solvent A</td>
    </tr>
    <tr>
      <th>3</th>
      <td>coarse</td>
      <td>1.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>4</th>
      <td>coarse</td>
      <td>10.0</td>
      <td>Solvent A</td>
    </tr>
  </tbody>
</table>
</div>



We see that the `recommendations` obtained are different to the previous recommendations because the `pendingExperiments` have been incorporated.

# Posterior Stats - General

Here, we will get statistics about the posterior predictions of our current campaign.

The payload is entirely optional and can also be left out. 
It is there to enable further configurability, for more info
please refer to the [API Swagger](https://docs.baybe.p.uptimize.merckgroup.com/api-reference) and the [SDK documentation on posterior statistics](https://emdgroup.github.io/baybe/stable/userguide/campaigns.html#predictive-statistics).

### Custom Stats and Candidates


```python
payload="""
{
    "stats": [0.2, "mean", "std", 0.8],
    "candidates": {
        "orient": "columns",
        "json": {
            "Granularity": ["coarse", "fine", "fine"],
            "Pressure[bar]": [12, 5, 2],
            "Solvent": ["Solvent A", "Solvent C", "Solvent A"]
        }
    }
}
"""

# The way "stats" is configured above, the computation will
# return the mean, the standard deviation and the 0.2/0.8
# quantiles of the posterior distribution. This is optional
# and if left out, the mean and std of the predictions will
# be returned

# "candidates" is optional, you can set it to null or leave
# out the entry entirely. In that case, posterior statistics
# for the added measurements are computed

# The payload could also contain a webhook a la:
  # "webhookConfig": {
  #   "url": "https://your-webhook-url.com/callback",
  #   "authToken": "your-auth-token"
  # }
```


```python
response = !curl -s -L -X POST {url}/projects/{project_id}/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

stats_id = response['statsId']
status = response['status']
upload_url = response['uploadUrl']

print(stats_id)
print(status)
print(upload_url)
```

    00056997234562eea2dd16efdcbf
    awaiting_upload
    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...



```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100) # Wait some time for computation to finish

response = !curl -s -L -X GET {url}/projects/{project_id}/posterior-stats/{stats_id} \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
stats_id = response['statsId']

print(download_url)
print(status)
print(stats_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    00056997234562eea2dd16efdcbf



```python
data = !curl -s -L -X GET "{download_url}"
pd.DataFrame.from_records(json.loads(data[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>t1_Q_0.2</th>
      <th>t1_mean</th>
      <th>t1_std</th>
      <th>t1_Q_0.8</th>
      <th>t2_Q_0.2</th>
      <th>t2_mean</th>
      <th>t2_std</th>
      <th>t2_Q_0.8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>4.109683</td>
      <td>53.997065</td>
      <td>59.275337</td>
      <td>103.884447</td>
      <td>-19.709632</td>
      <td>12.910035</td>
      <td>38.758132</td>
      <td>45.529703</td>
    </tr>
    <tr>
      <th>1</th>
      <td>36.832108</td>
      <td>42.255828</td>
      <td>6.444372</td>
      <td>47.679549</td>
      <td>58.461444</td>
      <td>61.801416</td>
      <td>3.968498</td>
      <td>65.141389</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5.387742</td>
      <td>55.290150</td>
      <td>59.293190</td>
      <td>105.192558</td>
      <td>-19.585863</td>
      <td>13.468367</td>
      <td>39.274472</td>
      <td>46.522596</td>
    </tr>
  </tbody>
</table>
</div>



### Default Arguments

 Let's repeat this process, but this time without any of the optional arguments.


```python
# The following payload would just return the default statistics
# on all measurements that were added so far to the campaign
payload="""
{
}
"""

# It is also possible to just include just one of 'stats' or 
# 'candidates', which is not demonstrated here
```


```python
response = !curl -s -L -X POST {url}/projects/{project_id}/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response['uploadUrl']
status = response['status']
stats_id = response['statsId']

print(upload_url)
print(status)
print(stats_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    000569972353dd146986549fb4d2



```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100) # Wait some time for computation to finish

response = !curl -s -L -X GET {url}/projects/{project_id}/posterior-stats/{stats_id} \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
stats_id = response['statsId']

print(download_url)
print(status)
print(stats_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    000569972353dd146986549fb4d2



```python
data = !curl -s -L -X GET "{download_url}"
pd.DataFrame.from_records(json.loads(data[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>t1_mean</th>
      <th>t1_std</th>
      <th>t2_mean</th>
      <th>t2_std</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2.827160</td>
      <td>6.444372</td>
      <td>10.035406</td>
      <td>3.968498</td>
    </tr>
    <tr>
      <th>1</th>
      <td>52.121557</td>
      <td>6.434357</td>
      <td>11.850161</td>
      <td>3.948013</td>
    </tr>
    <tr>
      <th>2</th>
      <td>81.980960</td>
      <td>6.444372</td>
      <td>2.117088</td>
      <td>3.968498</td>
    </tr>
    <tr>
      <th>3</th>
      <td>91.862822</td>
      <td>6.444372</td>
      <td>0.335468</td>
      <td>3.968498</td>
    </tr>
    <tr>
      <th>4</th>
      <td>22.770754</td>
      <td>6.434357</td>
      <td>1.233205</td>
      <td>3.948013</td>
    </tr>
    <tr>
      <th>5</th>
      <td>81.980959</td>
      <td>6.444372</td>
      <td>1.127297</td>
      <td>3.968498</td>
    </tr>
    <tr>
      <th>6</th>
      <td>42.255828</td>
      <td>6.444372</td>
      <td>61.801416</td>
      <td>3.968498</td>
    </tr>
  </tbody>
</table>
</div>



# Posterior Stats - For Recommendations
The `POST {url}/projects/{project_id}/posterior-stats` URL is designed to enable posterior statistics calculation of arbitrary candidates.
But the most common use case for candidates in posterior statistics are likely the recommendations calculated previously.
Thus, we also offer a shortcut to compute posterior statistics for provided recommendations since this is a frequent use case.
These URLs are sub paths of the recommendation end point, so you can call them on a specific `recommendationId` or on simply the newest recommendations via `latest`.

## Default Statistics


```python
# We will use the stored recommendationId from the respective earlier section
recommendation_id
```




    '00026997232fed5e1d9f24188de3'




```python
response = !curl -s -L -X POST {url}/projects/{project_id}/recommendations/{recommendation_id}/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response['uploadUrl']
status = response['status']
stats_id = response['statsId']

print(upload_url)
print(status)
print(stats_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    000669972363bd12e1b08f69c9b1



```python
# Let us look at the default statistics, meaning we upload an empty file
payload="""
{
}
"""
```


```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100)

response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/{recommendation_id}/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
stats_id = response['statsId']

print(download_url)
print(status)
print(stats_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    000669972363bd12e1b08f69c9b1



```python
data = !curl -s -L -X GET "{download_url}"
pd.DataFrame.from_records(json.loads(data[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>t1_mean</th>
      <th>t1_std</th>
      <th>t2_mean</th>
      <th>t2_std</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>57.574601</td>
      <td>59.178801</td>
      <td>9.989234</td>
      <td>37.886080</td>
    </tr>
    <tr>
      <th>1</th>
      <td>55.291725</td>
      <td>59.293190</td>
      <td>13.467528</td>
      <td>39.274472</td>
    </tr>
    <tr>
      <th>2</th>
      <td>55.291072</td>
      <td>59.293190</td>
      <td>13.468512</td>
      <td>39.274472</td>
    </tr>
    <tr>
      <th>3</th>
      <td>55.289457</td>
      <td>59.293190</td>
      <td>13.467714</td>
      <td>39.274472</td>
    </tr>
    <tr>
      <th>4</th>
      <td>52.015414</td>
      <td>59.178801</td>
      <td>12.558420</td>
      <td>37.886080</td>
    </tr>
  </tbody>
</table>
</div>



## Custom Statistics


```python
payload="""
{
    "stats": [0.2, "mean", "std", 0.8]
}
"""
```


```python
# This time, we will perform the computation on the latest recommendations
response = !curl -s -L -X POST {url}/projects/{project_id}/recommendations/latest/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response['uploadUrl']
status = response['status']
stats_id = response['statsId']

print(upload_url)
print(status)
print(stats_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    000669972373317fe6e5ce369e2e



```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100)

response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/latest/posterior-stats \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
stats_id = response['statsId']

print(download_url)
print(status)
print(stats_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    000669972373317fe6e5ce369e2e



```python
data = !curl -s -L -X GET "{download_url}"
pd.DataFrame.from_records(json.loads(data[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>t1_Q_0.2</th>
      <th>t1_mean</th>
      <th>t1_std</th>
      <th>t1_Q_0.8</th>
      <th>t2_Q_0.2</th>
      <th>t2_mean</th>
      <th>t2_std</th>
      <th>t2_Q_0.8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>7.768465</td>
      <td>57.574601</td>
      <td>59.178801</td>
      <td>107.380736</td>
      <td>-21.896495</td>
      <td>9.989234</td>
      <td>37.886080</td>
      <td>41.874963</td>
    </tr>
    <tr>
      <th>1</th>
      <td>5.389317</td>
      <td>55.291725</td>
      <td>59.293190</td>
      <td>105.194133</td>
      <td>-19.586701</td>
      <td>13.467528</td>
      <td>39.274472</td>
      <td>46.521758</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5.388664</td>
      <td>55.291072</td>
      <td>59.293190</td>
      <td>105.193480</td>
      <td>-19.585718</td>
      <td>13.468512</td>
      <td>39.274472</td>
      <td>46.522741</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5.387049</td>
      <td>55.289457</td>
      <td>59.293190</td>
      <td>105.191864</td>
      <td>-19.586515</td>
      <td>13.467714</td>
      <td>39.274472</td>
      <td>46.521944</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2.209278</td>
      <td>52.015414</td>
      <td>59.178801</td>
      <td>101.821550</td>
      <td>-19.327309</td>
      <td>12.558420</td>
      <td>37.886080</td>
      <td>44.444149</td>
    </tr>
  </tbody>
</table>
</div>



# SHAP Insights

This endpoint enables the calculation of SHAP values for the currently ingested measurements.

The payload is entirely optional and can also be left out.
It is there to enable further configurability, for more info
please refer to the [API Swagger](https://docs.baybe.p.uptimize.merckgroup.com/api-reference) and the [SDK documentation on SHAP insights](https://emdgroup.github.io/baybe/stable/userguide/insights.html#parameter-importance-via-shap).

### Trigger the Process


```python
response = !curl -s -L -X POST {url}/projects/{project_id}/insights/shap \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response['uploadUrl']
status = response['status']
insight_id = response['insightId']

print(upload_url)
print(status)
print(insight_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    000469972384adadd0347d0d98a5



```python
payload="""
{
    "comp_rep": false,
    "explainer": "KernelExplainer"
}
"""
```


```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []



### Download the Result


```python
time.sleep(100) # Wait until the status went from 'queueing' to 'success'

response = !curl -s -L -X GET {url}/projects/{project_id}/insights/shap \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

download_url = response['downloadUrl']
status = response['status']
insight_id = response['insightId']

print(download_url)
print(status)
print(insight_id)
```

    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...
    success
    000469972384adadd0347d0d98a5



```python
response = !curl -s -L -X GET "{download_url}"
response
```




    ['{"desirability": [{"Granularity": -14.072235269117272, "Pressure[bar]": -20.201082542606247, "Solvent": -16.58524233892936}, {"Granularity": -4.13966127939598, "Pressure[bar]": 2.837353998249796, "Solvent": -0.2618561553381795}, {"Granularity": 10.386176436055777, "Pressure[bar]": 11.087751251385912, "Solvent": 6.821312700880895}, {"Granularity": 10.936701835635223, "Pressure[bar]": 13.339212857533889, "Solvent": 13.90118740234499}, {"Granularity": -8.156303082408446, "Pressure[bar]": -14.87396614029367, "Solvent": -7.884696465218404}, {"Granularity": 15.064049283640319, "Pressure[bar]": 10.98228022326265, "Solvent": 2.2489089129144517}, {"Granularity": -10.018727924409605, "Pressure[bar]": -3.1715496475323093, "Solvent": 1.7603859433455842}]}']



### Minor Postprocessing for a Typical SHAP Bar Plot


```python
shap_results = json.loads(response[0])
shap_results
```




    {'desirability': [{'Granularity': -14.072235269117272,
       'Pressure[bar]': -20.201082542606247,
       'Solvent': -16.58524233892936},
      {'Granularity': -4.13966127939598,
       'Pressure[bar]': 2.837353998249796,
       'Solvent': -0.2618561553381795},
      {'Granularity': 10.386176436055777,
       'Pressure[bar]': 11.087751251385912,
       'Solvent': 6.821312700880895},
      {'Granularity': 10.936701835635223,
       'Pressure[bar]': 13.339212857533889,
       'Solvent': 13.90118740234499},
      {'Granularity': -8.156303082408446,
       'Pressure[bar]': -14.87396614029367,
       'Solvent': -7.884696465218404},
      {'Granularity': 15.064049283640319,
       'Pressure[bar]': 10.98228022326265,
       'Solvent': 2.2489089129144517},
      {'Granularity': -10.018727924409605,
       'Pressure[bar]': -3.1715496475323093,
       'Solvent': 1.7603859433455842}]}




```python
target_to_look_at = "desirability"
shap_df = pd.DataFrame.from_records(shap_results[target_to_look_at])
mean_abs_shap = shap_df.abs().mean().sort_values(ascending=False)

fig = sns.barplot(x=mean_abs_shap.index, y=mean_abs_shap.values)
fig.set_title('Feature Importance Based on SHAP Values')
fig.set_xlabel('Parameter Name');
fig.set_ylabel('Mean |SHAP Value|');
```


    
![shap plot](/assets/baybe/shap.png)



## Delete the project
If you do not need a project any longer (in particular, if you create many projects as part of a backtesting or similar), you can delete it. Note that for a successful deletion the response will be empty.


```python
response = !curl -s -L -X DELETE {url}/projects/{project_id} \
  -H 'x-api-key: '{api_key}

response
```




    []




```python

```


```python

```

# Simplex / Mixture Use Cases
There can be use cases that have sum constraints, also called simplex constraints.
While these can be treated with traditional constraints in BayBE, there is a more efficient constructor for them called `from_simplex`

Below an example for a mixture of up to 4 components where their relative fraction is indicated by a `component_k` parameter. These are discrete values from 0.0 to 1.0 in steps of 0.1. We provide these four parameters as part of the `simplex_parameters` field.

In addition, we also can provide parameters that are not affected by the constraint, called `product_parameters`

There are even more ways of creating the searchspace via different constructors, for details see [the Python documentation](https://emdgroup.github.io/baybe/0.11.0/userguide/searchspace.html).


```python
config_simplex = """{
  "name": "Simplex Example",
  "description": "Mixture of up to four components",
  "config": {
    "searchspace": {
      "discrete": {
          "constructor": "from_simplex",
          "max_sum": 1.0,
          "boundary_only": true,
          "simplex_parameters": [
            {
              "type": "NumericalDiscreteParameter",
              "name": "component_1",
              "values": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            },
            {
              "type": "NumericalDiscreteParameter",
              "name": "component_2",
              "values": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            },
            {
              "type": "NumericalDiscreteParameter",
              "name": "component_3",
              "values": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            },
            {
              "type": "NumericalDiscreteParameter",
              "name": "component_4",
              "values": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            }
          ],
          "product_parameters": [
            {
              "type": "CategoricalParameter",
              "name": "Granularity",
              "values": ["coarse", "medium", "fine"],
              "encoding": "OHE"
            },
            {
              "type": "SubstanceParameter",
              "name": "Solvent",
              "data": {
                "Solvent A": "COC",
                "Solvent B": "CNCC",
                "Solvent C": "CCCCC"
              },
              "decorrelate": true,
              "encoding": "RDKIT"
            }
          ]
        }
    },
    "objective": {
        "type": "SingleTargetObjective",
        "target":
            {
                "type": "NumericalTarget",
                "name": "Yield",
                "mode": "MAX"
            }
    },
    "recommender": {
        "type": "TwoPhaseMetaRecommender",
        "initial_recommender": {
            "type": "RandomRecommender"
        },
        "recommender": {
            "type": "BotorchRecommender",
            "surrogate_model": {
                "type": "GaussianProcessSurrogate"
            },
            "acquisition_function": "qLogEI"
        },
        "switch_after": 1
    }
  }
  
}"""
```


```python
response = !curl -s -L -X POST {url}/projects \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response['uploadUrl']
status = response['status']
project_id = response['projectId']

print(upload_url)
print(status)
print(project_id)
```

    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload
    0000699723a0dacd9e8ca6c7c6eb



```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{config_simplex}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100) # wait time to ensure the project is not queueing anymore

response = !curl -s -L -X GET {url}/projects/{project_id} \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

response['status'], response['projectId'], response['error']
```




    ('success', '0000699723a0dacd9e8ca6c7c6eb', None)



### Get Some Recommendations to Verify the Project


```python
assert response['status'] == 'success', "There was an issue with uploading data, please fix before continuing."

response = !curl -s -L -X POST {url}/projects/{project_id}/recommendations \
 -H 'x-api-key: '{api_key}
response = json.loads(response[0])

upload_url = response["uploadUrl"]
upload_url
```




    'https://baybe-api-v0-14-dev-statelessobjectbucket.s3...'




```python
payload="""{
    "batchSize": 5
}
"""
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{payload}'

response # The expected response is empty with status 200
```




    []




```python
time.sleep(100) # wait time to ensure the recommendations are ready

response = !curl -s -L -X GET {url}/projects/{project_id}/recommendations/latest \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

recommendation_id = response["recommendationId"]
download_url = response["downloadUrl"]
status = response["status"]

print(recommendation_id)
print(status)
print(download_url)
```

    0002699723b48b66f9f6d8e749ea
    success
    https://baybe-persistance-pythonstatebucket-b0wldp3tbjfo.s3...



```python
response = !curl -s -L -X GET "{download_url}"
pd.DataFrame.from_records(json.loads(response[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>component_1</th>
      <th>component_2</th>
      <th>component_3</th>
      <th>component_4</th>
      <th>Granularity</th>
      <th>Solvent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.5</td>
      <td>0.2</td>
      <td>0.1</td>
      <td>0.2</td>
      <td>coarse</td>
      <td>Solvent A</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.4</td>
      <td>0.3</td>
      <td>0.3</td>
      <td>0.0</td>
      <td>coarse</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.4</td>
      <td>0.0</td>
      <td>0.4</td>
      <td>0.2</td>
      <td>medium</td>
      <td>Solvent C</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.0</td>
      <td>0.9</td>
      <td>0.1</td>
      <td>0.0</td>
      <td>fine</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.1</td>
      <td>0.0</td>
      <td>0.5</td>
      <td>0.4</td>
      <td>fine</td>
      <td>Solvent C</td>
    </tr>
  </tbody>
</table>
</div>




```python

```


```python

```

# Stateless API

All endpoints discussed above are stateful in the sense that data and project info are stored in the cloud and a call's result might depend on the current state of the campaign.
Each call goes via a project ID to identify the current campaign, which is stored and loaded for the call, creating the current state.

The *stateless* API allows for initiating a recommendation while providing an entire baybe config. No state or project will be stored, instead the entire process is stateless and only returns the recommendations.

For this example, we will use such a config representing an ongoing campaign where the searchspace was already created.
As a result 'exp_rep" and 'comp_rep' will show encoded strings and there is no 'constructor' field like in the configs above. You can obtain such a json via 'my_campaign.to_json()'. 


For this API call, the expected keys are in the signature of [`RecommenderProtocol.recommend`](https://emdgroup.github.io/baybe/stable/_autosummary/baybe.recommenders.base.RecommenderProtocol.html#recommenderprotocol):

![image.png](attachment:aa95002b-4a09-4256-b544-f467df9249cc.png)


```python
stateless_config = """
{
    "searchspace": {
        "discrete": {
            "parameters": [
                {"type": "CategoricalParameter", "name": "Granularity", "active_values": null, "values": ["coarse", "fine", "ultra-fine"], "encoding": "OHE"},
                {"type": "NumericalDiscreteParameter", "name": "Pressure[bar]", "values": [1.0, 5.0, 10.0], "tolerance": 0.2},
                {"type": "SubstanceParameter", "name": "Solvent", "active_values": null, "data": {"Solvent A": "COC", "Solvent B": "CCCCC", "Solvent C": "COCOC", "Solvent D": "CCOCCOCCN"}, "decorrelate": true, "encoding": "MORDRED", "kwargs_fingerprint": {}, "kwargs_conformer": {}}
            ],
            "exp_rep": "gASVBAUAAAAAAACMEXBhbmRhcy5jb3JlLmZyYW1llIwJRGF0YUZyYW1llJOUKYGUfZQojARfbWdylIwecGFuZGFzLmNvcmUuaW50ZXJuYWxzLm1hbmFnZXJzlIwMQmxvY2tNYW5hZ2VylJOUjBZwYW5kYXMuX2xpYnMuaW50ZXJuYWxzlIwPX3VucGlja2xlX2Jsb2NrlJOUjBZudW1weS5fY29yZS5tdWx0aWFycmF5lIwMX3JlY29uc3RydWN0lJOUjAVudW1weZSMB25kYXJyYXmUk5RLAIWUQwFilIeUUpQoSwFLAUskhpRoD4wFZHR5cGWUk5SMAk84lImIh5RSlChLA4wBfJROTk5K/////0r/////Sz90lGKJXZQojAlTb2x2ZW50IEGUjAlTb2x2ZW50IEKUjAlTb2x2ZW50IEOUjAlTb2x2ZW50IESUaB9oIGghaCJoH2ggaCFoImgfaCBoIWgiaB9oIGghaCJoH2ggaCFoImgfaCBoIWgiaB9oIGghaCJoH2ggaCFoImV0lGKMCGJ1aWx0aW5zlIwFc2xpY2WUk5RLAksDSwGHlFKUSwKHlFKUaAtoDmgRSwCFlGgTh5RSlChLAUsBSySGlGgYjAJmOJSJiIeUUpQoSwOMATyUTk5OSv////9K/////0sAdJRiiUIgAQAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAACRAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACRAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAACRAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACRAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAUQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAUQAAAAAAAACRAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACRAlHSUYmgmSwFLAksBh5RSlEsCh5RSlGgLaA5oEUsAhZRoE4eUUpQoSwFLAUskhpRoG4ldlCiMBmNvYXJzZZRoP2g/aD9oP2g/aD9oP2g/aD9oP2g/jARmaW5llGhAaEBoQGhAaEBoQGhAaEBoQGhAaECMCnVsdHJhLWZpbmWUaEFoQWhBaEFoQWhBaEFoQWhBaEFoQWV0lGJoJksASwFLAYeUUpRLAoeUUpSHlF2UKIwYcGFuZGFzLmNvcmUuaW5kZXhlcy5iYXNllIwKX25ld19JbmRleJSTlGhJjAVJbmRleJSTlH2UKIwEZGF0YZRoDmgRSwCFlGgTh5RSlChLAUsDhZRoG4ldlCiMC0dyYW51bGFyaXR5lIwNUHJlc3N1cmVbYmFyXZSMB1NvbHZlbnSUZXSUYowEbmFtZZROdYaUUpRoS4wZcGFuZGFzLmNvcmUuaW5kZXhlcy5yYW5nZZSMClJhbmdlSW5kZXiUk5R9lChoWU6MBXN0YXJ0lEsAjARzdG9wlEskjARzdGVwlEsBdYaUUpRlhpRSlIwEX3R5cJSMCWRhdGFmcmFtZZSMCV9tZXRhZGF0YZRdlIwFYXR0cnOUfZSMBl9mbGFnc5R9lIwXYWxsb3dzX2R1cGxpY2F0ZV9sYWJlbHOUiHN1Yi4=",
            "empty_encoding": false,
            "constraints": [],
            "comp_rep": "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AABAkdz3vwAAAGD4/DDAAAAAAAAA0D8AAAAAAAAAAAAAACAO8OE/AAAAwB9z1D8AAACgqqrMvwAAAAAAAAAAAAAAIA7w4T8AAADAH3PUPwAAAKCqqsy/AAAAAAAAAAAAAAAgDvDhPwAAAMAfc9Q/AAAAoKqqzL8AAAAAAAAAAAAAACAO8OE/AAAAwB9z1D8AAACgqqrMvwAAAAAAAAAAAAAAIA7w4T8AAADAH3PUPwAAAKCqqsy/AAAAAAAAAAAAAAAgDvDhPwAAAMAfc9Q/AAAAoKqqzL8AAAAAAAAAAAAAACAO8OE/AAAAwB9z1D8AAACgqqrMvwAAAAAAAAAAAAAAIA7w4T8AAADAH3PUPwAAAKCqqsy/AAAAAAAAAAAAAAAgDvDhPwAAAMAfc9Q/AAAAoKqqzL8AAACAHLbfvwAAAOB6FM6/AAAAgKa3z78AAACgTonRvwAAAIActt+/AAAA4HoUzr8AAACAprfPvwAAAKBOidG/AAAAgBy2378AAADgehTOvwAAAICmt8+/AAAAoE6J0b8AAACAHLbfvwAAAOB6FM6/AAAAgKa3z78AAACgTonRvwAAAIActt+/AAAA4HoUzr8AAACAprfPvwAAAKBOidG/AAAAgBy2378AAADgehTOvwAAAICmt8+/AAAAoE6J0b8AAACAHLbfvwAAAOB6FM6/AAAAgKa3z78AAACgTonRvwAAAIActt+/AAAA4HoUzr8AAACAprfPvwAAAKBOidG/AAAAgBy2378AAADgehTOvwAAAICmt8+/AAAAoE6J0b+UdJRiaCJLBEsKSwGHlFKUSwKHlFKUh5RdlCiMGHBhbmRhcy5jb3JlLmluZGV4ZXMuYmFzZZSMCl9uZXdfSW5kZXiUk5RoPYwFSW5kZXiUk5R9lCiMBGRhdGGUaA5oEUsAhZRoE4eUUpQoSwFLCoWUaBiMAk84lImIh5RSlChLA4wBfJROTk5K/////0r/////Sz90lGKJXZQojBJHcmFudWxhcml0eV9jb2Fyc2WUjBBHcmFudWxhcml0eV9maW5llIwWR3JhbnVsYXJpdHlfdWx0cmEtZmluZZSMDVByZXNzdXJlW2Jhcl2UjBNTb2x2ZW50X01PUkRSRURfQUJDlIwSU29sdmVudF9NT1JEUkVEX25PlIwWU29sdmVudF9NT1JEUkVEX0FBVFMwcJSMF1NvbHZlbnRfTU9SRFJFRF9BVFNDNGR2lIwWU29sdmVudF9NT1JEUkVEX0FUU0M1ZJSMF1NvbHZlbnRfTU9SRFJFRF9NQVRTMnNllGV0lGKMBG5hbWWUTnWGlFKUaD+MGXBhbmRhcy5jb3JlLmluZGV4ZXMucmFuZ2WUjApSYW5nZUluZGV4lJOUfZQoaFlOjAVzdGFydJRLAIwEc3RvcJRLJIwEc3RlcJRLAXWGlFKUZYaUUpSMBF90eXCUjAlkYXRhZnJhbWWUjAlfbWV0YWRhdGGUXZSMBWF0dHJzlH2UjAZfZmxhZ3OUfZSMF2FsbG93c19kdXBsaWNhdGVfbGFiZWxzlIhzdWIu"
        },
        "continuous": {
            "parameters": [],
            "constraints_lin_eq": [],
            "constraints_lin_ineq": [],
            "constraints_nonlin": []
            }
    },
    "objective": {
        "type": "SingleTargetObjective",
        "target":
            {
                "type": "NumericalTarget",
                "name": "Yield",
                "mode": "MAX"
            }
    },
    "recommender": {
        "type": "TwoPhaseMetaRecommender",
        "initial_recommender": {
            "type": "FPSRecommender"
        },
        "recommender": {
            "type": "BotorchRecommender",
            "surrogate_model": {
                "type": "GaussianProcessSurrogate"
            },
            "acquisition_function": "qEI"
        },
        "switch_after": 1
    },
    "batchSize": 5,
    "pendingExperiments": {
        "orient": "records",
        "json": [
            {
                "Granularity": "coarse",
                "Pressure[bar]": 1,
                "Solvent": "Solvent C"
            },
            {
                "Granularity": "fine",
                "Pressure[bar]": 5,
                "Solvent": "Solvent A"
            }
        ]
    },
    "measurements": {
        "orient": "records",
        "json": [
            {
                "Granularity": "coarse",
                "Pressure[bar]": 10,
                "Solvent": "Solvent A",
                "Yield": 22.3
            },
            {
                "Granularity": "fine",
                "Pressure[bar]": 5,
                "Solvent": "Solvent B",
                "Yield": 42.1
            }
        ]
    }
}
"""
```

It is also possible to send the result to a webhook. If that is desired, add an entry to the json in the form of:

```json
"webhook": {
        "url": "https://your-webhook-url.com",
        "auth_token": "your-auth-token"
     }
```

### Create the Stateless Request


```python
response = !curl -s -L -X POST {url}/stateless \
 -H 'x-api-key: '{api_key}
response = json.loads(response[0])

recommendation_id = response["recommendationId"]
upload_url = response["uploadUrl"]
status = response["status"]

print(recommendation_id)
print(upload_url)
print(status)
```

    0003699723c69d7a669859f274ea
    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...
    awaiting_upload


### Upload the Config


```python
response = !curl -s -L -X PUT '{upload_url}' \
  -H 'Content-Type: application/json' \
  -d '{stateless_config}'

response # The expected response is empty with status 200
```




    []



### Wait and Download the Result


```python
time.sleep(100) # Wait some time for computation to finish

response = !curl -s -L -X GET {url}/stateless/{recommendation_id} \
  -H 'x-api-key: '{api_key}
response = json.loads(response[0])

recommendation_id = response["recommendationId"]
download_url = response["downloadUrl"]
status = response["status"]

print(recommendation_id)
print(status)
print(download_url)
```

    0003699723c69d7a669859f274ea
    success
    https://baybe-api-v0-14-dev-statelessobjectbucket.s3...



```python
data = !curl -s -L -X GET "{download_url}" 
pd.DataFrame.from_records(json.loads(data[0]))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Granularity</th>
      <th>Pressure[bar]</th>
      <th>Solvent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>fine</td>
      <td>1.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>1</th>
      <td>fine</td>
      <td>10.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>2</th>
      <td>ultra-fine</td>
      <td>5.0</td>
      <td>Solvent B</td>
    </tr>
    <tr>
      <th>3</th>
      <td>fine</td>
      <td>5.0</td>
      <td>Solvent D</td>
    </tr>
    <tr>
      <th>4</th>
      <td>ultra-fine</td>
      <td>10.0</td>
      <td>Solvent C</td>
    </tr>
  </tbody>
</table>
</div>

---

# What are Webhooks?
In the [minimal example](baybe/api/example/) we explained how to use the BayBE API. 
For each of the `POST` requests we are triggering a computation. This can take a long 
time and the response you get from the request will not contain the finished result. 
For instance, the `POST /projects` call will create a new project and return the 
`status` of the project to be `queueing` if your provided config was valid. However, 
you should only continue with the project (e.g. to add data or request recommendations) 
after the project status changes to `success`. To recognize this you can check via the 
`GET /projects/{project_id}` call. In general, you can do this via a loop that checks 
the status repeatedly until it changes to `success`.

From BayBE API versions `>=0.5` on, we offer an alternative to this: webhooks. A webhook
is a URL that points to an endpoint you control. If you instruct the `GET` call via 
the optional headers with your webhook URL then BayBE will automatically send the 
resulting response there once it is ready. This means no loop and repeated checking is 
necessary.

# Syntax
Uploading a json to the `uploadUrl`:
```json
{
  "webhookUrl": "https://www.MyUrl.com/baybe",
  "webhookAuthToken": "123mypassword456",
  # other content such as "batchSize"
}
```
where the `webhookUrl` header specifies the web hook. This is optional and if not 
provided simply no webhook will be executed.

Additionally, we provide an option to specify a passphrase via `webhookAuthToken`. This 
enables you to filter incoming requests on your endpoint to only the ones that provide 
the correct pass phrase. This can help you avoid problems with malicious actors who 
might have become aware of your endpoint.

The result that will be sent to your endpoint has a body that is identical to the 
corresponding `GET` request after the action started by the `POST` request was 
finished and `status` is either `success` or `error`. In the header of the response you 
will find the passphrase under `Authorization`. Example for the header of the request 
sent to your webhook URL:
```json
{
    "Accept-Encoding": "identity",
    "Authorization": "Bearer 123mypassword456",
    "Content-Type": "application/json",
    ...
}
```

# Limitations
You are responsible to create and maintain your own endpoint. This is typically easy 
for web developers. For a dashboard or similar in Python, such endpoints can for 
instance be created with [Flask](https://flask.palletsprojects.com/en/), 
[FastAPI](https://fastapi.tiangolo.com/) or [Django](https://www.djangoproject.com/). 

However, there are limitations because within the Merck network you are usually not 
able to reserve a specific IP for your endpoint. As a result, it will not easily be 
possible to create such an endpoint on a local user PC. 

Furthermore, the endpoint needs to lie within the internal Merck network, so it 
will not be possible to provide a publicly hosted endpoint.

---

# The BayBE Benchmark Report
We created a detailed report that summarizes BayBE's performance and 
usability versus external vendors, startups and common existing tools.

## Benchmarked Vendors
-	🔵 Atinary: [https://atinary.com/](https://atinary.com/) (February 2023)
-	🔴 Sunthetics: [https://sunthetics.io/](https://sunthetics.io/) (June 2023)
-	🟢 BayBE: [https://docs.uptimize.merckgroup.com/baybe/](https://docs.uptimize.merckgroup.com/baybe/) (0.5.1)
-	🟣 Optuna: [https://optuna.readthedocs.io/](https://optuna.readthedocs.io/) (3.4.0)

We share results on 9 domains, including use cases for mixtures, chemical 
reactions, process optimization and common synthetic benchmarks.

## Detailed Report
Find the entire report, including metrics, plots, explanations and notes on the user 
experience [here on Sharepoint](https://mdigital.sharepoint.com/:w:/s/BayBE-BayesianBackEnd/ESKhPYPRMSxMg1kDjgTSSKIBS28ag1CF30F0VTe1HC2xuQ?e=JZeoAq).

## Short Summary
This section is a minimal summary of all results. The following table summarizes the 
benchmark results. With "clear winner" and "clear loser" we mark vendors that stuck 
out the most from all others. If a vendor is not in any of those columns it means 
they were within the range of average performance.

| Benchmark         | Not possible with                                 | Clear Winner             | Clear Loser              | Remarks                                                                |
|-------------------|---------------------------------------------------|--------------------------|--------------------------|------------------------------------------------------------------------|
| Direct Arylation  | -                                                 | 🟢 BayBE                 | 🟣 Optuna                | BayBE's chemical encodings<br/>make the difference                     |
| Synthetic1        | -                                                 | 🟢 BayBE                 | 🟣 Optuna                | Use case had many<br/>irrelevant parameters                            |
| Synthetic2        | -                                                 | 🔴 Sunthetics            | 🟢 BayBE,<br/>🔵 Atinary | Bad performance possibly<br/>a settings issue,<br/>under investigation |
| Synthetic3        | -                                                 | 🔵 Atinary               | -                        | -                                                                      |
| Photodegradation1 | 🔴 Sunthetics,<br/>🟣 Optuna<br/>(no constraints) | 🟢 BayBE                 | -                        | Mixture use case                                                       |
| Photodegradation2 | 🔴 Sunthetics,<br/>🟣 Optuna<br/>(no constraints) | 🟢 BayBE                 | -                        | Mixture use case                                                       |
| ArylHalides1      | -                                                 | 🟢 BayBE                 | -                        | BayBE's transfer learning<br/>makes the difference                     |
| ArylHalides2      | -                                                 | 🟢 BayBE,<br/>🔵 Atinary | -                        | BayBE's transfer learning<br/>makes the difference                     |
| ArylHalides3      | -                                                 | -                        | -                        | All vendors roughly<br/>the same                                       |