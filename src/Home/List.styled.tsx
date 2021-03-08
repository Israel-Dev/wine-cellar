import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.section`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .list-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .table-container {
        width: 100%;
    }

    .header-field {
        cursor: pointer;
    }

    table {
        width: 100%;
    }

    .row {
        height: 20px;
        transition: all ease-in-out .15s;
    }

    .gray {
        background-color: ${colors.gray};
    }

    .table-header {
        background-color: ${colors.blue}
    }

    .row:hover {
        cursor: pointer;
        background-color: ${colors['blue-2']};
        transition: all ease-in-out .15s;
    }
`

export default styles