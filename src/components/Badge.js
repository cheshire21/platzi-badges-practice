import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/Badge.css';
import confLogo from '../img/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>
                <div className="Badge__section-name">
                    
                    <Gravatar className="Badge__avatar" email={this.props.email}  avatarUrl={this.props.avatarUrl}/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">    
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.Twitter}</div>
                </div>
                <div className="Badge__footer">
                    #platziconference
                </div>
            </div>
        );
    }
}
export default Badge;