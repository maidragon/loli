import 'isomorphic-fetch'

function randomUserid() {
    let str = "";
    let str2 = "";
    let pos = '';
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    for(let i = 0; i < 32; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    
    str2 = str.substring(0, 8) + '-' + str.substring(8, 12) + '-' + str.substring(12, 16) + '-' + str.substring(16,20) + '-' + str.substring(20,32);
    return str2;
}

async function verify() {
    let userid = randomUserid();

    localStorage.setItem("userid", userid);

    const res = await fetch(`http://loli.vc/login/${userid}`);
    const json = await res.json();
    let token = json.Message.Token;

    localStorage.setItem("token", token);
}

export default verify;