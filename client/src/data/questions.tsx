import { CodeBlock, dracula } from "react-code-blocks";
import { IQuestion } from "../models/Question";

export const questions: IQuestion[] = [
  {
    id: 1,
    text: "Which data structure is used for implementing a Last-In-First-Out (LIFO) behavior?",
    answers: [
      {
        id: 1,
        text: "Queue",
      },
      {
        id: 2,
        text: "Stack",
      },
      {
        id: 3,
        text: "Tree",
      },
      {
        id: 4,
        text: "Linked list",
      },
    ],
    answerId: 2,
  },
  {
    id: 2,
    text: "Recursion is a method in which the solution of a problem depends on ____________",
    answers: [
      {
        id: 1,
        text: "Larger instances of different problems",
      },
      {
        id: 2,
        text: "Larger instances of the same problem",
      },
      {
        id: 3,
        text: "Smaller instances of the same problem",
      },
      {
        id: 4,
        text: "Smaller instances of different problems",
      },
    ],
    answerId: 3,
  },
  {
    id: 3,
    text: "What is the use of Git?",
    answers: [
      {
        id: 1,
        text: "Containerization tool",
      },
      {
        id: 2,
        text: "Continuous Integration tool",
      },
      {
        id: 3,
        text: "Version Control System tool",
      },
      {
        id: 4,
        text: "Continuous Monitoring tool",
      },
    ],
    answerId: 3,
  },
  {
    id: 4,
    text: "If for an algorithm time complexity is given by O(n) then the complexity of it is...",
    answers: [
      {
        id: 1,
        text: "constant",
      },
      {
        id: 2,
        text: "linear",
      },
      {
        id: 3,
        text: "exponential",
      },
      {
        id: 4,
        text: "none of the options",
      },
    ],
    answerId: 2,
  },
  {
    id: 5,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`char inchar = 'A';
switch (inchar)
{
case 'A' :
    printf ("Choice A \\n") ;
case 'B' :
    printf ("Choice B ") ;
case 'C' :
case 'D' :
case 'E' :
default:
    printf ("No Choice") ;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "No choice",
      },
      {
        id: 2,
        text: "Choice A",
      },
      {
        id: 3,
        text: (
          <>
            <p>Choice A</p>
            <p>Choice B No choice</p>
          </>
        ),
      },
      {
        id: 4,
        text: "Program gives no output as it is erroneous.",
      },
    ],
    answerId: 3,
  },
  {
    id: 6,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`#include <stdio.h>

int fun(int n)
{
    if (n == 4)
      return n;
    else return 2*fun(n+1);
}

int main()
{
  printf("%d", fun(2));
  return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "4",
      },
      {
        id: 2,
        text: "8",
      },
      {
        id: 3,
        text: "16",
      },
      {
        id: 4,
        text: "Runtime error",
      },
    ],
    answerId: 3,
  },
  {
    id: 7,
    text: (
      <>
        <p>What is the output of the following program?</p>
        <CodeBlock
          text={`#include<stdio.h>
void print(int n)
{
    if (n > 4000)
        return;
    printf("%d ", n);
    print(2*n);
    printf("%d ", n);
}
  
int main()
{
    print(1000);
    getchar();
    return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "1000 2000 4000",
      },
      {
        id: 2,
        text: "1000 2000 4000 4000 2000 1000",
      },
      {
        id: 3,
        text: "1000 2000 4000 2000 1000",
      },
      {
        id: 4,
        text: "1000 2000 2000 1000",
      },
    ],
    answerId: 2,
  },
  {
    id: 8,
    text: (
      <>
        <p>What will be the output of the following Java code?</p>
        <CodeBlock
          text={`class increment {
  public static void main(String args[]) 
  {        
        int g = 3;
        System.out.print(++g * 8);
  } 
}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "32",
      },
      {
        id: 2,
        text: "33",
      },
      {
        id: 3,
        text: "24",
      },
      {
        id: 4,
        text: "25",
      },
    ],
    answerId: 1,
  },
  {
    id: 9,
    text: (
      <>
        <p>What will be the output of the following code?</p>
        <CodeBlock
          text={`#include<stdio.h>
void change(int,int*)
int main()
{
  int a=10, b=20;
  change(a, &b);
  printf("%d %d", a, b);
  return 0;
}
void change(int x, int *y)
{
  x=12;
  *y=15
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "10 20",
      },
      {
        id: 2,
        text: "10 15",
      },
      {
        id: 3,
        text: "12 20",
      },
      {
        id: 4,
        text: "12 15",
      },
    ],
    answerId: 2,
  },
  {
    id: 10,
    text: "Which of the following is not a commonly used relational database management system?",
    answers: [
      {
        id: 1,
        text: "MongoDB",
      },
      {
        id: 2,
        text: "Oracle",
      },
      {
        id: 3,
        text: "MySQL",
      },
      {
        id: 4,
        text: "PostgreSQL",
      },
    ],
    answerId: 1,
  },
  {
    id: 11,
    text: "Which of the following commands is used to delete all rows and free up space from a table?",
    answers: [
      {
        id: 1,
        text: "DELETE",
      },
      {
        id: 2,
        text: "DROP",
      },
      {
        id: 3,
        text: "ALTER",
      },
      {
        id: 4,
        text: "TRUNCATE",
      },
    ],
    answerId: 4,
  },
  {
    id: 12,
    text: "Which of the following is not a valid aggregate function?",
    answers: [
      {
        id: 1,
        text: "COUNT",
      },
      {
        id: 2,
        text: "COMPUTE",
      },
      {
        id: 3,
        text: "SUM",
      },
      {
        id: 4,
        text: "MAX",
      },
    ],
    answerId: 2,
  },
  {
    id: 13,
    text: "What is Infrastructure as a Service (IaaS)?",
    answers: [
      {
        id: 1,
        text: "A cloud computing service that provides virtualized computing resources, such as servers and storage",
      },
      {
        id: 2,
        text: "A cloud computing service that provides access to a software application over the internet",
      },
      {
        id: 3,
        text: "A cloud computing service that provides a development platform for building software applications",
      },
      {
        id: 4,
        text: "A cloud computing service that provides data analysis and visualization tools",
      },
    ],
    answerId: 1,
  },
  {
    id: 14,
    text: (
      <>
        <p>Consider the following logical inferences.</p>
        <p>I1: If it rains then the cricket match will not be played.</p>
        <p>The cricket match was played.</p>
        <p>
          <b>Inference:</b> There was no rain.
        </p>
        <p>I2: If it rains then the cricket match will not be played.</p>
        <p>It did not rain.</p>
        <p>
          <b>Inference:</b> The cricket match was played.
        </p>
        <p>
          Which of the following is <b>TRUE</b>?
        </p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Both I1 and I2 are correct inferences.",
      },
      {
        id: 2,
        text: "I1 is correct but I2 is not a correct inference.",
      },
      {
        id: 3,
        text: "I1 is not correct but I2 is a correct inference.",
      },
      {
        id: 4,
        text: "Both I1 and I2 are not correct inferences.",
      },
    ],
    answerId: 2,
  },
  {
    id: 15,
    text: "A car has 4 tyres and 1 spare tyre. Each tyre can travel a maximum distance of 20000 miles before wearing off. What is the maximum distance the car can travel before you are forced to buy a new tyre? You are allowed to change tyres (using the spare tyre) an unlimited number of times. ",
    answers: [
      {
        id: 1,
        text: "20000",
      },
      {
        id: 2,
        text: "25000",
      },
      {
        id: 3,
        text: "15000",
      },
      {
        id: 4,
        text: "40000",
      },
    ],
    answerId: 2,
  },
  {
    id: 16,
    text: (
      <>
        <p>What does the following piece of code do?</p>
        <CodeBlock
          text={`for (int i = 0; i < arr.length-1; i++)
{
    for (int j = i+1; j < arr.length; j++)
    {
        if( (arr[i].equals(arr[j])) && (i != j) )
        {
            System.out.println(arr[i]);
        }
    }
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Print the duplicate elements in the array",
      },
      {
        id: 2,
        text: "Print the element with maximum frequency",
      },
      {
        id: 3,
        text: "Print the unique elements in the array",
      },
      {
        id: 4,
        text: "Prints the element with minimum frequnecy",
      },
    ],
    answerId: 1,
  },
  {
    id: 17,
    text: "Choose the recursive formula for the Fibonacci series (n>=1).",
    answers: [
      {
        id: 1,
        text: "F(n) = F(n+1) + F(n+2)",
      },
      {
        id: 2,
        text: "F(n) = F(n) + F(n+1)",
      },
      {
        id: 3,
        text: "F(n) = F(n-1) + F(n-2)",
      },
      {
        id: 4,
        text: "F(n) = F(n-1) - F(n-2)",
      },
    ],
    answerId: 3,
  },
  {
    id: 18,
    text: "What does VOIS stand for?",
    answers: [
      {
        id: 1,
        text: "Vodafone Innovative Solutions",
      },
      {
        id: 2,
        text: "Vodafone Intelligent Solutions",
      },
      {
        id: 3,
        text: "Vodafone Intelligent Services",
      },
      {
        id: 4,
        text: "Vodafone IT Services",
      },
    ],
    answerId: 2,
  },
  {
    id: 19,
    text: (
      <p>
        Which of the following is <b>not</b> a VOIS center?
      </p>
    ),
    answers: [
      {
        id: 1,
        text: "India",
      },
      {
        id: 2,
        text: "Egypt",
      },
      {
        id: 3,
        text: "Romania",
      },
      {
        id: 4,
        text: "USA",
      },
    ],
    answerId: 4,
  },
  {
    id: 20,
    text: "We have a Technology portfolio which includes:",
    answers: [
      {
        id: 1,
        text: "Software Development",
      },
      {
        id: 2,
        text: "Cyber Security",
      },
      {
        id: 3,
        text: "Cloud and Infrastructure Services",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 21,
    text: "What is Serverless computing?",
    answers: [
      {
        id: 1,
        text: "Running applications without any server",
      },
      {
        id: 2,
        text: "Automatically provisioning and managing servers",
      },
      {
        id: 3,
        text: "Running applications without managing infrastructure",
      },
      {
        id: 4,
        text: "A type of containerised deployment",
      },
    ],
    answerId: 3,
  },
  {
    id: 22,
    text: "What is Serverless computing?",
    answers: [
      { id: 1, text: "Running applications without any server" },
      { id: 2, text: "Automatically provisioning and managing servers" },
      { id: 3, text: "Running applications without managing infrastructure" },
      { id: 4, text: "A type of containerised deployment" },
    ],
    answerId: 3,
  },
  {
    id: 23,
    text: "Which AWS service is commonly used for Serverless computing?",
    answers: [
      { id: 1, text: "Amazon S3" },
      { id: 2, text: "AWS Lambda" },
      { id: 3, text: "Amazon EC2" },
      { id: 4, text: "AWS ECS" },
    ],
    answerId: 2,
  },
  {
    id: 24,
    text: "What are the key differences between Serverless and Microservices?",
    answers: [
      {
        id: 1,
        text: "Microservices require infrastructure management, while Serverless abstracts it",
      },
      {
        id: 2,
        text: "Serverless applications are always stateful, while Microservices are stateless",
      },
      {
        id: 3,
        text: "Microservices are always deployed in containers, while Serverless functions cannot be deployed in containers",
      },
      {
        id: 4,
        text: "Microservices cannot communicate with Serverless functions",
      },
    ],
    answerId: 1,
  },
  {
    id: 25,
    text: "Which of the following are potential drawbacks of Serverless architecture?",
    answers: [
      { id: 1, text: "Cold start latency" },
      { id: 2, text: "Limited support for stateless applications" },
      { id: 3, text: "Requires manual scaling" },
      { id: 4, text: "Requires managing servers" },
    ],
    answerId: 1,
  },
  {
    id: 26,
    text: "What language can AWS Lambda functions be written in?",
    answers: [
      { id: 1, text: "Python" },
      { id: 2, text: "Node.js" },
      { id: 3, text: "Java" },
      { id: 4, text: "All of the above" },
    ],
    answerId: 4,
  },
  {
    id: 27,
    text: "Which cloud providers does not offer Serverless computing services?",
    answers: [
      { id: 1, text: "Amazon Web Services (AWS)" },
      { id: 2, text: "Microsoft Azure" },
      { id: 3, text: "IBM Cloud" },
      { id: 4, text: "Google Cloud Platform (GCP)" },
    ],
    answerId: 4,
  },
  {
    id: 28,
    text: 'What is the difference between "is" and "==" in Python?',
    answers: [
      {
        id: 1,
        text: '"==" checks if two variables reference the same object in memory, while "is" checks if their values are equal',
      },
      {
        id: 2,
        text: '"is" checks if two variables reference the same object in memory, while "==" checks if their values are equal',
      },
      { id: 3, text: '"is" and "==" always give the same result' },
      { id: 4, text: '"is" is used only for primitive data types' },
    ],
    answerId: 2,
  },
  {
    id: 29,
    text: "Which of the following is incorrect about Python decorators?",
    answers: [
      {
        id: 1,
        text: "Modifies the behaviour of a function without changing its code",
      },
      { id: 2, text: "Uses functions as arguments" },
      { id: 3, text: "Can only be applied to methods, not regular functions" },
      { id: 4, text: "Can be chained to apply multiple modifications" },
    ],
    answerId: 3,
  },
  {
    id: 30,
    text: "Which of the following is not a valid exception handling method in Python?",
    answers: [
      { id: 1, text: "try-except" },
      { id: 2, text: "try-finally" },
      { id: 3, text: "try-catch" },
      { id: 4, text: "try-except-else" },
    ],
    answerId: 3,
  },
  {
    id: 31,
    text: "Which of the following should be validated during functional API testing?",
    answers: [
      {
        id: 1,
        text: "The API's ability to handle large volumes of traffic under high load conditions",
      },
      {
        id: 2,
        text: "The correctness of the response status code, headers, and payload",
      },
      {
        id: 3,
        text: "The database query optimisation and indexing for performance",
      },
      {
        id: 4,
        text: "The response time to ensure the API performs within specified benchmarks",
      },
    ],
    answerId: 2,
  },
  {
    id: 32,
    text: "Which of the following is a type of non-functional testing?",
    answers: [
      { id: 1, text: "Unit Testing" },
      { id: 2, text: "Integration Testing" },
      { id: 3, text: "Load Testing" },
      { id: 4, text: "Functional Testing" },
    ],
    answerId: 3,
  },
  {
    id: 33,
    text: "Which HTTP methods are commonly tested in API automation?",
    answers: [
      { id: 1, text: "GET" },
      { id: 2, text: "POST" },
      { id: 3, text: "PUT" },
      { id: 4, text: "DELETE" },
      { id: 5, text: "All of the above" },
    ],
    answerId: 5,
  },
  {
    id: 34,
    text: "What is the difference between PUT and PATCH in HTTP?",
    answers: [
      {
        id: 1,
        text: "PUT partially updates a resource, while PATCH replaces the entire resource",
      },
      {
        id: 2,
        text: "PUT is used for creating resources, while PATCH is used for deleting resources",
      },
      {
        id: 3,
        text: "PUT replaces the entire resource, while PATCH only modifies a part of the resource",
      },
      {
        id: 4,
        text: "PUT and PATCH are functionally identical and can be used interchangeably",
      },
    ],
    answerId: 3,
  },
  {
    id: 35,
    text: "If you have six fish and half of them are drowning, how many do you have?",
    answers: [
      { id: 1, text: "SIX" },
      { id: 2, text: "FOUR" },
      { id: 3, text: "TWO" },
      { id: 4, text: "THREE" },
    ],
    answerId: 1,
  },
  {
    id: 36,
    text: "Take three houses. One is red, the other blue and the final one is white. The red house is to the left of the one in the middle. The blue house is right of the one in the middle. Where is the White House?",
    answers: [
      { id: 1, text: "On the left" },
      { id: 2, text: "On the right" },
      { id: 3, text: "In the middle" },
      { id: 4, text: "Washington, D.C." },
    ],
    answerId: 4,
  },
  {
    id: 37,
    text: "You're sitting in a cabin in the dark and you are cold and hungry. You have only one match. What do you light first?",
    answers: [
      { id: 1, text: "A fire to warm you up" },
      { id: 2, text: "The stove" },
      { id: 3, text: "The match" },
      { id: 4, text: "None of the above" },
    ],
    answerId: 3,
  },
  {
    id: 38,
    text: "If 10 pigeons sat on a wire and someone shot one, how many would be left?",
    answers: [
      { id: 1, text: "Nine" },
      { id: 2, text: "10, they missed" },
      { id: 3, text: "Poor pigeons" },
      { id: 4, text: "0" },
    ],
    answerId: 4,
  },
  {
    id: 39,
    text: "A house took eight hours to be built by four men. How much time would it take one man to build it?",
    answers: [
      { id: 1, text: "32 hours" },
      { id: 2, text: "16 hours" },
      { id: 3, text: "8 hours" },
      { id: 4, text: "0 hours" },
    ],
    answerId: 4,
  },
  {
    id: 40,
    text: "Heavy it is but reverse it's not?",
    answers: [
      { id: 1, text: "Metal" },
      { id: 2, text: "Car" },
      { id: 3, text: "Ton" },
      { id: 4, text: "Pile of wood" },
    ],
    answerId: 3,
  },
  {
    id: 41,
    text: "In a year, how many seconds are there?",
    answers: [
      { id: 1, text: "31,535,000" },
      { id: 2, text: "1,214,000" },
      { id: 3, text: "A lot" },
      { id: 4, text: "12" },
    ],
    answerId: 4,
  },
  {
    id: 42,
    text: "What was the highest waterfall in the world before Angel Falls was discovered?",
    answers: [
      { id: 1, text: "Yosemite Falls" },
      { id: 2, text: "Niagra Falls" },
      { id: 3, text: "Tugela Falls" },
      { id: 4, text: "Angel Falls" },
    ],
    answerId: 4,
  },
  {
    id: 43,
    text: "How many pies in a baker's dozen?",
    answers: [
      { id: 1, text: "12" },
      { id: 2, text: "14" },
      { id: 3, text: "13" },
      { id: 4, text: "18" },
    ],
    answerId: 3,
  },
];
