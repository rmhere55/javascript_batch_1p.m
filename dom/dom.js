// dom 
// 4 pillar
//  html  change (done )
// selection on a element (done)
// css change
// event   listener (done)

// event
const story = document.body.querySelector(".story");
// ye line hum textarea ke class ko access krne ke liya use kr rhai hai 


  const htage = document.querySelector('h1')
  // const p = document.querySelectorAll('p')
  

  console.log(htage)


const setText = document.body.querySelector("#set-text");
// ye line hum textarea ke id ko access krne ke liya use kr rhai hai 

setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
// ye line hum textarea ke id ko access krne ke liya use kr rhai hai 


clearText.addEventListener("click", 
    () => {
  story.textContent = "";
});
