import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { GiSpeedometer, GiUpgrade } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";

export const dataV1 = [
    {
        name: "Performance Enhancement",
        description: "SQLite's implementation in optimized C significantly boosts the performance of queries and indexing. This enhancement allows for quicker data retrieval and efficient data handling, crucial for applications requiring high-speed data operations.",
    },
    {
        name: "Advanced Features Access",
        description: "By leveraging SQLite, developers gain access to robust features such as advanced queries, validation, sorting, and indexing. These capabilities are typically complex and time-consuming to implement from scratch, providing a substantial advantage in terms of development speed and reliability.",
    },
    {
        name: "Reduced Debugging",
        description: "SQLite's well-debugged nature means that developers spend less time troubleshooting and more time enhancing the application's functionality. This reliability translates into lower development costs and faster time-to-market.",
    },
    {
        name: "Code Readability and Universality",
        description: "SQL, being a universally recognized language, enhances code readability and maintainability. This universality facilitates easier updates and modifications by different developers, ensuring the longevity and scalability of applications.",
    },
    {
        name: "Lightweight and Resource-Efficient",
        description: "Ideal for devices with limited resources, SQLite's lightweight nature ensures it does not overburden systems, maintaining optimal performance even in resource-constrained environments like mobile phones and embedded systems.",
    },
    {
        name: "Continuous Data Updates",
        description: "SQLite's ability to update content continuously minimizes the risk of data loss during unexpected failures, such as power outages or system crashes, ensuring data integrity and reliability.",
    },
    {
        name: "Cross-Platform Compatibility",
        description: "SQLite's compatibility across various operating systems and architectures enhances its versatility, making it an excellent choice for cross-platform applications. This compatibility ensures that applications remain functional and consistent across different devices and platforms.",
    },
    {
        name: "Simplified Data Recovery",
        description: "With SQLite, the chances of recovering lost data are significantly higher, providing peace of mind in maintaining critical information securely and effectively.",
    },
    {
        name: "Cost Efficiency",
        description: "Investing in SQLite development not only reduces initial costs but also offers long-term savings and a high return on investment by simplifying the data management components of applications.",
    },
];

export const dataV2 = [
    {
        name: "Custom SQLite Application Development",
        description: "Tailored application development using SQLite to ensure your software is efficient, reliable, and suited to your specific business requirements.",
        icon: MdDashboardCustomize,
    },
    {
        name: "SQLite Database Optimization",
        description: "Enhancing the performance of your SQLite databases through fine-tuning and optimization techniques to handle larger datasets and complex queries more efficiently.",
        icon: GiSpeedometer,
    },
    {
        name: "SQLite Integration Services",
        description: "Seamlessly integrating SQLite with your existing systems to enhance data consistency and accessibility across different platforms and technologies.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "SQLite Data Security Enhancements",
        description: "Implementing robust security measures including encryption and secure access protocols to protect your data from unauthorized access and breaches.",
        icon: MdOutlineSecurity,
    },
    {
        name: "SQLite Database Migration and Upgrades",
        description: "Providing services to migrate your existing databases to SQLite or upgrade your current SQLite databases to the latest versions, ensuring you leverage the most advanced features and improvements.",
        icon: GiUpgrade,
    },
    {
        name: "Continuous SQLite Support and Maintenance",
        description: "Offering ongoing support and maintenance to ensure your SQLite databases are always running smoothly, with minimal downtime and optimal performance.",
        icon: GrVmMaintenance,
    },
];

export const dataV3 = [
    {
        name: "Embedded in Multiple Devices",
        description: "SQLite's architecture allows it to function across different operating systems and hardware, making it a preferred choice for embedded systems. Its presence in everyday devices like televisions, cameras, and mobile phones speaks to its efficiency and compact size.",
    },
    {
        name: "Support for Various Data Handling Needs",
        description: "The database engine is adept at handling multiple data-centric operations, from OLTP, known for its fast transactional processing capabilities, to complex OLAP applications. Recent enhancements have seen SQLite's performance on analytical processing benchmarks improve significantly, making it a more comprehensive solution for varied data management requirements.",
    },
    {
        name: "Open Source and Community-Driven",
        description: "Being open-source, SQLite benefits from a global community of developers who continuously work on improving its features and security. This community also helps in troubleshooting and extending the database's capabilities, ensuring it remains cutting-edge.",
    },
    {
        name: "Cross-Platform Stability and Compatibility",
        description: "SQLite databases offer unparalleled stability and compatibility across platforms, maintaining a consistent and reliable data format that can be used and transferred across different systems without hassle. This feature is particularly important for applications that require data portability and integrity.",
    },
    {
        name: "Continuous Development and Education",
        description: "SQLite's development is supported by the SQLite Consortium and an active community that contributes to its documentation and educational resources. This ensures that SQLite is not only sustainable but also evolving with the needs of modern applications. The availability of comprehensive documentation and frequent updates makes SQLite a learning tool for new developers and a reliable engine for seasoned professionals.",
    },
];


export const dataFAQ = [
    {
        question: "Is SQLite still relevant in modern technology?",
        answer: "SQLite is not obsolete; it remains widely used in various applications. However, the specific use of SQLite within web browsers for Web SQL Database technology is becoming deprecated, with IndexedDB emerging as its successor. Major browsers like Google Chrome, Opera, Safari, and the Android Browser have historically used SQLite for this purpose.",
    },
    {
        question: "What are some notable companies that utilize SQLite in their operations?",
        answer: "Many large companies integrate SQLite into their systems due to its lightweight and reliable nature. However, the original input does not provide a specific list of these companies.",
    },
    {
        question: "What are the advantages of using SQLite in mobile app development?",
        answer: "SQLite offers several advantages for mobile app development. It is a lightweight and embedded database that requires minimal setup and configuration. SQLite provides efficient storage and retrieval of data, making it ideal for mobile devices with limited resources. It also supports ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity. Additionally, SQLite is cross-platform compatible, allowing developers to build mobile apps that work seamlessly on different operating systems. Overall, SQLite simplifies the development process and enhances the performance of mobile applications."
    },
];
