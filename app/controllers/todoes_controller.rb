class TodoesController < ApplicationController
  def index
  end
  def new
    @todo = Todo.new
  end
end
