function calcular() {
  var remuneracao = 0.00;
  var novaoferta = 0.00;

  var inpx=document.getElementById("remuneracao").value;
  var aux1=inpx.replace(/[^0-9]/g,'');
  if(parseFloat(aux1) > 0){
      remuneracao = parseFloat(aux1)/100.00;
      document.getElementById("remuneracao").value = "";
      document.getElementById("remuneracao").value = remuneracao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  else{
     document.getElementById("remuneracao").value = "";
     document.getElementById("primicias").value = "";
     document.getElementById("dizimo").value = "";
     document.getElementById("ofminsoc").value = "";
     document.getElementById("ofgrat").value = "";
     document.getElementById("ofsem").value = "";
     document.getElementById("ofisr").value = "";
     document.getElementById("ofmis").value = "";
     remuneracao = 0;
     //return;
  }
  
  var inpx2=document.getElementById("novaoferta").value;
  var aux2=inpx2.replace(/[^0-9]/g,'');
  if(parseFloat(aux2) > 0){
      novaoferta = parseFloat(aux2)/100.00;
      document.getElementById("novaoferta").value = "";
      document.getElementById("novaoferta").value = novaoferta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  else{
     document.getElementById("novaoferta").value = "";
     novaoferta=0;
     //return;
  }
  
  if((remuneracao == 0) && (novaoferta == 0)){
     document.getElementById("remuneracao").value = "";
     document.getElementById("novaoferta").value = "";
     document.getElementById("totaloferta").value = "";

     document.getElementById("primicias").value = "";
     document.getElementById("dizimo").value = "";
     document.getElementById("ofminsoc").value = "";
     document.getElementById("ofgrat").value = "";
     document.getElementById("ofsem").value = "";
     document.getElementById("ofisr").value = "";
     document.getElementById("ofmis").value = "";
     return;
  }

  var primicias = parseFloat((remuneracao/30).toFixed(2));
  var dizimo = parseFloat(((remuneracao - primicias) * 0.1).toFixed(2));
  if(dizimo <= 0){ dizimo = primicias; }
  var ofminsoc = parseFloat((remuneracao * 0.02).toFixed(2));
  var ofgrat = parseFloat((remuneracao * 0.001).toFixed(2));
  var ofsem = parseFloat((remuneracao * 0.004).toFixed(2));
  var ofisr = parseFloat((remuneracao * 0.01).toFixed(2));
  var ofmis = parseFloat((remuneracao * 0.02).toFixed(2));
 
  document.getElementById("primicias").value = primicias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("dizimo").value = dizimo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("ofminsoc").value = ofminsoc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("ofgrat").value = ofgrat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("ofsem").value = ofsem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("ofisr").value = ofisr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById("ofmis").value = ofmis.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  var sum=primicias+dizimo+ofminsoc+ofgrat+ofsem+ofisr+ofmis+novaoferta;
  document.getElementById("totaloferta").value = sum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
   }

   document.getElementById("remuneracao").addEventListener("input", calcular);
 document.getElementById("novaoferta").addEventListener("input", calcular);