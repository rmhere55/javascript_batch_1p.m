const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click",() =>{
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }

//   const child = document.createElement("div");
//   child.classList.add("child");
//   child.textContent = "child  h ye";
// //   add 
//   parent.appendChild(child);




const child = document.createElement("div");
child.classList.add("child");

// Create an image element
const img = document.createElement("img");
img.src = "https://cdn.getyourguide.com/img/tour/dd8d8ea0e2075e853d1254a1987b6c49489614d6217325cc732d0c236504f288.png/146.jpg"; // Replace with your image URL
img.alt = "Beautiful Child Image";
img.style.width = "50px";
img.style.height = "50px";
img.style.marginRight = "10px"; // Add space between image and text

// Create a text element
const text = document.createElement("span");
text.textContent = "This is the child content";

// Append image and text to the child
child.appendChild(img);
child.appendChild(text);

// Add the child to the parent
parent.appendChild(child);


}
);

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () =>{

  const child = document.body.querySelector(".child");
//   remove 
  parent.removeChild(child);

}
);
