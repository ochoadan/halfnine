import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { FaBrain, FaRobot } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Enhanced Problem Solving with Declarative Programming",
        description: "Prolog allows developers to focus on what needs to be solved rather than how to solve it. This shift from procedural to declarative programming means that you can define rules and facts, and the Prolog interpreter efficiently deduces the best solutions.",
    },
    {
        name: "Superior Handling of Uncertain and Incomplete Information",
        description: "In scenarios where data may be incomplete or uncertain, Prolog's capability to infer solutions based on available information proves invaluable. This makes it ideal for applications like expert systems and natural language processing where precision and adaptability are crucial.",
    },
    {
        name: "Integration with Other Programming Languages",
        description: "Prolog's compatibility with languages like Java enhances its utility in diverse environments, allowing for the creation of more robust and flexible applications that leverage the strengths of both procedural and logic-based programming.",
    },
    {
        name: "Scalability and Security in Custom Applications",
        description: "Custom Prolog solutions are not only scalable but also secure. Since these solutions are tailored specifically for your business, they evolve with your needs and are less prone to common security vulnerabilities found in off-the-shelf software.",
    },
    {
        name: "Comprehensive Customization and Flexibility",
        description: "With custom Prolog development, you gain the ability to dictate every aspect of the application, from its core functionality to its integration capabilities. This level of customization ensures that the software perfectly aligns with your business processes, enhancing productivity and efficiency.",
    },
];

export const dataV2 = [
    {
        name: "AI Solutions and Expert Systems",
        description: "Prolog development companies design expert systems that leverage Prolog's strengths in logic programming to provide powerful AI solutions. These systems are capable of simulating human decision-making processes in fields like medical diagnosis and financial services.",
        icon: FaBrain,
    },
    {
        name: "Natural Language Processing",
        description: "Utilizing Prolog's capabilities, companies develop applications that interpret and generate human language, facilitating enhanced user interactions and data processing in multiple languages.",
        icon: IoLanguage,
    },
    {
        name: "Robotics and Automation",
        description: "Prolog is instrumental in developing solutions for robot planning and control, helping businesses automate processes and enhance operational efficiency in manufacturing and logistics.",
        icon: FaRobot,
    },
    {
        name: "Custom Application Development",
        description: "Prolog development companies create bespoke applications tailored to specific business needs, integrating unique features that leverage Prolog's logical programming framework.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Integration and System Enhancement",
        description: "These companies provide services to integrate Prolog-based solutions with existing IT infrastructure, enhancing system functionality and ensuring seamless operation across platforms.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "Training and Support",
        description: "Offering comprehensive training programs and ongoing support, Prolog development companies equip client teams with the necessary skills to utilize Prolog effectively in their operations, ensuring long-term success and adaptability.",
        icon: PiStudentBold,
    },
];

export const dataV3 = [
    {
        name: "Foundational Features of Prolog",
        description: "Key to Prolog’s operation are its foundational features: unification, backtracking, and recursion.",
        furtherList: [
            {
                name: "Unification",
                description: "This feature allows Prolog to determine if two terms can represent the same structure, facilitating pattern matching which is crucial in logic programming.",
            },
            {
                name: "Backtracking",
                description: "This significant feature enables Prolog to revert to previous states when a solution path fails, ensuring that all potential solutions are explored.",
            },
            {
                name: "Recursion",
                description: "Central to Prolog’s search mechanism, recursion allows for repetitive processing of data until a solution is found or all possibilities are exhausted.",
            },
        ],
    },
    {
        name: "Challenges Faced by Prolog",
        description: "Despite its powerful capabilities in artificial intelligence and natural language processing, Prolog faces challenges, particularly in input/output operations where languages like LISP have superior features. Moreover, the Prolog community, while dedicated, is relatively small and often viewed as niche in the broader programming landscape.",
    },
    {
        name: "Enhancing the Prolog Ecosystem",
        description: "Efforts to enhance the Prolog ecosystem include proposals for a more open Virtual Machine (VM) that could support various logic programming languages, potentially increasing Prolog’s applicability and ease of integration with other technologies. This proposed VM could foster the development of libraries that enhance basic and extended Prolog functionalities, contributing to a more robust and versatile ecosystem.",
    },
];


export const dataFAQ = [
    {
        question: "What are the benefits of using Prolog for software development?",
        answer: "Prolog offers enhanced problem solving, superior handling of uncertain and incomplete information, integration with other programming languages, scalability and security in custom applications, and comprehensive customization and flexibility.",
    },
    {
        question: "What are some applications of Prolog?",
        answer: "Prolog is used in AI solutions and expert systems, natural language processing, robotics and automation, custom application development, integration and system enhancement, and training and support.",
    },
    {
        question: "What are the foundational features of Prolog?",
        answer: "The foundational features of Prolog include unification, backtracking, and recursion.",
    },
];
