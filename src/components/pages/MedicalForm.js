import { Components } from 'antd/lib/date-picker/generatePicker'
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../StyleSheet.css'
import AppDir from '../../AppDir'
//<Link to="/">Submit</Link>

const Form_Type = {
	width: 350
}
//action = '/'
class MedicalForm extends Component {
    render() {
        return (
            <div className="text-center m-5-auto">
                <h2>Medical Form</h2>
                <h5>Enter Once and for all, with the option of editing anytime.</h5>
                <form id="Medical_Form" style={ Form_Type } 
                onSubmit={(event) => {
                    event.preventDefault()

                    const name = this.Fname.value
                    this.props.uploadName(name)

                    /*const mail = this.email.value
                    this.props.uploadMail(mail)
                    
                    const ph_no = this.phno.value
                    this.props.uploadPhno(ph_no)

                    const gen = this.gender.value
                    this.props.uploadGender(gen)

                    const date = this.dob.value
                    this.props.uploadDob(date)

                    const ht = this.height.value
                    this.props.uploadHeight(ht)

                    const wt = this.weight.value
                    this.props.uploadWeight(wt)

                    const blood = this.bg.value
                    this.props.uploadBg(blood)

                    const vacc = this.vaccine.value
                    this.props.uploadVacc(vacc)

                    const all = this.allergies.value
                    this.props.uploadAller(all)

                    const pres = this.presc.value
                    this.props.uploadPres(pres)

                    const sym = this.symp.value
                    this.props.uploadSym(sym)

                    const trav = this.travels.value
                    this.props.uploadTrav(trav)

                    const his = this.history.value
                    this.props.uploadHist(his)

                    const ename = this.emname.value
                    this.props.uploadEmNam(ename)

                    const eno = this.emno.value
                    this.props.uploadEmNo(eno)

                    const ex = this.extra.value
                    this.props.uploadExt(ex)*/
                  }}>
                    <p>
                        <label>Full Name</label><br/>
                        <input id = "Fname" type="text" name="full_name" defaultValue={this.props.fullname} ref={(input) => { this.Fname = input }} required/>
                    </p>
                    <p>
                        <label>Email address</label><br/>
                        <input type="text" name="email" defaultValue={this.props.mail} ref={(input) => { this.email = input }}/>
                    </p>
                    <p>
                        <label>Phone number</label><br/>
                        <input type="text" name="ph_no" defaultValue={this.props.phno} ref={(input) => { this.phno = input }}/>
                    </p>
                    <p>
                        <label>Gender</label><br/>
                        <input type="text" name="gender"  defaultValue={this.props.gender} ref={(input) => { this.gender = input }}/>
                    </p>
                    <p>
                        <label>Date of Birth (dd/mm/yyyy)</label><br/>
                        <input type="text" name="DOB"  defaultValue={this.props.date} ref={(input) => { this.dob = input }}/>
                    </p>
                    <p>
                        <label>Height(in cm)</label><br/>
                        <input type="text" name="height" defaultValue={this.props.height} ref={(input) => { this.height = input }}/>
                    </p>
                    <p>
                        <label>Weight(in kg)</label><br/>
                        <input type="text" name="weight" defaultValue={this.props.weight} ref={(input) => { this.weight = input }}/>
                    </p>
                    <p>
                        <label>Blood-Group</label><br/>
                        <input type="text" name="Blood_Group"  defaultValue={this.props.blood} ref={(input) => { this.bg = input }}/>
                    </p>
                    <p>
                        <label>Covid Vaccine status</label><br/>
                        <input type="text" name="vaccine_status" defaultValue={this.props.vacc} ref={(input) => { this.vaccine = input }} />
                    </p>
                    <p>
                        <label>Allergies(mention none if none)</label><br/>
                        <input type="text" name="allergies"  defaultValue={this.props.all} ref={(input) => { this.allergies = input }}/>
                    </p>
                    <p>
                        <label>Current Prescriptions</label><br/>
                        <input type="text" name="prescription" defaultValue={this.props.pres} ref={(input) => { this.presc = input }}/>
                    </p>
                    <p>
                        <label>Any Current Symtoms?</label><br/>
                        <input type="text" name="symptoms"  defaultValue={this.props.sym} ref={(input) => { this.symp = input }}/>
                    </p>
                    <p>
                        <label>Recent Travels(6 months)</label><br/>
                        <input type="text" name="travels"  defaultValue={this.props.trav} ref={(input) => { this.travels = input }}/>
                    </p>
                    <p>
                        <label>Family/Ancestoral ailments</label><br/>
                        <input type="text" name="history"  defaultValue={this.props.his} ref={(input) => { this.history = input }}/>
                    </p>
                    <p>
                        <label>Emergency Contact name</label><br/>
                        <input type="text" name="em_name"  defaultValue={this.props.ename} ref={(input) => { this.emname = input }}/>
                    </p>
                    <p>
                        <label>Emergency Contact number</label><br/>
                        <input type="text" name="em_no"  defaultValue={this.props.eno} ref={(input) => { this.emno = input }}/>
                    </p>
                    <p>
                        <label>Other relevant information</label><br/>
                        <input type="text" name="extra"  defaultValue={this.props.ex} ref={(input) => { this.extra = input }}/>
                    </p>
                    <p>
                        {/* <input type="checkbox" name="checkbox" id="checkbox" required />  */}
                        <span>We value your privacy!<br/> <a href="https://google.com" target="_blank" rel="noopener noreferrer">Click here to read terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Submit</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        )
    }
}

