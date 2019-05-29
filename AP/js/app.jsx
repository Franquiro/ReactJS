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
    else ReactDOM.render(<h1>{N}</h1>, document.getElementById("root"));
  }
}, 1000);
