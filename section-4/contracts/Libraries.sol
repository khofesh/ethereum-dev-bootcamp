pragma solidity ^0.5.13;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

contract LibrariesExample {
    using SafeMath for uint;
    
    mapping(address => uint) public tokenBalance;
    
    constructor() {
        tokenBalance[msg.sender] = tokenBalance[msg.sender].add(1);
    }
    
    function sendToken(address _to, uint _amount) public returns(bool) {
        tokenBalance[msg.sender] = tokenBalance[msg.sender].sub(_amount);
        tokenBalance[_to] = tokenBalance[_to].add(_amount);
        
        return true;
    }
}