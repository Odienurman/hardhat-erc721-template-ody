import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC721...');

    const args = [
        '0x2263a1C2084EE61249dAE93876A396Ac8D20CD4B',   // _initialOwner
        'anyflow monkey', // _name
        'ANYM',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC721", args);

    console.log(`Contract AnyFlowERC721 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
