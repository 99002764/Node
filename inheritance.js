class Account{
    constructor(no,name,balance){
        this.accNo=no;
        this.name=name;
        this.balance=balance;
    }
    credit(amount){
        this.balance+=amount
    }
    debit(amount){
        if(this.balance<amount)
             throw "insufficient Funds"
             this.balance-=amount
    }
}
class SBAccount extends Account{
    callIntrest(){
        const principle=this.balance;
        const RateOfIntrest=6.5
        const year=1/4
        const intrest=(principle*RateOfIntrest*year)
        this.credit(intrest)
    }
}
try{
    const acc=new Account(123,"keerthana",30000)
    acc.credit(30000)
    acc.debit(30000)
    
    console.log("The balance:"+acc.balance)
}catch(err){
    console.log(err)
}