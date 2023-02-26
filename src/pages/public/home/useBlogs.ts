import useFetchJson from 'hooks/useFetchJson';
import BlogSummary from 'types/BlogSummary';

const useBlogs = () => {
  const blogs = useFetchJson<any[]>('blogs/homepage');
  if (!blogs) return undefined;
  return blogs.map(parse);
};

const parse = (blog: any) => {
  const pubDate = new Date(blog.publicationDate);
  return { ...blog, publicationDate: pubDate } as BlogSummary;
};

export default useBlogs;
