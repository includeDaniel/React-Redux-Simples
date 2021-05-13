import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

// eslint-disable-next-line
const Media = ({ max, min }) => {
  return (
    <Card title="Média de Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
