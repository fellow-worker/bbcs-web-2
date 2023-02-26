interface BlogSummary {
  summary: string,
  authorName: string | null,
  name: string,
  permalink: string,
  hasAuthor: boolean,
  publicationDate: Date,
  id: number
}

export default BlogSummary;
