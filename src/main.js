
// const Promise = require('es6-promise').Promise;
// const api_key = process.env.API_KEY;
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Doctor } from "./doctorlist.js";

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#results").empty();

    let searchSymptom = $("#searchSymptom").val();

    let newSearch = new Doctor();
    let promise = newSearch.getDoctor(searchSymptom);

    promise.then(
      function(response) {
        let body = JSON.parse(response);
        if (body.data.length > 0) {
          for (let i = 0; i < body.data.length; i++) {
            $("#results").append(`
            <tr>
              <td>${body.data[i].profile.first_name} ${
              body.data[i].profile.last_name
            }</td> 
              <td>${body.data[i].practices[0].visit_address.street} ${
              body.data[i].practices[0].visit_address.city
            } ${body.data[i].practices[0].visit_address.state} ${
              body.data[i].practices[0].visit_address.zip
            }</td> <td>${body.data[i].practices[0].phones[0].number}</td>
            } </td>
              </tr>`);
          }
        } else {
          $("#results").append(
            `<h3>No matches happened.</h3>`
          );
        }
      },
      function(error) {
        $(".showErrors").text(
          `There was an error processing your request: ${error.message}`
        );
      }
    );
  });
});