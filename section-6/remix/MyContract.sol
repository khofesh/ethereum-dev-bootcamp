//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

contract SomeContract {
    uint256 public myUint = 10;

    function getMyUint() public view returns (uint256 number) {
        return myUint;
    }

    function setUint(uint256 _myUint) public {
        myUint = _myUint;
    }
}
