`use strict`


window.onload = function(){
  //create a couple of elements in an otherwise empty HTML page
  const heading = document.createElement("h1");
  const heading_text = document.createTextNode("Example text");
  heading.appendChild(heading_text);
  document.body.appendChild(heading);

  const first_paragraph = document.createElement("p");
  const paragraph_text = document.createTextNode("this is random info for the paragraph");
  first_paragraph.appendChild(paragraph_text);
  document.body.appendChild(first_paragraph)

  
}