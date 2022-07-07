interface Props {
  id: string;
  image: string;
  title: string;
  date: string;
  onClick: (id: string) => void;
}

export const Card = ({ id, image, title, date, onClick }: Props) => {
  return (
    <div
      className="card"
      id={id}
      aria-controls="gallery"
      onClick={() => onClick(id)}
    >
      <div className="card--image">
        <img className="card--image-image" src={image} alt={title} />
      </div>
      <div className="card--body">
        <p className="card--body-title">{title}</p>
        <p className="card--body-date">{date}</p>
      </div>
    </div>
  );
};
