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
     {
      width: 100%;
      height: 600px;
      object-fit: cover;
      margin-top: 1rem;
    }
  }
  .infos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: space-between;
    align-items: stretch;
    padding: 2rem;
    margin: 3rem;
    column-gap: 1rem;

    .logo {
      width: 4rem;
      margin-right: 3rem;
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
      padding: 1rem;
      text-transform: capitalize;
      line-height: 2rem;
    }
  }
`;

export default RecipeStyles;
