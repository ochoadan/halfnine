import { AiFillApi } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { GiSpeedometer, GiUpgrade } from "react-icons/gi";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Efficiency and Performance",
        description: "PHP’s simplicity allows for reduced development time and enhanced web performance. It is cost-effective and designed to scale with your business, supporting increased traffic and data needs as you grow.",
    },
    {
        name: "Security and Stability",
        description: "PHP has built-in security features and supports the latest security patches. It also allows the use of reusable components from various frameworks, enhancing both efficiency and security.",
    },
    {
        name: "Flexibility and Customization",
        description: "PHP is compatible across all major operating systems, ensuring flexibility in deploying and managing applications. It is highly customizable, supporting over 20 databases and various servers.",
    },
    {
        name: "User Experience and SEO",
        description: "PHP can be integrated with technologies like HTML and CSS to create seamless user experiences on web platforms. It also enhances a website’s SEO potential and supports robust multimedia integration.",
    },
    {
        name: "Community Support and Continuous Upgrades",
        description: "PHP has a vast community for continuous support and resources. It also allows for quicker project turnarounds, helping you reach the market faster than with other technologies.",
    },
    {
        name: "Robust Ecosystem and Documentation",
        description: "PHP supports powerful frameworks like Laravel and Symfony to streamline development and maintain code consistency. It also extends to popular CMSs like WordPress and Drupal. All PHP development processes can be well-documented, simplifying maintenance and future upgrades.",
    },
];

export const dataV2 = [
    {
        name: "Custom Web Application Development",
        description: "Tailoring solutions like complex e-commerce platforms and dynamic content management systems to meet specific business requirements, ensuring a seamless and scalable online presence.",
        icon: MdDashboardCustomize,
    },
    {
        name: "E-commerce Development",
        description: "Integrating advanced features such as payment gateways and product management tools to create robust and user-friendly shopping platforms.",
        icon: FaCartShopping,
    },
    // {
    //     name: "Enterprise Application Development",
    //     description: "Developing custom solutions for internal processes, data management, and enterprise resource planning to enhance operational efficiency and productivity.",
    //     icon: TbBuildingSkyscraper,
    // },
    {
        name: "API Development",
        description: "Creating secure and efficient APIs that enable seamless integration of web applications with third-party services, enhancing functionality and user experience.",
        icon: AiFillApi,
    },
    {
        name: "Legacy System Modernization",
        description: "Revitalizing existing PHP applications to improve performance, security, and compatibility with modern technologies.",
        icon: GiUpgrade,
    },
    {
        name: "Preformance Optimization",
        description: "Optimizing PHP applications for speed and efficiency, ensuring optimal performance and user experience.",
        icon: GiSpeedometer,
    },
    {
        name: "Migration and Upgrades",
        description: "Migrating legacy PHP applications to newer versions, ensuring compatibility with the latest PHP frameworks and libraries, and providing support for future upgrades and enhancements.",
        icon: GiUpgrade,
    },
];

export const dataV3 = [
    {
        name: "Frameworks and Asynchronous Libraries",
        description: "In terms of frameworks, Laravel leads with 58% usage among developers, followed by Symfony and WordPress. This indicates a strong preference for frameworks that offer extensive features and community support. Interestingly, despite the availability of asynchronous libraries, 79% of developers opt not to use them, with Swoole and ReactPHP being the exceptions.",
    },
    {
        name: "Deployment and Tooling",
        description: "For deployment, PHP applications predominantly run on servers and virtual machines, with some utilization of shared hosting and serverless environments. When it comes to tooling, PhpStorm, VS Code, and IntelliJ IDEA are the top choices for PHP IDEs, facilitating efficient coding environments.",
    },
    {
        name: "Testing and Quality Tools",
        description: "Testing frameworks like PHPUnit dominate, with others like Codeception and Behat also in use, ensuring robust application testing. PHP developers also rely on quality tools like PHP CS Fixer and PHPStan to maintain high standards in coding.",
    },
    {
        name: "Community and Resources",
        description: "Lastly, the community aspect of PHP is vibrant, with resources like Packagist for package management and ongoing updates from the PHP Foundation, which supports the open-source nature of PHP. This ecosystem not only supports PHP developers in creating high-quality applications but also ensures they are equipped with the latest tools and knowledge to stay ahead in the fast-evolving tech landscape.",
    },
];


export const dataFAQ = [
    {
        question: "What are the advantages of using PHP for web development?",
        answer: "PHP offers advantages such as reduced development time, enhanced web performance, built-in security features, flexibility in deploying and managing applications, seamless user experiences, strong community support, and powerful frameworks and CMSs.",
    },
    {
        question: "What services can be provided with PHP?",
        answer: "PHP can be used for custom web application development, e-commerce development, API development, legacy system modernization, performance optimization, migration and upgrades, and more.",
    },
    {
        question: "What are some popular frameworks and tools used in PHP development?",
        answer: "Popular frameworks include Laravel, Symfony, and WordPress. Asynchronous libraries like Swoole and ReactPHP are also used. For tooling, popular choices include PhpStorm, VS Code, and IntelliJ IDEA. Testing frameworks like PHPUnit and quality tools like PHP CS Fixer and PHPStan are commonly used as well.",
    },
    {
        question: "What resources and community support are available for PHP developers?",
        answer: "PHP has a vibrant community with resources like Packagist for package management and ongoing updates from the PHP Foundation. This ecosystem supports PHP developers in creating high-quality applications and provides them with the latest tools and knowledge to stay ahead in the tech landscape.",
    },
];
