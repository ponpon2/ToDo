class TodoesController < ApplicationController
  def index
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json { render json: { list: @todo.list, id: @todo.id } }
      end
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json { render json: { id: params[:id] } }
      end
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:list)
  end
end
