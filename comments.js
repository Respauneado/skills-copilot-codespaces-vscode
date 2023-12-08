// Create a web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Read the port from the environment variables
// 8. Listen on the port
// 9. Make sure the server is working

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const comments = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet, justo vel condimentum ultrices, purus massa fringilla eros, ac gravida felis magna id dui. Nulla facilisi. Nullam ac semper turpis, nec dapibus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec lectus nec odio elementum scelerisque. Proin at lacus nec odio volutpat aliquam. Morbi interdum, nisi vitae maximus cursus, felis leo bibendum erat, vitae placerat velit neque eget urna. Donec euismod, mauris sit amet pellentesque lacinia, massa velit sagittis sapien, in aliquet velit odio quis nulla. Donec ut augue eget elit fermentum pretium. Quisque nec velit eget tellus convallis pretium. Phasellus auctor tellus nec lorem faucibus, ac vehicula libero dapibus. Donec auctor, nunc quis blandit cursus, orci est tempor ipsum, et viverra magna massa ac lectus. Quisque at tempor nisl. Quisque et bibendum sapien.',
        }
    ];
