<p align="center"><img src="https://github.com/MeeReak/backend-smakchet/assets/156150555/60021f68-ae1a-4ede-b46e-6d3284054cd2" width="120px"></p>
<h1 align="center">Smakchet</h1>

<details>
  <summary>Table of Contents</summary>

- [About The Project](#about-the-project)
- [Strategic Overview](#strategic-overview)
    - [Business Model Canvas](#business-model-canvas)
    - [Product Vision](#product-vision)
    - [Vision and Mission](#vision-and-mission)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Services](#services)
- [Usage](#usage)
- [UI Design](#ui-design)
- [Contact](#contact)

</details>

## About The Project
In a world where community engagement and social responsibility are more important than ever, 
Smakchet aims to connect volunteers with event hosts efficiently. The platform provides two types of 
users: normal users who can view and apply for events, and hosts who can post events and manage applications.
This project is designed to simplify the process of finding and managing volunteer opportunities,
making it easier for everyone to contribute to their communities.

Our platform leverages advanced technologies to create a seamless and intuitive experience
for both volunteers and hosts. With user-friendly interfaces, robust search functionalities, 
and secure communication tools, we make it easy for volunteers to find events that match their interests and for hosts to find the help they need.

Join us in creating a more engaged and connected community, one volunteer opportunity at a time.

## Strategic Overview
### Business Model Canvas
You can view our detailed Business Model Canvas [here](https://www.canva.com/design/DAGGq8O8uUI/45g4IzFRbRpebs2WNCMwvA/edit?utm_content=DAGGq8O8uUI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
### Product Vision
Our detailed Product Vision document can be found [here](https://www.canva.com/design/DAGGG35kASc/aQ6uuIZV51Ge6TS-U3WlZg/edit?utm_content=DAGGG35kASc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
Our vision and mission provide the foundational direction for Volunteer Connect:
### Vision and Mission
- **Vision**: "Connect volunteers with impactful opportunities, fostering community engagement and personal growth through meaningful volunteer experiences."
- **Mission**: "To provide a seamless platform where organizers can post volunteer opportunities and volunteers can easily find and apply for roles that match their skills and interests."
## Built With
This section lists major frameworks and libraries used in the Volunteering Platform project:

- ![figma][figma](for UX/UI design)
- ![Next.js][Next.js]
- ![Node.js][Node.js]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Express][Express.js]][Express-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- **Storybook**
- **Tailwind CSS**
- **Jest**

## Project Structure
```
smakchet-monorepo/
├── apps
     ├── frontend
├── packages
     ├── api-gateway
     ├── application
     ├── auth
     ├── event
     ├── notification
     ├── user
     ├── volumes
├── .gitignore
├── package.json
├── docker-compose.yaml
├── Readme.md
```

## Getting Started
### With Docker
Follow these steps to set up this project locally using Docker.
#### Prerequisites
Ensure you have the following software installed before proceeding:
<br>
[Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### setup steps
1. Clone Project
Open your terminal and run the following command to clone the project repository:
```bash
git clone https://github.com/MeeReak/smakchet-monorepo.git
```
2. Navigate to **smakchet-monorepo** folder:
```bash
cd smakchet-monorepo
```
3. Build and run the Docker containers:
```bash
yarn start:build
```
After completing these steps, your project will be successfully set up locally!

other command
- **Stop Docker**
```bash
yarn stop:docker
```
## Services
- auth service :  a secure and scalable solution for user authentication and management.
- user service : Manage user accounts
- event service : CRUD operator and manage events
- application service : manage volunteer who apply for events
- notification service : Handle notifications and communication within the system.

  ## Usage
Our platform supports two types of users, each with distinct features and functionalities:

### Normal User
- **Explore**: Browse through events and get familiar with the platform.
- **Search**: Find events without registering.

### Volunteer
- **Browse Events**: Use the search feature to find events based on your interests and availability.
- **Apply for Events**: Submit applications for events you're interested in.

### Event Host
- **Create Events**: Post new events and provide details such as time, location, and requirements.
- **Manage Applications**: View applications, and accept or reject candidates.
- **Communicate**: Use the platform’s messaging system to interact with volunteers.
- **Track Attendance**: Monitor which volunteers have been accepted and their attendance status.

## UI Design
You can view our detailed UI design and some flow [here](https://www.figma.com/design/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?t=UgDDxAnRQFHbTo4Q-0)
## Contact
Team Email( smakchet.team@gmail.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Vath-Song99/learnwithkru-monorepo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Vath-Song99/learnwithkru-monorepo/forks
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/Vath-Song99/learnwithkru-monorepo/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Vath-Song99/learnwithkru-monorepo/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[Figma]: https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
[Figma-url]: https://www.figma.com/design/ij4jlwjEniD1K69xLpaSt0/KRU-UI?m=dev&node-id=13-2&t=JM8rD22nxHWmXm5T-1


