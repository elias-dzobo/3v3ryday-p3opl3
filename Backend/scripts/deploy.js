const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account: ", deployer.address); 

    const motivaContractFactory = await hre.ethers.getContractFactory("Motiva");
    const motivaContract = await motivaContractFactory.deploy();
    await motivaContract.deployed();

    console.log("Motiva contract address: ", motivaContract.address);

};

const runMain = async() => {
    try{
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain(); 