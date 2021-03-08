import styled from 'styled-components'

const styles = styled.section`
    width: 50%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .data-section {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .field {
        width: 100%;
    }

    .field-input {
        width: 100%;
    }

    .new-bootle-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default styles