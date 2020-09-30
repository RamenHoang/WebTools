/**
 * 
 * @param {string} message
 * @param {number} type
 * 0: Danger
 * 1: Success
 * 2: Info
 * 3: Warning 
 * @param {number} timeout
 * millisecond
 */
function alertMessage(message, type, timeout) {
    let prefix = '';
    switch(type) {
        case 0:
            prefix = 'Danger';
            break;
        case 1: 
            prefix = 'Success';
            break;
        case 2: 
            prefix = 'Info';
            break;    
        case 3: 
            prefix = 'Warning';
            break;
    }

//     <div class="alert">
//   <span class="closebtn">&times;</span>  
//   <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
// </div>
    let alert = document.createElement('div');
    alert.className += 'alert';
    let span = document.createElement('span');
    span.className += 'closebtn';
    let strong = document.createElement('strong');

    span.innerHTML = '&times;';
    strong.innerHTML = prefix;
    alert.appendChild(span);
    alert.appendChild(strong);
    alert.innerHTML += ' ' + message;

    let alertContainer = document.getElementById('div_AlertContainer');

    alertContainer.appendChild(alert);

    span.onclick = function(){
        let div = this.parentElement;
        fade(div);
    }

    setTimeout(() => {
        fade(alert);
    }, timeout)
}

function fade(component) {
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 400);
    component.remove();
}