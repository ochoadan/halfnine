import { FaRegFileCode, FaLifeRing } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { IoTerminal } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Maturity and Reliability",
        description: "Erlang has been in production for decades, proving its reliability in various systems. Its maturity ensures that it can handle complex operations smoothly, making it a dependable choice for critical applications.",
    },
    {
        name: "Concurrency and Fault Tolerance",
        description: "The language excels in concurrency, utilizing the Actor Model to manage millions of tiny processes that operate without interfering with each other. This approach significantly enhances the fault tolerance of systems, as the failure of one process does not impact the stability of others.",
    },
    {
        name: "Efficiency and Scalability",
        description: "Erlang's lightweight processes and the ability to scale seamlessly across multiple CPUs contribute to its efficiency. It supports the development of systems that can handle growing user demands without the need for extensive hardware upgrades.",
    },
    {
        name: "High Availability and Low Latency",
        description: "The design of Erlang is focused on high availability, with features like hot code swapping, which allows for updates without downtime. Its use in telecom systems has proven its capability in low latency binary data streaming, essential for real-time applications.",
    },
    {
        name: "Simplified Maintenance and Security",
        description: "With fewer lines of code compared to equivalent C programs, Erlang simplifies maintenance and reduces the risk of vulnerabilities. Its process isolation and message-passing model also enhance the security of applications by limiting the scope of process failures.",
    },
    {
        name: "Diverse Application Spectrum",
        description: "From telecommunications to e-commerce and gaming, Erlang's robustness and performance make it suitable for a wide range of applications. Its ability to handle high traffic and execute tasks efficiently makes it ideal for real-time and high-performance solutions.",
    },
];

export const dataV2 = [
    {
        name: "Consulting and Development",
        description: "Erlang development companies offer comprehensive consulting and custom software development services, ensuring solutions are perfectly tailored to meet specific business needs.",
        icon: FaRegFileCode,
    },
    {
        name: "IoT Solutions",
        description: "Specializing in Internet of Things (IoT) infrastructure development, these services facilitate the creation of reliable and scalable IoT systems.",
        icon: IoTerminal,
    },
    {
        name: "Support and Training",
        description: "Providing ongoing support and training services to help businesses effectively implement and manage Erlang-based systems.",
        icon: FaLifeRing,
    },
    {
        name: "Code and Architecture Reviews",
        description: "Offering expert reviews of code and system architecture to enhance performance, security, and scalability.",
        icon: GoChecklist,
    },
    {
        name: "Security Audits",
        description: "Conducting thorough security audits to ensure that Erlang applications are secure from potential threats.",
        icon: MdOutlineSecurity,
    },
    {
        name: "Educational Services",
        description: "Offering a range of educational services aimed at deepening understanding of Erlang, from basic principles to advanced functionalities.",
        icon: PiStudentBold,
    },
];

export const dataV3 = [
    {
        name: "Erlang Ecosystem Foundation",
        description: "The Erlang Ecosystem Foundation is a non-profit organization that supports real-time application development using Erlang and other BEAM technologies. It has over 1,000 members, including industry leaders, and sponsors Working Groups to address challenges in documentation, interoperability, and performance.",
    },
    {
        name: "Technological Advancement",
        description: "The Erlang ecosystem is committed to staying at the forefront of technological advancement, ensuring that it remains a versatile tool for industries that require high reliability and concurrent processing capabilities.",
    },
    {
        name: "Community Engagement",
        description: "Community engagement initiatives like Elixir Meetup and Code BEAM Lite help spread knowledge and encourage the use of Erlang among developers.",
    },
    {
        name: "Broad Application of Erlang",
        description: "Erlang's capabilities extend beyond the telecom industry. It is effectively applied in IoT, blockchain, gaming, and other domains, making it a versatile choice for building fault-tolerant, scalable, and efficient real-time systems.",
    },
];


export const dataFAQ = [
    {
        question: "What are the advantages of using Erlang?",
        answer: "Erlang offers advantages such as maturity and reliability, concurrency and fault tolerance, efficiency and scalability, high availability and low latency, simplified maintenance and security, and a diverse application spectrum.",
    },
    {
        question: "What services are offered by Erlang development companies?",
        answer: "Erlang development companies offer consulting and development services, IoT solutions, support and training, code and architecture reviews, security audits, and educational services.",
    },
    {
        question: "What is the Erlang Ecosystem Foundation?",
        answer: "The Erlang Ecosystem Foundation is a non-profit organization that supports real-time application development using Erlang and other BEAM technologies. It sponsors Working Groups to address challenges in documentation, interoperability, and performance.",
    },
];
