# Webonise.co.uk official source code

Create a simple portfolio website like [http://www.webonise.co.uk](http://www.webonise.co.uk) driven by various APIs to provide data.

Built using `MeteorJs`.

This is very early of public release of this project, I am going to improve docs by time.
If you have any question or issues in using, feel free to open a issue.

#### Apis used

- Flikr
- Instagram
- Facebook
- Mailgun
- Github
- Pocket
- Twitter
- Stackable
- Jawbone Up

## Requirements

- NodeJs
- MongoDB
- MeteorJs (on development machine only)


## Setup for development

```bash
meteor npm install
```

### To run the app

```bash
npm start
```

## To deploy

`meteor build .`

Then extract tar file and run following:

export MONGO_URL='MONGO-URL-HERE' sudo node main.js`

## Colors:

Primary Color: #3f51b5 indigo
Primary Dark Color: #303f9f indigo darken-2
Primary Light Color: #c5cae9 indigo lighten-4
Accent Color: #ff4081 pink accent-2
Dark Accent Color: #f50057 pink accent-3
Dark Text Color: #212121
Light Text Color: #777777
White Color: #FAF9FD
Border Color: #DDDDDD

## Meteor Up Deployment

Go to directory: `./deploy`, and type following:

```
mup deploy
```

For more details read: [https://github.com/kadirahq/meteor-up](https://github.com/kadirahq/meteor-up)

### Scripts

To lint:

```bash
npm run lint
```

## APIs usage

Get API credentials and update file `./deploy/settings.json`

### Flikr

todo write docs

### Instagram

To get instagram access token use: [http://instagram.pixelunion.net/](http://instagram.pixelunion.net/)

### Facebook

todo write docs

### Mailgun

todo write docs

### Kadira

todo write docs

### Github

todo write docs

### Pocket

todo write docs

### Twitter

todo write docs

### Stackable

- Login at [http://www.stackable.space](http://www.stackable.space)
- Create free account
- Create stack and note down its stackID
- Create container and note down its IDs

### Jawbone Up

todo write docs