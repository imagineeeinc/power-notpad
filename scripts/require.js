const { dialog } = require('electron').remote
const { BrowserWindow } = require("electron");
const { app } = require("electron");
const { remote } = require('electron')
const { shell } = require('electron')
win = remote.getCurrentWindow()
const contents = win.webContents
var ipc = require('electron').ipcRenderer

fs = require('fs');
var request = require('request');

var find = document.getElementById("find")
var replace = document.getElementById("replace")
var text = document.getElementById("textbox")
var textmenu = document.getElementById("textmenu")

var modal = document.getElementById("Modal");
var mtext = document.getElementById("m-txt");

var close = document.getElementsByClassName("close-m")[0];
var fsize = document.getElementById("font-size")