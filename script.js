const btnElm = document.getElementById("btn");
const brdElm = document.getElementById("birthday");
const resultElm = document.getElementById("result");

btnElm.addEventListener("click", calulateAge);
 
function calulateAge()
{
    // console.log("clicked")
    const birthdayValue=brdElm.value;
      if(birthdayValue==="")
      {
        alert("Enter your birth date");
      }
      else{
      const age =getAge(birthdayValue);
      console.log(age);
      resultElm.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}  old`
      }
}
function getAge(birthdayValue) {
  const currenDate = new Date();
  const birthDate = new Date(birthdayValue);

  let age = currenDate.getFullYear() - birthDate.getFullYear();
  const month = currenDate.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && currenDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

