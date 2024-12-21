import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, world? <br /> Hello, stranger!
      </h1>
      <p className="mb-4 whitespace-pre-line">{`안녕하세요 만나서 반갑습니다 🌷 
      Next.js에 대해 공부하기 위해 만든 템플릿 기반 블로그입니다. 

      제가 누군지 궁금하시다면 아래 포트폴리오나 깃허브에 들려주세요! 
      언제나 환영입니다!
      `}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
