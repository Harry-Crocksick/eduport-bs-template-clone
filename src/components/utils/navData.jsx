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
  { title: "Home Default" },
  { title: "Home Education" },
  { title: "Home Academy" },
  { title: "Home Course" },
  { title: "Home University" },
  { title: "Home Kindergarten" },
  { title: "Home Landing" },
  { title: "Home Tutor" },
  { title: "Home School" },
  { title: "Home Abroad" },
  { title: "Home Workshop" },
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
  { title: "Market research" },
  { title: "Advertising" },
  { title: "Consumer behavior" },
  { title: "Digital marketing" },
  { title: "Marketing ethics" },
  { title: "Social media marketing" },
  { title: "Public relations" },
  { title: "Advertising" },
  { title: "Decision science" },
  { title: "SEO" },
  { title: "Business marketing" },
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

const popularCourses = [
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/08.jpg",
    difficulty: "All level",
    title: "Sketch from A to Z: for app designer",
    description: "Proposal indulged no do sociable he throwing settling.",
    rating: 4.0,
    duration: "12h 56m",
    lectures: "15 lectures",
    tags: ["Web Design", "Graphic Design", "Marketing"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/02.jpg",
    difficulty: "Beginner",
    title: "Graphic Designer Masterclass",
    description:
      "Rooms oh fully taken by worse do Points afraid but may end Room",
    rating: 4.5,
    duration: "9h 56m",
    lectures: "65 lectures",
    tags: ["Web Design", "Graphic Design"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/03.jpg",
    difficulty: "Beginner",
    title: "Create a Design System in Figma",
    description:
      "Rooms oh fully taken by worse do. Points afraid but may end afraid",
    rating: 4.5,
    duration: "5h 56m",
    lectures: "32 lectures",
    tags: ["Web Design", "Graphic Design"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/07.jpg",
    difficulty: "Beginner",
    title: "Deep Learning with React-Native",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: 4.0,
    duration: "18h 56m",
    lectures: "99 lectures",
    tags: ["Web Design", "Development"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/11.jpg",
    difficulty: "All level",
    title: "Build Responsive Websites with HTML",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: 4.0,
    duration: "15h 30m",
    lectures: "68 lectures",
    tags: ["Web Design"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/12.jpg",
    difficulty: "Beginner",
    title: "Build Websites with CSS",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: 4.5,
    duration: "36h 30m",
    lectures: "72 lectures",
    tags: ["Web Design"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/04.jpg",
    difficulty: "All level",
    title: "Learn Invision",
    description:
      "Arrived off she elderly beloved him Course regard to up he hardly.",
    rating: 4.0,
    duration: "6h 56m",
    lectures: "82 lectures",
    tags: ["Web Design", "Graphic Design", "Finance"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/09.jpg",
    difficulty: "All level",
    title: "JavaScript: Full Understanding",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther.",
    rating: 5.0,
    duration: "35h 56m",
    lectures: "89 lectures",
    tags: ["Web Design", "Development", "Finance"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/06.jpg",
    difficulty: "Intermediate",
    title: "Angular - The Complete Guider",
    description: "Rooms oh fully taken by worse do. Points afraid but may end.",
    rating: 4.5,
    duration: "9h 32m",
    lectures: "42 lectures",
    tags: ["Development"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/05.jpg",
    difficulty: "Beginner",
    title: "The Complete Web Development in python",
    description: "Mention Mr manners opinion if garrets enabled.",
    rating: 4.5,
    duration: "10h 00m",
    lectures: "26 lectures",
    tags: ["Development"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/10.jpg",
    difficulty: "Intermediate",
    title: "Bootstrap 5 From Scratch",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: 4.5,
    duration: "25h 56m",
    lectures: "38 lectures",
    tags: ["Development"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/13.jpg",
    difficulty: "Beginner",
    title: "PHP with - CMS Project",
    description:
      "Far advanced settling say finished raillery. Offered chiefly farther.",
    rating: 4.0,
    duration: "21h 22m",
    lectures: "30 lectures",
    tags: ["Development"],
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/01.jpg",
    difficulty: "Beginner",
    title: "Digital Marketing Masterclass",
    description: "Delivered dejection necessary objection do Mr prevailed.",
    rating: 5.0,
    duration: "6h 56m",
    lectures: "82 lectures",
    tags: ["Marketing"],
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
  popularCourses,
};
