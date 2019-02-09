import React from 'react'
import { Link } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout'

const IndexPage = () => (

  <Layout>
    <Card>
      <CardContent>
        <h1>This is title</h1>
        <CardActions>
          <Button>
            <Link to="/page-2/">Go to page 2</Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </Layout>
)

export default IndexPage
