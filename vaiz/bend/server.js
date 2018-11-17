var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var Quote = require('./quote');
var Quotations =require('./quotations');
var Invoices = require ('./invo');
const nodemailer = require('nodemailer'); 
var Purchaseorder=require('./purchaseorder');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

mongoose.connect('mongodb://13.233.14.111:27017/VaizFreight');

router.route('/quotes').get(function (req, res) {
    Quote.find(function (err, quotes) {
        if (err) {
            res.send(err);
        }
        res.send(quotes);
    });
});

router.route('/quotes').get(function (req, res) {
    Purchaseorder.find(function (err,quotes ) {
        if (err) {
            res.send(err);
        }
        res.send(quotes);
    });
});
router.route('/quotes/:id').get(function (req, res) {

    Quote.findById(req.params.id, function (err, po) {
        if (err)
            res.send(err);
       else{
        res.json(po);
       } 
    });
});
router.route('/invoices').get(function (req, res) {
    Invoices.find(function (err, invoices) {
        if (err) {
            res.send(err);
        }
        res.send(invoices);
    });
});
router.route('/quotes/:id').get(function (req, res) {

 Quote.findById(req.params.id, function (err, quote) {
        if (err)
            res.send(err);
       else{
        res.json(quote);
       } 
    });
});
router.route('/quotes/:id').post(function (req, res) {
        Quote.findById(req.params.id, (err, quote) => {
            if (!quote)
                return next(new Error('Could not load document'));
            else {
                
                
                quote.shippingType = req.body.shippingType;
                quote.Country = req.body.Country;
                quote.City = req.body.City;
                quote.State = req.body.State;
                quote.Postal = req.body.Postal;
                quote.departure = req.body.departure;
                quote.country = req.body.country;
                quote.city = req.body.city;
                quote.state = req.body.state;
                quote.postal = req.body.postal;
                quote.arrival = req.body.arrival;
                quote.quantity = req.body.quantity;
                quote.quantityunit = req.body.quantityunit;
                quote.totalweight = req.body.totalweight;
                quote.weightunit = req.body.weightunit;
                quote.length = req.body.length;
                quote.width = req.body.width;
                quote.height = req.body.height;
                quote.units = req.body.units;
                quote.stackable = req.body.stackable;
                quote.hazardous = req.body.hazardous;
                quote.insurance = req.body.insurance;
                quote.incotermsunit = req.body.incotermsunit;
                quote.comment = req.body.comment;
                quote.amount = req.body.amount;
                
                const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.country}</li>
      <li>Company: ${req.body.amount}</li>
      <li>Email: ${req.body.shippingType}</li>
      <li>Phone: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.state}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'likithasubramanyam@gmail.com', // generated ethereal user
        pass: 'liki@12345'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Likithat" <likithasubramanyam@gmail.com>', // sender address
      to: 'likitha.subramanyam@vaizva.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });


                quote.save().then(quote => {
                    res.json('Update done');
                }).catch(err => {
                    res.status(400).send('Update failed');
                });
            }
        } );
    })
    
app.use(cors({ origin: 'http://localhost:4200' })); 
app.use('/', router);
app.listen(port);
console.log('REST API is runnning at ' + port);
    