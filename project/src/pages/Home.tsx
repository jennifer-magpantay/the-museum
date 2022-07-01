import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Main } from "../components/Main";
import { Nav } from "../components/Nav";
import { SocialMediaBox } from "../components/SocialMediaBox";

export const Home = () => {
  return (
    <>
      <Header>
        <Nav />
        <SocialMediaBox />
      </Header>
      <Main>
        <Intro />
      </Main>
      <Footer />
    </>
  );
};
