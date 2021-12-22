import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [cancel, setCancel] = useState(false);
  const [positions, setPositions] = useState([]);

  const getData = async () => {
    setLoading(true);
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(
        "https://my-json-server.typicode.com/1ohnny/test-api/employees"
      ),
      axios.get(
        "https://my-json-server.typicode.com/1ohnny/test-api/positions"
      ),
    ]);

    setEmployers(firstResponse.data);
    setPositions(secondResponse.data);
    setLoading(false);
  };

  const cancelFilter = () => {
    setCancel(false);
    getData();
  };

  const filterUsers = () => {
    if (text.trim() === "") {
      return;
    } else {
      const arr = employers.filter(
        (record) =>
          record.surname.toLowerCase().startsWith(text) ||
          record.name.toLowerCase().startsWith(text)
      );
      setEmployers(arr);
      setCancel(true);
    }
  };

  const sortByName = () => {
    const obj = [...employers];
    obj.sort((a, b) =>
      a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1
    );

    setEmployers(obj);
  };

  const sortById = () => {
    const obj = [...employers];
    obj.sort((a, b) => (a.id > b.id ? 1 : -1));
    setEmployers(obj);
  };

  const sortByPosition = () => {
    const obj = [...employers];
    obj.sort((a, b) => (a.positionId > b.positionId ? 1 : -1));
    setEmployers(obj);
  };

  const employerPosition = (positionId) => {
    const { name } = positions.find(
      (element) => element.orderIdx === positionId
    );
    return name;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterUsers();
    setText("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ListingContext.Provider
      value={{
        handleSubmit,
        handleChange,
        employerPosition,
        sortByPosition,
        sortByName,
        sortById,
        employers,
        loading,
        text,
        positions,
        cancel,
        cancelFilter,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContext;
