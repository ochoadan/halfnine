import { FaRegFileCode, FaCloud, FaChartLine } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Seamless Scalability",
        furtherList: [
            {
                name: "Automatic Data Partitioning",
                description: "DynamoDB automatically partitions and repartitions data to handle changes in workload and data growth, ensuring seamless scalability without manual intervention.",
            },
            {
                name: "Read and Write Scalability",
                description: "It offers scalability for both read and write operations, adapting to varying traffic levels without service degradation.",
            },
        ],
    },
    {
        name: "Enhanced Performance",
        furtherList: [
            {
                name: "Low Latency",
                description: "With data spread across SSDs and supported by in-memory caching, DynamoDB maintains single-digit millisecond response times, crucial for real-time applications.",
            },
            {
                name: "High Throughput",
                description: "Designed for data-intensive applications, DynamoDB supports high throughput levels, ensuring reliable performance under heavy loads.",
            },
        ],
    },
    {
        name: "Robust Security",
        furtherList: [
            {
                name: "Comprehensive Encryption",
                description: "Offers encryption at rest and in transit, using AWS Key Management Service for enhanced security.",
            },
            {
                name: "Fine-Grained Access Control",
                description: "Integrates with AWS IAM, allowing detailed access control and enhanced security management.",
            },
        ],
    },
    {
        name: "Cost-Effectiveness",
        furtherList: [
            {
                name: "Pay-Per-Use",
                description: "DynamoDB's pricing model allows businesses to pay only for the resources they use, which can be more economical than traditional fixed-cost models.",
            },
            {
                name: "Managed Service",
                description: "As a fully managed service, DynamoDB reduces the need for in-house database management, which can lower operational costs.",
            },
        ],
    },
    {
        name: "Flexibility and Integration",
        furtherList: [
            {
                name: "Data Model Support",
                description: "Supports key-value and document data models, providing flexibility in how data is stored and managed.",
            },
            {
                name: "AWS Integration",
                description: "Seamlessly integrates with other AWS services, enabling the development of comprehensive, scalable applications.",
            },
        ],
    },
    {
        name: "Advanced Features for Modern Applications",
        furtherList: [
            {
                name: "Global Distribution",
                description: "DynamoDB Global Tables support multi-region, active-active replication to ensure low-latency access and robust disaster recovery.",
            },
            {
                name: "Backup and Restore",
                description: "Offers continuous backups and point-in-time recovery options to protect data and maintain business continuity.",
            },
        ],
    },
];

export const dataV2 = [
    {
        name: "DynamoDB Application Development Services",
        description: "We provide comprehensive services for building robust applications using DynamoDB, ensuring your applications are scalable and maintain high performance.",
        icon: FaRegFileCode,
    },
    {
        name: "DynamoDB Serverless Services",
        description: "Leverage our serverless architecture expertise to enhance your DynamoDB implementations, reducing operational overhead and costs.",
        icon: FaCloud,
    },
    {
        name: "Consulting for Amazon DynamoDB",
        description: "Our experts offer tailored consulting services to help you maximize your DynamoDB usage and optimize your database solutions.",
        icon: FaChartLine,
    },
    {
        name: "Backend Development for Mobile Apps",
        description: "We specialize in creating efficient backend solutions for mobile applications using DynamoDB, enhancing data management and speed.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "DynamoDB Data Analytics",
        description: "Utilize our data analytics services to gain insightful analytics from your DynamoDB data, helping you make informed business decisions.",
        icon: GrAnalytics,
    },
    {
        name: "Custom DynamoDB Solutions",
        description: "We design and implement custom DynamoDB solutions that are specifically tailored to meet the unique needs of your business.",
        icon: MdDashboardCustomize,
    },
];

export const dataV3 = [
    {
        name: "Security and Access Control",
        description: "DynamoDB’s native integration with AWS Identity and Access Management (IAM) ensures that data security is paramount, offering encryption at rest and in transit alongside fine-grained access control. This integration allows for precise user permissions and role management, safeguarding sensitive data effectively.",
    },
    {
        name: "Compatibility with AWS Lake Formation",
        description: "DynamoDB’s compatibility with AWS Lake Formation exemplifies its versatility in managing large-scale data lakes. This feature enables users to securely store and retrieve vast amounts of data.",
    },
    {
        name: "Auto-Scaling Capabilities",
        description: "The auto-scaling capabilities of DynamoDB allow it to adjust automatically to fluctuating data flows, enhancing application performance while optimizing cost. This is crucial for businesses that experience variable workloads and need a database that can scale without manual intervention.",
    },
    {
        name: "Structure and Querying Capabilities",
        description: "The structure of DynamoDB revolves around tables, items, and attributes, with primary keys ensuring the uniqueness of each item. It supports both partition keys alone or in combination with sort keys (composite primary keys). Additionally, DynamoDB provides secondary indexes for more flexible data querying, which include global secondary indexes and local secondary indexes, enhancing the database’s querying capabilities.",
    },
    {
        name: "DynamoDB Streams and AWS Lambda Integration",
        description: "DynamoDB Streams feature captures table activity, providing a log of data modification events which can be integrated with AWS Lambda to trigger automated workflows based on data changes. This integration is invaluable for real-time data processing and event-driven programming, facilitating more responsive and dynamic application behaviors.",
    },
    {
        name: "Efficient Data Structuring and Management Techniques",
        description: "Lastly, the database utilizes efficient data structuring and management techniques, including hashing and B-trees, and supports queries formatted in JSON, making it both powerful and user-friendly for developers.",
    },
];


export const dataFAQ = [
    {
        question: "What are the benefits of using DynamoDB?",
        answer: "DynamoDB offers seamless scalability, enhanced performance, robust security, cost-effectiveness, flexibility and integration, and advanced features for modern applications.",
    },
    {
        question: "What services do you provide for DynamoDB?",
        answer: "We provide DynamoDB application development services, DynamoDB serverless services, consulting for Amazon DynamoDB, backend development for mobile apps, DynamoDB data analytics, and custom DynamoDB solutions.",
    },
    {
        question: "What are the key features of DynamoDB?",
        answer: "DynamoDB offers security and access control, compatibility with AWS Lake Formation, auto-scaling capabilities, structure and querying capabilities, DynamoDB Streams and AWS Lambda integration, and efficient data structuring and management techniques.",
    },
];
