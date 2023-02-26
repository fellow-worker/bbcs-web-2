const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').replace('&nbsp;', ' ');

export default stripTags;
