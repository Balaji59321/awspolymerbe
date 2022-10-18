const  mongodb = require("mongodb");

module.exports = {
    selectedDB: {},
    async connect(){
        try{
            const resp = await mongodb.MongoClient.connect(process.env.DB_MONGOOSE);
            this.selectedDB = resp.db("awspolymer")
            console.log("DB connected Successfully");
        }
        catch(err){
            console.log(err);
        }
    },
};