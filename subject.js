let container = document.querySelector("#container");
let boxes = document.querySelectorAll(".box");
 
let COQ = document.createElement("div");
let Q = document.createElement("h1");
let op1 = document.createElement("input");
let lable1=document.createElement("label");
let op2 = document.createElement("input");
let lable2=document.createElement("label");
let op3 = document.createElement("input");
let lable3=document.createElement("label");
let op4 = document.createElement("input");
let lable4=document.createElement("label");

let btn = document.createElement("button");

let timing = document.createElement("p");

btn.innerText="next";
btn.style.height ="42px";
btn.style.width ="350px";
btn.style.margin ="40px";
btn.style.borderWidth="4px";
btn.style.borderColor="black";
btn.style.borderStyle="double";
btn.style.fontSize="17px";
btn.style.borderRadius="20px";



COQ.style.height="80%";
COQ.style.width="80%";
COQ.style.background="red,blue";
COQ.style.display="flex";
COQ.style.flexDirection="column";
COQ.style.justifyContent="center";
COQ.style.alignItems="center";
COQ.style.color="white";
COQ.style.fontFamily="cursiv";
COQ.style.fontSize="25px";


Q.style.textAlign="center";
Q.style.color="white";
Q.style.margin="30px";


op1.id="option1";
op1.type="radio";
op1.name="op"
lable1.setAttribute("for","option1");
op2.id="option2";
op2.type="radio";
op2.name="op"
lable2.setAttribute("for","option2");
op3.id="option3";
op3.type="radio";
op3.name="op"
lable3.setAttribute("for","option3");
op4.id="option4";
op4.type="radio";
op4.name="op"
lable4.setAttribute("for","option4");
let Questions = {
  HTML: [
      { 
          question: "What is HTML?", 
          options: ["Programming language", "Markup language", "Operating System", "HTML is human"], 
          Answer: "Markup language" 
      },
      { 
          question: "Why use HTML?", 
          options: ["For watching movies", "For giving color", "For structuring websites", "For styling"], 
          Answer: "For structuring websites" 
      },
      { 
          question: "What is the full form of HTML?", 
          options: ["How To Meet Ladies", "Happy Turtles Make Love", "How To Make Laughs", "Options are wrong"], 
          Answer: "Options are wrong" 
      },
      { 
          question: "Is HTML important for web development?", 
          options: ["YES", "NO"], 
          Answer: "YES" 
      },
      { 
          question: "Which is a heading tag?", 
          options: ["<heading></heading>", "<div></div>", "<h1></h1>", "<p></p>"], 
          Answer: "<h1></h1>" 
      }
  ],
  CSS: [
      { 
          question: "What does CSS stand for?", 
          options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], 
          Answer: "Cascading Style Sheets" 
      },
      { 
          question: "Which property is used to change the background color?", 
          options: ["bgcolor", "color", "background-color", "background"], 
          Answer: "background-color" 
      },
      { 
          question: "How do you select an element with id 'header'?", 
          options: ["#header", ".header", "header", "*header"], 
          Answer: "#header" 
      },
      { 
          question: "Which is the correct syntax for CSS?", 
          options: ["body {color: black;}", "body:color=black;", "{body:color=black;}", "{body;color:black;}"], 
          Answer: "body {color: black;}" 
      },
      { 
          question: "Which property is used to change the font of an element?", 
          options: ["font-family", "font-style", "font-weight", "font-size"], 
          Answer: "font-family" 
      }
  ],
  JS: [
      { 
          question: "What does JS stand for?", 
          options: ["JavaSource", "JavaScript", "JustScript", "JScript"], 
          Answer: "JavaScript" 
      },
      { 
          question: "How do you write 'Hello World' in an alert box?", 
          options: ["alert('Hello World');", "msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');"], 
          Answer: "alert('Hello World');" 
      },
      { 
          question: "How do you create a function in JavaScript?", 
          options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function => myFunction()"], 
          Answer: "function myFunction()" 
      },
      { 
          question: "Which event occurs when the user clicks on an HTML element?", 
          options: ["onchange", "onmouseclick", "onmouseover", "onclick"], 
          Answer: "onclick" 
      },
      { 
          question: "How do you declare a variable in JavaScript?", 
          options: ["variable carName;", "var carName;", "v carName;", "var:carName;"], 
          Answer: "var carName;" 
      }
  ],
  PHP: [
      { 
          question: "What does PHP stand for?", 
          options: ["Personal Home Page", "Hypertext Preprocessor", "Pretext Hypertext Processor", "Private Home Page"], 
          Answer: "Hypertext Preprocessor" 
      },
      { 
          question: "Which of the following is a PHP variable?", 
          options: ["$var", "%var", "&var", "#var"], 
          Answer: "$var" 
      },
      { 
          question: "Which symbol is used to concatenate strings in PHP?", 
          options: [".", "+", "&", "%"], 
          Answer: "." 
      },
      { 
          question: "Which function is used to include a file in PHP?", 
          options: ["include()", "require()", "Both include() and require()", "None of the above"], 
          Answer: "Both include() and require()" 
      },
      { 
          question: "Which PHP superglobal variable holds the information about the variables passed via URL?", 
          options: ["$_GET", "$_POST", "$_REQUEST", "$_SESSION"], 
          Answer: "$_GET" 
      }
  ],
  JAVA: [
      { 
          question: "What is the size of int in Java?", 
          options: ["8-bit", "16-bit", "32-bit", "64-bit"], 
          Answer: "32-bit" 
      },
      { 
          question: "Which method is the entry point for a Java program?", 
          options: ["start()", "init()", "main()", "run()"], 
          Answer: "main()" 
      },
      { 
          question: "What is the default value of a boolean variable in Java?", 
          options: ["true", "false", "0", "null"], 
          Answer: "false" 
      },
      { 
          question: "Which keyword is used to inherit a class in Java?", 
          options: ["extends", "implements", "inherits", "super"], 
          Answer: "extends" 
      },
      { 
          question: "Which of these are reserved words in Java?", 
          options: ["array", "goto", "null", "all of the above"], 
          Answer: "goto" 
      }
  ],
  PYTHON: [
      { 
          question: "What is the correct file extension for Python files?", 
          options: [".pyth", ".pt", ".py", ".pyt"], 
          Answer: ".py" 
      },
      { 
          question: "Which of the following is the correct syntax to output 'Hello World' in Python?", 
          options: ["echo 'Hello World'", "print('Hello World')", "printf('Hello World')", "cout << 'Hello World'"], 
          Answer: "print('Hello World')" 
      },
      { 
          question: "How do you insert COMMENTS in Python code?", 
          options: ["/* this is a comment */", "// this is a comment", "# this is a comment", "-- this is a comment"], 
          Answer: "# this is a comment" 
      },
      { 
          question: "Which keyword is used to create a function in Python?", 
          options: ["function", "def", "func", "lambda"], 
          Answer: "def" 
      },
      { 
          question: "What is the correct syntax to create a dictionary in Python?", 
          options: ["{'name':'John', 'age':30}", "['name':'John', 'age':30]", "{name:John, age:30}", "('name':'John', 'age':30)"], 
          Answer: "{'name':'John', 'age':30}" 
      }
  ],
  CS: [
      { 
          question: "What does CPU stand for?", 
          options: ["Central Process Unit", "Central Processing Unit", "Central Print Unit", "Control Processing Unit"], 
          Answer: "Central Processing Unit" 
      },
      { 
          question: "Which language is primarily used for web development?", 
          options: ["Python", "C++", "JavaScript", "Java"], 
          Answer: "JavaScript" 
      },
      { 
          question: "What does RAM stand for?", 
          options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Allow Memory"], 
          Answer: "Random Access Memory" 
      },
      { 
          question: "Which protocol is used to browse the internet?", 
          options: ["HTTP", "FTP", "SMTP", "TCP"], 
          Answer: "HTTP" 
      },
      { 
          question: "What does IP stand for?", 
          options: ["Internet Provider", "Internet Protocol", "Internet Processor", "Internet Program"], 
          Answer: "Internet Protocol" 
      }
  ],
  C: [
      { 
          question: "What is the size of a char in C?", 
          options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], 
          Answer: "1 byte" 
      },
      { 
          question: "Which function is used to print something to the screen in C?", 
          options: ["print()", "printf()", "println()", "cout"], 
          Answer: "printf()" 
      },
      { 
          question: "Which of these is a loop construct in C?", 
          options: ["for", "while", "do-while", "All of the above"], 
          Answer: "All of the above" 
      },
      { 
          question: "What is the default return type of main() function in C?", 
          options: ["void", "int", "char", "float"], 
          Answer: "int" 
      },
      { 
          question: "Which of the following is a valid identifier in C?", 
            options: ["int", "goto", "var_name", "default"], 
            Answer: "var_name" 
        }
    ],
    SQL: [
        { 
            question: "What does SQL stand for?", 
            options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Standard Query Language"], 
            Answer: "Structured Query Language" 
        },
        { 
            question: "Which SQL statement is used to extract data from a database?", 
            options: ["SELECT", "GET", "EXTRACT", "PULL"], 
            Answer: "SELECT" 
        },
        { 
            question: "Which SQL clause is used to filter the results of a query?", 
            options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], 
            Answer: "WHERE" 
        },
        { 
            question: "How do you update data in a SQL table?", 
            options: ["UPDATE table_name SET column_name = value;", "MODIFY table_name SET column_name = value;", "ALTER table_name SET column_name = value;", "CHANGE table_name SET column_name = value;"], 
            Answer: "UPDATE table_name SET column_name = value;" 
        },
        { 
            question: "Which SQL statement is used to delete data from a database?", 
            options: ["DELETE FROM table_name;", "REMOVE FROM table_name;", "DROP table_name;", "TRUNCATE table_name;"], 
            Answer: "DELETE FROM table_name;" 
        }
    ]
};
var foT;
var second =1; 
   timing.style.fontSize="50px";
