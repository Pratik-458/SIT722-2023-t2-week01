var express = require("express");
var router = express.Router();
const glossary = [
  {
    id: 1,
    Term: "Waterfall Model",
    Descreption:
      "Sequential process of software development. Just like in a waterfall, the water progressively falls from one altitude to the lower, in a similar way, the production cycle progresses sequentially, from one stage to the other ",
    References:
      "McCormick, M., 2012. Waterfall vs. Agile methodology. MPCS, N/A, 3.",
  },
  {
    id: 2,
    Term: "Agile Model",
    Descreption:
      "Agile models involve multiple iterative development schedules that seek to improve the output with every iteration. Each iteration goes through all the steps of design, coding and testing. The focus is on Agility and Adaptablity",
    References:
      "McCormick, M., 2012. Waterfall vs. Agile methodology. MPCS, N/A, 3.",
  },
  {
    id: 3,
    Term: "Git",
    Descreption:
      "Git is a version control system which runs locally on your hardrive. Its free and open source.",
    References: "Spinellis, D., 2012. Git. IEEE software, 29(3), pp.100-101.",
  },
  {
    id: 4,
    Term: "Version Control",
    Descreption:
      "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.",
    References:
      'Loeliger, J. and McCullough, M., 2012. Version Control with Git: Powerful tools and techniques for collaborative software development. " O\'Reilly Media, Inc.".',
  },
  {
    id: 5,
    Term: "GitHub",
    Descreption:
      "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.",
    References:
      "Zagalsky, A., Feliciano, J., Storey, M.A., Zhao, Y. and Wang, W., 2015, February. The emergence of github as a collaborative platform for education. In Proceedings of the 18th ACM conference on computer supported cooperative work & social computing (pp. 1906-1917).",
  },
  {
    id: 6,
    Term: "NodeJS",
    Descreption:
      "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, on the server-side. This enables developers to build server-side applications using JavaScript, which was traditionally used only for client-side scripting in web browsers.",
    References:
      "Herron, D., 2020. Node. js Web Development: Server-side web development made easy with Node 14 using practical examples. Packt Publishing Ltd.",
  },
  {
    id: 7,
    Term: "ExpressJS",
    Descreption:
      "Express.js is widely used in the Node.js community due to its simplicity, flexibility, and robustness. It provides a solid foundation for building web applications and APIs and is often used in conjunction with other libraries and tools to create full-fledged web applications and backend services.",
    References:
      "Herron, D., 2020. Node. js Web Development: Server-side web development made easy with Node 14 using practical examples. Packt Publishing Ltd.",
  },
  {
    id: 8,
    Term: "Cloud",
    Descreption:
      "cloud refers to a network of remote servers that are hosted on the internet and used to store, manage, and process data and applications.",
    References:
      "Qian, L., Luo, Z., Du, Y. and Guo, L., 2009. Cloud computing: An overview. In Cloud Computing: First International Conference, CloudCom 2009, Beijing, China, December 1-4, 2009. Proceedings 1 (pp. 626-631). Springer Berlin Heidelberg.",
  },
  {
    id: 9,
    Term: "Repository",
    Descreption:
      "repository refers to a centralized location or storage space where version-controlled files and code are stored. It serves as a version control system, allowing multiple developers to collaborate on a project, track changes, and manage different versions of the code or files.",
    References:
      "Bernstein, P.A. and Dayal, U., 1994, September. An overview of repository technology. In VLDB (Vol. 94, pp. 705-713).",
  },
  {
    id: 10,
    Term: "Web Service",
    Descreption:
      "A web service is a software system designed to enable communication and data exchange between different applications over the internet. It allows various software components to interact and share data with each other, regardless of their underlying platforms, programming languages, or technologies.",
    References:
      "Tsai, W.T., Sun, X. and Balasooriya, J., 2010, April. Service-oriented cloud computing architecture. In 2010 seventh international conference on information technology: new generations (pp. 684-689). IEEE.",
  },
  {
    id: 11,
    Term: "Monolithic application",
    Descreption:
      "A monolith is an entire application that runs in a single process.",
    References:
      "Ashley Davis,  Bootstrapping microservices with docker, Kubernetes and teraform., 2021",
  },
  {
    id: 12,
    Term: "Distributed application",
    Descreption:
      "A distributed application is a program that runs on more than one computer and communicates through a network.",
    References:
      "Ashley Davis,  Bootstrapping microservices with docker, Kubernetes and teraform., 2021",
  },
  {
    id: 13,
    Term: "Docker",
    Descreption:
      "Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.",
    References: "Docker, [online] available: https://www.docker.com/",
  },
  {
    id: 14,
    Term: "Kubernetes",
    Descreption:
      "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
    References: "Kubernetes, [online] Available: https://kubernetes.io/",
  },
  {
    id: 15,
    Term: "RabbitMQ",
    Descreption:
      "RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol.",
    References: "RabbitMQ, [online] Available: https://www.rabbitmq.com/",
  },
  {
    id: 16,
    Term: "Terraform",
    Descreption:
      "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently.",
    References:
      "Introduction to Terraform, [online] Available: https://developer.hashicorp.com/terraform/intro",
  },
  {
    id: 17,
    Term: "Microservice",
    Descreption:
      "A microservice is a tiny and independent software process that runs on its own deployment schedule and can be updated independently.",
    References:
      "Ashley Davis,  Bootstrapping microservices with docker, Kubernetes and teraform., 2021",
  },
  {
    id: 18,
    Term: "Orchestration",
    Descreption:
      "Container orchestration automates the deployment, management, scaling, and networking of containers.",
    References:
      "Container Orchestration, [online] Available: https://www.redhat.com/",
  },
  {
    id: 19,
    Term: "Domain Driven Design",
    Descreption:
      "Domain-driven design is a major software design approach, focusing on modeling software to match a domain according to input from that domain's experts.",
    References:
      "Vernon, V., 2013. Implementing domain-driven design. Addison-Wesley.",
  },
  {
    id: 20,
    Term: "Ubiquitous",
    Descreption:
      "Omnipresence or ubiquity is the property of being present anywhere and everywhere.",
    References:
      "Ubiquitous [online] Available: https://www.merriam-webster.com/dictionary/ubiquitous#:~:text=%3A%20existing%20or%20being%20everywhere%20at,a%20ubiquitous%20fashion",
  },
  {
    id: 21,
    Term: "MongoDB",
    Descreption:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    References:
      "MongoDb, [online] Available: https://www.mongodb.com/what-is-mongodb",
  },
  {
    id: 22,
    Term: "Container",
    Descreption:
      "Containerization involves creating isolated environments called containers that encapsulate software applications and their dependencies. These containers can run across various network resources, both in cloud and non-cloud environments, irrespective of the underlying infrastructure's type or provider.",
    References:
      "Docker container, [Online] Available: https://www.docker.com/resources/what-container/",
  },
  {
    id: 23,
    Term: "Registry",
    Descreption:
      "A container registry serves as a repository for developers to store, share, and transfer container images through uploading and downloading processes.",
    References:
      "what is a container registry, [Online] Available: https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry#:~:text=A%20container%20registry%20essentially%20acts,be%20run%20on%20that%20system.",
  },
  {
    id: 24,
    Term: "Resource Group",
    Descreption:
      "A resource group is a container that holds related resources for an Azure solution.",
    References:
      "Manage resource groups, [Online] Available: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",
  },
  {
    id: 25,
    Term: "Azure Subscription",
    Descreption:
      "Azure Subscriptions are essential for utilizing Azure's cloud services, binding to an Azure account and acting as a consolidated billing entity for the resources employed within that account.",
    References:
      "Understanding azure account subscription and directory, [Online] Available: https://techcommunity.microsoft.com/t5/azure/understanding-azure-account-subscription-and-directory/m-p/34800",
  },
  {
    id: 26,
    Term: "Azure storage",
    Descreption:
      "Azure Storage is a cloud service for file storage, accessible through the Azure Portal, APIs, or command line, enabling file management and retrieval using Node.js Azure Storage SDK.",
    References:
      "Storage account overview, [Online] Available: https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview",
  },
  {
    id: 27,
    Term: "Docker compose",
    Descreption:
      "Docker Compose allows us to configure, build, run, and manage multiple containers at the same time.",
    References:
      "Ashley Davis,  Bootstrapping microservices with docker, Kubernetes and teraform., 2021",
  },
  {
    id: 28,
    Term: "Instantiated",
    Descreption:
      "To instantiate means to create a specific instance of an object within a class, assigning a name and placing it in a physical location if needed.",
    References:
      "Instantiated, [Online] Available: https://www.techtarget.com/whatis/definition/instantiation#:~:text=To%20instantiate%20is%20to%20create,it%20in%20some%20physical%20place.",
  },
  {
    id: 29,
    Term: "YAML",
    Descreption:
      "YAML is a human-readable language used for data serialization, often for configuration files and situations involving data storage or transmission.",
    References: "YAML, [online] Available: https://yaml.org/",
  },
  {
    id: 30,
    Term: "Access Keys",
    Descreption:
      "Access Keys serve to grant data access in your Azure resource through Shared Key authorization or signed SAS tokens.",
    References:
      "Storage account keys manage, [online] Available: https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal",
  },
  {
    id: 31,
    Term: "Virtualization",
    Descreption:
      "virtualisation is the act of creating a virtual version of something at the same abstraction level, including virtual computer hardware platforms, storage devices, and computer network resources.",
    References:
      "What is virtualization?, [online] Available: https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-virtualization",
  },
  {
    id: 32,
    Term: "cluster",
    Descreption:
      "A cluster is a group of interconnected computers or servers working collectively for enhanced performance, availability, and scalability in various computing contexts.",
    References:
      "What is a Kubernetes cluster?, [Online] Available: https://www.redhat.com/en/topics/containers/what-is-a-kubernetes-cluster",
  },
  {
    id: 33,
    Term: "IaaS (Infrastructure as a Service)",
    Descreption:
      "A cloud computing service model that provides virtualized computing resources over the internet. It includes services like virtual machines, storage, and networking.",
    References:
      "Difference between IAAS, PAAS and SAAS, [Online] Available: https://www.geeksforgeeks.org/difference-between-iaas-paas-and-saas/",
  },
  {
    id: 34,
    Term: "PaaS (Platform as a Service)",
    Descreption:
      "A cloud computing service model that provides a platform for developers to build, deploy, and manage applications without worrying about the underlying infrastructure. It typically includes tools for application development, databases, and runtime environments.",
    References:
      "Difference between IAAS, PAAS and SAAS, [Online] Available: https://www.geeksforgeeks.org/difference-between-iaas-paas-and-saas/",
  },
  {
    id: 35,
    Term: "SaaS (Software as a Service)",
    Descreption:
      "A cloud computing service model that delivers software applications over the internet on a subscription basis. Users access the software through a web browser, and the provider handles maintenance and updates.",
    References:
      "Difference between IAAS, PAAS and SAAS, [Online] Available: https://www.geeksforgeeks.org/difference-between-iaas-paas-and-saas/",
  },
  {
    id: 36,
    Term: "Public Cloud",
    Descreption:
      "A cloud computing model where cloud resources are owned and operated by a third-party cloud service provider and are made available to the general public. Examples include AWS, Azure, and Google Cloud.",
    References:
      "What are public, private, and hybrid clouds?, [Online] Available: https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds",
  },
  {
    id: 37,
    Term: "Private Cloud",
    Descreption:
      "A cloud computing model where cloud resources are used exclusively by a single organization. It offers more control and security but requires dedicated infrastructure.",
    References:
      "What are public, private, and hybrid clouds?, [Online] Available: https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds",
  },
  {
    id: 38,
    Term: "SLA (Service Level Agreement)",
    Descreption:
      "A contract that defines the level of service, availability, and performance a cloud service provider guarantees to its customers.",
    References:
      "Service level agreements in Cloud computing, [Online] Available: https://www.geeksforgeeks.org/service-level-agreements-in-cloud-computing/",
  },
  {
    id: 39,
    Term: "Load Balancing",
    Descreption:
      "The distribution of network traffic or application requests across multiple servers or resources to ensure high availability, scalability, and performance.",
    References:
      "What is load balancer and how it works, [Online] Available: https://medium.com/@itIsMadhavan/what-is-load-balancer-and-how-it-works-f7796a230034",
  },
  {
    id: 40,
    Term: "Cloud Native",
    Descreption:
      "A design and development approach that leverages cloud computing principles, such as scalability and microservices, to build and run applications in the cloud.",
    References:
      "What is Cloud Native?, [Online] Available: https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition",
  },
  {
    id: 41,
    Term: "Vagrant VM",
    Descreption:
      'Vagrant streamlines the creation and management of virtual machine environments, reducing setup time, enhancing production consistency, and eliminating "works on my machine" issues.',
    References:
      "Introduction to Vagrant, [online] Available: https://developer.hashicorp.com/vagrant/intro",
  },
  {
    id: 42,
    Term: "Bitbucket",
    Descreption:
      "Bitbucket, owned by Atlassian, is a Git-based source code hosting service that provides commercial plans and free accounts for unlimited private repositories.",
    References: "Bitbucket, [Online] Available: https://bitbucket.org/product",
  },
  {
    id: 43,
    Term: "Provider",
    Descreption:
      "In Terraform, a provider is a plugin that instructs the tool on which APIs to interact with, encompassing both Cloud and SaaS providers, and is defined in the configuration code.",
    References:
      "Provider configuration, [Online] Available: https://developer.hashicorp.com/terraform/language/providers/configuration",
  },
  {
    id: 44,
    Term: "Publishing",
    Descreption:
      "In Terraform you can publish a module to terraform registry to reuse the code. The process of storing the module image on terraform registry is called publishing.",
    References:
      "Publishing a Public Module, [Online] Available: https://developer.hashicorp.com/terraform/registry/modules/publish",
  },
  {
    id: 45,
    Term: "Provisioners",
    Descreption:
      "Provisioners are employed to run scripts on either a local or remote machine during the process of creating or destroying resources.",
    References:
      "Provisioners, [Online] Available: https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax",
  },
  {
    id: 46,
    Term: "replicaset",
    Descreption:
      "A ReplicaSet ensures a consistent number of identical Pods, preserving their availability and stability.",
    References:
      "Creating ReplicaSet in Kubernetes Cluster using Terraform, [Online] Available: https://dipadityadas.medium.com/creating-replicaset-in-kubernetes-cluster-using-terraform-24dedae0bc74#:~:text=A%20ReplicaSet's%20purpose%20is%20to,specified%20number%20of%20identical%20Pods.",
  },
  {
    id: 47,
    Term: "KEDA (Kubernetes-based Event-Driven Autoscaling)",
    Descreption:
      "A project that enables event-driven autoscaling for container workloads on Kubernetes, automatically adjusting resources based on event triggers.",
    References:
      "Simplified application autoscaling with Kubernetes Event-driven Autoscaling (KEDA) add-on, [Online] Available: https://learn.microsoft.com/en-us/azure/aks/keda-about",
  },
  {
    id: 48,
    Term: "GitOps",
    Descreption:
      "A methodology where Kubernetes configurations and deployments are managed through version-controlled Git repositories, enabling automated and declarative infrastructure management.",
    References:
      "What is GitOps?, [Online] Available: https://www.redhat.com/en/topics/devops/what-is-gitops",
  },
  {
    id: 49,
    Term: "Service principal",
    Descreption:
      "In Azure a service principal is established in each tenant where the application is employed, referencing the globally unique app object, and dictates the app's permissions, access, and resource scope within that specific tenant.",
    References:
      "Service principal object, [Online] Available: https://learn.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals?tabs=browser",
  },
  {
    id: 50,
    Term: "Robo 3T",
    Descreption:
      "Robo 3T, formerly known as Robomongo, is a free, lightweight, open-source MongoDB GUI that features an embedded mongo shell, robust auto-completion, and comprehensive support for MongoDB.",
    References: "Robo 3T, [Online] Available: https://robomongo.org/",
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subheading:
      " my website showing a collection of DevOps terms and their brief descreptions.",
    words: glossary,
  });
});

module.exports = router;
