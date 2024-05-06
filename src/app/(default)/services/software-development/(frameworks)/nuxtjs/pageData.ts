import { FaCartShopping, FaChartLine, FaLifeRing } from "react-icons/fa6";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Enhanced Performance and SEO",
        description: "The built-in server-side rendering capabilities of Nuxt.js provide significant SEO benefits and faster page loading times. This is crucial for businesses aiming to improve their online visibility and user engagement. The framework's automatic optimization of images, fonts, and scripts further enhances the user experience by reducing load times and improving responsiveness.",
    },
    {
        name: "Scalability and Flexibility",
        description: "Custom Nuxt.js solutions are highly scalable, accommodating the growth of your business without compromising on performance. The flexibility to choose between different rendering strategies—static site generation, server-side rendering, or hybrid approaches—allows businesses to tailor their web presence according to their specific needs and customer demands.",
    },
    {
        name: "Streamlined Development Process",
        description: "Nuxt.js simplifies the development workflow by providing a structured project architecture, which reduces the complexity typically associated with setting up new projects. This structured environment not only speeds up the development process but also promotes consistency and best practices among development teams.",
    },
    {
        name: "Comprehensive Integration Capabilities",
        description: "The modular architecture of Nuxt.js makes it easy to integrate with a wide array of third-party services and tools, from headless CMS platforms to e-commerce systems. This seamless integration capability ensures that businesses can easily connect their Nuxt.js applications with existing systems, enhancing functionality and user experience without significant overhaul.",
    },
];

export const dataV2 = [
    {
        name: "Custom Web Application Development",
        description: "Utilizing Nuxt.js, we develop bespoke web applications tailored to meet specific business requirements, ensuring a seamless user experience and robust functionality.",
        icon: MdDashboardCustomize,
    },
    {
        name: "E-commerce Solutions",
        description: "We offer specialized e-commerce development services using Nuxt.js to create fast, scalable, and secure online stores that provide an excellent shopping experience.",
        icon: FaCartShopping,
    },
    {
        name: "Mobile App Integration",
        description: "Leverage our expertise to integrate mobile applications with Nuxt.js, enhancing mobile app performance and user engagement through optimized web technology.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "SEO Optimization Services",
        description: "Our services include enhancing your Nuxt.js application’s SEO, improving visibility, and driving organic traffic to maximize your online presence.",
        icon: FaChartLine,
    },
    {
        name: "Migration Services",
        description: "Smoothly transition your existing projects to Nuxt.js with our expert migration services, ensuring minimal downtime and enhanced performance.",
        icon: TbTransfer,
    },
    {
        name: "Continuous Support and Maintenance",
        description: "We provide ongoing support and maintenance for Nuxt.js applications to ensure they remain up-to-date, secure, and perform at their best.",
        icon: FaLifeRing,
    },
];

export const dataV3 = [
    {
        name: "Core Packages and Structure",
        furtherList: [
            {
                name: "Core Engine",
                description: "The backbone of Nuxt.js, handling the main framework functionality.",
            },
            {
                name: "Bundlers",
                description: "Tools that compile and bundle assets to optimize the application delivery.",
            },
            {
                name: "Command Line Interface",
                description: "Provides commands for creating and managing Nuxt.js projects.",
            },
            {
                name: "Server Engine",
                description: "Manages server-side operations and rendering processes.",
            },
            {
                name: "Development Kit",
                description: "A set of tools and utilities to enhance the development experience.",
            },
            {
                name: "Nuxt 2 Bridge",
                description: "Facilitates migration from Nuxt 2 to Nuxt 3, ensuring backward compatibility.",
            },
        ],
    },
    {
        name: "Routing and Dynamic Content",
        description: "Nuxt.js simplifies the creation of routes through its file system-based routing mechanism. By placing components in the ./pages/ directory, routes are automatically configured. Dynamic routes can be created by enclosing parameters in square brackets, such as ./pages/products/[id].vue, which are essential for displaying content like product details dynamically fetched from APIs.",
    },
    {
        name: "Integration and Extensibility",
        description: "Nuxt Modules enhance the framework's functionality, allowing integration with a plethora of tools and services with minimal configuration. This modular architecture makes it easy to extend Nuxt.js capabilities, catering to specific project needs without heavy modifications.",
    },
    {
        name: "Community and Support",
        description: "With its strong community presence on platforms like GitHub and its dedicated team, Nuxt.js offers substantial support resources. Enterprise support, including tailored solutions and professional consulting services, ensures businesses can leverage Nuxt.js effectively for their projects.",
    },
];


export const dataFAQ = [
    {
        question: "What is the origin of the Nuxt.js framework?",
        answer: "NuxtJS is the creator of the Nuxt.js framework, which simplifies the process for developers to construct server-rendered applications using Vue.js. The framework was initiated as a side project in 2017 by two brothers, Alex and Sebastien, and has since been associated with BB Agency.",
    },
    {
        question: "Which organizations implement Nuxt.js in their projects?",
        answer: "Several companies have adopted Nuxt.js for their development needs, leveraging its features to enhance their web applications.",
    },
    {
        question: "Can you explain the server-side rendering feature of Nuxt.js?",
        answer: "Nuxt.js inherently supports server-side rendering (SSR), which means it can render web pages on the server and send fully rendered HTML to the browser. This functionality allows for a quicker initial page load as the browser can display the page immediately, without waiting for all the JavaScript to be downloaded and executed.",
    },
    {
        question: "What purposes does Nuxt.js serve in web development?",
        answer: "Nuxt.js is employed for its various built-in optimizations, such as automatic code splitting, prefetching, and lazy loading of components, all of which contribute to heightened performance and search engine optimization (SEO) for web applications. These benefits are provided without the need for extra configuration, streamlining the development process.",
    },
];
