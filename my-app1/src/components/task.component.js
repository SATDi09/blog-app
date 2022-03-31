const Task=(props)=>{
    const {id,title,description,status,changeStatus}=props
    const Backgroundcolors={
        OPEN:'LightGreen',
        IN_PROGRESS:'Violet',
        DONE:'MediumSeaGreen'
    }
    const fontcolors={
        OPEN:'Black',
        IN_PROGRESS:'White',
        DONE:'White'
    }
    const getButtonTitle=()=>{
       if(status ==='OPEN') {
           return 'In Progress'
       }else if(status ==='IN_PROGRESS') {
        return 'Done'
        }
    }
    const onButtonClick=()=>{
        if(status ==='OPEN') {
            changeStatus(id,'IN_PROGRESS')
        }else if(status ==='IN_PROGRESS') {
           changeStatus(id,'DONE')
         }
    }
    return (
    <div className="card" style={{backgroundColor:Backgroundcolors[status],color:fontcolors[status],width: '100%',display:'inline-block',margin:'10px',height:'170px'}}>
     <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {status !== 'DONE' &&(
        <button onClick={onButtonClick} className="btn btn-success">{getButtonTitle()}</button>)}
     </div> 
    </div>
    )
}
export default Task