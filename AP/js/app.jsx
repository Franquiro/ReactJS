class Boton extends React.Component{
  render(){
    return <button id={this.props.id} className="btn btn-primary">{this.props.nombre}</button>;
  }
}

class Botonera extends React.Component{
  render(){
    return(
      <div>
        <Boton id="contar" nombre="Contar" />
        <Boton id="mostrarPares" nombre="Pares"/>
      </div>
    );
  }
}
ReactDOM.render(<Botonera />, document.getElementById("botones"));
/*const usuario = {};
      usuario.nombre = prompt("Ingrese su nombre");
      usuario.apellido = prompt("Ingrese su apellido");
      const nombreCompleto = u => `${u.nombre} ${u.apellido}`;

      const elemento = <h1>¡Hola {nombreCompleto(usuario)}!</h1>;
      //método ReactDOM.render(elemento, entorno);
      // recibe un elemento y un entorno del HTML donde renderizarlo.
      //todo lo demas, es estandar.
      ReactDOM.render(elemento, document.getElementById("root"));*/

// EJERCICIO 1 CLASE 1 DE REACT
/*class persona {
        constructor(n, a, d, m, an) {
          this.nombre = n;
          this.apellido = a;
          this.fecha_nacimiento = new Date(an, m, d);
        }
      }

      const usuario = new persona("Francisco", "Quiroga y Medus", 21, 9, 1990);
      const MostrarPersona = (
        <div>
          <p>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#5070FF"
              }}
            >
              Nombre:
            </span>
            {usuario.nombre}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#5070FF"
              }}
            >
              Apellido:
            </span>
            {usuario.apellido}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#5070FF"
              }}
            >
              Fecha de Nacimiento:
            </span>
            {usuario.fecha_nacimiento.getDate()}/
            {usuario.fecha_nacimiento.getMonth() + 1}/
            {usuario.fecha_nacimiento.getYear()}
          </p>
        </div>
      );

      ReactDOM.render(MostrarPersona, document.getElementById("root"));*/

//EJERCICIO 2 CLASE 1 DE REACT
/*const peliculas = [
        "The Fellowship of the Ring",
        "The Two Towers",
        "The Return of the King"
      ];

      const lis = peliculas.map(e => <li>{e}</li>);

      const ul = <ul>{lis}</ul>;
      ReactDOM.render(ul, document.getElementById("root"));*/

//EJERCICIO 3 CLASE 1 REACT

let N;
document.querySelector("#contar").addEventListener("click", () => {
  N = parseInt(prompt("Ingrese número"));
  if (N < 0) N = N * -1;
  ReactDOM.render(<h1 />, document.getElementById("root"));
});

setInterval(() => {
  if (!isNaN(N)) {
    N--;
    if (N <= 0) ReactDOM.render(<h1>FIN</h1>, document.getElementById("root"));
    else
      ReactDOM.render(
        <h1 className="azul">{N}</h1>,
        document.getElementById("root")
      );
  }
}, 1000);


////////////         CLASE 2
/*function Avatar (props) {
  return (
    <img className="avatar"
      src={props.usuario.urlAvatar}
      alt={props.usuario.nombre}
    />
  );
 }

 function InfoUsuario (props) {
  return (
    <div className="info-usuario">
      <Avatar usuario={props.usuario} />
      <div className="info-usuario-nombre">
        {props.usuario.nombre}
      </div>
    </div>
  );
 }


 function Comentario (props) {
  return (
    <div className="comentario">
      <InfoUsuario usuario={props.autor} />
      <div className="texto-comentario">
        {props.texto}
      </div>
      <div className="fecha-comentario">
        {formatDate(props.fecha)}
      </div>
    </div>
  );
 }*/

/*
 //EJERCICIO 1 CLASE 2
function Fecha(props) {
  return (
    <span className="fecha">
      {props.dia}/{props.mes}/{props.anio}
    </span>
  );
}
function App() {
  return (
    <div>
      <Fecha dia="21" mes="Octubre" anio="1990" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

//EJERCICIO 2 CLASE 2
// adaptar el código anterior para utilizar un objeto Date
const fecha_de_nacimiento = new Date();
function Fecha(props) {
  return (
    <span className="fecha">
      {props.fecha.getDate()}/{props.fecha.getMonth() + 1}/
      {props.fecha.getYear()}
    </span>
  );
}
function App() {
  return (
    <div>
      <Fecha fecha={fecha_de_nacimiento} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

////// funcion Pares
let Np;
document.querySelector("#mostrarPares").addEventListener("click",function(){
  Np = parseInt(prompt("Ingrese cantidad de pares"));
  let par=2;
  let textoPar = String(par);
  setInterval(function(){
    if(Np<=1){
      ReactDOM.render(<h1>{textoPar+"-FIN"}</h1>,document.getElementById("root"));
    }
    else{
      ReactDOM.render(<h1>{textoPar}</h1>,document.getElementById("root"));
      par += 2;
      textoPar+="-"+par;
      Np--;
    }
  },1000);
}
);
