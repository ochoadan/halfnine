import { AiOutlineAudit } from "react-icons/ai";
import { FaBoxOpen, FaChartLine } from "react-icons/fa6";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { MdDashboardCustomize } from "react-icons/md";
import { TbTransform } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Streamlined Development and Maintenance",
        description: "FastAPI's design promotes streamlined usage, which simplifies development and maintenance processes. Its intuitive syntax and built-in features allow developers to implement complex functionalities with fewer lines of code, which not only speeds up the development process but also reduces the potential for bugs.",
    },
    {
        name: "Enhanced Performance with Asynchronous Support",
        description: "The framework supports asynchronous programming out of the box, enabling it to handle large volumes of requests simultaneously. This feature is particularly beneficial for businesses that require high-performance applications capable of managing extensive operations without delay.",
    },
    {
        name: "Automatic Documentation",
        description: "FastAPI automatically generates documentation for all the API endpoints using OpenAPI standards. This not only ensures that the API is easy to use and understand but also simplifies the process of integration and testing for developers.",
    },
    {
        name: "Advanced Security Features",
        description: "Security is a paramount concern in API development, and FastAPI provides robust security solutions out-of-the-box. It supports OAuth2 with Password (and hashing), including JWT tokens, and comes with built-in support for API key security, helping businesses protect their applications from unauthorized access effectively.",
    },
    {
        name: "Custom Middleware Integration",
        description: "Custom middleware in FastAPI allows developers to add essential functionalities like authentication, logging, and caching. This adaptability makes it possible to tailor the API to specific business requirements, optimizing performance and enhancing security.",
    },
];

export const dataV2 = [
    {
        name: "Custom Software Development",
        description: "Tailored software solutions are crafted to meet the unique requirements of your business, enhancing operational efficiency and productivity.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Software Development for Startups",
        description: "We provide agile and scalable software development services that support the dynamic needs of startups, fostering growth and innovation.",
        icon: HiMiniRocketLaunch,
    },
    {
        name: "Product Development Services",
        description: "From concept to launch, we manage all aspects of product development, ensuring a seamless, market-ready software product.",
        icon: FaBoxOpen,
    },
    {
        name: "Digital Transformation IT Services",
        description: "Transform your business operations with our digital solutions that integrate advanced technologies to streamline processes and increase competitiveness.",
        icon: TbTransform,
    },
    {
        name: "Software Development Consulting",
        description: "Leverage our expert insights to refine your software strategies, optimize development processes, and ensure the success of your IT projects.",
        icon: FaChartLine,
    },
    {
        name: "Software Audit Services",
        description: "Our comprehensive software audits identify and address vulnerabilities, ensuring your software meets quality standards and performs optimally.",
        icon: AiOutlineAudit ,
    },
];

export const dataV3 = [
    {
        name: "Starlette for Web Handling",
        description: "FastAPI is built on Starlette, enabling it to manage web requests efficiently. This foundation allows for features such as WebSocket support, session and cookies management, and the handling of static files.",
    },
    {
        name: "Pydantic for Data Management",
        description: "Data validation and settings management are streamlined using Pydantic which bases its functionality on Python type hints. This integration ensures that data errors are minimized and developer experience is enhanced.",
    },
    {
        name: "Uvicorn for Server Hosting",
        description: "Uvicorn, an ASGI server, runs FastAPI applications and supports asynchronous programming, making it possible to handle multiple requests simultaneously without slowing down the server.",
    },
    {
        name: "OpenAPI for Documentation",
        description: "The ecosystem leverages OpenAPI standards to automatically generate interactive API documentation. This feature, supported by tools like Swagger UI and ReDoc, simplifies developer tasks and enhances endpoint visibility.",
    },
    {
        name: "Security Protocols",
        description: "FastAPI supports advanced security and authentication protocols, including OAuth2 and JWT, ensuring that applications built with FastAPI are secure from unauthorized access.",
    },
];


export const dataFAQ = [
    {
        question: "What are some examples of companies that utilize FastAPI?",
        answer: "The information about specific companies using FastAPI is not provided in the original input. However, FastAPI is a popular framework that is likely used by a variety of companies for developing modern web applications and APIs.",
    },
    {
        question: "Can you tell me who created FastAPI?",
        answer: "FastAPI was created by Sebastián Ramírez, also known as tiangolo. He is also the creator of other tools like Typer and SQLModel.",
    },
    {
        question: "How does one go about adding custom middleware in FastAPI?",
        answer: "To create custom middleware in FastAPI, you can define a function-based middleware using the @app.middleware('http') decorator. This decorator should be placed above the function, signifying that it will function as middleware, allowing for the modification of requests and responses.",
    },
    {
        question: "Upon what foundations is FastAPI built?",
        answer: "FastAPI is built on Pydantic and Starlette. It leverages Python 3.8+ features, including standard Python-type hints, to validate, serialize, and deserialize data, thus creating a robust foundation for building RESTful APIs.",
    },
];
