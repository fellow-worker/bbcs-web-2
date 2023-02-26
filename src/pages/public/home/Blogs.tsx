import Jumbotron from 'components/Jumbotron';
import React, { FC } from 'react';
import BlogSummary from 'types/BlogSummary';
import Columns, { Column } from 'components/Columns';
import stripTags from 'util/stripTags';
import { Link } from 'react-router-dom';
import Paragraph from 'components/Paragraph';
import Block from 'components/Block';
import Text from 'components/Text';
import Center from 'components/Center';
import Button from 'components/Button';
import styled from 'styled-components';
import useBlogs from './useBlogs';

const Blogs = () => {
  const blogs = useBlogs();
  return (
    <Jumbotron fill="bible-study" header="Onze inzichten in blogs">
      <Block padding={false}>
        <Columns gap={100} count={2}>
          {blogs?.map(blog => <Blog key={blog.id} blog={blog} />)}
        </Columns>
        <Center>
          <Button label="Lees hier alle blogs" href="/blogs" color="green" />
        </Center>
      </Block>
    </Jumbotron>
  );
};

const Blog: FC<{ blog: BlogSummary }> = (props) => {
  const { blog } = props;
  const pubDate = blog.publicationDate.toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  return (
    <Column>
      <article>
        <Text variant="h5" margin={0} color="background">{blog.name}</Text>
        <Text variant="p" margin={0} color="gray">{pubDate}</Text>
        <Paragraph color="background">
          {stripTags(blog.summary)}&nbsp;
          <Link to={`/blogs/${blog.permalink}`}>Lees verder...</Link>
        </Paragraph>
      </article>
      <Spacer />
    </Column>
  );
};

const Spacer = styled.div`
  height: 50px;
`;

export default Blogs;
