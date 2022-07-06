import { forwardRef } from "react";

interface Props {
  id: string;
  image: string;
  title: string;
  date: string;
  onClick: () => void;
}

export type Ref = HTMLDivElement;

export const Card = forwardRef<Ref, Props>(
  ({ id, image, title, date, onClick }: Props, ref) => {
    return (
      <div className="card" id={id} onClick={onClick} ref={ref}>
        <div className="card--image">
          <img className="card--image-image" src={image} alt={title} />
        </div>
        <div className="card--body">
          <p className="card--body-title">{title}</p>
          <p className="card--body-date">{date}</p>
        </div>
      </div>
    );
  }
);
