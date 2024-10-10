import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Blogpost from 'components/Blogpost';

export default function BlogPage({
  frontmatter: { title, category, date },
  content,
  slug,
}) {
  return (
    <Blogpost title={title}>
      <h1 className="blog-title">{title}</h1>
      <h3 className="blog-date">{date}</h3>
      <div className="page-content markdown mt-2">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </Blogpost>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
