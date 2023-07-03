import {monthDisplay} from "@app/helpers/date";

interface PostImage {
  url: string;
  alt: string;
}

interface Category {
  name: string;
}

export type PostDataType = {
  content: string,
  thumbnail: PostImage | false,
  date: string,
  uri: string,
  title: string,
  categories: Category[],
}

/**
 * Builds the post object for later use
 *
 * @param post
 * @param contentLength
 * @constructor
 */
export function PostData( post, contentLength = 25 ): PostDataType {
  console.log(post);
  const { excerpt } = post;

  // Build the excerpt data
  let intro = excerpt.match(/<[a-z]>(.*?)<\/[a-z]>/);
      intro = intro[1];
  const content = intro.split(' ').filter( (e, i) => i < contentLength ).join(' ');

  // Get the date information
  const date = new Date(post.date);

  // Build potential featured image
  let thumbnail: PostImage | false = false;
  if ( post.featuredImage ) {
    thumbnail = {
      url: post.featuredImage.node.mediaItemUrl,
      alt: post.featuredImage.node.altText
    };
  }


  return {
    content,
    thumbnail,
    date: `${monthDisplay(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`,
    uri: post.uri,
    title: post.title,
    categories: post.categories.nodes
  }
}
