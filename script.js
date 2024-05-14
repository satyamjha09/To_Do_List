document.querySelector('#push').addEventListener('click', function() {
    
    if(document.querySelector('#newtask input').value.length == 0 ) {
        alert("Enter a new task")
    }
    else {
        document.querySelector('#tasks').innerHTML += 

        ` 
            <div class="task">

                <span id="taskname">
                 ${document.querySelector('#newtask input').value}
                </span>

                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>

        ` ; 

       
    }

    var current_tasks = document.querySelector(".delete");

    for(var i = 0; i < current_tasks.length; i++) {

        current_tasks[i].onclick = function() {
            this.parentNode.remove();
        }

    }

    var tasks = document.querySelectorAll(".task");

    for(var i = 0;  i < tasks.length;  i++){
        tasks[i].onclick = function() {
            this.classList.toggle('completed')
        }
    }
    
    document.querySelector("#newtask input").value = "";
    

});
