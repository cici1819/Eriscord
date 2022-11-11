# Preflight
Markdowns for planning features, APIs, etc


# Feature List :
### Eriscord, a discord clone, is the easiest way to talk over text. Talk, chat, hang out, and stay close with your friends and communities.

## 1. New account creation, log in, log out, and guest/demo login
* Users can sign up, log in, and log out.
* Users can use a demo login to try the site.
* Users can't use certain features without logging in (like create a server, a channel or send messages).
* Logged in users are directed to their direct message page.
* Logged out users are directed to a home page and need to login or signup.

## 2. Server
* Logged in users can create new servers.
* Logged in users can edit and delete their own servers.
* Each user can view all servers they joined.

## 3. Channel
###  Each channel blongs to a server
* Server owners can create a new channel.
* Server owners can edit and delete their own channels.
* Server members can post messages to channels.

## 4. Channel Messages
* Server members can post messages to channels.
* Messages are visible in channels.

## 5. Direct Messages
* Users can send direct messages to other users.
* Messages are visible in DM.


# API routes:
## USER AUTHENTICATION
### POST/user/new
* Add new user(signup)
### POST/session/new

## MESSAGES, DMs (CR)
### GET /:channelId/messages
* Loads all messages for a given channel
### POST/:channelId/messages
* Adds a message to a given channel

## SERVERS(CURD)
### GET/:UserID/joinedServers
* Return all the servers a given user belongs to
### POST/Servers/new
* Create new server
### PUT/Servers/:id
* update Server info
### DELETE/Servers/:id
* Delete a specific server

## CHANNELS(CURD)
### GET/:channelId
* loads a given channel's info
### POST/:ServerId/new
* Create a new channel on a server
### PUT/:ServerId/ChannelId
* Update a specific channel's information
### DELETE/:serverId/ChannelId
* Delete a server from a channel


# Web routes:
### landing page: '/'
### directs you to login or sign up
### Get channel from public server: 'channels/:serverId/:channelId'
### all servers auto direct you to the first channel


# User Stories:
## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to Eriscord home page.
      * So that I can easily log out to keep my information secure.

## Server

### Create Server

* As a logged in user, I want to be able to create new server.
  * When I click the add new server button:
    * I can create and submit a new server form by providing a server icon and name.


### Viewing Server

* As a logged in user, I want to be able to view all servers I joined through server menu

* As a logged in user, I want to be able to view a specific Server and its associated channels.
  * When I'm on the `channels/:serverId/:channelId` page:
    * I can view the content of all the channel messages.
      * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the server.

### Updating Server

* As a logged in user, I want to be able to edit my Server by clicking the server icon at the top of the channel section.
  * When I'm on the update server form:
    * I can click "Setting" to make permanent changes to Server I have posted.
      * I can update the name and logo for my Server.

### Deleting Server

* As a logged in user, I want to be able to delete my Server by clicking the server icon at the top of the channel section.
    * I can click "Delete Server" to permanently delete a Server I have posted.

## Channel

### Create Channels

* As a logged in user, I want to be able to create new channels for a server i own.
  * When I click the add new channel button:
    * I can create and submit a new channel form by providing a channel name.


### Viewing Channels

* As a logged in user, I want to be able to view all channels for servers I joined through channel menu

* As a logged in user, I want to be able to view a specific channel.
  * When I'm on the `channels/:serverId/:channelId` page:
    * I can view the content of all the channel messages.
      * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the channel.

### Updating Channels

* As a logged in user, I want to be able to edit my channels by clicking the edit icon next to my channel name.
  * When I'm on the update channel form:
      * I can update the name and topic for my channel.

### Deleting Channels

* As a logged in user, I want to be able to edit my channels by clicking the edit icon next to my channel name.
  * When I'm on the update channel form:
      * I can click "Delete Channel" to permanently delete a Channel I have posted.


## Live chat:
### Viewing and sending channel messages

* As a logged in user, I want to be able to view and send channel messages for a specific channel.
    * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the channel.


## Direct messages:
### Viewing and sending direct messages

* As a logged in user, I want to be able to view and send direct messages to my friends.
    * i can send messages through Direct Messages server or Server members menu.
    * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the channel.
