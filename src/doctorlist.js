var Promise = require('es6-promise').Promise;

export class Doctor{
    searchDoctor(name) {
     return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&skip=0&limit=20&user_key=${process.env.API_KEY}`;
      request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
     } else {
        reject(Error(request.statusText));
     }
     };
     request.open("GET", url, true);
     request.send();
     });
      }
    searchSymptom(symptom) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&skip=0&limit=20&user_key=${process.env.API_KEY}`; 
        request.onload = function () {
        if (this.status === 200) {
        resolve(request.response);
        } else {
           reject(Error(request.statusText));
        }
        };
        request.open("GET", url, true);
        request.send();
        });
      }
}
//cant figure how link the two searches in one container on the html. look into