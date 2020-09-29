const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (request, respond) => {
        respond.sendFile(path.join(__dirname, "client/build", "index.html"));
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log(`Server running on port ${port}`);
})

app.get("./service-worker.js", (request, respond) => {
    respond.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
})

// Payment route
app.post("/payment", (request, respond) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: "usd"
    }

    stripe.charges.create(body, (stripeError, stripeRespond) => {
        if (stripeError) {
            respond.status(500).send({ error: stripeError });
        } else {
            respond.status(200).send({ success: stripeRespond });
        }
    })
})