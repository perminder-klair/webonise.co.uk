# Webonise.co.uk official code

### Running the app

```bash
npm install
meteor --settings settings.json
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

Go to directory: `private/cli`, and type following:

```
mup deploy
```

### Scripts

To lint:

```bash
npm run lint
```