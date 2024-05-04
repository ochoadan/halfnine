import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";
import { LuAppWindow } from "react-icons/lu";
import { TbTransfer } from "react-icons/tb";
import { FaBrain, FaChartLine, FaCloud, FaFileCode, FaLifeRing, FaMoneyBillTrendUp } from "react-icons/fa6";

export const dataV1 = [
    {
        name: "Tailored to Business Needs",
        description:
            "Custom software development ensures that every feature is built to address specific business requirements. This bespoke approach means that businesses aren't spending on unnecessary features that are often part of off-the-shelf software. By focusing on essential functionalities, custom .NET solutions drive efficiency and effectiveness.",
    },
    {
        name: "Enhanced Integration Capabilities",
        description:
            "Seamless integration with existing software systems is a significant advantage of custom .NET solutions. This compatibility reduces disruptions in current business processes and enhances data exchange and interoperability within the organization, leading to improved productivity and reduced errors.",
    },
    {
        name: "Superior Scalability",
        description:
            "As businesses grow, their software needs evolve. Custom .NET solutions are designed with scalability in mind, accommodating increased loads and expanded operations without the need for significant changes or investments. This makes custom .NET solutions a future-proof choice for growing businesses.",
    },
    {
        name: "Dependability and Security",
        description:
            "Custom software offers enhanced security features tailored to the specific threats and compliance requirements of a business. Since these solutions are developed and maintained by a dedicated .NET development company, they are less prone to vulnerabilities that often affect widely used software.",
    },
    {
        name: "Cost-Effectiveness Over Time",
        description:
            "Although the initial investment in custom .NET development might be higher than purchasing off-the-shelf software, the long-term benefits significantly outweigh the costs. Custom solutions do not require continuous licensing fees, and their maintenance is often more straightforward and less expensive, leading to better ROI.",
    },
    {
        name: "Exclusive Ownership and Control",
        description:
            "One of the most compelling reasons for choosing custom .NET solutions is the complete ownership it offers. Businesses have full control over the software, including its features and updates. This independence from third-party software providers ensures that the software can evolve in line with the company's needs without additional costs or restrictions.",
    },
    {
        name: "Business Insights and Data Analytics",
        description:
            "Custom .NET solutions can be equipped with advanced analytics to help businesses gain valuable insights into their operations. These insights can drive data-driven decisions, enhancing strategic planning and competitive advantage.",
    },
    {
        name: "Customization of Enterprise Systems",
        description:
            ".NET development is ideal for creating robust ERP and CRM systems, which are crucial for managing business operations and customer relationships. Custom .NET solutions ensure these systems are perfectly aligned with business processes, enhancing functionality and user experience.",
    },
];

export const dataV2 = [
    {
        name: "Custom .NET Application Development",
        description:
            "Custom .NET application development services focus on creating tailored applications that fit the specific requirements of a business. This includes everything from system analysis to design, implementation, and maintenance.",
        icon: MdDashboardCustomize,
    },
    {
        name: ".NET Web and Desktop Application Development",
        description:
            "These services encompass the development of robust web and desktop applications using .NET frameworks, which are crucial for businesses looking to improve their digital presence and internal software infrastructure.",
        icon: LuAppWindow,
    },
    {
        name: "Migration to .NET",
        description:
            "Migration services are essential for businesses upgrading from older platforms to the .NET framework, ensuring a smooth transition with minimal disruption to existing operations.",
        icon: TbTransfer,
    },
    {
        name: "Integration Services",
        description:
            ".NET development companies provide integration services that allow businesses to seamlessly connect their .NET applications with other systems and services, such as WEB services, ERPs, and Office applications. This enhances the functionality and efficiency of business processes.",
        icon: PuzzlePieceIcon,
    },
    {
        name: ".NET Cloud Development",
        description:
            "Leveraging cloud platforms like AWS and Azure, .NET cloud development services include building, hosting, and managing applications in the cloud, which enhances scalability and reduces infrastructure costs.",
        icon: FaCloud,
    },
    {
        name: "ASP.NET Development Services",
        description:
            "Specialized in creating dynamic web pages and applications, ASP.NET development services ensure enhanced website performance and user experience, catering to the needs of modern businesses.",
        icon: FaFileCode,
    },
    {
        name: "Comprehensive Support and Maintenance",
        description:
            "Ongoing support and maintenance services are provided to ensure that .NET applications run smoothly and continue to meet business needs effectively over time.",
        icon: FaLifeRing,
    },
    {
        name: "Advanced Technologies and Customizations",
        description:
            "Utilizing advanced technologies such as AI, ML, and generative AI, .NET developers offer innovative application development, including custom engineering and LLM training and enhancement. This prepares businesses for future tech trends and needs.",
        icon: FaBrain,
    },
    {
        name: "Security and Compliance",
        description:
            "Ensuring the security of applications is paramount; hence, .NET development services include robust security measures and compliance with industry standards to protect business data and prevent vulnerabilities.",
        icon: MdOutlineSecurity,
    },
    {
        name: "Cost-Effective Solutions",
        description:
            ".NET development services are designed to be cost-effective, providing businesses with high ROI through custom solutions that do not require continuous licensing fees and are cheaper to maintain.",
        icon: FaMoneyBillTrendUp,
    },
    {
        name: "Consulting and Strategy",
        description:
            ".NET consulting services help businesses develop strategies for digital transformation and IT infrastructure improvement, ensuring that technology investments align with business goals.",
        icon: FaChartLine,
    },
];

