# API-Project
About trevbnb

trevbnb is a full stack application using React, Redux, Express, and Sequelize. 
Deployed on Heroku - https://airbnbproj.herokuapp.com/

## Site Info

[DB Schema](https://github.com/Trevor1798/API-Project/wiki/DB-Schema)
[Api Docs](https://github.com/Trevor1798/API-Project/wiki/Api-Documentation)
[Features](https://github.com/Trevor1798/API-Project/wiki/Features:-Spots-and-Reviews)
[Redux Store Shape](https://github.com/Trevor1798/API-Project/wiki/Redux-store-shape)


## Technologies Used 


## This application was built with the following technologies:
  
   * Javascript
   * Express
   * Sequelize
   * React
   * Redux
   * HTML
   * CSS
   * PostgresSQL
    
    
# Features:
    
## Home:
![airbnbhome](https://user-images.githubusercontent.com/102115797/192163304-e15d8749-c8a3-4cbf-ad6c-40e3d8f6aff0.PNG)
    
    
## Spot Detail:
![spotdetail](https://user-images.githubusercontent.com/102115797/192163359-6ba625a6-4098-40a3-a96d-4ee2f228560f.PNG)

    
## Spot Detail pt2:
![spotdetailpt2](https://user-images.githubusercontent.com/102115797/192163382-06fd4fe8-2642-4427-abd2-debd740e889d.PNG)

## Reviews:
![reviewdetails](https://user-images.githubusercontent.com/102115797/192163426-2e6f1541-091b-4e8d-a407-f07e44f5572f.PNG)

    
 ## Locally
If you would like to launch the site locally please do the following:

Clone this repo using a terminal by going to a directory where you would like to download and typing git clone git@github.com:Trevor1798/API-Project.git.
* Alternatively, you may download the zip file and extract it to a folder on your computer.
 Go into the 'backend' directory and in the terminal type npm install.

Create a .env in your 'backend' directory and add your own values to these variables: PORT, DB_FILE (location of the database), JWT_SECRET, and JWT_EXPIRES_IN

Still in your 'backend' directory, load the migrations database using npx dotenv sequelize db:migrate.

Still in you 'backend' directory, load the seed data into your database using npx dotenv sequelize db:seed:all.

Type npm start to start your backend.

Open up a second terminal, go into the 'frontend' directory and in the terminal type npm install.

Type npm start to start your frontend. If you have Google Chrome, this should automatically launch the browser and direct you to localhost:3000. If it did not launch automatically, manually open up a browser and go to localhost:3000.
    
    
