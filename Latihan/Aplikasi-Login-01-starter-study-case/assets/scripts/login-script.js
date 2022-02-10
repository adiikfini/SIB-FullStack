/**
 * /*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 *
 * @format
 */
/* Comment : Membuat variabel untuk setiap elemen view. */
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

/* Comment : Membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener("submit", function (event) {
	event.preventDefault();
	/* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan. */
	const email = inputEmailElement.value;
	const pass = inputPasswordElement.value;
	/* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
	if (email == expectedEmail && pass == expectedPassword) {
		goToHome(); /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
	} else {
		showPopUp(); /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
	}
});
