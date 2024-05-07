import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { FaRobot } from "react-icons/fa6";
import { GiSpeedometer } from "react-icons/gi";
import { MdDashboardCustomize, MdOutlineSecurity } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dataV1 = [
    {
        name: "Cross-Platform Compatibility",
        description: "PowerShell operates seamlessly across various platforms, including Windows, Linux, and macOS. This flexibility ensures that businesses can deploy PowerShell solutions regardless of their existing operating system environment, facilitating a unified scripting solution across diverse IT infrastructures.",
    },
    {
        name: "Automation of Repetitive Tasks",
        description: "By automating routine and time-consuming tasks, PowerShell significantly enhances efficiency and minimizes human errors. This automation extends from simple operations like user account management to more complex system configurations, streamlining processes and freeing up valuable IT resources for more strategic tasks.",
    },
    {
        name: "Enhanced Security Measures",
        description: "PowerShell scripts play a crucial role in enforcing security protocols. By automating security policies and monitoring systems for unusual activities, PowerShell helps maintain high security standards, protecting businesses from potential threats and vulnerabilities.",
    },
    {
        name: "Integration with Existing Systems",
        description: "PowerShell's ability to integrate smoothly with existing IT ecosystems allows organizations to leverage their current technology investments. This integration capability is particularly beneficial for businesses looking to enhance their systems without the need for substantial new investments in technology.",
    },
    {
        name: "Cost Efficiency",
        description: "Developing custom PowerShell solutions can be more cost-effective than purchasing off-the-shelf software products. Tailored solutions mean businesses pay only for the functionality they need, avoiding the extra costs associated with broader, less specific software solutions.",
    },
    {
        name: "Scalability and Customization",
        description: "As businesses grow, their technology needs evolve. PowerShell's scalable nature means that solutions can grow and adapt in line with business needs. Custom solutions ensure that these adaptations are perfectly aligned with the company's evolving requirements, providing precise tools that fit the business's operational workflow.",
    },
    // {
    //     name: "Streamlined Management and Reporting",
    //     description: "PowerShell facilitates the creation of detailed reports and provides comprehensive audit trails, which are invaluable for tracking system changes and understanding IT infrastructure dynamics. This capability supports better management decisions and compliance with regulatory standards.",
    // },
];

export const dataV2 = [
    {
        name: "Custom Software Development",
        description: "Tailoring PowerShell solutions to meet the unique requirements of your business, ensuring that every script and module aligns perfectly with your IT infrastructure and business goals.",
        icon: MdDashboardCustomize,
    },
    {
        name: "Application Integration Services",
        description: "Facilitating seamless integration of PowerShell with existing applications and systems to enhance operational efficiency and streamline workflow processes across various platforms.",
        icon: PuzzlePieceIcon,
    },
    {
        name: "System Automation Consulting",
        description: "Providing expert consultation on automating repetitive tasks and complex processes, reducing manual effort and increasing reliability through well-crafted PowerShell scripts.",
        icon: FaRobot,
    },
    {
        name: "Security and Compliance Solutions",
        description: "Developing robust security frameworks using PowerShell to automate compliance checks and enforce security policies, safeguarding your IT environment against vulnerabilities.",
        icon: MdOutlineSecurity,
    },
    {
        name: "PowerShell Training and Support",
        description: "Offering comprehensive training sessions to empower your IT staff with the skills needed to utilize PowerShell effectively, accompanied by ongoing support to address any operational challenges.",
        icon: PiStudentBold,
    },
    {
        name: "Performance Optimization",
        description: "Analyzing and refining existing PowerShell scripts and systems to enhance performance, ensuring that your IT operations run smoothly and efficiently at all times.",
        icon: GiSpeedometer,
    },
];

export const dataV3 = [
    {
        name: "Modules and Script Management",
        description: "Modules in PowerShell help organize, partition, and abstract code into self-contained, reusable units. These modules not only facilitate production-ready scripting solutions but also allow developers to manage visibility by exporting only the necessary functions or variables. This system supports a robust development environment where scripts can be converted to modules simply by renaming with a .PSM1 extension, enhancing the reusability and distribution of code.",
    },
    {
        name: "Cross-Platform Versatility",
        description: "With the advent of PowerShell Core, based on the .NET Core runtime, PowerShell has embraced a cross-platform approach. This version is designed to manage not only Windows but also Unix systems and newer operating systems, reflecting Microsoft's commitment to broadening PowerShell's utility across different platforms. The dual-version strategy ensures that while PowerShell 5.1 continues to serve Windows-specific needs, PowerShell Core evolves with new features and broader OS compatibility.",
    },
    {
        name: "Automation and Configuration Management",
        description: "PowerShell's capability extends to task automation and configuration management through its Desired State Configuration (DSC). This framework enables the management of enterprise infrastructure with configuration as code, which is crucial for maintaining consistency and compliance across IT environments. DSC supports both push and pull deployment models, allowing for flexible management strategies.",
    },
    {
        name: "Community and Third-Party Contributions",
        description: "The ecosystem thrives on an active community and contributions from third-party vendors who offer specialized modules and task automation scripts. These contributions enhance the versatility and functionality of PowerShell, making it a pivotal tool in IT environments. The community-driven approach ensures continuous improvement and adaptation of PowerShell to meet modern IT demands.",
    },
];


export const dataFAQ = [
    {
        question: "Is PowerShell utilized by software engineers?",
        answer: "Yes, while system administrators are the primary users of PowerShell, software engineers and developers also leverage this tool for various tasks.",
    },
    {
        question: "What is the recommended editor for writing PowerShell scripts?",
        answer: "The preferred editor for PowerShell scripting is Visual Studio Code, particularly when equipped with the PowerShell extension. This setup supports PowerShell versions 7.2 and above on Windows, macOS, and Linux.",
    },
    {
        question: "How can one create a custom module in PowerShell?",
        answer: "To create a custom module in PowerShell, follow these steps: • 1. Create the module directory using the command `Mkdir <module name>`. • 2. Copy the PSM1 file into the newly created `<module name>` directory. • 3. Generate the manifest file with the .psd1 extension and provide an example. • 4. Edit the manifest .psd1 file, ensuring to uncomment and fill in the necessary properties.",
    },
];
