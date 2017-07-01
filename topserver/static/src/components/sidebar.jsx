import React from 'react';
import {getJSON} from '../tools/request.jsx';

var Sidebar = React.createClass({
    getInitialState: function(){
        return {
            'machines': null,
        }
    },

    //handleClick: function(e) {
    //    console.log('CLICKKK link was clicked.', e);
    //},

    render: function () {
        var this_ = this;
        var machines  = this.state.machines;

        if(machines == null){
            //machines = ['machine1.banatao.berkeley.edu', 'machine2.banatao.berkeley.edu']
            getJSON(this.props.machine_url, function(machine_list){
                this_.setState({'machines': machine_list});
            });
            machines = [];
        }

        var machine_list = machines.map(function(item, idx){
            return <div className="row machine-select-a" key={idx}
                        onClick={(e) => this_.props.machine_callback(item)}>
                {item}
            </div>;
        });
        machine_list = <div >
            {machine_list}
        </div>;

        return <div>
            <h3>Machines </h3>
            <hr />
            {machine_list}
        </div>;
    }
});

export default Sidebar
