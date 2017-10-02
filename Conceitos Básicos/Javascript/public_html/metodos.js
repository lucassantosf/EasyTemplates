var conta = {
    saldo : 0,
    deposita: function(valor){
        this.saldo += valor;
    }
    
};

conta.deposita(500);

document.write(conta.saldo);
