describe('Users factory', function () {
    var Users;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(Users).toBeDefined();
    });

    // A test to verify that calling all() returns the array of users we hard-coded above
    it('should return a hard-coded list of users', function () {
        expect(Users.all()).toEqual(userList);
    });

    // A simple test to verify the method findById exists
    it('should exist', function() {
        expect(Users.findById('2')).toEqual(singleUser);
    });

    // A test to verify that calling findById() with an id that doesn't exist, in this case 'ABC', returns undefined
    it('should return undefined if the user cannot be found', function() {
        expect(Users.findById('ABC')).not.toBeDefined();
    });

});

