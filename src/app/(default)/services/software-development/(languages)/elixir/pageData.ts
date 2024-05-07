import { FaChartLine, FaCloud, FaUserGroup } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Scalability and Concurrency",
        description: "Elixir's architecture, rooted in the Erlang VM, is designed for low-latency, distributed, and fault-tolerant systems. This makes it ideal for high-traffic web applications and services in sectors like telecommunications and banking, where handling large volumes of operations concurrently is crucial.",
    },
    {
        name: "Functional Programming Benefits",
        description: "With its functional programming paradigm, Elixir uses immutable state and an actor-based model which enhances the reliability and maintainability of applications. This approach minimizes side effects and makes the systems easier to manage as they scale.",
    },
    {
        name: "Enhanced Performance",
        description: "Leveraging the Erlang VM, Elixir provides superior performance for applications requiring high concurrency. This performance is crucial for businesses that rely on real-time data processing and need their systems to remain responsive under heavy load.",
    },
    {
        name: "Developer Efficiency and Syntax Familiarity",
        description: "Elixir's syntax is similar to Ruby, which simplifies the transition for developers and reduces the learning curve. This familiarity combined with powerful programming features accelerates development cycles and reduces time to market for new features.",
    },
    {
        name: "Robust Ecosystem",
        description: "The integration with Erlang's OTP framework and the availability of numerous libraries and tools streamline the development of resilient and scalable applications. Elixir's growing community further supports innovation and problem-solving through shared resources and expertise.",
    },
];

export const dataV2 = [
    {
        name: "Elixir Web Development",
        description: "Elixir coupled with Phoenix framework forms a powerful duo for building scalable and innovative web applications, catering to high-traffic demands with ease.",
        icon: LuAppWindow,
    },
    {
        name: "Elixir Consulting Services",
        description: "Providing strategic consulting services, including problem-solving, code reviews, and tailored solutions to enhance existing Elixir applications.",
        icon: FaChartLine,
    },
    {
        name: "Maintenance and Support",
        description: "Focused on maintaining and supporting Elixir applications, this service includes server monitoring, performance optimization, and usability improvements to ensure smooth operation.",
        icon: GrVmMaintenance,
    },
    {
        name: "Mobile App Development",
        description: "Utilizing technologies like Flutter and React Native, this service extends Elixir's capabilities to mobile applications, ensuring seamless performance across devices.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "Dedicated Development Team",
        description: "Known as the Strike Force, this service offers a dedicated team of Elixir developers to ensure the successful launch and execution of projects.",
        icon: FaUserGroup,
    },
    {
        name: "Cloud Application Development",
        description: "Specializing in deploying Elixir applications to cloud environments such as AWS, EC2, and Azure, ensuring scalable and secure cloud solutions.",
        icon: FaCloud,
    },
];

export const dataV3 = [
    {
        name: "Phoenix Framework and Phoenix LiveView",
        furtherList: [
            {
                name: "Phoenix Framework",
                description: "At the heart of Elixir’s web development capabilities lies the Phoenix Framework. Known for its efficiency in handling web projects, Phoenix offers features like real-time communication, channels, and seamless integration with databases.",
            },
            {
                name: "Phoenix LiveView",
                description: "This powerful library enables real-time user experiences without the need for writing JavaScript. With LiveView, developers can create interactive web applications that update in real-time as data changes, all while maintaining a server-rendered approach.",
            },
        ],
    },
    {
        name: "Nerves: Elixir for Embedded Systems",
        furtherList: [
            {
                name: "Nerves Project",
                description: "Elixir’s versatility extends beyond web development. The Nerves project focuses on embedded software development, allowing Elixir to run seamlessly on networked devices. This is especially valuable for IoT applications that require stable communication between devices and servers.",
            },
        ],
    },
    {
        name: "Elixir in AI and ML",
        furtherList: [
            {
                name: "Efficient Concurrency Model",
                description: "Elixir’s lightweight processes and message-passing concurrency model make it well-suited for handling large datasets and real-time data analysis in AI and machine learning applications.",
            },
            {
                name: "Fault Tolerance",
                description: "Elixir’s fault-tolerant design ensures that critical processes can recover gracefully from failures, making it reliable for processing complex AI workloads.",
            },
            {
                name: "Adoption by Major Companies",
                description: "Companies like Discord and Pinterest leverage Elixir’s features for scalability and reliability in high-traffic scenarios.",
            },
        ],
    },
    {
        name: "Impressive Tooling Capabilities",
        furtherList: [
            {
                name: "Dependency Management",
                description: "Elixir provides built-in tools for managing dependencies, ensuring smooth integration of third-party libraries.",
            },
            {
                name: "Code Compilation",
                description: "Elixir’s compiler efficiently translates code into bytecode for execution on the Erlang Virtual Machine (BEAM).",
            },
            {
                name: "Interactive REPL",
                description: "The interactive Read-Eval-Print Loop (REPL) allows developers to interactively test and experiment with code.",
            },
        ],
    },
];


export const dataFAQ = [
    {
        question: "What are the benefits of Elixir's architecture?",
        answer: "Elixir's architecture, rooted in the Erlang VM, is designed for low-latency, distributed, and fault-tolerant systems. This makes it ideal for high-traffic web applications and services in sectors like telecommunications and banking, where handling large volumes of operations concurrently is crucial.",
    },
    {
        question: "What are the advantages of functional programming in Elixir?",
        answer: "With its functional programming paradigm, Elixir uses immutable state and an actor-based model which enhances the reliability and maintainability of applications. This approach minimizes side effects and makes the systems easier to manage as they scale.",
    },
    {
        question: "How does Elixir provide enhanced performance?",
        answer: "Leveraging the Erlang VM, Elixir provides superior performance for applications requiring high concurrency. This performance is crucial for businesses that rely on real-time data processing and need their systems to remain responsive under heavy load.",
    },
    {
        question: "What is the developer efficiency and syntax familiarity in Elixir?",
        answer: "Elixir's syntax is similar to Ruby, which simplifies the transition for developers and reduces the learning curve. This familiarity combined with powerful programming features accelerates development cycles and reduces time to market for new features.",
    },
];
