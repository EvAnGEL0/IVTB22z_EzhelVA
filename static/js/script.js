const button = document.querySelector("#submit-input");
        
        const nameInput = document.querySelector("#user-name-input");
        let inputVelue; //добовляем переменную
        
        nameInput.addEventListener("input", ()=> {
            inputVelue = nameInput.value;
           // console.log(inputVelue); //выводим inputVelue
        }); //присваивам значение nameInput в переменную inputVelue 

        nameInput.addEventListener ("blur", ()=> { //"blur" - при переходе на дркгой элемент
            //console.log("blur happened");    
            if  (!inputVelue || inputVelue.length < 3 ){
                nameInput.className = "input-error"; //меняем стиль элемента
                const p = document.createElement("p");
                p.appendChild(document.createTextNode("Name field is required")); // добовляем текст в тег
                p.className = "error-message"; //присваеваем тегу а клвсс
                document.querySelector("#name-input-container").append( p);
               
            }
            else {
                nameInput.className ="input-good"
                
            }
            });

        nameInput.addEventListener ("focus", ()=> { //"focus" - при переходе на этот элемент 
            document.querySelector("#name-input-container > p").remove();
        });

        //домашнее задание
        const passInput = document.querySelector("#password-input"); //привязываем элемент м id к passInput
        let inputVeluePass; //добовляем переменную для хранения значения

        passInput.addEventListener("input", ()=> {
            inputVeluePass = passInput.value;
            // console.log(inputVeluePass); //выводим inputVeluePass
        }); //присваивам значение passInput в переменную inputVeluePass
        
        passInput.addEventListener ("blur", ()=> { //"blur" - при переходе на дркгой элемент
            //console.log("blur happened");    
            if  (!inputVeluePass || inputVeluePass.length < 8 ){
                passInput.className = "input-error"; //меняем стиль элемента
                const p = document.createElement("p");
                p.appendChild(document.createTextNode("password must be 8 characters long")); // добовляем текст в тег
                p.className = "error-message"; //присваеваем тегу а клвсс
                document.querySelector("#passwd-input-container").append( p);
            }
            else {
                passInput.className ="input-good";
                
            }
        });

        passInput.addEventListener ("focus", ()=> { //"focus" - при переходе на этот элемент 
            document.querySelector("#passwd-input-container > p").remove();
        });



