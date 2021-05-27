const nomes = [
    'Ana',
    'Bia',
    'Carlos'
]
//eslint-disable-next-line
export default function (state, action) {
    console.log("Reducer de Nomes...")
    console.log(state, ' ', action)
    return nomes
}