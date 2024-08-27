const task  = document.getElementById("taskIn");
const taskOut = document.getElementById("taskOut");
const btn = document.getElementById("btn");

function addTask(){
    if (task.value !==""){
        const li = document.createElement("li");
        li.textContent = task.value;

        // CheckBox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", () => {
            if (checkBox.checked){
                taskOut.style.textDecoration = "line-through";
            }else{
                taskOut.style.textDecoration = "none";
            }
        })

        // Delete 
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            taskOut.removeChild(li);
        })

        // Edit

        // Main Function 
        li.appendChild(checkBox);
        li.appendChild(delBtn);
        taskOut.appendChild(li);
        task.value = "";
    }
    
}
btn.addEventListener('click' ,() => {
    addTask();
})
task.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        if (task.value !== ""){
            addTask();
        }
    }
})