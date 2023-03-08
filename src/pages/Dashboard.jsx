import React from 'react';
import {
    ChecklistCreateForm,
    ChecklistItemCreateForm
} from '../ui-components';
import {
    Box,
    Typography,
    Container
} from '@mui/material';

function Dashboard() {
    return (
        <main>
            {/* Hero unit */}

            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Dashboard
                    </Typography>
                </Container>

                <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>

                    <Typography
                        component="h2"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Add New Command
                    </Typography>

                    <ChecklistCreateForm />

                </Container>
                
                <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>

                    <Typography
                        component="h2"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Add New Item
                    </Typography>

                    <ChecklistItemCreateForm />

                </Container>
            </Box>
        </main>
    );
}

export default Dashboard;