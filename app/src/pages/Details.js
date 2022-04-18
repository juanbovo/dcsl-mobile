import { useState, useEffect, useCallback } from "react";
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { Link, useParams, useNavigate } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [phone, setPhone] = useState(undefined);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCalling, setIsCalling] = useState(true);

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    if (!isCalling) {
      try {
        const response = await fetch(`http://localhost:8080/phones/${id}`);
        if (response.status !== 200) {
          const error = await response.json();
          throw Error(error.message.message);
        }

        const phone = await response.json();

        setPhone(phone);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    setIsCalling(false);
  }, [id, isCalling]);

  useEffect(() => {
    fetchData();
  }, [id, isCalling, fetchData]);

  const redirectToHome = () =>
    setTimeout(() => {
      navigate("/");
    }, 3000);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/phones/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.status !== (id ? 200 : 201)) {
        const error = await response.json();
        throw Error(error.message.message);
      }
      const successMessage = await response.json();
      setSuccess(successMessage);
      setIsLoaded(true);
      redirectToHome();
    } catch (error) {
      setError(error);
      setIsLoaded(true);
      redirectToHome();
    }
  };

  return (
    <div className="flex max-w-4xl justify-center mb-auto mx-auto">
      {!isLoaded ? (
        <SpinnerComponent />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : success ? (
        <SuccessComponent
          message={`Phone with id ${id} successfully deleted!`}
        />
      ) : (
        <div className="m-4 sm:w-3/4 sm:min-w-[640px]">
          <div className="flex sm:flex-row flex-col p-4">
            <div className="sm:w-1/2 mx-auto">
              <img className="w-52 mx-auto" src={phone.imageFilePath} alt=""></img>
            </div>
            <div className="mt-4 pb-4 sm:mt-0 sm:w-1/2 sm:mx-auto border-b">
              <h1 className="font-semibold text-slate-800 text-2xl">{phone.name}</h1>
              <h3>{phone.manufacturer}</h3>
              <p className="font-semibold text-slate-800 text-lg">{phone.price} €</p>

              <hr className="my-2"></hr>

              <h5 className="font-semibold">Product Details:</h5>
              {phone.description ?
                  <p>{phone.description}</p> :
                  <p className="italic">-- Sorry, this phone has no description available at this moment. --</p>}
              <p>Screen Size: {phone.screen ? <span>{phone.screen}</span> : <span className="italic">N/D</span>}</p>
              <p>Color: {phone.color ? <span>{phone.color}</span> : <span className="italic">N/D</span>}</p>
              <p>Storage: {phone.storage} GB</p>
              <p>RAM: {phone.ram} GB</p>
            </div>
          </div>
          <div className="flex flex-row justify-center sm:justify-end sm:pr-12">
            <Link to={`/edit/${phone._id}`} className="bg-white hover:bg-primary-700 text-primary-500 hover:text-white text-sm mx-2 px-4 py-2 border rounded-full hover:border-primary-300 active:transform active:translate-y-1 active:bg-primary-300 transition">
                Edit
            </Link>
            <button className="bg-primary-500 hover:bg-primary-700 text-white text-sm mx-2 px-4 py-2 border rounded-full hover:border-primary-300 active:transform active:translate-y-1 active:bg-primary-300"
                onClick={handleDelete}
            >Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
