import React from 'react'

const CheckoutError = (props) => {



    const { error } = props;

    const styles = {
        border: '1px solid black',
        width: '100%',
        height: 'fit-content',
        fontSize: '14px',
        color: '#BE0A16',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '500'
    }

  return (
    <div style={styles}>
        {error}
    </div>
  )
}

export default CheckoutError;