/*
{trendingCourses.map((course, idx) => (
            <SwiperSlide
              key={idx}
              className="group ring-1 ring-slate-900/10 rounded-lg overflow-hidden"
            >
              <div>
                <img src={course.thumbnail} alt={course.title} loading="lazy" />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={
                        course.tags === "Digital" ||
                        course.tags === "Development"
                          ? "bg-blue-100 text-blue-600 font-medium text-sm px-1 py-0.5 rounded-md"
                          : ""
                      }
                    >
                      {course.tags}
                    </span>
                    <span className="bg-black text-white font-medium text-sm px-1 py-0.5 rounded-md">
                      {course.difficulty}
                    </span>
                  </div>
                  <span>
                    <i className="fa-regular fa-bookmark fa-fw fa-md"></i>
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <div className="flex items-center flex-auto justify-between">
                  <div className="flex items-center space-x-1">
                    <span>{course.rating}</span>
                    <span>
                      <i className="fa-solid fa-star fa-fw text-yellow-400"></i>
                    </span>
                    <small className="text-slate-500">({course.raters})</small>
                  </div>
                  <div>
                    <span>
                      {course.students}{" "}
                      <small className="text-slate-500">(Student)</small>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span>
                    <i className="fa-regular fa-clock fa-fw text-rose-600"></i>{" "}
                    {course.duration}
                  </span>
                  <span>
                    <i className="fa-solid fa-table fa-fw text-orange-500"></i>{" "}
                    {course.lectures} lectures
                  </span>
                </div>
                <hr />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={course.tutorImage}
                      alt={course.tutor}
                      className="w-10 h-10 rounded-md"
                      loading="lazy"
                    />
                    <span>{course.tutor}</span>
                  </div>
                  <span className="group-hover:hidden block text-2xl text-emerald-500 font-semibold">
                    {course.fee}
                  </span>
                  <div className="hidden group-hover:flex items-center space-x-2 px-3 py-2 rounded-md bg-emerald-500/10 text-emerald-500">
                    <i class="fa-solid fa-cart-shopping fa-fw"></i>
                    <span className="font-medium">Add to cart</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
 */
const trendingCourses = [
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/15.jpg",
    difficulty: "All level",
    title: "Angular: The Complete Guide(2021 Edition)",
    rating: 4.5,
    raters: 3500,
    duration: "12h 45m",
    students: 4500,
    tutor: "Billy Vasquez",
    fee: "$250",
    lectures: 25,
    tags: "Development",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/01.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/16.jpg",
    difficulty: "Beginner",
    title: "Time Management Mastery: Do More, Stress Less",
    rating: 4.0,
    raters: 3000,
    duration: "24h 56m",
    students: 8000,
    tutor: "Lori Stevens",
    fee: "$500",
    lectures: 12,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/02.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/14.jpg",
    difficulty: "Beginner",
    title: "Time Management Mastery: Do More, Stress Less",
    rating: 4.5,
    raters: 4500,
    duration: "10h 00m",
    students: 5000,
    tutor: "Larry Lawson",
    fee: "$155",
    lectures: 10,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/03.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/17.jpg",
    difficulty: "All level",
    title: "Complete Digital Marketing Course - 8 courses in 1",
    rating: 4.5,
    raters: 3500,
    duration: "12h 45m",
    students: 4500,
    tutor: "Frances Guerrero",
    fee: "$255",
    lectures: 30,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/04.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/15.jpg",
    difficulty: "All level",
    title: "Angular: The Complete Guide(2021 Edition)",
    rating: 4.5,
    raters: 3500,
    duration: "12h 45m",
    students: 4500,
    tutor: "Billy Vasquez",
    fee: "$250",
    lectures: 25,
    tags: "Development",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/01.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/16.jpg",
    difficulty: "Beginner",
    title: "Time Management Mastery: Do More, Stress Less",
    rating: 4.0,
    raters: 3000,
    duration: "24h 56m",
    students: 8000,
    tutor: "Lori Stevens",
    fee: "$500",
    lectures: 12,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/02.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/14.jpg",
    difficulty: "Beginner",
    title: "Time Management Mastery: Do More, Stress Less",
    rating: 4.5,
    raters: 4500,
    duration: "10h 00m",
    students: 5000,
    tutor: "Larry Lawson",
    fee: "$155",
    lectures: 10,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/03.jpg",
  },
  {
    thumbnail:
      "https://eduport.webestica.com/assets/images/courses/4by3/17.jpg",
    difficulty: "All level",
    title: "Complete Digital Marketing Course - 8 courses in 1",
    rating: 4.5,
    raters: 3500,
    duration: "12h 45m",
    students: 4500,
    tutor: "Frances Guerrero",
    fee: "$255",
    lectures: 30,
    tags: "Digital",
    tutorImage: "https://eduport.webestica.com/assets/images/avatar/04.jpg",
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

const navLinks = [
  "Web Design",
  "Development",
  "Graphic Design",
  "Marketing",
  "Finance",
];

export { popularCourses, navLinks, trendingCourses };
