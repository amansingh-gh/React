export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = data;
  const age = 18
  const btn_style = ({
    padding: "0.9rem",
    backgroundColor: rating>=8?"blue":"red",
    color: rating>=8?"black":"white",
    border: "none",
  });
  return (
    <li className="card">
      <div>
        <img src={img_url} alt="img" width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genere: {genre.join(", ")}</p>
        <p>Cast:{cast.join(", ")} </p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>{age>=18?"Watch Now": "Not Available"}</button>
        </a>
      </div>
    </li>
  );
};
