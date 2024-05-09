import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { GiSpeedometer } from "react-icons/gi";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Unmatched Performance and Scalability",
        description: "Redis Enterprise dramatically enhances the capability of Redis by utilizing a unique shared-nothing cluster architecture. This design allows for unparalleled performance at scale, making it an ideal solution for businesses that require high-speed data processing across large datasets.",
    },
    {
        name: "High Availability and Disaster Recovery",
        description: "With Redis Enterprise, high availability is seamlessly integrated. The system features diskless replication and instant failure detection, ensuring single-digit-second failover across various geographical locations. Additionally, it provides comprehensive disaster recovery tools to protect and quickly restore data.",
    },
    {
        name: "Global Data Distribution",
        description: "The Active-Active deployment capability of Redis Enterprise allows for real-time, simultaneous read and write operations across globally distributed databases. This feature is crucial for multinational businesses requiring consistent data availability across borders.",
    },
    {
        name: "Cost Efficiency with Tiered Storage",
        description: "Redis Enterprise introduces a cost-effective tiered storage approach that stores frequently accessed 'hot' data in memory, while 'colder' data moves to Flash storage. This method can reduce infrastructure costs by up to 70%, providing a high-performance solution that is also economically viable.",
    },
    {
        name: "Enhanced Security Measures",
        description: "Redis Enterprise ensures that production data is safeguarded from unauthorized access with multi-layer security measures. These include role-based access control, robust authentication and authorization protocols, and comprehensive encryption practices.",
    },
    {
        name: "Flexible Deployment Options",
        description: "Organizations can deploy Redis Enterprise on any cloud platform, on-premises, or within multi-cloud or hybrid environments. This flexibility supports a smooth transition of applications to the cloud, adapting to various operational requirements and preferences.",
    },
    {
        name: "Comprehensive Support for Data Types and Operations",
        description: "Redis Enterprise supports a diverse array of data types and complex operations, facilitating advanced functionalities like search and query, JSON handling, and time-series data management. This versatility makes it suitable for a wide range of applications, from real-time analytics to complex transaction systems.",
    },
    {
        name: "Automation and Support",
        description: "The platform automates routine Redis database operations and offers around-the-clock support to address any arising issues promptly. This service ensures that businesses can maintain continuous operation without significant downtime.",
    },
];

export const dataV2 = [
    {
        name: "Custom Application Development",
        description: "Tailored solutions harnessing Redis capabilities to build high-performance applications specific to client requirements.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Enterprise System Integration",
        description: "Seamlessly integrating Redis with existing enterprise systems to enhance data flow and system efficiency.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "Advanced Configuration and Optimization",
        description: "Optimizing Redis setups for maximum performance, including detailed configuration and tuning of Redis environments.",
        icon: GiSpeedometer,
    },
    {
        name: "Data Migration Services",
        description: "Efficiently migrating existing data to Redis systems with minimal downtime, ensuring data integrity and system compatibility.",
        icon: TbTransfer,
    },
    {
        name: "Redis Training and Support",
        description: "Providing comprehensive training sessions and continuous support to ensure teams can effectively utilize Redis technologies.",
        icon: PiStudentBold,
    },
    {
        name: "Security Implementation",
        description: "Implementing robust security measures tailored to Redis applications, safeguarding data against potential threats.",
        icon: MdOutlineSecurity,
    },
];

export const dataV3 = [
    {
        name: "In-Memory Storage and Performance",
        description: "Redis excels in speed due to its in-memory data storage, which facilitates swift read and write operations essential for high-demand applications in financial services, gaming, and online services.",
    },
    {
        name: "Data Structures and Flexibility",
        description: "The platform supports a myriad of data structures such as strings, lists, sets, sorted sets, and more, each serving specific purposes like messaging, real-time analytics, and queue management.",
    },
    {
        name: "Persistence and High Availability",
        description: "Redis ensures data durability through various persistence options and supports high availability with features like master-slave replication and Redis Sentinel, making it reliable for critical business applications.",
    },
    {
        name: "Extensibility Through Modules",
        description: "Redis modules such as RediSearch and RedisGraph further broaden its use cases, enabling full-text search capabilities and efficient graph database management, respectively.",
    },
    {
        name: "Scalability and Atomic Operations",
        description: "With capabilities for clustering, partitioning, and atomic operations, Redis can scale horizontally while ensuring data integrity, catering to businesses experiencing rapid growth or requiring complex transaction management.",
    },
    {
        name: "Community and Resources",
        description: "A vibrant community and a wealth of resources ensure support and continuous improvement of the Redis ecosystem, aiding both new and experienced developers in implementing effective Redis solutions.",
    },
];


export const dataFAQ = [
    {
        question: "What are the key features of Redis Enterprise?",
        answer: "Redis Enterprise offers unmatched performance and scalability, high availability and disaster recovery, global data distribution, cost efficiency with tiered storage, enhanced security measures, flexible deployment options, comprehensive support for data types and operations, and automation and support.",
    },
    {
        question: "How widely used and accepted is Redis in the tech community?",
        answer: "Redis enjoys widespread popularity and continues to grow thanks to its large and active developer community. Its adoption is facilitated by the availability of numerous third-party tools, libraries, and integrations, which enable its use across various applications and environments.",
    },
    {
        question: "What are the advantages of using Redis?",
        answer: "Redis offers in-memory storage and performance, supports various data structures, ensures persistence and high availability, provides extensibility through modules, enables scalability and atomic operations, and has a vibrant community and resources for support and continuous improvement.",
    },
];
