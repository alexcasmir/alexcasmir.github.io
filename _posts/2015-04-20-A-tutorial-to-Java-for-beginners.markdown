---
layout: post
title: "A tutorial to Java, for beginners!"
date: 2015-04-20 17:52 
permalink: 
published: true
expires: never
external-url:
categories: [tutorials]
---


<script type="text/javascript"><!--
zone = "76";
pl = "12699";
url = "http://cpm.edomz.com";
//--></script>
<script type="text/javascript" src="http://cpm.edomz.com/show.js"></script>

#### Java basics: a tutorial for beginners

If you have ever wanted to write your own Android app, for fun or for profit, you are probably going to need to do some programming. There are lots of different ways to write Android programs but the official language of Android is Java. If you don’t want to try your hand at Java, then I would recommend you read my article: I want to develop Android Apps – What languages should I learn?

Not only is Java the official programming language for app development, Java itself is used by Google for large parts of the Android internals. There are two distinct parts to writing an Android app. One is the Java programming language itself, the other is understanding how to create an app in terms of its user interface, the Android OS, and the Android Software Development Kit (SDK). In this tutorial we will deal with the first of these, the Java programming language.

To start writing Java programs you need a way to compile source code and turn it into an executable for the Java runtime.

Java was first released in the mid-1990s by Sun Microsystems. It was designed to be easy to learn by programmers who already knew C and C++. During 2006 and 2007 Sun released Java as free and open-source software, under the terms of the GNU General Public License (GPL). Sun was bought by Oracle in 2009/2010, and Oracle remains committed to Java.

To start writing Java programs you need a way to compile source code and turn it into an executable for the Java runtime. The normal way to do this is to install the Java Development Kit. At the time of writing the current version of Java is Java 8, however it is relatively new, so Android uses Java 7. If you are unsure about installing the JDK then read this How to Install the Java Software Development Kit tutorial. Oracle also provides a JDK 7 Installation Guide.

However, if you aren’t quite ready to install the JDK, and you want a quick route to trying your first Java program, then I recommend Koding.com. Koding gives you access to a free virtual machine with all the compilers and tools you need to compile and run Java programs as well as develop in other languages like Go, Python, Node, and C. To sign up just visit Koding.com, type in your email address and a password of your choice, and then click “Sign Up”.

The virtual machine (VM) comes with an IDE and command line access. The web view of the virtual machine is divided into four. On the very left if the Koding control panel with access to your account details, the virtual machines you have created and so on. Next to it is a file manager which shows all the files and folders you have on your VM. Next to that the screen is split into two. The top half is an editor, for writing your code; and the bottom half gives you command line access.

From here in I will assume you are using Koding. However, for those who have installed the JDK the process is almost identical except that you will need to use a text editor on your PC rather than the editor inside the Koding IDE.

Cut and paste the following code into the editor:

	public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World"); } }

And save it as HelloWorld.java. In Java the filename of the source code and the class name must be the same. The first line of the code declares a class called HelloWorld, so this source code must be saved in HelloWorld.java.

In Koding to save the file, hover the mouse over the tab for the code (probably called Untitled.txt) and click on the little arrow. Then click “Save As…”, enter HellowWorld.java as the file name and click “Save”.

At the bottom part of the screen is the command line. The virtual machine is running Linux and the terminal is running Bash. If you are unfamiliar with using the Linux command line, try this tutorial: Linux Tutorial for Beginners, especially Tutorial One and Two. So, to compile your first Java program just type:

	javac HelloWorld.java

The compile should only take a second or two. Then to run the program type:

	java HelloWorld

Your reward is the text “Hello, World” being displayed in the terminal. Congratulations!

What did I just do?

So let’s take a moment to look at what just happened. First the source code. The file does three things. 1) It declares a class called HelloWorld. 2) It defines a method (a function) in the HelloWorld class called main. 3) The main() method calls System.out.println to output some text.

In Java, and in all object orientated programming languages, a class defines an object. An object is a self contained item that interacts with other objects. In Android such object would include elements in the UI, a network connection, some location data, and so on.

Each Java program must define a method called main in at least one class. It is the entry point, where the program starts executing. In the simple example above the main() method has just one line of code, a call to System.out.println to output “Hello, World”. println() is a method that belongs to the PrintStream class and is included as part of the System class. Oracle has lots of information about the System class and the PrintStream class.

To compile and run the program you first called javac and then java. The first is the Java compiler, hence the letter ‘c’ at the end, and the second is the Java virtual machine. Java is architecture-independent which means that a .java file isn’t compiled for a specific processor on a specific OS, like Windows on an Intel x86 chip, or Android on an ARM Cortex-A processor, but rather it is turned into Java bytecode. The job of the Java virtual machine is to run that bytecode on the specific platform.

