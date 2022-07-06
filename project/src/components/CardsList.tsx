import { DataType } from "../data/data";
import { Card } from "./Card";

interface Props {
  data: DataType[];
  onClick: () => void;
}

export const CardsList = ({ data, onClick }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          onClick={onClick}
        />
      ))}
    </>
  );
};
