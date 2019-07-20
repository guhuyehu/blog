const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async report() {
    
    await this.ctx.render('report.html');
    
  }

  async getlist() {
    let list = await this.service.list.getlist();
    this.ctx.body = list;
  }

  async postList() {
    let list = await this.service.list.getlist();
    this.ctx.body = list;
    let xhr = new XMLHttpRequest();
    xhr.open("post","this.config.api+'posts'");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(this.ctx.body);
  }
}

module.exports = HomeController;
