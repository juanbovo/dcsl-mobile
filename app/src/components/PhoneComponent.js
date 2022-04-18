import { Link } from "react-router-dom";

function PhoneComponent({ phone }) {
  return (
    <div className="w-44 m-4 shadow-lg">
      <div className="bg-white rounded-lg mb-10">
        <Link to={`/phones/${phone._id}`} >
          <img src={phone.imageFilePath} alt="" className="w-full"/>
        </Link>
        <div className="py-4 px-2 text-center">
          <Link to={`/phones/${phone._id}`} >
            <h3 className="font-semibold text-slate-800 text-xl mb-4 block hover:text-primary-500">{phone.name}</h3>
          </Link>
          <p className="text-base text-body-color leading-relaxed mb-7">{phone.manufacturer}</p>
            <Link to={`/phones/${phone._id}`}
                className="py-2 px-7 border border-slate-600 rounded-full hover:bg-primary-500 hover:text-white transition">
            {phone.price} €
            </Link>
          </div>
        </div>
    </div>  
  )
}

export default PhoneComponent;
