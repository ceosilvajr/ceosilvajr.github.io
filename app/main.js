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
    title: 'GPS Assist',
    description: 'A “cloud” based Roadside Assistance application, designed for a worry-free easy access “at Your'
    + ' Fingertip”. It conveniently utilizes your mobile phone’s GPS capabilities to pinpoint your exact location, allowing immediate dispatch of our service providers for emergency assistance.',
    image_path: 'images/thumbs/q11_banner.png',
    link: 'https://play.google.com/store/apps/details?id=com.q11technologies.gpsassist.app'
  }, {
    id: 3,
    position: '6u 12u$(xsmall) work-item',
    title: 'Fil-Am Radio 24/7',
    description: 'FilAm Radio is attempting to build a broadcasting network amongst the huge and fast-expanding population of Filipino-Americans in the Bay Area with an eye on linking up with other anchor stations in the West Coast and in the Pacific Northwest.',
    image_path: 'images/thumbs/filam_radio_banner.png',
    link: 'https://play.google.com/store/apps/details?id=com.filamradiousa.app.filamradio'
  }, {
    id: 4,
    position: '6u$ 12u$(xsmall) work-item',
    title: 'MyProperty.ph',
    description: 'An app for the property seller market (developers’ brokers & agents, independent licensed brokers, private individuals) which may be used for managing their inventory of property listings.',
    image_path: 'images/thumbs/my_property_banner.png',
    link: 'https://play.google.com/store/apps/details?id=ph.myproperty.android.mypropertyph'
  }, {
    id: 5,
    position: '6u 12u$(xsmall) work-item',
    title: 'Pinoy Karaoke Star',
    description: 'Pinoy Karaoke Star is an app where you sing, record and share your favorite OPM (Original Pilipino Music) songs with your family and friends anywhere in the world.',
    image_path: 'images/thumbs/pinoy_karaoke_star_banner.png',
    link: '#'
  }, {
    id: 6,
    position: '6u$ 12u$(xsmall) work-item',
    title: 'Smart Load Services',
    description: 'Prepaid subscribers of wireless leader Smart Communications, Inc. (Smart) can now send text messages to other networks using Smart’s emergency load *SOS service by using this app.',
    image_path: 'images/thumbs/load_services_banner.png',
    link: 'https://github.com/ceosilvajr/ph-telco-loader'
  }, {
    id: 7,
    position: '6u 12u$(xsmall) work-item',
    title: 'My Suki',
    description: 'It\'s a android application where you can have rewards for every purchased you made from the sari-sari store.',
    image_path: 'images/thumbs/my_suki_banner.png',
    link: 'https://github.com/ceosilvajr/mysuki'
  }, {
    id: 8,
    position: '6u$ 12u$(xsmall) work-item',
    title: 'Auntie Annes Promo',
    description: 'QR Code Android application specifically designed for Auntie Annes promos.',
    image_path: 'images/thumbs/auntie_banner.png',
    link: '#'
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
    resumeLink: 'https://drive.google.com/file/d/0B6_jjoXcLdPlRWN2aGFFRmxZV2M/view?usp=sharing',
    stackLink: 'http://stackoverflow.com/cv/ceosilvajr'
  };
});
