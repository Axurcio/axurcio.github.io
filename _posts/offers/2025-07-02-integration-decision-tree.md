---
layout: post
category : work
tagline: "Integration Decision Tree"
tags : [multi-cloud]
img : service/integration-decision-tree.png
img-mobile : 
img2 : 
img3 : 
author : Axurcio
css: 
js: 
title2 : Real time or Batch integration? 
title3 : 
bgcolor: ff5a71
keywords: integration, api, service bus
canonical: https://axurcio.com

---
{% include JB/setup %}

> Which integration method should you use for a given scenario?

<!--more-->

# Overview
The integration decision tree is a tool which can be used to decide which integration patterns and technologies should be used to implement an integration.  The decision tree references approved integration design patterns, template projects and standards which should be used to implement the integration.

# Decision Tree
The following decision tree should be used to determine how an integration should be implemented:

<br/>

<img alt="Integration Decision Tree" src="https://github.com/user-attachments/assets/87041084-be33-4e38-944d-6fd319aed3c6" />

<br/>

## Integration Types
Integrations can be generally classified as either a Application integration, or a Data Integration.

- **Application Integrations** deal with integrating live operational data in real-time between two or more applications. Examples of such integrations may be calling an API to retrieve some information from a 3rd party service, or publishing an event when an application changes state.

- **Data Integrations** are typically batch-orientated and deal with data at rest. In other words, the process that created the data has already completed.  Examples of this type of integration might be sending invoice or payment data to a finance system on a nightly schedule.

<br/>

## Integration Styles
Integration style refers to the how two systems communicate with each other.  For example does the calling system get an immediate response?  Does the back-end system send notifications?  Is information exchanged to a schedule, and if so how much data and how often?

- **Real-time synchronous**
A Real-time synchronous integration (also referred to as Request-Reply) couples the front-end host to the back-end processing, where the front-end needs to wait for an response before it can continue further processing. <br/>

<br/>

- **Real-time asynchronous**
A Real-time asynchronous integration decouples the back-end processing from a front-end host, where back-end processing needs to be asynchronous, but the front-end still needs a clear response.  In this style of integration the front-end will usually poll the back-end for a result.<br/>
See the following for further information on this pattern:
  - https://www.enterpriseintegrationpatterns.com/patterns/conversation/Polling.html
  - https://docs.microsoft.com/en-us/azure/architecture/patterns/async-request-reply

<br/>

- **Real-time asynchronous with callback**
A Real-time asynchronous integration with callback (also referred to as Request-Callback) decouples the back-end processing from a front-end host, where back-end processing needs to be asynchronous, but the front-end still needs a clear response.  In this style of integration the front-end host will provide a uri to be called by the back-end once processing has completed (successfully or not).  This callback uri is either provided in the request, or is configured at an account level in the back-end, <br/>

<br/>

- **Batch (unitary)**
Batch (unitary) integration refers to the exchange of data between two systems on a scheduled basis.  This style of integration decouples the back-end processing from front-end host, where the front-end host does not require processing in real-time. <br/>
Batch (unitary) usually involves the generation of events or messages by a background process of the front-end system. 

<br/>

- **Batch (bulk)**
Batch (buly) integration refers to the exchange of data between two systems using an export/import based model and decouples the back-end processing from front-end host.  Batch (bulk) generally involves the generation of export data for multiple entities from the front-end on a scheduled basis, and the subsequent import to the back-end on a scheduled basis.  <br/>
For example, new invoices are created in front-end system.  Every 12 hours the front-end exports details of all invoices created in the last 12 hours to a file and places on a file share.  The back-end system periodically polls the file share for new invoice files and imports all invoices in all new files that have been received.  

<br/>