export const dataV3 = [
    {
        name: "Supported Programming Languages",
        description:
            ".NET supports over 60 programming languages, including popular ones like C#, VB.NET, and F#. This diversity allows developers to choose the language that best suits their project's needs and leverage existing skills and resources.",
    },
    {
        name: "Runtimes and Frameworks",
        description:
            "The .NET ecosystem includes multiple runtimes and frameworks, each catering to different types of applications:",
        furtherList: [
            {
                name: ".NET Framework",
                description:
                    "Introduced in 2002, this runtime is ideal for building Windows-based applications such as WPF, Windows Forms, and ASP.NET applications.",
            },
            {
                name: ".NET Core",
                description:
                    "Launched in 2016, .NET Core supports the development of cross-platform applications for ASP.NET Core and Universal Windows Platform (UWP), allowing side-by-side installation of different versions.",
            },
            {
                name: "Mono for Xamarin",
                description:
                    "This framework enables the creation of applications for iOS, macOS, and Android using the .NET Framework, supporting mobile and cross-platform development.",
            },
            {
                name: ".NET Standard",
                description:
                    "A set of API standards that ensures code compatibility across different .NET implementations, facilitating easier maintenance and code sharing.",
            },
        ],
    },
    {
        name: "Development Tools and Components",
        description:
            "The .NET ecosystem is equipped with a variety of tools and components that enhance the development process:",
        furtherList: [
            {
                name: "MSBuild",
                description:
                    "The build platform for .NET, which helps in compiling code, packaging, and testing.",
            },
            {
                name: "NuGet",
                description:
                    "The package manager for .NET with over 300,000 packages available, providing a vast range of functionalities that can be easily integrated into applications.",
            },
            {
                name: "Common Language Runtime (CLR)",
                description:
                    "Manages the execution of .NET programs, offering services like memory management, security features, and exception handling.",
            },
            {
                name: ".NET Framework Class Library",
                description:
                    "Provides a comprehensive set of APIs and types for common functionalities, aiding in tasks like file handling, data management, and network communications.",
            },
        ],
    },
    {
        name: "Cross-Platform Capability",
        description:
            ".NET's ability to support multiple operating systems, including Linux, Windows, and macOS, is a significant advantage. It allows businesses to deploy applications across different environments without needing to redevelop the software, ensuring greater reach and flexibility.",
    },
    {
        name: "Security and Performance",
        description:
            "Security is a paramount feature of the .NET ecosystem, providing a highly secure environment that is suitable for industries handling sensitive data. The built-in security features and regular updates help in protecting applications from potential threats.",
    },
    {
        name: "Community and Support",
        description:
            "The .NET ecosystem benefits from a rich community of millions of developers and a wide range of existing libraries and code samples. This community support, coupled with comprehensive documentation and active forums, accelerates development and problem-solving.",
    },
    {
        name: "Application Types",
        description:
            "With .NET, developers can build a variety of applications, including web apps, mobile apps, desktop apps, cloud-based services, and more. The flexibility and robustness of .NET make it suitable for everything from small-scale projects to enterprise-level applications.",
    },
];


export const dataFAQ = [
    {
        question: "What does a .NET solution entail?",
        answer: "A .NET solution refers to services provided by digital experience agencies like Net Solutions, which specialize in utilizing design, engineering, and artificial intelligence to create consumer-focused products and platforms.",
    },
    {
        question: "Can you explain what .NET development services are?",
        answer: ".NET development services are offerings that enable organizations to create a wide array of applications, including web, mobile, desktop, cloud, and IoT applications, focusing on delivering solutions that prioritize the customer's needs.",
    },
    {
        question: "What is the typical cost range for developing custom software?",
        answer: "The cost for custom software development can vary widely, but as a general guideline, small applications may cost between $100,000 to $200,000, while medium-sized applications can range from $200,000 to $400,000.",
    },
];
