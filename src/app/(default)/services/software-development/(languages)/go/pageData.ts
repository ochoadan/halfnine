import { AiFillApi } from "react-icons/ai";
import { FaCloud } from "react-icons/fa6";
import { IoTerminal } from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Increased Efficiency and Personalization",
        description: "Go's design allows for the development of software solutions that are both efficient and highly personalized to the client's business processes. This results in faster execution times and software that fits precisely with the user's requirements, enhancing overall productivity.",
    },
    {
        name: "Enhanced Security and Scalability",
        description: "With Go, custom software can be more secure and scalable. Go's strong typing and explicit error handling contribute to fewer security vulnerabilities, while its simplicity and robust standard library facilitate easier updates and scalability.",
    },
    {
        name: "Cost-Effectiveness Over Time",
        description: "While the initial investment in custom Go solutions might be higher than off-the-shelf software, the long-term savings are significant. Custom solutions require less frequent major updates and can be maintained with smaller, incremental changes that cost less over time.",
    },
    {
        name: "Superior Integration Capabilities",
        description: "Go's compatibility with other languages and technologies makes it an excellent choice for businesses looking to integrate their new custom software with existing systems, thereby protecting prior investments while adding new functionality.",
    },
    {
        name: "Independent of Vendor Lock-In",
        description: "Custom Go solutions provide businesses with independence from vendor lock-in, offering control over their technology environment. This independence also allows for customization that exactly meets business needs without compromises.",
    },
    {
        name: "Concurrency for High-Performance Applications",
        description: "Go's built-in support for concurrency allows businesses to handle multiple tasks simultaneously, making it ideal for applications that require high performance and responsiveness. This is particularly beneficial for companies dealing with large volumes of data or requiring real-time processing.",
    },
];

export const dataV2 = [
    {
        name: "Custom Web and Mobile App Development",
        description: "Offering tailored web and mobile applications using Go, ensuring high performance and scalability to meet specific business requirements.",
        icon: LuAppWindow,
    },
    {
        name: "Cloud-Native Applications",
        description: "Developing cloud-native applications designed for scalability and resilience, utilizing Go's efficient performance and concurrency features.",
        icon: FaCloud,
    },
    {
        name: "API and Microservices Development",
        description: "Creating robust API and microservices architectures that facilitate easier maintenance, updates, and scalability with Go.",
        icon: AiFillApi,
    },
    {
        name: "Modernization and Migration Services",
        description: "Assisting businesses in modernizing and migrating their existing systems to Go-based frameworks to enhance performance and reduce costs.",
        icon: TbTransfer,
    },
    {
        name: "Command-Line Interfaces (CLI)",
        description: "Building powerful command-line interfaces that enable efficient task automation and system management using Go.",
        icon: IoTerminal,
    },
    {
        name: "Custom Software Development",
        description: "Providing comprehensive custom software solutions, from initial design to deployment, tailored to the specific needs of businesses using Go.",
        icon: MdDashboardCustomize,
    },
];

export const dataV3 = [
    {
        name: "Companies Leveraging Go",
        description: "Major organizations like Google, Uber, Dropbox, and Docker have integrated Go into their software development processes, showcasing its robustness and adaptability. These companies have utilized Go to enhance various software solutions, proving its effectiveness in real-world applications.",
    },
    {
        name: "Go's Inspirational Roots",
        description: "Go draws inspiration from several programming languages including Algol, Pascal, C, and others, which have influenced its design to solve modern programming challenges effectively. This has made Go a practical choice for developers looking for a blend of efficiency and simplicity.",
    },
    {
        name: "Community and Adoption",
        description: "The Go community is vibrant and growing, with over half a million programmers. Esteemed companies such as Google, Docker, and Heroku actively use Go, contributing to its development and ecosystem. This widespread adoption underscores Go's reliability and the strong support it offers to developers.",
    },
    {
        name: "Architectural Features",
        description: "Go's architecture avoids pointer arithmetic, enhancing safety, and all externally scoped variables are capitalized, simplifying code readability and maintenance. These features contribute to Go's appeal as a secure and efficient programming language.",
    },
    {
        name: "Environment and Tools",
        description: "Go's environment is supported by variables like $GOPATH and $GOROOT that manage project workspaces and package storage, respectively. The go.mod file further aids in dependency management, streamlining project setups and maintenance.",
    },
    {
        name: "IDE Support and Resources",
        description: "While Go is not tied to a specific IDE, it is supported by popular text editors like Visual Studio Code through extensions, enhancing its accessibility for developers. This flexibility allows developers to choose tools that best fit their workflow, promoting efficiency and innovation.",
    },
    {
        name: "Influence on Software Development",
        description: "Go's influence extends to major projects and technologies such as Docker, Kubernetes, and Terraform, illustrating its capability to drive innovation across different domains of software development. This highlights Go's role in shaping the future of technology solutions.",
    },
];


export const dataFAQ = [
    {
        question: "What company created the Go programming language?",
        answer: "Go, also known as Golang, is an open source programming language that was developed at Google. It was created by Rob Pike, Ken Thomson, and Robert Griesemer, with the aim to facilitate the creation of concurrent and scalable software.",
    },
    {
        question: "What are the typical applications of Go?",
        answer: "Go is commonly used for developing cloud-based or server-side applications. It is also frequently employed for DevOps tasks and site reliability automation. Additionally, many developers use Go to create command-line tools due to its efficiency and simplicity.",
    },
    {
        question: "Would you classify Go as a high-level or low-level language?",
        answer: "Go is a high-level programming language that is statically typed and compiled. It was designed by Robert Griesemer, Rob Pike, and Ken Thompson at Google. While it shares some syntactical similarities with C, Go incorporates features like memory safety, garbage collection, structural typing, and CSP-style concurrency that are not typically found in low-level languages.",
    },
];
