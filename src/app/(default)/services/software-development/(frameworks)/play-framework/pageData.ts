import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { AiFillApi } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { GiSpeedometer, GiUpgrade } from "react-icons/gi";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { TbBuildingSkyscraper } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Increased Productivity with Hot Reloading",
        description: "The Play Framework's hot reloading feature enhances developer productivity significantly. This capability allows changes to be viewed instantly without the need for redeploying the application, streamlining the development process and reducing downtime.",
    },
    {
        name: "Scalability through Asynchronous I/O",
        description: "Play Framework's support for asynchronous and non-blocking I/O operations makes it exceptionally suitable for creating scalable applications. This feature ensures that applications can handle a large number of simultaneous data requests without compromising performance.",
    },
    {
        name: "Quality Assurance with Built-in Testing",
        description: "With comprehensive support for writing and running tests, the Play Framework ensures that applications meet high-quality standards. This built-in functionality facilitates continuous testing during the development process, contributing to more reliable and robust applications.",
    },
    {
        name: "Modular Architecture for Flexibility",
        description: "The modular architecture of the Play Framework allows developers to incorporate only the necessary components, minimizing resource overhead. This flexibility also simplifies the management and maintenance of applications as they evolve.",
    },
    {
        name: "Streamlined Web Development",
        description: "Play Framework simplifies web development with its model-view-controller (MVC) design, making it easier to build and maintain applications. It also supports a variety of advanced features like WebSockets and streaming capabilities, which enhance the functionality of web applications.",
    },
    {
        name: "Enhanced Data Security and Efficient Resource Usage",
        description: "Security is a paramount concern in web development, and Play Framework offers robust data transfer security features. Additionally, its efficient resource usage ensures minimal consumption of CPU and memory, leading to cost-effective and sustainable application operation.",
    },
];

export const dataV2 = [
    {
        name: "Custom Application Development",
        description: "Tailored specifically to meet business needs, we provide end-to-end custom application development using the Play Framework, ensuring applications are robust, scalable, and secure.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Enterprise Integration Solutions",
        description: "We offer enterprise integration services to streamline your business processes by connecting disparate systems and applications, enhancing data flow and functionality.",
        icon: TbBuildingSkyscraper,
    },
    {
        name: "Play Framework Consulting",
        description: "Leverage our expert consulting services to optimize your Play Framework projects. Our team provides strategic insights to enhance performance, scalability, and maintainability.",
        icon: FaChartLine,
    },
    {
        name: "API Design and Development",
        description: "Specializing in API development, we ensure seamless, secure, and efficient communication between various software components and external applications.",
        icon: AiFillApi,
    },
    {
        name: "Performance Tuning",
        description: "We enhance the performance of your Play Framework applications by identifying bottlenecks and optimizing code, database interactions, and system configurations.",
        icon: GiSpeedometer,
    },
    {
        name: "Migration and Upgrades",
        description: "Our services include migrating legacy applications to the Play Framework and updating existing Play applications to utilize the latest features and improvements.",
        icon: GiUpgrade,
    },
    {
        name: "Continuous Integration and Deployment",
        description: "Implementing CI/CD pipelines, we streamline the development process for Play Framework projects, enhancing productivity and reducing time-to-market.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "Security Enhancements",
        description: "Focusing on security, we fortify your Play Framework applications against vulnerabilities, ensuring data integrity and compliance with industry standards.",
        icon: MdOutlineSecurity,
    },
    {
        name: "Training and Support",
        description: "We provide comprehensive training and ongoing support to ensure your team is well-equipped to manage and extend their Play Framework applications effectively.",
        icon: PiStudentBold,
    },
];

export const dataV3 = [
    {
        name: "Comprehensive Documentation",
        description: "The Play Framework Ecosystem is robust, supported by a comprehensive set of documentation. The framework’s documentation is meticulous, offering everything from a basic “Hello World” tutorial to advanced usage scenarios, making it accessible for both beginners and experienced developers. This inclusivity is further supported by the availability of documentation in multiple languages including English, Bulgarian, French, Japanese, and Turkish.",
    },
    {
        name: "Vibrant Community Support",
        description: "Play Framework is not just limited to documentation but extends its support through various community-driven platforms. Developers can engage with peers via the Play Discuss Forum, Discord, Stackoverflow, and other social media platforms, fostering a collaborative environment for problem-solving and innovation. This community support is crucial for both learning and troubleshooting, enhancing the overall developer experience.",
    },
    {
        name: "Continuous Improvement and Integration",
        description: "The framework is continuously improved and expanded upon, with a range of versions from 1.0.3.2 to the latest 3.0.x, catering to diverse development needs. The Play Framework also integrates seamlessly with major libraries and frameworks across the Java ecosystem, which is extensive and includes everything from database management to machine learning libraries. This integration capability makes Play Framework a versatile choice for developers looking to leverage a full-stack framework that supports rapid development cycles and a wide range of application needs.",
    },
    {
        name: "Open-Source and Adaptability",
        description: "Moreover, the framework is open-source under the Apache 2 License, encouraging contributions and modifications that enrich the ecosystem further. This openness not only promotes innovation but also ensures that the framework can be adapted to meet specific project requirements, making it a preferred choice for developers around the globe.",
    },
];


export const dataFAQ = [
    {
        question: "What companies utilize the Play Framework?",
        answer: "The Play Framework is used by various companies that require a high-productivity web app framework compatible with JVM-based programming languages.",
    },
    {
        question: "What is the primary purpose of the Play Framework?",
        answer: "The Play Framework is designed for creating web applications with high productivity. It is a framework that allows for compiling and running code on a Java Virtual Machine (JVM).",
    },
    {
        question: "Is the Play Framework available as open-source software?",
        answer: "Yes, the Play Framework is an open-source web application framework that adheres to the model–view–controller (MVC) architectural pattern and is written in Scala. It can also be used with other JVM-compiled languages, such as Java.",
    },
    {
        question: "How does Akka differ from the Play Framework?",
        answer: "Akka provides a low-level programming model suited for building reactive and distributed systems, emphasizing handling complex networking and concurrency tasks. In contrast, the Play Framework offers higher-level abstractions for web application development, simplifying many low-level details.",
    },
];
