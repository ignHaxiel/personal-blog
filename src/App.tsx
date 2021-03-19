import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Article from "./Component/Article";

function App() {
  //Convert Typescript to Javascript and run Javascript
  // tsc.cmd .\test.ts
  // node test.js

  const GRAPHQL_API = "https://whispering-bayou-41774.herokuapp.com/api";
  const GET_QUERY = `
    query{
      articles{
        id,
        headline,
        body
      }  
    }
    `;

  const [data, dataSet] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios({
        url: GRAPHQL_API,
        method: "post",
        data: {
          query: GET_QUERY,
        },
      });
      const result = queryResult.data.data;
      dataSet(result.articles);
    };

    fetchData();
  }, []);
  // ,[]  <- this in useEffect is very important [to stop infine loop after getting data]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>List of articles</h1>
        {data.length ? (
          data.map((item) => (
            <div key={item.id}>
              <Article item={item} />
            </div>
          ))
        ) : (
          <h2>Loading data...</h2>
        )}
      </header>
    </div>
  );
}

export default App;
