alert("welcome to Registration page");
  function Registration(name,age,gender,email)
  { this.name =name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  let Registration1 = new Registration("Ram",25,"M","ram123@gmail");
  let Registration2 = new Registration("sham",26,"M","sham123@gmail");
  let Registration3 = new Registration("varun",27,"M","varun123@gmail");
  console.log(Registration1);
  console.log(Registration2);
  console.log(Registration3);
