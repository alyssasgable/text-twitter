const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const configureMiddleware = (app) => {
    app.use(logger('combined'));
	app.use(cors());
	app.use(helmet());
    app.use(express.json());
    // app.use('route_url', route_folder)
}

module.exports =  {
	configureMiddleware
};