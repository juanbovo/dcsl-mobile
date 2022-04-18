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
    /*Delete Logic*/
    console.log("On delete");

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
    <div className="flex max-w-4xl justify-center mb-auto">
      {!isLoaded ? (
        <SpinnerComponent />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : success ? (
        <SuccessComponent
          message={`Phone with id ${!id} successfully deleted!`}
        />
      ) : (
        <div>
          <h1>{phone.name}</h1>
          <h3>{phone.manufacturer}</h3>
          <img src={phone.imageFilePath} alt=""></img>
          <p>Price: {phone.price} €</p>
          <p>{phone.description}</p>
          <p>Screen Size: {phone.screen}</p>
          <p>Color: {phone.color}</p>
          <p>Storage: {phone.storage} GB</p>
          <p>RAM: {phone.ram}</p>
          <Link to={`/edit/${phone._id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm m-2 px-4 py-2 border rounded-xl hover:border-blue-300 active:transform active:translate-y-1 active:bg-blue-300">
              Edit
            </button>
          </Link>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm m-2 px-4 py-2 border rounded-full"
            onClick={handleDelete}
          >Delete</button>
        </div>
      )}
    </div>
  );
}

export default Details;
