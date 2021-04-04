import React, { PureComponent } from 'react';
import './styles/BadgeDetails.css';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    state = { 
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen:false
     }
     componentDidMount(){
         this.fecthdata()
     }
     fecthdata = async e => {
        this.setState({loading: true, error:null})
         try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({loading: false, data:data})  
         }catch(error){
            this.setState({loading: false, error:error})  
         }
         
     }
     handleModal = e =>{
         this.setState({modalIsOpen: !this.state.modalIsOpen})
     }
     handleDeleteBadge = async e => {
        this.setState({loading:true, error:null})
        try{
            await api.badges.remove(this.props.match.params.badgeId)
            this.props.history.push('/badges');
        }catch(error){
            this.setState({loading:false, error:error})
        }
     }
    render() { 
        if(this.state.loading){
            return <PageLoading></PageLoading>
        }
        if(this.state.error){
            return <PageError error={this.state.error}></PageError>;
        }
        return ( 
            <BadgeDetails onModal={this.handleModal} modalIsOpen={this.state.modalIsOpen} onDeleteBadge={this.handleDeleteBadge} badge={this.state.data}/>
        );
    }
}
 
export default BadgeDetailsContainer;
