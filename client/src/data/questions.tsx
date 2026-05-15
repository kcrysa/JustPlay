import { CodeBlock, dracula } from "react-code-blocks";
import { IQuestion, QUESTION_CATEGORIES } from "../models/Question";

export const questions: IQuestion[] = [
  {
    id: 1,
    text: "Which data structure is used for implementing a Last-In-First-Out (LIFO) behavior?",
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.VOIS,
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
    category: QUESTION_CATEGORIES.VOIS,
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
    category: QUESTION_CATEGORIES.VOIS,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
    text: "What language can AWS Lambda functions be written in?",
    answers: [
      { id: 1, text: "Python" },
      { id: 2, text: "Node.js" },
      { id: 3, text: "Java" },
      { id: 4, text: "All of the options" },
    ],
    answerId: 4,
  },
  {
    id: 27,
    category: QUESTION_CATEGORIES.TECH,
    text: "Which cloud provider does not offer Serverless computing services?",
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.TECH,
    text: "Which HTTP methods are commonly tested in API automation?",
    answers: [
      { id: 1, text: "GET" },
      { id: 2, text: "POST" },
      { id: 3, text: "PUT" },
      { id: 4, text: "DELETE" },
      { id: 5, text: "All of the options" },
    ],
    answerId: 5,
  },
  {
    id: 34,
    category: QUESTION_CATEGORIES.TECH,
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "You're sitting in a cabin in the dark and you are cold and hungry. You have only one match. What do you light first?",
    answers: [
      { id: 1, text: "A fire to warm you up" },
      { id: 2, text: "The stove" },
      { id: 3, text: "The match" },
      { id: 4, text: "None of the options" },
    ],
    answerId: 3,
  },
  {
    id: 38,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "If 10 pigeons sat on a wire and someone shot one, how many would be left?",
    answers: [
      { id: 1, text: "9" },
      { id: 2, text: "10, they missed" },
      { id: 3, text: "Poor pigeons" },
      { id: 4, text: "0" },
    ],
    answerId: 4,
  },
  {
    id: 39,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "Four men built a house in eight hours. How much time will it take one man to build the same house?",
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
    category: QUESTION_CATEGORIES.BRAINTEASER,
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
    id: 42,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "What was the highest waterfall in the world before Angel Falls was discovered?",
    answers: [
      { id: 1, text: "Yosemite Falls" },
      { id: 2, text: "Niagara Falls" },
      { id: 3, text: "Tugela Falls" },
      { id: 4, text: "Angel Falls" },
    ],
    answerId: 4,
  },
  {
    id: 43,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "If X $ Y means X multiplied by the cube of Y, find the value of 2 $ 3.",
    answers: [
      { id: 1, text: "6" },
      { id: 2, text: "18" },
      { id: 3, text: "27" },
      { id: 4, text: "54" },
    ],
    answerId: 4,
  },
  {
    id: 44,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "X introduces Y saying, 'He is the husband of the grand daughter of the father of my father'. How is Y related to X?",
    answers: [
      { id: 1, text: "brother" },
      { id: 2, text: "uncle" },
      { id: 3, text: "cousin" },
      { id: 4, text: "brother-in-law" },
    ],
    answerId: 4,
  },
  {
    id: 45,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "What word becomes shorter when you add two letters to it?",
    answers: [
      { id: 1, text: "shorter" },
      { id: 2, text: "long" },
      { id: 3, text: "short" },
      { id: 4, text: "wide" },
    ],
    answerId: 3,
  },
  {
    id: 46,
    category: QUESTION_CATEGORIES.BRAINTEASER,
    text: "What weighs more, a pound of iron or a pound of feathers?",
    answers: [
      { id: 1, text: "Iron" },
      { id: 2, text: "Feathers" },
      { id: 3, text: "None" },
      { id: 4, text: "Both same" },
    ],
    answerId: 4,
  },
  {
    id: 47,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "What is a state in Terraform?",
    answers: [
      {
        id: 1,
        text: "State is a JSON file which keeps track of metadata and mappings between resources and remote objects.",
      },
      {
        id: 2,
        text: 'State is an attribute of a Terraform resource describing its current lifecycle; for example, "destroyed".',
      },
      { id: 3, text: "State is an immutable type of Terraform resource." },
      {
        id: 4,
        text: "State is an extension to Terraform which allows external providers to be used.",
      },
    ],
    answerId: 1,
  },
  {
    id: 48,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: 'What is the "taint" operation used for in Terraform?',
    answers: [
      {
        id: 1,
        text: 'It marks resources to be destroyed and recreated on the next execution of "apply".',
      },
      {
        id: 2,
        text: 'It allows properties of the resource to be changed directly in the Terraform state without using the "apply" command.',
      },
      {
        id: 3,
        text: "It rewrites all Terraform configuration files to a canonical format.",
      },
      {
        id: 4,
        text: "It is used to convert HCL configuration files into JSON.",
      },
    ],
    answerId: 1,
  },
  {
    id: 49,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "When is State Locking performed in Terraform?",
    answers: [
      {
        id: 1,
        text: 'Locking happens automatically on any request to edit or read the state, and it blocks "write" operations only.',
      },
      {
        id: 2,
        text: "Locking happens automatically on any request to edit the state file, and it blocks all other I/O operations.",
      },
      {
        id: 3,
        text: "Locking happens automatically on any request to edit or read the state file, and it blocks all other I/O operations.",
      },
      {
        id: 4,
        text: 'Locking happens automatically on any request to edit the state file, and it blocks "write" operations only.',
      },
    ],
    answerId: 4,
  },
  {
    id: 50,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Select one false statement about Terraform imports:",
    answers: [
      {
        id: 1,
        text: 'Importing may result in a "complex import" where multiple resources are imported at once and extra changes in the terraform code are required to prevent their destruction.',
      },
      {
        id: 2,
        text: "Importing a resource does not require a state to be locked.",
      },
      {
        id: 3,
        text: "Only some types of resources can be imported, and this depends on the specific implementation in the provider.",
      },
      {
        id: 4,
        text: 'It is possible to import resources with the "count" or "for_each" attribute defined in the configuration file.',
      },
    ],
    answerId: 2,
  },
  {
    id: 51,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Choose one sentence which does not compare data source and resource correctly:",
    answers: [
      {
        id: 1,
        text: "Both resources and data sources can use count/for_each to be created multiple times.",
      },
      {
        id: 2,
        text: "In order to access any of the data source objects, both data source and resource are to be accessed from a namespace called 'data' while resources may be reached directly via their types and names.",
      },
      {
        id: 3,
        text: "The data source is an immutable object, whereas resources may be modified.",
      },
      {
        id: 4,
        text: 'Both resources and data sources can be imported from the Terraform CLI using "import".',
      },
    ],
    answerId: 4,
  },
  {
    id: 52,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Select a false statement about configuring providers in Terraform:",
    answers: [
      { id: 1, text: "Each provider type can have only one configuration." },
      {
        id: 2,
        text: "A resource can explicitly define which provider will manage its configuration.",
      },
      {
        id: 3,
        text: "Providers can use attributes of other resources for configuration.",
      },
      {
        id: 4,
        text: "Provider configuration can be defined with variables or local values.",
      },
    ],
    answerId: 1,
  },
  {
    id: 53,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Choose a non-recommended way to store Terraform state files when working in a team:",
    answers: [
      {
        id: 1,
        text: "Storing JSON state files in Git (or another version control system).",
      },
      {
        id: 2,
        text: "Using key value storage in Consul for managing Terraform states.",
      },
      { id: 3, text: "Storing state files as blobs in a S3 bucket." },
      {
        id: 4,
        text: "Storing state files in the Terraform Cloud for remote execution.",
      },
    ],
    answerId: 1,
  },
  {
    id: 54,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: 'Select one sentence which doesn\'t describe both "object" and "map" types in Terraform:',
    answers: [
      { id: 1, text: "Only objects may use their keys as named attributes." },
      { id: 2, text: "It may be represented as a JSON object." },
      {
        id: 3,
        text: 'It can be used as an argument for a "for_each" attribute.',
      },
      {
        id: 4,
        text: "It could be merged with another object/map by using the correct Terraform function, merge.",
      },
    ],
    answerId: 1,
  },
  {
    id: 55,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Select one false statement about DRY methodologies implemented in Terraform:",
    answers: [
      {
        id: 1,
        text: "They define repeated Terraform expressions in the locals block.",
      },
      {
        id: 2,
        text: 'They use a "for_each" attribute which allows a list of resources based on the set to be created.',
      },
      {
        id: 3,
        text: 'They use a "count" attribute which allows a list of resources based on an integer to be created.',
      },
      {
        id: 4,
        text: "They wrap infrastructure elements into modules, which allow extra abstraction layers to be created.",
      },
    ],
    answerId: 2,
  },
  {
    id: 56,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Select the resources lifecycle meta-argument configuration which doesn't exist:",
    answers: [
      { id: 1, text: "prevent_destroy" },
      { id: 2, text: "recreate" },
      { id: 3, text: "ignore_changes" },
      { id: 4, text: "create_before_destroy" },
    ],
    answerId: 2,
  },
  {
    id: 57,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: 'Under what circumstances should the "depends_on" meta-argument be used?',
    answers: [
      {
        id: 1,
        text: "When one resource needs to access values of another before applying it.",
      },
      {
        id: 2,
        text: "To explicitly define the execution sequence so the code becomes more readable.",
      },
      {
        id: 3,
        text: "To prevent cycles in applying a Terraform configuration.",
      },
      {
        id: 4,
        text: "To control the lifecycle of the infrastructure and thus control the access time to the resource attributes.",
      },
    ],
    answerId: 4,
  },
  {
    id: 58,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "Which method is not recommended for modifying a Terraform state without executing plan/destroy?",
    answers: [
      {
        id: 1,
        text: "Using the import command to include a manual configuration of the provider in the state file.",
      },
      {
        id: 2,
        text: "Using the rm command to exclude Terraform resources from the configuration.",
      },
      {
        id: 3,
        text: "Using the state push command to apply the modified state.",
      },
      {
        id: 4,
        text: "Using the mv command to refactor an existing configuration.",
      },
    ],
    answerId: 3,
  },
  {
    id: 59,
    category: QUESTION_CATEGORIES.TERRAFORM,
    text: "What is a dynamic block?",
    answers: [
      {
        id: 1,
        text: 'It is a nested configuration block within the resource created using a "for_each" attribute.',
      },
      {
        id: 2,
        text: 'It can be a resource, or just a part of one, created dynamically by using a "count" attribute.',
      },
      {
        id: 3,
        text: "It is a way to template Terraform code using loops and if statements.",
      },
      {
        id: 4,
        text: "As a static configuration tool, Terraform does not support the creation of dynamic blocks in the configuration.",
      },
    ],
    answerId: 1,
  },
  {
    id: 60,
    category: QUESTION_CATEGORIES.GCP,
    text: "Your company plans to migrate a petabyte data set to the cloud. The requirement is to have high SLA and a SQL interface to access the data. What is the best option for storing the data?",
    answers: [
      { id: 1, text: "Insert the data into CloudSQL" },
      { id: 2, text: "Stream the data into Cloud Datastore" },
      { id: 3, text: "Insert the data into BigQuery" },
      { id: 4, text: "Upload flat files to Cloud Storage" },
    ],
    answerId: 3,
  },
  {
    id: 61,
    category: QUESTION_CATEGORIES.GCP,
    text: "How do you introduce tags in order to use them in a tag-based firewall configuration?",
    answers: [
      {
        id: 1,
        text: "Using the following command: gcloud compute instances add-tag my-instance –tags tag1",
      },
      {
        id: 2,
        text: "Using the following command: gcloud network firewall add-tag my-firewall –tags tag1",
      },
      {
        id: 3,
        text: "Using the following command: gcloud compute networks add-tag my-network –tags tag1",
      },
    ],
    answerId: 1,
  },
  {
    id: 62,
    category: QUESTION_CATEGORIES.GCP,
    text: "What is the name of the GCP service which you can use in an IaaC approach?",
    answers: [
      { id: 1, text: "Cloud Terraform" },
      { id: 2, text: "Cloud Deployment Manager" },
      { id: 3, text: "Cloud Resources Manager" },
      { id: 4, text: "Cloud Deploy" },
    ],
    answerId: 2,
  },
  {
    id: 63,
    category: QUESTION_CATEGORIES.GCP,
    text: "The GCP App Engine flexible environment is based on:",
    answers: [
      { id: 1, text: "Google Kubernetes Engine" },
      { id: 2, text: "Compute Engine" },
      { id: 3, text: "Custom Google infrastructure" },
      { id: 4, text: "BigTable" },
    ],
    answerId: 2,
  },
  {
    id: 64,
    category: QUESTION_CATEGORIES.GCP,
    text: "You’ve been asked to design an analytical and reporting tool in the company, which requires a relational database and should be able to operate on terabytes of data. What is the recommended GCP service?",
    answers: [
      { id: 1, text: "Enable IAM integration" },
      { id: 2, text: "Use Cloud SQL proxy" },
      { id: 3, text: "Use Identity aware proxy" },
      { id: 4, text: "Use secure root password" },
    ],
    answerId: 2,
  },
  {
    id: 65,
    category: QUESTION_CATEGORIES.GCP,
    text: "How can the cache hit ratio for Cloud CDN be improved for static content delivered via HTTP/HTTPS?",
    answers: [
      { id: 1, text: "Reduce TTL and expiration time" },
      { id: 2, text: "Use the custom cache keys feature" },
      { id: 3, text: "Reduce the size of the static content, images etc." },
      { id: 4, text: "Set “Cache-region” HTTP header to the closest region" },
    ],
    answerId: 2,
  },
  {
    id: 66,
    category: QUESTION_CATEGORIES.GCP,
    text: "Which external services are officially supported by the Cloud Monitoring agent?",
    answers: [
      { id: 1, text: "AWS Lambda" },
      { id: 2, text: "Azure Virtual Machines" },
      { id: 3, text: "AWS EC2" },
      { id: 4, text: "Azure Functions" },
    ],
    answerId: 3,
  },
  {
    id: 67,
    category: QUESTION_CATEGORIES.GCP,
    text: "Which kind of open source agents can be used in the Google Stackdriver Suite?",
    answers: [
      { id: 1, text: "CollectD" },
      { id: 2, text: "FluentD" },
      { id: 3, text: "StatsD" },
      { id: 4, text: "SystemD" },
    ],
    answerId: 1,
  },
  {
    id: 68,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Which tool should a company use to automate deploying, configuring, and managing virtual machines and containers?",
    answers: [
      { id: 1, text: "Ansible" },
      { id: 2, text: "Terraform" },
      { id: 3, text: "Kubernetes" },
      { id: 4, text: "Docker" },
    ],
    answerId: 3,
  },
  {
    id: 69,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Suppose you are using Ansible to automate the configuration of a new web server. Which modules would you use to install the Nginx web server?",
    answers: [
      { id: 1, text: "Yum" },
      { id: 2, text: "apt" },
      { id: 3, text: "pip" },
      { id: 4, text: "git" },
    ],
    answerId: 2,
  },
  {
    id: 70,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "As a DevOps engineer responsible for managing a Kubernetes cluster, which commands would you use to list all the pods running in the cluster?",
    answers: [
      { id: 1, text: "kubectl get deployments" },
      { id: 2, text: "kubectl get nodes" },
      { id: 3, text: "kubectl get pods" },
      { id: 4, text: "kubectl get services" },
    ],
    answerId: 3,
  },
  {
    id: 71,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "As you have already created a new Docker image with the updated code, you want to deploy a new version of your application to your Kubernetes cluster. What Kubernetes object can you use to update the running pods with the new image?",
    answers: [
      { id: 1, text: "Pod" },
      { id: 2, text: "ReplicaSet" },
      { id: 3, text: "Deployment" },
      { id: 4, text: "StatefulSet" },
    ],
    answerId: 3,
  },
  {
    id: 72,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Which Ansible module would you use to ensure a specific package is installed on a new web server while configuring the server?",
    answers: [
      { id: 1, text: "apt" },
      { id: 2, text: "yum" },
      { id: 3, text: "package" },
      { id: 4, text: "install_package" },
    ],
    answerId: 3,
  },
  {
    id: 73,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Your team is responsible for managing a large-scale infrastructure with multiple servers. You must ensure the servers are configured with the latest security updates. Which tool will you use for this purpose?",
    answers: [
      { id: 1, text: "Ansible" },
      { id: 2, text: "Terraform" },
      { id: 3, text: "Kubernetes" },
      { id: 4, text: "Helm" },
    ],
    answerId: 1,
  },
  {
    id: 74,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "As an employee, you deployed a stateful application on a Kubernetes cluster, which requires a persistent volume backed by a remote storage system. Which Kubernetes object would you use to define this persistent volume, and which type of Kubernetes resource would you use to consume it?",
    answers: [
      {
        id: 1,
        text: "PersistentVolume object and consume using a StatefulSet resource",
      },
      {
        id: 2,
        text: "StorageClass object and consume using a StatefulSet resource",
      },
      {
        id: 3,
        text: "PersistentVolumeClaim object and consume using a Deployment resource",
      },
      {
        id: 4,
        text: "StorageClass object and consume using a Deployment resource",
      },
    ],
    answerId: 1,
  },
  {
    id: 75,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Your organization uses Kubernetes for container orchestration. Your team is currently facing issues with container networking, and you suspect a problem with the Kubernetes networking model. Which networking models are used in Kubernetes by default?",
    answers: [
      { id: 1, text: "Overlay" },
      { id: 2, text: "Bridge" },
      { id: 3, text: "Host-gateway" },
      { id: 4, text: "IP per container" },
    ],
    answerId: 2,
  },
  {
    id: 76,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Name the Kubernetes object you would use to manage a Kubernetes cluster for your organization and ensure that a pod always has specific resources.",
    answers: [
      { id: 1, text: "Deployment" },
      { id: 2, text: "Pod" },
      { id: 3, text: "Service" },
      { id: 4, text: "LimitRange" },
    ],
    answerId: 4,
  },
  {
    id: 77,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Your company uses Kubernetes for container orchestration and recently adopted Ansible for configuration management. The team faces an issue where the application's environment variables must be updated frequently. Which approach would be the most efficient way to manage these environment variables using Ansible?",
    answers: [
      {
        id: 1,
        text: "Use Ansible to create Kubernetes ConfigMaps and mount them as environment variables inside the containers",
      },
      {
        id: 2,
        text: "Use Ansible inventory files to store environment variables and run an Ansible playbook every time an update is required",
      },
      {
        id: 3,
        text: "Use Ansible to modify the Dockerfile and rebuild the container image each time an environment variable needs to be updated",
      },
      {
        id: 4,
        text: "Use Ansible to update environment variables directly in the Kubernetes deployment YAML files",
      },
    ],
    answerId: 1,
  },
  {
    id: 78,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "How can an organization apply a single command for Terraform and Ansible changes? The organization uses Terraform to manage infrastructure and Ansible configures software on provisioned instances. Ensure that Terraform changes are applied before Ansible changes.",
    answers: [
      {
        id: 1,
        text: "Use Terraform local-exec provisioner to call an Ansible playbook after applying Terraform changes",
      },
      {
        id: 2,
        text: "Use Ansible's Terraform module to call Terraform from an Ansible playbook",
      },
      {
        id: 3,
        text: "Use Terraform Ansible provisioner to call Ansible from a Terraform script",
      },
      {
        id: 4,
        text: "Use a custom script that runs 'terraform apply' and 'ansible-playbook' in sequence",
      },
    ],
    answerId: 1,
  },
  {
    id: 79,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "Without causing downtime, how should a company automate rolling updates while migrating its applications to a Kubernetes cluster using Ansible for application configuration?",
    answers: [
      {
        id: 1,
        text: "Use Kubernetes rolling updates with readiness and liveness probes to ensure zero downtime during the update process",
      },
      {
        id: 2,
        text: "Use Ansible to update the application configuration and restart the affected pods",
      },
      {
        id: 3,
        text: "Use Terraform to create new Kubernetes deployments with the updated application configuration and manually switch traffic between the old and new deployments",
      },
      {
        id: 4,
        text: "Use Kubernetes to create new pods with the updated application configuration and manually delete the old pods",
      },
    ],
    answerId: 1,
  },
  {
    id: 80,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "A team is working on a project that uses Terraform to manage infrastructure, Kubernetes for container orchestration, and Ansible for configuration management. During the development phase, a change is made to Terraform configuration files. Which command should be run first to validate the changes and ensure that the infrastructure will be updated correctly?",
    answers: [
      { id: 1, text: "terraform validate" },
      { id: 2, text: "ansible-playbook --syntax-check" },
      { id: 3, text: "terraform apply" },
      { id: 4, text: "kubectl apply -f" },
    ],
    answerId: 1,
  },
  {
    id: 81,
    category: QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION,
    text: "A company is using Terraform to manage infrastructure for their Kubernetes-based application. They want to create a robust backup and recovery strategy for their Terraform state files. Which option is the most recommended approach to achieve this goal?",
    answers: [
      {
        id: 1,
        text: "Store the Terraform state files on a local disk and use a cron job to back them up regularly",
      },
      {
        id: 2,
        text: "Use a distributed version control system like Git to store and manage the Terraform state files",
      },
      {
        id: 3,
        text: "Use remote state storage with backend locking and versioning, and create regular backups",
      },
      {
        id: 4,
        text: "Store the Terraform state files in a shared network folder and use a backup tool to create regular backups",
      },
    ],
    answerId: 3,
  },
  {
    id: 82,
    category: QUESTION_CATEGORIES.AWS,
    text: "A company wants to migrate its on-premises infrastructure to the cloud. Which services can be used to migrate a physical server to AWS?",
    answers: [
      { id: 1, text: "AWS Server Migration Service (SMS)" },
      { id: 2, text: "Amazon Elastic Compute Cloud (EC2)" },
      { id: 3, text: "AWS Direct Connect" },
      { id: 4, text: "Amazon Simple Storage Service (S3)" },
    ],
    answerId: 1,
  },
  {
    id: 83,
    category: QUESTION_CATEGORIES.AWS,
    text: "A web application requiring high performance and low latency is to be deployed by a company on AWS. Which services can be used to achieve this?",
    answers: [
      { id: 1, text: "Amazon SNS" },
      { id: 2, text: "Amazon SQS" },
      { id: 3, text: "Amazon CloudFront" },
      { id: 4, text: "Amazon S3" },
    ],
    answerId: 3,
  },
  {
    id: 84,
    category: QUESTION_CATEGORIES.AWS,
    text: "Suppose a company plans to deploy a web application on Azure. The application requires secure and encrypted communication between the client and server. Which services can enable SSL/TLS encryption for the web application?",
    answers: [
      { id: 1, text: "Azure Application Gateway" },
      { id: 2, text: "Azure Traffic Manager" },
      { id: 3, text: "Azure Load Balancer" },
      { id: 4, text: "Azure Virtual Machines" },
    ],
    answerId: 1,
  },
  {
    id: 85,
    category: QUESTION_CATEGORIES.AWS,
    text: "Which services can be used to deploy a multi-tier web application on AWS that requires automatic resource scaling based on traffic?",
    answers: [
      { id: 1, text: "Amazon CloudFront" },
      { id: 2, text: "Amazon EC2 Auto Scaling" },
      { id: 3, text: "Amazon Elastic Load Balancing (ELB)" },
      { id: 4, text: "Amazon Route 53" },
    ],
    answerId: 2,
  },
  {
    id: 86,
    category: QUESTION_CATEGORIES.AWS,
    text: "A web application requires a relational database service that is fully managed, scalable, and highly available. Which services should an organization use to deploy the database?",
    answers: [
      { id: 1, text: "Amazon RDS" },
      { id: 2, text: "Amazon DynamoDB" },
      { id: 3, text: "Amazon ElastiCache" },
      { id: 4, text: "Amazon Redshift" },
    ],
    answerId: 1,
  },
  {
    id: 87,
    category: QUESTION_CATEGORIES.AWS,
    text: "Which AWS services can be used by a company that plans to deploy a highly scalable and fault-tolerant website on AWS that requires processing large amounts of data in real-time? The website will receive millions of requests per day and must be able to handle traffic spikes and be highly available.",
    answers: [
      {
        id: 1,
        text: "Amazon RDS, Amazon SQS, Amazon EMR, Amazon CloudFront",
      },
      { id: 2, text: "Amazon EC2, Amazon RDS, Amazon SNS, AWS Lambda" },
      {
        id: 3,
        text: "Amazon Elastic Beanstalk, Amazon DynamoDB, AWS Lambda, Amazon CloudFront",
      },
      {
        id: 4,
        text: "Amazon S3, Amazon Kinesis, AWS Lambda, Amazon Route 53",
      },
    ],
    answerId: 3,
  },
  {
    id: 88,
    category: QUESTION_CATEGORIES.AWS,
    text: "An on-premises web application requires high availability, fault tolerance, and the ability to scale to handle millions of daily requests. The application must also meet strict compliance and security requirements. An organization is planning to migrate this application to AWS. Which AWS services can be used to deploy the application?",
    answers: [
      { id: 1, text: "AWS Elastic Beanstalk, Amazon RDS, AWS Lambda" },
      {
        id: 2,
        text: "Amazon EC2, Amazon Elastic Load Balancer, Amazon Route 53",
      },
      { id: 3, text: "AWS CloudFormation, AWS CodeDeploy, AWS CodePipeline" },
      { id: 4, text: "AWS Elastic Load Balancer, Amazon Aurora, AWS WAF" },
    ],
    answerId: 2,
  },
];
