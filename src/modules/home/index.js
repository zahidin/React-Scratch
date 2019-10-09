import React from 'react'

const Index = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            This is Home<br />
            {process.env.APP}
        </div>
    )
}

export default Index