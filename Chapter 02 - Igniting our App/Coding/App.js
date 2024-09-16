
// Below is the way to add any tag in html 
// const header = (document.createElement("h1"));
// header.innerHTML = "Pranam Javascript"
// const root = document.getElementById("root");
//root.innerHtml = ''
// root.appendChild(header)


// Below is the way to do same above thing using react


const header = React.createElement('h1',{id:'h1Tag'},'Pranam Javascript')

const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );


  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [header, heading1]
  );
  
const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render([header,heading1])
root.render(container)