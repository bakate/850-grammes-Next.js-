import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RecipeStyles from '../../components/styles/RecipeStyles';
import Title from '../../components/Title';
import { getAllRecipes, getSingleRecipe } from '../../lib/api';

export default function Recipe({ singleRecipe }) {
  const router = useRouter();
  const { id } = router.query;
  if (!router.isFallback && !id) {
    return <h2>Error papi</h2>;
  }

  const image = singleRecipe ? singleRecipe.image : [];
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
  const { published } = singleRecipe || '';
  const goodTime = Date.parse(published);

  return (
    <RecipeStyles>
      <Head>
        <title>{singleRecipe?.title}</title>
      </Head>
      <div>
        <Title title={singleRecipe?.title} center withRow />
        <img src={first?.url} alt={singleRecipe?.title} className="hero" />
      </div>

      <div className="infos">
        <div>
          <div className="withLogo">
            <img src="/farm.svg" alt="logo" className="logo" />
            <Title title="ingredients:" withRow center />
          </div>
          <ReactMarkdown source={singleRecipe?.ingredients} />
        </div>
        <div>
          <div className="withLogo">
            <img src="/cooking.svg" alt="logo" className="logo" />
            <Title title="preparation:" withRow center />
          </div>
          <ReactMarkdown source={singleRecipe?.cooking} />
        </div>
      </div>
      <div className="gallery">
        <Title title="plus de photos:" withRow center />
        <Link href={singleRecipe?.url} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            {images}
          </a>
        </Link>
      </div>
      <div className="published">
        <Title title="publiee le:" center />
        <span>
          {goodTime &&
            new Intl.DateTimeFormat('fr', {
              dateStyle: 'long',
            }).format(goodTime)}
        </span>
      </div>
    </RecipeStyles>
  );
}

export async function getStaticProps({ params }) {
  const singleRecipe = await getSingleRecipe(params.id);

  return {
    props: { singleRecipe },
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const recipes = await getAllRecipes();
  return {
    paths: recipes.map(recipe => `/recettes/${recipe.id}`) || [],
    fallback: true,
  };
}
