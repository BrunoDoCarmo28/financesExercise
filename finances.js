let fam = {
    salarios:[2400, 4000],
    despesas:[1300, 1000, 2000, 120]
      }
    
    function somSal() {
      const somaSalarios = fam.salarios[0] + fam.salarios[1]; // esse fam é a variável
      const somaDes = fam.despesas[0] + fam.despesas[1] + fam.despesas[2] + fam.despesas[3];
      const saldo = somaSalarios - somaDes;
       if(saldo>=0){ // O IF DEVE SER SEMPRE ANTES DO RETURN
        console.log('Positive balance - Green')
        
      } 
      else if(saldo<0){
        console.log('Negative balance - Red')
        
      }
      return saldo;
       
    }
    
    
      console.log(somSal(fam));