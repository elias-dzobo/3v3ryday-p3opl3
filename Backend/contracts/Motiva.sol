//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Motiva {

    // Motivational message
    string quote = "i us3 nft pfps that i do not own, i'm an 3v3ryday p3rson";

    mapping(address => bool) public writtenQuote;

    constructor() {

    }

    function newQuote(string memory _newQuote) public {
        writtenQuote[msg.sender] = true; 
        quote = _newQuote; 
    }

    function getQuote() public view returns (string memory) {
        return quote; 
    }

}