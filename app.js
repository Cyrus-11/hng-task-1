const express = require("express");
const app = express();
const port = 3000;

app.get("/endpoint", (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    //get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[new Date().getDay()];
    //get current UTC time
    const currentDate = new Date();
    const currentUTCTime = currentDate.toISOString();

    if(!slack_name || !track){
        return res.status(400).json ({error: "Both parameters are required"});
    }
    res.send({   
            "slack_name": slack_name,
            "current_day": currentDayOfWeek,
            "utc_time": currentUTCTime,
            "track": track,
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": "https://github.com/username/repo",
            "status_code": 200
    }) 
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});