#Variables

When writing computer programs you will need to store some data for temporary use. For example in an Android game you will want to store the score of the current player. These bits of data are stored in variables – a box in which you can put some data and then come back later a retrieve it. Since data comes in different forms a variable needs to be defined with a type, which tells Java what is being stored. Some of Java’s primitive data types include int (for integer), double (for double precision floating point number), and boolean (for a true/false value).

Here is a simple program which sets the value of a variable, prints out the value to the console, changes the variable and then prints it out again:

	public class VariableTest { public static void main(String[] args) { int i = 1; System.out.println("The value of i is: " + i); i = i + 24; System.out.println("The value of i is now: " + i); } }

Save the file as “VariableTest.java”. To compile it type: javac VariableTest.java, and to run it use: java VariableTest. The output of the program will be:

	The value of i is: 1 The value of i is now: 25

As you can see the program defines a variable called “i” and gives it an initial value of 1. The value of “i” is printed to the console. Then i is set to the new value of i + 24, or 1 + 24, which is 25. The new value is then printed out.

Try modifying the program to use a “double” rather than an “int”. Set “i” to something like 1.3 and increase its value by another decimal number like 24.9.

If you take a look at the println() method you will see an integer being added to a string: “The value of i is: ” + i. What actually happens here is that Java knows that the first part of the expression is a string, so it generates the string value for i, in this case “1” and then concatenates it to the string giving: “The value of i is: 1″.

#Strings

Strings are an important part of any programming language including Java. Unlike int or boolean, a string isn’t a primitive type it is a class. When you create a string variable you are really creating a String object (notice the capital letter S). As an object it has certain properties like its value (the string itself) and its length. Strings can be manipulated in lots of different ways, including being dissected, concatenated, compared, and searched.

