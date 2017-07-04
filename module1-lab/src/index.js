import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayTitle(props){
    return <h2>{props.title}</h2>
}

function TitleDescription(props) {
    return <p>{props.message}</p>
}

function NewOrOld(props) {
    return <div>
        <h2>{props.subtitle}</h2>
            {props.fieldName}
            <input type="checkbox" name={props.name} value={props.value} checked/>
    </div>
}

function SelectType(props) {
    return <div>
        <p/>Select Type
            <select>
                <option value ={props.type[0]}>{props.type[0]}</option>
                <option value ={props.type[1]}>{props.type[1]}</option>
                <option value ={props.type[2]}>{props.type[2]}</option>
                <option value ={props.type[3]}>{props.type[3]}</option>
            </select>
        </div>
}

function TableHeader() {
    return <tr>
             <th>Year</th>
             <th>Model</th>
             <th>Price</th>
             <th>Buy</th>
           </tr>
}

function TableDetails(props){
    return <tr>
            <td>{props.year}</td>
            <td>{props.model}</td>
            <td>{props.price}</td>
            <td><button>{props.buy}</button></td>
    </tr>

}


function VehicleName(props) {
    return <h2>{props.name}</h2>
}


function DisplayTable(props){
    return <ul>
        <table>
            <TableHeader/>
            <TableDetails year={props.year} model={props.model} price={props.price} buy={props.buy} />
        </table>
    </ul>

}

function DisplayCars(){
    return <div>
                <VehicleName name="Cars"/>
                <DisplayTable year={2013} model="A" price="$32000" buy="Buy Now" />
                <DisplayTable year={2011} model="B" price="$4400" buy="Buy Now" />
                <DisplayTable year={2011} model="B" price="$4400" buy="Buy Now" />
        </div>

}

function DisplayTrucks() {
    return <div>
                <VehicleName name="Truck" />
                <DisplayTable year={2014} model="D" price="$18000" buy="Buy Now" />
                <DisplayTable year={2013} model="E" price="$5200" buy="Buy Now" />
          </div>
}

function DisplayConvertibles(){
    return <div>
                <VehicleName name="Convertibles" />
                <DisplayTable year={2009} model="F" price="$2000" buy="Buy Now" />
                <DisplayTable year={2010} model="G" price="$6000" buy="Buy Now" />
                <DisplayTable year={2012} model="H" price="$12500" buy="Buy Now" />
                <DisplayTable year={2017} model="M" price="$50000" buy="Buy Now" />
          </div>

}

function DisplayPage(){
    return <div>
                <DisplayTitle title="Welcome To React Transportation" />
                <TitleDescription message="The best place to buy vehicles online" />
                <NewOrOld subtitle="Choose Options" fieldName="New Only" value="coding"/>
                <SelectType type={['All', 'Cars', 'Truck', 'Convertibles']} />
                <div>
                    <DisplayCars />
                    <DisplayTrucks />
                    <DisplayConvertibles />
                </div>
           </div>

}

ReactDOM.render(<DisplayPage />, document.getElementById('root'));
