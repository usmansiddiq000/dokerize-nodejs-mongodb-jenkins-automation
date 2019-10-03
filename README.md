 Created by Muhammad Usman Siddiq
# dokerize-nodejs-mongodb-jenkins-automation

```
git clone https://github.com/usmansiddiq000/dokerize-nodejs-mongodb-jenkins-automation.git
```

inside project folder run cimmand
```
npm install
```
```
Build docker image
```
docker-compose build

after that spin up Docker container
```
docker-compose up
```
Now Nodejs and mongodb container will be running on your machine, talking to each other.
To check that run command

```
docker ps -a
```
it will list all container running.



# Without docker composer  

To run project without docker composer ,first need to run mongodb , use this command 
to spin up mongodb container.

```
docker run -d --name mongodb mongo
```
default port is 27017.

inside project folder build docker image.
```
docker build  -t <your_docker_username>/nodeapp .
```
spin up and connect node container with mongodb

```
docker run -d -p 3000:3000 --link mongodb:mongodb --name nodeapp <your_docker_username>/nodeapp
```
# Automation
 inside folder there is "deploy" executable file which can be change according to your needs
 and using jenkins deployment can be automated.
 
 

