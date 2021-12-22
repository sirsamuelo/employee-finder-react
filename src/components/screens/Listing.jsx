import Grid from '../Grid'
import {useContext} from 'react'
import Spinner from '../layout/Spinner'
import Filter from '../Filter'
import ListingContext from '../context/ListingContext'


const Listing = () => {
    const {loading,employers,positions,text,cancel,sortById,sortByName,sortByPosition,cancelFilter,handleChange,employerPosition,handleSubmit} = useContext(ListingContext)

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div className="container">
                <Filter cancelFilter={cancelFilter} cancel={cancel} text={text} handleChange={handleChange} handleSubmit={handleSubmit} />

                  <div className="grid-parent">
                    <div className="bg-primary grid" style={headerStyle}>
                        <div className="item" onClick={sortById}>ID</div>
                        <div className="item" onClick={sortByName}>Fullname</div>
                        <div className="item" onClick={sortByPosition}>PositionId</div>
                        <div className="item">From</div>
                        <div className="item">To</div>
                    </div>
                {employers.map(employer => (
                    <Grid employer={employer} employerPosition={employerPosition} sortById={sortById} sortByName={sortByName} sortByPosition={sortByPosition} key={employer.id}/>
                ))}
                 </div>
            </div> 
)}}

const headerStyle = {
    borderRadius: '7px',
    margin: '1rem 0',
    padding: '1rem',
    color: '#FFF'
}


export default Listing;
