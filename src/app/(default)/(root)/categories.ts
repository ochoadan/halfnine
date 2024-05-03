import { PythonIcon, CIcon, JavaIcon, CPlusPlusIcon, NodeJsIcon, GoLangIcon, PHPIcon, AssemblyIcon, RustIcon, RubyIcon, MicrosoftDotNetIcon, ReactIcon, FlutterIcon, NextJSIcon, DockerIcon, KubernetesIcon, GitLabIcon, OpenShiftIcon, GrafanaIcon, AWSIcon, AzureIcon, GoogleCloudIcon, AkamaiIcon, DigitalOceanIcon, CloudFlareIcon, BurpSuiteIcon, NmapIcon, WireSharkIcon, MetaSploitIcon, LaravelIcon, ExpressJSIcon, WordPressIcon } from "@/components/Global/icons";
import { BsThreeDots } from "react-icons/bs";

// android, bash, dart, electron, flutter, gatsby, gcp, git, grafana, graphql, heroku, javascript, jenkins, jest, kotlin, linux, mariadb, mysql, nextjs, nginx, nodejs, nuxtjs, postgresql, postman, python, react, redis, sqlite, travisci, vuejs, vuepress, zapier

export const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: PythonIcon },
      { name: "C", icon: CIcon },
      { name: "Java", icon: JavaIcon, url: "/services/software-development/java" },
      { name: "C++", icon: CPlusPlusIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Go", icon: GoLangIcon },
      { name: "PHP", icon: PHPIcon },
      { name: "Assembly", icon: AssemblyIcon },
      { name: "Rust", icon: RustIcon },
      { name: "Ruby", icon: RubyIcon },
      // { name: "Swift", icon: JavaScriptIcon },
      // { name: "JavaScript", icon: JavaScriptIcon },
      // { name: "TypeScript", icon: TypeScriptIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
  {
    // title: "Full-Stack & Cross-platform Frameworks",
    title: "Frameworks",
    items: [
      { name: "Microsoft .NET", icon: MicrosoftDotNetIcon, url: "/services/software-development/dotnet" },
      { name: "React", icon: ReactIcon },
      { name: "Flutter", icon: FlutterIcon },
      { name: "Laravel", icon: LaravelIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "Express.js", icon: ExpressJSIcon },
      // { name: "Svelte", icon: ExpressJSIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
  // {
  //   title: "CMS & E-Commerce",
  //   items: [
  //     { name: "WordPress", icon: WordPressIcon },
  //     { name: "WordPress", icon: WordPressIcon },
  //     { name: "And More", icon: BsThreeDots },
  //   ],
  // },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: DockerIcon },
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "GitLab CI/CD", icon: GitLabIcon },
      { name: "OpenShift", icon: OpenShiftIcon },
      { name: "Grafana", icon: GrafanaIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
  {
    title: "Clouds",
    items: [
      { name: "AWS", icon: AWSIcon },
      { name: "Azure", icon: AzureIcon },
      { name: "Google Cloud", icon: GoogleCloudIcon },
      { name: "Akamai Cloud", icon: AkamaiIcon },
      { name: "DigitalOcean", icon: DigitalOceanIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      { name: "Cloudflare", icon: CloudFlareIcon },
      { name: "Burp Suite", icon: BurpSuiteIcon },
      { name: "Nmap", icon: NmapIcon },
      { name: "Wireshark", icon: WireSharkIcon },
      { name: "Metasploit", icon: MetaSploitIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
];
