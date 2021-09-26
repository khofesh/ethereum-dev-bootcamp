pragma solidity ^0.8.4;

contract StartingStopping {
    address public owner;
    bool public paused;
    
    constructor() {
        owner = msg.sender;
    }
    
    function sendMoney() public payable {
        
    }
    
    function setPaused(bool _paused) public {
        require(msg.sender == owner, "You're not the owner");
        paused = _paused;
    }
    
    function withdrawAllMoney(address payable _dest) public {
        require(msg.sender == owner, "You're not the owner");
        require(!paused, "The contract is paused");
        
        _dest.transfer(address(this).balance);
    } 
    
    function destroySmartContract(address payable _dest) public {
        require(msg.sender == owner, "You're not the owner");
        selfdestruct(_dest);
    }
}