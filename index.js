import express from "express"
const page = express();
const PORT = 3000;

page.use(express.urlencoded({ extended: true })); 


const users = [];


page.get('/register', (req, res) => {
    res.send(`
        <form action="/register" method="POST">
            <input type="text" name="userId" placeholder="User ID" required /><br>
            <input type="password" name="password" placeholder="Password" required /><br>
            <button type="submit">Register</button>
        </form>
    `);
});


page.post('/register', (req, res) => {
    const { userId, password } = req.body;
    users.push({ userId, password });
    res.send('Registration successful! <a href="/login">Login here</a>');
});


page.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="userId" placeholder="User ID" required /><br>
            <input type="password" name="password" placeholder="Password" required /><br>
            <button type="submit">Login</button>
        </form>
    `);
});


page.post('/login', (req, res) => {
    const { userId, password } = req.body;
    const user = users.find(u => u.userId === userId && u.password === password);
    
    if (user) {
        res.redirect(`/profile?userId=${userId}`);
    } else {
        res.send('Invalid credentials');
    }
});


page.get('/profile', (req, res) => {
    const { userId } = req.query;
    const user = users.find(u => u.userId === userId);

    if (user) {
        res.send(`<h1>Welcome, ${userId}!</h1>`);
    } else {
        res.send('User not found');
    }
});


page.listen(PORT,error => {
    if(error) return console.log(error);
    console.log(`server started on port ${PORT}`);
})
