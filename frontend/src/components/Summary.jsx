import React from 'react'
import BoxCard from './BoxCard'
import { Grid } from '@mui/material'

const Summary = () => {
  return (
    <div>
      <div className='head_district'><h1>Best 3 Village Heroes</h1></div>
      <div className='portion_one'>
        <Grid item className="box_one" xs={5} lg={3} md={2.5} sm={3.3}>
      <BoxCard>
        <h2>Box Card Title</h2>
        <p>This is some text inside the box card.</p>
      </BoxCard>
        </Grid>
        <Grid item className="box_one" xs={5} lg={3} md={2.5} sm={3.3}>
      <BoxCard>
        <h2>Box Card Title</h2>
        <p>This is some text inside the box card.</p>
      </BoxCard>
        </Grid>
        <Grid item className="box_one" xs={5} lg={3} md={2.5} sm={3.3}>
      <BoxCard>
        <h2>Box Card Title</h2>
        <p>This is some text inside the box card.</p>
      </BoxCard>
        </Grid></div>
    </div>
  )
}

export default Summary
