import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { NavMobile } from "../components/NavMobile";
import { SocialMediaBox } from "../components/SocialMediaBox";
import { Main } from "../components/Main";
import { Intro } from "../components/Intro";
import { Exhibitions } from "../components/Exhibitions";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header>
        <Nav />
        <NavMobile />
        <SocialMediaBox />
      </Header>
      <Main>
        <Intro />
        <Exhibitions />      
      </Main>
      <Footer />
    </>
  );
};
