# GIT-HISTORY-APP
This is a React app that will allow you to see its own commits history

---
## Installation
Once you clone the repository, you would see this folder structure
```
-- git-history-app/
  |-- .git/
  |-- client/
  |-- server/
```


1. Make sure you have Node installed locally, use node version 16.13.2 (NVM recommended)
    ```bash
    nvm use 16.13.2
    ```

2. If you haven't used yarn before or you just installed node version 16, enable corepack to use yarn
    ```bash
    corepack enable
    ```


3. navigate to the client folder, to install the frontend with React
    ```bash
    cd client
    yarn install
    ```

4. Navigate to the server folder, to install the backend with NestJS

    ```bash
    cd ../server
    yarn install
    ```

---
## Usage

1. Create a .env file on the root of the server folder, in there you need to configure your MySQL database connection, if you dont have MySQL installed locally, you can use cloud based databases, por example heres a free one (https://www.freemysqlhosting.net/)

    - The needed environments variables to be set, can be seen on the `.env.example` file on the same folder
    - Note: setting the `GIT_AUTH_TOKEN` .env variable would allow you to get higher rates calling the Github API, you can use a PAT token (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 

2. After you configure your .env variables, on the server folder run the backend on development mode
    ```bash
    yarn start:dev
    ```

3. Then, on a new tab, run the React app on the client folder
    ```bash
    cd ../client
    yarn start
    ```


