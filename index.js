const express = require("express");
const app = express();
function isOldEnjoughMiddleware(req, res, next) {
	const age = req.query.age;
	if (age >= 14) {
		next();
	} else {
		res.json({
			msg: "Sorry you are not of age yet",
		});
	}
}

app.get("/ride1", isOldEnjoughMiddleware, function (req, res) {
	res.json({
		msg: "you have successfully riden the ride ",
	});
});
app.get("/ride2", isOldEnjoughMiddleware, function (req, res) {
	res.json({
		msg: "you have successfully riden the ride ",
	});
});
app.listen(3000);
