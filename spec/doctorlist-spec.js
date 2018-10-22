import { Doctor, Symptoms } from '../src/doctorlist.js';

describe('Doctor', function(){

  it('return the correct symptoms', function(){
    const newSymptoms = new Doctor ();
    expect(newSymptoms.getSymptoms()).toEqual();
  });
  it('return the incorrect symptoms', function(){
    const newSymptoms = new Doctor ();
    expect(newSymptoms.getSymptoms()).not.toEqual();
  });
  it('return the area where the doctors are', function(){
    const newSymptoms = new Doctor ();
    expect(newSymptoms.getDoctor()).toEqual();
  });
  it('return the correct list of doctors', function(){
    const newSymptoms = new Doctor ();
    expect(newSymptoms.getDoctor()).not.toEqual();
  });
  // it('return the incorrect list of doctors', function(){
  //   const newSymptoms = new Doctor ();
  //   expect(newSymptoms.getListDoctor()).toEqual();
  // });
  // it('return the incorrect list of doctors', function(){
  //   const newSymptoms = new Doctor ();
  //   expect(newSymptoms.getListDoctor()).toEqual();
  // });
});