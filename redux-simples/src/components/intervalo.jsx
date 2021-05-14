import "./Intervalo.css";
import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import alterarNumeroMinimo from "../store/actions/numeros";
import alterarNumeroMaximo from "../store/actions/numeros";

// eslint-disable-next-line
const Intervalo = (props, props2) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    alterarMaximo(NovoNumero) {
      const action2 = alterarNumeroMaximo(NovoNumero);
      dispatch(action2);
    },
    alterarMinimo(novoNumero) {
      //action creator -> action
      const action1 = alterarNumeroMinimo(novoNumero);
      dispatch(action1);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
