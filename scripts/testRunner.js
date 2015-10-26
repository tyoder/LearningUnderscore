/**
 * Created by tkyoder on 10/17/15.
 */

var eachTest = function(){

    var sum = 0;

    // The function to pass to _.each
    var accumulate = function(myNumber){
        sum = sum + myNumber;
        console.log(sum);
    };

    return _.each([1,2,3,5,8,13,21], accumulate);

};

var mapTest = function(){

    var myNewArray = _.map([1, 2, 3], function(num){ return num * 3; }); // [3,6,9]
    console.log(myNewArray);

};

var reduceTest = function(){

    // The last argument is what memo will be in the first iteration
    // For sum below, the first time the iteration is run it will calculate 0 + 1
    // For product, the first time the iteration is run it will calculate 1 * 1
    var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);  //6
    var product = _.reduce([1, 2, 3, 4], function(memo, num){ return memo * num; }, 1); //24
    console.log(product);
};

var extendTest = function(){

    var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName: function(){
            return this.firstname + ' ' + this.lastname;
        }
    };

    var john = {
        firstname: 'John',
        lastname: 'Doe'
    };

    // don't actually do this...demo only
    john._proto__ = person;

    var jane = {
        address: '111 Main St.',
        getFormalFullName: function(){
            return this.lastname + ', ' + this.firstname;
        }
    };

    var jim = {
        getFirstName: function(){
            return this.firstname;
        }
    };

    // Composes or combines jane and jim into john.
    _.extend(john, jane, jim);

    // john now had address property and getFirstName method
    alert(john.address);
    alert(john.getFirstName());
};



// Run a test
(function(){

    extendTest();

}());







