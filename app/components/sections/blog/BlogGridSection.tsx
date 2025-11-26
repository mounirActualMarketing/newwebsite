import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: 'Learn the Conjugation of the Verb "To Be" in English',
    date: "20 Rajab 1446 AH",
    image: "/laptop-and-notebook-on-desk-in-office-meeting-room.jpg",
  },
  {
    id: 2,
    title: "The Role of the English Language in Highlighting Saudi Culture on the International Stage",
    date: "20 Rajab 1446 AH",
    image: "/woman-in-hijab-working-on-laptop-in-modern-office.jpg",
  },
  {
    id: 3,
    title: "Celebrating Saudi National Day: How Can Learning English Empower Saudi Youth?",
    date: "20 Rajab 1446 AH",
    image: "/laptop-on-conference-table-with-notebooks-business.jpg",
  },
  {
    id: 4,
    title: "Why Should Every Saudi Learn English?",
    date: "20 Rajab 1446 AH",
    image: "/professional-workspace-with-laptop-and-phone-on-de.jpg",
  },
  {
    id: 5,
    title: "How Learning English Supports Vision 2030: The Road to Success",
    date: "20 Rajab 1446 AH",
    image: "/modern-office-desk-with-laptop-and-coffee-meeting-.jpg",
  },
  {
    id: 6,
    title: "English as a Language of Innovation: How English Supports Saudi Startups?",
    date: "20 Rajab 1446 AH",
    image: "/business-meeting-room-with-laptops-on-table.jpg",
  },
];

export default function BlogGridSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

