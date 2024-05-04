import { PythonIcon, CIcon, JavaIcon, CPlusPlusIcon, NodeJsIcon, GoLangIcon, PHPIcon, AssemblyIcon, RustIcon, RubyIcon, MicrosoftDotNetIcon, ReactIcon, FlutterIcon, NextJSIcon, DockerIcon, KubernetesIcon, GitLabIcon, OpenShiftIcon, GrafanaIcon, AWSIcon, AzureIcon, GoogleCloudIcon, AkamaiIcon, DigitalOceanIcon, CloudFlareIcon, BurpSuiteIcon, NmapIcon, WireSharkIcon, MetaSploitIcon, LaravelIcon, ExpressJSIcon, WordPressIcon, JQueryIcon, JavaScriptIcon, TypeScriptIcon, AngularJSIcon } from "@/components/Global/icons";
import { BsThreeDots } from "react-icons/bs";

// android, bash, dart, electron, flutter, gatsby, gcp, git, grafana, graphql, heroku, javascript, jenkins, jest, kotlin, linux, mariadb, mysql, nextjs, nginx, nodejs, nuxtjs, postgresql, postman, python, react, redis, sqlite, travisci, vuejs, vuepress, zapier

export const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: JavaIcon, url: "/services/software-development/java" },
      { name: "C", icon: CIcon },
      { name: "Rust", icon: RustIcon },
      { name: "Go", icon: GoLangIcon },
      { name: "PHP", icon: PHPIcon },
      { name: "Python", icon: PythonIcon },
      { name: "C++", icon: CPlusPlusIcon },
      { name: "Ruby", icon: RubyIcon },
      { name: "Assembly", icon: AssemblyIcon },
      // { name: "Swift", icon: JavaScriptIcon },
      // { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "And More", icon: BsThreeDots },
    ],
  },
  {
    // title: "Full-Stack & Cross-platform Frameworks",
    title: "Web frameworks and technologies ",
    items: [
      { name: "Node.js", icon: NodeJsIcon, url: "/services/software-development/nodejs" },
      { name: "React", icon: ReactIcon, url: "/services/software-development/react" },
      { name: "jQuery", icon: JQueryIcon, url: "/services/software-development/jquery" },
      { name: "Express", icon: ExpressJSIcon, url: "/services/software-development/express" },
      { name: "Angular", icon: AngularJSIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "Microsoft .NET", icon: MicrosoftDotNetIcon, url: "/services/software-development/dotnet" },
      { name: "Vue.js", icon: ReactIcon },
      { name: "WordPress", icon: WordPressIcon },
      { name: "Flask", icon: ReactIcon },
      { name: "Flutter", icon: FlutterIcon },
      { name: "Laravel", icon: LaravelIcon },
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
