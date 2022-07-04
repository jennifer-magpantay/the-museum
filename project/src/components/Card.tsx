interface Props {
  image: string;
  title: string;
  date: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export const Card = ({ image, title, date, children, onClick }: Props) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card--image">
        <img className="card--image-image" src={image} alt={title} />
      </div>
      <div className="card--body">
        <p className="card--body-title">{title}</p>
        <p className="card--body-date">{date}</p>
      </div>
      {children}
    </div>
  );
};
