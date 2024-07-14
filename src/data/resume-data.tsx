import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { ToptalIcon } from "@/components/icons/toptalIcon";
import { ScholarIcon } from "@/components/icons/scholarIcon";


export const RESUME_DATA = {
  name: "Eldor Abdukhamidov, PhD",
  initials: "EA",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "AI Engineer focused on Computer Vision. Mobile Developer specialized in Android and iOS applications using Flutter technologies. Committed to developing detailed, robust solutions.",
  summary:
    "As an AI Researcher and Flutter Developer, I have a rich background in Computer Science, with a focus on software security, web security, and ML/DL applications. Holding a combined MS/PhD from Sungkyunkwan University and various nanodegrees in AI and machine learning, I bring expertise in Python and Dart. My experience spans developing visual technology systems at DeltaX and designing mobile applications at Toptal. With my history of academic and professional achievements, including open-source contributions and leadership in AI challenges, I excel in driving innovation and technological advancements in diverse environments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22902231?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "mr.eldorabdukhamidov@gmail.com",
    tel: "+48530213401",
    social: [
      {
        name: "Toptal",
        url: "https://www.toptal.com/resume/eldor-abdukhamidov",
        icon: ToptalIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=m-IpfOMAAAAJ&hl=en",
        icon: ScholarIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/eldorabdukhamidov",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eldor-abdukhamidov-00aa17135/",
        icon: LinkedInIcon,
      },

    ],
  },
  education: [
    {
      school: "Sungkyunkwan University",
      degree: "Combined Degree(MS/PhD) in Computer Science and Information Engineering",
      badges: ['MSc', 'PhD'],
      start: "2020",
      end: "2024",
    },
    {
      school: "Udacity",
      degree: "Nanodegrees in Machine Learning Engineer, Deep Learning, and Artificial Intelligence",
      badges: [],
      start: "2020",
      end: "2020",
    },
    {
      school: "Inha University in Tashkent",
      degree: "Bachelor of Science in Computer Science and Information Engineering",
      badges: ['BSc'],
      start: "2015",
      end: "2019",
    },

  ],
  work: [
    {
      company: "DeltaX",
      link: "http://deltax.ai/renewal/eng/",
      badges: ["South Korea", "Seoul"],
      title: "AI Researcher",
      start: "2022",
      end: "Present",
      description:
        "Developed new systems to enhance the efficacy of visual technology and adapted existing technology for specific tasks.Conducted research in vision engineering. Technologies: Python, AI/ ML frameworks.",
    },
    {
      company: "Toptal",
      link: "https://www.toptal.com/",
      badges: ["Remote"],
      title: "Mobile Developer",
      start: "2021",
      end: "Present",
      description:
        "Designed and developed applications, wrote clean code, and participated in the development lifecycle. Investigated new technologies to accelerate development and stayed abreast of trends. Technologies: Flutter, Dart.",
    },
    {
      company: "Info Lab",
      link: "https://infolab.skku.edu/",
      badges: ['South Korea', 'Suwon'],
      title: "Research Assistant",
      start: "2020",
      end: "2023",
      description: "Conducted research in software security, web security, privacy, and ML / DL applications to computer security.",
    },
    {
      company: "Udacity",
      link: "https://udacity.com/",
      badges: ['Remote'],
      title: "Machine Learning Session Lead",
      start: "2021",
      end: "2022",
      description:
        "Shared experiences and insights, provided feedback, and fostered a learning community in machine learning.",
    },
    {
      company: "Sungkyunkwan University",
      link: "https://www.skku.edu/",
      badges: ['South Korea', 'Suwon'],
      title: "Teaching Assistant",
      start: "2020",
      end: "2022",
      description: "Assisted in teaching, graded assignments and exams, and led discussions in courses including Java Programming, C Programming, Computer Security, Web Programming.",
    },
    {
      company: "Cloudlinux",
      link: "https://www.cloudlinux.com/",
      badges: ['Remote', 'USA'],
      title: "Python Developer",
      start: "2020",
      end: "2021",
      description: "Investigated technical issues, communicated with support teams, wrote documentation, and reviewed code for CloudLinux projects. Technologies: Python.",
    },
    {
      company: "Raisense",
      link: "",
      badges: ['Uzbekistan', 'Tashkent'],
      title: "Co-founder and Mobile Developer",
      start: "2019",
      end: "2020",
      description: "Created custom mobile applications using native technologies. Technologies: Java, Kotlin.",
    },

  ],
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "OpenCV",
    "Pytorch",
    "Kotlin",
    "Android",
    "iOS",
    "Dart",
    "Flutter",
  ],
  opensources: [
    {
      title: "TextAttack",
      techStack: [
        "Python",
        "Pytorch",
        "Vite",
        "Transformers",
      ],
      description: "Python framework for adversarial attacks, data augmentation, and model training in NLP",
      link: {
        label: "textattack",
        href: "https://github.com/QData/TextAttack",
      },
    },
    {
      title: "Ivy",
      techStack: ["LLVM", "MLIR", "OneAPI"],
      description:
        "Unified framework that supports JAX, TensorFlow, PyTorch, and Numpy.",
      link: {
        label: "unifyai",
        href: "https://github.com/unifyai/ivy",
      },
    },
  ],

  researchPapers: [
    {
      title: "AdViT: Attacking Interpretable Vision Transformers",
      status: ["Under Review"],
      authors: "E. Abdukhamidov, M. Abuhamad, S. Woo, H. Kim, T. Abuhmed",
      venue: "IEEE Transactions on Image Processing",
      // link: "https://ieeexplore.ieee.org/abstract/document/10352932/",
    },
    {
      title: "Stealthy Query-Efficient Black-Box Attack against Interpretable Deep Learning",
      status: ["Under Review", "Revision"],
      authors: "E. Abdukhamidov, M. Abuhamad, S. Woo, E. Chan-Tin, T. Abuhmed",
      venue: "IEEE Transactions on Reliability",
      // link: "https://ieeexplore.ieee.org/abstract/document/10352932/",
    },
    {
      title: "SingleADV: Single-Class Target-Specific Attack against Interpretable Deep Learning Systems",
      status: [],
      authors: "E. Abdukhamidov, M. Abuhamad, G. K.Thiruvathukal, H. Kim, T. Abuhmed",
      venue: "IEEE Transactions on Information Forensics & Security",
      link: "https://ieeexplore.ieee.org/abstract/document/10542231",
    },
    {
      title: "Hardening Interpretable Deep Learning Systems: Investigating Adversarial Threats and Defenses",
      status: [],
      authors: "E. Abdukhamidov, M. Abuhamad, S. Woo, E. Chan-Tin, T. Abuhmed",
      venue: "IEEE Transactions on Dependable and Secure Computing",
      link: "https://ieeexplore.ieee.org/abstract/document/10352932/",
    },
    {
      title: "Black-box and Target-specific Attack Against Interpretable Deep Learning Systems",
      status: [],
      authors: "E. Abdukhamidov, F. Juraev, M. Abuhamad, T. Abuhmed",
      venue: "Proceedings of the 2022 ACM on Asia Conference on Computer and Communications Security",
      link: "https://dl.acm.org/doi/abs/10.1145/3488932.3527283",
    },
    {
      title: "Advedge: Optimizing adversarial perturbations against interpretable deep learning",
      status: [],
      authors: "E. Abdukhamidov, M. Abuhamad, F. Juraev, E. Chan-Tin, T. Abuhmed",
      venue: "Computational Data and Social Networks: 10th International Conference, CSoNet 2021",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-91434-9_9",
    },

    {
      title: "Multilayer dynamic ensemble model for intensive care unit mortality prediction of neonate patients",
      status: [],
      authors: "F. Juraev, Sh. El-Sappagh, E. Abdukhamidov, F. Ali, T. Abuhmed",
      venue: "Journal of Biomedical Informatics",
      link: "https://www.sciencedirect.com/science/article/pii/S1532046422002210",
    },

    {
      title: "Depth, breadth, and complexity: Ways to attack and defend deep learning models",
      status: [],
      authors: "F. Juraev, E. Abdukhamidov, M. Abuhamad, T. Abuhmed",
      venue: "Proceedings of the 2022 ACM on Asia Conference on Computer and Communications Security",
      link: "https://dl.acm.org/doi/abs/10.1145/3488932.3527278",
    },

    {
      title: "Leveraging spectral representations of control flow graphs for efficient analysis of windows malware",
      status: [],
      authors: "Q. Sun, E. Abdukhamidov, T. Abuhmed, M. Abuhamad",
      venue: "Proceedings of the 2022 ACM on Asia Conference on Computer and Communications Security",
      link: "https://dl.acm.org/doi/abs/10.1145/3488932.3527294",
    },
    {
      title: "MLxPack: Investigating the Effects of Packers on ML-based Malware Detection Systems Using Static and Dynamic Traits",
      status: [],
      authors: "Q. Sun, M. Abuhamad, E. Abdukhamidov, E.Chan-Tin, T. Abuhmed",
      venue: "Proceedings of the 1st Workshop on Cybersecurity and Social Sciences",
      link: "https://dl.acm.org/doi/abs/10.1145/3494108.3522768",
    },

  ],
  leadershipAndAwards: [
    {
      name: "President Tech Award Competition in Cyber Security",
      badges: ['Finalist'],
      organization: "IT Park",
      date: "2023",
      role: ""
    },
    {
      name: "AI & Big Data Challenge Winner",
      badges: ['Twice'],
      organization: "Daewoong Foundation",
      date: "2022",
      role: ""
    },
    {
      name: "STEM Scholarship Winner",
      badges: ['7 semesters'],
      organization: "SKKU",
      date: "2020 - 2023",
      role: ""
    },
    {
      name: "Microsoft AI Guardians Competition",
      badges: ['Finalist'],
      organization: "Microsoft",
      date: "2019",
      role: ""
    },
    {
      name: "Mentor in Microsoft Hour of Code",
      badges: [],
      organization: "Microsoft",
      date: "2019",
      role: ""
    },

    {
      name: "Mentor in Digital Generation Camp",
      badges: [],
      organization: "Digital Generation",
      date: "2019",
      role: ""
    },
    {
      name: "Top Ten Student Scholarship Award Recipient",
      badges: ['6 times'],
      organization: "Inha University",
      date: "2015-2019",
      role: ""
    },
    {
      name: "Open Data Challenge Hackathon Winner",
      badges: ['3rd place'],
      organization: "MICT",
      date: "2018",
      role: ""
    },
    {
      name: "Member of the Union of Youth of the Republic of Uzbekistan",
      badges: [],
      organization: "Union of Youth",
      date: "2018",
      role: ""
    },
    {
      name: "Volunteer for Touch Math Festival",
      badges: [],
      organization: "Inha University",
      date: "2018",
      role: ""
    },



  ],
  projects: [
    {
      title: "Avto Exam",
      techStack: [
        "Side Project",
        "Flutter",
        "Android",
      ],
      description: "Quiz app for driving exams",
      link: {
        label: "avtoexam",
        href: "https://play.google.com/store/apps/details?id=uz.raisense.avtotest&hl=en",
      },
    },
    {
      title: "Multipay",
      techStack: ["Contributor", "Kotlin", "Android"],
      description:
        "Payment app for KDB Bank",
      link: {
        label: "kdb.uz",
        href: "https://play.google.com/store/apps/details?id=uz.xsoft.multipay",
      },
    },
    {
      title: "Music Platform",
      techStack: ["Developer", "Flutter", "Web"],
      description:
        "We app for Bopper Music platform",
      link: {
        label: "www.boppermusic.com",
        href: "https://www.boppermusic.com/browse",
      },
    },
    {
      title: "Partiya edi",
      techStack: ["Developer", "Flutter"],
      description:
        "First online restaurant in Uzbekistan",
      link: {
        label: "partiyaedi.uz",
        href: "https://play.google.com/store/apps/details?id=uz.raisense.partiya_edi&hl=en",
      },
    },
    {
      title: "Saylov 2019",
      techStack: ["Developer", "Flutter"],
      description:
        "Info app about the election in Uzbekistan",
      link: {
        label: "saylov.uz",
        href: "https://play.google.com/store/apps/details?id=uz.raisense.saylov&hl=en",
      },
    },
  ],
} as const;
