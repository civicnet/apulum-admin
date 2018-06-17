# Kármán CMS
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcivictechro%2Fapulum-admin.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcivictechro%2Fapulum-admin?ref=badge_shield)


Just a codename.

> _The Kármán line, or Karman line, lies at an altitude of 100 km (62 mi; 330,000 ft) above Earth's sea level and commonly represents the boundary between Earth's atmosphere and outer space._

### Stage 

`Note: This project, 1% finished. It's in a very early development phase so expect drama.`

A local government CMS, built on a modern stack, with a focus on migrating tedious offline processes online. 

### Roadmap 

`Coming soon`


### Built with

- Node
- yarn
- Typescript
- React
- Mapbox

### Install locally

```
$> git clone https://github.com/civictechro/apulum-admin.git
$> cd apulum-admin
$> yarn
```

**NOTE:** There's no mock in place for the [Kármán API](https://github.com/civictechro/apulum-graphql-api), so you should go and check that out first since it needs to be up and running in order to be able to work on the frontend.

We have the API schema stored [as a .json file](https://github.com/civictechro/apulum-admin/blob/master/src/schema.json) that we use for Typescript typings. Theoretically, it can be used to provide mock answers in the frontend. 

Pull requests are welcome.

### Config 

```
$> cp .env_sample .env.development 
$> vim .env // add your Mapbox token here
```

### Run

```
$> yarn start 
```

### Tests

Tests are written with Jest, you'll find them in `__tests__` folders or names `foo.test.ts`.

```
$> yarn test
```

### GraphQL Integration

#### Add Typescript typings for queries:

```
$> apollo-codegen introspect-schema ${REACT_APP_GRAPHQL_HOST} --output src/schema.json
$> apollo-codegen generate src/**/**/*.tsx --schema src/schema.json --target typescript --output src/types/graphql-types.ts
```

This should be run automatically when a `.tsx` file is touched, right now it's being ran manually. 

#### Handling fragments 

Since we use union and interface fragment queries, and Apollo has no knowledge of the Graph, we need to feed this information to the Apollo cache, in `index.ts`, since the default heuristic fragment matcher doesn't work for these cases:

```
import { fragmentMatcher } from './utils/fragmentMatcher';

const client = new ApolloClient({
  // config
  cache: new InMemoryCache({ fragmentMatcher })
});
```

The matcher uses a `json` file which is generated from the graph by running `./src/utils/makeIntrospectionFragmentTypes.js`. 

**TODO:** Run this auto-magically in the postinstall step, or at build time.

#### Why fragments

Apollo uses a normalized cache, splitting out each item with an id into its own entity in the cache. So it makes sense that mutations would be able to return a `MaybeEntity` union type which may be an error, or it may be the mutated entity:

```
type Foo {
  id
  bar
}

type Error {
  path
  message
}

type MaybeFoo = Foo | Error

Mutation {
  makeFoo(bar): [MaybeFoo!] 
}
```

----------

**Made with :heart: & :coffee: by [CivicTech România](https://civictech.ro/)**


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcivictechro%2Fapulum-admin.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcivictechro%2Fapulum-admin?ref=badge_large)