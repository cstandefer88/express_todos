function Item (object) {
  this.task = object.task;
  Item.all.push(this);
}


Item.all = [{task: 'Drink'}, {task: 'Smoke'}, {task: 'Sleep'}, {task: 'Eat'}];





module.exports = Item;
