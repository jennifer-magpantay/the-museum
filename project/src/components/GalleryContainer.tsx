import React, { forwardRef } from "react";

import { X } from "phosphor-react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export type Ref = HTMLDivElement;

export const GalleryContainer = forwardRef<Ref, Props>(
  ({ children, onClick }: Props, ref) => {
    return (
      <div className="gallery" ref={ref}>
        <button
          type="button"
          className="gallery--button-close"
          aria-label="Close"
          onClick={onClick}
        >
          <span className="visually-hidden">Close gallery</span>
          <X size={32} color="#ffffff" />
        </button>
        {children}
      </div>
    );
  }
);
