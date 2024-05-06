import { FaTemperatureQuarter } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Enhanced Performance and Scalability",
        description: "Deno's support for TypeScript natively, without the need for transpilation, streamlines the development process, enhancing performance. The runtime environment also supports modern JavaScript features, reducing the likelihood of common coding errors and improving code quality. Additionally, Deno's efficient handling of dependencies via URLs, akin to Go, simplifies updates and maintenance, ensuring high performance and scalability as business needs grow.",
    },
    {
        name: "Comprehensive Security Measures",
        description: "Deno enhances application security through several built-in features. Integrity checking and the use of lock files prevent discrepancies between development and production environments, ensuring consistency and reliability. The runtime also isolates each application in a new process, providing robust defense mechanisms against potential threats. This isolation helps maintain a secure operational environment, crucial for handling sensitive or critical business operations.",
    },
    {
        name: "Customization and Flexibility",
        description: "The open-source nature of Deno provides businesses with the flexibility to tailor solutions to their specific requirements. Whether extending product functionality, integrating with existing systems, or developing new services, Deno's adaptable environment supports a wide range of custom solutions. This flexibility not only fosters innovation but also allows businesses to stay competitive by rapidly adapting to market changes or technological advancements.",
    },
    {
        name: "Streamlined Infrastructure Management",
        description: "Deno Subhosting and Cloud Prem solutions address common infrastructure management challenges, offering scalable options and real-time monitoring. These features enable businesses to efficiently manage their applications without worrying about underlying system complexities. With Deno, companies can focus on their core offerings while leaving the technical details to a reliable and secure platform.",
    },
];

export const dataV2 = [
    {
        name: "Web App Development",
        description: "Deno development companies specialize in creating scalable, secure, lightweight, and fast web applications. They focus on real-time apps, data streaming applications, and non-blocking architectures that are essential for audio and video encoding and broadcasting.",
        icon: LuAppWindow,
    },
    {
        name: "Game Development",
        description: "Leveraging Deno, developers can create engaging platform-friendly shooting games, augmented and virtual reality games, and NFT games, capitalizing on Deno's robust features for a seamless gaming experience.",
        icon: IoGameController,
    },
    {
        name: "Testing Services",
        description: "Comprehensive testing is integral to the Deno development process, ensuring applications perform flawlessly and provide a positive user experience. This includes both during and post-development testing phases.",
        icon: FaTemperatureQuarter,
    },
    {
        name: "Training and Education",
        description: "Deno experts provide extensive training through tutorial blog posts and webinars. These sessions cover the intricacies of programming in Deno and discuss the latest updates, helping developers stay at the forefront of technology.",
        icon: PiStudentBold,
    },
    {
        name: "Mobile App Development",
        description: "Utilizing Deno.js technology, developers build fast, scalable, and robust applications for iOS, IoT, and Android platforms, ensuring high performance across devices.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "Custom Deno Solution Development",
        description: "Offering services like Deno-based web development, migration from Node.js to Deno, and custom Deno plugin and module development, companies provide tailored solutions that meet specific client needs.",
        icon: MdDashboardCustomize,
    },
];

export const dataV3 = [
    {
        name: "Deno’s Technical Foundations",
        description: "Deno is built on the V8 engine and utilizes Rust for its runtime, ensuring high performance and security. Its support for TypeScript natively allows for type checking directly within the runtime, promoting improved code quality. Additionally, Deno simplifies project setup and dependency management by allowing modules to be imported directly from URLs.",
    },
    {
        name: "Challenges in Deno’s Ecosystem",
        description: "However, the ecosystem’s immaturity may lead to encounters with limited libraries and tools, potentially requiring more effort to implement platform-specific solutions. Some dependencies might also introduce platform-specific issues. Despite these challenges, Deno’s standard library, although not yet stable, covers a broad range of functionalities, and its built-in tools like the test runner, runtime inspector, formatter, and bundler reduce the need for external dependencies.",
    },
    {
        name: "Deno’s Support for npm and Innovative Features",
        description: "Deno also supports npm for third-party module management and has introduced innovative features like top-level await, which allows for asynchronous code execution without the need for wrapping in async functions. The adoption of browser APIs that do not require additional packages streamlines code and enhances efficiency.",
    },
    {
        name: "Community and Development Progress",
        description: "The community around Deno is growing, and with the release of Deno 1.42, there have been significant improvements in startup time and compatibility with Node and NPM. This version also supports JSR, a new package registry that simplifies publishing and consuming modules directly within Deno.",
    },
];


export const dataFAQ = [
    {
        question: "What exactly is Deno?",
        answer: "Deno is an open-source JavaScript runtime tailored for the modern web. It is designed to be easy to use and highly productive, with built-in support for TypeScript that requires no configuration. Deno stands out for its strong security features and comprehensive built-in toolset, making it a go-to choice for JavaScript development.",
    },
    {
        question: "Which organizations are currently utilizing Deno in their projects?",
        answer: "The answer to this question is not provided in the original input. However, various companies and individual developers are exploring and adopting Deno for its modern features and capabilities.",
    },
    {
        question: "Can you tell me who owns Deno?",
        answer: "Deno was created by Ryan Dahl, who is also known for creating Node.js. Unlike Node.js, which separates the runtime and package manager, Deno integrates both functionalities into a single executable.",
    },
    {
        question: "Is Deno still a relevant choice for developers today?",
        answer: "Yes, Deno remains relevant, with an active community of developers. However, it's important to note that the community is relatively small, and there is a limited number of Deno-specific packages available. Additionally, the compatibility layer for Node.js is not always dependable, which might pose challenges when using certain libraries or seeking support.",
    },
];
