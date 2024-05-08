import { FaChartLine, FaRegFileCode, FaHammer } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { GrCertificate } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Safety, Reliability, and Security",
        description: "Ada’s design prioritizes safety and reliability, making it essential for sectors like aviation, healthcare, and defense. It also emphasizes safety and security with strong type checking and support for static analysis tools, crucial for developing dependable and secure software.",
    },
    {
        name: "Scalability, Maintainability, and Portability",
        description: "Ada excels in managing large-scale projects, simplifying updates, and system expansions, thereby ensuring long-term maintainability. The standardization focus of Ada ensures that programs can be seamlessly ported across different hardware and software platforms.",
    },
    {
        name: "Concurrency and Real-Time Systems",
        description: "Ada’s built-in support for concurrent programming allows efficient utilization of multi-core processors. It is specifically designed for real-time applications, providing features that ensure timely and predictable behavior in critical systems.",
    },
    {
        name: "Object-Oriented Programming and Strong Typing",
        description: "Ada supports advanced object-oriented programming, which facilitates better code organization and reuse. The language’s strong typing system prevents common errors, ensuring that variables are consistently and correctly utilized throughout the application.",
    },
    {
        name: "Design by Contract and Standard Library",
        description: "Ada’s design by contract approach specifies clear contracts for software components, which enforce code correctness and robustness. A comprehensive standard library speeds up development and enhances code quality with well-tested routines and utilities readily available for common programming tasks.",
    },
    {
        name: "Interfacing with C and SPARK for Cybersecurity",
        description: "The ability to interface with C allows for the integration of existing C codebases, facilitating smoother transitions and interoperability within diverse systems. Ada’s subset, SPARK, supports automated formal verification, providing robust tools for addressing cybersecurity challenges effectively.",
    },
];

export const dataV2 = [
    {
        name: "Certification & Qualification",
        description: "AdaCore enhances software reliability by assisting organizations in achieving necessary certifications and qualifications for safety-critical applications, ensuring compliance with industry standards.",
        icon: GrCertificate,
    },
    {
        name: "Mentorship & Training",
        description: "Through expert mentorship and comprehensive training programs, AdaCore empowers teams to effectively utilize Ada technologies, boosting their productivity and software quality.",
        icon: PiStudentBold,
    },
    {
        name: "Consulting Services",
        description: "AdaCore provides tailored consulting services, helping clients navigate complex project requirements and optimize their Ada implementations for enhanced performance and security.",
        icon: FaChartLine,
    },
    {
        name: "GNAT Pro Development Environment",
        description: "Offering a robust Ada development environment, GNAT Pro supports various platforms and features essential for developing high-integrity applications.",
        icon: FaRegFileCode,
    },
    {
        name: "Static and Dynamic Analysis Tools",
        description: "AdaCore's analysis suites provide essential tools for both static and dynamic analysis, aiding in the early detection of potential defects and vulnerabilities in the software development lifecycle.",
        icon: FaHammer,
    },
    {
        name: "SPARK Pro Verification",
        description: "SPARK Pro offers advanced formal verification tools that facilitate the development of highly secure and dependable software systems, crucial for high-stakes industries.",
        icon: GoChecklist,
    },
];

export const dataV3 = [
    {
        name: "GNAT Dynamic and Static Analysis Suites",
        furtherList: [
            {
                name: "Dynamic Analysis Tools",
                description: "These include GNATcoverage for thorough code coverage analysis, GNATtest for automated unit testing, and GNATfuzz for advanced fuzz testing, enhancing the reliability and security of software applications.",
            },
            {
                name: "Static Analysis Tools",
                description: "The suite offers tools such as Defects and Vulnerability Analysis for pinpointing security vulnerabilities, Coding Standard Verification to ensure compliance with coding norms, and Metric Computations that aid in maintaining high code quality metrics.",
            },
        ],
    },
    {
        name: "SPARK Pro for Critical Systems",
        description: "SPARK Pro stands out as a premier tool for developing critical systems. It offers a range of features including real-world application demonstrations, a data recording and replay tool, and flexible licensing terms, all designed to bolster the development of dependable systems.",
    },
    { description: "AdaCore's commitment to serving diverse sectors such as Avionics, Automotive, and Medical is evident through its tailored solutions that meet the unique demands of each industry. The ongoing evolution of the Ada language standard, with periodic revisions and enhancements, ensures that the ecosystem remains relevant and capable of addressing the complexities of modern real-time systems.", },
    { description: "The Ada ecosystem not only supports the technical aspects of development but also emphasizes the economic advantages of using Ada. Studies have shown that Ada can lead to significant cost savings and a lower incidence of bugs compared to other languages like C, making it a financially viable option for organizations aiming to optimize their software development practices.", },
];


export const dataFAQ = [
    {
        question: "What are the key features of Ada programming language?",
        answer: "The key features of Ada programming language include safety, reliability, and security; scalability, maintainability, and portability; concurrency and real-time systems; object-oriented programming and strong typing; design by contract and standard library; and interfacing with C and SPARK for cybersecurity.",
    },
    {
        question: "What are the advantages of using Ada programming language?",
        answer: "The advantages of using Ada programming language include enhanced software reliability, comprehensive training and mentorship, tailored consulting services, robust development environment, advanced analysis tools, and support for developing highly secure and dependable software systems.",
    },
    {
        question: "What are the ongoing developments in the Ada ecosystem?",
        answer: "The Ada language standard undergoes periodic revisions and enhancements to address the complexities of modern real-time systems. This ensures that the Ada ecosystem remains relevant and capable of meeting the evolving demands of the industry.",
    },
];
