import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  const setParams = (id) => {
    setUserId(id);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `https://my-json-server.typicode.com/1ohnny/test-api/employees/${userId}`
        );

        const { data } = res;
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, [userId]);

  /*  useEffect(() => {
    const getContracts = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/1ohnny/test-api/contractTypes"
        );

        const { data } = response;
        console.log(data);
        setContracts(data);
        console.log(contracts);
      } catch (error) {
        setIsError(true);
      }
    };

    getContracts();
  }, []);
 */
  return (
    <DetailContext.Provider value={{ user, setParams }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailContext;
