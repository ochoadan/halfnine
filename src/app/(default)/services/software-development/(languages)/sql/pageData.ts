import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { FaLifeRing, FaServer } from "react-icons/fa6";
import { GiSpeedometer } from "react-icons/gi";
import { MdDashboardCustomize, MdPalette } from "react-icons/md";

export const dataV1 = [
    {
        name: "Enhanced Data Manipulation and Integration",
        furtherList: [
            {
                name: "Complex Data Joins and Manipulations",
                description: "Custom SQL allows for intricate joins and data manipulations beyond the capabilities of standard UIs in platforms like Tableau, enabling more sophisticated data analysis.",
            },
            {
                name: "Seamless System Integration",
                description: "These solutions can be integrated flawlessly with existing systems, promoting a streamlined workflow that boosts productivity and efficiency.",
            },
        ],
    },
    {
        name: "Security and Scalability",
        furtherList: [
            {
                name: "Tailored Security Measures",
                description: "Custom software is developed with specific security protocols, significantly reducing vulnerabilities compared to off-the-shelf solutions.",
            },
            {
                name: "Built for Growth",
                description: "Custom SQL solutions are designed with scalability in mind, ensuring they evolve alongside your business needs without performance degradation.",
            },
        ],
    },
    {
        name: "Cost-Effectiveness and Customization",
        furtherList: [
            {
                name: "Personalization at Its Core",
                description: "Every aspect of custom SQL software is tailored to meet the precise needs of a business, from functionality to user interface, ensuring a perfect fit.",
            },
            {
                name: "Long-term Savings",
                description: "Though the initial investment might be higher, custom solutions often lead to greater cost efficiency due to their adaptability and exact alignment with business requirements.",
            },
        ],
    },
    {
        name: "Performance and Reliability",
        furtherList: [
            {
                name: "Optimized Performance",
                description: "Custom SQL solutions are fine-tuned to handle specific data loads and operational demands, ensuring high performance and reliability.",
            },
            {
                name: "Dedicated Support and Updates",
                description: "SQL development companies provide ongoing support and updates tailored to the custom software, enhancing its reliability and functionality over time.",
            },
        ],
    },
];

export const dataV2 = [
    {
        name: "Database Design and Management",
        description: "SQL development companies specialize in creating robust database architectures tailored to specific business needs, ensuring optimal performance and scalability.",
        icon: MdPalette,
    },
    {
        name: "SQL Query Optimization",
        description: "Through custom SQL queries, developers enhance the efficiency of data retrieval and manipulation, significantly improving application performance.",
        icon: GiSpeedometer,
    },
    {
        name: "Integration with Business Intelligence Tools",
        description: "SQL experts facilitate seamless integration of databases with tools like Power BI and Tableau, enabling advanced data analytics and visualization.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "Custom Development Frameworks",
        description: "Offering development frameworks and ORMs, SQL development companies support various programming environments, enhancing application development.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Advanced Data Management Solutions",
        description: "With expertise in NoSQL and big data analytics, these companies provide solutions that manage large datasets efficiently, ensuring data integrity and security.",
        icon: FaServer,
    },
    {
        name: "Continuous Support and Version Control",
        description: "SQL development companies ensure databases are up-to-date and performant, providing ongoing support and modern version control tools.",
        icon: FaLifeRing,
    },
];

export const dataV3 = [
    {
        name: "SQL Server Platforms",
        description: "SQL development is supported across various platforms such as Windows, Linux, and Azure, providing flexibility and scalability. Azure SQL Database, Managed Instance, and Synapse Analytics are among the key offerings that streamline operations and data management across environments.",
    },
    {
        name: "Comprehensive SQL Services",
        description: "From Database Engine to Machine Learning Services (MLS) and Integration Services (SSIS), SQL development companies provide a full spectrum of services. These include advanced data management solutions like NoSQL and big data analytics, ensuring data integrity and security.",
    },
    {
        name: "Integration and Migration Services",
        description: "SQL experts assist in seamless database integration with Business Intelligence tools and facilitate migration to the cloud or newer SQL Server versions, enhancing data accessibility and system compatibility.",
    },
    {
        name: "Performance Monitoring and Management",
        description: "Companies utilize tools like NetCrunch NMS for comprehensive SQL database ecosystem monitoring, focusing on uptime, connectivity, host resources, and database performance to ensure optimal operation.",
    },
    {
        name: "Future-Ready SQL Solutions",
        description: "With ongoing updates and support for the latest SQL Server versions, SQL development companies ensure that businesses are equipped with the latest in data virtualization and management technologies, ready for future challenges and opportunities.",
    },
];


export const dataFAQ = [
    {
        question: "What are the common SQL database systems utilized by companies?",
        answer: "Companies often use free SQL databases such as MySQL, MariaDB, and PostgreSQL, which are supported by large communities and are cost-effective. Most major database management system vendors, including IBM, Oracle, and Microsoft, incorporate SQL due to its widespread accessibility and benefits.",
    },
    {
        question: "What type of SQL is used by SQL Developers?",
        answer: "SQL Developers employ Structured Query Language (SQL) to create and manage database tables. They use CRUD SQL commands, which stand for Create, Read, Update, Delete, to perform essential operations on database tables. Their role also involves optimizing database performance.",
    },
    {
        question: "What are the advantages of using SQL for data management?",
        answer: "SQL offers several advantages for data management, including: 1) Data Integrity: SQL ensures the accuracy and consistency of data through constraints and rules. 2) Data Security: SQL provides robust security features to protect sensitive data. 3) Data Manipulation: SQL allows for efficient querying, filtering, and manipulation of data. 4) Scalability: SQL databases can handle large amounts of data and scale as the business grows. 5) Data Integration: SQL enables seamless integration with other systems and tools for data analysis and reporting."
    },
];
