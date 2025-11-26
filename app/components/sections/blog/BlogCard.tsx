import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
}

export default function BlogCard({ title, date, image }: BlogCardProps) {
  return (
    <Link href="#" className="group block">
      <article className="overflow-hidden">
        <div className="relative h-48 overflow-hidden rounded-lg mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight group-hover:text-[#0891b2] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{date}</p>
      </article>
    </Link>
  );
}

