# hamiltoncitycommunity.org
The website of the Hamilton City Community Services District.


## Getting started

1. Clone repository
2. `npm install`
3. `npm run use:dev`

# Development

## Changing Targets

Currently there are two environments: `development` and `production`.
They're represented by two different firebase projects `hamiltoncitycommunity--prod` and `hamiltoncitycommunity--dev`.

| firebase project              | environment           | command               |
| ---                           | ---                   | ---                   | 
| `hamiltoncitycommunity--dev`  | `development`         | `npm run use:dev`     |
| `hamiltoncitycommunity--prod` | `production`          | `npm run use:prod`    |


this command will update the client side script to be in the context of the correct environment, as well as the database.

## Deployments

Deployment commands

| firebase project              | environment           | command               |
| ---                           | ---                   | ---                   | 
| `hamiltoncitycommunity--dev`  | `development`         | `npm run deploy:dev`  |
| `hamiltoncitycommunity--prod` | `production`          | `npm run deploy:prod` |

