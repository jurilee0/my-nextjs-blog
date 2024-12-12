import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, world? <br /> Hello, stranger!
      </h1>
      <p className="mb-4 whitespace-pre-line">{`안녕하세요. 저는 UI 개발하는 "Juri" 라고 합니다!
      모든 서비스와 기술은 '사람을 위한' 것이라고 믿고 소통하고 함께 성장하는 것을 추구합니다.

      만나서 반갑습니다.🌷
      `}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
