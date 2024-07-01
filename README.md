# CS465FullStackDev

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express, HTML, JavaScript, and the single-page application (SPA)

One portion of the site utilized Express, HTML, and JavaScript to display the pages. Routes and controllers were created with Express and JavaScript to handle browser requests for a page. Express would then either retrieve the static HTML page or generate the requested page using Handlebars templates populated with data from the database. These tools worked together to manage server requests and send the results to the frontend client.

The Angular portion of the project operated differently. With the first page load, the entire single-page application (SPA) is sent to the client. After this initial load, all page rendering and code execution occur client-side in the browser, with backend calls needed only to retrieve data from the database. With Express, multiple server calls are made each time a page is loaded or refreshed. Contrastly, with a SPA, the initial load is longer due to retrieving all the code from the backend, but subsequent navigation between pages within the SPA requires no additional server calls.

Why did the backend use a NoSQL MongoDB database?

MongoDB scales efficiently and performs queries quickly. Its document storage format aligns well with JSON, making it a great choice for frontend applications.

Functionality

How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is a data formatting specification compatible with various programming languages. JavaScript, a programming language, uses JSON to define objects. APIs and JSON connect the frontend and backend. RESTful APIs use JSON to handle requests and responses.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components

One example of improving functionality through refactoring involved replacing some static HTML pages with Handlebars templates. This change enabled reusing the page structure while allowing dynamic content display. Another refactor moved the content used for populating the templates from static JSON files within the codebase to MongoDB. This shift allows content data to be added or modified without redeploying code changes to the website.

Testing

Methods for request and retrieval require various types of API testing of endpoints, which is further complicated by the added layers of security.

Explain your understanding of methods, endpoints, and security in a full stack application

HTTP methods define different types of interactions between a client and a server, with the most common being GET, POST, PUT, and DELETE. API endpoints facilitate this communication using the various HTTP methods. In this full stack application, security involves authenticating a user and providing them with a valid JWT to access certain endpoints.

Reflection

How has this course helped you in reaching your professional goals?

This course has broadened my knowledge of full stack development and introduced me to new technologies, such as Express. In my professional career as a cybersecurity engineer, I can understand what's going on within the backend when changes need to be made within our systems.

What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

I feel like my Github skills have definitely been mastered. I did learn how to tie in everything together, which again, helps me recognized a lot more within my current field.