Here is an example program that performs a few simple operations on a String:

	public class PlayingWithStrings { public static void main(String[] args) { String hello = "Hello, World"; System.out.println(hello); // Add an ! to the end hello = hello + "!"; System.out.println(hello); // Extract the word "Hello" from the String // i.e. starting at the beginning (0) for 5 characters String justHello = hello.substring(0,5); System.out.println(justHello); // Add some trailing spaces and then remove them with trim() hello = hello + " "; hello = hello.trim(); // Now output the string all in UPPERCASE and lowercase System.out.println(hello.toUpperCase()); System.out.println(hello.toLowerCase()); } }

Save it as PlayingWithStrings.java. Compile it and run it using javac and java as shown previously.

This is a special method called a constructor. The constructor is called only once, at the moment that the object is created.

The first part of the program creates a String object called “hello” and gives it a value of “Hello, World”. Although this make look similar to how you declare and assign an integer or another primitive type, actually there is a lot more going on here. Java allows simple operators like = and + to be assigned simple tasks. So really String hello = “Hello, World”; is actually some like String hello = new String(“Hello, World”);, in other words, create a new object of type String and pass in the value “Hello, World” to the constructor. But we will talk more about that in the Objects section below.

The next part shows how you can concatenate strings, in this case an exclamation point is added to the end of the string. Since String is an object it can have methods. String.substring() is a method which returns part of a string. In this case the first 5 characters. String.trim() is another method which removes leading and trailing spaces. The last part of the program demonstrates the String.toUpperCase() and String.toLowerCase() methods.

The output from the program will be:

	Hello, World Hello, World! Hello HELLO, WORLD! hello, world!

You can find out more about the String object in Oracle’s String tutorial and from the Java String documentation.

#Loops

If there is one thing a computer is good at, it is doing repetitive tasks. To perform a repetitive task in a programming language you use a construct called a loop – something that loops around again and again.

Java has three types of simple loop: the for loop, the while loop, and the do while loop. Each loop type follows the same basic idea, you need to repeat something over and over again until a certain condition is met.

Here is an example which shows how to print out the numbers 1 to 10, 11 to 20, and 21 to 30, using the three different types of loop:

	public class Loops { public static void main(String[] args) { // For loop for(int i=1; i<=10; i++) { System.out.println("i is: " + i); } // While Loop int j = 11; while(j<=20) { System.out.println("j is: " + j); j++; } // Do While Loop int x = 21; do { System.out.println("x is: " + x); x++; } while (x <=30); } }

Create a file called Loops.java with the code from above, then compile it and run as shown previously.

The for loop as three parts. First the initialization (int i=1), which is executed only once. In the example above the initialization is used to declare an integer i and set its value to 1. Then comes the test expression (i<=10). This expression will be tested every time the loop executes. If the result of the test is true then the loop will go around again. In this example the test is to check that i is still less than or equal to 10. After each iteration the third section, the iterator, will be executed. In this example it increases the value of i by one. Note that i = i + 1 is the same as i++.

The while loop is similar to the for loop, except it doesn’t contain the initialization phase and the iterator phase. That means that the initialization needs to be done separately, hence the declaration int j = 11;. The iterator also needs to be coded separately. In our example it is the line j++ which is found inside the loop after the println().

A do… while loop is very similar to a while loop with one big difference, the test to see if the loop should continue is at the end of the loop and not at the start. This means that a do… while is guaranteed to execute at least once, but a while loop doesn’t even need to execute at all, if the conditions aren’t met on the entrance into the loop.

Like the while loop, the initialization needs to happen outside the loop, in this case: int x = 21; and the iterator occurs inside the loop: x++. When x goes over 30 the loop will stop.

#Objects

As I mentioned before, Java is what is known as an object-orientated (OO) programming language and to really succeed in Java programming and Android programming it is important to understand OO concepts.

At its simplest level an object is a set of methods (functions) that work on a data set. The data and the methods belong to the object, and work for the object.

Here is the source code for a very simple program which creates a counter object:

	public class Counter { int count; public Counter() { count = 0; } public void Increment() { count++; } public int GetCount() { return count; } public static void main(String[] args) { Counter myCounter = new Counter(); System.out.println("mycounter is " + myCounter.GetCount()); myCounter.Increment(); System.out.println("mycounter is " + myCounter.GetCount()); } }

The Counter object has one piece of data, the integer variable count and three methods (other than main): Counter(), Increment(), and GetCount(). Leaving the first method for the moment, you can see that Increment() and GetCount() are very simple. The first adds one to the internal variable count and the second returns the value of count.

Until now all the methods we have declared started with public void but if you notice the GetCount() method starts with public int. We will talk more about public in a moment, but the difference between void and int is this: void declares that the method doesn’t return anything, there will be no result coming back out of the method. But int tells us that the method will return a number, specifically an integer. You can actually create methods that will return all kinds of data, including objects.

Notice that the first method has the same name as the class itself, i.e. Counter(), and it doesn’t have a return type (not even void). This is a special method called a constructor. The constructor is called only once, at the moment that the object is created. It is used to initialize the object with default values and perform any other necessary initialization tasks. In this example it just sets count to zero.

#Inheritance

The great thing about classes is that you can create a general class for an abstract idea and then create specific classes which are derived from the original class. For example, you can create a class called Animal and then derive a new class from it for a specific animal, say an Elk.

Here is an example, I will expand on what is happening here in a moment… You are going to need to create two files for this example, Animal.java and Elk.java. Here is Animal.java:

	public class Animal { int NumberOfLegs; public Animal(int n) { NumberOfLegs = n; } public int GetNumLegs() { return NumberOfLegs; } }

And here is Elk.java:

	public class Elk extends Animal { int lengthOfAntlers; public Elk(int l) { super(4); lengthOfAntlers = l; } public int GetAntlerLength() { return lengthOfAntlers; } public static void main(String[] args) { Elk myElk = new Elk(30); System.out.println("Antler: " + myElk.GetAntlerLength()); System.out.println("Legs: " + myElk.GetNumLegs()); } }

To compile the program just type:

	javac Elk.java

The Animal class is what is known as a super class, while the derived class Elk is known as a sub-class, because hierarchically it is below the Animal class. When a class is extended (i.e. you create a sub-class) the new class takes on the data and methods of the super class. That is why the program is able to call myElk.GetNumLegs() even though it is part of the Animal class. The new Elk class has two variables: NumberOfLegs and lengthOfAntlers. It also has two methods: GetAntlerLength and GetNumLegs. If we created another sub-class, say Sheep, it would inherit the NumberOfLegs variable and the GetNumLegs method.

When designing objects you will discover that you want some methods to be exposed to the rest of the program, so that they can be called. But other methods you might want to keep private, so that only the object itself has access to it. This is where that word public comes into play. We have been declaring everything as public which means the method can be called from anywhere else in the code. However you can declare methods as private or protected, which will limit the access to those methods. The same access rules can also be applied to the object’s variables. A deeper discussion is beyond the scope of this tutorial, but if you would like some more information then you should read Controlling Access to Members of a Class and Declaring Member Variables from Oracle’s Java documentation.

One other thing worth mentioning is how the constructors work. The Elk() constructor initializes the lengthOfAntlers variable, in this case to 30, the number passed in when the object was created. But before that, it calls the constructor of the super class (i.e. Animal() ) using the special Java notation super.

There is a lot more that can be said about object-orientated programming (OOP), but this should be enough to give you a taste and get you started.

Source: Android Developer Newsletter