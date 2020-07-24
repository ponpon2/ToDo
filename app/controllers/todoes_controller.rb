class TodoesController < ApplicationController
  def index
  end
  def new
    @todo = Todo.new
  end
  def create
    @toto = Todo.create(todo_params)
    respond_to do |format|
      format.json
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:list)
  end
end
