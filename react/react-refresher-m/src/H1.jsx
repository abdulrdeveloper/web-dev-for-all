// import React from 'react'

// const H1 = (props) => {
//   return (
//     <h1>{props.title}</h1>
//   )
// }

// export default H1

import React from "react";

const H1 = ({ props }) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </>
  );
};

export default H1;

// both are same , we can use props or destructure it and use it directly. destructuring is more cleaner and easy to read. we can also use it in function parameters as well.
// but props is also useful when we want to pass all multiple props to a component.
