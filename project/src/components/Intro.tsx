import IntroImage from "../assets/intro.png";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro--image">
        <img
          className="image"
          src={IntroImage}
          alt="Old statue from The Museum in close"
        />
      </div>
    </div>
  );
};
