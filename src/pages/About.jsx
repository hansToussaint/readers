import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Header from "../ui/AboutUs/AboutHeader";
import Section1 from "../ui/AboutUs/Section1";
import Div3 from "../ui/AboutUs/Div3";
import Div2 from "../ui/AboutUs/Div2";
import Div1 from "../ui/AboutUs/Div1";
import { moveInRight, moveInleft } from "../ui/AboutUs/Animations";
import Section2 from "../ui/AboutUs/Section2";
import Section3 from "../ui/AboutUs/Section3";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import DivJoinUs from "../ui/AboutUs/DivJoinUS";
import { useNavigate } from "react-router-dom";
import ContactDiv from "../ui/AboutUs/ContactDiv";
import Footer from "../ui/AboutUs/Footer";

export const StyledAbout = styled.div`
  margin: 0;
  padding: 0;

  & div {
    text-align: start;
  }
`;

const TextBoxHeader = styled.div`
  width: 70%;
  padding-left: 5%;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 3rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;

const FirstP = styled.p`
  animation: ${moveInleft} 1.5s ease-out;
`;

const SecondP = styled.p`
  animation: ${moveInRight} 1.5s ease-out;
`;

/////////////////////

const Img = styled.img`
  position: absolute;

  transform: translate(-50%, -50%);
`;

////////////////////
function About() {
  const navigate = useNavigate();

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

      <main>
        <Section1>
          <Div1>
            <Img src="/library-online.png" alt="image" />
            <p>
              Our book collection spans across various genres, catering to
              diverse interests and tastes. From timeless classics to
              contemporary bestsellers, we strive to provide a rich and diverse
              selection for our readers.
            </p>
          </Div1>

          <Div2>
            <Img src="/audio-book.png" alt="image" />

            <p>
              Immerse yourself in the world of literature through the
              convenience of audio, allowing you to enjoy your favorite stories
              while on the go.
            </p>
            <br />
            <p>
              Whether you prefer reading or listening, our goal is to make the
              literary experience accessible and enjoyable for everyone.
            </p>
          </Div2>

          <Div3>
            <Img src="/update-book.png" alt="image" />
            <p>
              We continuously update and expand our collection to ensure a fresh
              and engaging reading experience. Our goal is to offer something
              for everyone, fostering a love for literature and lifelong
              learning.
            </p>
            <br />
            <p>
              Explore our virtual shelves, discover new authors, and embark on
              literary adventures with our ever-growing library of free books.
            </p>
          </Div3>
        </Section1>

        <Section2>
          <Heading as="h1">Our Goal</Heading>

          <div>
            <p>
              Simplify your book discovery process. With an intuitive search
              feature available even before signing in, we aim to make finding
              books easy and convenient. Whether you have a specific title in
              mind or are exploring new genres, our user-friendly platform is
              designed to enhance your reading experience.
            </p>

            <br />

            <p>
              Since 2015, we&apos;ve been dedicated to curating an expansive
              game of literature for you. Our mission is to provide a diverse
              and extensive collection of books, fostering a community of
              readers who share a passion for the written word. Join us in
              celebrating the joy of reading as we continue to grow and evolve,
              committed to making literature accessible to all.
            </p>
          </div>
        </Section2>

        <Section3>
          <DivJoinUs>
            <Heading as="h1">Join us today</Heading>

            <p>
              Embark on a literary adventure with us today! Dive into a world of
              captivating stories, insightful knowledge, and endless
              possibilities
            </p>

            <Button $size="large" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </DivJoinUs>

          <ContactDiv>
            <Heading as="h2">Contact us</Heading>

            <Form>
              <FormRowVertical label="Full name">
                <Input type="text" />
              </FormRowVertical>

              <FormRowVertical label="Email">
                <Input type="text" />
              </FormRowVertical>

              <FormRowVertical label="Message">
                <Textarea />
              </FormRowVertical>

              <Button $variation="secondary">Send</Button>
            </Form>
          </ContactDiv>
        </Section3>
      </main>

      <Footer>
        <div>&copy; readers. All rights reserved.</div>
      </Footer>
    </StyledAbout>
  );
}

export default About;
