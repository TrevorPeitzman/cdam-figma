import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { Container, Typography, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getChecklist } from '../graphql/queries.js'
import {
    ChecklistItemCollection
} from '../ui-components';

// const oneTodo = await API.graphql(
//     graphqlOperation(queries.getChecklist, { id: useParams().id })
// );

function CommandDetail() {
    const [commandName, setCommandName] = useState([])

    let params = useParams(); // This is how you collect the information put in the url, in this case the command id

    async function getCommandName() {
        try {
            const commandNameIn = await API.graphql(graphqlOperation(getChecklist, { id: params.id }))
            setCommandName(commandNameIn.data.getChecklist.commandName)
            console.log(commandNameIn.data.getChecklist.commandName) //TODO: this executes three times for some reason...  this may waste money unnecessarily
        } catch (err) { console.log('error fetching Checklists') }
    }

    // const test = getChecklist(params.id)


    getCommandName();

    return (

        <Container maxWidth="sm">

            <Typography variant="h5" component="h2" gutterBottom >
                {commandName}'s Checklist Status
            </Typography>

            <ChecklistItemCollection />

            {/* <button onClick={getCommandName}>View Checklists</button> */}


        </Container>
    );
}

export default CommandDetail;