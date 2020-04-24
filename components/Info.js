import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const InfoStyles = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-areas: 'content1 content2';
  gap: 1rem;
  place-content: center space-between;
  place-items: center stretch;
  img {
    width: 450px;
    height: 350px;
    /* grid-area: "content" */
    object-fit: cover;
    /* width: 100%; */
    border: 5px solid ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius};
  }
  .bloc {
    grid-area: 'content1';
    padding-top: 3rem;
  }
  .bloc2 {
    grid-area: 'content2';
    padding: 2rem;
  }
  @media (max-width: 700px) {
    grid-template-areas:
      'content1'
      'content2';
    justify-content: center;
    .bloc {
      padding: 0.5rem;
      width: 100%;
      img {
        width: 100%;
        /* height: 400px; */
        object-fit: cover;
      }
    }
    .bloc2 {
      padding: 0.5rem;
    }
  }
`;

const Info = () => (
  <InfoStyles>
    <div className="bloc">
      <img src="/chicken.jpg" alt="about page" />
    </div>
    <div className="bloc2">
      <Title title="A propos de la team" />
      <blockquote>
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quisquam molestiae similique non quas minima culpa ab odit, quaerat
          tenetur rerum deleniti quos nisi officiis!
        </b>
      </blockquote>
      <blockquote>
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quisquam molestiae similique non quas minima culpa ab odit, quaerat
          tenetur rerum deleniti quos nisi officiis!
        </b>
      </blockquote>
      <Link href="/">
        <a className="main-link">Nos Recettes</a>
      </Link>
    </div>
  </InfoStyles>
);

export default Info;
