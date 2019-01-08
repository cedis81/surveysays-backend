### Survey Says!

----

Survey says app allows users to create a survey questions and get answers for them. A signed-in user creates a survey and can be able to update or delete their own surveys. All signed-in users can only view a survey and have an option to answer them.

### Group Members
* [Hoa 'Tommy' Le](https://github.com/Tommyle90)

* [Cedric Hom](https://github.com/cedis81)

* [Bezawit Gebru](https://github.com/bbgweb)


### Links
* [Backend App](https://github.com/cedis81/surveysays-backend)
* [Heroku Site](https://stormy-beyond-55396.herokuapp.com/)
* [GitHub Repo](https://github.com/Tommyle90/surverysays-frontend)
* [Survey Says Website](https://Tommyle90.github.io/surverysays-frontend)


### Technologies used
- Javascript
- Express JS
- MongoDB
- Mongoose


### API
### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Back-end
### Survey


| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/surveys`             | `surveys#create`  |
| GET    |  `/surveys`            |  `surveys#index`  |
| GET    |  `/surveys/:id`        |  `surveys#show`   |
| PATCH  | `/surveys/:id`         | `surveys#update`  |
| DELETE | `/surveys/:id`         | `surveys#destroy` |

### Answer


| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/surveys/:id/answers`              | `answers#create`  |
| GET    | `/surveys/:id/answers`              |  `answers#index`  |

### Planning Process
We used scrum to plan our project and work closely. We first did the ERD and wireframes and broke out the specific tasks that need to be done. We delegate the works to each of us and whenever there is a problem we come together and try to solve it or put out an issue queue. At the beginning and end of the day we discuss the works that are done and needs to be done after. Team work made this app work!!!

### Development Process
First we created models and routes for survey and answer. A user has many surveys and a survey belongs to a user. A survey has also has many answers and an answer belongs to a survey. On the survey there is a reference for the owner, which would help tries to match which survey belongs to which user. The answer has a user and a survey as a reference, which helps to manage who answered a specific survey. Scripts are then created for surveys and answers.



### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a survey with a title and possible answers.
- As a signed in user, I would like to update my survey's title and possible answers of a survey.
- As a signed in user, I would like to delete my survey.
- As a signed in user, I would like to see all surveys and its answers.
- As a signed in user, I would like to take a survey.


### Entity Relationship Diagrams (ERD)
![ERD Image](https://i.imgur.com/xfgq7Gd.jpg)


### Future Goals
- A user can only be able to answer a survey once and hide the submit answer button.
- Each live survey should be hosted at a unique, randomly-generated URL.
