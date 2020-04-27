import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Input, FormFeedback, DropdownToggle, ButtonDropdown, Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Forms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			development: '',
			done:false,
			clicked: false,
			touched: {
				email: false,
				development: false
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
	};

	submit(){
		if (this.state.touched.email === true && this.state.email !== ''&& this.state.touched.development === true && this.state.development !== ''&& this.state.clicked)
			return "Submitting ..."
		else
			return "Sign Up Now"
	}

	handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    renderRedirect() {
	    if (this.state.done) {
	      return <Redirect to='/thanks' />
	    }
  	}

	handleSubmit(event) {

		if (this.state.touched.email === true && this.state.email !== ''&& this.state.touched.development === true && this.state.development !== ''){
        console.log('Current State is: ' + JSON.stringify(this.state.email)+JSON.stringify(this.state.development));
        this.setState({
			clicked: true
			});
		setTimeout(() => { this.setState({
			done: true
			})
		}, 2000);
		
		event.preventDefault()
		
		}
	
    }

    handleBlur = (field) =>(evt) => {

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

   

     validate(email){
        const errors = {
            email: ""
        };
        
        if(this.state.touched.email && email.split('').filter(x => x ==='@').length !== 1)
            errors.email = 'Please enter a valid email address.';
        return errors;
    }

    valid(errors){
    	if(errors.email!=="")
    		return(<FormFeedback>{errors.email}</FormFeedback>);
    	else
    		return(<div><br /></div>);
    }


    render(){
    	 const errors = this.validate(this.state.email);

    	 return(
    	 	<div className = "container">
    	 	<p>Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship.</p>
    	 		<div className="row row-content">
    	 			<div className="col-12">
    	 				<Form onSubmit={this.handleSubmit}>
    	 					<Row form>
        						<Col md={6}>
          							<FormGroup>
           							{this.valid(errors)}
           								<Input type="email" id="email" name="email"
                                        placeholder="Your Email Address*"
                                        value={this.state.email}
                                        invalid={errors.email !== "" }
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
          							</FormGroup>
        						</Col>
       							<Col md={6}>
       								<FormGroup>
       									<div><br /></div>
       									<select  name="development" onChange ={this.handleInputChange} onBlur={this.handleBlur('development')}>
								       		<option value="" className="holder" hidden> Your Interests </option>
								    		<option value="Management">Management</option>
								    		<option value="Development">Development</option>
								    		<option value="Graphic">Graphic Design</option>
								    		<option value="Marketing">Digtal Marketing</option>
										</select>
							        </FormGroup>
							    </Col>
							 </Row>
							      
      						<Row form>
      							<Col md={12}>
      								{this.renderRedirect()}
									<Button onClick={this.handleSubmit}>
                  {this.submit()}
                  </Button>
								</Col>
      						</Row>
						</Form>
                    </div>
               </div>
        	</div>
    	 	);
    	 }
}

export default Forms;