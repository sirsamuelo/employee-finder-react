import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import ListingContext from './context/ListingContext'

const Grid = ({employer}) => {
    const {employerPosition} = useContext(ListingContext)

    const formatDate = (someDate) => {
        if(someDate == null){
            return '-'
        }
        let arr = someDate.split('-')
        let newArr = arr.reverse()
        let createString = newArr.join('.')

        return createString
    }

    const {positionId, name,surname, id} = employer

    return (
        <Link to={`/detail/${id}`}>
            <div className="grid" style={currentStyle}>
                <div>{id}</div>
                <div>{name} {surname}</div>
                <div>{employerPosition(positionId)}</div>
                <div>{formatDate(employer.contracts[0].from)}</div>
                <div>{formatDate(employer.contracts[0].to)}</div>
            </div>
        </Link>
    )
}

const currentStyle = {
    padding: '0.5rem',
}

Grid.propTypes = {
    employer: PropTypes.object.isRequired
}


export default Grid
