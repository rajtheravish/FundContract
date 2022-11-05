// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FundContract {
    event Transfer(
        address indexed to,
        uint amount
    );

    function sendEth(address payable to, uint amount) external payable{
        require(address(this).balance >= amount, "Insufficient Contract balance");
        to.transfer(amount);
        emit Transfer(to, amount);
    }

    function deposit() external payable {}
}