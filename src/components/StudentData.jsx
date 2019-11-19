import React from "react";
import Student from "./Student";
import andrew from "../assets/img/andrew.jpg";
import anita from "../assets/img/anita.jpg";
import brenden from "../assets/img/brenden.jpg";
import carrie from "../assets/img/carrie.jpg";
import chris from "../assets/img/chris.jpg";
import christine from "../assets/img/christine.jpg";
import devin from "../assets/img/devin.jpg";
import erin from "../assets/img/erin.jpg";
import ethan from "../assets/img/ethan.jpg";
import hailey from "../assets/img/hailey.jpg";
import jacqueline from "../assets/img/jacqueline.jpg";
import jason from "../assets/img/jason.jpg";
import jen from "../assets/img/jen.jpg";
import joel from "../assets/img/joel.jpg";
import kira from "../assets/img/kira.jpg";
import lauren from "../assets/img/lauren.jpg";
import loewy from "../assets/img/loewy.jpg";
import micah from "../assets/img/micah.jpg";
import mike from "../assets/img/mike.jpg";
import molly from "../assets/img/molly.jpg";
import neha from "../assets/img/neha.jpg";
import nikhil from "../assets/img/nikhil.jpg";
import rachael from "../assets/img/rachael.jpg";
import sofia from "../assets/img/sofia.jpg";

var masterStudentList = [
  {
    name: "Andrew",
    photo: andrew,
    quote: "Here we go. For reward/immunity, Survivors ready...GO!",
  },
  {
    name: "Anita",
    photo: anita,
    quote: "Those who cannot remember the past are condemned to compute it.",
  },
  {
    name: "Brendon",
    photo: brenden,
    quote: "Waht?",
  },
  {
    name: "Carrie",
    photo: carrie,
    quote: "They asked me to write something. So here it is: Something.",
  },
  {
    name: "Chris",
    photo: chris,
    quote: "I love taking my bike for a spin during my free time.",
  },
  {
    name: "Christine",
    photo: christine,
    quote: "[Tech buzzwords]",
  },
  {
    name: "Devin",
    photo: devin,
    quote: "Aloha howlies",
  },
  {
    name: "Erin",
    photo: erin,
    quote: "Snake",
  },
  {
    name: "Ethan",
    photo: ethan,
    quote: "I'm not JEthan.",
  },
  {
    name: "Hailey",
    photo: hailey,
    quote: "Free-range against the machine, extra egg, add bacon, and garlic aioli.",
  },
  {
    name: "Jacqueline",
    photo: jacqueline,
    quote: "Bagels... plain with butter please.",
  },
  {
    name: "Jason",
    photo: jason,
    quote: "It would look better if it was burlywood",
  },
  {
    name: "Jen",
    photo: jen,
    quote: "For science!",
  },
  {
    name: "Joel",
    photo: joel,
    quote: "Flex-box Flex-box Flex-box",
  },
  {
    name: "Kira",
    photo: kira,
    quote: "Hello World",
  },
  {
    name: "Lauren",
    photo: lauren,
    quote: "Put it in some curly boys!",
  },
  {
    name: "Loewy",
    photo: loewy,
    quote: "Okay",
  },
  {
    name: "Micah",
    photo: micah,
    quote: "Did someone say micro-dosing?",
  },
  {
    name: "Mike",
    photo: mike,
    quote: "Put the bunny back in the box!",
  },
  {
    name: "Molly",
    photo: molly,
    quote: "Penultimately...",
  },
  {
    name: "Neha",
    photo: neha,
    quote: "Cash checks and break necks.",
  },
  {
    name: "Nikhil",
    photo: nikhil,
    quote: "Why are they teaching us to do it that way?",
  },
  {
    name: "Rachael",
    photo: rachael,
    quote: "One day I will rule the world.",
  },
  {
    name: "Sofia",
    photo: sofia,
    quote: "Fuck, dude.",
  },
];

function StudentData(){
  return(
    <div>
      {masterStudentList.map((student, index) =>
        <Student name={student.name}
          photo={student.photo}
          quote={student.quote} 
          key={index}/> 
      )}
    </div>
  );
}

export default masterStudentList;