import React, { Component } from 'react';
import Input from './common/input';

class SignUpUser3 extends Component {
    state = {
        account: {
            address: "",
            city: "",
            area: ""
        }
    };

    handleChange = ({ target }) => {
        const account = { ...this.state.account };
        account[target.id] = target.value;
        this.setState({ account });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNext(this.state.account)
    }

    render() {
        return (
            <React.Fragment>
                <div className="form1Wrap myHeight">
                    <a href="#" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1">
                        Welcome to our website !
                    </h2>
                    <p className="let animation a1">
                        Let’s start with your profile and car information.
                    </p>
                    <form className="form animation a2" onSubmit={this.handleSubmit}>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            className="form-field animation a2"
                            value={this.state.account.address}
                            // error={this.state.errors.address}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autoFocus
                        />

                        <select name="city" id="city" className="form-field animation a4">
                            <option value="">City</option>
                        </select>
                        <div htmlFor="city" className="myError animation a4"></div>

                        <select name="area" id="area" className="form-field animation a5">
                            <option value="">Area</option>
                        </select>
                        <div htmlFor="area" className="myError animation a5"></div>

                        <button type="submit" className="formBtn animation a6">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUpUser3;