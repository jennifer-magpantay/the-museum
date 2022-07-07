import { X } from "phosphor-react";

interface Props {
  id: string;
  children: React.ReactNode;
  onClick: (id: string) => void;
}

export const GalleryContainer = ({ id, children, onClick }: Props) => {
  return (
    <div className="gallery" id={id}>
      <button
        type="button"
        className="gallery--button-close"
        aria-label="Close"
        onClick={() => onClick(id)}
      >
        <span className="visually-hidden">Close gallery</span>
        <X size={32} color="#ffffff" />
      </button>
      {children}
    </div>
  );
};
