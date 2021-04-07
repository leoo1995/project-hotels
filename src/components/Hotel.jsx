import "../sass/Hotel.scss";
import HotelProperties from "./HotelProperties";
const Hotel = props => {
  const getPathImage = props => "/assets" + props.photo.replace("./", "/");
  return (
    <div className="card-hotel">
      <img src={getPathImage(props)} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <HotelProperties {...props} />
    </div>
  );
};
export default Hotel;
