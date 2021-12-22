import {Link,useParams} from 'react-router-dom'
import {Fragment,useContext} from 'react'
import DetailContext from '../context/DetailContext'


const Detail = () => {
        const {user, setParams} = useContext(DetailContext)
        const {id} = useParams()
        setParams(id)


        return (
        <Fragment>
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
                         {user.contracts && user.contracts.map((contract,i) => (
                            <tr key={i}>
                                <td>{contract.typeId ? contract.typeId : "No id"}</td>
                                <td>{contract.from ? contract.from : '-'}</td>
                                <td>{contract.to ? contract.to : '-'}</td>
                            </tr>
                        ))}
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
