import { gql } from "@apollo/client";
import client from "../../utilities/apollo/apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetArticles {
        articles {
          articleId
          title
          content
          author {
            username
          }
          comments {
            commentId
            message
            member {
              username
            }
            childrenComments {
              commentId
              message
              member {
                username
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles.slice(0, 2),
    },
  };
}
