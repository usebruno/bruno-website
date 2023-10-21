const fs = require("fs");
const path = require("path");
const { Feed } = require("feed");
const matter = require("gray-matter");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const getPostsSortByDate = () => {
  const files = fs.readdirSync(path.join("posts"));
  let posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);
    data.slug = filename.replace(".md", "");
    return data;
  });

  return sortPostsInDesc(posts);
};

const sortPostsInDesc = (posts) => {
  return posts?.sort(
    (first, next) => new Date(next.date) - new Date(first.date)
  );
};

const generateRSSFeed = () => {
  const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  const posts = getPostsSortByDate();
  const feed = new Feed({
    title: "Bruno Blog | RSS Feed",
    description: "RSS Feed for Bruno Blog",
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon-32x32.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: "Anoop M D and Contributors",
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    });
    fs.writeFileSync("./public/rss.xml", feed.rss2());
  });
  console.log("RSS Feed generated!");
};

generateRSSFeed();
