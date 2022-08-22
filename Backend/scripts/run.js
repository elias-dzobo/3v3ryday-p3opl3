const main = async () => {

    const motivaContractFactory = await hre.ethers.getContractFactory("Motiva"); 
    const motivaContract = await motivaContractFactory.deploy();
    await motivaContract.deployed()
    console.log("Contract deployed to: ", motivaContract.address); 

    let quote; 
    quote = await motivaContract.getQuote(); 
    console.log(quote);

    let newquote = await motivaContract.newQuote("Never give up");
    await newquote.wait();

    quote = await motivaContract.getQuote();
    console.log(quote); 
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain(); 