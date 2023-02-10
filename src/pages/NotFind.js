import { Button } from '@mui/material';
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { BasePage } from '../components/BasePage'
import { ContentPart } from '../components/ContentPart';
export const NotFind = () => {
    const pageInfo = {
        title: 'Not Find'
    };
    const navigate = useNavigate();
    const goCoverBtn = useCallback(() => navigate("/cover", { replace: true }), []);
    return (
        <BasePage  {...pageInfo} NotTopBarButton>
            <ContentPart title={"Not Find"} sx={{ overflow: 'scroll' }}>
                <Button
                    variant="contained"
                    sx={{
                        background: "linear-gradient(180deg, rgb(255, 196, 0) 10%, rgb(246, 143, 40) 100%)",
                        fontWeight: 'bold'
                    }}
                    onClick={goCoverBtn}
                >
                    Go to Cover Page
                </Button>

            </ContentPart>
        </BasePage >
    )
}
