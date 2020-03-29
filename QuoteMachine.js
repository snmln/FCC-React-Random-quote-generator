import React from'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Button, CardActions, CardContent } from '@material-ui/core';

//import Button from './Button';
const QuoteMachine =({assignNewQuoteIndex, selectedQuote})=>(
    <Card>
        <CardContent>
            { 
        selectedQuote ? 
        (
            <Typography>
                {selectedQuote.quote} - {selectedQuote.author}

            </Typography>
        ) :null
    }
        </CardContent>
    <CardActions>
    <Button size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
    <IconButton
    target="_blank"
    //href={`https://twitter.com/intent/tweet/?texts=${selectedQuote.quote}&hashtags=thewebdevcoach`}
    >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
    </IconButton>
    </CardActions>
    </Card>
);

export default QuoteMachine;