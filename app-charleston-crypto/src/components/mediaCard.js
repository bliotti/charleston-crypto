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
    width: 350,
    margin: 20,
    paddingBottom: 10,
    borderRadius: 20
  },
  media: {
    height: 250
    // flexBasis: 'auto'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

const li = classes => company => (
  <Card className={classes.card} key={company._id}>
    <a href={company.site}>
      <CardMedia
        className={classes.media}
        height="250"
        image={`${company.img}`}
        title={company.name}
      />
    </a>

    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {company.name}
      </Typography>
      <Typography component="p">{company.description}</Typography>
    </CardContent>
    <CardActions
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <Button
        style={{ padding: 10 }}
        variant="raised"
        size="small"
        color="primary"
        href={company.site}
      >
        Contact
      </Button>
      <Button
        style={{ padding: 10 }}
        size="small"
        variant="contained"
        color="primary"
        component={Link}
        to={`/companies/${company._id}`}
      >
        Edit
      </Button>
    </CardActions>
  </Card>
)

const MediaCard = props => {
  const { classes, companies } = props
  const styledLi = li(classes)
  return <div className={classes.grid}>{map(styledLi, companies)}</div>
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
