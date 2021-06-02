import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BurgersService{
  async getAll(){
    let burgers = await dbContext.Burgers.find({})
    return burgers
  }

  async getOne(query){
    let burger = await dbContext.Burgers.findOne(query)
    if(!burger){
      throw new BadRequest('Invalid ID')
    }
    return burger
  }

  async create(body){
    let newBurger = await dbContext.Burgers.create(body)
    return newBurger
  }

  async edit(update){
    let data = await dbContext.Burgers.findOneAndUpdate({_id: update.id},update, {new: true})
    if(!data){
      throw new BadRequest('Invalid ID')
    }
    return data
  }

  async delete(id){
    let data = await dbContext.Burgers.findByIdAndRemove({_id: id})
    if(!data){
      throw new BadRequest('Invalid ID')
    } 
  }
}

export const burgersService = new BurgersService()