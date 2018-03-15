# Github Insights Frontend

## Introduction

This document provides a homework challenge for candidates for Frontend Software Engineering positions within the 
Advanced Analytics Group at Maersk Digital.  
The goal is to see how you approach a problem, how you design, structure, implement, and deliver a solution, and how you discuss its details in front of a technical audience.

### General guidelines

* Your code and other deliverables must be provided as a link to a private git repository.
* The delivery must include a markdown readme file with concise and complete instructions on how to use (unpack, build, install, execute, access, etc.) your service.
* You must provide additional documentation (architecture, structure of the code base, discussion of the technology stack choices you made, etc); the format is up to you, but ideally it will be some for of source code (e.g., markdown). 
* Your solution must only be accessible to you and us; please make sure it is not available for a wider audience, especially not publicly.
We would like to reuse the challenge, please help us keeping it fair!

## The task

Please design and implement a Single-page application (SPA) that will let us display and visualize data for any given 
Github user.
To get the data, you'll need to use the public Github API: https://developer.github.com/v3


## Specifications

You are expected to meet all the minimal requirements.
Extra credit will be given for meeting any of the additional requirements.

The application should consist of at least:

* A logging screen: A screen where any Github account can login.  
To authenticate with GitHub, the user should provide a 
Github username and password or a personal access token. After logging in, the user should be shown a home screen.
* A home screen: After logging in, the home screen should contain a search field that can be used to find any github 
profile. 
The search field should aim at implementing a 'search-as-you-type' suggestion functionality, ideally with slight delay (e.g., 500ms) to avoid sending requests with every single stroke of a key.
Besides the search field, the home screen should also display basic information about the logged in user.
* Profile screen: After choosing a specific Github profile, the user should be presented with the basic profile info 
about the chosen github profile.

Furthermore, the screen should display:
* A bar chart showing the number of commits per day (Read docs: https://developer.github.com/v3/repos/statistics/).
* A bar chart showing the top 10 most frequent usernames from the users activities (This endpoint: /users/:username/received_events/public).

You'll need at least 90 items, which requires pagination.


### Minimal requirements

Your delivery must:

* include a concise description of the design (architecture) of your solution;
* contain a discussion of the architecture, alternative designs, and justifications for choosing the one you chose;
* include complete code needed to execute the solution;
* include a suite of tests covering all key components of your solution; 
* use a build system with targets for building, testing, deploying, and executing the solution;
* either contain all additional dependencies (e.g., external libraries, if you use any) or handle the download and installation thereof as needed (ideally, as part of the build process);
* include a concise instruction on how to start and use the solution;
* provide a REST API for monitoring and diagnostics of the application (checking the status, downloading logs, etc.);
* enable an admin account for which there would be an additional screen displaying log data from interactions with 
github (complete listing of queries from individual users, and aggregate query statistics such queries per day, 
geographic location of queried profiles, IP-based geographic location of querying users, etc).

It should be possible to:

* start your solution as a single-process service on a local machine;
* interact with your solution in the browser;
* terminate the running solution in an elegant way.

For deployment, your solution should be containerised: 

* for each component of the solution that runs as separate service, use an image to start a container for the service (for docker images, provide Dockerfiles);
* if your application includes more than one service, provide a way to orchestrate the composite app (e.g., a docker compose script);
 
There should be no requirement to install anything on the host other than what is needed to provide an environment for executing containers (e.g., docker machine).   
All other dependencies should be handled within the images by a package manager corresponding to your code (maven, gradle, npm, etc.). 

For implementation, you should use HTML5, CSS3, and one of Angular (ideally version 2), React, or Vuejs.
Additional modules or libraries, or choice of other frameworks/languages, should be clearly explained and justified.

Consider making your solution deployable to the cloud: either deploy it and provide urls to the running service, or have your build system provide a target for deploying the solution to a cloud provider of your choice. 
