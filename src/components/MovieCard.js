import React from 'react'
import { Card, Image, GridColumn } from 'semantic-ui-react'

const MovieCard = ( { movie } ) => (
  <GridColumn>
  <Card>
    <Image src= { movie.cover } wrapped ui={false} />
    <Card.Content>
      <Card.Header> { movie.title } </Card.Header>
    </Card.Content>
  </Card>
  </GridColumn>
)

export default MovieCard