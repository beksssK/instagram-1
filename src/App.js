import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import Routes from "./routes";
import firebase from './firebase';
function App() {
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        firebase.stateUser().then((user) => {
            if(user) {
                setInitialized(!!user)
            }
        })
    });
  return (
      <Layout>

        <Routes initialized={initialized} setInitialized={setInitialized}/>
      </Layout>
  );
}

export default App;
