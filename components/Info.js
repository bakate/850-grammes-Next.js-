import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Title from './Title';

const InfoStyles = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-areas: 'content1 content2';
  gap: 1rem;
  place-content: center space-between;
  place-items: center stretch;
  img {
    width: 500px;
    height: 400px;
    /* grid-area: "content" */
    object-fit: cover;
    /* width: 100%; */
    border: 5px solid ${({ theme }) => theme.darkGrey};
  }
  .bloc {
    grid-area: 'content1';
    padding-top: 3rem;
  }
  .bloc2 {
    grid-area: 'content2';
  }
  @media (max-width: 700px) {
    grid-template-areas:
      'content1'
      'content2';
    .bloc {
      grid-area: 'content1' img {
        width: 300px;
        height: 250px;
      }
    }
  }
`;

const Info = () => (
  <InfoStyles>
    <div className="bloc">
      <img src="/chicken.jpg" alt="about page" />
    </div>
    <div className="bloc2">
      <Title title="A propos de nous" />
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
