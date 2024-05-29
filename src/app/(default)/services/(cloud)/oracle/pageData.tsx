import {
  FaBoxOpen,
  FaDatabase,
  FaMicrochip,
  FaNetworkWired,
  FaRegFileCode,
} from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

export const Data1 = [
  {
    name: "Reduced Total Cost of Ownership",
    description:
      "Oracle Cloud Services significantly lower the total cost of ownership for IT departments. By automating repetitive manual tasks, teams are freed to focus on more strategic work, enhancing productivity and reducing costs. This shift from capital expenditure to operational expense allows organizations to pay only for what they use, benefiting from the cloud vendor's economies of scale.",
  },
  {
    name: "Enhanced Security and Disaster Recovery",
    description:
      "The security features of Oracle Cloud Services help organizations protect their data more effectively. With robust disaster recovery capabilities, businesses can ensure continuity even in adverse situations. This level of security and recovery is typically more cost-effective compared to traditional on-premises solutions.",
  },
  {
    name: "Scalability and Flexibility",
    description:
      "Oracle Cloud Services provide the ability to scale resources up or down based on business needs. This flexibility supports growth without the need for significant upfront investments in infrastructure. During periods of increased demand, such as the shift to remote work, Oracle Cloud can quickly adapt, proving essential for maintaining operational continuity.",
  },
  {
    name: "Improved Access and Collaboration",
    description:
      "With Oracle Cloud Services, employees can access necessary applications and data from anywhere in the world, which enhances collaboration. This remote access is particularly beneficial in today's increasingly mobile and global workforce, making it easier for teams to work effectively from any location.",
  },
];

export const Data2 = [
  {
    name: "Compute and Containers",
    description:
      "OCI provides flexible and scalable compute options including dedicated bare metal instances, multitenant VMs, and containers. These services support a range of applications, from microservices to high-performance computing applications.",
    icon: FaMicrochip,
  },
  {
    name: "Networking and Connectivity",
    description:
      "At the core of OCI's offerings is its advanced virtual cloud network (VCN) capabilities, which allow for the creation of a customizable, isolated network environment. This is complemented by OCI's Load Balancing and FastConnect services, enhancing connectivity and application distribution.",
    icon: FaNetworkWired,
  },
  {
    name: "Storage Solutions",
    description:
      "OCI's storage services cover a broad spectrum, including block volumes with auto-tuning performance features and object storage solutions designed for high-throughput needs.",
    icon: FaBoxOpen,
  },
  {
    name: "Database Services",
    description:
      "Oracle provides a variety of database solutions, including the Autonomous Database for transaction processing and data warehousing, and MySQL HeatWave, which integrates transactions, analytics, and machine learning.",
    icon: FaDatabase,
  },
  {
    name: "Application Development",
    description:
      "OCI supports modern application development with tools and services that simplify deployment and management. This includes everything from building microservices with Kubernetes to deploying applications with Oracle's developer-friendly platforms.",
    icon: FaRegFileCode,
  },
  {
    name: "Security and Compliance",
    description:
      "Security is a cornerstone of OCI, offering comprehensive tools and services that protect data and ensure compliance across all layers of the deployed stack, regardless of the underlying technology.",
    icon: MdOutlineSecurity,
  },
];

export const Data3 = [
  {
    name: "Foundation: Oracle Cloud Infrastructure (OCI)",
    description:
      "This ecosystem is built on a foundation of Oracle Cloud Infrastructure (OCI), which provides a consistent set of over 100 services across all cloud regions, ensuring high availability and performance at a lower cost compared to other providers.",
  },
  {
    name: "Data Integration Tools: Oracle Data Integrator and GoldenGate",
    description:
      "Key components of this ecosystem include advanced data integration tools like Oracle Data Integrator and GoldenGate, which support complex data management tasks across diverse data sources.",
  },
  {
    name: "Oracle Integration Services",
    description:
      "These tools are complemented by Oracle Integration services that offer prebuilt connectivity to various applications and data platforms, enhancing business agility through automated end-to-end processes.",
  },
  {
    name: "Development Tools: Oracle Visual Builder",
    description:
      "Additionally, the ecosystem supports the development of web and mobile applications with tools such as Oracle Visual Builder, which simplifies the creation of applications through a low-code approach.",
  },
  {
    name: "Extended Capabilities: Oracle SOA and API Management",
    description:
      "Moreover, Oracle’s ecosystem extends its capabilities with services like Oracle SOA and API Management, which streamline the integration and management of enterprise applications. These services not only facilitate efficient process automation but also enable businesses to leverage real-time data analytics and machine learning to gain actionable insights and drive decision-making processes.",
  },
];

export const FAQData = [
  {
    question: "What does the My Services page on Oracle Cloud entail?",
    answer:
      "The My Services page on Oracle Cloud provides a list of all service consoles that you can access. To view this page and further details about each service, navigate to the Oracle Cloud home page from your browser and click on 'Sign In'.",
  },
  {
    question: "What types of cloud services are offered by Oracle?",
    answer:
      "Oracle offers a variety of cloud services including Global Cloud Data Center Infrastructure, Oracle Database@Azure, multicloud solutions, Database Service for Microsoft Azure, MySQL HeatWave, and Interconnect for Microsoft Azure.",
  },
  {
    question: "How extensive is Oracle's Cloud services network?",
    answer:
      "Oracle operates a vast network with services available from 48 public cloud regions worldwide. This network supports over 100 core cloud services as part of Oracle's distributed cloud.",
  },
  {
    question: "Can you describe the range of Oracle services available?",
    answer:
      "Oracle Services is a comprehensive platform that integrates applications, data, and capabilities. It facilitates seamless self-service, agent-assisted service, and field service workflows, which are customized to meet the specific needs of various industries and use cases.",
  },
];
