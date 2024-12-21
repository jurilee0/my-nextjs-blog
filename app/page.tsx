import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, world? <br /> Hello, stranger!
      </h1>
      <p className="mb-4 whitespace-pre-line">{`안녕하세요. 만나서 반갑습니다.🌷
      `}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
