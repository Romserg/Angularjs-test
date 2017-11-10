describe ('my-app', function(){
    var scope, ctrl, httpBackend;

    beforeEach(module('my-app'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
        httpBackend = _$httpBackend_;
        httpBackend
            .when('GET','./data/db.json')
            .respond([]);
        scope = $rootScope.$new();

        ctrl = $controller('usersCtrl', {
            $scope: scope
        });
    }));

    it('Users array is initializated', function(){
        expect(scope.usersArray.length).toEqual(1);
    });

    it('GET Request', function(){
        scope.get();
        httpBackend.flush();
        expect(scope.usersArray.length).toBeGreaterThanOrEqual(0);
        
    });
    
    it('Add new person in array', function(){
        scope.addNew();
        expect(scope.usersArray.length).toBeGreaterThan(0)
    });

    it('Remove selected person from array', function(){
        let temp = scope.usersArray.length;
        scope.deletePerson();
        expect(scope.usersArray.length).toBeLessThan(temp);
    });
});