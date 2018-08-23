
function calcular() {

  var elemento1 = document.getElementById('aceleracao');
  var elemento2 = document.getElementById('deltaV');
  var elemento3 = document.getElementById('deltaT');

  var ace = parseFloat(elemento1.value);
  var delV = parseFloat(elemento2.value);
  var delT = parseFloat(elemento3.value);

  if (ace == 0 && delV == 0 && delT == 0 || ace == 0 && delT == 0 || ace == 0 && delV == 0 || delT == 0 && delV == 0) {
    alert("Digite em dois campos");
  }
  else if (ace > 0 && delV > 0 && delT == 0) {
    console.log("1 if");
  	if(ace < 0 && delV > 0 || ace > 0 && delV < 0 ){
      console.log("1.1 if");
      alert("a e delta V prescisam ser negativas ou positivas");  
    }
            
    var ope = delV/ace;
    if(ope < 0){
        ope = ope * -1;
    }
    alert("delatT = " + ope + "s");

  }
  else if(ace != 0 && delT > 0 && delV == 0){
            
    var oper = ace * delT;
    alert("deltaV = " + oper + "m/s");
  }
  else if (delV > 0 && delT > 0 && ace == 0) {

  	var opera = delV / delT;
  	alert("a = " + opera + "m/s²");
  }
  else{
    alert("Operacao inavlida");
  }
  
       
}