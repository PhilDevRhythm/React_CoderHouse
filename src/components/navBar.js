

let titulo = ({nombre}) => (
    <h1>{nombre}</h1>
);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(titulo("luis"));


export default titulo