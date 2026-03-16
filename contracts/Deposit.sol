pragma solidity ^0.8.28;
//SPDX-License-Identifier: MIT



contract Deposit {
   
    address public Owner;
    uint256 totalBalance;
    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);

    constructor()  {
        totalBalance = 1000;
        Owner = msg.sender;
        balances[msg.sender] = totalBalance;
    }
    
    function depositToken(uint256 amount) external {
        require(msg.sender != address(0), "Invalid Address");
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

      
       balances[msg.sender] = balances[msg.sender] + amount;
        
         emit Deposit(msg.sender, amount);
    }
    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    
}