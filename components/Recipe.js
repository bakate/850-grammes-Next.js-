import React from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
// import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Head from 'next/head';
import Title from './Title';
import RecipeStyles from './styles/RecipeStyles';

// const SINGLE_RECIPE_QUERY = gql`
//   query SINGLE_RECIPE_QUERY($id: ID!) {
//     recette(id: $id) {
//       id
//       title
//       duration
//       url
//       cooking
//       ingredients
//       image {
//         url
//       }
//       category {
//         id
//         name
//       }
//       published
//     }
//   }
// `;

const Recipe = ({ recette }) => {
  const router = useRouter();
  // const { id } = router.query;
  // const { error, loading, data } = useQuery(SINGLE_RECIPE_QUERY, {
  //   variables: { id },
  // });

  // if (loading) return <h3>Loading...</h3>;
  // if (error) return `Error ${error.message}`;
  // const image = data?.recette?.image;
  const [first, ...others] = image;
  const images = others.map((item, i) => (
    <img
      src={item.url}
      height="250"
      className="img_gallery"
      width="350"
      key={i}
      alt="gallery"
    />
  ));
  const { published } = recette;
  const good = Date.parse(published);

  return (
    <RecipeStyles>
      {/* {loading && cogoToast.loading('loading...')}
      {error && cogoToast.error(`Error! ${error.message}`)} */}
      <Head>
        <title>{recette.title}</title>
      </Head>
      <div>
        <Title title={recette.title} center withRow />
        <img src={first.url} alt={recette.title} className="hero" />
      </div>

      <div className="infos">
        <div>
          <div className="withLogo">
            <img src="/farm.svg" alt="logo" className="logo" />
            <Title title="ingredients:" withRow center />
          </div>
          <ReactMarkdown source={recette.ingredients} />
        </div>
        <div>
          <div className="withLogo">
            <img src="/cooking.svg" alt="logo" className="logo" />
            <Title title="preparation:" withRow center />
          </div>
          <ReactMarkdown source={recette?.cooking} />
        </div>
      </div>
      <div className="gallery">
        <Title title="plus de photos:" withRow center />
        <Link href={recette?.url} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            {images}
          </a>
        </Link>
      </div>
      <div className="published">
        <Title title="publiée le:" center />
        <span>
          {new Intl.DateTimeFormat('fr', {
            dateStyle: 'long',
          }).format(good)}
        </span>
      </div>
    </RecipeStyles>
  );
};

export default Recipe;
