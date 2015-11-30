# Auth0 AD/LDAP Connector

Small tool to monitor the health of your Auth0 AD/LDAP Connector

## Configuration

In the `config.json` file, set the following values:

 - `AUTH0_DOMAIN`: Your Auth0 account.
 - `AUTH0_GLOBAL_CLIENT_ID`: Your Global Client Id
 - `AUTH0_GLOBAL_CLIENT_SECRET`: Your Global Client Secret
 - `AUTH0_CONNECTION`: Name of your AD/LDAP Connection

> You can get your Global Client Id/Secret here: https://auth0.com/docs/api/v1

## Running the tool

 1. Install Node.js 4.0 or higher: https://nodejs.org/en/download/
 2. Clone/Download this repository
 3. Run `node index` from the repository's directory
