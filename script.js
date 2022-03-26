/*
var countries=[""];

elements=prompt("Cuantos datos vas a ingresar")
for (i=0;i<elements;i++)
{
    countries[i]=prompt("Ingresa un pais");
    document.write("<br>");
    document.write(countries[i]);
}
*/
var workersCompany=[""];

var worker="";

var counter=0;


while(worker!="exit"){

    //workersCompany[counter]=prompt("Enter worker name");
            worker=prompt("Ingresa nombre de trabajador");
            workersCompany[counter]=worker;
counter++;

}

workersCompany.pop();

for(var i=0;i<workersCompany.length;i++){
document.write("<h2>");
    document.write((i+1) + "  " + workersCompany[i] + "<br/>");
    document.write("</h2>");
}

