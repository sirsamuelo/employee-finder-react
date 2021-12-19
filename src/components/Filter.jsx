
const Filter = ({handleSubmit,handleChange,text,cancel,cancelFilter}) => {
    return (
            <div className="input-group">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Find by name..." className="form-control" name="name" value={text} onChange={handleChange}/>
                    {cancel && <button type="submit" className="btn btn-danger" onClick={cancelFilter}>Clear Filter</button>}
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
    )
}



export default Filter
