document.getElementById('btn')
    .addEventListener('click', function() {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            console.log('Request is sent!');
            
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Request is successfull!');
                let response = xhr.response;
                console.log(response);
                console.log(typeof response);
                let responseObj = JSON.parse(response);
                console.log(responseObj);
            } else {
                console.log(xhr.responseText);
            }

            // if (xhr.status === 500) {
            //     // do something
            // }
            // if(xhr.status === 402) {
            //     // redirect to authorization page
            // }
            //....
        }

        xhr.open('GET', 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json')
        xhr.send();
    });