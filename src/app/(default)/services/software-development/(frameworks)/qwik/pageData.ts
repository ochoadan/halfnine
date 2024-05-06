import { FaChartLine, FaRegFileCode, FaRobot } from "react-icons/fa6";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Personalization and Customization",
        description: "Custom Qwik solutions are built from the ground up, tailored specifically to meet the unique needs and objectives of each business. This bespoke approach ensures that every feature and functionality is precisely what is required, without any unnecessary bloat or compromise.",
    },
    {
        name: "Integration and Streamlining Operations",
        description: "By integrating various business processes into a single, cohesive system, custom Qwik solutions simplify operations, enhancing efficiency and reducing the likelihood of errors. This seamless integration supports a smoother workflow and can be adapted to the future directions of the business.",
    },
    {
        name: "Scalability and Future Growth",
        description: "Designed with scalability in mind, custom Qwik solutions can evolve alongside a business, accommodating growth and changes without the need for complete overhauls. This makes them a viable long-term investment that supports expansion at every stage.",
    },
    {
        name: "Cost-Effectiveness Over Time",
        description: "While the initial investment in custom Qwik solutions might be higher compared to off-the-shelf software, they prove more economical in the long run. By eliminating the need for frequent replacements or customizations, these solutions offer substantial cost savings over time.",
    },
    {
        name: "Dedicated Support and Enhanced Security",
        description: "Opting for custom Qwik solutions provides businesses with access to dedicated technical support teams who are thoroughly acquainted with their specific setup. Additionally, custom solutions can be fortified with advanced security measures, reducing vulnerability to breaches and ensuring compliance with industry standards.",
    },
    {
        name: "Competitive Advantage through Innovation",
        description: "Custom Qwik solutions allow businesses to leverage innovative technologies tailored to their specific needs. This not only enhances operational efficiency but also provides a significant competitive edge in the market by enabling unique features and capabilities that off-the-shelf solutions cannot offer.",
    },
];

export const dataV2 = [
    {
        name: "QwikCity Development",
        description: "QwikCity is a comprehensive solution for building scalable and efficient web applications. It integrates seamlessly with Qwik, providing essential features like routing and backend functionality, making it a cornerstone service for any business looking to enhance their online presence.",
        icon: FaRegFileCode,
    },
    {
        name: "Qwik Consulting and Content Creation",
        description: "Our team works closely with Builder.io to deliver expert Qwik consulting services. We assist clients in harnessing the power of Qwik to develop high-performance applications that are both scalable and tailored to meet specific business requirements.",
        icon: FaChartLine,
    },
    {
        name: "Custom Application Development",
        description: "We specialize in creating bespoke applications using the Qwik framework. This service is designed to cater to unique business needs, providing custom solutions that are not only effective but also innovative and forward-thinking.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Developer Training",
        description: "Stay ahead of the curve with our developer training programs focused on Qwik's latest best practices. These sessions are crucial for teams looking to improve their skills and understanding of the Qwik ecosystem, ensuring they can leverage all its benefits efficiently.",
        icon: PiStudentBold,
    },
    {
        name: "Holistic Project Support",
        description: "Our comprehensive project support covers all aspects of Qwik development, from initial planning and development to deployment and maintenance. This ensures a smooth and reliable application lifecycle management.",
        icon: MdDashboard,
    },
    {
        name: "Automate Workflow",
        description: "Optimize and streamline your development processes with our workflow automation services using Qwik. This service helps businesses increase efficiency and reduce time-to-market for their applications.",
        icon: FaRobot,
    },
];

export const dataV3 = [
    {
        name: "Automatic Optimization for Performance",
        description: "Constant initial bundle size for quick loading.\n\nInteractive elements remain clickable during JS chunk loading.\n\nSmart prefetching ensures a seamless user experience.\n\nUnmatched Core Web Vital Scores\n\nLazy execution strategies to minimize JavaScript use.\n\nOnly necessary JavaScript is downloaded and executed.",
    },
    {
        name: "Developer Experience and Type Safety",
        description: "Server helper functions for server-only actions and database access.\n\nTRPC for strong typing between client and server enhances security and efficiency.",
    },
    {
        name: "Next Generation Architecture",
        description: "Performance standards set by Qwik are anticipated to influence future development frameworks.",
    },
    {
        name: "Ease of Use",
        description: "Familiar concepts like function components, signals, and JSX simplify the learning curve for new developers.",
    },
    {
        name: "Comprehensive Integration Options",
        description: "Supports a wide array of integrations including Astro, Auth.js, and React, among others.",
    },
    {
        name: "Deployment flexibility",
        description: "Deployment flexibility with platforms like AWS, Google Cloud, and Vercel Edge.",
    },
];


export const dataFAQ = [
    {
        question: "What purpose does Qwik serve in software development?",
        answer: "Qwik is designed to load JavaScript applications of any size instantly, with its primary benefit being the reduction of initial page load time and the time it takes for an app to become interactive. If you're working with a single-page application and the load time is not a concern for you, then integrating Qwik might not yield significant immediate advantages.",
    },
    {
        question: "Does Qwik specialize in frontend or backend development?",
        answer: "Qwik is a frontend framework that specializes in optimizing speed and performance by serializing components and event handlers.",
    },
    {
        question: "Can Qwik be considered a comprehensive fullstack framework?",
        answer: "Yes, Qwik is recognized as a full-stack web framework that introduces a novel method for deploying instantly loading applications on a large scale.",
    },
    {
        question: "How does Qwik stand out as a framework?",
        answer: "Qwik is exceptional due to its automatic lazy loading feature. Unlike other frameworks where you need to manually plan and implement lazy loading for components, Qwik simplifies the process by automatically loading only the components that are currently visible on the screen or essential for the application's functionality.",
    },
];
