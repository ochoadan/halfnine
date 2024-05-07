import { FaCloud, FaTowerBroadcast } from "react-icons/fa6";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

export const dataV1 = [
    {
        name: "Memory and Thread Safety",
        description: "Rust provides compile-time guarantees for thread safety and ownership semantics, minimizing common bugs found in other languages. Its borrow checker system ensures that developers handle memory safely and efficiently, significantly reducing the risks of memory leaks and data races.",
    },
    {
        name: "Performance and Efficiency",
        description: "Rust's zero-cost abstractions mean that high-level abstractions compile into low-level code without any runtime overhead, making it ideal for performance-critical applications. This feature, coupled with Rust's ability to run on multiple platforms and its support for inline documentation and benchmarks, enhances both developer productivity and application performance.",
    },
    {
        name: "Robust Ecosystem",
        description: "The Rust ecosystem is rich with libraries, tools, and frameworks that continue to grow, driven by an active and passionate community. This ecosystem supports a wide range of applications from web development with frameworks like Rocket and Actix, to embedded systems and IoT solutions.",
    },
    {
        name: "Safety and Security",
        description: "Rust's design minimizes unsafe code, which is crucial for developing secure applications. It is increasingly chosen for safety-critical systems across various industries, including those requiring cryptographic solutions and secure blockchain platforms. Rust's ability to ensure memory and type safety without sacrificing performance makes it a top choice for developing reliable, secure software solutions.",
    },
    // {
    //     name: "Community and Support",
    //     description: "Rust's community is known for being exceptionally welcoming, helpful, and driven towards continuous improvement of the language. This supportive environment not only fosters learning and development among new and experienced developers alike but also accelerates problem-solving and innovation within the ecosystem.",
    // },
];

export const dataV2 = [
    {
        name: "Custom Software Development",
        description: "Tailoring software solutions that leverage Rust's unique capabilities to meet specific business requirements, ensuring high performance and security.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Mobile and Web Application Development",
        description: "Utilizing Rust to build robust and efficient backend systems for mobile and web applications, enhancing user experience and reliability.",
        icon: LuAppWindow,
    },
    {
        name: "Startup Services",
        description: "Offering specialized Rust development services to startups, focusing on rapid prototyping and scalable solutions to accelerate market entry.",
        icon: HiMiniRocketLaunch,
    },
    {
        name: "Cloud Services",
        description: "Developing cloud-native applications using Rust to benefit from its safety features and concurrency support, optimizing cloud performance and cost.",
        icon: FaCloud,
    },
    {
        name: "Blockchain Solutions",
        description: "Creating secure and high-performance blockchain applications with Rust, suitable for industries requiring reliable cryptographic solutions.",
        icon: SiHiveBlockchain,
    },
    {
        name: "IoT Solutions",
        description: "Implementing Rust in the development of Internet of Things (IoT) devices and systems, ensuring safety and efficiency at the edge.",
        icon: FaTowerBroadcast,
    },
];

export const dataV3 = [
    {
        name: "Rustup",
        description: "Rustup, the toolchain installer and updater, plays a pivotal role in maintaining the efficiency of the Rust environment by facilitating the installation and updates of rustc and Cargo. This tool also manages multiple versions of Rust, enabling developers to switch seamlessly according to project requirements. The Rust release cycle is strategically rapid, with new updates every six weeks, maintaining backward compatibility and introducing new functionalities through stable, beta, and nightly channels.",
    },
    {
        name: "Tools and Frameworks",
        description: "The ecosystem is further enriched by an array of tools and frameworks designed to enhance the development experience. These include an ergonomic HTTP client for simplified communication over networks, a runtime for creating reliable, asynchronous applications, and powerful web frameworks that prioritize ease of use, safety, and speed. Additionally, Rust's ORM and query builder facilitate type-safe and concise database interactions, significantly reducing runtime errors and security risks like SQL injection.",
    },
    {
        name: "Rust Foundation and Community",
        description: "Supporting the backbone of this ecosystem is the Rust Foundation, established in 2021 by major industry players to ensure the language's robust growth and sustainability. This foundation underscores the community's commitment to the future of Rust, complemented by a significant increase in the number of Rust developers, which stood at 2.2 million in Q1 2022. The community is well-known for its elaborate documentation, supportive nature, and rapid growth, making Rust an increasingly preferred choice for developers worldwide.",
    },
];


export const dataFAQ = [
    {
        question: "Why does the US Goverment recommend Rust over C and C++?",
        answer: "The US Government recommends Rust over C and C++ due to Rust's enhanced safety features, such as memory safety and thread safety, which significantly reduce the risks of common vulnerabilities like buffer overflows and null pointer dereferences. Rust's strict compiler checks and ownership system make it a more secure choice for developing critical software systems.",
    },
    {
        question: "Do any major companies utilize Rust in their operations?",
        answer: "Yes, several large companies use Rust. For example, 360dialog employs Rust for service consumers, Amazon AWS appreciates Rust for its performance in infrastructure-level networking and systems software, and Atlassian uses Rust to analyze petabytes of source code.",
    },
    {
        question: "Is there a growing market for developers skilled in Rust?",
        answer: "Indeed, there is a growing demand for developers with expertise in Rust. As the need for Rust jobs increases, individuals with knowledge in Rust are likely to encounter numerous job opportunities in the near future.",
    },
    {
        question: "Why is Rust considered a good choice for software development?",
        answer: "Rust is favored in software development for its ability to provide enhanced safety, impressive speed, and strong support for concurrency, which allows for parallel execution of computations. It excels in performance, safety, and memory management, making it an attractive option for programming tasks.",
    },
];
