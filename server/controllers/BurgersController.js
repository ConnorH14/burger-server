import { burgersService } from "../services/BurgersService"
import BaseController from "../utils/BaseController"
export class BurgersController extends BaseController{
  constructor(){
    super("/api/burgers")
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next){
    try {
      let burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next){
    try {
      let data = await burgersService.getOne({_id: req.params.id})
      return res.send(data)
    } catch (error) {
      next(error)
    }

  }

  async create(req, res, next){
    try {
      let data = await burgersService.create(req.body)
      return res.send(data) 
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next){
    try {
      req.body.id = req.params.id
      let data = await burgersService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      await burgersService.delete(req.params.id)
      return res.send({message: 'Delete Success'})
    } catch (error) {
      next(error)
    }

  }
}