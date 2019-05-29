import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {//TODO}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{// status}</div>
            <ol>{// TODO }</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );*/

class Display extends React.Component {
  render() {
    return <h1>Resultado</h1>;
  }
}

class Boton extends React.Component {
  render() {
    return <button class="btn btn-secondary" />;
  }
}

class Calculadora extends React.Component {
  renderBoton(i) {
    return <Boton />;
  }
  renderDisp() {
    return <Display />;
  }
  render() {
    return (
      <div class="game-board">
        <div class="board-row">{this.renderDisp()}</div>
        <div class="board-row">
          {this.renderBoton(7)}
          {this.renderBoton(8)}
          {this.renderBoton(9)}
          {this.renderBoton("+")}
        </div>
        <div class="board-row">
          {this.renderBoton(4)}
          {this.renderBoton(5)}
          {this.renderBoton(6)}
          {this.renderBoton("-")}
        </div>
        <div class="board-row">
          {this.renderBoton(1)}
          {this.renderBoton(2)}
          {this.renderBoton(3)}
          {this.renderBoton("*")}
        </div>
        <div class="board-row">
          {this.renderBoton(0)}
          {this.renderBoton("/")}
          {this.renderBoton("=")}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Calculadora />, document.getElementById("root"));
