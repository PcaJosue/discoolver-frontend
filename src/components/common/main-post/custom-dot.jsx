import { useState } from "react";
import  "./custom-dot.scss";

const CustomDot = ({ onClick, active, index, carouselState }) => {


    const [show, setShow] = useState(true);


    return (
      <>
      {show && (
        <li >
          <button className={active ? "customDot customDotActive" : "customDot" }
            onClick={() => onClick()}
          />
        </li>
      )}
      </>
    );
  };
  
  export default CustomDot;