interface Props {
  image: string;
  title: string;
  date: string;
}

export const Card = ({ image, title, date }: Props) => {
  return (
    <div className="card">
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
