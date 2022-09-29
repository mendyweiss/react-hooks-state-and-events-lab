import React , {useState} from "react";


function Item({ name, category }) {

  const [added, setAdded] = useState(false)

  function displayButtonFunction () {
    return added ? 'Remove from Cart' : 'Add to Cart'
  }

  function classNameAttacher () {
    if (added) {
      return "remove in-cart"
    } else {
      return "add"
    }
  }

  return (
    <li className={added ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={classNameAttacher()} onClick={() => setAdded(!added)}>{displayButtonFunction()}</button>
    </li>
  );
}

export default Item;
