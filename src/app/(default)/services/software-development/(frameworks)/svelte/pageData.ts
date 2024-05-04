import { AiFillApi } from "react-icons/ai";
import { FaCartShopping, FaPaintbrush, FaUserAstronaut } from "react-icons/fa6";
import { MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Easy to Learn and Use",
        description: "Svelte's straightforward syntax and gentle learning curve make it accessible for developers at all skill levels. It simplifies the creation of reactive user interfaces without the need for extensive boilerplate code, enabling faster development cycles.",
    },
    {
        name: "High Performance and Efficiency",
        description: "By shifting much of the work to the compile step and eliminating the virtual DOM, Svelte ensures applications run faster and more efficiently. This results in smoother user experiences and quicker loading times, which are crucial for retaining user engagement.",
    },
    {
        name: "Compact and Optimized Code",
        description: "Svelte compiles applications into highly optimized vanilla JavaScript at build time. This process significantly reduces the size of JavaScript bundles, leading to faster download and execution times compared to other frameworks that rely on larger runtime libraries.",
    },
    {
        name: "Enhanced Reactivity",
        description: "Svelte's reactivity model is built directly into its language, allowing for a more intuitive and less verbose coding process. This built-in reactivity eliminates common bugs associated with managing complex states, making the code cleaner and more maintainable.",
    },
    {
        name: "Better CSS Handling",
        description: "With scoped CSS, Svelte ensures that styles are localized to components without risking unwanted interference. This feature allows developers to style applications effectively while maintaining a clean and organized codebase.",
    },
    {
        name: "Streamlined Development with TypeScript",
        description: "Integration with TypeScript provides a streamlined development experience, offering improved tooling and error checking. This compatibility enhances the development process, making it easier to manage large-scale applications securely and efficiently.",
    },
];

export const dataV2 = [
    {
        name: "Custom Software Development",
        description: "Focusing on Svelte, we provide tailor-made software solutions designed to meet the specific needs of your business, ensuring optimal performance and scalability.",
        icon: MdDashboardCustomize,
    },
    {
        name: "UX/UI Design Services",
        description: "Our team specializes in creating user-centric designs for Svelte-based applications, enhancing user engagement and satisfaction through intuitive and aesthetically pleasing interfaces.",
        icon: FaUserAstronaut,
        
    },
    {
        name: "API Development",
        description: "We offer comprehensive API development services, utilizing Svelte to build robust and scalable APIs that integrate seamlessly with various technologies and platforms.",
        icon: AiFillApi,
    },
    {
        name: "E-commerce Solutions",
        description: "Leveraging Svelte, we develop high-performance e-commerce platforms that offer seamless shopping experiences, designed to boost your digital sales and customer interaction.",
        icon: FaCartShopping,
    },
    {
        name: "Mobile App Development",
        description: "Our Svelte development expertise extends to mobile applications, where we deliver lightweight, efficient, and highly responsive mobile solutions.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "Web Design Services",
        description: "We craft visually stunning and highly functional websites using Svelte, focusing on speed, user experience, and brand cohesion to elevate your online presence.",
        icon: FaPaintbrush,
    },
];

export const dataV3 = [
    {
        name: "Vibrant Community and Development Tools",
        description: "The Svelte Ecosystem is marked by a vibrant community and a suite of tools that enhance the development process. Central to its interaction is GitHub, where developers actively collaborate, contributing to the robustness of the ecosystem. Moreover, npm plays a crucial role by providing access to a wide array of libraries and utilities, facilitating the integration and management of various development tools.",
    },
    {
        name: "Efficiency and Design",
        description: "Despite its smaller size compared to ecosystems like React’s, Svelte’s community is notably efficient. The framework’s design requires fewer external libraries thanks to its reliance on standard web APIs, which simplifies development and reduces overhead.",
    },
    {
        name: "SvelteKit",
        description: "SvelteKit, a key component of this ecosystem, offers developers a comprehensive routing solution that supports various rendering strategies, enhancing flexibility in project deployment.",
    },
    {
        name: "Adoption by Major Corporations",
        description: "Svelte's adoption by major corporations such as Microsoft and Amazon attests to its scalability and robustness. The framework supports the Microfrontends architecture, allowing teams to manage smaller, more maintainable codebases effectively.",
    },
    {
        name: "Mobile Development with Svelte Native",
        description: "For mobile development, Svelte Native extends the framework’s capabilities, enabling the creation of native mobile applications.",
    },
    {
        name: "Key Resources for Developers",
        description: "Key resources for developers include the Svelte home page, extensive documentation, and an interactive online REPL editor, which collectively support both novice and experienced developers in their Svelte projects. These elements make the Svelte ecosystem not only a toolkit but also a thriving community for innovation and development.",
    },
];


export const dataFAQ = [
    {
        question: "What are the reasons behind Svelte's limited popularity?",
        answer: "Svelte's popularity is curtailed primarily due to its relatively small ecosystem. As a newer framework, it lacks the extensive library and tool support that more established frameworks like React enjoy. This shortage can be a drawback for developers looking for a wide array of resources.",
    },
    {
        question: "Can you name some businesses that have implemented Svelte in their operations?",
        answer: "Various companies, including The New York Times, Rakuten, Philips, and IBM, have incorporated Svelte into their development projects.",
    },
    {
        question: "What kind of support does Svelte receive and who is behind it?",
        answer: "Svelte continues to be an independent, open-source project supported by its community. Recently, Vercel has begun backing Svelte, which may allow the project to pursue more ambitious goals.",
    },
];
