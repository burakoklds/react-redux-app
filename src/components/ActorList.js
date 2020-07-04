import React from 'react'
import PropTypes from 'prop-types'
import { Card, GridColumn , Grid} from 'semantic-ui-react'

const ActorList = props => {
    return (
        <div>
            <Grid stackable columns={2}>
                {
                    props.actors.map(( actor , key) =>
                        <GridColumn key={key}>
                            <Card>
                                <Card
                                    image={actor.photo}
                                    header={actor.name}
                                    extra={actor.description}
                                />
                            </Card>
                        </GridColumn>
                    )
                }
            </Grid>
        </div>
    )
}

ActorList.propTypes = {
    actors: PropTypes.array.isRequired
}

export default ActorList;
