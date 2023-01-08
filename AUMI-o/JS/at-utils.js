// general use utilities
// this will more useful when service workers are running and will need their own non-shared codes

// get that JSON asynchronously
// -- should be converted to a message based protocol or something
// hey synch will ya
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
