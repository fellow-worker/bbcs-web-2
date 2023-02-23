import useFetchJson from 'hooks/useFetchJson';
import { BlogSummary } from 'types/BlogSummary';

const useBlogs = () => useFetchJson<BlogSummary[]>('blogs/homepage');

export default useBlogs;
