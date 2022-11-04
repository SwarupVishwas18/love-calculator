const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0db34d9b9msh736307cf881178ap17b28bjsna3a46a9462be',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};



document.querySelector('#submit').addEventListener('click', function(){
    var fname = document.querySelector('#fname').value;
    var sname = document.querySelector('#sname').value;
    if(fname=='' || sname==''){
        alert('Do not give me Empty Names..!!');
        return;
    }
    if(fname.toLowerCase()=='swarup' || sname.toLowerCase()=='swarup'){
        document.querySelector('#fname-c').textContent = fname;
        document.querySelector('#sname-c').textContent = sname;
        document.querySelector('#per').textContent = '0%';
        var status = '💔';
        document.querySelector('#status').textContent = status;
        document.querySelector('#result').textContent = "He is very busy man.";
        document.querySelector('#modal').style.display = 'flex';
        return;
    }
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
	.then(response => response.json())
	.then(response => {
        document.querySelector('#fname-c').textContent = fname;
        document.querySelector('#sname-c').textContent = sname;
        document.querySelector('#per').textContent = response.percentage;
        if(response.percentage < 50){
            var status = '💔';
        }else{
            var status = '💞';
        }
        document.querySelector('#status').textContent = status;
        document.querySelector('#result').textContent = response.result;
        document.querySelector('#modal').style.display = 'flex';
    })
	.catch(err => console.error(err));
})

document.querySelector('#close-btn').addEventListener('click', function(){
    document.querySelector('#modal').style.display = 'none';
})
