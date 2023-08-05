import React, { useState } from "react";

const Usestateobject = () => {
  const [words, setWords] = useState({
    prefixname: "",
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <center>
        <input
          type="text"
          value={words.prefixname}
          onChange={(e) => setWords({ prefixname: e.target.value })}
        />
        <input
          type="text"
          value={words.firstname}
          onChange={(e) => setWords({ firstname: e.target.value })}
        />

        <input
          type="text"
          value={words.lastname}
          onChange={(e) => setWords({ lastname: e.target.value })}
        />
      </center>

      <h5>{`Your First Name is ${words.prefixname}  and firstName is ${words.firstname}  last name is ${words.lastname}`}</h5>
    </>
  );
};

export default Usestateobject;
