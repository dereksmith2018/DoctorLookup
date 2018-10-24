import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctorlist.js';

$(document).ready(function() {
    $("#searchDoctor").submit(function(event){
        event.preventDefault();
        $("#results").html("");
        let newSearchDoctor = $("#searchDoc").val(); 
        let newDoctor = new Doctor(); 
        let promise = newDoctor.searchDoctor(newSearchDoctor);
    
        promise.then(function(response) {
          let body = JSON.parse(response);
            let result = body.data;
            if (result.length === 0){$("#results").append("No doctor's were found with the current search")}
            else {
            for(var i=0; i < result.length; i++) {
            $("#results").append("<h4>" + "Dr. " + result[i].profile.first_name + " " + result[i].profile.last_name + "</h4>"+ 
            "<h5>" + "Phone # " + result[i].practices[0].phones[0].number + "</h5>" + "<br>"  + 
            "<h5>" + "Address : " + "</h5>"  +
            "City: " + result[i].practices[0].visit_address.city + "<br>" + 
            "State: " + result[i].practices[0].visit_address.state + "<br>" + 
            "Street: " + result[i].practices[0].visit_address.street + "<br>" +
            "Zip Code: " + result[i].practices[0].visit_address.zip + "<br>" +
            "Check Availablity: " + result[i].practices[0].accepts_new_patients + "<hr>");
            }
        }
        })
    });

    $("#searchSymptom").submit(function(event){
        event.preventDefault();
        $("#results").html("");
        let searchSymptom = $("#symptom").val(); 
        let newDoctor = new Doctor();
        let promise = newDoctor.searchSymptom(searchSymptom);
    
        promise.then(function(response) {
          let body = JSON.parse(response);
            let result = body.data;
            if (result.length === 0){$("#results").append("No doctor's were found with the current search")}
            else {
            for(var i=0; i < result.length; i++) {
            $("#results").append("<h4>" + "Dr. " +  result[i].profile.first_name + " " + result[i].profile.last_name + "</h4>" + 
            "<h5>" + "Phone number: " + result[i].practices[0].phones[0].number + "</h5>" + "" +"<br>" + 
            "<h5>" + "Address : " + "</h5>" +
            "City: " + result[i].practices[0].visit_address.city + "<br>" + 
            "State: " + result[i].practices[0].visit_address.state + "<br>" + 
            "Street: " + result[i].practices[0].visit_address.street + "<br>" + 
            "Zip Code: " + result[i].practices[0].visit_address.zip + "<br>" + "<hr>");
            }   
        }
        })
    });
});

