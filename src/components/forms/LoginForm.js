import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
//import { Link } from 'react-router-dom';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

//LoginForm has a state so will have class component
//https://reactjs.org/docs/composition-vs-inheritance.html
class LoginForm extends React.Component {

    /*
    What's the difference between “super()” and “super(props)” in React when using es6 classes?

    There is only one reason when one needs to pass props to super()
    When you want to access this.props in constructor.

    */
    //noteJaco: testing this:
    constructor(props) {
        super(props)
        console.log("testing super(props)from LoginForm "+this.props)
        // -> { icon: 'home', … }
    }



    //https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function
    //http://www.react.express/fat_arrow_functions
    /*
   https://reactjs.org/docs/react-component.html#state
   The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.
   If some value isn’t used for rendering or data flow (for example, a timer ID), you don’t have to put it in the state. Such values can be defined as fields on the component instance.
    */

    state = {
        data: {
            username: '',
            password: ''
        },
        loading : false,
        errors: {}
    };


    /*
    https://reactjs.org/docs/react-component.html#props
    this.props contains the props that were defined by the caller of this component. See
    */

     //------------- LifeCycleMethod ------------------
    componentDidMount(){
        //log("rendered LoginForm"); //not defined
        console.log("mounted LoginForm");
    }


    //------------- Functions ------------------
    // save state before do something
    // instead of multiple functions like onGhangePassword, onChangeUsername, etc...
    // e is the event - object clicked from - get the event.target.name e.g. 'username'
    onChange = e =>
    {
        console.log("onChange "+e.target.name+":"+e.target.value);
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
    };


    onSubmit = () => {
        console.log("onSubmit"+errors);
        const errors = this.validate(this.state.data);
        this.setState({errors});
    };

    validate = (data) => {
        const errors = {};
        if(!data.password) errors.password = "can't be blank";
        if(!Validator.isByteLength(data.username, { min:5, max:8})) errors.username = "username to short or long";
        //https://www.npmjs.com/package/react-validation
        //https://www.npmjs.com/package/validat
        //isByteLength(str, {min:5, max:8})
        //isEmpty(str) //check if the string has a length of zero.
        //isUUID(str [, version]) //check if the string is a UUID (version 3, 4 or 5).
        return errors;
    };

/* <label htmlFor="password">Password</label> */

    render(){
        //console.log(this);
        //console.log("rendered LoginForm");
        const { data, errors } = this.state;
        //Logger.addLog("rendered LoginForm");
        return (

            <div className='login-form'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <h2 className='loginHeader'>
                            <Image className="mainLogo"
                                   src='img/SJA_WHITE_LOGO_CROPPED.svg'  />
                            {' '}Log-in to your account
                        </h2>
                        <Form size='large' onSubmit={this.onSubmit}>
                            <Segment stacked>
                                <Form.Field error={!!errors.username}>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='username'
                                    id="username"
                                    name="username"
                                    onChange={this.onChange}
                                    value={data.username}
                                    type='text'
                                />
                                {errors.username && <InlineError text={errors.username} />}
                                </Form.Field>
                                <Form.Field error={!!errors.password}>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={this.onChange}
                                />
                                {errors.password && <InlineError text={errors.password} />}
                                </Form.Field>
                                <Button primary compact color='red' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Do not have a login? <a href='mailto:admin@sja.com.au?subject=Request Access To SJA VAULT TEST'>Contact Admin</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginForm;

/*
  <div className="html ui top attached segment">
                <div className="ui top attached label">Login</div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <div className="ui labeled input">
                                <div className="ui basic label">
                                    <i className="user icon"></i>
                                </div>
                                <input type="text"
                                       id="username"
                                       name="username"
                                       placeholder="Your Username"
                                       value={data.username}
                                       onChange={this.onChange}
                                />
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui labeled input">
                                <div className="ui basic label">
                                    <i className="key icon"></i>
                                </div>
                                <input type="password"
                                       id="password"
                                       name="password"
                                       value={data.password}
                                       onChange={this.onChange}
                                />
                            </div>
                        </Form.Field>

                        <div className="actions">
                            <div className="ui button compact">
                                Cancel
                            </div>
                            <Button primary compact className="ui primary right labeled icon button">
                                Submit
                                <i className="checkmark icon"></i>
                            </Button>
                        </div>

                    </Form>

            </div>


*/

