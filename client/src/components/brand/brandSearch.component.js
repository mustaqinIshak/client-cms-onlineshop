import React, {Component} from "react";
import * as ReactBs from "react-bootstrap"
import * as AiIcons from "react-icons/ai"
import {brandAction}from "../../actions/brand.action"
import { connect } from "react-redux";


class SearchBrand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query:'',
            loading: false,
            message: ''
        }
    }

    fetchBrandResult = (query) => {
        const brands = this.props.brands
        const {dispatch} = this.props
        const result = []
        for(let i = 0; i < brands.length; i++) { 
            console.log(brands[i].name)
            if(brands[i].name.toLowerCase().includes(query.toLowerCase())) {
                result.push(brands[i])
            }
        }
        dispatch(brandAction.resultBrand(result))
    }

    handdleOnInputChange= (event) => {
        const query = event.target.value
        if(!query) {
            this.setState({
                query,
            })
        } else {
            console.log('ini d handle',query)
            this.setState({
                query,
                loading: true,
            })
        }
        this.fetchBrandResult(query)
    }

    render() {
        return(
            <div >
                <ReactBs.InputGroup className="mb-3" size="lg" onChange={this.handdleOnInputChange} >
                    <ReactBs.FormControl placeholder="Search" aria-describedby="inputGroup-sizing-default" />
                    <ReactBs.InputGroup.Text id="basic-addon1"><AiIcons.AiOutlineSearch /></ReactBs.InputGroup.Text>
                </ReactBs.InputGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        brands: state.brand.brands
    }
}

export default connect(mapStateToProps)(SearchBrand)
