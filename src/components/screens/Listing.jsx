import Grid from '../Grid'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Spinner from '../layout/Spinner'
import Filter from '../Filter'

const Listing = () => {
    const [employers,setEmployers] = useState([])
    const [loading,setLoading] = useState(false)
    const [positions,setPositions] = useState([])
    const [text,setText] = useState('')
    const [cancel,setCancel] = useState(false)

    const getData = async () => {
        setLoading(true)
        const [firstResponse,secondResponse] = await Promise.all([
            axios.get('https://my-json-server.typicode.com/1ohnny/test-api/employees'),
            axios.get('https://my-json-server.typicode.com/1ohnny/test-api/positions')
        ])

        setEmployers(firstResponse.data)
        setPositions(secondResponse.data)
        setLoading(false)

    }


    const cancelFilter = () => {
        setCancel(false)
        getData()
    }

    const filterUsers = () => {
        if(text.trim() === ''){
            return 
        } else {
            const arr = employers.filter(record => record.surname.toLowerCase().startsWith(text) || record.name.toLowerCase().startsWith(text))
            setEmployers(arr)
            setCancel(true)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        filterUsers()
        setText('')
        }


    const sortByName = () => {
        const obj = [...employers]
        obj.sort((a,b) => a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1)
        
        setEmployers(obj)
    }

    const sortById = () => {
        const obj = [...employers]
        obj.sort((a,b) => a.id > b.id ? 1 : -1)
        setEmployers(obj)
    }

    const sortByPosition = () => {
        const obj = [...employers]
        obj.sort((a,b) => a.positionId > b.positionId ? 1 : -1)
        setEmployers(obj)

        //Sorting based on employers array -> employers.sort()
        //More specifically based on positionId -> employer.positionId
        //
        
    }


    const employerPosition = (positionId) => {
        const {name} = positions.find(element => element.orderIdx === positionId)
        return name
    }

    useEffect(() => {
        getData()
    },[])

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
