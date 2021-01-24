(function() {
	let personProfile = {
		firstName: "",
 		lastName: "",
 		birthYear: "",
 		job: "",
 		age: 0,
 		elgblty: false,
		familyMembers: [],
		numberOfFamily: "", 
 		weight: "",
		height: "",
		bmi: 0.0, 
 		calculateAge: function() {	 this.age = new Date().getFullYear() - this.birthYear	 },
 		checkVote: function() {		this.elgblty = this.age > 18 ? true : false		},
		calculateBMI: function() {	this.bmi = parseFloat(this.weight) / (parseFloat(this.height) * parseFloat(this.height))	}
	};

	
	// taking input
	personProfile.firstName = prompt("What is your first name?")
	personProfile.lastName = prompt("What is your last name?")
	personProfile.birthYear = prompt("What is your birth year?")
	personProfile.job = prompt("What is your job?")
	personProfile.numberOfFamily = prompt("How many family members do you have?")
	// receive each family member
	for (   let index = 0; index < parseInt( personProfile.numberOfFamily ); index++  ) {
		personProfile.familyMembers[ index ] = prompt(	"What is the name of your family member?  " + (parseInt( personProfile.numberOfFamily ) - index) + " LEFT!"  )
	}
	personProfile.weight = prompt("What is your weight(kg)?")
	personProfile.height = prompt("What is your height(m)?")
	
	

	// running logic needed for the output
	personProfile.calculateAge();
	personProfile.checkVote();
	personProfile.calculateBMI();
	
	
	// Output - displaying result on console
	console.log("!!!Profile entered!!!");
	console.log("First Name : " + personProfile.firstName)
	console.log("Last Name : " + personProfile.lastName)
	console.log("Age : " + personProfile.age)
	console.log("Job : " + personProfile.job)
	console.log("Vote Eligibilty : " + personProfile.elgblty);
	// displaying each family member
	personProfile.familyMembers.forEach(function(member, index){
		console.log("Family Member " + (index + 1) + " : " + member);
	})
	console.log("BMI : " + personProfile["bmi"]);
})();