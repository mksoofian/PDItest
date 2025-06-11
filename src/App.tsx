import { useEffect, useState } from "react";
import "./App.css";

type Users = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: { name: string; catchPhrase: string; bs: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};
type FetchResp = Users[];

const initializedResp = [
  {
    address: {
      street: "hmmm Ct.",
      suite: "10A",
      city: "Ahhhh",
      zipcode: "10900",
      geo: { lat: "0", lng: "0" },
    },
    company: { name: "string", catchPhrase: "string", bs: "string" },
    email: "test@gmail.com",
    id: 25,
    name: "Tester",
    phone: "000-000-00000",
    username: "tester19099",
    website: "tester.com",
  },
  {
    address: {
      street: "lalala Ct.",
      suite: "B",
      city: "Oooohhh",
      zipcode: "888888",
      geo: { lat: "0", lng: "0" },
    },
    company: { name: "string", catchPhrase: "string", bs: "string" },
    email: "joe@gmail.com",
    id: 33,
    name: "Joe",
    phone: "000-000-00000",
    username: "joeForevs",
    website: "joeschmo.com",
  },
];

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState<FetchResp>(initializedResp);
  const [debounced, setDebounced] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: FetchResp) => {
        // sort alphabetically
        data.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setInput(debounced);
    }, 3000);

    return () => clearTimeout(debouncer);
  }, [debounced]);

  const handleInput = function (text: string) {
    setDebounced(text);
  };

  if (isLoading) {
    return <div>Loading, please bear with me one moment...</div>;
  }
  if (error) return <div>error: {error}</div>;

  return (
    <>
      <input onChange={(e) => handleInput(e.target.value)} />
      <div>
        {input === ""
          ? users.map((user) => {
              return <p key={user.id}>{user.name}</p>;
            })
          : users.map((user) => {
              if (user.name.includes(input))
                return <p key={user.id}>{user.name}</p>;
            })}
      </div>
    </>
  );
}

export default App;
