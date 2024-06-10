import React from 'react'
import BankerNavbar from '../bankerNavbar'
import { Autocomplete, Button, MenuItem, TextField } from '@mui/material'

const LandinngComponent = () => {
    const loanName =["personal Loan","homeLoan","bikeLoan","businessLoan"]
  return (
    <>
        <BankerNavbar/>
        <h1>Banker Landingpage</h1>
        <form>
            <div>
                <TextField
                id="outlined-textarea"
                label="Count"
                name='Count'
                placeholder="Count Of in Nums"
                multiline
                size="small"
                margin="normal"
                />
            </div>
            <div>
            <TextField
          id="outlined-select-currency"
          select
          label="Loans"
          name='LoanName'
          defaultValue="loans"
          helperText="Please select your Loan"
          size="small"
          margin="normal"
        >
          {loanName.map((option,i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
            </div>
            <div>
            <Button
              variant="contained"
              color="success"
              size="small"
            //   onClick={handleBankerLogin}
            >
              lOGIN
            </Button>
          </div>
          <div>
          <Autocomplete sx={{ width: 150 }}
        id="free-solo-demo"
        loans
        size='small'
        options={loanName.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="loans" />}
        >
        </Autocomplete>
          </div>
        </form>
    </>
  )
}

export default LandinngComponent