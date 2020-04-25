import styled from 'styled-components';

const RecipeStyles = styled.div`
  display: grid;
  margin-top: 2rem;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.bs};
  gap: 2rem;
  .hero {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-top: 1rem;
  }
  .infos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: space-between;
    align-items: stretch;
    padding: 2rem;
    margin: 1rem;
    column-gap: 1rem;
    .logo {
      width: 4rem;
      margin-right: 2rem;
    }
    .withLogo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .gallery {
    display: grid;
    padding: 2rem;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(250, 1fr));
    gap: 2rem;
    .img_gallery {
      padding: 1rem;
      object-fit: cover;
      transition: ${({ theme }) => theme.mainTransition};
      &:hover {
        transform: scale(1.5);
        border-radius: ${({ theme }) => theme.radius};
      }
    }
  }
  .published {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    span {
      font-size: 2rem;
      font-style: italic;
      padding-bottom: 1.5rem;
      text-transform: capitalize;
      line-height: 2rem;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 2rem auto;
    .title {
      padding: 0 2rem;
    }
    .hero {
      width: 100%;
      height: 300px;
      object-fit: contain;
      padding: 4rem;
    }
    .infos {
      justify-content: center;
      align-items: center;
      padding: 0 0.5rem;
      margin: 2rem;

      .logo {
        text-align: center;
      }
      .withLogo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .markdown {
        padding: 0 4rem;
        /* margin: 2rem; */
      }
    }
    .gallery {
      gap: 0.5rem;
      .img_gallery {
        padding: 0 5rem;
        &:hover {
          transform: scale(1.1);
          border-radius: ${({ theme }) => theme.radius};
        }
        /* object-fit: contain;
      transition: var(--transition); */
      }
    }
    .published {
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      span {
        font-size: 1rem;
        padding-bottom: 2.5rem;
      }

      /* padding: 0; */
      /* justify-content: center; */
      /* align-items: center; */
      /* span {
      font-size: 1.2rem;
      font-style: italic;
      text-transform: capitalize;
      /* padding: 1rem; */
      /* } */
    }
  }
`;

export default RecipeStyles;
