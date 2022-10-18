const db =  require("./../db");

const postData = async (req,res,next) => {
    try{
        let resp = await db.selectedDB.collection('awspolymer').insertMany([...req.body]);
        res.status(201).send(resp);
    }
    catch(err){
        res.status(400).send(resp);
    }
}

const getData = async (req,res,next) => {
    try{
        let resp = await db.selectedDB.collection('awspolymer').find().toArray();
        res.status(200).send(resp);
    }
    catch(err){
        res.status(400).send(resp);
    }
}

module.exports = {
    postData,
    getData
}