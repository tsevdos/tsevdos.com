import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getAllSortedPosts } from "../../lib/helpers";
import Config from "../../lib/config";

export async function GET(context: APIContext) {
  const posts = await getAllSortedPosts();

  return rss({
    title: `${Config.title} » Feed`,
    description: Config.tagline,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.title,
      link: `/${post.data.categories[0]}/${post.id}/`,
    })),
  });
}
