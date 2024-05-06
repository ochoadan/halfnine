import { FaBrain, FaChartLine, FaTowerBroadcast } from "react-icons/fa6";
import { MdDashboardCustomize, MdDeveloperMode } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Improved Productivity and Efficiency",
        furtherList: [
            {
                name: "Advanced Tooling",
                description: "TypeScript's integrated tooling allows for automatic code refactoring and error checking, which speeds up the development cycle and reduces bugs.",
            },
            {
                name: "Static Typing",
                description: "By enabling developers to type their code, TypeScript helps catch errors early in the development process, leading to more robust and error-free code.",
            },
            {
                name: "Faster Development",
                description: "The ability to catch errors early and the advanced tooling support can speed up the development process by 2-3 times compared to traditional JavaScript.",
            },
        ],
    },
    {
        name: "Enhanced Code Quality and Maintainability",
        furtherList: [
            {
                name: "Better Code Organization",
                description: "TypeScript supports modern programming features such as classes and interfaces, which help in organizing code better and making it easier to read and maintain.",
            },
            {
                name: "Cross-platform Compatibility",
                description: "TypeScript code can be compiled to run on any browser, any host, and any OS, which greatly enhances its versatility.",
            },
            {
                name: "Type Safety",
                description: "TypeScript provides optional static typing and type inference which ensures more predictable code and enhances code quality and maintainability.",
            },
        ],
    },
    {
        name: "Scalability and Collaboration",
        furtherList: [
            {
                name: "Large Codebases",
                description: "TypeScript's features are designed to manage large codebases, making it easier for teams to maintain and scale their projects.",
            },
            {
                name: "Improved Collaboration",
                description: "Static typing and type safety features ensure that developers can work more cohesively on shared codebases, reducing the chances of conflicts and errors.",
            },
            {
                name: "Integration with Existing Technologies",
                description: "TypeScript is highly compatible with existing JavaScript libraries and frameworks, which allows for seamless integration and migration of projects.",
            },
        ],
    },
];

export const dataV2 = [
    {
        name: "TypeScript Consulting and Training",
        description: "Offering expert guidance and educational services to help teams adopt and excel in TypeScript usage.",
        icon: FaChartLine,
    },
    {
        name: "Custom Web Application Development",
        description: "Creating tailored web applications using TypeScript to meet specific business requirements and enhance user experience.",
        icon: MdDashboardCustomize,
    },
    {
        name: "TypeScript Migration Services",
        description: "Assisting businesses in transitioning their existing JavaScript projects to TypeScript for improved scalability and maintainability.",
        icon: TbTransfer,
    },
    {
        name: "AI & Machine Learning Development",
        description: "Developing advanced AI and ML solutions with TypeScript to drive innovation and efficiency in operations.",
        icon: FaBrain,
    },
    {
        name: "IoT Application Development",
        description: "Crafting connected device applications using TypeScript to enhance functionality and user engagement in the IoT space.",
        icon: FaTowerBroadcast,
    },
    {
        name: "Full-Stack TypeScript Development",
        description: "Providing comprehensive front-end and back-end development services using TypeScript to build robust and efficient applications.",
        icon: MdDeveloperMode,
    },
];

export const dataV3 = [
    {
        name: "Compatibility with Existing JavaScript Projects",
        description: "TypeScript enhances JavaScript projects by allowing developers to introduce TypeScript files alongside existing JavaScript files. This feature facilitates a seamless transition and integration, enabling teams to gradually adopt TypeScript without disrupting their current workflows.",
    },
    {
        name: "Static vs. Dynamic Typing",
        description: "TypeScript's static typing system contrasts sharply with JavaScript's dynamic typing. This system allows developers to define types for variables, parameters, and return values, significantly reducing runtime errors and enhancing code reliability and maintainability.",
    },
    {
        name: "Tooling and Developer Experience",
        description: "The TypeScript ecosystem is rich with advanced tooling options that boost developer productivity. Features such as auto-completion, code navigation, and refactoring tools significantly improve the development experience, making TypeScript a preferred choice for many developers.",
    },
    {
        name: "Code Organization and Maintenance",
        description: "TypeScript supports explicit type annotations and interfaces, which improve code readability and maintainability. Its module system promotes better encapsulation and modularity, essential for managing large codebases and enhancing team collaboration.",
    },
    {
        name: "Seamless Integration with JavaScript",
        description: "Thanks to TypeScript's compatibility with the JavaScript ecosystem, developers can easily integrate it with existing JavaScript codebases. This compatibility ensures that adopting TypeScript is a smooth process, leveraging existing assets without the need for extensive rewrites.",
    },
    {
        name: "Industry Adoption and Future-Proofing",
        description: "TypeScript's growing popularity among major companies underscores its viability and sustainability. Adopting TypeScript means investing in a technology that is widely supported and future-proof, ensuring that the projects will continue to evolve and be supported over time.",
    },
    {
        name: "Challenges and Learning Curve",
        description: "While TypeScript offers numerous advantages, it also presents challenges such as the need to manage additional tooling and configurations, and a learning curve associated with understanding its static typing system. However, the benefits often outweigh these challenges, making TypeScript a robust choice for enterprise-level applications.",
    },
    {
        name: "Community Support and Resources",
        description: "The TypeScript community actively contributes to a vast repository of type definitions, available through DefinitelyTyped. This resource enhances TypeScript’s utility by providing type information for existing JavaScript libraries, facilitating easier integration and usage within TypeScript projects.",
    },
];


export const dataFAQ = [
    {
        question: "What is TypeScript?",
        answer: "TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, interfaces, and other modern programming features to JavaScript, making it more robust and maintainable.",
    },
    {
        question: "What are the benefits of using TypeScript?",
        answer: "Some benefits of using TypeScript include improved productivity and efficiency, enhanced code quality and maintainability, scalability and collaboration, compatibility with existing JavaScript projects, and a rich ecosystem of advanced tooling options.",
    },
    {
        question: "How does TypeScript improve code quality?",
        answer: "TypeScript improves code quality by enabling developers to catch errors early through static typing and type inference. It also supports better code organization, type safety, and explicit type annotations, leading to more predictable and maintainable code.",
    },
];
