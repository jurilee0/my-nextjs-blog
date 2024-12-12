import { getViewsCount, incrementPageView } from "@/actions";

export default async function ViewCounter({ slug }: { slug: string }) {
  const views = await getViewsCount(slug);
  await incrementPageView(slug);

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {views?.toLocaleString() ?? 0} views
    </p>
  );
}
