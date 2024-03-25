import Buttons from './Buttons';
function Filter(props) {
    return (
        props.filterData.map(item=>{
            return <Buttons filterData = {props.filterData} title={item.title} key={item.id} id={item.id} handleFilter={props.handleFilter}></Buttons>
        })
    )
}

export default Filter;