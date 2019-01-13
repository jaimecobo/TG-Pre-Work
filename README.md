# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

1. The browser requests to the DNS the IP address of www.techtonic.com.
2. The DNS responses the request with the corresponding IP address, if the server does not have the IP it will get it from a different DNS.
3. Having the IP address the client will prepare the packets and send the HTTP request to the corresponding server.
4. The server where the www.techtonic.com website is hosted will respond to the request sending a “200 OK” message and its index.html file.
5. Additional requests can be sent from the client (browser) in case that more data is needed to load the whole web-page (images, css files, JavaScript code between others), repeating previous steps.


## From start to finish how does that data reach you to be rendered in the browser?

Once the hosting server receive the HTTP request, it'll initially send back a “200 OK” message and then it will send the file requested.
With the “200 OK” message the browser gets prepared to start receiving the packets, once all of the packets are received, the browser will render and load the web-page.

## What code is rendered in the browser?

Considering that different types of code are rendered by different rendering engines, browsers can render HTML, XML, CSS and JavaScript code, including PDF and other types of files.

## What is the server-side code’s main function?

The main function of server-side code is to limit access to proprietary data and helps keep control of the source code, because all the code is processed in the server.

## What is the client-side code’s main function?

Reduce server-side processing costs and optimize client interactivity because all the code is executed locally in the client-side.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

This is a tricky questions because in (Computer Science) instances are commonly referred to objects, but assuming that we are talking about (HTML, CSS, JS, Images, etc.) request instances, the number will varies depending on the design and user's interactivity, in other words one instance per request.

## How many instances of the server-side code are available at any given time?

If we are talking about how many instances users can request to the server, as many as the server-side's infrastructure can support.
If we are talking about the instances or copies of the code in the server-side, it can be only one or as many as the infrastructure designers have decided.

## What is runtime?

Ref. https://techterms.com/definition/runtime <br>
Runtime is the period of time when a program is running. It begins when a program is opened (or executed) and ends with the program is quit or closed.
Runtime is a technical term, used most often in software development. It is commonly seen in the context of a "runtime error," which is an error that occurs while a program is running. The term "runtime error" is used to distinguish from other types of errors, such as syntax errors and compiliation errors, which occur before a program is run.
When a program is in the runtime phase, the application is loaded into RAM. This includes the executable file and any libraries, frameworks, or other files referenced by the program. When the program is quit, the runtime period ends and the memory used by the program is made available for use by other programs.

## How many instances of the databases connected to the server application are created?

If we are talking about database connections is recommended to have only one connection per request, because the connection should be dropped after the request is completed.
If it is referring about the number of databases, it can be only one or as many as the database designers have decided.
And in last case, if it's referring to databases instances, as many as required or supported.
