# Job Quarry
Job Quarry is an imaginary IT job board platform. There are 2 account types: user and company. A company can post job offers on their profile, and the users can browse and filter them by name, location, experience level, contract type, working mode, technologies and salary. They can also apply to them via the application interface. Users can also bookmark offers to go back to them later. They have their own profiles that they can manage from the settings panel. On the profile page they can have for example: about me section, skills list, their social media, portfolio URL or their past job positions. Companies also have their profiles with description, social media and a list of offers that they posted. Company can edit and delete their offers but also track analytics containing metrics like: overall views number, CTR (click-through rate), amount of applications for a given offer, the percentage of people that entered the offer page that actually applied for the job and all of that in a convenient form with the use of pie charts from chart.js library. Companies can browse the received offers and toggle their status between 3 possible states: pending, rejected and accepted. The user that sent the application will be notified about the status change in real time. There is also a messaging feature between users and companies. Backend is a GraphQL API, built with Apollo Server in Node.js (Typescript), the database is MongoDB with Mongoose ODM to simplify the CRUD operations, user authorization is implemented with JSON Web Tokens. To store files like company logos, users' profile pictures or applicants' resumes I used the AWS cloud (S3 service). Those files are sent to the endpoints built in REST standard with Express framework with the use of Multer library. They are validated so the user can only submit the allowed file mimetype and size and then they are sent to the S3 bucket and later on they're read with Amazon SDK and getSignedUrl method, which ensures the security of the files because the generated URLs expire after a specified time period. Realtime notifications and messaging feature are built with GraphQL Subscriptions based on WebSockets technology. WebSockets channels are also secured with JWTs. Frontend is built in React.js(Vite and Typescript), to communicate with the GraphQL API I used Apollo Client and to communicate with the REST endpoints in order to send files I used Axios library. To manage the global app state such as user notifications, user authentication state and their account type (company or user) I used Redux along with Redux Toolkit. The app is styled with CSS Modules to ensure the local namespace of classes for each individual component. The graphic design is made by me in Figma.