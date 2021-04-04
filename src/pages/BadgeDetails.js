import React from 'react';
import ReactDOM from 'react-dom';
import confLogo from '../img/platziconf-logo.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncrease(max){
    
    console.log(`el count  use state`)
    const [count, setCount] = React.useState(0);
    console.log(`el count ${count} despues del use state`)
    console.log(`el count ${count} y ${max}`)
    if(count > max){
        setCount(0);
    }
    console.log(``)
    return [count,setCount];
}
function BadgeDetails(props){
    const [count, setCount] = useIncrease(6);
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de imagen de conferencia"></img>
                        </div>
                        <div className="col-6 .BadgeDetails__hero-attendant-name" > 
                            <h1>{`${props.badge.firstName} ${props.badge.lastName}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            email={props.badge.email}
                            Twitter={props.badge.twitter}
                            jobTitle={props.badge.jobTitle}

                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div> 
                            <button onClick={() => {setCount(count + 1)}} className="btn btn-ssucess"> Count: {count}</button>
                            <Link className="btn btn-success" to={`/badges/${props.badge.id}/edit`}>Editar</Link>
                        </div>
                        <div>
                            <button onClick={props.onModal} className="btn btn-danger" >Eliminar</button>
                            <DeleteBadgeModal isOpen={props.modalIsOpen} onModal={props.onModal} onDeleteBadge={props.onDeleteBadge}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;