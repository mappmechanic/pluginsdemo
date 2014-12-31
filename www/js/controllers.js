angular.module('pluginsdemo.controllers', [])

.controller('DashCtrl', function ($scope) {

    $scope.showAlert = function () {
        navigator.notification.alert(
            'Showing the alert message!', // message
            function () {}, // callback
            'Message', // title
            'Done' // buttonName
        );
    }

    $scope.showConfirm = function () {
        var buttonLabels = ['Yes', 'No'];

        function onConfirm(buttonIndex) {
            alert('You selected option: ' + buttonLabels[buttonIndex - 1]);
        }

        navigator.notification.confirm(
            'Do you want to confirm!', // message
            onConfirm, // callback to invoke with index of button pressed
            'Confirm Dialog', // title
            buttonLabels // buttonLabels
        );
    }

    $scope.openGoogle = function () {
        var ref = window.open('http://google.com', '_blank', 'location=yes');
    }
})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});