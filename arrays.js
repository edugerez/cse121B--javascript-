

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});

const edu=("hola");
console.log(edu)



// example 2
const grades = ["A", "B", "A"];

function convertirPuntos(punto){
    let puntos=0;
    if (punto==="A"){
        puntos=4
    }
    else if(punto==="B"){
        puntos=3
    }
    return puntos
}
const gpaPuntos= grades.map(
    function convertirPuntos(punto){
        let puntos=0;
        if (punto==="A"){
            puntos=4
        }
        else if(punto==="B"){
            puntos=3
        }
        return puntos
    })
console.log(gpaPuntos)

const gpaPoints = grades.map(convertirPuntos);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa)