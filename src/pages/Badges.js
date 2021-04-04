import React from 'react';
// import NavBar from '../components/NavBar';
import './styles/Badges.css';
import Logo from '../img/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import  PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
 
class Badges extends React.Component {
    state = {
        loading:true,
        error:null,
        data:undefined
    }
    // constructor(props){
    //     super(props)
        // console.log('1. Contructor');
        // this.state={
        //     data:[]
        // }
        
    // }
    componentDidMount(){
        this.time = setInterval(() => {
            this.fetchData()    
        }, 5000);
    }
    fetchData = async () => {
        this.setState({
            loading:true, error:null
        });
        try {
            const data = await api.badges.list();
            this.setState({loading:false, data:data});
        } catch (error) {
            this.setState({loading:false, error:error});
        }
    }
     componentWillUnmount(){
         clearTimeout(this.time);
     }
    // componentDidMount(){
    //     console.log('3. componentDidMount');
    //     this.timeoutId = setTimeout(() => {
    //         this.setState({
    //             data:[
    //                 {
    //                     id:"sdsdasd",
    //                     firstName:"Coren",
    //                     lastName:"Ancco",
    //                     twitter: "@corenancco",
    //                     avatar:"https://avatarfiles.alphacoders.com/752/75205.png",
    //                     descripction:"Desarrollador FullStack "
    //                 },
    //                 {
    //                     id:"3253lf23ñfa234",
    //                     firstName:"Rebecca",
    //                     lastName:"Garate",
    //                     twitter: "@rebgarate",
    //                     avatar:"https://profilepicture7.com/img/img_dongman/4/-912119422.jpg",
    //                     descripction:"Administrador de Base de Datos "
    //                 }, 
    //             ]
    //         });
    //     }, 3000);
    // }
    // componentDidUpdate(prevProps, prevState){
    //     console.log('5. componentDidUpdate');

    // }
    // componentWillUnmount(){
    //     console.log('6. componentWillUnmount');
    //     clearTimeout(this.timeoutId);
    // }
    render() { 
        // console.log('2. render');
        // console.log('2. render');
        
        if(this.state.loading === true && !this.state.data ){
            return <PageLoading/>    
        }
        if (this.state.error){
            return <PageError error={this.state.error}/>;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                             <img className="Badges_conf-logo" src={Logo} alt="Conf Logo"/>

                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-success">New Badge</Link>
                    </div>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container" >
                        <BadgesList data={this.state.data} />
                        
                        
                        {this.state.loading && 
                            <div className="d-flex justify-content-center">
                                <MiniLoader/>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
 
export default Badges;