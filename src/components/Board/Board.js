import './Board.css';
import React, { useState, useEffect } from "react";
import BoardPiece from '../Ship/Ship.js'

const handleDragAndDrop = (mousedownEvent, elementArray) => {
  const mouse = (() => {
      const moveElem = (pageX, pageY) => {
          elementContainer.style.left = pageX - shiftX + 'px';
          elementContainer.style.top = pageY - shiftY + 'px';
      }
      const grabElem = (event) => {
          elementContainer.style.position = 'absolute';
          elementContainer.style.zIndex = 1000;
          elementContainer.style.width = originalContainer.scrollWidth / 10 + 'px';
          document.body.append(elementContainer);

          mouse.moveElem(event.pageX, event.pageY);
      }
      const dropElem = () => {
          elementContainer.style.position = 'static';
          elementContainer.style.zIndex = 'auto';
          elementContainer.style.width = 'auto;'
      }
      return { moveElem, grabElem, dropElem };
  })();

  let elementContainer = document.createElement('div');
  let originalContainer;
  elementArray.forEach(element => elementContainer.appendChild(element));

  let shiftX = mousedownEvent.clientX - mousedownEvent.target.getBoundingClientRect().left;
  let shiftY = mousedownEvent.clientY - mousedownEvent.target.getBoundingClientRect().top;
  elementContainer.ondragstart = () => false;

  // (1) grab elementContainer on mouse down
  mouse.grabElem(mousedownEvent);

  // (2) move elementContainer as mouse moves
  document.onmousemove = (mousemoveEvent) => {
      mouse.moveElem(mousemoveEvent.pageX, mousemoveEvent.pageY);
  }
  
  // (3) drop elementContainer on mouse up,
  elementContainer.onmouseup = () => {
      document.onmousemove = null;
      mouse.onmouseup = null;
  } 
}

function Square(props) {
  return (
  <div id={props.id} className='board-square'>
  </div>
  );
}

export default function Board(props) {  
  const [squareElements, setSquareElements] = useState([]);

  useEffect(function updateSquareElements() {
    let newSquareElements = props.squares.map((data, index) =>
      <Square id={index} key={index.toString()}>

      </Square>
    );
    setSquareElements(newSquareElements);
  },[props.squares],);

  return (
    <div className="Board">
      {squareElements}
    </div>
  );
}