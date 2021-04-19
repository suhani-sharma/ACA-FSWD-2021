<Client-side> means that the action takes place on the user’s (the client’s) computer. 
<Server-side> means that the action takes place on a web server.
<The Hypertext Transfer Protocol (HTTP)> is the foundation of the World Wide Web, and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

http vs https:
    HTTP lacks security mechanism to encrypt the data whereas HTTPS provides SSL or TLS Digital Certificate to secure the communication between server and client.
    HTTP operates at Application Layer whereas HTTPS operates at Transport Layer.
    HTTP by default operates on port 80 whereas HTTPS by default operates on port 443.
    HTTP transfers data in plain text while HTTPS transfers data in cipher text (encrypt text).
    HTTP is fast as compared to HTTPS because HTTPS consumes computation power to encrypt the communication channel.

framework-vs-library:
The key difference between a library and a framework is "Inversion of Control". When you call a method from a library, you are in control. But with a framework, the control is inverted: the framework calls you.

A library is just a collection of class definitions. The reason behind is simply code reuse, i.e. get the code that has already been written by other developers. The classes and methods normally define specific operations in a domain specific area. For example, there are some libraries of mathematics which can let developer just call the function without redo the implementation of how an algorithm works.

In framework, all the control flow is already there, and there's a bunch of predefined white spots that you should fill out with your code. A framework is normally more complex. It defines a skeleton where the application defines its own features to fill out the skeleton. In this way, your code will be called by the framework when appropriately. The benefit is that developers do not need to worry about if a design is good or not, but just about implementing domain specific functions.