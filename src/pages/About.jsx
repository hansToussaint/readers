import styled, { keyframes } from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const growAndShrink = keyframes`
  0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
`;

const moveUp = keyframes`
  0%{
    opacity: 0;
    transform: translateY(10rem);
  }



    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const moveInleft = keyframes`
  0%{
    opacity: 0;
        transform: translateX(-10rem);
  }

  80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const moveInRight = keyframes`
0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }`;

const StyledAbout = styled.div`
  margin: 0;
  padding: 0;

  & div {
    text-align: start;
  }
`;

const Header = styled.header`
  height: 75vh;
  background-image: linear-gradient(
      to bottom,
      var(--bg-color-about-1),
      var(--bg-color-about-2)
    ),
    url("/about-image.jpg");
  background-size: cover;
  background-position: top;
  position: relative;

  padding-top: 4rem;

  & p,
  span,
  h1 {
    color: #ffff;
  }

  & p {
    font-size: 1.9rem;
  }

  & h1 {
    font-size: 5rem;
    animation: ${growAndShrink} 2s ease-in-out;
  }
`;

const TextBoxHeader = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  /* text-align: center; */
`;

const FirstP = styled.p`
  animation: ${moveInleft} 1.5s ease-out;
`;

const SecondP = styled.p`
  animation: ${moveInRight} 1.5s ease-out;
`;

/////////////////////
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 40rem 20rem 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10rem;

  & div {
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-lg);
    padding: 5rem 1.5rem 0.5rem;

    animation: ${moveUp} 1.5s ease-out;
    position: relative;
  }

  @media screen and (max-width: 1150px) {
    /* padding: 20rem 0; */
  }
`;

const Img = styled.img`
  width: 10rem;
  height: 15rem;

  position: absolute;
  top: -15%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

////////////////////
function About() {
  return (
    <StyledAbout>
      <Header>
        <Logo />

        <TextBoxHeader>
          <Heading as="h1">About us</Heading>
          <FirstP>
            Welcome to our online library, where the world of literature is at
            your fingertips. We believe in the power of knowledge and the joy of
            reading, which is why we offer a vast collection of books for free.
          </FirstP>
          <br />

          <SecondP>
            Our user-friendly web application allows you to explore our
            extensive catalog through a simple search even before signing in. To
            embark on your reading journey, create a free account and unlock a
            universe of literary treasures.
          </SecondP>
        </TextBoxHeader>
      </Header>

      <Main>
        <div>
          <Img src="/header-image-2.jpg" alt="image" />
          <p>
            Our book collection spans across various genres, catering to diverse
            interests and tastes. From timeless classics to contemporary
            bestsellers, we strive to provide a rich and diverse selection for
            our readers. Whether you&apos;re into fiction, non-fiction, mystery,
            romance, science fiction, or any other genre, you&apos;ll find a
            wide array of titles to explore.
          </p>
        </div>

        <div>
          <Img src="/header-image-2.jpg" alt="image" />
          <p>
            We continuously update and expand our collection to ensure a fresh
            and engaging reading experience. Our goal is to offer something for
            everyone, fostering a love for literature and lifelong learning.
            Explore our virtual shelves, discover new authors, and embark on
            literary adventures with our ever-growing library of free books.
          </p>
        </div>

        <div>
          <Img src="/header-image-2.jpg" alt="image" />
          <p>
            Since 2015, we&apos;ve been dedicated to curating an expansive game
            of literature for you. Our mission is to provide a diverse and
            extensive collection of books, fostering a community of readers who
            share a passion for the written word. Join us in celebrating the joy
            of reading as we continue to grow and evolve, committed to making
            literature accessible to all. Thank you for being a part of our
            journey since 2015.
          </p>
        </div>
      </Main>
    </StyledAbout>
  );
}

export default About;
