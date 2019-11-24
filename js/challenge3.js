$("#ch3form").submit(function() {
	var fruit_checked = false;
	var fruit = $('input[name="fruit"]');

	var standing_checked = false;
	var standing = $('input[name="standing"]');

	fruit.each(function() {
		if(this.checked) {
			console.log("checked");
			fruit_checked = true;
		}
	})

	standing.each(function() {
		if (this.checked) {
			console.log("standing checked");
			standing_checked = true;
		}
	})

	if(fruit_checked && standing_checked)
		return true;
	else {
		if (!standing_checked && !fruit_checked) {
			alert("You must pick a value!");
		}
		else if (!standing_checked && fruit_checked) {
			alert("You must pick a standing!");
		}
		else {
			alert("You must pick a fruit!");
		}
		return false;
	}
})