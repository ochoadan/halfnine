import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { FaUserPlus } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Enhanced Performance and Efficiency",
        description: "Blazor's ability to run on WebAssembly means applications execute at near-native speed, drastically enhancing the user experience. This is crucial for performance-intensive applications such as video games and augmented reality, where smooth and responsive interactions are essential.",
    },
    {
        name: "Simplified Development Process",
        description: "With Blazor, developers can write both client and server-side code in C#, reducing the complexity and time involved in learning new languages. This uniformity allows for a more streamlined development process, quicker iterations, and more consistent codebases.",
    },
    {
        name: "Comprehensive Security",
        description: "Blazor Server's architecture keeps critical data and business logic on the server side, minimizing exposure to security risks. Additionally, the robust .NET ecosystem provides various built-in security features, further safeguarding applications.",
    },
    {
        name: "Cost-Effective Development",
        description: "By enabling code reuse between the client and server sides, Blazor reduces the overall development effort. This, combined with the decreased need for different language expertise, results in significant cost savings.",
    },
    {
        name: "Seamless Integration with .NET",
        description: "As a part of the .NET framework, Blazor allows developers to easily integrate with other .NET tools and libraries, enhancing functionality and speeding up the development process without the need to switch between different environments.",
    },
    {
        name: "Offline Capabilities and Broad Accessibility",
        description: "Blazor WebAssembly supports offline functionality and can be deployed as a Progressive Web App, ensuring that applications are accessible even without a constant internet connection. Additionally, applications are compatible across major browsers, increasing reach and user engagement.",
    },
];

export const dataV2 = [
    {
        name: "Blazor App Development",
        description: "Offering comprehensive Blazor app development services to build robust web applications that leverage the power of Blazor WebAssembly and Blazor Server for seamless, interactive user experiences.",
        icon: LuAppWindow,
    },
    {
        name: "Blazor Integration Services",
        description: "Providing Blazor integration services to ensure your existing applications can seamlessly incorporate Blazor technology, enhancing functionality and user interface without disrupting current operations.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "Web App Development Consulting",
        description: "Expert consulting services in web app development, guiding businesses through the intricacies of Blazor implementation, from strategy formulation to execution, ensuring alignment with business goals.",
        icon: LuAppWindow,
    },
    {
        name: "Blazor MAUI Development",
        description: "Utilizing Blazor MAUI to create cross-platform mobile applications that maintain the consistency and functionality of your web applications on mobile devices.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "Custom Software Solutions",
        description: "Tailored software solutions using Blazor, designed to meet specific client needs, ensuring high performance, scalability, and integration capabilities.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Outsourcing Blazor Development",
        description: "Offering outsourcing services for Blazor development, providing access to specialized skills and resources that enhance your project capabilities without the need for in-house expertise.",
        icon: FaUserPlus,
    },
];

export const dataV3 = [
    {
        name: "Blazor Server",
        description: "Blazor Server operates by hosting Razor components on the server within an ASP.NET Core application. It handles UI updates and interactivity over a SignalR connection, which enables real-time web functionality without continuous page reloading. This model is particularly beneficial for applications where immediate interaction with the server is crucial.",
    },
    {
        name: "Blazor WebAssembly",
        description: "Conversely, Blazor WebAssembly allows applications to run directly in the browser using WebAssembly. It supports building Progressive Web Apps (PWA) that operate offline and integrate smoothly with the native OS. This model is ideal for applications requiring client-side operations without server-side dependency.",
    },
    {
        name: "Hybrid and United Models",
        description: "Blazor also extends into hybrid applications with Blazor Hybrid, combining web and native app technologies. Blazor United, a newer model, merges Blazor Server and WebAssembly, providing flexibility in choosing rendering methods per component.",
    },
    {
        name: "Component-Based Architecture",
        description: "At the core of Blazor's productivity are its components. These are reusable, distributable C# classes that handle rendering logic, user interactions, and can be nested or reused across different parts of an application or even across different applications.",
    },
    {
        name: "Interoperability and Integration",
        description: "Blazor ensures seamless integration with the extensive .NET ecosystem, facilitating access to a myriad of libraries and tools. Its interoperability with JavaScript allows components to utilize any library or API accessible via JavaScript, enhancing functionality without limiting developers to .NET capabilities alone.",
    },
    {
        name: "Development Tools and Resources",
        description: "Blazor's integration with development tools like Visual Studio provides an enriched environment for debugging and building applications. Microsoft's commitment to supporting developers is evident through resources like Microsoft Learn, offering tutorials and guides to streamline the learning process.",
    },
];


export const dataFAQ = [
    {
        question: "What are some notable companies that utilize Blazor in their operations?",
        answer: "Several enterprises have adopted Blazor in their technology frameworks, including Scopeland Technology GmbH, Objectivity Software Development, Weland Solutions AB, PokitPal, FinTech, workspace, Pernod Ricard, and Hetosoft Sistemas.",
    },
    {
        question: "Has Blazor been gaining traction in the web development community?",
        answer: "Yes, since its introduction in 2018, Blazor has been rapidly gaining popularity. It's a cutting-edge web development framework that allows developers to create web applications using C# and HTML, known for its efficiency and productive programming model.",
    },
    {
        question: "Are there any drawbacks to using Blazor, particularly on the server-side?",
        answer: "One of the main drawbacks of Blazor when used on the server-side is its impact on scalability. This is because server-side Blazor applications rely on SignalR connections to manage events, and the number of events that can be processed from the client side via these connections is limited.",
    },
    {
        question: "Who is the proprietor of the Blazor technology?",
        answer: "Blazor is an open-source project with its source code managed by The .NET Foundation, a non-profit organization established to support open-source initiatives related to the .NET framework.",
    },
];
