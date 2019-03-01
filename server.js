// *** Dependencies
var express=require("express");

// Sets up the Express App
var app=express();
var PORT=process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");

