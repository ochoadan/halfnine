import { AiFillApi } from "react-icons/ai";
import { FaChartLine, FaLifeRing, FaRegFileCode, FaTowerBroadcast } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { SiHeadlessui } from "react-icons/si";

export const dataV1 = [
    {
        name: "Superior Control and Customization",
        description: "Lua provides developers with significant control over the programming language, enabling the creation of bespoke frameworks, tools, and resources. This adaptability allows for solutions that are finely tuned to meet specific business requirements, enhancing functionality and user experience.",
    },
    {
        name: "Unmatched Speed and Efficiency",
        description: "The LuaJIT, a Just-In-Time compiler for Lua, outperforms many other compilers, including V8 used in Google Chrome. This leads to faster execution of applications, making Lua an ideal choice for performance-critical environments.",
    },
    {
        name: "Lightweight and Agile",
        description: "Lua's core interpreter outperforms Python, providing a more efficient option for systems where resources are limited. Its built-in lightweight threads and coroutines offer advantages over JavaScript’s async/await patterns, making Lua suitable for high-performance, real-time applications.",
    },
    {
        name: "Easy Integration",
        description: "LuaJIT’s ease of interfacing with C or C++ is particularly beneficial for applications that require direct interaction with these languages. This ease of integration helps in maintaining high performance and low overhead.",
    },
    {
        name: "Scalability and Flexibility",
        description: "Custom Lua solutions are designed with scalability in mind, allowing them to expand and adapt to growing business needs or changing technological environments. The language’s flexibility also means that developers can craft unique modules and libraries tailored to the specific needs of a project.",
    },
    {
        name: "Cost-Effectiveness",
        description: "Although the initial investment in custom Lua solutions might be higher, the long-term benefits include reduced processing times, lower resource usage, and scalability, all of which contribute to a more cost-effective solution over time.",
    },
];

export const dataV2 = [
    {
        name: "Lua Application Development",
        description: "Our team offers comprehensive application development services using Lua, ensuring lightweight, efficient, and highly customizable solutions tailored to meet specific business needs.",
        icon: LuAppWindow,
    },
    {
        name: "Lua Scripting Solutions",
        description: "We provide expert Lua scripting services to enhance or automate your existing applications and processes, improving performance and functionality with minimal overhead.",
        icon: FaRegFileCode,
    },
    {
        name: "Embedded Systems Programming",
        description: "Leverage our Lua development expertise to create or improve embedded systems, making them more efficient and responsive, suitable for a wide range of industries.",
        icon: SiHeadlessui,
    },
    {
        name: "Game Development with Lua",
        description: "Utilize Lua's speed and portability in game development to create robust, interactive gaming experiences with faster loading times and improved gameplay mechanics.",
        icon: IoGameController,
    },
    {
        name: "Lua for IoT Solutions",
        description: "We develop Internet of Things (IoT) solutions using Lua, offering a scalable, lightweight scripting environment that enhances device connectivity and data exchange.",
        icon: FaTowerBroadcast,
    },
    {
        name: "Custom API Integration Services",
        description: "Our services include custom API development and integration, utilizing Lua to ensure seamless communication between your applications and third-party services.",
        icon: AiFillApi,
    },
    {
        name: "Lua Consulting Services",
        description: "Gain from our deep expertise in Lua for strategic consulting on project development, optimization, and implementation to align technology with your business objectives.",
        icon: FaChartLine,
    },
    {
        name: "Lua Training and Workshops",
        description: "We offer Lua training and workshops to help developers enhance their skills and leverage Lua's capabilities effectively in their projects. Our experienced trainers provide hands-on guidance and practical knowledge.",
        icon: PiStudentBold,
    },
    {
        name: "Lua Support and Maintenance",
        description: "Our team provides ongoing support and maintenance services for Lua-based applications. We ensure the smooth operation of your Lua applications, handle bug fixes, and provide timely updates.",
        icon: FaLifeRing,
    },
];

export const dataV3 = [
    {
        name: "Core Features and Limitations",
        furtherList: [
            {
                name: "Limited Built-in Data Structures",
                description: "Unlike languages that have extensive pre-built structures, Lua lacks built-in support for common data structures like arrays and dictionaries. This requires developers to either use external libraries or implement these structures themselves.",
            },
            {
                name: "Object-Oriented Programming (OOP) Support",
                description: "Lua offers limited OOP support which can be a challenge for developers accustomed to fully OOP-centric languages. However, this can also be seen as a simplification, reducing the overhead of managing complex OOP paradigms.",
            },
            {
                name: "Performance",
                description: "While Lua is incredibly efficient as a lightweight scripting language, it may exhibit slower performance compared to compiled languages like C or C++. This is an important consideration for performance-critical applications.",
            },
        ],
    },
    {
        name: "Community and Learning Resources",
        description: "Lua boasts a rich community despite its size. Forums, Discord channels, and various online events provide platforms for both novice and experienced developers to share knowledge and solve problems collectively. The availability of learning resources such as articles, code challenges, and videos further supports developers in mastering Lua.",
    },
    {
        name: "Development and Application",
        description: "Lua is extensively used in industries requiring high-performance and lightweight scripting solutions, particularly in game development and embedded systems. Its simplicity and the power of its portability make it an ideal choice for embedding into applications that require a scripting capability on diverse hardware platforms.",
    },
    {
        name: "Extensibility and Integration",
        description: "Lua's design allows for easy extension with C libraries, making it a versatile choice for projects that require integration with other programming languages. The ANSI C-based interpreter underscores Lua's portability, ensuring it can run on a myriad of devices from high-end servers to portable devices.",
    },
    {
        name: "Openness and Licensing",
        description: "As an open-source language under the MIT license, Lua promotes a permissive use case, encouraging widespread adoption and modification. The language's simple, yet powerful, framework supports a variety of programming paradigms and application scenarios, from web scripting to complex game development.",
    },
];


export const dataFAQ = [
    {
        question: "What is the origin of the Lua programming language?",
        answer: "Lua was created and is continually developed by a team at the Pontifical Catholic University of Rio de Janeiro (PUC-Rio) in Brazil. It originated from Tecgraf, which was the Computer Graphics Technology Group at PUC-Rio, and is now part of LabLua, a laboratory within the university's Department of Computer Science.",
    },
    {
        question: "Can you list some applications built with Lua?",
        answer: "Lua is utilized in various applications, notably in the gaming industry for titles such as Roblox and World of Warcraft. Beyond gaming, Lua is employed for scripting in custom applications and is integrated into network systems like those from CISCO and Nmap. Additionally, software such as Adobe Lightroom and MySQL Workbench have been developed using Lua scripting.",
    },
    {
        question: "Which well-known software programs are powered by Lua?",
        answer: "Adobe Photoshop Lightroom is primarily developed in Lua and also supports Lua-based plugins. The online gaming platform Roblox, which allows users to create and play games in Lua, is another example. Furthermore, the popular game Angry Birds is largely written in Lua.",
    },
    {
        question: "Do businesses incorporate Lua into their technology stacks?",
        answer: "Yes, Lua is utilized by numerous companies within their technology infrastructures. Reports indicate that at least 416 companies, including prominent names like Shopify, Tokopedia, and ROBLOX, have incorporated Lua into their tech stacks.",
    },
];
