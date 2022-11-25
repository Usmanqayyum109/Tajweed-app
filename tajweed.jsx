import React, { useState } from "react";

function Tajweed  ()  {

const [answerCategory, setanswerCategory] = useState("");
const [inquiredletter, setinquiredletter] = useState("");
const [answerDetail, setAnswerDetail] = useState("");
const [xvalue, setXValue] = useState("");

  const makhraj1 = ["الف"];
  const makhraj2 = ["ء","ہ"];
  const makhraj3 = ["ع","ح"] ;
  const makhraj4 = ["غ","خ"] ; 
  const makhraj5 = ["ق"] ;
  const makhraj6 = ["ک"]; 
  const makhraj7 = ["ج","ش"];
  const makhraj8 = ["ض"] ;
  const makhraj9 = ["ل"];  
  const makhraj10 = ["ن"];   
  const makhraj11 = ["ر"];  
  const makhraj12 = ["ط","د","ت"];  
  const makhraj13 = ["ظ","ذ","ث"]; 
  const makhraj14 = ["ص","ز","س"];  
  const makhraj15 = ["ف"];  
  const makhraj16 = ["ب","و"];   
  const makhraj17 = ["غنہ"];  

    function checkLetters (x) {
        setXValue(x);
        setAnswerDetail("");
        if (x === 0) {
            setanswerCategory("makhraj1");
            setinquiredletter(
            makhraj1[Math.floor(Math.random() * makhraj1.length)]
            );
        } else if (x === 1) {
            setanswerCategory("makhraj2");
            setinquiredletter(
            makhraj2[Math.floor(Math.random() * makhraj2.length)]
            );
        } else if (x === 2) {
            setanswerCategory("makhraj3");
            setinquiredletter(
            makhraj3[Math.floor(Math.random() * makhraj3.length)]
            );
        } else if (x === 3) {
            setanswerCategory("makhraj4");
            setinquiredletter(
            makhraj4[Math.floor(Math.random() * makhraj4.length)]
            );
        } else if (x === 4) {
            setanswerCategory("makhraj5");
            setinquiredletter(
            makhraj5[Math.floor(Math.random() * makhraj5.length)]
            );
        } else if (x === 5) {
            setanswerCategory("makhraj6");
            setinquiredletter(
            makhraj6[Math.floor(Math.random() * makhraj6.length)]
            );
        } else if (x === 6) {
            setanswerCategory("makhraj7");
            setinquiredletter(
            makhraj7[Math.floor(Math.random() * makhraj7.length)]
            );
        } else if (x === 7) {
            setanswerCategory("makhraj8");
            setinquiredletter(
            makhraj8[Math.floor(Math.random() * makhraj8.length)]
            );
        } else if (x === 8) {
            setanswerCategory("makhraj9");
            setinquiredletter(
            makhraj9[Math.floor(Math.random() * makhraj9.length)]
            );
        } else if (x === 9) {
            setanswerCategory("makhraj10");
            setinquiredletter(
            makhraj10[Math.floor(Math.random() * makhraj10.length)]
            );
        } else if (x === 10) {
            setanswerCategory("makhraj11");
            setinquiredletter(
            makhraj11[Math.floor(Math.random() * makhraj11.length)]
            );
        } else if (x === 11) {
            setanswerCategory("makhraj12");
            setinquiredletter(
            makhraj12[Math.floor(Math.random() * makhraj12.length)]
            );
        } else if (x === 12) {
            setanswerCategory("makhraj13");
            setinquiredletter(
            makhraj13[Math.floor(Math.random() * makhraj13.length)]
            );
        } else if (x === 13) {
            setanswerCategory("makhraj14");
            setinquiredletter(
            makhraj14[Math.floor(Math.random() * makhraj14.length)]
            );
        } else if (x === 14) {
            setanswerCategory("makhraj15");
            setinquiredletter(
            makhraj15[Math.floor(Math.random() * makhraj15.length)]
            );
        } else if (x === 15) {
            setanswerCategory("makhraj16");
            setinquiredletter(
            makhraj16[Math.floor(Math.random() * makhraj16.length)]
            );
        } else if (x === 16) {
            setanswerCategory("makhraj17");
            setinquiredletter(
            makhraj17[Math.floor(Math.random() * makhraj17.length)]
            );
        }
    } 
    function DisplayResult(studentAnswer, answerCategory) {
        if (studentAnswer === answerCategory) {
          setAnswerDetail("Awesome Your answer is right");
        } else {
          setAnswerDetail(
            `Your answer ${studentAnswer} right answer is ${answerCategory} `
          );
        }
      }
    
  return (
    
    <div>
        <h1>{answerDetail} </h1>
        <h1>{inquiredletter}</h1>
        <h1>{xvalue}</h1>
      
      <button className="button" onClick={() => {checkLetters(Math.floor(Math.random() * 17))}}> مخارج کے متعلق سوالات حاصل کریں</button>
      
      <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj1",answerCategory)}}>جوف دہن</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj2",answerCategory)}}>اقصیٰ حلق</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj3",answerCategory)}}>وسط حلق</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj4",answerCategory)}}>ادنیٰ حلق</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj5",answerCategory)}}>زبان کی جڑ اور لہات </button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj6",answerCategory)}}>زبان کی جڑ اور لہات سے زرا نیچے</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj7",answerCategory)}}>زبان کا بیچ اور سامنے کا تالو</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj8",answerCategory)}}>زبان کا حافہ اور اوپر والی پانچ داڑھیں</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj9",answerCategory)}}>ادنیٰ حافہ مع طرف لسان اور اوپر والے دانتوں اور ضواحک کے مسوڑھے</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj10",answerCategory)}}>طرف لسان اور دانتوں کے مسوڑھے</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj11",answerCategory)}}>طرف لسان کی پشت اور دانتوں کے مسوڑھے</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj12",answerCategory)}}>زبان کی نوک اور ثنایا علیا کی جڑ</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj13",answerCategory)}}>زبان کی نوک اور ثنایا علیا کا کنارا</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj14",answerCategory)}}>زبان کی نوک اور ثنایاسفلیٰ کا کنارا مع اتصال ثنایا علیا</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj15",answerCategory)}}>ثنایا علیا کا کنارا اور نچلے ہونٹ کا اندرونی حصہ</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj16",answerCategory)}}>دونوں ہونٹ</button>
     <br />
     <button className="button1" onClick={() => {DisplayResult("makhraj17",answerCategory)}}>خیشوم</button>
     


    </div>
  )
}

export default Tajweed;
