import { AiFillApi } from "react-icons/ai";
import { FaLifeRing, FaRegFileCode } from "react-icons/fa6";
import { GiSpeedometer } from "react-icons/gi";
import { MdDashboardCustomize } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Performance Advantage",
        description: "Fastify’s renowned performance is a key benefit. It consistently outperforms traditional frameworks like Express.js, handling more requests per second with lower latency, which is crucial for businesses aiming for efficiency and scalability.",
    },
    {
        name: "Faster Development Times",
        description: "Fastify’s architecture promotes faster development times through its extensive plugin system and built-in features like automatic request and response validation. This not only speeds up the development process but also enhances the reliability and security of applications.",
    },
    {
        name: "Streamlined Maintenance",
        description: "Maintenance is streamlined thanks to Fastify’s low overhead and minimalistic design. The framework’s support for modern JavaScript features, including asynchronous programming and JSON Schema for route validation, simplifies the upkeep of complex applications.",
    },
    {
        name: "Flexibility and Adaptability",
        description: "Fastify’s flexibility in supporting TypeScript and integration with technologies like AWS Lambda and Docker makes it an adaptable choice for various development scenarios. This adaptability ensures that Fastify-based applications can grow with the evolving needs of businesses without requiring significant refactoring.",
    },
];

export const dataV2 = [
    {
        name: "Custom Fastify Application Development",
        description: "Our team specializes in developing bespoke Fastify applications tailored to meet your specific business requirements, ensuring a solution that integrates seamlessly with your existing systems and processes.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Fastify API Development and Integration",
        description: "We provide comprehensive API development services using Fastify, designed to offer high performance and low latency, enabling your applications to communicate efficiently with various services and databases.",
        icon: AiFillApi,
    },
    {
        name: "Fastify Plugin Development",
        description: "Leverage our expertise in creating custom Fastify plugins that extend the functionality of your applications, enhancing performance and scalability without compromising the system's stability.",
        icon: FaRegFileCode,
    },
    {
        name: "Fastify Performance Optimization",
        description: "We focus on optimizing your Fastify applications to handle high traffic and data loads effectively, ensuring your applications run smoothly under all conditions.",
        icon: GiSpeedometer,
    },
    {
        name: "Fastify Migration Services",
        description: "Our services include migrating your existing web applications to Fastify, allowing you to benefit from the framework's superior performance and efficiency with minimal downtime.",
        icon: TbTransfer,
    },
    {
        name: "Fastify Support and Maintenance",
        description: "We offer ongoing support and maintenance for Fastify applications, ensuring they remain up-to-date with the latest security patches and performance improvements, keeping your business operations running without interruption.",
        icon: FaLifeRing,
    },
];

export const dataV3 = [
    {
        name: "Core and Community Plugins",
        description: "The Fastify ecosystem is a vibrant and dynamic network comprising both Core and Community plugins, each playing a crucial role in enhancing the framework’s functionality.",
        furtherList: [
            {
                name: "Core Plugins",
                description: "Core plugins, maintained directly by the Fastify team, include essential tools like @fastify/accepts, @fastify/auth, and @fastify/autoload, which ensure the framework operates smoothly and efficiently. These plugins are fundamental for tasks such as authentication, content negotiation, and automatic loading of plugins.",
            },
            {
                name: "Community Plugins",
                description: "On the other hand, the Community plugins, supported and maintained by the broader Fastify community, address more specific or unique needs. Examples include @applicazza/fastify-nextjs for server-side rendering with Next.js, and @coobaha/typed-fastify which provides enhanced TypeScript support. These plugins not only extend Fastify’s capabilities but also encourage community engagement and innovation.",
            },
        ],
    },
    {
        name: "Fastify’s Plugin-Based Architecture",
        description: "Fastify’s commitment to performance and scalability is evident through its plugin-based architecture. This design allows for high reusability and encapsulation, which in turn leads to enhanced performance. Plugins in Fastify are designed to tackle everything from general-purpose development needs to more focused areas such as data storage, microservices, and server-side rendering.",
    },
    {
        name: "Fastify’s Latest Version: v4.26.x",
        description: "Moreover, the latest version of Fastify, v4.26.x, brings together all these features under a well-documented and actively maintained umbrella, ensuring developers have access to up-to-date and robust tools for building modern web applications. This ongoing development and support echo Fastify’s move towards a microservice-friendly environment, stepping away from monolithic architectures to offer more flexible and scalable solutions.",
    },
];


export const dataFAQ = [
    {
        question: "What is the primary purpose of Fastify?",
        answer: "Fastify is a web framework designed to enhance the developer experience by minimizing overhead and offering a robust plugin architecture. It takes inspiration from Hapi and Express and is recognized for its impressive speed, making it one of the quickest web frameworks available.",
    },
    {
        question: "Should I consider using Fastify for my project?",
        answer: "Fastify is a compelling choice if you prioritize performance and efficiency, as well as built-in features like validation and serialization. While Express boasts stability, extensive resources, and a large community, Fastify offers a faster and more efficient alternative for certain use cases.",
    },
    {
        question: "How does Fastify compare to Express 5 in terms of functionality and performance?",
        answer: "Fastify matches Express 5 in terms of functionality and is inspired by both Express and Hapi. What sets Fastify apart is its claim of superior speed, enhanced developer experience, and greater flexibility. According to tests presented by Twena-Stern, Fastify has proven to live up to its claims of faster performance.",
    },
    {
        question: "What makes Fastify faster than other web frameworks like Express?",
        answer: "Fastify's speed advantage comes from several factors, including full encapsulation for plugins, fast JSON parsing, and efficient routing. It also offers a more straightforward syntax for writing asynchronous code in controllers. In performance comparisons, Fastify has been shown to outpace Express by 2–3 seconds consistently.",
    },
];
