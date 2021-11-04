# DoWhile2021 NodeJS

<p align="center" >
    <img alt="App printscreen" width="950" src="docs/dowhile2021_node.png"/>
</p>

# About The Project

The project is a `nodejs` backend provider to a message center in `reactjs`.

The following technologies were used:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Socket.io](https://socket.io/)

## Resources

- Routing with `Express.js`
- Relational database of users and messages with `Prisma`
- Real time connection for sending and receiving messages with `Socket.io`
- Authentication flow with `Github OAuth` and `JWT web token`

## Run the Project

Run the following codes:

```bash
git clone https://github.com/leomiranda/dowhile2021-backend-nodejs.git
cd dowhile2021-backend-nodejs
```

- Create a new OAuth app on your Github (https://github.com/settings/developers)
- Copy your `Client ID` and `Client Secret`
- Create a random key for `JWT_SECRET`
- Fill the environment variables `.env` with your project data, according to the `.env.example` file

Run `dev` script:

```bash
yarn
yarn dev
```

Now your server is running on [`localhost:4000`](http://localhost:4000).
