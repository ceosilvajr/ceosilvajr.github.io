var app = angular.module('myApp', []);

app.controller('projectController', function ($scope) {
    $scope.projects = [{
        id: 1,
        position: '6u 12u$(xsmall) work-item',
        title: 'Cape',
        description: 'Cape wants to make it easier and cheaper for passengers to travel by giving them the ability to book standby tickets for local and international flights, a privilege previously unavailable to the general public.',
        image_path: 'images/thumbs/cape_banner.png',
        link: 'http://www.mycape.io/'
    }, {
        id: 2,
        position: '6u$ 12u$(xsmall) work-item',
        title: 'Appetiser Apps',
        description: 'Appetiser is the leading Melbourne app development company and the most sought after mobile app developers in Australia for iPhone & Android app development',
        image_path: 'images/thumbs/appetiser_apps.png',
        link: 'https://appetiser.com.au/'
    }];
});

app.controller('ceosilvaController', function ($scope) {
    $scope.ceo = {
        username: 'ceosilvajr',
        name: 'Ariel Q. Silva Jr.',
        email: 'ceosilvajr@gmail.com',
        phone: '+639399080674',
        fbLink: 'https://www.facebook.com/ceosilvajr',
        linkedInLink: 'https://www.linkedin.com/in/ceosilvajr',
        githubLink: 'https://github.com/ceosilvajr',
        twitterLink: 'https://twitter.com/ceosilvajr',
        resumeLink: 'https://drive.google.com/file/d/1sFNRlsPcF3HcMJiXBqmwaKy_QaClaamK/view?usp=sharing',
        stackLink: 'http://stackoverflow.com/cv/ceosilvajr'
    };
});
