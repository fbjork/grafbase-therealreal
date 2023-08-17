import { config, connector, g } from '@grafbase/sdk'

const trr = connector.GraphQL({
  url: 'https://api.therealreal.com/graphql',
  headers: headers => {
    headers.set('api-key', g.env('TRR_API_KEY'))
  }
})

g.datasource(trr)

export default config({
  schema: g,
  cache: {
    rules: [
      {
        types: ['Query'],
        maxAge: 60,
        staleWhileRevalidate: 60
      }
    ]
  },
  auth: {
    rules: rules => {
      rules.public()
    }
  }
})
