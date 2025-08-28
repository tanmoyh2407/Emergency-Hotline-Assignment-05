1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: They are used to find elements from the DOM.

getElementById: It finds a single element from an HTML document using a specific ID attribute. Returns only one element.

getElementsByClassName: It finds one or more elements from an HTML document based on a specific CSS class name. Its returns a HTMLCollection, that looks like an array but actually not array, its call array like object.

querySelector: Its returns the first matching element from the document based on the CSS selector. If nothing is found its returns null. Its can use id, class, tag name, attribute on any combination of these.

querySelectorAll: Its returns all of the matching elements from the document based on the CSS selector. It returns a NodeList that looks like an array. Any valid CSS selector can be use here.



2. How do you **create and insert a new element into the DOM**?

Ans:

const newPara = document.createElement("p");

newPara.textContent = "Hello, this is new paragraph;

Also we can use newPara.innerHTML = `(write html code into backtick)`

document.body.appendChild(newPara);



3. What is **Event Bubbling** and how does it work?

Ans: When an event (like a click) happens on an element, the event doesn’t stop there. It also goes up to its parent elements, one by one. So it starts from the innermost element and keeps moving up to the outer elements. Suppose If you click a button inside a div, the click first happens on the button, then on the div, and then it can even reach the body or document.



4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation means placing a listener on the parent element and handling the work of the child element.
It is useful because if there are many child elements, it is difficult to add event listeners one by one and the performance is also poor.



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: Both work in event handling, but the work is different.
event.preventDefault() Disables the default behavior of an element. For example, if a form is submitted and the page reloads, preventDefault() is used to disable it.

one the other hand event.stopPropagation() stops the event bubble. This means that if an event occurs in the child, it will no longer be propagated to the parent.