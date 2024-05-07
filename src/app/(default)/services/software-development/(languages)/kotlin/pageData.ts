import { FaChartLine } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { GrVmMaintenance } from "react-icons/gr";
import { MdDashboard, MdDashboardCustomize, MdOutlineSmartphone } from "react-icons/md";

export const dataV1 = [
    {
        name: "Enhanced Safety Features",
        description: "Kotlin's emphasis on safety, including nullability and immutability, drastically reduces the occurrence of common programming errors, such as null pointer exceptions. This robustness is crucial for developing reliable applications, particularly in industries where software failures can lead to significant financial or operational consequences.",
    },
    {
        name: "Interoperability with Java",
        description: "Kotlin is fully interoperable with Java, which allows businesses to leverage their existing Java codebase and libraries while adopting Kotlin. This compatibility eases the transition for companies looking to modernize their applications without complete rewrites, ensuring a smoother and more cost-effective integration.",
    },
    {
        name: "Asynchronous Programming with Coroutines",
        description: "Kotlin's support for coroutines facilitates efficient asynchronous programming, enabling developers to write clean, non-blocking code. Coroutines help optimize application performance by managing complex operations such as network calls or database transactions more efficiently, thereby improving the user experience.",
    },
    {
        name: "Multiplatform Development",
        description: "Kotlin Multiplatform promotes code reuse across multiple platforms, including iOS, Android, and the web. This capability not only reduces development and maintenance costs but also ensures consistency and functionality across different environments, enhancing the overall software quality.",
    },
    // {
    //     name: "Adoption by Leading Companies",
    //     description: "The adoption of Kotlin by major corporations like Amazon, Netflix, and Google serves as a testament to its effectiveness and reliability. Their commitment reflects the trust in Kotlin's capabilities to build scalable, high-performance applications across diverse sectors.",
    // },
];

export const dataV2 = [
    {
        name: "Kotlin Software Consulting",
        description: "Understanding the full scope of your project is crucial before development begins. We provide comprehensive consulting services to estimate costs, duration, and address any preliminary questions to ensure your Kotlin app project starts on solid ground.",
        icon: FaChartLine,
    },
    {
        name: "Android Development with Kotlin",
        description: "We specialize in crafting reliable and polished Android applications using Kotlin, focusing on delivering high-quality, solid apps tailored to enhance user engagement and functionality.",
        icon: MdOutlineSmartphone,
    },
    {
        name: "Custom Kotlin App Development",
        description: "Our services include developing custom applications that are specifically tailored to meet the unique needs of your business, ensuring that the software aligns perfectly with your business objectives and operational demands.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Kotlin App Maintenance & Support",
        description: "Post-development, we offer extensive maintenance and support services to ensure your Kotlin application remains current with technological advancements and continues to perform optimally.",
        icon: GrVmMaintenance,
    },
    {
        name: "Kotlin Multiplatform Development",
        description: "Leverage Kotlin Multiplatform to create seamless software experiences across all platforms including iOS, Android, and Web, maximizing code reuse and consistency across devices.",
        icon: MdDashboard,
    },
    {
        name: "Kotlin App QA/Testing",
        description: "We ensure the reliability and performance of your Kotlin applications through comprehensive automated and manual testing processes, maintaining high standards of quality and functionality.",
        icon: GoChecklist,
    },
];

export const dataV3 = [
    {
        name: "Ktor and Asynchronous Servers",
        description: "Ktor, a Kotlin framework, exemplifies the language's adaptability by enabling developers to build asynchronous servers efficiently. This capability is crucial for applications requiring high performance and scalability, handling multiple requests simultaneously without blocking operations.",
    },
    {
        name: "Multiplatform Development",
        description: "Kotlin Multiplatform significantly reduces time and costs associated with developing applications across different platforms. By allowing code reuse, it simplifies the development process, enabling a consistent and unified codebase for iOS, Android, and web applications.",
    },
    {
        name: "Community and Resources",
        description: "The Kotlin community, supported by the Kotlin Foundation, plays a pivotal role in the ecosystem. It provides a wealth of resources and libraries, facilitating learning and innovation among developers. This community support is instrumental in keeping the ecosystem vibrant and continuously evolving, ensuring that Kotlin remains at the forefront of technology trends.",
    },
    {
        name: "Functional Programming Features",
        description: "Kotlin’s support for functional programming includes features like immutability, pure functions, and higher-order functions. These features contribute to creating more reliable and maintainable code, which is essential for building complex and high-quality applications.",
    },
    {
        name: "Model-View-Presenter (MVP) for Android",
        description: "The MVP architecture pattern in Kotlin enhances Android application development by separating the user interface management from the business logic. This separation simplifies the development process and improves the maintainability of applications.",
    },
];


export const dataFAQ = [
    {
        question: "What are some notable companies that utilize Kotlin for development?",
        answer: "Kotlin is employed by a variety of prominent companies for their development needs, including Arity, BenchPrep, BigCommerce, Canva, General Motors, HCSS, Rokt, and Squarespace. These companies span across multiple industries such as 3D printing, education technology, cloud services, e-commerce, and more.",
    },
    {
        question: "Who is responsible for the development of Kotlin, and is Google involved?",
        answer: "Kotlin is primarily developed by the team at JetBrains, which is the company that created the language. However, Google, along with other contributors, actively participates in the development process by contributing to the Kotlin project on GitHub. Google's involvement underscores their commitment to an open developer ecosystem, especially within the Android platform.",
    },
    {
        question: "Why are companies choosing to switch to Kotlin from other programming languages like Java?",
        answer: "Many companies are transitioning to Kotlin from Java due to Kotlin's ability to facilitate the writing of robust and reliable code. This robustness leads to enhanced security and a reduction in the likelihood of system crashes and failures. Kotlin's introduction in 2016 marked a significant shift for companies looking for a more stable and efficient programming language for their applications.",
    },
    // {
    //     question: "Can you explain the key differences between Swift and Kotlin?",
    //     answer: "Swift and Kotlin are both modern programming languages used for mobile app development, but they cater to different platforms: Swift is designed for iOS applications, while Kotlin is used for Android. Kotlin includes data classes, which are not present in Swift, allowing developers to efficiently manage data. Additionally, Swift often uses an underscore as a prefix in variable names, a convention that Kotlin does not follow.",
    // },
];
