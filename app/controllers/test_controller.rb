class TestController < ApplicationController
  def view 
    # binding.pry
    render json: {msg: 'hi'}
  end 
end 