## Integration Style
Gregor Hopper, in his widely publicized 2003 book [Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions](https://www.enterpriseintegrationpatterns.com/patterns/messaging/IntegrationStylesIntro.html), described 4 distinct integration options/styles: File Transfer, Shared Database, Remote Procedure Call (API), and Messaging.  Whilst this book is now somewhat old and both technology and best practices have evolved since, these four methods of integration fundamentally still apply.  For the purpose of integration at DWER the use of Shared Databases has been excluded as this is an integration anti-pattern promoting tight coupling between systems that should be avoided.  File Transfer has been more generalized as ETL.
<br/>


- **API**
Direct Application Programming Interface (API) based integration is the most direct form of enabling two system to talk to each other.  API integration is the extension of traditional Remote Procedure Call (RPC) based integration and applies the principle of encapsulation to integrating applications. If an application needs some information that is owned by another application, it asks that application directly. If one application needs to modify the data of another, then it does so by making a call to the other application. Each application can maintain the integrity of the data it owns. Furthermore, each application can alter its internal data without having every other application be affected.<br/>
API's can be used to exchange data between systems, or to expose shared Business Processes or Functions. API's can be classified into the following:<br/>

   - **Private API's** - API's developed internally by an organization for internal or external use.

   - **Partner API's** - API's developed by an organizations and focused on an organization’s set of development partners. By limiting an API to partners, companies can tightly control who uses an API and how it is used outside of their organization

   - **SaaS API's** - API's provided by companies like GitHub, Stripe, SendGrid etc. allowing an organization to access their hosted data or access a paid service

   - **Platform API's** - API's that extend the reach of SaaS providers by bringing together multiple parties within a marketplace such as supply chain management, customer relationship management (CRM), and enterprise resource planning (ERP).

<br/>

- **Event or Messaging**
Events and Messaging essentially deal with the transfer of information via a _message_ on a bus.  In the case of Events these _messages_ simply convey a simple piece of information informing the consumer that something happened and generally an identifier of the resource that was affected.  Messages on the other hand are generally used to perform an action on a remote system asynchronously.  For example, an ```customer-created``` Event might inform any consumers that a customer was created and provide the newly created customers id.  Conversely, a ```create-customer``` Message might instruct a specific consumer to create a customer record and provide all customer information to perform the action on the remote system.<br/>
In general, Events inform with context, whereas Messages instruct with detail.  Events decouple both the actions and information required by consumers to respond to an event by inversion of control.  Messages decouple processing, but the contract of information exchange remains tightly coupled.

<br/>

- **ETL**
ETL (Extract Transform Load) refers to a scheduled process of extracting information from one or more source systems, transforming the information (and potentially enriching it) to a target data model structure, and then loading the information into a target system.  ETL tools are a good choice when large amounts of information need to be transferred between systems at regular intervals, or where the integration involves legacy systems that do not readily support more modern, real-time approaches such as API exchange or Eventing.

<br/>

## Integration Technologies
The following integration technologies reflect approved integration technologies at DWER.  Additional Technologies may be introduced as integration requirements evolve.  

Managed API's refers to an API's exposed via an API Management tool, where API Management refers to the processes for distributing, controlling, and analyzing the APIs that connect applications and data across the enterprise.  At DWER this is implemented using Azure API Management.  

<br/>

- **API Management**
API Management (APIM) is the process of designing, publishing, documenting and analyzing APIs in a secure environment.  API Management layers accelerate the deployment, monitoring, security, versioning, and sharing of APIs. They are often deployed as a reverse proxy, intercepting all incoming API request traffic and applying policies to determine if requests are authorized to be routed to the API. See [Azure API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts) for more information.<br/>
API's may be generalised as either Proxy API's or Microservices.  [Backend for Frontend API's](https://samnewman.io/patterns/architectural/bff/) are not considered as part of the integrations landscape, however they may use Proxy and/or Microservice API's hosted via API Management.  

  - **Proxy API**
Proxy API's are API's that route directly to a 3rd Party service.  The API's are exposed via API Management, and appropriate security, throttling and rate limiting controls put in place to manage access tot he back-end service.  This pattern is commonly used where front-end applications are fully aware of the back-end service, however access to that back-end service needs to be managed to ensure security, resiliency and costs are controlled.  <br/>
An example of a Proxy API is DWER's ArcGIS Api which manages public access to DWER's internally hosted ArcGIS platform.  Consuming applications know they are talking to ArcGIS and no abstraction of the interface and/or datamodel is made by the API Management layer.

  - **Microservice API**
Microservices are self-contained, independently deployable units of code that focus on doing one thing well. Microservices may be used to develop bespoke business capabilities, or to abstract consuming applications from the back-end data models, communications technology, or security considerations of a managed 3rd party service.<br/>
Microservices generally exhibit the following traits:<br/>
     - Have bounded contexts 
     - Are independently deployable
     - Manager their own data sources and does not share them with other services
<br/>

    See the following resources for more information:
    - https://aka.ms/apis-microservices-ultimate-guide
    - https://aka.ms/api-design-ebook

<br/>

- **Service Bus**
[Microsoft Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) is a fully managed enterprise message broker with message queues and publish-subscribe topics. Service Bus is used to decouple applications and services from each other.<br/>
Azure Service Bus can be used to support Messages and Events, where Events are implemented as publish-subscriber topics with small event style payloads.  Publish-subscriber topic subscribers then implement the [Content Enricher](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DataEnricher.html) patterns to obtain additional information required to perform any related actions on back-end services.<br/>
Azure Service Bus is not a pure event service such as Azure Event Hub or Kafka, and as such does not support processes such as event replay, and does not support the message throughput that specialised event services provide.  However, in the current scope of integrations within DWER Azure Service Bus provides the flexibility needed to support both Messaging and Events.<br/>
Service Bus Message processors and Event Subscribers can be built using a number of technologies such as Azure Functions and/or Azure Logic Apps.

<br/>

- **Point-to-point**
Point-to-point integration refers to a direct integration between two systems which cannot be used by other systems and/or services in an organization.  This integration may relate to a specific business process implemented in a front-end system, or an integration between two systems where an out-of-the-box connectors or plugins is readily available, or where the implementation of a shared resource would be cost, time or otherwise prohibitive.

<br/>

- **iPaaS**
Integration Platform as a Service (iPaaS) refers to a platform that standardizes how applications are integrated into an organization, making it easier to automate business processes and share data across applications. iPaaS in Azure terms refers to [Azure Integration Service](https://azure.microsoft.com/en-au/product-categories/integration/), a suite of Azure products including Azure Functions, Logic Apps, Service Bus Messaging and API Management, which together form the core services for integration in the Azure landscape. 

<br/>

- **ETL Tool**
Extract, transform, and load (ETL) is a data pipeline used to collect data from various sources, transform the data according to business rules, and load it into a destination data store. The transformation work in ETL takes place in a specialized engine, and often involves using staging tables to temporarily hold data as it is being transformed and ultimately loaded to its destination.<br/>
Many off-the-shelf tools exist to support ETL processes, most of which contain a large number of out-of-the-box connectors to commercial products and services.

<br/>

# Using the Decision Tree
The decision tree is used to guide the choice of technology and patterns that should be used for an integration.  The following describes how to use the tree:

- **Start**:
   - If the integration is initiated by a user interaction, use ```Application Integration``` Integration Type, else

   - If the integration is initiated by a scheduled or triggered process, use ```Data Integration``` Integration Type

<br/>

- **Integration Type**
   - **Application Integration**
     - If the user/ system interaction requires an immediate response before continuing, use ```Real-Time Synchronous``` Integration Style, else

     - If the user/ system interaction does not require an immediate response, but does require a response before processing can continue, or a callback feature is not readily available, use ```Real-Time Asynchronous``` Integration Style, else

     - If the user/ system interaction does not require an immediate response for processing to continue, but does require an eventual response, and a callback feature is available or can be implemented, use ```Real-Time Asynchronous with Callback``` Integration Style

     - If the user/ system interaction does not require an immediate response, and the integration is to be initiated by a triggered process on a per transaction basis, us ```Batch (unitary)``` Integration Style

   - **Data Integration**
     - If the user/ system interaction requires an immediate response before continuing, use ```Real-Time Synchronous``` Integration Style, else

     - If the user/ system interaction does not require an immediate response, but does require a response before processing can continue, use ```Real-Time Asynchronous``` Integration Style, else

     - If the user/ system interaction does not require an immediate response, and the integration is to be initiated by a triggered process on a per transaction basis, us ```Batch (unitary)``` Integration Style

     - If the user/ system interaction does not require an immediate response, and the integration is to be initiated by a scheduled process on a multi-transactional basis, us ```Batch (bulk)``` Integration Style


- **Integration Style**
   - **Real-Time Synchronous**
     - In all cases this should be implemented using an ```API``` Integration Approach<br/><br/>

   - **Real-Time Asynchronous**
     - If an acknowledgement of receipt of a request is required in order to provide context (id or uri) for polling purposes, use ```API``` Integration Approach (most common), else

     - If no acknowledgement of receipt is required, or a polling for completion can be performed without specific context, use ```Messaging``` Integration Approach<br/><br/>
 
   - **Real-Time Asynchronous with Callback**
     - If an API is available which either accepts a callback uri in the payload, or can be configuring, use ```API``` Integration Approach (normal case), else

     - If no API is available, use ```Messaging``` Integration Approach.  In this scenario Messaging is used to decouple the front-end host from back-end processing.  Message handlers are used to implement synchronous request to the back-end, and to provide surrogate mechanism for invoking the callback<br/><br/>

   - **Batch (unitary)**
     - In all cases you should use ```Events or Messaging``` Integration Approach<br/><br/>

   - **Batch (bulk)**
     - In all cases you should use ```ETL``` Integration Approach<br/><br/>

- **Integration Approach**
   - **API**
     - If access to a back-end service needs to be managed (e.g. to control costs, access etc.), or an internal service needs to be publicly accessible, **and** there is no need to abstract a back-end services REST API, nor a reason for any custom development, use ```API Management (Proxy API)``` Integration Technology

     - If the API is to be developed by the organization (bespoke API), or a back-end service is to be abstracted to an enterprise service (e.g. an Address Validation API which abstracts the choice of Experian as the Address Validation service), **and** the API is to be reusable across the organization, use ```API Management (Microservice API)``` Integration Technology

     - If the API is specific to a single system or business process, and either plugins, connectors or packages from reputable sources are available, or the back-end API can be called easily from the front-end, use ```Point-to-Point``` Integration Technology

     - use ```iPaaS``` Integration Technology<br/><br/>

   - **Event or Messaging**
     - In all cases you should use ```Service Bus``` Integration Technology<br/><br/>

   - **ETL**
     - If the integration is specific to a single system or business process, and either plugins, connectors or packages from reputable sources are available, or can be easily developed in the front-end, use ```Point-to-Point``` Integration Technology

     - use ```iPaaS``` Integration Technology

     - use ```ETL Tool``` Integration Technology<br/><br/>


<br/>

<br/>


# Our Technological Competencies
<br />    
![image](https://github.com/Axurcio/axurcio.github.io/assets/662868/03944ecd-1619-4ea9-b4ac-c023020d9b77)

<br />    
<hr />
### Ready to start?  

[Contact us to start your journey](/contact)