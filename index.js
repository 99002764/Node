function emp(name,address){
    this.name=name;
    this.address=address;
}
let {name,address}=new emp("keerthana","Ananthapur");
console.log('${name}comes from ${address}');