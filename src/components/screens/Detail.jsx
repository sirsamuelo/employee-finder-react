import axios from 'axios'
import {Link,useParams} from 'react-router-dom'
import {useEffect,useState,Fragment} from 'react'



const Detail = () => {
    const [user,setUser] = useState({})
    const [isError,setIsError] = useState(false)
    const params = useParams()
    let  {id} = params

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/1ohnny/test-api/employees/${id}`)
            
                const {data} = res
                setUser(data)
                console.log(user)
            } catch (error) {
                setIsError(true)
            }
        }
        console.log('useEffect')
        getUserData()
    },[id])
console.log('render')
        return (
            <Fragment>
                {isError && <div>Something went wrong</div>}
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Typ zmluvy</th>
                            <th>Zaciatok</th>
                            <th>Koniec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {user && console.log(user.id)} */}
                         {user.contracts && user.contracts.map((contract,i) => (
                            <tr key={i}>
                                <td>{contract.typeId ? contract.typeId : 'nothing'}</td>
                                <td>{contract.from ? contract.from : 'nothing'}</td>
                                <td>{contract.to ? contract.to : 'nothing'}</td>
                            </tr>
                        ))}
                        {/* /* <tr>
                            <td>Trvalý pracovný pomer</td>
                            <td>{user.contracts.map(item => (item.from))}</td>
                            <td>{user.surname}</td>
                        </tr> */ }
                    </tbody>
                </table>
                <Link to="/" className="btn__back">
                Späť na zoznam zamestnancov
                </Link>
            </div>
            </Fragment>
        )
}

export default Detail
