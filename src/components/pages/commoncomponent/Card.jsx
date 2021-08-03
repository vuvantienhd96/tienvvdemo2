import React, { Component } from 'react'
import { Card, CardActionArea,
    CardContent, Typography, CardActions, Button,
   
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

import heard from './../../../assets/svg/visibility_black_24dp.svg'

export default class CardCustum extends Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props){
    //     super(props);
    // }
    
    render() {
        const { obj } = this.props;
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {obj.title} 
                            <Icon><img src={heard}/></Icon>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {obj.title.userId}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
