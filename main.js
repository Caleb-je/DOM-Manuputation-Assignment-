var header = document.querySelector("#main-heading")
header.textContent = "New DOM Layout"
header.classList.add("bg-success")

var para1 = document.querySelector("#para1")
para1.textContent = " The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."


var para2 = document.querySelector("#para2")
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."



var button = document.querySelector("#btn").addEventListener("click", buttonClick)

function buttonClick(){
    document.querySelector("#para4").textContent ="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
}

var firstBox = document.querySelector("#red")
firstBox.children[0].classList.add("bg-danger")

var secondBox = document.querySelector("#blue")
secondBox.children[0].classList.add("bg-primary")

var thirdBox = document.querySelector("#yellow")
thirdBox.children[0].classList.add("bg-warning")

var fourthBox = document.querySelector("#green")
fourthBox.children[0].classList.add("bg-success")

var fifthBox = document.querySelector("#black")
fifthBox.children[0].classList.add("bg-dark")




