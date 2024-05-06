import { FaChartLine, FaUserAstronaut } from "react-icons/fa6";
import { GiSpeedometer } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Enhanced Performance and Efficiency",
        description: "Custom SolidJS solutions harness the framework's minimalistic architecture, characterized by a tiny bundle size of 22.8kB minified. This not only results in less CPU load but also accelerates application loading times, making it ideal for performance-critical applications like real-time data visualization tools, chat applications, and interactive dashboards.",
    },
    {
        name: "Optimized Reactivity for Large Scale Applications",
        description: "SolidJS's core advantage lies in its reactivity and performance, especially beneficial for large applications. It uses features like Signals and effects to minimize DOM computations and re-renderings, thereby enhancing the application's responsiveness and user experience.",
    },
    {
        name: "Seamless Developer Transition and Learning Curve",
        description: "By implementing many React principles and utilizing JSX for templating, SolidJS reduces the learning curve for developers already familiar with React. This similarity allows for a smoother transition and quicker adaptation to SolidJS for developing robust applications.",
    },
    {
        name: "Advanced Language and Tooling Support",
        description: "SolidJS's compatibility with TypeScript enhances type safety, reducing bugs and improving maintainability. The support for internationalization means applications can easily be adapted for various languages and regions, broadening the user base.",
    },
    {
        name: "Growing Community and Robust Documentation",
        description: "Despite its relatively smaller community, SolidJS is backed by impressive documentation and a growing number of developers. This community provides sufficient resources and tools, including a reactivity debugger and a Devtools Chrome extension, which are essential for effective development and troubleshooting.",
    },
    {
        name: "Flexible Code Structure and Enhanced Scalability",
        description: "With SolidJS, components are merely a method for grouping code, and state management is not tied to components. This flexibility allows developers to structure code more efficiently and scale applications effortlessly by adding new functionalities without disrupting the existing architecture.",
    },
    {
        name: "Improved Application Performance and Maintenance",
        description: "Custom SolidJS solutions offer significant advantages such as preventing loops in the signal dependency graph, which ensures better debugging, predictable behavior, and easier maintenance. Additionally, the ability to initialize logic on-demand for specific UI areas and perform efficient memory management underscores SolidJS’s capability in building dynamic, high-performance applications.",
    },
];

export const dataV2 = [
    {
        name: "Custom Application Development",
        description: "Tailoring SolidJS applications to meet specific business requirements, ensuring high performance and scalability.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Enterprise Integration Services",
        description: "Seamlessly integrating SolidJS with existing enterprise systems to enhance functionality and user experience.",
        icon: TbBuildingSkyscraper,
    },
    {
        name: "UI/UX Design and Development",
        description: "Creating intuitive and engaging user interfaces using SolidJS, focusing on aesthetic appeal and user friendliness.",
        icon: FaUserAstronaut,
    },
    {
        name: "SolidJS Consulting",
        description: "Providing expert guidance on SolidJS best practices, architecture decisions, and advanced features to optimize your projects.",
        icon: FaChartLine,
    },
    {
        name: "Maintenance and Support",
        description: "Offering ongoing maintenance and support services to ensure SolidJS applications remain up-to-date and perform optimally.",
        icon: GrVmMaintenance,
    },
    {
        name: "Performance Optimization",
        description: "Analyzing and enhancing SolidJS applications to maximize efficiency, reduce load times, and improve overall performance.",
        icon: GiSpeedometer,
    },
];

export const dataV3 = [
    {
        name: "Component Organization and Lifecycle Management",
        description: "Within its ecosystem, SolidJS organizes components using a simple structure, supported by lifecycle functions such as onMount, onCleanup, and onError, which streamline the management of component states and behaviors.",
    },
    {
        name: "Efficient State Management",
        description: "The framework’s use of Signals and Stores for managing reactive data exemplifies its commitment to efficient state management. Here, createSignal and createStore play pivotal roles in handling scalar data and more complex nested information, respectively.",
    },
    {
        name: "Rich Ecosystem and Resources",
        description: "The ecosystem is rich with resources including comprehensive guides, tutorials, API documentation, and tools like SolidStart and various project categories ranging from UI components to Build Utilities. Notable projects such as solid-router, solid-dismiss, and solid-virtual-list showcase the versatility and breadth of SolidJS’s capabilities in real-world applications.",
    },
    {
        name: "Declarative Data Handling and Performance",
        description: "SolidJS’s declarative data handling ensures that updates are managed independently of the components, which are instantiated only once, reducing overhead and enhancing performance. This design philosophy supports a clear, predictable flow of data without true immutability, fostering easier state management and component scalability.",
    },
    {
        name: "Server-Side Rendering and Deployment Flexibility",
        description: "Moreover, SolidJS’s server-side rendering capabilities provide a seamless isomorphic development experience, enabling efficient data fetching and synchronization between server and client. This is complemented by the ability to operate in non-compiled environments, offering developers flexibility in deployment scenarios.",
    },
];


export const dataFAQ = [
    {
        question: "Who founded SolidJS?",
        answer: "Ryan Carniato is the founder of SolidJS. He emphasizes the importance of reactivity as the emerging universal language for user interfaces and discusses the transition from the component model to the reactivity model, highlighting the necessity for more detailed structures in contemporary frontend architectures.",
    },
    {
        question: "What is the primary use of SolidJS?",
        answer: "SolidJS is a declarative JavaScript library designed for the pragmatic and performance-oriented development of user interfaces and web applications.",
    },
    {
        question: "Does SolidJS outperform React?",
        answer: "When comparing SolidJS with React in 2024, it's clear that each framework offers different advantages. SolidJS is known for its superior raw rendering speed and smaller bundle sizes, whereas React is celebrated for its superior developer experience and the maturity of its ecosystem.",
    },
];
