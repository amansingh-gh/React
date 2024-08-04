import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./ListCard";

export const NetflixCard = () => {
  return (
    <ul className="grid grid-cols-3	">
      {seriesData.map((currElem) => (
        <SeriesCard key={currElem.id} data={currElem} />
      ))}
    </ul>
  );
};

export const Footer = () => {
  return (
    <>
      <p>This is Footer @copyright</p>
    </>
  );
};
