pragma solidity >=0.4.0 <0.7.0;

contract SimpleStorage {
    // put the state variable here
    
   function get() public view returns (uint256) {
    uint256 storedData = 3;
    return storedData;
  }
}