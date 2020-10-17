var flipcart=require("./market")();
flipcart.addRecord({"id":111,"name":"Nokia 122","price":1200});
const data=flipcart.getAll();
for(const iterator of data){
    console.log(iterator);
}