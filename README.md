<h3><b>Employee Management System API</b></h3>

<!DOCTYPE html>
<html>
  <body>

<div>
  <p>This is a web-based API for an Employee Management System developed using Node.js, Express, MongoDB, and tested with Postman. The system allows managing employees, departments, and projects within an organization.</p>
</div>
<div>
  <h5> Database Structure</h5>
  <p>The system uses MongoDB with the following collections: </p>
  <ul>
    <li>departments - Stores department information.</li>
    <li>employees - Stores employee records</li>
    <li>projects - Stores project details</li>
    <li>etfs - Stores ETF information (appears in some employee records)</li>

  <br>
  <img src="https://github.com/user-attachments/assets/61c990d8-24c8-4f81-9dac-c585faa7a136">
  <br>
  </ul>
</div>
<div>
 <h5>Prerequisites</h5> 
<ul>
  <li>Node.js installed</li>
  <li>MongoDB installed and running</li>
  <li>Postman (for API testing)</li>
</ul>

</div>
<div>
  <h3>Sample Data</h3>
<ul>
  <li>2 departments: Project Management, Human Resources</li><br>
  <img src="https://github.com/user-attachments/assets/2a98f20d-daf1-4ebe-bc25-f013cc0e2cdc"><br>
  <br>
  <img src="https://github.com/user-attachments/assets/0b4c6280-9ebc-4cbf-ac44-7148838785a5"><br>
<li>1 employees with attributes</li><br>
<li>2 projects with different durations</li><br>
<img src="https://github.com/user-attachments/assets/bf6ca1b8-3ef7-4b4c-b2b4-0eb7fd292846"><br>
<img src="https://github.com/user-attachments/assets/11c20c78-0bfd-4ad8-bb72-2dc0e7be2bf5"><br>
  
</ul>
</div>
<br>
<div>
  After Running the code i added few more employees along with more projects and new Department using Insert Operation in <b>MongoDB</b>
<img src="https://github.com/user-attachments/assets/612d8012-e56c-4543-bf94-278a0a62dc83"><br>
<br>
<img src="https://github.com/user-attachments/assets/c6f3c3d8-5de8-4191-89f0-b11fee3fbcd1">
<br>
</div>



<h4>CRUD Operations</h4>
<p>The API supports standard CRUD operations:</p>
<ul>
  <li>Create: Add new departments, employees, or projects</li>
  <li>Read: Retrieve all records or specific records</li>
  <li>Update: Modify existing records</li>
  <li>Delete: Remove records from the database</li>
</ul>
<h4>Testing with Postman</h4>
<p>Set the base URL to http://localhost:3002</p>
<br>
<img src="https://github.com/user-attachments/assets/9af4f9a0-c433-452e-82f4-a6fb8301e1ee">
<br>
<ul>
  <li>GET /Department</li>
  <br>
<img src="https://github.com/user-attachments/assets/bcfc634e-5c1d-429f-9d0f-3c72ce6d93bf">
<br>
   <li>GET /employee</li><br>
<img src="https://github.com/user-attachments/assets/a53a72e6-617d-43b7-b8b7-1c675d5068ca">
   <li>GET /project</li><br>
<img src="https://github.com/user-attachments/assets/ae00606f-0aa8-4f18-ad21-25e86f527b29">
 <br>

  


</ul>
 
  </body>
</html>














