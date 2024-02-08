module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/equivalence-v1-complex/query1', 
        handler: 'equivalence-v1-complex.findEquivalencesBySourceAndTarget',
      }
    ]
  }