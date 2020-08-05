const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/budget-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});