        function addTask() {
            const taskText = document.getElementById("newTask").value.trim();
            if (taskText === "") {
                return;
            }

            const taskList = document.getElementById("taskList");
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button onclick="removeTask(this)">Remover</button>
            `;
            taskList.appendChild(li);
            document.getElementById("newTask").value = "";
        }

        function removeTask(button) {
            const taskList = document.getElementById("taskList");
            const li = button.parentElement;
            taskList.removeChild(li);
        }
