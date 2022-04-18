import { useState, useEffect, useCallback } from "react";
import ErrorComponent from "../components/ErrorComponent";
import PhoneComponent from "../components/PhoneComponent";
import SpinnerComponent from "../components/SpinnerComponent";

function Main() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCalling, setIsCalling] = useState(true);
  const [phones, setPhones] = useState([]);

  const fetchData = useCallback(async () => {
    if (!isCalling) {
      try {
        const response = await fetch("http://localhost:8080/phones/");

        if (response.status !== 200) {
          const error = await response.json();
          throw Error(error.message.message);
        }

        const phones = await response.json();
        setIsLoaded(true);
        setPhones(phones);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    setIsCalling(false);
  }, [isCalling]);

  useEffect(() => {
    fetchData();
  }, [isCalling, fetchData]);

  return (
    <div className="mb-auto mx-auto pt-4">
      <div className="flex flex-wrap justify-center max-w-4xl px-4">
        {!isLoaded ? (
          <SpinnerComponent />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          phones.map((phone) => (
            <PhoneComponent key={phone._id} phone={phone} />
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
