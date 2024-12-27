const express = require("express");
const app = express();
function isSmallEnjoughMiddleware(req, res, next) {
	const age = req.query.age;
	if (age >= 5) {
		next();
	} else {
		res.json({
			msg: "Sorry  are not of age yet",
		});
	}
}
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

app.use(isSmallEnjoughMiddleware);
app.get("/ride2", function (req, res) {
	res.json({
		msg: "you have successfully riden the ride ",
	});
});
app.use(isOldEnjoughMiddleware);

app.get("/ride1", function (req, res) {
	res.json({
		msg: "you have successfully riden the ride ",
	});
});
app.listen(3000);
