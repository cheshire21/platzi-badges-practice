import React  from 'react';
// import Navbar from '../components/NavBar';
import header from '../img/platziconf-logo.svg'
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js';
import api from '../api';
import md5 from 'md5';
class BadgeEdit extends React.Component {
    state = { 
        loading: true,
        error:null, 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            twitter:'',
            jobTitle:'',
            avatarUrl:'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?d=identicon'
            
        }
     }
     componentDidMount(){
         this.fecthData()
     }
     fecthData = async e =>{
         this.setState({loading:true, error :null })
         try{
             const data = await api.badges.read(
                 this.props.match.params.badgeId
             )
             this.setState({loading:false, form :data })
         }catch(error ){
            this.setState({loading:false, error:error })
         }
     }

    handleSubmit =  async e =>{
        e.preventDefault();
        this.setState({loading:true , error:null});
        try {
            await api.badges.update(this.props.match.params.badgeId,this.state.form);
            this.setState({loading:false});
            //
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading:false, error:error});
        }
    }

    handleChange = e => {
        
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: (e.target.name == 'email')?`https://www.gravatar.com/avatar/${md5(e.target.value)}?d=identicon`: this.state.form.avatarUrl
            }
        })
    }

    render() { 
        if(this.state.loading === true){
            
            return <PageLoading/>
        }
        
        return ( 
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'} 
                                email={this.state.form.email}
                                avatarUrl={this.state.form.avatarUrl}
                                Twitter={this.state.form.twitter || '@twitter'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BadgeEdit;