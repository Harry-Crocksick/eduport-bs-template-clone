const navLinks = ["Demos", "Pages", "Accounts", "Megamenu"];
const categories = [
  {
    title: "Development",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  { title: "Design" },
  { title: "Marketing", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  { title: "Music" },
  { title: "Lifestyle" },
  { title: "IT & Software" },
  { title: "Personal development" },
  { title: "Health & fitness" },
  { title: "Teaching" },
  { title: "Social science" },
  { title: "Math & Logic" },
];
const demos = [
  "Home Default",
  "Home Education",
  "Home Academy",
  "Home Course",
  "Home University",
  "Home Kindergarten",
  "Home Landing",
  "Home Tutor",
  "Home School",
  "Home Abroad",
  "Home Workshop",
];
const pages = [
  { title: "Course", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  { title: "About", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  {
    title: "Hero Banner",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  { title: "Instructor List" },
  { title: "Instructor Single" },
  { title: "Become an Instructor" },
  { title: "Abroad Single" },
  { title: "Workshop Detail" },
  { title: "Event Detail" },
  { title: "Shop", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  { title: "Help", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  {
    title: "Authentication",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  { title: "Form", kebab: <i className="fa-solid fa-ellipsis fa-fw"></i> },
  {
    title: "Speciality",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
];
const accounts = [
  {
    icon: <i className="fa-solid fa-user-tie fa-fw"></i>,
    title: "Instructor",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  {
    icon: <i className="fa-solid fa-user-graduate fa-fw"></i>,
    title: "Student",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  { icon: <i className="fa-solid fa-user-gear fa-fw"></i>, title: "Admin" },
  {
    icon: <i className="fa-regular fa-pen-to-square fa-fw"></i>,
    title: "Edit Profile",
  },
  { icon: <i className="fa-solid fa-gear fa-fw"></i>, title: "Settings" },
  {
    icon: <i className="fa-solid fa-trash-can fa-fw"></i>,
    title: "Delete Profile",
  },
  {
    icon: "",
    title: "Dropdown Levels",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
];
const more = [
  {
    icon: <i className="text-yellow-500 fa-solid fa-life-ring fa-fw"></i>,
    title: "Support",
  },
  {
    icon: <i className="text-rose-500 fa-solid fa-book fa-fw"></i>,
    title: "Documentation",
  },
  {
    icon: <i className="text-sky-500 fa-solid fa-toggle-off fa-fw"></i>,
    title: "RTL demo",
  },
  {
    icon: <i className="text-lime-500 fa-solid fa-cloud-arrow-down fa-fw"></i>,
    title: "Buy Eduport!",
  },
  {
    icon: <i className="text-orange-500 fa-solid fa-puzzle-piece fa-fw"></i>,
    title: "Components",
  },
  {
    icon: <i className="text-purple-500 fa-solid fa-note-sticky fa-fw"></i>,
    title: "Snippets",
  },
];

const getStarted = [
  "Market research",
  "Advertising",
  "Consumer behavior",
  "Digital marketing",
  "Marketing ethics",
  "Social media marketing",
  "Public relations",
  "Advertising",
  "Decision science",
  "SEO",
  "Business marketing",
];

const degree = [
  {
    heading: "Contact management",
    description:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child.",
  },
  {
    heading: "Sales pipeline",
    description:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child.",
  },
  {
    heading: "Security & Permission",
    description:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child.",
  },
];

const certificate = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    heading: "Google SEO certificate",
    description: "No prerequisites",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    heading: "Business Development Executive(BDE)",
    description: "No prerequisites",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    heading: "Facebook social media marketing",
    description: "No prerequisites",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    heading: "Creative graphic design",
    description: "No prerequisites",
  },
];

const devSub = [
  {
    title: "Web Development",
    kebab: <i className="fa-solid fa-ellipsis fa-fw"></i>,
  },
  { title: "Data Science" },
  { title: "Mobile Development" },
  { title: "Programming Language" },
  { title: "Software Testing" },
  { title: "Software Engineering" },
  { title: "Software Testing Tools" },
];

const marketingDegree = [
  {
    icon: "https://eduport.webestica.com/assets/images/client/uni-logo-01.svg",
    heading: "American Century University, New Mexico",
    description: "Bachelor of computer science",
  },
  {
    icon: "https://eduport.webestica.com/assets/images/client/uni-logo-02.svg",
    heading: "Indiana College of - Bloomington",
    description: "Masters of computer science",
  },
  {
    icon: "https://eduport.webestica.com/assets/images/client/uni-logo-03.svg",
    heading: "College of South Florida",
    description: "Medical science college",
  },
  {
    icon: "https://eduport.webestica.com/assets/images/client/uni-logo-01.svg",
    heading: "Andeerson College",
    description: "Bachelor of computer science",
  },
  {
    icon: "https://eduport.webestica.com/assets/images/client/uni-logo-04.svg",
    heading: "University of South California",
    description: "Masters of business development",
  },
];

export {
  accounts,
  pages,
  demos,
  categories,
  navLinks,
  more,
  getStarted,
  degree,
  certificate,
  devSub,
  marketingDegree,
};
