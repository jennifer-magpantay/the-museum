import { X } from "phosphor-react";
import { Slick } from "./Slick";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const CollapseSection = ({
  title,
  description,
  children,
  onClick,
}: Props) => {
  return (
    <section className="content">
      <div className="content--header">
        <p className="content--header-title">{title}</p>
        <button
          type="button"
          className="content--header-button"
          aria-label="Close"
          onClick={onClick}
        >
          <span className="visually-hidden">Close</span>
          <X size={32} color="#ffffff" />
        </button>
      </div>
      <p className="content--header-subtitle">{description}</p>

      {children}
    </section>
  );
};
