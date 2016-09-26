# MotorMatchAPI

## Information
This API is used for the MotorMatch app.  Simple design using Mongoose and Express.  This can be ran locally with a vagrant build (instructions below).  This API is deployed on Heroku for detached device use.

---

## Instructions

```
vagrant up
```

## Development

```
vagrant ssh
cd /vagrant
npm run stop
npm run watch
```

## Development with zero vehicles

```
npm run watchb
```

## Development with nullified values

```
npm run watchn
```

