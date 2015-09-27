var Times = 5; 
 
function parse() {
 var urls = $jq('a.product');
  
 for(var i=0;i<productsNum && i<urls.length; i++) {
  var url = $jq(urls[i]).attr('href'); // get url
  console.log('Fetching: '+ url); // debug note
   
  // make ajax request 
  $jq.ajax({
   url: url, 
   async: false, // do it synchronously
  }).done(function(data) { // data variable contains fetched html
   var parsedDom = $jq(data);
    
   // check if it works
   console.log( '[TEST] item price: ' + $jq('#sku-price', parsedDom).html() );
  });
 }
}