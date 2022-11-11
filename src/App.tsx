import React from "react";
import Counter from "./components/Counter";
import "./App.css";
import Greeting from "./components/Greeting";
import PhotoCard, { PhotoCardType } from "./components/PhotoCard";
import AboutMe, { Person } from "./components/AboutMe";

const total: number = 12;

const card: PhotoCardType = {
  photo:
    "https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo",
  user: "Todd Albert",
  mainPhoto: "",
  description: "Cool guy",
  likeCount: 10,
};

const me: Person = {
  name: "Cass",
  age: 30,
  awesome: true,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello typescript</h1>
        <Counter />
        <Greeting firstName="Cass" lastName="Lee" />
        <PhotoCard card={card} />
        <AboutMe person={me} />
      </header>
    </div>
  );
}

export default App;
