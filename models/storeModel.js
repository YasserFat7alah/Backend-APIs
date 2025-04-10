exports.Store = class Store{

    constructor(storeID, storeName, code, address, createdOn, createdBy)
    {
        this.storeID= storeID;
        this.storeName= storeName;
        this.code = code;
        this.address = address;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }
}