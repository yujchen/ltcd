
/**
 *  * @param {string} address
 *   * @return {string}
 *    */
var defangIPaddr = function(address) {
	    console.log(address);
	    let strBld = "";
	    for (i = 0; i < address.length; i++){
		            strBld = strBld.concat(address[i]);
		            console.log(strBld);
		            if (address[i] === '.'){
				                let x = address.slice(0,i);
				                let y = "[.]";
				                let z = address.slice(i+1,address.length);
				                address = x+y+z;
				                console.log(address);
				                i=i+2;
				            }
		        }
	    return address;
	    // return address.replace(/\./g,"[.]");
};
