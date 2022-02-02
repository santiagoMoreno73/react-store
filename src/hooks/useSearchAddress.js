import { useState, useEffect } from "react";
import axios from "axios";

const useSearchAddress = (buyer) => {
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [map, setMap] = useState([]);
  const [message, setMessage] = useState("");

  const params = {
    access_key: "e2c71308d47256bf6c4eacab19a13522",
    query: `${buyer[0].city} ${buyer[0].country}`,
  };

  useEffect(() => {
    setLoadingFetch(true);
    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {
        if (response && response.status === 200) {
          setMap(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingFetch(false);
      });
  }, []);

  return [loadingFetch, map];
};

export default useSearchAddress;
