// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    mapping(address => bool) public whitelist;
    address[] public whitelistedAddresses;
    address public admin;
    uint256 public constant MAX_WHITELISTED = 100;

    constructor() {
        admin = msg.sender;
    }

    function addToWhitelist(address _address) external {
        require(msg.sender == admin, "Only admin can add to the whitelist");
        require(!whitelist[_address], "Address is already whitelisted");
        require(whitelistedAddresses.length < MAX_WHITELISTED, "Whitelist is full");

        whitelist[_address] = true;
        whitelistedAddresses.push(_address);
    }

    function removeFromWhitelist(address _address) external {
        require(msg.sender == admin, "Only admin can remove from the whitelist");
        require(whitelist[_address], "Address is not whitelisted");

        whitelist[_address] = false;
        for (uint256 i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _address) {
                whitelistedAddresses[i] = whitelistedAddresses[whitelistedAddresses.length - 1];
                whitelistedAddresses.pop();
                break;
            }
        }
    }

    function isWhitelisted(address _address) external view returns(bool) {
        return whitelist[_address];
    }

    function getWhitelistedAddresses() external view returns(address[] memory) {
        return whitelistedAddresses;
    }
}
