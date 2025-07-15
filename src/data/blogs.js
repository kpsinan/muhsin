import PRO from "../assets/PRO.png"; // ✅ Import the image
import learn from "../assets/learn.png"; // ✅ Import the image
const blogs = [
  {
    id: 1,
    title: "5 Mindset Shifts for Lifelong Learning",
    slug: "mindset-shifts-learning",
    summary: "Discover the key mindset changes that help you grow continuously in both personal and professional life.",
    image: learn,
    tags: ["learning", "growth", "mindset"],
    date: "2025-07-10",
  },
  {
    id: 2,
    title: "How to Stay Productive Without Burning Out",
    slug: "stay-productive-no-burnout",
    summary: "Balance productivity and well-being by understanding how to manage your time, tasks, and expectations better.",
    image: PRO,
    tags: ["productivity", "selfcare", "time-management"],
    date: "2025-07-08",
  },
  {
    id: 3,
    title: "Mastering Communication in a Digital World",
    slug: "digital-communication-skills",
    summary: "Tips and tools to communicate effectively in virtual meetings, emails, and chat-based conversations.",
    image: learn,
    tags: ["communication", "career", "virtual"],
    date: "2025-07-05",
  },
];

export default blogs;
