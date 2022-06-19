// ReactDOM.render(<h1>Hello everyone</h1>, document.getElementById("root"))
const h1 = document.createElement("h1")
h1.textContent = "Hello React"
h1.className = "header"
console.log(h1)

const components = <h1 className="header">Hello React</h1>

console.log(components)

// jsx
ReactDOM.render(components, document.getElementById("root"))