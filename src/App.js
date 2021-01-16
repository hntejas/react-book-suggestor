import React, { useState } from "react";
import "./styles.css";

const bookObject = {
  Javascript: [
    {
      name: "You Don't Know JS",
      rating: "4/5",
      author: "Kyle Simpson"
    },
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      author: "Marjin Haverbeke"
    },
    {
      name: "Javascript: The Good Parts",
      rating: "3.5/5",
      author: "Douglas Crockford"
    }
  ],
  Coding: [
    {
      name: "Clean Code",
      rating: "5/5",
      author: "Robert Cecil Martin"
    },
    {
      name: "The Pragmatic Programmer",
      rating: "4/5",
      author: "Andrew Hunt and David Thomas."
    }
  ],
  "HTML & CSS": [
    {
      name: "HTML & CSS: Design and Build Web Sites",
      rating: "3.5/5",
      author: "Jon Duckett"
    },
    {
      name: "Head First HTML with CSS & XHTM",
      rating: "4/5",
      author: "Elisabeth Freeman and Eric Freeman"
    }
  ]
};
const bookCardStyle = {
  border: "1px solid gray",
  borderRadius: "0.5rem",
  margin: "2rem auto"
};
const genreButtonStyle = {
  border: "1px solid #0095ff",
  borderRadius: "22px",
  padding: "0.8rem",
  margin: "1rem",
  background: "#0095ff",
  color: "white",
  cursor: "pointer"
};

const container = {
  maxWidth: "600px",
  margin: "auto"
};

export default function App() {
  const [genre, setGenre] = useState("Javascript");

  const changeGenre = function (genre) {
    console.log("clicked");
    setGenre(genre);
  };

  return (
    <div className="App" style={container}>
      <h1>Book Suggestor</h1>
      {Object.keys(bookObject).map((genre, index) => (
        <button
          key={index}
          style={genreButtonStyle}
          onClick={() => changeGenre(genre)}
        >
          {genre}
        </button>
      ))}
      <hr />
      {bookObject[genre].map((bookData, index) => {
        return (
          <div key={index} style={bookCardStyle}>
            <h3>{bookData.name}</h3>
            <h4>By {bookData.author}</h4>
            <h4>Rating: {bookData.rating}</h4>
          </div>
        );
      })}
    </div>
  );
}
