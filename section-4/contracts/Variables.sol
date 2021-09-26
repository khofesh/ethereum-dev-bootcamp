pragma solidity ^0.8.4;

contract WorkingWithVariables {
    uint256 public myUint;
    bool public myBool;
    uint8 public myUint8;
    address public myAddress;
    string public myString = "Ethereum is cool!";
    
    function setMyUint(uint256 _myUint) public {
        myUint = _myUint;
    }
    
    function setMyBool(bool _myBool) public {
        myBool = _myBool;
    }
    
    function incrementMyUint() public {
        myUint8++;
    }
    
    function decrementMyUint() public {
        myUint8--;
    }
    
    function setAddress(address _address) public {
        myAddress = _address;
    }
    
    function getBalanceOfAddress() public view returns(uint) {
        return myAddress.balance;
    }
    
    function setMyString(string memory _myString) public {
        myString = _myString;
    }
}