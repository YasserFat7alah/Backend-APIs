var queries = require("../db/queries");
var dbConnection = require("../db/connection");
var utility = require("../util/utility");




exports.getStoreList= async (req, res) => {
    try {
        var storelistQuery = queries.queryList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(storelistQuery);
        console.log('stores : ', result.rows);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        console.log("ERROR: ", err);
        return res.status(500).send({ error :'failed to fetch stores'})
    }
}

exports.createStore = async (req, res) => {

    try {
            //variables intialization (required: title, content)
    var storeName = req.body.storeName; // Get the storeName from the request
    var address = req.body.address; // Get the address from the request
        // data validation
        if(!storeName || !address ) { // Check if the name and address are empty
  
          // Send the server response
          res.status(400).send("ERROR: Store's name and address are required!");
  
          // Log the error
          console.log('================');
          console.log("ERROR: Store's name and address are required!");
          console.log('storeName: ',storeName);
          console.log('address: ',address);
          return;
        }
    var storeCode = utility.generateStoreCode();
    var createdBy = "Yasser Fathallah"; // Get the creator's name from the request  
    var createdOn =  new Date(); // Get the created date of the request

    values = [storeName, storeCode, address, createdBy, createdOn]
  
        
    // new store creation

    var saveStoreQuery = queries.queryList.SAVE_STORE_QUERY
    await dbConnection.dbQuery(saveStoreQuery, values);

  
    //server response
    console.log('Store created with code ', storeCode);
    return res.status(201).send("SUCCESS: Store created!");
        
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to save store'}); 
    }
  
  };