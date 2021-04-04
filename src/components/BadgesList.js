import React from 'react';
import './styles/BadgesList.css';
import { MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'

function useSearchData(data){
    const [query,setQuery] = React.useState("");
    const [filteredData,setFilteredData] = React.useState(data);

    React.useMemo(() => {
        const results = data.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })
        setFilteredData(results)
        
    }, [data,query]);

    return {query,setQuery,filteredData}
    
}
function BadgesList(props ) {

    const data = props.data;

    const {query, setQuery , filteredData} = useSearchData(data);
    
    const buscador = <div className="form-group">
                        <label>Filter Badges </label>
                        <input type="text"className="form-control" value={query}  
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}/>
                    </div>;

    if(filteredData.length === 0){
        return (
            <div>
                 {buscador}
                <div className="BadgeList">
                    <div className="d-flex justify-content-center">
                        <h3>No badges were found</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-success" to="/badges/new">
                            Create New Badge
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return ( 
            <div>
                {buscador}
                <ul className="list-unstyled">
                    {filteredData.map((badge)=>{
                        return(
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <div className="BadgeList">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src={badge.avatarUrl} className="Badge__avatar"></img>
                                                </div>
                                                <div className="col-md-8 infouser">
                                                    <p><b>{`${badge.firstName} ${badge.lastName} `}</b><br/>
                                                    <Link to="#" className="tw-ic mr-3">
                                                        <MDBIcon fab icon="twitter" />@{badge.twitter}
                                                    </Link><br/>
                                                    {badge.jobTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
    
}
 
export default BadgesList;

