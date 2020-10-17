class employee{
    constructo(id,name,address){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    display(){
        const data = 'The Name:${this.name}
        the address:${this.address}
        the id:${this.id}';
        console.log(data);
    }
}
const obj=new employee(123,"Keerthana","Ananthapur");
obj.display();
//export {employee};