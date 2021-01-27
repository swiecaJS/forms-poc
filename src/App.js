import React from "react";
import "./App.css";

import API_RESPONSE from "./api_response.json";
import { Form, Input, getComponentByType } from "./Form";

function App() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <h1>Forms poc</h1>

      <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      {API_RESPONSE.data.map(field => {


        const Component = getComponentByType(field.inputControlType)
        if (!Component) return () => null;

        return <Component name={field.name}/>
      })}
        {/* {API_RESPONSE.data.map((field) => {
          console.log(field)

          // if (field.inputControlType !== 'SingleLineEdit') return null
          return (
            <div>
              <Input name={field.name} />
            </div>
          )
        })} */}

          <Input type="submit" value="Submit" />
      </Form>

      <pre>{JSON.stringify(API_RESPONSE, null, 2)}</pre>
    </div>
  );
}

export default App;
