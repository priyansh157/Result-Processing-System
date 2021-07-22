


// change editor.ejs to save data and ogpa and view;


// cd ~/code/rps1/repro
const express = require('express');
const app = express();
const ejs = require('ejs');
// const dataRoute = require('./routes/data')
const imp = require('./controller/queries');
const path = require('path')
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(express.json())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	const ob1 = { form : 'partials/demoForm.ejs'};
	res.render('common', { form : 'partials/view.ejs', status:'View Result'});
});

app.get('/index*', (req, res) => {
	res.render('common', { form : 'partials/view.ejs', status:'View Result'});
});

app.get('/view', (req, res) => {
	res.render('common', { form : 'partials/view.ejs', status:'View Result'});
});

app.get('/add', (req, res) => {
	res.render('common', { form : 'partials/add.ejs', status:'Add New Student'});
});

app.get('/edit', (req, res) => {
	res.render('common', { form : 'partials/edit.ejs', status:'Edit Records'});
});

app.get('/scheme', (req, res) => {
	res.render('common', { form : 'partials/scheme.ejs', status:'Get Scheme'});
});


app.get('/forgot', (req, res) => {
	res.render('common', {form : 'partials/forgot.ejs', status: 'Enter Details to get Enrollment No.'})
});


app.post('/add', (req, res) => {
	console.log(req.body);
	imp.addStu(req.body, res);
});

app.post('/forgot', (req, res) => {
	console.log(req.body);
	imp.getEno(req.body.name, req.body.dob, res);
});

app.post('/scheme' , (req, res) => {
	console.log('get');
	if (req.body.opt=='put') imp.upScheme(req.body, res);
	else imp.getScheme(req.body, res);
});

// app.post('/upScheme' , (req, res) => {
// 	console.log('put', req.body);
// 	imp.upScheme(req.body, res);
// });

app.post('/edit', (req, res) =>  {
	console.log(req.body);
	imp.editor(req, res);
});

app.post('/save' , (req, res) => {
	console.log(req.body);
	imp.saver(req,res);
})

app.post('/view' , (req, res) => {
	console.log(req.body);
	imp.answer(req,res);
})


app.listen(3000, ()=>{
	console.log('listening');
});
