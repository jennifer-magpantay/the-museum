import { X } from "phosphor-react";
import React, { forwardRef } from "react";

interface Props {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  onClick: () => void;
  isContentExpanded: boolean;
}

export type Ref = HTMLDivElement;

export const Gallery = forwardRef<Ref, Props>(
  (
    { id, title, description, children, onClick, isContentExpanded }: Props,
    ref
  ) => (
    <div className="gallery" data-itemID={id} id={id} ref={ref}>
      <div className="gallery--header">
        <p className="gallery--header-title">{title}</p>
        <button
          id={id}
          type="button"
          className="gallery--header-button"
          aria-label="Close"
          onClick={onClick}
        >
          <span className="visually-hidden">Close</span>
          <X size={32} color="#ffffff" />
        </button>
      </div>
      <p className="gallery--header-subtitle">{description}</p>
      {children}
    </div>
  )
);
