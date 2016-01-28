function log(msg) {
    console.log("InAppBilling[js]: " + msg);
};

function successHandler (result) {
    var strResult = "";
    if(typeof result === 'object') {
        strResult = JSON.stringify(result);
    } else {
        strResult = result;
    }
    alert("SUCCESS: \r\n"+strResult );
};
            
function errorHandler (error) {
    alert("ERROR: \r\n"+error );
};

// Click on init button
function init(){
    // Initialize the billing plugin
    log("init");
    inappbilling.init(successHandler, errorHandler, {showLog:true});
};

// Click on purchase button
function buy(){
    // make the purchase
    log("buy");
    inappbilling.buy(successHandler, errorHandler,"gas");
};
            
// Click on ownedProducts button
function ownedProducts(){
    // Initialize the billing plugin
    log("ownedProducts");
    inappbilling.getPurchases(successHandler, errorHandler);
};

// Click on Consume purchase button
function consumePurchase(){
    log("consumePurchase");
    inappbilling.consumePurchase(successHandler, errorHandler, "gas");
};

// Click on subscribe button
function subscribe(){
    // make the purchase
    log("subscribe");
    inappbilling.subscribe(successHandler, errorHandler,"infinite_gas");
};
            
// Click on Query Details button
function getDetails(){
    // Query the store for the product details
    log("getDetails");
    inappbilling.getProductDetails(successHandler, errorHandler, ["gas","infinite_gas"]);
};
            
// Click on Get Available Products button
function getAvailable(){
    // Get the products available for purchase.
    log("getAvailable");
    inappbilling.getAvailableProducts(successHandler, errorHandler);
};

log("Initialize");
document.getElementById("init").addEventListener("click", init);
document.getElementById("buy").addEventListener("click", buy);
document.getElementById("ownedProducts").addEventListener("click", ownedProducts);
document.getElementById("consumePurchase").addEventListener("click", consumePurchase);
document.getElementById("subscribe").addEventListener("click", subscribe);
document.getElementById("getDetails").addEventListener("click", getDetails);
document.getElementById("getAvailable").addEventListener("click", getAvailable);
