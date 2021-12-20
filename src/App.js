import React, { useState, useRef } from "react";
// import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Form, Divider } from "semantic-ui-react";
import Results from "./components/Results";
import axios from "axios";

const App = () => {
  const [translations, setTranslations] = useState([]);
  const inputRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://shielded-castle-03747.herokuapp.com/translate_s/${inputRef.current.value}`)
        .then((response) => {
          console.log('Success', response)
          setTranslations(response.data)
        })
        .catch((error) => {
          console.log('Error', error)
        })

    // setTranslations([
    //   ["have", "мати"],
    //   ["a", "а"],
    //   ["good", "хороший"],
    //   ["day", "день"]
    // ]);
  };

  return (
    <div className="App" style={{ padding: "40px 60px" }}>
      <Header as="h3">Words</Header>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Enter words</label>
          <input
            ref={inputRef}
            id="words"
            placeholder="Words"
            style={{ width: "400px" }}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>

      <Results translations={translations} />
    </div>
  );
};

export default App;