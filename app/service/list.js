'use strict';
const Service = require('egg').Service;
class ListService extends Service {
  async getlist() {
    const method = this.ctx.request.method;
    const data = method === 'GET' ? this.ctx.request.query : this.ctx.request.body;    
      let url = this.config.api+'posts'
      let response= await this.ctx.curl(url,{
        method,
        data,
      });
      let Tdata = JSON.parse(response.data)
      this.ctx.set('x-total-count', response.res.headers['x-total-count'])
      return Tdata;
  }
}

module.exports = ListService;
