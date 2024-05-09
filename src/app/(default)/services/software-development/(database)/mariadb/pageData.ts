import { FaLifeRing } from "react-icons/fa6";
import { GiSpeedometer, GiUpgrade } from "react-icons/gi";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Enhanced Performance and Speed",
        furtherList: [
            {
                name: "Superior Query Execution",
                description: "Custom MariaDB solutions significantly outpace MySQL in replication and query execution, maintaining high performance even under heavy concurrent connections."
            },
            {
                name: "Optimized Storage Engines",
                description: "With advanced storage engines, MariaDB custom solutions optimize data retrieval and storage processes, ensuring faster updates and better handling of large data volumes."
            },
        ],
    },
    {
        name: "Robust Security Features",
        furtherList: [
            {
                name: "Comprehensive Encryption",
                description: "MariaDB strengthens data security by encrypting temporary tables and binary logs, which enhances protection against data breaches compared to MySQL."
            },
            {
                name: "Advanced Password Validation",
                description: "Incorporating three password validation plugins, MariaDB offers a more robust security framework, ensuring stringent data access controls."
            },
        ],
    },
    {
        name: "Scalability and Compatibility",
        furtherList: [
            {
                name: "Seamless MySQL Integration",
                description: "MariaDB maintains full compatibility with MySQL, allowing for hassle-free migration of databases, applications, and tools without significant modifications."
            },
            {
                name: "High Scalability",
                description: "Capable of managing extensive databases with tens of thousands of tables and billions of rows, MariaDB supports both small and large enterprise requirements efficiently."
            },
        ],
    },
    {
        name: "Open Source and Community Support",
        furtherList: [
            {
                name: "Dedication to Open-Source",
                description: "Being entirely open-source, MariaDB fosters an innovative and collaborative community environment, encouraging active participation and creative problem-solving among users."
            },
            {
                name: "Continuous Innovation",
                description: "Originating from MySQL's original developers, MariaDB is committed to continuous improvement, regularly introducing new features and optimizations."
            },
        ],
    },
    {
        name: "Cost-Effectiveness and Resource Availability",
        furtherList: [
            {
                name: "Economic Efficiency",
                description: "Choosing MariaDB not only reduces operational costs but also provides access to a plethora of community-driven support and resources, enhancing learning and troubleshooting."
            },
            {
                name: "Extensive Documentation and Support",
                description: "With a wealth of knowledge bases, documentation, and forums, MariaDB equips users with the necessary tools to enhance their database management skills and resolve issues promptly."
            },
        ],
    },
];

export const dataV2 = [
    {
        name: "Custom Development and Integration",
        description: "Our MariaDB development company offers tailored development services that integrate seamlessly with your existing systems, enhancing functionality and efficiency.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Database Optimization",
        description: "We provide expert database optimization services, ensuring your MariaDB solution operates at peak performance, with optimized queries and configured indexes.",
        icon: GiSpeedometer,
    },
    {
        name: "Migration and Upgrades",
        description: "Leverage our expertise to migrate your databases to MariaDB from other systems or upgrade to the latest MariaDB versions with minimal downtime.",
        icon: GiUpgrade,
    },
    {
        name: "Full Lifecycle Support",
        description: "From initial consultation through to deployment and beyond, we offer comprehensive support and maintenance to ensure your MariaDB environment remains robust and secure.",
        icon: FaLifeRing,
    },
    {
        name: "Training and Education",
        description: "Empower your team with our training programs designed to enhance their proficiency in managing and developing MariaDB databases.",
        icon: PiStudentBold,
    },
    {
        name: "Security Enhancements",
        description: "We specialize in fortifying MariaDB installations, implementing advanced security measures to protect your data from unauthorized access and threats.",
        icon: MdOutlineSecurity,
    },
];

export const dataV3 = [
    {
        name: "Development and Open-Source Commitment",
        description: "Developed by the original creators of MySQL following its acquisition by Oracle, MariaDB continues to evolve with a strong commitment to open-source principles. This commitment is evident in its wide array of storage engines tailored to specific data handling needs.",
    },
    {
        name: "Storage Engines",
        description: "InnoDB remains the preferred choice for transactional storage due to its reliability and performance efficiency. On the other hand, Aria and MyISAM offer advantages in environments where a smaller footprint and easy table copying between systems are priorities, with Aria providing a modern take on MyISAM’s capabilities.",
    },
    {
        name: "Scalability Solutions",
        description: "MariaDB’s ecosystem is further enriched by its scalability solutions, such as the ability to distribute database loads across multiple servers. This feature is crucial for businesses looking to scale operations without compromising on speed or availability. The Galera cluster, for example, offers a synchronous multi-master setup, ensuring data integrity and consistency across the board.",
    },
    {
        name: "Large-Scale Data Operations",
        description: "For businesses dealing with large-scale data operations, MariaDB presents the ColumnStore engine, which employs a massively parallel distributed data architecture ideal for handling petabytes of data. This is complemented by the Spider storage engine that effectively shards data across multiple servers, optimizing performance and resource utilization.",
    },
    {
        name: "Connectivity and Integration",
        description: "Moreover, MariaDB enhances connectivity and integration through the CONNECT engine, which allows access to various data formats and remote resources seamlessly. For those dealing with complex data structures, the OQGRAPH engine facilitates the management of intricate hierarchies and graph-based data, making MariaDB a comprehensive solution for diverse data management requirements.",
    },
    {
        name: "Security and Enterprise Readiness",
        description: "In terms of security and enterprise readiness, MariaDB offers hardened and secured configurations, which include advanced features for auditing, backups, and replication, ensuring that enterprise deployments are robust, secure, and efficient. With its flexibility, MariaDB supports a broad spectrum of deployment options, including cloud, on-premises, and hybrid setups, catering to the dynamic needs of modern businesses.",
    },
];


export const dataFAQ = [
    {
        question: "What are the advantages of using MariaDB over MySQL?",
        answer: "MariaDB offers enhanced performance and speed, robust security features, scalability and compatibility, open source and community support, and cost-effectiveness and resource availability compared to MySQL.",
    },
    {
        question: "What services does the MariaDB development company provide?",
        answer: "The MariaDB development company offers custom development and integration, database optimization, migration and upgrades, full lifecycle support, training and education, and security enhancements.",
    },
    {
        question: "What are some key features of MariaDB?",
        answer: "Some key features of MariaDB include its development and open-source commitment, various storage engines, scalability solutions, support for large-scale data operations, connectivity and integration capabilities, and security and enterprise readiness.",
    },
];