export default MedicalForm;

/*
export default function form(props) {
return (
        <div className="text-center m-5-auto">
            <h2>Medical Form</h2>
            <h5>Enter Once and for all, with the option of editing anytime.</h5>
            <form id="Medical_Form" style={ Form_Type } 
            onSubmit={(event) => {
                event.preventDefault()
                this.props.uploadName(this.Fname.value)
              }}>
                <p>
                    <label>Full Name</label><br/>
                    <input id = "Fname" type="text" name="full_name" defaultValue={props.fullname} ref={(input) => { this.Fname = input }} required/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" />
                </p>
				<p>
                    <label>Phone number</label><br/>
                    <input type="number" name="ph_no" />
                </p>
                <p>
                    <label>Gender</label><br/>
                    <input type="text" name="gender"  />
                </p>
				<p>
                    <label>Date of Birth</label><br/>
                    <input type="date" name="DOB"  />
                </p>
				<p>
                    <label>Height(in cm)</label><br/>
                    <input type="number" name="height" />
                </p>
				<p>
                    <label>Weight(in kg)</label><br/>
                    <input type="number" name="weight" />
                </p>
				<p>
                    <label>Blood-Group</label><br/>
                    <input type="text" name="Blood_Group"  />
                </p>
				<p>
                    <label>Covid Vaccine status</label><br/>
                    <input type="text" name="vaccine_status"  />
                </p>
				<p>
                    <label>Allergies(mention none if none)</label><br/>
                    <input type="text" name="allergies"  />
                </p>
				<p>
                    <label>Current Prescriptions</label><br/>
                    <input type="text" name="prescription" />
                </p>
				<p>
                    <label>Any Current Symtoms?</label><br/>
                    <input type="text" name="symtoms"  />
                </p>
				<p>
                    <label>Recent Travels(6 months)</label><br/>
                    <input type="text" name="travels"  />
                </p>
				<p>
                    <label>Family/Ancestoral ailments</label><br/>
                    <input type="text" name="history"  />
                </p>
				<p>
                    <label>Emergency Contact name</label><br/>
                    <input type="text" name="em_name"  />
                </p>
				<p>
                    <label>Emergency Contact number</label><br/>
                    <input type="number" name="em_no"  />
                </p>
				<p>
                    <label>Other relevant information</label><br/>
                    <input type="text" name="extra"  />
                </p>
                <p>
					<span>We value your privacy!<br/> <a href="https://google.com" target="_blank" rel="noopener noreferrer">Click here to read terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">
                        <Link to="/">Submit</Link></button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}*/
