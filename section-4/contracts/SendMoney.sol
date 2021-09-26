pragma solidity ^0.8.4;

contract SendMoney {
    uint public balanceReceived;
    uint public lockedUntil;
    
    function receiveMoney() public payable {
        balanceReceived += msg.value;
        lockedUntil = block.timestamp + 1 minutes;
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function withdrawMoney() public {
        if(lockedUntil < block.timestamp) {
            address payable destination = payable(msg.sender);
            destination.transfer(getBalance());
        }
    }
    
    function withdrawMoneyTo(address payable _destination) public {
        if(lockedUntil < block.timestamp) {
            _destination.transfer(getBalance());
        }
    }
}