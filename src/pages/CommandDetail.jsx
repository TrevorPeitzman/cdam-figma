import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { Container, Typography, Box, Button } from '@mui/material';
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
    const [commandID, setCommandID] = useState([])

    let params = useParams(); // This is how you collect the information put in the url, in this case the command id

    async function getCommandName() {
        try {
            const commandNameIn = await API.graphql(graphqlOperation(getChecklist, { id: params.id }))
            setCommandName(commandNameIn.data.getChecklist.commandName)
            setCommandID(commandNameIn.data.getChecklist.id)
            console.log(commandNameIn.data.getChecklist.commandName) //TODO: this executes three times for some reason...  this may waste money unnecessarily
            console.log(commandNameIn.data.getChecklist.id) //TODO: this executes three times for some reason...  this may waste money unnecessarily
        } catch (err) { console.log('error fetching Checklists') }
    }

    // const test = getChecklist(params.id)


    getCommandName();

    return (

        <Box sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>
            <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>

                <Typography variant="h4" component="h3" gutterBottom >
                    {commandName}'s Checklist Status
                </Typography>

                <ChecklistItemCollection />

                {/* <button onClick={getCommandName}>View Checklists</button> */}


            </Container>
            <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>
                <Button >Button</Button>
            </Container>
        </Box>
    );
}

export default CommandDetail;