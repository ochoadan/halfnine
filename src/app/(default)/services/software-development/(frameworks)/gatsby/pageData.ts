import { GiStaticWaves } from "react-icons/gi";
import { LuAppWindow } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { SiHeadlessui } from "react-icons/si";
import { TbTransfer } from "react-icons/tb";

export const dataV1 = [
    {
        name: "Speed and Performance",
        description: "Gatsby sites are pre-built into static HTML, leveraging critical asset loading and prefetching resources, which drastically increases speed. This is crucial for any business as faster load times improve user experience and directly influence SEO rankings.",
    },
    {
        name: "Enhanced Security",
        description: "Being a static site generator, Gatsby minimizes server-side processes, reducing potential security threats. This serverless architecture makes it significantly harder for attackers to exploit vulnerabilities, providing a robust security framework for business websites.",
    },
    {
        name: "SEO Optimization",
        description: "Static websites like those built with Gatsby are favored by search engines due to their speed and structure. Gatsby also supports SEO-friendly features out-of-the-box, helping businesses achieve better visibility and higher rankings in search results.",
    },
    {
        name: "Scalability",
        description: "The use of a global CDN to serve static assets ensures that Gatsby websites can handle high traffic without performance degradation. This scalability makes it ideal for businesses expecting to grow and require a reliable web presence that grows with them.",
    },
    {
        name: "Cost-Effective Maintenance",
        description: "Unlike dynamic CMSs that require regular updates and patches, maintaining a Gatsby site involves minimal overhead. Updates are generally confined to static assets and plugins, reducing the need for ongoing technical support.",
    },
    {
        name: "Progressive Web App (PWA) Features",
        description: "Gatsby supports PWA out of the box, meaning businesses can enjoy the benefits of a fast, engaging site that behaves like a native app on mobile devices, enhancing the user experience and engagement.",
    },
    {
        name: "Broad Plugin Ecosystem",
        description: "With an extensive library of plugins, Gatsby sites can be extended with advanced functionality without heavy custom coding, from SEO enhancements to sophisticated image optimization, all contributing to a powerful, feature-rich business website.",
    },
];

export const dataV2 = [
    {
        name: "Custom Functionality Development",
        description: "Utilizing a variety of JavaScript libraries, we tailor functionalities that meet specific business requirements, enhancing the interactivity and usability of your Gatsby site.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Static Site Generation",
        description: "We optimize the Gatsby build process to compile your content into a static GraphQL API, ensuring your site is fast, secure, and scalable, ready to meet the demands of any traffic spikes.",
        icon: GiStaticWaves ,
    },
    {
        name: "Content Integration",
        description: "Whether sourcing content from markdown files or other formats, we implement the necessary Gatsby plugins to seamlessly convert and integrate it into your website.",
        icon: RiPagesLine ,
    },
    {
        name: "Advanced Data Fetching",
        description: "Our services include setting up efficient data fetching strategies—whether at build time or runtime—to ensure your site always delivers fresh and dynamic content.",
        icon: TbTransfer,
    },
    {
        name: "Progressive Web Applications",
        description: "We leverage Gatsby's built-in support for PWAs to create web applications that offer a native app-like experience, ensuring high engagement and accessibility.",
        icon: LuAppWindow,
    },
    {
        name: "Headless CMS Solutions",
        description: "By integrating Gatsby with headless CMS platforms, we enable you to manage your content more flexibly and efficiently, pushing your digital strategy forward without limitations.",
        icon: SiHeadlessui ,
    },
];

export const dataV3 = [
    {
        name: "Simplified Build Process",
        description: "Gatsby's build process outputs a static website comprising HTML, CSS, and JavaScript. This streamlined process is particularly appealing for frontend developers, as it aligns with the standard skill set required in web development, emphasizing JavaScript proficiency.",
    },
    {
        name: "Developer-Friendly Plugins",
        description: "One of the standout features of the Gatsby ecosystem is its extensive plugin library. With over 2000 available plugins, developers can easily extend the functionality of their websites. These plugins are designed for ease of integration and are aimed at solving common technical challenges efficiently.",
    },
    {
        name: "Comprehensive API and Component Support",
        description: "Gatsby provides a plethora of APIs that facilitate the development of static sites, alongside a robust set of components that aid in tasks such as routing, linking, and image handling. This comprehensive support simplifies complex development tasks, making Gatsby a practical choice for building scalable websites.",
    },
    {
        name: "Advanced Features in Gatsby v4",
        description: "The introduction of Gatsby v4 has brought several advanced features to the table, including parallel querying, deferred static generation, and server-side rendering. These features enhance the performance and scalability of Gatsby sites, catering to the needs of high-traffic websites.",
    },
    {
        name: "Extensive Starter Templates",
        description: "Gatsby offers a variety of starter templates designed for specific use cases. These templates provide a solid foundation for developers, enabling them to kickstart projects quickly and efficiently, tailored to the specific needs of the project.",
    },
    {
        name: "Gatsby Cloud Services",
        description: "For developers looking to streamline their workflow, Gatsby Cloud offers services like real-time previews, incremental builds, and deployment solutions. This cloud-based service enhances the development experience by providing tools that support the continuous integration and deployment pipeline.",
    },
];


export const dataFAQ = [
    {
        question: "What entity currently owns Gatsby, Inc.?",
        answer: "As of February 2023, Netlify acquired Gatsby, Inc. Before this acquisition, Gatsby, Inc. had raised significant funding, with $15 million in Series A in September 2019 and $20 million in Series B in 2020.",
    },
    {
        question: "How do 'gatsby build' and 'gatsby develop' differ in their operations?",
        answer: "The 'gatsby develop' command initially runs a maximum of three page queries, which include the index page, the actual 404, and the develop 404 pages. Additional queries are only run when requested by the browser. On the other hand, 'gatsby build' executes page queries for every page that lacks cached and up-to-date results.",
    },
    {
        question: "Who is the founder of GatsbyJS?",
        answer: "GatsbyJS was created by Kyle Mathews. It began as a modest open-source project and quickly gained popularity among developers globally, introducing the innovative concept of a static site generator that integrates with modern web technologies.",
    },
];
