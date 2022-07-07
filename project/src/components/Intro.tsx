import IntroImage from "../assets/intro.png";

export const Intro = () => {
  return (
    <div className="intro">     
      <div className="intro--overlay"></div>
      <div className="intro--image">
        <img
          className="image"
          src={IntroImage}
          alt="Old statue from The Museum in close"
        />
      </div>

      <div className="intro--text" id="main">
        <h1 className="intro--text-title">
          <span className="line-break">ARCHIVIO</span> STORICO
        </h1>
        <h2 className="intro--text-subtitle">
          Una raccolta di tutti i momenti più importanti nella storia del museo
          e dei suoi curatori.
        </h2>
      </div>
    </div>
  );
};
