	import "./ToDoApp.css"
	import TextField from "./TextField"
	import Button from "./Button"
	import { useState } from "react"



	function ToDoApp() {

	    // To handle task input
	    let [task,settask]=useState("")

	    let [tasklist,settasklist]=useState([])

	    // To handle messages
	    let [message, setMessage] = useState("");

	    let [messageType, setMessageType] = useState("");


		// To count tasks added

		let [taskCount, setTaskCount] = useState(0);



		// Update task function

	    let updateTask=({target:{value}})=>
	    {

			settask(value)

	    }


		// Add task function

	

	    let addTask = () => { 

			// Empty input message
			if (task.trim() === "") {

			setMessage("Please add task");

			setMessageType("error");

			setTimeout(() => {

				setMessage("");

				setMessageType("");

			}, 1000);

	    }

	    else{

			settasklist([...tasklist, task]);
			
			settask("");


			// Increase task count after addition
			let newCount = taskCount + 1;

			setTaskCount(newCount);

			// Success message

			setMessage(`${newCount} task added successfully`);
			setMessageType("success");

			setTimeout(() => {

			setMessage("");

			setMessageType("");

			}, 1000);}
	};


		// Delete task function

	    let deleteTask=(id)=>
	    {

			// Decrease task count after deletion
			let newCount = taskCount - 1;

			setTaskCount(newCount);

			let remainingTasks=tasklist.filter((taskitem,index)=>
			{
				return id!==index   // filter method deletes item when it returns false.. 
			})						// ex: id=2,index=2  => 2!==2 = false => delete item at index 2

			settasklist(remainingTasks)
	    }

	    let clearTaskList=()=>
	    {
			settasklist([])
	    }


	  return (


	    <div className='todo-app'>


		{/* Message display area */}
		{/* {message && (

		    <div className={`message ${messageType}`}>

		        {message}
		        
		    </div>
		)} */}

		<div className={`message ${messageType} ${message ? "show" : ""}`}>
  			{message}
		</div>




	    <div className="add-item">

			<TextField type="text" placeholder="Task" onchange={updateTask} value={task} />

			<Button text="Add" classname="btn-success" onclick={addTask} />

	    </div>

	    <hr />

	    <div className="items">

		{tasklist.map((taskitem,index)=>
		{
		    return <div key={index} className="item">
		                <p>{taskitem}</p>

		                <Button text="delete" classname="btn-danger" onclick={()=>
		                    {
		                        deleteTask(index)
		                    }
		                } />
		            </div>
		})}
	 
	      </div>
	      
			<div className="clear">

				<Button text="clear All Task" onclick={clearTaskList} classname="btn-primary" />

			</div>

	    </div>
	  )
	}


	export default ToDoApp;

