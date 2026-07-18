import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import H1 from "./H1.jsx";
// const h1 = React.createElement(
// "h1",
// {
//  className: "title",
//  id: "heading"
// },
// "    Hello, From Mobile Dev Cohort!"
// )

let name = "Abdul";

createRoot(document.getElementById("root")).render(
  <>
    <div>
      <h1 className="title" id="heading">
        Hello, {name} Welcome to Mobile Dev Cohort!
      </h1>
      <App />
      <H1 title="React" desc="Learning React" />
      <H1 title="Linkdin" desc="https://www.linkedin.com/in/abdulrdeveloper/" />
      <H1 title="Portfolio" desc="https://abdulrdeveloper.me/" />
      <H1 title="Twitter" desc="https://twitter.com/abdulrdeveloper" />
      <H1 title="GitHub" desc="https://github.com/abdulrdeveloper" />
    </div>
  </>,
);
