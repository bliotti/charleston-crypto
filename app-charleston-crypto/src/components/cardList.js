import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { connect } from 'react-redux'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { map } from 'ramda'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}

const li = (classes, history) => company => (
  <Card className={classes.card} key={company._id}>
    <CardMedia
      className={classes.media}
      image="/static/images/cards/contemplative-reptile.jpg"
      title={company.name}
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {company.name}
      </Typography>
      <Typography component="p">{company.description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        <a href={company.site}>Site</a>
      </Button>
      <Link to={`/companies/${company._id}`}>
        <Button size="small" color="primary">
          Edit
        </Button>
      </Link>
    </CardActions>
  </Card>
)

const MediaCard = props => {
  const { classes, companies, history } = props
  const styledLi = li(classes, history)
  return <React.Fragment>{map(styledLi, companies)}</React.Fragment>
}

const mapStateToProps = state => {
  return { companies: state.companies }
}

const mapActionsToProps = dispatch => {
  return {}
}
const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(MediaCard))