timing.innerHTML=0;
function time(){
    timing.innerText=second;

    second++;
  
}


let index =0;
let sub="";

boxes.forEach(box=>box.addEventListener("click",()=>{
 subject = box.innerText;
    change(subject);
foT= setInterval(time,1000);
    
    
}))

function change(sub){



    console.log(sub);

  container.style.visibility="hidden";
  container.style.position="absolute";
  document.body.append(COQ);
  COQ.append(timing);
  Q.innerText=Questions[sub][index].question.toString();
  COQ.append(Q);
  let i=0;
    COQ.append(op1);
    lable1.innerText=Questions[sub][index].options[i];
    COQ.append(lable1);
    i++;
    COQ.append(op2);
    lable2.innerText=Questions[sub][index].options[i];
    COQ.append(lable2);
    i++;
    COQ.append(op3);
    lable3.innerText=Questions[sub][index].options[i];
    COQ.append(lable3);
    i++;
    COQ.append(op4);
    lable4.innerText=Questions[sub][index].options[i];
    COQ.append(lable4);
    
    COQ.append(btn);

 
  
  }

  let score =0;


  btn.addEventListener("click",()=>{

 
 let userOP = getSelectedRadioValue();
 console.log("userOP"+userOP);
 let ans = Questions[subject][index].Answer;
console.log("ans ="+ans);
 if(userOP == ans){
  score++;
  console.log("score "+score)
 }
  
if(index==4){
    clearInterval(foT);
  Q.remove();
  op1.remove();
  op2.remove();
  op3.remove();
  op4.remove();

  lable1.remove();
  lable2.remove();
  lable3.remove();
  lable4.remove();

   let s=second;
  timing.innerText=`YOUR TIMING IS = ${s}s`
 COQ.innerHTML=`<big>YOUR CURRECT ANSWER IS = ${score}<big>`;

}

    index++;
    change(subject);  

  })

  function getSelectedRadioValue() {
    var selectedRadio = document.querySelector('input[name="op"]:checked');
    if (selectedRadio) {
     let opID =selectedRadio.getAttribute("id");

     if(opID =="option1"){
      return lable1.innerText;
     }else if(opID=="option2"){
      return lable2.innerText;
     }else if(opID == "option3"){
      return lable3.innerText;
     }else if(opID=="option4"){
      return lable4.innerText;
     }

 else {
      console.log("null");
        return null;
    }    }
}

btn.addEventListener("mouseenter",()=>{
  btn.style.backgroundColor="lightblue";
  btn.style.color="white";
  btn.style.fontSize="18px";
});

btn.addEventListener("mouseleave",()=>{
  btn.style.backgroundColor="";
  btn.style.color="";
  btn.style.fontSize="";

  
})








