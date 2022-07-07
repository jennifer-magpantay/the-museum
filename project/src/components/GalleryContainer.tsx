import { X } from "phosphor-react";

interface Props {
  id: string;
  children: React.ReactNode;
  onClick: (id: string) => void;
}

export const GalleryContainer = ({ id, children, onClick }: Props) => {
  return (
    <div
      className="gallery"
      id={id}
      aria-hidden={true}
      aria-describedby="gallery"
    >
      <button
        type="button"
        className="gallery--button-close"
        id="gallery-button-close-js"
        aria-label="Close"
        aria-controls="gallery"
        aria-expanded="false"
        onClick={() => onClick(id)}
      >
        <span className="visually-hidden">Close gallery</span>
        <X size={32} color="#ffffff" />
      </button>
      {children}
    </div>
  );
};
