import { PythonIcon, CIcon, JavaIcon, CPlusPlusIcon, NodeJsIcon, GoLangIcon, PHPIcon, AssemblyIcon, RustIcon, RubyIcon, MicrosoftDotNetIcon, ReactIcon, FlutterIcon, NextJSIcon, DockerIcon, KubernetesIcon, GitLabIcon, OpenShiftIcon, GrafanaIcon, AWSIcon, AzureIcon, GoogleCloudIcon, AkamaiIcon, DigitalOceanIcon, CloudFlareIcon, BurpSuiteIcon, NmapIcon, WireSharkIcon, MetaSploitIcon, LaravelIcon, ExpressJSIcon, WordPressIcon, JQueryIcon, JavaScriptIcon, TypeScriptIcon, AngularIcon, VueJSIcon, FlaskIcon, SpringIcon, DjangoIcon, FastAPIIcon, SvelteIcon, RubyOnRailsIcon, NestJSIcon } from "@/components/Global/icons";
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
      { name: "Angular", icon: AngularIcon, url: "/services/software-development/angular" },
      { name: "Next.js", icon: NextJSIcon, url: "/services/software-development/nextjs" },
      { name: "Microsoft .NET", icon: MicrosoftDotNetIcon, url: "/services/software-development/dotnet" },
      { name: "Vue.js", icon: VueJSIcon, url: "/services/software-development/vuejs" },
      { name: "WordPress", icon: WordPressIcon, url: "/services/software-development/wordpress" },
      { name: "Flask", icon: FlaskIcon, url: "/services/software-development/flask" },
      { name: "Spring", icon: SpringIcon, url: "/services/software-development/spring" },
      { name: "Django", icon: DjangoIcon, url: "/services/software-development/django" },
      { name: "Laravel", icon: LaravelIcon, url: "/services/software-development/laravel" },
      { name: "FastAPI", icon: FastAPIIcon, url: "/services/software-development/fastapi" },
      { name: "Svelte", icon: SvelteIcon, url: "/services/software-development/svelte" },
      { name: "Ruby on Rails", icon: RubyOnRailsIcon, url: "/services/software-development/rubyonrails" },
      { name: "NestJS", icon: NestJSIcon, url: "/services/software-development/nestjs" },
      // Divider
      { name: "Flutter", icon: FlutterIcon },
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
