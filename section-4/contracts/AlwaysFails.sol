//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

contract AlwaysFails {
    function aFunction() public {
        require(false, "Error message");
    }
}

contract ErrorHandling {
    event ErrorLogging(string reason);
    function catchError() public {
        AlwaysFails will = new AlwaysFails();
        try will.aFunction() {
            //here we could do something if it works
        }  catch Error(string memory reason) {
            emit ErrorLogging(reason);
        }
    }
}