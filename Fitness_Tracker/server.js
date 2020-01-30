const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/index.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.get("/api/workouts/:id", (req, res) => {
    db.Workout.find({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.find({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts/:id", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});



app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
app.put("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts/range", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/exercise", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/exercise", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/excercise", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/exercise?", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/exercise?", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/excercise?", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/stats", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/stats", (req, res) => {
    db.Workout.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/stats", ({ body }, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
