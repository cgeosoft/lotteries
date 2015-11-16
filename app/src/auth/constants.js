(function() {
  'use strict';

  angular
    .module('app.auth')
    .constant('LoginMessages', {
      ANAUTHORIZED: {
        Type: "danger",
        Message: "You were signed out",
        Details: "This happend because you tried to access a page that you are not authorized to.",
      },
      SIGNOUT: {
        Type: "success",
        Message: "You were signed out successfully",
        Details: "You may login again using the form",
      },
      REGISTERED: {
        Type: "success",
        Message: "Your account is ready, you can login now.",
        Details: false,
      },
      AUTHERROR: {
        Type: "danger",
        Message: "Authentication Error",
        Details: null,
      },
      UNAVAILABLE: {
        Type: "danger",
        Message: "Service is not available.",
        Details: "Please try again later. If the problem insist, contact your system administrator",
      },
    });

}());