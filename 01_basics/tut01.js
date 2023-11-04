const accountID = 123556
let accountEmail = "om123@gmail.com"
var accountPass = "123"  // note do use let as variable
                        // instead of var due to scope
let accountCity = "nagpur"
let accountState;

// accountID = 5648  // not allowed because it is constant

accountEmail = "rani123@gamil.com"
accountPass = "098"

console.log(accountID);
console.table([accountID, accountEmail, accountPass, accountCity, accountState]);
