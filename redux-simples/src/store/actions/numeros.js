// Action Creator
function alterarNumeroMinimo(novoNumero) {
  return {
    type: "NUM_MIN_ALTERADO",
    payload: novoNumero,
  };
}
function alterarNumeroMaximo(NovoNumero) {
  return {
    type: "NUM_MAX_ALTERADO",
    payload: NovoNumero,
  };
}

export default (alterarNumeroMinimo, alterarNumeroMaximo)
