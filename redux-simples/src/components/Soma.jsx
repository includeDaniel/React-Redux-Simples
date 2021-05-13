import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

// eslint-disable-next-line
const Soma = ({ max, min }) => {
  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Soma);
