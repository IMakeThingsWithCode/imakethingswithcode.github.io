function update() {
	write_to = document.getElementById("yes_or_no");
	yes_box = document.getElementById("yes");
	no_box = document.getElementById("no");

	if (yes_box.checked) {
		write("You picked: Yes", write_to)
	}
	if (no_box.checked) {
		write("You picked: No", write_to)
	}
	if (yes_box.checked && no_box.checked) {
		write("You picked: Both!", write_to)
	}
	if (yes_box.checked == false && no_box.checked == false) {
		write("You picked: Nothing!", write_to);
	}
}

function write(text, obj) {
	obj.textContent = text;
}