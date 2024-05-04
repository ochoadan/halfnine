import { AiFillApi } from "react-icons/ai";
import { FaChartLine, FaHammer, FaRegFileCode } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

export const dataV1 = [
    {
        name: "Streamlined Development Process",
        description: "Custom Spring Boot solutions significantly streamline the development process by reducing boilerplate code. This allows developers to focus more on the core tasks, using established design patterns and adhering to industry and regulatory standards. The reduction in unnecessary code leads to a decrease in the total cost of ownership for applications."
    },
    {
        name: "Enhanced Flexibility and Efficiency",
        description: "Spring Boot provides a flexible environment equipped with libraries and tools essential for building robust web applications. It supports embedded servers like Tomcat, Jetty, or Undertow, which simplifies the deployment process and enhances application efficiency. The automatic configuration feature minimizes decision-making in the coding process, allowing for quicker adjustments and implementations."
    },
    {
        name: "Cost-Effective and Secure",
        description: "The opinionated approach of Spring Boot, which gravitates towards a single solution for any given issue, along with its ability to package applications into a single .jar file, makes microservices easier to manage and deploy, potentially lowering infrastructure costs. Additionally, the built-in security features integrated with Spring Security ensure that the application is secure and compliant with current standards."
    },
    {
        name: "Scalability and Performance",
        description: "Spring Boot's architecture is designed with scalability in mind, which is crucial for businesses looking to grow and handle increasing loads without performance degradation. The framework's compatibility with microservices further enhances this by allowing systems to be more flexible and scalable."
    },
    {
        name: "Robust Community Support and Integration",
        description: "A large and active developer community surrounds Spring Boot, offering support and sharing best practices that can help in resolving issues and improving the application's functionality. Spring Boot's ability to integrate seamlessly with a variety of other technologies like Oracle, PostgreSQL, and MongoDB, among others, ensures that it can fit into nearly any software ecosystem."
    },
    {
        name: "Simplified Testing and Maintenance",
        description: "Spring Boot makes testing more intuitive with default settings that are optimized for both unit and integration tests, facilitating more efficient testing processes. Furthermore, Java's stability as a mature technology eases the maintenance burden, even if the original developers are no longer available, ensuring longevity and reliability of the software solutions provided."
    }
];

export const dataV2 = [
    {
        name: "Stand-alone Application Creation",
        description: "Develop production-grade, stand-alone Spring applications that are ready to run with minimal configuration, enhancing operational efficiency.",
        icon: LuAppWindow,
    },
    {
        name: "Simplified Build Configuration",
        description: "Offer opinionated 'starter' dependencies that streamline the build process, reducing complexity and setup time for projects.",
        icon: FaHammer,
    },
    {
        name: "Optimized Setup",
        description: "Automatically configure Spring and third-party libraries to ensure optimal integration and performance without manual setups.",
        icon: FaChartLine,
    },
    {
        name: "Enhanced Application Monitoring",
        description: "Implement production-ready features such as metrics, health checks, and externalized configuration to improve application reliability and monitoring.",
        icon: MdDashboard,
    },
    {
        name: "Command Line Interface",
        description: "Utilize the Spring Boot CLI for efficient application testing and running directly from the command prompt.",
        icon: FaRegFileCode,
    },
    {
        name: "Management EndPoints",
        description: "Integrate Spring Boot Actuator to provide crucial management endpoints, offering insights into application metrics and operational health.",
        icon: AiFillApi,
    },
];

export const dataV3 = [
    {
        name: "Comprehensive and Modular Design",
        description: "Spring Framework provides a robust foundation with features like dependency injection and aspect-oriented programming, essential for developing enterprise-level applications. This comprehensive approach ensures that applications are both scalable and flexible, meeting the complex demands of modern software development."
    },
    {
        name: "Streamlined Configuration",
        description: "Spring Boot enhances the Spring environment by minimizing the need for extensive XML configuration. It offers sensible defaults and auto-configuration options that streamline the setup process, significantly reducing the initial development time and effort involved."
    },
    {
        name: "Advanced Project Initialization",
        description: "Spring Initializr offers a web-based interface that simplifies project setup. Developers can specify dependencies and project characteristics, and receive a customized project structure, ready for immediate development, emphasizing efficiency from the very start."
    },
    {
        name: "Dependency Management",
        description: "The introduction of Spring Boot Starter Dependencies exemplifies the framework's approach to simplifying dependency management. These starters automatically configure sets of dependencies that are commonly used together, reducing manual maintenance and potential errors."
    },
    {
        name: "Operational Efficiency with Spring Boot Actuator",
        description: "Spring Boot Actuator provides developers with essential management and monitoring capabilities. It includes numerous endpoints for health checks and detailed app metrics, which are crucial for maintaining and troubleshooting production applications."
    },
    {
        name: "Development Enhancements with Spring Boot DevTools",
        description: "Spring Boot DevTools further streamlines the development process by enabling automatic application restarts and reloads when code changes, which is invaluable for developers seeking a rapid iteration process."
    },
    {
        name: "Security and Data Management",
        description: "Spring Security and Spring Boot Data handle crucial authentication, authorization, and data management tasks, ensuring that applications are secure and capable of handling complex data operations smoothly."
    },
    {
        name: "Integration Capabilities",
        description: "The ecosystem is designed to be highly integrative, allowing seamless connections with various databases and front-end frameworks. This integration capability makes it easier for developers to create comprehensive solutions that include both back-end and front-end development."
    }
];


export const dataFAQ = [
    {
        question: "What organizations utilize Spring Boot in their operations?",
        answer: "Currently, multiple companies across various industries use Spring Boot for its robust application development capabilities.",
    },
    {
        question: "Is Spring Boot part of Netflix's technology stack?",
        answer: "Yes, Netflix incorporates Spring Boot into its ecosystem. They have created what's known as Spring Boot Netflix, which is a collection of modules built on top of Spring Boot to ensure seamless integration with Netflix's infrastructure.",
    },
    {
        question: "Which entity is responsible for the development of Spring Boot?",
        answer: "Spring Boot is developed by the team behind the Spring Framework, which is a larger ecosystem for Java development.",
    },
    {
        question: "Can you explain the purpose of Spring Boot?",
        answer: "Spring Boot is an open-source tool designed to simplify the process of using Java-based frameworks. It is particularly effective for creating microservices and web applications, offering a streamlined approach to Java development.",
    },
];
