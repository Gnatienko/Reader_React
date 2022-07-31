import React, { useState, useRef } from "react";
// import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Form, Divider } from "semantic-ui-react";
import Results from "./components/Results";
import axios from "axios";

const App = () => {
  const [translations, setTranslations] = useState([]) // useState - делает сетер транслейшена и присваивает пустой масив
  const inputRef = useRef(null); // 
  const onSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://shielded-castle-03747.herokuapp.com/translate_s/${inputRef.current.value}`) // current - поле где лежит хтмл
        .then((response) => { // все что вернулось с гета выше
          console.log('Success', response)
          setTranslations(response.data)
        })
        .catch((error) => {
          console.log('Error', error)
        })


  };

  return (
    <div className="App" style={{ padding: "40px 60px" }}>
      <Header as="h3">Words</Header>
      <Form onSubmit={onSubmit}> 
        <Form.Field>
          <label>Enter words!!</label>
          <input
            ref={inputRef}
            id="words" // здесь не нужно
            placeholder="Words"
            style={{ width: "400px" }}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>

      <Results translations={translations} />
    </div>
    // в скобочках переменные в элементе пишутся
  );
};

export default App;
