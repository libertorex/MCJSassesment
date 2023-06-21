/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftHolder = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_rideName, _horsePower, _transmission, _maxRPM, _bling) {
    const nftObj = {
        "rideName" : _rideName,
        "horsePower" : _horsePower,
        "transmission" : _transmission,
        "maxRPM" : _maxRPM,
        "bling" : _bling
    };

    nftHolder.push(nftObj);
    console.log("Minted: " + _rideName);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < nftHolder.length; i++){
        console.log("\nRider ID: \t\t" + (i+1));
        console.log("Ride Name: \t\t" + nftHolder[i].rideName);
        console.log("Horse Power: \t" + nftHolder[i].horsePower);
        console.log("Transmission: \t" + nftHolder[i].transmission);
        console.log("Max RPM: \t\t" + nftHolder[i].maxRPM);
        console.log("bling \t\t" + nftHolder[i].bling)
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Total no. of NFTs we have: " + nftHolder.length);

}

// call your functions below this line
mintNFT("Supra MK4", "326", "Manual", "5600", "JDM");
mintNFT("R34 Skyline", "400", "Sequential", "8200", "JDM");
mintNFT("Mazda RX7", "276", "Manual", "6000", "JDM");
mintNFT("Silvia S14", "250", "Manual", "6400", "JDM");
mintNFT("Honda Civiv Type R", "195", "Manual", "8000", "JDM");
mintNFT("Porsche 911 GTR", "502", "Automatic", "9000", "GDM");
mintNFT("AE86 Trueno", "112", "Manual", "6600", "JDM");
listNFTs();
getTotalSupply();
