import { Link } from "react-router-dom";

function PhoneComponent({ phone }) {
  return (
  <div>
    <Link to={`/phones/${phone._id}`}>
      <img src={phone.imageFilePath} alt=""></img>
    </Link>
    <p className="text-xl">{phone.name}</p>
    <p className="text-2xl">{phone.price}</p>
  </div>)
}

export default PhoneComponent;
