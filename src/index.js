import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const PromoDefault = {
  TITLE: `Star Wars`,
  GENRE: `Drama`,
  RELEASE: 2017,
};

ReactDOM.render(
  <App
    promoTitle= {PromoDefault.TITLE}
    promoGenre= {PromoDefault.GENRE}
    promoRelease= {PromoDefault.RELEASE}
  />,
  document.querySelector(`#root`)
);

