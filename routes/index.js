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
    References: "https://www.docker.com/",
  },
  {
    id: 14,
    Term: "Kubernetes",
    Descreption:
      "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
    References: "https://kubernetes.io/",
  },
  {
    id: 15,
    Term: "RabbitMQ",
    Descreption:
      "RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol.",
    References: "https://www.rabbitmq.com/",
  },
  {
    id: 16,
    Term: "Terraform",
    Descreption:
      "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently.",
    References: "https://developer.hashicorp.com/terraform/intro",
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
    References: "https://www.redhat.com/",
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
    Term: "ubiquitous",
    Descreption:
      "Omnipresence or ubiquity is the property of being present anywhere and everywhere.",
    References:
      "https://www.merriam-webster.com/dictionary/ubiquitous#:~:text=%3A%20existing%20or%20being%20everywhere%20at,a%20ubiquitous%20fashion",
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
