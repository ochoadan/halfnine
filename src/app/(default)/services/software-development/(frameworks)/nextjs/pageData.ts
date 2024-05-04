import { AiFillApi } from "react-icons/ai";
import { FaCartShopping, FaGlobe, FaServer, FaUserAstronaut } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { TbTopologyComplex } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Enhanced Performance and Scalability",
        furtherList: [
            {
                name: "Serverless Architecture",
                description: "Next.js facilitates backend tasks using serverless functions, which simplifies server management and ensures optimal resource utilization. This architecture automatically scales according to the application's needs, thereby enhancing performance without the overhead of managing physical servers.",
            },
            {
                name: "Automatic Image Optimization",
                description: "With built-in features for image handling, Next.js automatically optimizes images by selecting the most suitable format and size based on the user's device, significantly improving load times and performance.",
            },
        ],
    },
    {
        name: "Developer-Friendly Features",
        furtherList: [
            {
                name: "Hot Module Replacement",
                description: "This feature allows developers to update code in real-time without needing a full page reload, making the development process faster and more efficient.",
            },
            {
                name: "Built-in Error Handling",
                description: "Developers can create custom error pages that maintain a consistent user experience even when unexpected issues arise.",
            },
        ],
    },
    {
        name: "SEO and User Experience",
        furtherList: [
            {
                name: "SEO-Friendly",
                description: "The framework's support for SSR and Static Site Generation (SSG) enhances SEO, making web pages more discoverable by search engines. This is due to faster loading times and better indexing of dynamically generated content.",
            },
            {
                name: "SSG Benefits",
                description: "By pre-rendering pages at build time, SSG reduces server load and enhances content delivery speed, which contributes to a smoother user experience.",
            },
        ],
    },
    {
        name: "Advanced Routing and Customization",
        furtherList: [
            {
                name: "File-based Routing",
                description: "Next.js maps URLs directly to files in the project’s directory, simplifying the routing process. This direct mapping allows for easier and more effective file routing, where each file correlates to a specific route.",
            },
            {
                name: "Customization Options",
                description: "The framework offers extensive customization capabilities through custom routing, API routes, and integration with external libraries, allowing developers to tailor applications to specific business requirements.",
            },
        ],
    },
];

export const dataV2 = [
    {
        name: "Web Application Development",
        description: "Leveraging Next.js for building dynamic, server-rendered web applications that offer enhanced performance and user experience.",
        icon: LuAppWindow,
    },
    {
        name: "E-commerce Solutions",
        description: "Crafting tailored e-commerce platforms with Next.js, integrating features like dynamic product pages and secure checkout processes.",
        icon: FaCartShopping,
    },
    {
        name: "REST API Development",
        description: "Creating robust RESTful services that facilitate seamless data exchange and integration with other systems or third-party services.",
        icon: AiFillApi,
    },
    {
        name: "Server-Side API Integration",
        description: "Implementing server-side logic to connect with databases and external APIs, enhancing app functionality and data accessibility.",
        icon: AiFillApi,
    },
    {
        name: "Interactive UI Components",
        description: "Utilizing Client Components for creating responsive and interactive user interfaces that enhance user engagement.",
        icon: MdDashboard,
    },
    {
        name: "Custom UX Solutions",
        description: "Designing user experiences specifically tailored to meet the needs of the target audience, ensuring high usability and satisfaction.",
        icon: FaUserAstronaut,
    },
    {
        name: "Global State Management",
        description: "Implementing the Context API for managing global state within Next.js applications, promoting easier state management across components.",
        icon: FaGlobe,
    },
    {
        name: "Complex State Handling",
        description: "Utilizing the useReducer hook for more complex state scenarios, aiding in maintaining cleaner and more manageable code.",
        icon: TbTopologyComplex,
    },
    {
        name: "Server-Side Rendering (SSR)",
        description: "Enhancing application performance through SSR, which improves SEO and load times by pre-rendering pages on the server.",
        icon: FaServer,
    },
];

export const dataV3 = [
    {
        name: "User Interface and Experience",
        description: "Next.js supports dynamic user interface development, which is crucial for creating engaging web applications. It integrates with popular frontend frameworks like React and libraries such as Tailwind CSS and Chakra UI, allowing developers to craft aesthetically pleasing and highly functional user interfaces.",
    },
    {
        name: "Routing and Data Management",
        description: "The App Router in Next.js offers extensive features such as Nested Routes & Layouts and Simplified Data Fetching, which streamline the creation of complex applications. These features are complemented by Server Actions that allow data mutations on the server side, thereby minimizing client-side loads.",
    },
    {
        name: "Performance and Scalability",
        description: "With features like Streaming & Suspense, Next.js optimizes data rendering, making it possible to handle large-scale applications efficiently. Its ability to support incremental static regeneration and server-side rendering enhances SEO, making the applications not only performant but also more discoverable.",
    },
    {
        name: "Development Experience",
        description: "Next.js is designed to improve the developer experience significantly. The recent stability improvements in the App Router and the introduction of Turbopack and Server Actions in version 13.4 highlight its commitment to providing developers with powerful tools that simplify development processes and enhance productivity.",
    },
];


export const dataFAQ = [
    {
        question: "Does Next.js include a built-in server?",
        answer: "Yes, Next.js comes with its own server, which can be started using the next start command.",
    },
    {
        question: "Is Next.js a relevant framework for modern web development?",
        answer: "Absolutely, Next.js is known for enhancing user experiences, providing exceptional performance, and supporting fast development of new features. It's a preferred choice among large companies like Netflix and Uber, as well as various startups.",
    },
    {
        question: "Can Next.js be used for large-scale projects?",
        answer: "Next.js is versatile and can be used for any size of project, from small and simple to large and complex. It provides an efficient development process for smaller projects and includes robust tools for handling complexity in bigger applications.",
    },
    {
        question: "Is Next.js intended to replace Express.js?",
        answer: "No, Next.js is not meant to replace Express.js. They are distinct frameworks serving different purposes in web application development.",
    },
];
